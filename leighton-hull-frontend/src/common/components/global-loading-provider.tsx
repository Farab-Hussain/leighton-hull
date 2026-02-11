"use client";
import React, { useEffect, useState } from "react";

const loadingObject = {
  startGlobalLoading: () => {},
  stopGlobalLoading: () => {}
};

function GlobalLoadingProvider() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    loadingObject.startGlobalLoading = () => setLoading(true);
    loadingObject.stopGlobalLoading = () => setLoading(false);
  }, []);

  if (!loading) return null;

  return (
    <div
      className="bg-grey40 global-loading-provider fixed top-0 left-0 z-[99999] flex h-screen w-screen items-center justify-center"
      style={{ opacity: 0.9 }}
    >
      <div role="status" className="flex flex-col items-center">
        <div className="border-primary h-16 w-16 animate-spin rounded-full border-4 border-t-transparent"></div>
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
}

export function startGlobalLoading() {
  loadingObject.startGlobalLoading();
}

export function stopGlobalLoading() {
  loadingObject.stopGlobalLoading();
}

export default GlobalLoadingProvider;
