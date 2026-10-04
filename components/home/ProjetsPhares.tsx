import { projets, ui } from "@/lib/data";
import ArrowLink from "@/components/ui/ArrowLink";
import Section from "@/components/ui/Section";
import ProjetCard from "@/components/projets/ProjetCard";
import { Cascade, CascadeItem } from "@/components/motion/Cascade";

export default function ProjetsPhares() {
  const t = ui.accueil.projets;
  // L'ordre du tableau dans lib/data.ts définit la priorité (WMS, TMS…)
  const phares = projets.filter((projet) => projet.featured);

  return (
    <Section id="projets" eyebrow={t.eyebrow} title={t.titre} subtitle={t.sousTitre}>
      <Cascade as="div" className="grid gap-6 md:grid-cols-2">
        {phares.map((projet) => (
          <CascadeItem as="div" key={projet.slug}>
            <ProjetCard projet={projet} />
          </CascadeItem>
        ))}
      </Cascade>

      <ArrowLink href="/projects" className="mt-10">
        {t.lien}
      </ArrowLink>
    </Section>
  );
}
