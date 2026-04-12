"use client";

import { useEffect, useLayoutEffect, type ReactNode } from "react";
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Sempre começa no topo: desabilita restauração de scroll do browser e
// força scrollTo(0) antes do paint — mesmo quando a URL vem com hash
// (ex.: /v2#contato) ou quando o browser tenta restaurar a posição.
function useForceTopOnMount() {
  useLayoutEffect(() => {
    if (typeof window === "undefined") return;
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
    window.scrollTo(0, 0);
  }, []);
}

export function SmoothScroll({ children }: { children: ReactNode }) {
  useForceTopOnMount();

  useEffect(() => {
    if (typeof window === "undefined") return;

    gsap.registerPlugin(ScrollTrigger);

    // Lenis só em desktop com ponteiro fino. Em touch devices o Lenis
    // não dispara eventos confiáveis, o que faria o ScrollTrigger parar
    // de atualizar (seções, textos e cards ficariam sem animação).
    // Mobile usa scroll nativo e ScrollTrigger funciona normalmente.
    const desktopMQ = window.matchMedia("(min-width: 1024px) and (hover: hover) and (pointer: fine)");
    if (!desktopMQ.matches) {
      // Garante que o ScrollTrigger escute o scroll nativo
      ScrollTrigger.refresh();
      return;
    }

    const lenis = new Lenis({
      duration: 1.25,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    lenis.scrollTo(0, { immediate: true });
    lenis.on("scroll", ScrollTrigger.update);

    const raf = (time: number) => {
      lenis.raf(time * 1000);
    };
    gsap.ticker.add(raf);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(raf);
      lenis.destroy();
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return <>{children}</>;
}
