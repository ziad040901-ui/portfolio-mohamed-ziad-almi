import { profil } from "@/lib/data";
import { initiales } from "@/lib/format";
import { marque } from "@/lib/marque";

/** Monogramme « MZA » pour les icônes générées (favicon, apple-icon) — JSX ImageResponse */
export default function Monogramme({ taille }: { taille: number }) {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: marque.primaire,
        // Favicon : pastille ronde cerclée d'orange ; apple-icon : carré (iOS arrondit lui-même)
        // (pas de `border: undefined` : le moteur de next/og ne l'accepte pas)
        ...(taille <= 64 && {
          borderRadius: "50%",
          border: `${Math.max(2, taille / 16)}px solid ${marque.accent}`,
        }),
        color: marque.texteSurPrimaire,
        fontFamily: "Space Grotesk",
        fontWeight: 700,
        fontSize: taille * 0.36,
        letterSpacing: -taille * 0.01,
      }}
    >
      {initiales(profil.nom)}
      {taille > 64 && (
        // Trait orange « conteneur » sous le monogramme sur la grande icône
        <div
          style={{
            position: "absolute",
            bottom: taille * 0.2,
            width: taille * 0.3,
            height: taille * 0.04,
            borderRadius: 999,
            backgroundColor: marque.accent,
          }}
        />
      )}
    </div>
  );
}
