"use client";
import { useState, useRef, useEffect } from "react";
import { IconX, IconSend, IconMessageCircle, IconLoader2 } from "@tabler/icons-react";

interface Message {
  role: "user" | "assistant";
  content: string;
}

const SYSTEM_PROMPT = `You are Vivid, VividDev Studio's friendly AI assistant. VividDev is a two-person web development studio run by Mira (full-stack engineer, US-based) and Rami (frontend & design, Lebanon-based).

SERVICES & PRICING:
- Landing page: $999 one-time (1–2 weeks)
- Multi-page site: $2,999 one-time (3–5 weeks)
- Web app: from $6,500 (6–12 weeks)
- AI chatbot basic: $1,500 one-time
- AI chatbot advanced: $2,500–$3,500 one-time
- Monthly retainer: $650/mo
- AI maintenance: $150/mo
- Payment plan: 50% upfront, 50% on delivery

TECH STACK: Next.js, TypeScript, React, Supabase, Stripe, Figma-to-code

YOUR JOB:
1. Greet the user warmly and ask what they're looking to build
2. Ask qualifying questions naturally to understand their project:
   - What type of project would you like to build? (landing page, site, web app, AI chatbot)
   - What does their business do?
   - Do they have existing branding/design?
   - What's their rough budget?
   - What's their timeline?
   - Are they the decision maker?
   - Have they built a website before?
3. Recommend the right service tier based on their answers
4. Answer any questions about VividDev's services, pricing, or process
5. When you have enough info, encourage them to fill out the contact form or book a discovery call

TONE: Friendly, professional, concise. Never pushy. Max 2-3 sentences per response.

When the conversation has enough project info (at least: project type, business description, and budget range), end your response with exactly this tag on a new line:
[READY_TO_COLLECT]`;

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "Hey! I'm Vivid, VividDev's AI assistant 👋 Are you looking to build a website or web app? I can help figure out what you need and get you connected with Mira and Rami. What are you looking to build?",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [collected, setCollected] = useState(false);
  const [leadForm, setLeadForm] = useState({ name: "", email: "" });
  const [submitted, setSubmitted] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, open]);

  const sendMessage = async () => {
    if (!input.trim() || loading) return;
    const userMessage = input.trim();
    setInput("");
    const newMessages: Message[] = [...messages, { role: "user", content: userMessage }];
    setMessages(newMessages);
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: newMessages,
          systemPrompt: SYSTEM_PROMPT,
        }),
      });
      const data = await res.json();
      const reply: string = data.reply || "Sorry, I had trouble responding. Please email us at hello@vividdev.io";
      const cleanReply = reply.replace("[READY_TO_COLLECT]", "").trim();
      setMessages([...newMessages, { role: "assistant", content: cleanReply }]);
      if (reply.includes("[READY_TO_COLLECT]")) setCollected(true);
    } catch {
      setMessages([...newMessages, { role: "assistant", content: "Something went wrong. Please email us at hello@vividdev.io" }]);
    } finally {
      setLoading(false);
    }
  };

  const submitLead = async () => {
    if (!leadForm.name || !leadForm.email) {
      alert("Please enter your name and email.");
      return;
    }
    setLoading(true);
    try {
      await fetch("/api/chat-lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: leadForm.name,
          email: leadForm.email,
          messages,
        }),
      });
      setSubmitted(true);
    } catch {
      alert("Something went wrong. Please email us at hello@vividdev.io");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Chat bubble */}
      <button
        onClick={() => setOpen(!open)}
        style={{
          position: "fixed", bottom: 24, right: 24, zIndex: 1000,
          width: 56, height: 56, borderRadius: "50%",
          background: "#3D2E8F", border: "none", cursor: "pointer",
          display: "flex", alignItems: "center", justifyContent: "center",
          boxShadow: "0 4px 24px rgba(61,46,143,0.4)",
          transition: "transform 0.2s",
        }}
        onMouseEnter={e => (e.currentTarget.style.transform = "scale(1.08)")}
        onMouseLeave={e => (e.currentTarget.style.transform = "scale(1)")}
      >
        {open ? <IconX size={22} color="#E8E4FF" /> : <IconMessageCircle size={22} color="#E8E4FF" />}
      </button>

      {/* Chat window */}
      {open && (
        <div style={{
          position: "fixed", bottom: 92, right: 24, zIndex: 999,
          width: 360, maxHeight: 520,
          background: "#fff", borderRadius: 16,
          boxShadow: "0 8px 48px rgba(61,46,143,0.18)",
          display: "flex", flexDirection: "column",
          border: "0.5px solid #D8D6EE",
          overflow: "hidden",
        }}>
          {/* Header */}
          <div style={{ background: "#3D2E8F", padding: "14px 18px", display: "flex", alignItems: "center", gap: 10 }}>
            <div style={{ width: 32, height: 32, borderRadius: "50%", background: "#5B4FCF", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <svg width="16" height="16" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                <polyline points="3,5 13,18 23,5" stroke="#E8E4FF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                <polyline points="8,11.5 13,18 18,11.5" stroke="#8B7ED4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                <circle cx="13" cy="18" r="2" fill="#E8E4FF" />
              </svg>
            </div>
            <div>
              <p style={{ fontSize: 13, fontWeight: 500, color: "#E8E4FF", margin: 0 }}>Vivid</p>
              <p style={{ fontSize: 11, color: "#8B7ED4", margin: 0 }}>VividDev AI Assistant</p>
            </div>
            <div style={{ marginLeft: "auto", width: 8, height: 8, borderRadius: "50%", background: "#4ADE80" }} />
          </div>

          {/* Messages */}
          <div style={{ flex: 1, overflowY: "auto", padding: "16px 14px", display: "flex", flexDirection: "column", gap: 10, minHeight: 0, maxHeight: 320 }}>
            {messages.map((m, i) => (
              <div key={i} style={{ display: "flex", justifyContent: m.role === "user" ? "flex-end" : "flex-start" }}>
                <div style={{
                  maxWidth: "80%", padding: "9px 12px", borderRadius: m.role === "user" ? "12px 12px 2px 12px" : "12px 12px 12px 2px",
                  background: m.role === "user" ? "#3D2E8F" : "#F0EFF8",
                  color: m.role === "user" ? "#E8E4FF" : "#1A1540",
                  fontSize: 13, lineHeight: 1.5,
                }}>
                  {m.content}
                </div>
              </div>
            ))}
            {loading && (
              <div style={{ display: "flex", justifyContent: "flex-start" }}>
                <div style={{ background: "#F0EFF8", padding: "9px 12px", borderRadius: "12px 12px 12px 2px", display: "flex", gap: 4, alignItems: "center" }}>
                  <IconLoader2 size={14} color="#3D2E8F" style={{ animation: "spin 1s linear infinite" }} />
                  <span style={{ fontSize: 12, color: "#8B7ED4" }}>Vivid is typing...</span>
                </div>
              </div>
            )}

            {/* Lead collection form */}
            {collected && !submitted && (
              <div style={{ background: "#E8E4FF", borderRadius: 12, padding: "14px 12px", marginTop: 4 }}>
                <p style={{ fontSize: 12, fontWeight: 500, color: "#1A1540", marginBottom: 10 }}>
                  Great — let me send your project details to Mira and Rami! Drop your info below:
                </p>
                <input
                  placeholder="Your name"
                  value={leadForm.name}
                  onChange={e => setLeadForm({ ...leadForm, name: e.target.value })}
                  style={{ width: "100%", padding: "8px 10px", borderRadius: 7, border: "0.5px solid #8B7ED4", fontSize: 12, color: "#1A1540", marginBottom: 8, background: "#fff" }}
                />
                <input
                  placeholder="Your email"
                  value={leadForm.email}
                  onChange={e => setLeadForm({ ...leadForm, email: e.target.value })}
                  style={{ width: "100%", padding: "8px 10px", borderRadius: 7, border: "0.5px solid #8B7ED4", fontSize: 12, color: "#1A1540", marginBottom: 10, background: "#fff" }}
                />
                <button
                  onClick={submitLead}
                  disabled={loading}
                  style={{ width: "100%", background: "#3D2E8F", color: "#E8E4FF", border: "none", borderRadius: 7, padding: "9px", fontSize: 12, fontWeight: 500, cursor: "pointer" }}
                >
                  {loading ? "Sending..." : "Send my project details →"}
                </button>
              </div>
            )}

            {submitted && (
              <div style={{ background: "#E8E4FF", borderRadius: 12, padding: "14px 12px", textAlign: "center" }}>
                <p style={{ fontSize: 13, fontWeight: 500, color: "#1A1540", marginBottom: 4 }}>✓ Details sent!</p>
                <p style={{ fontSize: 12, color: "#5F5E5A" }}>Mira or Rami will reach out within 24 hours.</p>
              </div>
            )}

            <div ref={bottomRef} />
          </div>

          {/* Input */}
          {!submitted && (
            <div style={{ padding: "10px 12px", borderTop: "0.5px solid #D8D6EE", display: "flex", gap: 8 }}>
              <input
                value={input}
                onChange={e => setInput(e.target.value)}
                onKeyDown={e => e.key === "Enter" && sendMessage()}
                placeholder="Message Vivid..."
                style={{ flex: 1, padding: "9px 12px", borderRadius: 8, border: "0.5px solid #D8D6EE", fontSize: 13, color: "#1A1540", outline: "none" }}
              />
              <button
                onClick={sendMessage}
                disabled={loading || !input.trim()}
                style={{ background: "#3D2E8F", border: "none", borderRadius: 8, width: 36, height: 36, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", flexShrink: 0 }}
              >
                <IconSend size={16} color="#E8E4FF" />
              </button>
            </div>
          )}
        </div>
      )}

      <style>{`
        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
      `}</style>
    </>
  );
}