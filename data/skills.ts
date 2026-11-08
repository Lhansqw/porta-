export type GrupoSkills = { titulo: string; items: string[] };

export const grupos: GrupoSkills[] = [
  { titulo: "Lenguajes", items: ["TypeScript", "JavaScript", "Java", "Kotlin", "SQL"] },
  { titulo: "Frontend", items: ["React", "Next.js", "Vite", "Tailwind CSS", "Zustand", "face-api.js"] },
  { titulo: "Backend y escritorio", items: ["Spring Boot", "Spring Security", "JWT", "JPA", "Electron"] },
  { titulo: "Datos", items: ["PostgreSQL", "Supabase", "SQLite"] },
  { titulo: "IA", items: ["Groq", "OpenRouter", "Gemini", "Visión por computador"] },
  { titulo: "Diseño y flujo", items: ["UML", "Diagramas de arquitectura", "Git y GitHub", "Vercel"] },
];
