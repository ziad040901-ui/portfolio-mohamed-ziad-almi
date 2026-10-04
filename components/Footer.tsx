import Link from "next/link";
import { Mail } from "lucide-react";
import { navigation, profil, ui } from "@/lib/data";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import { GitHubIcon, LinkedInIcon } from "@/components/icons/BrandIcons";

export default function Footer() {
  // Calculée au build (pages statiques) : se met à jour à chaque déploiement
  const annee = new Date().getFullYear();
  const t = ui.footer;

  return (
    <footer className="border-t border-border bg-muted">
      <Container className="py-12">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <p className="font-heading text-lg font-semibold text-foreground">{profil.nom}</p>
            <p className="mt-1 text-sm text-muted-foreground">{profil.titre}</p>

            <ul aria-label={t.reseaux} className="mt-5 flex gap-2">
              <li>
                <Button href={profil.linkedin} external variant="outline" size="icon" aria-label={ui.linkedin}>
                  <LinkedInIcon />
                </Button>
              </li>
              <li>
                <Button href={profil.github} external variant="outline" size="icon" aria-label={ui.github}>
                  <GitHubIcon />
                </Button>
              </li>
              <li>
                <Button href={`mailto:${profil.email}`} variant="outline" size="icon" aria-label={ui.email}>
                  <Mail aria-hidden="true" />
                </Button>
              </li>
            </ul>
          </div>

          <nav aria-label={t.navigation}>
            <ul className="grid grid-cols-2 gap-x-8 gap-y-3 sm:flex sm:flex-wrap sm:gap-x-6">
              {navigation.map((lien) => (
                <li key={lien.href}>
                  <Link
                    href={lien.href}
                    className="text-sm font-medium text-muted-foreground underline-offset-4 hover:text-foreground hover:underline"
                  >
                    {lien.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <p className="mt-10 border-t border-border pt-6 text-sm text-muted-foreground">
          © {annee} {profil.nom}. {t.droits}
        </p>
      </Container>
    </footer>
  );
}
