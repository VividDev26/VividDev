import heroDevicesImg from '../../images/Hero-Mockups.png';

const badges = ["Next.js", "TypeScript", "React", "Supabase", "Stripe", "Figma-to-code"];

export default function Hero() {
  return (
    <section style={{ padding: "72px 28px 56px", background: "#F0EFF8" }}>
      <div 
        style={{ 
          maxWidth: 1200, 
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: "48px",
          alignItems: "center"
        }}
      >
        {/* Left Column: Text Content & Badges */}
        <div>
          <p style={{ fontSize: 11, fontWeight: 500, letterSpacing: ".1em", textTransform: "uppercase", color: "#3D2E8F", marginBottom: 14 }}>
            Web development studio
          </p>
          <h1 style={{ fontSize: "clamp(28px, 5vw, 42px)", fontWeight: 500, color: "#1A1540", lineHeight: 1.15, marginBottom: 18, maxWidth: 520 }}>
            We build <em style={{ color: "#3D2E8F", fontStyle: "normal" }}>vivid</em> digital products that perform.
          </h1>
          <p style={{ fontSize: 15, color: "#5F5E5A", lineHeight: 1.7, marginBottom: 32, maxWidth: 420 }}>
            A two-person studio crafting fast, polished websites and web apps for startups, agencies, and local businesses — available worldwide.
          </p>
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
            <a href="#contact" style={{ fontSize: 13, fontWeight: 500, background: "#3D2E8F", color: "#E8E4FF", padding: "11px 24px", borderRadius: 7, textDecoration: "none" }}>
              Start a project →
            </a>
            <a href="#pricing" style={{ fontSize: 13, color: "#3D2E8F", padding: "11px 20px", borderRadius: 7, border: "0.5px solid #8B7ED4", textDecoration: "none" }}>
              See pricing
            </a>
          </div>
          <div style={{ display: "flex", gap: 8, marginTop: 32, flexWrap: "wrap" }}>
            {badges.map((b) => (
              <span key={b} style={{ fontSize: 11, background: "#E8E4FF", color: "#3D2E8F", padding: "4px 10px", borderRadius: 20, fontWeight: 500 }}>{b}</span>
            ))}
          </div>
        </div>

        {/* Right Column: 3D Isometric Mockup Device Layout */}
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "100%" }}>
          <img 
            src={heroDevicesImg.src} 
            alt="VividDev responsive digital product mockups across desktop, tablet, and mobile displays"
            style={{ 
              width: "100%", 
              maxWidth: "580px", 
              height: "auto", 
              objectFit: "contain" 
            }} 
          />
        </div>
      </div>
    </section>
  );
}