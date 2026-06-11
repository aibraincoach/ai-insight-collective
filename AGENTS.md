# Agent Instructions — AI Insight Collective

## Session Start Protocol
Every time you start a new session or context window, read these files in order:
1. `planning.md` — Architecture, decisions, and tech stack
2. `claude.md` — Operating rules, constraints, and workflow
3. `tasks.md` — Living roadmap of what is done and what is next

## Governance (Non-Negotiable)
- **No direct pushes to `main`.** Every single edit to this codebase must go through a Pull Request.
- Raj is the sole approver. All PRs require his review and explicit merge.
- One PR per task group. Do not bundle unrelated changes.
- PR descriptions must state: what changed, which `tasks.md` items it closes, and anything deferred.
- If a task reveals new work, add it to `tasks.md` backlog — do not expand the current PR.

## Project Context
- Marketing site for AI Insight Collective / Insight Dashboard.
- Domain: aiinsight.us
- Stack: Vanilla HTML, CSS, JS. No frameworks, no bundlers.
- Hosting: Vercel. DNS: Cloudflare.
- See `prd.md` for full requirements and `design_brief.md` for design direction.
