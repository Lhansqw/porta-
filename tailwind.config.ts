import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Los valores cambian con el tema; se definen en globals.css
        forest: "rgb(var(--forest) / <alpha-value>)",
        pine: "rgb(var(--pine) / <alpha-value>)",
        ink: "rgb(var(--ink) / <alpha-value>)",
        cream: "rgb(var(--cream) / <alpha-value>)",
        sun: "rgb(var(--sun) / <alpha-value>)",
        rust: "rgb(var(--rust) / <alpha-value>)",
        coral: "rgb(var(--coral) / <alpha-value>)",
        glow: "#4F6BFF",
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
        menu: ["var(--font-menu)", "Georgia", "serif"],
      },
    },
  },
  plugins: [],
};
export default config;
