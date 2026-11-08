export type Perfil = {
  nombre: string;
  corto: string;
  rol: string;
  pais: string;
  correo: string;
  github: string;
  githubUser: string;
  /** Ruta de tu foto dentro de /public, por ejemplo "/images/foto.jpg". Déjalo en null para mostrar el monograma. */
  foto: string | null;
  frase: string;
  /** Frase que aparece debajo del nombre en la portada. */
  intro: string;
  cv: string;
};

export const perfil: Perfil = {
  nombre: "Nicolás Ramos López",
  corto: "Nicolás Ramos",
  rol: "Desarrollador de software",
  pais: "Colombia",
  correo: "lhanmls37437@gmail.com",
  github: "https://github.com/Lhansqw",
  githubUser: "Lhansqw",
  foto: null,
  frase: "Modelo antes de programar y busco la solución más simple y funcional.",
  intro:
    "Construyo software para problemas reales: una droguería, la Lengua de Señas Colombiana, la deuda técnica de un repositorio.",
  cv: "/cv.pdf",
};

export const comoTrabajo = [
  { codigo: "docs/arquitectura", titulo: "Diseño antes de programar", texto: "Modelo el sistema con diagramas UML y de arquitectura antes de escribir código." },
  { codigo: "git commit", titulo: "Pasos pequeños y frecuentes", texto: "Construyo por fases, con un historial de commits que cuenta cómo creció el proyecto." },
  { codigo: "ai/provider", titulo: "IA donde aporta valor", texto: "Integro modelos de lenguaje y visión cuando resuelven algo real, sin pedirle al usuario que configure nada." },
];
