import { SectionLabel } from "./corner-marks";

const services = [
  {
    name: "MINDLOOP Agents",
    tag: "// AGENTS",
    description: "Agentes de IA que atendem, qualificam e convertem no WhatsApp, site e e-mail. Orquestra\u00e7\u00e3o multi-agente real.",
    features: ["WhatsApp nativo", "RAG com seus dados", "Multi-agente"],
  },
  {
    name: "MINDLOOP Ops",
    tag: "// OPS",
    description: "Monitoramento e otimiza\u00e7\u00e3o cont\u00ednua dos seus agentes. Dashboard em tempo real, alertas e relat\u00f3rios de performance.",
    features: ["Dashboard real-time", "Alertas proativos", "Custo por conversa"],
  },
  {
    name: "MINDLOOP Academy",
    tag: "// ACADEMY",
    description: "Treinamento pr\u00e1tico para seu time usar IA no dia a dia. Workshops hands-on, n\u00e3o teoria gen\u00e9rica.",
    features: ["Workshops in-company", "Hands-on", "ROI mensur\u00e1vel"],
  },
  {
    name: "MINDLOOP Studio",
    tag: "// STUDIO",
    description: "Desenvolvimento custom de solu\u00e7\u00f5es com IA. Automa\u00e7\u00e3o de processos, integra\u00e7\u00e3o com sistemas legados, pipelines de dados.",
    features: ["Projetos custom", "Integra\u00e7\u00e3o APIs", "Automa\u00e7\u00e3o end-to-end"],
  },
];

export function Services() {
  return (
    <section id="servicos" className="px-8 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionLabel>Servi&ccedil;os</SectionLabel>

        <h2 className="mt-8 max-w-xl text-[clamp(1.75rem,3.5vw,2.75rem)] font-light leading-[1.15] tracking-tight text-text-primary">
          Tudo sob uma marca.
          <br />
          Tudo integrado.
        </h2>

        <div className="mt-20 grid gap-6 md:grid-cols-2">
          {services.map((service) => (
            <div
              key={service.name}
              className="group relative rounded-sm border border-border p-8 transition-all hover:border-text-tertiary hover:bg-surface"
            >
              <p className="font-mono text-[10px] tracking-[0.2em] text-text-tertiary">
                {service.tag}
              </p>
              <h3 className="mt-4 text-xl font-medium text-text-primary">
                {service.name}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-text-secondary">
                {service.description}
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {service.features.map((feature) => (
                  <span
                    key={feature}
                    className="rounded-sm border border-border bg-bg px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.1em] text-text-tertiary"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
