const badges = ["Next.js", "TypeScript", "React", "Supabase", "Stripe", "Figma-to-code"];

export default function Hero() {
  return (
    <section style={{ padding: "72px 28px 56px", background: "#F8F7FF" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <p style={{ fontSize: 11, fontWeight: 500, letterSpacing: ".1em", textTransform: "uppercase", color: "#7F77DD", marginBottom: 14 }}>
          Web development studio
        </p>
        <h1 style={{ fontSize: "clamp(28px, 5vw, 42px)", fontWeight: 500, color: "#26215C", lineHeight: 1.15, marginBottom: 18, maxWidth: 520 }}>
          We build <em style={{ color: "#7F77DD", fontStyle: "normal" }}>vivid</em> digital products that perform.
        </h1>
        <p style={{ fontSize: 15, color: "#5F5E5A", lineHeight: 1.7, marginBottom: 32, maxWidth: 420 }}>
          A two-person studio crafting fast, polished websites and web apps for startups, agencies, and local businesses — available worldwide.
        </p>
        <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
          <a href="#contact" style={{ fontSize: 13, fontWeight: 500, background: "#7F77DD", color: "#EEEDFE", padding: "11px 24px", borderRadius: 7, textDecoration: "none" }}>
            Start a project →
          </a>
          <a href="#pricing" style={{ fontSize: 13, color: "#534AB7", padding: "11px 20px", borderRadius: 7, border: "0.5px solid #AFA9EC", textDecoration: "none" }}>
            See pricing
          </a>
        </div>
        <div style={{ display: "flex", gap: 8, marginTop: 32, flexWrap: "wrap" }}>
          {badges.map((b) => (
            <span key={b} style={{ fontSize: 11, background: "#EEEDFE", color: "#534AB7", padding: "4px 10px", borderRadius: 20, fontWeight: 500 }}>{b}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
