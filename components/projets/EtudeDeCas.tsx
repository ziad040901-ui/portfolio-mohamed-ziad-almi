import {
  ArrowRight,
  Building2,
  ChevronDown,
  FileText,
  Gauge,
  ShieldCheck,
  Truck,
  UsersRound,
  type LucideIcon,
} from "lucide-react";
import {
  ui,
  type ChiffreAvantApres,
  type GroupeListe,
  type ModuleProjet,
  type PhasePDCA,
  type PortailProjet,
  type ProcessusProjet,
} from "@/lib/data";
import Badge from "@/components/ui/Badge";
import Card from "@/components/ui/Card";
import { Cascade, CascadeItem } from "@/components/motion/Cascade";

/*
 * Sections de l'étude de cas détaillée (page /projects/[slug]).
 * Composants serveur ; chacune n'est rendue par la page que si sa donnée est renseignée.
 */

/** « Les chiffres clés » : avant → après, gain mis en valeur */
export function ChiffresAvantApres({ chiffres }: { chiffres: ChiffreAvantApres[] }) {
  const t = ui.projets;
  return (
    <Cascade className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {chiffres.map((c) => (
        <CascadeItem key={c.label}>
          <Card className="flex h-full flex-col gap-4">
            <div className="flex items-start justify-between gap-3">
              <h3 className="font-semibold leading-snug text-foreground">{c.label}</h3>
              <span className="shrink-0 rounded-button border border-success/50 px-2.5 py-1 font-heading text-lg font-bold whitespace-nowrap text-success">
                <span className="sr-only">{t.gain} : </span>
                {c.gain}
              </span>
            </div>
            <dl className="mt-auto flex flex-wrap items-center gap-x-3 gap-y-1 text-sm">
              <div>
                <dt className="sr-only">{t.avant}</dt>
                <dd className="text-muted-foreground line-through decoration-danger/60">{c.avant}</dd>
              </div>
              <ArrowRight className="size-4 shrink-0 text-accent-strong" aria-hidden="true" />
              <div>
                <dt className="sr-only">{t.apres}</dt>
                <dd className="font-semibold text-foreground">{c.apres}</dd>
              </div>
            </dl>
          </Card>
        </CascadeItem>
      ))}
    </Cascade>
  );
}

const iconesPortail: LucideIcon[] = [Building2, Truck, UsersRound];

