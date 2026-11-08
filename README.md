# Portafolio · Nicolás Ramos López

Next.js 14 (App Router) + TypeScript + Tailwind CSS, listo para publicar en Vercel.

## Secciones (un componente por sección, en el orden de `app/page.tsx`)
1. `Navbar`: fijo arriba, anclas, menú hamburguesa en celular y scroll suave
2. `Hero`: bienvenida con botón de descarga del CV (`public/cv.pdf`)
3. `About`: acerca de mí y datos personales
4. `Projects`: galería de proyectos con filtros
5. `Testimonials`: lista y formulario para que los visitantes dejen el suyo
6. `Experience`: educación y experiencia académica y laboral
7. `Contact`: contacto con botón para copiar el correo
8. `Skills`: sección adicional de habilidades técnicas
9. `Footer`: pie de página

Los textos viven en `data/` (perfil, proyectos, experiencia, habilidades, testimonios), tipados con TypeScript.

## Ejecutar
    npm install
    npm run dev        # http://localhost:3000

## Personalizar
- Tu foto: copia el archivo a `public/images/foto.jpg` y pon `foto: "/images/foto.jpg"` en `data/perfil.ts`.
- Tu CV: reemplaza `public/cv.pdf` por el tuyo (el actual se generó con los datos del portafolio).
- Universidad: edita `data/experience.ts`.

## Testimonios de visitantes (opcional)
1. En Supabase, abre el SQL Editor y ejecuta `supabase/testimonios.sql`.
2. Copia `.env.example` a `.env.local` y pon `SUPABASE_URL` y `SUPABASE_ANON_KEY`.
3. En Vercel, agrega las mismas dos variables en Settings > Environment Variables.
4. Cada testimonio llega con `aprobado = false`. Para publicarlo, ponlo en `true` desde Table Editor.

Sin esas variables el formulario avisa que los testimonios aún no están activos.
También puedes agregar testimonios fijos en `data/testimonials.ts`.

## Publicar en Vercel
    git init && git add . && git commit -m "Portafolio"
    git remote add origin https://github.com/Lhansqw/portafolio.git
    git push -u origin main
Luego en vercel.com: Add New > Project > importa el repositorio. Cada `git push` despliega de nuevo.
