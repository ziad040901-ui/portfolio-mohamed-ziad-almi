import type { Metadata } from "next";
import JsonLdPersonne from "@/components/JsonLdPersonne";
import Hero from "@/components/home/Hero";
import ChiffresCles from "@/components/home/ChiffresCles";
import ExperiencesTimeline from "@/components/home/ExperiencesTimeline";
import ProjetsPhares from "@/components/home/ProjetsPhares";
import CompetencesGrid from "@/components/home/CompetencesGrid";
import CertificationsApercu from "@/components/home/CertificationsApercu";
import CtaFinal from "@/components/home/CtaFinal";

// Titre, description et Open Graph : valeurs par défaut du layout
export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <>
      <JsonLdPersonne />
      <Hero />
      <ChiffresCles />
      <ExperiencesTimeline />
      <ProjetsPhares />
      <CompetencesGrid />
      <CertificationsApercu />
      <CtaFinal />
    </>
  );
}
