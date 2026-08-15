import { StatusBar } from "./StatusBar";
import { T } from "./tokens";

const guides = [
  { icon: "☀", label: "Morning", title: "Thanksgiving", time: "8 min", tint: T.amber },
  { icon: "✦", label: "Midday", title: "Peace & Focus", time: "6 min", tint: T.teal },
];

export function HeroScreen() {
  return (
    <div style={{ height: "100%", background: T.bg, color: T.text }}>
      <StatusBar color={T.text} />
      <div style={{ padding: "20px 24px 0" }}>
        <p
          style={{
            fontSize: 12,
            color: T.dim,
            margin: "0 0 4px",
            fontWeight: 600,
            animation: "riseIn .8s cubic-bezier(.2,.7,.2,1) 0.15s both",
          }}
        >
          Tuesday, July 29
        </p>
        <h1
          style={{
            fontFamily: "var(--font-spectral), serif",
            fontSize: 27,
            fontWeight: 600,
            margin: "0 0 20px",
            lineHeight: 1.12,
            animation: "riseIn .8s cubic-bezier(.2,.7,.2,1) 0.28s both",
          }}
        >
          Good morning,
          <br />
          Sarah
        </h1>
        <div
          style={{
            background: `linear-gradient(155deg, ${T.surface2}, ${T.surface})`,
            border: `1px solid ${T.line}`,
            borderRadius: 22,
            padding: "22px 20px",
            position: "relative",
            overflow: "hidden",
            marginBottom: 18,
            animation: "riseIn .8s cubic-bezier(.2,.7,.2,1) 0.42s both",
          }}
        >
          <div
            style={{
              position: "absolute",
              right: -30,
              top: -30,
              width: 130,
              height: 130,
              borderRadius: "50%",
              background: "radial-gradient(circle, rgba(232,179,107,.18), transparent 70%)",
              animation: "softGlow 6s ease-in-out 1.4s infinite",
            }}
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(100deg, transparent, rgba(255,255,255,.07), transparent)",
              width: "60%",
              animation: "sweep 7s ease-in-out 1.8s infinite",
              pointerEvents: "none",
            }}
          />
          <span
            style={{
              fontSize: 10,
              fontWeight: 800,
              letterSpacing: 1.5,
              textTransform: "uppercase",
              color: T.teal,
            }}
          >
            Scripture of the day
          </span>
          <p
            style={{
              fontFamily: "var(--font-spectral), serif",
              fontSize: 21,
              lineHeight: 1.42,
              fontWeight: 500,
              margin: "12px 0 10px",
            }}
          >
            &ldquo;Be still, and know that I am God.&rdquo;
          </p>
          <p
            style={{
              fontFamily: "var(--font-spectral), serif",
              fontStyle: "italic",
              fontSize: 14,
              color: T.dim,
              margin: 0,
            }}
          >
            Psalm 46:10
          </p>
        </div>
        <p
          style={{
            fontSize: 11,
            fontWeight: 800,
            letterSpacing: 1.5,
            textTransform: "uppercase",
            color: T.dim,
            margin: "0 0 12px",
            animation: "riseIn .8s cubic-bezier(.2,.7,.2,1) 0.58s both",
          }}
        >
          Today&rsquo;s guides
        </p>
        {guides.map((g, gi) => (
          <div
            key={g.title}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 14,
              background: T.surface,
              border: `1px solid ${T.line}`,
              borderRadius: 18,
              padding: "15px 16px",
              marginBottom: 12,
              animation: `riseIn .8s cubic-bezier(.2,.7,.2,1) ${0.7 + gi * 0.14}s both`,
            }}
          >
            <div
              style={{
                width: 44,
                height: 44,
                borderRadius: 13,
                background: "rgba(91,194,179,.12)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 20,
                color: g.tint,
              }}
            >
              {g.icon}
            </div>
            <div style={{ flex: 1 }}>
              <p style={{ fontSize: 11, color: T.dim, margin: "0 0 2px", fontWeight: 700 }}>
                {g.label}
              </p>
              <p style={{ fontFamily: "var(--font-spectral), serif", fontSize: 17, fontWeight: 600, margin: 0 }}>
                {g.title}
              </p>
            </div>
            <span style={{ fontSize: 12, color: T.dim, fontWeight: 700 }}>{g.time}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
