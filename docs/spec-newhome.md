# Spec: New Homepage

## Context

The original site was an interactive terminal homepage (`public/old/index.html` + `js/terminal.js`) with a custom `/reg` flow. Event management has moved to **Luma** (calendar `cal-MbzaaU1GVYLS8TM`). This spec covers the new static homepage at `/` that embeds Luma and recaps past events. The terminal is preserved at `/old`.

Production: **https://agentic-shift.eu/** · run by Alexey Krivitsky + Martin Westphal (Munich).

## Decisions

| Topic | Decision |
|-------|----------|
| Visual style | Terminal theme — black bg, orange `#d67757`, mono, pixel banner |
| Upcoming events | Luma **calendar embed iframe** (`/embed/calendar/cal-MbzaaU1GVYLS8TM/events`) |
| Past event embed | Custom clickable **cover card** → Luma event. Luma's `/embed/event/.../simple` always shows a Register box, so it's NOT used. |
| Follow-up newsletter | **Inlined** into `/past_events` (text + 5 photos), not a separate page |
| `/reg` flow | Dropped on new home; preserved at `/old` |

## Routing (`server.js`)
- `/` → `public/index.html` (new homepage).
- `/old` → `public/old/index.html` (terminal). Route registered **before** `express.static` so the dir isn't auto-redirected to `/old/`.
- `/api/register` retained (used only by `/old`).

## Homepage layout (`public/index.html`)
Top → bottom:
1. SEO `<head>` — title, description, keywords, canonical, Open Graph, Twitter card, JSON-LD Organization. Absolute URLs on `https://agentic-shift.eu`; OG/Twitter image = `/images/event1-cover.jpg`.
2. Pixel banner (`js/pixel-banner.js`) + tagline (`agentic engineering · organizational impact · meetups & trainings & conferences`) + Munich skyline ASCII.
3. `> /orga` — Alexey + Martin cards (reuse `.orga-*`, LinkedIn links).
4. `> /upcoming_events` — Luma calendar embed iframe.
5. `> /past_events` — inside `.past-panel` (gradient gray-blue→gray-purple, rounded): event #1 title (→ `luma.com/c0einz4e`) + date, minimal cover card, recap (78 attendees / themes / speakers), room photo, then the full follow-up newsletter inlined (blocks + 5 photos + wired report/community links).
6. `> /contacts` footer — Alexey (LinkedIn) + alexey@krivitsky.com.

## Styling
- `public/css/home.css` — home sections, news blocks, `.past-panel`, `.event-card`. New page = static (no boot animation, no input line).
- `public/css/terminal.css` reused unchanged (also serves `/old`).
- Responsive: single column on mobile; full-width images/iframes.

## Assets (`public/images/`)
- `event1-cover.jpg` — Luma social card (also OG image).
- `news-networking.jpg`, `news-audience.jpg`, `news-food.jpg`, `news-10xorg.jpg`, `news-selfie.jpg`.

## Past event / newsletter #1 data
- Event slug `c0einz4e`, id `evt-S5HVbaMCuoIxFcG` — Tue 19 May, 18:00–22:00 CEST, 78 attendees, hosted by EGYM.
- Inlined newsletter links: Janina Lermer (LinkedIn, de), Alexey Krivitsky (LinkedIn), @PATOffice (LinkedIn), WhatsApp community invite, EGYM (LinkedIn), 10X ORG (10xorg.com). "Sign up for #2" → Luma calendar.

## Verification
1. `node server.js` → `/`: banner, tagline, orga + LinkedIn, calendar iframe, `.past-panel` with cover card + recap + inlined newsletter + photos, contacts footer.
2. `/old`: terminal boots fully (`/help`, `/reg`, `/beer`).
3. Mobile width: everything stacks; images full-width.
4. View source: SEO meta present, all absolute URLs on `agentic-shift.eu`.
