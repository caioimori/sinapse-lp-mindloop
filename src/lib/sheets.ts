const SHEETS_WEBHOOK_URL = process.env.SHEETS_WEBHOOK_URL;

export async function sendToSheet(data: Record<string, string | number | undefined>) {
  if (!SHEETS_WEBHOOK_URL) {
    throw new Error("SHEETS_WEBHOOK_URL not configured in environment variables");
  }

  const response = await fetch(SHEETS_WEBHOOK_URL, {
    method: "POST",
    headers: { "Content-Type": "text/plain" },
    body: JSON.stringify(data),
    signal: AbortSignal.timeout(10_000),
  });

  if (!response.ok) {
    throw new Error(`Sheets webhook returned ${response.status}`);
  }
}
