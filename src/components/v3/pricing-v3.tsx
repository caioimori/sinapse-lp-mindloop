"use client";

import { useRef } from "react";
import { useRevealOnEnter } from "./use-reveal";

const plans = [
  {
    name: "Agent Starter",
    tag: "// STARTER",
    index: "01",
    price: "8K",
    period: "/mês",
    setup: "Setup: R$ 8–12K",
    description:
      "Um agente no seu canal principal. Ideal para validar o impacto antes de escalar.",
    features: [
      "1 agente de IA (WhatsApp ou site)",
      "Integração com 1 sistema",
      "Base de conhecimento (RAG)",
      "Dashboard básico",
      "Suporte por e-mail",
      "Relatório mensal",
    ],
    cta: "Começar com 1 agente",
    highlight: false,
  },
  {
    name: "Agent Pro",
    tag: "// PRO",
    index: "02",
    price: "18K",
    period: "/mês",
    setup: "Setup: R$ 15–30K",
    description:
      "Multi-agente, multi-canal, integração completa. O plano que muda a operação.",
    features: [
      "Até 5 agentes de IA",
      "Multi-canal (WhatsApp + site + e-mail)",
      "Integração com CRM/ERP",
      "RAG avançado com seus dados",
      "Dashboard completo + alertas",
      "Calls semanais de otimização",
      "Suporte prioritário",
    ],
    cta: "Escalar operação",
    highlight: true,
  },
  {
    name: "Agent Enterprise",
    tag: "// ENTERPRISE",
    index: "03",
    price: "Sob consulta",
    period: "",
    setup: "Setup: R$ 40–80K",
    description:
      "Infra dedicada, modelo custom, SLA garantido. Para quem exige controle total.",
    features: [
      "Agentes ilimitados",
      "Infraestrutura dedicada",
      "Modelo fine-tuned",
      "White-label disponível",
      "SLA com uptime garantido",
      "Account manager dedicado",
      "Treinamento incluso",
    ],
    cta: "Solicitar proposta",
    highlight: false,
  },
];

export function PricingV3() {
  const rootRef = useRef<HTMLElement>(null);

  useRevealOnEnter(rootRef, { selector: "[data-pricing-line]", staggerMs: 140 });
  useRevealOnEnter(rootRef, { selector: "[data-plan]", staggerMs: 150 });

  return (
    <section
      ref={rootRef}
      id="planos"
      data-v3-section
      data-theme="dark"
      className="relative w-full px-5 py-24 sm:px-8 sm:py-32 lg:px-16 lg:py-40"
      style={{ borderTop: "1px solid var(--border)" }}
    >
      <div className="chapter-marker">
        <span className="chapter-marker__dot" />
        <span>06 / 07 — Planos</span>
      </div>

      <div className="section-label mt-14">
        <span className="section-label__bar" />
        <span>Planos</span>
      </div>

      <h2
        className="mt-10 font-normal leading-[0.95] tracking-[-0.03em] sm:mt-14"
        style={{
          fontSize: "clamp(2.5rem, 8vw, 6rem)",
          color: "var(--text-primary)",
        }}
      >
        <span className="line-wrap block">
          <span data-pricing-line className="line-inner">
            Investimento previsível.
          </span>
        </span>
        <span className="line-wrap block">
          <span
            data-pricing-line
            className="line-inner"
            style={{ color: "var(--text-secondary)" }}
          >
            Retorno mensurável.
          </span>
        </span>
      </h2>

      <p
        className="mt-10 max-w-2xl text-base leading-relaxed sm:text-lg lg:mt-14 lg:text-xl"
        style={{ color: "var(--text-secondary)" }}
      >
        Todos os planos incluem dashboard operacional, otimização contínua e relatório
        mensal de ROI. Setup único. Sem taxas ocultas.
      </p>

      <div
        data-plans-grid
        className="mt-14 grid gap-px overflow-hidden sm:mt-20 md:grid-cols-3"
        style={{
          background: "var(--border)",
          border: "1px solid var(--border)",
        }}
      >
        {plans.map((plan) => (
          <div
            key={plan.name}
            data-plan
            className="relative flex flex-col p-8 sm:p-10 lg:p-12"
            style={{
              background: plan.highlight ? "var(--surface)" : "var(--bg)",
            }}
          >
            {plan.highlight && (
              <span
                className="absolute left-0 top-0 h-full w-[2px]"
                style={{ background: "var(--cobalt)" }}
                aria-hidden
              />
            )}

            <div className="flex items-baseline justify-between">
              <p
                className="font-mono text-[10px] uppercase tracking-[0.22em]"
                style={{
                  color: plan.highlight ? "var(--cobalt)" : "var(--text-tertiary)",
                }}
              >
                {plan.index} — {plan.tag.replace("// ", "")}
              </p>
              {plan.highlight && (
                <span
                  className="rounded-none px-3 py-1 font-mono text-[9px] uppercase tracking-[0.18em]"
                  style={{
                    background: "var(--cobalt)",
                    color: "#FFFFFF",
                  }}
                >
                  Popular
                </span>
              )}
            </div>

            <h3
              className="mt-8 font-normal leading-[1]"
              style={{
                fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
                color: "var(--text-primary)",
              }}
            >
              {plan.name}
            </h3>

            <div className="mt-8 flex items-baseline gap-2">
              <span
                className="font-mono font-light leading-none"
                style={{
                  fontSize: "clamp(2.25rem, 4vw, 3.5rem)",
                  color: plan.highlight ? "var(--cobalt)" : "var(--text-primary)",
                }}
              >
                {plan.price !== "Sob consulta" ? `R$ ${plan.price}` : plan.price}
              </span>
              {plan.period && (
                <span
                  className="font-mono text-sm"
                  style={{ color: "var(--text-tertiary)" }}
                >
                  {plan.period}
                </span>
              )}
            </div>
            <p
              className="mt-3 font-mono text-xs tracking-[0.12em]"
              style={{ color: "var(--text-secondary)" }}
            >
              {plan.setup}
            </p>

            <p
              className="mt-6 text-base leading-relaxed lg:text-lg"
              style={{ color: "var(--text-secondary)" }}
            >
              {plan.description}
            </p>

            <ul className="mt-10 flex-1 space-y-4">
              {plan.features.map((feature) => (
                <li
                  key={feature}
                  className="flex items-start gap-3 text-base"
                  style={{ color: "var(--text-secondary)" }}
                >
                  <span
                    className="mt-3 h-px w-3 shrink-0"
                    style={{ background: "var(--cobalt)" }}
                  />
                  {feature}
                </li>
              ))}
            </ul>

            <a
              href="#contato"
              className="v3-magnet mt-12 flex h-12 items-center justify-center gap-2 rounded-none font-mono text-[11px] uppercase tracking-[0.2em] transition-colors"
              style={
                plan.highlight
                  ? { background: "var(--cobalt)", color: "#FFFFFF" }
                  : {
                      border: "1px solid var(--border)",
                      color: "var(--text-primary)",
                    }
              }
              data-cursor={plan.highlight ? "cobalt" : undefined}
            >
              {plan.cta}
              <span className="v3-magnet__icon">→</span>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
