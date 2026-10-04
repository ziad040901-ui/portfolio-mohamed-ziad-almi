import type { Metadata } from "next";
import { profil, seo } from "@/lib/data";

type MetadataPageOptions = {
  titre: string;
  description: string;
  /** Chemin de la page, ex. "/about" (URL canonique et og:url) */
  chemin: string;
};

/** Image générée par app/opengraph-image.tsx (1200 × 630) */
const imagePartage = {
  url: "/opengraph-image",
  width: 1200,
  height: 630,
  alt: seo.imagePartage.alt,
};

/**
 * Metadata d'une page. La fusion des metadata de Next.js est superficielle : une page
 * qui définit `openGraph` remplace celui du layout, y compris l'image issue de
 * app/opengraph-image.tsx. Titre, description ET image sont donc redonnés ici.
 */
export function metadataPage({ titre, description, chemin }: MetadataPageOptions): Metadata {
  const titreComplet = seo.modeleTitre.replace("%s", titre);
  return {
    title: titre,
    description,
    alternates: { canonical: chemin },
    openGraph: {
      type: "website",
      locale: "fr_FR",
      siteName: profil.nom,
      url: chemin,
      title: titreComplet,
      description,
      images: [imagePartage],
    },
    twitter: {
      card: "summary_large_image",
      title: titreComplet,
      description,
      images: [imagePartage],
    },
  };
}
