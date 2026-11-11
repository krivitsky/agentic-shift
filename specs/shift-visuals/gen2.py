# Shift #2 "counting output -> owning outcomes", two options, same frame as b1l.html.
# python3 gen2.py -> b2a.html, b2b.html ; render with render.mjs (2400x1264).
import math
INK="#05090d"; G="#5b6b76"; T="#0e7a55"; A="#c4780f"; TF="rgba(14,122,85,.08)"
HEAD=open("b1l.html").read().split('<svg viewBox')[0]
HEAD=HEAD.replace("AGENTIC SHIFT #1","AGENTIC SHIFT #2").replace(
 'narrow specialists <span class="a">→ complete craftspeople</span>','counting output <span class="a">→ owning outcomes</span>')
DEFS=f'''<svg viewBox="0 0 1100 430">
<defs><symbol id="p" viewBox="0 0 20 26"><circle cx="10" cy="6" r="5.2"/><path d="M1 26c0-7 4-11 9-11s9 4 9 11z"/></symbol>
<marker id="aa" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0L10 5L0 10z" fill="{A}"/></marker>
<marker id="at" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0L10 5L0 10z" fill="{T}"/></marker></defs>
<text x="250" y="28" text-anchor="middle" fill="{G}" font-size="26">counting output</text>
<text x="830" y="28" text-anchor="middle" fill="{T}" font-size="26">owning outcomes</text>
<line x1="545" y1="55" x2="545" y2="410" stroke="rgba(5,9,13,.15)"/>'''
TAIL='</svg></div></body></html>'
def person(x,y,w,c): return f'<use href="#p" x="{x-w/2}" y="{y}" width="{w}" height="{w*1.27:.0f}" fill="{c}"/>'
def box(x,y,s=34): return f'<rect x="{x}" y="{y}" width="{s}" height="{s}" rx="5" fill="none" stroke="{G}" stroke-width="2"/>'
def tally(x,y,groups=3,h=40):
    s=""
    for g in range(groups):
        gx=x+g*62
        for i in range(4): s+=f'<line x1="{gx+i*11}" y1="{y}" x2="{gx+i*11}" y2="{y+h}"/>'
        s+=f'<line x1="{gx-6}" y1="{y+h-6}" x2="{gx+40}" y2="{y+6}"/>'
    return f'<g stroke="{A}" stroke-width="3" stroke-linecap="round">{s}</g>'
def counter(x,y,w=230,h=80,groups=3):
    return f'<rect x="{x}" y="{y}" width="{w}" height="{h}" rx="8" fill="none" stroke="{G}" stroke-width="2"/>'+tally(x+30,y+20,groups)
def cap(x,s,c): return f'<text x="{x}" y="405" text-anchor="middle" fill="{c}" font-size="24">{s}</text>'

# ---------- Option A: pile + tally  vs  the value loop ----------
a=person(70,215,40,G)+f'<path d="M100 245h40" stroke="{A}" stroke-width="3" fill="none" marker-end="url(#aa)"/>'
rows=[(6,330),(5,292),(4,254),(3,216)]
for n,y in rows:
    x0=160+(6-n)*19
    for i in range(n): a+=box(x0+i*38,y)
a+=counter(170,80,230,80,3)
a+=f'<path d="M285 210V172" stroke="{A}" stroke-width="2" stroke-dasharray="5 5" fill="none" marker-end="url(#aa)"/>'
cx,cy,r=822,212,120
RX=150
nodes=[(-90,"experiment",150),(0,"real customer impact",215),(90,"evidence",130),(180,"change course",165)]
for ang,lab,w in nodes:
    x=cx+r*math.cos(math.radians(ang)); y=cy+r*math.sin(math.radians(ang))
    nodes_xy=(x,y)
for k,(ang,lab,w) in enumerate(nodes):
    a1=math.radians(ang+(30 if k%2==0 else 50)); a2=math.radians(ang+(60 if k%2==0 else 40)+ (0))
    s0=ang+ (34 if ang in(-90,90) else 22); s1=ang+90-(22 if ang in(-90,90) else 34)
    p0=(cx+RX*math.cos(math.radians(s0)),cy+r*math.sin(math.radians(s0)))
    p1=(cx+RX*math.cos(math.radians(s1)),cy+r*math.sin(math.radians(s1)))
    a+=f'<path d="M{p0[0]:.1f} {p0[1]:.1f}A{RX} {r} 0 0 1 {p1[0]:.1f} {p1[1]:.1f}" stroke="{T}" stroke-width="3" fill="none" marker-end="url(#at)"/>'
for ang,lab,w in nodes:
    x=cx+RX*math.cos(math.radians(ang)); y=cy+r*math.sin(math.radians(ang))
    a+=f'<rect x="{x-w/2:.0f}" y="{y-22:.0f}" width="{w}" height="44" rx="22" fill="#ffffff" stroke="{T}" stroke-width="2.5"/>'
    a+=f'<text x="{x:.0f}" y="{y+7:.0f}" text-anchor="middle" fill="{T}" font-size="19">{lab}</text>'
a+=f'<circle cx="{cx}" cy="{cy}" r="46" fill="{TF}"/>'+person(cx,cy-25,38,T)
a+=cap(830,"the complete value loop",T)
open("b2a.html","w").write(HEAD+DEFS+a+TAIL)

# ---------- Option B: conveyor + tally  vs  steering to impact ----------
b=person(55,250,40,G)
b+=f'<line x1="85" y1="320" x2="520" y2="320" stroke="{G}" stroke-width="2"/>'
for i in range(9): b+=box(95+i*46,284)
b+=f'<path d="M95 262H505" stroke="{A}" stroke-width="3" fill="none" marker-end="url(#aa)"/>'
b+=counter(140,90,230+62,80,4)
b+=f'<path d="M300 240V182" stroke="{A}" stroke-width="2" stroke-dasharray="5 5" fill="none" marker-end="url(#aa)"/>'
# right: plan line vs steered path to the target
tx,ty=995,175
for rr,o in [(70,.0),(48,.0),(26,.0)]:
    b+=f'<circle cx="{tx}" cy="{ty}" r="{rr}" fill="{TF}" stroke="{T}" stroke-width="2.5"/>'
b+=person(tx,ty-17,26,T)
b+=f'<text x="{tx}" y="{ty+105}" text-anchor="middle" fill="{T}" font-size="19">real customer impact</text>'
px,py=610,320
b+=person(px,py-30,44,T)
pts=[(640,315),(740,290),(800,300),(860,250),(895,240),(928,212)]
d="M"+" L".join(f"{x} {y}" for x,y in pts)
b+=f'<path d="{d}" stroke="{T}" stroke-width="3.5" fill="none" stroke-linejoin="round" marker-end="url(#at)"/>'
for x,y in [(740,290),(860,250)]:
    b+=f'<circle cx="{x}" cy="{y}" r="9" fill="#ffffff" stroke="{T}" stroke-width="2.5"/>'
b+=f'<text x="800" y="345" text-anchor="middle" fill="{T}" font-size="18" dy="-90" opacity="0">.</text>'
b+=f'<text x="740" y="276" text-anchor="middle" fill="{T}" font-size="18" transform="translate(-30,-12)">evidence</text>'
b+=f'<text x="860" y="236" text-anchor="middle" fill="{T}" font-size="18" transform="translate(-40,-12)">experiment</text>'
b+=cap(830,"change course as the evidence comes in",T)
open("b2b.html","w").write(HEAD+DEFS+b+TAIL)
