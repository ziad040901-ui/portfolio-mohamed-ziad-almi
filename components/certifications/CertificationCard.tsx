import { CalendarCheck, ChartColumn, CodeXml, ExternalLink, ShoppingCart, Workflow, type LucideIcon } from "lucide-react";
import { ui, type CategorieCertification, type Certification } from "@/lib/data";
import { formatMoisAnnee } from "@/lib/format";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";

const iconesCategorie: Record<CategorieCertification, LucideIcon> = {
  "Supply Chain & Gestion": Workflow,
  "Data & Analyse": ChartColumn,
  Développement: CodeXml,
  "E-commerce & Marketing": ShoppingCart,
};

type CertificationCardProps = {
  certification: Certification;
  /** h2 sur la page Certifications (sous le h1), h3 dans une section de l'accueil */
  titreNiveau?: "h2" | "h3";
};

export default function CertificationCard({
  certification: certif,
  titreNiveau: Titre = "h3",
}: CertificationCardProps) {
  const t = ui.certifications;
  const Icone = iconesCategorie[certif.categorie];

  return (
    <Card as="article" className="flex h-full flex-col">
      <div className="mb-4 flex items-start justify-between gap-3">
        <span className="flex size-11 shrink-0 items-center justify-center rounded-button bg-accent/15 text-accent-strong">
          <Icone className="size-5" aria-hidden="true" />
        </span>
        <Badge>{certif.plateforme}</Badge>
      </div>

      <Titre className="font-semibold leading-snug text-foreground">{certif.titre}</Titre>

      {certif.organisme && <p className="mt-1 text-sm text-muted-foreground">{certif.organisme}</p>}

      {certif.date && (
        <p className="mt-3 inline-flex items-center gap-1.5 text-sm text-muted-foreground">
          <CalendarCheck className="size-4 text-accent-strong" aria-hidden="true" />
          {t.obtenue(formatMoisAnnee(certif.date))}
        </p>
      )}

      {certif.competences.length > 0 && (
        <ul className="mt-4 flex flex-wrap gap-2">
          {certif.competences.map((competence) => (
            <li key={competence}>
              <Badge variant="outline">{competence}</Badge>
            </li>
          ))}
        </ul>
      )}

      {certif.lienVerification && (
        // mt-auto : bouton aligné en bas de carte quelle que soit la longueur du contenu
        <div className="mt-auto pt-6">
          <Button
            href={certif.lienVerification}
            external
            variant="outline"
            size="sm"
            aria-label={t.verifierAriaLabel(certif.titre)}
          >
            {t.verifier}
            <ExternalLink aria-hidden="true" />
          </Button>
        </div>
      )}
    </Card>
  );
}
