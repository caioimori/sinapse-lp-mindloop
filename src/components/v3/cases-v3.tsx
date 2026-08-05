"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { useRevealOnEnter } from "./use-reveal";

const casesList = [
  {
    company: "Dúvidas de moradores",
    vertical: "ATENDIMENTO",
    index: "01",
    quote:
      "A IA responde perguntas frequentes e deixa a equipe livre para os casos que exigem contexto e decisão.",
    person: "Atendimento com contexto",
    role: "Aplicação prática",
    metrics: [
      { label: "Perguntas recorrentes", before: "Espalhadas", after: "Organizadas" },
      { label: "Atendimento", before: "Interrompido", after: "Estruturado" },
      { label: "Escalonamento", before: "Incerto", after: "Encaminhado" },
    ],
  },
  {
    company: "Solicitações e manutenções",
    vertical: "OPERAÇÃO",
    index: "02",
    quote:
      "Solicitações podem ser abertas, classificadas e encaminhadas para o responsável certo, sem depender de uma triagem manual a cada mensagem.",
    person: "Fluxo de solicitações",
    role: "Aplicação prática",
    metrics: [
      { label: "Solicitações", before: "Avulsas", after: "Classificadas" },
      { label: "Manutenções", before: "Sem contexto", after: "Acompanhadas" },
      { label: "Comunicados", before: "Manuais", after: "Padronizados" },
    ],
  },
  {
    company: "Atas, contratos e regras",
    vertical: "DOCUMENTOS",
    index: "03",
    quote:
      "A equipe encontra informações do condomínio com mais clareza e transforma documentos longos em referências úteis para a rotina.",
    person: "Conhecimento organizado",
    role: "Aplicação prática",
    metrics: [
      { label: "Informação", before: "Espalhada", after: "Localizada" },
      { label: "Atas e contratos", before: "Leitura manual", after: "Resumidos" },
      { label: "Decisão", before: "Sem contexto", after: "Mais informada" },
    ],
  },
];

