export const IVO_WHATSAPP_NUMBER =
  process.env.NEXT_PUBLIC_IVO_WHATSAPP_NUMBER || "5511976415353";
export const CONTACT_FORM_URL = "#contato";
export const CLAUDE_DESKTOP_CHECKOUT_URL =
  process.env.NEXT_PUBLIC_CLAUDE_DESKTOP_CHECKOUT_URL ||
  "https://pay.hub.la/cYoNEywf9DZCyCQIYzYI";

const DEFAULT_IVO_MESSAGE =
  "Olá! Vim pelo site da Mindloop e gostaria de entender como a inteligência artificial pode ajudar minha operação.";

export function buildIvoWhatsAppUrl(message = DEFAULT_IVO_MESSAGE) {
  return `https://wa.me/${IVO_WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
