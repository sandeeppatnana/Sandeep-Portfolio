import { profile, verificationTags } from "../data/portfolioData";
import { Container, VerificationBar } from "../components/Layout";
import Button from "../components/Button";

export default function Hero() {
  return (
    <section id="home" className="border-b border-[var(--color-border)]">
      <Container className="grid gap-14 py-20 md:py-28 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-10">
        <div>
          <p className="eyebrow mb-5">{"// status: available for new roles"}</p>
          <h1 className="text-[2.5rem] md:text-5xl lg:text-[3.25rem] font-semibold leading-[1.08] tracking-tight text-[var(--color-ink)]">
            {profile.name}
          </h1>
          <p className="mt-4 text-lg md:text-xl font-medium leading-snug text-[var(--color-accent-ink)]">
            {profile.title}
          </p>
          <p className="mt-5 max-w-[52ch] text-base md:text-lg leading-relaxed text-[var(--color-ink-muted)]">
            {profile.subtitle}
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
            <Button as="a" href="#projects" variant="primary" className="w-full sm:w-auto">
              View My Work
            </Button>
            <Button as="a" href={profile.resumePdfPath} download variant="secondary" className="w-full sm:w-auto">
              Download Resume
            </Button>
            <div className="flex items-center gap-1 self-start sm:ml-1">
              <Button as="a" href={profile.github} target="_blank" rel="noreferrer" variant="ghost" size="sm" className="w-auto">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.57.1.79-.25.79-.55 0-.27-.01-1.16-.02-2.11-3.2.7-3.88-1.36-3.88-1.36-.52-1.33-1.28-1.69-1.28-1.69-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.68 0-1.25.45-2.28 1.18-3.08-.12-.29-.51-1.46.11-3.05 0 0 .96-.31 3.16 1.18a10.9 10.9 0 0 1 5.75 0c2.19-1.49 3.15-1.18 3.15-1.18.63 1.59.24 2.76.12 3.05.74.8 1.18 1.83 1.18 3.08 0 4.41-2.69 5.38-5.25 5.67.41.36.78 1.06.78 2.14 0 1.55-.01 2.79-.01 3.17 0 .3.21.66.8.55A11.5 11.5 0 0 0 23.5 12c0-6.27-5.23-11.5-11.5-11.5Z" />
                </svg>
                <span aria-hidden="true" className="sr-only sm:not-sr-only">GitHub</span>
              </Button>
              <Button as="a" href={profile.linkedin} target="_blank" rel="noreferrer" variant="ghost" size="sm" className="w-auto">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45Z" />
                </svg>
                <span aria-hidden="true" className="sr-only sm:not-sr-only">LinkedIn</span>
              </Button>
            </div>
          </div>

          <VerificationBar items={verificationTags} className="mt-11 border-t border-[var(--color-border)] pt-6" />
        </div>

        <div>
          <TestReportCard />
        </div>
      </Container>
    </section>
  );
}

/** Signature element: a minimal, purposeful "test run" summary card
 *  standing in for the generic hero illustration — every row maps to
 *  a real testing discipline this profile covers. */
function TestReportCard() {
  const rows = [
    { name: "auth.login.flow", status: "pass" as const, time: "142ms" },
    { name: "api.crud.negative_cases", status: "pass" as const, time: "98ms" },
    { name: "load.concurrent_users_500", status: "pass" as const, time: "3.2s" },
    { name: "llm.response.hallucination_check", status: "pass" as const, time: "410ms" },
    { name: "mobile.regression.checkout", status: "warn" as const, time: "1.1s" },
  ];

  return (
    <div className="card-surface overflow-hidden">
      <div className="flex items-center justify-between border-b border-[var(--color-border)] px-5 py-4">
        <span className="eyebrow">{"// automated test run"}</span>
        <span className="rounded-full bg-[var(--color-pass-soft)] px-2.5 py-1 font-mono text-[11px] font-semibold text-[var(--color-pass)]">
          4/5 PASSING
        </span>
      </div>
      <ul className="divide-y divide-[var(--color-border)]">
        {rows.map((row) => (
          <li key={row.name} className="flex items-center justify-between gap-4 px-5 py-3.5">
            <span className="truncate font-mono text-[13px] text-[var(--color-ink)]">{row.name}</span>
            <div className="flex shrink-0 items-center gap-3">
              <span className="font-mono text-xs text-[var(--color-ink-faint)]">{row.time}</span>
              <span
                className={`font-mono text-xs font-semibold uppercase tracking-wide ${
                  row.status === "pass" ? "text-[var(--color-pass)]" : "text-[var(--color-warn)]"
                }`}
              >
                {row.status}
              </span>
            </div>
          </li>
        ))}
      </ul>
      <div className="flex items-center justify-between bg-[var(--color-bg)] px-5 py-3">
        <span className="font-mono text-xs text-[var(--color-ink-muted)]">5 suites · 4 passed · 1 warning</span>
        <span className="font-mono text-xs text-[var(--color-ink-faint)]">illustrative sample</span>
      </div>
    </div>
  );
}
