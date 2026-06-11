# tasks.md

## Pre-PR (Raj, blocking)
- [x] Create GitHub repo, seed with project docs
- [ ] Reconnect repo to Vercel, point aiinsight.us via Cloudflare
- [ ] Approve brand/design direction (reject prior static + React builds)
- [ ] Supply: headshot, bio, LinkedIn/socials, US address, legal entity name, scheduling link, contact email
- [ ] Hand design_brief.md to Claude Design; receive approved design for React + Vite build

## PR1 — Vite scaffold + approved design
- [ ] React + Vite + React Router scaffold
- [ ] Vercel config (SPA rewrites + `/api`)
- [ ] Implement Raj-approved design system (not prior rejected builds)
- [ ] Routes: `/`, `/product`, `/pricing`, `/about`, `/contact`, `/demo`, `/privacy`, `/terms`
- [ ] Mobile (375px) and desktop (1440px) verified

## PR2 — Demo dashboard + content
- [ ] `/demo` built to approved spec: metrics, traffic sources, AI insights, weekly briefing
- [ ] Fictional client data: consistent, plausible, revenue-framed
- [ ] About page: Ray Tan bio, headshot, LinkedIn, LLC entity, Newark address
- [ ] `/demo` excluded from nav indexation (`noindex`)

## PR3 — Form, legal, polish
- [ ] `/api/contact.js` wired to destination email
- [ ] Contact form validation + success/error states
- [ ] SEO: titles, meta descriptions, OG tags, favicon, og-image
- [ ] Lighthouse 90+ performance and accessibility on all pages
- [ ] Final pass: no dead links, no placeholder text

## Post-launch (Raj)
- [ ] Submit GCP startup credits application with aiinsight.us
- [ ] Notify Sriya to track from her end
- [ ] Log application date here: ______

## Backlog (discovered work goes here, not into open PRs)
- (empty)
