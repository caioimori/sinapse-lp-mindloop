"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRevealOnEnter } from "./use-reveal";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const tiers = [
  {
    index: "01",
    price: "MORADORES",
    tag: "ATENDIMENTO REPETITIVO",
    name: "Perguntas em loop",
    desc: "Dúvidas frequentes ocupam o grupo e interrompem a equipe. A Mindloop organiza respostas para que as pessoas cuidem do que exige contexto.",
    level: "low",
  },
  {
    index: "02",
    price: "SOLICITAÇÕES",
    tag: "SOLICITAÇÕES ORGANIZADAS",
    name: "Solicitações espalhadas",
    desc: "Solicitações, manutenções e avisos podem seguir um fluxo mais claro, conectado aos canais e sistemas que a operação já utiliza.",
    level: "hi",
    highlight: true,
  },
  {
    index: "03",
    price: "DOCUMENTOS",
    tag: "INFORMAÇÃO ACESSÍVEL",
    name: "Atas difíceis de consultar",
    desc: "Atas, contratos e regras do condomínio guardam informações importantes. A IA ajuda a localizar, resumir e organizar esse conhecimento.",
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
            O operacional se repete.
          </span>
        </span>
        <span className="line-wrap block">
          <span data-problem-line className="line-inner">
            A decisão continua{" "}
            <span style={{ color: "var(--cobalt)" }}>humana.</span>
          </span>
        </span>
      </h2>

      <p
        data-problem-copy
        className="mt-10 max-w-2xl text-base leading-relaxed sm:text-lg lg:mt-14 lg:text-xl"
        style={{ color: "var(--text-secondary)" }}
      >
        A inteligência artificial assume tarefas repetitivas, enquanto o síndico
        e a administradora ficam livres para resolver o que exige atenção e
        decisão humana.
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
                Aplicação
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
