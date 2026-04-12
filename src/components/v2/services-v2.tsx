"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const services = [
  {
    name: "MINDLOOP Agents",
    tag: "// AGENTS",
    index: "01",
    description:
      "Seus clientes recebem resposta em segundos. Dia e noite. Com acesso ao hist\u00f3rico e regras do seu neg\u00f3cio.",
    features: ["WhatsApp nativo", "RAG com seus dados", "Multi-agente"],
  },
  {
    name: "MINDLOOP Ops",
    tag: "// OPS",
    index: "02",
    description:
      "Voc\u00ea abre o dashboard e v\u00ea o que cada agente fez, quanto custou e onde otimizar. Sem caixa-preta.",
    features: ["Dashboard real-time", "Alertas proativos", "Custo por conversa"],
  },
  {
    name: "MINDLOOP Academy",
    tag: "// ACADEMY",
    index: "03",
    description:
      "Seu time aprende a operar os agentes sozinho. Na pr\u00e1tica, com dados reais. Autonomia, n\u00e3o depend\u00eancia.",
    features: ["Workshops in-company", "Hands-on", "ROI mensur\u00e1vel"],
  },
  {
    name: "MINDLOOP Studio",
    tag: "// STUDIO",
    index: "04",
    description:
      "O problema n\u00e3o cabe em produto pronto? Constru\u00edmos sob medida. Integra\u00e7\u00e3o com ERP, CRM e legado.",
    features: ["Projetos custom", "Integra\u00e7\u00e3o APIs", "Automa\u00e7\u00e3o end-to-end"],
  },
];

export function ServicesV2() {
  const rootRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    const ctx = gsap.context(() => {
      gsap.from("[data-service-row]", {
        opacity: 0,
        y: 80,
        duration: 1.1,
        ease: "expo.out",
        stagger: 0.1,
        scrollTrigger: {
          trigger: "[data-services-grid]",
          start: "top 80%",
        },
      });
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={rootRef}
      id="servicos"
      className="relative w-full border-t border-border px-6 py-24 sm:px-10 lg:px-16 lg:py-32"
    >
      <div className="flex items-center gap-4">
        <span className="h-px w-10 bg-border" />
        <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-text-tertiary">
          Servi&ccedil;os
        </span>
      </div>

      <h2
        className="mt-10 font-normal leading-[1] tracking-[-0.025em] text-text-primary"
        style={{ fontSize: "clamp(2rem, 5vw, 4.5rem)" }}
      >
        Atendimento, dados, autonomia.
        <br />
        <span className="text-v2-soft">Tudo integrado.</span>
      </h2>

      <div data-services-grid className="mt-16 border-t border-border">
        {services.map((service, i) => (
          <article
            key={service.name}
            data-service-row
            className={`group grid grid-cols-12 gap-4 py-10 transition-colors hover:bg-surface/30 sm:gap-6 lg:gap-10 lg:py-14 ${
              i < services.length - 1 ? "border-b border-border" : ""
            }`}
          >
            <div className="col-span-12 sm:col-span-1">
              <span className="font-mono text-xs text-text-tertiary">
                {service.index}
              </span>
            </div>

            <div className="col-span-12 sm:col-span-11 lg:col-span-5">
              <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-text-tertiary">
                {service.tag}
              </p>
              <h3
                className="mt-3 font-medium leading-[1] tracking-[-0.02em] text-text-primary"
                style={{ fontSize: "clamp(1.75rem, 3.5vw, 3rem)" }}
              >
                {service.name}
              </h3>
            </div>

            <div className="col-span-12 lg:col-span-6 lg:pt-4">
              <p className="max-w-xl text-base leading-relaxed text-v2-soft lg:text-lg">
                {service.description}
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {service.features.map((feature) => (
                  <span
                    key={feature}
                    className="rounded-full border border-border px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.12em] text-text-tertiary transition-colors group-hover:border-text-tertiary group-hover:text-v2-soft"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
