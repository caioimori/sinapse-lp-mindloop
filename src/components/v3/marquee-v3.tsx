"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface MarqueeV3Props {
  items: string[];
  speed?: number;
  reverse?: boolean;
  accent?: boolean;
}

const REPEAT = 4;

export function MarqueeV3({
  items,
  speed = 55,
  reverse = false,
  accent = false,
}: MarqueeV3Props) {
  const trackRef = useRef<HTMLDivElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);
  const [copies] = useState(() => Array.from({ length: REPEAT }, (_, i) => i));

  useEffect(() => {
    const track = trackRef.current;
    const wrap = wrapRef.current;
    if (!track || !wrap) return;

    const distance = track.scrollWidth / REPEAT;

    const tween = reverse
      ? gsap.fromTo(
          track,
          { x: -distance },
          { x: 0, duration: speed, ease: "none", repeat: -1, paused: true }
        )
      : gsap.fromTo(
          track,
          { x: 0 },
          { x: -distance, duration: speed, ease: "none", repeat: -1, paused: true }
        );

    const trigger = ScrollTrigger.create({
      trigger: wrap,
      start: "top 100%",
      end: "bottom 0%",
      onEnter: () => tween.play(),
      onLeave: () => tween.pause(),
      onEnterBack: () => tween.play(),
      onLeaveBack: () => tween.pause(),
    });

    return () => {
      trigger.kill();
      tween.kill();
    };
  }, [speed, reverse]);

  return (
    <div
      ref={wrapRef}
      aria-hidden
      className="relative flex w-full items-center overflow-hidden border-y border-[var(--border)] py-5 sm:py-6 lg:py-7"
    >
      <div
        ref={trackRef}
        className="flex shrink-0 whitespace-nowrap font-mono font-light uppercase"
        style={{
          fontSize: "clamp(0.75rem, 1.4vw, 1.05rem)",
          color: accent ? "var(--cobalt)" : "var(--text-secondary)",
          letterSpacing: "0.04em",
        }}
      >
        {copies.map((copy) =>
          items.map((item, i) => (
            <span
              key={`${copy}-${i}`}
              className="mx-6 flex items-center gap-6 lg:mx-10 lg:gap-10"
            >
              {item}
              <span
                className="inline-block h-1 w-1 rounded-full"
                style={{
                  background: accent ? "var(--text-primary)" : "var(--cobalt)",
                }}
              />
            </span>
          ))
        )}
      </div>

      <div
        className="pointer-events-none absolute inset-y-0 left-0 w-24 sm:w-40"
        style={{
          background:
            "linear-gradient(to right, var(--bg), transparent)",
        }}
      />
      <div
        className="pointer-events-none absolute inset-y-0 right-0 w-24 sm:w-40"
        style={{
          background: "linear-gradient(to left, var(--bg), transparent)",
        }}
      />
    </div>
  );
}
