import {
  Award,
  BrainCircuit,
  CalendarCheck,
  ChartColumn,
  CodeXml,
  ExternalLink,
  ShoppingCart,
  Workflow,
  type LucideIcon,
} from "lucide-react";
import { ui, type CategorieCertification, type Certification } from "@/lib/data";
import { formatMoisAnnee } from "@/lib/format";
import { cn } from "@/lib/utils";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";

const iconesCategorie: Record<CategorieCertification, LucideIcon> = {
  "Supply Chain & Gestion": Workflow,
  "Data & Analyse": ChartColumn,
  Développement: CodeXml,
  "Intelligence artificielle": BrainCircuit,
  "E-commerce & Marketing": ShoppingCart,
};

type CertificationCardProps = {
  certification: Certification;
  /** Grande carte mise en avant (certificats professionnels) */
  vedette?: boolean;
  titreNiveau?: "h2" | "h3";
};

/** Carte de certification (accueil et page Certifications) : le titre et le bouton mènent au lien de vérification */
export default function CertificationCard({
  certification: certif,
  vedette = false,
  titreNiveau: Titre = "h3",
}: CertificationCardProps) {
  const t = ui.certifications;
  const Icone = vedette ? Award : iconesCategorie[certif.categorie];
  const action = vedette ? t.voirBadge : t.verifier;
  const ariaLabel = t.lienAriaLabel(action, certif.titre, certif.plateforme);

  return (
    <Card
      as="article"
      padded={false}
      className={cn("flex h-full flex-col", vedette ? "border-accent/60 p-6 sm:p-8" : "p-6")}
    >
      <div className="mb-4 flex items-start justify-between gap-3">
        <span
          className={cn(
            "flex shrink-0 items-center justify-center rounded-button",
            vedette ? "size-14 bg-primary text-accent" : "size-11 bg-accent/15 text-accent-strong"
          )}
        >
          <Icone className={vedette ? "size-7" : "size-5"} aria-hidden="true" />
        </span>
        <div className="flex flex-wrap justify-end gap-2">
          {vedette && <Badge variant="accent">{t.badgeProfessionnel}</Badge>}
          <Badge>{certif.plateforme}</Badge>
        </div>
      </div>

      <Titre className={cn("font-semibold leading-snug text-foreground", vedette ? "text-xl sm:text-2xl" : "text-base")}>
        {/* Le titre mène au même lien que le bouton */}
        <a
          href={certif.lienVerification}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-sm underline decoration-transparent decoration-2 underline-offset-4 transition-colors hover:text-accent-strong hover:decoration-accent"
        >
          {certif.titre}
          <span className="sr-only"> {t.nouvelOnglet}</span>
        </a>
      </Titre>

      <p className="mt-1 text-sm text-muted-foreground">{certif.organisme}</p>

      <p className="mt-3 inline-flex items-center gap-1.5 text-sm text-muted-foreground">
        <CalendarCheck className="size-4 shrink-0 text-accent-strong" aria-hidden="true" />
        {t.obtenue(formatMoisAnnee(certif.date))}
      </p>

      {certif.competences.length > 0 && (
        <ul className="mt-4 flex flex-wrap gap-2">
          {certif.competences.map((competence) => (
            <li key={competence}>
              <Badge variant="outline">{competence}</Badge>
            </li>
          ))}
        </ul>
      )}

      {/* mt-auto : bouton aligné en bas de carte quelle que soit la longueur du contenu */}
      <div className="mt-auto pt-6">
        <Button
          href={certif.lienVerification}
          external
          variant={vedette ? "primary" : "outline"}
          size={vedette ? "md" : "sm"}
          aria-label={ariaLabel}
        >
          {action}
          <ExternalLink aria-hidden="true" />
        </Button>
      </div>
    </Card>
  );
}
