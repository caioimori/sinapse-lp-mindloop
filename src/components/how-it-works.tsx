import { SectionLabel } from "./corner-marks";

const steps = [
  {
    number: "01",
    title: "Discovery",
    description: "Entendemos seu neg\u00f3cio, mapeamos processos e identificamos onde agentes de IA geram mais impacto. Entrega: roadmap com ROI estimado.",
    duration: "1 SEMANA",
  },
  {
    number: "02",
    title: "Build & Deploy",
    description: "Constru\u00edmos, testamos e implantamos seus agentes. Integra\u00e7\u00e3o com WhatsApp, CRM, ERP e sistemas existentes. Sem disruptar sua opera\u00e7\u00e3o.",
    duration: "2\u20133 SEMANAS",
  },
  {
    number: "03",
    title: "Operate & Optimize",
    description: "Monitoramos performance 24/7 via MINDLOOP Ops. Otimiza\u00e7\u00e3o cont\u00ednua baseada em dados reais. Relat\u00f3rio mensal com m\u00e9tricas claras.",
    duration: "CONT\u00cdNUO",
  },
];

export function HowItWorks() {
  return (
    <section id="processo" className="px-8 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionLabel>Processo</SectionLabel>

        <h2 className="mt-8 max-w-xl text-[clamp(1.75rem,3.5vw,2.75rem)] font-light leading-[1.15] tracking-tight text-text-primary">
          Tr&ecirc;s passos.
          <br />
          Sem complica&ccedil;&atilde;o.
        </h2>

        <div className="mt-20 space-y-0">
          {steps.map((step, i) => (
            <div
              key={step.number}
              className={`flex gap-10 py-12 ${i < steps.length - 1 ? "border-b border-border" : ""}`}
            >
              <div className="hidden shrink-0 sm:block">
                <span className="font-mono text-5xl font-light text-border">
                  {step.number}
                </span>
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-4">
                  <h3 className="text-xl font-medium text-text-primary">
                    {step.title}
                  </h3>
                  <span className="font-mono text-[10px] tracking-[0.2em] text-text-tertiary">
                    {step.duration}
                  </span>
                </div>
                <p className="mt-4 max-w-lg text-sm leading-relaxed text-text-secondary">
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
