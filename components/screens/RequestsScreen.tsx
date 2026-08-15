import { StatusBar } from "./StatusBar";
import { T } from "./tokens";

const rows = [
  {
    tag: "Family",
    title: "Mom’s surgery",
    body: "Praying for steady hands Thursday.",
    badge: "⏰ Daily",
    tint: T.teal,
    tintBg: "rgba(91,194,179,.12)",
  },
  {
    tag: "Answered",
    title: "The job came through",
    body: "After three months — an answer.",
    badge: "✓ Answered",
    tint: T.amber,
    tintBg: "rgba(232,179,107,.14)",
  },
  {
    tag: "Friends",
    title: "Peace for David",
    body: "Through a hard season.",
    badge: "⏰ Daily",
    tint: T.teal,
    tintBg: "rgba(91,194,179,.12)",
  },
];

export function RequestsScreen() {
  return (
    <div style={{ height: "100%", background: T.bg, color: T.text, overflow: "hidden" }}>
      <StatusBar color={T.text} />
      <div style={{ padding: "18px 22px 0" }}>
        <h1 style={{ fontFamily: "var(--font-spectral), serif", fontSize: 28, fontWeight: 600, margin: "0 0 6px" }}>
          Prayer list
        </h1>
        <p style={{ fontSize: 13, color: T.dim, margin: "0 0 20px" }}>
          The people you&rsquo;re carrying.
        </p>
        {rows.map((r) => (
          <div
            key={r.title}
            style={{
              background: T.surface,
              border: `1px solid ${T.line}`,
              borderRadius: 18,
              padding: "18px 18px",
              marginBottom: 13,
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
              <span
                style={{
                  background: r.tintBg,
                  color: r.tint,
                  fontSize: 10,
                  fontWeight: 800,
                  letterSpacing: 0.5,
                  textTransform: "uppercase",
                  padding: "5px 11px",
                  borderRadius: 100,
                  animation:
                    r.tag === "Answered"
                      ? "glowpulse 2.2s ease-in-out infinite"
                      : undefined,
                }}
              >
                {r.tag}
              </span>
              <span style={{ fontSize: 12, color: T.dim, fontWeight: 700 }}>{r.badge}</span>
            </div>
            <p style={{ fontFamily: "var(--font-spectral), serif", fontSize: 20, fontWeight: 600, margin: "0 0 6px" }}>
              {r.title}
            </p>
            <p style={{ fontSize: 13, lineHeight: 1.45, color: T.dim, margin: 0 }}>{r.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
