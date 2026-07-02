import { ImageResponse } from "next/og";
import { readFile } from "fs/promises";
import { join } from "path";

/* Shared Open Graph image template for Everpeak Roof.
   1200x630, brand forest-green gradient with the real Everpeak logo.
   Uses system fonts only (no remote font fetch) for build reliability. */

export const OG_SIZE = { width: 1200, height: 630 };
export const OG_CONTENT_TYPE = "image/png";

const PHONE = "(425) 505-7142";

// Real white logo lockup (peak emblem + EVERPEAK ROOFING wordmark),
// downscaled copy for OG use. Read once per server instance and cached.
let logoDataUri: Promise<string> | null = null;
function getLogo(): Promise<string> {
  if (!logoDataUri) {
    logoDataUri = readFile(
      join(process.cwd(), "public/images/logo/everpeak-roofing-white-og.png")
    ).then((buf) => `data:image/png;base64,${buf.toString("base64")}`);
  }
  return logoDataUri;
}

interface OgProps {
  eyebrow: string;
  title: string;
  subtitle?: string;
}

// Per-category accent colors for blog covers. All sit on the brand
// forest-green background; fallback is the brand orange.
const CATEGORY_ACCENTS: Record<string, string> = {
  "Local Guide": "#D4883E",
  "Neighborhood Guide": "#E8A85E",
  "Cost Guide": "#C9A227",
  "Guide": "#8FB99B",
  "How-To": "#8FB99B",
  "Decision Guide": "#B7C9A3",
  "Comparison": "#B7C9A3",
  "Insurance Guide": "#9EB8D0",
  "Emergency": "#D0764A",
  "Storm Damage": "#D0764A",
  "Maintenance": "#A3C4B0",
  "Material Guide": "#C9A227",
  "Roofing Materials": "#C9A227",
  "Homeowner Guide": "#8FB99B",
  "Buyer Guide": "#9EB8D0",
  "Commercial Guide": "#9EB8D0",
};

interface BlogOgProps {
  category: string;
  title: string;
  readingTimeMin: number;
}

// Blog cover: category-tinted chip + big title + meta row, with an angled
// "roofline" motif on the right in the category accent. One template, unique
// per post via title/category/read-time.
export async function renderBlogOgImage({ category, title, readingTimeMin }: BlogOgProps): Promise<ImageResponse> {
  const accent = CATEGORY_ACCENTS[category] ?? "#D4883E";
  const titleSize = title.length > 58 ? 56 : title.length > 40 ? 64 : 72;
  const logo = await getLogo();

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px 76px",
          background: "linear-gradient(120deg, #163025 0%, #1E3D30 45%, #2D5A47 100%)",
          fontFamily: "sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* angled roofline motif, category-tinted */}
        <div
          style={{
            position: "absolute",
            right: -140,
            top: -80,
            width: 460,
            height: 860,
            display: "flex",
            transform: "rotate(24deg)",
            background: accent,
            opacity: 0.1,
          }}
        />
        <div
          style={{
            position: "absolute",
            right: -30,
            top: -120,
            width: 90,
            height: 900,
            display: "flex",
            transform: "rotate(24deg)",
            background: accent,
            opacity: 0.22,
          }}
        />
        {/* faint grid texture */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
            display: "flex",
          }}
        />

        {/* Top row: real logo lockup + category chip */}
        <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={logo} width={287} height={135} alt="" style={{ marginTop: -18, marginLeft: -12 }} />
          <div
            style={{
              display: "flex",
              padding: "10px 22px",
              borderRadius: 99,
              border: `2px solid ${accent}`,
              color: accent,
              fontSize: 22,
              fontWeight: 700,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
            }}
          >
            {category}
          </div>
        </div>

        {/* Title */}
        <div
          style={{
            display: "flex",
            fontSize: titleSize,
            fontWeight: 800,
            lineHeight: 1.08,
            color: "#FFFFFF",
            letterSpacing: "-0.02em",
            maxWidth: 950,
          }}
        >
          {title}
        </div>

        {/* Bottom meta row */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", width: 110, height: 6, borderRadius: 99, background: accent, marginBottom: 20 }} />
          <div style={{ display: "flex", alignItems: "center", gap: 28, fontSize: 23, fontWeight: 600, color: "rgba(255,255,255,0.85)" }}>
            <div style={{ display: "flex" }}>{readingTimeMin} min read</div>
            <div style={{ display: "flex", color: "rgba(255,255,255,0.45)" }}>everpeakroof.com/blog</div>
            <div style={{ display: "flex", color: "#E8A85E", fontSize: 34, fontWeight: 800 }}>{PHONE}</div>
          </div>
        </div>
      </div>
    ),
    { ...OG_SIZE }
  );
}

export async function renderOgImage({ eyebrow, title, subtitle }: OgProps): Promise<ImageResponse> {
  const logo = await getLogo();
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background: "linear-gradient(135deg, #1E3D30 0%, #2D5A47 55%, #1E3D30 100%)",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        {/* faint grid texture */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
            display: "flex",
          }}
        />

        {/* Top row: real logo lockup */}
        <div style={{ display: "flex", alignItems: "flex-start" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={logo} width={287} height={135} alt="" style={{ marginTop: -20, marginLeft: -12 }} />
        </div>

        {/* Middle: eyebrow + title + subtitle */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              fontSize: 26,
              fontWeight: 700,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "#E8A85E",
              marginBottom: 18,
            }}
          >
            {eyebrow}
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 76,
              fontWeight: 800,
              lineHeight: 1.05,
              color: "#FFFFFF",
              letterSpacing: "-0.02em",
              maxWidth: 1000,
            }}
          >
            {title}
          </div>
          {subtitle ? (
            <div
              style={{
                display: "flex",
                fontSize: 30,
                fontWeight: 500,
                color: "rgba(255,255,255,0.72)",
                marginTop: 24,
                maxWidth: 940,
                lineHeight: 1.3,
              }}
            >
              {subtitle}
            </div>
          ) : null}
        </div>

        {/* Bottom row: accent + meta */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", width: 110, height: 6, borderRadius: 99, background: "#D4883E", marginBottom: 22 }} />
          <div style={{ display: "flex", alignItems: "center", gap: 28, fontSize: 24, fontWeight: 600, color: "rgba(255,255,255,0.85)" }}>
            <div style={{ display: "flex" }}>Licensed &amp; insured · WA #EVERPRL743KE</div>
            <div style={{ display: "flex", color: "#E8A85E", fontSize: 34, fontWeight: 800 }}>{PHONE}</div>
          </div>
        </div>
      </div>
    ),
    { ...OG_SIZE }
  );
}
