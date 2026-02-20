import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Nuvreon - AI Software Infrastructure";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #030712 0%, #0a1628 50%, #030712 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        {/* Accent glow */}
        <div
          style={{
            position: "absolute",
            top: "20%",
            left: "30%",
            width: "400px",
            height: "400px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(59,130,246,0.15) 0%, transparent 70%)",
          }}
        />

        {/* Brand name */}
        <div
          style={{
            display: "flex",
            fontSize: "80px",
            fontWeight: 800,
            letterSpacing: "-2px",
            marginBottom: "16px",
          }}
        >
          <span style={{ color: "#3b82f6" }}>N</span>
          <span style={{ color: "#ffffff" }}>uvreon</span>
        </div>

        {/* Tagline */}
        <div
          style={{
            fontSize: "28px",
            color: "rgba(255,255,255,0.6)",
            fontWeight: 400,
            letterSpacing: "0.5px",
          }}
        >
          AI Software Infrastructure for Intelligent Operations
        </div>

        {/* Bottom accent line */}
        <div
          style={{
            position: "absolute",
            bottom: "60px",
            width: "120px",
            height: "3px",
            background: "linear-gradient(90deg, transparent, #3b82f6, transparent)",
            borderRadius: "2px",
          }}
        />
      </div>
    ),
    { ...size }
  );
}
