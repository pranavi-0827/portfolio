"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Section from "@/app/components/Section";

export default function RetailAnalyticsCaseStudy() {
  const [activeImage, setActiveImage] = useState<string | null>(null);

  // Close image popup with ESC
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveImage(null);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  return (
    <>
      <Section title="Retail Sales Analytics – Cloud BI Case Study">
        {/* EXECUTIVE SUMMARY */}
        <p style={styles.summary}>
          Delivered an executive-level retail analytics dashboard using AWS Athena
          and Power BI by transforming raw transactional data into a curated
          analytics model. The solution enables stakeholders to monitor revenue
          growth, customer behavior, and geographic performance through a single,
          reliable view.
        </p>

        {/* KPI STRIP */}
        <div style={styles.kpiRow}>
          <Kpi label="Total Revenue" value="$10.45M" />
          <Kpi label="Total Orders" value="20K+" />
          <Kpi label="Unique Customers" value="4K+" />
          <Kpi label="Avg Order Value" value="$523" />
        </div>

        {/* BUSINESS PROBLEM */}
        <h3>Business Problem</h3>
        <p style={styles.text}>
          Retail sales data existed only at the raw invoice level, making it
          difficult for leadership to understand overall revenue performance,
          identify key markets, evaluate customer repeat behavior, and track core
          KPIs consistently across teams.
        </p>

        {/* APPROACH */}
        <h3 style={{ marginTop: 32 }}>Approach</h3>
        <ul style={styles.list}>
          <li>Stored raw transactional data in Amazon S3</li>
          <li>Cataloged schemas and metadata using AWS Glue</li>
          <li>Created curated analytics tables using SQL in Amazon Athena</li>
          <li>Built KPI measures and calculations using DAX in Power BI</li>
          <li>Designed a single-page executive dashboard focused on clarity</li>
        </ul>

        {/* ANALYSIS VIEWS */}
        <h3 style={{ marginTop: 40 }}>Analysis Views</h3>
        <p style={styles.subtle}>
          Representative views from the analytics dashboard. Click any visual to
          inspect it in detail.
        </p>

        <div style={styles.imageGrid}>
          <VisualCard
            title="Executive Dashboard Overview"
            desc="Consolidated KPIs, revenue trends, and customer behavior."
            src="/projects/retail_analytics/dashboard_overview.png"
            onClick={setActiveImage}
          />
          <VisualCard
            title="Monthly Revenue Trend"
            desc="Highlights sustained growth and seasonal revenue patterns."
            src="/projects/retail_analytics/revenue_trend.png"
            onClick={setActiveImage}
          />
          <VisualCard
            title="Revenue by Country"
            desc="Shows geographic concentration and dependency on top markets."
            src="/projects/retail_analytics/country_revenue.png"
            onClick={setActiveImage}
          />
        </div>

        {/* KEY INSIGHTS */}
        <h3 style={{ marginTop: 40 }}>Key Insights</h3>
        <div style={styles.insightBox}>
          Revenue demonstrates a steady upward trend with seasonal variation,
          indicating consistent business growth.
        </div>
        <div style={styles.insightBox}>
          The United Kingdom contributes the majority of total revenue, highlighting
          strong market dominance but also geographic concentration risk.
        </div>
        <div style={styles.insightBox}>
          Most customers place one to three orders, while a smaller group of repeat
          customers generates a disproportionate share of revenue.
        </div>
        <div style={styles.insightBox}>
          Average order value remains stable, suggesting consistent pricing and
          purchasing behavior.
        </div>

        {/* BUSINESS IMPACT */}
        <h3 style={{ marginTop: 40 }}>Business Impact</h3>
        <ul style={styles.list}>
          <li>Enabled leadership to track KPIs through a single source of truth</li>
          <li>Improved visibility into revenue drivers and market concentration</li>
          <li>Supported data-driven decisions around customer retention</li>
          <li>Reduced manual reporting and ad-hoc analysis effort</li>
        </ul>

        {/* TECH STACK */}
        <h3 style={{ marginTop: 40 }}>Tech Stack</h3>
        <div style={styles.techRow}>
          {[
            "AWS S3",
            "AWS Glue",
            "Amazon Athena (SQL)",
            "Power BI",
            "DAX",
            "Data Modeling",
            "GitHub",
          ].map((tech) => (
            <span key={tech} style={styles.techChip}>
              {tech}
            </span>
          ))}
        </div>

        {/* CTA */}
        <div style={{ marginTop: 48 }}>
          <a
            href="https://github.com/pranavi-0827/retail-sales-analytics-dashboard"
            target="_blank"
            style={styles.cta}
          >
            View Technical Implementation on GitHub →
          </a>
        </div>
      </Section>

      {/* IMAGE POPUP */}
      {activeImage && (
        <div style={styles.lightbox} onClick={() => setActiveImage(null)}>
          <Image
            src={activeImage}
            alt="Expanded analysis view"
            width={1600}
            height={1000}
            style={styles.lightboxImage}
          />
          <span style={styles.close}>×</span>
        </div>
      )}
    </>
  );
}

