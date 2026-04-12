"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const plans = [
  {
    name: "Agent Starter",
    tag: "// STARTER",
    price: "8K",
    period: "/m\u00eas",
    setup: "Setup: R$ 8\u201312K",
    description:
      "Um agente no seu canal principal. Ideal para validar o impacto antes de escalar.",
    features: [
      "1 agente de IA (WhatsApp ou site)",
      "Integra\u00e7\u00e3o com 1 sistema",
      "Base de conhecimento (RAG)",
      "Dashboard b\u00e1sico",
      "Suporte por e-mail",
      "Relat\u00f3rio mensal",
    ],
    cta: "Come\u00e7ar com 1 agente",
    highlight: false,
  },
  {
    name: "Agent Pro",
    tag: "// PRO",
    price: "18K",
    period: "/m\u00eas",
    setup: "Setup: R$ 15\u201330K",
    description:
      "Multi-agente, multi-canal, integra\u00e7\u00e3o completa. O plano que muda a opera\u00e7\u00e3o.",
    features: [
      "At\u00e9 5 agentes de IA",
      "Multi-canal (WhatsApp + site + e-mail)",
      "Integra\u00e7\u00e3o com CRM/ERP",
      "RAG avan\u00e7ado com seus dados",
      "Dashboard completo + alertas",
      "Calls semanais de otimiza\u00e7\u00e3o",
      "Suporte priorit\u00e1rio",
    ],
    cta: "Escalar opera\u00e7\u00e3o",
    highlight: true,
  },
  {
    name: "Agent Enterprise",
    tag: "// ENTERPRISE",
    price: "Sob consulta",
    period: "",
    setup: "Setup: R$ 40\u201380K",
    description:
      "Infra dedicada, modelo custom, SLA garantido. Para quem exige controle total.",
    features: [
      "Agentes ilimitados",
      "Infraestrutura dedicada",
      "Modelo fine-tuned",
      "White-label dispon\u00edvel",
      "SLA com uptime garantido",
      "Account manager dedicado",
      "Treinamento incluso",
    ],
    cta: "Solicitar proposta",
    highlight: false,
  },
];

export function PricingV2() {
  const rootRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const ctx = gsap.context(() => {
      gsap.from("[data-plan]", {
        opacity: 0,
        y: 80,
        duration: 1.1,
        ease: "expo.out",
        stagger: 0.12,
        scrollTrigger: {
          trigger: "[data-plans-grid]",
          start: "top 80%",
        },
      });
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={rootRef}
      id="planos"
      className="relative w-full border-t border-border px-5 py-20 sm:px-8 sm:py-24 lg:px-16 lg:py-32"
    >
      <div className="flex items-center gap-4">
        <span className="h-px w-10 bg-border" />
        <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-text-tertiary">
          Planos
        </span>
      </div>

      <h2
        className="mt-8 font-normal leading-[1] tracking-[-0.025em] text-text-primary sm:mt-10"
        style={{ fontSize: "clamp(2.25rem, 7vw, 4.5rem)" }}
      >
        Investimento previs&iacute;vel.
        <br />
        <span className="text-v2-soft">Retorno mensur&aacute;vel.</span>
      </h2>
      <p className="mt-8 max-w-2xl text-base leading-relaxed text-v2-soft sm:text-lg lg:mt-10 lg:text-xl">
        Todos os planos incluem MINDLOOP Ops, otimiza&ccedil;&atilde;o cont&iacute;nua
        e relat&oacute;rio mensal de ROI. Setup &uacute;nico. Sem taxas ocultas.
      </p>

      <div
        data-plans-grid
        className="mt-12 grid gap-px overflow-hidden border border-border bg-border sm:mt-16 md:grid-cols-3"
      >
        {plans.map((plan) => (
          <div
            key={plan.name}
            data-plan
            className={`flex flex-col p-6 sm:p-8 lg:p-10 ${
              plan.highlight ? "bg-surface" : "bg-bg"
            }`}
          >
            <div className="flex items-center justify-between">
              <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-text-tertiary">
                {plan.tag}
              </p>
              {plan.highlight && (
                <span className="rounded-full bg-accent px-3 py-1 font-mono text-[9px] uppercase tracking-[0.18em] text-accent-foreground">
                  Popular
                </span>
              )}
            </div>

            <h3 className="mt-6 text-xl font-medium text-text-primary lg:text-2xl">
              {plan.name}
            </h3>

            <div className="mt-6 flex items-baseline gap-2">
              <span
                className="font-mono font-light leading-none text-text-primary"
                style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)" }}
              >
                R$ {plan.price}
              </span>
              {plan.period && (
                <span className="font-mono text-sm text-text-tertiary">
                  {plan.period}
                </span>
              )}
            </div>
            <p className="mt-3 font-mono text-xs tracking-[0.12em] text-v2-soft">
              {plan.setup}
            </p>

            <p className="mt-6 text-base leading-relaxed text-v2-soft lg:text-lg">
              {plan.description}
            </p>

            <ul className="mt-8 flex-1 space-y-3">
              {plan.features.map((feature) => (
                <li
                  key={feature}
                  className="flex items-start gap-3 text-base text-v2-soft"
                >
                  <span className="mt-3 h-px w-3 shrink-0 bg-text-tertiary" />
                  {feature}
                </li>
              ))}
            </ul>

            <a
              href="#contato"
              className={`mt-10 flex h-11 items-center justify-center rounded-full font-mono text-[11px] uppercase tracking-[0.18em] transition-colors ${
                plan.highlight
                  ? "bg-accent text-accent-foreground hover:bg-accent-hover"
                  : "border border-border text-text-primary hover:bg-surface"
              }`}
            >
              {plan.cta}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
