export type Formacion = { periodo: string; titulo: string; lugar: string };

export const educacion: Formacion[] = [
  { periodo: "En curso", titulo: "Ingeniería de software", lugar: "Programa universitario · Colombia" },
  { periodo: "2026", titulo: "Trabajos académicos de diseño de software", lugar: "DevSprint y sistema de mensajería urbana" },
];

export type Experiencia = {
  marca: string;
  titulo: string;
  rol: string;
  problema: string;
  propuesta: string;
  resultado: string;
};

export const experiencia: Experiencia[] = [
  {
    marca: "2026",
    titulo: "Radar de Deuda Técnica",
    rol: "Diseño y desarrollo completo",
    problema: "Medir la deuda técnica de un repositorio es un trabajo manual que obliga a configurar varias herramientas.",
    propuesta: "Una aplicación de escritorio para Windows que analiza repositorios de GitHub o locales, con IA integrada.",
    resultado: "IA en la nube (Groq) sin claves para el usuario, cuentas con Supabase y desarrollo por fases con historial de commits.",
  },
  {
    marca: "2026",
    titulo: "POS e inventario para droguería",
    rol: "Diseño y desarrollo completo",
    problema: "Una droguería necesita vender rápido y no perder producto por vencimiento.",
    propuesta: "Un punto de venta de escritorio en modo kiosco, de un solo usuario, con inventario por lotes.",
    resultado: "Cada venta descuenta del lote que vence primero (FEFO), con datos en SQLite local y sin depender de internet.",
  },
  {
    marca: "2026",
    titulo: "Traductor de Lengua de Señas Colombiana",
    rol: "Diseño y desarrollo completo",
    problema: "Comunicarse con una persona que usa LSC exige conocer la lengua o contar con un intérprete.",
    propuesta: "Una app Android que reconoce las señas con la cámara y las convierte en texto en español.",
    resultado: "Arquitectura por fases: primero el reconocimiento con la cámara, después la traducción con IA en la nube (Gemini).",
  },
  {
    marca: "Equipo",
    titulo: "MindSee",
    rol: "Colaboración activa en frontend y backend",
    problema: "El acompañamiento emocional no siempre está al alcance y las señales de estrés o riesgo pasan desapercibidas.",
    propuesta: "Una plataforma web que combina cámara, chat con IA y un panel clínico del estado de ánimo.",
    resultado: "Detección de emociones en tiempo real, chat con enfoque TCC o humanista, alertas de riesgo y acceso protegido con JWT.",
  },
  {
    marca: "Académico",
    titulo: "DevSprint y mensajería urbana",
    rol: "Arquitectura y documentación",
    problema: "Los sistemas con muchas partes se vuelven difíciles de explicar y de sustentar.",
    propuesta: "Modelar antes de programar: arquitectura por capas para un tablero Kanban y UML completo para un sistema de envíos.",
    resultado: "Diagramas de arquitectura, componentes, datos, casos de uso, clases, secuencia y estados, listos para exponer.",
  },
];
