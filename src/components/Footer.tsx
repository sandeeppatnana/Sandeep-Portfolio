import { profile } from "../data/portfolioData";
import { Container } from "./Layout";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-[var(--color-border)] py-8">
      <Container className="flex flex-col items-center gap-4 text-center sm:flex-row sm:justify-between sm:text-left">
        <div>
          <p className="text-sm font-semibold text-[var(--color-ink)]">{profile.name}</p>
          <p className="mt-0.5 text-xs text-[var(--color-ink-faint)]">QA Engineer | Project Coordinator</p>
        </div>

        <div className="flex items-center gap-1 text-sm text-[var(--color-ink-muted)]">
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="rounded-md px-2.5 py-2 hover:bg-[var(--color-bg)] hover:text-[var(--color-ink)]"
          >
            GitHub
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="rounded-md px-2.5 py-2 hover:bg-[var(--color-bg)] hover:text-[var(--color-ink)]"
          >
            LinkedIn
          </a>
          <a
            href={`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(profile.email)}`}
            target="_blank"
            rel="noreferrer"
            className="rounded-md px-2.5 py-2 hover:bg-[var(--color-bg)] hover:text-[var(--color-ink)]"
          >
            Email
          </a>
        </div>

        <p className="text-xs text-[var(--color-ink-faint)]">© {year} {profile.name}</p>
      </Container>
    </footer>
  );
}
