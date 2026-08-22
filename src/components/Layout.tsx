import type { ReactNode } from "react";

export function Container({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-6xl px-6 md:px-8 ${className}`}>{children}</div>;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="mb-12 md:mb-14 max-w-2xl">
      <p className="eyebrow mb-4">{`// ${eyebrow}`}</p>
      <h2 className="text-[1.75rem] md:text-4xl font-semibold leading-[1.15] tracking-tight text-[var(--color-ink)]">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base leading-relaxed text-[var(--color-ink-muted)]">
          {description}
        </p>
      )}
    </div>
  );
}

/**
 * Signature element: a monospace "verification bar" styled like a
 * test-run summary. Encodes the real testing disciplines covered,
 * rather than decorating for its own sake.
 */
export function VerificationBar({ items, className = "" }: { items: string[]; className?: string }) {
  return (
    <div
      className={`flex flex-wrap items-center gap-x-5 gap-y-2 font-mono text-[13px] text-[var(--color-ink-muted)] ${className}`}
    >
      {items.map((item) => (
        <span key={item} className="inline-flex items-center gap-1.5">
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
            <path
              d="M2.5 6.2L4.8 8.5L9.5 3.5"
              stroke="var(--color-pass)"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          {item}
        </span>
      ))}
    </div>
  );
}

export function StatusBadge({ tone, children }: { tone: "pass" | "warn" | "fail" | "accent"; children: ReactNode }) {
  const toneMap: Record<string, string> = {
    pass: "bg-[var(--color-pass-soft)] text-[var(--color-pass)]",
    warn: "bg-[var(--color-warn-soft)] text-[var(--color-warn)]",
    fail: "bg-[var(--color-fail-soft)] text-[var(--color-fail)]",
    accent: "bg-[var(--color-accent-soft)] text-[var(--color-accent-ink)]",
  };
  return (
    <span
      className={`inline-flex items-center rounded-full px-2.5 py-1 text-xs font-mono font-medium ${toneMap[tone]}`}
    >
      {children}
    </span>
  );
}
