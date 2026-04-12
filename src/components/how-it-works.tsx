import { SectionLabel } from "./corner-marks";

const steps = [
  {
    number: "01",
    title: "Mapeamento",
    description: "Entramos na sua opera\u00e7\u00e3o e identificamos os gargalos. Voc\u00ea recebe um roadmap com ROI projetado antes de investir um real.",
    duration: "1 SEMANA",
  },
  {
    number: "02",
    title: "Constru\u00e7\u00e3o",
    description: "Constru\u00edmos os agentes, conectamos aos seus sistemas e colocamos em opera\u00e7\u00e3o. Sua equipe continua trabalhando. Nenhum dia parado.",
    duration: "2\u20133 SEMANAS",
  },
  {
    number: "03",
    title: "Otimiza\u00e7\u00e3o",
    description: "Monitoramos cada conversa, cada custo, cada resultado. Todo m\u00eas a performance sobe. O custo desce.",
    duration: "CONT\u00cdNUO",
  },
];

export function HowItWorks() {
  return (
    <section id="processo" className="px-8 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionLabel>Processo</SectionLabel>

        <h2 className="mt-8 max-w-xl text-[clamp(1.75rem,3.5vw,2.75rem)] font-normal leading-[1.15] tracking-tight text-text-primary">
          Primeira conversa ao
          <br />
          primeiro agente: 30 dias.
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
