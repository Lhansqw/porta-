import { perfil } from "@/data/perfil";
import CopyEmail from "./CopyEmail";

export default function Contact() {
  return (
    <section id="contacto" className="section relative overflow-hidden bg-black text-cream">
      <div className="wrap relative">
        <h2 data-reveal className="font-display font-black leading-[0.9] tracking-tight text-sun" style={{ fontSize: "clamp(3.2rem, 14vw, 9.5rem)" }}>
          Hablemos.
        </h2>
        <p className="mt-6 max-w-[46ch] text-lg text-cream/80">
          Estoy abierto a proyectos y oportunidades en desarrollo de software. Escríbeme o revisa mi código.
        </p>
        <div className="mt-8"><CopyEmail correo={perfil.correo} /></div>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href={perfil.github} target="_blank" rel="noopener noreferrer" className="btn btn-line">github.com/{perfil.githubUser}</a>
          <a href={perfil.cv} download data-cv className="btn btn-sun">Descargar CV</a>
        </div>
        <p className="mt-8 font-mono text-xs uppercase tracking-widest text-cream/60">{perfil.pais}</p>
      </div>
    </section>
  );
}
