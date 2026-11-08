import { educacion } from "@/data/experience";
import Sparkle from "./Sparkle";

export default function Experience() {
  return (
    <section id="estudios" className="section bg-pine text-cream">
      <div className="wrap">
        <p data-reveal className="eyebrow text-sun">Formación</p>
        <h2 data-reveal className="h2 mt-3 !text-sun">Estudios</h2>
        <ol data-stagger className="mt-10 grid gap-8 md:grid-cols-2">
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
    </section>
  );
}
