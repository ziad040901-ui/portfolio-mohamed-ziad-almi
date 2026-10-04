import { readFile } from "node:fs/promises";
import { join } from "node:path";

/**
 * Polices TTF pour ImageResponse (Open Graph, icônes) : lues depuis assets/fonts,
 * pour que le build ne dépende pas d'un téléchargement réseau. Licence SIL OFL.
 */
export async function policesOg() {
  const lire = (fichier: string) => readFile(join(process.cwd(), "assets/fonts", fichier));
  const [spaceGrotesk, interRegular, interSemiBold] = await Promise.all([
    lire("SpaceGrotesk-Bold.ttf"),
    lire("Inter-Regular.ttf"),
    lire("Inter-SemiBold.ttf"),
  ]);
  return [
    { name: "Space Grotesk", data: spaceGrotesk, weight: 700 as const, style: "normal" as const },
    { name: "Inter", data: interRegular, weight: 400 as const, style: "normal" as const },
    { name: "Inter", data: interSemiBold, weight: 600 as const, style: "normal" as const },
  ];
}
