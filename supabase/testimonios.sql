-- Tabla de testimonios enviados por visitantes (se publican cuando los apruebas).
create table if not exists public.testimonios (
  id uuid primary key default gen_random_uuid(),
  nombre text not null check (char_length(nombre) between 2 and 80),
  relacion text not null check (char_length(relacion) between 2 and 40),
  mensaje text not null check (char_length(mensaje) between 10 and 600),
  aprobado boolean not null default false,
  creado timestamptz not null default now()
);

alter table public.testimonios enable row level security;

-- Cualquiera puede enviar, pero siempre queda pendiente de aprobación.
create policy "enviar testimonio" on public.testimonios
  for insert to anon with check (aprobado = false);

-- Solo se leen los aprobados.
create policy "leer aprobados" on public.testimonios
  for select to anon using (aprobado = true);

-- Para aprobar uno: en el panel de Supabase (Table Editor) marca aprobado = true,
-- o ejecuta: update public.testimonios set aprobado = true where id = '...';
