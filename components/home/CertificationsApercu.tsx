import { ui } from "@/lib/data";
import { certificatsCoursAccueil, certificatsProfessionnels } from "@/lib/certifications";
import ArrowLink from "@/components/ui/ArrowLink";
import Section from "@/components/ui/Section";
import CertificationCard from "@/components/certifications/CertificationCard";
import { Cascade, CascadeItem } from "@/components/motion/Cascade";

export default function CertificationsApercu() {
  const t = ui.accueil.certifications;

  return (
    <Section id="certifications" eyebrow={t.eyebrow} title={t.titre} subtitle={t.sousTitre}>
      {/* Certificats professionnels en vedette */}
      <Cascade className="grid gap-6 md:grid-cols-2">
        {certificatsProfessionnels.map((certif) => (
          <CascadeItem key={certif.titre}>
            <CertificationCard certification={certif} vedette />
          </CascadeItem>
        ))}
      </Cascade>

      {/* Sélection de certificats de cours (lib/data.ts → certificationsCoursAccueil) */}
      <Cascade className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {certificatsCoursAccueil.map((certif) => (
          <CascadeItem key={certif.titre}>
            <CertificationCard certification={certif} />
          </CascadeItem>
        ))}
      </Cascade>

      <ArrowLink href="/certifications" className="mt-10">
        {t.lien}
      </ArrowLink>
    </Section>
  );
}
