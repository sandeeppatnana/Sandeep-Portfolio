import { experience } from "../data/portfolioData";
import { Container, SectionHeading } from "../components/Layout";

export default function Experience() {
  return (
    <section id="experience" className="border-b border-[var(--color-border)] bg-[var(--color-bg)] py-20 md:py-28">
      <Container>
        <SectionHeading
          eyebrow="experience"
          title="Where I've worked"
          description="A running log of roles, in order — the way a release pipeline reads top to bottom."
        />

        <ol className="relative">
          {experience.map((item, index) => (
            <li key={item.id} className="relative pl-9 sm:pl-11 pb-10 last:pb-0">
              {index !== experience.length - 1 && (
                <span
                  aria-hidden="true"
                  className="absolute left-[9px] sm:left-[11px] top-7 bottom-0 w-px bg-[var(--color-border-strong)]"
                />
              )}
              <span
                aria-hidden="true"
                className="absolute left-0 top-1.5 flex h-[19px] w-[19px] sm:h-[23px] sm:w-[23px] items-center justify-center rounded-full border-2 border-[var(--color-accent)] bg-[var(--color-bg)]"
              >
                <span className="h-2 w-2 rounded-full bg-[var(--color-accent)]" />
              </span>

              <div className="card-surface p-4 sm:p-6">
                <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-x-4">
                  <div className="min-w-0">
                    <h3 className="text-lg font-semibold text-[var(--color-ink)]">{item.role}</h3>
                    <p className="mt-0.5 text-sm font-medium text-[var(--color-accent-ink)]">{item.company}</p>
                  </div>
                  <span className="eyebrow whitespace-nowrap">{item.duration}</span>
                </div>

                <p className="mt-4 text-sm leading-relaxed text-[var(--color-ink-muted)]">{item.summary}</p>

                <div className="mt-5 grid gap-6 sm:grid-cols-2">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-[var(--color-ink-faint)]">
                      Responsibilities
                    </p>
                    <ul className="mt-2.5 space-y-2">
                      {item.responsibilities.map((r, i) => (
                        <li key={i} className="flex gap-2.5 text-sm leading-relaxed text-[var(--color-ink-muted)]">
                          <span className="mt-[9px] h-1 w-1 shrink-0 rounded-full bg-[var(--color-ink-faint)]" />
                          <span className="min-w-0 flex-1">{r}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-[var(--color-ink-faint)]">
                      Impact
                    </p>
                    <ul className="mt-2.5 space-y-2">
                      {item.impact.map((r, i) => (
                        <li key={i} className="flex gap-2.5 text-sm leading-relaxed text-[var(--color-ink-muted)]">
                          <span className="mt-[9px] h-1 w-1 shrink-0 rounded-full bg-[var(--color-pass)]" />
                          <span className="min-w-0 flex-1">{r}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-5 flex flex-wrap gap-2 border-t border-[var(--color-border)] pt-4">
                  {item.tools.map((tool) => (
                    <span
                      key={tool}
                      className="rounded-full border border-[var(--color-border)] bg-[var(--color-bg)] px-2.5 py-1 font-mono text-xs text-[var(--color-ink-muted)]"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
