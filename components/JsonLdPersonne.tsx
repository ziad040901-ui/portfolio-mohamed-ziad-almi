import { competences, ecole, langues, profil, seo, site } from "@/lib/data";
import { fichierPublicExiste } from "@/lib/fichiers";

/** Données structurées schema.org « Person » (moteurs de recherche, IA) */
export default function JsonLdPersonne() {
  const organisationEcole = {
    "@type": "EducationalOrganization",
    name: `${ecole.nom} (${ecole.sigle})`,
    address: { "@type": "PostalAddress", addressLocality: ecole.ville, addressCountry: ecole.pays },
  };

  const personne = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profil.nom,
    url: site.url,
    ...(fichierPublicExiste(profil.photo) && { image: new URL(profil.photo, site.url).toString() }),
    jobTitle: seo.poste,
    description: profil.resume,
    email: `mailto:${profil.email}`,
    address: { "@type": "PostalAddress", addressLocality: "Casablanca", addressCountry: "MA" },
    affiliation: organisationEcole,
    alumniOf: organisationEcole,
    knowsAbout: [...new Set(competences.flatMap((c) => c.items))],
    knowsLanguage: langues.map((l) => l.langue),
    sameAs: [profil.linkedin, profil.github],
  };

  return (
    <script
      type="application/ld+json"
      // « < » échappé : empêche toute injection de balise via le contenu (recommandation Next.js)
      dangerouslySetInnerHTML={{ __html: JSON.stringify(personne).replace(/</g, "\\u003c") }}
    />
  );
}
