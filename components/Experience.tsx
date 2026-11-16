import { educacion } from "@/data/experience";
import { textos } from "@/data/textos";
import type { Lang } from "@/lib/i18n";
import SplitWords from "./SplitWords";

export default function Experience({ lang }: { lang: Lang }) {
  return (
    <section id="estudios" className="section bg-pine text-cream">
      <div className="wrap">
        <h2 data-reveal data-split className="h2 !text-sun">
          <SplitWords text={textos[lang].experience.titulo} />
        </h2>
        <ol data-stagger className="mt-10 grid gap-8 md:grid-cols-2">
          {educacion[lang].map((e) => (
            <li key={e.titulo}>
              <div>
                <p className="font-display text-2xl font-bold">{e.periodo}</p>
                <p className="text-lg">{e.titulo}</p>
                <p className="text-sm text-cream/70">{e.lugar}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
