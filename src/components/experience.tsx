import Reveal from "@/components/reveal";

type Role = {
  company: string;
  title: string;
  period: string;
  location: string;
  summary: string;
  highlights: { label: string; body: string }[];
};

const roles: Role[] = [
  {
    company: "Wazoku",
    title: "Software Engineer",
    period: "May 2023 to May 2025 · 2 yrs",
    location: "Remote",
    summary:
      "Contributed across multiple cross-functional teams to evolve and scale an enterprise SaaS platform.",
    highlights: [
      {
        label: "AI team",
        body: "Built frontend and backend for an AI-powered agent, extending user interaction through automation.",
      },
      {
        label: "Frontend modernization",
        body: "Migrated a critical legacy module from AngularJS to modern Angular, improving maintainability.",
      },
      {
        label: "Survey feature redesign",
        body: "Led a high-impact product enhancement, reworking the survey feature with the product team.",
      },
      {
        label: "New homepage initiative",
        body: "Provided backend support for a new homepage experience: performant APIs and reusable services.",
      },
      {
        label: "Analytics team",
        body: "Supported backend and infrastructure for data-driven insights and client reporting.",
      },
    ],
  },
  {
    company: "Datarte.art",
    title: "Full-Stack Developer",
    period: "Feb 2021 to Aug 2022 · 1 yr 6 mos",
    location: "Remote",
    summary:
      "Built and maintained full-stack web applications end to end, from infrastructure to interface.",
    highlights: [
      {
        label: "Web applications",
        body: "Built two full-stack apps, Datarte and OtrasManeras, for artist artwork management using React, Gatsby, WordPress, and Flask.",
      },
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
    period: "Apr 2020 to Nov 2020 · 8 mos",
    location: "Colombia · Remote",
    summary:
      "Researched wearable SDKs and built prototypes to collect physiological signal data in real time.",
    highlights: [
      {
        label: "Fitbit SDK research",
        body: "Built a full smartwatch app streaming heart rate and calorie data to a web-socket server on Heroku.",
      },
      {
        label: "Academic collaboration",
        body: "Worked with three professors and a student team, supporting research with Complutense University of Madrid.",
      },
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="border-t border-line px-5 py-24 md:px-10 md:py-40">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-5xl">
            Experience
          </h2>
        </Reveal>

        <div className="mt-14 md:mt-20">
          {roles.map((role, i) => (
            <div
              key={role.company}
              className="sticky bg-background pt-10 pb-14 first:border-t-0 border-t border-line md:pt-14 md:pb-20"
              style={{ top: `${72 + i * 16}px`, zIndex: i + 1 }}
            >
              <div className="grid gap-6 md:grid-cols-[0.9fr_1.6fr] md:gap-12">
                <div>
                  <h3 className="text-xl font-semibold text-foreground md:text-2xl">
                    {role.title}
                  </h3>
                  <p className="mt-1 text-base text-signal">{role.company}</p>
                  <p className="mt-3 font-mono text-xs uppercase tracking-[0.12em] text-ink-soft">
                    {role.period}
                  </p>
                  <p className="font-mono text-xs uppercase tracking-[0.12em] text-ink-soft">
                    {role.location}
                  </p>
                </div>

                <div>
                  <p className="max-w-xl text-base leading-relaxed text-ink-soft md:text-lg">
                    {role.summary}
                  </p>
                  <dl className="mt-8 space-y-6">
                    {role.highlights.map((h) => (
                      <div key={h.label}>
                        <dt className="text-base font-medium text-foreground">{h.label}</dt>
                        <dd className="mt-1 max-w-xl text-sm leading-relaxed text-ink-soft md:text-base">
                          {h.body}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
