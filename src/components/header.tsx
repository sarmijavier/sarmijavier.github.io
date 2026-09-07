import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";

const socials = [
  { href: "https://github.com/sarmijavier", label: "GitHub", Icon: FaGithub },
  { href: "https://www.linkedin.com/in/javier-sarmiento-28085a19a/", label: "LinkedIn", Icon: FaLinkedin },
  { href: "https://twitter.com/SarmiJavier", label: "Twitter", Icon: FaTwitter },
  { href: "https://www.instagram.com/sarmijavier/", label: "Instagram", Icon: FaInstagram },
];

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#education", label: "Education" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
];

export default function Header() {
  return (
    <>
      <header className="fixed top-0 inset-x-0 z-50 flex items-center justify-between px-5 py-5 md:px-10 md:py-7">
        <a
          href="#top"
          className="font-mono text-xs uppercase tracking-[0.2em] text-foreground/90 hover:text-signal transition-colors"
        >
          Javier Sarmiento
        </a>
        <nav className="hidden sm:flex items-center gap-7 font-mono text-xs uppercase tracking-[0.16em] text-ink-soft">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="hover:text-foreground transition-colors">
              {link.label}
            </a>
          ))}
        </nav>
      </header>

      <div className="hidden md:flex fixed left-6 top-1/2 z-40 -translate-y-1/2 flex-col gap-4">
        {socials.map(({ href, label, Icon }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-ink-soft hover:text-signal transition-colors"
          >
            <Icon size={16} />
            <span className="sr-only">{label}</span>
          </a>
        ))}
      </div>
    </>
  );
}

export { socials };
