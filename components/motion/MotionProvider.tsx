"use client";

import { LazyMotion, MotionConfig, domAnimation } from "framer-motion";

/**
 * LazyMotion + domAnimation : n'embarque que les fonctionnalités utilisées (animations,
 * variants, whileInView) avec les composants `m.*`, plus léger que `motion.*`.
 * reducedMotion="user" : framer-motion coupe les déplacements si l'utilisateur l'a demandé ;
 * la règle CSS [data-apparition] de globals.css garantit en plus un état final immédiat.
 */
export default function MotionProvider({ children }: { children: React.ReactNode }) {
  return (
    <LazyMotion features={domAnimation} strict>
      <MotionConfig reducedMotion="user">{children}</MotionConfig>
    </LazyMotion>
  );
}
