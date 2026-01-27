export default function ProjectCard({
  title,
  description,
  tools,
}: {
  title: string;
  description: string;
  tools: string;
}) {
  return (
    <div
      className="
        rounded-2xl p-8
        bg-gradient-to-br from-white/10 via-white/5 to-transparent
        shadow-xl shadow-black/60
        hover:shadow-2xl hover:shadow-black/80
        hover:-translate-y-1
        transition-all duration-300
      "
    >
      <h3 className="text-xl font-semibold text-white mb-2">
        {title}
      </h3>

      <p className="text-gray-300 text-sm leading-relaxed mb-4">
        {description}
      </p>

      <p className="text-gray-400 text-xs">
        <span className="uppercase tracking-wide text-gray-500">Tools</span><br />
        {tools}
      </p>
    </div>
  );
}





