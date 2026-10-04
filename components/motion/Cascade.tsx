"use client";

import { m } from "framer-motion";
import { VIEWPORT, varianteApparition } from "./reglages";

const ECART_S = 0.08;

const composants = { ul: m.ul, ol: m.ol, div: m.div } as const;

type CascadeProps = {
  as?: keyof typeof composants;
  children: React.ReactNode;
  className?: string;
};

/** Conteneur dont les enfants <CascadeItem> apparaissent l'un après l'autre */
export function Cascade({ as = "ul", children, className }: CascadeProps) {
  const Composant = composants[as];
  return (
    <Composant
      className={className}
      initial="cache"
      whileInView="visible"
      viewport={VIEWPORT}
      variants={{ visible: { transition: { staggerChildren: ECART_S } } }}
    >
      {children}
    </Composant>
  );
}

const elements = { li: m.li, div: m.div } as const;

type CascadeItemProps = {
  as?: keyof typeof elements;
  children: React.ReactNode;
  className?: string;
};

export function CascadeItem({ as = "li", children, className }: CascadeItemProps) {
  const Element = elements[as];
  return (
    <Element data-apparition className={className} variants={varianteApparition}>
      {children}
    </Element>
  );
}
