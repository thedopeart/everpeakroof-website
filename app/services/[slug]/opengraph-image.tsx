import { renderOgImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og-template";
import { services } from "@/lib/services";

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = "Everpeak Roof service";

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const svc = services.find((s) => s.slug === slug);

  return renderOgImage({
    eyebrow: "Our Services",
    title: svc ? svc.name : "Seattle metro roofing",
    subtitle: svc?.shortDesc,
  });
}
