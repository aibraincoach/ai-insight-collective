# AI Insight Collective — Agent Rules

## On every session start
1. Read planning.md
2. Read tasks.md
3. Check off nothing until you understand both

## Before clearing context
Write a session summary: what was done, what's next, any blockers found.

## Hard rules
- No bullet points in any customer-facing copy. Prose only.
- No generic agency language. The buyer is a business owner, not a marketing team.
- Role separation is strict: this repo is structure, logic, and code only. Design and conversion copy belong to the designer (Fable). Do not write final copy.
- Speed over perfection. Ship and iterate.
- Never break the ?client=slug personalization mechanic. It is the core of the demo flow.
- If you update any dependencies or CDN versions, document it in planning.md.
- All placeholder values (STRIPE_LINKS, SCHEDULING_LINK) are clearly marked TODO in aic-sections.jsx. Do not invent values. Leave them until the client provides real links.
