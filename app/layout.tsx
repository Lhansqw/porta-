import type { Metadata, Viewport } from "next";
import { DM_Sans, Fraunces, JetBrains_Mono } from "next/font/google";
import { perfil } from "@/data/perfil";
import "./globals.css";

const display = Fraunces({ subsets: ["latin"], axes: ["SOFT", "WONK", "opsz"], variable: "--font-display", display: "swap" });
const body = DM_Sans({ subsets: ["latin"], weight: ["400", "500", "700"], variable: "--font-body", display: "swap" });
const mono = JetBrains_Mono({ subsets: ["latin"], weight: ["400", "500", "700"], variable: "--font-mono", display: "swap" });

const titulo = `${perfil.nombre} · ${perfil.rol}`;

export const metadata: Metadata = {
  title: titulo,
  description: perfil.intro,
  openGraph: { title: titulo, description: perfil.intro, locale: "es_CO", type: "website" },
};

export const viewport: Viewport = { width: "device-width", initialScale: 1, viewportFit: "cover", themeColor: "#223826" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`scroll-smooth ${display.variable} ${body.variable} ${mono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
