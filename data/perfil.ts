import type { Lang } from "@/lib/i18n";

export type Perfil = {
  nombre: string;
  corto: string;
  rol: Record<Lang, string>;
  pais: string;
  correo: string;
  github: string;
  githubUser: string;
  /** Ruta de tu foto dentro de /public, por ejemplo "/images/foto.jpg". Déjalo en null para no mostrarla. */
  foto: string | null;
  frase: Record<Lang, string>;
  /** Frase que aparece debajo del nombre en la portada. */
  intro: Record<Lang, string>;
  cv: string;
};

export const perfil: Perfil = {
  nombre: "Nicolas Ramos López",
  corto: "Nicolas Ramos",
  rol: { es: "Desarrollador de software", en: "Software developer" },
  pais: "Colombia",
  correo: "lhanmls37437@gmail.com",
  github: "https://github.com/Lhansqw",
  githubUser: "Lhansqw",
  foto: "/images/foto.jpg",
  frase: {
    es: "Modelo antes de programar y busco la solución más simple y funcional.",
    en: "I model before I code and look for the simplest solution that works.",
  },
  intro: {
    es: "Construyo software para problemas reales: una droguería, la Lengua de Señas Colombiana, la deuda técnica de un repositorio.",
    en: "I build software for real problems: a pharmacy, Colombian Sign Language, the technical debt of a repository.",
  },
  cv: "/cv.pdf",
};

export const comoTrabajo: Record<Lang, { codigo: string; titulo: string; texto: string }[]> = {
  es: [
    { codigo: "docs/arquitectura", titulo: "Diseño antes de programar", texto: "Modelo el sistema con diagramas UML y de arquitectura antes de escribir código." },
    { codigo: "git commit", titulo: "Pasos pequeños y frecuentes", texto: "Construyo por fases, con un historial de commits que cuenta cómo creció el proyecto." },
    { codigo: "ai/provider", titulo: "IA donde aporta valor", texto: "Integro modelos de lenguaje y visión cuando resuelven algo real, sin pedirle al usuario que configure nada." },
  ],
  en: [
    { codigo: "docs/architecture", titulo: "Design before code", texto: "I model the system with UML and architecture diagrams before writing code." },
    { codigo: "git commit", titulo: "Small, frequent steps", texto: "I build in phases, with a commit history that tells how the project grew." },
    { codigo: "ai/provider", titulo: "AI where it adds value", texto: "I integrate language and vision models when they solve something real, without asking the user to configure anything." },
  ],
};
