import { certifications, certificationsCoursAccueil, type Certification } from "@/lib/data";

/** Certificats professionnels, dans l'ordre de lib/data.ts */
export const certificatsProfessionnels = certifications.filter((c) => c.type === "professionnel");

/** Certificats de cours, du plus récent au plus ancien (tri stable : à date égale, ordre de lib/data.ts) */
export const certificatsCours = certifications
  .filter((c) => c.type === "cours")
  .toSorted((a, b) => b.date.localeCompare(a.date));

/**
 * Certificats de cours de l'accueil, dans l'ordre de certificationsCoursAccueil.
 * Un titre introuvable (faute de frappe) fait échouer le build plutôt que de disparaître en silence.
 */
export const certificatsCoursAccueil: Certification[] = certificationsCoursAccueil.map((titre) => {
  const certif = certifications.find((c) => c.titre === titre && c.type === "cours");
  if (!certif) throw new Error(`certificationsCoursAccueil : « ${titre} » introuvable dans certifications`);
  return certif;
});
