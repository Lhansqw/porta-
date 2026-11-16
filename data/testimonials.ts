import type { Lang } from "@/lib/i18n";

export type Testimonio = {
  id: string;
  nombre: string;
  relacion: string;
  mensaje: string;
};

/**
 * Testimonios fijos. Agrega aquí los que recibas por otros medios:
 *   { id: "t1", nombre: "Nombre Apellido", relacion: "Docente", mensaje: "..." }
 * Los que envíen los visitantes desde el formulario se suman a esta lista cuando los apruebes.
 */
export const testimoniosFijos: Testimonio[] = [];

/** El valor en español es el que se guarda; el resto es solo cómo se muestra en cada idioma. */
export const relaciones: { valor: string; texto: Record<Lang, string> }[] = [
  { valor: "Docente", texto: { es: "Docente", en: "Teacher" } },
  { valor: "Compañero/a de equipo", texto: { es: "Compañero/a de equipo", en: "Teammate" } },
  { valor: "Cliente", texto: { es: "Cliente", en: "Client" } },
  { valor: "Otro", texto: { es: "Otro", en: "Other" } },
];

export const relacionTexto =(valor: string, lang: Lang) => relaciones.find((r) => r.valor === valor)?.texto[lang] ?? valor;
