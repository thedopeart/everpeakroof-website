import { renderOgImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og-template";

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = "Everpeak Roof service areas across Greater Puget Sound";

export default function Image() {
  return renderOgImage({
    eyebrow: "Service Areas",
    title: "Roofing across Greater Puget Sound.",
    subtitle: "21 cities from Seattle to the Eastside, South Sound, and North Sound.",
  });
}
