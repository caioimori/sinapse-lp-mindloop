import Link from "next/link";

export function LegalLayout({
  title,
  lastUpdated,
  children,
}: {
  title: string;
  lastUpdated: string;
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-bg">
      <header className="border-b border-border">
        <div className="mx-auto flex h-14 max-w-3xl items-center justify-between px-6">
          <Link href="/" className="text-lg font-bold tracking-tight text-text-primary">
            MINDLOOP
          </Link>
          <Link
            href="/"
            className="text-sm text-text-secondary hover:text-text-primary transition-colors"
          >
            Voltar ao site
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-6 py-16">
        <h1 className="text-3xl font-bold tracking-tight text-text-primary">
          {title}
        </h1>
        <p className="mt-2 text-sm text-text-tertiary">
          &Uacute;ltima atualiza&ccedil;&atilde;o: {lastUpdated}
        </p>

        <div className="mt-12 space-y-8 text-sm leading-relaxed text-text-secondary [&_h2]:text-lg [&_h2]:font-semibold [&_h2]:text-text-primary [&_h2]:mt-10 [&_h2]:mb-4 [&_h3]:text-base [&_h3]:font-medium [&_h3]:text-text-primary [&_h3]:mt-6 [&_h3]:mb-2 [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-1 [&_a]:text-text-primary [&_a]:underline [&_a]:underline-offset-2">
          {children}
        </div>
      </main>

      <footer className="border-t border-border px-6 py-8">
        <div className="mx-auto flex max-w-3xl items-center justify-between">
          <p className="text-xs text-text-tertiary">
            MINDLOOP LTDA &middot; CNPJ 60.533.533/0001-60
          </p>
          <Link href="/" className="text-xs text-text-secondary hover:text-text-primary transition-colors">
            mindloop.com.br
          </Link>
        </div>
      </footer>
    </div>
  );
}
