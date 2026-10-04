import {
  CodeXml,
  FolderGit2,
  GraduationCap,
  Landmark,
  Truck,
  Warehouse,
  type LucideIcon,
} from "lucide-react";
import type { Projet } from "@/lib/data";
import { cn } from "@/lib/utils";

const iconesProjet: Record<string, LucideIcon> = {
  wms: Warehouse,
  "tms-sntl": Truck,
  "student-grade": GraduationCap,
  banking: Landmark,
  portfolio: CodeXml,
};

type VisuelProjetProps = {
  projet: Projet;
  /** "carte" : vignette ; "grand" : visuel principal de la page détail */
  variante?: "carte" | "grand";
  className?: string;
};

/** Visuel de remplacement décoratif, tant que le projet n'a pas de capture d'écran */
export default function VisuelProjet({ projet, variante = "carte", className }: VisuelProjetProps) {
  const Icone = iconesProjet[projet.slug] ?? FolderGit2;
  const grand = variante === "grand";

  return (
    <div
      aria-hidden="true"
      className={cn("relative isolate flex size-full items-center justify-center overflow-hidden bg-primary", className)}
    >
      {/* Quadrillage d'entrepôt en currentColor (pas d'id SVG : plusieurs visuels par page) */}
      <div className="absolute inset-0 -z-10 text-primary-foreground/10 [background-image:linear-gradient(to_right,currentColor_1px,transparent_1px),linear-gradient(to_bottom,currentColor_1px,transparent_1px)] [background-size:2rem_2rem] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_80%)]" />

      <div className="flex flex-col items-center gap-4 px-6 text-center">
        <span
          className={cn(
            "flex items-center justify-center rounded-card border border-primary-foreground/15 bg-primary-foreground/5 text-accent",
            grand ? "size-24 sm:size-28" : "size-20"
          )}
        >
          <Icone className={grand ? "size-12 sm:size-14" : "size-10"} strokeWidth={1.25} />
        </span>
        {grand && (
          <span className="font-heading text-lg font-semibold text-balance text-primary-foreground/90 sm:text-xl">
            {projet.titre}
          </span>
        )}
      </div>
    </div>
  );
}
