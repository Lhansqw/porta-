import type { Lang } from "@/lib/i18n";

export type Formacion = { periodo: string; titulo: string; lugar: string };

export const educacion: Record<Lang, Formacion[]> = {
  es: [
    { periodo: "En curso", titulo: "Ingeniería de software", lugar: "Universidad Cooperativa de Colombia" },
    { periodo: "2026", titulo: "Trabajos académicos de diseño de software", lugar: "DevSprint y sistema de mensajería urbana" },
  ],
  en: [
    { periodo: "In progress", titulo: "Software engineering", lugar: "Universidad Cooperativa de Colombia" },
    { periodo: "2026", titulo: "Academic software design projects", lugar: "DevSprint and urban courier system" },
  ],
};
