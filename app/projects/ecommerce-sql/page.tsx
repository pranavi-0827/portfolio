"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Section from "@/app/components/Section";

export default function EcommerceSQLProject() {
  const [activeImage, setActiveImage] = useState<string | null>(null);

  // Close lightbox with ESC
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveImage(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      <Section title="E-commerce Sales Analytics using SQL">
        {/* ONE-LINE SUMMARY */}
        <p style={styles.lead}>
          Analyzed multi-year e-commerce transactional data using PostgreSQL to
          uncover revenue trends, customer behavior, retention, and profitability.
        </p>

        {/* TECH STACK */}
        <div style={styles.techRow}>
          {[
            "PostgreSQL",
            "SQL (CTEs & Window Functions)",
            "Data Modeling",
            "Analytics",
            "GitHub",
          ].map((tech) => (
            <span key={tech} style={styles.techChip}>
              {tech}
            </span>
          ))}
        </div>

        {/* PROBLEM */}
        <h3>Business Problem</h3>
        <p style={styles.text}>
          The business had raw transactional data but lacked clear visibility into
          revenue performance, customer concentration, repeat behavior, and
          profitability across products and categories.
        </p>

        {/* APPROACH */}
        <h3 style={{ marginTop: 32 }}>Approach</h3>
        <ul style={styles.list}>
          <li>Modeled raw data into clean analytical tables</li>
          <li>Used CTEs, aggregations, and window functions</li>
          <li>Focused on business-driven questions and outcomes</li>
        </ul>

        {/* SNAPSHOTS */}
        <h3 style={{ marginTop: 40 }}>Key Analysis Snapshots</h3>
        <p style={styles.subtle}>
          Representative outputs from the SQL analysis. Click any image to view
          details.
        </p>

        <div style={styles.imageGrid}>
          <ImageCard
            title="Monthly Revenue Trend"
            desc="Reveals seasonal patterns using month-over-month aggregation."
            src="/projects/ecommerce/monthly_revenue.png"
            onClick={setActiveImage}
          />
          <ImageCard
            title="Top Customers by Revenue"
            desc="Shows revenue concentration among a small customer segment."
            src="/projects/ecommerce/top_customers.png"
            onClick={setActiveImage}
          />
          <ImageCard
            title="Profit by Category"
            desc="Highlights categories with high sales but lower margins."
            src="/projects/ecommerce/profit_by_category.png"
            onClick={setActiveImage}
          />
        </div>

        {/* INSIGHTS */}
        <h3 style={{ marginTop: 40 }}>Key Insights</h3>
        <ul style={styles.list}>
          <li>Revenue exhibits clear seasonal month-to-month variation</li>
          <li>A small set of customers contributes a large share of revenue</li>
          <li>Repeat customers represent strong retention opportunities</li>
          <li>Some high-sales categories underperform on profit</li>
        </ul>

        {/* CTA */}
        <div style={{ marginTop: 36 }}>
          <a
            href="https://github.com/pranavi-0827/sql-ecommerce-analytics"
            target="_blank"
            style={styles.githubBtn}
          >
            View Full SQL Analysis on GitHub →
          </a>
        </div>
      </Section>

      {/* LIGHTBOX */}
      {activeImage && (
        <div style={styles.lightbox} onClick={() => setActiveImage(null)}>
          <Image
            src={activeImage}
            alt="Expanded analysis"
            width={1400}
            height={900}
            style={styles.lightboxImage}
          />
          <span style={styles.close}>×</span>
        </div>
      )}
    </>
  );
}

/* ---------- Image Card ---------- */
function ImageCard({
  title,
  desc,
  src,
  onClick,
}: {
  title: string;
  desc: string;
  src: string;
  onClick: (src: string) => void;
}) {
  return (
    <div style={styles.card}>
      <div style={styles.imageWrapper}>
        <Image
          src={src}
          alt={title}
          width={700}
          height={420}
          style={styles.cardImage}
          onClick={() => onClick(src)}
        />
      </div>
      <h4 style={{ marginTop: 12 }}>{title}</h4>
      <p style={styles.subtle}>{desc}</p>
    </div>
  );
}

/* ---------- Styles ---------- */
const styles: any = {
  lead: {
    fontSize: "18px",
    lineHeight: "1.7",
    maxWidth: "760px",
    marginBottom: "24px",
    color: "#d1d5db",
  },
  subtle: {
    color: "#9ca3af",
    fontSize: "14px",
    maxWidth: "720px",
  },
  techRow: {
    display: "flex",
    flexWrap: "wrap",
    gap: "10px",
    marginBottom: "32px",
  },
  techChip: {
    padding: "8px 14px",
    borderRadius: "999px",
    fontSize: "14px",
    fontWeight: 600,
    border: "1px solid rgba(255,255,255,0.12)",
    background: "rgba(255,255,255,0.06)",
  },
  text: {
    color: "#d1d5db",
    lineHeight: 1.7,
    maxWidth: "760px",
  },
  list: {
    paddingLeft: 18,
    lineHeight: 1.8,
  },
  imageGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "24px",
    marginTop: "24px",
  },
  card: {
    background: "rgba(255,255,255,0.04)",
    border: "1px solid rgba(255,255,255,0.08)",
    borderRadius: "14px",
    padding: "16px",
  },
  imageWrapper: {
    overflow: "hidden",
    borderRadius: "12px",
  },
  cardImage: {
    width: "100%",
    height: "auto",
    cursor: "zoom-in",
  },
  githubBtn: {
    display: "inline-block",
    padding: "12px 20px",
    borderRadius: "10px",
    border: "1px solid rgba(255,255,255,0.2)",
    fontWeight: 600,
    textDecoration: "none",
  },
  lightbox: {
    position: "fixed",
    inset: 0,
    background: "rgba(0,0,0,0.85)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 999,
    padding: "24px",
  },
  lightboxImage: {
    maxWidth: "95%",
    maxHeight: "90%",
    borderRadius: "14px",
  },
  close: {
    position: "absolute",
    top: "24px",
    right: "32px",
    fontSize: "36px",
    color: "#fff",
    cursor: "pointer",
  },
};
