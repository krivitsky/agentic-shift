# new design idea — hero banner

Status: **idea / reference only**. Not implemented. Captured 2026-07-15.

Reference image: [`new-design-idea.png`](./new-design-idea.png)

This is a visual direction for a wide hero banner, distinct from the current terminal-window
look of the homepage (see `docs/spec-newhome.md`). It keeps the mono/CLI flavor in the small
type, but drops the black + orange terminal palette in favor of a dark teal gradient.

## Canvas
- Wide banner, roughly 2000 × 780 (≈2.5:1), rounded corners.
- Background: dark navy → near-black vertical gradient, faint grid lines.
- A thin diagonal light streak crosses from top-right down to bottom-left, slightly right of center.

## Palette
- Background: deep navy/black (`#0b1117`-ish) with a teal-tinted gradient.
- Accent / primary: mint teal (`#3ddc9a`-ish) — used for the glitched word, the node graph, the eyebrow dot.
- Secondary accent: warm amber/orange (`#e8a33d`-ish) — used for the `/` separator and `½` in the meta row.
- Text: white / light gray for headline, muted gray for meta.

## Layout (top → bottom, left column)
1. **Eyebrow row** — small teal dot, then `LIVE WORKSHOP` · `THE AGENTIC TURN FOR AGILE TEAMS`
   in wide-tracked uppercase mono. Separated by a middot.
2. **Headline** — `Agentic Shift`, very large geometric sans (Poppins/Montserrat-like).
   - `Agentic` in white.
   - `Shift` in mint teal with a **horizontal glitch / scanline displacement** effect —
     bands of the word are offset left/right and slightly desaturated, like a torn CRT.
3. **Subtitle** — `Scrum Mastery / in the AI Age`, medium weight; the `/` is amber, the rest light gray.
4. **Divider** — thin 1px horizontal rule, low opacity, running most of the width.
5. **Meta row (bottom-left)** — mono, muted: `½ day` · `online` · `hands-on` (the `½` in amber).

## Right side
- **Node graph** — 5–6 small teal dots connected by thin lines in an irregular constellation,
  occupying the upper-right quadrant. One node is a hollow ring (larger, highlighted) — reads as
  the "agent" node. Evokes a network/graph without being a literal diagram.

## Bottom-right — CTA trio
Three pill buttons, left to right, escalating in emphasis:
1. `Learn` — outlined, teal-gray border, transparent fill.
2. `Share` — outlined, same treatment.
3. `Co-Create` — **filled**, teal→amber horizontal gradient, dark text. The primary action.

Buttons use mono type. The escalation Learn → Share → Co-Create is the point: it maps to a
ladder of participation.

## Notes / open questions
- Palette conflicts with the current site (orange `#d67757` on black, mono everywhere).
  Decide whether this is a one-off banner for a workshop offering, or a signal that the whole
  site moves to teal.
- The glitch on `Shift` is the signature element — worth doing in CSS (layered clipped copies
  with `transform: translateX`) rather than baking it into an image, so it can animate.
- No implementation planned yet. If picked up, write a proper spec in `docs/`.
