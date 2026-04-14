"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MindloopWordmark } from "./brand-mark";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const NAV_ITEMS: { label: string; href: string; index: string }[] = [
  { label: "Serviços", href: "#servicos", index: "01" },
  { label: "Cases", href: "#cases", index: "02" },
  { label: "Processo", href: "#processo", index: "03" },
  { label: "Planos", href: "#planos", index: "04" },
  { label: "Contato", href: "#contato", index: "05" },
];

export function HeaderV3() {
  const [open, setOpen] = useState(false);
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const bar = progressRef.current;
    if (!bar) return;

    const trigger = ScrollTrigger.create({
      trigger: document.body,
      start: "top top",
      end: "bottom bottom",
      onUpdate: (self) => {
        bar.style.transform = `scaleX(${self.progress})`;
      },
    });

    return () => {
      trigger.kill();
    };
  }, []);

  return (
    <>
      <header
        className="v3-header fixed top-0 left-0 right-0 z-50"
        style={{
          backgroundColor: "rgba(10,10,11,0.92)",
          borderBottom: "1px solid color-mix(in srgb, var(--border) 60%, transparent)",
        }}
      >
        <div className="flex h-20 items-center justify-between px-5 sm:px-8 lg:h-24 lg:px-16">
          <a
            href="#top"
            className="flex items-center gap-3"
            data-cursor="cobalt"
            aria-label="MindLoop — Início"
          >
            <MindloopWordmark
              style={{ color: "var(--text-primary)", height: "22px", width: "auto" }}
            />
            <span
              className="ml-1 rounded-none px-2 py-0.5 font-mono text-[10px] font-medium uppercase tracking-[0.18em]"
              style={{
                border: "1px solid var(--cobalt)",
                color: "var(--cobalt)",
              }}
            >
              v3
            </span>
          </a>

          <nav className="hidden items-center gap-9 md:flex">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="group flex items-baseline gap-2 font-mono text-[11px] font-medium uppercase tracking-[0.2em]"
                style={{ color: "var(--text-primary)" }}
              >
                <span
                  className="text-[9px] font-normal"
                  style={{ color: "var(--cobalt)" }}
                >
                  {item.index}
                </span>
                <span className="v3-underline">{item.label}</span>
              </a>
            ))}
          </nav>

          <a
            href="#contato"
            className="v3-magnet hidden items-center gap-2.5 rounded-none px-6 py-3 font-mono text-[11px] font-medium uppercase tracking-[0.18em] md:inline-flex"
            style={{
              background: "var(--cobalt)",
              color: "#FFFFFF",
            }}
            data-cursor="cobalt"
          >
            Diagnóstico gratuito
            <span className="v3-magnet__icon">→</span>
          </a>

          {/* Mobile trigger */}
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="flex h-10 w-10 items-center justify-center rounded-none md:hidden"
            style={{ border: "1px solid var(--border)" }}
            aria-label="Abrir menu"
          >
            <span className="flex h-3 w-4 flex-col justify-between">
              <span
                className="h-px w-full"
                style={{ background: "var(--text-primary)" }}
              />
              <span
                className="h-px w-full"
                style={{ background: "var(--text-primary)" }}
              />
              <span
                className="h-px w-full"
                style={{ background: "var(--text-primary)" }}
              />
            </span>
          </button>
        </div>

        {/* Progress rail */}
        <div
          className="h-[1px] w-full"
          style={{ background: "color-mix(in srgb, var(--border) 50%, transparent)" }}
        >
          <div
            ref={progressRef}
            className="h-full origin-left will-change-transform"
            style={{
              background: "var(--cobalt)",
              transform: "scaleX(0)",
            }}
          />
        </div>
      </header>

      {/* Mobile menu overlay */}
      {open && (
        <div
          className="fixed inset-0 z-[60] flex flex-col md:hidden"
          role="dialog"
          aria-modal="true"
          style={{ background: "var(--bg)" }}
        >
          <div
            className="flex h-16 items-center justify-between px-5"
            style={{
              borderBottom: "1px solid color-mix(in srgb, var(--border) 60%, transparent)",
            }}
          >
            <MindloopWordmark
              style={{ color: "var(--text-primary)", height: "20px", width: "auto" }}
            />
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="flex h-10 w-10 items-center justify-center rounded-none"
              style={{ border: "1px solid var(--border)" }}
              aria-label="Fechar menu"
            >
              <span className="relative flex h-4 w-4 items-center justify-center">
                <span
                  className="absolute h-px w-full rotate-45"
                  style={{ background: "var(--text-primary)" }}
                />
                <span
                  className="absolute h-px w-full -rotate-45"
                  style={{ background: "var(--text-primary)" }}
                />
              </span>
            </button>
          </div>

          <nav className="flex flex-1 flex-col justify-center gap-0 px-6">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setOpen(false)}
                className="group flex items-baseline gap-5 py-5"
                style={{
                  borderBottom: "1px solid color-mix(in srgb, var(--border) 60%, transparent)",
                }}
              >
                <span
                  className="font-mono text-xs"
                  style={{ color: "var(--cobalt)" }}
                >
                  {item.index}
                </span>
                <span
                  className="font-normal leading-[1] tracking-[-0.02em]"
                  style={{
                    fontSize: "clamp(1.75rem, 7vw, 2.5rem)",
                    color: "var(--text-primary)",
                  }}
                >
                  {item.label}
                </span>
                <span
                  className="ml-auto transition-transform group-hover:translate-x-1"
                  style={{ color: "var(--text-tertiary)" }}
                >
                  →
                </span>
              </a>
            ))}
          </nav>

          <div
            className="p-6"
            style={{
              borderTop: "1px solid color-mix(in srgb, var(--border) 60%, transparent)",
            }}
          >
            <a
              href="#contato"
              onClick={() => setOpen(false)}
              className="flex h-12 w-full items-center justify-center rounded-none font-mono text-[11px] uppercase tracking-[0.2em]"
              style={{ background: "var(--cobalt)", color: "#FFFFFF" }}
            >
              Agendar diagnóstico →
            </a>
          </div>
        </div>
      )}
    </>
  );
}
