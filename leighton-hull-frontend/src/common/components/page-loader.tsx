"use client";
import React, { useEffect, useRef, useState, useCallback } from "react";
import { usePathname } from "next/navigation";
import {
  ANIMATION_STEP_DURATION,
  FIRST_LOAD_MAX_TIME,
  FIRST_LOAD_MIN_TIME,
  SUBSEQUENT_LOAD_MAX_TIME,
  SUBSEQUENT_LOAD_MIN_TIME
} from "../lib/constants";
import { hasPageLoadedBefore, markPageAsLoaded } from "../lib/load-state-manager";
import FullPageAnimation from "./card-for-loading";
import { useBodyScrollLock } from "@/common/hooks/body-scroll-lock";

interface ImageLoadInfo {
  src: string;
  loaded: boolean;
  failed: boolean;
  loadTimeMs?: number;
  element?: HTMLImageElement;
}

export default function SmartImagePreloader() {
  const pathname = usePathname();
  const isHomePage = pathname === "/home";
  const [isVisible, setIsVisible] = useState(true);
  const [activeStep, setActiveStep] = useState(isHomePage ? 0 : 3);
  const [maxTime, setMaxTime] = useState(FIRST_LOAD_MAX_TIME);
  const [minTime, setMinTime] = useState(FIRST_LOAD_MIN_TIME);

  const startTimeRef = useRef(Date.now());
  const imagesRef = useRef<Map<string, ImageLoadInfo>>(new Map());
  const loadedCountRef = useRef(0);
  const totalImagesRef = useRef(0);
  const timeoutIdRef = useRef<NodeJS.Timeout | null>(null);
  const hasShownFullAnimationRef = useRef(false);

  // Check if hero animation was already shown
  useEffect(() => {
    const shown = localStorage.getItem("heroAnimationShown") === "true";
    hasShownFullAnimationRef.current = shown;
    if (!shown && isHomePage) {
      localStorage.setItem("heroAnimationShown", "true");
    }
  }, [isHomePage]);

  // Determine if this page has been loaded before and set appropriate timing
  useEffect(() => {
    const previouslyLoaded = hasPageLoadedBefore(pathname);
    const isFirst = !previouslyLoaded;

    if (isFirst) {
      setMaxTime(FIRST_LOAD_MAX_TIME);
      setMinTime(FIRST_LOAD_MIN_TIME);
    } else {
      setMaxTime(SUBSEQUENT_LOAD_MAX_TIME);
      setMinTime(SUBSEQUENT_LOAD_MIN_TIME);
    }
  }, [pathname]);

  useBodyScrollLock(isVisible, 0, { useClass: "body-lock" });

  // Homepage animation sequence
  useEffect(() => {
    if (!isHomePage) return;
    const interval = setInterval(() => {
      setActiveStep(prev => {
        const next = prev + 1;
        if (next >= 3) clearInterval(interval);
        return Math.min(next, 3);
      });
    }, ANIMATION_STEP_DURATION);

    return () => clearInterval(interval);
  }, [isHomePage]);

  // Preloading images
  const startPreloading = useCallback(() => {
    startTimeRef.current = Date.now();
    loadedCountRef.current = 0;
    imagesRef.current.clear();

    const images = Array.from(document.querySelectorAll("img"));
    totalImagesRef.current = images.length;

    if (totalImagesRef.current === 0 && !isHomePage) {
      finishLoading();
      return;
    }

    images.forEach(img => {
      const src = img.src || img.dataset.src || "";
      if (!src) return;

      const info: ImageLoadInfo = {
        src,
        loaded: img.complete && img.naturalWidth > 0,
        failed: false,
        element: img
      };
      imagesRef.current.set(src, info);

      if (info.loaded) loadedCountRef.current++;
      else preloadImage(img, info);
    });

    if (loadedCountRef.current === totalImagesRef.current && !isHomePage) finishLoading();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isHomePage]);

  const preloadImage = (img: HTMLImageElement, info: ImageLoadInfo) => {
    const startLoadTime = Date.now();
    const onLoad = () => handleImageComplete(img, info, true, startLoadTime);
    const onError = () => handleImageComplete(img, info, false, startLoadTime);
    img.addEventListener("load", onLoad, { once: true });
    img.addEventListener("error", onError, { once: true });
    if (img.tagName === "IMG" && !img.complete) {
      img.loading = "eager";
      if (img.dataset.src) img.src = img.dataset.src;
    }
  };

  const handleImageComplete = (img: HTMLImageElement, info: ImageLoadInfo, success: boolean, startTime: number) => {
    info.loaded = success;
    info.failed = !success;
    info.loadTimeMs = Date.now() - startTime;
    if (!success) replaceWithPlaceholder(img);
    loadedCountRef.current++;
    if (loadedCountRef.current === totalImagesRef.current && !isHomePage) finishLoading();
  };

  const replaceWithPlaceholder = (img: HTMLImageElement) => {
    img.src = img.dataset.placeholder || fallbackPlaceholder;
    img.alt = img.alt || "Image failed to load";
  };

  const finishLoading = useCallback(() => {
    if (timeoutIdRef.current) clearTimeout(timeoutIdRef.current);
    const elapsed = Date.now() - startTimeRef.current;
    const delay = Math.max(minTime - elapsed, 0);
    setTimeout(() => {
      const wrapper = document.getElementById("smart-preloader-wrapper");
      if (wrapper) wrapper.classList.add("slide-up");
      setTimeout(() => {
        setIsVisible(false);
        // Mark this page as loaded after the preloader has finished
        markPageAsLoaded(pathname);
      }, 900);
    }, delay);
  }, [minTime, pathname]);

  const fallbackPlaceholder =
    "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IiNjY2NjY2MiLz48dGV4dCB4PSI1MCUiIHk9IjUwJSIgZm9udC1zaXplPSIxNiIgZmlsbD0iIzk5OTk5OSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPltJbWFnZSBGYWlsZWRdPC90ZXh0Pjwvc3ZnPg==";

  useEffect(() => {
    setIsVisible(true);
    setActiveStep(isHomePage ? (hasShownFullAnimationRef.current ? 3 : 0) : 3);
    startPreloading();
    timeoutIdRef.current = setTimeout(() => finishLoading(), maxTime);
    return () => {
      if (timeoutIdRef.current) {
        clearTimeout(timeoutIdRef.current);
      }
    };
  }, [isHomePage, pathname, startPreloading, maxTime, minTime, finishLoading]);

  if (!isVisible) return null;

  return (
    <div
      id="smart-preloader-wrapper"
      className="fixed inset-0 z-[9999] bg-white transition-transform duration-900 ease-in-out"
      aria-hidden="false"
    >
      <FullPageAnimation activeStep={activeStep} />
    </div>
  );
}
