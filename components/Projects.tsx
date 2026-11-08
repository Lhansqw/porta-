"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { proyectos, type Categoria } from "@/data/projects";
import FefoDemo from "./FefoDemo";
import SplitWords from "./SplitWords";

const filtros: { id: Categoria | "todos"; texto: string }[] = [
  { id: "todos", texto: "Todos" },
  { id: "escritorio", texto: "Escritorio" },
  { id: "movil", texto: "Móvil" },
  { id: "web", texto: "Web" },
  { id: "academico", texto: "Académico" },
];

export default function Projects() {
  const [filtro, setFiltro] = useState<Categoria | "todos">("todos");
  // GSAP + Flip se cargan al montar para que el reacomodo al filtrar sea suave
  const flip = useRef<{ gsap: any; Flip: any; ScrollTrigger: any } | null>(null);
  const estadoPrevio = useRef<any>(null);

  useEffect(() => {
    let vivo = true;
    (async () => {
      const { gsap } = await import("gsap");
      const { Flip } = await import("gsap/Flip");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(Flip, ScrollTrigger);
      if (vivo) flip.current = { gsap, Flip, ScrollTrigger };
    })();
    return () => {
      vivo = false;
    };
  }, []);

  function elegir(id: Categoria | "todos") {
    if (id === filtro) return;
    const sinMovimiento = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (flip.current && !sinMovimiento) estadoPrevio.current = flip.current.Flip.getState("#grid-proyectos > article");
    setFiltro(id);
  }

  useLayoutEffect(() => {
    const estado = estadoPrevio.current;
    if (!estado || !flip.current) return;
    estadoPrevio.current = null;
    const { gsap, Flip, ScrollTrigger } = flip.current;
    const tarjetas = gsap.utils.toArray("#grid-proyectos > article");
    gsap.set(tarjetas, { clearProps: "opacity,transform" });
    Flip.from(estado, {
      targets: tarjetas,
      duration: 0.55,
      ease: "power2.inOut",
      absolute: true,
      onEnter: (els: Element[]) => gsap.fromTo(els, { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.5, delay: 0.15, clearProps: "opacity,transform" }),
      onComplete: () => ScrollTrigger.refresh(),
    });
  }, [filtro]);

  return (
    <section id="proyectos" className="section bg-ink text-cream">
      <div className="wrap">
        <h2 data-reveal data-split className="h2">
          <SplitWords text="Galería de proyectos" />
        </h2>
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
              onClick={() => elegir(f.id)}
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
                <div data-project-art data-invertido={invertido || undefined} className={`relative md:col-span-7 ${invertido ? "md:order-2" : ""}`}>
                  <div aria-hidden="true" data-project-shadow className={`absolute inset-0 translate-x-3 translate-y-3 rounded-3xl ${sombra} md:translate-x-5 md:translate-y-5`} />
                  <div
                    data-project-media
                    data-interactivo={p.arte === "fefo" || undefined}
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
