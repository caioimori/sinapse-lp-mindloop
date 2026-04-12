import { SectionLabel } from "./corner-marks";

export function Problem() {
  return (
    <section className="px-8 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionLabel>O problema</SectionLabel>

        <h2 className="mt-8 max-w-2xl text-[clamp(1.75rem,3.5vw,2.75rem)] font-normal leading-[1.15] tracking-tight text-text-primary">
          IA barata n&atilde;o funciona.
          <br />
          IA cara demora.
        </h2>
        <p className="mt-6 max-w-lg text-base leading-relaxed text-text-secondary">
          Chatbots de R$&nbsp;700 envergonham sua marca. Consultorias de R$&nbsp;500K levam 18&nbsp;meses. Enquanto isso, seu concorrente j&aacute;&nbsp;automatizou.
        </p>

        <div className="mt-20 grid gap-px overflow-hidden rounded-sm border border-border bg-border md:grid-cols-3">
          {[
            {
              price: "R$ 700 \u2013 1.200",
              priceColor: "text-error",
              name: "Micro-ag\u00eancias",
              desc: "Respostas rob\u00f3ticas. Seu cliente percebe em 5 segundos que n\u00e3o \u00e9 humano. Zero integra\u00e7\u00e3o. Dano \u00e0 marca.",
            },
            {
              price: "R$ 8K \u2013 50K",
              priceColor: "text-success",
              name: "MINDLOOP",
              desc: "Agentes com seus dados. Monitoramento 24/7. Resultado em semanas. Sem or\u00e7amento imprevis\u00edvel.",
              highlight: true,
            },
            {
              price: "R$ 500K+",
              priceColor: "text-warning",
              name: "Consultorias enterprise",
              desc: "Dezenas de reuni\u00f5es. Slides bonitos. 12 meses at\u00e9 o primeiro agente funcionar. Se funcionar.",
            },
          ].map((item) => (
            <div
              key={item.name}
              className={`p-8 ${item.highlight ? "bg-surface" : "bg-bg"}`}
            >
              <p className={`font-mono text-[11px] uppercase tracking-[0.15em] ${item.priceColor}`}>
                {item.price}
              </p>
              <h3 className="mt-4 text-lg font-medium text-text-primary">
                {item.name}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-text-secondary">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
