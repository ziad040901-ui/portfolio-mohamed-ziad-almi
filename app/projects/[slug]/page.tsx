import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  Check,
  ChevronLeft,
  ChevronRight,
  CircleAlert,
  ExternalLink,
  Lightbulb,
  Trophy,
  type LucideIcon,
} from "lucide-react";
import { projets, ui, type Projet } from "@/lib/data";
import { emojisDecoratifs } from "@/lib/emojis";
import { fichierPublicExiste } from "@/lib/fichiers";
import { metadataPage } from "@/lib/seo";
import { cn } from "@/lib/utils";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Container from "@/components/ui/Container";
import { GitHubIcon } from "@/components/icons/BrandIcons";
import VisuelProjet from "@/components/projets/VisuelProjet";
import Apparition from "@/components/motion/Apparition";
import { Cascade, CascadeItem } from "@/components/motion/Cascade";

// Seuls les slugs de lib/data.ts existent : toute autre URL renvoie la page 404
export const dynamicParams = false;

export function generateStaticParams() {
  return projets.map((projet) => ({ slug: projet.slug }));
}

export async function generateMetadata(props: PageProps<"/projects/[slug]">): Promise<Metadata> {
  const { slug } = await props.params;
  const projet = projets.find((p) => p.slug === slug);
  if (!projet) return {};
  return metadataPage({ titre: projet.titre, description: projet.resume, chemin: `/projects/${projet.slug}` });
}

const colonnes: Record<number, string> = { 1: "", 2: "md:grid-cols-2", 3: "md:grid-cols-3" };

