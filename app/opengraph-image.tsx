import { ImageResponse } from "next/og";

export const alt = "Doublon : les logiciels que vous payez et que personne n'utilise";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#f6f1e7",
          color: "#1c1a17",
          padding: 80,
        }}
      >
        <div style={{ fontSize: 48, fontWeight: 800 }}>Doublon</div>
        <div style={{ fontSize: 76, fontWeight: 800, lineHeight: 1.1 }}>
          Vous payez des logiciels que personne n'utilise.
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 36,
            color: "#c2391d",
            fontWeight: 700,
          }}
        >
          79 € par mois · remboursé sous 30 jours
        </div>
      </div>
    ),
    size
  );
}
