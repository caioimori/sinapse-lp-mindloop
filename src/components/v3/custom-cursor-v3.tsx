"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export function CustomCursorV3() {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    const desktopMQ = window.matchMedia("(hover: hover) and (pointer: fine)");
    if (!desktopMQ.matches) return;

    const xTo = gsap.quickTo(cursor, "x", { duration: 0.5, ease: "expo.out" });
    const yTo = gsap.quickTo(cursor, "y", { duration: 0.5, ease: "expo.out" });

    const onMove = (e: MouseEvent) => {
      xTo(e.clientX);
      yTo(e.clientY);
    };

    const onEnter = (e: Event) => {
      const target = e.currentTarget as HTMLElement;
      cursor.classList.add("is-hover");
      if (target.dataset.cursor === "cobalt") {
        cursor.classList.add("is-cobalt");
      }
    };

    const onLeave = () => {
      cursor.classList.remove("is-hover");
      cursor.classList.remove("is-cobalt");
    };

    window.addEventListener("mousemove", onMove);

    const interactives = document.querySelectorAll<HTMLElement>(
      "a, button, [role='button'], [data-cursor]"
    );
    interactives.forEach((el) => {
      el.addEventListener("mouseenter", onEnter);
      el.addEventListener("mouseleave", onLeave);
    });

    // Re-attach on DOM mutations (for client-rendered sections)
    const observer = new MutationObserver(() => {
      document
        .querySelectorAll<HTMLElement>("a, button, [role='button'], [data-cursor]")
        .forEach((el) => {
          el.removeEventListener("mouseenter", onEnter);
          el.removeEventListener("mouseleave", onLeave);
          el.addEventListener("mouseenter", onEnter);
          el.addEventListener("mouseleave", onLeave);
        });
    });
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener("mousemove", onMove);
      interactives.forEach((el) => {
        el.removeEventListener("mouseenter", onEnter);
        el.removeEventListener("mouseleave", onLeave);
      });
      observer.disconnect();
    };
  }, []);

  return <div ref={cursorRef} className="v3-cursor" aria-hidden />;
}
