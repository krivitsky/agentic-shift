# agentic-shift.com

The website for **agentic-shift.com** — a short manifesto for professional agentic product
engineering, plus the Agentic Shift Munich meetups. Run by Alexey Krivitsky and Martin Westphal.

- Production: https://agentic-shift.com/
- GitHub: git@github.com:krivitsky/agentic-shift.git (branch: `main`, public repo)

## Workflow
- Always create a task list (TaskCreate) for any multi-step request and follow it — mark in_progress when starting, completed when done.

## Stack
- Plain static site: HTML + CSS in `public/`, **no build step**.
- `server.js` (Node + Express) is a **local dev** server that adds clean routes; production serves `public/` statically (`vercel.json`). Run: `node server.js` → http://localhost:3000

## Deploy
- Vercel, auto-deploys on push to `main`. Commit + push only when asked.
- **When the user says "commit"/"push": commit, push, then poll and report the Vercel deploy status:**
  `gh api repos/krivitsky/agentic-shift/commits/<sha>/status --jq '.state, .statuses[0].target_url'`
  → `pending` until done, then `success`/`failure`. Report final state + the `target_url`.

## Routes
- `/` → manifesto homepage (`public/index.html`): "Agentic Shift" hero + five org-design shifts. Links to `/munich`.
- `/munich` → Munich meetups (`public/munich/index.html`): next meetup, Luma calendar embed, organizers, community, past events.
- `/new` → 301 redirect to `/` (legacy).

## Design system (`public/css/shift.css`)
- Ink `#05090d`, teal `#3ddc9a`, amber `#e8a33d`; Poppins headings + JetBrains Mono labels; rounded bordered cards; `>`-prefixed mono section labels. `/munich` layers on `public/css/meetups.css`.

## Content & SEO
- Manifesto copy is authored **inline in `public/index.html`**, and mirrored as prose in the top section of `README.md`. **When editing the manifesto text, update both — they must stay in sync.**
- Full `<head>` meta on both pages (title, description, OG, Twitter, JSON-LD Organization). **Relative URLs only — no absolute URLs, no `.eu`.** OG images: `/` → `og-shift.png`, `/munich` → `event1-cover.jpg`.

## Luma (for /munich)
- Calendar `cal-MbzaaU1GVYLS8TM` — embed `https://luma.com/embed/calendar/cal-MbzaaU1GVYLS8TM/events`.
