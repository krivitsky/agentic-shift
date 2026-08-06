# Manifesto v1.2 — copy for the hidden `/v12` page

**Draft for review.** Not applied to the live manifesto. `/v12` is `noindex` and carries no GA.

Three departures from live:

1. **A rewritten opening** — replaces the old two-paragraph lede entirely.
2. **A "What we refuse" section** — three lines, new.
3. **A third technical shift** — `02 code → context`, which renumbers the organizational shifts to 04–06.

Everything else (shifts 01 / 03–06, system note, Q&A, foot) is the live English text, untouched.

---

## Hero — unchanged from live

**Agentic Shift**
*towards professional agentic product engineering*

---

## Opening — NEW (replaces the live lede)

The **agentic shift** is real — we are living it inside our own organizations. It runs deeper than tooling, and it is not measured in tokens.

Everyone is optimizing for something. The frontier labs optimize for adoption: their product wins when your habits change, and the fastest way to change a habit is to make standing still feel like falling behind. That is a legitimate business, and it is theirs, not ours.

We are running organizations, and we are judged on other things — **the value that reaches our customers**, and **the health of the organization that keeps producing it**: its capacity to keep learning, keep judging, keep changing direction. Where that diverges from adoption and throughput, *we follow ours.*

So the shift happens on our terms. Every organization starts somewhere different and owns its path through it. What follows is what we think **professional** has to mean along the way.

### What the old lede did, and where it went

The live lede did two jobs. The first — *"the gap between the best and the rest widens every day"* — was the FOMO framing the new opening now argues against, so it is gone deliberately. The second — *"we're defining professional agentic product engineering as a set of noticeable org-design shifts"* — survives, compressed, in the closing paragraph.

---

## What we refuse — NEW

Rendered in the same card grammar as the shifts, with a **barred** arrow and a ✕ where the number goes:

| | | |
|---|---|---|
| lost judgment | ↛ | efficiency |
| vendor dependence | ↛ | progress |
| volume | ↛ | capability |

The three settled sentences these compress — *"We do not treat the loss of judgment as efficiency"* etc. — are one revert away if the pairs read too cryptic. They were dropped as `.note` lines because the note would only restate the pair, which none of the shift cards do.

**Styling:** same `.section-head` as *The shifts…* (same family, size, weight, rule); only the word colour differs — `#e8617f`, a rose-red built off amber's red channel. This is a fourth hue in a three-colour system (ink / teal / amber). The bar across the arrow is **drawn in CSS**, not typed: Poppins renders U+219B (↛) as an arrow followed by a loose slash. All page-scoped in `/v12`'s own `<style>`; drop the rules to revert.

---

## The shifts — one added, the rest unchanged

### Major technical shifts (amber, sourced to the Agentic Product Engineering Guide)

**01 features → systems** · **02 gatekeeping → guardrails** — unchanged from live.

**03 hands → fleets** — **NEW.**
> Product engineers stop being the throughput limit and shift to running a fleet — several agentic loops at once, each inside its own harness. Capacity is set by how many loops one can keep honest, not by how fast anyone types.

### Major organizational shifts (teal, sourced to 10X ORG)

**04 specialists → craftspeople** · **05 proxies → users** · **06 output → outcomes** — unchanged from live (were 03–05).

### Why `hands → fleets`, and not `testing → evals` or `code → context`

The group is sourced to the **Agentic Product Engineering Guide**, so the third shift should come out of that guide's own ladder rather than be invented. Checked against it (`repos/professional-agentic-product-engineering/guide.md`):

- **`testing → evals`** — the guide's Tier 4 (*Loop Until Done*) is deterministic: executable definition-of-done, BDD/Gherkin, coverage-of-this-change, mutation testing. It argues for **more** conventional testing, not for replacing it with statistical evals. The shift isn't in the source, and it overlaps `gatekeeping → guardrails` — both answer *how do you know it's good*.
- **`code → context`** — real (Tier 3, plus TL;DR #5 *"engineer the environment, not the prompt"*), but it restates the harness idea `gatekeeping → guardrails` already carries. A nuance, not a shift.
- **`hands → fleets`** — Tiers 6 and 7 (*Orchestration*, *Fleet Ops*) are a quarter of the guide's ladder and the manifesto says **nothing** about them. It also has the largest org-design consequence — span of control, team size, what a "team" even is — which is the manifesto's whole frame.

The note is written so it can't be read as a volume argument: capacity is bounded by *how many loops one can keep honest*. That reinforces the third refusal rather than fighting it.

---

## System note, Q&A, foot — unchanged from live

Verbatim from `en.json`.

---

## Cost, if applied

The old lede's strings are **rewritten**, not merely added to — so all 11 translations need a real pass, not an append. New translatable strings: opening (4), refusals (3 + heading), shift 02 pair + note (2). Native-reviewed corrections at risk: `pt` (guardrails + proxies note) — both survive, neither string is touched.
