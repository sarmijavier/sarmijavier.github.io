import { FaLinkedin } from "react-icons/fa";
import { CONTACT_EMAIL, LINKEDIN_URL, socials } from "@/lib/site";

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-line px-5 pb-12 pt-24 md:px-10 md:pt-32">
      <div className="mx-auto max-w-6xl">
        <h2 className="max-w-[18ch] text-balance text-3xl font-bold tracking-tight text-foreground md:text-5xl">
          Hiring for AI or security work? Let&apos;s talk.
        </h2>

        <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-5">
          {CONTACT_EMAIL && (
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="inline-flex items-center bg-signal px-6 py-3.5 text-base font-semibold text-signal-ink press focus-visible:outline-foreground"
            >
              Email {CONTACT_EMAIL}
            </a>
          )}
          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={
              CONTACT_EMAIL
                ? "inline-flex items-center gap-2.5 text-base text-signal underline decoration-signal/40 hover:decoration-signal"
                : "inline-flex items-center gap-2.5 bg-signal px-6 py-3.5 text-base font-semibold text-signal-ink press focus-visible:outline-foreground"
            }
          >
            <FaLinkedin aria-hidden size={18} />
            Connect on LinkedIn
            <span className="sr-only">(opens in a new tab)</span>
          </a>
        </div>

        <div className="mt-24 flex flex-col-reverse gap-4 border-t border-line pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-ink-soft">&copy; {new Date().getFullYear()} Javier Sarmiento</p>
          <ul className="-ml-3 flex items-center" aria-label="Elsewhere">
            {socials.map(({ href, label, Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex size-11 items-center justify-center text-ink-soft transition-colors hover:text-foreground"
                >
                  <Icon aria-hidden size={16} />
                  <span className="sr-only">{label} (opens in a new tab)</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
