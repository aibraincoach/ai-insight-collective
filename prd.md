# PRD — AI Insight Collective Marketing Site

## One-line objective
Ship a product-facing website at aiinsight.us that passes Google Cloud startup credit review as a product company, within days, not weeks.

## Context
- Company: AI Insight Collective (Delaware entity). US-centric on purpose — Stripe account is tied to this address. No Canadian signals on this domain.
- Product: Insight Dashboard. AI-powered business intelligence platform. Setup fee plus recurring subscription.
- Reviewer requirements (per Google BD call): fully built-out website with products/services described, key team members, social media links. Must read as a product business, not consulting.
- Secondary audience: cold-outreach prospects who get sent here after the "we redesigned your site" email. The site must not embarrass that pitch.

## Success criteria
1. GCP startup credits application submitted with this URL and approved.
2. Site reads as a credible SaaS product to a stranger in under 30 seconds.
3. Live demo dashboard exists at /demo and can be shown to prospects on a call.
4. Shipped in 3 PRs or fewer.

## Explicitly out of scope (v1)
- Supabase, auth, user accounts, any database
- Blog, CMS, newsletter
- Stripe checkout / self-serve purchase
- Canadian domain, i18n, CAD pricing
- The actual Insight Dashboard product backend (the /demo route is static fake data)

## Pages
1. **Home** — hero, subhead, three product screenshots, use cases strip, CTA (Book a Demo).
2. **Product** — Insight Dashboard modules: executive dashboard, AI weekly insights, lead attribution, opportunity alerts, executive chatbot. Screenshot per module where available.
3. **Pricing** — three tiers (see below). Setup fee + monthly. "Book a Demo" CTA on every tier, no self-checkout.
4. **About** — company story (two paragraphs max), founder section with headshot, bio, LinkedIn and social links. This page is a hard requirement for the credits review.
5. **Contact** — form (name, email, company, message) via serverless function, plus Book a Demo scheduling link.
6. **Footer/legal** — Privacy Policy, Terms of Service, entity name and Delaware registration, copyright.

## Positioning
Company: AI Insight Collective
Product: Insight Dashboard
Core line: "We show business owners where their money is coming from and where they're leaving money on the table."

Vocabulary to use: platform, dashboard, intelligence layer, data connectors, weekly AI briefings, executive insights, implementation support.
Vocabulary to never use: consulting, agency, freelance, services-led, custom builds.

## Pricing (locked for v1)
| Tier | Setup | Monthly | Includes |
|---|---|---|---|
| Starter | $999 | $49 | Website redesign, analytics installation, executive dashboard |
| Growth | $1,999 | $149 | Starter + AI weekly insights, lead attribution, monthly executive report |
| Intelligence | $2,999 | $299 | Growth + AI signal detection, opportunity alerts, competitive monitoring, executive chatbot |

All USD. No discounts shown. No "contact us for pricing" — real numbers build product credibility.

## Demo dashboard (/demo)
- Static page styled as the real product UI. Fictional client: a plausible local retail/hospitality business.
- Must show: revenue-relevant metrics, traffic sources, an AI insights panel with judgment-style statements ("Leads down 23% this month", "41% of visitors leave on the pricing page"), and a weekly briefing card.
- Marketing screenshots on Home and Product are captures of this page. One artifact, two jobs.
- Not linked in main nav. Linked nowhere except where Raj shares it directly.

## Inputs only Raj can provide (blockers — collect before PR1 merges)
- [ ] Founder headshot
- [ ] Founder bio (3–4 sentences, product-company framing)
- [ ] LinkedIn URL + any other social links to list
- [ ] US mailing address matching Stripe
- [ ] Exact legal entity name as registered in Delaware
- [ ] Scheduling link (Cal.com or Calendly) for Book a Demo
- [ ] Destination email for contact form
