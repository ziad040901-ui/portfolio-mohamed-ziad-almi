import { Download, Mail } from "lucide-react";
import { profil, ui } from "@/lib/data";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import Apparition from "@/components/motion/Apparition";

export default function CtaFinal() {
  const t = ui.accueil.cta;

  return (
    <section aria-labelledby="cta-titre" className="py-section">
      <Container>
        <Apparition>
          {/* Anneau de focus orange : le bleu marine par défaut serait invisible sur ce fond */}
          <div className="rounded-card bg-primary px-6 [--ring:var(--accent)] py-12 text-center text-primary-foreground shadow-card sm:px-12 sm:py-16">
            <h2 id="cta-titre" className="mx-auto max-w-3xl text-2xl font-bold sm:text-4xl">
              {t.titre}
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-lg text-primary-foreground/80">
              {profil.recherche}
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button href="/contact" variant="accent" size="lg" className="w-full sm:w-auto">
                <Mail aria-hidden="true" />
                {t.contact}
              </Button>
              <Button
                href={profil.cv}
                download={ui.cvNomFichier}
                variant="inverse"
                size="lg"
                className="w-full sm:w-auto"
              >
                <Download aria-hidden="true" />
                {t.cv}
              </Button>
            </div>
          </div>
        </Apparition>
      </Container>
    </section>
  );
}
