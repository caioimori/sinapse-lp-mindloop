"use client";

import { ThemeToggle } from "./theme-toggle";

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-bg/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-8">
        <a href="#" className="flex items-center gap-2.5">
          <svg width="24" height="24" viewBox="0 0 32 32" fill="currentColor" className="text-text-primary">
            <path d="M8 4l8 6-8 6V4z" />
            <path d="M24 28l-8-6 8-6v12z" opacity="0.5" />
          </svg>
          <span className="font-mono text-sm font-semibold tracking-wider text-text-primary">
            MINDLOOP
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {["Servi\u00e7os", "Cases", "Processo", "Planos", "Contato"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")}`}
              className="font-mono text-[11px] uppercase tracking-[0.15em] text-text-secondary hover:text-text-primary transition-colors"
            >
              {item}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <ThemeToggle />
          <a
            href="#contato"
            className="rounded-full bg-accent px-5 py-2 font-mono text-[11px] uppercase tracking-[0.15em] text-accent-foreground hover:bg-accent-hover transition-colors"
          >
            Falar com a gente
          </a>
        </div>
      </div>
    </header>
  );
}
