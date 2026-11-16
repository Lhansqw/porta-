import { grupos } from "@/data/skills";
import { textos } from "@/data/textos";
import type { Lang } from "@/lib/i18n";
import SplitWords from "./SplitWords";

export default function Skills({ lang }: { lang: Lang }) {
  return (
    <section id="habilidades" className="section bg-forest text-cream">
      <div className="wrap">
        <h2 data-reveal data-split className="h2">
          <SplitWords text={textos[lang].skills.titulo} />
        </h2>

        <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {grupos[lang].map((g) => (
            <div key={g.titulo}>
              <h3 className="border-b-2 border-cream/40 pb-2 font-display text-xl font-bold">{g.titulo}</h3>
              <ul data-stagger className="mt-4 flex flex-wrap gap-2">
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
