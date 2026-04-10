import { NextResponse } from "next/server";
import { sendToSheet } from "@/lib/sheets";

// --- Rate limiting ---
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT = 5;
const RATE_WINDOW_MS = 60_000;

function getClientIP(request: Request): string {
  return request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
}

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);
  if (!entry || now > entry.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + RATE_WINDOW_MS });
    return false;
  }
  entry.count++;
  return entry.count > RATE_LIMIT;
}

// --- Validation ---
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const MAX_FIELD_LENGTH = 200;

function sanitize(value: unknown): string {
  if (typeof value !== "string") return "";
  return value.slice(0, MAX_FIELD_LENGTH).replace(/<[^>]*>/g, "").trim();
}

export async function POST(request: Request) {
  const ip = getClientIP(request);
  if (isRateLimited(ip)) {
    return NextResponse.json(
      { error: "Muitas requisicoes. Aguarde um momento." },
      { status: 429 }
    );
  }

  try {
    const body = await request.json();

    const name = sanitize(body.name);
    const email = sanitize(body.email);

    if (!name || name.length < 2) {
      return NextResponse.json({ error: "Nome invalido" }, { status: 400 });
    }

    if (!email || !EMAIL_REGEX.test(email)) {
      return NextResponse.json({ error: "Email invalido" }, { status: 400 });
    }

    await sendToSheet({
      name,
      email,
      company: sanitize(body.company),
      employees: sanitize(body.employees),
      vertical: sanitize(body.vertical),
      message: sanitize(body.message),
      urgency: sanitize(body.urgency),
      budget: sanitize(body.budget),
      score: sanitize(body.score),
      score_points: typeof body.score_points === "number" ? body.score_points : 0,
      source: "Formulario",
      utm_source: sanitize(body.utm_source),
      utm_medium: sanitize(body.utm_medium),
      utm_campaign: sanitize(body.utm_campaign),
      utm_term: sanitize(body.utm_term),
      utm_content: sanitize(body.utm_content),
      page_url: sanitize(body.page_url),
    });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Requisicao invalida" },
      { status: 400 }
    );
  }
}
