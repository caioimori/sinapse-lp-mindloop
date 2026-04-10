import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { ChatWidget } from "@/components/chat-widget";
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
  title: "MINDLOOP — AI Agents para empresas brasileiras",
  description:
    "Agentes de IA multi-agente produtizados para o mid-market brasileiro. Deploy em semanas, nao meses. R$ 8K-50K.",
  openGraph: {
    title: "MINDLOOP — AI Agents para empresas brasileiras",
    description:
      "IA de verdade, sem preco enterprise. Agentes inteligentes que operam por voce.",
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
      className={`${inter.variable} ${jetbrainsMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col font-sans">
        <ThemeProvider>
          {children}
          <ChatWidget />
        </ThemeProvider>
      </body>
    </html>
  );
}
