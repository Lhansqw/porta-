"use client";

import { useState } from "react";
import { perfil } from "@/data/perfil";
import { textos } from "@/data/textos";
import { rutaIdioma, type Lang } from "@/lib/i18n";
import Sparkle from "./Sparkle";
import ThemeToggle from "./ThemeToggle";

export default function Navbar({ lang }: { lang: Lang }) {
  const t = textos[lang].nav;
  const otro: Lang = lang === "es" ? "en" : "es";
  const [abierto, setAbierto] = useState(false);

  const idioma = (
    <a
      href={rutaIdioma[otro]}
      hrefLang={otro}
      lang={otro}
      aria-label={t.otroIdioma.aria}
      className="grid h-10 min-w-10 place-items-center rounded-full border border-cream/30 px-2 font-mono text-xs font-bold tracking-wider text-cream transition hover:border-sun hover:text-sun"
    >
      {t.otroIdioma.corto}
    </a>
  );

  return (
    <header
      data-nav
      className="sticky z-50 border-b border-cream/15 bg-pine/90 backdrop-blur"
      style={{ top: "env(safe-area-inset-top, 0px)" }}
    >
      <div className="wrap flex h-16 items-center justify-between gap-4">
        <a href="#inicio" data-logo className="flex items-center gap-2 whitespace-nowrap font-menu text-base font-semibold uppercase tracking-[0.06em] sm:text-xl sm:tracking-[0.1em]">
          <Sparkle data-logo-sparkle className="h-6 w-6 text-coral" />
          {perfil.corto}
        </a>

        <nav aria-label={t.principal} className="hidden items-center gap-6 xl:flex">
          {t.links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="whitespace-nowrap font-menu text-[0.95rem] font-medium uppercase tracking-[0.1em] text-cream/80 transition hover:text-sun"
            >
              {l.texto}
            </a>
          ))}
          <a href={perfil.cv} download data-cv className="btn btn-sun !py-2">
            CV
          </a>
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle aClaro={t.aClaro} aOscuro={t.aOscuro} />
          {idioma}
          <button
            type="button"
            data-menu-btn
            className="flex h-11 w-11 flex-col items-center justify-center gap-1.5 rounded-full border-2 border-cream/60 xl:hidden"
            aria-label={t.abrirMenu}
            aria-expanded={abierto}
            aria-controls="menu-movil"
            onClick={() => setAbierto((v) => !v)}
          >
            <span className="h-0.5 w-5 bg-cream" />
            <span className="h-0.5 w-5 bg-cream" />
            <span className="h-0.5 w-5 bg-cream" />
          </button>
        </div>
      </div>

      <div id="menu-movil" data-menu hidden={!abierto} className="border-t border-cream/15 bg-pine xl:hidden">
        <ul className="wrap flex flex-col gap-1 py-4">
          {t.links.map((l) => (
            <li key={l.href}>
              <a href={l.href} onClick={() => setAbierto(false)} className="block py-3 font-menu text-2xl font-medium uppercase tracking-[0.12em]">
                {l.texto}
              </a>
            </li>
          ))}
          <li className="pt-2">
            <a href={perfil.cv} download data-cv className="btn btn-sun">
              {t.descargarCv}
            </a>
          </li>
        </ul>
      </div>

      <div
        data-progress
        className="absolute inset-x-0 bottom-0 h-[3px] bg-sun"
        style={{ transform: "scaleX(0)", transformOrigin: "0 50%" }}
      />
    </header>
  );
}
