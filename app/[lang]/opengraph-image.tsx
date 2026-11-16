import { ImageResponse } from "next/og";
import { perfil } from "@/data/perfil";
import { esIdioma } from "@/lib/i18n";

export const alt = `${perfil.nombre}, ${perfil.rol.es}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang: valor } = await params;
  const lang = esIdioma(valor) ? valor : "es";
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#0A0F1E",
          color: "#D9DEEA",
        }}
      >
        <div style={{ fontSize: 36, color: "#9FB4FF", fontWeight: 700 }}>{perfil.rol[lang]}</div>
        <div style={{ fontSize: 120, fontWeight: 900, lineHeight: 1, marginTop: 12 }}>{perfil.corto}</div>
        <div style={{ fontSize: 36, marginTop: 40, maxWidth: 900, lineHeight: 1.35, opacity: 0.85 }}>{perfil.intro[lang]}</div>
      </div>
    ),
    size,
  );
}
