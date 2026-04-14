"use client";

import { useEffect, useRef, useState } from "react";
import { useRevealOnEnter } from "./use-reveal";

const STEPS = [
  { label: "Você" },
  { label: "Empresa" },
  { label: "Desafio" },
];

const verticals = [
  { value: "saude", label: "Saúde / Odontologia", points: 3 },
  { value: "juridico", label: "Jurídico", points: 3 },
  { value: "financeiro", label: "Financeiro / Fintech", points: 2 },
  { value: "varejo", label: "Varejo / E-commerce", points: 2 },
  { value: "agro", label: "Agronegócio", points: 2 },
  { value: "outro", label: "Outro setor", points: 1 },
];

const employeeRanges = [
  { value: "1-19", label: "1–19 funcionários", points: 0 },
  { value: "20-49", label: "20–49 funcionários", points: 1 },
  { value: "50-249", label: "50–249 funcionários", points: 3 },
  { value: "250-500", label: "250–500 funcionários", points: 4 },
  { value: "500+", label: "500+ funcionários", points: 5 },
];

const urgencyOptions = [
  { value: "exploring", label: "Estou explorando opções", points: 1 },
  { value: "planning", label: "Planejando para os próximos 3 meses", points: 3 },
  { value: "ready", label: "Pronto para começar agora", points: 5 },
];

const budgetOptions = [
  { value: "undefined", label: "Ainda não defini", points: 1 },
  { value: "under-8k", label: "Até R$ 8K/mês", points: 2 },
  { value: "8k-18k", label: "R$ 8K–18K/mês", points: 4 },
  { value: "18k+", label: "Acima de R$ 18K/mês", points: 5 },
];

