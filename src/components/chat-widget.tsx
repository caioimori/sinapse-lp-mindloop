"use client";

import { useState, useRef, useEffect, useCallback } from "react";

interface Message {
  role: "user" | "assistant";
  content: string;
}

function renderMarkdown(text: string) {
  return text.split("\n").map((line, i) => {
    if (!line.trim()) return <br key={i} />;

    const isBullet = line.trim().startsWith("\u2022") || line.trim().startsWith("- ");
    const cleanLine = isBullet ? line.replace(/^[\s]*[\u2022\-]\s?/, "") : line;

    // Parse **bold** into React elements (safe — no dangerouslySetInnerHTML)
    const parts = cleanLine.split(/(\*\*.+?\*\*)/g);
    const elements = parts.map((part, j) => {
      if (part.startsWith("**") && part.endsWith("**")) {
        return <strong key={j}>{part.slice(2, -2)}</strong>;
      }
      return <span key={j}>{part}</span>;
    });

    return (
      <p key={i} className={isBullet ? "flex items-start gap-0 pl-1" : ""}>
        {isBullet && <span className="mr-1.5">{"\u2022"}</span>}
        {elements}
      </p>
    );
  });
}

export function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(false);
  const [closing, setClosing] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "Ol\u00e1! Sou o assistente da MINDLOOP. Como posso ajudar voc\u00ea hoje?",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  useEffect(() => {
    if (visible) {
      const t = setTimeout(() => inputRef.current?.focus(), 300);
      return () => clearTimeout(t);
    }
  }, [visible]);

  const handleOpen = useCallback(() => {
    setOpen(true);
    requestAnimationFrame(() => setVisible(true));
  }, []);

  const handleClose = useCallback(() => {
    setClosing(true);
    setVisible(false);
    const t = setTimeout(() => {
      setOpen(false);
      setClosing(false);
    }, 300);
    return () => clearTimeout(t);
  }, []);

  const toggle = useCallback(() => {
    if (open && !closing) handleClose();
    else if (!open) handleOpen();
  }, [open, closing, handleOpen, handleClose]);

  async function sendMessage(e: React.FormEvent) {
    e.preventDefault();
    if (!input.trim() || loading) return;

    const userMsg: Message = { role: "user", content: input.trim() };
    const newMessages = [...messages, userMsg];
    setMessages(newMessages);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: newMessages }),
      });
      const data = await res.json();
      setMessages([...newMessages, { role: "assistant", content: data.reply }]);
    } catch {
      setMessages([
        ...newMessages,
        { role: "assistant", content: "Erro ao processar. Tente novamente ou envie um e-mail para contato@mindloop.com.br." },
      ]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      {/* Chat panel */}
      {open && (
        <div
          className={`fixed bottom-24 right-6 z-50 flex h-[480px] w-[380px] flex-col overflow-hidden rounded-lg border border-border bg-bg shadow-lg transition-all duration-300 ease-out sm:right-8 ${
            visible && !closing
              ? "translate-y-0 scale-100 opacity-100"
              : "translate-y-4 scale-95 opacity-0"
          }`}
          style={{ transformOrigin: "bottom right" }}
        >
          {/* Header */}
          <div className="flex items-center justify-between border-b border-border bg-accent px-5 py-4">
            <div>
              <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.15em] text-accent-foreground">
                MINDLOOP
              </p>
              <p className="mt-0.5 text-[11px] text-accent-foreground/60">
                Assistente virtual
              </p>
            </div>
            <button
              onClick={handleClose}
              className="flex h-7 w-7 items-center justify-center rounded-sm text-accent-foreground/60 hover:text-accent-foreground transition-colors"
              aria-label="Fechar chat"
            >
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M4 4l8 8M12 4l-8 8" />
              </svg>
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto px-5 py-4 space-y-4">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[85%] rounded-lg px-4 py-2.5 text-sm leading-relaxed ${
                    msg.role === "user"
                      ? "bg-accent text-accent-foreground"
                      : "bg-surface text-text-primary"
                  }`}
                >
                  {msg.role === "assistant" ? (
                    <div className="space-y-1.5">{renderMarkdown(msg.content)}</div>
                  ) : (
                    msg.content
                  )}
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div className="rounded-lg bg-surface px-4 py-2.5">
                  <div className="flex gap-1">
                    <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-text-tertiary [animation-delay:0ms]" />
                    <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-text-tertiary [animation-delay:150ms]" />
                    <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-text-tertiary [animation-delay:300ms]" />
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <form onSubmit={sendMessage} className="border-t border-border px-4 py-3">
            <div className="flex gap-2">
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Digite sua mensagem..."
                disabled={loading}
                className="flex-1 rounded-sm border border-border bg-bg px-3 py-2 text-sm text-text-primary placeholder:text-text-tertiary outline-none transition-colors focus:border-accent disabled:opacity-50"
              />
              <button
                type="submit"
                disabled={loading || !input.trim()}
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-sm bg-accent text-accent-foreground hover:bg-accent-hover transition-colors disabled:opacity-30"
                aria-label="Enviar"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="22" y1="2" x2="11" y2="13" />
                  <polygon points="22 2 15 22 11 13 2 9 22 2" />
                </svg>
              </button>
            </div>
            <p className="mt-2 text-center font-mono text-[9px] text-text-tertiary">
              Powered by MINDLOOP AI
            </p>
          </form>
        </div>
      )}

      {/* Trigger button */}
      <button
        onClick={toggle}
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-accent text-accent-foreground shadow-lg hover:bg-accent-hover transition-all duration-300 hover:scale-105 sm:bottom-8 sm:right-8"
        aria-label={open ? "Fechar chat" : "Abrir chat"}
      >
        <div className={`absolute transition-all duration-300 ${open ? "rotate-0 scale-100 opacity-100" : "-rotate-90 scale-0 opacity-0"}`}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </div>
        <div className={`absolute transition-all duration-300 ${open ? "rotate-90 scale-0 opacity-0" : "rotate-0 scale-100 opacity-100"}`}>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
          </svg>
        </div>
      </button>
    </>
  );
}
