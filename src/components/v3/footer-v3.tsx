"use client";

import Link from "next/link";
import { useRef } from "react";
import { useRevealOnEnter } from "./use-reveal";
import { MindloopSymbol, MindloopWordmark } from "./brand-mark";

export function FooterV3() {
  const rootRef = useRef<HTMLElement>(null);

  useRevealOnEnter(rootRef, { selector: "[data-footer-big]", staggerMs: 0 });
  useRevealOnEnter(rootRef, { selector: "[data-footer-col]", staggerMs: 120 });

  return (
    <footer
      ref={rootRef}
      className="relative w-full overflow-hidden px-5 pb-10 pt-24 sm:px-8 sm:pt-32 lg:px-16 lg:pb-12 lg:pt-40"
      style={{
        borderTop: "1px solid var(--border)",
        background: "var(--bg)",
      }}
    >
      <div className="section-label">
        <span className="section-label__bar" />
        <span>Próximo passo</span>
      </div>

      {/* Massive wordmark — Light Logo real */}
      <div className="mt-10 overflow-hidden sm:mt-14">
        <div data-footer-big className="flex items-end gap-3 sm:gap-4 lg:gap-6">
          <MindloopWordmark
            style={{
              color: "var(--text-primary)",
              width: "100%",
              height: "auto",
              maxHeight: "clamp(3.5rem, 18vw, 18rem)",
            }}
          />
          <span
            aria-hidden
            style={{
              color: "var(--cobalt)",
              fontSize: "clamp(3rem, 14vw, 14rem)",
              lineHeight: 0.7,
              fontWeight: 300,
              marginBottom: "0.05em",
            }}
          >
            .
          </span>
        </div>
      </div>

      <div
        className="mt-20 grid gap-12 sm:mt-28 lg:grid-cols-12 lg:gap-16"
        style={{ borderTop: "1px solid var(--border)", paddingTop: "3rem" }}
      >
        <div data-footer-col className="lg:col-span-6">
          <MindloopSymbol
            style={{ color: "var(--cobalt)", height: "32px", width: "auto" }}
          />
          <p
            className="mt-6 max-w-sm text-base leading-relaxed"
            style={{ color: "var(--text-secondary)" }}
          >
            Agentes de IA que operam sua empresa enquanto você dorme.
          </p>

          <a
            href="#contato"
            className="v3-magnet mt-8 inline-flex h-12 items-center gap-3 rounded-none px-7 font-mono text-[10px] uppercase tracking-[0.2em]"
            style={{ background: "var(--cobalt)", color: "#FFFFFF" }}
            data-cursor="cobalt"
          >
            Agendar diagnóstico
            <span className="v3-magnet__icon">→</span>
          </a>
        </div>

        <div data-footer-col className="lg:col-span-3 lg:col-start-8">
          <p
            className="font-mono text-[10px] uppercase tracking-[0.22em]"
            style={{ color: "var(--text-tertiary)" }}
          >
            Navegação
          </p>
          <nav className="mt-5 flex flex-col gap-3">
            {[
              { label: "Serviços", href: "#servicos" },
              { label: "Cases", href: "#cases" },
              { label: "Processo", href: "#processo" },
              { label: "Planos", href: "#planos" },
              { label: "Contato", href: "#contato" },
            ].map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-base"
                style={{ color: "var(--text-secondary)" }}
              >
                <span className="v3-underline">{l.label}</span>
              </a>
            ))}
          </nav>
        </div>

        <div data-footer-col className="lg:col-span-3">
          <p
            className="font-mono text-[10px] uppercase tracking-[0.22em]"
            style={{ color: "var(--text-tertiary)" }}
          >
            Legal
          </p>
          <nav className="mt-5 flex flex-col gap-3">
            <Link
              href="/privacidade"
              className="text-base"
              style={{ color: "var(--text-secondary)" }}
            >
              <span className="v3-underline">Privacidade</span>
            </Link>
            <Link
              href="/termos"
              className="text-base"
              style={{ color: "var(--text-secondary)" }}
            >
              <span className="v3-underline">Termos</span>
            </Link>
            <Link
              href="/lgpd"
              className="text-base"
              style={{ color: "var(--text-secondary)" }}
            >
              <span className="v3-underline">LGPD</span>
            </Link>
          </nav>
        </div>

      </div>

      <div
        className="mt-16 flex flex-col gap-3 pt-8 sm:flex-row sm:items-center sm:justify-between"
        style={{ borderTop: "1px solid var(--border)" }}
      >
        <p
          className="font-mono text-[10px] tracking-[0.15em]"
          style={{ color: "var(--text-tertiary)" }}
        >
          © {new Date().getFullYear()} MINDLOOP LTDA. TODOS OS DIREITOS
          RESERVADOS.
        </p>
        <p
          className="font-mono text-[10px] tracking-[0.15em]"
          style={{ color: "var(--text-tertiary)" }}
        >
          CNPJ 60.533.533/0001-60
        </p>
      </div>
    </footer>
  );
}
