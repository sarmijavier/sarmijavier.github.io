import Image from "next/image";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { CONTACT_EMAIL, FEATURED_REPO_URL, LINKEDIN_URL } from "@/lib/site";

const credentials = [
  {
    term: "Master's",
    detail: "MSc Computer Security Engineering & AI",
    meta: "Universitat Rovira i Virgili · 2025–2026 · Scholarship",
  },
  {
    term: "Industry",
    detail: "Software Engineer, Wazoku",
    meta: "Enterprise SaaS, AI team · 2023–2025",
  },
];

const step = (n: number) => ({ "--arrive-step": n }) as React.CSSProperties;

export default function Hero() {
  return (
    <section id="top" className="px-5 pb-20 pt-28 md:px-10 md:pb-28 md:pt-36">
      <div className="mx-auto grid max-w-6xl items-end gap-12 md:grid-cols-[minmax(0,1.35fr)_minmax(0,0.65fr)] md:gap-16">
        <div>
          <h1
            className="arrive max-w-[16ch] text-balance text-[2.6rem] font-bold leading-[1.02] tracking-[-0.035em] text-foreground sm:text-6xl md:text-7xl"
            style={step(0)}
          >
            AI engineer with a security-first mindset.
          </h1>

          <p
            className="arrive mt-7 max-w-[58ch] text-lg leading-relaxed text-ink-soft md:text-xl"
            style={step(1)}
          >
            I&apos;m Javier Sarmiento. I&apos;ve spent 3+ years building, deploying, and securing
            production systems, and I hold a scholarship-funded Master&apos;s in Computer Security
            Engineering and Artificial Intelligence.
          </p>

          <div className="arrive mt-9 flex flex-wrap items-center gap-x-6 gap-y-4" style={step(2)}>
            <a
              href={FEATURED_REPO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 bg-signal px-5 py-3 text-sm font-semibold text-signal-ink press focus-visible:outline-foreground"
            >
              <FaGithub aria-hidden size={16} />
              Read my encryption project on GitHub
              <span className="sr-only">(opens in a new tab)</span>
            </a>
            {CONTACT_EMAIL ? (
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="text-sm font-medium text-signal underline decoration-signal/40 hover:decoration-signal"
              >
                {CONTACT_EMAIL}
              </a>
            ) : (
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-signal underline decoration-signal/40 hover:decoration-signal"
              >
                <FaLinkedin aria-hidden size={15} />
                Connect on LinkedIn
                <span className="sr-only">(opens in a new tab)</span>
              </a>
            )}
          </div>

          <dl
            className="arrive mt-14 grid gap-6 border-t border-line pt-7 sm:grid-cols-2 sm:gap-10"
            style={step(3)}
          >
            {credentials.map((c) => (
              <div key={c.term}>
                <dt className="text-sm text-ink-soft">{c.term}</dt>
                <dd className="mt-1.5 text-base font-medium text-foreground">{c.detail}</dd>
                <dd className="mt-1 font-mono text-[0.8rem] tabular-nums text-ink-soft">
                  {c.meta}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div
          className="arrive relative aspect-[4/5] w-40 overflow-hidden sm:w-52 md:w-full"
          style={step(1)}
        >
          <Image
            src="/IMG_4533.jpeg"
            alt="Portrait of Javier Sarmiento"
            fill
            priority
            className="object-cover object-[50%_30%]"
            sizes="(max-width: 768px) 208px, 30vw"
          />
        </div>
      </div>
    </section>
  );
}
