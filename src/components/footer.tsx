import { socials } from "@/components/header";

export default function Footer() {
  return (
    <footer className="border-t border-line px-5 py-16 md:px-10 md:py-24">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-5xl">
          Say hello.
        </h2>
        <a
          href="https://www.linkedin.com/in/javier-sarmiento-28085a19a/"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-block text-lg text-signal underline underline-offset-4 md:text-xl"
        >
          Reach out on LinkedIn
        </a>

        <div className="mt-16 flex flex-col gap-6 border-t border-line pt-8 md:flex-row md:items-center md:justify-between">
          <p className="font-mono text-xs uppercase tracking-[0.14em] text-ink-soft">
            &copy; {new Date().getFullYear()} Javier Sarmiento
          </p>
          <div className="flex md:hidden items-center gap-6">
            {socials.map(({ href, label, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-ink-soft hover:text-signal transition-colors"
              >
                <Icon size={18} />
                <span className="sr-only">{label}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
