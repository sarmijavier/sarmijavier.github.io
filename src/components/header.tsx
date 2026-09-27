"use client";

import { useEffect, useRef, useState } from "react";
import { navLinks } from "@/lib/site";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string | null>(null);
  const [open, setOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Highlight the section that currently owns the middle band of the viewport.
  useEffect(() => {
    const sections = navLinks
      .map(({ href }) => document.querySelector<HTMLElement>(href))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
        }
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  // Mobile menu: move focus into it on open, close on Escape or an outside tap.
  useEffect(() => {
    if (!open) return;
    headerRef.current?.querySelector<HTMLAnchorElement>("#mobile-nav a")?.focus();
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    const onPointer = (e: PointerEvent) => {
      if (!headerRef.current?.contains(e.target as Node)) setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", onPointer);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.removeEventListener("pointerdown", onPointer);
    };
  }, [open]);

  const solid = scrolled || open;

  return (
    <header
      ref={headerRef}
      className={`fixed inset-x-0 top-0 z-50 border-b px-5 transition-[background-color,border-color,backdrop-filter] duration-300 md:px-10 ${
        open
          ? "border-line bg-background"
          : solid
            ? "border-line bg-background/85 backdrop-blur-md"
            : "border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between">
        <a
          href="#top"
          className="text-sm font-medium text-foreground"
          onClick={() => setOpen(false)}
        >
          Javier Sarmiento
        </a>

        <nav aria-label="Sections" className="hidden sm:block">
          <ul className="flex items-center gap-7 text-sm">
            {navLinks.map((link) => {
              const current = active === link.href;
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    aria-current={current ? "location" : undefined}
                    className={`relative py-1 transition-colors hover:text-foreground ${
                      current ? "text-foreground" : "text-ink-soft"
                    }`}
                  >
                    {link.label}
                    <span
                      aria-hidden
                      className={`absolute inset-x-0 -bottom-0.5 h-px origin-left bg-signal transition-transform duration-300 ${
                        current ? "scale-x-100" : "scale-x-0"
                      }`}
                    />
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        <button
          type="button"
          className="-mr-3 flex h-11 items-center px-3 text-sm text-ink-soft transition-colors hover:text-foreground sm:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>

      <nav
        id="mobile-nav"
        aria-label="Sections"
        data-open={open}
        inert={!open}
        className="menu-panel absolute inset-x-0 top-full border-b border-line bg-background px-5 pb-6 pt-2 sm:hidden"
      >
        <ul>
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                aria-current={active === link.href ? "location" : undefined}
                className={`block py-3 text-lg ${
                  active === link.href ? "text-foreground" : "text-ink-soft"
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
