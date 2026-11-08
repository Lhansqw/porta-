import { perfil } from "@/data/perfil";
import Sparkle from "./Sparkle";

export default function Hero() {
  return (
    <section id="inicio" className="relative z-10 overflow-x-clip bg-forest pb-20 text-cream md:pb-28">
      <div className="wrap grid items-end gap-10 pt-12 md:grid-cols-12 md:gap-8 md:pt-20">
        <div className="md:col-span-7">
          <p data-hero-info className="font-display text-xl font-bold text-sun md:text-2xl">{perfil.rol}</p>
          <h1
            data-hero-title
            className="mt-2 font-display font-black leading-[0.86] tracking-tight"
            style={{ fontSize: "clamp(3.4rem, 10vw, 8.4rem)", textWrap: "balance" }}
          >
            {perfil.corto}
          </h1>
          <p data-hero-info className="mt-8 max-w-[38ch] text-lg leading-relaxed text-cream/85 md:text-xl">
            {perfil.intro}
          </p>
          <div data-hero-info className="mt-8 flex flex-wrap gap-3">
            <a href="#proyectos" className="btn btn-sun">Ver proyectos</a>
            <a href={perfil.cv} download data-cv className="btn btn-line">Descargar CV</a>
          </div>
        </div>

        <div data-hero-block className="relative mx-auto w-full max-w-[380px] md:col-span-5 md:ml-auto md:mr-0">
          <div className="relative aspect-[4/5] w-full overflow-hidden bg-rust">
            {perfil.foto ? (
              // eslint-disable-next-line @next/next/no-img-element
              // La imagen trae esquinas negras: se amplía un poco para recortarlas.
              <img src={perfil.foto} alt={`Retrato de ${perfil.nombre}`} className="absolute inset-0 h-full w-full scale-[1.2] object-cover" />
            ) : (
              <div aria-hidden="true" className="absolute inset-0 grid place-items-center">
                <span className="font-display font-black leading-none text-cream/90" style={{ fontSize: "clamp(6rem, 18vw, 10rem)" }}>
                  NR
                </span>
              </div>
            )}
          </div>
          <p className="bg-black px-4 py-3 text-sm leading-snug text-cream">{perfil.frase}</p>
          <Sparkle data-sparkle className="absolute -left-4 -top-5 h-12 w-12 text-sun md:-left-6" />
        </div>
      </div>
    </section>
  );
}
