import { achievements, education } from "../data/portfolioData";
import { Container, SectionHeading } from "../components/Layout";

export default function Achievements() {
  return (
    <section id="education" className="border-b border-[var(--color-border)] py-20 md:py-28">
      <Container>
        <SectionHeading eyebrow="education" title="Achievements & education" />

        <div className="grid gap-8 lg:grid-cols-2">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-[var(--color-ink-faint)] mb-4">
              Achievements
            </p>
            <div className="space-y-3.5">
              {achievements.map((a) => (
                <div key={a.id} className="card-surface p-5">
                  <p className="text-sm font-semibold leading-snug text-[var(--color-ink)]">{a.title}</p>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--color-ink-muted)]">{a.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-[var(--color-ink-faint)] mb-4">
              Education
            </p>
            <div className="space-y-3.5">
              {education.map((e) => (
                <div key={e.id} className="card-surface p-5">
                  <div className="flex items-start justify-between gap-3">
                    <p className="text-sm font-semibold leading-snug text-[var(--color-ink)]">{e.degree}</p>
                    <span className="eyebrow shrink-0">{e.duration}</span>
                  </div>
                  <p className="mt-1.5 text-sm font-medium text-[var(--color-accent-ink)]">{e.institution}</p>
                  {e.detail && (
                    <p className="mt-2 text-sm leading-relaxed text-[var(--color-ink-muted)]">{e.detail}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
