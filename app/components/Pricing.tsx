import { IconCheck, IconRefresh, IconCreditCard, IconFile, IconLayout, IconCode, IconBrain, IconSparkles } from "@tabler/icons-react";

const tiers = [
  {
    name: "Starter",
    price: "$999",
    sub: "Landing page · one-time",
    featured: false,
    features: ["Custom designed single page", "Contact form & mobile-ready", "Basic SEO setup", "1 round of revisions", "30 days of support"],
    cta: "Get started",
  },
  {
    name: "Studio",
    price: "$2,999",
    sub: "Multi-page site · one-time",
    featured: true,
    features: ["Up to 8 custom pages", "CMS integration", "Full SEO & performance audit", "Analytics setup", "2 rounds of revisions", "60 days of support"],
    cta: "Get started",
  },
  {
    name: "Custom",
    price: "From $6,500",
    sub: "Web app · scoped per project",
    featured: false,
    features: ["Full-stack application", "Auth, DB, payments, APIs", "Custom architecture & scope", "Dedicated US-based contact", "Retainer available post-launch"],
    cta: "Book a call",
  },
];

const aiTiers = [
  {
    name: "AI Chatbot",
    price: "$1,500",
    sub: "Basic AI integration · one-time",
    features: ["Custom trained on your business", "Embedded on your website", "Single-purpose assistant", "Custom UI to match your brand", "30 days of support"],
  },
  {
    name: "AI Advanced",
    price: "$2,500–$3,500",
    sub: "Full AI integration · one-time",
    features: ["Multi-purpose AI assistant", "Trained on your docs & FAQs", "Custom UI & admin dashboard", "Usage tracking & analytics", "60 days of support"],
  },
];

const explainers = [
  { icon: IconFile, tier: "Starter", rule: "You need one focused page that gets people to take one action.", examples: "e.g. Product launch, event sign-up, local business presence, portfolio intro." },
  { icon: IconLayout, tier: "Studio", rule: "You need multiple pages but users don't need to log in to anything.", examples: "e.g. Agency site, restaurant, services business, portfolio with case studies." },
  { icon: IconCode, tier: "Custom", rule: "Your users need to log in, save data, or pay for something.", examples: "e.g. SaaS product, booking platform, marketplace, dashboard, ordering system." },
  { icon: IconBrain, tier: "AI Chatbot", rule: "You want a smart assistant that answers customer questions 24/7.", examples: "e.g. Restaurant FAQ bot, law firm intake bot, e-commerce support assistant." },
];

