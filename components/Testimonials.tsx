import Image from "next/image";
import { testimoniosFijos } from "@/data/testimonials";
import { textos } from "@/data/textos";
import type { Lang } from "@/lib/i18n";
import SplitWords from "./SplitWords";

export default function Testimonials({ lang }: { lang: Lang }) {
  const t = textos[lang].testimonials;

  return (
    <section id="testimonios" className="section bg-forest text-cream">
      <div className="wrap">
        <h2 data-reveal data-split className="h2">
          <SplitWords text={t.titulo} />
        </h2>
        <p className="mt-4 max-w-[48ch] text-cream/75">
          {t.intro}
        </p>

        <ul id="lista-testimonios" className="mt-10 grid gap-6 md:grid-cols-3">
          {testimoniosFijos.map((item) => (
            <li key={item.id} className="flex flex-col gap-6 bg-cream p-7 text-ink">
              <span aria-hidden="true" className="-mb-6 font-menu text-6xl leading-none text-sun">“</span>
              <blockquote className="text-lg leading-relaxed">{item.mensaje[lang]}</blockquote>
              <div className="mt-auto flex items-center gap-3 border-t border-ink/15 pt-5">
                {item.foto ? (
                  <Image src={item.foto} alt="" width={44} height={44} className="h-11 w-11 shrink-0 rounded-full object-cover" />
                ) : (
                  <span aria-hidden="true" className="grid h-11 w-11 shrink-0 place-items-end overflow-hidden rounded-full bg-ink/15 text-ink/45">
                    <svg viewBox="0 0 24 24" className="h-9 w-9" fill="currentColor">
                      <circle cx="12" cy="9" r="5" />
                      <path d="M2 24c0-5.5 4.5-9 10-9s10 3.5 10 9z" />
                    </svg>
                  </span>
                )}
                <p className="font-bold leading-tight">{item.nombre}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
