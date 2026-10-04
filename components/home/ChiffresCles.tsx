import { Award, Briefcase, GraduationCap, Languages, type LucideIcon } from "lucide-react";
import { chiffresCles, ui, type ChiffreCle } from "@/lib/data";
import Card from "@/components/ui/Card";
import Container from "@/components/ui/Container";
import { Cascade, CascadeItem } from "@/components/motion/Cascade";

const icones: Record<ChiffreCle["slug"], LucideIcon> = {
  stages: Briefcase,
  certifications: Award,
  langues: Languages,
  niveau: GraduationCap,
};

export default function ChiffresCles() {
  return (
    <section aria-label={ui.accueil.chiffresCles} className="py-12 sm:py-16">
      <Container>
        <Cascade className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {chiffresCles.map((chiffre) => {
            const Icone = icones[chiffre.slug];
            return (
              <CascadeItem key={chiffre.slug}>
                <Card padded={false} className="flex h-full flex-col gap-3 p-5 sm:p-6">
                <span className="flex size-10 items-center justify-center rounded-button bg-accent/15 text-accent-strong">
                  <Icone className="size-5" aria-hidden="true" />
                </span>
                <p>
                  <span className="block font-heading text-3xl font-bold text-foreground sm:text-4xl">
                    {chiffre.valeur}
                  </span>
                  <span className="text-sm text-muted-foreground sm:text-base">{chiffre.label}</span>
                </p>
                </Card>
              </CascadeItem>
            );
          })}
        </Cascade>
      </Container>
    </section>
  );
}
