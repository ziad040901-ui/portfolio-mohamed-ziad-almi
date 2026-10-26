import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ui, type Projet } from "@/lib/data";
import { imagesProjet } from "@/lib/images-projet";
import Badge from "@/components/ui/Badge";
import Card from "@/components/ui/Card";
import VisuelProjet from "./VisuelProjet";

const BADGES_MAX = 5;

type ProjetCardProps = {
  projet: Projet;
  /** h2 sur la page Projets (sous le h1), h3 dans une section de l'accueil */
  titreNiveau?: "h2" | "h3";
};

export default function ProjetCard({ projet, titreNiveau: Titre = "h3" }: ProjetCardProps) {
  // Première capture du projet (déclarée ou détectée dans son dossier), sinon visuel de remplacement
  const [image] = imagesProjet(projet);
  // Sans stack renseignée (ex. TMS en cours de rédaction), on montre les compétences
  const badges = (projet.stack.length > 0 ? projet.stack : projet.competences).slice(0, BADGES_MAX);

  return (
    <Card as="article" interactive padded={false} className="relative flex h-full flex-col overflow-hidden">
      <div className="relative aspect-video border-b border-border">
        {image ? (
          <Image
            src={image.src}
            alt={image.alt}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
            className="object-cover object-left-top"
          />
        ) : (
          <VisuelProjet projet={projet} />
        )}
      </div>

      <div className="flex flex-1 flex-col p-6">
        <div className="mb-3 flex flex-wrap items-center gap-2">
          <Badge variant="accent">{projet.categorie}</Badge>
          {projet.contexte && <span className="text-xs text-muted-foreground">{projet.contexte}</span>}
        </div>

        <Titre className="text-xl font-semibold text-foreground">
          {/* Le lien couvre toute la carte via ::after */}
          <Link
            href={`/projects/${projet.slug}`}
            className="after:absolute after:inset-0 after:rounded-card focus-visible:outline-none focus-visible:after:outline-2 focus-visible:after:outline-offset-2 focus-visible:after:outline-ring"
          >
            {projet.titre}
          </Link>
        </Titre>

        <p className="mt-3 flex-1 leading-relaxed text-muted-foreground">{projet.resume}</p>

        {projet.chiffresCarte && projet.chiffresCarte.length > 0 && (
          <dl aria-label={ui.projets.chiffresCarte} className="mt-5 grid grid-cols-2 gap-3">
            {projet.chiffresCarte.map((c) => (
              <div key={c.label} className="flex flex-col-reverse rounded-button border border-border bg-muted px-3 py-2.5">
                <dt className="text-xs leading-snug text-muted-foreground">{c.label}</dt>
                <dd className="font-heading text-xl font-bold text-accent-strong">{c.valeur}</dd>
              </div>
            ))}
          </dl>
        )}

        {badges.length > 0 && (
          <ul className="mt-5 flex flex-wrap gap-2">
            {badges.map((tech) => (
              <li key={tech}>
                <Badge>{tech}</Badge>
              </li>
            ))}
          </ul>
        )}

        <span aria-hidden="true" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-accent-strong">
          {ui.voirProjet}
          <ArrowRight className="size-4" />
        </span>
      </div>
    </Card>
  );
}
