export const socialImageSize = { width: 1200, height: 630 };

export function SocialImageContent() {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(160deg, #0E1513 0%, #0A100E 65%)",
        position: "relative",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: -220,
          right: -160,
          width: 640,
          height: 640,
          borderRadius: 9999,
          background: "radial-gradient(circle, rgba(91,194,179,0.22), transparent 70%)",
          display: "flex",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: -240,
          left: -180,
          width: 600,
          height: 600,
          borderRadius: 9999,
          background: "radial-gradient(circle, rgba(232,179,107,0.16), transparent 70%)",
          display: "flex",
        }}
      />
      <div
        style={{
          display: "flex",
          width: 108,
          height: 108,
          borderRadius: 28,
          background: "#17211F",
          border: "2px solid rgba(255,255,255,0.08)",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: 40,
        }}
      >
        <svg width="60" height="60" viewBox="0 0 100 100">
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
      <div
        style={{
          display: "flex",
          fontSize: 76,
          fontWeight: 600,
          color: "#ECEAE3",
          letterSpacing: -1,
        }}
      >
        Prayer Guide
      </div>
      <div
        style={{
          display: "flex",
          fontSize: 30,
          color: "#9AA8A3",
          marginTop: 22,
          maxWidth: 720,
          textAlign: "center",
        }}
      >
        A quiet place to return to, each day.
      </div>
    </div>
  );
}
