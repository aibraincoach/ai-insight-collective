# AI Insight Collective — Tasks

## DONE — Milestone 1 (2026-06-12)

- [x] Initialize GitHub repo `ai-insight-collective` — 2026-06-12
- [x] Add all project files to root — 2026-06-12
- [x] Create claude.md, planning.md, tasks.md — 2026-06-12
- [x] Connect repo to Vercel (framework: Other, no build command, root = output) — 2026-06-12
- [x] Confirm build succeeds (static) — 2026-06-12
- [x] Confirm assets load (video, both images) — 2026-06-12
- [x] Confirm compare slider animates on load — 2026-06-12
- [x] Confirm plan cards render over forest section — 2026-06-12
- [x] Confirm mobile layout — 2026-06-12
- [x] Share Vercel Preview URL with client — 2026-06-12
- [x] PR #1 merged to main — 2026-06-12

## MILESTONE 2 — blocked on client

- [ ] Client approves Vercel preview
- [ ] Replace STRIPE_LINKS in aic-sections.jsx with real Stripe payment links (See / Know / Act)
- [ ] Replace SCHEDULING_LINK in aic-sections.jsx with real scheduling URL
- [ ] Test all payment buttons on mobile (click → Stripe checkout → correct price)
- [ ] Connect aiinsight.us on Cloudflare DNS via Vercel
- [ ] Submit GCP startup credits application

## PR2 CLEANUP — no blockers, do in one pass

- [ ] Disable Vercel deployment protection so preview URLs are publicly accessible
- [ ] Pre-compile aic-sections.jsx to vanilla JS — remove @babel/standalone from index.html
- [ ] Apply ?client=slug query string to CompareSlider (swap before/after images per client)
- [ ] Apply ?client=slug query string to NexoraDashboard (swap dashboard image per client)
- [ ] Add CLIENT_REGISTRY to codebase with initial Bright Blocks entry
- [ ] Delete dead code: NewSite component, SIDEBAR_ITEMS, SITES, TinyIcon, AreaChart
- [ ] PainSelector: add role="tablist", role="tab", aria-selected, role="tabpanel", ArrowLeft/ArrowRight keyboard nav
- [ ] useStateS alias → React.useState in aic-sections.jsx
- [ ] Namespace window globals: window.AIC = { PainSelector, ... } instead of Object.assign(window)
- [ ] CompareSlider onMove: simplify to e.clientX only (touches property is always undefined on PointerEvent)
- [ ] prefers-reduced-motion: wrap scroll-behavior: smooth in @media query
- [ ] Wire inert nav buttons to #pricing
- [ ] FOOT_COLS: convert link strings to { label, href } objects for easy wiring later

## FUTURE

- [ ] Decide product name for the intelligence dashboard (working candidate: "Command Center" — needs iteration before it appears in code or copy)
- [ ] Once product name confirmed: update compare slider "After" label, nav, and all copy references
- [ ] Fable: design + copy pass on PainSelector, MondayBriefing, PricingSection, CTASection, Footer
- [ ] Validate pricing tiers against market — current numbers are estimates, not market-validated
- [ ] Nihon Ninja: shelved — revisit when bandwidth exists