export function CasesV3() {
  const rootRef = useRef<HTMLElement>(null);
  const [active, setActive] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useRevealOnEnter(rootRef, { selector: "[data-cases-line]", staggerMs: 140 });
  useRevealOnEnter(rootRef, { selector: "[data-case-tab]", staggerMs: 80 });

  // Pausa o auto-rotate apenas quando a seção sai do viewport
  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const obs = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.25 }
    );
    obs.observe(root);
    return () => obs.disconnect();
  }, []);

  // Auto-rotate (5s) — sempre rodando enquanto visível, sem pause em hover
  const ROTATE_MS = 5000;
  useEffect(() => {
    if (!isVisible) return;
    const id = window.setInterval(() => {
      setActive((prev) => (prev + 1) % casesList.length);
    }, ROTATE_MS);
    return () => window.clearInterval(id);
  }, [isVisible]);

  // Slide horizontal entre cases — anima o card inteiro
  const cardRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;
    gsap.fromTo(
      card,
      { x: 80, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.85, ease: "expo.out" }
    );
    const els = card.querySelectorAll<HTMLElement>("[data-case-el]");
    gsap.fromTo(
      els,
      { opacity: 0, y: 14 },
      { opacity: 1, y: 0, duration: 0.7, stagger: 0.06, ease: "expo.out", delay: 0.1 }
    );
  }, [active]);

  const current = casesList[active];

  return (
    <section
      ref={rootRef}
      id="cases"
      data-v3-section
      data-theme="dark"
      className="relative w-full px-5 py-24 sm:px-8 sm:py-32 lg:px-16 lg:py-40"
      style={{ borderTop: "1px solid var(--border)" }}
    >
      <div className="chapter-marker">
        <span className="chapter-marker__dot" />
        <span>04 / 07 — Aplicações</span>
      </div>

      <div className="section-label mt-14">
        <span className="section-label__bar" />
        <span>Aplicações práticas</span>
      </div>

      <h2
        className="mt-10 font-normal leading-[0.95] tracking-[-0.03em] sm:mt-14"
        style={{
          fontSize: "clamp(2.5rem, 8vw, 6rem)",
          color: "var(--text-primary)",
        }}
      >
        <span className="line-wrap block">
          <span data-cases-line className="line-inner">
            A IA entra na rotina.
          </span>
        </span>
        <span className="line-wrap block">
          <span
            data-cases-line
            className="line-inner"
            style={{ color: "var(--text-secondary)" }}
          >
            A equipe fica com a decisão.
          </span>
        </span>
      </h2>

      {/* Tabs */}
      <div
        data-cases-tabs
        className="mt-14 flex flex-wrap gap-2 sm:mt-20"
      >
        {casesList.map((c, i) => {
          const isActive = active === i;
          return (
            <button
              key={c.company}
              type="button"
              data-case-tab
              onClick={() => setActive(i)}
              className="group relative flex items-baseline gap-3 overflow-hidden rounded-none px-5 py-3 font-mono text-[11px] font-medium uppercase tracking-[0.2em] transition-all sm:px-6 sm:py-3.5"
              style={{
                border: `1px solid ${isActive ? "var(--cobalt)" : "var(--border)"}`,
                background: isActive ? "var(--cobalt)" : "transparent",
                color: isActive ? "#FFFFFF" : "var(--text-primary)",
              }}
            >
              <span className="text-[10px] opacity-80">{c.index}</span>
              {c.vertical}
            </button>
          );
        })}
      </div>

      {/* Auto-rotate progress bar */}
      <div
        className="mt-5 h-[2px] w-full overflow-hidden"
        style={{ background: "color-mix(in srgb, var(--border) 60%, transparent)" }}
      >
        <div
          key={active}
          className="h-full origin-left"
          style={{
            background: "var(--cobalt)",
            animation: isVisible
              ? `v3-cases-progress ${ROTATE_MS}ms linear forwards`
              : "none",
          }}
        />
      </div>

      {/* Active case card */}
      <div
        ref={cardRef}
        className="mt-12 grid gap-10 overflow-hidden sm:mt-16 lg:grid-cols-12 lg:gap-16"
        style={{
          borderTop: "1px solid var(--border)",
          paddingTop: "3rem",
        }}
      >
        <div className="lg:col-span-5">
          <p
            data-case-el
            className="font-mono text-[10px] uppercase tracking-[0.22em]"
            style={{ color: "var(--cobalt)" }}
          >
            {current.vertical}
          </p>
          <h3
            data-case-el
            className="mt-4 font-normal leading-[0.98] tracking-[-0.025em]"
            style={{
              fontSize: "clamp(1.75rem, 4.5vw, 3rem)",
              color: "var(--text-primary)",
            }}
          >
            {current.company}
          </h3>
          <blockquote
            data-case-el
            className="mt-8 max-w-lg text-lg leading-relaxed sm:text-xl lg:text-2xl"
            style={{ color: "var(--text-secondary)" }}
          >
            <span style={{ color: "var(--cobalt)" }}>“</span>
            {current.quote}
            <span style={{ color: "var(--cobalt)" }}>”</span>
          </blockquote>
          <div
            data-case-el
            className="mt-10 flex items-center gap-4"
            style={{ borderTop: "1px solid var(--border)", paddingTop: "1.5rem" }}
          >
            <div
              className="flex h-10 w-10 items-center justify-center rounded-none font-mono text-xs"
              style={{
                background: "var(--surface)",
                color: "var(--text-secondary)",
                border: "1px solid var(--border)",
              }}
            >
              {current.person
                .split(" ")
                .map((n) => n[0])
                .slice(0, 2)
                .join("")}
            </div>
            <div>
              <p
                className="text-base font-medium"
                style={{ color: "var(--text-primary)" }}
              >
                {current.person}
              </p>
              <p
                className="mt-1 font-mono text-[10px] uppercase tracking-[0.18em]"
                style={{ color: "var(--text-tertiary)" }}
              >
                {current.role}
              </p>
            </div>
          </div>
        </div>

        <div className="grid gap-px lg:col-span-7" style={{ background: "var(--border)" }}>
          {current.metrics.map((metric) => (
            <div
              key={metric.label}
              data-case-el
              className="grid grid-cols-12 gap-4 p-6 sm:p-8"
              style={{ background: "var(--bg)" }}
            >
              <div className="col-span-5">
                <p
                  className="font-mono text-[10px] uppercase tracking-[0.2em]"
                  style={{ color: "var(--text-tertiary)" }}
                >
                  {metric.label}
                </p>
                <p
                  className="mt-4 font-mono text-sm line-through"
                  style={{
                    color: "var(--text-tertiary)",
                    textDecorationColor: "var(--text-tertiary)",
                  }}
                >
                  Na rotina: {metric.before}
                </p>
              </div>
              <div className="col-span-7 flex items-center justify-end gap-4">
                <span
                  className="font-mono text-[10px] uppercase tracking-[0.2em]"
                  style={{ color: "var(--cobalt)" }}
                >
                  Com IA
                </span>
                <p
                  className="font-mono font-light leading-none"
                  style={{
                    fontSize: "clamp(1.75rem, 5vw, 3rem)",
                    color: "var(--text-primary)",
                  }}
                >
                  {metric.after}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
