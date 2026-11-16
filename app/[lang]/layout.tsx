import type { Metadata, Viewport } from "next";
import { notFound } from "next/navigation";
import { Cormorant_Garamond, DM_Sans, Fraunces, JetBrains_Mono } from "next/font/google";
import { perfil } from "@/data/perfil";
import { esIdioma, idiomas, rutaIdioma } from "@/lib/i18n";
import "../globals.css";

const display = Fraunces({ subsets: ["latin"], axes: ["SOFT", "WONK", "opsz"], variable: "--font-display", display: "swap" });
const body = DM_Sans({ subsets: ["latin"], weight: ["400", "500", "700"], variable: "--font-body", display: "swap" });
const mono = JetBrains_Mono({ subsets: ["latin"], weight: ["400", "500", "700"], variable: "--font-mono", display: "swap" });
const menu = Cormorant_Garamond({ subsets: ["latin"], weight: ["400", "500", "600"], variable: "--font-menu", display: "swap" });

// Aplica el tema guardado antes de pintar, para que el modo claro no parpadee en oscuro al cargar
const temaGuardado = `try{if(localStorage.getItem("tema")==="light")document.documentElement.dataset.theme="light"}catch(e){}`;

export const dynamicParams = false;
export const generateStaticParams = () => idiomas.map((lang) => ({ lang }));

export async function generateMetadata({ params }: LayoutProps<"/[lang]">): Promise<Metadata> {
  const { lang } = await params;
  if (!esIdioma(lang)) return {};
  const titulo = `${perfil.nombre} · ${perfil.rol[lang]}`;
  return {
    title: titulo,
    description: perfil.intro[lang],
    alternates: { canonical: rutaIdioma[lang], languages: { es: rutaIdioma.es, en: rutaIdioma.en } },
    openGraph: { title: titulo, description: perfil.intro[lang], locale: lang === "es" ? "es_CO" : "en_US", type: "website" },
  };
}

export const viewport: Viewport = { width: "device-width", initialScale: 1, viewportFit: "cover", themeColor: "#0A0F1E" };

export default async function RootLayout({ children, params }: LayoutProps<"/[lang]">) {
  const { lang } = await params;
  if (!esIdioma(lang)) notFound();
  return (
    <html
      lang={lang}
      data-theme="dark"
      suppressHydrationWarning
      className={`scroll-smooth ${display.variable} ${body.variable} ${mono.variable} ${menu.variable}`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: temaGuardado }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
