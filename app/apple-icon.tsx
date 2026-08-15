import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0E1513",
        }}
      >
        <svg width="118" height="118" viewBox="0 0 100 100">
          <path
            d="M50 8 C51 26 68 33 68 56 C68 74 60 86 50 86 C40 86 32 74 32 56 C32 43 41 39 44 27 C48 36 45 45 52 49 C57 43 55 28 50 8 Z"
            fill="#5BC2B3"
          />
          <path
            d="M50 40 C51 50 58 53 58 63 C58 72 54 78 50 78 C46 78 42 72 42 63 C42 56 47 53 50 40 Z"
            fill="#E8B36B"
          />
        </svg>
      </div>
    ),
    { ...size }
  );
}
