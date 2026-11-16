import Image from "next/image";
import { comoTrabajo, perfil } from "@/data/perfil";
import { textos } from "@/data/textos";
import type { Lang } from "@/lib/i18n";
import SplitWords from "./SplitWords";

export default function About({ lang }: { lang: Lang }) {
  const t = textos[lang].about;
  return (
    <section id="sobre-mi" className="section relative bg-cream text-ink">
      <div className="wrap grid items-start gap-14 lg:grid-cols-12 lg:gap-20">
        {perfil.foto && (
          <figure data-reveal className="order-last mx-auto w-full max-w-[360px] lg:sticky lg:top-28 lg:order-none lg:col-span-5 lg:mx-0 lg:max-w-none">
            <div className="relative aspect-[4/5] overflow-hidden bg-rust">
              <Image
                src={perfil.foto}
                alt={`${t.retrato} ${perfil.nombre}`}
                fill
                sizes="(min-width: 1024px) 420px, 360px"
                className="object-cover object-[50%_40%]"
              />
            </div>
            <figcaption className="bg-ink px-5 py-4 text-sm leading-relaxed text-cream">{perfil.frase[lang]}</figcaption>
          </figure>
        )}

        <div className={perfil.foto ? "lg:col-span-7" : "lg:col-span-12"}>
          <h2 data-reveal data-split className="h2 !text-6xl md:!text-8xl">
            <SplitWords lines={t.titulo} />
          </h2>
          <div className="mt-10 grid max-w-[54ch] gap-5 text-lg leading-relaxed">
            {t.parrafos.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          <ul data-stagger className="mt-16 divide-y divide-ink/15 border-y border-ink/15">
            {comoTrabajo[lang].map((c) => (
              <li key={c.codigo} className="grid gap-2 py-7 sm:grid-cols-[11rem_1fr] sm:gap-8">
                <p className="pt-1.5 font-mono text-xs text-rust">{c.codigo}</p>
                <div>
                  <p className="font-display text-2xl font-bold">{c.titulo}</p>
                  <p className="mt-2 max-w-[48ch] leading-relaxed text-ink/75">{c.texto}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
