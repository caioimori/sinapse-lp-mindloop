import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-border px-8 py-16">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-12 md:flex-row md:justify-between">
          <div>
            <svg width="28" height="28" viewBox="0 0 32 32" fill="currentColor" className="text-text-primary">
              <path d="M8 4l8 6-8 6V4z" />
              <path d="M24 28l-8-6 8-6v12z" opacity="0.5" />
            </svg>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-text-secondary">
              Agentes de IA que operam sua empresa enquanto voc&ecirc; dorme.
            </p>
          </div>

          <div className="flex gap-16">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-text-tertiary">
                Navega&ccedil;&atilde;o
              </p>
              <div className="mt-4 flex flex-col gap-3">
                <a href="#servicos" className="text-sm text-text-secondary hover:text-text-primary transition-colors">Servi&ccedil;os</a>
                <a href="#cases" className="text-sm text-text-secondary hover:text-text-primary transition-colors">Cases</a>
                <a href="#planos" className="text-sm text-text-secondary hover:text-text-primary transition-colors">Planos</a>
                <a href="#contato" className="text-sm text-text-secondary hover:text-text-primary transition-colors">Contato</a>
              </div>
            </div>

            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-text-tertiary">
                Legal
              </p>
              <div className="mt-4 flex flex-col gap-3">
                <Link href="/privacidade" className="text-sm text-text-secondary hover:text-text-primary transition-colors">Privacidade</Link>
                <Link href="/termos" className="text-sm text-text-secondary hover:text-text-primary transition-colors">Termos de Uso</Link>
                <Link href="/lgpd" className="text-sm text-text-secondary hover:text-text-primary transition-colors">LGPD</Link>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-3 border-t border-border pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-mono text-[10px] tracking-[0.15em] text-text-tertiary">
            &copy; {new Date().getFullYear()} MINDLOOP LTDA. TODOS OS DIREITOS RESERVADOS.
          </p>
          <p className="font-mono text-[10px] tracking-[0.15em] text-text-tertiary">
            CNPJ 60.533.533/0001-60
          </p>
        </div>
      </div>
    </footer>
  );
}
