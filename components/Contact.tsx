import { perfil } from "@/data/perfil";
import { textos } from "@/data/textos";
import type { Lang } from "@/lib/i18n";
import CopyEmail from "./CopyEmail";
import SplitWords from "./SplitWords";

export default function Contact({ lang }: { lang: Lang }) {
  const t = textos[lang].contact;
  return (
    <section id="contacto" className="section relative overflow-hidden bg-ink text-cream">
      <div className="wrap relative">
        <h2 data-reveal data-split className="font-display font-black leading-[0.9] tracking-tight text-sun" style={{ fontSize: "clamp(3.2rem, 14vw, 9.5rem)" }}>
          <SplitWords text={t.titulo} />
        </h2>
        <p className="mt-6 max-w-[46ch] text-lg text-cream/80">{t.texto}</p>
        <div className="mt-8"><CopyEmail correo={perfil.correo} lang={lang} /></div>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href={perfil.github} target="_blank" rel="noopener noreferrer" className="btn btn-line">github.com/{perfil.githubUser}</a>
          <a href={perfil.cv} download data-cv data-magnetic className="btn btn-sun">{t.descargarCv}</a>
        </div>
        <p className="mt-8 font-mono text-xs uppercase tracking-widest text-cream/60">{perfil.pais}</p>
      </div>
    </section>
  );
}
