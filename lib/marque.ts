/**
 * Couleurs de la marque pour les images générées (Open Graph, icônes) :
 * ImageResponse ne lit pas les variables CSS, d'où cette copie des tokens de
 * app/globals.css. Seule exception autorisée aux couleurs hexadécimales hors CSS :
 * garder ces valeurs synchronisées avec globals.css.
 */
export const marque = {
  primaire: "#1b2a41", // --primary (clair)
  primaireClair: "#3b5478", // --primary (sombre)
  accent: "#f28c28", // --accent
  texteSurPrimaire: "#ffffff", // --primary-foreground
  texteSecondaireSurPrimaire: "#cbd5e1",
  succes: "#22c55e", // --success (sombre)
} as const;
