"use client";
import { useState } from "react";
import { IconChevronDown } from "@tabler/icons-react";

const faqs = [
  { q: "Do you work with clients outside the US?", a: "Yes — we're fully remote and work with clients worldwide. All collaboration happens async and over video calls, so location is never a barrier." },
  { q: "What do you need from me to get started?", a: "Just a brief on your goals and any existing branding. We handle the rest — design, copy suggestions, technical setup, and deployment." },
  { q: "Who owns the code after the project?", a: "You do, fully. We hand over a clean repo with documentation. No vendor lock-in, no licensing fees, ever." },
  { q: "Can you work with our existing designer or brand?", a: "Absolutely. We're comfortable building from Figma files, brand kits, or any design system you already have in place." },
  { q: "Do you offer payment plans?", a: "Yes. We split projects 50% upfront and 50% on delivery. For larger projects we can arrange milestone-based billing." },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section style={{ padding: "56px 28px", background: "#fff", borderTop: "0.5px solid #D8D6EE" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <p style={{ fontSize: 11, fontWeight: 500, letterSpacing: ".08em", textTransform: "uppercase", color: "#888780", marginBottom: 8 }}>FAQ</p>
        <h2 style={{ fontSize: 22, fontWeight: 500, color: "#1A1540", marginBottom: 28 }}>Common questions.</h2>
        {faqs.map((f, i) => (
          <div key={i} style={{ borderBottom: "0.5px solid #D8D6EE" }}>
            <button onClick={() => setOpen(open === i ? null : i)} style={{ width: "100%", textAlign: "left", padding: "16px 0", display: "flex", justifyContent: "space-between", alignItems: "center", background: "none", border: "none", cursor: "pointer" }}>
              <span style={{ fontSize: 13, fontWeight: 500, color: "#1A1540" }}>{f.q}</span>
              <IconChevronDown size={16} color="#3D2E8F" style={{ transition: "transform .2s", transform: open === i ? "rotate(180deg)" : "none", flexShrink: 0 }} />
            </button>
            {open === i && (
              <p style={{ fontSize: 12, color: "#5F5E5A", lineHeight: 1.6, paddingBottom: 16 }}>{f.a}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
