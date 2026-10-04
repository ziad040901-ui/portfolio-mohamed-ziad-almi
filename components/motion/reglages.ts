import type { Transition, Variants } from "framer-motion";

/** Courbe « ease-out » douce, sans rebond */
export const EASE: Transition["ease"] = [0.22, 1, 0.36, 1];

/** Déclenche une seule fois, quand ~15 % de l'élément est visible */
export const VIEWPORT = { once: true, amount: 0.15 } as const;

/** Fondu + léger glissement vers le haut */
export const varianteApparition: Variants = {
  cache: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE } },
};
