"use client";

import { useState, useEffect } from "react";
import { SectionLabel } from "./corner-marks";

const STEPS = [
  { label: "Voc\u00ea", fields: 2 },
  { label: "Empresa", fields: 3 },
  { label: "Desafio", fields: 3 },
];

const verticals = [
  { value: "saude", label: "Sa\u00fade / Odontologia", points: 3 },
  { value: "juridico", label: "Jur\u00eddico", points: 3 },
  { value: "financeiro", label: "Financeiro / Fintech", points: 2 },
  { value: "varejo", label: "Varejo / E-commerce", points: 2 },
  { value: "agro", label: "Agroneg\u00f3cio", points: 2 },
  { value: "outro", label: "Outro setor", points: 1 },
];

const employeeRanges = [
  { value: "1-19", label: "1\u201319 funcion\u00e1rios", points: 0 },
  { value: "20-49", label: "20\u201349 funcion\u00e1rios", points: 1 },
  { value: "50-249", label: "50\u2013249 funcion\u00e1rios", points: 3 },
  { value: "250-500", label: "250\u2013500 funcion\u00e1rios", points: 4 },
  { value: "500+", label: "500+ funcion\u00e1rios", points: 5 },
];

const urgencyOptions = [
  { value: "exploring", label: "Estou explorando op\u00e7\u00f5es", points: 1 },
  { value: "planning", label: "Planejando para os pr\u00f3ximos 3 meses", points: 3 },
  { value: "ready", label: "Pronto para come\u00e7ar agora", points: 5 },
];

const budgetOptions = [
  { value: "undefined", label: "Ainda n\u00e3o defini", points: 1 },
  { value: "under-8k", label: "At\u00e9 R$ 8K/m\u00eas", points: 2 },
  { value: "8k-18k", label: "R$ 8K\u201318K/m\u00eas", points: 4 },
  { value: "18k+", label: "Acima de R$ 18K/m\u00eas", points: 5 },
];

function calculateScore(data: Record<string, string>): { label: string; points: number } {
  let points = 0;
  points += verticals.find((v) => v.value === data.vertical)?.points ?? 0;
  points += employeeRanges.find((e) => e.value === data.employees)?.points ?? 0;
  points += urgencyOptions.find((u) => u.value === data.urgency)?.points ?? 0;
  points += budgetOptions.find((b) => b.value === data.budget)?.points ?? 0;
  if (data.message && data.message.length > 20) points += 2;

  if (points >= 12) return { label: "hot", points };
  if (points >= 7) return { label: "warm", points };
  return { label: "cold", points };
}

