import Reveal from "@/components/reveal";

const categories: { label: string; items: string[] }[] = [
  {
    label: "AI & machine learning",
    items: [
      "Python",
      "TensorFlow",
      "PyTorch",
      "Scikit-learn",
      "pandas",
      "NLP",
      "Clustering",
      "LLM-based agents",
      "Generative AI",
      "LangChain",
      "MCP / A2A",
    ],
  },
  {
    label: "AI-assisted development",
    items: ["Claude", "Claude Code", "Gemini", "Cursor"],
  },
  {
    label: "Cybersecurity",
    items: [
      "Secure SDLC",
      "Security by design",
      "Vulnerability analysis",
      "Risk management",
      "OWASP Top 10",
    ],
  },
  {
    label: "Languages",
    items: ["Python", "TypeScript", "Java", "C++"],
  },
  {
    label: "Frameworks & tools",
    items: ["Angular", "Django", "Flask", "React", "Pytest", "Selenium"],
  },
  {
    label: "Databases",
    items: ["PostgreSQL", "SQL", "MongoDB"],
  },
  {
    label: "Cloud & DevOps",
    items: ["AWS (EC2, RDS, S3)", "Docker", "Git", "Linux"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="border-t border-line px-5 py-24 md:px-10 md:py-40">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-5xl">
            Skills
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-10 md:mt-16 md:grid-cols-2 md:gap-x-16 md:gap-y-12">
          {categories.map((category, i) => (
            <Reveal key={category.label} delay={Math.min(i * 0.05, 0.3)}>
              <h3 className="font-mono text-xs uppercase tracking-[0.18em] text-ink-soft">
                {category.label}
              </h3>
              <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-base text-foreground md:text-lg">
                {category.items.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
