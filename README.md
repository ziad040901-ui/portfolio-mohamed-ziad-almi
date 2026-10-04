# Portfolio — Mohamed Ziad Almi

Portfolio de **Mohamed Ziad Almi**, étudiant en Master 2 E-Logistique à l'ESITH Casablanca, profil **Supply Chain × Digital**, à la recherche d'un **stage de fin d'études (PFE)** en supply chain, transport ou digitalisation logistique.

**Site en ligne : https://portfolio-mohamed-ziad-almi.vercel.app**

Le site présente le parcours (4 stages : SMA, Marsa Maroc, Coca-Cola, SNTL), les projets en études de cas (WMS, TMS…), les compétences, les langues, les certifications Coursera et un formulaire de contact.

## Stack

| Domaine | Outils |
|---|---|
| Framework | [Next.js 16](https://nextjs.org) (App Router, pages statiques), React 19, TypeScript strict |
| Style | Tailwind CSS v4 (design system par tokens dans `app/globals.css`), mode clair / sombre avec `next-themes` |
| Polices | Space Grotesk (titres) et Inter (texte) via `next/font` |
| Icônes | `lucide-react` (+ SVG maison pour LinkedIn / GitHub) |
| Animations | `framer-motion` (`LazyMotion`, respect de `prefers-reduced-motion`) |
| Formulaire | [Formspree](https://formspree.io) (envoi en `fetch`, sans redirection) |
| SEO | Metadata par page, Open Graph / Twitter Card, image de partage et icônes générées, `sitemap.xml`, `robots.txt`, JSON-LD `Person` |
| Hébergement | [Vercel](https://vercel.com) + Vercel Analytics |

## Démarrer

```bash
npm install
npm run dev     # http://localhost:3000
npm run lint    # ESLint
npm run build   # build de production (doit passer avant tout commit)
```

## Structure

```
app/
├── layout.tsx              # Layout racine : polices, metadata globale, navbar, footer, <main>
├── globals.css             # Design system : tokens de couleur (clair + sombre), rayons, ombres
├── page.tsx                # Accueil
├── about/                  # Parcours : expériences, formation, cursus, compétences, langues
├── projects/               # Liste filtrable + [slug]/ (étude de cas, une page par projet)
├── certifications/         # Certifications filtrables par catégorie
├── contact/                # Coordonnées + formulaire
├── not-found.tsx           # Page 404 (« Ce colis s'est perdu en transit »)
├── opengraph-image.tsx     # Image de partage 1200 × 630 générée au build
├── icon.tsx, apple-icon.tsx# Favicon et icône iOS (monogramme MZA)
├── sitemap.ts, robots.ts
components/
├── ui/                     # Briques réutilisables : Button, Card, Badge, Section, Timeline…
├── motion/                 # Animations (composants client) : Apparition, Cascade
├── home/, parcours/, projets/, certifications/, contact/   # Composants par page
├── Navbar.tsx, Footer.tsx, ThemeToggle.tsx, PhotoProfil.tsx, JsonLdPersonne.tsx
lib/
├── data.ts                 # ★ TOUT le contenu du site
├── seo.ts                  # metadataPage() : metadata d'une page (titre, OG, Twitter)
├── format.ts               # Dates, durées, initiales
├── marque.ts               # Couleurs pour les images générées (copie des tokens CSS)
assets/fonts/               # Polices TTF pour les images générées (licence SIL OFL)
public/
├── CV.pdf
└── images/                 # Photo de profil et captures de projets (à ajouter)
```

## Modifier le contenu

**Tout le texte du site est dans [`lib/data.ts`](lib/data.ts)** : aucun texte n'est écrit en dur dans les composants. Les données sont typées : TypeScript signale toute faute de structure au `npm run build`.

| Pour… | Modifier dans `lib/data.ts` |
|---|---|
| Nom, titre, accroche, email, téléphone, liens | `profil` |
| Ajouter / modifier un stage | `experiences` (la plus récente en premier ; `resultats` s'affiche dès qu'il est rempli) |
| Diplômes, cursus du Master | `formations`, `cursusMaster` |
| Compétences, langues | `competences`, `langues` (niveau `score` de 1 à 5) |
| Ajouter une certification | `certifications` (le bouton « Vérifier le certificat » apparaît si `lienVerification` est rempli) |
| Ajouter un projet | `projets` : sa page `/projects/<slug>` est créée automatiquement ; `featured: true` l'affiche sur l'accueil ; l'ordre du tableau est l'ordre d'affichage |
| Textes d'interface (boutons, titres de section…) | `ui` |
| Mots-clés, descriptions des pages | `seo` |
| URL du site (nom de domaine) | `site.url` |

Les chiffres clés de l'accueil (stages, certifications, langues) sont **calculés** à partir de ces listes.

Les champs vides (`""` ou `[]`) ne sont pas affichés : on peut compléter un projet progressivement sans que des sections vides apparaissent.

### Images

- **Photo de profil** : déposer `public/images/profile.jpg` (carrée, 480 × 480 px minimum). Tant qu'elle est absente, le monogramme « MZA » s'affiche.
- **Captures de projet** : déposer les fichiers dans `public/images/projets/<slug>/`, puis les déclarer dans `images` du projet (`src`, `alt`, `legende`). Sans image, un visuel de remplacement est affiché.
- **CV** : remplacer `public/CV.pdf`.

## Design system et règles

Les règles du projet (tokens de couleur, accessibilité, composants serveur…) sont décrites dans [`CLAUDE.md`](CLAUDE.md). En résumé :

- Couleurs uniquement via les tokens sémantiques (`bg-background`, `text-muted-foreground`, `bg-accent`…), définis en clair **et** en sombre dans `app/globals.css`.
- Composants serveur par défaut ; `"use client"` seulement pour l'interactivité (menu, filtres, formulaire, animations).
- Accessibilité : un `h1` par page, labels sur tous les champs, focus visible, contrastes WCAG AA vérifiés dans les deux thèmes, navigation 100 % clavier.

## Déploiement

Le dépôt GitHub est relié à Vercel : chaque push sur `main` déclenche un déploiement de production, chaque autre branche une prévisualisation.
