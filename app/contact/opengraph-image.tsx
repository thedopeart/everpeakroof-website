import { renderOgImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og-template";

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = "Get a free roofing estimate from Everpeak Roofing";

export default function Image() {
  return renderOgImage({
    eyebrow: "Free Estimate",
    title: "Get a straight answer on your roof.",
    subtitle: "Free, no-obligation estimates across the Seattle metro. We respond fast.",
  });
}