/* ---------- Components ---------- */

function Kpi({ label, value }: { label: string; value: string }) {
  return (
    <div style={styles.kpi}>
      <div style={styles.kpiValue}>{value}</div>
      <div style={styles.kpiLabel}>{label}</div>
    </div>
  );
}

function VisualCard({
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
    <div style={styles.visualCard}>
      <div style={styles.imageFrame} onClick={() => onClick(src)}>
        <Image src={src} alt={title} fill style={styles.cardImage} />
      </div>
      <h4 style={{ marginTop: 12 }}>{title}</h4>
      <p style={styles.subtle}>{desc}</p>
    </div>
  );
}

/* ---------- Styles ---------- */

const styles: any = {
  summary: {
    maxWidth: 860,
    fontSize: 18,
    lineHeight: 1.7,
    color: "#d1d5db",
  },
  text: {
    maxWidth: 820,
    lineHeight: 1.7,
    color: "#d1d5db",
  },
  subtle: {
    color: "#9ca3af",
    fontSize: 14,
    maxWidth: 720,
  },
  kpiRow: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
    gap: 20,
    margin: "32px 0",
  },
  kpi: {
    padding: 16,
    borderRadius: 12,
    background: "rgba(255,255,255,0.05)",
    border: "1px solid rgba(255,255,255,0.08)",
  },
  kpiValue: { fontSize: 24, fontWeight: 700 },
  kpiLabel: { fontSize: 13, color: "#9ca3af" },
  imageGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: 28,
    marginTop: 24,
  },
  visualCard: {
    background: "rgba(255,255,255,0.04)",
    border: "1px solid rgba(255,255,255,0.08)",
    borderRadius: 14,
    padding: 16,
  },
  imageFrame: {
    position: "relative",
    width: "100%",
    aspectRatio: "16 / 9",
    borderRadius: 12,
    overflow: "hidden",
    background: "rgba(0,0,0,0.35)",
    cursor: "zoom-in",
  },
  cardImage: {
    objectFit: "contain",
    padding: "8px",
  },
  list: {
    paddingLeft: 18,
    lineHeight: 1.8,
    maxWidth: 820,
  },
  insightBox: {
    background: "rgba(59,130,246,0.15)",
    padding: 14,
    borderRadius: 10,
    marginBottom: 12,
    maxWidth: 820,
  },
  techRow: {
    display: "flex",
    flexWrap: "wrap",
    gap: 10,
    marginTop: 12,
  },
  techChip: {
    padding: "8px 14px",
    borderRadius: "999px",
    fontSize: 14,
    fontWeight: 600,
    border: "1px solid rgba(255,255,255,0.12)",
    background: "rgba(255,255,255,0.06)",
  },
  cta: {
    display: "inline-block",
    padding: "14px 22px",
    borderRadius: 12,
    border: "1px solid rgba(255,255,255,0.25)",
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
    padding: 24,
  },
  lightboxImage: {
    maxWidth: "95%",
    maxHeight: "90%",
    borderRadius: 16,
  },
  close: {
    position: "absolute",
    top: 24,
    right: 32,
    fontSize: 36,
    color: "#fff",
    cursor: "pointer",
  },
};
