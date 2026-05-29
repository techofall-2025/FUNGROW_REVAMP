import { useState, useEffect } from "react";

interface UseCountUpOptions {
  target: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  startOnMount?: boolean;
}

export function useCountUp(
  target: number,
  options: Omit<UseCountUpOptions, "target"> = {},
  trigger: boolean = true
): string {
  const { duration = 2000, prefix = "", suffix = "", startOnMount = false } = options;
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    // Guard against SSR
    if (typeof window === "undefined") {
      setCount(target);
      return;
    }

    // Check configuration for reduced motions
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mediaQuery.matches) {
      setCount(target);
      return;
    }

    // Delay start if requested and trigger condition isn't satisfied
    if (!trigger && !startOnMount) {
      setCount(0);
      return;
    }

    let startTimestamp: number | null = null;
    let animationFrameId: number;

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      
      // Quadratic ease-out transformation
      const easeProgress = progress * (2 - progress);
      const currentVal = Math.floor(easeProgress * target);
      
      setCount(currentVal);

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(step);
      } else {
        setCount(target);
      }
    };

    animationFrameId = requestAnimationFrame(step);

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [target, duration, trigger, startOnMount]);

  const formattedNumber = count.toLocaleString("en-IN");
  return `${prefix}${formattedNumber}${suffix}`;
}
