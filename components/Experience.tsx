import { educacion, experiencia } from "@/data/experience";
import Sparkle from "./Sparkle";

export default function Experience() {
  return (
    <section id="experiencia" className="section relative overflow-hidden bg-pine text-cream">
      <div aria-hidden="true" data-parallax className="pointer-events-none absolute right-0 top-10 select-none font-display font-black uppercase leading-[0.8] text-outline opacity-40" style={{ fontSize: "clamp(3rem, 12vw, 9rem)" }}>
        <div>Trayectoria</div>
        <div className="opacity-60">Trayectoria</div>
      </div>

      <div className="wrap relative grid gap-12 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]">
        <div>
          <p data-reveal className="eyebrow text-sun">Experiencia académica y laboral</p>
          <h2 data-reveal className="h2 mt-3 !text-sun">Educación</h2>
          <ol data-stagger className="mt-8 grid gap-7">
            {educacion.map((e) => (
              <li key={e.titulo} className="flex gap-4">
                <Sparkle className="mt-2 h-5 w-5 flex-none text-coral" />
                <div>
                  <p className="font-display text-2xl font-bold">{e.periodo}</p>
                  <p className="text-lg">{e.titulo}</p>
                  <p className="text-sm text-cream/70">{e.lugar}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <div data-reveal className="bg-sun p-6 text-ink md:p-10 lg:mt-24">
          <h2 className="h2 !text-5xl md:!text-6xl">Experiencia</h2>
          <p className="mt-2 max-w-[44ch] text-sm text-ink/75">Problemas que identifiqué, qué propuse y cómo lo resolví.</p>
          <ol className="mt-8 grid gap-8">
            {experiencia.map((x) => (
              <li key={x.titulo} className="grid gap-3 sm:grid-cols-[118px_minmax(0,1fr)]">
                <p className="flex items-start gap-2 font-display text-xl font-black">
                  <Sparkle className="mt-1.5 h-4 w-4 flex-none text-ink" />
                  {x.marca}
                </p>
                <div>
                  <h3 className="font-display text-xl font-bold leading-tight">{x.titulo}</h3>
                  <p className="font-mono text-xs uppercase tracking-wider text-ink/70">{x.rol}</p>
                  <dl className="mt-3 grid gap-1.5 text-sm leading-snug">
                    <div><dt className="inline font-bold">Problema: </dt><dd className="inline">{x.problema}</dd></div>
                    <div><dt className="inline font-bold">Propuesta: </dt><dd className="inline">{x.propuesta}</dd></div>
                    <div><dt className="inline font-bold">Resultado: </dt><dd className="inline">{x.resultado}</dd></div>
                  </dl>
                </div>
              </li>
            ))}
          </ol>
          <ul className="mt-8 flex flex-wrap gap-3">
            {["#Diseño primero", "#Commits pequeños", "#Detallista", "#Adaptable"].map((t) => (
              <li key={t} className="pill">{t}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
