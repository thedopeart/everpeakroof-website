import { renderOgImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og-template";
import { cities } from "@/lib/cities";

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = "Everpeak Roof city service area";

export default async function Image({
  params,
}: {
  params: Promise<{ city: string }>;
}) {
  const { city: citySlug } = await params;
  const cityData = cities.find((c) => c.slug === citySlug);

  return renderOgImage({
    eyebrow: cityData ? `Roofing in ${cityData.name}, WA` : "Service Area",
    title: cityData
      ? `Roof repair & replacement in ${cityData.name}`
      : "Seattle metro roofing",
    subtitle: cityData?.tagline,
  });
}
