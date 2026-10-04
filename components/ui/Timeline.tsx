"use client";

import { m } from "framer-motion";
import { cn } from "@/lib/utils";
import { EASE } from "@/components/motion/reglages";

/**
 * Liste chronologique verticale. Animation : la ligne se trace de haut en bas,
 * puis les éléments glissent depuis la gauche, l'un après l'autre.
 */
export function Timeline({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <m.div
      className={cn("relative sm:ml-7", className)}
      initial="cache"
      whileInView="visible"
      viewport={{ once: true, amount: 0.05 }}
      variants={{ visible: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } } }}
    >
      {/* Ligne (2px) : élément séparé pour pouvoir l'animer */}
      <m.span
        aria-hidden="true"
        data-apparition
        className="absolute inset-y-0 left-0 w-0.5 origin-top rounded-full bg-border"
        variants={{ cache: { scaleY: 0 }, visible: { scaleY: 1, transition: { duration: 0.9, ease: EASE } } }}
      />
      <ol className="space-y-8 pl-6 sm:pl-10">{children}</ol>
    </m.div>
  );
}

export function TimelineItem({ children }: { children: React.ReactNode }) {
  return (
    <m.li
      data-apparition
      className="relative"
      variants={{
        cache: { opacity: 0, x: -12 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: EASE } },
      }}
    >
      {/* Repère centré sur la ligne : décalage = padding de la liste + (taille du repère - ligne) / 2 */}
      <span
        aria-hidden="true"
        className="absolute top-5 -left-[calc(1.5rem+5px)] size-3 rounded-full bg-accent ring-4 ring-accent/20 sm:-left-[calc(2.5rem+5px)]"
      />
      {children}
    </m.li>
  );
}
