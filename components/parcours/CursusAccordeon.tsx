import { ChevronDown } from "lucide-react";
import { cursusMaster, ui } from "@/lib/data";
import { Cascade, CascadeItem } from "@/components/motion/Cascade";

/**
 * Blocs de matières repliables via <details>/<summary> natifs :
 * accessibles au clavier et aux lecteurs d'écran, sans JavaScript.
 */
export default function CursusAccordeon() {
  const t = ui.parcours.cursus;

  return (
    <Cascade className="grid items-start gap-4 md:grid-cols-2">
      {cursusMaster.map((bloc) => (
        <CascadeItem key={bloc.titre}>
          <details className="group rounded-card border border-border bg-card text-card-foreground shadow-card transition-colors open:border-accent">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 rounded-card p-5 [&::-webkit-details-marker]:hidden">
              <div>
                <h3 className="font-semibold text-foreground">{bloc.titre}</h3>
                <span className="text-sm text-muted-foreground">
                  {t.nombreMatieres(bloc.matieres.length)}
                </span>
              </div>
              <ChevronDown
                className="size-5 shrink-0 text-muted-foreground transition-transform group-open:rotate-180"
                aria-hidden="true"
              />
            </summary>

            <ul className="list-disc space-y-1.5 border-t border-border pt-4 pr-5 pb-5 pl-10 text-muted-foreground marker:text-accent">
              {bloc.matieres.map((matiere) => (
                <li key={matiere}>{matiere}</li>
              ))}
            </ul>
          </details>
        </CascadeItem>
      ))}
    </Cascade>
  );
}
