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

export const relaciones = ["Docente", "Compañero/a de equipo", "Cliente", "Otro"] as const;
