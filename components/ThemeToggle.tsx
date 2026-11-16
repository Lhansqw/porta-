"use client";

import { useEffect, useState } from "react";

/* Alterna entre el modo oscuro (el normal) y el claro, y recuerda la elección. */
export default function ThemeToggle({ aClaro, aOscuro }: { aClaro: string; aOscuro: string }) {
  const [claro, setClaro] = useState(false);

  useEffect(() => setClaro(document.documentElement.dataset.theme === "light"), []);

  function alternar() {
    const siguiente = !claro;
    document.documentElement.dataset.theme = siguiente ? "light" : "dark";
    try {
      localStorage.setItem("tema", siguiente ? "light" : "dark");
    } catch {}
    setClaro(siguiente);
  }

  return (
    <button
      type="button"
      onClick={alternar}
      aria-label={claro ? aOscuro : aClaro}
      title={claro ? aOscuro : aClaro}
      className="grid h-10 w-10 place-items-center rounded-full border border-cream/30 text-cream transition hover:border-sun hover:text-sun"
    >
      {/* Luna en modo claro, sol en modo oscuro: muestra a qué modo se pasa */}
      <svg viewBox="0 0 24 24" aria-hidden="true" className="solo-oscuro h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
      </svg>
      <svg viewBox="0 0 24 24" aria-hidden="true" className="solo-claro h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round">
        <path d="M20 14.5A8 8 0 0 1 9.5 4a8 8 0 1 0 10.5 10.5Z" />
      </svg>
    </button>
  );
}
