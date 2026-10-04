import type { Metadata } from "next";
import { Mail, MapPin, Phone, type LucideIcon } from "lucide-react";
import { formulaireContact, profil, seo, ui } from "@/lib/data";
import { metadataPage } from "@/lib/seo";
import Card from "@/components/ui/Card";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import ContactForm from "@/components/contact/ContactForm";
import CopierEmail from "@/components/contact/CopierEmail";
import { GitHubIcon, LinkedInIcon } from "@/components/icons/BrandIcons";

export const metadata: Metadata = metadataPage({
  titre: seo.pages.contact.titre,
  description: seo.pages.contact.description,
  chemin: "/contact",
});

/** « https://www.linkedin.com/in/x/ » → « linkedin.com/in/x » */
const urlLisible = (url: string) => url.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "");

type Coordonnee = {
  cle: string;
  label: string;
  valeur: string;
  href: string;
  Icone: LucideIcon | typeof LinkedInIcon;
  externe?: boolean;
};

export default function ContactPage() {
  const t = ui.contact;

  const coordonnees: Coordonnee[] = [
    { cle: "email", label: t.email, valeur: profil.email, href: `mailto:${profil.email}`, Icone: Mail },
    {
      cle: "telephone",
      label: t.telephone,
      valeur: profil.telephone,
      href: `tel:${profil.telephone.replace(/\s/g, "")}`,
      Icone: Phone,
    },
    { cle: "linkedin", label: t.linkedin, valeur: urlLisible(profil.linkedin), href: profil.linkedin, Icone: LinkedInIcon, externe: true },
    { cle: "github", label: t.github, valeur: urlLisible(profil.github), href: profil.github, Icone: GitHubIcon, externe: true },
    {
      cle: "localisation",
      label: t.localisation,
      valeur: profil.localisation,
      href: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(profil.localisation)}`,
      Icone: MapPin,
      externe: true,
    },
  ];

  return (
    <Container className="py-section">
      <SectionHeading as="h1" eyebrow={t.eyebrow} title={t.titre} subtitle={t.sousTitre} />

      <div className="grid grid-cols-1 gap-10 lg:grid-cols-[2fr_3fr] lg:gap-12">
        <section aria-labelledby="coordonnees-titre">
          <h2 id="coordonnees-titre" className="sr-only">
            {t.coordonnees}
          </h2>

          <ul className="space-y-4">
            {coordonnees.map(({ cle, label, valeur, href, Icone, externe }) => (
              <li key={cle}>
                {/* Carte cliquable : le lien s'étend à toute la carte via ::after */}
                <Card interactive padded={false} className="relative flex items-center gap-4 p-4 sm:p-5">
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-button bg-primary text-primary-foreground">
                    <Icone className="size-5" aria-hidden="true" />
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="text-sm text-muted-foreground">{label}</p>
                    <a
                      href={href}
                      {...(externe && { target: "_blank", rel: "noopener noreferrer" })}
                      className="block font-semibold wrap-anywhere text-foreground after:absolute after:inset-0 after:rounded-card focus-visible:outline-none focus-visible:after:outline-2 focus-visible:after:outline-offset-2 focus-visible:after:outline-ring"
                    >
                      {valeur}
                      {externe && <span className="sr-only"> {t.nouvelOnglet}</span>}
                    </a>
                    {cle === "email" && (
                      // z-10 : le bouton reste cliquable au-dessus du lien étendu
                      <div className="relative z-10 mt-3">
                        <CopierEmail email={profil.email} libelles={t.copier} />
                      </div>
                    )}
                  </div>
                </Card>
              </li>
            ))}
          </ul>
        </section>

        <Card className="sm:p-8">
          <ContactForm action={formulaireContact.action} sujet={formulaireContact.sujet} libelles={t.formulaire} />
        </Card>
      </div>
    </Container>
  );
}
