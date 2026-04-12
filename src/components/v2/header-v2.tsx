"use client";

import { useEffect, useState } from "react";

const NAV_ITEMS = ["Servi\u00e7os", "Cases", "Processo", "Planos", "Contato"];

function navHref(label: string) {
  return `#${label.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")}`;
}

export function HeaderV2() {
  const [open, setOpen] = useState(false);

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

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/40 bg-bg/70 backdrop-blur-xl">
        <div className="flex h-16 items-center justify-between px-5 sm:px-8 lg:px-16">
          <a href="#top" className="flex items-center gap-2.5">
            <svg
              width="22"
              height="22"
              viewBox="0 0 32 32"
              fill="currentColor"
              className="text-text-primary"
            >
              <path d="M8 4l8 6-8 6V4z" />
              <path d="M24 28l-8-6 8-6v12z" opacity="0.5" />
            </svg>
            <span className="font-mono text-[13px] font-semibold tracking-[0.18em] text-text-primary sm:text-sm sm:tracking-[0.2em]">
              MINDLOOP
            </span>
            <span className="ml-1 rounded-full border border-border px-1.5 py-0.5 font-mono text-[9px] uppercase tracking-[0.2em] text-text-tertiary">
              v2
            </span>
          </a>

          <nav className="hidden items-center gap-8 md:flex">
            {NAV_ITEMS.map((item) => (
              <a
                key={item}
                href={navHref(item)}
                className="font-mono text-[10px] uppercase tracking-[0.18em] text-text-secondary hover:text-text-primary transition-colors"
              >
                {item}
              </a>
            ))}
          </nav>

          <a
            href="#contato"
            className="hidden rounded-full bg-accent px-5 py-2 font-mono text-[10px] uppercase tracking-[0.18em] text-accent-foreground hover:bg-accent-hover transition-colors md:inline-flex"
          >
            Agendar diagn&oacute;stico
          </a>

          {/* Mobile menu trigger */}
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-border md:hidden"
            aria-label="Abrir menu"
          >
            <span className="flex h-3 w-4 flex-col justify-between">
              <span className="h-px w-full bg-text-primary" />
              <span className="h-px w-full bg-text-primary" />
              <span className="h-px w-full bg-text-primary" />
            </span>
          </button>
        </div>
      </header>

      {/* Mobile menu overlay */}
      {open && (
        <div
          className="fixed inset-0 z-[60] flex flex-col bg-bg md:hidden"
          role="dialog"
          aria-modal="true"
        >
          <div className="flex h-16 items-center justify-between border-b border-border/40 px-5">
            <span className="font-mono text-[13px] font-semibold tracking-[0.18em] text-text-primary">
              MINDLOOP
            </span>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border"
              aria-label="Fechar menu"
            >
              <span className="relative flex h-4 w-4 items-center justify-center">
                <span className="absolute h-px w-full rotate-45 bg-text-primary" />
                <span className="absolute h-px w-full -rotate-45 bg-text-primary" />
              </span>
            </button>
          </div>

          <nav className="flex flex-1 flex-col justify-center gap-2 px-6">
            {NAV_ITEMS.map((item, i) => (
              <a
                key={item}
                href={navHref(item)}
                onClick={() => setOpen(false)}
                className="group flex items-baseline gap-5 border-b border-border/40 py-5"
              >
                <span className="font-mono text-xs text-text-tertiary">
                  0{i + 1}
                </span>
                <span
                  className="font-normal leading-[1] tracking-[-0.02em] text-text-primary"
                  style={{ fontSize: "clamp(1.75rem, 7vw, 2.5rem)" }}
                >
                  {item}
                </span>
                <span className="ml-auto text-v2-soft transition-transform group-hover:translate-x-1">
                  &rarr;
                </span>
              </a>
            ))}
          </nav>

          <div className="border-t border-border/40 p-6">
            <a
              href="#contato"
              onClick={() => setOpen(false)}
              className="flex h-12 w-full items-center justify-center rounded-full bg-accent font-mono text-[11px] uppercase tracking-[0.18em] text-accent-foreground"
            >
              Agendar diagn&oacute;stico &rarr;
            </a>
          </div>
        </div>
      )}
    </>
  );
}
