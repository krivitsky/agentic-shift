# Agentic Shift — Terminal Page Spec (as-built)

> **Status:** superseded as homepage. This interactive terminal now lives at `/old`.
> Current homepage spec: [spec-newhome.md](./spec-newhome.md).
> This doc describes the **actual implementation** (`public/old/index.html` + `public/js/terminal.js`), not the original concept.

## Overview
Conference landing page styled as a draggable macOS terminal window, Claude Code CLI aesthetic. Fully interactive: boot animation, slash commands, animated easter eggs, and an in-terminal registration wizard.

## Stack
- Static HTML + vanilla JS, no build step.
- `public/old/index.html` — markup + window chrome.
- `public/js/terminal.js` — all behavior (~942 lines, IIFE).
- `public/js/pixel-banner.js` — pixel "AGENTIC SHIFT" banner (shared with new homepage).
- `public/js/config.js` — `AGENTIC_CONFIG` (price tiers, reg headline).
- `public/css/terminal.css` — styling.
- Color: orange `#d67757` on black, monospace.

## Markup structure
- `#terminal-wrapper > #terminal-frame`
  - `#title-bar` — 3 macOS dots (`.red`/`.yellow`/`.green`) + `agentic-shift` title.
  - `#terminal` — `#pixel-banner`, `#output`, `#input-line` (prompt label + `#command-input` + cursor).
- `#minimized-bar` (hidden) — `> reopen conference` + fake `> sudo rm -rf lol` button.

## Window chrome (traffic-light dots)
- **Red** → close. `confirm("Are you sure?")` → `window.close()`; fallback replaces body with `goodbye.` (browsers block close on non-script tabs).
- **Yellow** → minimize. Frame slides/fades out (`transform`+`opacity` 0.4s) → `#minimized-bar` appears:
  - `> reopen conference` → restores frame.
  - `> sudo rm -rf lol` → fake button, does nothing on purpose (gag).
- **Green** → maximize/restore toggle. Saves geometry, goes `position:fixed` fullscreen (`100vw×100vh`, no radius); click again restores saved geometry.

## Draggable window
- Mousedown on title-bar (not on dots) → frame `position:absolute`, follows cursor.
- Clamped to viewport bounds (`Math.max/min` against `innerWidth/Height`).
- Cursor → `grabbing` while dragging.

## Boot sequence
Gated by `localStorage.agenticShiftSeen`.

**First visit — `boot()` (animated):**
1. Typewriter title `welcome to agentic shift conference`.
2. ASCII Frauenkirche (church-only) drawn line-by-line.
3. Type date `munich, 23 june 2026 (tue)`.
4. **Signature animation:** church redraws as church-with-pretzel, then slides left 12 chars one at a time.
5. Venue link + price tier list (from config).
6. Separator line (CLI style).
7. Auto-types `/orga`, `/speakers`, `/help` with delays + per-char typing.
8. Live prompt + self-typing-then-deleting hint `type any command here...`.
9. Sets `agenticShiftSeen`.

**Return visit — `bootInstant()`:** same content dumped instantly, no scroll, stays at top.

## Interactive commands
- `/help` — list commands.
- `/orga` — Alexey + Martin cards (LinkedIn links, `.orga-*` styles).
- `/speakers` — 4 invited speakers (paul stack, benedikt stemmildt, vadym voitiuk, nikita filippov) + CFP "contact the organizer" card.
- `/program` — `coming soon...`.
- `/reg` — registration wizard (see below).
- `/contact` — address, VAT `DE301509127`, WhatsApp, email.
- `/beer` — animated: two beer glasses slide together → clink → `prost!` → looping foam wave.
- `/reboot` — clears `agenticShiftSeen`, reloads (replays intro).
- unknown → error + `type /help`.

Commands echoed in prompt style; all user input HTML-escaped.

## `/reg` registration wizard
- 7 sequential fields: `name`*, `email`* (regex validated), `role`, `company`, `payment_method`* (card/invoice, validated + lowercased), `linkedin`, `comment`. (`*` = required.)
- `/cancel` at any prompt aborts.
- **Form box:** bordered `.form-box`; live `#input-line` moved *inside* the box so the active field always renders at the bottom of the frame. Restored on close.
- Prompt label changes per field (`name>`, `email>`, …).
- **Already-registered guard:** `localStorage.agenticShiftRegistered` → `register another person? (y/n)`.
- **Price tiers** from `AGENTIC_CONFIG.price`: current / sold-out (below current) / upcoming display.
- Submit → POST `/api/register` (JSON, includes honeypot `website:''`) → on `ok` store name+email in localStorage + success line; on error show message + retry hint; network error handled.

## Misc behavior
- Mobile-aware scrolling: `isMobile = innerWidth <= 600` (scroll window vs `#terminal`).
- `suppressScroll` flag during instant boot.
- Click anywhere refocuses input (`preventScroll`).

## Routing
- Registered as `/old` in `server.js` **before** `express.static`, so the directory isn't auto-redirected.
