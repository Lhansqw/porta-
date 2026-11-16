import { perfil } from "@/data/perfil";
import { textos } from "@/data/textos";
import type { Lang } from "@/lib/i18n";

export default function Footer({ lang }: { lang: Lang }) {
  const t = textos[lang].footer;
  return (
    <footer className="bg-pine py-8 text-sm text-cream/75">
      <div className="wrap flex flex-wrap items-center justify-between gap-4">
        <p>© 2026 {perfil.nombre}</p>
        <p className="font-mono text-xs">{t.hecho}</p>
        <a href="#inicio" className="font-mono text-xs uppercase tracking-wider text-sun">{t.arriba}</a>
      </div>
    </footer>
  );
}
