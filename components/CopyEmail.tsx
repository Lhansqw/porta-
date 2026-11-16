"use client";

import { useRef, useState } from "react";
import { textos } from "@/data/textos";
import type { Lang } from "@/lib/i18n";

export default function CopyEmail({ correo, lang }: { correo: string; lang: Lang }) {
  const t = textos[lang].copy;
  const [nota, setNota] = useState("");
  const ref = useRef<HTMLSpanElement>(null);

  async function copiar() {
    try {
      await navigator.clipboard.writeText(correo);
      setNota(t.copiado);
    } catch {
      const r = document.createRange();
      if (ref.current) r.selectNodeContents(ref.current);
      const s = window.getSelection();
      s?.removeAllRanges();
      s?.addRange(r);
      setNota(t.seleccionado);
    }
  }

  return (
    <div>
      <div className="flex flex-wrap items-center gap-4">
        <span ref={ref} id="mail-addr" className="select-all break-all font-mono text-xl font-bold md:text-3xl">{correo}</span>
        <button type="button" id="copy" onClick={copiar} className="btn btn-sun">{t.boton}</button>
      </div>
      <p id="copy-note" aria-live="polite" className="mt-2 min-h-[1.5em] font-mono text-sm text-sun">{nota}</p>
    </div>
  );
}
