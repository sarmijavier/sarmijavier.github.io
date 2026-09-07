import Reveal from "@/components/reveal";

type Entry = {
  school: string;
  detail: string;
  period: string;
  location: string;
  note?: string;
};

const entries: Entry[] = [
  {
    school: "Universitat Rovira i Virgili",
    detail: "Master's Degree in Computer Security Engineering and Artificial Intelligence",
    period: "2025 to 2026",
    location: "Tarragona, ES · Scholarship",
  },
  {
    school: "Universidad Católica de Colombia",
    detail: "Bachelor in Computer Science",
    period: "2017 to 2022",
    location: "Colombia",
  },
  {
    school: "Platzi Master",
    detail: "Intensive elite program, top 0.1% of students",
    period: "",
    location: "Remote",
    note: "1:1 training with industry coaches, plus a four-month data engineering project. Strengthened cloud, data manipulation, and software engineering skills.",
  },
];

export default function Education() {
  return (
    <section id="education" className="border-t border-line px-5 py-24 md:px-10 md:py-40">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-5xl">
            Education
          </h2>
        </Reveal>

        <div className="mt-12 divide-y divide-line border-t border-line md:mt-16">
          {entries.map((entry, i) => (
            <Reveal key={entry.school} delay={Math.min(i * 0.08, 0.24)}>
              <div className="grid gap-2 py-8 md:grid-cols-[1.4fr_2fr] md:gap-12 md:py-10">
                <div>
                  <h3 className="text-xl font-semibold text-foreground md:text-2xl">
                    {entry.school}
                  </h3>
                  {entry.period && (
                    <p className="mt-3 font-mono text-xs uppercase tracking-[0.12em] text-ink-soft">
                      {entry.period}
                    </p>
                  )}
                  <p className="font-mono text-xs uppercase tracking-[0.12em] text-ink-soft">
                    {entry.location}
                  </p>
                </div>
                <div>
                  <p className="max-w-xl text-base leading-relaxed text-ink-soft md:text-lg">
                    {entry.detail}
                  </p>
                  {entry.note && (
                    <p className="mt-3 max-w-xl text-sm leading-relaxed text-ink-soft md:text-base">
                      {entry.note}
                    </p>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
