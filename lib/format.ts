import type { DateISO } from "@/lib/data";

// timeZone UTC : une date ISO « 2024-05-01 » ne doit pas devenir « avril » selon le fuseau du serveur
const moisAnnee = new Intl.DateTimeFormat("fr-FR", {
  month: "short",
  year: "numeric",
  timeZone: "UTC",
});

/** « 2024-05-01 », « 2024-06-01 » → « mai 2024 – juin 2024 » */
export function formatPeriode(debut: DateISO, fin: DateISO) {
  return `${moisAnnee.format(new Date(debut))} – ${moisAnnee.format(new Date(fin))}`;
}

const moisLongAnnee = new Intl.DateTimeFormat("fr-FR", {
  month: "long",
  year: "numeric",
  timeZone: "UTC",
});

/** « 2026-09-27 » → « septembre 2026 » */
export function formatMoisAnnee(date: DateISO) {
  return moisLongAnnee.format(new Date(date));
}

/** Durée arrondie en semaines entre deux dates ISO (bornes incluses) */
export function dureeEnSemaines(debut: DateISO, fin: DateISO) {
  const jours = (Date.parse(fin) - Date.parse(debut)) / 86_400_000 + 1;
  return Math.max(1, Math.round(jours / 7));
}

/** Met la première lettre en majuscule (affichage uniquement) */
export function capitaliser(texte: string) {
  return texte.charAt(0).toUpperCase() + texte.slice(1);
}

/** « Mohamed Ziad Almi » → « MZA » */
export function initiales(nom: string) {
  return nom
    .split(/\s+/)
    .map((mot) => mot.charAt(0).toUpperCase())
    .join("");
}
