import { useEffect, useState } from "react";
import { navLinks, profile } from "../data/portfolioData";
import { useActiveSection } from "../hooks/useActiveSection";
import { Container } from "./Layout";
import Button from "./Button";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const activeId = useActiveSection(navLinks.map((l) => l.href.replace("#", "")));

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  // Close the mobile menu automatically if the viewport grows past
  // the mobile breakpoint (e.g. device rotation).
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const onChange = () => setMenuOpen(false);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b bg-[var(--color-surface)]/95 backdrop-blur transition-shadow duration-200 ${
        scrolled ? "border-[var(--color-border)] shadow-[0_1px_0_rgba(14,20,32,0.02)]" : "border-transparent"
      }`}
    >
      <Container className="flex h-16 items-center justify-between">
        <a
          href="#home"
          className="flex items-center gap-2.5 rounded-md font-semibold tracking-tight text-[var(--color-ink)]"
        >
          <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-[var(--color-accent)] text-white">
            <svg width="14" height="14" viewBox="0 0 12 12" fill="none" aria-hidden="true">
              <path
                d="M2.5 6.2L4.8 8.5L9.5 3.5"
                stroke="white"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          <span className="text-[15px]">Sandeep Patnana</span>
        </a>

        <nav className="hidden md:flex items-center gap-1" aria-label="Primary">
          {navLinks.map((link) => {
            const isActive = activeId === link.href.replace("#", "");
            return (
              <a
                key={link.href}
                href={link.href}
                aria-current={isActive ? "page" : undefined}
                className={`rounded-md px-3.5 py-2 text-sm font-medium transition-colors ${
                  isActive
                    ? "bg-[var(--color-accent-soft)] text-[var(--color-accent-ink)]"
                    : "text-[var(--color-ink-muted)] hover:bg-[var(--color-bg)] hover:text-[var(--color-ink)]"
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <Button as="a" href={profile.resumePdfPath} download variant="secondary" size="sm">
            Resume
          </Button>
          <Button as="a" href="#contact" variant="primary" size="sm">
            Get in touch
          </Button>
        </div>

        <button
          type="button"
          className="md:hidden inline-flex h-11 w-11 items-center justify-center rounded-md text-[var(--color-ink)] hover:bg-[var(--color-bg)]"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMenuOpen((v) => !v)}
        >
          {menuOpen ? (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M6 6L18 18M6 18L18 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
          ) : (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M4 7H20M4 12H20M4 17H20" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
          )}
        </button>
      </Container>

      {menuOpen && (
        <nav
          id="mobile-menu"
          aria-label="Mobile"
          className="md:hidden border-t border-[var(--color-border)] bg-[var(--color-surface)] px-6 py-4"
        >
          <ul className="flex flex-col gap-0.5">
            {navLinks.map((link) => {
              const isActive = activeId === link.href.replace("#", "");
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    aria-current={isActive ? "page" : undefined}
                    className={`block min-h-11 rounded-md px-3 py-3 text-base font-medium ${
                      isActive
                        ? "bg-[var(--color-accent-soft)] text-[var(--color-accent-ink)]"
                        : "text-[var(--color-ink)] hover:bg-[var(--color-bg)]"
                    }`}
                  >
                    {link.label}
                  </a>
                </li>
              );
            })}
          </ul>
          <div className="mt-4 flex flex-col gap-2.5">
            <Button as="a" href={profile.resumePdfPath} download variant="secondary" className="w-full">
              Download Resume
            </Button>
            <Button as="a" href="#contact" variant="primary" onClick={() => setMenuOpen(false)} className="w-full">
              Get in touch
            </Button>
          </div>
        </nav>
      )}
    </header>
  );
}
