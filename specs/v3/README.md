# Spec v3: manifesto copy rework (6 shifts)

**Status:** ready to build, English only. Not started; `main` is still at cc264b1.
**Decided:** 2026-10-25, Alexey with Aidy on Telegram. The full discussion and the reasons are in the Aidy workspace at `streams/AgenticShift/manifesto-shifts-brainstorm-2026-10-25.md`.
**Design:** Alexey will drop a design archive in `specs/v4/design/`. That is v4, a separate step. **v3 is the copy only, rendered in the current design.**

## Scope

- **In:** the English copy of the homepage (`manifesto/content/en.json` → `/`).
- **Out:** the other 11 languages (Alexey, 2026-10-25: "let's do english for now only"); new layout or sliders (v4); the OG image; `site.webmanifest`.
- **Watch out:** `build.js` exits 1 on translation drift (see CLAUDE.md §Manifesto i18n). Shipping English alone breaks that rule. **Before you touch `build.js`, propose to Alexey how to ship English alone** (for example a temporary allow-list that keeps the 11 languages on the old copy) and get his OK. Don't silently relax the parity check.
- Ship it as a **quick patch**: copy edits on `main`, no preview branch, no screenshots. Done means `/` is live with the new text and `/de/` still returns 200.

## New page order and copy (English, use exactly as written)

The hero (headline + subtitle) stays as it is.

### What we stand for: removed (Alexey, 2026-10-25)
Drop the whole section (`standHead`, `stand[]`). The subtitle and the new shifts intro say the same things. Its one unique line moves into the intro (see 1 below).

### What we shift toward

Alexey's wording, 2026-10-25 22:02, proofread. Three paragraphs come before the cards. They replace the current `shiftIntro`, and they replace the FOMO paragraph that sits in the refuse section today:

1. > We use AI tools every day, and we enjoy them. AI is a democratized technology. Everyone has it, so on its own it gives no one an edge. It accelerates whatever tendencies an organization already has. So it is important to know your competitive advantage and how to amplify it with a strategic AI adoption, instead of sprinkling AI around because of the FOMO the AI vendors spread.

2. > Below are the shifts that organizations wanting sustainable quality, real customer value and high adaptability make.

3. > Use them as inspiration to define your strategy, so that you own the agentic shift and make it happen on your terms.

4. Six `→` cards, in this order. They replace all current `shifts[]`. Titles stay lowercase:

| # | from | to | note |
|---|---|---|---|
| 1 | narrow specialists | complete craftspeople | Enabling product engineers to shift from narrow, assembly-line specialists to end-to-end craftspeople — with AI filling the specialist gaps and offering upskilling for entering new domains. |
| 2 | coordinating dependencies | extreme cocreation | Instead of coordinating fragments through handoffs and integration meetings, complete craftspeople work in flow with their agents and with each other, alternating between focused work and looking at the whole product together, improving it as a whole. |
| 3 | coding features | designing self-verifying agentic systems | Moving product engineers from coding features one by one to designing the agentic systems that build them — self-improving loops that turn intent into tested, working software and verify every change against tests and specs, while product engineers own the tests and the value loop. |
| 4 | the telephone game | zero distance to users | Ending the telephone game through manager-proxies and the era of "IT sitting in the basement" — instead putting product engineers at zero distance with the customers and users, to empathize, analyze, and synthesize firsthand. |
| 5 | counting output | owning outcomes | Elevating product engineers from counting output to owning the complete value loop — ensuring real customer impact, experimenting and course-correcting as the evidence comes in. |
| 6 | work follows people | people follow value | Organizing around value instead of around existing roles and team boundaries — product engineers move to where the most valuable work is as priorities shift, which keeps the whole organization adaptable. |

Nothing comes after the cards in this section.

### Removed

- `shiftNotNew` ("These shifts are not new…") and `shiftOutro` ("…yours to decide…").
- The whole **What we refuse to accept** section: `refuseHead`, `refuseIntro` (its FOMO idea moves into the opener above), `refuseLead`, `refusals[]` (the three `≠` cards) and `refuseOutro` (including "Org design, then AI.").
- The current cards `features → systems` and `inspection → verification`. Both are merged into card 3.

