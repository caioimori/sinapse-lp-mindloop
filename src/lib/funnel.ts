const ATTRIBUTION_KEYS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_term",
  "utm_content",
  "gclid",
  "fbclid",
  "ttclid",
] as const;

export type FunnelEventName =
  | "page_view"
  | "contact_cta_click"
  | "academy_entry_click"
  | "academy_checkout_click"
  | "lead_submit"
  | "whatsapp_redirect";

export function buildCheckoutUrl(url: string, search = "") {
  try {
    const destination = new URL(url);
    const source = new URLSearchParams(search);

    for (const key of ATTRIBUTION_KEYS) {
      const value = source.get(key);
      if (value && !destination.searchParams.has(key)) {
        destination.searchParams.set(key, value);
      }
    }

    return destination.toString();
  } catch {
    return url;
  }
}

export function trackFunnelEvent(
  name: FunnelEventName,
  properties: Record<string, string | undefined> = {}
) {
  if (typeof window === "undefined") return;

  const payload = {
    event: name,
    ...properties,
    path: window.location.pathname,
  };

  window.dispatchEvent(new CustomEvent("mindloop:funnel", { detail: payload }));

  const dataLayer = (window as Window & { dataLayer?: unknown[] }).dataLayer;
  dataLayer?.push(payload);
}
