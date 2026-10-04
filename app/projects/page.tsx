import type { Metadata } from "next";
import { categoriesProjet, projets, seo, ui } from "@/lib/data";
import { metadataPage } from "@/lib/seo";
import Container from "@/components/ui/Container";
import GrilleFiltrable from "@/components/ui/GrilleFiltrable";
import SectionHeading from "@/components/ui/SectionHeading";
import ProjetCard from "@/components/projets/ProjetCard";

export const metadata: Metadata = metadataPage({
  titre: seo.pages.projets.titre,
  description: seo.pages.projets.description,
  chemin: "/projects",
});

export default function ProjetsPage() {
  const t = ui.projets;

  return (
    <Container className="py-section">
      <SectionHeading as="h1" eyebrow={t.eyebrow} title={t.titre} subtitle={t.sousTitre} />

      {/* L'ordre de lib/data.ts (WMS, TMS en tête) est conservé dans chaque filtre */}
      <GrilleFiltrable
        categories={categoriesProjet}
        libelles={{
          groupe: t.filtresLabel,
          tous: t.tous,
          resultatSingulier: t.resultatSingulier,
          resultatPluriel: t.resultatPluriel,
        }}
        grilleClassName="md:grid-cols-2 lg:grid-cols-3"
        elements={projets.map((projet) => ({
          cle: projet.slug,
          categorie: projet.categorie,
          carte: <ProjetCard projet={projet} titreNiveau="h2" />,
        }))}
      />
    </Container>
  );
}
