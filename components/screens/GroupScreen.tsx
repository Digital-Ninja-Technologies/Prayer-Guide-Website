import { StatusBar } from "./StatusBar";
import { T } from "./tokens";

const avatarColors = ["#2E9488", "#E8B36B", "#8FE0D2", "#1F2B28"];

const requests = [
  { name: "David R.", title: "Healing for my father", count: "7", tint: T.amber },
  { name: "Anna P.", title: "Wisdom for a big decision", count: "12", tint: T.teal },
];

export function GroupScreen() {
  return (
    <div style={{ height: "100%", background: T.bg, color: T.text, overflow: "hidden" }}>
      <StatusBar color={T.text} />
      <div style={{ padding: "18px 20px 0" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 6 }}>
          <h1 style={{ fontFamily: "var(--font-spectral), serif", fontSize: 26, fontWeight: 600, margin: 0 }}>
            Prayer Together
          </h1>
          <span
            style={{
              width: 34,
              height: 34,
              borderRadius: "50%",
              background: T.surface,
              border: `1px solid ${T.line}`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: T.teal,
              fontSize: 17,
            }}
          >
            +
          </span>
        </div>
        <p style={{ fontSize: 13, color: T.dim, margin: "0 0 18px" }}>Sunday Small Group · 8 members</p>

        <div
          style={{
            background: `linear-gradient(155deg, ${T.surface2}, ${T.surface})`,
            border: "1px solid rgba(91,194,179,.22)",
            borderRadius: 20,
            padding: "18px 18px",
            marginBottom: 16,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 9, marginBottom: 12 }}>
            <span
              style={{
                width: 8,
                height: 8,
                borderRadius: "50%",
                background: T.teal,
                boxShadow: `0 0 8px ${T.teal}`,
              }}
            />
            <span style={{ fontSize: 11, fontWeight: 800, letterSpacing: 1, textTransform: "uppercase", color: T.teal }}>
              Praying now · Live room
            </span>
          </div>
          <div style={{ display: "flex", alignItems: "center", marginBottom: 12 }}>
            {avatarColors.map((c, i) => (
              <span
                key={c}
                style={{
                  width: 34,
                  height: 34,
                  borderRadius: "50%",
                  background: c,
                  border: `2px solid ${T.bg}`,
                  marginLeft: i ? -8 : 0,
                  display: "inline-block",
                }}
              />
            ))}
            <span style={{ marginLeft: 8, fontSize: 13, color: T.dim, fontWeight: 600 }}>+4 joined</span>
          </div>
          <div
            style={{
              background: T.teal,
              color: "#052019",
              textAlign: "center",
              fontWeight: 800,
              fontSize: 14,
              padding: 12,
              borderRadius: 12,
            }}
          >
            Join the room
          </div>
        </div>

        <p style={{ fontSize: 11, fontWeight: 800, letterSpacing: 1.5, textTransform: "uppercase", color: T.dim, margin: "0 0 12px" }}>
          Shared requests
        </p>
        {requests.map((r) => (
          <div
            key={r.name}
            style={{
              background: T.surface,
              border: `1px solid ${T.line}`,
              borderRadius: 16,
              padding: "15px 16px",
              marginBottom: 11,
            }}
          >
            <p style={{ fontSize: 12, color: T.dim, margin: "0 0 4px", fontWeight: 700 }}>{r.name}</p>
            <p style={{ fontFamily: "var(--font-spectral), serif", fontSize: 16, fontWeight: 600, margin: "0 0 10px" }}>
              {r.title}
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: 7, color: r.tint, fontSize: 12, fontWeight: 700 }}>
              🙏 {r.count} praying
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
