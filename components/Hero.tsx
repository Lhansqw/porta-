"use client";

import { useRef, useState } from "react";
import { perfil } from "@/data/perfil";
import { textos } from "@/data/textos";
import type { Lang } from "@/lib/i18n";
import Sparkle from "./Sparkle";
import SplitWords from "./SplitWords";

type Opcion = { texto: string; href: string; ayuda: string; cv?: boolean };

export default function Hero({ lang }: { lang: Lang }) {
  const t = textos[lang].hero;
  const opciones: Opcion[] = [...t.opciones, { ...t.cv, href: perfil.cv, cv: true }];
  const [activo, setActivo] = useState(0);
  const refs = useRef<(HTMLAnchorElement | null)[]>([]);

  const mover = (e: React.KeyboardEvent) => {
    const paso = e.key === "ArrowDown" ? 1 : e.key === "ArrowUp" ? -1 : 0;
    if (!paso) return;
    e.preventDefault();
    const siguiente = (activo + paso + opciones.length) % opciones.length;
    setActivo(siguiente);
    refs.current[siguiente]?.focus();
  };

  const opcion = (o: Opcion, i: number) => (
    <a
      ref={(el) => {
        refs.current[i] = el;
      }}
      href={o.href}
      download={o.cv || undefined}
      data-cv={o.cv || undefined}
      data-activo={activo === i || undefined}
      tabIndex={activo === i ? 0 : -1}
      onPointerEnter={() => setActivo(i)}
      onFocus={() => setActivo(i)}
      className="menu-item"
    >
      {o.texto}
    </a>
  );

  const ultimo = opciones.length - 1;

  return (
    <section
      id="inicio"
      data-hero
      className="hex-bg relative z-10 flex min-h-[calc(100svh-4rem)] flex-col overflow-x-clip text-cream"
    >
      <div className="wrap grid flex-1 items-center gap-14 py-16 md:grid-cols-12 md:gap-8 md:py-20">
        <div className="md:col-span-7 md:self-end">
          <p data-hero-info className="eyebrow text-coral">{perfil.rol[lang]}</p>
          <h1
            data-hero-title
            data-split
            className="mt-4 font-menu font-medium uppercase leading-[0.95] tracking-[0.04em] text-cream"
            style={{ fontSize: "clamp(2.8rem, 8vw, 6.4rem)", textWrap: "balance" }}
          >
            <SplitWords text={perfil.corto} />
          </h1>
          <p data-hero-info className="mt-6 max-w-[42ch] text-lg leading-relaxed text-cream/75">
            {perfil.intro[lang]}
          </p>
        </div>

        <nav aria-label={t.secciones} onKeyDown={mover} className="w-full max-w-xs md:col-span-5 md:justify-self-end">
          <ul className="flex flex-col border-l border-coral/30 pl-6">
            {opciones.slice(0, ultimo).map((o, i) => (
              <li key={o.href} data-hero-info>
                {opcion(o, i)}
              </li>
            ))}
          </ul>
          <div data-hero-info className="mt-8 flex items-center gap-3 pl-[1.1rem]">
            <span aria-hidden="true" className="grid h-7 w-7 rotate-45 place-items-center border border-coral/60">
              <Sparkle className="h-3.5 w-3.5 -rotate-45 text-coral" />
            </span>
            {opcion(opciones[ultimo], ultimo)}
          </div>
        </nav>
      </div>

      <div className="border-t border-cream/10 bg-ink/50">
        <div className="wrap flex h-14 items-center text-sm">
          <p aria-live="polite">{opciones[activo].ayuda}</p>
        </div>
      </div>
    </section>
  );
}
