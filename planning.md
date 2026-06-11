# planning.md — Architecture, Decisions, Parking Lot

## Architecture
- **React + Vite** marketing site. React Router for pages. Vercel builds `dist/`.
- Hosting: Vercel (Pro account exists). Raj reconnects repo after fresh start.
- DNS: Cloudflare. aiinsight.us A/CNAME to Vercel per Vercel domain docs.
- Contact form: POST to `/api/contact.js` serverless function, forwards to email.

## Decisions log
| # | Decision | Why |
|---|---|---|
| 1 | No Supabase in v1 | Marketing site has no data. Database = drift. Supabase belongs to the actual product, later. |
| 2 | Multi-page over one-pager | GCP reviewer needs "fully built-out website." Multi-page + legal pages reads as a real company. |
| 3 | /demo route with fake client data | Generates the required screenshots and doubles as a live sales demo. |
| 4 | Real pricing numbers on the site | Self-serve-looking pricing signals product, not consulting. |
| 5 | USD only, Delaware footer | Stripe account protection. Canadian identity deferred to a separate domain. |
| 6 | Skip H0 hackathon for this project | Stack mismatch (v0 + AWS) and timeline contamination. Fitness coach is the better entry if any. |
| 7 | Vercel over Cloudflare Pages for hosting | Already paying for Pro, known workflow, serverless functions trivial. Cloudflare stays DNS-only. |
| 8 | React + Vite (not static HTML) | Product owner directive. Prior static HTML and first React attempt rejected — brand did not meet bar. |
| 9 | Repo deleted and recreated Jun 2026 | Prior PRs (#2, #3) rejected. Docs-only seed until design re-approved. |

## Risks
- **Blocker risk:** brand/design approval — no code ships until Raj signs off on visual direction.
- **Blocker risk:** founder content (headshot, bio, socials, address) — only Raj can supply.
- **Credibility risk:** screenshots that look fake. Mitigation: /demo gets real design effort, plausible numbers, consistent fictional client.
- **Drift risk:** temptation to start building the real dashboard product inside this repo. The product is a separate repo. This repo is marketing only.

## v2 parking lot (do not touch in v1)
- Canadian-friendly domain + geo-dynamic pricing/entity display
- Supabase-backed Insight Dashboard product (separate repo)
- Stripe self-serve checkout
- Case studies page (after first 2–3 real clients)
- Blog / SEO content
- Cold-outreach landing page variants per prospect
