import { Suspense } from "react";
import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { ChatWidget } from "@/components/chat-widget";
import { FunnelTracker } from "@/components/funnel-tracker";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.mindloop.com.br"),
  title: "MINDLOOP — IA aplicada à gestão condominial",
  description:
    "Assistentes digitais para síndicos profissionais e administradoras atenderem moradores, organizarem solicitações e encontrarem informações com mais agilidade.",
  openGraph: {
    title: "MINDLOOP — IA aplicada à gestão condominial",
    description:
      "Inteligência artificial para reduzir tarefas repetitivas e organizar melhor a gestão dos condomínios.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${inter.variable} ${jetbrainsMono.variable} dark h-full antialiased`}
    >
      <body suppressHydrationWarning className="min-h-full flex flex-col font-sans">
        {children}
        <Suspense fallback={null}>
          <FunnelTracker />
        </Suspense>
        <ChatWidget />
      </body>
    </html>
  );
}
