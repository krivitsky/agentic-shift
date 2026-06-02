This is the homepage for **agentic-shift.eu** initiatives.
Run by Alexey Krivitsky and Martin Westphal in Munich — monthly meetups now, with plans for trainings, conferences, and consulting.
Theme: agentic engineering + organizational impact. The site looks like a terminal window — for fun.

## Domain
- Production: https://agentic-shift.eu/
- GitHub: git@github.com:krivitsky/agentic-shift.git (branch: main)

## Stack
- Node + Express (`server.js`), static files in `public/`. Run: `node server.js` → http://localhost:3000
- No build step. Edit files in `public/`, commit, deploy.
- `/api/register` posts to `REG_WEBHOOK_URL` (only used by the legacy `/old` terminal). Returns 500 if env var unset.

## Routes
- `/` → new static homepage (`public/index.html`). Terminal-themed but NOT interactive.
- `/old` → original interactive terminal (`public/old/index.html` + `js/terminal.js`). Boot animation, `/help`, `/reg`, `/beer`, etc. Route registered BEFORE `express.static` so the dir isn't auto-redirected.

## New homepage layout (`public/index.html`)
Pixel banner (`js/pixel-banner.js`) → tagline → Munich skyline ASCII → sections:
- `> /orga` — Alexey + Martin cards (reuses `.orga-*` from `css/terminal.css`)
- `> /upcoming_events` — Luma calendar embed iframe
- `> /past_events` — inside a gradient `.past-panel` (gray-blue→gray-purple): event #1 title/date, minimal clickable cover card (no Luma register box), recap, then the full follow-up newsletter (text + 5 photos) inlined
- `> /contacts` footer — Alexey (LinkedIn) + alexey@krivitsky.com
- Styles in `public/css/home.css` (home + news + panel). `terminal.css` reused, untouched for `/old`.

## Luma
- Calendar id: `cal-MbzaaU1GVYLS8TM` → https://luma.com/calendar/cal-MbzaaU1GVYLS8TM
- Calendar embed: `https://luma.com/embed/calendar/cal-MbzaaU1GVYLS8TM/events`
- Event #1: slug `c0einz4e`, id `evt-S5HVbaMCuoIxFcG` (Tue 19 May, 18:00–22:00 CEST, 78 attendees, hosted by EGYM)
- Luma `/embed/event/<id>/simple` always shows a Register box — no register-free variant. Past event uses a custom cover card instead.

## Images (`public/images/`)
- Organizers/speakers: `alexey.png`, `martin.png`, etc.
- Event #1 cover: `event1-cover.jpg` (Luma social card, also the OG/Twitter image)
- Newsletter photos: `news-networking.jpg`, `news-audience.jpg`, `news-food.jpg`, `news-10xorg.jpg`, `news-selfie.jpg`

## Newsletter #1 report links (wired in `/past_events`)
- Janina Lermer (LinkedIn, auf Deutsch), Alexey Krivitsky (LinkedIn), @PATOffice (LinkedIn)
- WhatsApp community invite, EGYM (LinkedIn), 10X ORG (10xorg.com)

## SEO
- Full meta in `<head>`: title, description, keywords, canonical, Open Graph, Twitter card, JSON-LD Organization (founders + Luma). All absolute URLs use https://agentic-shift.eu.

## Specs
- `docs/spec-newhome.md` — current homepage (NOTE: written for the early separate-`/news` design; newsletter is now inlined into `/past_events` — update if revising)
- `docs/spec-terminallike-page.md` — original terminal page (now at `/old`)

## Conventions
- Brand voice: lowercase, terminal/CLI flavor. Section headings styled as `> /command`.
- Color: orange `#d67757` on black. Mono font.
- Commit + push only when asked.
