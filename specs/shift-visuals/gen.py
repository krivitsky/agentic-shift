import sys
D=sys.argv[1]
G="#8395a1"; T="#3ddc9a"; A="#e8a33d"; TG="rgba(61,220,154,.14)"; L="rgba(137,180,190,.16)"
def P(x,y,s=22,c=G): return f'<use href="#p" x="{x-s/2}" y="{y}" width="{s}" height="{s*1.27}" fill="{c}"/>'
def R(x,y,w,h,c=G,fill="none",sw=1.5,rx=6,dash=""): return f'<rect x="{x}" y="{y}" width="{w}" height="{h}" rx="{rx}" fill="{fill}" stroke="{c}" stroke-width="{sw}" {f"stroke-dasharray={chr(34)}{dash}{chr(34)}" if dash else ""}/>'
def Tx(x,y,s,c=G,size=11,anchor="middle"): return f'<text x="{x}" y="{y}" text-anchor="{anchor}" fill="{c}" font-size="{size}">{s}</text>'
def Ar(d,c=A,dash=""): return f'<path d="{d}" fill="none" stroke="{c}" stroke-width="2" marker-end="url(#{"aa" if c==A else "at"})" {f"stroke-dasharray={chr(34)}{dash}{chr(34)}" if dash else ""}/>'
def Ln(d,c=A,sw=1.5,dash=""): return f'<path d="{d}" fill="none" stroke="{c}" stroke-width="{sw}" {f"stroke-dasharray={chr(34)}{dash}{chr(34)}" if dash else ""}/>'
def AI(x,y): return f'<circle cx="{x}" cy="{y}" r="11" fill="#05090d" stroke="{T}" stroke-dasharray="3 3"/>'+Tx(x,y+3,"AI",T,9)
def frame(left,right,body,h=240,lcap="",rcap=""):
    return f'''<svg viewBox="0 0 860 {h}">{Tx(200,20,left,G,13)}{Tx(650,20,right,T,13)}
<line x1="430" y1="40" x2="430" y2="{h-20}" stroke="{L}"/>{body}
{Tx(200,h-12,lcap,A) if lcap else ""}{Tx(650,h-12,rcap,T) if rcap else ""}</svg>'''

S=[]
# 2 coordinating dependencies -> extreme cocreation
l,r="coordinating dependencies","extreme cocreation"
a=""
pos=[(60,60),(170,50),(290,70),(90,150),(220,160),(340,145)]
for i,(x,y) in enumerate(pos): a+=R(x-35,y,70,44)+P(x,y+8,18)
for (i,j) in [(0,1),(1,2),(0,4),(3,1),(2,5),(4,5),(3,4),(1,5)]:
    (x1,y1),(x2,y2)=pos[i],pos[j]; a+=Ln(f"M{x1} {y1+22}L{x2} {y2+22}",A,1.2)
a+=R(560,60,180,100,T,TG,2,10)+Tx(650,115,"one product",T,11)
for (x,y) in [(530,90),(770,90),(600,170),(700,170),(650,30)]: a+=P(x,y,22,T)
optA=frame(l,r,a,240,"handoffs and integration meetings","everyone works on the whole, together")
b=""
for i,x in enumerate([40,120,200,280,360]): b+=R(x-30,50,60,40)+P(x,56,18)+Ln(f"M{x} 90 Q{x} 140 200 165",A,1.2)
b+=R(160,160,80,40,A,"none",1.5)+Tx(200,184,"sync meeting",A,10)
b+=f'<circle cx="650" cy="120" r="75" fill="{TG}" stroke="{T}" stroke-width="2"/>'+Tx(650,124,"product",T,11)
import math
for k in range(6):
    an=math.pi*2*k/6-math.pi/2; b+=P(650+52*math.cos(an),120+52*math.sin(an)-14,18,T)
