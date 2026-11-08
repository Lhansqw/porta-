"use client";

import { useEffect, useState } from "react";
import { relaciones, testimoniosFijos, type Testimonio } from "@/data/testimonials";
import SplitWords from "./SplitWords";

export default function Testimonials() {
  const [remotos, setRemotos] = useState<Testimonio[]>([]);
  const [activo, setActivo] = useState<boolean | null>(null);
  const [enviando, setEnviando] = useState(false);
  const [estado, setEstado] = useState<{ tipo: "ok" | "error"; texto: string } | null>(null);

  useEffect(() => {
    let vivo = true;
    fetch("/api/testimonios")
      .then((r) => r.json())
      .then((d) => {
        if (!vivo) return;
        setRemotos(d.testimonios ?? []);
        setActivo(Boolean(d.activo));
      })
      .catch(() => vivo && setActivo(false));
    return () => {
      vivo = false;
    };
  }, []);

  const lista = [...testimoniosFijos, ...remotos];

  async function enviar(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const datos = Object.fromEntries(new FormData(form).entries());
    setEnviando(true);
    setEstado(null);
    try {
      const res = await fetch("/api/testimonios", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(datos),
      });
      const json = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(json.error ?? "No se pudo enviar.");
      form.reset();
      setEstado({ tipo: "ok", texto: "¡Gracias! Tu testimonio se publicará cuando lo apruebe." });
    } catch (err) {
      setEstado({ tipo: "error", texto: err instanceof Error ? err.message : "No se pudo enviar." });
    } finally {
      setEnviando(false);
    }
  }

  return (
    <section id="testimonios" className="section bg-forest text-cream">
      <div className="wrap">
        <h2 data-reveal data-split className="h2">
          <SplitWords text={lista.length > 0 ? "Lo que dicen de mi trabajo" : "Deja tu testimonio"} />
        </h2>
        <p className="mt-4 max-w-[48ch] text-cream/75">
          Si trabajamos juntos en un proyecto o una clase, déjame unas palabras. Se publican después de revisarlas.
        </p>

        {lista.length > 0 && (
        <ul id="lista-testimonios" className="mt-10 grid gap-6 md:grid-cols-3">
          {lista.map((t) => (
            <li key={t.id} className="flex flex-col gap-4 bg-cream p-6 text-ink">
              <blockquote className="text-lg leading-snug">“{t.mensaje}”</blockquote>
              <p className="mt-auto font-mono text-xs uppercase tracking-wider">
                <span className="font-bold">{t.nombre}</span> · {t.relacion}
              </p>
            </li>
          ))}
        </ul>
        )}

        <form
          id="form-testimonio"
          onSubmit={enviar}
          aria-label="Deja tu testimonio"
          className="mt-10 grid gap-5 bg-black p-6 md:grid-cols-2 md:p-8"
        >
          <label className="grid gap-2 text-sm">
            Nombre
            <input name="nombre" required minLength={2} maxLength={80} autoComplete="name" className="rounded-none border-2 border-cream/40 bg-transparent px-3 py-3 text-cream placeholder:text-cream/40" placeholder="Tu nombre" />
          </label>
          <label className="grid gap-2 text-sm">
            Relación conmigo
            <select name="relacion" required defaultValue="" className="rounded-none border-2 border-cream/40 bg-black px-3 py-3 text-cream">
              <option value="" disabled>Elige una opción</option>
              {relaciones.map((r) => (
                <option key={r} value={r}>{r}</option>
              ))}
            </select>
          </label>
          <label className="grid gap-2 text-sm md:col-span-2">
            Mensaje
            <textarea name="mensaje" required minLength={10} maxLength={600} rows={4} className="rounded-none border-2 border-cream/40 bg-transparent px-3 py-3 text-cream placeholder:text-cream/40" placeholder="Entre 10 y 600 caracteres" />
          </label>
          {/* Campo trampa para bots */}
          <input name="web" tabIndex={-1} autoComplete="off" aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 opacity-0" />
          <div className="flex flex-wrap items-center gap-4 md:col-span-2">
            <button type="submit" disabled={enviando} className="btn btn-sun disabled:opacity-60">
              {enviando ? "Enviando…" : "Enviar testimonio"}
            </button>
            <p aria-live="polite" id="estado-testimonio" className={`text-sm ${estado?.tipo === "error" ? "text-coral" : "text-sun"}`}>
              {estado?.texto ?? (activo === false ? "Los testimonios todavía no están activos en este sitio." : "")}
            </p>
          </div>
        </form>
      </div>
    </section>
  );
}
