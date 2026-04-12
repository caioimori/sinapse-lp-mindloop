import { SectionLabel } from "./corner-marks";

const plans = [
  {
    name: "Agent Starter",
    tag: "// STARTER",
    price: "8K",
    period: "/m\u00eas",
    setup: "Setup: R$ 8\u201312K",
    description: "Um agente no seu canal principal. Ideal para validar o impacto antes de escalar.",
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
    description: "Multi-agente, multi-canal, integra\u00e7\u00e3o completa. O plano que muda a opera\u00e7\u00e3o.",
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
    description: "Infra dedicada, modelo custom, SLA garantido. Para quem exige controle total.",
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

export function Pricing() {
  return (
    <section id="planos" className="px-8 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionLabel>Planos</SectionLabel>

        <h2 className="mt-8 max-w-xl text-[clamp(1.75rem,3.5vw,2.75rem)] font-normal leading-[1.15] tracking-tight text-text-primary">
          Investimento previs&iacute;vel.
          <br />
          Retorno mensur&aacute;vel.
        </h2>
        <p className="mt-6 max-w-lg text-base leading-relaxed text-text-secondary">
          Todos os planos incluem MINDLOOP Ops, otimiza&ccedil;&atilde;o cont&iacute;nua e relat&oacute;rio mensal de ROI.
          Setup &uacute;nico. Sem taxas ocultas.
        </p>

        <div className="mt-20 grid gap-6 md:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`flex flex-col rounded-sm border p-8 transition-all ${
                plan.highlight
                  ? "border-accent bg-surface"
                  : "border-border hover:border-text-tertiary"
              }`}
            >
              <p className="font-mono text-[10px] tracking-[0.2em] text-text-tertiary">
                {plan.tag}
              </p>

              {plan.highlight && (
                <span className="mt-3 inline-flex w-fit rounded-full bg-accent px-3 py-1 font-mono text-[10px] uppercase tracking-[0.15em] text-accent-foreground">
                  Mais popular
                </span>
              )}

              <h3 className="mt-4 text-lg font-medium text-text-primary">
                {plan.name}
              </h3>
              <div className="mt-3 flex items-baseline gap-1">
                <span className="font-mono text-3xl font-light text-text-primary">
                  R$ {plan.price}
                </span>
                {plan.period && (
                  <span className="font-mono text-xs text-text-tertiary">{plan.period}</span>
                )}
              </div>
              <p className="mt-1 font-mono text-[10px] tracking-[0.1em] text-text-tertiary">
                {plan.setup}
              </p>
              <p className="mt-5 text-sm leading-relaxed text-text-secondary">
                {plan.description}
              </p>

              <ul className="mt-6 flex-1 space-y-2.5">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm text-text-secondary">
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-text-tertiary" />
                    {feature}
                  </li>
                ))}
              </ul>

              <a
                href="#contato"
                className={`mt-8 flex h-11 items-center justify-center rounded-full font-mono text-[11px] uppercase tracking-[0.15em] transition-colors ${
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
      </div>
    </section>
  );
}
