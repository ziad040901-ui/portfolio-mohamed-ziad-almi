import type { MetadataRoute } from "next";
import { navigation, projets, site } from "@/lib/data";

// Généré au build : se met à jour à chaque déploiement
export default function sitemap(): MetadataRoute.Sitemap {
  const maintenant = new Date();

  const pages = navigation.map((lien) => ({
    url: new URL(lien.href, site.url).toString(),
    lastModified: maintenant,
    changeFrequency: "monthly" as const,
    priority: lien.href === "/" ? 1 : 0.8,
  }));

  const pagesProjets = projets.map((projet) => ({
    url: new URL(`/projects/${projet.slug}`, site.url).toString(),
    lastModified: maintenant,
    changeFrequency: "monthly" as const,
    priority: projet.featured ? 0.7 : 0.5,
  }));

  return [...pages, ...pagesProjets];
}
