import { grupos, herramientas } from "@/data/skills";

export default function Skills() {
  return (
    <section id="habilidades" className="section bg-pine text-cream">
      <div className="wrap">
        <p data-reveal className="eyebrow text-sun">Sección adicional</p>
        <h2 data-reveal className="h2 mt-3">Habilidades técnicas</h2>

        <ul data-stagger aria-label="Lenguajes principales" className="mt-8 flex flex-wrap gap-3">
          {herramientas.map((h) => (
            <li key={h} className="grid h-14 min-w-14 place-items-center rounded-xl bg-cream px-3 font-display text-xl font-black text-ink">
              {h}
            </li>
          ))}
        </ul>

        <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {grupos.map((g) => (
            <div key={g.titulo} data-reveal>
              <h3 className="border-b-2 border-cream/40 pb-2 font-mono text-xs uppercase tracking-[0.15em]">{g.titulo}</h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {g.items.map((i) => (
                  <li key={i} className="rounded-full bg-forest px-4 py-2 text-sm">{i}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
