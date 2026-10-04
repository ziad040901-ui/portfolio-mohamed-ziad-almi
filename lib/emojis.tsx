/** Emojis et symboles décoratifs (🥇, ✓…) */
const MOTIF = /(\p{Extended_Pictographic}(?:️)?|[✓✔])/gu;

/**
 * Entoure les emojis d'un texte de <span aria-hidden="true"> : visibles à l'écran,
 * mais pas lus par les lecteurs d'écran (« médaille d'or », « coche »…).
 */
export function emojisDecoratifs(texte: string): React.ReactNode {
  const morceaux = texte.split(MOTIF);
  if (morceaux.length === 1) return texte;
  // split avec groupe capturant : les indices impairs sont les emojis
  return morceaux.map((morceau, i) =>
    i % 2 === 1 ? (
      <span key={i} aria-hidden="true">
        {morceau}
      </span>
    ) : (
      morceau
    )
  );
}
