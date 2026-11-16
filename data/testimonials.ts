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
    id: "docente",
    nombre: "Nombre Apellido",
    relacion: "Docente",
    borrador: true,
    mensaje: {
      es: "Nicolás modela antes de programar. En DevSprint y en el sistema de mensajería urbana llegó con diagramas claros y consistentes entre sí, y en la sustentación supo explicar cada decisión de arquitectura.",
      en: "Nicolás models before he codes. On DevSprint and the urban courier system he came with clear, mutually consistent diagrams, and in the defense he could explain every architecture decision.",
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
    id: "drogueria",
    nombre: "Nombre Apellido",
    relacion: "Cliente",
    borrador: true,
    mensaje: {
      es: "Entendió rápido nuestro problema con los vencimientos. Ahora cada venta sale del lote que vence primero y el sistema funciona aunque se caiga el internet, que era lo que más nos preocupaba.",
      en: "He quickly understood our problem with expiration dates. Now every sale comes from the batch that expires first, and the system keeps working even when the internet goes down, which was our biggest worry.",
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
