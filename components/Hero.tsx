import Image from "next/image";
import { perfil } from "@/data/perfil";
import Sparkle from "./Sparkle";
import SplitWords from "./SplitWords";

export default function Hero() {
  return (
    <section id="inicio" data-hero className="relative z-10 overflow-x-clip bg-forest pb-20 text-cream md:pb-28">
      <div className="wrap grid items-end gap-10 pt-12 md:grid-cols-12 md:gap-8 md:pt-20">
        <div className="md:col-span-7">
          <p data-hero-info className="font-display text-xl font-bold text-sun md:text-2xl">{perfil.rol}</p>
          <h1
            data-hero-title
            data-split
            className="mt-2 font-display font-black leading-[0.86] tracking-tight"
            style={{ fontSize: "clamp(3.4rem, 10vw, 8.4rem)", textWrap: "balance" }}
          >
            <SplitWords text={perfil.corto} />
          </h1>
          <p data-hero-info className="mt-8 max-w-[38ch] text-lg leading-relaxed text-cream/85 md:text-xl">
            {perfil.intro}
          </p>
          <div data-hero-info className="mt-8 flex flex-wrap gap-3">
            <a href="#proyectos" data-magnetic className="btn btn-sun">Ver proyectos</a>
            <a href={perfil.cv} download data-cv data-magnetic className="btn btn-line">Descargar CV</a>
          </div>
        </div>

        <div data-hero-block className="relative mx-auto w-full max-w-[380px] md:col-span-5 md:ml-auto md:mr-0">
          <div className="relative aspect-[4/5] w-full overflow-hidden bg-rust">
            {perfil.foto ? (
              <div data-parallax className="absolute inset-0 scale-[1.15]">
                <Image
                  src={perfil.foto}
                  alt={`Retrato de ${perfil.nombre}`}
                  fill
                  priority
                  sizes="(min-width: 768px) 380px, 100vw"
                  className="object-cover object-[50%_40%]"
                />
              </div>
            ) : (
              <div aria-hidden="true" className="absolute inset-0 grid place-items-center">
                <span className="font-display font-black leading-none text-cream/90" style={{ fontSize: "clamp(6rem, 18vw, 10rem)" }}>
                  NR
                </span>
              </div>
            )}
          </div>
          <p className="bg-black px-4 py-3 text-sm leading-snug text-cream">{perfil.frase}</p>
          <span data-sparkle-spin className="absolute -left-4 -top-5 block h-12 w-12 md:-left-6">
            <Sparkle data-sparkle className="h-12 w-12 text-sun" />
          </span>
        </div>
      </div>
    </section>
  );
}
