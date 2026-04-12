import { SectionLabel } from "./corner-marks";

const cases = [
  {
    company: "Cl\u00ednica Viva Sa\u00fade",
    vertical: "SA\u00dade",
    quote: "Perd\u00edamos pacientes por demora. Hoje a resposta leva 12 segundos. Dobramos os agendamentos em 60 dias sem contratar ningu\u00e9m.",
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
    quote: "Meu time gastava 120 horas por m\u00eas em triagem. Hoje gasta zero. Recuperamos tempo para o que gera receita.",
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
    quote: "Decis\u00f5es que dependiam de relat\u00f3rios quinzenais agora s\u00e3o tomadas no mesmo dia. ROI de 340% em 90 dias.",
    person: "M\u00e1rcio Ferreira",
    role: "Diretor Comercial",
    metrics: [
      { label: "Relat\u00f3rio", before: "2 sem", after: "Di\u00e1rio" },
      { label: "Acur\u00e1cia", before: "72%", after: "94%" },
      { label: "ROI 90 dias", before: "\u2014", after: "340%" },
    ],
  },
];

export function Cases() {
  return (
    <section id="cases" className="px-8 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionLabel>Cases de sucesso</SectionLabel>

        <h2 className="mt-8 max-w-xl text-[clamp(1.75rem,3.5vw,2.75rem)] font-normal leading-[1.15] tracking-tight text-text-primary">
          Agentes assumiram.
          <br />
          Resultados comprovaram.
        </h2>

        <div className="mt-20 space-y-6">
          {cases.map((item) => (
            <div
              key={item.company}
              className="rounded-sm border border-border p-8 transition-all hover:border-text-tertiary sm:p-10"
            >
              <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-4">
                    <h3 className="text-lg font-medium text-text-primary">
                      {item.company}
                    </h3>
                    <span className="font-mono text-[10px] tracking-[0.2em] text-text-tertiary">
                      {item.vertical}
                    </span>
                  </div>
                  <blockquote className="mt-6 max-w-md text-sm leading-relaxed text-text-secondary italic">
                    &ldquo;{item.quote}&rdquo;
                  </blockquote>
                  <div className="mt-5">
                    <p className="text-sm font-medium text-text-primary">{item.person}</p>
                    <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-text-tertiary">{item.role}</p>
                  </div>
                </div>

                <div className="grid shrink-0 grid-cols-3 gap-8">
                  {item.metrics.map((metric) => (
                    <div key={metric.label} className="text-center">
                      <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-text-tertiary">
                        {metric.label}
                      </p>
                      <p className="mt-2 font-mono text-[11px] text-text-tertiary line-through decoration-text-tertiary/50">
                        {metric.before}
                      </p>
                      <p className="font-mono text-xl font-medium text-success">
                        {metric.after}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
