import { GraduationCap } from "lucide-react";
import { formations, ui } from "@/lib/data";
import Badge from "@/components/ui/Badge";
import { Timeline, TimelineItem } from "@/components/ui/Timeline";

export default function FormationTimeline() {
  const t = ui.parcours.formation;

  return (
    <Timeline>
      {formations.map((formation) => (
        <TimelineItem key={formation.slug}>
          <article className="rounded-card border border-border bg-card p-5 text-card-foreground shadow-card sm:p-6">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
              <span
                aria-hidden="true"
                className="flex size-14 shrink-0 items-center justify-center rounded-button bg-primary text-primary-foreground"
              >
                <GraduationCap className="size-6" />
              </span>

              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-start justify-between gap-x-4 gap-y-2">
                  <h3 className="text-lg font-semibold text-foreground">{formation.diplome}</h3>
                  <div className="flex flex-wrap gap-2">
                    {formation.enCours && (
                      <Badge variant="accent">
                        {t.enCours}
                        {formation.precision && ` · ${formation.precision}`}
                      </Badge>
                    )}
                    <Badge variant="outline">{formation.niveau}</Badge>
                  </div>
                </div>
                <p className="mt-1 text-muted-foreground">{formation.etablissement}</p>
                <p className="mt-2 text-sm font-medium text-accent-strong">
                  {formation.anneeDebut} – {formation.anneeFin}
                </p>
              </div>
            </div>
          </article>
        </TimelineItem>
      ))}
    </Timeline>
  );
}
