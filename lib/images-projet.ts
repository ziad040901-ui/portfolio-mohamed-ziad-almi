import { existsSync, readFileSync, readdirSync } from "node:fs";
import path from "node:path";
import { ui, type ImageProjet, type Projet } from "@/lib/data";
import { fichierPublicExiste } from "@/lib/fichiers";

const EXTENSIONS = new Set([".png", ".jpg", ".jpeg", ".webp"]);

/** Capture prête à afficher : dimensions lues dans le fichier (pour respecter ses proportions) */
export type ImageProjetDimensionnee = ImageProjet & { largeur?: number; hauteur?: number };

/** « 01-tableau-de-bord.png » → « Tableau de bord » (numéro retiré, tirets → espaces, majuscule initiale) */
export function legendeDepuisNomFichier(fichier: string) {
  const texte = path
    .parse(fichier)
    .name.replace(/^\d+[\s._-]*/, "")
    .replace(/[-_]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();
  return texte.charAt(0).toLocaleUpperCase("fr-FR") + texte.slice(1);
}

/** Largeur et hauteur d'un PNG, JPEG ou WebP, lues dans l'en-tête du fichier (undefined si format inconnu) */
function dimensions(fichier: string): { largeur: number; hauteur: number } | undefined {
  const b = readFileSync(fichier);
  // PNG : bloc IHDR
  if (b.toString("ascii", 1, 4) === "PNG") return { largeur: b.readUInt32BE(16), hauteur: b.readUInt32BE(20) };
  // WebP : conteneur RIFF, puis VP8X (étendu), VP8L (sans perte) ou VP8 (avec perte)
  if (b.toString("ascii", 0, 4) === "RIFF" && b.toString("ascii", 8, 12) === "WEBP") {
    const type = b.toString("ascii", 12, 16);
    if (type === "VP8X") return { largeur: 1 + b.readUIntLE(24, 3), hauteur: 1 + b.readUIntLE(27, 3) };
    if (type === "VP8L") {
      const bits = b.readUInt32LE(21);
      return { largeur: 1 + (bits & 0x3fff), hauteur: 1 + ((bits >> 14) & 0x3fff) };
    }
    if (type === "VP8 ") return { largeur: b.readUInt16LE(26) & 0x3fff, hauteur: b.readUInt16LE(28) & 0x3fff };
  }
  // JPEG : premier segment SOFn
  if (b[0] === 0xff && b[1] === 0xd8) {
    let i = 2;
    while (i + 9 < b.length) {
      if (b[i] !== 0xff) return undefined;
      const marqueur = b[i + 1];
      if (marqueur >= 0xc0 && marqueur <= 0xcf && ![0xc4, 0xc8, 0xcc].includes(marqueur)) {
        return { largeur: b.readUInt16BE(i + 7), hauteur: b.readUInt16BE(i + 5) };
      }
      i += 2 + b.readUInt16BE(i + 2);
    }
  }
  return undefined;
}

function avecDimensions(img: ImageProjet): ImageProjetDimensionnee {
  const fichier = path.join(process.cwd(), "public", decodeURIComponent(img.src));
  try {
    return { ...img, ...dimensions(fichier) };
  } catch {
    return img;
  }
}

/**
 * Captures d'écran d'un projet. Serveur uniquement : évaluée au build (pages statiques).
 * 1. Les images déclarées dans lib/data.ts (et présentes dans public/) sont prioritaires.
 * 2. Sinon : fichiers png / jpg / jpeg / webp de public/images/projets/<slug>/, triés par nom
 *    (« 2-… » avant « 10-… »), alt et légende déduits du nom de fichier.
 * Aucune image → tableau vide : les composants affichent le visuel de remplacement.
 */
export function imagesProjet(projet: Projet): ImageProjetDimensionnee[] {
  const declarees = projet.images.filter((img) => fichierPublicExiste(img.src));
  if (declarees.length > 0) return declarees.map(avecDimensions);

  const dossier = path.join(process.cwd(), "public", "images", "projets", projet.slug);
  if (!existsSync(dossier)) return [];

  return readdirSync(dossier)
    .filter((fichier) => EXTENSIONS.has(path.extname(fichier).toLowerCase()))
    .sort((a, b) => a.localeCompare(b, "fr", { numeric: true }))
    .map((fichier, i) => {
      const legende = legendeDepuisNomFichier(fichier) || ui.projets.galerie.captureParDefaut(projet.titre, i + 1);
      return avecDimensions({
        src: `/images/projets/${projet.slug}/${encodeURIComponent(fichier)}`,
        alt: legende,
        legende,
      });
    });
}
