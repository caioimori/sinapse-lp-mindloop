"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { MindloopSymbol, MindloopWordmark } from "./brand-mark";

interface PreloaderV3Props {
  onComplete?: () => void;
}

export function PreloaderV3({ onComplete }: PreloaderV3Props) {
  const rootRef = useRef<HTMLDivElement>(null);
  const wipeRef = useRef<HTMLDivElement>(null);
  const barRef = useRef<HTMLDivElement>(null);
  const countRef = useRef<HTMLDivElement>(null);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const root = rootRef.current;
    const bar = barRef.current;
    const count = countRef.current;
    const wipe = wipeRef.current;
    if (!root || !bar || !count || !wipe) return;

    const counter = { value: 0 };
    const tl = gsap.timeline({
      defaults: { ease: "power2.inOut" },
      onComplete: () => {
        setDone(true);
        onComplete?.();
      },
    });

    tl.to(counter, {
      value: 100,
      duration: 2.4,
      ease: "power1.inOut",
      onUpdate: () => {
        count.textContent = String(Math.floor(counter.value)).padStart(3, "0");
      },
    })
      .to(
        bar,
        {
          scaleX: 1,
          duration: 2.4,
          ease: "power1.inOut",
        },
        0
      )
      .to(root, {
        opacity: 0,
        duration: 0.5,
        delay: 0.25,
      })
      .fromTo(
        wipe,
        { scaleY: 1 },
        { scaleY: 0, duration: 1.1, ease: "expo.inOut" },
        "<0.1"
      );

    return () => {
      tl.kill();
    };
  }, [onComplete]);

  if (done) {
    return (
      <div
        ref={wipeRef}
        className="v3-preloader__wipe"
        aria-hidden
        style={{ transform: "scaleY(0)" }}
      />
    );
  }

  return (
    <>
      <div ref={rootRef} className="v3-preloader" aria-hidden>
        <div className="v3-preloader__label">
          <span>MINDLOOP — AGENTES DE IA</span>
          <span>LOADING</span>
        </div>

        <div className="v3-preloader__brand">
          <MindloopSymbol className="v3-preloader__brand-symbol" />
          <MindloopWordmark />
        </div>

        <div ref={countRef} className="v3-preloader__count">
          000
        </div>
        <div className="v3-preloader__bar">
          <div ref={barRef} className="v3-preloader__bar-fill" />
        </div>
      </div>
      <div ref={wipeRef} className="v3-preloader__wipe" aria-hidden />
    </>
  );
}
