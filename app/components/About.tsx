const stats = [
  { num: "100%", label: "Code you own" },
  { num: "24hr", label: "Response time" },
  { num: "2", label: "Devs on every project" },
  { num: "0", label: "Templates used" },
];

const team = [
  { initial: "M", name: "Mira", role: "Full-stack engineer" },
  { initial: "R", name: "Rami", role: "Frontend & design" },
];

export default function About() {
  return (
    <section id="about" style={{ padding: "56px 28px", background: "#F0EFF8", borderTop: "0.5px solid #D8D6EE" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 32, alignItems: "center" }}>
        <div>
          <p style={{ fontSize: 11, fontWeight: 500, letterSpacing: ".08em", textTransform: "uppercase", color: "#888780", marginBottom: 8 }}>About us</p>
          <h2 style={{ fontSize: 22, fontWeight: 500, color: "#1A1540", marginBottom: 14 }}>Two developers. One shared standard.</h2>
          <p style={{ fontSize: 13, color: "#5F5E5A", lineHeight: 1.7, marginBottom: 14 }}>
            VividDev is a two-person web development studio building fast, well-crafted digital products. We work directly with founders, small businesses, and agencies — no account managers, no handoffs, just the people actually building your project.
          </p>
          <p style={{ fontSize: 13, color: "#5F5E5A", lineHeight: 1.7, marginBottom: 20 }}>
            Every project ships with clean, documented code you fully own. No proprietary platforms, no lock-in, no recurring fees you didn't sign up for.
          </p>
          <div style={{ display: "flex", gap: 12 }}>
            {team.map((t) => (
              <div key={t.name} style={{ background: "#fff", border: "0.5px solid #D8D6EE", borderRadius: 10, padding: 16, flex: 1 }}>
                <div style={{ width: 40, height: 40, borderRadius: "50%", background: "#E8E4FF", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 13, fontWeight: 500, color: "#534AB7", marginBottom: 10 }}>
                  {t.initial}
                </div>
                <p style={{ fontSize: 13, fontWeight: 500, color: "#1A1540", marginBottom: 2 }}>{t.name}</p>
                <p style={{ fontSize: 11, color: "#888780" }}>{t.role}</p>
              </div>
            ))}
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
          {stats.map((s) => (
            <div key={s.label} style={{ background: "#E8E4FF", borderRadius: 10, padding: "18px 16px" }}>
              <p style={{ fontSize: 28, fontWeight: 500, color: "#2D2570", marginBottom: 2 }}>{s.num}</p>
              <p style={{ fontSize: 11, color: "#2D2570" }}>{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
