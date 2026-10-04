import type { Metadata } from "next";
import { categoriesCertification, certifications, seo, ui } from "@/lib/data";
import { metadataPage } from "@/lib/seo";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import CertificationCard from "@/components/certifications/CertificationCard";
import GrilleFiltrable from "@/components/ui/GrilleFiltrable";

export const metadata: Metadata = metadataPage({
  titre: seo.pages.certifications.titre,
  description: seo.pages.certifications.description,
  chemin: "/certifications",
});

export default function CertificationsPage() {
  const t = ui.certifications;

  return (
    <Container className="py-section">
      <SectionHeading as="h1" eyebrow={t.eyebrow} title={t.titre} subtitle={t.sousTitre} />

      <GrilleFiltrable
        categories={categoriesCertification}
        libelles={{
          groupe: t.filtresLabel,
          tous: t.toutes,
          resultatSingulier: t.resultatSingulier,
          resultatPluriel: t.resultatPluriel,
        }}
        elements={certifications.map((certif) => ({
          cle: certif.titre,
          categorie: certif.categorie,
          carte: <CertificationCard certification={certif} titreNiveau="h2" />,
        }))}
      />
    </Container>
  );
}