optB=frame(l,r,b,240,"fragments meet in meetings","in flow with agents and each other")
c=""
c+=Ln("M130 80 C 220 40, 180 200, 270 160 S 160 60, 300 90 S 140 190, 120 150 S 280 40, 260 200",A,1.5)
for (x,y) in [(130,60),(300,72),(120,150),(270,140)]: c+=P(x,y,20)
c+=f'<circle cx="650" cy="125" r="55" fill="{TG}" stroke="{T}" stroke-width="2"/>'
for k in range(4):
    an=math.pi*2*k/4; c+=P(650+30*math.cos(an),125+30*math.sin(an)-13,18,T)
optC=frame(l,r,c,230)
S.append((l,r,[("A · Dependency web vs one shared product",optA,"Six specialists with crossing dependency lines; right: the same people around one product."),
 ("B · Integration meeting vs a circle",optB,"Every fragment flows into a sync meeting; right: people in a ring around the product, no meeting box."),
 ("C · Tangle vs circle (minimal)",optC,"A knot of lines between people vs one round shape they share.")]))

# 3 coding features -> designing agentic systems
l,r="coding features","designing agentic systems"
a=P(80,90,30)+Tx(80,150,"types code",G,10)
for i in range(5): a+=R(140+i*55,95,45,30,G)+Tx(162+i*55,114,f"F{i+1}",G,10)
a+=Ar("M110 110h25")
loop=[("intent",560,70),("agents",720,70),("tests",720,170),("software",560,170)]
for n,x,y in loop: a+=R(x-45,y-18,90,36,T,TG,1.5)+Tx(x,y+4,n,T,10)
a+=Ar("M605 70h65",T)+Ar("M720 88v62",T)+Ar("M675 170h-65",T)+Ar("M560 152v-62",T)
a+=P(640,100,30,T)
optA=frame(l,r,a,240,"one feature at a time, by hand","owns the loop that builds and checks")
b=P(90,80,28)
for i in range(3):
    for j in range(4-i): b+=R(150+j*50+i*25,170-i*32,46,28,G)
b+=Ar("M115 110 L170 140")
b+=R(560,60,180,80,T,TG,2,10)+Tx(650,95,"agentic system",T,11)+Tx(650,115,"⚙ ⚙ ⚙",T,14)
b+=P(520,75,28,T)+Ar("M538 100 L556 100",T)
for i in range(4): b+=R(560+i*48,175,40,24,T,"none",1.2)
b+=Ar("M650 140v30",T)
optB=frame(l,r,b,240,"laying bricks","building the machine that lays them")
c=P(170,80,28)+R(210,100,50,34,G)+Ar("M188 115h18")
c+=P(650,80,28,T)+f'<circle cx="650" cy="110" r="70" fill="none" stroke="{T}" stroke-width="2" stroke-dasharray="6 5"/>'+AI(580,110)+AI(720,110)+AI(650,180)
optC=frame(l,r,c,230)
S.append((l,r,[("A · Feature by feature vs the loop",optA,"Left: a person typing F1…F5. Right: the person on top of intent → agents → tests → software, looping."),
 ("B · Bricks vs the brick machine",optB,"Left: hand-stacking a wall. Right: designing the system that produces the bricks."),
 ("C · Person + block vs person in a loop (minimal)",optC,"One person, one block; vs one person inside a cycle of agents.")]))

# 4 telephone game -> zero distance to users
l,r="the telephone game","zero distance to users"
a=""
chain=[("user",30),("sales",105),("manager",185),("PO",265),("dev",350)]
for i,(n,x) in enumerate(chain):
    c_=T if n=="user" else G
    a+=P(x,80,22,c_)+Tx(x,130,n,c_,10)
    if i<4: a+=Ln(f"M{x+15} 70 q20 -15 40 0",A,1.5)
