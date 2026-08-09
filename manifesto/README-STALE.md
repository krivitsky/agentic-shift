# ⚠️ This pipeline is switched OFF — do not run `build.js`

**Since 2026-08-09 the homepage is hand-maintained HTML and is no longer generated.**

Alexey approved the manifesto rewrite that morning (it lived at `/v2` during review) and it
replaced the generated homepage. The previous manifesto is archived at `/v1`.

## Why running the build would break the site

`manifesto/content/en.json` and `manifesto/template.html` still hold the **old** manifesto —
the five shifts, the old lede, "professional agentic product engineering" as the subtitle.
`node manifesto/build.js` regenerates `public/index.html` from those files, so running it
would silently overwrite the live homepage with the copy Alexey replaced. It would also
rewrite `public/sitemap.xml`, the `MANIFESTO` region of `public/llms.txt` and `README.md`,
and re-create the 11 language directories that are currently redirected away.

## What is live right now

| Path | State |
|---|---|
| `/` | The approved rewrite. Hand-written `public/index.html`. Indexed, GA on, canonical `/`. |
| `/v1` | The previous manifesto, frozen. `noindex`, no analytics, out of the sitemap. |
| `/v2` | The review draft. Same copy as `/` but `noindex` — safe to delete once nobody links it. |
| `/de/ /nl/ /fr/ /it/ /es/ /pt/ /cz/ /uk/ /ru/ /zh/ /ja/` | **Hidden** at Alexey's call. The files still exist and still contain the old manifesto, but `vercel.json` redirects each to `/`, they are out of `sitemap.xml`, and the hreflang alternates + language switcher have been removed from the homepage. |

## To turn the pipeline back on

Do all of it, in order — a partial pass is worse than none, because `build.js` writes files
even when it reports drift:

1. Rewrite `manifesto/content/en.json` to the approved copy. The section structure changed:
   **Where we stand → What we refuse → What we shift.** Refusals are `≠` pairs, the shifts
   are three (the two technical ones were cut), and "Org design, then AI." is its own card.
2. Update `manifesto/template.html` to render that structure, including the page-scoped CSS
   currently inlined in `public/index.html`.
3. Redo all 11 translations, each with the back-translation check. Re-apply the
   native-reviewed Portuguese corrections in `manifesto/reviews/pt.md` by hand — the
   `proxies → users` note was rewritten, so that review is partly stale.
4. Only when `build.js` ends with `✓ all 11 translations match en.json` may the generated
   homepage replace the hand-written one. Delete this file in the same commit.
5. Remove the redirects from `vercel.json` and restore the hreflang block + language
   switcher.

Source copy for the approved text: `manifesto-v2-content.md` at the repo root.
