import { renderOgImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og-template";

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = "Everpeak Roof, Seattle roofing repair and replacement";

export default function Image() {
  return renderOgImage({
    eyebrow: "Seattle & Puget Sound",
    title: "Roofing done right, by people who know the rain.",
    subtitle: "Roof repair, replacement, and emergency service across 21 cities. Free estimates.",
  });
}
