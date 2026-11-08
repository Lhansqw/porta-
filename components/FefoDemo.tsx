"use client";

import { useState } from "react";

type Lote = { lote: string; vence: string; orden: string; inicial: number };

const LOTES: Lote[] = [
  { lote: "1042", vence: "03/2027", orden: "2027-03", inicial: 24 },
  { lote: "0987", vence: "12/2026", orden: "2026-12", inicial: 6 },
  { lote: "1103", vence: "08/2027", orden: "2027-08", inicial: 40 },
];

const MENSAJE_INICIAL = "Pulsa vender: sale primero el lote que vence antes, no el que llegó primero.";

export default function FefoDemo() {
  const [stock, setStock] = useState<Record<string, number>>(() => Object.fromEntries(LOTES.map((l) => [l.lote, l.inicial])));
  const [activo, setActivo] = useState<string | null>(null);
  const [mensaje, setMensaje] = useState(MENSAJE_INICIAL);

  const total = Object.values(stock).reduce((a, b) => a + b, 0);

  function vender() {
    const disponibles = LOTES.filter((l) => stock[l.lote] > 0).sort((a, b) => (a.orden < b.orden ? -1 : 1));
    if (!disponibles.length) return;
    const l = disponibles[0];
    const quedan = stock[l.lote] - 1;
    setStock({ ...stock, [l.lote]: quedan });
    setActivo(l.lote);
    setTimeout(() => setActivo(null), 700);
    setMensaje(
      total - 1 === 0
        ? "Sin existencias en los tres lotes. Reinicia para volver a probar."
        : `Salió del lote ${l.lote} (vence ${l.vence}), el más próximo a vencer.${quedan === 0 ? " Lote agotado." : ""}`,
    );
  }

  function reiniciar() {
    setStock(Object.fromEntries(LOTES.map((l) => [l.lote, l.inicial])));
    setMensaje(MENSAJE_INICIAL);
  }

  return (
    <div data-fefo className="flex h-full w-full flex-col justify-center gap-3 p-5 font-mono text-xs text-ink md:p-7">
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <b className="font-body text-base">Acetaminofén 500 mg</b>
        <span className="border-[1.5px] border-ink px-1.5 py-0.5 text-[10px] uppercase tracking-wider">datos de ejemplo</span>
      </div>
      <ul className="grid gap-2">
        {LOTES.map((l) => {
          const vacio = stock[l.lote] === 0;
          const elegido = activo === l.lote;
          return (
            <li
              key={l.lote}
              data-lote={l.lote}
              data-orden={l.orden}
              data-inicial={l.inicial}
              className={`flex flex-wrap items-center gap-x-4 gap-y-1 border-2 border-ink px-3 py-2 transition ${
                elegido ? "translate-x-2 bg-ink text-sun" : "bg-white"
              } ${vacio ? "line-through opacity-45" : ""}`}
            >
              <span className="font-bold">Lote {l.lote}</span>
              <span>vence {l.vence}</span>
              <span data-qty className="ml-auto font-bold tabular-nums">{stock[l.lote]} u.</span>
            </li>
          );
        })}
      </ul>
      <div className="flex flex-wrap gap-2">
        <button type="button" data-vender onClick={vender} disabled={total === 0} className="border-2 border-ink bg-ink px-3.5 py-2 font-bold uppercase tracking-wide text-sun disabled:cursor-not-allowed disabled:opacity-40">
          Vender 1 unidad
        </button>
        <button type="button" data-reiniciar onClick={reiniciar} className="border-2 border-ink px-3.5 py-2 font-bold uppercase tracking-wide">
          Reiniciar
        </button>
      </div>
      <p data-fefo-msg aria-live="polite" className="min-h-[2.8em] leading-snug">{mensaje}</p>
    </div>
  );
}
