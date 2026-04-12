"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const tiers = [
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
];

export function ProblemV2() {
  const rootRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const ctx = gsap.context(() => {
      const headline = root.querySelector("[data-problem-headline]");
      if (headline) {
        gsap.from(headline, {
          opacity: 0,
          y: 60,
          duration: 1.2,
          ease: "expo.out",
          scrollTrigger: { trigger: headline, start: "top 85%" },
        });
      }

      gsap.from("[data-problem-tier]", {
        opacity: 0,
        y: 80,
        duration: 1.1,
        ease: "expo.out",
        stagger: 0.12,
        scrollTrigger: {
          trigger: "[data-problem-grid]",
          start: "top 80%",
        },
      });
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={rootRef}
      className="relative w-full border-t border-border px-5 py-20 sm:px-8 sm:py-24 lg:px-16 lg:py-32"
    >
      <div className="flex items-center gap-4">
        <span className="h-px w-10 bg-border" />
        <span className="font-mono text-[10px] font-medium uppercase tracking-[0.22em] text-text-tertiary">
          O problema
        </span>
      </div>

      <h2
        data-problem-headline
        className="mt-8 font-normal leading-[1] tracking-[-0.025em] text-text-primary sm:mt-10"
        style={{ fontSize: "clamp(2.25rem, 7vw, 4.5rem)" }}
      >
        IA barata n&atilde;o funciona.
        <br />
        <span className="text-v2-soft">IA cara demora.</span>
      </h2>

      <p className="mt-8 max-w-2xl text-base leading-relaxed text-v2-soft sm:text-lg lg:mt-10 lg:text-xl">
        Chatbots de R$&nbsp;700 envergonham sua marca. Consultorias de R$&nbsp;500K
        levam 18&nbsp;meses. Enquanto isso, seu concorrente j&aacute; automatizou.
      </p>

      <div
        data-problem-grid
        className="mt-12 grid gap-px overflow-hidden border border-border bg-border sm:mt-16 md:grid-cols-3"
      >
        {tiers.map((item) => (
          <div
            key={item.name}
            data-problem-tier
            className={`relative p-6 sm:p-8 lg:p-10 ${
              item.highlight ? "bg-surface" : "bg-bg"
            }`}
          >
            <p
              className={`font-mono text-[10px] uppercase tracking-[0.2em] ${item.priceColor}`}
            >
              {item.price}
            </p>
            <h3 className="mt-5 text-xl font-medium text-text-primary lg:text-2xl">
              {item.name}
            </h3>
            <p className="mt-4 max-w-sm text-base leading-relaxed text-v2-soft lg:text-lg">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
