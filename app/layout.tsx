import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { profil, seo, site, ui } from "@/lib/data";
import ThemeProvider from "@/components/ThemeProvider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MotionProvider from "@/components/motion/MotionProvider";
import { SCRIPT_DEMARRAGE, STYLE_DEMARRAGE } from "@/components/motion/demarrage";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-space-grotesk",
});

export const metadata: Metadata = {
  // Rend absolues les URL relatives (og:url, og:image, canonical…)
  metadataBase: new URL(site.url),
  title: {
    default: seo.titreSite,
    template: seo.modeleTitre,
  },
  description: seo.description,
  keywords: seo.motsCles,
  authors: [{ name: profil.nom, url: profil.linkedin }],
  creator: profil.nom,
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: profil.nom,
    url: "/",
    title: seo.titreSite,
    description: seo.description,
  },
  twitter: {
    card: "summary_large_image",
    title: seo.titreSite,
    description: seo.description,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="fr"
      className={`${inter.variable} ${spaceGrotesk.variable}`}
      suppressHydrationWarning
    >
      <head>
        {/* Contenu animé visible par défaut ; animations activées seulement si le JS démarre (voir demarrage.ts) */}
        <style dangerouslySetInnerHTML={{ __html: STYLE_DEMARRAGE }} />
        <script dangerouslySetInnerHTML={{ __html: SCRIPT_DEMARRAGE }} />
      </head>
      <body className="flex min-h-dvh flex-col">
        <a
          href="#contenu"
          className="sr-only rounded-button bg-accent px-4 py-2 font-semibold text-accent-foreground focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60]"
        >
          {ui.allerAuContenu}
        </a>

        <ThemeProvider>
          <MotionProvider>
            <Navbar />
            {/* pt-header compense la navbar fixe ; les pages n'ajoutent pas leur propre <main> */}
            <main id="contenu" className="flex-1 pt-header">
              {children}
            </main>
            <Footer />
          </MotionProvider>
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
