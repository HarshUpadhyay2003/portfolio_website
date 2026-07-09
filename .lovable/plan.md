# Jahanvi Rana — Glassmorphism Portfolio

Single-page portfolio built on the existing TanStack Start + Tailwind v4 stack. All content lives on `/` with smooth-scroll anchor nav between sections.

## Design system (src/styles.css)

- Dark base: deep navy → charcoal radial/linear gradient background on `body`, with two soft blurred color "orbs" (violet + electric blue) as fixed decorative blobs behind content for glass depth.
- Palette (oklch tokens): `--background` deep navy, `--foreground` near-white, `--primary` electric violet (~oklch(0.7 0.2 285)), `--accent` teal/cyan (~oklch(0.78 0.14 200)), `--muted-foreground` cool gray.
- Glass tokens: `--glass-bg: color-mix(in oklab, white 6%, transparent)`, `--glass-border: color-mix(in oklab, white 14%, transparent)`, `--glass-shadow`. Utility `@utility glass { background: var(--glass-bg); backdrop-filter: blur(20px) saturate(140%); border: 1px solid var(--glass-border); box-shadow: var(--glass-shadow); }` and `glass-strong` variant.
- Fonts: Space Grotesk (headings) + Inter (body) loaded via `<link>` in `__root.tsx` head; mapped to `--font-display` and `--font-sans` in `@theme`.
- Reveal animation utility using `@keyframes` + IntersectionObserver hook to toggle a `data-revealed` attr (no framer-motion; keeps bundle light).

## Head / SEO (src/routes/__root.tsx)

Replace default title/description with:
- title: "Jahanvi Rana — Data Analyst & Aspiring Data Scientist"
- description: "Portfolio of Jahanvi Rana — Data Analyst, BI enthusiast, and aspiring Data Scientist based in Chandigarh."
- Matching og:title/description, og:type=website, twitter:card=summary_large_image.
- Add Google Fonts preconnect + stylesheet links.

## Files

- `src/routes/__root.tsx` — update head metadata + font links.
- `src/styles.css` — dark theme tokens, glass utilities, gradient background, reveal keyframes, font families.
- `src/hooks/use-reveal.ts` — IntersectionObserver hook returning a ref that sets `data-revealed="true"` once visible.
- `src/routes/index.tsx` — replace placeholder with `<Portfolio />`.
- `src/components/portfolio/` — small components:
  - `Navbar.tsx` (sticky glass nav, smooth-scroll anchors, mobile menu)
  - `Hero.tsx` (name, title, tagline, CTAs, social links, floating glass card + orbs)
  - `About.tsx`
  - `Competencies.tsx` (glass pills)
  - `Skills.tsx` (5 grouped glass cards w/ lucide icons)
  - `Projects.tsx` (2-col glass cards, hover-lift, expandable details via `<details>` or state)
  - `Research.tsx`
  - `Education.tsx` (timeline glass cards)
  - `Certifications.tsx` (glass badges)
  - `Contact.tsx` (info + form; form is client-only, shows toast via sonner on submit — no backend)
  - `Footer.tsx`
  - `Reveal.tsx` (wrapper applying the reveal hook)

## Content

All copy taken verbatim from the brief (Jahanvi Rana, contact info, both projects, research, education, certifications, competencies, skills groupings).

Links used:
- GitHub, LinkedIn, Kaggle, GitHub Portfolio — placeholder `#` anchors (user didn't provide URLs; will add a note in chat asking for real URLs).
- Resume: "Download Resume" button links to `/resume.pdf` placeholder; user can drop a file into `public/`.

## Behavior

- Smooth scroll via `html { scroll-behavior: smooth }` and anchor IDs on sections.
- Cards use `hover:-translate-y-1 transition` for hover-lift.
- Contact form is presentational only (no Cloud enabled); submit triggers a success toast.
- Fully responsive: single column on mobile, 2-col grids from `md:`, nav collapses to glass sheet on mobile.

## Out of scope

- No backend / Lovable Cloud (contact form doesn't send email).
- No CMS — content is hardcoded in components.
- Real resume PDF and real social URLs need to be provided by user afterward.