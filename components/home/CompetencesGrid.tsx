import { ui } from "@/lib/data";
import Section from "@/components/ui/Section";
import CompetencesCartes from "@/components/parcours/CompetencesCartes";

export default function CompetencesGrid() {
  const t = ui.accueil.competences;

  return (
    <Section id="competences" eyebrow={t.eyebrow} title={t.titre} subtitle={t.sousTitre} tone="muted">
      <CompetencesCartes />
    </Section>
  );
}
