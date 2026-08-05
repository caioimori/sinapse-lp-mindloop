import type { Metadata } from "next";
import Link from "next/link";
import { CLAUDE_DESKTOP_CHECKOUT_URL } from "@/lib/contact";

export const metadata: Metadata = {
  title: "Mindloop Academy | IA aplicada à gestão condominial",
  description:
    "Workshops e trilhas práticas para síndicos e equipes de administradoras colocarem a inteligência artificial na rotina.",
  alternates: { canonical: "/academy/trilha-claude" },
  openGraph: {
    title: "Mindloop Academy | IA aplicada à gestão condominial",
    description:
      "Uma trilha prática para colocar a inteligência artificial na rotina da operação condominial.",
    url: "/academy/trilha-claude",
    type: "website",
  },
};

const workshopSteps = [
  "Começar por três perguntas sobre a rotina da operação",
  "Mapear onde existe repetição, atraso ou informação espalhada",
  "Testar aplicações para atendimento, solicitações, manutenções e documentos",
  "Sair com um checklist e pedidos prontos para continuar praticando",
];

const lessons = [
  {
    number: "01",
    module: "Comece por aqui",
    title: "Conhecendo o Claude e os planos",
    description: "O que é o Claude, para que ele serve e como escolher um ponto de partida.",
    level: "Iniciante",
  },
  {
    number: "02",
    module: "Comece por aqui",
    title: "Instalando o app do Claude",
    description: "Criar a conta, instalar o app no computador e reconhecer a tela inicial.",
    level: "Iniciante",
  },
  {
    number: "03",
    module: "O Claude no seu dia a dia",
    title: "Artefatos",
    description: "Sair da resposta em texto e criar algo que você abre, usa e compartilha.",
    level: "Intermediário",
  },
  {
    number: "04",
    module: "O Claude no seu dia a dia",
    title: "Projetos",
    description: "Organizar arquivos e instruções fixas para não repetir o mesmo contexto.",
    level: "Intermediário",
  },
  {
    number: "05",
    module: "O Claude no seu dia a dia",
    title: "Claude Cowork",
    description: "Entender como delegar tarefas no computador com aprovação antes de agir.",
    level: "Intermediário",
  },
  {
    number: "06",
    module: "Indo além",
    title: "Conectores e habilidades",
    description: "Ligar ferramentas e ensinar um jeito de trabalhar com mais consistência.",
    level: "Avançado",
  },
  {
    number: "07",
    module: "Indo além",
    title: "O Claude no seu computador",
    description: "Conhecer tarefas que o Claude pode executar em arquivos e ferramentas autorizadas.",
    level: "Avançado",
  },
  {
    number: "08",
    module: "Indo além",
    title: "Montando o seu fluxo",
    description: "Juntar os recursos e escolher quando usar cada um em uma rotina real.",
    level: "Avançado",
  },
];

