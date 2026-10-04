"use client";

import { useState } from "react";
import { CircleCheck, CircleX, LoaderCircle, Send } from "lucide-react";
import { emojisDecoratifs } from "@/lib/emojis";
import { cn } from "@/lib/utils";
import Button from "@/components/ui/Button";

type Champ = "name" | "email" | "message";
type Statut = "repos" | "envoi" | "succes" | "erreur";

export type LibellesFormulaire = {
  titre: string;
  champsObligatoires: string;
  nom: string;
  email: string;
  entreprise: string;
  message: string;
  envoyer: string;
  envoi: string;
  succes: string;
  erreur: string;
  erreurs: { nom: string; emailRequis: string; emailInvalide: string; message: string };
};

type ContactFormProps = {
  /** Endpoint Formspree */
  action: string;
  sujet: string;
  libelles: LibellesFormulaire;
};

const EMAIL_VALIDE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MESSAGE_MIN = 10;

export default function ContactForm({ action, sujet, libelles: t }: ContactFormProps) {
  const [statut, setStatut] = useState<Statut>("repos");
  const [erreurs, setErreurs] = useState<Partial<Record<Champ, string>>>({});

  function valider(donnees: FormData) {
    const e: Partial<Record<Champ, string>> = {};
    const nom = String(donnees.get("name") ?? "").trim();
    const email = String(donnees.get("email") ?? "").trim();
    const message = String(donnees.get("message") ?? "").trim();
    if (!nom) e.name = t.erreurs.nom;
    if (!email) e.email = t.erreurs.emailRequis;
    else if (!EMAIL_VALIDE.test(email)) e.email = t.erreurs.emailInvalide;
    if (message.length < MESSAGE_MIN) e.message = t.erreurs.message;
    return e;
  }

  async function envoyer(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (statut === "envoi") return;

    const formulaire = event.currentTarget;
    const donnees = new FormData(formulaire);
    const nouvellesErreurs = valider(donnees);
    setErreurs(nouvellesErreurs);

    const premierChampInvalide = (["name", "email", "message"] as Champ[]).find((c) => nouvellesErreurs[c]);
    if (premierChampInvalide) {
      (formulaire.elements.namedItem(premierChampInvalide) as HTMLElement | null)?.focus();
      return;
    }

    setStatut("envoi");
    try {
      // Accept JSON : Formspree répond en JSON au lieu de rediriger vers sa page de remerciement
      const reponse = await fetch(action, {
        method: "POST",
        body: donnees,
        headers: { Accept: "application/json" },
      });
      if (!reponse.ok) throw new Error(String(reponse.status));
      setStatut("succes");
      formulaire.reset();
    } catch {
      setStatut("erreur");
    }
  }

  /** Efface l'erreur d'un champ dès que l'utilisateur le corrige */
  function onSaisie(champ: Champ) {
    if (erreurs[champ]) setErreurs((e) => ({ ...e, [champ]: undefined }));
    if (statut === "succes" || statut === "erreur") setStatut("repos");
  }

  const classeChamp = (champ?: Champ) =>
    cn(
      "w-full rounded-button border bg-background px-4 py-3 text-foreground transition-colors placeholder:text-muted-foreground",
      champ && erreurs[champ] ? "border-danger" : "border-input hover:border-foreground"
    );

  return (
    <form onSubmit={envoyer} noValidate aria-labelledby="formulaire-titre" className="space-y-5">
      <div>
        <h2 id="formulaire-titre" className="text-2xl font-bold text-foreground">
          {t.titre}
        </h2>
        <p className="mt-1 text-sm text-muted-foreground">{t.champsObligatoires}</p>
      </div>

      <input type="hidden" name="_subject" value={sujet} />
      {/* Pot de miel antispam : invisible pour les humains, rempli par les robots */}
      <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />

      <div className="grid gap-5 sm:grid-cols-2">
        <ChampFormulaire id="contact-nom" label={t.nom} requis erreur={erreurs.name}>
          <input
            id="contact-nom"
            name="name"
            type="text"
            autoComplete="name"
            required
            aria-invalid={!!erreurs.name}
            aria-describedby={erreurs.name ? "contact-nom-erreur" : undefined}
            onInput={() => onSaisie("name")}
            className={classeChamp("name")}
          />
        </ChampFormulaire>

        <ChampFormulaire id="contact-email" label={t.email} requis erreur={erreurs.email}>
          <input
            id="contact-email"
            name="email"
            type="email"
            inputMode="email"
            autoComplete="email"
            required
            aria-invalid={!!erreurs.email}
            aria-describedby={erreurs.email ? "contact-email-erreur" : undefined}
            onInput={() => onSaisie("email")}
            className={classeChamp("email")}
          />
        </ChampFormulaire>
      </div>

      <ChampFormulaire id="contact-entreprise" label={t.entreprise}>
        <input
          id="contact-entreprise"
          name="entreprise"
          type="text"
          autoComplete="organization"
          className={classeChamp()}
        />
      </ChampFormulaire>

      <ChampFormulaire id="contact-message" label={t.message} requis erreur={erreurs.message}>
        <textarea
          id="contact-message"
          name="message"
          rows={6}
          required
          minLength={MESSAGE_MIN}
          aria-invalid={!!erreurs.message}
          aria-describedby={erreurs.message ? "contact-message-erreur" : undefined}
          onInput={() => onSaisie("message")}
          className={cn(classeChamp("message"), "resize-y")}
        />
      </ChampFormulaire>

      <Button type="submit" size="lg" disabled={statut === "envoi"} className="w-full sm:w-auto">
        {statut === "envoi" ? (
          <LoaderCircle className="motion-safe:animate-spin" aria-hidden="true" />
        ) : (
          <Send aria-hidden="true" />
        )}
        {statut === "envoi" ? t.envoi : t.envoyer}
      </Button>

      {/* Toujours présent dans le DOM pour que les annonces aria-live soient lues */}
      <div role="status" aria-live="polite" className="min-h-6">
        {statut === "envoi" && <p className="text-sm text-muted-foreground">{t.envoi}</p>}
        {statut === "succes" && (
          <p className="flex items-start gap-2 rounded-button border border-success/40 bg-success/10 p-4 font-medium text-foreground">
            <CircleCheck className="mt-0.5 size-5 shrink-0 text-success" aria-hidden="true" />
            {emojisDecoratifs(t.succes)}
          </p>
        )}
        {statut === "erreur" && (
          <p className="flex items-start gap-2 rounded-button border border-danger/40 bg-danger/10 p-4 font-medium text-foreground">
            <CircleX className="mt-0.5 size-5 shrink-0 text-danger" aria-hidden="true" />
            {t.erreur}
          </p>
        )}
      </div>
    </form>
  );
}

function ChampFormulaire({
  id,
  label,
  requis = false,
  erreur,
  children,
}: {
  id: string;
  label: string;
  requis?: boolean;
  erreur?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm font-semibold text-foreground">
        {label}
        {requis && (
          <span aria-hidden="true" className="ml-0.5 text-danger">
            *
          </span>
        )}
      </label>
      {children}
      {erreur && (
        <p id={`${id}-erreur`} className="mt-1.5 text-sm font-medium text-danger">
          {erreur}
        </p>
      )}
    </div>
  );
}
