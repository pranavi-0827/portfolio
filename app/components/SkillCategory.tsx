export default function SkillCategory({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div
      style={{
        background: "rgba(255,255,255,0.03)",
        border: "1px solid rgba(255,255,255,0.08)",
        borderRadius: "14px",
        padding: "18px",
      }}
    >
      <h3
        style={{
          fontSize: "16px",
          fontWeight: 600,
          marginBottom: "14px",
        }}
      >
        {title}
      </h3>

      <div style={{ display: "grid", gap: "14px" }}>
        {children}
      </div>
    </div>
  );
}
