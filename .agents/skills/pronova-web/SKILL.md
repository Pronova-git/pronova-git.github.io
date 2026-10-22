---
name: pronova-web
description: Maintain and extend the Pronova Next.js website, preserving SEO, analytics, contact form, and GitHub Pages deployment workflows. Use for Pronova website development, debugging, content and blog features.
---

# Pronova website workflow

1. Read `references/history.md` for historical context and `references/current-state.md` for the last verified audit.
2. Inspect the actual repo: `pwd`, `git status`, `git log -1 --oneline`, `package.json`, `app/`, `components/`, `public/`, `next.config.*`, `.github/workflows/deploy.yml`, `public/CNAME`, and any README. Avoid dumping `.env*` values.
3. For each request, identify affected routes, dependencies, integrations and SEO/analytics effects before editing.
4. Make the smallest safe changes. Verify with scripts present in `package.json` (usually `pnpm build`).
5. Report changes, verification results, remaining uncertainties, and update `references/current-state.md` if appropriate.

## First-run audit

On first use, perform a read-only audit and fill out `references/current-state.md`: actual file tree, routes, page status, dependencies and versions, GA4/Search Console, sitemap/robots, contact form, hosting/deployment, environment variable names (not values), integrations and unresolved issues. Mark any service-side settings as *unverified* unless access or evidence exists. Ask user for access/screenshots only when repository inspection cannot establish facts.

## Production hosting

GitHub Pages is the production host (user-confirmed on 2026-10-22); Vercel is not used for hosting. The `@vercel/analytics` code integration does not establish successful measurement. Record its runtime measurement status separately; it remains unverified.

## Historical context

See `references/history.md`. Treat its contents as prior conversation notes, not proof of current implementation.
