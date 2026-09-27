// Grouped by what an interviewer is checking for, most relevant first. Tools
// already named in About (Claude, Cursor, Gemini) are not repeated here.
const categories: { label: string; items: string[] }[] = [
  {
    label: "AI & machine learning",
    items: [
      "PyTorch",
      "TensorFlow",
      "Scikit-learn",
      "pandas",
      "LangChain",
      "LLM-based agents",
      "MCP / A2A",
      "NLP",
      "Clustering",
    ],
  },
  {
    label: "Security",
    items: [
      "Secure SDLC",
      "Security by design",
      "Vulnerability analysis",
      "Risk management",
      "OWASP Top 10",
    ],
  },
  {
    label: "Software engineering",
    items: ["Python", "TypeScript", "Java", "C++", "Django", "Flask", "Angular", "React"],
  },
  {
    label: "Data, cloud & testing",
    items: [
      "PostgreSQL",
      "MongoDB",
      "AWS (EC2, RDS, S3)",
      "Docker",
      "Linux",
      "Git",
      "Pytest",
      "Selenium",
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="border-t border-line px-5 py-24 md:px-10 md:py-32">
      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[minmax(0,0.8fr)_minmax(0,1.6fr)] md:gap-12">
        <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-5xl">Skills</h2>

        <dl className="grid gap-10 sm:grid-cols-2 sm:gap-x-12">
          {categories.map((category) => (
            <div key={category.label}>
              <dt className="text-base font-medium text-foreground">{category.label}</dt>
              <dd className="mt-3 text-base leading-relaxed text-ink-soft">
                {category.items.join(" · ")}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
