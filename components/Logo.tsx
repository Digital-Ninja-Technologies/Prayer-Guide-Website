export function FlameMark({ size = 22 }: { size?: number }) {
  return (
    <svg viewBox="0 0 100 100" style={{ width: size, height: size }}>
      <defs>
        <linearGradient id="flameGradient" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#8FE0D2" />
          <stop offset="1" stopColor="#2E9488" />
        </linearGradient>
      </defs>
      <path
        d="M50 8 C51 26 68 33 68 56 C68 74 60 86 50 86 C40 86 32 74 32 56 C32 43 41 39 44 27 C48 36 45 45 52 49 C57 43 55 28 50 8 Z"
        fill="url(#flameGradient)"
      />
      <path
        d="M50 40 C51 50 58 53 58 63 C58 72 54 78 50 78 C46 78 42 72 42 63 C42 56 47 53 50 40 Z"
        fill="var(--amber)"
      />
    </svg>
  );
}

export function LogoLockup({ size = 22 }: { size?: number }) {
  return (
    <span
      style={{
        width: 40,
        height: 40,
        borderRadius: 12,
        background:
          "radial-gradient(120% 120% at 50% 30%, var(--surface2), var(--deep))",
        border: "1px solid var(--line)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flex: "none",
      }}
    >
      <FlameMark size={size} />
    </span>
  );
}