### What's Next
No change.

## JSON key mapping (suggestion)

- Turn `shiftIntro` into the three paragraphs above (an array, or three keys), and rewrite `shifts[]`.
- Drop `shiftNotNew`, `shiftOutro` and every `refuse*` key from the English page, and remove their blocks from `template.html` and the Markdown emitters in `build.js`. This must work together with the English-only plan from Scope.
- Drop `standHead` and `stand[]` and their template block.
- Update CLAUDE.md §Routes and §Manifesto i18n "Page shape" so they describe the new structure.

## v4 (later, not now): the interactive "Own your shift" block

Alexey has already decided the following, so record it here for v4:
- **The 6 shift rows are themselves the interactive block** (Alexey's mock, 2026-10-25): each row has a horizontal slider with "from" at the left end and the bold "to" title at the right end, plus the note. Above the rows: the headline **"Own your shift"** (singular, no period), the reset button and the "Try a sample mix" button.
- There is one horizontal slider per shift, with the "from" side on the left and the "to" side on the right. This is the layout of board #21 on the design canvas https://claude.ai/artifact/RsUjUpNnmqTFavY2czdcu3.
- The sliders start fully left and show no numbers, and there is a reset button (behavior from #22). A "Try a sample mix" button sets an example mix (from #23).
- **The knobs travel right on their own when the block comes into view** (Alexey, 2026-10-25, with a screenshot of the 6-slider mock). Each knob slides from the "from" end to the "to" end the first time its row scrolls into view (IntersectionObserver). The rows go one after another in a short stagger, the animation is smooth and eases out, and it plays once per page load. After that the visitor can drag freely. Reset puts the knobs back to the left without replaying the animation. With `prefers-reduced-motion`, show the knobs at the right end with no animation.
- A "mixer view" toggle with vertical faders (#23) may come later.
- The canvas boards still show the old 9 shifts on 3 levels, so redraw everything with the 6 flat shifts.
- **Type sizes. The mocks were too small (Alexey, 2026-10-25), so these are minimums.** Intro paragraphs: 18 px on desktop and 17 px on mobile, line-height 1.55. Shift notes: 16 px everywhere, line-height 1.5. "from" labels: 15 px. "to" titles: 22 px or more on desktop and 19 px on mobile, bold. Buttons: 16 px. Footer and captions: 14 px or more, nothing smaller. Keep text columns at 60–75 characters wide. Big headlines (the hero, "Own your shift") stay as large as in the mocks.
- **Palette, decided 2026-10-25: two themes, dark and light, from the same brand (ink + teal + amber). No red anywhere.** The page follows the visitor's system setting (`prefers-color-scheme`) by default and has a small sun/moon toggle in the header that overrides it and is remembered. Both themes use the same tokens:

| Token | Dark | Light | Use |
|---|---|---|---|
| `--bg` | `#05090D` | `#FFFFFF` | Page background |
| `--text` | `#EDF1EF` (17.5:1) | `#05090D` (20:1) | Body text, headlines, slider knobs |
| `--accent` | `#3DDC9A` (11.3:1) | `#0E7A55` (5.3:1) | Teal as text or thin line: the bold "to" title of each shift, links, focus ring |
| `--fill` | `#3DDC9A` | `#3DDC9A` | Teal as a surface: the filled part of each slider track, the "Own your shift" band. Text on it is always `#05090D` (11.3:1). |
| `--amber` | `#E8A33D` | `#E8A33D` | One highlight only: the "Try a sample mix" button, with `#05090D` text (9.3:1) |
| `--muted` | `#9AA4AC` (7.9:1) | `#5B6670` (5.9:1) | Secondary text: the "from" labels, captions |
| `--line` | `#2A333A` | `#E3E7E5` | Hairlines, the empty part of the slider track, ticks |
| `--panel` | `#1C2329` | `#F4F6F5` | Optional card or panel background |

  On a slider row, "from" is `--muted`, "to" is `--accent` bold, the track fills with `--fill` up to the knob, and the knob is `--text`. Keep the Swiss typography and grid from #21. Deliver both themes.
- The design source of truth will be `specs/v4/design/`, which Alexey provides.