export default function Pricing() {
  return (
    <section id="pricing" style={{ padding: "56px 28px", background: "#fff", borderTop: "0.5px solid #D8D6EE" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <p style={{ fontSize: 11, fontWeight: 500, letterSpacing: ".08em", textTransform: "uppercase", color: "#888780", marginBottom: 8 }}>Pricing</p>
        <h2 style={{ fontSize: 22, fontWeight: 500, color: "#1A1540", marginBottom: 6 }}>Transparent pricing. No surprises.</h2>
        <p style={{ fontSize: 13, color: "#888780", marginBottom: 28 }}>Fixed-price projects. You always know what you're paying before we start.</p>

        {/* Core tiers */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 12, marginBottom: 32 }}>
          {tiers.map((t) => (
            <div key={t.name} style={{ background: "#fff", border: t.featured ? "2px solid #3D2E8F" : "0.5px solid #D8D6EE", borderRadius: 12, padding: "22px 20px" }}>
              {t.featured && (
                <span style={{ fontSize: 10, fontWeight: 500, background: "#3D2E8F", color: "#E8E4FF", padding: "3px 10px", borderRadius: 20, display: "inline-block", marginBottom: 12 }}>Most popular</span>
              )}
              <p style={{ fontSize: 13, fontWeight: 500, color: "#1A1540", marginBottom: 4 }}>{t.name}</p>
              <p style={{ fontSize: 28, fontWeight: 500, color: "#1A1540", lineHeight: 1, marginBottom: 2 }}>{t.price}</p>
              <p style={{ fontSize: 11, color: "#888780", marginBottom: 16 }}>{t.sub}</p>
              <div style={{ height: "0.5px", background: "#D8D6EE", marginBottom: 14 }} />
              {t.features.map((f) => (
                <div key={f} style={{ display: "flex", alignItems: "flex-start", gap: 7, marginBottom: 8 }}>
                  <IconCheck size={13} color="#1D9E75" style={{ flexShrink: 0, marginTop: 2 }} />
                  <span style={{ fontSize: 12, color: "#5F5E5A", lineHeight: 1.4 }}>{f}</span>
                </div>
              ))}
              <a href="#contact" style={{ display: "block", textAlign: "center", fontSize: 12, fontWeight: 500, padding: 9, borderRadius: 7, marginTop: 18, textDecoration: "none", ...(t.featured ? { background: "#3D2E8F", color: "#E8E4FF" } : { border: "0.5px solid #8B7ED4", color: "#3D2E8F" }) }}>
                {t.cta}
              </a>
            </div>
          ))}
        </div>

        {/* AI Add-on section */}
        <div style={{ background: "#F0EFF8", border: "0.5px solid #D8D6EE", borderRadius: 16, padding: "28px 24px", marginBottom: 16 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 6 }}>
            <IconBrain size={18} color="#3D2E8F" />
            <p style={{ fontSize: 13, fontWeight: 500, color: "#1A1540" }}>Additional AI chatbot</p>
            <span style={{ fontSize: 10, fontWeight: 500, background: "#3D2E8F", color: "#E8E4FF", padding: "2px 8px", borderRadius: 20 }}>New</span>
          </div>
          <p style={{ fontSize: 12, color: "#888780", marginBottom: 20 }}>Add a custom AI assistant to any project, or as a standalone integration. Own it forever — no monthly SaaS fees.</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 12 }}>
            {aiTiers.map((t) => (
              <div key={t.name} style={{ background: "#fff", border: "0.5px solid #D8D6EE", borderRadius: 12, padding: "22px 20px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
                  <IconSparkles size={14} color="#3D2E8F" />
                  <p style={{ fontSize: 13, fontWeight: 500, color: "#1A1540" }}>{t.name}</p>
                </div>
                <p style={{ fontSize: 24, fontWeight: 500, color: "#1A1540", lineHeight: 1, marginBottom: 2 }}>{t.price}</p>
                <p style={{ fontSize: 11, color: "#888780", marginBottom: 16 }}>{t.sub}</p>
                <div style={{ height: "0.5px", background: "#D8D6EE", marginBottom: 14 }} />
                {t.features.map((f) => (
                  <div key={f} style={{ display: "flex", alignItems: "flex-start", gap: 7, marginBottom: 8 }}>
                    <IconCheck size={13} color="#1D9E75" style={{ flexShrink: 0, marginTop: 2 }} />
                    <span style={{ fontSize: 12, color: "#5F5E5A", lineHeight: 1.4 }}>{f}</span>
                  </div>
                ))}
                <a href="#contact" style={{ display: "block", textAlign: "center", fontSize: 12, fontWeight: 500, padding: 9, borderRadius: 7, marginTop: 18, textDecoration: "none", border: "0.5px solid #8B7ED4", color: "#3D2E8F" }}>
                  Get started
                </a>
              </div>
            ))}
          </div>
          <p style={{ fontSize: 11, color: "#888780", marginTop: 16 }}>AI maintenance available at $150/mo — covers API costs, model updates, and monitoring.</p>
        </div>

        {/* Explainer */}
        <div style={{ background: "#F0EFF8", border: "0.5px solid #D8D6EE", borderRadius: 12, padding: "20px 22px", marginBottom: 16 }}>
          <p style={{ fontSize: 11, fontWeight: 500, letterSpacing: ".06em", textTransform: "uppercase", color: "#888780", marginBottom: 14 }}>Not sure which tier fits you?</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 10 }}>
            {explainers.map(({ icon: Icon, tier, rule, examples }) => (
              <div key={tier} style={{ background: "#fff", border: "0.5px solid #D8D6EE", borderRadius: 8, padding: 14 }}>
                <p style={{ fontSize: 12, fontWeight: 500, color: "#1A1540", marginBottom: 6, display: "flex", alignItems: "center", gap: 6 }}>
                  <Icon size={14} color="#3D2E8F" />{tier}
                </p>
                <p style={{ fontSize: 12, color: "#3D2E8F", background: "#E8E4FF", borderRadius: 6, padding: "6px 10px", marginBottom: 8, lineHeight: 1.4 }}>{rule}</p>
                <p style={{ fontSize: 11, color: "#888780", lineHeight: 1.6 }}>{examples}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Retainer bar */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 12 }}>
          <div style={{ background: "#F0EFF8", border: "0.5px solid #D8D6EE", borderRadius: 10, padding: "14px 18px", display: "flex", alignItems: "center", gap: 14 }}>
            <IconRefresh size={20} color="#3D2E8F" style={{ flexShrink: 0 }} />
            <div>
              <p style={{ fontSize: 13, fontWeight: 500, color: "#1A1540", marginBottom: 2 }}>Monthly retainer</p>
              <p style={{ fontSize: 11, color: "#888780" }}>Ongoing updates, new features, and priority support.</p>
            </div>
            <span style={{ fontSize: 15, fontWeight: 500, color: "#3D2E8F", marginLeft: "auto", whiteSpace: "nowrap" }}>$650/mo</span>
          </div>
          <div style={{ background: "#F0EFF8", border: "0.5px solid #D8D6EE", borderRadius: 10, padding: "14px 18px", display: "flex", alignItems: "center", gap: 14 }}>
            <IconCreditCard size={20} color="#3D2E8F" style={{ flexShrink: 0 }} />
            <div>
              <p style={{ fontSize: 13, fontWeight: 500, color: "#1A1540", marginBottom: 2 }}>Payment plan available</p>
              <p style={{ fontSize: 11, color: "#888780" }}>50% upfront, 50% on delivery. Milestone billing for larger projects.</p>
            </div>
          </div>
        </div>

        <p style={{ fontSize: 11, color: "#888780", textAlign: "center", marginTop: 16, lineHeight: 1.6 }}>
          All projects include clean, documented code you fully own — no lock-in, no hidden fees.
        </p>
      </div>
    </section>
  );
}