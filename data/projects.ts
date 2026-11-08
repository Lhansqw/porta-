export type Categoria = "escritorio" | "movil" | "web" | "academico";

export type Proyecto = {
  id: string;
  titulo: string;
  etiqueta: string;
  estado: "En desarrollo" | "Colaboración" | "Académico";
  categorias: Categoria[];
  descripcion: string;
  puntos: string[];
  stack: string[];
  /** Archivo en /public/arte, o "fefo" para la demo interactiva. */
  arte: string;
  /** Color de fondo que rodea la ilustración, para que se funda con ella. */
  fondo?: string;
  destacado?: boolean;
  enlaces?: { texto: string; href: string }[];
};

export const proyectos: Proyecto[] = [
  {
    id: "radar-deuda",
    titulo: "Radar de Deuda Técnica",
    etiqueta: "escritorio · Windows",
    estado: "En desarrollo",
    categorias: ["escritorio"],
    descripcion:
      "Aplicación de escritorio que analiza repositorios de GitHub o locales y mide su deuda técnica, con IA integrada.",
    puntos: [
      "Inicio de sesión con cuentas en la nube (Supabase, PostgreSQL)",
      "La IA funciona de entrada: el usuario no configura claves",
      "Historial de commits construido paso a paso",
    ],
    stack: ["TypeScript", "Supabase", "Groq", "OpenRouter"],
    arte: "radar.svg",
    fondo: "#0A0E2A",
    destacado: true,
    enlaces: [{ texto: "GitHub", href: "https://github.com/Lhansqw/radar-deuda" }],
  },
  {
    id: "mindsee",
    titulo: "MindSee",
    etiqueta: "web · full stack",
    estado: "Colaboración",
    categorias: ["web"],
    descripcion:
      "Plataforma web de acompañamiento emocional con IA. Lee la expresión del usuario con la cámara, conversa con distintas personalidades terapéuticas y resume su estado de ánimo en un panel clínico. Colaboré de forma activa en el frontend y el backend.",
    puntos: [
      "Detección de emociones en tiempo real con face-api.js",
      "Chat con enfoque TCC o humanista, y alertas de riesgo",
      "API REST con JWT y datos en PostgreSQL (Supabase)",
    ],
    stack: ["React", "TypeScript", "Vite", "Java 21", "Spring Boot", "Gemini", "Groq"],
    arte: "mindsee.svg",
    fondo: "#14456F",
    destacado: true,
    enlaces: [
      { texto: "Frontend", href: "https://github.com/Kam24w/MindSee-frontend" },
      { texto: "Backend", href: "https://github.com/Kam24w/MindSee-backend" },
      { texto: "Demo", href: "https://psico-frontend-pi.vercel.app" },
    ],
  },
  {
    id: "pos-drogueria",
    titulo: "POS para droguería",
    etiqueta: "escritorio",
    estado: "En desarrollo",
    categorias: ["escritorio"],
    descripcion:
      "Punto de venta de escritorio e inventario para una droguería en Colombia, de un solo usuario y en modo kiosco.",
    puntos: ["Inventario por lotes con salida FEFO: primero vence, primero sale", "Base de datos local con SQLite"],
    stack: ["Electron", "React", "TypeScript", "SQLite", "Zustand", "Tailwind CSS"],
    arte: "fefo",
  },
  {
    id: "senas-lsc",
    titulo: "Traductor de Lengua de Señas Colombiana",
    etiqueta: "móvil · Android",
    estado: "En desarrollo",
    categorias: ["movil"],
    descripcion:
      "App Android que reconoce señas de LSC con la cámara y las convierte en texto en español con ayuda de IA. Se construye por fases.",
    puntos: ["Reconocimiento con la cámara del teléfono", "IA en la nube con Gemini"],
    stack: ["Kotlin", "Android", "Gemini", "Visión por computador"],
    arte: "lsc.svg",
    fondo: "#FF5A3C",
  },
  {
    id: "devsprint",
    titulo: "DevSprint",
    etiqueta: "web · backend",
    estado: "Académico",
    categorias: ["web", "academico"],
    descripcion:
      "Sistema de tablero Kanban universitario. Diseñé su arquitectura completa y la documenté en un conjunto de diagramas técnicos.",
    puntos: ["Diagramas de arquitectura, componentes y datos", "Backend por capas con persistencia JPA"],
    stack: ["Java", "Spring Boot", "JPA", "Tailwind CSS"],
    arte: "kanban.svg",
    fondo: "#19C39B",
  },
  {
    id: "mensajeria-urbana",
    titulo: "Sistema de mensajería urbana",
    etiqueta: "modelado",
    estado: "Académico",
    categorias: ["academico"],
    descripcion:
      "Modelado de un sistema de envíos y mensajería urbana: casos de uso, clases, secuencia y estados, preparado para exposición.",
    puntos: ["Diagramas UML completos y consistentes entre sí", "Presentación visual clara para sustentación"],
    stack: ["UML", "Análisis", "Diseño de software"],
    arte: "uml.svg",
    fondo: "#2233FF",
  },
];
