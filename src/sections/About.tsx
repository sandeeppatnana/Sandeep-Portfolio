import { about } from "../data/portfolioData";
import { Container, SectionHeading } from "../components/Layout";

export default function About() {
  const [lead, ...rest] = about.paragraphs;

  return (
    <section id="about" className="border-b border-[var(--color-border)] py-20 md:py-28">
      <Container>
        <SectionHeading eyebrow="about" title="Quality engineered. Delivery coordinated." />

        <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-16">
          <div className="space-y-5">
            <p className="text-lg leading-relaxed text-[var(--color-ink)]">{lead}</p>
            {rest.map((p, i) => (
              <p key={i} className="text-base leading-relaxed text-[var(--color-ink-muted)]">
                {p}
              </p>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 content-start">
            {about.focusAreas.map((area) => (
              <div key={area.label} className="card-surface p-5">
                <p className="text-sm font-semibold text-[var(--color-ink)]">{area.label}</p>
                <p className="mt-1.5 text-sm leading-relaxed text-[var(--color-ink-muted)]">{area.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
