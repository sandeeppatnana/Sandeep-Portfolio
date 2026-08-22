import type { Project } from "../data/portfolioData";
import Button from "./Button";

export default function ProjectCard({
  project,
  onOpenDetails,
}: {
  project: Project;
  onOpenDetails: (project: Project) => void;
}) {
  return (
    <article className="card-surface flex h-full flex-col p-6">
      <span className="eyebrow mb-3.5 w-fit rounded-full border border-[var(--color-border)] px-2.5 py-1">
        {project.category}
      </span>

      <h3 className="text-lg font-semibold leading-snug text-[var(--color-ink)]">{project.name}</h3>
      <p className="mt-2 text-sm leading-relaxed text-[var(--color-ink-muted)]">{project.description}</p>

      <div className="mt-4">
        <p className="text-xs font-semibold uppercase tracking-wide text-[var(--color-ink-faint)]">
          Key areas
        </p>
        <div className="mt-2 flex flex-wrap gap-1.5">
          {project.testingAreas.slice(0, 4).map((area) => (
            <span
              key={area}
              className="rounded-full bg-[var(--color-accent-soft)] px-2 py-0.5 text-xs font-medium text-[var(--color-accent-ink)]"
            >
              {area}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-4 flex flex-wrap gap-1.5">
        {project.tools.map((tool) => (
          <span
            key={tool}
            className="rounded-full border border-[var(--color-border)] px-2 py-0.5 font-mono text-xs text-[var(--color-ink-muted)]"
          >
            {tool}
          </span>
        ))}
      </div>

      <div className="mt-6 flex items-center gap-2.5 border-t border-[var(--color-border)] pt-5">
        <Button onClick={() => onOpenDetails(project)} variant="primary" size="sm">
          View
        </Button>
      </div>
    </article>
  );
}
