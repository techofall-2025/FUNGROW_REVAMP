import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Funngro | India's #1 Teen Freelancing Platform";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#09090B",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "sans-serif",
          position: "relative",
          border: "2px solid #27272A",
        }}
      >
        {/* Glow backlight shadow panels */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            background: "rgba(0, 200, 83, 0.12)",
            width: "600px",
            height: "600px",
            borderRadius: "50%",
            filter: "blur(120px)",
          }}
        />

        {/* Branded Logo */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            fontSize: "84px",
            fontWeight: "900",
            color: "#FFFFFF",
            letterSpacing: "-0.05em",
            marginBottom: "24px",
          }}
        >
          Funngro
          <span style={{ color: "#00C853", marginLeft: "4px" }}>.</span>
        </div>

        {/* Tagline text */}
        <div
          style={{
            fontSize: "36px",
            fontWeight: "600",
            color: "#E4E4E7",
            textAlign: "center",
            maxWidth: "900px",
            lineHeight: "1.4",
            letterSpacing: "-0.02em",
          }}
        >
          Get paid by brands YOU already love.
        </div>

        {/* Badge tag listings */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            marginTop: "48px",
          }}
        >
          <div
            style={{
              background: "rgba(0, 200, 83, 0.08)",
              border: "1px solid rgba(0, 200, 83, 0.3)",
              color: "#00C853",
              padding: "8px 20px",
              borderRadius: "99px",
              fontSize: "18px",
              fontWeight: "bold",
              textTransform: "uppercase",
              letterSpacing: "0.1em",
            }}
          >
            Shark Tank India Season 2 🦈
          </div>
          <div
            style={{
              background: "#18181B",
              border: "1px solid #27272A",
              color: "#A1A1AA",
              padding: "8px 20px",
              borderRadius: "99px",
              fontSize: "18px",
              fontWeight: "bold",
            }}
          >
            5,00,000+ Active Teens
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
