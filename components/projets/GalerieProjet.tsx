"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Maximize2, X } from "lucide-react";

/** Image + libellés déjà calculés côté serveur (pas besoin d'embarquer lib/data.ts ici) */
export type ImageGalerie = {
  src: string;
  alt: string;
  legende?: string;
  /** Dimensions réelles (lues au build) : la grande image garde ses proportions */
  largeur?: number;
  hauteur?: number;
  /** aria-label du bouton qui ouvre l'image en plein écran */
  agrandir: string;
  /** « 2 / 5 » */
  compteur: string;
  /** « Capture 2 sur 5 » (lecteurs d'écran) */
  compteurLecteur: string;
};

type GalerieProjetProps = {
  images: ImageGalerie[];
  libelles: { dialogue: string; fermer: string; precedente: string; suivante: string };
};

/** En dessous de 4:3 (capture verticale), l'image est contenue dans un cadre 4:3 au lieu de l'agrandir démesurément */
const RATIO_MIN = 4 / 3;

const boutonIcone =
  "flex size-11 shrink-0 cursor-pointer items-center justify-center rounded-full border border-border bg-card text-foreground shadow-card transition-colors hover:border-accent hover:bg-muted [&_svg]:size-5";

/**
 * Galerie de captures : première image en grand, les autres en vignettes.
 * Un clic ouvre l'affichage plein écran (<dialog> modal) : précédent / suivant, flèches du clavier,
 * Échap ou clic en dehors pour fermer, focus piégé puis rendu au bouton d'origine, page bloquée.
 */
