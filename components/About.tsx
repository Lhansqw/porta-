import { comoTrabajo } from "@/data/perfil";
import Sparkle from "./Sparkle";

export default function About() {
  return (
    <section id="sobre-mi" className="section relative bg-cream text-ink">
      <div className="wrap grid items-start gap-14 lg:grid-cols-2">
        <div>
          <p data-reveal className="eyebrow text-rust">Acerca de mí</p>
          <h2 data-reveal className="h2 mt-3 !text-6xl md:!text-8xl">
            Hola,
            <br />
            soy Nicolás.
          </h2>
          <p data-reveal className="mt-8 max-w-[38ch] text-lg leading-relaxed">
            Soy estudiante de ingeniería de software y desarrollo productos de principio a fin: pienso el modelo de datos, diseño la
            arquitectura y construyo la interfaz.
          </p>
          <p data-reveal className="mt-4 max-w-[38ch] text-lg leading-relaxed">
            Trabajo con problemas concretos de mi entorno en Colombia, como el control de vencimientos en una droguería o la comunicación en
            Lengua de Señas Colombiana, y los llevo hasta una aplicación que funciona.
          </p>
        </div>

        <ul data-stagger className="grid gap-8 lg:mt-24">
          {comoTrabajo.map((c) => (
            <li key={c.codigo} className="flex gap-4">
              <Sparkle className="mt-1 h-5 w-5 flex-none text-coral" />
              <div>
                <p className="font-mono text-xs text-rust">{c.codigo}</p>
                <p className="font-display text-2xl font-bold">{c.titulo}</p>
                <p className="mt-1 max-w-[44ch] text-ink/75">{c.texto}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
