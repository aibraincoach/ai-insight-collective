# AI Insight Collective — Architecture

## What this is
A static marketing site for AI Insight Collective, a done-for-you business intelligence platform targeting local retailers, BIAs, nonprofits, and multi-location owners.

The pitch: free/low-cost website rebuild gets clients in the door. Recurring AI-powered intelligence dashboard keeps them. The real product is the Monday morning briefing — three plain-English insights at 6 AM, no dashboard required.

## Live domain
aiinsight.us — Vercel Pro, Cloudflare DNS

## Stack
- Pure static HTML + JSX (no build step)
- React 18.3.1 via CDN (unpkg) — production builds (`react.production.min.js`, `react-dom.production.min.js`)
- Babel standalone via CDN (in-browser JSX transform)
- Tailwind CSS via CDN
- Google Fonts: Inter + Instrument Serif
- Hosted on Vercel (static site, zero config)

### Stack notes (ground truth as of PR #1 merge, 2026-06-12)
- **React CDN:** production.min.js builds (not dev). SRI `integrity` hashes on React, ReactDOM, and Babel — all three script tags in `index.html` carry hashes.
- **Layout scaling:** `FitSite` and `BigPanel` use `ResizeObserver` (replaced rAF polling in PR #1).
- **Runtime Babel** (`@babel/standalone`) is an accepted Milestone 1 trade-off. Pre-compile `aic-sections.jsx` to vanilla JS in PR2 — no build pipeline needed, just a committed `.js` file.
- **Video:** poster image at `assets/forest-poster.jpg` (frame exported from `nexora-hero.mp4`) for slow-connection fallback before autoplay.
- **Tailwind CDN + inline styles** coexist by design from the handoff. Normalize in a future Fable pass.
- **Animations:** hero entrance (`.rise`) and plan cards (`.card-anim`) use transform-only keyframes — opacity is never animated, so a frozen animation clock cannot hide content.
- **Vercel deployment protection** is currently enabled on the Pro team — preview URLs return 401 without auth. Disable in PR2 cleanup before sharing public preview links.

## File structure
```
/
├── index.html                   (main app shell + component logic)
├── aic-sections.jsx             (PainSelector, MondayBriefing, PricingSection, CTASection, AICFooter, PlanCard)
├── assets/
│   ├── brightblocks-dashboard.jpg
│   ├── brightblocks-new.jpg
│   ├── forest-poster.jpg
│   └── nexora-hero.mp4
├── claude.md
├── planning.md
└── tasks.md
```

## Key mechanics

### ?client=slug personalization
A query string mechanic that loads a pre-built version of the site with a specific client's data pre-populated. **Not yet in code** — `CLIENT_REGISTRY` is planned but does not exist in the repo yet. Needs to be applied to:
- CompareSlider (swap before/after images per client)
- NexoraDashboard (swap dashboard image per client)

Do not share personalized demo links until this is wired.

### Payment links
Three Stripe payment links defined at the top of `aic-sections.jsx` as `STRIPE_LINKS` constants. Currently set to `#pricing` placeholder. Client will provide real links.

### Scheduling link
`SCHEDULING_LINK` constant in `aic-sections.jsx`. Currently `#`. Client will provide.

## Pricing tiers
- See: $249/mo + $1,200 setup
- Know: $499/mo + $2,000 setup
- Act: $899/mo + $2,500 setup

Pricing amounts appear in two arrays (`PLAN_CARDS` for forest section, `TIERS` for pricing section) — keep both in sync when prices change.

## Products
- AI Insight Collective dashboard: ACTIVE
- Nihon Ninja: SHELVED

## Dead code (known, delete in PR2)
`NewSite`, `SIDEBAR_ITEMS`, `SITES`, `TinyIcon`, `AreaChart` in `index.html` — leftover from an earlier interactive dashboard mock. `NexoraDashboard` now renders a static screenshot only.