export default function GalerieProjet({ images, libelles }: GalerieProjetProps) {
  const [index, setIndex] = useState<number | null>(null);
  const dialogue = useRef<HTMLDialogElement>(null);
  const boutonFermer = useRef<HTMLButtonElement>(null);
  const declencheur = useRef<HTMLButtonElement | null>(null);
  const total = images.length;
  const ouvert = index !== null;

  const ouvrir = (i: number, bouton: HTMLButtonElement) => {
    declencheur.current = bouton;
    setIndex(i);
  };

  const naviguer = useCallback(
    (pas: number) => setIndex((i) => (i === null ? i : (i + pas + total) % total)),
    [total]
  );

  // Ouverture : dialogue modal (le reste de la page devient inerte), page bloquée, focus sur « Fermer »
  useEffect(() => {
    const d = dialogue.current;
    if (!ouvert || !d || d.open) return;
    d.showModal();
    document.documentElement.style.overflow = "hidden";
    boutonFermer.current?.focus();
  }, [ouvert]);

  // Sécurité : ne jamais laisser la page bloquée si le composant disparaît
  useEffect(() => () => void (document.documentElement.style.overflow = ""), []);

  // Appelé par dialog.close() et par Échap (événement natif « close »)
  const surFermeture = () => {
    document.documentElement.style.overflow = "";
    setIndex(null);
    declencheur.current?.focus();
  };

  const surTouche = (e: React.KeyboardEvent<HTMLDialogElement>) => {
    if (e.key === "ArrowRight") {
      e.preventDefault();
      naviguer(1);
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      naviguer(-1);
    } else if (e.key === "Tab") {
      // Piège à focus : Tab / Maj+Tab tournent entre les boutons du dialogue
      const boutons = [...e.currentTarget.querySelectorAll<HTMLButtonElement>("button")];
      const premier = boutons[0];
      const dernier = boutons[boutons.length - 1];
      if (e.shiftKey && document.activeElement === premier) {
        e.preventDefault();
        dernier.focus();
      } else if (!e.shiftKey && document.activeElement === dernier) {
        e.preventDefault();
        premier.focus();
      }
    }
  };

  // Clic en dehors de l'image et des boutons (zones marquées data-fond) : fermeture
  const surClic = (e: React.MouseEvent<HTMLDialogElement>) => {
    if (e.target instanceof HTMLElement && e.target.hasAttribute("data-fond")) dialogue.current?.close();
  };

  if (total === 0) return null;
  const [principale, ...vignettes] = images;
  // Proportions réelles de la grande image (16:9 si inconnues) : une capture large n'est pas rognée
  const ratio = principale.largeur && principale.hauteur ? principale.largeur / principale.hauteur : 16 / 9;
  const contenue = ratio < RATIO_MIN;
  const courante = ouvert ? images[index] : null;

  return (
    <>
      <figure className="overflow-hidden rounded-card border border-border bg-card shadow-card">
        <button
          type="button"
          onClick={(e) => ouvrir(0, e.currentTarget)}
          aria-label={principale.agrandir}
          aria-haspopup="dialog"
          style={{ aspectRatio: Math.max(ratio, RATIO_MIN) }}
          className="group relative block w-full cursor-zoom-in overflow-hidden bg-muted focus-visible:-outline-offset-4"
        >
          <Image
            src={principale.src}
            alt={principale.alt}
            fill
            preload
            sizes="(min-width: 1152px) 1152px, 100vw"
            className={`transition-transform duration-300 motion-safe:group-hover:scale-[1.02] ${contenue ? "object-contain" : "object-cover"}`}
          />
          <span
            aria-hidden="true"
            className="absolute right-3 bottom-3 flex size-10 items-center justify-center rounded-button bg-card/90 text-foreground shadow-card transition-colors group-hover:bg-accent group-hover:text-accent-foreground"
          >
            <Maximize2 className="size-5" />
          </span>
        </button>
        {principale.legende && (
          <figcaption className="border-t border-border px-4 py-3 text-sm text-muted-foreground">
            {principale.legende}
          </figcaption>
        )}
      </figure>

      {vignettes.length > 0 && (
        <ul className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {vignettes.map((img, k) => (
            <li key={img.src}>
              <button
                type="button"
                onClick={(e) => ouvrir(k + 1, e.currentTarget)}
                aria-label={img.agrandir}
                aria-haspopup="dialog"
                className="group relative block aspect-video w-full cursor-zoom-in overflow-hidden rounded-button border border-border bg-card shadow-card transition-colors hover:border-accent"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(min-width: 1024px) 270px, (min-width: 640px) 33vw, 50vw"
                  className="object-cover object-left-top transition-transform duration-300 motion-safe:group-hover:scale-105"
                />
              </button>
            </li>
          ))}
        </ul>
      )}

      {/* Plein écran : fond opaque aux couleurs du thème (clair ou sombre) */}
      <dialog
        ref={dialogue}
        aria-label={libelles.dialogue}
        onClose={surFermeture}
        onKeyDown={surTouche}
        onClick={surClic}
        className="m-0 h-dvh max-h-none w-screen max-w-none bg-background p-0 text-foreground backdrop:bg-transparent open:flex"
      >
        {courante && (
          <div data-fond className="flex size-full flex-col motion-safe:animate-lightbox">
            <div data-fond className="flex items-center justify-between gap-4 px-4 py-3 sm:px-6">
              <p className="font-heading text-sm font-semibold tabular-nums text-muted-foreground" aria-hidden="true">
                {courante.compteur}
              </p>
              {/* Annonce lecteur d'écran à chaque changement d'image */}
              <p className="sr-only" aria-live="polite">
                {courante.compteurLecteur}
                {courante.legende && ` : ${courante.legende}`}
              </p>
              <button
                ref={boutonFermer}
                type="button"
                onClick={() => dialogue.current?.close()}
                aria-label={libelles.fermer}
                className={boutonIcone}
              >
                <X aria-hidden="true" />
              </button>
            </div>

            <div data-fond className="flex min-h-0 flex-1 items-center gap-2 px-2 pb-4 sm:gap-4 sm:px-6 sm:pb-6">
              {total > 1 && (
                <button type="button" onClick={() => naviguer(-1)} aria-label={libelles.precedente} className={boutonIcone}>
                  <ChevronLeft aria-hidden="true" />
                </button>
              )}

              <figure data-fond className="flex h-full min-w-0 flex-1 flex-col">
                <div data-fond className="relative min-h-0 flex-1">
                  <Image
                    key={courante.src}
                    src={courante.src}
                    alt={courante.alt}
                    fill
                    sizes="100vw"
                    className="object-contain motion-safe:animate-lightbox"
                  />
                </div>
                {courante.legende && (
                  <figcaption className="pt-3 text-center text-sm text-balance text-muted-foreground sm:text-base">
                    {courante.legende}
                  </figcaption>
                )}
              </figure>

              {total > 1 && (
                <button type="button" onClick={() => naviguer(1)} aria-label={libelles.suivante} className={boutonIcone}>
                  <ChevronRight aria-hidden="true" />
                </button>
              )}
            </div>
          </div>
        )}
      </dialog>
    </>
  );
}
