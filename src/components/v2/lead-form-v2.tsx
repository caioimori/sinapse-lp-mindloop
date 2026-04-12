"use client";

import { useState, useEffect } from "react";

const STEPS = [
  { label: "Voc\u00ea" },
  { label: "Empresa" },
  { label: "Desafio" },
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

export function LeadFormV2() {
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
    "mt-2 h-14 w-full rounded-sm border border-border bg-bg px-5 font-mono text-base text-text-primary placeholder:text-text-tertiary outline-none transition-colors focus:border-accent focus:ring-1 focus:ring-accent";

  const radioClass = (selected: boolean) =>
    `flex items-center gap-3 rounded-sm border px-5 py-4 text-left text-sm transition-all ${
      selected
        ? "border-accent bg-surface text-text-primary"
        : "border-border text-v2-soft hover:border-text-tertiary hover:bg-surface/50 hover:text-text-primary"
    }`;

  if (status === "success") {
    return (
      <section
        id="contato"
        className="relative w-full border-t border-border px-6 py-24 sm:px-10 lg:px-16 lg:py-32"
      >
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-4">
              <span className="h-px w-10 bg-success" />
              <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-success">
                Enviado
              </span>
            </div>
            <h2
              className="mt-10 font-normal leading-[1] tracking-[-0.025em] text-text-primary"
              style={{ fontSize: "clamp(2rem, 5vw, 4.5rem)" }}
            >
              Diagn&oacute;stico
              <br />
              <span className="text-v2-soft">em produ&ccedil;&atilde;o.</span>
            </h2>
          </div>
          <div className="lg:col-span-7 lg:pt-10">
            <p className="max-w-xl text-base leading-relaxed text-v2-soft lg:text-lg">
              Um especialista vai analisar sua opera&ccedil;&atilde;o e retornar em at&eacute; 24h
              com o mapeamento completo.
            </p>
            <p className="mt-8 font-mono text-[10px] uppercase tracking-[0.22em] text-text-tertiary">
              Enquanto isso, que tal conhecer nossos cases? &uarr;
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      id="contato"
      className="relative w-full border-t border-border px-6 py-24 sm:px-10 lg:px-16 lg:py-32"
    >
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        {/* Left — headline + copy */}
        <div className="lg:col-span-5">
          <div className="flex items-center gap-4">
            <span className="h-px w-10 bg-border" />
            <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-text-tertiary">
              Contato
            </span>
          </div>

          <h2
            className="mt-10 font-normal leading-[1] tracking-[-0.025em] text-text-primary"
            style={{ fontSize: "clamp(2rem, 5vw, 4.5rem)" }}
          >
            Receba seu
            <br />
            <span className="text-v2-soft">diagn&oacute;stico.</span>
          </h2>

          <p className="mt-10 max-w-md text-lg leading-relaxed text-v2-soft lg:text-xl">
            3 perguntas. Diagn&oacute;stico personalizado em at&eacute; 24h. Um especialista
            analisa sua opera&ccedil;&atilde;o e retorna com o mapeamento completo.
          </p>

          <div className="mt-12 flex items-center gap-3 border-t border-border pt-6">
            <div className="flex -space-x-2">
              {[0, 1, 2].map((i) => (
                <div
                  key={i}
                  className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-bg bg-surface font-mono text-[10px] font-medium text-v2-soft"
                >
                  {["CM", "RR", "MF"][i]}
                </div>
              ))}
            </div>
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-v2-soft">
              +50 empresas operam com MINDLOOP
            </p>
          </div>
        </div>

        {/* Right — form */}
        <div className="lg:col-span-7">
          {/* Progress */}
          <div className="flex items-center gap-3">
            {STEPS.map((s, i) => (
              <div key={s.label} className="flex flex-1 items-center gap-3">
                <div className="flex-1">
                  <div className="h-[2px] overflow-hidden bg-border">
                    <div
                      className="h-full bg-accent transition-all duration-500"
                      style={{ width: i < step ? "100%" : i === step ? "50%" : "0%" }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-3 flex justify-between">
            {STEPS.map((s, i) => (
              <span
                key={s.label}
                className={`font-mono text-[10px] uppercase tracking-[0.22em] ${
                  i <= step ? "text-text-primary" : "text-text-tertiary"
                }`}
              >
                0{i + 1} &mdash; {s.label}
              </span>
            ))}
          </div>

          {/* Steps */}
          <div className="mt-12">
            {step === 0 && (
              <div className="space-y-7">
                <p className="text-base text-v2-soft lg:text-lg">
                  Para quem enviamos o diagn&oacute;stico?
                </p>
                <div>
                  <label
                    htmlFor="v2-name"
                    className="font-mono text-[10px] uppercase tracking-[0.18em] text-text-tertiary"
                  >
                    Nome
                  </label>
                  <input
                    id="v2-name"
                    type="text"
                    value={data.name}
                    onChange={(e) => update("name", e.target.value)}
                    placeholder="Seu nome"
                    className={inputClass}
                    autoFocus
                  />
                </div>
                <div>
                  <label
                    htmlFor="v2-email"
                    className="font-mono text-[10px] uppercase tracking-[0.18em] text-text-tertiary"
                  >
                    E-mail corporativo
                  </label>
                  <input
                    id="v2-email"
                    type="email"
                    value={data.email}
                    onChange={(e) => update("email", e.target.value)}
                    placeholder="voce@empresa.com.br"
                    className={inputClass}
                  />
                  <p className="mt-2 font-mono text-[10px] text-text-tertiary">
                    Apenas o diagn&oacute;stico. Sem spam.
                  </p>
                </div>
              </div>
            )}

            {step === 1 && (
              <div className="space-y-7">
                <p className="text-base text-v2-soft lg:text-lg">
                  Nos ajude a entender sua opera&ccedil;&atilde;o, {data.name.split(" ")[0]}.
                </p>
                <div>
                  <label
                    htmlFor="v2-company"
                    className="font-mono text-[10px] uppercase tracking-[0.18em] text-text-tertiary"
                  >
                    Empresa
                  </label>
                  <input
                    id="v2-company"
                    type="text"
                    value={data.company}
                    onChange={(e) => update("company", e.target.value)}
                    placeholder="Nome da empresa"
                    className={inputClass}
                    autoFocus
                  />
                </div>
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-text-tertiary">
                    Tamanho da equipe
                  </p>
                  <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-3">
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
                  <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-text-tertiary">
                    Setor
                  </p>
                  <div className="mt-3 grid grid-cols-2 gap-2">
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

            {step === 2 && (
              <div className="space-y-7">
                <p className="text-base text-v2-soft lg:text-lg">
                  &Uacute;ltima etapa. Isso nos permite projetar o ROI do seu caso.
                </p>
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-text-tertiary">
                    Qual sua urg&ecirc;ncia?
                  </p>
                  <div className="mt-3 grid gap-2 sm:grid-cols-3">
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
                  <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-text-tertiary">
                    Investimento mensal estimado
                  </p>
                  <div className="mt-3 grid gap-2 sm:grid-cols-2">
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
                  <label
                    htmlFor="v2-message"
                    className="font-mono text-[10px] uppercase tracking-[0.18em] text-text-tertiary"
                  >
                    Descreva seu desafio (opcional)
                  </label>
                  <textarea
                    id="v2-message"
                    value={data.message}
                    onChange={(e) => update("message", e.target.value)}
                    rows={3}
                    className="mt-2 w-full resize-none rounded-sm border border-border bg-bg px-5 py-4 font-mono text-sm text-text-primary placeholder:text-text-tertiary outline-none transition-colors focus:border-accent focus:ring-1 focus:ring-accent"
                    placeholder="Ex: Quero automatizar o atendimento no WhatsApp..."
                  />
                </div>
              </div>
            )}
          </div>

          {/* Navigation */}
          <div className="mt-10 flex items-center gap-4 border-t border-border pt-8">
            {step > 0 && (
              <button
                type="button"
                onClick={() => setStep(step - 1)}
                className="font-mono text-[11px] uppercase tracking-[0.18em] text-v2-soft hover:text-text-primary transition-colors"
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
                className="flex h-12 items-center rounded-full bg-accent px-8 font-mono text-[11px] uppercase tracking-[0.18em] text-accent-foreground hover:bg-accent-hover transition-colors disabled:opacity-30"
              >
                Continuar &rarr;
              </button>
            ) : (
              <button
                type="button"
                onClick={handleSubmit}
                disabled={status === "loading"}
                className="flex h-12 items-center rounded-full bg-accent px-8 font-mono text-[11px] uppercase tracking-[0.18em] text-accent-foreground hover:bg-accent-hover transition-colors disabled:opacity-50"
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
        </div>
      </div>
    </section>
  );
}
