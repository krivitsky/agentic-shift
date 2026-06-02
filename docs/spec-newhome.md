# Spec: New Homepage

## Context

The site currently serves an interactive terminal homepage (`public/index.html` + `public/js/terminal.js`) for the Agentic Shift conference, Munich. Registration ran through a custom `/reg` terminal flow → `/api/register` webhook.

The organizers are shifting registration + event management to **Luma** (calendar `cal-MbzaaU1GVYLS8TM`). They want a **new, simpler homepage** that:
- reuses the terminal brand (pixel "AGENTIC SHIFT" banner + Munich skyline header),
- shows organizers Alexey + Martin up top,
- embeds the Luma calendar (auto-lists upcoming + past events),
- recaps past event #1 with text + photo.

The current rich terminal experience is **preserved at `/old`** (nothing lost).

---

## Decisions

| Topic | Decision |
|-------|----------|
| Visual style | Match terminal theme — black bg, orange `#d67757`, mono font, pixel banner |
| Event embed | Luma **calendar embed iframe**: `https://luma.com/embed/calendar/cal-MbzaaU1GVYLS8TM/events` |
| Terminal `/reg` flow | **Dropped** on new home; fully preserved at `/old` |
| Organizers | Keep Alexey + Martin on top |
| Past events | Keep — covered by calendar embed + dedicated #1 recap block |

---

## Requirements

### R1 — Routing
- `/` → new homepage (`public/index.html`).
- `/old` → current terminal homepage, unchanged behavior (boot animation, all commands, `/reg`).
- `/api/register` stays (still used by `/old`).
- Redirect switch (`REDIRECT_ENABLED` script) removed from new home.

### R2 — New homepage layout (top → bottom)
1. **Header** — pixel "AGENTIC SHIFT" banner (reuse `pixel-banner.js`) + Munich skyline ASCII. Mac-terminal window chrome retained for brand.
2. **Tagline** — `munich · agentic shift · meetups & conference`.
3. **`> /orga`** — Alexey + Martin cards (reuse `printOrga()` markup, `terminal.js:133`). LinkedIn links preserved.
4. **`> /events`** — Luma calendar embed iframe (upcoming + past).
5. **`> /past` — Agentic Shift Munich #1 recap** — text block + photo (R4).
6. **Footer** — link to `/old` ("> open the terminal"), contact, calendar link.

### R3 — Styling
- New page = static HTML, no boot animation, no input line.
- Reuse `public/css/terminal.css` (banner, `.orga-*`, `.venue`, `.separator`, colors).
- New `public/css/home.css` for section headings, iframe container, recap two-column (stacked on mobile).
- Responsive: mobile stacks everything; iframe full-width.

### R4 — Past event #1 recap content
Source: `https://luma.com/c0einz4e` + organizer newsletter.
- **Heading:** `agentic shift munich #1`
- **Body:** first meetup, 78 attendees, hosted by EGYM. themes: cutting agentic slop via direct feedback signals for agents; why individual AI speed gains don't compound at org scale; establishing agentic workflows. speakers: martin westphal, alexey krivitsky, cem freimoser.
- **Image:** group photo → `public/images/event1.jpg` (fallback: Luma cover).
- **Link:** "> recap" → `https://luma.com/c0einz4e`.

---

## Implementation

### Files
- **`public/old/index.html`** ← current `public/index.html` verbatim (minus redirect script). Absolute asset paths keep working.
- **`server.js`** — add `/old` route:
  ```js
  app.get('/old', (req, res) =>
    res.sendFile(path.join(__dirname, 'public', 'old', 'index.html')));
  ```
- **`public/index.html`** — rewritten static homepage. Loads `pixel-banner.js` only (no `terminal.js`/`config.js`).
- **`public/css/home.css`** — new home styles.
- **`public/images/event1.jpg`** — recap photo.

### Reuse
- Pixel banner: `public/js/pixel-banner.js`.
- Organizer cards: `terminal.js:133` / `terminal.css:414` (`.orga-*`).
- Color vars, `.separator`, `.venue-link`: `terminal.css:7`.
- Munich skyline ASCII: `CHURCH_WITH_PRETZEL`, `terminal.js:101`.

### Luma embed
```html
<iframe src="https://luma.com/embed/calendar/cal-MbzaaU1GVYLS8TM/events"
        width="100%" height="640" frameborder="0"
        style="border:1px solid #222;border-radius:8px;background:#000"
        allowfullscreen aria-hidden="false" tabindex="0"></iframe>
```
Fallback: per-event checkout buttons from `luma-team/examples`.

---

## Verification
1. `node server.js` → `http://localhost:3000/`: banner + skyline render; orga cards + LinkedIn links; Luma iframe lists events; #1 recap text + photo; "recap" → luma.com/c0einz4e; footer "open the terminal" → `/old`.
2. `http://localhost:3000/old`: full terminal boots (`/help`, `/reg`, `/beer` work); assets load.
3. Mobile width: everything stacks.
4. `index.html` no longer contains `REDIRECT_ENABLED`.

## Open items
- Provide/approve actual `event1.jpg` photo — else Luma cover used as fallback.
