"use client";
import { useState } from "react";
import { IconMenu2, IconX } from "@tabler/icons-react";

const links = ["Services", "Process", "Pricing", "About"];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <nav style={{ background: "#fff", borderBottom: "0.5px solid #E2E0F7", position: "sticky", top: 0, zIndex: 50 }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 28px", height: 56, display: "flex", alignItems: "center" }}>
        {/* Logo */}
        <a href="#" style={{ display: "flex", alignItems: "center", gap: 8, textDecoration: "none" }}>
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="28" height="28" rx="7" fill="#7F77DD" />
            <polyline points="5,7 14,21 23,7" fill="none" stroke="#EEEDFE" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            <polyline points="9.5,14 14,21 18.5,14" fill="none" stroke="#AFA9EC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="14" cy="21" r="2" fill="#EEEDFE" />
          </svg>
          <span style={{ fontSize: 15, fontWeight: 500, color: "#26215C", letterSpacing: "-0.01em" }}>
            Vivid<span style={{ color: "#7F77DD" }}>Dev</span>
          </span>
        </a>

        {/* Desktop links */}
        <div style={{ display: "flex", gap: 24, marginLeft: "auto", alignItems: "center" }} className="desktop-nav">
          {links.map((l) => (
            <a key={l} href={`#${l.toLowerCase()}`} style={{ fontSize: 13, color: "#5F5E5A", textDecoration: "none" }}>{l}</a>
          ))}
          <a href="#contact" style={{ fontSize: 12, fontWeight: 500, background: "#7F77DD", color: "#EEEDFE", padding: "8px 18px", borderRadius: 6, textDecoration: "none" }}>
            Start a project
          </a>
        </div>

        {/* Mobile menu button */}
        <button onClick={() => setOpen(!open)} style={{ marginLeft: "auto", background: "none", border: "none", cursor: "pointer", color: "#26215C", display: "none" }} className="mobile-menu-btn">
          {open ? <IconX size={22} /> : <IconMenu2 size={22} />}
        </button>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div style={{ background: "#fff", borderTop: "0.5px solid #E2E0F7", padding: "16px 28px", display: "flex", flexDirection: "column", gap: 16 }}>
          {links.map((l) => (
            <a key={l} href={`#${l.toLowerCase()}`} onClick={() => setOpen(false)} style={{ fontSize: 14, color: "#26215C", textDecoration: "none" }}>{l}</a>
          ))}
          <a href="#contact" onClick={() => setOpen(false)} style={{ fontSize: 13, fontWeight: 500, background: "#7F77DD", color: "#EEEDFE", padding: "10px 18px", borderRadius: 6, textDecoration: "none", textAlign: "center" }}>
            Start a project
          </a>
        </div>
      )}

      <style>{`
        @media (max-width: 680px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: block !important; }
        }
      `}</style>
    </nav>
  );
}
