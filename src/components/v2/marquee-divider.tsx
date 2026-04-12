"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

interface MarqueeDividerProps {
  items: string[];
  speed?: number;
  reverse?: boolean;
}

// Number of times the full items array is repeated. Guarantees coverage
// even on ultra-wide viewports (3x gives ~300% track width).
const REPEAT = 4;

export function MarqueeDivider({
  items,
  speed = 50,
  reverse = false,
}: MarqueeDividerProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [copies] = useState(() => Array.from({ length: REPEAT }, (_, i) => i));

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    // distance = width of ONE full sequence (track has REPEAT copies)
    const distance = track.scrollWidth / REPEAT;

    const tween = reverse
      ? gsap.fromTo(
          track,
          { x: -distance },
          { x: 0, duration: speed, ease: "none", repeat: -1 }
        )
      : gsap.fromTo(
          track,
          { x: 0 },
          { x: -distance, duration: speed, ease: "none", repeat: -1 }
        );

    return () => {
      tween.kill();
    };
  }, [speed, reverse]);

  return (
    <div
      aria-hidden
      className="relative flex w-full items-center overflow-hidden border-y border-border py-5 sm:py-6 lg:py-7"
    >
      <div
        ref={trackRef}
        className="flex shrink-0 whitespace-nowrap font-mono font-light uppercase tracking-[-0.01em] text-v2-soft"
        style={{ fontSize: "clamp(0.95rem, 2.5vw, 1.5rem)" }}
      >
        {copies.map((copy) =>
          items.map((item, i) => (
            <span
              key={`${copy}-${i}`}
              className="mx-6 flex items-center gap-6 lg:mx-10 lg:gap-10"
            >
              {item}
              <span className="text-text-tertiary">&middot;</span>
            </span>
          ))
        )}
      </div>

      {/* Edge fades — suavizam o loop nas bordas */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-bg to-transparent sm:w-32" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-bg to-transparent sm:w-32" />
    </div>
  );
}