function calculateScore(data: Record<string, string>): {
  label: string;
  points: number;
} {
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

export function LeadFormV3() {
  const rootRef = useRef<HTMLElement>(null);
  const stepRef = useRef<HTMLDivElement>(null);
  const [step, setStep] = useState(0);
  const initialMountRef = useRef(true);

  useEffect(() => {
    if (initialMountRef.current) {
      initialMountRef.current = false;
      return;
    }
    const firstInput = stepRef.current?.querySelector<HTMLInputElement>("input");
    firstInput?.focus({ preventScroll: true });
  }, [step]);
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
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

  useRevealOnEnter(rootRef, { selector: "[data-form-line]", staggerMs: 140 });

  function update(field: string, value: string) {
    setData((prev) => ({ ...prev, [field]: value }));
  }

  function canAdvance(): boolean {
    if (step === 0) return data.name.length >= 2 && data.email.includes("@");
    if (step === 1)
      return data.company.length >= 2 && !!data.employees && !!data.vertical;
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
    "mt-3 h-14 w-full rounded-none border-0 bg-transparent px-0 font-mono text-xl font-light text-[var(--text-primary)] placeholder:text-[var(--text-tertiary)] outline-none transition-colors focus:ring-0";

  const inputWrap = (focused: boolean) => ({
    borderBottom: `2px solid ${focused ? "var(--cobalt)" : "color-mix(in srgb, var(--text-secondary) 35%, transparent)"}`,
    transition: "border-color 0.2s ease",
  });

  const labelClass =
    "font-mono text-[11px] font-medium uppercase tracking-[0.22em]";
  const labelStyle = { color: "var(--cobalt)" } as const;

  const radioClass = (_selected: boolean) =>
    `flex cursor-pointer items-center gap-3 rounded-none px-5 py-3.5 text-left text-sm font-medium transition-all sm:px-6 sm:py-4`;

  const radioStyle = (selected: boolean) =>
    selected
      ? {
          border: "1px solid var(--cobalt)",
          background: "var(--cobalt)",
          color: "#FFFFFF",
          boxShadow: "0 0 0 4px rgba(46, 75, 255, 0.18)",
        }
      : {
          border: "1px solid color-mix(in srgb, var(--text-secondary) 25%, transparent)",
          background: "color-mix(in srgb, var(--surface) 60%, transparent)",
          color: "var(--text-primary)",
        };

  if (status === "success") {
    return (
      <section
        id="contato"
        data-v3-section
        data-theme="dark"
        className="relative w-full px-5 py-24 sm:px-8 sm:py-32 lg:px-16 lg:py-40"
        style={{ borderTop: "1px solid var(--border)" }}
      >
        <div className="chapter-marker">
          <span
            className="chapter-marker__dot"
            style={{ background: "var(--cobalt)" }}
          />
          <span>07 / 07 — Enviado</span>
        </div>

        <div className="mt-12 grid gap-10 sm:gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-6">
            <div className="section-label">
              <span className="section-label__bar" />
              <span>Enviado</span>
            </div>
            <h2
              className="mt-10 font-normal leading-[0.95] tracking-[-0.03em] sm:mt-14"
              style={{
                fontSize: "clamp(2.5rem, 8vw, 6rem)",
                color: "var(--text-primary)",
              }}
            >
              Diagnóstico
              <br />
              <span style={{ color: "var(--cobalt)" }}>em produção.</span>
            </h2>
          </div>
          <div className="lg:col-span-6 lg:pt-14">
            <p
              className="max-w-xl text-lg leading-relaxed lg:text-xl"
              style={{ color: "var(--text-secondary)" }}
            >
              Um especialista vai analisar sua operação e retornar em até 24h
              com o mapeamento completo.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      ref={rootRef}
      id="contato"
      data-v3-section
      data-theme="dark"
      className="relative w-full px-5 py-24 sm:px-8 sm:py-32 lg:px-16 lg:py-40"
      style={{ borderTop: "1px solid var(--border)" }}
    >
      <div className="chapter-marker">
        <span className="chapter-marker__dot" />
        <span>07 / 07 — Contato</span>
      </div>

      <div className="mt-12 grid gap-12 sm:gap-16 lg:grid-cols-12 lg:gap-16">
        {/* Left — headline */}
        <div className="lg:col-span-5">
          <div className="section-label">
            <span className="section-label__bar" />
            <span>Contato</span>
          </div>

          <h2
            className="mt-10 font-normal leading-[0.95] tracking-[-0.03em] sm:mt-14"
            style={{
              fontSize: "clamp(2.5rem, 8vw, 6rem)",
              color: "var(--text-primary)",
            }}
          >
            <span className="line-wrap block">
              <span data-form-line className="line-inner">
                Receba seu
              </span>
            </span>
            <span className="line-wrap block">
              <span
                data-form-line
                className="line-inner"
                style={{ color: "var(--cobalt)" }}
              >
                diagnóstico.
              </span>
            </span>
          </h2>

          <p
            className="mt-10 max-w-md text-lg leading-relaxed lg:text-xl"
            style={{ color: "var(--text-secondary)" }}
          >
            3 perguntas. Diagnóstico personalizado em até 24h. Um especialista
            analisa sua operação e retorna com o mapeamento completo.
          </p>

          <div
            className="mt-12 flex items-center gap-4"
            style={{ borderTop: "1px solid var(--border)", paddingTop: "2rem" }}
          >
            <div className="flex -space-x-2">
              {["CM", "RR", "MF"].map((i) => (
                <div
                  key={i}
                  className="flex h-10 w-10 items-center justify-center rounded-none font-mono text-[11px] font-medium"
                  style={{
                    background: "var(--surface)",
                    border: "2px solid var(--cobalt)",
                    color: "var(--text-primary)",
                  }}
                >
                  {i}
                </div>
              ))}
            </div>
            <p
              className="font-mono text-[11px] font-medium uppercase tracking-[0.18em]"
              style={{ color: "var(--text-primary)" }}
            >
              +50 empresas operam com MINDLOOP
            </p>
          </div>
        </div>

        {/* Right — form (panel) */}
        <div
          className="relative overflow-hidden rounded-2xl p-7 sm:p-10 lg:col-span-7 lg:p-12"
          style={{
            background:
              "linear-gradient(180deg, color-mix(in srgb, var(--surface) 80%, transparent) 0%, color-mix(in srgb, var(--surface) 40%, transparent) 100%)",
            border: "1px solid color-mix(in srgb, var(--text-secondary) 20%, transparent)",
            boxShadow:
              "0 1px 0 0 rgba(255,255,255,0.04) inset, 0 24px 60px -20px rgba(0,0,0,0.6)",
          }}
        >
          <span
            aria-hidden
            className="absolute left-0 top-0 h-full w-[3px]"
            style={{ background: "var(--cobalt)" }}
          />
          {/* Progress */}
          <div className="flex items-center gap-3">
            {STEPS.map((s, i) => (
              <div key={s.label} className="flex flex-1 items-center gap-3">
                <div className="flex-1">
                  <div
                    className="h-[3px] overflow-hidden rounded-none"
                    style={{
                      background: "color-mix(in srgb, var(--text-secondary) 18%, transparent)",
                    }}
                  >
                    <div
                      className="h-full rounded-none transition-all duration-500"
                      style={{
                        width: i < step ? "100%" : i === step ? "50%" : "0%",
                        background: "var(--cobalt)",
                        boxShadow:
                          i <= step
                            ? "0 0 12px rgba(46, 75, 255, 0.4)"
                            : "none",
                      }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4 flex justify-between">
            {STEPS.map((s, i) => (
              <span
                key={s.label}
                className="font-mono text-[10px] font-medium uppercase tracking-[0.22em] sm:text-[11px]"
                style={{
                  color:
                    i <= step ? "var(--cobalt)" : "var(--text-secondary)",
                }}
              >
                <span className="sm:hidden">0{i + 1}</span>
                <span className="hidden sm:inline">
                  0{i + 1} — {s.label}
                </span>
              </span>
            ))}
          </div>

          {/* Steps */}
          <div ref={stepRef} className="mt-12 sm:mt-16">
            {step === 0 && (
              <div className="space-y-10">
                <p
                  className="text-lg leading-relaxed lg:text-xl"
                  style={{ color: "var(--text-primary)" }}
                >
                  Para quem enviamos o diagnóstico?
                </p>
                <div>
                  <label
                    htmlFor="v3-name"
                    className={labelClass}
                    style={labelStyle}
                  >
                    Nome
                  </label>
                  <div style={inputWrap(false)}>
                    <input
                      id="v3-name"
                      type="text"
                      value={data.name}
                      onChange={(e) => update("name", e.target.value)}
                      onFocus={(e) =>
                        Object.assign(
                          (e.currentTarget.parentElement as HTMLElement).style,
                          inputWrap(true)
                        )
                      }
                      onBlur={(e) =>
                        Object.assign(
                          (e.currentTarget.parentElement as HTMLElement).style,
                          inputWrap(false)
                        )
                      }
                      placeholder="Seu nome"
                      className={inputClass}
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="v3-email"
                    className={labelClass}
                    style={labelStyle}
                  >
                    E-mail corporativo
                  </label>
                  <div style={inputWrap(false)}>
                    <input
                      id="v3-email"
                      type="email"
                      value={data.email}
                      onChange={(e) => update("email", e.target.value)}
                      onFocus={(e) =>
                        Object.assign(
                          (e.currentTarget.parentElement as HTMLElement).style,
                          inputWrap(true)
                        )
                      }
                      onBlur={(e) =>
                        Object.assign(
                          (e.currentTarget.parentElement as HTMLElement).style,
                          inputWrap(false)
                        )
                      }
                      placeholder="voce@empresa.com.br"
                      className={inputClass}
                    />
                  </div>
                  <p
                    className="mt-4 flex items-center gap-2 font-mono text-[11px]"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    <span
                      className="inline-block h-1.5 w-1.5 rounded-full"
                      style={{ background: "var(--cobalt)" }}
                    />
                    Apenas o diagnóstico. Sem spam.
                  </p>
                </div>
              </div>
            )}

            {step === 1 && (
              <div className="space-y-10">
                <p
                  className="text-lg leading-relaxed lg:text-xl"
                  style={{ color: "var(--text-primary)" }}
                >
                  Nos ajude a entender sua operação,{" "}
                  {data.name.split(" ")[0]}.
                </p>
                <div>
                  <label
                    htmlFor="v3-company"
                    className={labelClass}
                    style={labelStyle}
                  >
                    Empresa
                  </label>
                  <div style={inputWrap(false)}>
                    <input
                      id="v3-company"
                      type="text"
                      value={data.company}
                      onChange={(e) => update("company", e.target.value)}
                      placeholder="Nome da empresa"
                      className={inputClass}
                    />
                  </div>
                </div>
                <div>
                  <p
                    className={labelClass}
                    style={labelStyle}
                  >
                    Tamanho da equipe
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {employeeRanges.map((opt) => (
                      <button
                        key={opt.value}
                        type="button"
                        onClick={() => update("employees", opt.value)}
                        className={radioClass(data.employees === opt.value)}
                        style={radioStyle(data.employees === opt.value)}
                      >
                        <span className="font-mono text-xs">{opt.label}</span>
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <p
                    className={labelClass}
                    style={labelStyle}
                  >
                    Setor
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {verticals.map((opt) => (
                      <button
                        key={opt.value}
                        type="button"
                        onClick={() => update("vertical", opt.value)}
                        className={radioClass(data.vertical === opt.value)}
                        style={radioStyle(data.vertical === opt.value)}
                      >
                        <span className="text-xs">{opt.label}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-10">
                <p
                  className="text-lg leading-relaxed lg:text-xl"
                  style={{ color: "var(--text-primary)" }}
                >
                  Última etapa. Isso nos permite projetar o ROI do seu caso.
                </p>
                <div>
                  <p
                    className={labelClass}
                    style={labelStyle}
                  >
                    Qual sua urgência?
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {urgencyOptions.map((opt) => (
                      <button
                        key={opt.value}
                        type="button"
                        onClick={() => update("urgency", opt.value)}
                        className={radioClass(data.urgency === opt.value)}
                        style={radioStyle(data.urgency === opt.value)}
                      >
                        <span className="text-xs">{opt.label}</span>
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <p
                    className={labelClass}
                    style={labelStyle}
                  >
                    Investimento mensal estimado
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {budgetOptions.map((opt) => (
                      <button
                        key={opt.value}
                        type="button"
                        onClick={() => update("budget", opt.value)}
                        className={radioClass(data.budget === opt.value)}
                        style={radioStyle(data.budget === opt.value)}
                      >
                        <span className="text-xs">{opt.label}</span>
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="v3-message"
                    className={labelClass}
                    style={labelStyle}
                  >
                    Descreva seu desafio (opcional)
                  </label>
                  <div
                    style={{
                      borderBottom: "2px solid color-mix(in srgb, var(--text-secondary) 35%, transparent)",
                    }}
                    className="mt-3 transition-colors focus-within:border-b-[var(--cobalt)]"
                  >
                    <textarea
                      id="v3-message"
                      value={data.message}
                      onChange={(e) => update("message", e.target.value)}
                      rows={3}
                      className="w-full resize-none bg-transparent px-0 py-3 font-mono text-base outline-none placeholder:text-[var(--text-tertiary)]"
                      style={{ color: "var(--text-primary)" }}
                      placeholder="Ex: Quero automatizar o atendimento no WhatsApp..."
                    />
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Navigation */}
          <div
            className="mt-12 flex items-center gap-4 pt-10"
            style={{
              borderTop: "1px solid color-mix(in srgb, var(--text-secondary) 20%, transparent)",
            }}
          >
            {step > 0 && (
              <button
                type="button"
                onClick={() => setStep(step - 1)}
                className="font-mono text-[11px] font-medium uppercase tracking-[0.2em] transition-colors hover:text-[var(--cobalt)]"
                style={{ color: "var(--text-primary)" }}
              >
                ← Voltar
              </button>
            )}

            <div className="flex-1" />

            {step < 2 ? (
              <button
                type="button"
                onClick={() => canAdvance() && setStep(step + 1)}
                disabled={!canAdvance()}
                className="v3-magnet flex h-14 items-center gap-3 rounded-none px-9 font-mono text-[12px] font-medium uppercase tracking-[0.2em] disabled:opacity-30"
                style={{ background: "var(--cobalt)", color: "#FFFFFF" }}
                data-cursor="cobalt"
              >
                Continuar
                <span className="v3-magnet__icon">→</span>
              </button>
            ) : (
              <button
                type="button"
                onClick={handleSubmit}
                disabled={status === "loading"}
                className="v3-magnet flex h-14 items-center gap-3 rounded-none px-9 font-mono text-[12px] font-medium uppercase tracking-[0.2em] disabled:opacity-50"
                style={{ background: "var(--cobalt)", color: "#FFFFFF" }}
                data-cursor="cobalt"
              >
                {status === "loading"
                  ? "Enviando..."
                  : "Receber diagnóstico"}
                <span className="v3-magnet__icon">→</span>
              </button>
            )}
          </div>

          {status === "error" && (
            <p
              className="mt-4 font-mono text-[11px]"
              style={{ color: "#F87171" }}
            >
              Erro ao enviar. Tente novamente ou escreva para
              contato@mindloop.com.br
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
