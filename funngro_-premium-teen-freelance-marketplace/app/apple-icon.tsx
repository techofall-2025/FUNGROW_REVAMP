import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = {
  width: 180,
  height: 180,
};
export const contentType = "image/png";

export default function AppleIcon() {
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
          borderRadius: "36px",
          border: "4px solid #00C853",
          position: "relative",
        }}
      >
        <span
          style={{
            fontSize: "100px",
            fontWeight: "900",
            color: "#FFFFFF",
            letterSpacing: "-0.05em",
          }}
        >
          F<span style={{ color: "#00C853" }}>.</span>
        </span>
      </div>
    ),
    {
      ...size,
    }
  );
}
