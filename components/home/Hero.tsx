import { ArrowRight, Download } from "lucide-react";
import { profil, ui } from "@/lib/data";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import PhotoProfil from "@/components/PhotoProfil";
import { GitHubIcon, LinkedInIcon } from "@/components/icons/BrandIcons";
import HeroBackground from "./HeroBackground";

export default function Hero() {
  const t = ui.accueil;

  return (
    <section
      aria-labelledby="hero-titre"
      className="relative isolate overflow-hidden border-b border-border"
    >
      <HeroBackground />

      <Container className="grid items-center gap-10 py-section md:grid-cols-[auto_1fr] md:gap-14">
        <PhotoProfil
          className="mx-auto size-40 sm:size-48 lg:size-60"
          sizes="(min-width: 1024px) 240px, (min-width: 640px) 192px, 160px"
          preload
        />

        <div className="text-center md:text-left">
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-sm font-medium text-card-foreground shadow-card">
            <span className="relative flex size-2.5" aria-hidden="true">
              <span className="absolute inline-flex size-full rounded-full bg-success opacity-75 motion-safe:animate-ping" />
              <span className="relative inline-flex size-2.5 rounded-full bg-success" />
            </span>
            {t.disponibilite}
          </p>

          <h1
            id="hero-titre"
            className="text-4xl font-bold text-foreground sm:text-5xl lg:text-6xl"
          >
            {profil.nom}
          </h1>

          <p className="mt-3 font-heading text-lg font-medium text-balance text-accent-strong sm:text-xl">
            {profil.titre}
          </p>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-pretty text-muted-foreground md:mx-0">
            {profil.accroche}
          </p>

          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:flex-wrap md:justify-start">
            <Button href="#projets" size="lg" className="w-full sm:w-auto">
              {t.voirProjets}
              <ArrowRight aria-hidden="true" />
            </Button>

            <Button
              href={profil.cv}
              download={ui.cvNomFichier}
              variant="outline"
              size="lg"
              className="w-full bg-card sm:w-auto"
            >
              <Download aria-hidden="true" />
              {t.telechargerCv}
            </Button>

            <div className="flex gap-2">
              <Button href={profil.linkedin} external variant="ghost" size="icon" aria-label={ui.linkedin}>
                <LinkedInIcon />
              </Button>
              <Button href={profil.github} external variant="ghost" size="icon" aria-label={ui.github}>
                <GitHubIcon />
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
