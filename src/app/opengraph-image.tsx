import { ImageResponse } from "next/og";

export const alt = "Портфолио Андрея blagone";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: 64, background: "#f2ecdd", color: "#171711", border: "18px solid #171711", fontFamily: "Arial, sans-serif" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: 32, fontWeight: 800 }}>
        <span style={{ display: "flex", alignItems: "center", justifyContent: "center", width: 70, height: 70, border: "4px solid #171711", borderRadius: 99, background: "#e9bd5b" }}>b.</span>
        <span>ПОРТФОЛИО · 2026</span>
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div style={{ fontSize: 84, lineHeight: .95, fontWeight: 900 }}>Андрей blagone</div>
        <div style={{ display: "flex", marginTop: 24, fontSize: 44, color: "#747258" }}>Веб-разработчик · React · Next.js</div>
      </div>
      <div style={{ display: "flex", height: 22, background: "#d97b62", border: "4px solid #171711" }} />
    </div>, size,
  );
}
