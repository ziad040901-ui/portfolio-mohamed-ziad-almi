"use client";

import { useState } from "react";
import { m } from "framer-motion";
import { cn } from "@/lib/utils";
import { VIEWPORT, varianteApparition } from "@/components/motion/reglages";

type Element = {
  cle: string;
  categorie: string;
  /** Carte rendue côté serveur (le contenu de lib/data.ts n'est pas envoyé au navigateur) */
  carte: React.ReactNode;
};

type GrilleFiltrableProps = {
  /** Catégories dans l'ordre d'affichage des filtres (les catégories vides sont masquées) */
  categories: string[];
  elements: Element[];
  libelles: {
    groupe: string;
    tous: string;
    resultatSingulier: string;
    resultatPluriel: string;
  };
  /** Colonnes de la grille, ex. "sm:grid-cols-2 lg:grid-cols-3" */
  grilleClassName?: string;
};

const TOUS = "__tous__";

/** Filtres par catégorie (aria-pressed + compteurs) au-dessus d'une grille de cartes */
export default function GrilleFiltrable({
  categories,
  elements,
  libelles,
  grilleClassName = "sm:grid-cols-2 lg:grid-cols-3",
}: GrilleFiltrableProps) {
  const [filtre, setFiltre] = useState(TOUS);

  const filtres = [
    { valeur: TOUS, label: libelles.tous, total: elements.length },
    ...categories.map((categorie) => ({
      valeur: categorie,
      label: categorie,
      total: elements.filter((el) => el.categorie === categorie).length,
    })),
  ].filter((f) => f.total > 0);

  const visibles = filtre === TOUS ? elements : elements.filter((el) => el.categorie === filtre);

  return (
    <>
      <div role="group" aria-label={libelles.groupe} className="mb-8 flex flex-wrap gap-2">
        {filtres.map((f) => {
          const actif = filtre === f.valeur;
          return (
            <button
              key={f.valeur}
              type="button"
              aria-pressed={actif}
              onClick={() => setFiltre(f.valeur)}
              className={cn(
                "inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition-colors",
                actif
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border bg-card text-foreground hover:border-accent"
              )}
            >
              {f.label}
              <span
                className={cn(
                  "rounded-full px-2 py-0.5 text-xs font-semibold",
                  actif ? "bg-primary-foreground/20" : "bg-muted text-muted-foreground"
                )}
              >
                {f.total}
              </span>
            </button>
          );
        })}
      </div>

      {/* Annonce discrète du nombre de résultats après chaque changement de filtre */}
      <p className="sr-only" aria-live="polite">
        {visibles.length} {visibles.length > 1 ? libelles.resultatPluriel : libelles.resultatSingulier}
      </p>

      {/* key={filtre} : la grille est recréée à chaque filtre, les cartes réapparaissent en cascade */}
      <m.ul
        key={filtre}
        className={cn("grid gap-6", grilleClassName)}
        initial="cache"
        whileInView="visible"
        viewport={VIEWPORT}
        variants={{ visible: { transition: { staggerChildren: 0.06 } } }}
      >
        {visibles.map((el) => (
          <m.li key={el.cle} data-apparition variants={varianteApparition}>
            {el.carte}
          </m.li>
        ))}
      </m.ul>
    </>
  );
}
