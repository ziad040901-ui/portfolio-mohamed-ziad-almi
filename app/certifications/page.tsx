import type { Metadata } from "next";
import { categoriesCertification, seo, ui } from "@/lib/data";
import { certificatsCours, certificatsProfessionnels } from "@/lib/certifications";
import { metadataPage } from "@/lib/seo";
import Container from "@/components/ui/Container";
import GrilleFiltrable from "@/components/ui/GrilleFiltrable";
import SectionHeading from "@/components/ui/SectionHeading";
import { Cascade, CascadeItem } from "@/components/motion/Cascade";
import CertificationCard from "@/components/certifications/CertificationCard";

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

      {/* Certificats professionnels : grandes cartes mises en avant */}
      <section aria-labelledby="professionnels-titre">
        <SectionHeading
          id="professionnels-titre"
          title={t.professionnels.titre}
          subtitle={t.professionnels.sousTitre}
          flush
          className="mb-6 md:mb-8"
        />
        <Cascade className="grid gap-6 md:grid-cols-2">
          {certificatsProfessionnels.map((certif) => (
            <CascadeItem key={certif.titre}>
              <CertificationCard certification={certif} vedette />
            </CascadeItem>
          ))}
        </Cascade>
      </section>

      {/* Certificats de cours : du plus récent au plus ancien, filtrables */}
      <section aria-labelledby="cours-titre" className="mt-16 sm:mt-20">
        <SectionHeading id="cours-titre" title={t.cours.titre} subtitle={t.cours.sousTitre} flush className="mb-6 md:mb-8" />
        <GrilleFiltrable
          categories={categoriesCertification}
          libelles={{
            groupe: t.filtresLabel,
            tous: t.toutes,
            resultatSingulier: t.resultatSingulier,
            resultatPluriel: t.resultatPluriel,
          }}
          elements={certificatsCours.map((certif) => ({
            cle: certif.titre,
            categorie: certif.categorie,
            carte: <CertificationCard certification={certif} />,
          }))}
        />
      </section>
    </Container>
  );
}
