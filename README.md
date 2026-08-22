# Sandeep Patnana — QA Engineer Portfolio

A production-ready personal portfolio built with React, TypeScript, Vite and Tailwind CSS v4.

## Getting started

```bash
npm install
npm run dev       # local dev server
npm run build     # production build -> dist/
npm run preview   # preview the production build
```

Requires Node.js 18+.

## Editing content

Almost everything on the site (name, links, about copy, experience,
projects, skills, achievements, education, certifications and
repositories) lives in one file:

```
src/data/portfolioData.ts
```

Update the values there and the whole site updates. Anything marked
PLACEHOLDER is a stand-in (no real employers, dates, certifications
or results were invented) and should be replaced with real
information before publishing.

## Replacing assets

- public/resume/sandeep-patnana-resume.pdf - swap in the real resume PDF
- public/og-image.png - add a 1200x630 social preview image (referenced in index.html)
- public/favicon.svg - swap for a real brand mark if desired

## Project structure

```
src/
  components/     Reusable UI: Navbar, Footer, ProjectCard, ProjectModal, Layout primitives
  sections/       One component per page section (Hero, About, Experience, ...)
  data/           portfolioData.ts - all editable content
  hooks/          useActiveSection - scroll-based nav highlighting
```

## Contact form

The contact form validates input client-side but is not wired to a
backend or email service - submitting it shows a placeholder success
state and explains that nothing was actually sent. Connect
src/sections/Contact.tsx's handleSubmit to a form service (e.g.
Formspree, a serverless function, or a custom API) before publishing.

## Design notes

- Palette: neutral cool-gray background, near-black ink, a single
  confident blue accent, plus semantic pass/warn/fail colors used
  sparingly for status badges, echoing a test-run report rather than
  a generic SaaS gradient.
- Type: Inter for all UI text, JetBrains Mono for technical labels
  (tool tags, timestamps, section eyebrows) to nod at the engineering/
  QA subject matter without leaning on decoration.
- The hero's "test-run.log" card and the mono eyebrow labels
  throughout (// about, // experience, etc.) are the signature device
  tying the site back to the testing discipline; all numbers shown
  there are explicitly marked as an illustrative sample, not a real
  result.
