"use client";

import { useRef, useState } from "react";

export default function CopyEmail({ correo }: { correo: string }) {
  const [nota, setNota] = useState("");
  const ref = useRef<HTMLSpanElement>(null);

  async function copiar() {
    try {
      await navigator.clipboard.writeText(correo);
      setNota("Correo copiado.");
    } catch {
      const r = document.createRange();
      if (ref.current) r.selectNodeContents(ref.current);
      const s = window.getSelection();
      s?.removeAllRanges();
      s?.addRange(r);
      setNota("Seleccionado: pulsa Ctrl+C para copiarlo.");
    }
  }

  return (
    <div>
      <div className="flex flex-wrap items-center gap-4">
        <span ref={ref} id="mail-addr" className="select-all break-all font-mono text-xl font-bold md:text-3xl">{correo}</span>
        <button type="button" id="copy" onClick={copiar} className="btn btn-sun">Copiar correo</button>
      </div>
      <p id="copy-note" aria-live="polite" className="mt-2 min-h-[1.5em] font-mono text-sm text-sun">{nota}</p>
    </div>
  );
}
