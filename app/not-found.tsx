import { House, PackageX } from "lucide-react";
import { ui } from "@/lib/data";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";

export default function NotFound() {
  const t = ui.pageIntrouvable;

  return (
    <Container className="flex min-h-[70vh] flex-col items-center justify-center py-section text-center">
      <span className="flex size-20 items-center justify-center rounded-card bg-primary text-accent shadow-card">
        <PackageX className="size-10" strokeWidth={1.5} aria-hidden="true" />
      </span>

      <p className="mt-8 text-sm font-semibold uppercase tracking-[0.2em] text-accent-strong">
        {t.code}
      </p>

      <h1 className="mt-3 max-w-2xl text-3xl font-bold text-foreground sm:text-5xl">{t.titre}</h1>

      <p className="mt-5 max-w-xl text-lg leading-relaxed text-pretty text-muted-foreground">
        {t.texte}
      </p>

      <p className="mt-6 rounded-button border border-dashed border-border bg-card px-4 py-2 font-mono text-xs text-muted-foreground sm:text-sm">
        {t.suivi}
      </p>

      <Button href="/" size="lg" className="mt-10">
        <House aria-hidden="true" />
        {t.retour}
      </Button>
    </Container>
  );
}
