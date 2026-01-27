"use client";

import { motion } from "framer-motion";
import { FileText } from "lucide-react";

export default function Hero() {
  return (
    <section
      style={{
        minHeight: "65vh",
        paddingTop: "100px",   // space below navbar
        paddingLeft: "300px",  // moved content to the right
        paddingRight: "40px",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Hey I'm */}
        <p
          style={{
            color: "#9ca3af",
            marginBottom: "0px",
            lineHeight: "1",
          }}
        >
          Hey, I’m
        </p>

        {/* Name */}
        <h1
          style={{
            fontSize: "72px",
            fontWeight: 700,
            lineHeight: "1.05",
            marginTop: "4px",
            marginBottom: "16px",
            background: "linear-gradient(90deg,#e5e7eb,#94a3b8)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Pranavi Nerella
        </h1>

        {/* Role */}
        <p
          style={{
            color: "#cbd5e1",
            fontSize: "20px",
            marginBottom: "14px",
          }}
        >
          Data Analyst
        </p>

        {/* Short paragraph */}
        <p
          style={{
            color: "#9ca3af",
            maxWidth: "720px",
            lineHeight: "1.7",
            marginBottom: "28px",
          }}
        >
        Experienced in data analysis, reporting, and visualization across structured datasets.
Strong ability to convert complex data into meaningful insights for business use.
        </p>

        {/* Resume button */}
        <a
          href="/resume.pdf"
          target="_blank"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "10px",
            color: "#ffffff",
            border: "1px solid #334155",
            padding: "10px 20px",
            borderRadius: "8px",
            textDecoration: "none",
            fontSize: "14px",
          }}
        >
          <FileText size={18} />
          Resume
        </a>
      </motion.div>
    </section>
  );
}

