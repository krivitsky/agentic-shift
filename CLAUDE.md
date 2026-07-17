This is the homepage for **agentic-shift.com** initiatives.
Run by Alexey Krivitsky and Martin Westphal in Munich — monthly meetups now, with plans for trainings, conferences, and consulting.
Theme: agentic engineering + organizational impact. The site looks like a terminal window — for fun.

## Domain
- Production: https://agentic-shift.com/
- GitHub: git@github.com:krivitsky/agentic-shift.git (branch: main)

## Workflow
- **Always create a task list (TaskCreate) for any multi-step request and follow it — mark tasks in_progress when starting and completed when done.**

## Stack
- Node + Express (`server.js`), static files in `public/`. Run: `node server.js` → http://localhost:3000
- No build step. Edit files in `public/`, commit, deploy.
- `/api/register` posts to `REG_WEBHOOK_URL` (legacy; no page currently uses it). Returns 500 if env var unset.

## Deploy
- Hosted on Vercel, auto-deploys on push to `main` (GitHub integration). `vercel` CLI installed globally.
- **When the user says "commit": commit, push, then wait for and report the Vercel deploy status.** Poll the GitHub commit status (Vercel posts it there):
  `gh api repos/krivitsky/agentic-shift/commits/<sha>/status --jq '.state, .statuses[0].target_url'`
  → `pending` until done, then `success`/`failure`. Report final state + the `target_url` (Vercel deployment URL).

## Routes
- `/` → manifesto homepage (`public/index.html`). The "Agentic Shift" hero + five org-design shifts. Dark ink/teal/amber "shift" design system (`css/shift.css`). Links to `/munich`.
- `/munich` → Munich meetups (`public/munich/index.html`). Built on the same shift design system (`css/shift.css` + `css/meetups.css`): next meetup, Luma calendar embed, organizers, community, past events (#2 talks, #1 newsletter). Route registered BEFORE `express.static`.
- `/new` → 301 redirect to `/` (the manifesto used to live at `/new`).
- `/old` and its interactive terminal were removed. `terminal.css` / `home.css` / `js/*` remain only as legacy assets (not referenced by `/` or `/munich`).

## Homepage layout (`public/index.html`)
Hero (glitch "Shift" headline + rising dot-graph SVG, `css/shift.css`) → two-paragraph lede → `> towards professional agentic product engineering` section head → the five shifts (features→systems, gatekeeping→guardrails, specialists→craftspeople, proxies→users, output→outcomes) → footer. Hero has a "meetups in munich → /munich" link.

## Munich layout (`public/munich/index.html`)
Topbar breadcrumb (← agentic shift / munich) → compact hero (CTAs: register #3, all events) → `/next_meetup` (feature card + priority list + Luma calendar embed) → `/organizers` → `/community` (WhatsApp) → `/past_events` (recap cards for #2 and #1). Styles: `css/meetups.css` (extends shift.css tokens).

## Luma
- Calendar id: `cal-MbzaaU1GVYLS8TM` → https://luma.com/calendar/cal-MbzaaU1GVYLS8TM
- Calendar embed: `https://luma.com/embed/calendar/cal-MbzaaU1GVYLS8TM/events`
- Event #1: slug `c0einz4e`, id `evt-S5HVbaMCuoIxFcG` (Tue 19 May, 18:00–22:00 CEST, 78 attendees, hosted by EGYM)
- Luma `/embed/event/<id>/simple` always shows a Register box — no register-free variant. Past event uses a custom cover card instead.

## Images (`public/images/`)
- Organizers/speakers: `alexey.png`, `martin.png`, etc.
- `/` OG image: `og-shift.png` (1200×630, generated from the hero look via `scratchpad/og-shift.html` rendered in Chrome)
- `/munich` OG image: `event1-cover.jpg` (Luma social card)
- Newsletter photos: `news-*.jpg`; meetup #2 photos: `meetup2-*.jpg`

## Newsletter #1 report links (wired in `/past_events`)
- Janina Lermer (LinkedIn, auf Deutsch), Alexey Krivitsky (LinkedIn), @PATOffice (LinkedIn)
- WhatsApp community invite, EGYM (LinkedIn), 10X ORG (10xorg.com)

## SEO
- Full meta in `<head>` of both pages: title, description, keywords, canonical, Open Graph, Twitter card, JSON-LD Organization (founders). **Relative URLs only — no absolute URLs, no `.eu`.**

## Specs
- `docs/spec-newhome.md` — legacy terminal homepage design (superseded)
- `specs/shift-happens.md`, `specs/new-design-idea.md` — the shift/manifesto design now at `/`

## Conventions
- Brand voice: lowercase, terminal/CLI flavor.
- **Shift design system (`css/shift.css`)**: ink `#05090d`, teal `#3ddc9a`, amber `#e8a33d`; Poppins headings + JetBrains Mono labels; rounded bordered cards. Section labels as mono `> /command` or `.eyebrow-label`.
- Commit + push only when asked.
