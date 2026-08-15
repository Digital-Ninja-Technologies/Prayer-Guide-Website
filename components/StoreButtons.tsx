import { APP_STORE_URL, PLAY_STORE_URL } from "@/lib/content";

export function AppleIcon() {
  return (
    <svg width="19" height="23" viewBox="0 0 24 24" fill="var(--bg)">
      <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
    </svg>
  );
}

export function PlayIcon() {
  return (
    <svg width="20" height="22" viewBox="0 0 24 24">
      <path
        d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92z"
        fill="#00C3FF"
      />
      <path d="M3.609 1.814 16.802 8.88 13.792 12z" fill="#00E676" />
      <path d="M3.61 22.186 16.802 15.12 13.792 12z" fill="#FF3D00" />
      <path
        d="M16.802 8.88 20.317 10.906c.877.534.877 1.703 0 2.208L16.802 15.12 13.792 12z"
        fill="#FFD500"
      />
    </svg>
  );
}

export function StoreButtons({ compact = false }: { compact?: boolean }) {
  return (
    <div
      style={{
        display: "flex",
        gap: 16,
        flexWrap: "wrap",
      }}
    >
      <a
        href={APP_STORE_URL}
        style={{
          display: "flex",
          alignItems: "center",
          gap: 12,
          background: "var(--text)",
          color: "var(--bg)",
          fontWeight: 800,
          fontSize: 16,
          padding: compact ? "14px 20px" : "16px 26px",
          borderRadius: 14,
        }}
      >
        <AppleIcon />
        <div style={{ textAlign: "left", lineHeight: 1.15 }}>
          <div style={{ fontSize: 11, fontWeight: 600, opacity: 0.7 }}>
            Download on the
          </div>
          <div style={{ fontSize: 18, color: "var(--bg)" }}>App Store</div>
        </div>
      </a>
      <a
        href={PLAY_STORE_URL}
        style={{
          display: "flex",
          alignItems: "center",
          gap: 12,
          background: "var(--surface)",
          border: "1px solid var(--line2)",
          color: "var(--text)",
          fontWeight: 800,
          fontSize: 16,
          padding: compact ? "14px 20px" : "16px 26px",
          borderRadius: 14,
        }}
      >
        <PlayIcon />
        <div style={{ textAlign: "left", lineHeight: 1.15 }}>
          <div style={{ fontSize: 11, fontWeight: 600, opacity: 0.7 }}>
            Get it on
          </div>
          <div style={{ fontSize: 18 }}>Google Play</div>
        </div>
      </a>
    </div>
  );
}
