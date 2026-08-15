import { StatusBar } from "./StatusBar";
import { T } from "./tokens";

function Bubble({ who, children }: { who: "a" | "u"; children: string }) {
  const isAgent = who === "a";
  return (
    <div
      style={{
        alignSelf: isAgent ? "flex-start" : "flex-end",
        maxWidth: "80%",
        background: isAgent ? T.surface : "rgba(91,194,179,.16)",
        border: `1px solid ${isAgent ? T.line : "rgba(91,194,179,.28)"}`,
        borderRadius: isAgent ? "18px 18px 18px 6px" : "18px 18px 6px 18px",
        padding: "13px 15px",
        fontSize: 13.5,
        lineHeight: 1.5,
        color: T.text,
      }}
    >
      {children}
    </div>
  );
}

export function CompanionScreen() {
  return (
    <div style={{ height: "100%", background: T.bg, color: T.text, display: "flex", flexDirection: "column" }}>
      <StatusBar color={T.text} />
      <div
        style={{
          padding: "14px 20px 12px",
          borderBottom: `1px solid ${T.line}`,
          display: "flex",
          alignItems: "center",
          gap: 11,
        }}
      >
        <div
          style={{
            width: 38,
            height: 38,
            borderRadius: 12,
            background: "radial-gradient(120% 120% at 50% 30%, #1C2A27, #0E1513)",
            border: `1px solid ${T.line}`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: T.teal,
            fontSize: 18,
          }}
        >
          ✦
        </div>
        <div>
          <p style={{ fontFamily: "var(--font-spectral), serif", fontSize: 17, fontWeight: 600, margin: 0 }}>
            Companion
          </p>
          <p style={{ fontSize: 11, color: T.teal, margin: 0, fontWeight: 600 }}>Here with you</p>
        </div>
      </div>
      <div style={{ flex: 1, padding: "18px 18px", display: "flex", flexDirection: "column", gap: 12, overflow: "hidden" }}>
        <Bubble who="a">Morning, Sarah. What&rsquo;s on your heart today?</Bubble>
        <Bubble who="u">I feel anxious about my mom&rsquo;s surgery.</Bubble>
        <Bubble who="a">
          That&rsquo;s a heavy thing to carry. Would you like to pray through it together, or sit with a verse first?
        </Bubble>
        <Bubble who="a">
          &ldquo;Do not be anxious about anything.&rdquo; — Philippians 4:6. Let&rsquo;s bring her before God, one breath at a time.
        </Bubble>
      </div>
      <div style={{ padding: "12px 18px 18px" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            background: T.surface,
            border: `1px solid ${T.line}`,
            borderRadius: 100,
            padding: "11px 18px",
          }}
        >
          <span style={{ flex: 1, fontSize: 13, color: T.dim }}>Share what&rsquo;s on your heart…</span>
          <span
            style={{
              width: 30,
              height: 30,
              borderRadius: "50%",
              background: T.teal,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#052019",
              fontSize: 15,
            }}
          >
            ↑
          </span>
        </div>
      </div>
    </div>
  );
}
