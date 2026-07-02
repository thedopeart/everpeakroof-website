import { renderOgImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og-template";

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = "Everpeak Roof roofing services";

export default function Image() {
  return renderOgImage({
    eyebrow: "Our Services",
    title: "Repair, replacement, and everything in between.",
    subtitle: "Roof repair, full replacement, inspections, moss removal, and emergency work.",
  });
}
