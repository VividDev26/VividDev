import { IconLayout, IconCode, IconShoppingCart, IconRocket, IconDeviceMobile, IconRefresh } from "@tabler/icons-react";

const services = [
  { icon: IconLayout, title: "Web design", desc: "Custom UI from Figma to pixel-perfect code. No templates." },
  { icon: IconCode, title: "Full-stack dev", desc: "Frontend, backend, APIs, databases, and deployments." },
  { icon: IconShoppingCart, title: "E-commerce", desc: "Custom carts, Stripe payments, and order management." },
  { icon: IconRocket, title: "Speed & SEO", desc: "Lighthouse 100. Core Web Vitals. Ranked and fast." },
  { icon: IconDeviceMobile, title: "Mobile-first", desc: "Every build is responsive and tested across all screens." },
  { icon: IconRefresh, title: "Retainers", desc: "Ongoing support, updates, and new features as you grow." },
];

export default function Services() {
  return (
    <section id="services" style={{ padding: "56px 28px", background: "#fff", borderTop: "0.5px solid #E2E0F7" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <p style={{ fontSize: 11, fontWeight: 500, letterSpacing: ".08em", textTransform: "uppercase", color: "#888780", marginBottom: 8 }}>What we do</p>
        <h2 style={{ fontSize: 22, fontWeight: 500, color: "#26215C", marginBottom: 28 }}>Everything you need to launch and grow online.</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 10 }}>
          {services.map(({ icon: Icon, title, desc }) => (
            <div key={title} style={{ background: "#F8F7FF", border: "0.5px solid #E2E0F7", borderRadius: 10, padding: "16px 18px" }}>
              <Icon size={20} color="#7F77DD" style={{ marginBottom: 10 }} />
              <p style={{ fontSize: 13, fontWeight: 500, color: "#26215C", marginBottom: 4 }}>{title}</p>
              <p style={{ fontSize: 11, color: "#888780", lineHeight: 1.5 }}>{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
