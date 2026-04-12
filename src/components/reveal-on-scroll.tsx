"use client";

import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import React, { type ReactNode, type CSSProperties } from "react";

type Animation =
  | "fade-up"
  | "fade-down"
  | "fade-left"
  | "fade-right"
  | "fade"
  | "scale-up"
  | "blur-in";

interface RevealOnScrollProps {
  children: ReactNode;
  animation?: Animation;
  delay?: number;
  duration?: number;
  threshold?: number;
  className?: string;
  as?: React.ElementType;
  stagger?: number; // for parent: base delay increment per child index
  index?: number; // child index for stagger calculation
}

export function RevealOnScroll({
  children,
  animation = "fade-up",
  delay = 0,
  duration = 700,
  threshold = 0.15,
  className = "",
  as: Tag = "div",
  stagger = 0,
  index = 0,
}: RevealOnScrollProps) {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>({ threshold });

  const totalDelay = delay + stagger * index;

  const style: CSSProperties = {
    "--reveal-delay": `${totalDelay}ms`,
    "--reveal-duration": `${duration}ms`,
  } as CSSProperties;

  return (
    <Tag
      ref={ref as React.RefObject<never>}
      className={`reveal reveal--${animation} ${isVisible ? "reveal--visible" : ""} ${className}`}
      style={style}
    >
      {children}
    </Tag>
  );
}
