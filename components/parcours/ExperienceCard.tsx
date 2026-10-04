import { CircleCheck } from "lucide-react";
import { ui, type Experience } from "@/lib/data";
import { dureeEnSemaines, formatPeriode } from "@/lib/format";
import Badge from "@/components/ui/Badge";

const MISSIONS_APERCU = 2;

type ExperienceCardProps = {
  experience: Experience;
  /** true : toutes les missions, durée, compétences et résultats (page Parcours) */
  detaille?: boolean;
};

export default function ExperienceCard({ experience: exp, detaille = false }: ExperienceCardProps) {
  const t = ui.parcours.experiences;
  const missions = detaille ? exp.missions : exp.missions.slice(0, MISSIONS_APERCU);
  const resultats = exp.resultats ?? [];

  return (
    <article className="rounded-card border border-border bg-card p-5 text-card-foreground shadow-card sm:p-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
        <span
          aria-hidden="true"
          className="flex size-14 shrink-0 items-center justify-center rounded-button bg-primary font-heading text-sm font-bold tracking-wide text-primary-foreground"
        >
          {exp.monogramme}
        </span>

        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-start justify-between gap-x-4 gap-y-2">
            <div>
              <h3 className="text-lg font-semibold text-foreground">
                {exp.entreprise}
                {exp.sigle && <span className="text-muted-foreground"> ({exp.sigle})</span>}
              </h3>
              <p className="text-sm text-muted-foreground">
                {exp.type} · {exp.lieu}
              </p>
            </div>
            <Badge variant="outline">{exp.domaine}</Badge>
          </div>

          <p className="mt-2 text-sm font-medium text-accent-strong">
            {formatPeriode(exp.debut, exp.fin)}
            {detaille && (
              <span className="text-muted-foreground">
                {" · "}
                <span className="whitespace-nowrap">{ui.duree(dureeEnSemaines(exp.debut, exp.fin))}</span>
              </span>
            )}
          </p>

          {detaille && <h4 className="sr-only">{t.missions}</h4>}
          <ul className="mt-3 list-disc space-y-1 pl-5 text-muted-foreground marker:text-accent">
            {missions.map((mission) => (
              <li key={mission}>{mission}</li>
            ))}
          </ul>

          {detaille && resultats.length > 0 && (
            <div className="mt-5">
              <h4 className="text-sm font-semibold text-foreground">{t.resultats}</h4>
              <ul className="mt-2 space-y-1.5">
                {resultats.map((resultat) => (
                  <li key={resultat} className="flex gap-2 text-muted-foreground">
                    <CircleCheck className="mt-0.5 size-4 shrink-0 text-success" aria-hidden="true" />
                    {resultat}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {detaille && exp.competences.length > 0 && (
            <div className="mt-5">
              <h4 className="text-sm font-semibold text-foreground">{t.competences}</h4>
              <ul className="mt-2 flex flex-wrap gap-2">
                {exp.competences.map((competence) => (
                  <li key={competence}>
                    <Badge>{competence}</Badge>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </article>
  );
}
