import { renderOgImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og-template";

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = "Everpeak Roof recent roofing projects";

export default function Image() {
  return renderOgImage({
    eyebrow: "Our Work",
    title: "Real roofs, real Puget Sound homes.",
    subtitle: "See recent repair and replacement projects from around the Seattle area.",
  });
}
