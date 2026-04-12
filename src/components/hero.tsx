import { CornerMarks } from "./corner-marks";
import { HeroAnimation } from "./hero-animation";

export function Hero() {
  return (
    <section className="relative min-h-screen px-8 pt-16">
      <CornerMarks className="m-6" />

      <div className="mx-auto flex max-w-6xl flex-col justify-between gap-16 pt-24 lg:flex-row lg:items-end lg:pt-32">
        {/* Left — Main content */}
        <div className="max-w-xl flex-1 pb-8">
          <h1 className="text-[clamp(2.5rem,5vw,3.25rem)] font-normal leading-[1.05] tracking-tight text-text-primary">
            Escale sua opera&ccedil;&atilde;o
            <br />
            sem aumentar
            <br />
            sua folha.
          </h1>

          <p className="mt-8 max-w-md text-base leading-relaxed text-text-secondary">
            Enquanto voc&ecirc; dorme, seus agentes atendem, qualificam e fecham.
            Treinados com sua base. Prontos em semanas.
          </p>

          <div className="mt-12 flex items-center gap-6">
            <a
              href="#contato"
              className="inline-flex h-12 items-center rounded-full bg-accent px-8 font-mono text-[11px] uppercase tracking-[0.15em] text-accent-foreground hover:bg-accent-hover transition-colors"
            >
              Agendar diagn&oacute;stico
            </a>
            <a
              href="#cases"
              className="font-mono text-[11px] uppercase tracking-[0.15em] text-text-secondary hover:text-text-primary transition-colors"
            >
              Ver resultados &rarr;
            </a>
          </div>
        </div>

        {/* Right — Agent wireframe animation */}
        <div className="relative hidden w-full max-w-md lg:block" style={{ aspectRatio: "885 / 903" }}>
          <HeroAnimation />
        </div>
      </div>

      {/* Bottom metrics */}
      <div className="mx-auto mt-0 max-w-6xl border-t border-border pt-10 pb-16">
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
