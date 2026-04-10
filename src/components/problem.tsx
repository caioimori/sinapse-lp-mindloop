import { SectionLabel } from "./corner-marks";

export function Problem() {
  return (
    <section className="px-8 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionLabel>O problema</SectionLabel>

        <h2 className="mt-8 max-w-2xl text-[clamp(1.75rem,3.5vw,2.75rem)] font-light leading-[1.15] tracking-tight text-text-primary">
          O mercado de IA no Brasil &eacute; bimodal.
        </h2>
        <p className="mt-6 max-w-lg text-base leading-relaxed text-text-secondary">
          Ou voc&ecirc; paga R$ 700 por um chatbot gen&eacute;rico. Ou R$ 500K+ por uma consultoria enterprise.
          O meio n&atilde;o existe. At&eacute; agora.
        </p>

        <div className="mt-20 grid gap-px overflow-hidden rounded-sm border border-border bg-border md:grid-cols-3">
          {[
            {
              price: "R$ 700 \u2013 1.200",
              priceColor: "text-error",
              name: "Micro-ag\u00eancias",
              desc: "Chatbot b\u00e1sico no WhatsApp. Sem intelig\u00eancia real, sem monitoramento, sem integra\u00e7\u00e3o com seus sistemas.",
            },
            {
              price: "R$ 8K \u2013 50K",
              priceColor: "text-success",
              name: "MINDLOOP",
              desc: "Multi-agente real. RAG com sua base de dados. Monitoramento 24/7. Deploy em semanas. Pre\u00e7o justo.",
              highlight: true,
            },
            {
              price: "R$ 500K+",
              priceColor: "text-warning",
              name: "Consultorias enterprise",
              desc: "6\u201318 meses de projeto. Equipes gigantes. Or\u00e7amento imprevis\u00edvel. Resultado incerto.",
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
