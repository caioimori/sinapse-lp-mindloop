export function HeaderV2() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/40 bg-bg/70 backdrop-blur-xl">
      <div className="flex h-16 items-center justify-between px-6 sm:px-10 lg:px-16">
        <a href="#" className="flex items-center gap-2.5">
          <svg
            width="24"
            height="24"
            viewBox="0 0 32 32"
            fill="currentColor"
            className="text-text-primary"
          >
            <path d="M8 4l8 6-8 6V4z" />
            <path d="M24 28l-8-6 8-6v12z" opacity="0.5" />
          </svg>
          <span className="font-mono text-sm font-semibold tracking-[0.2em] text-text-primary">
            MINDLOOP
          </span>
          <span className="ml-2 rounded-full border border-border px-2 py-0.5 font-mono text-[9px] uppercase tracking-[0.2em] text-text-tertiary">
            v2
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {["Servi\u00e7os", "Cases", "Processo", "Planos", "Contato"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")}`}
              className="font-mono text-[10px] uppercase tracking-[0.18em] text-text-secondary hover:text-text-primary transition-colors"
            >
              {item}
            </a>
          ))}
        </nav>

        <a
          href="#contato"
          className="hidden rounded-full bg-accent px-5 py-2 font-mono text-[10px] uppercase tracking-[0.18em] text-accent-foreground hover:bg-accent-hover transition-colors sm:inline-flex"
        >
          Agendar diagn&oacute;stico
        </a>
      </div>
    </header>
  );
}
