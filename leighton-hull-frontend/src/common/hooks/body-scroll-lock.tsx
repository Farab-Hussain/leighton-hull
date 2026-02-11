"use client";
import { useEffect, useRef } from "react";

interface BodyScrollLockOptions {
  useClass?: string;
  useFixed?: boolean;
}

export function useBodyScrollLock(open: boolean, delay: number = 0, options?: BodyScrollLockOptions) {
  const scrollYRef = useRef(0);

  useEffect(() => {
    const body = document.body;

    const unlock = () => {
      if (options?.useClass) body.classList.remove(options.useClass);
      if (options?.useFixed !== false) {
        const savedY = Math.abs(parseInt(body.style.top || "0", 10));
        body.style.position = "";
        body.style.top = "";
        body.style.left = "";
        body.style.right = "";
        body.style.width = "";
        body.style.overflow = "";
        window.scrollTo(0, savedY);
      }
    };

    if (open) {
      const doLock = () => {
        if (options?.useClass) {
          body.classList.add(options.useClass);
        } else if (options?.useFixed !== false) {
          scrollYRef.current = window.scrollY;
          body.style.position = "fixed";
          body.style.top = `-${scrollYRef.current}px`;
          body.style.left = "0";
          body.style.right = "0";
          body.style.width = "100%";
          body.style.overflow = "hidden";
        }
      };

      if (delay > 0) {
        const timer = setTimeout(doLock, delay);
        return () => clearTimeout(timer);
      } else {
        doLock();
      }
    }

    return unlock;
  }, [open, delay, options]);
}
