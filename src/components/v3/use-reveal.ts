"use client";

import { useEffect, type RefObject } from "react";

interface RevealOptions {
  selector: string;
  staggerMs?: number;
  threshold?: number;
  rootMargin?: string;
}

export function useRevealOnEnter(
  rootRef: RefObject<HTMLElement | null>,
  options: RevealOptions
) {
  const { selector, staggerMs = 100, threshold = 0.15, rootMargin = "0px 0px -10% 0px" } = options;

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const elements = Array.from(
      root.querySelectorAll<HTMLElement>(selector)
    );
    if (!elements.length) return;

    // Initial state via inline style — does not depend on CSS rules
    elements.forEach((el) => {
      el.style.opacity = "0";
      el.style.transform = "translateY(40px)";
      el.style.transition =
        "opacity 1.1s cubic-bezier(0.16, 1, 0.3, 1), transform 1.1s cubic-bezier(0.16, 1, 0.3, 1)";
      el.style.willChange = "opacity, transform";
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = elements.indexOf(entry.target as HTMLElement);
            window.setTimeout(() => {
              (entry.target as HTMLElement).style.opacity = "1";
              (entry.target as HTMLElement).style.transform = "translateY(0)";
            }, idx >= 0 ? idx * staggerMs : 0);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold, rootMargin }
    );

    elements.forEach((el) => observer.observe(el));

    return () => {
      observer.disconnect();
    };
  }, [rootRef, selector, staggerMs, threshold, rootMargin]);
}
