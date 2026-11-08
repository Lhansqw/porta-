import { ImageResponse } from "next/og";
import { perfil } from "@/data/perfil";

export const alt = `${perfil.nombre}, ${perfil.rol}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
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
          background: "#2F4A33",
          color: "#F2EBDC",
        }}
      >
        <div style={{ fontSize: 36, color: "#FDB515", fontWeight: 700 }}>{perfil.rol}</div>
        <div style={{ fontSize: 120, fontWeight: 900, lineHeight: 1, marginTop: 12 }}>{perfil.corto}</div>
        <div style={{ fontSize: 36, marginTop: 40, maxWidth: 900, lineHeight: 1.35, opacity: 0.85 }}>{perfil.intro}</div>
      </div>
    ),
    size,
  );
}
