import { Container, SectionHeading } from "../components/Layout";
import Button from "../components/Button";

export default function Products() {
    return (
        <section id="products" className="border-b border-[var(--color-border)] py-20 md:py-28">
            <Container>
                <SectionHeading
                    eyebrow="products"
                    title="Featured products"
                    description="A showcase of platforms and applications I've built."
                />

                <div className="grid gap-5">
                    <div className="card-surface p-6 sm:p-8 flex flex-col sm:flex-row gap-6 items-start justify-between">
                        <div className="max-w-2xl">
                            <h3 className="text-lg md:text-xl font-semibold leading-snug text-[var(--color-ink)]">
                                ResumeBase
                            </h3>
                            <p className="mt-3 text-base leading-relaxed text-[var(--color-ink-muted)]">
                                A modern resume-building platform for creating professional, ATS-friendly resumes with customizable templates, live preview, and easy resume management.
                            </p>
                        </div>

                        <div className="shrink-0 mt-2 sm:mt-0">
                            <Button as="a" href="https://resumebase.in/" target="_blank" rel="noopener noreferrer" variant="primary">
                                Visit ResumeBase
                            </Button>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}
