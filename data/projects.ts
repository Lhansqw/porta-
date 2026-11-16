import type { Lang } from "@/lib/i18n";

export type Categoria = "escritorio" | "movil" | "web" | "academico";

export type TextosProyecto = {
  titulo: string;
  etiqueta: string;
  estado: string;
  descripcion: string;
  problema: string;
  propuesta: string;
  resultado: string;
  /** Si el stack tiene términos que cambian con el idioma. */
  stack?: string[];
};

export type Proyecto = {
  id: string;
  textos: Record<Lang, TextosProyecto>;
  categorias: Categoria[];
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
    textos: {
      es: {
        titulo: "Radar de Deuda Técnica",
        etiqueta: "escritorio · Windows",
        estado: "En desarrollo",
        descripcion: "Aplicación de escritorio que analiza repositorios de GitHub o locales y mide su deuda técnica, con IA integrada.",
        problema: "Medir la deuda técnica de un repositorio es un trabajo manual que obliga a configurar varias herramientas.",
        propuesta: "Una aplicación de escritorio para Windows que analiza el repositorio y explica los resultados con IA.",
        resultado: "La IA funciona de entrada, sin que el usuario configure claves, y las cuentas se guardan en la nube con Supabase.",
      },
      en: {
        titulo: "Technical Debt Radar",
        etiqueta: "desktop · Windows",
        estado: "In development",
        descripcion: "Desktop app that analyzes GitHub or local repositories and measures their technical debt, with built-in AI.",
        problema: "Measuring a repository's technical debt is manual work that requires setting up several tools.",
        propuesta: "A Windows desktop app that analyzes the repository and explains the results with AI.",
        resultado: "AI works out of the box, with no API keys for the user to set up, and accounts are stored in the cloud with Supabase.",
      },
    },
    categorias: ["escritorio"],
    stack: ["TypeScript", "Supabase", "Groq", "OpenRouter"],
    arte: "radar.svg",
    fondo: "#0A0E2A",
    destacado: true,
    enlaces: [{ texto: "GitHub", href: "https://github.com/Lhansqw/radar-deuda" }],
  },
  {
    id: "mindsee",
    textos: {
      es: {
        titulo: "MindSee",
        etiqueta: "web · full stack",
        estado: "Colaboración",
        descripcion: "Plataforma web de acompañamiento emocional con IA. Colaboré de forma activa en el frontend y el backend.",
        problema: "El acompañamiento emocional no siempre está al alcance y las señales de estrés o riesgo pasan desapercibidas.",
        propuesta: "Una plataforma que combina cámara, chat con IA y un panel clínico del estado de ánimo.",
        resultado: "Detección de emociones en tiempo real, chat con enfoque TCC o humanista, alertas de riesgo y acceso protegido.",
      },
      en: {
        titulo: "MindSee",
        etiqueta: "web · full stack",
        estado: "Collaboration",
        descripcion: "AI-powered emotional support web platform. I actively contributed to both the frontend and the backend.",
        problema: "Emotional support isn't always within reach, and signs of stress or risk go unnoticed.",
        propuesta: "A platform that combines the camera, an AI chat and a clinical mood dashboard.",
        resultado: "Real-time emotion detection, chat with a CBT or humanistic approach, risk alerts and protected access.",
      },
    },
    categorias: ["web"],
    stack: ["React", "TypeScript", "Vite", "Java 21", "Spring Boot", "Gemini", "Groq"],
    arte: "mindsee.svg",
    fondo: "#14456F",
    destacado: true,
    enlaces: [
      { texto: "Frontend", href: "https://github.com/Kam24w/MindSee-frontend" },
      { texto: "Backend", href: "https://github.com/Kam24w/MindSee-backend" },
    ],
  },
  {
    id: "pos-drogueria",
    textos: {
      es: {
        titulo: "POS para droguería",
        etiqueta: "escritorio",
        estado: "En desarrollo",
        descripcion: "Punto de venta e inventario para una droguería en Colombia. Prueba al lado cómo decide de qué lote sale cada venta.",
        problema: "Una droguería necesita vender rápido y no perder producto por vencimiento.",
        propuesta: "Un punto de venta de escritorio en modo kiosco, de un solo usuario, con inventario por lotes.",
        resultado: "Cada venta descuenta del lote que vence primero, con los datos guardados en el equipo y sin depender de internet.",
      },
      en: {
        titulo: "Pharmacy POS",
        etiqueta: "desktop",
        estado: "In development",
        descripcion: "Point of sale and inventory for a pharmacy in Colombia. Try next to it how it decides which batch each sale comes from.",
        problema: "A pharmacy needs to sell fast without losing stock to expiration.",
        propuesta: "A single-user desktop point of sale in kiosk mode, with batch-based inventory.",
        resultado: "Each sale is taken from the batch that expires first, with data stored on the machine and no internet required.",
      },
    },
    categorias: ["escritorio"],
    stack: ["Electron", "React", "TypeScript", "SQLite", "Zustand", "Tailwind CSS"],
    arte: "fefo",
  },
  {
    id: "senas-lsc",
    textos: {
      es: {
        titulo: "Traductor de Lengua de Señas Colombiana",
        etiqueta: "móvil · Android",
        estado: "En desarrollo",
        descripcion: "App Android que reconoce señas de LSC con la cámara y las convierte en texto en español.",
        problema: "Comunicarse con una persona que usa LSC exige conocer la lengua o contar con un intérprete.",
        propuesta: "Una app que reconoce las señas con la cámara del teléfono y las traduce a texto.",
        resultado: "Se construye por fases: primero el reconocimiento con la cámara, después la traducción con IA (Gemini).",
      },
      en: {
        titulo: "Colombian Sign Language Translator",
        etiqueta: "mobile · Android",
        estado: "In development",
        descripcion: "Android app that recognizes Colombian Sign Language (LSC) with the camera and turns it into Spanish text.",
        problema: "Communicating with someone who uses LSC requires knowing the language or having an interpreter.",
        propuesta: "An app that recognizes signs with the phone's camera and translates them into text.",
        resultado: "Built in phases: first camera-based recognition, then AI translation (Gemini).",
        stack: ["Kotlin", "Android", "Gemini", "Computer vision"],
      },
    },
    categorias: ["movil"],
    stack: ["Kotlin", "Android", "Gemini", "Visión por computador"],
    arte: "lsc.svg",
    fondo: "#FF5A3C",
  },
  {
    id: "devsprint",
    textos: {
      es: {
        titulo: "DevSprint",
        etiqueta: "web · backend",
        estado: "Académico",
        descripcion: "Sistema de tablero Kanban universitario, del que diseñé y documenté la arquitectura completa.",
        problema: "Un sistema con muchas partes se vuelve difícil de explicar y de sustentar.",
        propuesta: "Modelar antes de programar: un backend por capas con persistencia JPA.",
        resultado: "Diagramas de arquitectura, componentes y datos, listos para exponer.",
      },
      en: {
        titulo: "DevSprint",
        etiqueta: "web · backend",
        estado: "Academic",
        descripcion: "University Kanban board system, whose full architecture I designed and documented.",
        problema: "A system with many parts becomes hard to explain and defend.",
        propuesta: "Model before coding: a layered backend with JPA persistence.",
        resultado: "Architecture, component and data diagrams, ready to present.",
      },
    },
    categorias: ["web", "academico"],
    stack: ["Java", "Spring Boot", "JPA", "Tailwind CSS"],
    arte: "kanban.svg",
    fondo: "#19C39B",
  },
  {
    id: "mensajeria-urbana",
    textos: {
      es: {
        titulo: "Sistema de mensajería urbana",
        etiqueta: "modelado",
        estado: "Académico",
        descripcion: "Modelado de un sistema de envíos y mensajería urbana, preparado para exposición.",
        problema: "Un sistema de envíos tiene muchos actores y estados que hay que entender antes de construirlo.",
        propuesta: "Modelado UML completo: casos de uso, clases, secuencia y estados.",
        resultado: "Diagramas consistentes entre sí y una presentación clara para la sustentación.",
      },
      en: {
        titulo: "Urban courier system",
        etiqueta: "modeling",
        estado: "Academic",
        descripcion: "Model of an urban shipping and courier system, prepared for a presentation.",
        problema: "A shipping system has many actors and states that need to be understood before building it.",
        propuesta: "Full UML modeling: use cases, classes, sequence and state diagrams.",
        resultado: "Mutually consistent diagrams and a clear presentation for the defense.",
        stack: ["UML", "Analysis", "Software design"],
      },
    },
    categorias: ["academico"],
    stack: ["UML", "Análisis", "Diseño de software"],
    arte: "uml.svg",
    fondo: "#2233FF",
  },
];
