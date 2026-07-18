import { renderBlogOgImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og-template";
import { getPost } from "@/lib/posts";

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = "Everpeak Roofing blog post";

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);

  return renderBlogOgImage({
    category: post?.category ?? "Guide",
    title: post?.title ?? "Roofing advice from the Puget Sound",
    readingTimeMin: post?.readingTimeMin ?? 5,
  });
}