export default async function ProjetPage(props: PageProps<"/projects/[slug]">) {
  const { slug } = await props.params;
  const index = projets.findIndex((p) => p.slug === slug);
  if (index === -1) notFound();

  const projet = projets[index];
  const precedent = projets[index - 1];
  const suivant = projets[index + 1];
  const t = ui.projets;

  const images = projet.images.filter((img) => fichierPublicExiste(img.src));

  // Champs vides (ex. TODO du TMS) : la carte n'est simplement pas rendue
  const enBref = (
    [
      { titre: t.probleme, texte: projet.probleme, Icone: CircleAlert },
      { titre: t.solution, texte: projet.solution, Icone: Lightbulb },
      { titre: t.resultat, texte: projet.resultat, Icone: Trophy },
    ] satisfies { titre: string; texte: string; Icone: LucideIcon }[]
  ).filter((bloc) => bloc.texte);

  return (
    <article>
      {/* ---------- En-tête ---------- */}
      <header className="border-b border-border bg-muted">
        <Container className="py-12 sm:py-16">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground underline-offset-4 hover:text-foreground hover:underline"
          >
            <ArrowLeft className="size-4" aria-hidden="true" />
            {t.retour}
          </Link>

          <div className="mt-8 flex flex-wrap items-center gap-2">
            <Badge variant="accent">{projet.categorie}</Badge>
            {projet.contexte && <span className="text-sm text-muted-foreground">{projet.contexte}</span>}
          </div>

          <h1 className="mt-4 max-w-4xl text-3xl font-bold text-foreground sm:text-5xl">{projet.titre}</h1>

          <p className="mt-5 max-w-3xl text-lg leading-relaxed text-pretty text-muted-foreground">
            {projet.description}
          </p>

          {projet.stack.length > 0 && (
            <div className="mt-6">
              <h2 className="sr-only">{t.stack}</h2>
              <ul className="flex flex-wrap gap-2">
                {projet.stack.map((tech) => (
                  <li key={tech}>
                    <Badge variant="outline" className="bg-card text-sm">
                      {tech}
                    </Badge>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {projet.caracteristiques && projet.caracteristiques.length > 0 && (
            <dl className="mt-6 grid max-w-3xl grid-cols-2 gap-3 sm:grid-cols-4">
              {projet.caracteristiques.map((c) => (
                <div key={c.label} className="rounded-button border border-border bg-card px-4 py-3">
                  <dt className="text-xs text-muted-foreground">{c.label}</dt>
                  <dd className="mt-0.5 font-semibold text-foreground">{c.valeur}</dd>
                </div>
              ))}
            </dl>
          )}

          {(projet.lienGithub || projet.lienDemo) && (
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              {projet.lienGithub && (
                <Button
                  href={projet.lienGithub}
                  external
                  aria-label={t.lienExterneAriaLabel(t.github, projet.titre)}
                >
                  <GitHubIcon />
                  {t.github}
                </Button>
              )}
              {projet.lienDemo && (
                <Button
                  href={projet.lienDemo}
                  external
                  variant="outline"
                  aria-label={t.lienExterneAriaLabel(t.demo, projet.titre)}
                >
                  <ExternalLink aria-hidden="true" />
                  {t.demo}
                </Button>
              )}
            </div>
          )}
        </Container>
      </header>

      <Container className="space-y-16 py-12 sm:space-y-20 sm:py-16">
        {/* ---------- Galerie ---------- */}
        <section aria-labelledby="apercu-titre">
          <h2 id="apercu-titre" className="sr-only">
            {t.apercu}
          </h2>
          {images.length > 0 ? (
            <div className="grid gap-4 sm:grid-cols-2">
              {images.map((img, i) => (
                <figure
                  key={img.src}
                  className={cn("overflow-hidden rounded-card border border-border bg-card shadow-card", i === 0 && "sm:col-span-2")}
                >
                  <div className="relative aspect-video">
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      sizes={i === 0 ? "(min-width: 1152px) 1152px, 100vw" : "(min-width: 640px) 50vw, 100vw"}
                      preload={i === 0}
                      className="object-cover"
                    />
                  </div>
                  {img.legende && (
                    <figcaption className="px-4 py-3 text-sm text-muted-foreground">{img.legende}</figcaption>
                  )}
                </figure>
              ))}
            </div>
          ) : (
            <div className="aspect-[4/3] overflow-hidden rounded-card border border-border shadow-card sm:aspect-video lg:aspect-[21/9]">
              <VisuelProjet projet={projet} variante="grand" />
            </div>
          )}
        </section>

        {/* ---------- Problème → Solution → Résultat ---------- */}
        {enBref.length > 0 && (
          <BlocEtude id="en-bref" titre={t.enBref}>
            <Cascade as="ol" className={cn("grid gap-6", colonnes[enBref.length])}>
              {enBref.map(({ titre, texte, Icone }) => (
                <CascadeItem key={titre}>
                  <Card className="h-full">
                    <span className="mb-4 flex size-11 items-center justify-center rounded-button bg-accent/15 text-accent-strong">
                      <Icone className="size-5" aria-hidden="true" />
                    </span>
                    <h3 className="text-lg font-semibold text-foreground">{titre}</h3>
                    <p className="mt-2 leading-relaxed text-muted-foreground">{texte}</p>
                  </Card>
                </CascadeItem>
              ))}
            </Cascade>
          </BlocEtude>
        )}

        {/* ---------- Fonctionnalités (+ blocs de détail) ---------- */}
        {(projet.fonctionnalites.length > 0 || (projet.blocs?.length ?? 0) > 0) && (
          <BlocEtude id="fonctionnalites" titre={t.fonctionnalites}>
            {projet.fonctionnalites.length > 0 && (
              <ul className="grid gap-3 sm:grid-cols-2">
                {projet.fonctionnalites.map((f) => (
                  <li key={f} className="flex gap-3 rounded-button border border-border bg-card p-4 text-card-foreground">
                    <Check className="mt-0.5 size-5 shrink-0 text-success" aria-hidden="true" />
                    {emojisDecoratifs(f)}
                  </li>
                ))}
              </ul>
            )}

            {projet.blocs && projet.blocs.length > 0 && (
              <div className={cn("mt-6 grid gap-6", colonnes[Math.min(projet.blocs.length, 2)])}>
                {projet.blocs.map((bloc) => (
                  <Card key={bloc.titre}>
                    <h3 className="text-lg font-semibold text-foreground">{bloc.titre}</h3>
                    <ul className="mt-3 list-disc space-y-1.5 pl-5 text-muted-foreground marker:text-accent">
                      {bloc.items.map((item) => (
                        <li key={item}>{emojisDecoratifs(item)}</li>
                      ))}
                    </ul>
                  </Card>
                ))}
              </div>
            )}
          </BlocEtude>
        )}

        {/* ---------- Étapes (timeline numérotée) ---------- */}
        {projet.etapes.length > 0 && (
          <BlocEtude id="etapes" titre={t.etapes}>
            <ol className="max-w-3xl">
              {projet.etapes.map((etape, i) => (
                <li
                  key={etape.titre}
                  className="relative pb-8 pl-14 last:pb-0 before:absolute before:top-10 before:bottom-0 before:left-[1.1875rem] before:w-0.5 before:bg-border last:before:hidden"
                >
                  <span
                    aria-hidden="true"
                    className="absolute top-0 left-0 flex size-10 items-center justify-center rounded-full bg-primary font-heading font-bold text-primary-foreground ring-4 ring-accent/20"
                  >
                    {i + 1}
                  </span>
                  <h3 className="pt-1.5 text-lg font-semibold text-foreground">
                    <span className="sr-only">{t.etape(i + 1)} : </span>
                    {etape.titre}
                  </h3>
                  <p className="mt-1 leading-relaxed text-muted-foreground">{etape.description}</p>
                </li>
              ))}
            </ol>
          </BlocEtude>
        )}

        {/* ---------- Compétences développées ---------- */}
        {(projet.competences.length > 0 || projet.bilan) && (
          <BlocEtude id="competences" titre={t.competences}>
            {projet.bilan && (
              <p className="mb-6 max-w-3xl text-lg leading-relaxed text-pretty text-muted-foreground">{projet.bilan}</p>
            )}
            {projet.competences.length > 0 && (
              <ul className="flex flex-wrap gap-2">
                {projet.competences.map((c) => (
                  <li key={c}>
                    <Badge variant="outline" className="text-sm">
                      {c}
                    </Badge>
                  </li>
                ))}
              </ul>
            )}
          </BlocEtude>
        )}

        {/* ---------- Précédent / suivant ---------- */}
        <nav aria-label={t.navigation} className="border-t border-border pt-10">
          <ul className="grid gap-4 sm:grid-cols-2">
            <li>{precedent && <LienProjet projet={precedent} sens="precedent" />}</li>
            <li className="sm:text-right">{suivant && <LienProjet projet={suivant} sens="suivant" />}</li>
          </ul>
          <Link
            href="/projects"
            className="mt-8 inline-flex items-center gap-2 font-semibold text-foreground underline-offset-4 hover:text-accent-strong hover:underline"
          >
            <ArrowLeft className="size-4" aria-hidden="true" />
            {t.retour}
          </Link>
        </nav>
      </Container>
    </article>
  );
}

function BlocEtude({ id, titre, children }: { id: string; titre: string; children: React.ReactNode }) {
  return (
    <section aria-labelledby={`${id}-titre`}>
      <Apparition>
        <h2 id={`${id}-titre`} className="mb-6 text-2xl font-bold text-foreground sm:text-3xl">
          {titre}
        </h2>
        {children}
      </Apparition>
    </section>
  );
}

function LienProjet({ projet, sens }: { projet: Projet; sens: "precedent" | "suivant" }) {
  const t = ui.projets;
  const Icone = sens === "precedent" ? ChevronLeft : ChevronRight;

  return (
    <Link
      href={`/projects/${projet.slug}`}
      rel={sens === "precedent" ? "prev" : "next"}
      className={cn(
        "group flex items-center gap-3 rounded-card border border-border bg-card p-5 shadow-card transition hover:border-accent",
        sens === "suivant" && "flex-row-reverse"
      )}
    >
      <Icone
        className="size-5 shrink-0 text-muted-foreground transition-transform group-hover:text-accent-strong motion-safe:group-hover:scale-110"
        aria-hidden="true"
      />
      <span className="min-w-0">
        <span className="block text-sm text-muted-foreground">{sens === "precedent" ? t.precedent : t.suivant}</span>
        <span className="block font-semibold text-foreground">{projet.titre}</span>
      </span>
    </Link>
  );
}
