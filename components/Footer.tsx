import { perfil } from "@/data/perfil";

export default function Footer() {
  return (
    <footer className="bg-pine py-8 text-sm text-cream/75">
      <div className="wrap flex flex-wrap items-center justify-between gap-4">
        <p>© 2026 {perfil.nombre}</p>
        <p className="font-mono text-xs">Hecho con Next.js, TypeScript y Tailwind CSS · Publicado en Vercel</p>
        <a href="#inicio" className="font-mono text-xs uppercase tracking-wider text-sun">Volver arriba ↑</a>
      </div>
    </footer>
  );
}
