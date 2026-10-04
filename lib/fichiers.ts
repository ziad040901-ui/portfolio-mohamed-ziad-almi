import { existsSync } from "node:fs";
import path from "node:path";

/**
 * Indique si un fichier existe dans public/ (ex. "/images/profile.jpg").
 * Serveur uniquement : évaluée au build pour les pages statiques, ce qui permet
 * d'afficher un visuel de remplacement tant qu'une image n'a pas été ajoutée.
 */
export function fichierPublicExiste(chemin: string) {
  if (!chemin) return false;
  return existsSync(path.join(process.cwd(), "public", chemin));
}
