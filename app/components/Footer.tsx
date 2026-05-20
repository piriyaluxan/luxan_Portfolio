export default function Footer() {
  return (
    <footer
      style={{
        borderTop: "1px solid var(--border)",
        padding: "2rem",
        textAlign: "center",
      }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "1rem" }}>
        <div style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.72rem", color: "var(--text-muted)" }}>
          <span style={{ color: "var(--accent)" }}>PS</span> · Built with Next.js + Tailwind
        </div>
        <div style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.72rem", color: "var(--text-muted)" }}>
          Piriyaluxan Sutheskumar © 2025
        </div>
      </div>
    </footer>
  );
}
