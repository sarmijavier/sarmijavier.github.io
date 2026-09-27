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
    period: "2025–2026",
    location: "Tarragona, ES · Scholarship",
  },
  {
    school: "Universidad Católica de Colombia",
    detail: "Bachelor in Computer Science",
    period: "2017–2022",
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
    <section id="education" className="border-t border-line px-5 py-24 md:px-10 md:py-32">
      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[minmax(0,0.8fr)_minmax(0,1.6fr)] md:gap-12">
        <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-5xl">
          Education
        </h2>

        <ol className="border-t border-line">
          {entries.map((entry) => (
            <li key={entry.school} className="border-b border-line py-7 md:py-8">
              <h3 className="text-lg font-semibold text-foreground md:text-xl">{entry.detail}</h3>
              <p className="mt-1 text-base text-foreground/80">{entry.school}</p>
              <p className="mt-3 font-mono text-[0.8rem] tabular-nums text-ink-soft">
                {[entry.period, entry.location].filter(Boolean).join(" · ")}
              </p>
              {entry.note && (
                <p className="mt-4 max-w-[60ch] text-sm leading-relaxed text-ink-soft md:text-base">
                  {entry.note}
                </p>
              )}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
