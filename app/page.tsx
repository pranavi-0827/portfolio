import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Section from "./components/Section";
import SkillItem from "./components/SkillItem";
import SkillCategory from "./components/SkillCategory";
import { Mail, Linkedin, Github, FileText } from "lucide-react";
import type { CSSProperties } from "react";

export default function Home() {
  return (
    <>
      <Navbar />

      {/* HERO */}
      <Hero />

      {/* ABOUT */}
      <Section id="about" title="About">
        <div
          style={{
            display: "flex",
            gap: "48px",
            alignItems: "flex-start",
            marginTop: "32px",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          {/* IMAGE */}
          <div style={{ flexShrink: 0 }}>
            <img
              src="/images/profile.png"
              alt="Pranavi Nerella"
              style={{
                width: "200px",
                height: "230px",
                objectFit: "cover",
                borderRadius: "12px",
                border: "1px solid rgba(255,255,255,0.15)",
              }}
            />
          </div>

          {/* CONTENT */}
          <div
            style={{
              
    maxWidth: "560px",
    marginLeft: "0px",
    color: "#d1d5db",
    lineHeight: "1.7",
    textAlign: "left",
            }}
          >
            <p>
              I am a Data Analyst with a strong foundation in data analysis,
              reporting, and visualization, focused on transforming data into
              insights that support informed business decisions.
            </p>

            <p>
              I have hands-on experience working with structured datasets using
              Python, SQL, Excel, and Power BI to perform data cleaning,
              exploratory analysis, and build meaningful reports and dashboards.
            </p>

            <p>
              I am comfortable analyzing trends, identifying patterns, and
              validating data accuracy to ensure reliable outcomes while
              maintaining data quality.
            </p>

            <p>
              I enjoy collaborating with stakeholders and presenting insights
              in a clear, concise manner for both technical and non-technical
              audiences.
            </p>

            {/* TOOLS STACK */}
            <div style={{ marginTop: "32px" }}>
              <p
                style={{
                  color: "#9ca3af",
                  fontSize: "14px",
                  marginBottom: "14px",
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                }}
              >
                Tools I work with
              </p>

              <div style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
                {[
                  "Python",
                  "SQL",
                  "Excel",
                  "Power BI",
                  "Tableau",
                  "PostgreSQL",
                  "Git",
                ].map((tool) => (
                  <span
                    key={tool}
                    style={{
                      padding: "8px 14px",
                      fontSize: "15px",
                      fontWeight: 600,
                      color: "#e5e7eb",
                      background: "rgba(255,255,255,0.05)",
                      border: "1px solid rgba(255,255,255,0.12)",
                      borderRadius: "999px",
                    }}
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section id="projects" title="Projects">
  <div
    style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
      gap: "24px",
    }}
  >
    {/* PROJECT 1 */}
    <div style={projectCardStyle}>
      <h3>Customer Churn Analysis</h3>
      <p className="muted">
        Identified churn drivers and built an executive-ready Power BI dashboard.
      </p>
      <a href="/projects/churn" style={projectLinkStyle}>
        View Project →
      </a>
    </div>

    {/* PROJECT 2 */}
    <div style={projectCardStyle}>
      <h3>Retail Sales Analytics Dashboard</h3>
      <p className="muted">
        Cloud-based retail sales analytics dashboard using AWS Athena and Power BI to surface revenue and customer insights.
      </p>
      <a href="/projects/retail_analytics" style={projectLinkStyle}>
        View Project →
      </a>
    </div>

    {/* PROJECT 3 — SQL */}
    <div style={projectCardStyle}>
      <h3>E-commerce Sales Analytics using SQL</h3>
      <p className="muted">
        Analyzed multi-year e-commerce data using PostgreSQL to uncover revenue trends,
        customer behavior, repeat purchases, and profitability.
      </p>
      <a href="/projects/ecommerce-sql" style={projectLinkStyle}>
        View Project →
      </a>
    </div>
  </div>
</Section>

  


      {/* SKILLS */}
      <Section id="skills" title="Skills">
        <p style={{ color: "#9ca3af", marginBottom: "24px" }}>
          Core technical, analytical, and domain skills used in real-world data analysis.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
            gap: "24px",
          }}
        >
         
    <SkillCategory title="Programming & Query">
      <SkillItem title="Python" level="Proficient" value={80} />
      <SkillItem title="SQL" level="Proficient" value={75} />
      <SkillItem title="R" level="Working Knowledge" value={60} />
      <SkillItem title="Scala" level="Familiar" value={50} />
    </SkillCategory>

    {/* DATABASES */}
    <SkillCategory title="Databases & Warehousing">
      <SkillItem title="PostgreSQL" level="Working Knowledge" value={65} />
      <SkillItem title="SQL Server" level="Working Knowledge" value={65} />
      <SkillItem title="MySQL" level="Working Knowledge" value={60} />
      <SkillItem title="Snowflake" level="Familiar" value={55} />
    </SkillCategory>

    {/* ETL */}
    <SkillCategory title="Data Preparation & ETL">
      <SkillItem title="Data Cleaning & Wrangling" level="Proficient" value={75} />
      <SkillItem title="ETL Concepts" level="Working Knowledge" value={65} />
      <SkillItem title="Apache Airflow" level="Familiar" value={55} />
    </SkillCategory>

    {/* VISUALIZATION */}
    <SkillCategory title="Visualization & Reporting">
      <SkillItem title="Power BI" level="Working Knowledge" value={65} />
      <SkillItem title="Tableau" level="Working Knowledge" value={65} />
      <SkillItem title="Excel" level="Proficient" value={75} />
    </SkillCategory>

    {/* ANALYTICS */}
    <SkillCategory title="Analytics & Statistics">
      <SkillItem title="EDA" level="Working Knowledge" value={65} />
      <SkillItem title="Regression Analysis" level="Working Knowledge" value={60} />
      <SkillItem title="A/B Testing" level="Working Knowledge" value={60} />
    </SkillCategory>

    {/* DOMAIN */}
    <SkillCategory title="Domain Knowledge">
      <SkillItem title="Healthcare Data (EHR)" level="Working Knowledge" value={60} />
      <SkillItem title="Data Governance & Quality" level="Working Knowledge" value={60} />
    </SkillCategory>
 
        </div>
      </Section>

      {/* EDUCATION */}
      <Section id="education" title="Education">
        <div style={{ display: "flex", flexDirection: "column", gap: "24px", maxWidth: "760px" }}>
          <div style={cardStyle}>
            <h3>Master of Science in Computer Science</h3>
            <p className="muted">University of Central Missouri, MO</p>
            <p className="muted">2023 – 2025 </p>
            <p className="muted">GPA: 3.5 / 4.0</p>
            <ul>
              <li>Focused on data analytics, databases, and applied machine learning.</li>
              <li>Completed projects using Python, SQL, and BI tools.</li>
            </ul>
          </div>

          <div style={cardStyle}>
            <h3>Bachelor of Technology in Computer Science</h3>
            <p className="muted">GITAM University, Hyderabad, India</p>
            <p className="muted">2019 – 2023</p>
            <ul>
              <li>Built strong foundations in programming and data structures.</li>
              <li>Developed academic projects in data analysis and reporting.</li>
            </ul>
          </div>
        </div>
      </Section>


      {/* CERTIFICATIONS */}
<Section id="certifications" title="Certifications">
  <div
    style={{
      display: "flex",
      flexDirection: "column",
      gap: "24px",
      maxWidth: "760px",
    }}
  >
    {/* CERT 1 */}
    <div
      style={{
        display: "flex",
        gap: "20px",
        alignItems: "flex-start",
        background: "rgba(255,255,255,0.03)",
        border: "1px solid rgba(255,255,255,0.08)",
        borderRadius: "14px",
        padding: "20px",
      }}
    >
      {/* LOGO */}
      <img
        src="/images/google.png"
        alt="Google"
        style={{ width: "40px", height: "40px", objectFit: "contain" }}
      />

      {/* CONTENT */}
      <div>
        <h3 style={{ fontSize: "17px", fontWeight: 600 }}>
          Google Data Analytics Professional Certificate
        </h3>

        <p style={{ color: "#9ca3af", margin: "4px 0 8px" }}>
          Google 
        </p>
         <p style={{ color: "#9ca3af", margin: "4px 0 8px" }}>
          Completed 2023
        </p>
        <ul style={{ paddingLeft: "18px", lineHeight: "1.6" }}>
          <li>Data cleaning, analysis, and visualization using spreadsheets and SQL</li>
          <li>Hands-on experience with dashboards, reporting, and business insights</li>
        </ul>
      </div>
    </div>

    {/* CERT 2 */}
    <div
      style={{
        display: "flex",
        gap: "20px",
        alignItems: "flex-start",
        background: "rgba(255,255,255,0.03)",
        border: "1px solid rgba(255,255,255,0.08)",
        borderRadius: "14px",
        padding: "20px",
      }}
    >
      {/* LOGO */}
      <img
        src="/images/microsoft.png"
        alt="Microsoft"
        style={{ width: "40px", height: "40px", objectFit: "contain" }}
      />

      {/* CONTENT */}
      <div>
        <h3 style={{ fontSize: "17px", fontWeight: 600 }}>
          Microsoft Power BI Data Analyst Associate
        </h3>

        <p style={{ color: "#9ca3af", margin: "4px 0 8px" }}>
          Microsoft 
        </p>
        <p style={{ color: "#9ca3af", margin: "4px 0 8px" }}>
           Completed 2023
        </p>

        <ul style={{ paddingLeft: "18px", lineHeight: "1.6" }}>
          <li>Building interactive dashboards and data models in Power BI</li>
          <li>DAX calculations, data transformation, and performance optimization</li>
        </ul>
      </div>
    </div>
  </div>
</Section>


      {/* CONTACT */}
      <Section id="contact" title="Contact">
        <p style={{ color: "#9ca3af", marginBottom: "28px", fontSize: "19px" }}>
              I’m open to exploring new roles and collaborative work. If you’d like to talk
    through an idea or connect, I’d be glad to hear from you.

        </p>

        <div style={{ display: "flex", gap: "44px", flexWrap: "wrap" }}>
          <a href="mailto:nerellapranavi@gmail.com"><Mail size={26} /> Email</a>
          <a href="https://www.linkedin.com/in/nerella-pranavi" target="_blank"><Linkedin size={26} /> LinkedIn</a>
          <a href="https://github.com/pranavi-0827" target="_blank"><Github size={26} /> GitHub</a>
          <a href="/resume.pdf" target="_blank"><FileText size={26} /> Resume</a>
        </div>
      </Section>
    </>
  );
}

const cardStyle = {
  background: "rgba(255,255,255,0.03)",
  border: "1px solid rgba(255,255,255,0.08)",
  borderRadius: "14px",
  padding: "20px",
};

const projectCardStyle: CSSProperties = {
  background: "rgba(255,255,255,0.04)",
  border: "1px solid rgba(255,255,255,0.08)",
  borderRadius: "16px",
  padding: "24px",

  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",

  height: "220px",      // 🔑 FIXED HEIGHT
};

const projectLinkStyle = {
  marginTop: "12px",
  display: "inline-block",
  color: "#60a5fa",
  fontWeight: 500,
};

