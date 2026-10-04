import { ImageResponse } from "next/og";
import { policesOg } from "@/lib/polices-og";
import Monogramme from "@/components/Monogramme";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default async function Icon() {
  return new ImageResponse(<Monogramme taille={size.width} />, { ...size, fonts: await policesOg() });
}
