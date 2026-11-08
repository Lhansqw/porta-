import { perfil, comoTrabajo } from "@/data/perfil";
import Sparkle from "./Sparkle";

const githubIcon = (
  <svg viewBox="0 0 16 16" aria-hidden="true" className="h-5 w-5 fill-current">
    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
  </svg>
);

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
          <p data-reveal className="mt-8 max-w-[34ch] text-lg leading-relaxed">
            Soy estudiante de ingeniería de software y desarrollo productos de principio a fin: pienso el modelo de datos, diseño la
            arquitectura y construyo la interfaz.
          </p>
          <p data-reveal className="mt-4 max-w-[34ch] text-lg leading-relaxed">
            Trabajo con problemas concretos de mi entorno en Colombia, como el control de vencimientos en una droguería o la comunicación en
            Lengua de Señas Colombiana, y los llevo hasta una aplicación que funciona.
          </p>
          <a data-reveal href={perfil.github} target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex items-center gap-3 rounded-full bg-coral px-6 py-3 font-medium text-cream transition hover:-translate-y-0.5">
            {githubIcon}
            github.com/{perfil.githubUser}
          </a>

          <ul data-stagger className="mt-12 grid gap-5">
            {comoTrabajo.map((c) => (
              <li key={c.codigo} className="flex gap-4">
                <Sparkle className="mt-1 h-5 w-5 flex-none text-coral" />
                <div>
                  <p className="font-mono text-xs text-rust">{c.codigo}</p>
                  <p className="font-display text-xl font-bold">{c.titulo}</p>
                  <p className="mt-1 max-w-[44ch] text-ink/75">{c.texto}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div data-reveal className="relative mx-auto w-full max-w-md lg:mt-10">
          <div className="relative aspect-[4/5] overflow-hidden bg-forest">
            <div aria-hidden="true" className="absolute left-1/2 top-[18%] aspect-square w-[72%] -translate-x-1/2 rounded-full bg-cream" />
            {perfil.foto ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={perfil.foto} alt={`Retrato de ${perfil.nombre}`} className="absolute inset-0 h-full w-full object-cover" />
            ) : (
              <span aria-hidden="true" className="absolute left-1/2 top-[18%] -translate-x-1/2 translate-y-[28%] font-display font-black leading-none text-forest" style={{ fontSize: "clamp(5rem, 16vw, 8.5rem)" }}>
                NR
              </span>
            )}
          </div>
          <span className="absolute -left-4 top-[42%] rounded-full bg-sun px-6 py-3 text-sm font-medium text-ink md:-left-10">Ingeniería de software</span>
          <span className="absolute -right-2 top-[62%] rounded-full bg-sun px-6 py-3 text-sm font-medium text-ink md:-right-8">{perfil.pais}</span>

          <div className="relative -mt-2 bg-black p-6 text-cream">
            <h3 className="font-display text-3xl font-bold">Datos</h3>
            <dl className="mt-4 grid gap-2 text-sm">
              <div className="flex gap-3"><dt className="w-20 flex-none font-mono text-xs uppercase tracking-wider text-sun">Nombre</dt><dd>{perfil.nombre}</dd></div>
              <div className="flex gap-3"><dt className="w-20 flex-none font-mono text-xs uppercase tracking-wider text-sun">Perfil</dt><dd>{perfil.rol}</dd></div>
              <div className="flex gap-3"><dt className="w-20 flex-none font-mono text-xs uppercase tracking-wider text-sun">País</dt><dd>{perfil.pais}</dd></div>
              <div className="flex gap-3"><dt className="w-20 flex-none font-mono text-xs uppercase tracking-wider text-sun">Correo</dt><dd className="break-all"><a href={`mailto:${perfil.correo}`} className="underline underline-offset-4">{perfil.correo}</a></dd></div>
              <div className="flex gap-3"><dt className="w-20 flex-none font-mono text-xs uppercase tracking-wider text-sun">GitHub</dt><dd><a href={perfil.github} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4">/{perfil.githubUser}</a></dd></div>
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
