import { ImageResponse } from "next/og";

/* Shared Open Graph image template for Everpeak Roof.
   1200x630, brand forest-green gradient with an orange roof mark.
   Uses system fonts only (no remote font fetch) for build reliability. */

export const OG_SIZE = { width: 1200, height: 630 };
export const OG_CONTENT_TYPE = "image/png";

const PHONE = "(425) 505-7142";

interface OgProps {
  eyebrow: string;
  title: string;
  subtitle?: string;
}

export function renderOgImage({ eyebrow, title, subtitle }: OgProps): ImageResponse {
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

        {/* Top row: wordmark */}
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          {/* roof mark */}
          <div
            style={{
              display: "flex",
              width: 64,
              height: 64,
              borderRadius: 16,
              background: "#D4883E",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <svg width="38" height="38" viewBox="0 0 24 24" fill="none">
              <path d="M3 11.5 12 4l9 7.5" stroke="#1E3D30" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M5.5 10v9.5h13V10" stroke="#1E3D30" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 30,
              fontWeight: 800,
              letterSpacing: "0.04em",
              color: "#FFFFFF",
            }}
          >
            EVERPEAK ROOF
          </div>
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
            <div style={{ display: "flex", color: "#E8A85E" }}>{PHONE}</div>
          </div>
        </div>
      </div>
    ),
    { ...OG_SIZE }
  );
}
