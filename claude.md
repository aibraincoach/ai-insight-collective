# claude.md — Operating Rules for This Repo

## Project
Marketing site for AI Insight Collective / Insight Dashboard. Deployed on Vercel. DNS on Cloudflare. Domain: aiinsight.us.

**Fresh start:** Repo recreated June 2026 after failed static and React builds. No site code until Raj approves design direction.

## Roles
- Raj: owner, PM-of-record, reviewer. Approves all PRs.
- Claude (chat): coordinating PM. Owns scope, docs, and direction.
- Claude Design: owns visual design and the /demo dashboard UI.
- Claude Code: executes. Does not make scope or design decisions.

## Hard constraints
- **React + Vite** for the marketing site. Vercel builds `dist/`.
- Vercel serverless functions allowed under `/api` for the contact form only.
- No database. No Supabase. No auth. No client-side analytics beyond a single lightweight script if requested.
- No new dependencies without a line in planning.md explaining why.
- Design must match Raj-approved brand direction before any code ships.

## Workflow
- No direct pushes to `main`. Every change is a PR.
- One PR per task group in tasks.md. Do not bundle unrelated changes.
- PR description states: what changed, which tasks.md items it closes, anything deferred.
- If a task reveals new work, add it to tasks.md backlog — do not expand the current PR.

## Content rules
- US-centric: USD pricing, US address, Delaware entity. Zero Canadian references anywhere on the site.
- Never use the words: consulting, agency, services firm.
- Product vocabulary: platform, dashboard, intelligence layer, data connectors, weekly AI briefings, executive insights, implementation support.
- Copy is short, plain, and human. No corporate filler, no buzzword stacking.

## File layout (target)
```
/index.html              (Vite entry)
/src/                    (React pages + components)
/public/assets/          (fonts, logo, images)
/api/contact.js          (serverless function)
/docs/design_system.md   (live design constraints)
```

## Definition of done (per PR)
- Renders correctly at 375px and 1440px widths.
- All nav links work. No dead links, no lorem ipsum.
- Lighthouse performance and accessibility both 90+.
- Raj has reviewed and merged.
