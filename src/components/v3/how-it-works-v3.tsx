"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRevealOnEnter } from "./use-reveal";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const steps = [
  {
    number: "01",
    title: "Mapeamento",
    description:
      "Entramos na sua operação e identificamos os gargalos. Você recebe um roadmap com ROI projetado antes de investir um real.",
    duration: "1 SEMANA",
    deliverables: ["Auditoria de processos", "Roadmap com ROI", "Pontos de automação"],
  },
  {
    number: "02",
    title: "Construção",
    description:
      "Construímos os agentes, conectamos aos seus sistemas e colocamos em operação. Sua equipe continua trabalhando. Nenhum dia parado.",
    duration: "2–3 SEMANAS",
    deliverables: ["Agentes treinados", "Integração com sistemas", "Dashboard de operação"],
  },
  {
    number: "03",
    title: "Otimização",
    description:
      "Monitoramos cada conversa, cada custo, cada resultado. Todo mês a performance sobe. O custo desce.",
    duration: "CONTÍNUO",
    deliverables: ["Monitoramento 24/7", "Relatório mensal", "Call de otimização"],
  },
];

export function HowItWorksV3() {
  const rootRef = useRef<HTMLElement>(null);

  useRevealOnEnter(rootRef, { selector: "[data-how-line]", staggerMs: 140 });
  useRevealOnEnter(rootRef, { selector: "[data-step]", staggerMs: 200 });

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const ctx = gsap.context(() => {
      const line = root.querySelector<HTMLElement>("[data-timeline-line]");
      if (line) {
        gsap.fromTo(
          line,
          { scaleY: 0 },
          {
            scaleY: 1,
            ease: "none",
            scrollTrigger: {
              trigger: "[data-timeline]",
              start: "top 70%",
              end: "bottom 80%",
              scrub: 1,
            },
          }
        );
      }

      const dots = root.querySelectorAll<HTMLElement>("[data-step-dot]");
      dots.forEach((dot) => {
        gsap.to(dot, {
          backgroundColor: "var(--cobalt)",
          scale: 1.4,
          scrollTrigger: {
            trigger: dot,
            start: "top 65%",
            end: "top 50%",
            scrub: false,
            toggleActions: "play none none reverse",
          },
        });
      });

    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={rootRef}
      id="processo"
      data-v3-section
      data-theme="dark"
      className="relative w-full px-5 py-24 sm:px-8 sm:py-32 lg:px-16 lg:py-40"
      style={{ borderTop: "1px solid var(--border)" }}
    >
      <div className="chapter-marker">
        <span className="chapter-marker__dot" />
        <span>05 / 07 — Processo</span>
      </div>

      <div className="section-label mt-14">
        <span className="section-label__bar" />
        <span>Processo</span>
      </div>

      <h2
        className="mt-10 font-normal leading-[0.95] tracking-[-0.03em] sm:mt-14"
        style={{
          fontSize: "clamp(2.5rem, 8vw, 6rem)",
          color: "var(--text-primary)",
        }}
      >
        <span className="line-wrap block">
          <span data-how-line className="line-inner">
            Primeira conversa ao
          </span>
        </span>
        <span className="line-wrap block">
          <span data-how-line className="line-inner">
            primeiro agente:{" "}
            <span style={{ color: "var(--cobalt)" }}>30 dias.</span>
          </span>
        </span>
      </h2>

      <div data-timeline className="relative mt-16 sm:mt-20 lg:mt-28">
        {/* Vertical line */}
        <div
          className="pointer-events-none absolute left-4 top-0 bottom-0 hidden w-px lg:left-8 lg:block"
          style={{ background: "var(--border)" }}
        >
          <div
            data-timeline-line
            className="absolute inset-0 origin-top"
            style={{ background: "var(--cobalt)" }}
          />
        </div>

        <div className="space-y-20 sm:space-y-24 lg:space-y-32 lg:pl-24">
          {steps.map((step) => (
            <div
              key={step.number}
              data-step
              className="relative grid gap-4 sm:gap-6 lg:grid-cols-12 lg:gap-12"
            >
              {/* Dot */}
              <span
                data-step-dot
                className="pointer-events-none absolute -left-[88px] top-3 hidden h-2.5 w-2.5 rounded-full lg:block"
                style={{
                  background: "var(--border)",
                  transformOrigin: "center",
                }}
                aria-hidden
              />

              <div className="lg:col-span-3">
                <span
                  className="font-mono font-light leading-none"
                  style={{
                    fontSize: "clamp(3rem, 8vw, 6rem)",
                    color: "var(--cobalt)",
                  }}
                >
                  {step.number}
                </span>
              </div>

              <div className="lg:col-span-9 lg:pt-4">
                <div className="flex flex-wrap items-center gap-3 sm:gap-4">
                  <h3
                    className="font-normal leading-[1] tracking-[-0.025em]"
                    style={{
                      fontSize: "clamp(2rem, 5vw, 3.25rem)",
                      color: "var(--text-primary)",
                    }}
                  >
                    {step.title}
                  </h3>
                  <span
                    className="rounded-none px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.18em]"
                    style={{
                      border: "1px solid var(--cobalt)",
                      color: "var(--cobalt)",
                    }}
                  >
                    {step.duration}
                  </span>
                </div>
                <p
                  className="mt-6 max-w-xl text-base leading-relaxed sm:mt-8 lg:text-lg"
                  style={{ color: "var(--text-secondary)" }}
                >
                  {step.description}
                </p>
                <ul className="mt-8 flex flex-wrap gap-2">
                  {step.deliverables.map((d) => (
                    <li
                      key={d}
                      className="rounded-none px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.12em]"
                      style={{
                        border: "1px solid var(--border)",
                        color: "var(--text-tertiary)",
                      }}
                    >
                      → {d}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
