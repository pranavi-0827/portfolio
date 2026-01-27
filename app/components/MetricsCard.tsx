"use client";

import { motion } from "framer-motion";

export default function MetricsCard({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      whileHover={{ y: -6 }}
      style={{
        background: "rgba(255,255,255,0.04)",
        border: "1px solid rgba(255,255,255,0.08)",
        borderRadius: "14px",
        padding: "22px",
        minWidth: "200px",
        textAlign: "center",
      }}
    >
      <div
        style={{
          fontSize: "34px",
          fontWeight: 700,
          color: "#e5e7eb",
          marginBottom: "8px",
        }}
      >
        {value}
      </div>

      <div
        style={{
          fontSize: "14px",
          color: "#9ca3af",
          letterSpacing: "0.04em",
        }}
      >
        {label}
      </div>
    </motion.div>
  );
}
