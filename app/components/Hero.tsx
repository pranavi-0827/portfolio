"use client";

import { motion } from "framer-motion";
import { FileText } from "lucide-react";
import { useEffect, useState } from "react";

export default function Hero() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return (
    <section
      style={{
        minHeight: isMobile ? "auto" : "100vh",
        paddingTop: isMobile ? "64px" : "100px",
        paddingLeft: "16px",
        paddingRight: "16px",
        maxWidth: "1100px",
        margin: "0 auto",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <p style={{ color: "#9ca3af", marginBottom: "4px" }}>
          Hey, I’m
        </p>

        <h1
          style={{
            fontSize: isMobile ? "32px" : "clamp(48px, 6vw, 72px)",
            lineHeight: "1.1",
            fontWeight: 700,
            marginBottom: "16px",
            background: "linear-gradient(90deg,#e5e7eb,#94a3b8)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Pranavi Nerella
        </h1>

        <p style={{ color: "#cbd5e1", fontSize: "18px", marginBottom: "16px" }}>
          Data Analyst
        </p>

        <p
          style={{
            color: "#9ca3af",
            maxWidth: "640px",
            lineHeight: "1.7",
            marginBottom: "24px",
          }}
        >
          Experienced in data analysis, reporting, and visualization across structured datasets.
          Strong ability to convert complex data into meaningful insights for business use.
        </p>

        <a
          href="/resume.pdf"
          target="_blank"
          style={{
                display: "inline-flex",
  alignItems: "center",
  justifyContent: isMobile ? "center" : "flex-start",
  gap: "10px",
  border: "1px solid #334155",
  padding: "10px 20px",
  borderRadius: "8px",
  color: "#fff",
  textDecoration: "none",

          }}
        >
          <FileText size={18} />
          Resume
        </a>
      </motion.div>
    </section>
  );
}