export function LeadForm() {
  const [step, setStep] = useState(0);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [data, setData] = useState({
    name: "",
    email: "",
    company: "",
    employees: "",
    vertical: "",
    urgency: "",
    budget: "",
    message: "",
  });
  const [utms, setUtms] = useState({
    utm_source: "",
    utm_medium: "",
    utm_campaign: "",
    utm_term: "",
    utm_content: "",
    page_url: "",
  });

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setUtms({
      utm_source: params.get("utm_source") || "",
      utm_medium: params.get("utm_medium") || "",
      utm_campaign: params.get("utm_campaign") || "",
      utm_term: params.get("utm_term") || "",
      utm_content: params.get("utm_content") || "",
      page_url: window.location.href,
    });
  }, []);

  function update(field: string, value: string) {
    setData((prev) => ({ ...prev, [field]: value }));
  }

  function canAdvance(): boolean {
    if (step === 0) return data.name.length >= 2 && data.email.includes("@");
    if (step === 1) return data.company.length >= 2 && !!data.employees && !!data.vertical;
    return true;
  }

  async function handleSubmit() {
    setStatus("loading");
    const score = calculateScore(data);

    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...data,
          ...utms,
          score: score.label,
          score_points: score.points,
        }),
      });
      if (!res.ok) throw new Error("Falha");
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  const inputClass =
    "mt-1.5 h-11 w-full rounded-sm border border-border bg-bg px-4 font-mono text-sm text-text-primary placeholder:text-text-tertiary outline-none transition-colors focus:border-accent focus:ring-1 focus:ring-accent";

  const radioClass = (selected: boolean) =>
    `flex items-center gap-3 rounded-sm border px-4 py-3 text-sm transition-all ${
      selected
        ? "border-accent bg-surface text-text-primary"
        : "border-border text-text-secondary hover:border-text-tertiary hover:bg-surface/50"
    }`;

  if (status === "success") {
    return (
      <section id="contato" className="px-8 py-24">
        <div className="mx-auto max-w-lg text-center">
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-success">
            &#9632; Enviado com sucesso
          </p>
          <h2 className="mt-6 text-2xl font-light text-text-primary">
            Diagn&oacute;stico em produ&ccedil;&atilde;o.
          </h2>
          <p className="mt-3 text-sm text-text-secondary">
            Um especialista vai analisar sua opera&ccedil;&atilde;o e retornar em at&eacute; 24h com o mapeamento completo.
          </p>
          <p className="mt-8 font-mono text-[10px] uppercase tracking-[0.2em] text-text-tertiary">
            Enquanto isso, que tal conhecer nossos cases? &uarr;
          </p>
        </div>
      </section>
    );
  }

  return (
    <section id="contato" className="px-8 py-24">
      <div className="mx-auto max-w-lg">
        <SectionLabel>Contato</SectionLabel>

        <h2 className="mt-8 text-[clamp(1.75rem,3.5vw,2.75rem)] font-normal leading-[1.1] tracking-[-0.02em] text-text-primary">
          Receba seu diagn&oacute;stico.
        </h2>
        <p className="mt-4 text-base leading-relaxed text-text-secondary">
          3 perguntas. Diagn&oacute;stico personalizado em at&eacute; 24h.
        </p>

        {/* Progress bar */}
        <div className="mt-10 flex items-center gap-2">
          {STEPS.map((s, i) => (
            <div key={s.label} className="flex flex-1 items-center gap-2">
              <div className="flex-1">
                <div className="h-1 rounded-full bg-border overflow-hidden">
                  <div
                    className="h-full rounded-full bg-accent transition-all duration-500"
                    style={{ width: i < step ? "100%" : i === step ? "50%" : "0%" }}
                  />
                </div>
              </div>
              {i < STEPS.length - 1 && <div className="w-1" />}
            </div>
          ))}
        </div>
        <div className="mt-2 flex justify-between">
          {STEPS.map((s, i) => (
            <span
              key={s.label}
              className={`font-mono text-[9px] uppercase tracking-[0.2em] ${
                i <= step ? "text-text-primary" : "text-text-tertiary"
              }`}
            >
              {s.label}
            </span>
          ))}
        </div>

        {/* Steps */}
        <div className="mt-10">
          {/* Step 0: Sobre voce */}
          {step === 0 && (
            <div className="space-y-5 animate-in">
              <p className="text-sm text-text-secondary">
                Para quem enviamos o diagn&oacute;stico?
              </p>
              <div>
                <label htmlFor="name" className="font-mono text-[10px] uppercase tracking-[0.15em] text-text-tertiary">
                  Nome
                </label>
                <input
                  id="name"
                  type="text"
                  value={data.name}
                  onChange={(e) => update("name", e.target.value)}
                  placeholder="Seu nome"
                  className={inputClass}
                  autoFocus
                />
              </div>
              <div>
                <label htmlFor="email" className="font-mono text-[10px] uppercase tracking-[0.15em] text-text-tertiary">
                  E-mail corporativo
                </label>
                <input
                  id="email"
                  type="email"
                  value={data.email}
                  onChange={(e) => update("email", e.target.value)}
                  placeholder="voce@empresa.com.br"
                  className={inputClass}
                />
                <p className="mt-1.5 font-mono text-[9px] text-text-tertiary">
                  Apenas o diagn&oacute;stico. Sem spam.
                </p>
              </div>
            </div>
          )}

          {/* Step 1: Sobre a empresa */}
          {step === 1 && (
            <div className="space-y-5 animate-in">
              <p className="text-sm text-text-secondary">
                Nos ajude a entender sua opera&ccedil;&atilde;o, {data.name.split(" ")[0]}.
              </p>
              <div>
                <label htmlFor="company" className="font-mono text-[10px] uppercase tracking-[0.15em] text-text-tertiary">
                  Empresa
                </label>
                <input
                  id="company"
                  type="text"
                  value={data.company}
                  onChange={(e) => update("company", e.target.value)}
                  placeholder="Nome da empresa"
                  className={inputClass}
                  autoFocus
                />
              </div>
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-text-tertiary">
                  Tamanho da equipe
                </p>
                <div className="mt-2 grid grid-cols-2 gap-2 sm:grid-cols-3">
                  {employeeRanges.map((opt) => (
                    <button
                      key={opt.value}
                      type="button"
                      onClick={() => update("employees", opt.value)}
                      className={radioClass(data.employees === opt.value)}
                    >
                      <span className="font-mono text-xs">{opt.label}</span>
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-text-tertiary">
                  Setor
                </p>
                <div className="mt-2 grid grid-cols-2 gap-2">
                  {verticals.map((opt) => (
                    <button
                      key={opt.value}
                      type="button"
                      onClick={() => update("vertical", opt.value)}
                      className={radioClass(data.vertical === opt.value)}
                    >
                      <span className="text-xs">{opt.label}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Step 2: Desafio + qualificacao */}
          {step === 2 && (
            <div className="space-y-5 animate-in">
              <p className="text-sm text-text-secondary">
                &Uacute;ltima etapa. Isso nos permite projetar o ROI do seu caso.
              </p>
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-text-tertiary">
                  Qual sua urg&ecirc;ncia?
                </p>
                <div className="mt-2 space-y-2">
                  {urgencyOptions.map((opt) => (
                    <button
                      key={opt.value}
                      type="button"
                      onClick={() => update("urgency", opt.value)}
                      className={`${radioClass(data.urgency === opt.value)} w-full`}
                    >
                      <span className="text-xs">{opt.label}</span>
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-text-tertiary">
                  Investimento mensal estimado
                </p>
                <div className="mt-2 space-y-2">
                  {budgetOptions.map((opt) => (
                    <button
                      key={opt.value}
                      type="button"
                      onClick={() => update("budget", opt.value)}
                      className={`${radioClass(data.budget === opt.value)} w-full`}
                    >
                      <span className="text-xs">{opt.label}</span>
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <label htmlFor="message" className="font-mono text-[10px] uppercase tracking-[0.15em] text-text-tertiary">
                  Descreva seu desafio (opcional)
                </label>
                <textarea
                  id="message"
                  value={data.message}
                  onChange={(e) => update("message", e.target.value)}
                  rows={3}
                  className="mt-1.5 w-full resize-none rounded-sm border border-border bg-bg px-4 py-3 font-mono text-sm text-text-primary placeholder:text-text-tertiary outline-none transition-colors focus:border-accent focus:ring-1 focus:ring-accent"
                  placeholder="Ex: Quero automatizar o atendimento no WhatsApp..."
                />
              </div>
            </div>
          )}
        </div>

        {/* Navigation */}
        <div className="mt-8 flex items-center gap-4">
          {step > 0 && (
            <button
              type="button"
              onClick={() => setStep(step - 1)}
              className="font-mono text-[11px] uppercase tracking-[0.15em] text-text-secondary hover:text-text-primary transition-colors"
            >
              &larr; Voltar
            </button>
          )}

          <div className="flex-1" />

          {step < 2 ? (
            <button
              type="button"
              onClick={() => canAdvance() && setStep(step + 1)}
              disabled={!canAdvance()}
              className="flex h-11 items-center rounded-full bg-accent px-8 font-mono text-[11px] uppercase tracking-[0.15em] text-accent-foreground hover:bg-accent-hover transition-colors disabled:opacity-30"
            >
              Continuar &rarr;
            </button>
          ) : (
            <button
              type="button"
              onClick={handleSubmit}
              disabled={status === "loading"}
              className="flex h-11 items-center rounded-full bg-accent px-8 font-mono text-[11px] uppercase tracking-[0.15em] text-accent-foreground hover:bg-accent-hover transition-colors disabled:opacity-50"
            >
              {status === "loading" ? "Enviando..." : "Receber diagn\u00f3stico"}
            </button>
          )}
        </div>

        {status === "error" && (
          <p className="mt-4 font-mono text-[11px] text-error">
            Erro ao enviar. Tente novamente ou escreva para contato@mindloop.com.br
          </p>
        )}

        {/* Social proof */}
        <div className="mt-12 flex items-center gap-3 border-t border-border pt-6">
          <div className="flex -space-x-2">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className="flex h-7 w-7 items-center justify-center rounded-full border-2 border-bg bg-surface font-mono text-[9px] font-medium text-text-tertiary"
              >
                {["CM", "RR", "MF"][i]}
              </div>
            ))}
          </div>
          <p className="font-mono text-[10px] text-text-tertiary">
            +50 empresas operam com MINDLOOP
          </p>
        </div>
      </div>
    </section>
  );
}
