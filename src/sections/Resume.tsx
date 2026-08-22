import { profile } from "../data/portfolioData";
import { Container, SectionHeading } from "../components/Layout";
import Button from "../components/Button";

export default function Resume() {
  return (
    <section id="resume" className="border-b border-[var(--color-border)] bg-[var(--color-bg)] py-20 md:py-28">
      <Container>
        <SectionHeading
          eyebrow="resume"
          title="Resume"
          description="A single source of truth for roles, tools and testing scope — replace the file below with your current PDF."
        />

        <div className="mx-auto max-w-3xl">
          <div className="card-surface p-4 sm:p-6 md:p-8">
            <p className="text-sm font-semibold text-[var(--color-ink)]">{profile.name}</p>
            <p className="mt-1 text-sm text-[var(--color-ink-muted)]">{profile.title}</p>

            <div className="mt-6 grid grid-cols-2 gap-2">
              <Button as="a" href={profile.resumePdfPath} download variant="primary" className="w-full px-2 sm:px-5">
                <span className="sm:hidden">Download</span>
                <span className="hidden sm:inline">Download Resume</span>
              </Button>
              <Button
                as="a"
                href={profile.resumePdfPath}
                target="_blank"
                rel="noreferrer"
                variant="secondary"
                className="w-full px-2 sm:px-5"
              >
                <span className="sm:hidden">View</span>
                <span className="hidden sm:inline">View Resume</span>
              </Button>
            </div>

          </div>
        </div>
      </Container>
    </section>
  );
}
