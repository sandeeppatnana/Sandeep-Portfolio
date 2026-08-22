import { useEffect, useRef } from "react";
import type { Project } from "../data/portfolioData";
import Button from "./Button";

export default function ProjectModal({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    closeButtonRef.current?.focus();
    document.body.style.overflow = "hidden";

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
    >
      <button
        aria-label="Close dialog"
        className="absolute inset-0 bg-[var(--color-ink)]/50 backdrop-blur-[2px]"
        onClick={onClose}
      />

      <div className="relative z-10 max-h-[85vh] w-full max-w-2xl overflow-y-auto rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] shadow-[var(--shadow-card-hover)]">
        <div className="sticky top-0 flex items-start justify-between gap-4 border-b border-[var(--color-border)] bg-[var(--color-surface)]/95 backdrop-blur px-6 py-5">
          <div>
            <p className="eyebrow mb-1.5">{project.category}</p>
            <h3 id="project-modal-title" className="text-xl font-semibold leading-snug text-[var(--color-ink)]">
              {project.name}
            </h3>
          </div>
          <button
            ref={closeButtonRef}
            onClick={onClose}
            aria-label="Close"
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md text-[var(--color-ink-muted)] hover:bg-[var(--color-bg)] hover:text-[var(--color-ink)]"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M6 6L18 18M6 18L18 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        <div className="px-6 py-6 space-y-6">
          <p className="text-sm leading-relaxed text-[var(--color-ink-muted)]">{project.details.overview}</p>

          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-[var(--color-ink-faint)]">Approach</p>
            <ul className="mt-2 space-y-1.5">
              {project.details.approach.map((step, i) => (
                <li key={i} className="flex gap-2 text-sm leading-relaxed text-[var(--color-ink-muted)]">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[var(--color-ink-faint)]" />
                  {step}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-[var(--color-ink-faint)]">Scope</p>
            <p className="mt-2 text-sm leading-relaxed text-[var(--color-ink-muted)]">{project.details.scope}</p>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-[var(--color-ink-faint)]">
              Key testing areas
            </p>
            <div className="mt-2 flex flex-wrap gap-2">
              {project.testingAreas.map((area) => (
                <span
                  key={area}
                  className="rounded-full bg-[var(--color-accent-soft)] px-2.5 py-1 text-xs font-medium text-[var(--color-accent-ink)]"
                >
                  {area}
                </span>
              ))}
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-[var(--color-ink-faint)]">Tools</p>
            <div className="mt-2 flex flex-wrap gap-2">
              {project.tools.map((tool) => (
                <span
                  key={tool}
                  className="rounded-full border border-[var(--color-border)] px-2.5 py-1 font-mono text-xs text-[var(--color-ink-muted)]"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>

          <p className="rounded-md border border-dashed border-[var(--color-border-strong)] px-3 py-2 text-xs text-[var(--color-ink-faint)]">
            This detail view is a structure for screenshots, test cases, architecture notes and results —
            add them here as the project is documented.
          </p>

          <div className="flex flex-wrap gap-3 border-t border-[var(--color-border)] pt-6">
            <Button onClick={onClose} variant="secondary" size="sm">
              Close
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
