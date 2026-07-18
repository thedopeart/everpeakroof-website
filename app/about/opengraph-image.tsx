import { renderOgImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og-template";

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = "About Everpeak Roofing";

export default function Image() {
  return renderOgImage({
    eyebrow: "About Everpeak",
    title: "A local roofer who knows Seattle weather.",
    subtitle: "Licensed, insured, and straight with you. No pressure, no scare tactics.",
  });
}
