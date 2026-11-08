import { NextResponse } from "next/server";

const url = process.env.SUPABASE_URL;
const key = process.env.SUPABASE_ANON_KEY;

const headers = () => ({
  apikey: key as string,
  Authorization: `Bearer ${key}`,
  "Content-Type": "application/json",
});

export async function GET() {
  if (!url || !key) return NextResponse.json({ activo: false, testimonios: [] });
  try {
    const res = await fetch(
      `${url}/rest/v1/testimonios?select=id,nombre,relacion,mensaje&aprobado=eq.true&order=creado.desc&limit=30`,
      { headers: headers(), next: { revalidate: 60 } },
    );
    if (!res.ok) return NextResponse.json({ activo: true, testimonios: [] });
    return NextResponse.json({ activo: true, testimonios: await res.json() });
  } catch {
    return NextResponse.json({ activo: true, testimonios: [] });
  }
}

export async function POST(request: Request) {
  if (!url || !key) {
    return NextResponse.json({ error: "Los testimonios aún no están activos en este sitio." }, { status: 503 });
  }
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Solicitud no válida." }, { status: 400 });
  }
  // Campo trampa para bots: las personas no lo ven ni lo llenan.
  if (typeof body.web === "string" && body.web.length > 0) return NextResponse.json({ ok: true });

  const nombre = String(body.nombre ?? "").trim();
  const relacion = String(body.relacion ?? "").trim();
  const mensaje = String(body.mensaje ?? "").trim();
  if (nombre.length < 2 || nombre.length > 80) return NextResponse.json({ error: "Escribe tu nombre." }, { status: 400 });
  if (relacion.length < 2 || relacion.length > 40) return NextResponse.json({ error: "Elige tu relación conmigo." }, { status: 400 });
  if (mensaje.length < 10 || mensaje.length > 600) {
    return NextResponse.json({ error: "El mensaje debe tener entre 10 y 600 caracteres." }, { status: 400 });
  }

  const res = await fetch(`${url}/rest/v1/testimonios`, {
    method: "POST",
    headers: { ...headers(), Prefer: "return=minimal" },
    body: JSON.stringify({ nombre, relacion, mensaje }),
  });
  if (!res.ok) return NextResponse.json({ error: "No se pudo guardar el testimonio. Intenta más tarde." }, { status: 502 });
  return NextResponse.json({ ok: true });
}
