# agentic-shift.com

The website for **agentic-shift.com** — a short manifesto for professional agentic product
engineering, plus the Agentic Shift Munich meetups. Run by Alexey Krivitsky and Martin Westphal.

- Production: https://agentic-shift.com/
- GitHub: git@github.com:krivitsky/agentic-shift.git (branch: `main`, public repo)

## Workflow
- Always create a task list (TaskCreate) for any multi-step request and follow it — mark in_progress when starting, completed when done.

## Stack
- Plain static site: HTML + CSS in `public/`, **no build step, no dependencies** — no `package.json`, nothing to install.
- Production serves `public/` statically (`vercel.json`); Vercel resolves clean URLs (`/munich`) natively. Local dev: `npx serve public` → http://localhost:3000. Keep it dependency-free — a local server that adds routes Vercel doesn't have creates dev/prod drift (that's how a `/new` redirect lived in dev while prod 404'd for months).

## Deploy
- Vercel, auto-deploys on push to `main`. Commit + push only when asked.
- **When the user says "commit"/"push": commit, push, then poll and report the Vercel deploy status:**
  `gh api repos/krivitsky/agentic-shift/commits/<sha>/status --jq '.state, .statuses[0].target_url'`
  → `pending` until done, then `success`/`failure`. Report final state + the `target_url`.

## Routes
- `/` → manifesto homepage (`public/index.html`): "Agentic Shift" hero + five org-design shifts. Links to `/munich`.
- `/munich` → Munich meetups (`public/munich/index.html`): next meetup, Luma calendar embed, organizers, community, past events.
- `/decks/*` → talk slides linked from `/munich` (Martin's PDF, Nikita's HTML deck).

## Design system (`public/css/shift.css`)
- Ink `#05090d`, teal `#3ddc9a`, amber `#e8a33d`; Poppins headings + JetBrains Mono labels; rounded bordered cards; `>`-prefixed mono section labels. `/munich` layers on `public/css/meetups.css`.

## Content & SEO
- Manifesto copy lives in **three** places that must be kept in sync when edited: `public/index.html` (rendered page), `README.md` (top section), and `public/llms.txt` (machine-readable).
- Full `<head>` meta on both pages (title, description, OG, Twitter, JSON-LD Organization). **Relative URLs only in the page `<head>`** — no absolute URLs, no `.eu`. OG images: `/` → `og-shift.png`, `/munich` → `event1-cover.jpg`.
- **Crawler/LLM files** in `public/` (served at site root): `robots.txt`, `sitemap.xml`, `llms.txt`, `ai.txt`, `site.webmanifest`. These use **absolute `https://agentic-shift.com` URLs** (required by their specs — the relative-only rule is `<head>`-meta only). Pages carry `<link rel="alternate" type="text/markdown" href="/llms.txt">` + `<link rel="manifest">`.

## Analytics
- Google Analytics 4, property `G-SJW53LEJGS` — standard inline gtag.js snippet at the end of `<head>` in **all three** HTML files (`public/index.html`, `public/munich/index.html`, `public/decks/*.html`). No build step, so a new page needs the snippet pasted in by hand.

## Luma (for /munich)
- Calendar `cal-MbzaaU1GVYLS8TM` — embed `https://luma.com/embed/calendar/cal-MbzaaU1GVYLS8TM/events`.
