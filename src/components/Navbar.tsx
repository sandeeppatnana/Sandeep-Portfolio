import { useEffect, useState } from "react";
import { navLinks, profile } from "../data/portfolioData";
import { useActiveSection } from "../hooks/useActiveSection";
import { Container } from "./Layout";
import Button from "./Button";

type ThemeMode = "light" | "dark" | "system";

const themeStorageKey = "portfolio-theme";

const themeOptions: Array<{ mode: ThemeMode; label: string }> = [
  { mode: "light", label: "Light theme" },
  { mode: "dark", label: "Dark theme" },
  { mode: "system", label: "System theme" },
];

function ThemeIcon({ mode }: { mode: ThemeMode }) {
  if (mode === "light") {
    return (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="12" cy="12" r="3.5" stroke="currentColor" strokeWidth="1.8" />
        <path d="M12 2.5V5M12 19V21.5M4.58 4.58L6.35 6.35M17.65 17.65L19.42 19.42M2.5 12H5M19 12H21.5M4.58 19.42L6.35 17.65M17.65 6.35L19.42 4.58" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    );
  }

  if (mode === "dark") {
    return (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M20.5 15.3A8.5 8.5 0 0 1 8.7 3.5A8.5 8.5 0 1 0 20.5 15.3Z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="3" y="4" width="18" height="13" rx="1.8" stroke="currentColor" strokeWidth="1.8" />
      <path d="M8 21H16M12 17V21" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

function ThemeMenu({ theme, onChange }: { theme: ThemeMode; onChange: (mode: ThemeMode) => void }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <button
        type="button"
        aria-label="Choose theme"
        aria-expanded={open}
        aria-haspopup="menu"
        onClick={() => setOpen((value) => !value)}
        className="inline-flex h-9 w-9 items-center justify-center rounded-md text-[var(--color-ink-muted)] transition-colors hover:bg-[var(--color-bg)] hover:text-[var(--color-ink)]"
      >
        <ThemeIcon mode={theme} />
      </button>
      {open && (
        <div className="absolute right-0 top-full z-50 mt-2 flex gap-1 rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] p-1.5 shadow-[var(--shadow-card-hover)]" role="menu" aria-label="Theme options">
          {themeOptions.map((option) => (
            <button
              key={option.mode}
              type="button"
              role="menuitemradio"
              aria-label={option.label}
              aria-checked={theme === option.mode}
              onClick={() => {
                onChange(option.mode);
                setOpen(false);
              }}
              className={`inline-flex h-9 w-9 items-center justify-center rounded-md transition-colors ${
                theme === option.mode
                  ? "bg-[var(--color-accent-soft)] text-[var(--color-accent-ink)]"
                  : "text-[var(--color-ink-muted)] hover:bg-[var(--color-bg)] hover:text-[var(--color-ink)]"
              }`}
            >
              <ThemeIcon mode={option.mode} />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState<ThemeMode>(() => {
    const savedTheme = window.localStorage.getItem(themeStorageKey);
    return savedTheme === "light" || savedTheme === "dark" || savedTheme === "system" ? savedTheme : "light";
  });
  const activeId = useActiveSection(navLinks.map((l) => l.href.replace("#", "")));

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem(themeStorageKey, theme);
  }, [theme]);

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
      className={`fixed inset-x-0 top-0 z-50 border-b bg-[var(--color-surface)]/95 backdrop-blur transition-shadow duration-200 ${
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
          <ThemeMenu theme={theme} onChange={setTheme} />
          <Button as="a" href={profile.resumePdfPath} download variant="secondary" size="sm">
            Resume
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
            <div className="flex items-center justify-between rounded-md border border-[var(--color-border)] px-3 py-2">
              <span className="text-sm font-medium text-[var(--color-ink-muted)]">Theme</span>
              <ThemeMenu
                theme={theme}
                onChange={(mode) => {
                  setTheme(mode);
                  setMenuOpen(false);
                }}
              />
            </div>
            <Button as="a" href={profile.resumePdfPath} download variant="secondary" className="w-full">
              Download Resume
            </Button>
          </div>
        </nav>
      )}
    </header>
  );
}
