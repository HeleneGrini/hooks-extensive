import React, { useState, useEffect } from "react";

/**
 *
 * @param size
 * sm: 640px
 * md: 768px
 * lg: 1280px
 */
export const useBreakpoint = (size: "sm" | "md" | "lg") => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const breakpoint = size === "sm" ? 640 : size === "md" ? 768 : 1280;

  useEffect(() => {
    /**
     * Should be throttled or debounced
     *
     * throttle: executed at a set time interval
     * debound: executed a set time after the last event occurred (cool down time. Event must be silent for some time before the function executes )
     */
    const updateScreenWidth = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", updateScreenWidth);
    return () => window.removeEventListener("resize", updateScreenWidth);
  }, []);

  return screenWidth > breakpoint;
};
