import { ImageResponse } from "next/og";
import { policesOg } from "@/lib/polices-og";
import Monogramme from "@/components/Monogramme";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default async function AppleIcon() {
  return new ImageResponse(<Monogramme taille={size.width} />, { ...size, fonts: await policesOg() });
}
