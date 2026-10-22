# Pronova Web — Codex instructions

This repository powers https://pronova-lab.com. Read `.agents/skills/pronova-web/SKILL.md` and its references before modifying code.

## Production hosting
- GitHub Pages is the production hosting environment for https://pronova-lab.com (confirmed by the user on 2026-10-22). Vercel is not used for hosting.
- `@vercel/analytics` is integrated in source code; actual analytics operation is unverified. Do not infer hosting or successful measurement from this integration.

## Working rules
- Inspect the current repository before making claims about its state. Historical notes are not source-of-truth.
- Preserve existing Next.js App Router structure, visual design, SEO metadata, sitemap, favicon, GA4 and contact submission instrumentation.
- Never commit secrets or copy actual environment variable values into documentation. Record names and purpose only.
- Make small, reviewable changes; run the available checks (inspect package.json first; typically `pnpm build`) before suggesting deployment.
- Do not push/deploy or modify production integrations without explicit instruction.
- After meaningful changes, update `.agents/skills/pronova-web/references/current-state.md` with verified facts, date, and git commit hash.
- Communicate with the user in Japanese, with step-by-step instructions when needed.
