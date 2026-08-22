import { achievements, certifications, education } from "../data/portfolioData";
import { Container, SectionHeading } from "../components/Layout";

export default function Achievements() {
  return (
    <section id="achievements" className="border-b border-[var(--color-border)] py-20 md:py-28">
      <Container>
        <SectionHeading eyebrow="achievements" title="Achievements, education & certifications" />

        <div className="grid gap-8 lg:grid-cols-3">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-[var(--color-ink-faint)] mb-4">
              Achievements
            </p>
            <div className="space-y-3.5">
              {achievements.map((a) => (
                <div key={a.id} className="card-surface p-5">
                  <div className="flex items-start justify-between gap-3">
                    <p className="text-sm font-semibold leading-snug text-[var(--color-ink)]">{a.title}</p>
                    <span className="eyebrow shrink-0">{a.date}</span>
                  </div>
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

          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-[var(--color-ink-faint)] mb-4">
              Certifications
            </p>
            <div className="space-y-3.5">
              {certifications.map((c) => (
                <div key={c.id} className="card-surface p-5">
                  <div className="flex items-start justify-between gap-3">
                    <p className="text-sm font-semibold leading-snug text-[var(--color-ink)]">{c.name}</p>
                    <span className="eyebrow shrink-0">{c.date}</span>
                  </div>
                  <p className="mt-1.5 text-sm font-medium text-[var(--color-accent-ink)]">{c.issuer}</p>
                  {c.credentialUrl && (
                    <a
                      href={c.credentialUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-2 inline-block text-sm font-medium text-[var(--color-accent-ink)] hover:underline"
                    >
                      View credential
                    </a>
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
