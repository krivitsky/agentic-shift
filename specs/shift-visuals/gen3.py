# Shift #2, Alexey's composition (2026-11-11) in the shift-1-B-light frame.
# python3 gen3.py -> b2c.html ; render 2400x1264. To swap the 4th label, edit LAB4 (or the one "Optimize" in b2c.html).
import math
LAB4="Optimize"   # alternative offered: "Change course"
G="#5b6b76"; T="#0e7a55"; A="#c4780f"; TF="rgba(14,122,85,.08)"
SENT="We stop counting output and own the complete value loop: we ensure real customer impact, experiment, and change course as the evidence comes in."
head=open("b1l.html").read().split('<svg viewBox')[0]
head=head.replace("AGENTIC SHIFT #1","AGENTIC SHIFT #2").replace(
 'narrow specialists <span class="a">→ complete craftspeople</span>','counting output <span class="a">→ owning outcomes</span>')
head=head.replace("h1{color:#05090d;font-size:40px;font-weight:600;margin:0 0 26px}",
 "h1{color:#05090d;font-size:40px;font-weight:600;margin:0 0 8px}\n.s{color:#5b6b76;font-size:19px;line-height:1.4;margin:0 0 14px;max-width:1080px}\n#c{height:632px;overflow:hidden}")
head=head.replace("</h1>\n","</h1>\n<p class=\"s\">"+SENT+"</p>\n",1)
H=372
s=f'''<svg viewBox="0 0 1100 {H}">
<defs><symbol id="p" viewBox="0 0 20 26"><circle cx="10" cy="6" r="5.2"/><path d="M1 26c0-7 4-11 9-11s9 4 9 11z"/></symbol>
<marker id="ag" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0L10 5L0 10z" fill="{G}"/></marker>
<marker id="at" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0L10 5L0 10z" fill="{T}"/></marker></defs>
<text x="260" y="26" text-anchor="middle" fill="{G}" font-size="26">counting output</text>
<text x="830" y="26" text-anchor="middle" fill="{T}" font-size="26">owning outcomes</text>
'''
# left: three ticked cards
for i,y in enumerate([70,160,250]):
    s+=f'<rect x="30" y="{y}" width="200" height="60" rx="8" fill="none" stroke="{G}" stroke-width="2"/>'
    s+=f'<rect x="46" y="{y+18}" width="24" height="24" rx="4" fill="{G}"/><path d="M51 {y+30}l5 5l9 -10" stroke="#fff" stroke-width="3" fill="none" stroke-linecap="round" stroke-linejoin="round"/>'
    s+=f'<g stroke="{G}" stroke-width="3" stroke-linecap="round" opacity=".55"><line x1="86" y1="{y+24}" x2="200" y2="{y+24}"/><line x1="86" y1="{y+38}" x2="165" y2="{y+38}"/></g>'
# bracket
s+=f'<path d="M248 70q14 0 14 14v84q0 12 12 12q-12 0 -12 12v84q0 14 -14 14" stroke="{G}" stroke-width="2.5" fill="none"/>'
s+=f'<path d="M282 180h38" stroke="{G}" stroke-width="2.5" fill="none" marker-end="url(#ag)"/>'
# output box with bar chart
s+=f'<rect x="330" y="95" width="170" height="170" rx="10" fill="none" stroke="{G}" stroke-width="2.5"/>'
s+=f'<text x="415" y="130" text-anchor="middle" fill="{G}" font-size="21">output</text>'
s+=f'<line x1="360" y1="240" x2="470" y2="240" stroke="{G}" stroke-width="2"/>'
for k,h in enumerate([40,62,88]): s+=f'<rect x="{368+k*34}" y="{240-h}" width="24" height="{h}" rx="3" fill="{G}" opacity="{.45+k*.2:.2f}"/>'
# middle: divider + strong chevron
s+=f'<line x1="536" y1="50" x2="536" y2="148" stroke="rgba(5,9,13,.15)"/><line x1="536" y1="212" x2="536" y2="{H-8}" stroke="rgba(5,9,13,.15)"/>'
s+=f'<circle cx="536" cy="180" r="27" fill="{T}"/><path d="M529 166l15 14l-15 14" stroke="#fff" stroke-width="5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>'
# right: loop
cx,cy,RX,RY=830,196,172,128
def icon(kind,x,y):
    st=f'stroke="{T}" stroke-width="2.4" fill="none" stroke-linecap="round" stroke-linejoin="round"'
    if kind=="discover": return f'<g {st}><circle cx="{x-2}" cy="{y-2}" r="7"/><path d="M{x+3} {y+3}l6 6"/></g>'
    if kind=="deliver": return f'<g {st}><path d="M{x-9} {y-4}l9 -5l9 5v10l-9 5l-9 -5z"/><path d="M{x-9} {y-4}l9 5l9 -5M{x} {y+1}v10"/></g>'
    if kind=="observe": return f'<g {st}><path d="M{x-10} {y}q10 -10 20 0q-10 10 -20 0z"/><circle cx="{x}" cy="{y}" r="3"/></g>'
    return f'<g {st}><path d="M{x+7} {y-6}a8 8 0 1 0 2 8"/><path d="M{x+9} {y-11}v6h-6"/></g>'
nodes=[(180,"Discover","discover"),(270,"Deliver","deliver"),(0,"Observe","observe"),(90,LAB4,"optimize")]
for ang,_,_ in nodes:
    s0,s1=ang+(30 if ang in(90,270) else 18),ang+90-(18 if ang in(90,270) else 30)
    P=lambda a:(cx+RX*math.cos(math.radians(a)),cy+RY*math.sin(math.radians(a)))
    (x0,y0),(x1,y1)=P(s0),P(s1)
    s+=f'<path d="M{x0:.1f} {y0:.1f}A{RX} {RY} 0 0 1 {x1:.1f} {y1:.1f}" stroke="{T}" stroke-width="3" fill="none" marker-end="url(#at)"/>'
for ang,lab,kind in nodes:
    W=round(max(150,70+len(lab)*10.6))  # pill grows with the label, so LAB4 can change freely
    x=cx+RX*math.cos(math.radians(ang)); y=cy+RY*math.sin(math.radians(ang))
    s+=f'<rect x="{x-W/2:.0f}" y="{y-23:.0f}" width="{W}" height="46" rx="23" fill="#ffffff" stroke="{T}" stroke-width="2.5"/>'
    s+=icon(kind,x-W/2+26,y)
    s+=f'<text x="{x-W/2+48:.0f}" y="{y+7:.0f}" text-anchor="start" fill="{T}" font-size="19">{lab}</text>'
s+=f'<circle cx="{cx}" cy="{cy}" r="80" fill="{TF}" stroke="{T}" stroke-width="2.5"/>'
for dx,w in [(-28,24),(28,24),(0,30)]:
    s+=f'<use href="#p" x="{cx+dx-w/2}" y="{cy-56+(30-w)}" width="{w}" height="{w*1.27:.0f}" fill="{T}"/>'
s+=f'<text x="{cx}" y="{cy+30}" text-anchor="middle" fill="{T}" font-size="16">customer impact</text>'
open("b2c.html","w").write(head+s+'</svg></div></body></html>')
