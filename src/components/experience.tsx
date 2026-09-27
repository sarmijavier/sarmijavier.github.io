type Role = {
  company: string;
  title: string;
  period: string;
  location?: string;
  // The one line an interviewer should take away from this role.
  lead: string;
  // At most three supporting points; compact roles have none.
  highlights: { label: string; body: string }[];
};

const roles: Role[] = [
  {
    company: "Wazoku",
    title: "Software Engineer · Enterprise SaaS",
    period: "May 2023 – May 2025 · 2 yrs",
    lead: "On the AI team, built the frontend and backend of an AI-powered agent that automates user interactions on the platform.",
    highlights: [
      {
        label: "Frontend modernization",
        body: "Migrated a critical legacy module from AngularJS to modern Angular, improving maintainability.",
      },
      {
        label: "Survey feature redesign",
        body: "Led a high-impact product enhancement, reworking the survey feature with the product team.",
      },
      {
        label: "Homepage and analytics backends",
        body: "Built performant APIs and reusable services for a new homepage, and supported the infrastructure behind client reporting.",
      },
    ],
  },
  {
    company: "Datarte.art",
    title: "Full-Stack Developer",
    period: "Feb 2021 – Aug 2022 · 1 yr 6 mos",
    lead: "Built two full-stack apps, Datarte and OtrasManeras, for artist artwork management using React, Gatsby, WordPress, and Flask.",
    highlights: [
      {
        label: "Cloud infrastructure",
        body: "Deployed and managed AWS services (EC2, RDS, S3) for UK clients CityRelay and CityRelaySolutions.",
      },
      {
        label: "Data and automation",
        body: "Built scrapers, migration tooling, and dashboards using Python, SQL, and Metabase.",
      },
      {
        label: "Testing and quality",
        body: "Implemented testing with Cypress, Pytest, and Selenium, and helped establish best practices.",
      },
    ],
  },
  {
    company: "Catholic University of Colombia",
    title: "Research Collaborator",
    period: "Apr 2020 – Nov 2020 · 8 mos",
    location: "Colombia",
    lead: "Built a Fitbit smartwatch app streaming heart-rate and calorie data to a web-socket server, for research with Complutense University of Madrid.",
    highlights: [],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="border-t border-line px-5 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-5xl">
          Experience
        </h2>

        <ol className="mt-12 md:mt-16">
          {roles.map((role) => {
            const compact = role.highlights.length === 0;
            return (
              <li
                key={role.company}
                className={`grid gap-5 border-t border-line md:grid-cols-[minmax(0,0.8fr)_minmax(0,1.6fr)] md:gap-12 ${
                  compact ? "py-8 md:py-10" : "py-10 md:py-14"
                }`}
              >
                <div>
                  <h3
                    className={`font-semibold text-foreground ${
                      compact ? "text-lg md:text-xl" : "text-xl md:text-2xl"
                    }`}
                  >
                    {role.company}
                  </h3>
                  <p className="mt-1 text-base text-foreground/80">{role.title}</p>
                  <p className="mt-3 font-mono text-[0.8rem] tabular-nums text-ink-soft">
                    {[role.period, role.location].filter(Boolean).join(" · ")}
                  </p>
                </div>

                <div>
                  <p
                    className={`max-w-[56ch] leading-snug text-foreground ${
                      compact ? "text-base text-foreground/85 md:text-lg" : "text-xl md:text-2xl"
                    }`}
                  >
                    {role.lead}
                  </p>
                  {!compact && (
                    <dl className="mt-8 grid gap-x-10 gap-y-6 lg:grid-cols-3">
                      {role.highlights.map((h) => (
                        <div key={h.label}>
                          <dt className="text-base font-medium text-foreground">{h.label}</dt>
                          <dd className="mt-1 text-sm leading-relaxed text-ink-soft md:text-base">
                            {h.body}
                          </dd>
                        </div>
                      ))}
                    </dl>
                  )}
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
