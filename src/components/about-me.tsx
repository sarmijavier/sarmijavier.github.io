import Image from "next/image";
import Reveal from "@/components/reveal";

const stack = ["Python", "TypeScript", "LangChain", "AWS", "Docker", "PostgreSQL"];
const exploring = [
  "LLM-based agents and emerging protocols like MCP and A2A",
  "Applied cybersecurity, from a builder's side of the fence",
  "Investment strategy",
  "Chess, when there's time for it",
];

export default function AboutMe() {
  return (
    <section id="about" className="border-t border-line px-5 py-24 md:px-10 md:py-40">
      <div className="mx-auto grid max-w-6xl gap-14 md:grid-cols-[1.1fr_0.9fr] md:gap-20">
        <Reveal className="max-w-xl">
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-5xl">About</h2>

          <div className="mt-8 space-y-5 text-base leading-relaxed text-ink-soft md:text-lg">
            <p>
              I&apos;m an AI engineer and software developer with over three years of
              experience building, deploying, and securing production systems, currently
              completing a scholarship-funded Master&apos;s in{" "}
              <span className="text-foreground">
                Computer Security Engineering and Artificial Intelligence
              </span>
              .
            </p>
            <p>
              I combine solid full-stack and backend engineering with hands-on machine
              learning work, LLM-based agents, NLP, and clustering models, shaped by a{" "}
              <span className="text-foreground">security-first mindset</span> from academic
              and professional cybersecurity experience.
            </p>
            <p>
              I use modern AI tools daily, Claude, Gemini, Cursor, LangChain, to move faster
              and think clearer, and I&apos;m comfortable owning a problem end to end, from
              prototype to production.
            </p>
          </div>

          <div className="mt-10 flex flex-wrap gap-x-5 gap-y-2 font-mono text-xs uppercase tracking-[0.14em] text-ink-soft">
            {stack.map((tool) => (
              <span key={tool}>{tool}</span>
            ))}
          </div>

          <div className="mt-14 border-t border-line pt-8">
            <h3 className="font-mono text-xs uppercase tracking-[0.18em] text-ink-soft">
              Currently exploring
            </h3>
            <ul className="mt-4 space-y-2.5 text-base text-foreground md:text-lg">
              {exploring.map((item) => (
                <li key={item} className="leading-snug">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal delay={0.15} className="relative aspect-[4/5] w-full overflow-hidden md:mt-3">
          <Image
            src="/IMG_4533.jpeg"
            alt="Portrait of Javier Sarmiento"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 40vw"
          />
        </Reveal>
      </div>
    </section>
  );
}
