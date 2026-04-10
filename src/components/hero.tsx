import { CornerMarks } from "./corner-marks";

export function Hero() {
  return (
    <section className="relative min-h-screen px-8 pt-16">
      <CornerMarks className="m-6" />

      <div className="mx-auto flex max-w-6xl flex-col justify-between gap-16 pt-24 lg:flex-row lg:items-start lg:pt-32">
        {/* Left — Main content */}
        <div className="max-w-xl flex-1">
          <h1 className="text-[clamp(2.5rem,6vw,4.5rem)] font-light leading-[1.05] tracking-tight text-text-primary">
            Agentes de IA
            <br />
            que trabalham
            <br />
            por voc&ecirc;.
          </h1>

          <p className="mt-8 max-w-md text-base leading-relaxed text-text-secondary">
            Solu&ccedil;&otilde;es multi-agente produtizadas para empresas brasileiras.
            Deploy em semanas, n&atilde;o meses. Sem pre&ccedil;o enterprise.
          </p>

          <div className="mt-12 flex items-center gap-6">
            <a
              href="#contato"
              className="inline-flex h-12 items-center rounded-full bg-accent px-8 font-mono text-[11px] uppercase tracking-[0.15em] text-accent-foreground hover:bg-accent-hover transition-colors"
            >
              Come&ccedil;ar agora
            </a>
            <a
              href="#processo"
              className="font-mono text-[11px] uppercase tracking-[0.15em] text-text-secondary hover:text-text-primary transition-colors"
            >
              Como funciona &rarr;
            </a>
          </div>
        </div>

        {/* Right — Metadata */}
        <div className="hidden flex-col items-end gap-8 pt-4 lg:flex">
          <div className="text-right">
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-text-tertiary">
              &#9632; Empresa
            </p>
            <p className="mt-1 font-mono text-[12px] font-medium tracking-wider text-text-primary">
              MINDLOOP LTDA
            </p>
          </div>
          <div className="text-right">
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-text-tertiary">
              &#9632; CNPJ
            </p>
            <p className="mt-1 font-mono text-[12px] font-medium tracking-wider text-text-primary">
              60.533.533/0001-60
            </p>
          </div>
          <div className="text-right">
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-text-tertiary">
              &#9632; Contato
            </p>
            <p className="mt-1 font-mono text-[12px] font-medium tracking-wider text-text-primary">
              contato@mindloop.com.br
            </p>
          </div>
          <div className="text-right">
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-text-tertiary">
              &#9632; Local
            </p>
            <p className="mt-1 font-mono text-[12px] font-medium tracking-wider text-text-primary">
              S&Atilde;O PAULO, BR
            </p>
          </div>
        </div>
      </div>

      {/* Bottom metrics */}
      <div className="mx-auto mt-24 max-w-6xl border-t border-border pt-10 pb-16 lg:mt-32">
        <div className="grid grid-cols-3 gap-8">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-text-tertiary">Deploy</p>
            <p className="mt-2 font-mono text-3xl font-light text-text-primary sm:text-4xl">2&ndash;4 <span className="text-lg text-text-secondary">sem</span></p>
          </div>
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-text-tertiary">Redu&ccedil;&atilde;o de custo</p>
            <p className="mt-2 font-mono text-3xl font-light text-text-primary sm:text-4xl">75<span className="text-lg text-text-secondary">%</span></p>
          </div>
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-text-tertiary">Opera&ccedil;&atilde;o</p>
            <p className="mt-2 font-mono text-3xl font-light text-text-primary sm:text-4xl">24/7</p>
          </div>
        </div>
      </div>
    </section>
  );
}
