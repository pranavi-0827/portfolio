export default function SkillItem({
  title,
  level,
  description,
  value,
}: {
  title: string;
  level: string;
  description: string;
  value: number;
}) {
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <strong>{title}</strong>
        <span style={{ color: "#9ca3af", fontSize: "14px" }}>{level}</span>
      </div>

      <p style={{ color: "#9ca3af", fontSize: "14px", margin: "6px 0 10px" }}>
        {description}
      </p>

      <div
        style={{
          height: "6px",
          background: "rgba(255,255,255,0.1)",
          borderRadius: "6px",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            width: `${value}%`,
            height: "100%",
            background: "linear-gradient(90deg, #38bdf8, #818cf8)",
          }}
        />
      </div>
    </div>
  );
}