/** « 3 portails, 5 rôles » */
export function PortailsCartes({ portails }: { portails: PortailProjet[] }) {
  const t = ui.projets;
  return (
    <Cascade className="grid gap-6 md:grid-cols-3">
      {portails.map((portail, i) => {
        const Icone = iconesPortail[i] ?? UsersRound;
        return (
          <CascadeItem key={portail.titre}>
            <Card className="h-full">
              <span className="mb-4 flex size-11 items-center justify-center rounded-button bg-primary text-accent">
                <Icone className="size-5" aria-hidden="true" />
              </span>
              <h3 className="text-lg font-semibold text-foreground">{portail.titre}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{portail.public}</p>
              <ul className="mt-4 list-disc space-y-1.5 pl-5 text-muted-foreground marker:text-accent">
                {portail.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              {portail.roles && portail.roles.length > 0 && (
                <div className="mt-5 border-t border-border pt-4">
                  <h4 className="mb-2 text-sm font-semibold text-foreground">{t.rolesTitre}</h4>
                  <ul className="flex flex-wrap gap-2">
                    {portail.roles.map((role) => (
                      <li key={role}>
                        <Badge variant="outline">{role}</Badge>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </Card>
          </CascadeItem>
        );
      })}
    </Cascade>
  );
}

/** Fonctionnalités par module : accordéons natifs <details>, le premier ouvert */
export function ModulesAccordeon({ modules }: { modules: ModuleProjet[] }) {
  const t = ui.projets;
  return (
    <Cascade className="grid items-start gap-4 md:grid-cols-2">
      {modules.map((module, i) => (
        <CascadeItem key={module.titre}>
          <details
            open={i === 0}
            className="group rounded-card border border-border bg-card text-card-foreground shadow-card transition-colors open:border-accent"
          >
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 rounded-card p-5 [&::-webkit-details-marker]:hidden">
              <div>
                <h3 className="font-semibold text-foreground">{module.titre}</h3>
                <span className="text-sm text-muted-foreground">{t.nombreFonctionnalites(module.items.length)}</span>
              </div>
              <ChevronDown
                className="size-5 shrink-0 text-muted-foreground transition-transform group-open:rotate-180"
                aria-hidden="true"
              />
            </summary>
            <ul className="list-disc space-y-1.5 border-t border-border pt-4 pr-5 pb-5 pl-10 text-muted-foreground marker:text-accent">
              {module.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </details>
        </CascadeItem>
      ))}
    </Cascade>
  );
}

/**
 * Processus en frise : verticale sur mobile et tablette, horizontale à partir de lg
 * (une colonne par étape, reliées par un trait qui passe derrière les numéros).
 */
export function ProcessusFrise({ processus }: { processus: ProcessusProjet }) {
  const t = ui.projets;
  const total = processus.etapes.length;
  return (
    <div>
      <h3 className="text-lg font-semibold text-foreground">{processus.titre}</h3>
      {processus.description && <p className="mt-1 text-muted-foreground">{processus.description}</p>}
      <ol
        className="mt-6 grid lg:grid-cols-[repeat(var(--etapes),minmax(0,1fr))] lg:gap-2"
        style={{ "--etapes": total } as React.CSSProperties}
      >
        {processus.etapes.map((etape, i) => (
          <li
            key={etape}
            className="relative flex items-center gap-4 pb-6 last:pb-0 before:absolute before:top-10 before:bottom-0 before:left-[1.1875rem] before:w-0.5 before:bg-border last:before:hidden lg:flex-col lg:items-center lg:gap-3 lg:pb-0 lg:text-center lg:before:top-5 lg:before:right-0 lg:before:bottom-auto lg:before:left-1/2 lg:before:h-0.5 lg:before:w-[calc(100%+0.5rem)]"
          >
            <span
              aria-hidden="true"
              className="relative z-10 flex size-10 shrink-0 items-center justify-center rounded-full bg-primary font-heading font-bold text-primary-foreground ring-4 ring-background"
            >
              {i + 1}
            </span>
            <span className="text-sm font-medium text-foreground lg:text-pretty">
              <span className="sr-only">{t.etapeSur(i + 1, total)} : </span>
              {etape}
            </span>
          </li>
        ))}
      </ol>
    </div>
  );
}

type DocumentsKpisSecuriteProps = {
  documents?: string[];
  kpis?: GroupeListe[];
  securite?: string[];
};

/** Documents générés, KPIs pilotés et sécurité : 3 cartes côte à côte */
export function DocumentsKpisSecurite({ documents = [], kpis = [], securite = [] }: DocumentsKpisSecuriteProps) {
  const t = ui.projets;
  return (
    <Cascade className="grid items-start gap-6 lg:grid-cols-3">
      {documents.length > 0 && (
        <CascadeItem>
          <Card className="h-full">
            <TitreCarte Icone={FileText}>{t.documents(documents.length)}</TitreCarte>
            <ol className="mt-4 list-decimal space-y-1.5 pl-6 text-muted-foreground marker:font-semibold marker:text-accent-strong">
              {documents.map((doc) => (
                <li key={doc}>{doc}</li>
              ))}
            </ol>
          </Card>
        </CascadeItem>
      )}
      {kpis.length > 0 && (
        <CascadeItem>
          <Card className="h-full">
            <TitreCarte Icone={Gauge}>{t.kpis}</TitreCarte>
            {kpis.map((groupe) => (
              <div key={groupe.titre} className="mt-4">
                <h4 className="text-sm font-semibold text-foreground">{groupe.titre}</h4>
                <ul className="mt-2 list-disc space-y-1.5 pl-5 text-muted-foreground marker:text-accent">
                  {groupe.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </Card>
        </CascadeItem>
      )}
      {securite.length > 0 && (
        <CascadeItem>
          <Card className="h-full">
            <TitreCarte Icone={ShieldCheck}>{t.securite}</TitreCarte>
            <ul className="mt-4 space-y-2 text-muted-foreground">
              {securite.map((item) => (
                <li key={item} className="flex gap-2.5">
                  <ShieldCheck className="mt-0.5 size-4 shrink-0 text-success" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </Card>
        </CascadeItem>
      )}
    </Cascade>
  );
}

function TitreCarte({ Icone, children }: { Icone: LucideIcon; children: React.ReactNode }) {
  return (
    <h3 className="flex items-center gap-3 text-lg font-semibold text-foreground">
      <span className="flex size-10 shrink-0 items-center justify-center rounded-button bg-accent/15 text-accent-strong">
        <Icone className="size-5" aria-hidden="true" />
      </span>
      {children}
    </h3>
  );
}

/** Méthodologie PDCA en 4 blocs */
export function PdcaBlocs({ phases }: { phases: PhasePDCA[] }) {
  return (
    <Cascade as="ol" className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {phases.map((p) => (
        <CascadeItem key={p.phase}>
          <Card className="h-full">
            <div className="flex items-center gap-3">
              <span
                aria-hidden="true"
                className="flex size-12 shrink-0 items-center justify-center rounded-button bg-primary font-heading text-2xl font-bold text-accent"
              >
                {p.phase.charAt(0)}
              </span>
              <h3 className="leading-tight">
                <span className="block font-heading text-lg font-bold text-foreground">{p.phase}</span>
                <span className="block text-sm text-muted-foreground">{p.titre}</span>
              </h3>
            </div>
            <ul className="mt-4 list-disc space-y-1.5 pl-5 text-muted-foreground marker:text-accent">
              {p.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </Card>
        </CascadeItem>
      ))}
    </Cascade>
  );
}
