import { Reveal } from "@/components/Reveal";

const items = ["No ads", "No subscription", "1,000+ at prayer", "4.9 ★ average"];

export function TrustStrip() {
  return (
    <Reveal>
      <div
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          padding: "16px var(--gutter) 56px",
          display: "flex",
          justifyContent: "center",
          gap: 28,
          flexWrap: "wrap",
          color: "var(--dim)",
          fontWeight: 700,
          letterSpacing: 1,
          textTransform: "uppercase",
          fontSize: 12,
          textAlign: "center",
        }}
      >
        <span style={{ color: "var(--teal)" }}>100% free</span>
        <span style={{ color: "var(--faint)" }}>•</span>
        {items.map((item, i) => (
          <span key={item} style={{ display: "contents" }}>
            <span>{item}</span>
            {i < items.length - 1 && <span style={{ color: "var(--faint)" }}>•</span>}
          </span>
        ))}
      </div>
    </Reveal>
  );
}
