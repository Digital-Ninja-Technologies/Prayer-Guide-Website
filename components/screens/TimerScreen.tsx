import { StatusBar } from "./StatusBar";
import { T } from "./tokens";

export function TimerScreen() {
  return (
    <div style={{ height: "100%", background: T.bg, color: T.text }}>
      <StatusBar color={T.text} />
      <div
        style={{
          height: "calc(100% - 44px)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: 20,
          position: "relative",
        }}
      >
        <p
          style={{
            fontSize: 11,
            fontWeight: 800,
            letterSpacing: 2,
            textTransform: "uppercase",
            color: T.teal,
            margin: "0 0 34px",
          }}
        >
          Focus · Thanksgiving
        </p>
        <div
          style={{
            position: "relative",
            width: 230,
            height: 230,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            animation: "breathe 4.5s ease-in-out infinite",
          }}
        >
          <svg
            viewBox="0 0 100 100"
            style={{ position: "absolute", inset: 0, width: "100%", height: "100%", transform: "rotate(-90deg)" }}
          >
            <circle cx="50" cy="50" r="45" fill="none" stroke={T.line} strokeWidth="2.5" />
            <circle
              cx="50"
              cy="50"
              r="45"
              fill="none"
              stroke={T.teal}
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeDasharray="283"
              strokeDashoffset="96"
            />
          </svg>
          <div>
            <p className="mono" style={{ fontFamily: "var(--font-spectral), serif", fontSize: 52, fontWeight: 500, margin: 0, lineHeight: 1 }}>
              05:12
            </p>
            <p style={{ fontSize: 13, color: T.dim, margin: "8px 0 0", fontWeight: 600 }}>
              Breathe · you&rsquo;re here
            </p>
          </div>
        </div>
        <div style={{ display: "flex", gap: 14, marginTop: 44 }}>
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: "50%",
              background: T.surface,
              border: `1px solid ${T.line}`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 20,
              color: T.dim,
            }}
          >
            ❙❙
          </div>
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: "50%",
              background: T.teal,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 20,
              color: "#052019",
            }}
          >
            ✓
          </div>
        </div>
      </div>
    </div>
  );
}
