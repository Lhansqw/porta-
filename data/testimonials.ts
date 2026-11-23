import type { Lang } from "@/lib/i18n";

export type TestimonioFijo = {
  id: string;
  nombre: string;
  mensaje: Record<Lang, string>;
  /** Foto de perfil dentro de /public, por ejemplo "/images/testimonios/t1.jpg". Sin foto se muestra un avatar genérico. */
  foto?: string;
};

/** Testimonios fijos. Las fotos están en /public/images/testimonios. */
export const testimoniosFijos: TestimonioFijo[] = [
  {
    id: "devsprint",
    nombre: "Samuel Guerrero",
    foto: "/images/testimonios/samuel.jpg",
    mensaje: {
      es: "Trabajar con Nicolas en DevSprint fue muy fácil. Antes de empezar a programar ya tenía los diagramas listos, entonces desde el primer día cada uno sabía qué le tocaba hacer.",
      en: "Working with Nicolas on DevSprint was pretty easy. He had the diagrams sorted before we even started coding, so from day one everyone knew what they had to do.",
    },
  },
  {
    id: "mindsee",
    nombre: "Camilo López",
    foto: "/images/testimonios/camilo.jpg",
    mensaje: {
      es: "En MindSee le metió a todo, front y back. Cuando algo fallaba no se complicaba, buscaba la forma más sencilla de resolverlo y seguía. Y sus commits se entendían muy bien.",
      en: "On MindSee he jumped into everything, front and back. When something broke he didn't stress, he found the simplest way around it and kept going. And you could actually follow his commits.",
    },
  },
  {
    id: "mensajeria",
    nombre: "Samuel Salcedo",
    foto: "/images/testimonios/samuelito.jpeg",
    mensaje: {
      es: "El proyecto de mensajería urbana tenía un montón de actores y estados, y Nicolas nos ayudó a organizarlo. En la exposición explicó todo con calma y se notaba que lo tenía muy claro.",
      en: "The urban courier project was a mess of actors and states, and Nicolas helped us get it in order. In the presentation he walked through everything calmly, and you could tell he really got it.",
    },
  },
];