a+=Tx(30,60,"“A”",T,11)+Tx(350,60,"“Z?”",A,11)
a+=P(610,80,26,T)+Tx(610,138,"user",T,10)+P(690,80,26,T)+Tx(690,138,"product engineer",T,10)
a+=Ln("M622 72 q28 -18 56 0",T,1.5)+Ln("M678 82 q-28 18 -56 0",T,1.5)
optA=frame(l,r,a,200,"the message changes at every hop","hears it firsthand")
b=Ln("M20 110h390",G,1)+Tx(30,104,"office",G,9,"start")+Tx(30,128,"basement",G,9,"start")
b+=P(90,60,22,T)+P(150,60,22,T)+Tx(120,45,"users",T,10)
b+=P(300,135,22)+R(270,128,60,50,G,"none",1,4)+Tx(300,195,"IT",G,10)
b+=Ar("M300 128 L300 100 L170 80",A,"4 4")
b+=Ln("M470 110h370",G,1)
b+=P(580,60,22,T)+P(630,60,22,T)+P(700,60,24,T)+Tx(605,45,"users",T,10)+Tx(700,45,"product engineer",T,10)
optB=frame(l,r,b,220,"IT sitting in the basement","same floor, same room")
c=P(60,80,24,T)+Ln("M80 95h260",A,1.5,"3 6")+P(360,80,24)
for x in [140,210,280]: c+=f'<circle cx="{x}" cy="95" r="4" fill="{A}"/>'
c+=P(630,80,24,T)+P(670,80,24,T)
optC=frame(l,r,c,160)
S.append((l,r,[("A · Chain of proxies vs face to face",optA,"User → sales → manager → PO → dev, the message drifts; right: user and engineer talk directly."),
 ("B · Basement vs same floor",optB,"Uses your 'IT in the basement' line literally."),
 ("C · Long dotted line vs side by side (minimal)",optC,"Distance as a dotted line with proxy dots; right: no gap.")]))

# 5 counting output -> owning outcomes
l,r="counting output","owning outcomes"
a=""
for i,h in enumerate([40,60,55,80,95,110]): a+=R(60+i*45,170-h,30,h,G,"none",1.2,2)
a+=Tx(200,190,"tickets closed / sprint",G,10)
loop=[("build",560,70),("ship",720,70),("measure",720,165),("learn",560,165)]
for n,x,y in loop: a+=R(x-42,y-18,84,36,T,TG,1.5)+Tx(x,y+4,n,T,10)
a+=Ar("M602 70h70",T)+Ar("M720 88v57",T)+Ar("M678 165h-70",T)+Ar("M560 147v-57",T)
a+=P(640,95,26,T)
optA=frame(l,r,a,230,"more tickets ≠ more value","the whole value loop, end to end")
b=P(60,80,24)
for i in range(5): b+=R(100+i*52,90,40,28,G)
b+=Ar("M360 104h40",A,"4 4")+Tx(300,75,"#127",A,13)+Tx(380,140,"?",A,18)
b+=P(560,80,24,T)+R(600,90,40,28,T)+Ar("M645 104h70",T)+P(750,80,26,T)+Tx(750,140,"user",T,10)
b+=Ar("M750 145 Q650 185 565 125",T,"4 4")+Tx(655,180,"impact feeds back",T,10)
optB=frame(l,r,b,220,"shipped into the void","shipped, checked, corrected")
c=""
for k in range(4):
    x=110+k*50; c+=Ln(f"M{x} 60v70 M{x+10} 60v70 M{x+20} 60v70 M{x+30} 60v70 M{x-4} 120 L{x+34} 70",G,2)
for rr,o in [(60,.15),(40,.3),(20,.6)]: c+=f'<circle cx="650" cy="95" r="{rr}" fill="none" stroke="{T}" stroke-width="2" opacity="{o+.3}"/>'
c+=f'<circle cx="650" cy="95" r="6" fill="{T}"/>'
optC=frame(l,r,c,180)
S.append((l,r,[("A · Velocity bars vs the value loop",optA,"A growing ticket chart; right: one person owning build → ship → measure → learn."),
 ("B · Into the void vs back from the user",optB,"Output counter with nobody receiving it; right: it reaches a user and the effect comes back."),
 ("C · Tally marks vs target (minimal)",optC,"Counting vs aiming.")]))

# 6 work follows people -> people follow value
l,r="work follows people","people follow value"
a=""
for k,x in enumerate([40,160,280]):
    a+=R(x,60,100,90,G,"none",1.5,8)+P(x+30,75,18)+P(x+70,75,18)
    for i in range(3): a+=R(x+12+i*28,120,22,16,G,"none",1)
