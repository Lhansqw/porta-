export const idiomas = ["es", "en"] as const;
export type Lang = (typeof idiomas)[number];

export const esIdioma = (v: string): v is Lang => (idiomas as readonly string[]).includes(v);

/** Ruta de la portada en cada idioma: el español vive en "/" y el inglés en "/en". */
export const rutaIdioma: Record<Lang, string> = { es: "/", en: "/en" };
