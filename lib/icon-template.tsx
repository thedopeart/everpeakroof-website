import { ImageResponse } from "next/og";

/* Shared branded app icon: orange roof on a forest-green rounded tile. */
export function renderIcon(size: number): ImageResponse {
  const pad = Math.round(size * 0.18);
  const glyph = size - pad * 2;
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #2D5A47 0%, #1E3D30 100%)",
          borderRadius: Math.round(size * 0.22),
        }}
      >
        <svg width={glyph} height={glyph} viewBox="0 0 24 24" fill="none">
          <path d="M3 11.5 12 4l9 7.5" stroke="#D4883E" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M5.5 10v9.5h13V10" stroke="#FFFFFF" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    ),
    { width: size, height: size }
  );
}
