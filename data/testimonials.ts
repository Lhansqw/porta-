import type { Lang } from "@/lib/i18n";

/** Testimonio tal como llega de Supabase (lo escriben los visitantes desde el formulario). */
export type Testimonio = {
  id: string;
  nombre: string;
  relacion: string;
  mensaje: string;
};

export type TestimonioFijo = {
  id: string;
  nombre: string;
  /** Valor en español de `relaciones`; se traduce al mostrarlo. */
  relacion: string;
  mensaje: Record<Lang, string>;
  /** Foto de perfil dentro de /public, por ejemplo "/images/testimonios/t1.jpg". Sin foto se muestran las iniciales. */
  foto?: string;
  /** Mientras sea true no se muestra: falta el nombre real y que la persona apruebe el texto. */
  borrador?: boolean;
};

/**
 * Testimonios fijos. Cada uno debe ser de una persona real que aprobó el texto.
 * Para publicarlo: pon su nombre, su foto en /public/images/testimonios y quita `borrador`.
 * Los que envíen los visitantes desde el formulario se suman a esta lista cuando los apruebes.
 */
export const testimoniosFijos: TestimonioFijo[] = [
  {
    id: "devsprint",
    nombre: "Nombre Apellido",
    relacion: "Compañero/a de equipo",
    borrador: true,
    mensaje: {
      es: "En DevSprint Nicolas se encargó de la arquitectura. Antes de escribir código ya tenía los diagramas listos, y eso nos ayudó a todo el equipo a saber qué le tocaba a cada uno y cómo encajaban las partes.",
      en: "On DevSprint, Nicolas took charge of the architecture. He had the diagrams ready before anyone wrote code, which helped the whole team know what each of us was responsible for and how the pieces fit together.",
    },
  },
  {
    id: "mindsee",
    nombre: "Nombre Apellido",
    relacion: "Compañero/a de equipo",
    borrador: true,
    mensaje: {
      es: "En MindSee trabajó tanto en el frontend como en el backend. Avanzaba en pasos pequeños, con commits fáciles de revisar, y cuando algo se trababa buscaba la solución más simple en vez de complicarlo.",
      en: "On MindSee he worked on both the frontend and the backend. He moved in small steps, with commits that were easy to review, and when something got stuck he looked for the simplest fix instead of overcomplicating it.",
    },
  },
  {
    id: "mensajeria",
    nombre: "Nombre Apellido",
    relacion: "Compañero/a de equipo",
    borrador: true,
    mensaje: {
      es: "Con el sistema de mensajería urbana nos ayudó a ordenar un problema con muchos actores y estados. Sus diagramas UML eran consistentes entre sí y en la exposición explicó cada decisión con claridad.",
      en: "On the urban courier system he helped us make sense of a problem with many actors and states. His UML diagrams were consistent with each other, and in the presentation he explained every decision clearly.",
    },
  },
];

/** El valor en español es el que se guarda; el resto es solo cómo se muestra en cada idioma. */
export const relaciones: { valor: string; texto: Record<Lang, string> }[] = [
  { valor: "Docente", texto: { es: "Docente", en: "Teacher" } },
  { valor: "Compañero/a de equipo", texto: { es: "Compañero/a de equipo", en: "Teammate" } },
  { valor: "Cliente", texto: { es: "Cliente", en: "Client" } },
  { valor: "Otro", texto: { es: "Otro", en: "Other" } },
];

export const relacionTexto = (valor: string, lang: Lang) => relaciones.find((r) => r.valor === valor)?.texto[lang] ?? valor;
