"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const steps = [
  {
    number: "01",
    title: "Mapeamento",
    description:
      "Entramos na sua opera\u00e7\u00e3o e identificamos os gargalos. Voc\u00ea recebe um roadmap com ROI projetado antes de investir um real.",
    duration: "1 SEMANA",
  },
  {
    number: "02",
    title: "Constru\u00e7\u00e3o",
    description:
      "Constru\u00edmos os agentes, conectamos aos seus sistemas e colocamos em opera\u00e7\u00e3o. Sua equipe continua trabalhando. Nenhum dia parado.",
    duration: "2\u20133 SEMANAS",
  },
  {
    number: "03",
    title: "Otimiza\u00e7\u00e3o",
    description:
      "Monitoramos cada conversa, cada custo, cada resultado. Todo m\u00eas a performance sobe. O custo desce.",
    duration: "CONT\u00cdNUO",
  },
];

export function HowItWorksV2() {
  const rootRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const ctx = gsap.context(() => {
      // Line draws down with scroll
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

      gsap.from("[data-step]", {
        opacity: 0,
        y: 60,
        duration: 1.1,
        ease: "expo.out",
        stagger: 0.18,
        scrollTrigger: {
          trigger: "[data-timeline]",
          start: "top 75%",
        },
      });
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={rootRef}
      id="processo"
      className="relative w-full border-t border-border px-5 py-20 sm:px-8 sm:py-24 lg:px-16 lg:py-32"
    >
      <div className="flex items-center gap-4">
        <span className="h-px w-10 bg-border" />
        <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-text-tertiary">
          Processo
        </span>
      </div>

      <h2
        className="mt-8 font-normal leading-[1] tracking-[-0.025em] text-text-primary sm:mt-10"
        style={{ fontSize: "clamp(2.25rem, 7vw, 4.5rem)" }}
      >
        Primeira conversa ao
        <br />
        <span className="text-v2-soft">primeiro agente: 30 dias.</span>
      </h2>

      <div data-timeline className="relative mt-12 sm:mt-16 lg:mt-20">
        {/* Vertical line */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 hidden w-px bg-border lg:block">
          <div
            data-timeline-line
            className="absolute inset-0 origin-top bg-text-secondary"
          />
        </div>

        <div className="space-y-12 sm:space-y-16 lg:space-y-24 lg:pl-20">
          {steps.map((step) => (
            <div
              key={step.number}
              data-step
              className="grid gap-3 sm:gap-5 lg:grid-cols-12 lg:gap-8"
            >
              <div className="lg:col-span-3">
                <span
                  className="font-mono font-light leading-none text-text-tertiary"
                  style={{ fontSize: "clamp(2.75rem, 7vw, 4.5rem)" }}
                >
                  {step.number}
                </span>
              </div>

              <div className="lg:col-span-9 lg:pt-3">
                <div className="flex flex-wrap items-center gap-3 sm:gap-4">
                  <h3
                    className="font-medium leading-[1] tracking-[-0.02em] text-text-primary"
                    style={{ fontSize: "clamp(1.75rem, 5vw, 3rem)" }}
                  >
                    {step.title}
                  </h3>
                  <span className="rounded-full border border-border px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.18em] text-text-tertiary sm:text-[11px]">
                    {step.duration}
                  </span>
                </div>
                <p className="mt-5 max-w-xl text-base leading-relaxed text-v2-soft sm:mt-6 lg:text-lg">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
