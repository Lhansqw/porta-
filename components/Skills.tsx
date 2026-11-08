import { grupos } from "@/data/skills";

export default function Skills() {
  return (
    <section id="habilidades" className="section bg-forest text-cream">
      <div className="wrap">
        <h2 data-reveal className="h2">Habilidades técnicas</h2>

        <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {grupos.map((g) => (
            <div key={g.titulo} data-reveal>
              <h3 className="border-b-2 border-cream/40 pb-2 font-display text-xl font-bold">{g.titulo}</h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {g.items.map((i) => (
                  <li key={i} className="rounded-full bg-pine px-4 py-2 text-sm">{i}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
