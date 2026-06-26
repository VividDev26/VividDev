"use client";
import { useState } from "react";
import { IconMail, IconWorld, IconClock } from "@tabler/icons-react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", type: "Landing page — $999", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.MouseEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="contact" style={{ padding: "56px 28px", background: "#26215C", borderTop: "0.5px solid #3C3489" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 32, alignItems: "start" }}>
        <div>
          <p style={{ fontSize: 11, fontWeight: 500, letterSpacing: ".08em", textTransform: "uppercase", color: "#AFA9EC", marginBottom: 8 }}>Contact</p>
          <h2 style={{ fontSize: 22, fontWeight: 500, color: "#EEEDFE", marginBottom: 10 }}>Let's build something vivid.</h2>
          <p style={{ fontSize: 13, color: "#AFA9EC", lineHeight: 1.6, marginBottom: 28 }}>
            Tell us about your project and we'll get back to you within 24 hours — no sales pitch, just a straight conversation about what you need.
          </p>
          {[
            { icon: IconMail, text: "hello@vividdev.io" },
            { icon: IconWorld, text: "Available worldwide" },
            { icon: IconClock, text: "Response within 24 hours" },
          ].map(({ icon: Icon, text }) => (
            <div key={text} style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
              <Icon size={16} color="#7F77DD" />
              <span style={{ fontSize: 13, color: "#AFA9EC" }}>{text}</span>
            </div>
          ))}
        </div>

        <div style={{ background: "#EEEDFE", borderRadius: 12, padding: "22px 20px" }}>
          {sent ? (
            <div style={{ textAlign: "center", padding: "32px 0" }}>
              <p style={{ fontSize: 20, marginBottom: 10 }}>✓</p>
              <p style={{ fontSize: 14, fontWeight: 500, color: "#26215C", marginBottom: 6 }}>Message sent!</p>
              <p style={{ fontSize: 12, color: "#5F5E5A" }}>We'll be in touch within 24 hours.</p>
            </div>
          ) : (
            <>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginBottom: 10 }}>
                {[
                  { label: "Name", key: "name", placeholder: "Your name", type: "text" },
                  { label: "Email", key: "email", placeholder: "you@example.com", type: "email" },
                ].map((f) => (
                  <div key={f.key}>
                    <label style={{ fontSize: 11, fontWeight: 500, color: "#534AB7", display: "block", marginBottom: 5 }}>{f.label}</label>
                    <input
                      type={f.type}
                      placeholder={f.placeholder}
                      value={form[f.key as keyof typeof form]}
                      onChange={(e) => setForm({ ...form, [f.key]: e.target.value })}
                      style={{ width: "100%", background: "#fff", border: "0.5px solid #AFA9EC", borderRadius: 7, padding: "9px 12px", fontSize: 13, color: "#26215C" }}
                    />
                  </div>
                ))}
              </div>
              <div style={{ marginBottom: 10 }}>
                <label style={{ fontSize: 11, fontWeight: 500, color: "#534AB7", display: "block", marginBottom: 5 }}>Project type</label>
                <select value={form.type} onChange={(e) => setForm({ ...form, type: e.target.value })} style={{ width: "100%", background: "#fff", border: "0.5px solid #AFA9EC", borderRadius: 7, padding: "9px 12px", fontSize: 13, color: "#26215C" }}>
                  <option>Landing page — $999</option>
                  <option>Multi-page site — $2,999</option>
                  <option>Web app — from $6,500</option>
                  <option>Not sure yet</option>
                </select>
              </div>
              <div style={{ marginBottom: 10 }}>
                <label style={{ fontSize: 11, fontWeight: 500, color: "#534AB7", display: "block", marginBottom: 5 }}>Tell us about your project</label>
                <textarea
                  placeholder="What are you building? Any timeline or budget in mind?"
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  style={{ width: "100%", background: "#fff", border: "0.5px solid #AFA9EC", borderRadius: 7, padding: "9px 12px", fontSize: 13, color: "#26215C", resize: "none", height: 80 }}
                />
              </div>
              <button onClick={handleSubmit} style={{ width: "100%", background: "#7F77DD", color: "#EEEDFE", border: "none", borderRadius: 7, padding: 11, fontSize: 13, fontWeight: 500, cursor: "pointer" }}>
                Send message →
              </button>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
