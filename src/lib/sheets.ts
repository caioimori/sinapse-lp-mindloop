const SHEETS_WEBHOOK_URL = process.env.SHEETS_WEBHOOK_URL;

export async function sendToSheet(data: Record<string, string | number | undefined>) {
  if (!SHEETS_WEBHOOK_URL) {
    console.error("SHEETS_WEBHOOK_URL not configured in environment variables");
    return;
  }

  try {
    await fetch(SHEETS_WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "text/plain" },
      body: JSON.stringify(data),
    });
  } catch (err) {
    console.error("Sheets webhook error:", err);
  }
}
