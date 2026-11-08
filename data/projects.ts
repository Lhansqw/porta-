export type Categoria = "escritorio" | "movil" | "web" | "academico";

export type Proyecto = {
  id: string;
  titulo: string;
  etiqueta: string;
  estado: "En desarrollo" | "Colaboración" | "Académico";
  categorias: Categoria[];
  descripcion: string;
  problema: string;
  propuesta: string;
  resultado: string;
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
    descripcion: "Aplicación de escritorio que analiza repositorios de GitHub o locales y mide su deuda técnica, con IA integrada.",
    problema: "Medir la deuda técnica de un repositorio es un trabajo manual que obliga a configurar varias herramientas.",
    propuesta: "Una aplicación de escritorio para Windows que analiza el repositorio y explica los resultados con IA.",
    resultado: "La IA funciona de entrada, sin que el usuario configure claves, y las cuentas se guardan en la nube con Supabase.",
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
      "Plataforma web de acompañamiento emocional con IA. Colaboré de forma activa en el frontend y el backend.",
    problema: "El acompañamiento emocional no siempre está al alcance y las señales de estrés o riesgo pasan desapercibidas.",
    propuesta: "Una plataforma que combina cámara, chat con IA y un panel clínico del estado de ánimo.",
    resultado: "Detección de emociones en tiempo real, chat con enfoque TCC o humanista, alertas de riesgo y acceso protegido.",
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
    descripcion: "Punto de venta e inventario para una droguería en Colombia. Prueba al lado cómo decide de qué lote sale cada venta.",
    problema: "Una droguería necesita vender rápido y no perder producto por vencimiento.",
    propuesta: "Un punto de venta de escritorio en modo kiosco, de un solo usuario, con inventario por lotes.",
    resultado: "Cada venta descuenta del lote que vence primero, con los datos guardados en el equipo y sin depender de internet.",
    stack: ["Electron", "React", "TypeScript", "SQLite", "Zustand", "Tailwind CSS"],
    arte: "fefo",
  },
  {
    id: "senas-lsc",
    titulo: "Traductor de Lengua de Señas Colombiana",
    etiqueta: "móvil · Android",
    estado: "En desarrollo",
    categorias: ["movil"],
    descripcion: "App Android que reconoce señas de LSC con la cámara y las convierte en texto en español.",
    problema: "Comunicarse con una persona que usa LSC exige conocer la lengua o contar con un intérprete.",
    propuesta: "Una app que reconoce las señas con la cámara del teléfono y las traduce a texto.",
    resultado: "Se construye por fases: primero el reconocimiento con la cámara, después la traducción con IA (Gemini).",
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
    descripcion: "Sistema de tablero Kanban universitario, del que diseñé y documenté la arquitectura completa.",
    problema: "Un sistema con muchas partes se vuelve difícil de explicar y de sustentar.",
    propuesta: "Modelar antes de programar: un backend por capas con persistencia JPA.",
    resultado: "Diagramas de arquitectura, componentes y datos, listos para exponer.",
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
    descripcion: "Modelado de un sistema de envíos y mensajería urbana, preparado para exposición.",
    problema: "Un sistema de envíos tiene muchos actores y estados que hay que entender antes de construirlo.",
    propuesta: "Modelado UML completo: casos de uso, clases, secuencia y estados.",
    resultado: "Diagramas consistentes entre sí y una presentación clara para la sustentación.",
    stack: ["UML", "Análisis", "Diseño de software"],
    arte: "uml.svg",
    fondo: "#2233FF",
  },
];
