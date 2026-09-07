import Reveal from "@/components/reveal";

export default function Hero() {
  return (
    <section
      id="top"
      className="flex min-h-[100dvh] flex-col justify-end px-5 pb-20 pt-32 md:px-10 md:pb-28 md:pt-40"
    >
      <div className="mx-auto w-full max-w-5xl">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-signal">
            Javier Sarmiento
          </p>
          <h1 className="mt-5 max-w-3xl text-4xl font-bold leading-[1.05] tracking-tight text-foreground md:text-6xl">
            AI Engineer &amp; Software Developer.
          </h1>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-ink-soft md:text-lg">
            3+ years building, deploying, and securing production systems, now
            deepening into AI and applied security through a scholarship-funded
            Master&apos;s in Computer Security Engineering and Artificial
            Intelligence.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
