import { educacion } from "@/data/experience";
import SplitWords from "./SplitWords";

export default function Experience() {
  return (
    <section id="estudios" className="section bg-pine text-cream">
      <div className="wrap">
        <h2 data-reveal data-split className="h2 !text-sun">
          <SplitWords text="Estudios" />
        </h2>
        <ol data-stagger className="mt-10 grid gap-8 md:grid-cols-2">
          {educacion.map((e) => (
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
