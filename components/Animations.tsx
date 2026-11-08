"use client";

import { useEffect } from "react";

export default function Animations() {
  useEffect(() => {
    let limpiar = () => {};
    let vivo = true;
    (async () => {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      const { initAnimations } = await import("@/lib/animate");
      if (vivo) limpiar = initAnimations(gsap, ScrollTrigger);
    })();
    return () => {
      vivo = false;
      limpiar();
    };
  }, []);
  return null;
}
