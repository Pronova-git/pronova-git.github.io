# Pronova Web — conversation handoff

Source: ChatGPT conversation history. Historical reports below are not independently audited current state. Hosting references were corrected on 2026-10-22 based on user confirmation: production runs on GitHub Pages, not Vercel.

## Purpose and audience
- Pronova (https://pronova-lab.com) is a B2B consulting website for business development, technical support and Japan market entry, particularly telecom, AI and software companies.
- User prefers Japanese communication and step-by-step development assistance.

## Reported stack and workflow
- Next.js App Router, React/TypeScript, pnpm, Git/GitHub and GitHub Pages (hosting corrected by user confirmation on 2026-10-22).
- Development: `pnpm dev`; pre-deployment validation: `pnpm build`; version control: `git status`, `git add`, `git commit`, `git push`.
- Confirm exact repository path and installed versions from the actual environment; past chat examples may use different paths.

## Reported routes / content
- Home `/`, Services `/services`, Expertise `/expertise`, Experience `/experience`, About `/about`; contact route or contact form needs confirmation in code.
- Past sitemap work reportedly included `/`, `/services`, `/expertise` and omitted `/experience`, `/about` intentionally at that time. Verify current sitemap and indexing intent.
- Blog functionality was discussed but no implementation was confirmed.

## Analytics and SEO
- Google Analytics 4 measurement ID reported: `G-WT63VSHJPS`.
- `app/layout.tsx` reportedly initializes gtag via `next/script`, uses `anonymize_ip: true`, includes Search Console verification and favicon links, and includes Vercel Analytics code. Actual Vercel Analytics measurement is unverified; code inclusion does not establish operational measurement. Inspect for duplicate instrumentation.
- Contact form reportedly emits custom `contact_submit` event. GA4 DebugView had shown event firing.
- `contact_submit` was later marked a GA4 key event. This is not retroactive: earlier event counts do not become historical key events.
- Important analytics caveat: **event count / sessions is NOT GA4 session key event rate**. Event counts can include repeated actions, tests, and non-converting sessions; key-event rates should be taken from GA4 and qualified by date and filters.
- Historical GA4 screenshot for 2025-12-29 to 2026-01-25 showed 18 sessions (17 Direct, 1 Organic Search), 2 `contact_submit` events, but 0 key events for that period. Do NOT report 11.1% CVR or attribute these submissions to Organic Search.
- Historical Search Console screenshot showed `pronova` query: 8 impressions, 0 clicks, average position 16.6 in a prior seven-day period. Zero clicks cannot establish search-origin conversions.
- Sitemap submitted to Search Console; metadata for home/services reportedly adjusted; favicon files under `public/favicon/` reportedly present. Verify actual files and site metadata.

## External services to inventory
- GitHub Pages (confirmed production hosting/deployment; Vercel is not used for hosting)
- Vercel Analytics (`@vercel/analytics` code integration; actual measurement operation unverified)
- GitHub (repository)
- Google Analytics 4 (events/key events)
- Google Search Console (verification/indexing)
- Web3Forms was mentioned as contact form provider; verify current code/configuration.
- Never record API keys, tokens, private contact submissions or environment variable values.

## Prior issues to avoid
- `window.gtag` TypeScript declaration errors reportedly occurred; inspect existing global declarations before adding duplicate types.
- Check for duplicate GA4 tags, duplicate layout body, broken sitemap entries and build failures.

## Potential next work
- Add a blog, likely Markdown/MDX or headless CMS depending on editorial workflow.
- Improve non-branded SEO and article-to-services/contact navigation.
- Improve measurement/reporting for qualified leads and GA4 key events.
