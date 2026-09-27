const exploring = [
  "LLM-based agents and emerging protocols like MCP and A2A",
  "Applied cybersecurity, from a builder's side of the fence",
  "Investment strategy",
  "Chess, when there's time for it",
];

export default function AboutMe() {
  return (
    <section id="about" className="border-t border-line px-5 py-24 md:px-10 md:py-32">
      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[minmax(0,0.8fr)_minmax(0,1.6fr)] md:gap-12">
        <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-5xl">Background</h2>

        <div>
          <div className="max-w-[62ch] space-y-5 text-base leading-relaxed text-ink-soft md:text-lg">
            <p>
              I combine solid full-stack and backend engineering with hands-on machine learning
              work, LLM-based agents, NLP, and clustering models, shaped by a{" "}
              <span className="text-foreground">security-first mindset</span> from academic and
              professional cybersecurity experience.
            </p>
            <p>
              I use modern AI tools daily, Claude, Gemini, Cursor, LangChain, to move faster and
              think clearer, and I&apos;m comfortable owning a problem end to end, from prototype
              to production.
            </p>
          </div>

          <div className="mt-12 border-t border-line pt-8">
            <h3 className="text-base font-medium text-foreground">Currently exploring</h3>
            <ul className="mt-4 space-y-2.5 text-base text-ink-soft md:text-lg">
              {exploring.map((item) => (
                <li key={item} className="leading-snug">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
