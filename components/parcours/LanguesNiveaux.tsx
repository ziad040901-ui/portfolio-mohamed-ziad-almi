import { langues, ui } from "@/lib/data";
import { cn } from "@/lib/utils";
import Card from "@/components/ui/Card";
import { Cascade, CascadeItem } from "@/components/motion/Cascade";

const NIVEAU_MAX = 5;

export default function LanguesNiveaux() {
  const t = ui.parcours.langues;

  return (
    <Cascade className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {langues.map((langue) => (
        <CascadeItem key={langue.langue}>
          <Card className="flex h-full items-center justify-between gap-4">
            <div>
              <h3 className="font-semibold text-foreground">{langue.langue}</h3>
              {/* Le niveau est donné en texte ; les barres ne sont qu'un repère visuel */}
              <p className="text-sm text-muted-foreground">
                {langue.niveau}
                <span className="sr-only"> ({t.score(langue.score)})</span>
              </p>
            </div>

            <div aria-hidden="true" className="flex shrink-0 gap-1">
              {Array.from({ length: NIVEAU_MAX }, (_, i) => (
                <span
                  key={i}
                  className={cn("h-2 w-5 rounded-full", i < langue.score ? "bg-accent" : "bg-border")}
                />
              ))}
            </div>
          </Card>
        </CascadeItem>
      ))}
    </Cascade>
  );
}
