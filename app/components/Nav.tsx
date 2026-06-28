"use client";
import { useState } from "react";
import { IconMenu2, IconX } from "@tabler/icons-react";

const links = ["Services", "Process", "Pricing", "About"];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <nav style={{ background: "#fff", borderBottom: "0.5px solid #D8D6EE", position: "sticky", top: 0, zIndex: 50 }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 28px", height: 56, display: "flex", alignItems: "center" }}>
        {/* Logo */}
        <a href="#" style={{ display: "flex", alignItems: "center", gap: 8, textDecoration: "none" }}>
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="28" height="28" rx="7" fill="#3D2E8F" />
            <polyline points="5,7 14,21 23,7" fill="none" stroke="#E8E4FF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            <polyline points="9.5,14 14,21 18.5,14" fill="none" stroke="#8B7ED4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="14" cy="21" r="2" fill="#E8E4FF" />
          </svg>
          <span style={{ fontSize: 15, fontWeight: 500, color: "#1A1540", letterSpacing: "-0.01em" }}>
            Vivid<span style={{ color: "#3D2E8F" }}>Dev</span>
          </span>
        </a>

        {/* Desktop links */}
        <div style={{ display: "flex", gap: 24, marginLeft: "auto", alignItems: "center" }} className="desktop-nav">
          {links.map((l) => (
            <a key={l} href={`#${l.toLowerCase()}`} style={{ fontSize: 13, color: "#5F5E5A", textDecoration: "none" }}>{l}</a>
          ))}
          <a href="#contact" style={{ fontSize: 12, fontWeight: 500, background: "#3D2E8F", color: "#E8E4FF", padding: "8px 18px", borderRadius: 6, textDecoration: "none" }}>
            Start a project
          </a>
        </div>

        {/* Mobile menu button */}
        <button onClick={() => setOpen(!open)} style={{ marginLeft: "auto", background: "none", border: "none", cursor: "pointer", color: "#1A1540", display: "none" }} className="mobile-menu-btn">
          {open ? <IconX size={22} /> : <IconMenu2 size={22} />}
        </button>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div style={{ background: "#fff", borderTop: "0.5px solid #D8D6EE", padding: "16px 28px", display: "flex", flexDirection: "column", gap: 16 }}>
          {links.map((l) => (
            <a key={l} href={`#${l.toLowerCase()}`} onClick={() => setOpen(false)} style={{ fontSize: 14, color: "#1A1540", textDecoration: "none" }}>{l}</a>
          ))}
          <a href="#contact" onClick={() => setOpen(false)} style={{ fontSize: 13, fontWeight: 500, background: "#3D2E8F", color: "#E8E4FF", padding: "10px 18px", borderRadius: 6, textDecoration: "none", textAlign: "center" }}>
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
