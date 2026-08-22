import { skillGroups } from "../data/portfolioData";
import { Container, SectionHeading } from "../components/Layout";

export default function Skills() {
  return (
    <section id="skills" className="border-b border-[var(--color-border)] bg-[var(--color-bg)] py-20 md:py-28">
      <Container>
        <SectionHeading eyebrow="skills" title="Skills & tools" />

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {skillGroups.map((group) => {
            const isToolGroup = group.title === "Tools";
            return (
              <div key={group.title} className="card-surface p-5">
                <h3 className="text-xs font-semibold uppercase tracking-wide text-[var(--color-ink-faint)]">
                  {group.title}
                </h3>
                <ul className="mt-3.5 flex flex-wrap gap-1.5">
                  {group.skills.map((skill) => (
                    <li
                      key={skill}
                      className={`rounded-full border border-[var(--color-border)] px-2.5 py-1 text-sm text-[var(--color-ink-muted)] ${
                        isToolGroup ? "font-mono text-[13px]" : ""
                      }`}
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
