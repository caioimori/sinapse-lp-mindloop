"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const casesList = [
  {
    company: "Cl\u00ednica Viva Sa\u00fade",
    vertical: "SA\u00daDE",
    quote:
      "Perd\u00edamos pacientes por demora. Hoje a resposta leva 12 segundos. Dobramos os agendamentos em 60 dias sem contratar ningu\u00e9m.",
    person: "Dra. Carolina Mendes",
    role: "Diretora Cl\u00ednica",
    metrics: [
      { label: "Tempo de resposta", before: "4h", after: "12s" },
      { label: "Agendamentos/m\u00eas", before: "180", after: "340" },
      { label: "Custo por lead", before: "R$ 45", after: "R$ 12" },
    ],
  },
  {
    company: "Advocacia Ribeiro & Associados",
    vertical: "JUR\u00cdDICO",
    quote:
      "Meu time gastava 120 horas por m\u00eas em triagem. Hoje gasta zero. Recuperamos tempo para o que gera receita.",
    person: "Dr. Rafael Ribeiro",
    role: "S\u00f3cio-fundador",
    metrics: [
      { label: "Horas economizadas", before: "\u2014", after: "120h/m\u00eas" },
      { label: "Triagem de docs", before: "Manual", after: "Autom\u00e1tica" },
      { label: "Capacidade", before: "40/m\u00eas", after: "65/m\u00eas" },
    ],
  },
  {
    company: "AgroTech Sul",
    vertical: "AGRONEG\u00d3CIO",
    quote:
      "Decis\u00f5es que dependiam de relat\u00f3rios quinzenais agora s\u00e3o tomadas no mesmo dia. ROI de 340% em 90 dias.",
    person: "M\u00e1rcio Ferreira",
    role: "Diretor Comercial",
    metrics: [
      { label: "Relat\u00f3rio", before: "2 sem", after: "Di\u00e1rio" },
      { label: "Acur\u00e1cia", before: "72%", after: "94%" },
      { label: "ROI 90 dias", before: "\u2014", after: "340%" },
    ],
  },
];

export function CasesV2() {
  const rootRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    const ctx = gsap.context(() => {
      // Case cards reveal
      gsap.from("[data-case]", {
        opacity: 0,
        y: 80,
        duration: 1.2,
        ease: "expo.out",
        stagger: 0.15,
        scrollTrigger: {
          trigger: "[data-cases-list]",
          start: "top 75%",
        },
      });

      // Metric counter feel (scale pop)
      gsap.from("[data-case-metric-value]", {
        opacity: 0,
        scale: 0.85,
        duration: 0.9,
        ease: "expo.out",
        stagger: 0.03,
        scrollTrigger: {
          trigger: "[data-cases-list]",
          start: "top 70%",
        },
      });
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={rootRef}
      id="cases"
      className="relative w-full px-6 py-24 sm:px-10 lg:px-16 lg:py-32"
    >
      <div>
        <div className="flex items-center gap-4">
          <span className="h-px w-10 bg-border" />
          <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-text-tertiary">
            Cases de sucesso
          </span>
        </div>

        <h2
          className="mt-10 font-normal leading-[1] tracking-[-0.025em] text-text-primary"
          style={{ fontSize: "clamp(2rem, 5vw, 4.5rem)" }}
        >
          Agentes assumiram.
          <br />
          <span className="text-v2-soft">Resultados comprovaram.</span>
        </h2>

        <div data-cases-list className="mt-16 space-y-6">
          {casesList.map((item) => (
            <article
              key={item.company}
              data-case
              className="group grid gap-8 border-t border-border py-10 transition-colors hover:bg-surface/30 lg:grid-cols-12 lg:gap-10 lg:py-12"
            >
              <div className="lg:col-span-5">
                <span className="font-mono text-xs uppercase tracking-[0.2em] text-v2-soft">
                  {item.vertical}
                </span>
                <h3 className="mt-3 text-2xl font-medium text-text-primary lg:text-3xl">
                  {item.company}
                </h3>
                <blockquote className="mt-6 max-w-md text-base leading-relaxed text-v2-soft lg:text-lg">
                  &ldquo;{item.quote}&rdquo;
                </blockquote>
                <div className="mt-6">
                  <p className="text-base font-medium text-text-primary">
                    {item.person}
                  </p>
                  <p className="mt-1 font-mono text-xs uppercase tracking-[0.18em] text-v2-soft">
                    {item.role}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-6 lg:col-span-7 lg:gap-8">
                {item.metrics.map((metric) => (
                  <div key={metric.label}>
                    <p className="font-mono text-xs uppercase tracking-[0.18em] text-v2-soft">
                      {metric.label}
                    </p>
                    <p className="mt-4 font-mono text-sm text-text-tertiary line-through decoration-text-tertiary/60">
                      {metric.before}
                    </p>
                    <p
                      data-case-metric-value
                      className="mt-2 font-mono font-light leading-none text-success"
                      style={{ fontSize: "clamp(1.75rem, 3vw, 2.75rem)" }}
                    >
                      {metric.after}
                    </p>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
