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

### What we stand for
No change. Keep the current four `stand[]` paragraphs as they are.

### What we shift toward

1. Opener, new. It replaces the FOMO paragraph that sits in the refuse section today:
   > Everyone has an AI strategy for your organization. The frontier labs optimize for the adoption of *their* products, and FOMO is the strongest lever they pull on us. That is a legitimate business strategy, perhaps, but it is theirs. What's yours?

2. Why order matters, new:
   > AI is a democratized technology. Everyone has it, so on its own it gives no one an edge. It accelerates whatever tendencies an organization already has, the healthy ones and the unhealthy ones alike. That is why the order matters. First **know your competitive advantage** and choose which of these shifts build it. Then amplify it with a strategic AI adoption, instead of sprinkling AI on top of the organization you already have.

3. The intro line. It replaces the current `shiftIntro` ("Product engineering organizations that hold on to … with AI as a lever to ease them:"):
   > Organizations that want sustainable quality, real customer value and high adaptability as competitive advantages make these shifts:

4. Six `→` cards, in this order. They replace all current `shifts[]`. Titles stay lowercase:

| # | from | to | note |
|---|---|---|---|
| 1 | narrow specialists | complete craftspeople | Enabling product engineers to shift from narrow, assembly-line specialists to end-to-end craftspeople — with AI filling the specialist gaps and offering upskilling for entering new domains. |
| 2 | coordinating dependencies | extreme cocreation | Moving teams from coordinating dependencies through handoffs, plans and sync meetings to extreme cocreation — product engineers from different teams building one product together, in shared sessions, with shared goals and shared code. |
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

- Add `shiftOpener` (1) and `shiftOrder` (2), and rewrite `shiftIntro` (3) and `shifts[]` (4).
- Drop `shiftNotNew`, `shiftOutro` and every `refuse*` key from the English page, and remove their blocks from `template.html` and the Markdown emitters in `build.js`. This must work together with the English-only plan from Scope.
- Update CLAUDE.md §Routes and §Manifesto i18n "Page shape" so they describe the new structure.

## v4 (later, not now): the interactive "Own your shift" block

Alexey has already decided the following, so record it here for v4:
- After the 6 cards comes an interactive block headed **"Own your shift"** (singular, no period).
- There is one horizontal slider per shift, with the "from" side on the left and the "to" side on the right. This is the layout of board #21 on the design canvas https://claude.ai/artifact/RsUjUpNnmqTFavY2czdcu3.
- The sliders start fully left and show no numbers, and there is a reset button (behavior from #22). A "Try a sample mix" button sets an example mix (from #23).
- A "mixer view" toggle with vertical faders (#23) may come later.
- The palette is not final. The canvas boards still show the old 9 shifts on 3 levels, so redraw everything with the 6 flat shifts.
- The design source of truth will be `specs/v4/design/`, which Alexey provides.
