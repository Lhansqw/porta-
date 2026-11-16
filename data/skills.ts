import type { Lang } from "@/lib/i18n";

export type GrupoSkills = { titulo: string; items: string[] };

export const grupos: Record<Lang, GrupoSkills[]> = {
  es: [
    { titulo: "Lenguajes", items: ["TypeScript", "JavaScript", "Java", "Kotlin", "SQL"] },
    { titulo: "Frontend", items: ["React", "Next.js", "Vite", "Tailwind CSS", "Zustand", "face-api.js"] },
    { titulo: "Backend y escritorio", items: ["Spring Boot", "Spring Security", "JWT", "JPA", "Electron"] },
    { titulo: "Datos", items: ["PostgreSQL", "Supabase", "SQLite"] },
    { titulo: "IA", items: ["Groq", "OpenRouter", "Gemini", "Visión por computador"] },
    { titulo: "Diseño y flujo", items: ["UML", "Diagramas de arquitectura", "Git y GitHub", "Vercel"] },
  ],
  en: [
    { titulo: "Languages", items: ["TypeScript", "JavaScript", "Java", "Kotlin", "SQL"] },
    { titulo: "Frontend", items: ["React", "Next.js", "Vite", "Tailwind CSS", "Zustand", "face-api.js"] },
    { titulo: "Backend and desktop", items: ["Spring Boot", "Spring Security", "JWT", "JPA", "Electron"] },
    { titulo: "Data", items: ["PostgreSQL", "Supabase", "SQLite"] },
    { titulo: "AI", items: ["Groq", "OpenRouter", "Gemini", "Computer vision"] },
    { titulo: "Design and workflow", items: ["UML", "Architecture diagrams", "Git and GitHub", "Vercel"] },
  ],
};
