"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import dynamic from "next/dynamic";

// Unicorn Studio React wrapper — client-only (usa window)
const UnicornScene = dynamic(() => import("unicornstudio-react"), {
  ssr: false,
});

const HERO_PROJECT_ID = "qWfoTjCcHsyOB8VwUHMM";
const HERO_SDK_URL =
  "https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@2.1.6/dist/unicornStudio.umd.js";

export function HeroV2() {
  const rootRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    const ctx = gsap.context(() => {
      const chars = root.querySelectorAll<HTMLElement>("[data-hero-char]");
      const lines = root.querySelectorAll<HTMLElement>("[data-hero-line]");
      const metrics = root.querySelectorAll<HTMLElement>("[data-hero-metric]");
      const scene = root.querySelector<HTMLElement>("[data-hero-scene]");
      const glow = root.querySelector<HTMLElement>("[data-hero-glow]");

      const tl = gsap.timeline({ defaults: { ease: "expo.out" } });

      // Cena entra primeiro, grande e dramática
      if (scene) {
        tl.from(
          scene,
          {
            opacity: 0,
            scale: 0.85,
            duration: 2,
            ease: "expo.out",
          },
          0
        );
      }

      if (glow) {
        tl.from(
          glow,
          { opacity: 0, scale: 0.6, duration: 2.2, ease: "expo.out" },
          0
        );
      }

      tl.from(
        chars,
        {
          opacity: 0,
          yPercent: 110,
          rotateX: -40,
          duration: 1.4,
          stagger: 0.012,
        },
        0.25
      )
        .from(
          lines,
          { opacity: 0, y: 24, duration: 1, stagger: 0.08 },
          0.6
        )
        .from(
          metrics,
          { opacity: 0, y: 40, duration: 1.2, stagger: 0.12 },
          0.9
        );

      // Pulsação sutil contínua no glow
      gsap.to("[data-hero-glow]", {
        opacity: 0.85,
        scale: 1.05,
        duration: 4.5,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
      });

      // Parallax suave no scroll
      gsap.to("[data-hero-scene]", {
        y: 80,
        ease: "none",
        scrollTrigger: {
          trigger: root,
          start: "top top",
          end: "bottom top",
          scrub: 0.8,
        },
      });
    }, root);

    return () => ctx.revert();
  }, []);

  const renderTitle = (line: string) =>
    line.split("").map((ch, i) => (
      <span
        key={`${line}-${i}`}
        data-hero-char
        className="inline-block"
        style={{ willChange: "transform, opacity" }}
      >
        {ch === " " ? "\u00A0" : ch}
      </span>
    ));

  return (
    <section
      ref={rootRef}
      className="relative min-h-[100svh] w-full overflow-hidden pt-16"
      id="top"
    >
      {/* Background — subtle base gradient */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-bg/20 via-transparent to-bg" />
      </div>

      {/* Glow radial atrás da cena — cria halo dramático que vaza da cena */}
      <div
        data-hero-glow
        className="pointer-events-none absolute z-0 hidden lg:block"
        style={{
          top: "-12%",
          right: "-8%",
          width: "min(75vw, 1200px)",
          height: "min(75vw, 1200px)",
          background:
            "radial-gradient(circle at center, rgba(179,168,150,0.24) 0%, rgba(179,168,150,0.11) 28%, rgba(179,168,150,0.04) 55%, transparent 72%)",
          filter: "blur(60px)",
          willChange: "opacity, transform",
        }}
        aria-hidden
      />

      {/* Unicorn Studio scene — grande, dramática, ancorada no topo pra
          criar peso visual sem invadir o bottom band */}
      <div
        data-hero-scene
        className="pointer-events-none absolute z-0 hidden lg:flex lg:items-center lg:justify-center"
        style={{
          top: "3rem",
          left: "46%",
          right: "3rem",
          height: "min(54vh, 620px)",
          willChange: "transform",
        }}
        aria-hidden
      >
        <div
          style={{
            width: "min(54vh, 44vw, 620px)",
            height: "min(54vh, 44vw, 620px)",
          }}
        >
          <UnicornScene
            projectId={HERO_PROJECT_ID}
            width="100%"
            height="100%"
            scale={1}
            dpi={1.5}
            sdkUrl={HERO_SDK_URL}
          />
        </div>
      </div>

      {/* Title — mais espaço no topo agora que a meta row foi removida */}
      <div className="relative mt-20 px-6 sm:mt-24 sm:px-10 lg:mt-28 lg:px-16">
        <h1
          className="relative z-10 font-normal leading-[1] tracking-[-0.025em] text-text-primary"
          style={{
            fontSize: "clamp(2.25rem, 6.5vw, 6rem)",
          }}
        >
          <span className="block" aria-hidden>
            {renderTitle("Escale sua opera\u00e7\u00e3o")}
          </span>
          <span className="block" aria-hidden>
            {renderTitle("sem aumentar")}
          </span>
          <span className="block text-v2-soft" aria-hidden>
            {renderTitle("sua folha.")}
          </span>
          <span className="sr-only">
            Escale sua opera&ccedil;&atilde;o sem aumentar sua folha.
          </span>
        </h1>
      </div>

      {/* Bottom band — copy + CTAs + metrics (sem divider, respiro saudável) */}
      <div className="mt-14 grid gap-12 px-6 pb-20 sm:px-10 lg:mt-20 lg:grid-cols-12 lg:items-center lg:gap-16 lg:px-16 lg:pb-24">
        <div className="relative z-10 lg:col-span-6" data-hero-line>
          <p className="max-w-xl text-lg leading-relaxed text-v2-soft lg:text-xl">
            Enquanto voc&ecirc; dorme, seus agentes atendem, qualificam e fecham.
            Treinados com sua base. Prontos em semanas.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
            <a
              href="#contato"
              className="group inline-flex h-12 items-center rounded-full bg-accent px-8 font-mono text-[11px] uppercase tracking-[0.18em] text-accent-foreground transition-colors hover:bg-accent-hover"
            >
              Agendar diagn&oacute;stico
              <span className="ml-3 transition-transform group-hover:translate-x-1">
                &rarr;
              </span>
            </a>
            <a
              href="#cases"
              className="font-mono text-[11px] uppercase tracking-[0.18em] text-v2-soft hover:text-text-primary transition-colors"
            >
              Ver resultados &rarr;
            </a>
          </div>
        </div>

        <div className="relative z-10 grid grid-cols-3 gap-6 lg:col-span-6 lg:gap-10">
          {[
            { label: "Deploy", value: "2\u20134", unit: "sem" },
            { label: "Redu\u00e7\u00e3o de custo", value: "75", unit: "%" },
            { label: "Opera\u00e7\u00e3o", value: "24/7", unit: "" },
          ].map((m) => (
            <div key={m.label} data-hero-metric>
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-v2-soft">
                {m.label}
              </p>
              <p className="mt-4 font-mono font-light leading-none text-text-primary">
                <span className="text-3xl sm:text-4xl lg:text-5xl">{m.value}</span>
                {m.unit && (
                  <span className="ml-2 text-base text-v2-soft lg:text-xl">
                    {m.unit}
                  </span>
                )}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