a+=f'<text x="400" y="200" fill="{A}" font-size="22" text-anchor="middle">★</text>'+Tx(400,172,"unattended value",A,9)
a+=f'<text x="650" y="120" fill="{T}" font-size="40" text-anchor="middle">★</text>'
for (x,y,tx,ty) in [(520,60,600,90),(780,60,700,90),(520,180,600,120),(780,180,700,120)]:
    a+=P(x,y-14,20,T)+Ar(f"M{x} {y+16} L{tx} {ty}",T)
optA=frame(l,r,a,230,"fixed teams, fixed backlogs","move to the most valuable work")
b=""
for k,x in enumerate([60,180,300]): b+=R(x-45,90,90,100,G,"none",2,6)+P(x-15,110,18)+P(x+15,110,18)+Ln(f"M{x-45} 90h90",G,3)
b+=Ar("M120 55 L80 95",A)+Ar("M200 55 L180 95",A)+Ar("M260 55 L290 95",A)+Tx(190,48,"work routed to existing teams",A,10)
b+=R(540,50,90,60,T,"none",1,6,"4 4")+R(670,110,110,70,T,TG,2,6)+Tx(725,170,"value now",T,10)
for (x,y) in [(700,120),(730,120),(760,120),(585,60)]: b+=P(x,y,18,T)
b+=Ar("M600 110 L680 140",T,"4 4")
optB=frame(l,r,b,240,"static team boundaries","boundaries move with priorities")
c=Ln("M100 60 L180 95 M100 130 L180 105",A,2)+P(205,85,24)
c+=Ar("M100 60 L175 92",A)+Ar("M100 130 L175 108",A)
c+=P(560,60,20,T)+P(560,120,20,T)+Ar("M580 75 L650 95",T)+Ar("M580 135 L650 110",T)
c+=f'<text x="670" y="112" fill="{T}" font-size="32" text-anchor="middle">★</text>'
optC=frame(l,r,c,180)
S.append((l,r,[("A · Fixed teams vs moving to the star",optA,"Three fixed teams with their own piles while value sits unattended; right: people converge on the value."),
 ("B · Walls vs moving boundaries",optB,"Work is routed into fixed boxes; right: the box moves to where value is now."),
 ("C · Arrows into people vs arrows into value (minimal)",optC,"Direction of the arrows flips.")]))

head='''<!DOCTYPE html><html><head><meta charset="utf-8"><style>
body{margin:0;background:#05090d;color:#e9eff3;font-family:Poppins,"Avenir Next",system-ui,sans-serif;padding:28px;width:900px}
h1{font-size:20px;font-weight:600;margin:0 0 4px}.sub{color:#8395a1;font-size:13px;margin-bottom:22px}
.opt{border:1px solid rgba(137,180,190,.16);border-radius:14px;padding:18px 20px 12px;margin-bottom:20px}
.opt h2{font-size:15px;margin:0 0 10px;color:#3ddc9a}.opt p{color:#8395a1;font-size:12px;margin:6px 0 0}
svg{width:100%;height:auto;display:block}text{font-family:Poppins,"Avenir Next",system-ui,sans-serif}</style></head><body>
<svg width="0" height="0" style="position:absolute"><defs><symbol id="p" viewBox="0 0 20 26"><circle cx="10" cy="6" r="5.2"/><path d="M1 26c0-7 4-11 9-11s9 4 9 11z"/></symbol>
<marker id="aa" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="#e8a33d"/></marker>
<marker id="at" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="#3ddc9a"/></marker></defs></svg>'''
for n,(l,r,opts) in enumerate(S,2):
    h=head+f'<h1>{l} → {r}</h1><div class="sub">Shift {n}: 3 sketches</div>'
    for t,svg,p in opts: h+=f'<div class="opt"><h2>{t}</h2>{svg}<p>{p}</p></div>'
    open(f"{D}/shift{n}.html","w").write(h+"</body></html>")