export default function AcademyTrilhaClaudePage() {
  return (
    <main className="v3 min-h-screen bg-[var(--bg)] text-[var(--text-primary)]">
      <header className="sticky top-0 z-20 border-b border-[var(--border)] bg-[rgba(10,10,11,0.92)] backdrop-blur-md">
        <div className="mx-auto flex h-20 max-w-[1440px] items-center justify-between px-5 sm:px-8 lg:px-16">
          <Link href="/" className="font-mono text-[11px] font-medium uppercase tracking-[0.22em] text-[var(--text-primary)]">
            Mindloop <span className="text-[var(--cobalt)]">/ Academy</span>
          </Link>
          <Link
            href={CLAUDE_DESKTOP_CHECKOUT_URL}
            className="font-mono text-[10px] font-medium uppercase tracking-[0.18em] text-[var(--cobalt)]"
            data-funnel-checkout
            data-funnel-event="academy_checkout_click"
            data-funnel-label="Acessar a trilha"
          >
            Acessar a trilha <span aria-hidden>→</span>
          </Link>
        </div>
      </header>

      <section className="relative overflow-hidden border-b border-[var(--border)] px-5 py-24 sm:px-8 sm:py-32 lg:px-16 lg:py-40">
        <div className="pointer-events-none absolute right-[-12%] top-[-22%] h-[620px] w-[620px] rounded-full border-[70px] border-[rgba(46,75,255,0.08)]" aria-hidden />
        <div className="relative mx-auto max-w-[1440px]">
          <p className="font-mono text-[10px] font-medium uppercase tracking-[0.24em] text-[var(--cobalt)]">
            IA aplicada à gestão condominial
          </p>
          <h1 className="mt-8 max-w-5xl text-[clamp(3rem,8vw,7rem)] font-normal leading-[0.92] tracking-[-0.04em]">
            Mindloop <span className="text-[var(--text-secondary)]">Academy.</span>
            <br />
            Prática para a rotina.
          </h1>
          <p className="mt-10 max-w-2xl text-lg leading-relaxed text-[var(--text-secondary)] sm:text-xl">
            Workshops e trilhas para síndicos profissionais e equipes de administradoras
            colocarem a inteligência artificial para trabalhar junto da operação.
          </p>
          <div className="mt-10 flex flex-wrap gap-3 font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--text-tertiary)]">
            <span className="border border-[var(--border)] px-4 py-3">Workshop Mindloop</span>
            <span className="border border-[var(--border)] px-4 py-3">Trilha Claude Desktop</span>
            <span className="border border-[var(--border)] px-4 py-3">Aplicação prática</span>
          </div>
          <Link
            href={CLAUDE_DESKTOP_CHECKOUT_URL}
            className="mt-10 inline-flex h-14 items-center gap-3 bg-[var(--cobalt)] px-8 font-mono text-[11px] font-medium uppercase tracking-[0.18em] text-white"
            data-funnel-checkout
            data-funnel-event="academy_checkout_click"
            data-funnel-label="Acessar a trilha"
          >
            Acessar a trilha <span aria-hidden>→</span>
          </Link>
        </div>
      </section>

      <section className="border-b border-[var(--border)] px-5 py-24 sm:px-8 sm:py-32 lg:px-16 lg:py-40">
        <div className="mx-auto grid max-w-[1440px] gap-12 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-6">
            <p className="font-mono text-[10px] font-medium uppercase tracking-[0.24em] text-[var(--cobalt)]">
              Workshop Mindloop
            </p>
            <h2 className="mt-8 text-[clamp(2.5rem,5vw,4.5rem)] font-normal leading-[0.95] tracking-[-0.035em]">
              Tirar a IA da
              <br />
              <span className="text-[var(--text-secondary)]">teoria. Colocar</span>
              <br />
              <span className="text-[var(--text-secondary)]">na rotina.</span>
            </h2>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-[var(--text-secondary)]">
              Um encontro prático para transformar dúvidas sobre inteligência artificial
              em aplicações ligadas ao dia a dia de síndicos e administradoras.
            </p>
          </div>
          <div className="lg:col-span-6">
            <div className="grid gap-px border border-[var(--border)] bg-[var(--border)] sm:grid-cols-2">
              {workshopSteps.map((step, index) => (
                <article key={step} className="bg-[var(--bg)] p-7 sm:p-9">
                  <span className="font-mono text-sm text-[var(--cobalt)]">0{index + 1}</span>
                  <p className="mt-8 text-lg leading-relaxed text-[var(--text-primary)]">{step}</p>
                </article>
              ))}
            </div>
            <p className="mt-6 font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--text-tertiary)]">
              Formato documentado nos materiais do workshop Mindloop
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-[var(--border)] px-5 py-24 sm:px-8 sm:py-32 lg:px-16 lg:py-40" id="trilha">
        <div className="mx-auto max-w-[1440px]">
          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <div>
              <p className="font-mono text-[10px] font-medium uppercase tracking-[0.24em] text-[var(--cobalt)]">
                Trilha Claude Desktop
              </p>
              <h2 className="mt-8 max-w-4xl text-[clamp(2.5rem,6vw,5.5rem)] font-normal leading-[0.95] tracking-[-0.035em]">
                Do primeiro acesso
                <br />
                <span className="text-[var(--text-secondary)]">ao seu fluxo de trabalho.</span>
              </h2>
            </div>
            <p className="max-w-sm text-base leading-relaxed text-[var(--text-secondary)]">
              Oito aulas curtas, com exemplos de trabalho e espaço para adaptar o uso
              ao contexto do condomínio.
            </p>
          </div>

          <div className="mt-16 border-t border-[var(--border)]">
            {lessons.map((lesson) => (
              <article key={lesson.number} className="grid gap-5 border-b border-[var(--border)] py-8 sm:grid-cols-12 sm:items-start sm:gap-8 sm:py-10">
                <span className="font-mono text-sm text-[var(--cobalt)] sm:col-span-1">{lesson.number}</span>
                <div className="sm:col-span-4">
                  <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--text-tertiary)]">{lesson.module}</p>
                  <h3 className="mt-3 text-2xl font-normal tracking-[-0.02em]">{lesson.title}</h3>
                </div>
                <p className="max-w-xl text-base leading-relaxed text-[var(--text-secondary)] sm:col-span-5">{lesson.description}</p>
                <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--text-tertiary)] sm:col-span-2 sm:text-right">{lesson.level}</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-24 sm:px-8 sm:py-32 lg:px-16 lg:py-40">
        <div className="mx-auto flex max-w-[1440px] flex-col items-start justify-between gap-10 border-t border-[var(--border)] pt-10 lg:flex-row lg:items-end">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-[var(--cobalt)]">Próximo passo</p>
            <h2 className="mt-6 max-w-3xl text-[clamp(2.5rem,6vw,5.5rem)] font-normal leading-[0.95] tracking-[-0.035em]">
              Quer levar isso para a sua operação?
            </h2>
          </div>
          <Link
            href={CLAUDE_DESKTOP_CHECKOUT_URL}
            className="inline-flex h-14 items-center gap-3 bg-[var(--cobalt)] px-8 font-mono text-[11px] font-medium uppercase tracking-[0.18em] text-white"
            data-funnel-checkout
            data-funnel-event="academy_checkout_click"
            data-funnel-label="Acessar a trilha"
          >
            Acessar a trilha <span aria-hidden>→</span>
          </Link>
        </div>
      </section>
    </main>
  );
}
