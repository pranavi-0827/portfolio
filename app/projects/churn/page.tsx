"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Section from "@/app/components/Section";

export default function ChurnProject() {
  const [activeImage, setActiveImage] = useState<string | null>(null);

  // Close on ESC
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveImage(null);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  return (
    <>
      <Section title="Customer Churn Analysis & Retention Dashboard">
        {/* TECH STACK */}
        <div style={styles.techRow}>
          {[
            "Power BI",
            "DAX",
            "Excel / CSV",
            "SQL (Conceptual)",
            "Customer Segmentation",
            "Data Modeling",
            "GitHub",
          ].map((tech) => (
            <span key={tech} style={styles.techChip}>
              {tech}
            </span>
          ))}
        </div>

        {/* PROBLEM + APPROACH */}
        <div style={styles.twoCol}>
          <div>
            <h3>Problem Statement</h3>
            <p>
              Customer churn was negatively impacting recurring revenue while
              the business lacked clarity on which customer segments were most
              at risk and why churn was occurring.
            </p>
          </div>

          <div>
            <h3>Analysis Approach</h3>
            <ul>
              <li>Defined churn KPIs and revenue impact metrics</li>
              <li>Segmented customers by tenure, contract, and payment method</li>
              <li>Identified high-risk customers using churn behavior patterns</li>
              <li>Built executive-ready Power BI dashboards</li>
            </ul>
          </div>
        </div>

        {/* DASHBOARDS */}
        <h3 style={{ marginTop: "48px" }}>Dashboard Highlights</h3>

        <div style={styles.cardGrid}>
          <DashboardCard
            title="Customer Churn Overview"
            img="/projects/churn/overview.png"
            onClick={setActiveImage}
          />
          <DashboardCard
            title="Churn Drivers Analysis"
            img="/projects/churn/drivers.png"
            onClick={setActiveImage}
          />
          <DashboardCard
            title="Customer Risk Segmentation"
            img="/projects/churn/risk.png"
            onClick={setActiveImage}
          />
        </div>

        {/* INSIGHTS */}
        <h3 style={{ marginTop: "56px" }}>Key Insights & Business Impact</h3>
        <ul>
          <li>Month-to-month contracts show the highest churn rates</li>
          <li>Early-tenure customers (0–6 months) are most vulnerable</li>
          <li>Electronic check users churn more frequently</li>
          <li>
            Targeted retention strategies can significantly reduce churn and
            protect recurring revenue
          </li>
        </ul>

        {/* GITHUB BUTTON */}
        <div style={{ marginTop: "40px" }}>
          <a
            href="https://github.com/pranavi-0827/customer-churn-analysis"
            target="_blank"
            style={styles.githubBtn}
          >
            View Project on GitHub →
          </a>
        </div>
      </Section>

      {/* LIGHTBOX */}
      {activeImage && (
        <div style={styles.lightbox} onClick={() => setActiveImage(null)}>
          <Image
            src={activeImage}
            alt="Expanded dashboard"
            width={1400}
            height={800}
            style={styles.lightboxImage}
          />
          <span style={styles.close}>×</span>
        </div>
      )}
    </>
  );
}

/* ---------- Components ---------- */

function DashboardCard({
  title,
  img,
  onClick,
}: {
  title: string;
  img: string;
  onClick: (img: string) => void;
}) {
  return (
    <div style={styles.card}>
      <div style={styles.imageWrapper}>
        <Image
          src={img}
          alt={title}
          width={800}
          height={450}
          style={styles.cardImage}
          onClick={() => onClick(img)}
        />
      </div>
      <p style={{ marginTop: "12px", fontWeight: 500 }}>{title}</p>
    </div>
  );
}

/* ---------- Styles ---------- */

const styles: any = {
  techRow: {
    display: "flex",
    flexWrap: "wrap",
    gap: "10px",
    marginBottom: "32px",
  },
  techChip: {
    padding: "8px 14px",
    fontSize: "14px",
    fontWeight: 600,
    background: "rgba(255,255,255,0.06)",
    border: "1px solid rgba(255,255,255,0.12)",
    borderRadius: "999px",
  },
  twoCol: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "48px",
    marginTop: "24px",
  },
  cardGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
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
    transition: "transform 0.3s ease",
  },
  githubBtn: {
    display: "inline-block",
    padding: "12px 20px",
    borderRadius: "10px",
    border: "1px solid rgba(255,255,255,0.2)",
    fontWeight: 600,
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
