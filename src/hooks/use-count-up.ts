"use client";

import { useEffect, useState } from "react";

interface CountUpOptions {
  end: number;
  duration?: number;
  startOnVisible?: boolean;
}

export function useCountUp({ end, duration = 1500, startOnVisible = false }: CountUpOptions) {
  const [count, setCount] = useState(startOnVisible ? 0 : end);
  const [started, setStarted] = useState(!startOnVisible);

  function start() {
    setStarted(true);
  }

  useEffect(() => {
    if (!started) return;

    let startTime: number;
    let raf: number;

    function step(timestamp: number) {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
      setCount(Math.round(eased * end));

      if (progress < 1) {
        raf = requestAnimationFrame(step);
      }
    }

    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [started, end, duration]);

  return { count, start };
}
