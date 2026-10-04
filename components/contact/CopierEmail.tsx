"use client";

import { useEffect, useState } from "react";
import { Check, Copy } from "lucide-react";
import { emojisDecoratifs } from "@/lib/emojis";
import Button from "@/components/ui/Button";

type CopierEmailProps = {
  email: string;
  libelles: { copier: string; copie: string; erreur: string };
  className?: string;
};

const DELAI_RETOUR_MS = 2500;

export default function CopierEmail({ email, libelles, className }: CopierEmailProps) {
  const [etat, setEtat] = useState<"repos" | "copie" | "erreur">("repos");

  // Retour au libellé initial après quelques secondes
  useEffect(() => {
    if (etat === "repos") return;
    const minuterie = setTimeout(() => setEtat("repos"), DELAI_RETOUR_MS);
    return () => clearTimeout(minuterie);
  }, [etat]);

  async function copier() {
    try {
      await navigator.clipboard.writeText(email);
      setEtat("copie");
    } catch {
      setEtat("erreur");
    }
  }

  return (
    <>
      <Button variant="outline" size="sm" onClick={copier} className={className}>
        {etat === "copie" ? <Check aria-hidden="true" /> : <Copy aria-hidden="true" />}
        {etat === "copie" ? emojisDecoratifs(libelles.copie) : libelles.copier}
      </Button>
      <span role="status" aria-live="polite" className="sr-only">
        {etat === "copie" ? libelles.copie : etat === "erreur" ? libelles.erreur : ""}
      </span>
      {etat === "erreur" && <p className="mt-2 text-sm text-danger">{libelles.erreur}</p>}
    </>
  );
}
