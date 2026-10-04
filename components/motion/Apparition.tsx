"use client";

import { m } from "framer-motion";
import { VIEWPORT, varianteApparition } from "./reglages";

type ApparitionProps = {
  children: React.ReactNode;
  className?: string;
};

/** Apparition douce d'un bloc au scroll (fondu + léger glissement) */
export default function Apparition({ children, className }: ApparitionProps) {
  return (
    <m.div
      data-apparition
      className={className}
      variants={varianteApparition}
      initial="cache"
      whileInView="visible"
      viewport={VIEWPORT}
    >
      {children}
    </m.div>
  );
}
