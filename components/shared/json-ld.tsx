// Renders a schema.org payload as a JSON-LD <script> tag.
// Server component. Safe-encodes any '<' to prevent XSS via JSON.stringify.

export default function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}
