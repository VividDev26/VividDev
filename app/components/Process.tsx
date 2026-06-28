"use client";
import { Fragment } from "react";
import { IconMessageCircle, IconCode, IconRocket, IconArrowRight } from "@tabler/icons-react";

const steps = [
  {
    icon: IconMessageCircle,
    num: "01",
    title: "Discovery call",
    desc: "A free 30-min call to scope your project, align on goals, and set a realistic timeline. You leave with a clear fixed-price proposal.",
    tags: ["Free call", "Scope doc", "Fixed quote"],
  },
  {
    icon: IconCode,
    num: "02",
    title: "Design & build",
    desc: "We design and build in parallel with weekly check-ins. You get a staging link from day one so you can follow along in real time.",
    tags: ["Weekly updates", "Staging link", "2 revisions"],
  },
  {
    icon: IconRocket,
    num: "03",
    title: "Launch & hand off",
    desc: "We deploy, run final QA, and hand over clean code you fully own. Optional retainer for ongoing support.",
    tags: ["You own the code", "30-day support", "Retainer available"],
  },
];

const scales = [
  { label: "Landing page", time: "1 – 2 weeks", desc: "Single page, contact form, mobile-ready. Great for a quick launch.", fill: "25%" },
  { label: "Multi-page site", time: "3 – 5 weeks", desc: "Full marketing or portfolio site with custom design, CMS, and SEO.", fill: "55%" },
  { label: "Web app", time: "6 – 12 weeks", desc: "Full-stack with auth, database, payments, or custom integrations.", fill: "100%" },
];

export default function Process() {
  return (
    <section id="process" style={{ padding: "56px 28px", background: "#F0EFF8", borderTop: "0.5px solid #D8D6EE" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <p style={{ fontSize: 11, fontWeight: 500, letterSpacing: ".08em", textTransform: "uppercase", color: "#888780", marginBottom: 8 }}>How we work</p>
        <h2 style={{ fontSize: 22, fontWeight: 500, color: "#1A1540", marginBottom: 28 }}>Three steps from idea to live.</h2>

        {/* Steps Container */}
        <div className="process-grid" style={{ display: "grid", gridTemplateColumns: "1fr auto 1fr auto 1fr", gap: 0, marginBottom: 24, alignItems: "start" }}>
          {steps.map((step, i) => (
            <Fragment key={step.num}>
              <div style={{ background: "#fff", border: "0.5px solid #D8D6EE", borderRadius: 12, padding: "20px 18px" }}>
                <span style={{ fontSize: 11, fontWeight: 500, color: "#3D2E8F", background: "#E8E4FF", display: "inline-block", padding: "3px 9px", borderRadius: 20, marginBottom: 12 }}>{step.num}</span>
                <step.icon size={20} color="#3D2E8F" style={{ display: "block", marginBottom: 8 }} />
                <p style={{ fontSize: 13, fontWeight: 500, color: "#1A1540", marginBottom: 6 }}>{step.title}</p>
                <p style={{ fontSize: 11, color: "#5F5E5A", lineHeight: 1.55, marginBottom: 12 }}>{step.desc}</p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 4 }}>
                  {step.tags.map((t) => (
                    <span key={t} style={{ fontSize: 10, color: "#3D2E8F", background: "#E8E4FF", padding: "2px 7px", borderRadius: 20 }}>{t}</span>
                  ))}
                </div>
              </div>
              {i < steps.length - 1 && (
                <div className="process-connector" style={{ display: "flex", alignItems: "center", justifyContent: "center", padding: "44px 4px 0" }}>
                  <div style={{ display: "flex", alignItems: "center", width: 36 }}>
                    <div style={{ width: 5, height: 5, borderRadius: "50%", background: "#8B7ED4", flexShrink: 0 }} />
                    <div style={{ flex: 1, height: 1, background: "#8B7ED4" }} />
                    <IconArrowRight size={13} color="#3D2E8F" />
                  </div>
                </div>
              )}
            </Fragment>
          ))}
        </div>

        {/* Timeline scale */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 10 }}>
          {scales.map((s) => (
            <div key={s.label} style={{ background: "#fff", border: "0.5px solid #D8D6EE", borderRadius: 10, padding: "16px 18px" }}>
              <span style={{ fontSize: 11, fontWeight: 500, background: "#E8E4FF", color: "#3D2E8F", padding: "3px 10px", borderRadius: 20, display: "inline-block", marginBottom: 10 }}>{s.label}</span>
              <p style={{ fontSize: 13, color: "#3D2E8F", fontWeight: 500, marginBottom: 5 }}>{s.time}</p>
              <p style={{ fontSize: 11, color: "#888780", lineHeight: 1.5, marginBottom: 10 }}>{s.desc}</p>
              <div style={{ height: 4, background: "#E8E4FF", borderRadius: 2 }}>
                <div style={{ height: 4, borderRadius: 2, background: "#3D2E8F", width: s.fill }} />
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .process-grid {
            grid-template-columns: 1fr !important;
            gap: 16px !important;
          }
          .process-connector {
            display: none !important;
          }
        }
      `}</style>
    </section>
  );
}