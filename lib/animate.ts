/* Animaciones con GSAP + ScrollTrigger. Recibe las librerías como parámetros
   para poder usarse tanto desde React como desde una página estática. */
export function initAnimations(gsap: any, ScrollTrigger: any): () => void {
  gsap.registerPlugin(ScrollTrigger);
  const mm = gsap.matchMedia();
  const $ = (sel: string, root: ParentNode = document) => Array.from(root.querySelectorAll<HTMLElement>(sel));

  mm.add("(prefers-reduced-motion: no-preference)", () => {
    // Entrada del hero: el nombre sube palabra por palabra
    const intro = gsap.timeline({ defaults: { ease: "power3.out" } });
    intro
      .from("[data-nav]", { yPercent: -100, duration: 0.6 })
      .from("[data-hero-title] [data-word]", { yPercent: 110, duration: 0.9, stagger: 0.08 }, "-=0.2")
      .from("[data-hero-info]", { y: 20, opacity: 0, duration: 0.5, stagger: 0.08 }, "-=0.6")
      .from("[data-hero-block]", { y: 60, opacity: 0, duration: 0.8 }, "-=0.6")
      .from("[data-sparkle]", { scale: 0, rotate: -90, duration: 0.7, ease: "back.out(2)" }, "-=0.4");

    // Barra de progreso de lectura
    gsap.to("[data-progress]", {
      scaleX: 1,
      ease: "none",
      scrollTrigger: { trigger: document.body, start: "top top", end: "bottom bottom", scrub: 0.2 },
    });

    // Parallax del hero: la foto y la estrella se mueven a otro ritmo
    const hero = { trigger: "[data-hero]", start: "top top", end: "bottom top", scrub: 0.4 };
    gsap.fromTo("[data-parallax]", { yPercent: -6 }, { yPercent: 6, ease: "none", scrollTrigger: hero });
    gsap.to("[data-sparkle-spin]", { rotate: 180, y: -40, ease: "none", scrollTrigger: hero });

    // Títulos de sección: cada palabra sube desde abajo de su línea
    $("[data-split]:not([data-hero-title])").forEach((titulo) => {
      gsap.fromTo(
        $("[data-word]", titulo),
        { yPercent: 110 },
        {
          yPercent: 0,
          duration: 0.8,
          stagger: 0.06,
          ease: "power3.out",
          scrollTrigger: { trigger: titulo, start: "top 90%", toggleActions: "play none none none" },
        },
      );
    });

    // Los proyectos aparecen al llegar a ellos
    ScrollTrigger.batch("[data-reveal]:not([data-split])", {
      start: "top 92%",
      once: true,
      onEnter: (batch: any) =>
        gsap.from(batch, { y: 48, opacity: 0.15, duration: 0.8, stagger: 0.12, ease: "power3.out", clearProps: "transform,opacity" }),
    });

    // Imagen de cada proyecto: se descubre con un barrido y la sombra se desliza a su sitio
    $("[data-project-art]").forEach((arte) => {
      const media = arte.querySelector("[data-project-media]");
      const sombra = arte.querySelector("[data-project-shadow]");
      const desde = arte.hasAttribute("data-invertido") ? "inset(0% 0% 0% 100% round 1.5rem)" : "inset(0% 100% 0% 0% round 1.5rem)";
      const tl = gsap.timeline({ scrollTrigger: { trigger: arte, start: "top 85%", toggleActions: "play none none none" } });
      tl.fromTo(media, { clipPath: desde }, { clipPath: "inset(0% 0% 0% 0% round 1.5rem)", duration: 1, ease: "power3.inOut", clearProps: "clipPath" })
        .from(sombra, { x: 0, y: 0, duration: 0.7, ease: "back.out(1.6)", clearProps: "transform" }, "-=0.35");
    });

    // Listas (cómo trabajo, habilidades, estudios) en cascada
    ScrollTrigger.batch("[data-stagger] > li", {
      start: "top 92%",
      once: true,
      onEnter: (batch: any) =>
        gsap.from(batch, { y: 24, opacity: 0, duration: 0.6, stagger: 0.05, ease: "power2.out", clearProps: "transform,opacity" }),
    });
  });

  // Reacción al mouse: solo con puntero fino (escritorio) y sin "reducir movimiento"
  mm.add("(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)", () => {
    const quitar: (() => void)[] = [];
    const on = (el: EventTarget, tipo: string, fn: (e: any) => void) => {
      el.addEventListener(tipo, fn);
      quitar.push(() => el.removeEventListener(tipo, fn));
    };

    // Botones magnéticos: se acercan un poco al cursor
    $("[data-magnetic]").forEach((btn) => {
      const transicion = btn.style.transitionProperty;
      btn.style.transitionProperty = "color, background-color, border-color, box-shadow";
      quitar.push(() => (btn.style.transitionProperty = transicion));
      const xTo = gsap.quickTo(btn, "x", { duration: 0.4, ease: "power3" });
      const yTo = gsap.quickTo(btn, "y", { duration: 0.4, ease: "power3" });
      on(btn, "pointermove", (e: PointerEvent) => {
        const r = btn.getBoundingClientRect();
        xTo((e.clientX - (r.left + r.width / 2)) * 0.3);
        yTo((e.clientY - (r.top + r.height / 2)) * 0.3);
      });
      on(btn, "pointerleave", () => gsap.to(btn, { x: 0, y: 0, duration: 0.8, ease: "elastic.out(1, 0.4)" }));
    });

    // Tarjetas de proyecto: se inclinan levemente según el cursor (no la demo interactiva)
    $("[data-project-art]").forEach((arte) => {
      if (arte.querySelector("[data-interactivo]")) return;
      gsap.set(arte, { transformPerspective: 900 });
      const rx = gsap.quickTo(arte, "rotationX", { duration: 0.5, ease: "power3" });
      const ry = gsap.quickTo(arte, "rotationY", { duration: 0.5, ease: "power3" });
      on(arte, "pointermove", (e: PointerEvent) => {
        const r = arte.getBoundingClientRect();
        ry(((e.clientX - r.left) / r.width - 0.5) * 8);
        rx(-((e.clientY - r.top) / r.height - 0.5) * 8);
      });
      on(arte, "pointerleave", () => {
        rx(0);
        ry(0);
      });
    });

    // Estrella del logo: media vuelta al pasar el mouse
    const logo = document.querySelector("[data-logo]");
    const estrellaLogo = document.querySelector("[data-logo-sparkle]");
    if (logo && estrellaLogo) {
      on(logo, "pointerenter", () => gsap.to(estrellaLogo, { rotate: "+=180", duration: 0.6, ease: "back.out(2)" }));
    }

    // Estrella del hero: gira según la posición horizontal del cursor
    const hero = document.querySelector<HTMLElement>("[data-hero]");
    const estrella = document.querySelector("[data-sparkle]");
    if (hero && estrella) {
      const giro = gsap.quickTo(estrella, "rotate", { duration: 0.8, ease: "power3" });
      on(hero, "pointermove", (e: PointerEvent) => giro((e.clientX / window.innerWidth - 0.5) * 60));
      on(hero, "pointerleave", () => giro(0));
    }

    return () => quitar.forEach((f) => f());
  });

  return () => {
    mm.revert();
    ScrollTrigger.getAll().forEach((t: any) => t.kill());
  };
}
