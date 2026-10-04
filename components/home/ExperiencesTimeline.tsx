import { experiences, ui } from "@/lib/data";
import ArrowLink from "@/components/ui/ArrowLink";
import Section from "@/components/ui/Section";
import { Timeline, TimelineItem } from "@/components/ui/Timeline";
import ExperienceCard from "@/components/parcours/ExperienceCard";

export default function ExperiencesTimeline() {
  const t = ui.accueil.experiences;

  return (
    <Section id="experiences" eyebrow={t.eyebrow} title={t.titre} subtitle={t.sousTitre} tone="muted">
      <Timeline>
        {experiences.map((exp) => (
          <TimelineItem key={exp.slug}>
            <ExperienceCard experience={exp} />
          </TimelineItem>
        ))}
      </Timeline>

      <ArrowLink href="/about" className="mt-10">
        {t.lien}
      </ArrowLink>
    </Section>
  );
}
