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

## File structure
```
/
├── index.html                   (main app shell + component logic)
├── aic-sections.jsx             (PainSelector, MondayBriefing, PricingSection, CTASection, AICFooter, PlanCard)
├── assets/
│   ├── brightblocks-dashboard.jpg
│   ├── brightblocks-new.jpg
│   └── nexora-hero.mp4
├── claude.md
├── planning.md
└── tasks.md
```

## Key mechanics

### ?client=slug personalization
A query string mechanic that loads a pre-built version of the site with a specific client's data pre-populated. Scaffolded but not fully wired. CLIENT_REGISTRY lives in the HTML file. Needs to be applied to:
- CompareSlider (swap before/after images per client)
- NexoraDashboard (swap dashboard image per client)

### Payment links
Three Stripe payment links defined at the top of aic-sections.jsx as STRIPE_LINKS constants. Currently set to #pricing placeholder. Client will provide real links.

### Scheduling link
SCHEDULING_LINK constant in aic-sections.jsx. Currently #. Client will provide.

## Pricing tiers
- See: $249/mo + $1,200 setup
- Know: $499/mo + $2,000 setup  
- Act: $899/mo + $2,500 setup

## Products
- AI Insight Collective dashboard: ACTIVE
- Nihon Ninja: SHELVED
