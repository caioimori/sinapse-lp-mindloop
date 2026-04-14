"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRevealOnEnter } from "./use-reveal";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const tiers = [
  {
    index: "01",
    price: "R$ 700 – 1.200",
    tag: "BARATO DEMAIS",
    name: "Micro-agências",
    desc: "Respostas robóticas. Seu cliente percebe em 5 segundos que não é humano. Zero integração. Dano à marca.",
    level: "low",
  },
  {
    index: "02",
    price: "R$ 8K – 50K",
    tag: "MINDLOOP",
    name: "O ponto certo",
    desc: "Agentes com seus dados. Monitoramento 24/7. Resultado em semanas. Sem orçamento imprevisível.",
    level: "hi",
    highlight: true,
  },
  {
    index: "03",
    price: "R$ 500K+",
    tag: "CARO DEMAIS",
    name: "Consultorias enterprise",
    desc: "Dezenas de reuniões. Slides bonitos. 12 meses até o primeiro agente funcionar. Se funcionar.",
    level: "low",
  },
];

export function ProblemV3() {
  const rootRef = useRef<HTMLElement>(null);

  useRevealOnEnter(rootRef, { selector: "[data-problem-line]", staggerMs: 140 });
  useRevealOnEnter(rootRef, { selector: "[data-problem-copy]", staggerMs: 0 });
  useRevealOnEnter(rootRef, { selector: "[data-problem-tier]", staggerMs: 150 });

  return (
    <section
      ref={rootRef}
      data-v3-section
      data-theme="dark"
      className="relative w-full px-5 py-24 sm:px-8 sm:py-32 lg:px-16 lg:py-40"
      style={{ borderTop: "1px solid var(--border)" }}
    >
      <div className="chapter-marker">
        <span className="chapter-marker__dot" />
        <span>02 / 07 — O problema</span>
      </div>

      <div className="section-label mt-14">
        <span className="section-label__bar" />
        <span>O problema</span>
      </div>

      <h2
        className="mt-10 font-normal leading-[0.95] tracking-[-0.03em] sm:mt-14"
        style={{
          fontSize: "clamp(2.5rem, 8vw, 6rem)",
          color: "var(--text-primary)",
        }}
      >
        <span className="line-wrap block">
          <span data-problem-line className="line-inner">
            IA barata não funciona.
          </span>
        </span>
        <span className="line-wrap block">
          <span data-problem-line className="line-inner">
            IA cara{" "}
            <span style={{ color: "var(--cobalt)" }}>demora.</span>
          </span>
        </span>
      </h2>

      <p
        data-problem-copy
        className="mt-10 max-w-2xl text-base leading-relaxed sm:text-lg lg:mt-14 lg:text-xl"
        style={{ color: "var(--text-secondary)" }}
      >
        Chatbots de R$&nbsp;700 envergonham sua marca. Consultorias de R$&nbsp;500K
        levam 18&nbsp;meses. Enquanto isso, seu concorrente já automatizou.
      </p>

      <div
        data-problem-grid
        className="mt-14 grid gap-px overflow-hidden sm:mt-20 md:grid-cols-3"
        style={{
          background: "var(--border)",
          border: "1px solid var(--border)",
        }}
      >
        {tiers.map((item) => (
          <div
            key={item.name}
            data-problem-tier
            className="group relative flex flex-col p-8 transition-colors sm:p-10 lg:p-12"
            style={{
              background: item.highlight ? "var(--surface)" : "var(--bg)",
            }}
          >
            {item.highlight && (
              <span
                className="absolute left-0 top-0 h-full w-[2px]"
                style={{ background: "var(--cobalt)" }}
                aria-hidden
              />
            )}
            <div className="flex items-baseline justify-between">
              <span
                className="font-mono text-[9px] uppercase tracking-[0.22em]"
                style={{
                  color: item.highlight
                    ? "var(--cobalt)"
                    : "var(--text-tertiary)",
                }}
              >
                {item.index} — {item.tag}
              </span>
              <span
                className="font-mono text-[10px] uppercase tracking-[0.2em]"
                style={{
                  color: item.highlight
                    ? "var(--text-primary)"
                    : item.level === "low"
                    ? "var(--text-tertiary)"
                    : "var(--text-secondary)",
                }}
              >
                {item.price}
              </span>
            </div>

            <h3
              className="mt-10 font-normal leading-[1] tracking-[-0.02em]"
              style={{
                fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
                color: "var(--text-primary)",
              }}
            >
              {item.name}
            </h3>

            <p
              className="mt-6 max-w-sm flex-1 text-base leading-relaxed lg:text-lg"
              style={{ color: "var(--text-secondary)" }}
            >
              {item.desc}
            </p>

            {/* Level bar */}
            <div className="mt-10 flex items-center gap-3">
              <span
                className="font-mono text-[9px] uppercase tracking-[0.22em]"
                style={{ color: "var(--text-tertiary)" }}
              >
                Viável
              </span>
              <div
                className="h-px flex-1"
                style={{ background: "var(--border)" }}
              >
                <div
                  className="h-full"
                  style={{
                    width: item.highlight ? "100%" : "30%",
                    background: item.highlight
                      ? "var(--cobalt)"
                      : "var(--text-tertiary)",
                  }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
