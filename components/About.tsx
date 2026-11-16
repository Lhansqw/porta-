import Image from "next/image";
import { comoTrabajo, perfil } from "@/data/perfil";
import { textos } from "@/data/textos";
import type { Lang } from "@/lib/i18n";
import SplitWords from "./SplitWords";

export default function About({ lang }: { lang: Lang }) {
  const t = textos[lang].about;
  return (
    <section id="sobre-mi" className="section relative bg-cream text-ink">
      <div className="wrap grid items-start gap-14 lg:grid-cols-2">
        <div>
          <h2 data-reveal data-split className="h2 !text-6xl md:!text-8xl">
            <SplitWords lines={t.titulo} />
          </h2>
          {t.parrafos.map((p, i) => (
            <p key={i} className={`${i === 0 ? "mt-8" : "mt-4"} max-w-[38ch] text-lg leading-relaxed`}>
              {p}
            </p>
          ))}
          {perfil.foto && (
            <figure data-reveal className="mt-10 w-full max-w-[300px]">
              <div className="relative aspect-[4/5] overflow-hidden bg-rust">
                <Image
                  src={perfil.foto}
                  alt={`${t.retrato} ${perfil.nombre}`}
                  fill
                  sizes="300px"
                  className="object-cover object-[50%_40%]"
                />
              </div>
              <figcaption className="bg-ink px-4 py-3 text-sm leading-snug text-cream">{perfil.frase[lang]}</figcaption>
            </figure>
          )}
        </div>

        <ul data-stagger className="grid gap-8 lg:mt-24">
          {comoTrabajo[lang].map((c) => (
            <li key={c.codigo}>
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
