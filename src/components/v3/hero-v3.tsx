"use client";

import { useRef } from "react";
import { useRevealOnEnter } from "./use-reveal";
import { MindloopSymbol } from "./brand-mark";

const METRICS = [
  { value: "2–4", unit: "sem", label: "Deploy" },
  { value: "75", unit: "%", label: "Custo a menos" },
  { value: "24/7", unit: "", label: "Operação" },
];

export function HeroV3() {
  const rootRef = useRef<HTMLElement>(null);

  useRevealOnEnter(rootRef, { selector: "[data-hero-line]", staggerMs: 140, threshold: 0.01 });
  useRevealOnEnter(rootRef, { selector: "[data-hero-copy]", staggerMs: 100, threshold: 0.01 });
  useRevealOnEnter(rootRef, { selector: "[data-hero-metric]", staggerMs: 120, threshold: 0.01 });
  useRevealOnEnter(rootRef, { selector: "[data-hero-chapter]", staggerMs: 0, threshold: 0.01 });
  useRevealOnEnter(rootRef, { selector: "[data-hero-scroll-hint]", staggerMs: 0, threshold: 0.01 });

  return (
    <section
      ref={rootRef}
      id="top"
      data-v3-section
      data-theme="dark"
      className="relative flex min-h-[100svh] w-full flex-col overflow-hidden"
    >
      {/* Chapter marker */}
      <div data-hero-chapter className="chapter-marker">
        <span className="chapter-marker__dot" />
        <span>01 / 07 — Início</span>
      </div>

      {/* Base gradient — sem blur filter (cheap) */}
      <div className="hero-glow-base" aria-hidden />

      {/* Brand watermark — símbolo grande estático */}
      <div className="hero-watermark" aria-hidden>
        <MindloopSymbol />
      </div>

      {/* Title — centralizado verticalmente entre header e bottom band */}
      <div className="relative flex flex-1 items-center px-5 pt-28 sm:px-8 sm:pt-32 lg:px-16 lg:pt-36">
        <h1
          className="relative z-10 font-normal leading-[0.92] tracking-[-0.035em]"
          style={{
            fontSize: "clamp(2.5rem, 8vw, 7rem)",
            color: "var(--text-primary)",
          }}
        >
          <span className="line-wrap block" aria-hidden>
            <span data-hero-line className="line-inner">
              Escale sua operação
            </span>
          </span>
          <span className="line-wrap block" aria-hidden>
            <span data-hero-line className="line-inner">
              sem aumentar
            </span>
          </span>
          <span className="line-wrap block" aria-hidden>
            <span data-hero-line className="line-inner inline-block">
              sua folha
              <span style={{ color: "var(--cobalt)" }}>.</span>
            </span>
          </span>
          <span className="sr-only">
            Escale sua operação sem aumentar sua folha.
          </span>
        </h1>
      </div>

      {/* Bottom band */}
      <div className="relative grid gap-12 px-5 pb-20 pt-12 sm:px-8 sm:pb-24 lg:grid-cols-12 lg:items-end lg:gap-16 lg:px-16 lg:pb-28">
        <div className="relative z-10 lg:col-span-6">
          <p
            data-hero-copy
            className="max-w-xl text-base leading-relaxed sm:text-lg lg:text-xl"
            style={{ color: "var(--text-secondary)" }}
          >
            Enquanto você dorme, seus agentes atendem, qualificam e fecham.
            Treinados com sua base. Prontos em semanas.
          </p>

          <div data-hero-copy className="mt-10 lg:mt-12">
            <a
              href="#contato"
              className="v3-magnet group inline-flex h-14 items-center justify-center gap-3 rounded-none px-9 font-mono text-[12px] font-medium uppercase tracking-[0.2em]"
              style={{ background: "var(--cobalt)", color: "#FFFFFF" }}
              data-cursor="cobalt"
            >
              Quero meu diagnóstico
              <span className="v3-magnet__icon">→</span>
            </a>
          </div>
        </div>

        <div
          className="relative z-10 grid grid-cols-3 gap-6 sm:gap-10 lg:col-span-6 lg:gap-14"
        >
          {METRICS.map((m) => (
            <div key={m.label} data-hero-metric className="relative">
              <p
                className="font-mono font-light leading-[0.85]"
                style={{ color: "var(--text-primary)" }}
              >
                <span
                  className="block"
                  style={{
                    fontSize: "clamp(2rem, 4.4vw, 3.75rem)",
                  }}
                >
                  {m.value}
                  {m.unit && (
                    <span
                      className="ml-1"
                      style={{
                        color: "var(--cobalt)",
                        fontSize: "clamp(1rem, 2vw, 1.5rem)",
                      }}
                    >
                      {m.unit}
                    </span>
                  )}
                </span>
              </p>
              <div className="mt-3 flex items-center gap-2">
                <span
                  className="h-px w-5"
                  style={{ background: "var(--cobalt)" }}
                />
                <p
                  className="font-mono text-[10px] font-medium uppercase tracking-[0.22em]"
                  style={{ color: "var(--text-secondary)" }}
                >
                  {m.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll hint */}
      <div
        data-hero-scroll-hint
        className="pointer-events-none absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 flex-col items-center gap-3"
      >
        <span
          className="font-mono text-[9px] uppercase tracking-[0.3em]"
          style={{ color: "var(--text-tertiary)" }}
        >
          Scroll
        </span>
        <span
          className="v3-scroll-hint block h-8 w-px"
          style={{ background: "var(--cobalt)" }}
        />
      </div>
    </section>
  );
}
