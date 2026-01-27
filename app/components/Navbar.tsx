"use client";

import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        width: "100%",
        zIndex: 50,
        background: scrolled ? "rgba(0,0,0,0.25)" : "transparent",
        backdropFilter: scrolled ? "blur(10px)" : "none",
        transition: "all 0.3s ease",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "18px 40px",
          display: "flex",
          alignItems: "center",
        }}
      >
        {/* Left */}
        <div style={{ flex: 1 }}>
          <span style={{ color: "white", fontWeight: 600 }}>
            Portfolio
          </span>
        </div>

        {/* Right */}
        <div
          style={{
            display: "flex",
            gap: "40px",   // ✅ THIS fixes AboutProjectsSkillsContact
          }}
        >
          <a href="/#about" style={linkStyle}>About</a>
          <a href="/#projects" style={linkStyle}>Projects</a>
          <a href="/#skills" style={linkStyle}>Skills</a>
          <a href="/#education" style={linkStyle}>Education</a>
          <a href="/#certifications" style={linkStyle}>Certifications</a>
          <a href="/#contact" style={linkStyle}>Contact</a>
          
        </div>
      </div>
    </nav>
  );
}

const linkStyle = {
  color: "#cbd5e1",
  textDecoration: "none",
  fontSize: "14px",
  transition: "color 0.2s ease",
};
