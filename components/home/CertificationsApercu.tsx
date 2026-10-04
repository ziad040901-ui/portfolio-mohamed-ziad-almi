import { certifications, ui } from "@/lib/data";
import ArrowLink from "@/components/ui/ArrowLink";
import Section from "@/components/ui/Section";
import CertificationCard from "@/components/certifications/CertificationCard";
import { Cascade, CascadeItem } from "@/components/motion/Cascade";

const APERCU_MAX = 6;

export default function CertificationsApercu() {
  const t = ui.accueil.certifications;

  return (
    <Section id="certifications" eyebrow={t.eyebrow} title={t.titre} subtitle={t.sousTitre}>
      <Cascade className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {certifications.slice(0, APERCU_MAX).map((certif) => (
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
