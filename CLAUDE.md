@AGENTS.md

# Portfolio — Mohamed Ziad Almi

## Positionnement
- Portfolio de **Mohamed Ziad Almi**, étudiant en **Master 2 E-Logistique** (ESITH Casablanca).
- Profil **« Supply Chain × Digital »** : logistique, supply chain et développement (Python, Django, data/BI).
- Cible : **recruteurs logistique / supply chain** pour un **stage PFE**. Chaque section doit servir cet objectif : clarté, preuves concrètes (projets, expériences, résultats), contact facile.
- Langue du site : français.

## Contenu
- **Tout le contenu vient de `lib/data.ts`**, y compris les libellés d'interface (boutons, `aria-label`, textes alternatifs) regroupés dans l'objet `ui`.
- **Jamais de texte en dur dans les composants** : un composant reçoit ses données en props ou les importe depuis `lib/data.ts`.
- Les données sont typées (types exportés depuis `lib/data.ts`).
- Un champ vide (`""` ou `[]`) signifie « pas encore renseigné » : les composants ne l'affichent pas (jamais de « TODO » visible).
- Emojis présents dans les textes : les rendre via `emojisDecoratifs()` (`lib/emojis.tsx`), qui les masque aux lecteurs d'écran.

## Design system
- Tokens définis dans `app/globals.css` (Tailwind v4, `@theme`). Variante sombre complète via la classe `.dark` (next-themes).
- **Utiliser uniquement les tokens sémantiques** : `background`, `foreground`, `muted`, `muted-foreground`, `card`, `card-foreground`, `border`, `input` (bordure des champs), `primary`, `primary-foreground`, `accent`, `accent-foreground`, `accent-strong`, `success`, `danger`, `ring`.
- **Jamais de couleur hexadécimale en dur** (`text-[#...]`) ni de couleur de palette brute (`bg-blue-600`, `text-slate-500`…) dans les composants. Une nouvelle couleur = un nouveau token dans `globals.css`, avec sa valeur claire **et** sombre.
- `accent` (orange conteneur) sert aux fonds et aux détails ; pour du **texte** orange, utiliser `accent-strong` (contraste suffisant sur fond clair).
- Polices : `font-heading` (Space Grotesk) pour les titres, `font-sans` (Inter) pour le texte, chargées via `next/font` dans `app/layout.tsx`.
- Rayons : `rounded-button`, `rounded-card`. Ombres : `shadow-card`, `shadow-card-hover`. Espacements : `py-section`, `scroll-mt-header`, `max-w-content`.
- Toute section doit fonctionner **en clair ET en sombre**. Vérifier les deux thèmes avant de considérer une section terminée.
- Réutiliser les composants de `components/ui/` (`Container`, `Section`, `SectionHeading`, `Button`, `Card`, `Badge`) plutôt que de recréer des styles.
- Icônes : `lucide-react` (v1 : pas d'icônes de marques comme GitHub/LinkedIn, prévoir un SVG maison).
- Seule exception aux couleurs hexadécimales hors CSS : `lib/marque.ts`, pour les images générées (`ImageResponse` ne lit pas les variables CSS). Le garder synchronisé avec `globals.css`.

## Animations
- `framer-motion` uniquement via les composants client de `components/motion/` (`Apparition`, `Cascade` / `CascadeItem`) et `Timeline` ; les pages restent des composants serveur et leur passent le contenu en `children`.
- Tout élément animé porte `data-apparition`. **Le contenu doit rester visible si le JavaScript échoue** : l'état caché ne s'applique que si `<html>` a la classe `anim` (ajoutée par un script inline du `<head>`), et un filet de sécurité retire cette classe après 2 s si React / framer-motion ne sont pas prêts. Tout est décrit dans `components/motion/demarrage.ts` ; ne jamais cacher du contenu par défaut dans le HTML serveur.
- Animations sobres (fondu + léger glissement, une seule fois) ; pas d'animation sur le contenu au-dessus de la ligne de flottaison (hero, en-têtes de page).

## Next.js / React
- **Composants serveur par défaut.** `"use client"` uniquement si le composant utilise un état, un effet, un gestionnaire d'événement ou une API navigateur ; isoler la partie interactive dans le plus petit composant possible.
- **Liens internes avec `next/link`** (le composant `Button` le fait automatiquement pour les routes internes). `<a>` uniquement pour les liens externes, `mailto:`, `tel:` et les fichiers statiques (`/CV.pdf`).
- **Images avec `next/image`**, avec `alt` descriptif (ou `alt=""` si purement décorative).
- Alias d'import : `@/` → racine du projet.
- **Metadata d'une page : `metadataPage({ titre, description, chemin })`** (`lib/seo.ts`). La fusion des metadata étant superficielle, un `openGraph` défini dans une page remplace celui du layout, image comprise : ne pas écrire `openGraph` à la main.

## Accessibilité
- **Un seul `<h1>` par page**, hiérarchie des titres sans saut.
- **`<main id="contenu">` est fourni par `app/layout.tsx`** (avec le `padding-top` qui compense la navbar fixe) : les pages ne doivent **pas** ajouter leur propre `<main>`.
- Lien d'évitement « Aller au contenu » dans le layout ; les nouvelles routes de navigation se déclarent dans `navigation` (`lib/data.ts`).
- **Label sur tous les champs de formulaire** (`<label htmlFor>`, pas seulement un `placeholder`).
- **Focus visible** : ne jamais supprimer l'outline (`outline-none`) sans alternative ; le style global `:focus-visible` utilise le token `ring`.
- Icônes décoratives en `aria-hidden="true"` ; boutons icône avec `aria-label`.
- Animations : respecter `prefers-reduced-motion` (`motion-safe:` / `motion-reduce:` pour le CSS, `data-apparition` pour framer-motion).
- Contrastes WCAG AA vérifiés pour chaque paire de tokens, en clair et en sombre (texte ≥ 4,5:1 ; bordures de champs, focus et icônes porteuses de sens ≥ 3:1). Sur un fond `bg-primary`, redéfinir l'anneau de focus (`[--ring:var(--accent)]`).

## Vérifications
- `npm run lint` et `npm run build` doivent passer sans erreur avant de considérer une tâche terminée.
- Travail en cours sur la branche `refonte`.
