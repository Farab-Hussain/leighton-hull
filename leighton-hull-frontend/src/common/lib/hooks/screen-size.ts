import { useState, useEffect } from "react";

type ScreenSize = {
  width: number;
  height: number;
};

export function useScreenSize(): ScreenSize {
  const [size, setSize] = useState<ScreenSize>({
    width: 0,
    height: 0
  });

  useEffect(() => {
    function handleResize() {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    }

    if (typeof window === "object") {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
      window.addEventListener("resize", handleResize);
    }
    return () => {
      if (typeof window === "object") {
        window.removeEventListener("resize", handleResize);
      }
    };
  }, []);

  return size;
}
