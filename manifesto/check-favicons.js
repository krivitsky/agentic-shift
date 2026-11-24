#!/usr/bin/env node
// Favicon gate (AK #26630, 2026-11-24): Google Search shows no/old logo unless the site
// offers square raster icons in multiples of 48 px. Checks that every live page links
// favicon.ico (48×48 inside), a 96×96 PNG and a 192×192 PNG, and that those files exist
// with exactly those sizes. Archived version pages (/v1 /v2 /v3 /v12) are exempt.
// Usage: node manifesto/check-favicons.js [repoRoot]   — exits 1 on any problem.
const fs = require('fs'), path = require('path');
const root = path.resolve(process.argv[2] || path.join(__dirname, '..'));
const pub = path.join(root, 'public');
const errs = [];
const pngSize = (b) => (b.slice(1, 4).toString() === 'PNG' ? [b.readUInt32BE(16), b.readUInt32BE(20)] : null);
function icoSizes(b) {
  if (b.readUInt16LE(2) !== 1) return [];
  const n = b.readUInt16LE(4), out = [];
  for (let i = 0; i < n; i++) { const o = 6 + 16 * i; out.push(b[o] || 256); }
  return out;
}
function checkFile(rel, want) {
  const f = path.join(pub, rel);
  if (!fs.existsSync(f)) return errs.push(`missing file public${rel}`);
  const b = fs.readFileSync(f);
  if (rel.endsWith('.ico')) { if (!icoSizes(b).includes(48)) errs.push(`public${rel} has no 48×48 image`); return; }
  const s = pngSize(b);
  if (!s || s[0] !== want || s[1] !== want) errs.push(`public${rel} is ${s ? s.join('×') : 'not a PNG'}, want ${want}×${want}`);
}
function walk(d) { return fs.readdirSync(d, { withFileTypes: true }).flatMap((e) => e.isDirectory() ? walk(path.join(d, e.name)) : [path.join(d, e.name)]); }
const pages = walk(pub).filter((f) => f.endsWith('.html') && !/\/public\/v(1|2|3|12)\//.test(f) && !/\/public\/decks\//.test(f));
const checked = new Set();
for (const f of pages) {
  const s = fs.readFileSync(f, 'utf8');
  if (!/<head[\s>]/i.test(s)) continue;
  const rel = path.relative(root, f);
  const need = [['favicon.ico', /<link rel="icon" href="([^"]*\/favicon\.ico)" sizes="48x48">/, 48],
                ['96×96 PNG', /<link rel="icon" type="image\/png" sizes="96x96" href="([^"]+)">/, 96],
                ['192×192 PNG', /<link rel="icon" type="image\/png" sizes="192x192" href="([^"]+)">/, 192]];
  for (const [label, re, size] of need) {
    const m = s.match(re);
    if (!m) { errs.push(`${rel}: no <link rel="icon"> for ${label}`); continue; }
    const key = m[1] + size; if (!checked.has(key)) { checked.add(key); checkFile(m[1], size); }
  }
}
checkFile('/favicon.ico', 48); // Google also fetches /favicon.ico directly
if (errs.length) { console.error('✗ FAVICON CHECK\n  ' + errs.join('\n  ')); process.exit(1); }
console.log(`✓ favicons: ${pages.length} pages link 48/96/192 raster icons`);
