import { ChartColumn, CodeXml, Container as ConteneurIcon, Sparkles, Users, type LucideIcon } from "lucide-react";
import { competences } from "@/lib/data";
import { capitaliser } from "@/lib/format";
import Badge from "@/components/ui/Badge";
import Card from "@/components/ui/Card";
import { Cascade, CascadeItem } from "@/components/motion/Cascade";

const iconesCategorie: Record<string, LucideIcon> = {
  "supply-chain": ConteneurIcon,
  "data-digital": ChartColumn,
  developpement: CodeXml,
  gestion: Users,
};

/** Les 4 catégories de compétences, complètes (accueil et page Parcours) */
export default function CompetencesCartes() {
  return (
    <Cascade as="div" className="grid gap-6 md:grid-cols-2">
      {competences.map((categorie) => {
        const Icone = iconesCategorie[categorie.slug] ?? Sparkles;
        return (
          <CascadeItem as="div" key={categorie.slug}>
            <Card className="h-full">
              <div className="mb-5 flex items-center gap-3">
                <span className="flex size-11 shrink-0 items-center justify-center rounded-button bg-primary text-primary-foreground">
                  <Icone className="size-5" aria-hidden="true" />
                </span>
                <h3 className="text-lg font-semibold text-foreground">{categorie.titre}</h3>
              </div>

              <ul className="flex flex-wrap gap-2">
                {categorie.items.map((item) => (
                  <li key={item}>
                    <Badge variant="outline" className="text-sm">
                      {capitaliser(item)}
                    </Badge>
                  </li>
                ))}
              </ul>
            </Card>
          </CascadeItem>
        );
      })}
    </Cascade>
  );
}
