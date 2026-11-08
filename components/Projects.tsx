"use client";

import { useState } from "react";
import { proyectos, type Categoria } from "@/data/projects";
import FefoDemo from "./FefoDemo";

const filtros: { id: Categoria | "todos"; texto: string }[] = [
  { id: "todos", texto: "Todos" },
  { id: "escritorio", texto: "Escritorio" },
  { id: "movil", texto: "Móvil" },
  { id: "web", texto: "Web" },
  { id: "academico", texto: "Académico" },
];

export default function Projects() {
  const [filtro, setFiltro] = useState<Categoria | "todos">("todos");

  return (
    <section id="proyectos" className="section bg-ink text-cream">
      <div className="wrap">
        <h2 data-reveal className="h2">Galería de proyectos</h2>
        <p className="mt-4 max-w-[46ch] text-cream/70">
          Productos funcionales y trabajo académico de diseño de software.
        </p>

        <div role="group" aria-label="Filtrar proyectos" className="mt-8 flex flex-wrap gap-3">
          {filtros.map((f) => (
            <button
              key={f.id}
              type="button"
              data-filter={f.id}
              aria-pressed={filtro === f.id}
              onClick={() => setFiltro(f.id)}
              className={`rounded-full border-2 px-4 py-2 font-mono text-xs uppercase tracking-wider transition ${
                filtro === f.id ? "border-sun bg-sun text-ink" : "border-cream/40 hover:border-sun"
              }`}
            >
              {f.texto}
            </button>
          ))}
        </div>

        <div id="grid-proyectos" className="mt-12 grid gap-16 md:gap-24">
          {proyectos.map((p, i) => {
            const invertido = i % 2 === 1;
            const sombra = ["bg-sun", "bg-rust", "bg-coral"][i % 3];
            return (
              <article
                key={p.id}
                data-reveal
                data-tags={p.categorias.join(" ")}
                hidden={!(filtro === "todos" || p.categorias.includes(filtro))}
                className="grid items-center gap-8 border-t border-cream/15 pt-12 md:grid-cols-12 md:gap-12"
              >
                <div className={`relative md:col-span-7 ${invertido ? "md:order-2" : ""}`}>
                  <div aria-hidden="true" className={`absolute inset-0 translate-x-3 translate-y-3 rounded-3xl ${sombra} md:translate-x-5 md:translate-y-5`} />
                  <div
                    style={p.fondo ? { backgroundColor: p.fondo } : undefined}
                    className={`relative overflow-hidden rounded-3xl ${p.arte === "fefo" ? "bg-sun min-h-[320px]" : "aspect-[16/10]"}`}
                  >
                    {p.arte === "fefo" ? (
                      <FefoDemo />
                    ) : (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img src={`/arte/${p.arte}`} alt="" className="absolute inset-0 h-full w-full object-contain" />
                    )}
                  </div>
                </div>

                <div className={`min-w-0 md:col-span-5 ${invertido ? "md:order-1" : ""}`}>
                  <div className="flex flex-wrap items-center gap-3 font-mono text-xs uppercase tracking-wider">
                    <span className="text-sun">{p.etiqueta}</span>
                    <span className="rounded-full bg-cream/10 px-3 py-1">{p.estado}</span>
                  </div>
                  <h3 className="mt-4 font-display text-3xl font-black leading-[1.05] md:text-5xl" style={{ textWrap: "balance" }}>
                    {p.titulo}
                  </h3>
                  <p className="mt-4 text-cream/80">{p.descripcion}</p>
                  <dl className="mt-5 grid gap-3 text-sm leading-snug text-cream/90">
                    {[
                      ["Problema", p.problema],
                      ["Propuesta", p.propuesta],
                      ["Resultado", p.resultado],
                    ].map(([titulo, texto]) => (
                      <div key={titulo}>
                        <dt className="font-bold text-sun">{titulo}</dt>
                        <dd>{texto}</dd>
                      </div>
                    ))}
                  </dl>
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {p.stack.map((st) => (
                      <li key={st} className="rounded-full bg-cream/10 px-3 py-1 font-mono text-xs">{st}</li>
                    ))}
                  </ul>
                  {p.enlaces && (
                    <div className="mt-6 flex flex-wrap gap-3">
                      {p.enlaces.map((e) => (
                        <a key={e.href} href={e.href} target="_blank" rel="noopener noreferrer" className="btn btn-line !py-2">
                          {e.texto}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
