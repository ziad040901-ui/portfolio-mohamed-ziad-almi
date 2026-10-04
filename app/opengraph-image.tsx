import { ImageResponse } from "next/og";
import { profil, seo, site } from "@/lib/data";
import { initiales } from "@/lib/format";
import { marque } from "@/lib/marque";
import { policesOg } from "@/lib/polices-og";

// Image de partage (LinkedIn, WhatsApp, X…) générée au build
export const alt = seo.imagePartage.alt;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const t = seo.imagePartage;
  const domaine = site.url.replace(/^https?:\/\//, "");

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          backgroundColor: marque.primaire,
          // Quadrillage d'entrepôt, comme le hero du site
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          color: marque.texteSurPrimaire,
          fontFamily: "Inter",
        }}
      >
        {/* Monogramme + signature */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 112,
              height: 112,
              borderRadius: 999,
              backgroundColor: marque.primaireClair,
              border: `6px solid ${marque.accent}`,
              fontFamily: "Space Grotesk",
              fontSize: 40,
              fontWeight: 700,
            }}
          >
            {initiales(profil.nom)}
          </div>
          <div
            style={{
              display: "flex",
              padding: "14px 28px",
              borderRadius: 999,
              backgroundColor: marque.accent,
              color: marque.primaire,
              fontSize: 30,
              fontWeight: 600,
            }}
          >
            {t.signature}
          </div>
        </div>

        {/* Nom + poste */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontFamily: "Space Grotesk", fontSize: 88, fontWeight: 700, lineHeight: 1.05 }}>
            {profil.nom}
          </div>
          <div style={{ marginTop: 20, fontSize: 40, fontWeight: 600, color: marque.accent }}>{seo.poste}</div>
        </div>

        {/* Disponibilité, puis URL : l'une sous l'autre (côte à côte, elles ne tiennent pas en 1200 px) */}
        <div style={{ display: "flex", flexDirection: "column", color: marque.texteSecondaireSurPrimaire }}>
          <div style={{ display: "flex", alignItems: "center", fontSize: 30, whiteSpace: "nowrap" }}>
            <div style={{ width: 18, height: 18, borderRadius: 999, backgroundColor: marque.succes, marginRight: 14 }} />
            {t.recherche} · {profil.localisation}
          </div>
          <div style={{ display: "flex", marginTop: 10, marginLeft: 32, fontSize: 24, whiteSpace: "nowrap" }}>
            {domaine}
          </div>
        </div>
      </div>
    ),
    { ...size, fonts: await policesOg() }
  );
}
