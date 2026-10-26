# Portuguese — native reviewer corrections

Corrections from a **native Portuguese speaker**. They are already applied to
`manifesto/content/pt.json`. If `pt.json` is ever regenerated or re-translated
from scratch, re-apply these — they override machine drafts.

Only the reviewer's own wording is recorded here.

The page is kept in **European Portuguese**; the reviewer noted the changes
below are *general* Portuguese.

---

## Carried over into the 2026-08-09 rewrite

The manifesto was rewritten in English on 2026-08-09 (four sections, three
refusals, three shifts) and every language was re-translated. What survived of
this review, and what did not:

| Reviewer correction | Status |
|---|---|
| Shift 2 — `guardrails` kept in English | **Lapsed.** The `gatekeeping → guardrails` shift was cut from the manifesto; the word no longer appears on any page. Nothing to re-apply. The quality shift returned on 2026-10-25 as `inspection → verification` — see the last section. |
| Shift 4 — `utilizadores` + the reworded note | **Carried over, adapted.** The pair is still `intermediários → utilizadores`, but the English sentence was rewritten this morning, so the reviewer's phrasing was fitted to the new sentence rather than pasted (see below). |

---

## Shift 2 — gatekeeping → (was `guarda-corpos`) — LAPSED

**Pair:** use **`guardrails`** (kept in English), not `guarda-corpos`.

> Reviewer: keeping the term "guardrails" in English is more natural for the
> Portuguese-speaking software engineering and AI community, as it's already
> widely used in technical discussions.

**Note (reviewer's exact text):**

> Os engenheiros de produto deixam de validar a qualidade apenas ao final do
> processo e passam a incorporá-la diretamente ao sistema, por meio de
> guardrails e mecanismos agênticos bem projetados.

Applied in commit `b57ceed`. **No longer on the page** — the two technical
shifts (`features → systems`, `gatekeeping → guardrails`) were cut in the
2026-08-09 rewrite. Kept here in case they ever return.

---

## Shift 4 — intermediários → utilizadores — CARRIED OVER

**Note (reviewer's exact text):**

> Acaba a comunicação indireta por meio de gestores intermediários. Os
> engenheiros de produto passam a atuar em distância zero dos clientes e
> utilizadores, para compreender, analisar e sintetizar necessidades
> diretamente da fonte.

Applied in commit `2819f69`.

**Adapted 2026-08-09.** The English gained a second clause (*"and the era of
'IT sitting in the basement'"*) and moved to a gerund lead (*"Ending … instead
putting …"*), so the note is no longer a two-sentence declarative. The
reviewer's three decisions were kept intact and refitted:

- *comunicação indireta por meio de gestores intermediários* — kept, in place
  of a literal "jogo do telefone"
- *em distância zero dos clientes e utilizadores* — kept
- *compreender, analisar e sintetizar necessidades diretamente da fonte* —
  kept, in place of a literal rendering of "empathize … firsthand"

Current text on the page:

> Acabar com a comunicação indireta por meio de gestores intermediários e com
> a era da «TI fechada na cave» — e colocar, em vez disso, os engenheiros de
> produto em distância zero dos clientes e utilizadores, para compreender,
> analisar e sintetizar necessidades diretamente da fonte.

---

## Returned 2026-10-25 — inspeção → verificação — reviewer wording CARRIED OVER

The two technical shifts came back as the first two cards, rewritten in
English. The quality shift is now `inspection → verification`, not
`gatekeeping → guardrails`, so the reviewer's keep-it-in-English call has no
term to attach to: `inspeção → verificação` are words Portuguese engineers use
natively. The reviewer's note wording did carry over — *incorporá-la
diretamente ao sistema* and *ao final do processo* were fitted into the new
gerund-led sentence:

> Incorporar a qualidade diretamente ao sistema, em vez de a inspecionar
> manualmente ao final do processo — a verificação automatizada confronta cada
> alteração com os testes e as especificações, enquanto os engenheiros de
> produto reveem os testes e assumem o ciclo de valor.

The `features → systems` card (`funcionalidades → sistemas`) is a first-pass
draft.

The rest of `pt.json` is a first-pass draft and has **not** been reviewed by a
native speaker.

---

## 2026-10-26 v4 retranslation

The page was rewritten again in English (v4: six shifts, "Why shift?" /
"How far to shift?") and `pt.json` was re-translated. What carried over:

- **`utilizadores`** — kept everywhere (European Portuguese), including the
  new pair title `comunicação indireta → distância zero dos utilizadores`.
- **Telephone-game / zero-distance note** — the English sentence is unchanged
  from the 2026-08-09 version, so the adapted reviewer text is kept verbatim:
  *comunicação indireta por meio de gestores intermediários*, *em distância
  zero dos clientes e utilizadores*, *compreender, analisar e sintetizar
  necessidades diretamente da fonte*. The "from" title follows the reviewer
  too: `comunicação indireta`, not a literal "jogo do telefone".
- **Inspection/verification card** — cut in v4; its idea moved into the
  `coding features → designing agentic systems` note, which has no
  "inspect at the end" clause, so the reviewer's *incorporá-la diretamente ao
  sistema* / *ao final do processo* have nothing to attach to. Lapsed. (The
  phrase *confrontam cada alteração com os testes e as especificações* is
  reused from the 2026-10-25 draft, not from the reviewer.)

Everything else in v4 is a first-pass draft, not reviewed by a native speaker.
