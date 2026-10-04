"use client";

import { useEffect } from "react";
import { LazyMotion, MotionConfig, domAnimation } from "framer-motion";
import { CLASSE_ANIM, CLASSE_PRETES } from "./demarrage";

/**
 * LazyMotion + domAnimation : n'embarque que les fonctionnalités utilisées (animations,
 * variants, whileInView) avec les composants `m.*`, plus léger que `motion.*`.
 * reducedMotion="user" : framer-motion coupe les déplacements si l'utilisateur l'a demandé.
 */
export default function MotionProvider({ children }: { children: React.ReactNode }) {
  // Signale au script de démarrage (voir ./demarrage.ts) que React et framer-motion sont prêts.
  // Si le filet de sécurité a déjà affiché le contenu (classe « anim » retirée), on n'y touche plus :
  // réactiver les animations ferait disparaître puis réapparaître du contenu déjà visible.
  useEffect(() => {
    const html = document.documentElement;
    if (html.classList.contains(CLASSE_ANIM)) html.classList.add(CLASSE_PRETES);
  }, []);

  return (
    <LazyMotion features={domAnimation} strict>
      <MotionConfig reducedMotion="user">{children}</MotionConfig>
    </LazyMotion>
  );
}
