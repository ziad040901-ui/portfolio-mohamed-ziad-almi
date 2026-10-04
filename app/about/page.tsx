import type { Metadata } from "next";
import { Download, Mail, MapPin } from "lucide-react";
import { experiences, profil, seo, ui } from "@/lib/data";
import { metadataPage } from "@/lib/seo";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import { Timeline, TimelineItem } from "@/components/ui/Timeline";
import PhotoProfil from "@/components/PhotoProfil";
import ExperienceCard from "@/components/parcours/ExperienceCard";
import FormationTimeline from "@/components/parcours/FormationTimeline";
import CursusAccordeon from "@/components/parcours/CursusAccordeon";
import CompetencesCartes from "@/components/parcours/CompetencesCartes";
import LanguesNiveaux from "@/components/parcours/LanguesNiveaux";

export const metadata: Metadata = metadataPage({
  titre: seo.pages.parcours.titre,
  description: seo.pages.parcours.description,
  chemin: "/about",
});

export default function ParcoursPage() {
  const t = ui.parcours;

  return (
    <>
      <section aria-labelledby="parcours-titre" className="border-b border-border">
        <Container className="grid items-center gap-10 py-section md:grid-cols-[1fr_auto] md:gap-14">
          <PhotoProfil
            className="mx-auto size-36 sm:size-44 md:order-last lg:size-56"
            sizes="(min-width: 1024px) 224px, (min-width: 640px) 176px, 144px"
            preload
          />

          <div className="text-center md:text-left">
            <SectionHeading
              as="h1"
              id="parcours-titre"
              eyebrow={t.entete.eyebrow}
              title={t.entete.titre}
              flush
            />

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-pretty text-muted-foreground md:mx-0">
              {profil.resume}
            </p>

            <p className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-foreground">
              <MapPin className="size-4 text-accent-strong" aria-hidden="true" />
              {profil.localisation}
            </p>

            <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row md:justify-start">
              <Button href={profil.cv} download={ui.cvNomFichier} size="lg" className="w-full sm:w-auto">
                <Download aria-hidden="true" />
                {t.entete.cv}
              </Button>
              <Button href="/contact" variant="outline" size="lg" className="w-full sm:w-auto">
                <Mail aria-hidden="true" />
                {t.entete.contact}
              </Button>
            </div>
          </div>
        </Container>
      </section>

      <Section
        id="experiences"
        eyebrow={t.experiences.eyebrow}
        title={t.experiences.titre}
        subtitle={t.experiences.sousTitre}
      >
        <Timeline>
          {experiences.map((exp) => (
            <TimelineItem key={exp.slug}>
              <ExperienceCard experience={exp} detaille />
            </TimelineItem>
          ))}
        </Timeline>
      </Section>

      <Section
        id="formation"
        eyebrow={t.formation.eyebrow}
        title={t.formation.titre}
        subtitle={t.formation.sousTitre}
        tone="muted"
      >
        <FormationTimeline />
      </Section>

      <Section id="cursus" eyebrow={t.cursus.eyebrow} title={t.cursus.titre} subtitle={t.cursus.sousTitre}>
        <CursusAccordeon />
      </Section>

      <Section
        id="competences"
        eyebrow={t.competences.eyebrow}
        title={t.competences.titre}
        subtitle={t.competences.sousTitre}
        tone="muted"
      >
        <CompetencesCartes />
      </Section>

      <Section id="langues" eyebrow={t.langues.eyebrow} title={t.langues.titre} subtitle={t.langues.sousTitre}>
        <LanguesNiveaux />
      </Section>
    </>
  );
}
