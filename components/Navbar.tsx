"use client";

import { useState } from "react";
import { perfil } from "@/data/perfil";
import Sparkle from "./Sparkle";

const links = [
  { texto: "Sobre mí", href: "#sobre-mi" },
  { texto: "Proyectos", href: "#proyectos" },
  { texto: "Testimonios", href: "#testimonios" },
  { texto: "Experiencia", href: "#experiencia" },
  { texto: "Contacto", href: "#contacto" },
];

export default function Navbar() {
  const [abierto, setAbierto] = useState(false);

  return (
    <header
      data-nav
      className="sticky z-50 border-b border-cream/15 bg-pine/90 backdrop-blur"
      style={{ top: "env(safe-area-inset-top, 0px)" }}
    >
      <div className="wrap flex h-16 items-center justify-between gap-4">
        <a href="#inicio" className="flex items-center gap-2 font-display text-xl font-black">
          <Sparkle className="h-6 w-6 text-coral" />
          {perfil.corto}
        </a>

        <nav aria-label="Principal" className="hidden items-center gap-7 md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm text-cream/85 transition hover:text-sun">
              {l.texto}
            </a>
          ))}
          <a href={perfil.cv} download data-cv className="btn btn-sun !py-2">
            CV ↓
          </a>
        </nav>

        <button
          type="button"
          data-menu-btn
          className="flex h-11 w-11 flex-col items-center justify-center gap-1.5 rounded-full border-2 border-cream/60 md:hidden"
          aria-label="Abrir menú"
          aria-expanded={abierto}
          aria-controls="menu-movil"
          onClick={() => setAbierto((v) => !v)}
        >
          <span className="h-0.5 w-5 bg-cream" />
          <span className="h-0.5 w-5 bg-cream" />
          <span className="h-0.5 w-5 bg-cream" />
        </button>
      </div>

      <div id="menu-movil" data-menu hidden={!abierto} className="border-t border-cream/15 bg-pine md:hidden">
        <ul className="wrap flex flex-col gap-1 py-4">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} onClick={() => setAbierto(false)} className="block py-3 font-display text-2xl font-bold">
                {l.texto}
              </a>
            </li>
          ))}
          <li className="pt-2">
            <a href={perfil.cv} download data-cv className="btn btn-sun">
              Descargar CV ↓
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
