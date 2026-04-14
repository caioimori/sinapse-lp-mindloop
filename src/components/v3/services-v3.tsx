"use client";

import { useRef, useState } from "react";
import { useRevealOnEnter } from "./use-reveal";

const services = [
  {
    name: "Oráculo",
    tag: "// ORACLE",
    index: "01",
    description:
      "O segundo cérebro da sua empresa. Cada departamento ganha um especialista que sabe tudo — processos, regras, histórico — e responde na hora. Sem depender daquela pessoa que todo mundo pergunta.",
    features: ["Knowledge base viva", "RAG por departamento", "Resposta instantânea"],
  },
  {
    name: "SmartRanch",
    tag: "// VISION",
    index: "02",
    description:
      "Visão computacional aplicada ao seu negócio. Câmeras que entendem o que estão vendo — contagem, monitoramento, alertas, análise comportamental — em tempo real.",
    features: ["Detecção em tempo real", "Análise comportamental", "Alertas inteligentes"],
  },
  {
    name: "OminieMind",
    tag: "// CRM",
    index: "03",
    description:
      "Nosso CRM próprio. Nasceu dentro dos nossos agentes, então já vem com IA em cada etapa do funil. Captação, qualificação, follow-up e fechamento — tudo integrado.",
    features: ["IA nativa", "Pipeline automatizado", "Integração omnichannel"],
  },
  {
    name: "MINDLOOP Academy",
    tag: "// ACADEMY",
    index: "04",
    description:
      "Educação em IA aplicada ao seu negócio. Seu time aprende a operar, treinar e escalar os agentes sozinho — na prática, com dados reais. Autonomia, não dependência.",
    features: ["Workshops in-company", "Hands-on", "ROI mensurável"],
  },
  {
    name: "CAIOaaS",
    tag: "// FOUNDER",
    index: "05",
    description:
      "Caio as a Service. Acesso direto ao fundador para arquitetar ecossistemas de IA, desenhar a estratégia do seu stack e destravar decisões críticas. O cérebro por trás da MINDLOOP operando como extensão do seu time.",
    features: ["Consultoria 1:1", "Arquitetura de IA", "Estratégia executiva"],
  },
];

export function ServicesV3() {
  const rootRef = useRef<HTMLElement>(null);
  const [activeIdx, setActiveIdx] = useState<number | null>(0);

  useRevealOnEnter(rootRef, { selector: "[data-services-line]", staggerMs: 140 });
  useRevealOnEnter(rootRef, { selector: "[data-service-row]", staggerMs: 120 });

  return (
    <section
      ref={rootRef}
      id="servicos"
      data-v3-section
      data-theme="dark"
      className="relative w-full px-5 py-24 sm:px-8 sm:py-32 lg:px-16 lg:py-40"
      style={{ borderTop: "1px solid var(--border)" }}
    >
      <div className="chapter-marker">
        <span className="chapter-marker__dot" />
        <span>03 / 07 — Serviços</span>
      </div>

      <div className="section-label mt-14">
        <span className="section-label__bar" />
        <span>Serviços</span>
      </div>

      <h2
        className="mt-10 font-normal leading-[0.95] tracking-[-0.03em] sm:mt-14"
        style={{
          fontSize: "clamp(2.5rem, 8vw, 6rem)",
          color: "var(--text-primary)",
        }}
      >
        <span className="line-wrap block">
          <span data-services-line className="line-inner">
            Atendimento, dados, autonomia.
          </span>
        </span>
        <span className="line-wrap block">
          <span
            data-services-line
            className="line-inner"
            style={{ color: "var(--text-secondary)" }}
          >
            Tudo integrado.
          </span>
        </span>
      </h2>

      <div
        data-services-grid
        className="mt-16 sm:mt-20"
        style={{ borderTop: "1px solid var(--border)" }}
      >
        {services.map((service, i) => {
          const isActive = activeIdx === i;
          return (
            <article
              key={service.name}
              data-service-row
              onMouseEnter={() => setActiveIdx(i)}
              onClick={() => setActiveIdx(isActive ? null : i)}
              className="group relative grid cursor-pointer grid-cols-12 items-start gap-y-6 overflow-hidden px-4 py-12 transition-all sm:gap-x-6 sm:px-6 sm:py-16 lg:gap-x-12 lg:px-8 lg:py-24"
              style={{
                borderBottom: "1px solid var(--border)",
                background: isActive ? "var(--surface)" : "transparent",
              }}
            >
              {/* Cobalt slide-in from left on active */}
              <span
                className="absolute left-0 top-0 h-full w-[2px] origin-top transition-transform duration-700"
                style={{
                  background: "var(--cobalt)",
                  transform: isActive ? "scaleY(1)" : "scaleY(0)",
                }}
                aria-hidden
              />

              <div className="col-span-2 sm:col-span-1 lg:col-span-1">
                <span
                  className="font-mono text-sm font-medium"
                  style={{
                    color: isActive ? "var(--cobalt)" : "var(--text-secondary)",
                  }}
                >
                  {service.index}
                </span>
              </div>

              <div className="col-span-10 sm:col-span-11 lg:col-span-5">
                <p
                  className="font-mono text-[11px] font-medium uppercase tracking-[0.22em]"
                  style={{ color: "var(--cobalt)" }}
                >
                  {service.tag}
                </p>
                <h3
                  className="mt-4 font-normal leading-[0.98] tracking-[-0.025em] lg:mt-5"
                  style={{
                    fontSize: "clamp(1.85rem, 5vw, 3.5rem)",
                    color: "var(--text-primary)",
                  }}
                >
                  {service.name}
                </h3>
              </div>

              <div
                className="col-span-12 transition-all duration-700 lg:col-span-5 lg:pt-3"
                style={{
                  opacity: isActive ? 1 : 0.6,
                }}
              >
                <p
                  className="max-w-xl text-base leading-[1.7] lg:text-lg"
                  style={{ color: "var(--text-secondary)" }}
                >
                  {service.description}
                </p>
                <div className="mt-7 flex flex-wrap gap-2.5 lg:mt-8">
                  {service.features.map((feature) => (
                    <span
                      key={feature}
                      className="rounded-none px-3.5 py-2 font-mono text-[11px] font-medium uppercase tracking-[0.14em] transition-all"
                      style={{
                        border: `1px solid ${
                          isActive ? "var(--cobalt)" : "var(--border)"
                        }`,
                        color: isActive
                          ? "var(--cobalt)"
                          : "var(--text-secondary)",
                      }}
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>

              {/* Cross icon */}
              <div className="col-span-12 flex items-start justify-end lg:col-span-1 lg:pt-3">
                <span
                  className="relative flex h-10 w-10 items-center justify-center rounded-none transition-transform duration-500"
                  style={{
                    border: `1px solid ${
                      isActive ? "var(--cobalt)" : "var(--border)"
                    }`,
                    transform: isActive ? "rotate(45deg)" : "rotate(0deg)",
                  }}
                >
                  <span
                    className="absolute h-px w-3.5"
                    style={{
                      background: isActive
                        ? "var(--cobalt)"
                        : "var(--text-secondary)",
                    }}
                  />
                  <span
                    className="absolute h-3.5 w-px"
                    style={{
                      background: isActive
                        ? "var(--cobalt)"
                        : "var(--text-secondary)",
                    }}
                  />
                </span>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
