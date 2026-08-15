export function StatusBar({ color }: { color: string }) {
  return (
    <div
      style={{
        height: 44,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 26px",
        color,
      }}
    >
      <span className="mono" style={{ fontSize: 14, fontWeight: 700 }}>
        8:15
      </span>
      <div style={{ width: 78, height: 20, background: "#050807", borderRadius: 20 }} />
      <span style={{ fontSize: 12, fontWeight: 700 }}>✦ 100%</span>
    </div>
  );
}
