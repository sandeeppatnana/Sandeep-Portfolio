import { profile, repositories } from "../data/portfolioData";
import { Container, SectionHeading } from "../components/Layout";

export default function GitHubShowcase() {
  return (
    <section id="github" className="border-b border-[var(--color-border)] py-20 md:py-28">
      <Container>
        <SectionHeading
          eyebrow="github"
          title="Featured repositories"
          description="A snapshot of test suites and evaluation tooling — update links as repositories go live."
        />

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {repositories.map((repo) => (
            <a
              key={repo.id}
              href={repo.url}
              target="_blank"
              rel="noreferrer"
              className="card-surface group flex flex-col p-5"
            >
              <div className="flex items-center gap-2">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-[var(--color-ink-faint)]" aria-hidden="true">
                  <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.57.1.79-.25.79-.55 0-.27-.01-1.16-.02-2.11-3.2.7-3.88-1.36-3.88-1.36-.52-1.33-1.28-1.69-1.28-1.69-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.68 0-1.25.45-2.28 1.18-3.08-.12-.29-.51-1.46.11-3.05 0 0 .96-.31 3.16 1.18a10.9 10.9 0 0 1 5.75 0c2.19-1.49 3.15-1.18 3.15-1.18.63 1.59.24 2.76.12 3.05.74.8 1.18 1.83 1.18 3.08 0 4.41-2.69 5.38-5.25 5.67.41.36.78 1.06.78 2.14 0 1.55-.01 2.79-.01 3.17 0 .3.21.66.8.55A11.5 11.5 0 0 0 23.5 12c0-6.27-5.23-11.5-11.5-11.5Z" />
                </svg>
                <p className="font-mono text-sm font-semibold text-[var(--color-ink)] group-hover:text-[var(--color-accent-ink)]">
                  {repo.name}
                </p>
              </div>
              <p className="mt-2.5 text-sm leading-relaxed text-[var(--color-ink-muted)]">{repo.description}</p>
              <div className="mt-auto pt-4 flex flex-wrap gap-1.5">
                {repo.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-[var(--color-border)] px-2 py-0.5 font-mono text-xs text-[var(--color-ink-muted)]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>

        <div className="mt-9 border-t border-[var(--color-border)] pt-6">
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 rounded-md text-sm font-medium text-[var(--color-accent-ink)] hover:underline"
          >
            View all repositories on GitHub
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M7 17L17 7M17 7H8M17 7V16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </Container>
    </section>
  );
}
