import { perfil } from "@/data/perfil";
import Sparkle from "./Sparkle";

export default function Hero() {
  return (
    <section id="inicio" className="relative z-10 overflow-x-clip bg-forest text-cream">
      <div className="wrap relative pt-10 md:pt-14">
        <h1
          data-hero-title
          className="relative z-10 text-right font-display font-black uppercase leading-[0.82] tracking-tight text-cream"
          style={{ fontSize: "clamp(2.5rem, 11.2vw, 8.8rem)" }}
        >
          Portafolio
        </h1>

        <div className="relative mt-6 grid gap-10 md:-mt-[2.2vw] md:grid-cols-12 md:gap-8">
          <div data-hero-block className="relative md:col-span-5">
            <div className="relative aspect-[4/5] w-full max-w-[400px] overflow-hidden bg-rust">
              {perfil.foto ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={perfil.foto}
                  alt={`Retrato de ${perfil.nombre}`}
                  className="absolute inset-0 h-full w-full object-cover mix-blend-multiply grayscale"
                />
              ) : (
                <div aria-hidden="true" className="absolute inset-0 grid place-items-center">
                  <span className="font-display font-black leading-none text-cream/90" style={{ fontSize: "clamp(6rem, 20vw, 11rem)" }}>
                    NR
                  </span>
                </div>
              )}
              <p className="absolute inset-x-0 bottom-0 bg-black/90 px-4 py-3 text-xs leading-snug text-cream">
                {perfil.frase}
              </p>
            </div>
            <Sparkle data-sparkle className="absolute -left-3 top-8 h-12 w-12 text-sun md:-left-6" />
            <Sparkle data-sparkle className="absolute -left-1 top-24 h-6 w-6 text-sun md:-left-3" />
            <Sparkle data-sparkle className="absolute -bottom-4 right-6 h-9 w-9 text-sun md:right-auto md:left-[calc(100%-5.5rem)] md:max-lg:hidden lg:left-[calc(100%-4rem)]" />
          </div>

          <div className="relative md:col-span-7">
            <div data-hero-echo aria-hidden="true" className="select-none overflow-hidden font-display font-black uppercase leading-[0.8] tracking-tight" style={{ fontSize: "clamp(2.5rem, 11.2vw, 8.8rem)" }}>
              <div className="text-outline h-[0.62em] overflow-hidden">Portafolio</div>
              <div className="text-outline opacity-70 h-[0.82em] overflow-hidden">Portafolio</div>
              <div className="text-outline opacity-40">Portafolio</div>
            </div>
            <dl data-hero-info className="mt-6 grid gap-1 font-mono text-sm md:absolute md:left-[8%] md:top-[18%] md:mt-0 md:bg-forest md:px-4 md:py-3 md:text-base">
              <div><dt className="inline text-sun">GH: </dt><dd className="inline">/{perfil.githubUser}</dd></div>
              <div className="break-all"><dt className="inline text-sun">@: </dt><dd className="inline">{perfil.correo}</dd></div>
              <div><dt className="inline text-sun">PAÍS: </dt><dd className="inline">{perfil.pais}</dd></div>
            </dl>
            <div data-hero-info className="mt-8 flex flex-wrap items-center gap-3 md:mt-6">
              <p className="mb-2 w-full font-display text-3xl font-bold md:text-4xl">{perfil.nombre}</p>
              <a href="#proyectos" className="btn btn-sun">Ver proyectos</a>
              <a href={perfil.cv} download data-cv className="btn btn-line">Descargar CV ↓</a>
            </div>
          </div>
        </div>
      </div>

      <div className="relative mt-14 h-24 bg-black">
        <a
          href="#sobre-mi"
          data-scroll-btn
          className="absolute bottom-0 left-1/2 z-20 grid h-24 w-24 -translate-x-1/2 translate-y-1/2 place-items-center rounded-full bg-sun text-center text-sm font-medium leading-tight text-ink transition hover:scale-105"
        >
          Desliza
          <br />
          abajo ↓
        </a>
      </div>
    </section>
  );
}
