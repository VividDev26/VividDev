export default function Footer() {
  return (
    <footer style={{ background: "#fff", borderTop: "0.5px solid #E2E0F7", padding: "20px 28px" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", display: "flex", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
        <span style={{ fontSize: 11, color: "#888780" }}>© 2025 VividDev Studio · vividdev.io</span>
        <div style={{ display: "flex", gap: 16, marginLeft: "auto" }}>
          {["Twitter", "LinkedIn", "GitHub"].map((l) => (
            <a key={l} href="#" style={{ fontSize: 11, color: "#888780", textDecoration: "none" }}>{l}</a>
          ))}
        </div>
      </div>
    </footer>
  );
}
