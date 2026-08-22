import { useMemo, useState } from "react";
import { projectCategories, projects, type Project, type ProjectCategory } from "../data/portfolioData";
import { Container, SectionHeading } from "../components/Layout";
import ProjectCard from "../components/ProjectCard";
import ProjectModal from "../components/ProjectModal";

const ALL = "All" as const;
type FilterValue = ProjectCategory | typeof ALL;

export default function Projects() {
  const [filter, setFilter] = useState<FilterValue>(ALL);
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const filtered = useMemo(
    () => (filter === ALL ? projects : projects.filter((p) => p.category === filter)),
    [filter]
  );

  const filters: FilterValue[] = [ALL, ...projectCategories];

  return (
    <section id="projects" className="border-b border-[var(--color-border)] py-20 md:py-28">
      <Container>
        <SectionHeading
          eyebrow="Expertise"
          title="Featured Work"
          description="Work organized by discipline — filter to the area you're most interested in."
        />

        <div
          className="mb-10 flex flex-wrap gap-2 border-b border-[var(--color-border)] pb-8"
          role="group"
          aria-label="Filter projects by category"
        >
          {filters.map((f) => {
            const isActive = filter === f;
            return (
              <button
                key={f}
                onClick={() => setFilter(f)}
                aria-pressed={isActive}
                className={`min-h-9 rounded-full border px-3.5 py-1.5 text-sm font-medium transition-colors ${
                  isActive
                    ? "border-[var(--color-accent)] bg-[var(--color-accent)] text-white"
                    : "border-[var(--color-border)] bg-white text-[var(--color-ink-muted)] hover:border-[var(--color-ink)] hover:text-[var(--color-ink)]"
                }`}
              >
                {f}
              </button>
            );
          })}
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((project) => (
            <ProjectCard key={project.id} project={project} onOpenDetails={setActiveProject} />
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="text-sm text-[var(--color-ink-muted)]">No projects in this category yet.</p>
        )}
      </Container>

      {activeProject && <ProjectModal project={activeProject} onClose={() => setActiveProject(null)} />}
    </section>
  );
}
