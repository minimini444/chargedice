var Bu=Object.defineProperty;var $u=(i,t,e)=>t in i?Bu(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e;var W=(i,t,e)=>$u(i,typeof t!="symbol"?t+"":t,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const r of a.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function e(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(s){if(s.ep)return;s.ep=!0;const a=e(s);fetch(s.href,a)}})();let Wc=null;function rl(){return Wc??(Wc=new AudioContext),Wc}function ge(i,t=.12,e="square",n=0,s=.06){const a=rl(),r=a.currentTime+n,o=a.createOscillator(),l=a.createGain();o.type=e,o.frequency.value=i,l.gain.setValueAtTime(s,r),l.gain.exponentialRampToValueAtTime(1e-4,r+t),o.connect(l).connect(a.destination),o.start(r),o.stop(r+t+.02)}const _t={roll:()=>ge(660,.06,"square"),place:()=>ge(330,.05,"triangle"),success:i=>{const t=440*Math.pow(2,i/12);ge(t,.1,"square"),ge(t*1.5,.14,"square",.07)},fail:()=>{ge(160,.25,"sawtooth",0,.07),ge(110,.3,"sawtooth",.12,.07)},tick:()=>ge(1200,.02,"square",0,.02),fever:()=>{[523,659,784,1047,1319,1568].forEach((i,t)=>ge(i,.18,"square",t*.06,.07))},victory:()=>{[523,659,784,1047].forEach((i,t)=>ge(i,.16,"square",t*.11,.07)),ge(1047,.5,"triangle",.5,.08),ge(1319,.5,"triangle",.5,.06),ge(1568,.6,"triangle",.5,.05)},defeat:()=>{[392,349,311,262].forEach((i,t)=>ge(i,.28,"sawtooth",t*.2,.06)),ge(98,.9,"sine",.85,.12)},crack:()=>{ge(220,.05,"square",0,.08),ge(140,.12,"sawtooth",.04,.08)},coin:()=>{ge(1568,.06,"square",0,.05),ge(2093,.12,"square",.05,.05)},sparkle:()=>{[1047,1319,1568,2093].forEach((i,t)=>ge(i,.12,"triangle",t*.05,.05))},shatter:()=>{const i=rl(),t=Math.floor(i.sampleRate*.35),e=i.createBuffer(1,t,i.sampleRate),n=e.getChannelData(0);for(let o=0;o<t;o++)n[o]=(Math.random()*2-1)*Math.pow(1-o/t,3);const s=i.createBufferSource();s.buffer=e;const a=i.createBiquadFilter();a.type="highpass",a.frequency.value=1800;const r=i.createGain();r.gain.value=.18,s.connect(a).connect(r).connect(i.destination),s.start(),ge(90,.3,"sine",0,.14)},low:()=>{ge(330,.08,"triangle",0,.04),ge(262,.12,"triangle",.07,.04)},toss:()=>{const i=rl(),t=i.currentTime,e=i.createOscillator(),n=i.createGain();e.type="sine",e.frequency.setValueAtTime(900,t),e.frequency.exponentialRampToValueAtTime(300,t+.14),n.gain.setValueAtTime(.06,t),n.gain.exponentialRampToValueAtTime(1e-4,t+.16),e.connect(n).connect(i.destination),e.start(t),e.stop(t+.18)},summon:()=>{ge(392,.1,"triangle"),ge(523,.16,"triangle",.08)}},Ze={spear:"#5b8def",shield:"#8a92b0",archer:"#4fd18b",bomber:"#e05a3a",drummer:"#e8b23a",assassin:"#3a3a4a",priest:"#f2f2f2",knight:"#c0c6d8",crossbow:"#2f9e6a",icewitch:"#7ad0ff",mage:"#a46be8",giant:"#f0954a"},Xc={spear:"창",shield:"방",archer:"궁",bomber:"폭",drummer:"북",assassin:"암",priest:"사",knight:"기",crossbow:"석",icewitch:"빙",mage:"마",giant:"거"},bo={slime:"#6fcf5a",goblin:"#9aa83a",orc:"#4f7a3a",bat:"#5a4a7a",gobarcher:"#b0a040",ironclad:"#7a8290",darkmage:"#6a2a8a",boss1:"#8a3fd1",boss2:"#3f8ad1",boss3:"#555b66",skeleton:"#d8d2c0",golem:"#8a7a66",boss4:"#7a1f3a"},zu=""+new URL("ss_knight_walk-y78nftRN.png",import.meta.url).href,Hu={"ally:knight":{file:"ss_knight_walk.png",frames:2,fps:5,foot:.969,scale:1,flip:!1,pixel:!0,v:1}},Gu=[4,6,8,12,20],Vu={4:35,6:35,8:18,12:9,20:3},Wu=[{id:"mono",name:"1칸",cells:[[0,0]]},{id:"i2",name:"1x2 막대",cells:[[0,0],[1,0]]},{id:"i3",name:"1x3 막대",cells:[[0,0],[1,0],[2,0]]},{id:"l3",name:"L자(3칸)",cells:[[0,0],[0,1],[1,1]]},{id:"i4",name:"1x4 막대",cells:[[0,0],[1,0],[2,0],[3,0]]},{id:"o4",name:"2x2 정사각",cells:[[0,0],[1,0],[0,1],[1,1]]},{id:"l4",name:"L자(4칸)",cells:[[0,0],[0,1],[0,2],[1,2]]},{id:"t4",name:"T자",cells:[[0,0],[1,0],[2,0],[1,1]]},{id:"s4",name:"S자",cells:[[1,0],[2,0],[0,1],[1,1]]}],Ga={1:25,2:40,3:25,4:10},ya={1:{success:90,destroyBoth:!1},2:{success:75,destroyBoth:!1},3:{success:60,destroyBoth:!1},4:{success:50,destroyBoth:!1}},Xu=10,Qe=5,lc=1e4,qu=30,zr=48,Ma=4,Yu=0,ju=3,yo=15,Ku=8,Zu=1.25,Ju=1e3,Qu=350,_i=6,Va={w:3,h:3},pe=[{id:"spear",name:"창병",cost:5,kind:"melee",role:"싸고 빠른 물량",skill:""},{id:"shield",name:"방패병",cost:8,kind:"melee",role:"값싼 벽",skill:"받는 피해 -35%"},{id:"archer",name:"궁수",cost:9,kind:"ranged",role:"후방 원거리",skill:"비행 적 공격 가능"},{id:"bomber",name:"폭탄병",cost:10,kind:"melee",role:"돌격 자폭",skill:"처음 닿은 적 무리에 큰 범위 폭발 후 소멸"},{id:"drummer",name:"북치기",cost:12,kind:"support",role:"공격 속도 버프",skill:"주변 5m 아군 공격 속도 +40%"},{id:"assassin",name:"암살자",cost:12,kind:"melee",role:"빠른 치명타",skill:"30% 확률로 2.5배 치명타"},{id:"priest",name:"사제",cost:14,kind:"support",role:"회복",skill:"공격 대신 체력이 가장 낮은 아군 회복"},{id:"knight",name:"기사",cost:15,kind:"melee",role:"전선을 버티는 탱커",skill:"공격할 때마다 적을 밀쳐냄"},{id:"crossbow",name:"석궁병",cost:18,kind:"ranged",role:"관통 사격",skill:"일직선 적 3명 관통 · 비행 적 공격 가능"},{id:"icewitch",name:"얼음 마녀",cost:20,kind:"magic",role:"광역 둔화",skill:"맞은 적 2초간 이동 50% 감소 · 갑옷 무시"},{id:"mage",name:"마법사",cost:22,kind:"magic",role:"광역 마법",skill:"반경 2m 범위 · 갑옷 무시 · 비행 적 공격 가능"},{id:"giant",name:"거인",cost:40,kind:"melee",role:"모아서 한 방",skill:"범위 공격 + 강한 밀쳐내기"}],xi=3,tp=["spear","archer","knight"],Ls={spear:1,shield:1,archer:1,knight:1,mage:1,bomber:1,drummer:1,priest:4,crossbow:4,assassin:7,icewitch:7,giant:10},Yf={melee:"근접",ranged:"원거리",magic:"마법",support:"지원"},ep=1.3,np=1.85,jf=.6;function Kf(i,t,e=1){var o;const n=np*i/t.roleMult,s=n*Math.sqrt(t.t)*e;let r=n/Math.sqrt(t.t)*e*t.cd*jf;return(o=t.traits)!=null&&o.bomb&&(r*=6),{hp:Math.round(s),atk:Math.round(r*10)/10,cd:t.cd,range:t.range,splash:t.splash,speed:t.speed,size:t.size,traits:{...t.traits??{}}}}const Sa={spear:{t:4,roleMult:1,cd:.8,range:1.2,splash:0,speed:2.2,size:.8},shield:{t:22,roleMult:1.25,cd:1.2,range:1.2,splash:0,speed:1.5,size:.9,traits:{block:.35}},archer:{t:2.5,roleMult:1.6,cd:1,range:6,splash:0,speed:1.8,size:.8,traits:{air:!0}},bomber:{t:1.5,roleMult:1.3,cd:1,range:1,splash:2.5,speed:2.6,size:.8,traits:{bomb:!0}},drummer:{t:6,roleMult:2.6,cd:1.2,range:1.2,splash:0,speed:1.6,size:.9,traits:{haste:.4}},assassin:{t:2,roleMult:1.25,cd:.6,range:1.1,splash:0,speed:3,size:.75,traits:{crit:.3}},priest:{t:5,roleMult:1.4,cd:1.5,range:6,splash:0,speed:1.5,size:.85,traits:{heal:!0}},knight:{t:14,roleMult:1.1,cd:1,range:1.3,splash:0,speed:1.4,size:1,traits:{knockback:1.2}},crossbow:{t:2.5,roleMult:2,cd:1.6,range:7,splash:0,speed:1.6,size:.85,traits:{air:!0,pierce:3}},icewitch:{t:3,roleMult:2.1,cd:1.4,range:5,splash:1.3,speed:1.5,size:.9,traits:{dmg:"magic",slow:.5}},mage:{t:3,roleMult:2,cd:1.4,range:5,splash:2,speed:1.5,size:.9,traits:{dmg:"magic",air:!0}},giant:{t:10,roleMult:1.3,cd:1.5,range:1.8,splash:1.5,speed:1.1,size:1.8,traits:{knockback:2.5}}},ip=1.3,sp=1.5,ap=.1;function ys(i,t=!1,e=0){const n=ip*(t?sp:1)*(1+ap*e);return Kf(Math.pow(i.cost,ep),Sa[i.id],n)}const Un={slime:{id:"slime",name:"슬라임",power:3.5,exp:8,t:3,roleMult:1,cd:1,range:1,splash:0,speed:1.2,size:.7,note:"약하지만 많다"},goblin:{id:"goblin",name:"고블린",power:7,exp:12,t:3,roleMult:1,cd:.8,range:1.1,splash:0,speed:2,size:.8,note:"빠르다"},orc:{id:"orc",name:"오크",power:28,exp:40,t:8,roleMult:1,cd:1.2,range:1.3,splash:0,speed:1,size:1.2,note:"단단하다"},bat:{id:"bat",name:"박쥐",power:6,exp:12,t:2.5,roleMult:1,cd:.7,range:1,splash:0,speed:2.4,size:.7,traits:{flying:!0},note:"비행: 원거리·마법사만 공격 가능"},gobarcher:{id:"gobarcher",name:"고블린 궁수",power:10,exp:15,t:2,roleMult:1.5,cd:1.2,range:5,splash:0,speed:1.4,size:.8,note:"멀리서 쏜다"},ironclad:{id:"ironclad",name:"철갑병",power:26,exp:40,t:10,roleMult:1,cd:1.3,range:1.3,splash:0,speed:.9,size:1.1,traits:{armor:.5},note:"갑옷: 물리 피해 -50% (마법은 그대로)"},darkmage:{id:"darkmage",name:"흑마법사",power:18,exp:28,t:2.5,roleMult:1.8,cd:1.8,range:5,splash:1.2,speed:1.2,size:.85,traits:{dmg:"magic"},note:"범위 마법: 뭉친 아군이 위험"},boss1:{id:"boss1",name:"숲의 군주",power:85,exp:60,t:25,roleMult:1,cd:1.6,range:2.2,splash:1.4,speed:0,size:2.4,boss:!0,note:"범위 공격: 근접이 뭉치면 한꺼번에 쓸려나간다"},boss2:{id:"boss2",name:"협곡 와이번",power:88,exp:60,t:18,roleMult:1,cd:1.4,range:3,splash:2,speed:0,size:2.4,boss:!0,traits:{flying:!0},note:"비행 보스: 원거리·마법사 없이는 못 잡는다"},skeleton:{id:"skeleton",name:"해골 병사",power:6,exp:14,t:2,roleMult:1,cd:.7,range:1.1,splash:0,speed:2.2,size:.8,note:"떼로 몰려온다"},golem:{id:"golem",name:"돌 골렘",power:28,exp:45,t:14,roleMult:1,cd:1.6,range:1.4,splash:.8,speed:.7,size:1.5,traits:{armor:.4},note:"아주 단단한 갑옷: 마법으로 녹여요"},boss4:{id:"boss4",name:"마왕",power:75,exp:80,t:26,roleMult:1.2,cd:1.5,range:3.5,splash:2.2,speed:0,size:2.7,boss:!0,traits:{armor:.3,dmg:"magic"},note:"최종 보스: 넓은 마법 공격 · 갑옷"},boss3:{id:"boss3",name:"마왕성 수문장",power:92,exp:60,t:28,roleMult:1,cd:1.6,range:2.2,splash:1.8,speed:0,size:2.6,boss:!0,traits:{armor:.5},note:"갑옷 보스: 마법이 잘 통한다"}},Vs=[{boss:"boss1",pool:[["slime",55],["goblin",30],["orc",15]]},{boss:"boss2",pool:[["slime",25],["goblin",25],["orc",20],["bat",18],["gobarcher",12]]},{boss:"boss3",pool:[["slime",10],["goblin",25],["orc",15],["bat",15],["gobarcher",10],["ironclad",15],["darkmage",10]]},{boss:"boss2",pool:[["skeleton",20],["goblin",20],["orc",12],["bat",14],["gobarcher",10],["ironclad",12],["darkmage",8],["golem",4]]},{boss:"boss4",pool:[["skeleton",18],["goblin",20],["orc",12],["bat",14],["gobarcher",10],["ironclad",12],["darkmage",9],["golem",5]]}],Ds=3,rp={1:[["slime",70],["goblin",25],["orc",5]],2:[["slime",50],["goblin",35],["orc",15]]};function Zf(i){return rp[i]??Vs[$n(i)].pool}const op=new Set(["orc","ironclad","darkmage","golem"]),cc=1.145,lp=[.72,.8,1,1,1];function qc(i,t){const e=Un[i],n=e.boss?lp[$n(t)]??1:1;return Kf(e.power*Math.pow(cc,t-1)*n,e)}function $n(i){return Math.min(Vs.length-1,Math.floor((i-1)/Ds))}const We={grass:{name:"초원",icon:"🌿"},jungle:{name:"정글",icon:"🌴"},desert:{name:"사막",icon:"🏜️"},glacier:{name:"빙하",icon:"🧊"},lava:{name:"용암",icon:"🌋"},cloud:{name:"구름",icon:"☁️"},cave:{name:"동굴",icon:"💎"}},Yc=["grass","grass","grass","jungle","jungle","desert","desert","glacier","glacier","glacier","lava","lava","cloud","cloud","cave"];function ts(i){return Yc[Math.max(0,Math.min(Yc.length-1,i-1))]}function Pa(i){return We[ts(i)].name}const jc=[{id:"character",name:"캐릭터",icon:"🧙",desc:"용병·몬스터의 걷기 시트와 공격 시트. 카드 그림은 걷기 첫 프레임을 써요."},{id:"anim",name:"애니메이션",icon:"🎞️",desc:"본진 걷기, 전리품 상자, 마석 같은 반복 애니메이션."},{id:"fx",name:"이펙트",icon:"✨",desc:"한 번 재생되고 사라지는 연출. 가운데를 기준으로 그려요."},{id:"icon",name:"아이콘",icon:"🪙",desc:"화면 곳곳의 이모지 아이콘을 그림으로 바꿔요. 정사각형 PNG/SVG 권장."},{id:"ui",name:"UI",icon:"🖼️",desc:"패널·버튼 테두리(9칸 나누기)와 결과 엠블럼."},{id:"bg",name:"배경",icon:"🏞️",desc:"장소별 전투 배경과 캠프 배경."},{id:"font",name:"폰트",icon:"🔤",desc:"TTF · OTF · WOFF · WOFF2 글꼴."}],bi={frames:1,fps:8,foot:.95,scale:1,flip:!1,pixel:!0};function cp(){var t;const i=[];for(const e of pe){const n={side:"ally",id:e.id,size:((t=Sa[e.id])==null?void 0:t.size)??.9,boss:!1};i.push({key:`ally:${e.id}`,cat:"character",kind:"sheet",anchor:"foot",name:e.name,where:`${e.role} · 걷기`,unit:n,hint:"오른쪽(→)을 보는 그림",defaults:bi}),i.push({key:`ally:${e.id}@attack`,cat:"character",kind:"sheet",anchor:"foot",name:`${e.name} 공격`,where:"공격할 때 한 번 재생",unit:n,defaults:{...bi,fps:15}})}for(const e of Object.values(Un)){const n={side:"enemy",id:e.id,size:e.size,boss:!!e.boss};i.push({key:`enemy:${e.id}`,cat:"character",kind:"sheet",anchor:"foot",name:e.name,where:`${e.note} · 걷기`,unit:n,hint:"오른쪽을 보는 그림이면 좌우 뒤집기를 켜요",defaults:{...bi,flip:!0}}),i.push({key:`enemy:${e.id}@attack`,cat:"character",kind:"sheet",anchor:"foot",name:`${e.name} 공격`,where:"공격할 때 한 번 재생",unit:n,defaults:{...bi,flip:!0,fps:15}})}return i}const An=(i,t,e,n)=>({key:`fx:${i}`,cat:"fx",kind:"sheet",anchor:"center",name:t,where:e,glyph:n,hint:"가운데 기준 · 한 번 재생",defaults:{...bi,fps:20,scale:1}}),Jt=(i,t,e,n)=>({key:`icon:${i}`,cat:"icon",kind:"image",name:t,where:n,chars:e,glyph:e[0],hint:"정사각형 · 64×64 이상"}),wi=[...cp(),{key:"base:walk",cat:"anim",kind:"sheet",anchor:"foot",name:"본진",where:"전투 화면 왼쪽의 걷는 본진 (걸을 때 프레임이 넘어가요)",glyph:"🏰",hint:"오른쪽(→)으로 걷는 그림 · 망루 포함",defaults:{...bi,fps:6,scale:1}},{key:"anim:chest",cat:"anim",kind:"sheet",anchor:"foot",name:"전리품 상자",where:"길 위에 놓인 보상 상자 (반복 재생)",glyph:"🎁",defaults:{...bi,fps:6}},{key:"anim:stone",cat:"anim",kind:"sheet",anchor:"center",name:"마석",where:"몬스터를 잡으면 나와서 경험치 게이지로 날아가는 돌 (반복 재생)",glyph:"💠",defaults:{...bi,fps:10}},An("hit","맞을 때","전투에서 피해를 받을 때","💢"),An("kill","처치","몬스터가 쓰러질 때","💨"),An("explode","폭발","폭탄병·범위 공격이 터질 때","💥"),An("heal","회복","사제가 회복시킬 때","💚"),An("volley","화살비 착탄","전리품 화살비가 떨어질 때","☄️"),An("loot","전리품 획득","보상 상자를 열 때","🎁"),An("merge-ok","강화 성공","격자에서 강화가 성공했을 때","🌟"),An("merge-fail","강화 실패","강화가 실패해 주사위가 깨질 때","💔"),An("roll-great","좋은 주사위","높은 눈금이 나왔을 때","🎲"),An("upgrade","업그레이드","캠프에서 업그레이드를 샀을 때","⬆️"),Jt("coin","코인",["🪙"],"코인 표시 전체"),Jt("heart","목숨",["❤️","❤"],"목숨 하트"),Jt("heart-empty","잃은 목숨",["♡"],"잃은 목숨"),Jt("broken","목숨 잃음",["💔"],"결과 화면"),Jt("crown","보스",["👑"],"보스 표시"),Jt("flag","전선",["🚩"],"전진 거리"),Jt("sword","공격력·처치",["⚔️","⚔"],"능력치 · 처치 수"),Jt("hp","체력",["❤️‍🩹"],"용병 체력 (없으면 하트)"),Jt("time","시간",["⏱️","⏱"],"공격 간격 · 남은 시간"),Jt("boot","이동 속도",["👟"],"능력치"),Jt("healstat","회복량",["💚"],"사제 능력치"),Jt("boom","돌파",["💥"],"돌파당함"),Jt("dice","주사위",["🎲"],"주사위 · 고면체"),Jt("stats","능력치",["📊"],"내 능력치"),Jt("fire","캠프·위력",["🔥"],"캠프 제목 · 망루 위력"),Jt("tent","막사",["⛺"],"캠프 장소"),Jt("forge","대장간",["⚒️","⚒"],"캠프 장소 · 강화 성공"),Jt("wagon","짐수레·격자",["🧳"],"캠프 장소 · 격자"),Jt("target","훈련장",["🎯"],"캠프 장소"),Jt("relic","유물 상인",["🔮"],"캠프 장소"),Jt("oracle","점술사",["🌙"],"캠프 장소"),Jt("lock","잠김",["🔒"],"잠긴 장소 · 용병"),Jt("train","용병 훈련",["💪"],"업그레이드"),Jt("hold","보관함",["📥"],"업그레이드"),Jt("floor","최저 눈금",["⬆️"],"업그레이드"),Jt("compress","작은 칸",["🧩"],"업그레이드"),Jt("range","사거리",["📏"],"업그레이드"),Jt("volley","화살비",["🏹"],"전리품 · 연사"),Jt("potion","물약",["🧪"],"전리품"),Jt("horn","돌격 나팔",["📯"],"전리품"),Jt("moneybag","돈주머니",["💰"],"전리품"),...Object.keys(We).map(i=>Jt(`biome-${i}`,`${We[i].name} 표시`,[We[i].icon],"스테이지 장소 이름 옆")),{key:"ui:panel",cat:"ui",kind:"image",name:"패널 테두리",where:"카드·팝업 창 (9칸 나누기)",glyph:"🖼️",hint:"모서리가 있는 사각 틀 그림",defaults:{slice:24,border:14}},{key:"ui:button",cat:"ui",kind:"image",name:"주 버튼",where:"노란·파란 큰 버튼 (출발, 캠프로 등)",glyph:"🔘",hint:"가로로 늘어나는 버튼 그림",defaults:{slice:16,border:10}},{key:"ui:emblem-clear",cat:"ui",kind:"image",name:"달성 엠블럼",where:"스테이지 결과 팝업 위",glyph:"🏅",hint:"정사각형 · 투명 배경"},{key:"ui:emblem-boss",cat:"ui",kind:"image",name:"보스 격파 엠블럼",where:"보스 결과 팝업 위",glyph:"👑",hint:"정사각형 · 투명 배경"},{key:"ui:emblem-fail",cat:"ui",kind:"image",name:"실패 엠블럼",where:"실패 결과 팝업 위",glyph:"🛡️",hint:"정사각형 · 투명 배경"},...Object.keys(We).map(i=>({key:`bg:${i}`,cat:"bg",kind:"image",name:`${We[i].name} 배경`,where:`${We[i].name} 스테이지 전투 배경 (가로로 이어 붙여 스크롤)`,glyph:We[i].icon,hint:"높이 기준으로 맞춰요 · 아래 38px쯤이 땅",defaults:{parallax:.5}})),{key:"bg:camp",cat:"bg",kind:"image",name:"캠프 배경",where:"스테이지 사이 캠프 화면 전체",glyph:"🏕️",hint:"세로 화면 · 화면을 꽉 채우게 맞춰요",defaults:{props:!0}},{key:"font:main",cat:"font",kind:"font",name:"본문 글꼴",where:"게임 전체 글자 (전투 화면 글자 포함)",glyph:"가"},{key:"font:title",cat:"font",kind:"font",name:"제목 글꼴",where:"제목 · 큰 숫자 · 결과 팝업 제목",glyph:"가"}],Ea=new Map(wi.map(i=>[i.key,i])),dp={sheet:"image/png,image/webp,image/gif",image:"image/png,image/webp,image/gif,image/svg+xml,image/jpeg",font:".ttf,.otf,.woff,.woff2"},Kc=Object.assign({"../../Assets/ss_knight_walk.png":zu}),Jf=Hu,ve={...Jf};function Qf(i){return ve[i]}function ei(i){if(i!=null&&i.url&&/^\/_blob\/[A-Za-z0-9_-]+$/.test(i.url))return i.url;if(!(i!=null&&i.file))return null;const t=Object.keys(Kc).find(n=>n.endsWith(`/${i.file}`));return t?Kc[t]:null}function oo(i){return ei(ve[i])}const ol=new Map;function es(i){if(typeof Image>"u")return null;let t=ol.get(i);if(!t){const e=oo(i);if(!e)return null;t=new Image,t.src=e,ol.set(i,t)}return t.complete&&t.naturalWidth>0?t:null}function Ms(i){const t=es(i),e=ve[i];if(!t||!e)return null;const n=Math.max(1,e.frames??1);return{img:t,frames:n,fps:e.fps??8,foot:e.foot??.95,scale:e.scale??1,flip:!!e.flip,pixel:e.pixel??!0,fw:t.naturalWidth/n,fh:t.naturalHeight}}function ll(i,t,e,n,s,a,r,o=!1){const l=a*(t.fw/t.fh),c=i.imageSmoothingEnabled;i.imageSmoothingEnabled=!t.pixel,i.save(),i.translate(Math.round(n),Math.round(r==="foot"?s-a*t.foot:s-a/2)),o!==t.flip&&i.scale(-1,1);const f=Math.max(0,Math.min(t.frames-1,e));i.drawImage(t.img,f*t.fw,0,t.fw,t.fh,-l/2,0,l,a),i.restore(),i.imageSmoothingEnabled=c}function fp(i){const t=Ms(i);return t?t.frames/Math.max(1,t.fps):0}function hp(i,t,e,n,s,a){const r=Ms(t);if(!r)return!1;const o=Math.floor(e*r.fps);return o>=r.frames?!1:(ll(i,r,o,n,s,a*r.scale,"center"),!0)}function th(i,t){return Ms(`${i}:${t}`)}function eh(i,t,e){const n=ve[`${i}:${t}`],s=ei(n);return!n||!s?null:`<span class="portrait sheet-portrait ${n.pixel===!1?"":"pixel"}" style="background-image:url('${s}'),${e};background-size:${(n.frames??1)*100}% 100%,cover"></span>`}const ji=new Map;function nh(){ji.clear();for(const i of wi)if(i.cat==="icon"&&ve[i.key])for(const t of i.chars??[])ji.set(t,i.key)}nh();function up(i){const t=ji.get(i)??ji.get(i.replace(/️/g,""));return t?es(t):null}function pp(i,t,e,n,s){const a=up(t);if(a){i.drawImage(a,e-s/2,n-s*.8,s,s);return}const r=i.textAlign;i.textAlign="center",i.font=`${s}px sans-serif`,i.fillText(t,e,n),i.textAlign=r}function mp(i){return i.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}let Zn=null;function ih(){if(!ji.size)return null;const i=[...ji.keys()].sort((t,e)=>e.length-t.length).map(mp);return new RegExp(`(${i.join("|")})\\uFE0F?`,"g")}const gp=new Set(["SCRIPT","STYLE","TEXTAREA","INPUT","OPTION","TITLE"]);function Tr(i){if(!Zn)return;const t=document.createTreeWalker(i,NodeFilter.SHOW_TEXT,{acceptNode:n=>{const s=n.parentElement;return!s||gp.has(s.tagName)||s.closest("[data-noicon]")?NodeFilter.FILTER_REJECT:(Zn.lastIndex=0,Zn.test(n.nodeValue??"")?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP)}}),e=[];for(;t.nextNode();)e.push(t.currentNode);for(const n of e){const s=n.nodeValue??"",a=document.createDocumentFragment();let r=0;Zn.lastIndex=0;for(let o=Zn.exec(s);o;o=Zn.exec(s)){o.index>r&&a.appendChild(document.createTextNode(s.slice(r,o.index)));const l=ji.get(o[1]),c=document.createElement("img");c.className="rd-ico",c.dataset.icon=l,c.alt=o[0],c.draggable=!1,c.src=oo(l),a.appendChild(c),r=o.index+o[0].length}r<s.length&&a.appendChild(document.createTextNode(s.slice(r))),n.replaceWith(a)}}function Zc(i){var e;const t=(e=i.split(".").pop())==null?void 0:e.toLowerCase();return t==="otf"?"opentype":t==="ttf"?"truetype":t??"woff2"}function sh(){let i="";const t=ve["font:main"],e=ve["font:title"],n=ei(t),s=ei(e);t&&n&&(i+=`@font-face{font-family:'RD Main';src:url('${n}') format('${Zc(t.file)}');font-display:swap}
body,button,input,select{font-family:'RD Main','Pretendard','Malgun Gothic',system-ui,sans-serif}`),e&&s&&(i+=`@font-face{font-family:'RD Title';src:url('${s}') format('${Zc(e.file)}');font-display:swap}
h1,h2,h3,.rc-title,.ct-title,.grid-sum,.coins b,.unlock-pop h3{font-family:'RD Title','RD Main','Pretendard',sans-serif}`);const a=(r,o)=>{const l=ve[r],c=ei(l);if(!l||!c)return;const f=l.border??12;i+=`${o}{border-style:solid;border-width:${f}px;border-color:transparent;border-image:url('${c}') ${l.slice??24} fill / ${f}px stretch;background:none;box-shadow:none}`};return a("ui:panel",".card,.modal-box"),a("ui:button","button.primary"),i+=".rd-ico{height:1.15em;width:auto;vertical-align:-0.2em;display:inline-block}",i}let Jc=!1;function ah(){if(Jc||!ve["font:main"]||typeof CanvasRenderingContext2D>"u")return;Jc=!0;const i=CanvasRenderingContext2D.prototype,t=Object.getOwnPropertyDescriptor(i,"font");!(t!=null&&t.set)||!t.get||Object.defineProperty(i,"font",{configurable:!0,get:t.get,set(e){const n=!!ve["font:main"];t.set.call(this,n&&typeof e=="string"&&!e.includes("RD Main")?e.replace(/\bsans-serif\b/,"'RD Main', sans-serif"):e)}})}let wr=null;function vp(i=document.body){wr=i;const t=document.createElement("style");t.id="rd-assets",t.textContent=sh(),document.head.appendChild(t),ah(),Zn=ih(),Tr(i),new MutationObserver(e=>{if(Zn)for(const n of e)n.type==="characterData"?Tr(n.target.parentNode??n.target):n.addedNodes.forEach(s=>Tr(s))}).observe(i,{childList:!0,subtree:!0,characterData:!0})}const cl=[];function _p(i){cl.push(i)}let Qc={};function dc(i){Qc={...i};for(const e of Object.keys(ve))delete ve[e];Object.assign(ve,Jf);for(const[e,n]of Object.entries(Qc))n?ve[e]=n:delete ve[e];ol.clear();for(const e of Object.keys(ve))e.startsWith("font:")||es(e);nh(),Zn=ih();const t=document.getElementById("rd-assets");t&&(t.textContent=sh()),ah(),wr&&(wr.querySelectorAll("img.rd-ico").forEach(e=>{const n=oo(e.dataset.icon??"");n?e.src=n:e.replaceWith(document.createTextNode(e.alt))}),Tr(wr));for(const e of cl)e();setTimeout(()=>cl.forEach(e=>e()),400)}let Wa=null;const Ta="assets/manifest";function La(){return Wa||(Wa=(async()=>{const i=window.claude;if(!(i!=null&&i.use))return null;const t=await i.use("db");if(!t)return null;const e=await i.use("assets");return t.doc(Ta).onSnapshot(n=>{var s;return dc((n.exists?(s=n.data())==null?void 0:s.entries:null)??{})},()=>{}),{db:t,assets:e}})().catch(()=>null),Wa)}async function xp(){const i=await La();return!!(i!=null&&i.assets)}const bp={png:"image/png",webp:"image/webp",gif:"image/gif",svg:"image/svg+xml",jpg:"image/jpeg",jpeg:"image/jpeg",ttf:"font/ttf",otf:"font/otf",woff:"font/woff",woff2:"font/woff2"};async function yp(i,t,e){var l;const n=await La();if(!(n!=null&&n.assets))throw new Error("이 링크에서 파일을 올릴 권한이 없어요 (편집자만 가능)");const s=ve[i];let a;if(e){const c=await n.assets.upload(e.blob,{type:bp[e.ext]});a={...t,file:`${i.replace(/[:@]/g,"_")}.${e.ext}`,asset:c.id,url:`/_blob/${c.id}`}}else{if(!s)throw new Error("파일이 없어요");a={...t,file:s.file,asset:s.asset,url:s.url}}a.v=Date.now();const r=await n.db.doc(Ta).get(),o={...(r.exists?(l=r.data())==null?void 0:l.entries:null)??{},[i]:a};await n.db.doc(Ta).set({entries:o}),dc(o)}async function Mp(i){var s;const t=await La();if(!t)throw new Error("저장소에 연결하지 못했어요");const e=await t.db.doc(Ta).get(),n={...(e.exists?(s=e.data())==null?void 0:s.entries:null)??{},[i]:null};await t.db.doc(Ta).set({entries:n}),dc(n)}function fc(i,t,e,n=120){const s=ve[i],a=ei(s),r=es(i);if(!s||!a||!r)return!1;const o=Math.max(1,s.frames??1),l=n*(s.scale??1),c=l*(r.naturalWidth/o/r.naturalHeight),f=o/Math.max(1,s.fps??20)*1e3,d=document.createElement("div");return d.className=`rd-fx ${s.pixel===!1?"":"pixel"}`,Object.assign(d.style,{left:`${t}px`,top:`${e}px`,width:`${c}px`,height:`${l}px`,backgroundImage:`url('${a}')`,backgroundSize:`${o*100}% 100%`}),document.body.appendChild(d),o>1&&d.animate([{backgroundPositionX:"0%"},{backgroundPositionX:"100%"}],{duration:f,easing:`steps(${o}, jump-none)`,fill:"forwards"}),setTimeout(()=>d.remove(),f+30),!0}for(const i of Object.keys(ve))i.startsWith("font:")||es(i);const Sp="#f6d7b8",Nn="#2a2433",td={melee:["#3b4766","#26304a"],ranged:["#2f5a48","#1e3a30"],magic:["#4f3a73","#2f2450"],support:["#6a5326","#43341a"]};function Je(i=32,t=30,e=13,n=Sp,s=!0){return`<circle cx="${i}" cy="${t}" r="${e}" fill="${n}"/>
  ${s?`<ellipse cx="${i-4.5}" cy="${t+1}" rx="1.8" ry="2.3" fill="${Nn}"/><ellipse cx="${i+4.5}" cy="${t+1}" rx="1.8" ry="2.3" fill="${Nn}"/>
  <circle cx="${i-4}" cy="${t+.2}" r="0.6" fill="#fff"/><circle cx="${i+5}" cy="${t+.2}" r="0.6" fill="#fff"/>`:""}
  <circle cx="${i-8}" cy="${t+5}" r="2.3" fill="#ff9aa2" opacity="0.55"/><circle cx="${i+8}" cy="${t+5}" r="2.3" fill="#ff9aa2" opacity="0.55"/>
  <path d="M${i-2} ${t+6} q2 2 4 0" stroke="${Nn}" stroke-width="1.2" fill="none" stroke-linecap="round"/>`}function ln(i,t=22){return`<rect x="${32-t/2}" y="40" width="${t}" height="20" rx="8" fill="${i}"/>
  <rect x="${32-t/2}" y="54" width="${t}" height="6" fill="rgba(0,0,0,0.18)"/>`}const rh={spear:()=>`<line x1="50" y1="8" x2="46" y2="60" stroke="#b8865a" stroke-width="2.5"/><path d="M50 3 l3 8 h-6z" fill="#dfe6f0"/>
    ${ln(Ze.spear)}${Je()}<path d="M19 28 a13 13 0 0 1 26 0 z" fill="#9aa6bd"/><rect x="30.5" y="13" width="3" height="6" rx="1" fill="#e05a3a"/>`,shield:()=>`${ln(Ze.shield)}${Je()}<path d="M19 28 a13 13 0 0 1 26 0 z" fill="#6f7894"/>
    <path d="M8 40 h16 v8 q0 9 -8 12 q-8 -3 -8 -12z" fill="#c0c6d8" stroke="#6f7894" stroke-width="2"/><circle cx="16" cy="48" r="3" fill="#ffd34d"/>`,archer:()=>`<path d="M50 14 q12 18 0 36" stroke="#b8865a" stroke-width="2.5" fill="none"/><line x1="50" y1="14" x2="50" y2="50" stroke="#eee" stroke-width="0.8"/>
    ${ln(Ze.archer)}${Je()}<path d="M17 32 q0 -20 15 -20 q15 0 15 20 q-4 -9 -15 -9 q-11 0 -15 9z" fill="#2f9e6a"/>`,bomber:()=>`${ln(Ze.bomber)}${Je()}<path d="M19 24 h26 v4 h-26z" fill="#c0392b"/><path d="M45 24 l7 -3 l-2 6z" fill="#c0392b"/>
    <circle cx="50" cy="50" r="8" fill="#2b2b33"/><circle cx="47" cy="47" r="2" fill="#5a5a66"/><path d="M53 43 q3 -4 6 -3" stroke="#b8865a" stroke-width="1.5" fill="none"/>
    <circle cx="59.5" cy="39.5" r="2.4" fill="#ffd34d"/><circle cx="59.5" cy="39.5" r="1.2" fill="#ff6a3c"/>`,drummer:()=>`${ln(Ze.drummer)}${Je()}<path d="M19 27 a13 11 0 0 1 26 0z" fill="#c0392b"/><path d="M40 18 q8 -10 12 -6 q-6 1 -10 8z" fill="#fff"/>
    <rect x="20" y="46" width="24" height="12" rx="3" fill="#e8b23a" stroke="#8a5a2b" stroke-width="2"/><path d="M22 47 l20 10 M42 47 l-20 10" stroke="#8a5a2b" stroke-width="1"/>
    <line x1="14" y1="38" x2="24" y2="47" stroke="#b8865a" stroke-width="2"/><line x1="50" y1="38" x2="40" y2="47" stroke="#b8865a" stroke-width="2"/>`,assassin:()=>`${ln(Ze.assassin)}${Je()}<path d="M16 34 q0 -22 16 -22 q16 0 16 22 l-4 -6 q-12 -10 -24 0z" fill="#3a3a4a"/>
    <rect x="20" y="33" width="24" height="9" rx="4" fill="#3a3a4a"/><path d="M48 44 l9 -9 l2 2 l-9 9z" fill="#dfe6f0"/><rect x="46" y="45" width="4" height="4" fill="#8a5a2b" transform="rotate(45 48 47)"/>`,priest:()=>`<line x1="12" y1="14" x2="14" y2="60" stroke="#e8c36a" stroke-width="2.5"/><circle cx="12" cy="12" r="4" fill="none" stroke="#ffd34d" stroke-width="2"/>
    ${ln(Ze.priest)}<rect x="30" y="44" width="4" height="12" fill="#ffd34d"/><rect x="27" y="47" width="10" height="3.5" fill="#ffd34d"/>
    ${Je()}<path d="M17 33 q0 -21 15 -21 q15 0 15 21 q-3 -10 -15 -10 q-12 0 -15 10z" fill="#ffffff"/>`,knight:()=>`<line x1="50" y1="20" x2="50" y2="52" stroke="#dfe6f0" stroke-width="3"/><rect x="45" y="48" width="10" height="3" fill="#8a5a2b"/>
    ${ln(Ze.knight,24)}${Je()}<path d="M18 30 a14 14 0 0 1 28 0 v-2 h-28z" fill="#a8b0c4"/><path d="M19 29 a13 13 0 0 1 26 0z" fill="#a8b0c4"/>
    <path d="M32 10 q10 -6 12 4 q-6 -3 -12 2z" fill="#e05a3a"/>`,crossbow:()=>`${ln(Ze.crossbow)}${Je()}<path d="M19 27 a13 11 0 0 1 26 0z" fill="#5a3d24"/><rect x="17" y="25" width="30" height="3" rx="1" fill="#5a3d24"/>
    <rect x="34" y="44" width="24" height="4" rx="1" fill="#8a5a2b"/><path d="M54 36 q5 10 0 20" stroke="#5a3d24" stroke-width="2.5" fill="none"/><line x1="54" y1="36" x2="54" y2="56" stroke="#eee" stroke-width="0.8"/>`,icewitch:()=>`${ln(Ze.icewitch)}${Je(32,31)}<path d="M14 26 h36 l-6 -2 l-9 -20 l-6 9 l-9 11z" fill="#3a7fd0"/><rect x="14" y="24" width="36" height="3" rx="1.5" fill="#bfe8ff"/>
    <g stroke="#e6f7ff" stroke-width="1.6" stroke-linecap="round"><line x1="52" y1="42" x2="52" y2="56"/><line x1="45" y1="49" x2="59" y2="49"/><line x1="47" y1="44" x2="57" y2="54"/><line x1="57" y1="44" x2="47" y2="54"/></g>`,mage:()=>`<line x1="52" y1="18" x2="50" y2="60" stroke="#8a5a2b" stroke-width="2.5"/><circle cx="52" cy="15" r="5" fill="#c79bff"/><circle cx="51" cy="13.5" r="1.6" fill="#fff"/>
    ${ln(Ze.mage)}${Je(32,31)}<path d="M14 26 h36 l-10 -3 l-6 -20 l-12 18z" fill="#6b3fb0"/><rect x="14" y="24" width="36" height="3" rx="1.5" fill="#ffd34d"/><path d="M33 13 l1 2.4 l2.5 .3 l-1.9 1.6 l.6 2.5 l-2.2 -1.3 l-2.2 1.3 l.6 -2.5 l-1.9 -1.6 l2.5 -.3z" fill="#ffd34d"/>`,giant:()=>`<rect x="47" y="22" width="7" height="34" rx="3" fill="#8a5a2b" transform="rotate(14 50 40)"/><circle cx="54" cy="22" r="6" fill="#8a5a2b"/>
    <rect x="16" y="40" width="32" height="22" rx="10" fill="${Ze.giant}"/>${Je(32,27,15,"#e0a77a")}
    <path d="M22 21 q4 -3 8 0 M34 21 q4 -3 8 0" stroke="${Nn}" stroke-width="2" fill="none"/><path d="M20 15 l-4 -7 l7 4z M44 15 l4 -7 l-7 4z" fill="#f2ead8"/>`};function _s(i,t,e,n,s=Nn){return`<circle cx="${i}" cy="${t}" r="${e}" fill="${n}"/>
  <path d="M${i-8} ${t-3} l6 2.5 M${i+8} ${t-3} l-6 2.5" stroke="${Nn}" stroke-width="1.8" stroke-linecap="round"/>
  <ellipse cx="${i-4.5}" cy="${t+1.5}" rx="1.8" ry="2" fill="${s}"/><ellipse cx="${i+4.5}" cy="${t+1.5}" rx="1.8" ry="2" fill="${s}"/>
  <path d="M${i-3} ${t+7} q3 -2 6 0" stroke="${Nn}" stroke-width="1.3" fill="none" stroke-linecap="round"/>`}const Is={slime:()=>`<path d="M10 58 q0 -30 22 -30 q22 0 22 30z" fill="#6fcf5a"/><ellipse cx="24" cy="36" rx="5" ry="3" fill="#b5f0a6" opacity="0.7"/>
    <ellipse cx="26" cy="46" rx="2.2" ry="3" fill="${Nn}"/><ellipse cx="38" cy="46" rx="2.2" ry="3" fill="${Nn}"/><path d="M29 52 q3 2 6 0" stroke="${Nn}" stroke-width="1.3" fill="none"/>`,goblin:()=>`<rect x="22" y="42" width="20" height="18" rx="7" fill="#7a5a32"/>
    <path d="M18 30 l-12 -6 l10 12z M46 30 l12 -6 l-10 12z" fill="#9aa83a"/>${_s(32,32,12,"#9aa83a","#ffde59")}
    <path d="M46 46 l8 -8 l2 2 l-8 8z" fill="#cfd6e0"/>`,gobarcher:()=>`<path d="M50 18 q11 16 0 32" stroke="#8a5a2b" stroke-width="2.5" fill="none"/><line x1="50" y1="18" x2="50" y2="50" stroke="#ddd" stroke-width="0.8"/>
    <rect x="22" y="42" width="20" height="18" rx="7" fill="#5a6a2a"/>
    <path d="M18 30 l-12 -6 l10 12z M46 30 l12 -6 l-10 12z" fill="#b0a040"/>${_s(32,32,12,"#b0a040","#ffde59")}
    <path d="M19 28 q0 -14 13 -14 q13 0 13 14 q-6 -6 -13 -6 q-7 0 -13 6z" fill="#5a6a2a"/>`,orc:()=>`<rect x="12" y="38" width="40" height="24" rx="11" fill="#4f6a32"/><rect x="12" y="50" width="40" height="5" fill="#6b4a2c"/>
    ${_s(32,27,15,"#4f7a3a","#ff5a3c")}<path d="M24 36 l2 -6 l2 6z M36 36 l2 -6 l2 6z" fill="#f2ead8"/>
    <rect x="50" y="20" width="7" height="34" rx="3" fill="#6b4a2c" transform="rotate(-12 53 37)"/>`,bat:()=>`<path d="M30 34 q-14 -16 -28 -6 q8 2 8 10 q6 -4 10 2 q4 -6 10 -6z M34 34 q14 -16 28 -6 q-8 2 -8 10 q-6 -4 -10 2 q-4 -6 -10 -6z" fill="#5a4a7a"/>
    <circle cx="32" cy="36" r="11" fill="#6b5a8e"/><path d="M24 28 l-2 -8 l6 5z M40 28 l2 -8 l-6 5z" fill="#6b5a8e"/>
    <circle cx="28" cy="35" r="2" fill="#ff5a5a"/><circle cx="36" cy="35" r="2" fill="#ff5a5a"/><path d="M29 41 l1.5 3 l1.5 -3 M32 41 l1.5 3 l1.5 -3" fill="#fff"/>`,ironclad:()=>`<rect x="14" y="38" width="36" height="24" rx="8" fill="#7a8290"/><rect x="14" y="44" width="36" height="4" fill="#5a606c"/>
    <circle cx="32" cy="28" r="14" fill="#8e96a4"/><rect x="20" y="26" width="24" height="5" rx="2" fill="#2a2433"/><circle cx="27" cy="28.5" r="1.4" fill="#ffde59"/><circle cx="37" cy="28.5" r="1.4" fill="#ffde59"/>
    <path d="M32 13 v-6" stroke="#c0392b" stroke-width="3"/><path d="M6 40 h14 v10 q0 8 -7 10 q-7 -2 -7 -10z" fill="#5a606c"/>`,darkmage:()=>`<line x1="52" y1="16" x2="50" y2="60" stroke="#3a2a4a" stroke-width="2.5"/><circle cx="52" cy="14" r="5" fill="#c060ff"/>
    <path d="M14 62 q2 -24 18 -24 q16 0 18 24z" fill="#4a1f63"/>
    <path d="M14 36 q0 -26 18 -26 q18 0 18 26 q-4 -6 -18 -6 q-14 0 -18 6z" fill="#6a2a8a"/><circle cx="32" cy="34" r="10" fill="#1d1426"/>
    <ellipse cx="28" cy="34" rx="2" ry="1.4" fill="#e9a0ff"/><ellipse cx="36" cy="34" rx="2" ry="1.4" fill="#e9a0ff"/>`,boss1:()=>`<path d="M8 62 q0 -26 24 -26 q24 0 24 26z" fill="#6b3fb0"/><path d="M14 46 q-10 -4 -10 -16 M50 46 q10 -4 10 -16" stroke="#5a3d24" stroke-width="4" fill="none" stroke-linecap="round"/>
    ${_s(32,28,15,"#8a3fd1","#ffde59")}<path d="M18 16 l4 -10 l5 7 l5 -9 l5 9 l5 -7 l4 10z" fill="#ffd34d"/><circle cx="32" cy="9" r="2" fill="#ef5a5a"/>
    <circle cx="14" cy="22" r="4" fill="#4fd18b"/><circle cx="50" cy="22" r="4" fill="#4fd18b"/>`,boss2:()=>`<path d="M26 34 q-16 -22 -24 -12 q8 4 4 12 q8 -2 10 6z M38 34 q16 -22 24 -12 q-8 4 -4 12 q-8 -2 -10 6z" fill="#2f6fae"/>
    <ellipse cx="32" cy="48" rx="15" ry="13" fill="#3f8ad1"/><ellipse cx="32" cy="52" rx="9" ry="8" fill="#a8d4ff"/>
    ${_s(32,26,12,"#3f8ad1","#ffde59")}<path d="M24 16 l-3 -8 l6 5z M40 16 l3 -8 l-6 5z" fill="#f2ead8"/>`,boss3:()=>`<rect x="10" y="36" width="44" height="26" rx="10" fill="#555b66"/><rect x="10" y="44" width="44" height="5" fill="#3d424b"/>
    <circle cx="32" cy="26" r="15" fill="#6a717e"/><rect x="18" y="24" width="28" height="6" rx="2" fill="#1d1426"/><circle cx="26" cy="27" r="1.6" fill="#ff5a3c"/><circle cx="38" cy="27" r="1.6" fill="#ff5a3c"/>
    <path d="M18 14 l4 -9 l5 6 l5 -8 l5 8 l5 -6 l4 9z" fill="#ffd34d"/>`};Is.skeleton=()=>`<rect x="24" y="42" width="16" height="16" rx="5" fill="#d8d2c0"/><path d="M26 46 h12 M26 50 h12 M26 54 h12" stroke="#8a8270" stroke-width="1.5"/>
    <circle cx="32" cy="30" r="12" fill="#ece6d2"/><rect x="26" y="38" width="12" height="5" rx="1.5" fill="#ece6d2"/><path d="M28 39 v3 M31 39 v3 M34 39 v3 M37 39 v3" stroke="#8a8270" stroke-width="1"/>
    <circle cx="27.5" cy="30" r="3.2" fill="#2a2433"/><circle cx="36.5" cy="30" r="3.2" fill="#2a2433"/><circle cx="27.5" cy="30" r="1" fill="#ff5a3c"/><circle cx="36.5" cy="30" r="1" fill="#ff5a3c"/>
    <path d="M31 34 l1 2 l1 -2z" fill="#2a2433"/><path d="M44 44 l10 -12 l2 2 l-10 12z" fill="#cfd6e0"/>`;Is.golem=()=>`<rect x="8" y="34" width="48" height="28" rx="9" fill="#8a7a66"/><rect x="2" y="38" width="12" height="18" rx="5" fill="#7a6a56"/><rect x="50" y="38" width="12" height="18" rx="5" fill="#7a6a56"/>
    <path d="M14 44 l8 4 l-4 6 M44 40 l6 6 M30 52 l6 -4" stroke="#5e5040" stroke-width="2" fill="none"/>
    <rect x="18" y="12" width="28" height="24" rx="7" fill="#9a8a74"/><rect x="22" y="22" width="20" height="5" rx="2" fill="#2a2433"/>
    <circle cx="27" cy="24.5" r="1.8" fill="#7fd8ff"/><circle cx="37" cy="24.5" r="1.8" fill="#7fd8ff"/><circle cx="24" cy="44" r="2" fill="#4fd18b" opacity="0.7"/>`;Is.boss4=()=>`<path d="M6 62 q4 -28 26 -28 q22 0 26 28z" fill="#3a1028"/><path d="M6 62 q8 -20 14 -18 l-4 18z M58 62 q-8 -20 -14 -18 l4 18z" fill="#7a1f3a"/>
    ${_s(32,28,14,"#b54a6a","#ffde59")}<path d="M19 22 q-8 -10 -6 -18 q4 8 10 12z M45 22 q8 -10 6 -18 q-4 8 -10 12z" fill="#2a2433"/>
    <path d="M22 15 l3 -7 l4 5 l3 -7 l3 7 l4 -5 l3 7z" fill="#ffd34d"/><circle cx="32" cy="11" r="1.8" fill="#c060ff"/>
    <circle cx="54" cy="30" r="5" fill="#c060ff" opacity="0.85"/><circle cx="54" cy="30" r="2" fill="#fff"/>`;const Hr=new Map;function ri(i,t){const e=`${i}:${t}`,[n,s]=td[t]??td.melee,a=eh("ally",i,`radial-gradient(circle at 50% 35%, ${n}, ${s})`);if(a)return a;const r=Hr.get(e);if(r)return r;const o=`<svg class="portrait" viewBox="0 0 64 64" aria-hidden="true">
    <defs><radialGradient id="pg-${i}" cx="50%" cy="35%" r="70%"><stop offset="0" stop-color="${n}"/><stop offset="1" stop-color="${s}"/></radialGradient></defs>
    <rect width="64" height="64" fill="url(#pg-${i})"/>
    <ellipse cx="32" cy="61" rx="18" ry="3" fill="rgba(0,0,0,0.3)"/>
    ${(rh[i]??(()=>ln("#888")+Je()))()}
  </svg>`;return Hr.set(e,o),o}function Gr(i){const t=`enemy:${i}`,e=eh("enemy",i,"linear-gradient(#3a2430, #3a2430)");if(e)return e;const n=Hr.get(t);if(n)return n;const s=`<svg class="portrait" viewBox="0 0 64 64" aria-hidden="true"><rect width="64" height="64" fill="#3a2430"/>
    ${(Is[i]??Is.slime)()}</svg>`;return Hr.set(t,s),s}const ed=new Map;function Ss(i,t){if(typeof Image>"u")return null;const e=`${i}:${t}`;let n=ed.get(e);if(!n){const s=i==="ally"?rh[t]:Is[t];if(!s)return null;const a=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="128" height="128">${s()}</svg>`;n=new Image,n.src=`data:image/svg+xml;charset=utf-8,${encodeURIComponent(a)}`,ed.set(e,n)}return n.complete&&n.naturalWidth>0?n:null}function Ae(i,t,e,n){const s=(i.camPx*e%t+t)%t,a=Math.floor(i.camPx*e/t);for(let r=-1;r*t<i.w+t*2;r++)n(r*t-s,a+r)}function Qt(i){const t=Math.sin(i*127.1+311.7)*43758.5453;return t-Math.floor(t)}function Di(i,t,e){const n=i.ctx.createLinearGradient(0,0,0,i.ground);n.addColorStop(0,t),n.addColorStop(1,e),i.ctx.fillStyle=n,i.ctx.fillRect(0,0,i.w,i.h)}function ta(i,t,e,n,s,a,r){const{ctx:o}=i;o.fillStyle=t,o.beginPath(),o.moveTo(0,i.ground);const l=i.camPx*a;for(let c=0;c<=i.w+8;c+=8){const f=(c+l)/s,d=e-n*(.6*Math.sin(f+r)+.4*Math.sin(f*2.3+r*2));o.lineTo(c,d)}o.lineTo(i.w,i.ground),o.closePath(),o.fill()}function Ii(i,t,e,n=4){i.ctx.fillStyle=t,i.ctx.fillRect(0,i.ground,i.w,i.h-i.ground),i.ctx.fillStyle=e,i.ctx.fillRect(0,i.ground,i.w,n)}function Xa(i,t,e,n,s){i.fillStyle=s,i.beginPath(),i.arc(t,e,n,0,Math.PI*2),i.arc(t+n*.9,e+n*.2,n*.75,0,Math.PI*2),i.arc(t-n*.9,e+n*.25,n*.7,0,Math.PI*2),i.arc(t+n*.2,e-n*.45,n*.7,0,Math.PI*2),i.fill()}function ea(i,t,e,n,s,a,r=0){const{ctx:o}=i;o.fillStyle=e;for(let l=0;l<t;l++){const c=Qt(l)*(i.w+40),f=Qt(l+99)*i.ground,d=((c+s*i.time*(.6+Qt(l+7)*.8)-i.camPx*.5)%(i.w+40)+i.w+40)%(i.w+40)-20,h=((f+a*i.time*(.6+Qt(l+3)*.8))%i.ground+i.ground)%i.ground+Math.sin(i.time*2+l)*r,u=n*(.6+Qt(l+5)*.8);o.globalAlpha=.5+Qt(l+11)*.5,o.beginPath(),o.arc(d,h,u,0,Math.PI*2),o.fill()}o.globalAlpha=1}const Ep={grass(i){const{ctx:t,ground:e}=i;Di(i,"#6fb7f0","#cfeeff"),t.fillStyle="rgba(255,248,200,0.9)",t.beginPath(),t.arc(i.w*.82,26,14,0,Math.PI*2),t.fill(),Ae(i,220,.1,(n,s)=>Xa(t,n+Qt(s)*80,22+Qt(s+1)*26,9+Qt(s+2)*6,"rgba(255,255,255,0.85)")),ta(i,"#8fcf7a",e-34,14,70,.2,1),ta(i,"#6db85a",e-14,9,45,.45,4),Ii(i,"#4f8f3e","#7fcf5a"),Ae(i,26,1,(n,s)=>{t.fillStyle="#9be37a",t.fillRect(n,e-3,2,3),t.fillRect(n+4,e-4,2,4),Qt(s)>.6&&(t.fillStyle=Qt(s+4)>.5?"#ffe36e":"#ff9ac8",t.beginPath(),t.arc(n+12,e-3,2,0,Math.PI*2),t.fill())})},jungle(i){const{ctx:t,ground:e}=i;Di(i,"#3f8f7a","#a8dcb0"),t.fillStyle="#2a6450",t.fillRect(0,e-34,i.w,34),Ae(i,34,.15,(n,s)=>{const a=14+Qt(s)*12;t.fillStyle=Qt(s+3)>.5?"#2f6e55":"#2a6450",t.beginPath(),t.arc(n,e-34-Qt(s+1)*12,a,0,Math.PI*2),t.fill()}),Ae(i,130,.45,(n,s)=>{const a=46+Qt(s)*20;t.strokeStyle="#6b4a2c",t.lineWidth=4,t.beginPath(),t.moveTo(n,e),t.quadraticCurveTo(n+6,e-a/2,n+2,e-a),t.stroke(),t.fillStyle="#2f8f4a";for(let r=0;r<5;r++){const o=-Math.PI/2+(r-2)*.7+Math.sin(i.time*1.5+s)*.05;t.beginPath(),t.ellipse(n+2+Math.cos(o)*12,e-a+Math.sin(o)*8+4,14,4,o,0,Math.PI*2),t.fill()}}),Ae(i,70,.7,(n,s)=>{t.strokeStyle="#3c7a3a",t.lineWidth=2;const a=14+Qt(s)*30;t.beginPath(),t.moveTo(n,0),t.quadraticCurveTo(n+Math.sin(i.time+s)*4,a/2,n+2,a),t.stroke(),t.fillStyle="#4fae4a",t.beginPath(),t.ellipse(n+2,a,3,2,.5,0,Math.PI*2),t.fill()}),Ii(i,"#3b4a26","#5a8a2e"),Ae(i,34,1,(n,s)=>{t.fillStyle="#4f9a3a",t.beginPath(),t.moveTo(n,e),t.quadraticCurveTo(n-6,e-8-Qt(s)*4,n-9,e-2),t.moveTo(n,e),t.quadraticCurveTo(n+6,e-9-Qt(s)*4,n+10,e-2),t.fill()})},desert(i){const{ctx:t,ground:e}=i;Di(i,"#f6b36b","#ffe7b0"),t.fillStyle="rgba(255,250,220,0.95)",t.beginPath(),t.arc(i.w*.75,30,20,0,Math.PI*2),t.fill(),ta(i,"#e8b26a",e-30,16,90,.15,2),Ae(i,150,.4,(n,s)=>{if(Qt(s)<.35)return;const a=22+Qt(s+1)*14;t.fillStyle="#5f9a4a",t.fillRect(n-3,e-14-a,6,a+14),t.fillRect(n-11,e-6-a*.7,4,12),t.fillRect(n-11,e-6-a*.7+8,10,4),t.fillRect(n+7,e-2-a*.5,4,10),t.fillRect(n+1,e-2-a*.5+6,10,4)}),ta(i,"#f0c47a",e-10,7,55,.6,5),Ii(i,"#d9a65a","#f2cd86"),t.strokeStyle="rgba(160,110,50,0.35)",t.lineWidth=1,Ae(i,40,1,n=>{t.beginPath(),t.moveTo(n,e+12),t.quadraticCurveTo(n+10,e+9,n+20,e+12),t.stroke()}),ea(i,14,"rgba(255,230,180,0.8)",1.2,-30,4)},glacier(i){const{ctx:t,ground:e}=i;Di(i,"#8fc8ef","#eaf7ff"),t.strokeStyle="rgba(140,255,210,0.25)",t.lineWidth=8,t.beginPath();for(let n=0;n<=i.w;n+=10)t.lineTo(n,20+Math.sin(n/50+i.time*.6)*8);t.stroke(),Ae(i,110,.18,(n,s)=>{const a=50+Qt(s)*40;t.fillStyle="#b8dcf2",t.beginPath(),t.moveTo(n-50,e),t.lineTo(n-8,e-a),t.lineTo(n+50,e),t.fill(),t.fillStyle="#ffffff",t.beginPath(),t.moveTo(n-8,e-a),t.lineTo(n-18,e-a+16),t.lineTo(n-8,e-a+11),t.lineTo(n+4,e-a+18),t.fill()}),Ae(i,95,.5,(n,s)=>{const a=16+Qt(s)*18;t.fillStyle="rgba(160,220,255,0.85)",t.beginPath(),t.moveTo(n-7,e),t.lineTo(n,e-a),t.lineTo(n+7,e),t.fill(),t.fillStyle="rgba(255,255,255,0.7)",t.fillRect(n-1,e-a+4,2,a-6)}),Ii(i,"#cfe6f5","#ffffff",5),ea(i,40,"#ffffff",1.6,-8,22,3)},lava(i){const{ctx:t,ground:e}=i;Di(i,"#2a0f14","#7a2a1a"),Ae(i,240,.12,(n,s)=>{const a=70+Qt(s)*20;t.fillStyle="#3a1a1a",t.beginPath(),t.moveTo(n-90,e),t.lineTo(n-14,e-a),t.lineTo(n+14,e-a),t.lineTo(n+90,e),t.fill(),t.strokeStyle=`rgba(255,${120+Math.sin(i.time*3+s)*30},40,0.9)`,t.lineWidth=3,t.beginPath(),t.moveTo(n-4,e-a),t.quadraticCurveTo(n-14,e-a/2,n-26,e-6),t.stroke(),t.fillStyle="rgba(255,140,60,0.35)",t.beginPath(),t.arc(n,e-a-4,10+Math.sin(i.time*4+s)*2,0,Math.PI*2),t.fill()}),ta(i,"#241010",e-10,8,40,.5,3),Ii(i,"#1e1212","#4a2416",3),Ae(i,60,1,(n,s)=>{t.strokeStyle=`rgba(255,${110+Qt(s)*60},30,${.6+Math.sin(i.time*3+s)*.25})`,t.lineWidth=2,t.beginPath(),t.moveTo(n,e+4),t.lineTo(n+8,e+10),t.lineTo(n+4,e+18),t.lineTo(n+14,e+26),t.stroke()}),ea(i,26,"#ffae4a",1.4,6,-26,2)},cloud(i){const{ctx:t,ground:e}=i;Di(i,"#a9b8ff","#ffd6ec"),Ae(i,260,.1,(n,s)=>{const a=30+Qt(s)*20;t.fillStyle="#c9b0e8",t.beginPath(),t.moveTo(n-26,a),t.lineTo(n+26,a),t.lineTo(n+6,a+18),t.lineTo(n-6,a+16),t.fill(),t.fillStyle="#9fd99a",t.fillRect(n-26,a-3,52,4),Xa(t,n+30,a+6,6,"rgba(255,255,255,0.7)")}),Ae(i,150,.3,(n,s)=>Xa(t,n,e-22-Qt(s)*30,14+Qt(s+1)*8,"rgba(255,255,255,0.75)")),Ii(i,"#f4f0ff","#ffffff",2),Ae(i,34,1,(n,s)=>Xa(t,n,e+2,9+Qt(s)*4,"#ffffff")),ea(i,12,"rgba(255,255,255,0.9)",1.5,10,0,6)},cave(i){const{ctx:t,ground:e}=i;Di(i,"#15121f","#2e2638"),Ae(i,70,.2,(n,s)=>{const a=30+Qt(s)*40;t.fillStyle="#2a2236",t.beginPath(),t.moveTo(n-14,e),t.lineTo(n,e-a),t.lineTo(n+14,e),t.fill()}),Ae(i,120,.45,(n,s)=>{const a=.5+Math.sin(i.time*2+s)*.25;t.fillStyle=`rgba(120,200,255,${a*.3})`,t.beginPath(),t.arc(n,e-10,16,0,Math.PI*2),t.fill(),t.fillStyle=Qt(s)>.5?"#7fd8ff":"#c79bff",t.beginPath(),t.moveTo(n-5,e),t.lineTo(n-2,e-18),t.lineTo(n+2,e-22),t.lineTo(n+5,e),t.fill()}),Ae(i,40,.6,(n,s)=>{const a=10+Qt(s)*26;t.fillStyle="#3a3048",t.beginPath(),t.moveTo(n-9,0),t.lineTo(n,a),t.lineTo(n+9,0),t.fill()}),t.fillStyle="#3a3048",t.fillRect(0,0,i.w,4),Ii(i,"#2a2230","#4a3e52",3),Ae(i,46,1,(n,s)=>{t.fillStyle="#3d3346",t.beginPath(),t.ellipse(n,e+2,6+Qt(s)*4,3,0,0,Math.PI*2),t.fill()}),ea(i,10,"rgba(160,220,255,0.8)",1,4,-6,4)}};function Tp(i,t,e,n,s,a,r){Ep[t]({ctx:i,w:e,h:n,ground:s,camPx:a,time:r})}const wp={grass:"rgba(255,255,255,0.6)",jungle:"rgba(255,255,255,0.55)",desert:"rgba(80,50,20,0.7)",glacier:"rgba(40,70,100,0.7)",lava:"rgba(255,210,180,0.6)",cloud:"rgba(90,80,140,0.7)",cave:"rgba(220,210,255,0.5)"};function oh(i){let t=i>>>0;return()=>{t=t+1831565813>>>0;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}function Ap(i,t,e){return t+Math.floor(i()*(e-t+1))}function Vr(i,t){const e=t.reduce((s,[,a])=>s+Math.max(0,a),0);let n=i()*e;for(const[s,a]of t)if(!(a<=0)&&(n-=a,n<0))return s;return t[t.length-1][0]}const Rp=6.5,Cp=24,Pp=.25,Lp=3,Mo={atk:6*jf,cd:1,range:9},qa={power:1,range:2.5,speed:.4,move:.12};function xs(i,t=1){return{atk:Mo.atk*(1+qa.power*i.power)*Math.pow(cc,t-1),range:Mo.range+qa.range*i.range,cd:Mo.cd/(1+qa.speed*i.speed),creep:Dp+qa.move*(i.move??0),lv:{...i}}}const Dp=.3,Ip=1.6,kp=4,wa={volley:{name:"화살 다발",icon:"🏹",desc:"본진이 전장의 모든 적에게 일제 사격",w:30},heal:{name:"회복 물약",icon:"🧪",desc:"아군 전원 체력 회복",w:20},rush:{name:"진군 나팔",icon:"📯",desc:"8초 동안 전군 돌격 (공격·이동 2배)",w:20},dice:{name:"주사위 꾸러미",icon:"🎲",desc:"주사위 +2 (바로 굴릴 수 있어요)",w:20},coin:{name:"금화 주머니",icon:"💰",desc:"코인 +5",w:10}},Up=[.45,.85],Np=[.5],Fp=8,Op=5,Bp=5,$p=2;class zp{constructor(t,e,n){W(this,"units",[]);W(this,"progress",0);W(this,"time",0);W(this,"kills",0);W(this,"breaches",0);W(this,"events",[]);W(this,"boss",null);W(this,"invincible",!1);W(this,"rush",!1);W(this,"base");W(this,"loot",[]);W(this,"baseX",0);W(this,"rushT",0);W(this,"spawnT",2);W(this,"commanderCd",0);W(this,"baseHalted",!1);W(this,"nextId",1);this.day=t,this.rng=e,this.opts=n,this.base=xs(n.base??{power:0,range:0,speed:0},t);const s=Object.entries(wa).map(([a,r])=>[a,r.w]);if(this.loot=(n.bossDay?Np:Up).map(a=>({x:Math.round(n.target*a+(e()-.5)*3),kind:Vr(e,s),taken:!1})),n.bossDay){const a=this.spawnEnemy(Vs[$n(t)].boss,n.target);n.bossHp!=null&&(a.hp=n.bossHp),this.boss=a}}get rear(){return this.baseX}get bossDead(){return!!this.boss&&this.boss.hp<=0}makeUnit(t,e,n,s,a,r={}){const o={...s,id:this.nextId++,side:t,kind:e,name:n,x:a,maxHp:s.hp,cdLeft:.3,golden:!1,exp:0,boss:!1,hitT:0,atkT:0,slowT:0,hasteNow:0,blocked:!1,dashing:!1,...r};return this.units.push(o),o}spawnAlly(t,e=!1,n=0){return this.makeUnit("ally",t.id,t.name,ys(t,e,n),this.rear,{golden:e})}spawnEnemy(t,e){const n=Un[t];return this.makeUnit("enemy",t,n.name,qc(t,this.day),e,{exp:n.exp,boss:!!n.boss})}wave(){if(this.opts.waves===!1)return{on:!0,left:1/0,n:1};const t=yo+Ku,e=this.time%t,n=Math.floor(this.time/t)+1;return e<yo?{on:!0,left:yo-e,n}:{on:!1,left:t-e,n}}spawnRate(){return Pp*(1+.08*(this.day-1))*(this.opts.bossDay?.6:1)}enemyKind(){const t=Math.min(1,this.time/30),e=Zf(this.day).map(([n,s])=>[n,op.has(n)?s*t:s]);return Vr(this.rng,e)}canHit(t,e){return!e.traits.flying||!!t.traits.air}opponents(t){return this.units.filter(e=>e.side!==t.side&&e.hp>0&&this.canHit(t,e))}nearestAhead(t){let e;for(const n of this.opponents(t))(t.side==="ally"?n.x<t.x-1:n.x>t.x+1)||(!e||Math.abs(n.x-t.x)<Math.abs(e.x-t.x))&&(e=n);return e}reach(t,e){return t.range+(t.size+e.size)*.3}damage(t,e,n,s=!1){if(t.hp<=0)return;let a=e;n==="phys"&&t.traits.armor&&(a*=1-t.traits.armor),t.traits.block&&(a*=1-t.traits.block),t.hp-=a,t.hitT=.15,this.events.push({type:"hit",x:t.x,dmg:Math.round(a),victim:t.side,crit:s}),!(t.hp>0)&&(t.side==="enemy"?(this.kills++,this.events.push({type:"kill",unit:t,exp:t.exp}),t.boss&&this.events.push({type:"boss-down",x:t.x})):this.events.push({type:"ally-down",unit:t}))}onHit(t,e){e.hp<=0||(t.traits.slow&&(e.slowT=$p),t.traits.knockback&&!e.boss&&(e.x+=(t.side==="ally"?1:-1)*t.traits.knockback))}attack(t,e){t.cdLeft=t.cd,t.atkT=.2;const n=t.traits.dmg??"phys",s=!!t.traits.crit&&this.rng()<t.traits.crit,a=s?t.atk*2.5:t.atk;if(t.traits.bomb){this.events.push({type:"boom",x:e.x,radius:t.splash});for(const o of this.opponents(t))Math.abs(o.x-e.x)<=t.splash&&this.damage(o,a,n);t.hp=0;return}t.range>2&&this.events.push({type:"shot",from:t.x,to:e.x,side:t.side,splash:t.splash,kind:t.kind});let r;if(t.traits.pierce){const o=t.side==="ally"?1:-1;r=this.opponents(t).filter(l=>(l.x-t.x)*o>=-.5&&Math.abs(l.x-t.x)<=t.range+3).sort((l,c)=>Math.abs(l.x-t.x)-Math.abs(c.x-t.x)).slice(0,t.traits.pierce)}else t.splash>0?r=this.opponents(t).filter(o=>Math.abs(o.x-e.x)<=t.splash):r=[e];for(const o of r)this.damage(o,a,n,s),this.onHit(t,o)}tryHeal(t){const e=this.units.filter(n=>n.side===t.side&&n.hp>0&&n.hp<n.maxHp&&Math.abs(n.x-t.x)<=t.range).sort((n,s)=>n.hp/n.maxHp-s.hp/s.maxHp)[0];if(!e)return!1;if(t.cdLeft<=0){t.cdLeft=t.cd,t.atkT=.2;const n=Math.min(t.atk*1.5,e.maxHp-e.hp);e.hp+=n,this.events.push({type:"heal",x:e.x,amount:Math.round(n)})}return!0}tick(t){this.time+=t,this.rushT=Math.max(0,this.rushT-t);const e=this.wave();if(this.spawnT-=t*(e.on?this.opts.waves===!1?1:Zu:0),this.spawnT<=0){let r=this.progress+Cp+this.rng()*3;this.boss&&this.boss.hp>0&&(r=Math.min(r,this.boss.x-.5)),this.spawnEnemy(this.enemyKind(),r),this.spawnT=(.6+this.rng()*.8)/this.spawnRate()}const n=this.units.filter(r=>r.hp>0&&r.traits.haste);for(const r of this.units){r.hasteNow=0;for(const o of n)o.side===r.side&&o!==r&&Math.abs(o.x-r.x)<=Bp&&(r.hasteNow=Math.max(r.hasteNow,o.traits.haste))}for(const r of this.units){if(r.hp<=0)continue;r.hitT=Math.max(0,r.hitT-t),r.atkT=Math.max(0,r.atkT-t),r.slowT=Math.max(0,r.slowT-t);const o=(this.rush||this.rushT>0)&&r.side==="ally";r.cdLeft-=t*(1+r.hasteNow+(o?1:0));const l=this.nearestAhead(r),c=!!l&&Math.abs(l.x-r.x)<=this.reach(r,l);let f=c;if(r.traits.heal){const h=this.tryHeal(r);f=c||h&&!!l&&Math.abs(l.x-r.x)<=r.range+2}else c&&r.cdLeft<=0&&this.attack(r,l);if(r.dashing=!1,!f&&r.hp>0){const h=r.speed*(r.slowT>0?.5:1)*(o?2:1);r.x+=(r.side==="ally"?1:-1)*h*t}r.blocked=!1;const d=this.boss;if(r.side==="ally"&&d&&d.hp>0){const h=d.x-(r.size+d.size)*.3-.2;r.x>=h&&(r.x=h,r.blocked=!this.canHit(r,d))}}this.commanderCd-=t;const s=this.units.filter(r=>r.side==="enemy"&&r.hp>0&&r.x-this.rear<=this.base.range).sort((r,o)=>r.x-o.x);if(this.baseHalted=s.length>0,this.commanderCd<=0&&this.baseHalted){const r=this.rear,o=s[0];o&&(this.commanderCd=this.base.cd,this.events.push({type:"shot",from:r,to:o.x,side:"ally",splash:0,kind:"commander"}),this.damage(o,this.base.atk,"phys"))}const a=this.rear;for(const r of this.units)if(r.side==="enemy"&&r.hp>0&&!r.boss&&r.x<=a){if(r.hp=0,this.invincible){this.events.push({type:"guard",x:a});continue}this.breaches++,this.progress=Math.max(0,this.progress-Lp),this.events.push({type:"breach",x:a})}this.units=this.units.filter(r=>r.hp>0);for(const r of this.units)r.side==="ally"&&r.x>this.progress&&(this.progress=r.x);if(this.baseHalted||(this.progress+=this.base.creep*t),this.boss&&this.boss.hp>0&&(this.progress=Math.min(this.progress,this.boss.x)),!this.baseHalted){const r=Math.max(this.baseX+this.base.creep*t,this.progress-Rp);this.baseX=Math.min(r,this.baseX+Ip*t)}this.baseX=Math.min(this.baseX,Math.max(0,this.progress-kp));for(const r of this.loot)!r.taken&&this.progress>=r.x&&this.pickLoot(r)}pickLoot(t){t.taken=!0;let e=[];if(t.kind==="volley"){const n=qc("goblin",this.day).hp*2.2,s=this.units.filter(a=>a.side==="enemy"&&a.hp>0);e=s.map(a=>a.x);for(const a of s)this.damage(a,n,"phys");this.units=this.units.filter(a=>a.hp>0)}else if(t.kind==="heal")for(const n of this.units)n.side==="ally"&&(n.hp=n.maxHp);else t.kind==="rush"&&(this.rushT=Fp);this.events.push({type:"loot",x:t.x,kind:t.kind,xs:e})}strike(t){const e=this.units.filter(n=>n.side==="enemy"&&n.hp>0);this.events.push({type:"strike",xs:e.map(n=>n.x),dmg:Math.round(t)});for(const n of e)this.damage(n,t,"magic");this.units=this.units.filter(n=>n.hp>0)}drainEvents(){const t=this.events;return this.events=[],t}}const na=28,Hp={icewitch:"#7ad0ff",mage:"#c79bff",crossbow:"#d8ffd0",darkmage:"#c060ff"};class Gp{constructor(t){W(this,"ctx");W(this,"fx",[]);W(this,"w",0);W(this,"h",0);W(this,"camX",0);W(this,"camReady",!1);W(this,"rush",!1);W(this,"towerTop",40);W(this,"baseLastRear",NaN);W(this,"baseWalk",0);W(this,"baseStep",0);W(this,"lastDt",1/60);this.canvas=t,this.ctx=t.getContext("2d")}sprite(t,e,n,s=0){const a=fp(t);a>0&&this.fx.push({kind:"sprite",key:t,t:s,life:a,x:e,size:n})}resize(){const t=window.devicePixelRatio||1,e=this.canvas.clientWidth,n=this.canvas.clientHeight;(e!==this.w||n!==this.h)&&(this.w=e,this.h=n,this.canvas.width=Math.round(e*t),this.canvas.height=Math.round(n*t),this.ctx.setTransform(t,0,0,t,0,0))}toScreen(t){const e=this.w/na;return{x:(t-this.camX)*e,y:this.h-38-10}}push(t){for(const e of t){if(e.type==="shot"&&e.kind==="commander")this.fx.push({kind:"shot",t:0,life:.32,x:e.from,to:e.to,color:"#ffe9a8",y0:this.towerTop});else if(e.type==="shot")this.fx.push({kind:"shot",t:0,life:.18,x:e.from,to:e.to,color:Hp[e.kind]??(e.side==="ally"?"#fff3a8":"#ff8a8a"),splash:e.splash});else if(e.type==="hit"&&e.dmg>=1)this.fx.push({kind:"num",t:0,life:e.crit?1:.75,x:e.x+(Math.random()-.5)*.5,text:e.crit?`${e.dmg}!`:String(e.dmg),color:e.crit?"#ffd34d":e.victim==="enemy"?"#ffffff":"#ff6b6b",crit:e.crit,drift:(Math.random()-.5)*2});else if(e.type==="heal")this.fx.push({kind:"num",t:0,life:.7,x:e.x,text:`+${e.amount}`,color:"#6fff9a"});else if(e.type==="boom")this.fx.push({kind:"boom",t:0,life:.45,x:e.x,splash:e.radius});else if(e.type==="strike")this.fx.push({kind:"flash",t:0,life:.5,x:0}),e.xs.forEach((n,s)=>this.fx.push({kind:"meteor",t:-s*.05,life:.55,x:n,text:String(e.dmg)}));else if(e.type==="breach")this.fx.push({kind:"breach",t:0,life:.6,x:e.x});else if(e.type==="guard")this.fx.push({kind:"guard",t:0,life:.5,x:e.x});else if(e.type==="loot"){const n=wa[e.kind];this.fx.push({kind:"burst",t:0,life:.5,x:e.x,color:"#ffd34d"}),this.fx.push({kind:"num",t:0,life:1.4,x:e.x,text:`${n.icon} ${n.name}!`,color:"#ffe9a8"}),e.xs.forEach((s,a)=>this.fx.push({kind:"shot",t:-a*.04,life:.45,x:this.camX+4.6,to:s,color:"#ffe9a8",y0:this.towerTop}))}else e.type==="kill"&&this.fx.push({kind:"burst",t:0,life:.35,x:e.unit.x,color:bo[e.unit.kind]});e.type==="hit"&&e.dmg>=1?this.sprite("fx:hit",e.x,44):e.type==="kill"&&this.sprite("fx:kill",e.unit.x,60),e.type==="kill"&&e.reward?this.fx.push({kind:"num",t:0,life:1.1,x:e.unit.x,text:e.reward==="dice"?"+🎲":"+🪙",color:e.reward==="dice"?"#9fd8ff":"#ffd34d"}):e.type==="boom"?this.sprite("fx:explode",e.x,Math.max(60,e.radius*(this.w/na)*2)):e.type==="heal"?this.sprite("fx:heal",e.x,50):e.type==="loot"&&(this.sprite("fx:loot",e.x,70),e.xs.forEach((n,s)=>this.sprite("fx:volley",n,80,-.3-s*.04)))}}draw(t,e,n){var x;this.resize(),this.lastDt=n;const{ctx:s,w:a,h:r}=this,o=a/na,l=t.units.filter(v=>v.side==="ally"&&v.hp>0),c=l.length?Math.max(...l.map(v=>v.x)):null,f=c!=null?Math.max(c-na*.55,-2):t.rear-4.6;(Math.abs(f-this.camX)>20||!this.camReady)&&(this.camX=f),this.camReady=!0,this.camX+=(f-this.camX)*Math.min(1,n*4);const d=this.camX,h=v=>(v-d)*o,u=r-38,g=ts(t.day),_=es(`bg:${g}`);if(_){const v=_.naturalWidth*(r/_.naturalHeight),R=(d*o*(((x=Qf(`bg:${g}`))==null?void 0:x.parallax)??.5)%v+v)%v;for(let w=-R;w<a;w+=v)s.drawImage(_,w,0,v+1,r)}else Tp(s,g,a,r,u,d*o,t.time);s.fillStyle=wp[g],s.font="10px sans-serif";for(let v=Math.floor(d/10)*10;v<d+na+10;v+=10)v<0||(s.fillRect(h(v),u+6,1,6),s.fillText(`${v}m`,h(v)+3,u+22));const m=h(e);m<a-10&&(s.fillStyle="#ddd",s.fillRect(m,u-60,2,60),s.fillStyle="#ffd34d",s.beginPath(),s.moveTo(m+2,u-60),s.lineTo(m+24,u-52),s.lineTo(m+2,u-44),s.fill(),s.fillStyle="#ffd34d",s.fillText("목표",m+4,u-64)),t.progress>=e&&!t.boss?(s.fillStyle="#4fd18b",s.font="bold 12px sans-serif",s.fillText(`목표 통과! +${Math.floor(t.progress-e)}m`,a-120,18)):m>=a-10&&(s.font="bold 12px sans-serif",s.lineWidth=3,s.strokeStyle="rgba(20,16,30,0.75)",s.strokeText(`목표까지 ${Math.ceil(e-t.progress)}m ▶`,a-110,18),s.fillStyle="#ffd34d",s.fillText(`목표까지 ${Math.ceil(e-t.progress)}m ▶`,a-110,18));const p=h(t.progress);s.strokeStyle="rgba(122,162,255,0.6)",s.setLineDash([4,4]),s.beginPath(),s.moveTo(p,8),s.lineTo(p,u),s.stroke(),s.setLineDash([]),this.drawBase(t,h(t.rear),u,o,t.time);for(const v of t.loot)v.taken||this.drawLoot(v.kind,h(v.x),u,t.time,o,v.x);const M=[...t.units].sort((v,R)=>R.size-v.size);this.rush=t.rush||t.rushT>0;for(const v of M)this.drawUnit(v,h(v.x),u,o,t.time);for(const v of this.fx){if(v.t+=n,v.t<0||v.t>=v.life)continue;const R=Math.min(1,v.t/v.life);if(v.kind==="shot"&&v.to!=null&&v.y0!=null){const w=h(v.x),C=h(v.to),P=Math.min(1,R*1.3),E=u-v.y0,y=u-14,L=H=>[w+(C-w)*H,E+(y-E)*H-Math.sin(H*Math.PI)*26],[X,D]=L(P),[z,K]=L(Math.max(0,P-.12));s.strokeStyle=v.color,s.lineWidth=2,s.beginPath(),s.moveTo(z,K),s.lineTo(X,D),s.stroke(),s.fillStyle="#fff",s.beginPath(),s.arc(X,D,1.8,0,Math.PI*2),s.fill()}else if(v.kind==="shot"&&v.to!=null){const w=h(v.x),C=h(v.to),P=Math.min(1,R*1.6);s.strokeStyle=v.color,s.lineWidth=2,s.beginPath(),s.moveTo(w+(C-w)*Math.max(0,P-.3),u-22),s.lineTo(w+(C-w)*P,u-22),s.stroke(),v.splash&&P>=1&&(s.fillStyle="rgba(164,107,232,0.35)",s.beginPath(),s.ellipse(C,u-6,v.splash*o,8,0,0,Math.PI*2),s.fill())}else if(v.kind==="num"){const w=Math.max(16,o*(v.crit?.62:.45)),C=R<.15?1+(1-R/.15)*(v.crit?.9:.6):1,P=Math.round(w*C),E=(1-Math.pow(1-R,2))*o*.8,y=h(v.x)+(v.drift??0)*o*.35*R,L=Math.max(P+4,u-o*1.7-E),X=v.crit&&R<.25?Math.sin(v.t*80)*2:0;if(s.globalAlpha=R>.7?(1-R)/.3:1,s.font=`900 ${P}px sans-serif`,s.textAlign="center",s.lineJoin="round",s.lineWidth=Math.max(3,P*.18),s.strokeStyle=v.crit?"rgba(120,40,0,0.95)":"rgba(20,16,30,0.9)",s.strokeText(v.text,y+X,L),v.crit){const D=s.createLinearGradient(0,L-P,0,L);D.addColorStop(0,"#fff6c8"),D.addColorStop(1,"#ffb52e"),s.fillStyle=D}else s.fillStyle=v.color;s.fillText(v.text,y+X,L),s.textAlign="left",s.globalAlpha=1}else if(v.kind==="guard"){const w=h(v.x)+10;s.strokeStyle=`rgba(255,211,77,${.85*(1-R)})`,s.lineWidth=3,s.beginPath(),s.arc(w,u-20,18+R*30,-Math.PI/2,Math.PI/2),s.stroke()}else if(v.kind==="breach")s.fillStyle=`rgba(239,90,90,${.45*(1-R)})`,s.fillRect(0,0,60,r);else if(v.kind==="flash")s.fillStyle=`rgba(255,240,200,${.7*(1-R)})`,s.fillRect(0,0,a,r);else if(v.kind==="meteor"){if(v.t<0)continue;const w=Math.min(1,R*2.2),C=h(v.x),P=-20+(u+20)*w;if(w<1)s.strokeStyle="rgba(255,180,80,0.8)",s.lineWidth=6,s.beginPath(),s.moveTo(C-40*(1-w)-30,P-50),s.lineTo(C,P),s.stroke(),s.fillStyle="#fff3a8",s.beginPath(),s.arc(C,P,8,0,Math.PI*2),s.fill();else{const E=(R-.45)/.55;s.fillStyle=`rgba(255,120,40,${.7*(1-E)})`,s.beginPath(),s.ellipse(C,u-8,40*(.5+E),26*(.5+E),0,0,Math.PI*2),s.fill(),s.fillStyle="#ffd34d",s.font="bold 16px sans-serif",s.fillText(`${v.text}!`,C-14,u-50-E*20)}}else v.kind==="boom"?(s.fillStyle=`rgba(255,140,60,${.6*(1-R)})`,s.beginPath(),s.ellipse(h(v.x),u-10,(v.splash??2)*o*(.5+R),30*(.5+R),0,0,Math.PI*2),s.fill()):v.kind==="sprite"&&v.key?hp(s,v.key,v.t,h(v.x),u-(v.size??48)*.45,v.size??48):v.kind==="burst"&&(s.strokeStyle=v.color,s.globalAlpha=1-R,s.lineWidth=2,s.beginPath(),s.arc(h(v.x),u-12,6+R*18,0,Math.PI*2),s.stroke(),s.globalAlpha=1)}if(this.fx=this.fx.filter(v=>v.t<v.life),t.time<2.6){const v=t.time,R=Math.min(1,v*3,(2.6-v)*2.5),w=We[g];s.globalAlpha=R,s.fillStyle="rgba(10,10,20,0.55)",s.fillRect(0,r*.36,a,34),s.fillStyle="#ffe9a8",s.font="bold 15px sans-serif",s.textAlign="center",s.fillText(`${w.icon} 스테이지 ${t.day} · ${w.name}${t.boss?" · 보스":""}`,a/2+(1-Math.min(1,v*2.5))*30,r*.36+22),s.textAlign="left",s.globalAlpha=1}}drawLoot(t,e,n,s,a,r){const o=Math.max(22,a*.95);if(e<-o*2||e>this.w+o*2)return;const{ctx:l}=this,c=o*.7,f=c*4.2,d=l.createLinearGradient(0,n-f,0,n);d.addColorStop(0,"rgba(255,211,77,0)"),d.addColorStop(1,`rgba(255,211,77,${.26+Math.sin(s*1.2+r)*.06})`),l.fillStyle=d,l.fillRect(e-o*.55,n-f,o*1.1,f);const h=Ms("anim:chest");h?ll(l,h,Math.floor(s*h.fps)%h.frames,e,n,o*1.4*h.scale,"foot"):(l.fillStyle="rgba(0,0,0,0.25)",l.beginPath(),l.ellipse(e,n+1,o*.6,o*.1,0,0,Math.PI*2),l.fill(),l.fillStyle="#8a5a2b",l.fillRect(e-o/2,n-c,o,c),l.fillStyle="#6a4220",l.fillRect(e-o/2,n-c*.55,o,c*.1),l.fillStyle="#a8703a",l.fillRect(e-o*.56,n-c*1.22,o*1.12,c*.42),l.fillStyle="#ffd34d",l.fillRect(e-o*.08,n-c*1.05,o*.16,c*.42),l.strokeStyle="rgba(0,0,0,0.35)",l.lineWidth=1,l.strokeRect(e-o/2+.5,n-c+.5,o-1,c-1));const u=Math.max(18,o*.75),g=Math.sin(s*1.6+r*.7)*o*.08;pp(l,wa[t].icon,e,n-c*1.35-u*.35+g,u)}drawBase(t,e,n,s,a){const{ctx:r}=this,o=t.base.lv;if(t.invincible){const D=Math.max(34,s*1.6),z=n-D*.35,K=.5+.5*Math.sin(a*4),H=r.createRadialGradient(e+8,z,D*.3,e+8,z,D);H.addColorStop(0,"rgba(255,211,77,0)"),H.addColorStop(.8,`rgba(255,211,77,${.1+.06*K})`),H.addColorStop(1,`rgba(255,225,120,${.35+.2*K})`),r.fillStyle=H,r.beginPath(),r.arc(e+8,z,D,Math.PI,0),r.lineTo(e+8+D,n),r.lineTo(e+8-D,n),r.closePath(),r.fill(),r.font=`bold ${Math.round(Math.max(11,s*.45))}px sans-serif`,r.textAlign="center",r.fillStyle=`rgba(255,230,140,${.75+.25*K})`,r.fillText("🛡 무적",e+8,z-D-4),r.textAlign="left"}const l=e+7+t.base.range*s;r.strokeStyle="rgba(255,233,168,0.28)",r.setLineDash([2,5]),r.lineWidth=2,r.beginPath(),r.moveTo(e+18,n+2),r.lineTo(l,n+2),r.stroke(),r.setLineDash([]),r.fillStyle="rgba(255,233,168,0.55)",r.beginPath(),r.moveTo(l,n-3),r.lineTo(l+4,n+2),r.lineTo(l,n+7),r.lineTo(l-4,n+2),r.fill(),r.fillStyle="rgba(0,0,0,0.25)",r.beginPath(),r.ellipse(e-12,n+1,38,5,0,0,Math.PI*2),r.fill();const c=this.baseLastRear;this.baseLastRear=t.rear;const f=Number.isNaN(c)||Math.abs(t.rear-c)>5?0:t.rear-c,d=Math.max(.001,this.lastDt),h=Math.abs(f)/d>.05?1:0;this.baseWalk+=(h-this.baseWalk)*Math.min(1,d*5),this.baseStep+=Math.abs(f)*2.2+d*6*this.baseWalk;const u=this.baseWalk,g=this.baseStep,_=Ms("base:walk");if(_){const D=96*_.scale,z=u>.3?Math.floor(g*_.fps*.25)%_.frames:0;ll(r,_,z,e-15,n+2,D,"foot"),this.towerTop=D*_.foot*.85,r.font="bold 10px sans-serif",r.fillStyle="rgba(0,0,0,0.45)",r.fillRect(e-38,n+8,28,14),r.fillStyle="#ffe9a8",r.fillText("본진",e-34,n+19);return}const p=n-19-Math.abs(Math.sin(g))*2.2*u+Math.sin(a*2)*.6*(1-u);[e-42,e-24,e-6,e+12].forEach((D,z)=>{const K=g+(z%2?Math.PI:0)+(z>1?Math.PI/2:0),H=D+Math.sin(K)*5*u,et=Math.max(0,Math.cos(K))*4*u,G=n-et,rt=(D+H)/2-6,ut=(p+4+G)/2-1,St=z%2===1;r.strokeStyle=St?"#4a3220":"#6b4a2c",r.lineWidth=5,r.lineCap="round",r.beginPath(),r.moveTo(D,p+3),r.lineTo(rt,ut),r.lineTo(H,G-2),r.stroke(),r.fillStyle=St?"#7d7a70":"#a8a497",r.beginPath(),r.arc(rt,ut,2.8,0,Math.PI*2),r.fill(),r.fillStyle=St?"#3a2818":"#54391f",r.beginPath(),r.ellipse(H+1.5,G-1.5,6,3,0,0,Math.PI*2),r.fill(),u>.5&&et<.4&&(r.fillStyle="rgba(210,190,150,0.35)",r.beginPath(),r.arc(H-5,n-2,2.5+Math.sin(K*3)*.8,0,Math.PI*2),r.fill())}),r.lineCap="butt",r.fillStyle="#5a3d24",r.fillRect(e-50,p,72,6),r.fillStyle="#7d5733",r.fillRect(e-50,p,72,2),r.fillStyle="#a8a497";for(let D=0;D<6;D++)r.fillRect(e-46+D*13,p+3,2,2);for(let D=0;D<5;D++){const z=e-47+D*7,K=20+D*7%5;r.fillStyle=D%2?"#6b4a2c":"#7d5733",r.fillRect(z,p-K,6,K),r.beginPath(),r.moveTo(z,p-K),r.lineTo(z+3,p-K-5),r.lineTo(z+6,p-K),r.fill()}r.fillStyle="#4e3520",r.fillRect(e-48,p-13,37,3);const x=e-40,v=e-6,R=p-30,w=(x+v)/2;r.save(),r.beginPath(),r.moveTo(x,p),r.lineTo(w,R),r.lineTo(v,p),r.closePath(),r.clip();for(let D=0;D<6;D++)r.fillStyle=D%2?"#f2ead8":"#d9573f",r.fillRect(x+D*((v-x)/6),R,(v-x)/6+.5,32);r.restore(),r.fillStyle="#3a2418",r.beginPath(),r.moveTo(w-5,p),r.lineTo(w,p-12),r.lineTo(w+5,p),r.fill(),r.fillStyle="#c9c2b0",r.fillRect(w-1,R-16,2,16),r.fillStyle="#5b8def",r.beginPath(),r.moveTo(w+1,R-16);for(let D=0;D<=6;D++)r.lineTo(w+1+D*3,R-16+Math.sin(a*6-D*.9)*1.6);for(let D=6;D>=0;D--)r.lineTo(w+1+D*3,R-8+Math.sin(a*6-D*.9)*1.6);r.fill();const C=18+o.range*3,P=e-2,E=18;r.strokeStyle="#5a3d24",r.lineWidth=3,r.beginPath(),r.moveTo(P,p),r.lineTo(P+3,p-C),r.moveTo(P+E,p),r.lineTo(P+E-3,p-C),r.stroke(),r.lineWidth=1.5,r.beginPath();for(let D=p;D>p-C+6;D-=10)r.moveTo(P+1,D),r.lineTo(P+E-1,D-8),r.moveTo(P+E-1,D),r.lineTo(P+1,D-8);r.stroke(),r.fillStyle="#7d5733",r.fillRect(P-3,p-C-4,E+6,5),r.fillStyle="#6b4a2c",r.fillRect(P-3,p-C-10,3,6),r.fillRect(P+E,p-C-10,3,6);const y=P+E/2,L=p-C-4,X=this.fx.some(D=>D.y0!=null&&D.t<.12);r.fillStyle="#ffd34d",r.fillRect(y-4,L-12,8,12),r.fillStyle="#f3d2b0",r.fillRect(y-3.5,L-19,7,7),r.fillStyle="#c0392b",r.fillRect(y-4.5,L-21,9,3),r.strokeStyle="#d9b07a",r.lineWidth=1.5,r.beginPath(),r.arc(y+5-(X?1.5:0),L-10,6,-Math.PI/2,Math.PI/2),r.stroke(),r.fillStyle="#7a4a2a",r.fillRect(y-9,L-14,4,8),r.strokeStyle="#eee",r.lineWidth=1;for(let D=0;D<=o.speed;D++){const z=y-9+D%4;r.beginPath(),r.moveTo(z,L-14),r.lineTo(z,L-18-D%2*2),r.stroke()}if(o.power>0){const D=.25+.1*o.power+Math.sin(a*4)*.08;r.fillStyle=`rgba(255,170,60,${D})`,r.beginPath(),r.arc(y+8,L-10,3+o.power*.6,0,Math.PI*2),r.fill()}this.towerTop=C+14+(n-p),r.font="bold 10px sans-serif",r.fillStyle="rgba(0,0,0,0.45)",r.fillRect(e-38,n+8,28,14),r.fillStyle="#ffe9a8",r.fillText("본진",e-34,n+19)}drawUnit(t,e,n,s,a){const{ctx:r}=this,o=Math.max(16,t.size*s*1.25),l=t.atkT<=0,c=l?Math.abs(Math.sin(a*8+t.id))*2:0,f=t.atkT>0?t.side==="ally"?3:-3:0,d=e+f,h=t.traits.flying?46+Math.sin(a*6+t.id)*4:0;n-=h;const u=n-o-c,g=t.hitT>0;if(t.side==="ally"&&(this.rush||t.dashing)){r.strokeStyle=this.rush?"rgba(255,211,77,0.55)":"rgba(255,255,255,0.45)",r.lineWidth=2;for(let x=0;x<3;x++){const v=u+o*(.3+x*.25);r.beginPath(),r.moveTo(d-o*.5,v),r.lineTo(d-o*.5-12-x*6,v),r.stroke()}}let _=u-9;const m=t.atkT>0?Ms(`${t.side}:${t.kind}@attack`):null,p=m??th(t.side,t.kind),M=p?null:Ss(t.side,t.kind);if(p){const x=o*1.7*p.scale;t.golden&&(r.fillStyle="rgba(255,211,77,0.35)",r.beginPath(),r.arc(d,u+o/2,o*.9,0,Math.PI*2),r.fill());const v=this.rush?2:1,R=m?Math.min(p.frames-1,Math.floor((1-t.atkT/.2)*p.frames)):l?Math.floor((a+t.id*.37)*p.fps*v)%p.frames:0,w=r.imageSmoothingEnabled;r.imageSmoothingEnabled=!p.pixel,g&&(r.filter="brightness(2.2) saturate(0.3)");const C=x*(p.fw/p.fh);r.save(),_=n-x*p.foot+x*.04-8,r.translate(Math.round(d),Math.round(n-x*p.foot)),p.flip&&r.scale(-1,1),r.drawImage(p.img,R*p.fw,0,p.fw,p.fh,-C/2,0,C,x),r.restore(),r.filter="none",r.imageSmoothingEnabled=w}else if(M){const x=o*(t.boss?1.5:1.75);t.golden&&(r.fillStyle="rgba(255,211,77,0.35)",r.beginPath(),r.arc(d,u+o/2,o*.9,0,Math.PI*2),r.fill()),t.traits.flying&&t.side==="enemy"&&(n+=Math.sin(a*14+t.id)*2),g&&(r.filter="brightness(2.2) saturate(0.3)"),r.drawImage(M,d-x/2,n-c-x*.95,x,x),_=n-c-x*.95+x*.1-8,r.filter="none"}else{if(t.side==="ally"){const x=g?"#ffffff":t.golden?"#ffd34d":Ze[t.kind];t.golden&&(r.fillStyle="rgba(255,211,77,0.35)",r.beginPath(),r.arc(d,u+o/2,o*.9,0,Math.PI*2),r.fill()),r.fillStyle=x,r.fillRect(d-o*.3,u+o*.35,o*.6,o*.65),r.fillStyle=g?"#fff":"#f3d2b0",r.fillRect(d-o*.22,u,o*.44,o*.38),r.fillStyle="#ddd",t.kind==="spear"&&r.fillRect(d+o*.3,u+o*.2,o*.6,2),t.kind==="archer"&&r.fillRect(d+o*.32,u+o*.2,2,o*.6),t.kind==="knight"&&(r.fillStyle="#8a92b0",r.fillRect(d+o*.25,u+o*.35,o*.2,o*.5)),t.kind==="mage"&&(r.fillStyle="#a46be8",r.fillRect(d-o*.28,u-o*.18,o*.56,o*.2))}else{const x=g?"#ffffff":bo[t.kind];r.fillStyle=x,t.kind==="slime"?(r.beginPath(),r.ellipse(d,n-o*.35,o*.5,o*.35+c*.5,0,0,Math.PI*2),r.fill()):(r.fillRect(d-o*.32,u+o*.3,o*.64,o*.7),r.fillRect(d-o*.25,u,o*.5,o*.36)),r.fillStyle="#111",r.fillRect(d-o*.18,u+o*(t.kind==="slime"?.55:.12),3,3),t.boss&&(r.fillStyle="#ffd34d",r.beginPath(),r.moveTo(d-o*.25,u),r.lineTo(d-o*.15,u-o*.2),r.lineTo(d,u-2),r.lineTo(d+o*.15,u-o*.2),r.lineTo(d+o*.25,u),r.fill())}!M&&t.side==="ally"&&Xc[t.kind]&&(r.fillStyle="#111",r.font=`bold ${Math.max(9,o*.32)}px sans-serif`,r.fillText(Xc[t.kind],d-o*.17,u+o*.78))}if(t.slowT>0&&(r.strokeStyle="#7ad0ff",r.lineWidth=2,r.strokeRect(d-o*.4,u-2,o*.8,o+4)),!M&&t.traits.flying&&t.side==="enemy"){r.fillStyle=bo[t.kind],r.beginPath();const x=Math.sin(a*14+t.id)*o*.25;r.moveTo(d-o*.2,u+o*.5),r.lineTo(d-o*.8,u+o*.3+x),r.lineTo(d-o*.2,u+o*.75),r.moveTo(d+o*.2,u+o*.5),r.lineTo(d+o*.8,u+o*.3+x),r.lineTo(d+o*.2,u+o*.75),r.fill()}if(t.side==="ally"&&t.blocked&&(r.font="bold 11px sans-serif",r.fillStyle="#ff8a8a",r.fillText("공격 불가",d-22,Math.max(12,_-4))),t.hp<t.maxHp||t.boss){const x=Math.max(16,o),v=Math.max(2,_);r.fillStyle="rgba(0,0,0,0.6)",r.fillRect(d-x/2,v,x,4),r.fillStyle=t.side==="ally"?"#4fd18b":"#ef5a5a",r.fillRect(d-x/2,v,x*Math.max(0,t.hp)/t.maxHp,4)}}}const Le={tent:{x:.2,y:.56},forge:{x:.7,y:.8},wagon:{x:.8,y:.6},training:{x:.13,y:.86},relic:{x:.4,y:.92},oracle:{x:.6,y:.47}},nd=[{sky:["#0a1233","#23306b","#5a4a8a"],aurora:"120,240,200",moon:"255,246,214",far:["#2c3a72","#1c2752"],mid:"#18244a",pine:"#0f1a33",ground:["#22402e","#132519"],grass:"#2f5a3c",path:"#4a4030"},{sky:["#0c1a2a","#1f4a5a","#7a6a5a"],aurora:"160,255,170",moon:"255,240,200",far:["#2a4a52","#1a333c"],mid:"#15303a",pine:"#0d2228",ground:["#3a4a2a","#1f2a17"],grass:"#4a6a32",path:"#5a4a32"},{sky:["#101236","#3a2a6a","#a05a7a"],aurora:"200,160,255",moon:"255,230,240",far:["#4a3a72","#2c2450"],mid:"#241c44",pine:"#17122e",ground:["#3a3048","#211b2c"],grass:"#4a3e60",path:"#5a4a50"},{sky:["#14040c","#3e0f22","#8a2a2a"],aurora:"255,120,140",moon:"255,130,120",far:["#3a1424","#240a16"],mid:"#1e0812",pine:"#14050c",ground:["#2c1c20","#170e11"],grass:"#3e262a",path:"#4a3028"}];class Vp{constructor(t){W(this,"ctx");W(this,"w",0);W(this,"h",0);W(this,"cw",0);W(this,"ch",0);W(this,"sparks",[]);W(this,"smoke",[]);W(this,"stars",[]);W(this,"tufts",[]);W(this,"flowers",[]);W(this,"stones",[]);W(this,"flies",[]);W(this,"hammerHit",0);this.canvas=t,this.ctx=t.getContext("2d");let e=7;const n=()=>(e=e*16807%2147483647)/2147483647;for(let s=0;s<110;s++)this.stars.push({x:n(),y:n()*.55,k:n()<.12?2:n()<.4?1.4:1,p:n()*Math.PI*2});for(let s=0;s<70;s++)this.tufts.push({x:n(),y:.63+n()*.37,k:.6+n()*.8,p:n()});for(let s=0;s<26;s++)this.flowers.push({x:n(),y:.65+n()*.35,k:Math.floor(n()*3),p:n()});for(let s=0;s<12;s++)this.stones.push({x:n(),y:.66+n()*.34,k:.6+n()*.8,p:n()});for(let s=0;s<14;s++)this.flies.push({x:n(),y:.45+n()*.5,k:.5+n(),p:n()*Math.PI*2})}resize(){const t=Math.min(2,window.devicePixelRatio||1),e=this.canvas.clientWidth,n=this.canvas.clientHeight;if(e&&n&&(e!==this.cw||n!==this.ch)){this.cw=e,this.ch=n;const s=Math.max(1,Math.min(e/820,n/520));this.w=e/s,this.h=n/s,this.canvas.width=Math.round(e*t),this.canvas.height=Math.round(n*t),this.ctx.setTransform(t*s,0,0,t*s,0,0)}}draw(t,e,n,s){var M;this.resize();const{ctx:a,w:r,h:o}=this;if(!r||!o)return;const l=nd[Math.max(0,Math.min(nd.length-1,n))],c=o*.62,f=r*.5,d=o*.74,h=.85+.15*Math.sin(t*9)*Math.sin(t*5.3),u=es("bg:camp");if(u){const x=Math.max(r/u.naturalWidth,o/u.naturalHeight),v=u.naturalWidth*x,R=u.naturalHeight*x;if(a.drawImage(u,(r-v)/2,(o-R)/2,v,R),((M=Qf("bg:camp"))==null?void 0:M.props)===!1)return}else this.sky(l,t,c),this.mountains(l,c,n),this.groundLayer(l,c,f,d);const g=a.createRadialGradient(f,d,4,f,d,Math.min(r,o)*.6*h);g.addColorStop(0,"rgba(255,170,70,0.42)"),g.addColorStop(.45,"rgba(255,120,40,0.13)"),g.addColorStop(1,"rgba(255,120,40,0)"),a.fillStyle=g,a.fillRect(0,0,r,o),this.oracle(Le.oracle.x*r,Le.oracle.y*o,t),this.tent(Le.tent.x*r,Le.tent.y*o,t,h),this.wagon(Le.wagon.x*r,Le.wagon.y*o);const _=s.length,m=s.map((x,v)=>{const R=Math.PI+Math.PI*(.08+v/Math.max(1,_-1)*.84);return{id:x,x:f+Math.cos(R)*r*.19,y:d+Math.sin(R)*o*.075+6,i:v}});this.logSeat(f-r*.19,d+4),this.logSeat(f+r*.19,d+4);for(const x of m)this.merc(x.id,x.x,x.y,t,x.i,x.x>f);this.fire(f,d,t,e,h),this.forge(Le.forge.x*r,Le.forge.y*o,t,e),this.training(Le.training.x*r,Le.training.y*o),this.stall(Le.relic.x*r,Le.relic.y*o,t),this.fireflies(t);const p=a.createRadialGradient(f,o*.62,Math.min(r,o)*.35,f,o*.62,Math.max(r,o)*.8);p.addColorStop(0,"rgba(0,0,0,0)"),p.addColorStop(1,"rgba(0,0,0,0.45)"),a.fillStyle=p,a.fillRect(0,0,r,o)}sky(t,e,n){const{ctx:s,w:a,h:r}=this,o=s.createLinearGradient(0,0,0,n);o.addColorStop(0,t.sky[0]),o.addColorStop(.6,t.sky[1]),o.addColorStop(1,t.sky[2]),s.fillStyle=o,s.fillRect(0,0,a,r);for(let u=0;u<2;u++){const g=r*(.18+u*.1);s.beginPath(),s.moveTo(0,g);for(let m=0;m<=a;m+=12)s.lineTo(m,g+Math.sin(m/a*5+e*.4+u*2)*r*.03);for(let m=a;m>=0;m-=12)s.lineTo(m,g+r*.09+Math.sin(m/a*4+e*.3+u)*r*.02);s.closePath();const _=s.createLinearGradient(0,g-r*.03,0,g+r*.11);_.addColorStop(0,`rgba(${t.aurora},0)`),_.addColorStop(.4,`rgba(${t.aurora},${(.1+.05*Math.sin(e*.7+u)).toFixed(3)})`),_.addColorStop(1,`rgba(${t.aurora},0)`),s.fillStyle=_,s.fill()}for(const u of this.stars){const g=.3+.7*(.5+.5*Math.sin(e*1.6+u.p*3)),_=Math.round(u.x*a),m=Math.round(u.y*r);s.fillStyle=`rgba(255,255,240,${g.toFixed(2)})`,u.k>=2?(s.fillRect(_-3,m,7,1),s.fillRect(_,m-3,1,7),s.fillRect(_-1,m-1,3,3)):s.fillRect(_,m,u.k,u.k)}const l=e%9/.9;if(l<1){const u=a*(.15+.5*l),g=r*(.06+.14*l),_=s.createLinearGradient(u-50,g-14,u,g);_.addColorStop(0,"rgba(255,255,255,0)"),_.addColorStop(1,`rgba(255,255,255,${(.9*(1-l)).toFixed(2)})`),s.strokeStyle=_,s.lineWidth=2,s.beginPath(),s.moveTo(u-50,g-14),s.lineTo(u,g),s.stroke()}const c=a*.84,f=r*.13,d=Math.min(a,r)*.055,h=s.createRadialGradient(c,f,d*.6,c,f,d*3.4);h.addColorStop(0,`rgba(${t.moon},0.35)`),h.addColorStop(1,`rgba(${t.moon},0)`),s.fillStyle=h,s.fillRect(c-d*4,f-d*4,d*8,d*8),s.fillStyle=`rgb(${t.moon})`,s.beginPath(),s.arc(c,f,d,0,Math.PI*2),s.fill(),s.fillStyle="rgba(0,0,0,0.08)";for(const[u,g,_]of[[-.3,-.2,.22],[.3,.25,.16],[.05,.45,.1],[.35,-.35,.09]])s.beginPath(),s.arc(c+u*d,f+g*d,_*d,0,Math.PI*2),s.fill()}mountains(t,e,n){const{ctx:s,w:a,h:r}=this,o=[[-.05,.5],[.12,.33],[.3,.45],[.46,.3],[.66,.42],[.82,.32],[1.05,.46]],l=s.createLinearGradient(0,r*.3,0,e);l.addColorStop(0,t.far[0]),l.addColorStop(1,t.far[1]),s.fillStyle=l,s.beginPath(),s.moveTo(0,e);for(const[d,h]of o)s.lineTo(d*a,h*r);s.lineTo(a,e),s.closePath(),s.fill(),s.fillStyle="rgba(0,0,0,0.18)";for(let d=1;d<o.length-1;d++){const[h,u]=o[d],[g,_]=o[d+1];_<=u||(s.beginPath(),s.moveTo(h*a,u*r),s.lineTo((h+g)/2*a,(u+_)/2*r),s.lineTo(h*a+6,e),s.lineTo(h*a,e),s.closePath(),s.fill())}s.fillStyle=n===3?"rgba(255,110,70,0.55)":"rgba(235,240,255,0.75)";for(const[d,h]of o){if(h>.36)continue;const u=d*a,g=h*r;s.beginPath(),s.moveTo(u,g),s.lineTo(u+a*.035,g+r*.035),s.lineTo(u+a*.015,g+r*.03),s.lineTo(u,g+r*.04),s.lineTo(u-a*.02,g+r*.028),s.lineTo(u-a*.035,g+r*.035),s.closePath(),s.fill()}const c=s.createLinearGradient(0,e-r*.12,0,e);c.addColorStop(0,"rgba(200,210,255,0)"),c.addColorStop(1,"rgba(200,210,255,0.12)"),s.fillStyle=c,s.fillRect(0,e-r*.12,a,r*.12),s.fillStyle=t.mid,s.beginPath(),s.moveTo(0,e),s.quadraticCurveTo(a*.15,e-r*.07,a*.32,e-r*.03),s.quadraticCurveTo(a*.6,e-r*.2,a*.86,e-r*.04),s.quadraticCurveTo(a*.95,e-r*.07,a,e-r*.05),s.lineTo(a,e+2),s.lineTo(0,e+2),s.closePath(),s.fill();const f=[[.02,1.2],[.07,.9],[.32,.7],[.36,.95],[.41,.6],[.92,1.1],[.97,1.3],[.88,.75],[.77,.6]];for(const[d,h]of f)this.pine(d*a,e+3,Math.min(a,r)*.12*h,t.pine)}pine(t,e,n,s){const{ctx:a}=this;a.fillStyle=s,a.fillRect(t-n*.04,e-n*.2,n*.08,n*.22);for(let r=0;r<3;r++){const o=e-n*(.55+r*.22),l=n*(.3-r*.07);a.beginPath(),a.moveTo(t,o-n*.18),a.lineTo(t+l,o+n*.3),a.lineTo(t-l,o+n*.3),a.closePath(),a.fill()}}groundLayer(t,e,n,s){const{ctx:a,w:r,h:o}=this,l=a.createLinearGradient(0,e,0,o);l.addColorStop(0,t.ground[0]),l.addColorStop(1,t.ground[1]),a.fillStyle=l,a.fillRect(0,e,r,o-e),a.fillStyle=t.path,a.globalAlpha=.75,a.beginPath(),a.ellipse(n,s+4,r*.28,o*.1,0,0,Math.PI*2),a.fill(),a.beginPath(),a.moveTo(n-r*.06,s+o*.06),a.quadraticCurveTo(n-r*.02,o*.9,n-r*.12,o),a.lineTo(n+r*.06,o),a.quadraticCurveTo(n+r*.1,o*.9,n+r*.06,s+o*.06),a.closePath(),a.fill(),a.lineCap="round",a.strokeStyle=t.path,a.lineWidth=Math.max(8,r*.025),a.beginPath(),a.moveTo(n-r*.2,s-o*.02),a.quadraticCurveTo(r*.25,o*.66,Le.tent.x*r+r*.03,Le.tent.y*o+o*.06),a.moveTo(n+r*.2,s-o*.02),a.quadraticCurveTo(r*.75,o*.67,Le.wagon.x*r-r*.04,Le.wagon.y*o+o*.06),a.stroke(),a.globalAlpha=1;for(const f of this.stones){const d=f.x*r,h=f.y*o;if(Math.abs(d-n)<r*.3&&Math.abs(h-s)<o*.1)continue;const u=4*f.k;a.fillStyle="rgba(0,0,0,0.25)",a.beginPath(),a.ellipse(d+1,h+u*.5,u*1.2,u*.45,0,0,Math.PI*2),a.fill(),a.fillStyle="#5a5c6a",a.beginPath(),a.ellipse(d,h,u*1.1,u*.75,0,Math.PI,0),a.fill(),a.fillStyle="rgba(255,255,255,0.15)",a.fillRect(d-u*.5,h-u*.55,u*.6,1.5)}for(const f of this.tufts){const d=f.x*r,h=f.y*o;if(Math.abs(d-n)<r*.27&&Math.abs(h-s-4)<o*.09)continue;const u=f.k*5;a.strokeStyle=f.p>.5?t.grass:"rgba(0,0,0,0.25)",a.lineWidth=1.4,a.beginPath(),a.moveTo(d-u*.6,h-u),a.lineTo(d,h),a.lineTo(d,h-u*1.3),a.moveTo(d,h),a.lineTo(d+u*.6,h-u),a.stroke()}const c=["#ffd34d","#ff9ec7","#9fd8ff"];for(const f of this.flowers){const d=f.x*r,h=f.y*o;Math.abs(d-n)<r*.28&&Math.abs(h-s)<o*.1||(a.fillStyle=c[f.k],a.fillRect(d-1,h-1,3,3),a.fillStyle="rgba(255,255,255,0.6)",a.fillRect(d,h,1,1))}}fireflies(t){const{ctx:e,w:n,h:s}=this;for(const a of this.flies){const r=a.x*n+Math.sin(t*.6*a.k+a.p)*24,o=a.y*s+Math.cos(t*.8*a.k+a.p*2)*12,l=.5+.5*Math.sin(t*3*a.k+a.p);if(l<.15)continue;const c=e.createRadialGradient(r,o,0,r,o,7);c.addColorStop(0,`rgba(230,255,150,${(l*.7).toFixed(2)})`),c.addColorStop(1,"rgba(230,255,150,0)"),e.fillStyle=c,e.fillRect(r-7,o-7,14,14),e.fillStyle=`rgba(255,255,210,${l.toFixed(2)})`,e.fillRect(r-1,o-1,2,2)}}shadow(t,e,n,s){const{ctx:a}=this;a.fillStyle="rgba(0,0,0,0.35)",a.beginPath(),a.ellipse(t,e,n,s,0,0,Math.PI*2),a.fill()}logSeat(t,e){const{ctx:n}=this,s=Math.min(this.w*.09,46);this.shadow(t,e+7,s*.6,4),n.fillStyle="#6a4a2c",n.fillRect(t-s/2,e-3,s,9),n.fillStyle="#82603a",n.fillRect(t-s/2,e-3,s,3),n.fillStyle="#c9a26a",n.beginPath(),n.ellipse(t+s/2,e+1.5,3,4.5,0,0,Math.PI*2),n.fill()}fire(t,e,n,s,a){const{ctx:r}=this;for(let c=0;c<10;c++){const f=c/10*Math.PI*2,d=t+Math.cos(f)*22,h=e+8+Math.sin(f)*7;r.fillStyle=Math.sin(f)<0?"#3e3f4a":"#5a5c6a",r.beginPath(),r.ellipse(d,h,6,4,0,0,Math.PI*2),r.fill(),r.fillStyle="rgba(255,170,90,0.35)",r.fillRect(d-3,h-3,5,1.5)}r.save(),r.translate(t,e+6);for(const c of[.38,-.38])r.save(),r.rotate(c),r.fillStyle="#5a3a22",r.fillRect(-18,-3.5,36,7),r.fillStyle="#c98a4a",r.fillRect(16,-3.5,3,7),r.restore();r.restore();const o=r.createRadialGradient(t,e+5,1,t,e+5,16);o.addColorStop(0,"rgba(255,220,120,0.9)"),o.addColorStop(1,"rgba(255,90,30,0)"),r.fillStyle=o,r.fillRect(t-16,e-10,32,30),[["#ff4a1a",1],["#ff9a2a",.72],["#ffe68a",.45]].forEach(([c,f],d)=>{r.fillStyle=c;for(let h=-1;h<=1;h++){const u=15*f*(h===0?1:.7),g=u*2.6*(.8+.3*Math.sin(n*(8+d*3+h*2)+d+h))*a,_=t+h*8*f;r.beginPath(),r.moveTo(_-u*.75,e+5),r.quadraticCurveTo(_-u*.7,e-g*.45,_+Math.sin(n*6+d+h)*3,e-g),r.quadraticCurveTo(_+u*.7,e-g*.45,_+u*.75,e+5),r.closePath(),r.fill()}}),Math.random()<s*16&&this.sparks.push({x:t+(Math.random()-.5)*16,y:e-12,vx:(Math.random()-.5)*14,vy:-32-Math.random()*34,life:1+Math.random(),t:0}),this.sparks=this.sparks.filter(c=>(c.t+=s)<c.life);for(const c of this.sparks)c.x+=c.vx*s+Math.sin(n*3+c.y*.1)*.3,c.y+=c.vy*s,r.fillStyle=`rgba(255,${200-Math.floor(c.t*90)},90,${(1-c.t/c.life).toFixed(2)})`,r.fillRect(c.x,c.y,2,2)}merc(t,e,n,s,a,r){const{ctx:o}=this,l=Math.min(this.w*.1,52),c=Math.sin(s*2+a*1.3)*1.2;this.shadow(e,n+2,l*.32,4);const f=th("ally",t),d=f?null:Ss("ally",t);if(o.save(),o.translate(e,n+c),r!==!!(f!=null&&f.flip)&&o.scale(-1,1),f){const h=o.imageSmoothingEnabled;o.imageSmoothingEnabled=!f.pixel;const u=l*f.scale,g=u*(f.fw/f.fh);o.drawImage(f.img,0,0,f.fw,f.fh,-g/2,-u*f.foot,g,u),o.imageSmoothingEnabled=h}else d?o.drawImage(d,-l/2,-l*.95,l,l):(o.fillStyle="#8a92b0",o.fillRect(-8,-18,16,18));o.restore()}tent(t,e,n,s){const{ctx:a}=this,r=Math.min(this.w*.15,78),o=e+r*.55,l=e-r*.6;this.shadow(t+r*.1,o+2,r*1.15,r*.14),a.save(),a.beginPath(),a.moveTo(t-r,o),a.quadraticCurveTo(t-r*.45,e-r*.05,t,l),a.quadraticCurveTo(t+r*.45,e-r*.05,t+r,o),a.closePath(),a.clip();const c=8;for(let _=0;_<c;_++)a.fillStyle=_%2?"#f3e6c8":"#d8423a",a.beginPath(),a.moveTo(t,l),a.lineTo(t-r+_/c*2*r,o+2),a.lineTo(t-r+(_+1)/c*2*r,o+2),a.closePath(),a.fill();a.fillStyle="rgba(20,10,30,0.35)",a.fillRect(t,l,r,r*1.3),a.fillStyle=`rgba(255,170,80,${(.12*s).toFixed(2)})`,a.fillRect(t-r,l,r,r*1.3),a.restore(),a.fillStyle="#ffd34d";for(let _=0;_<8;_++){const m=t-r+(_+.5)*(r/4);a.beginPath(),a.arc(m,o-1,r/9,0,Math.PI),a.fill()}const f=r*.3,d=a.createLinearGradient(0,e,0,o);d.addColorStop(0,`rgba(255,200,110,${(.75*s).toFixed(2)})`),d.addColorStop(1,`rgba(255,140,60,${(.9*s).toFixed(2)})`),a.fillStyle="#2a1414",a.beginPath(),a.moveTo(t-f,o),a.lineTo(t,e-r*.08),a.lineTo(t+f,o),a.closePath(),a.fill(),a.fillStyle=d,a.beginPath(),a.moveTo(t-f*.7,o),a.lineTo(t,e+r*.08),a.lineTo(t+f*.7,o),a.closePath(),a.fill(),a.fillStyle="#b8322c",a.beginPath(),a.moveTo(t,e-r*.08),a.lineTo(t-f*1.1,o-r*.15),a.lineTo(t-f*.8,o),a.closePath(),a.fill(),a.fillStyle="#e8e0d0",a.fillRect(t-1.5,l-r*.38,3,r*.4),a.fillStyle="#ffd34d",a.beginPath(),a.arc(t,l-r*.39,3,0,Math.PI*2),a.fill(),a.fillStyle="#4a8aef",a.beginPath(),a.moveTo(t+1.5,l-r*.36);for(let _=0;_<=6;_++)a.lineTo(t+1.5+_*4,l-r*.36+Math.sin(n*5-_*.8)*2);for(let _=6;_>=0;_--)a.lineTo(t+1.5+_*4,l-r*.36+12+Math.sin(n*5-_*.8)*2-(_===6?3:0));a.closePath(),a.fill(),a.strokeStyle="rgba(230,220,200,0.55)",a.lineWidth=1,a.beginPath(),a.moveTo(t-r*.55,e+r*.05),a.lineTo(t-r*1.3,o+2),a.moveTo(t+r*.55,e+r*.05),a.lineTo(t+r*1.3,o+2),a.stroke(),a.fillStyle="#6a4a2c",a.fillRect(t-r*1.3-2,o-3,4,6),a.fillRect(t+r*1.3-2,o-3,4,6);const h=t+r*.62,u=e+r*.05,g=a.createRadialGradient(h,u,1,h,u,22*s);g.addColorStop(0,"rgba(255,220,130,0.6)"),g.addColorStop(1,"rgba(255,200,100,0)"),a.fillStyle=g,a.fillRect(h-24,u-24,48,48),a.fillStyle="#3a2a1a",a.fillRect(h-4,u-7,8,2),a.fillStyle="#ffe08a",a.fillRect(h-3,u-5,6,8)}wagon(t,e){const{ctx:n}=this,s=Math.min(this.w*.12,60);this.shadow(t,e+s*.52,s*1.1,s*.12),n.strokeStyle="#5a3a22",n.lineWidth=3,n.beginPath(),n.moveTo(t-s*.8,e+s*.15),n.lineTo(t-s*1.25,e+s*.35),n.stroke();const a=n.createLinearGradient(0,e-s*.7,0,e-s*.1);a.addColorStop(0,"#f4ead2"),a.addColorStop(1,"#c8b892"),n.fillStyle=a,n.beginPath(),n.moveTo(t-s*.78,e-s*.15),n.bezierCurveTo(t-s*.8,e-s*.8,t+s*.8,e-s*.8,t+s*.78,e-s*.15),n.closePath(),n.fill(),n.strokeStyle="rgba(120,96,60,0.6)",n.lineWidth=1.5;for(const l of[-.4,0,.4])n.beginPath(),n.moveTo(t+l*s,e-s*.15),n.quadraticCurveTo(t+l*s*1.1,e-s*.55,t+l*s*.9,e-s*.62),n.stroke();n.fillStyle="rgba(30,20,40,0.25)",n.beginPath(),n.moveTo(t+s*.2,e-s*.15),n.bezierCurveTo(t+s*.4,e-s*.7,t+s*.8,e-s*.7,t+s*.78,e-s*.15),n.closePath(),n.fill(),n.fillStyle="#7a5434",n.fillRect(t-s*.85,e-s*.18,s*1.7,s*.42),n.fillStyle="#5e3e24";for(let l=1;l<3;l++)n.fillRect(t-s*.85,e-s*.18+l*s*.14,s*1.7,1.5);n.fillStyle="#9a7048",n.fillRect(t-s*.85,e-s*.18,s*1.7,3);for(const l of[-.5,.5]){const c=t+l*s,f=e+s*.3,d=s*.24;n.strokeStyle="#3a2618",n.lineWidth=3,n.beginPath(),n.arc(c,f,d,0,Math.PI*2),n.stroke(),n.lineWidth=1.5;for(let h=0;h<8;h++){const u=h/8*Math.PI*2;n.beginPath(),n.moveTo(c,f),n.lineTo(c+Math.cos(u)*d,f+Math.sin(u)*d),n.stroke()}n.fillStyle="#b08a58",n.beginPath(),n.arc(c,f,3,0,Math.PI*2),n.fill()}const r=t+s*1.05,o=e+s*.5;this.crate(r,o,s*.34),this.crate(r+s*.06,o-s*.34,s*.26),n.fillStyle="#8a5a30",n.fillRect(r+s*.25,o-s*.36,s*.26,s*.36),n.fillStyle="#4a4a55",n.fillRect(r+s*.25,o-s*.3,s*.26,2),n.fillRect(r+s*.25,o-s*.1,s*.26,2)}crate(t,e,n){const{ctx:s}=this;s.fillStyle="#b08850",s.fillRect(t-n/2,e-n,n,n),s.strokeStyle="#7a5a30",s.lineWidth=1.5,s.strokeRect(t-n/2+.75,e-n+.75,n-1.5,n-1.5),s.beginPath(),s.moveTo(t-n/2,e-n),s.lineTo(t+n/2,e),s.stroke()}training(t,e){const{ctx:n}=this,s=Math.min(this.w*.09,46);this.shadow(t+s*.4,e+s*.42,s*.9,s*.1),n.fillStyle="#6a4a2c",n.fillRect(t-2,e-s*.95,4,s*1.35),n.fillRect(t-s*.55,e-s*.55,s*1.1,4),n.fillStyle="#d8b46a",n.beginPath(),n.ellipse(t,e-s*.25,s*.28,s*.36,0,0,Math.PI*2),n.fill(),n.strokeStyle="#a8843e",n.lineWidth=1;for(let l=-2;l<=2;l++)n.beginPath(),n.moveTo(t+l*s*.08,e-s*.55),n.lineTo(t+l*s*.1,e+s*.08),n.stroke();n.fillStyle="#8a3a2a",n.fillRect(t-s*.28,e-s*.32,s*.56,3),n.fillStyle="#e8d2a0",n.beginPath(),n.arc(t,e-s*.78,s*.19,0,Math.PI*2),n.fill(),n.fillStyle="#3a2a1a",n.fillRect(t-s*.08,e-s*.8,2,2),n.fillRect(t+s*.05,e-s*.8,2,2);const a=t+s*.9,r=e-s*.1;n.fillStyle="#5a3a22",n.fillRect(a-s*.25,r,3,s*.5),n.fillRect(a+s*.22,r,3,s*.5),["#f3ead8","#d8423a","#f3ead8","#d8423a","#ffd34d"].forEach((l,c)=>{n.fillStyle=l,n.beginPath(),n.ellipse(a,r,s*.32*(1-c*.19),s*.36*(1-c*.19),0,0,Math.PI*2),n.fill()}),n.strokeStyle="#6a4a2c",n.lineWidth=1.5;for(const[l,c]of[[.05,-.05],[-.12,.1]])n.beginPath(),n.moveTo(a+l*s,r+c*s),n.lineTo(a+l*s-s*.3,r+c*s-s*.1),n.stroke(),n.fillStyle="#ef5a5a",n.fillRect(a+l*s-s*.32,r+c*s-s*.13,4,3)}forge(t,e,n,s){const{ctx:a}=this,r=Math.min(this.w*.1,50),o=t+r*.55;this.shadow(t,e+r*.4,r*1.2,r*.12);const l=o-r*.05,c=e-r*.75;a.fillStyle="#4a4650",a.fillRect(l,c,r*.7,r*1.15),a.fillStyle="#5e5a66";for(let x=0;x<5;x++)for(let v=0;v<3;v++){const R=x%2?r*.12:0;a.fillRect(l+v*r*.24+R-r*.05,c+x*r*.23+1,r*.2,r*.19)}a.fillStyle="#3e3a44",a.fillRect(l+r*.4,c-r*.45,r*.2,r*.45);const f=.7+.3*Math.sin(n*4)*Math.sin(n*2.3);a.fillStyle="#1a0e0a",a.beginPath(),a.arc(l+r*.35,e-r*.05,r*.2,Math.PI,0),a.lineTo(l+r*.55,e+r*.12),a.lineTo(l+r*.15,e+r*.12),a.closePath(),a.fill();const d=a.createRadialGradient(l+r*.35,e+r*.05,1,l+r*.35,e+r*.05,r*.5);d.addColorStop(0,`rgba(255,200,90,${f.toFixed(2)})`),d.addColorStop(.4,`rgba(255,110,40,${(f*.5).toFixed(2)})`),d.addColorStop(1,"rgba(255,90,30,0)"),a.fillStyle=d,a.fillRect(l-r*.2,e-r*.45,r*1.1,r*.9),Math.random()<s*3&&this.smoke.push({x:l+r*.5,y:c-r*.45,r:4,t:0,life:2.4}),this.smoke=this.smoke.filter(x=>(x.t+=s)<x.life);for(const x of this.smoke){const v=x.t/x.life;a.fillStyle=`rgba(170,170,190,${(.28*(1-v)).toFixed(2)})`,a.beginPath(),a.arc(x.x+Math.sin(n+x.life*3)*4+v*10,x.y-v*40,x.r+v*8,0,Math.PI*2),a.fill()}const h=t-r*.25;a.fillStyle="#2e3038",a.fillRect(h-r*.12,e-r*.1,r*.24,r*.35),a.fillRect(h-r*.32,e+r*.22,r*.64,r*.1),a.fillStyle="#5a5e70",a.beginPath(),a.moveTo(h-r*.6,e-r*.28),a.lineTo(h+r*.42,e-r*.28),a.lineTo(h+r*.3,e-r*.1),a.lineTo(h-r*.42,e-r*.1),a.closePath(),a.fill(),a.fillStyle="rgba(255,255,255,0.2)",a.fillRect(h-r*.55,e-r*.28,r*.95,2);const u=.6+.4*Math.sin(n*3);a.fillStyle=`rgb(255,${120+Math.floor(u*70)},60)`,a.fillRect(h-r*.1,e-r*.33,r*.32,4);const g=n%1.3/1.3,_=g<.75?-1.1*(g/.75):-1.1+1.1*((g-.75)/.25),m=h+r*.42,p=e-r*.62;a.save(),a.translate(m,p),a.rotate(_),a.fillStyle="#7a5434",a.fillRect(-r*.36,-1.5,r*.36,3),a.fillStyle="#8a8e9e",a.fillRect(-r*.42,-r*.09,r*.12,r*.18),a.restore(),g>.97&&n-this.hammerHit>1&&(this.hammerHit=n);const M=n-this.hammerHit;if(M<.25){a.fillStyle=`rgba(255,224,138,${(1-M/.25).toFixed(2)})`;for(let x=0;x<6;x++){const v=-Math.PI*(.15+x/5*.7),R=6+M*60;a.fillRect(h+r*.05+Math.cos(v)*R,e-r*.35+Math.sin(v)*R,2,2)}}}stall(t,e,n){const{ctx:s}=this,a=Math.min(this.w*.1,50);s.globalAlpha=.7,this.shadow(t,e+a*.22,a*.8,a*.08),s.fillStyle="#4a3428",s.fillRect(t-a*.62,e-a*.6,3,a*.8),s.fillRect(t+a*.6,e-a*.6,3,a*.8),s.fillStyle="#5a3e30",s.fillRect(t-a*.65,e-a*.1,a*1.3,a*.3),s.fillStyle="#7a5640",s.fillRect(t-a*.7,e-a*.12,a*1.4,3),["#b48aff","#5ad1ff","#ffd34d"].forEach((o,l)=>{const c=t-a*.35+l*a*.35;s.fillStyle=o,s.beginPath(),s.moveTo(c,e-a*.28),s.lineTo(c+5,e-a*.2),s.lineTo(c,e-a*.12),s.lineTo(c-5,e-a*.2),s.closePath(),s.fill(),Math.sin(n*2+l*2)>.85&&(s.fillStyle="#fff",s.fillRect(c-1,e-a*.3,2,2))});for(let o=0;o<6;o++)s.fillStyle=o%2?"#e8d8a8":"#6a4a9a",s.fillRect(t-a*.75+o*a*.25,e-a*.72,a*.25,a*.16),s.beginPath(),s.arc(t-a*.625+o*a*.25,e-a*.56,a*.125,0,Math.PI),s.fill();s.fillStyle="#c9a26a",s.fillRect(t-a*.22,e+a*.02,a*.44,a*.14),s.fillStyle="#5a3e24",s.fillRect(t-a*.14,e+a*.08,a*.28,2),s.globalAlpha=1}oracle(t,e,n){const{ctx:s}=this,a=Math.min(this.w*.08,40);s.globalAlpha=.75,this.shadow(t,e+a*.42,a*.8,a*.08),s.fillStyle="#3e2a6a",s.beginPath(),s.moveTo(t-a*.75,e+a*.42),s.quadraticCurveTo(t-a*.2,e-a*.1,t,e-a*.7),s.quadraticCurveTo(t+a*.2,e-a*.1,t+a*.75,e+a*.42),s.closePath(),s.fill(),s.fillStyle="rgba(0,0,0,0.25)",s.beginPath(),s.moveTo(t,e-a*.7),s.quadraticCurveTo(t+a*.2,e-a*.1,t+a*.75,e+a*.42),s.lineTo(t,e+a*.42),s.closePath(),s.fill(),s.fillStyle="#ffd34d",s.beginPath(),s.arc(t,e-a*.05,a*.14,0,Math.PI*2),s.fill(),s.fillStyle="#3e2a6a",s.beginPath(),s.arc(t+a*.06,e-a*.08,a*.12,0,Math.PI*2),s.fill();const r=.5+.5*Math.sin(n*2),o=s.createRadialGradient(t,e-a*.78,1,t,e-a*.78,a*.5);o.addColorStop(0,`rgba(190,150,255,${(.5+r*.3).toFixed(2)})`),o.addColorStop(1,"rgba(190,150,255,0)"),s.fillStyle=o,s.fillRect(t-a*.5,e-a*1.28,a,a),s.fillStyle="#d8c2ff",s.beginPath(),s.arc(t,e-a*.78,4,0,Math.PI*2),s.fill(),s.globalAlpha=1}}let Wp=1;const id={4:0,6:0,8:1,12:2,20:3};function hc(i){return Gu.filter(t=>i>=id[t]).map(t=>{const e=t>=8?1+.5*(i-id[t]):1;return[t,Vu[t]*e]})}function uc(i){return[[1,Ga[1]+10*i],[2,Ga[2]],[3,Math.max(5,Ga[3]-5*i)],[4,Math.max(0,Ga[4]-5*i)]]}function lh(i){const t=Math.min(...i.map(n=>n[0])),e=Math.min(...i.map(n=>n[1]));return i.map(([n,s])=>[n-t,s-e]).sort((n,s)=>n[1]-s[1]||n[0]-s[0])}function pc(i){return lh(i.map(([t,e])=>[-e,t]))}function Xp(i){const t=i.length;return{x:i.reduce((e,n)=>e+n[0]+.5,0)/t,y:i.reduce((e,n)=>e+n[1]+.5,0)/t}}function qp(i,t=1){const e=Math.min(t,i.faces);if(i.pips>=i.faces)return"max";if(i.faces<=e)return"normal";const n=(i.pips-e)/(i.faces-e);return n>=.75?"great":n<=.25?"low":"normal"}function Yp(i,t){const e=Vr(i,hc(t.faceLv)),n=Vr(i,uc(t.compressLv)),s=Wu.filter(f=>f.cells.length===n),a=s[Math.floor(i()*s.length)];let r=lh(a.cells);const o=Math.floor(i()*4);for(let f=0;f<o;f++)r=pc(r);const l=Math.min(t.minPips,e),c=t.maxRoll?e:Ap(i,l,e);return{id:Wp++,faces:e,pips:c,cells:r,shapeId:a.id,merges:0}}function jp(i){const t=hc(i.faceLv),e=t.reduce((o,[,l])=>o+l,0),n=t.reduce((o,[l,c])=>{const f=Math.min(i.minPips,l);return o+c/e*(i.maxRoll?l:(f+l)/2)},0),s=uc(i.compressLv),a=s.reduce((o,[,l])=>o+l,0),r=s.reduce((o,[l,c])=>o+c/a*l,0);return{pips:n,cells:r}}function Kp(i){const t=(d,h)=>i.some(u=>u[0]===d&&u[1]===h),e=i.map(d=>d[0]),n=i.map(d=>d[1]),s=Math.max(...e)-Math.min(...e)+1,a=Math.max(...n)-Math.min(...n)+1;if(s*a===i.length)return{x:Math.min(...e)+s/2,y:Math.min(...n)+a/2};const r=i.map(([d,h])=>[t(d-1,h),t(d+1,h),t(d,h-1),t(d,h+1)].filter(Boolean).length),o=Math.max(...r),l=i.filter((d,h)=>r[h]===o);if(l.length===2&&Math.abs(l[0][0]-l[1][0])+Math.abs(l[0][1]-l[1][1])===1)return{x:(l[0][0]+l[1][0])/2+.5,y:(l[0][1]+l[1][1])/2+.5};const c=Xp(i),f=[...l].sort((d,h)=>Math.hypot(d[0]+.5-c.x,d[1]+.5-c.y)-Math.hypot(h[0]+.5-c.x,h[1]+.5-c.y))[0];return{x:f[0]+.5,y:f[1]+.5}}const dl={dice:{name:"주사위",color:"#5b8def"},grid:{name:"격자",color:"#7fae8a"},forge:{name:"강화",color:"#e8a04f"},summon:{name:"출격",color:"#ef5a5a"},base:{name:"본진",color:"#a46be8"},fever:{name:"피버",color:"#ffd34d"}},Wr={common:{name:"일반",weight:70},rare:{name:"희귀",weight:25},legend:{name:"전설",weight:5}},ch=[{id:"luck",name:"행운의 손",icon:"🍀",family:"dice",rarity:"common",shop:"floor",desc:"굴림 최저 눈금 +1"},{id:"poly",name:"고면체 수집가",icon:"🎲",family:"dice",rarity:"common",shop:"face",desc:"더 큰 주사위가 열려요 (d8 → d12 → d20)"},{id:"supply",name:"보급 행렬",icon:"📦",family:"dice",rarity:"common",shop:"prepdice",desc:"스테이지마다 준비 시간 주사위 +1"},{id:"wide",name:"넓은 짐칸",icon:"🧳",family:"grid",rarity:"common",shop:"grid",desc:"격자에 한 줄 추가"},{id:"pack",name:"공간 압축",icon:"🧩",family:"grid",rarity:"common",shop:"compress",desc:"작은 주사위가 더 자주 나와요"},{id:"smith",name:"대장장이",icon:"⚒️",family:"forge",rarity:"common",shop:"forge",desc:"강화 성공률 +5%p"},{id:"drill",name:"훈련 교관",icon:"💪",family:"summon",rarity:"common",shop:"train",desc:"모든 용병 능력치 +10%"},{id:"twin",name:"쌍둥이 굴림",icon:"👯",family:"dice",rarity:"rare",desc:"굴릴 때 15% 확률로 주사위 하나를 더 (합치면 25 · 35%)"},{id:"full",name:"꽉 찬 짐수레",icon:"📦",family:"grid",rarity:"rare",desc:"격자가 꽉 찬 채로 출격하면 그 용병들 공격력 +30% (합치면 45 · 60%)"},{id:"carry",name:"남김없이",icon:"♻️",family:"summon",rarity:"rare",desc:"출격하고 남는 눈금이 사라지지 않고 다음 출격에 더해져요"},{id:"vanguard",name:"선두 돌격",icon:"🛡️",family:"summon",rarity:"rare",desc:"스테이지마다 처음 출격하는 용병 3명이 체력 2배 (합치면 2.5 · 3배)"},{id:"march",name:"대열 행진",icon:"🥁",family:"summon",rarity:"rare",desc:"전투 중 용병이 5명째 출격할 때마다 아군 전체가 3초간 돌격 (합치면 5 · 7초)"},{id:"fusion",name:"합체 장인",icon:"🔗",family:"forge",rarity:"rare",desc:"강화에 성공하면 눈금 +2 더 (합치면 +3 · +4)"},{id:"phalanx",name:"철벽 대열",icon:"🧱",family:"summon",rarity:"rare",desc:"준비 시간에 대기시킨 용병이 체력 +40%로 출격 (합치면 60 · 80%)"},{id:"hunter",name:"전리품 사냥꾼",icon:"🏹",family:"grid",rarity:"rare",desc:"보너스 시간 처치 주사위 확률 +20%p, 최대 +2개 (합치면 더 많이)"},{id:"legion",name:"군단",icon:"🚩",family:"summon",rarity:"legend",desc:"같은 용병을 4번째 뽑을 때마다 1명 더, 눈금 없이 (합치면 3번째 · 2번째마다)"},{id:"warcry",name:"개전 함성",icon:"📯",family:"summon",rarity:"legend",desc:"출격하면 8초 동안 아군 전체 돌격 (합치면 11 · 14초)"},{id:"rain",name:"주사위 비",icon:"🌧️",family:"dice",rarity:"legend",desc:"스테이지 시작마다 주사위 5개를 더 (합치면 7 · 9개)"}],ni=new Map(ch.map(i=>[i.id,i])),Zp=new Set(["carry"]);function Jp(i,t,e=3,n=!1){const s=ch.filter(o=>!Zp.has(o.id)&&t(o)),a=[],r=o=>{const l=o.filter(d=>!a.includes(d));if(!l.length)return null;const c=l.reduce((d,h)=>d+Wr[h.rarity].weight,0);let f=i()*c;for(const d of l)if(f-=Wr[d.rarity].weight,f<=0)return d;return l[l.length-1]};if(n){const o=r(s.filter(l=>l.rarity==="legend"));o&&a.push(o)}for(;a.length<e;){const o=r(s);if(!o)break;a.push(o)}return a.map(o=>o.id)}class Qp{constructor(t,e){W(this,"items",[]);this.w=t,this.h=e}cellsOf(t){return t.die.cells.map(([e,n])=>[t.x+e,t.y+n])}occupant(t,e){return this.items.find(n=>this.cellsOf(n).some(([s,a])=>s===t&&a===e))}canPlace(t,e,n){return t.every(([s,a])=>{const r=e+s,o=n+a;return r>=0&&o>=0&&r<this.w&&o<this.h&&!this.occupant(r,o)})}place(t,e,n){return this.canPlace(t.cells,e,n)?(this.items.push({die:t,x:e,y:n}),!0):!1}get(t){return this.items.find(e=>e.die.id===t)}remove(t){const e=this.items.findIndex(n=>n.die.id===t);return e<0?void 0:this.items.splice(e,1)[0]}sum(){return this.items.reduce((t,e)=>t+e.die.pips,0)}usedCells(){return this.items.reduce((t,e)=>t+e.die.cells.length,0)}clear(){this.items=[]}findSpot(t){for(let e=0;e<this.h;e++)for(let n=0;n<this.w;n++)if(this.canPlace(t,n,e))return{x:n,y:e};return null}}const tm="one",dh=12;class em{constructor(t=Date.now()){W(this,"rng");W(this,"grid",new Qp(Va.w,Va.h));W(this,"unconfirmed",3);W(this,"exp",0);W(this,"pending",null);W(this,"rolling",null);W(this,"held",[]);W(this,"holdSlots",Yu);W(this,"minPips",1);W(this,"faceLv",0);W(this,"compressLv",0);W(this,"mergeBonus",0);W(this,"quickLv",0);W(this,"streak",0);W(this,"streakMax",Qe);W(this,"bonusPips",0);W(this,"carry",!1);W(this,"twinChance",0);W(this,"feverMs",lc);W(this,"burstMax",dh);W(this,"legion",!1);W(this,"mergeExtra",0);W(this,"pity",0);W(this,"protectNext",!1);W(this,"feverUntil",0);W(this,"feverKind",null);W(this,"feverGain",0);W(this,"feverLocked",!1);W(this,"log",[]);W(this,"army",[]);W(this,"stats",{rolled:0,discarded:0,merges:0,mergeSuccess:0,destroyed:0});W(this,"clock",()=>Date.now());this.rng=oh(t)}isFever(t=this.clock()){return t<this.feverUntil}hasBoost(t,e=this.clock()){return this.isFever(e)&&this.feverKind===t}feverLeft(t=this.clock()){return Math.max(0,this.feverUntil-t)}addDice(t){this.unconfirmed=Math.min(qu,this.unconfirmed+t)}addExp(t){for(this.exp+=t;this.exp>=zr;)this.exp-=zr,this.addDice(1)}mods(t=this.clock()){return{minPips:this.minPips,faceLv:this.faceLv,compressLv:this.compressLv,maxRoll:this.hasBoost("maxroll",t)}}needFor(t){const e=Math.max(0,t-this.sum());if(e===0)return{left:e,dice:0,tight:!1};const n=jp(this.mods()),s=Math.ceil(e/n.pips),a=this.grid.w*this.grid.h-this.grid.usedCells();return{left:e,dice:s,tight:s*n.cells>a}}roll(t=this.clock()){if(this.pending||this.rolling||this.unconfirmed<=0)return null;this.unconfirmed--,this.twinChance>0&&this.rng()<this.twinChance&&this.unconfirmed++;const e=Yp(this.rng,this.mods(t)),n=this.hasBoost("maxroll",t)?Qu:Ju*Math.pow(.85,this.quickLv);return this.rolling={die:e,startAt:t,readyAt:t+n},this.stats.rolled++,e}finishRoll(t=this.clock()){return!this.rolling||t<this.rolling.readyAt?!1:(this.pending=this.rolling.die,this.rolling=null,!0)}rollProgress(t=this.clock()){if(!this.rolling)return 0;const e=this.rolling;return Math.min(1,(t-e.startAt)/Math.max(1,e.readyAt-e.startAt))}rotatePending(){this.pending&&(this.pending={...this.pending,cells:pc(this.pending.cells)})}placePending(t,e){return!this.pending||!this.grid.place(this.pending,t,e)?!1:(this.pending=null,!0)}holdPending(){return!this.pending||this.held.length>=this.holdSlots?!1:(this.held.push(this.pending),this.pending=null,!0)}takeHeld(t=0){return this.pending||this.rolling||!this.held[t]?!1:(this.pending=this.held.splice(t,1)[0],!0)}discardPending(){return this.pending?(this.pending=null,this.stats.discarded++,this.addExp(Ma),Ma):0}clearGrid(){const t=this.grid.items.length;return this.stats.discarded+=t,this.grid.clear(),t}discardPlaced(t){this.grid.remove(t)&&this.stats.discarded++}sum(){return this.grid.sum()+this.bonusPips}canSummon(t){return(this.grid.items.length>0||this.bonusPips>0)&&this.sum()>=t.cost}pickBlocks(t){const e=t-this.bonusPips;if(e<=0)return{ids:[],pips:0};const n=this.grid.items.map(o=>({id:o.die.id,pips:o.die.pips})),s=e+Math.max(0,...n.map(o=>o.pips));let a=new Map([[0,[]]]);for(const o of n){const l=new Map(a);for(const[c,f]of a){if(c>=e)continue;const d=Math.min(s,c+o.pips),h=l.get(d);(!h||h.length>f.length+1)&&l.set(d,[...f,o.id])}a=l}let r=null;for(const[o,l]of a)o<e||(!r||o<r.pips||o===r.pips&&l.length<r.ids.length)&&(r={ids:l,pips:o});return r}summonOne(t){const e=pe.find(a=>a.id===t);if(!e||!this.canSummon(e))return null;const n=this.sum();this.grid.clear(),this.bonusPips=n-e.cost;const s={merc:e,golden:!1,spent:e.cost,wasted:0};return this.army.push(s),s}summon(t,e=this.clock()){const n=pe.find(r=>r.id===t);if(!n||!this.canSummon(n))return null;const s=this.sum(),a={merc:n,golden:!1,spent:s,wasted:s-n.cost};return this.grid.clear(),this.bonusPips=0,this.army.push(a),a}planBurst(t,e,n=this.sum()){const s=pe.find(l=>l.id===t),a=[];if(!s||n<s.cost)return{list:a,wasted:n};let r=n;for(;r>=s.cost&&a.length<this.burstMax;)a.push(s),r-=s.cost;const o=[...e].sort((l,c)=>c.cost-l.cost);for(let l=0;l<64&&a.length<this.burstMax;l++){const c=o.find(f=>f.cost<=r);if(!c)break;a.push(c),r-=c.cost}return this.legion&&a.filter(l=>l.id===s.id).length>=4&&a.push(s),{list:a,wasted:r}}summonBurst(t,e,n=this.clock()){const s=pe.find(o=>o.id===t);if(!s||!this.canSummon(s))return[];const a=this.planBurst(t,e),r=a.list.map(o=>({merc:o,golden:!1,spent:o.cost,wasted:0}));return r.length&&(r[r.length-1].wasted=this.carry?0:a.wasted),this.grid.clear(),this.bonusPips=this.carry?a.wasted:0,this.army.push(...r),r}mergeChance(t,e=this.clock()){if(this.hasBoost("sure",e))return 100;const n=ya[Math.min(4,t)];return Math.min(100,n.success+this.mergeBonus+this.pity)}canMerge(t,e,n=this.clock()){if(t===e)return"같은 주사위예요";const s=this.grid.get(t),a=this.grid.get(e);return!s||!a?"격자에 있는 주사위끼리만 합칠 수 있어요":s.die.cells.length!==a.die.cells.length?"칸 수가 같아야 해요":null}merge(t,e,n=this.clock()){const s=this.canMerge(t,e,n);if(s)return{ok:!1,reason:s};const a=this.grid.get(t).die,r=this.grid.get(e).die,o=this.isFever(n),l=Math.min(4,r.cells.length),c=this.mergeChance(l,n),f=this.rng()*100,d=f<c,h=this.protectNext;this.protectNext=!1,this.stats.merges++;let u,g=0,_=!1;d?(r.pips+=a.pips+this.mergeExtra,r.merges++,o&&(this.feverGain+=a.pips),this.grid.remove(t),this.stats.mergeSuccess++,u="success",o||(this.pity=0,g=l,this.streak+=l,this.streak>=this.streakMax&&(this.streak=0,_=!0))):(this.pity+=Xu,this.streak=0,h?u="fail-protected":ya[l].destroyBoth?(this.grid.remove(t),this.grid.remove(e),this.stats.destroyed+=2,u="fail-both",this.protectNext=!0):(this.grid.remove(t),this.stats.destroyed+=1,u="fail-material",this.protectNext=!0));const m={ok:!0,chance:c,roll:f,success:d,outcome:u,cells:l,gained:g,fever:o,feverTriggered:_,targetId:e,materialId:t,newPips:r.pips};return this.log.unshift(m),this.log.length>20&&this.log.pop(),m}expandGrid(){const t=this.grid;if(t.w<=t.h&&t.w<_i)t.w++;else if(t.h<_i)t.h++;else return!1;return!0}shrinkGrid(){const t=this.grid;if(t.h>=t.w&&t.h>Va.h)t.h--;else if(t.w>Va.w)t.w--;else return 0;const e=t.items.filter(n=>t.cellsOf(n).some(([s,a])=>s>=t.w||a>=t.h));for(const n of e)t.remove(n.die.id);return e.length}chainMerge(){const t=[];if(this.grid.items.length===0)return t;const[e,...n]=[...this.grid.items].sort((s,a)=>a.die.pips-s.die.pips);for(const s of n){const a=s.die.pips+1;e.die.pips+=a,e.die.merges++,this.feverGain+=s.die.pips,this.grid.remove(s.die.id),this.stats.merges++,this.stats.mergeSuccess++,t.push({targetId:e.die.id,materialId:s.die.id,gained:a})}return e.x=0,e.y=0,e.die.cells=[[0,0]],t}startFever(t="sure",e=this.clock()){this.streak=0,this.feverKind=t,this.feverUntil=e+this.feverMs}}const ks=90,Es=15,lo=3,nm=5,im=["숲길","협곡","마왕성 외곽","폐허","마왕령"],Fn={sure:{name:"확정 강화",icon:"⚒",desc:"10초 동안 강화 성공률 100%",timed:!0},maxroll:{name:"최대 눈금",icon:"🎯",desc:"10초 동안 굴리면 무조건 최대 눈금",timed:!0},rush:{name:"전군 돌격",icon:"⚔️",desc:"10초 동안 아군 공격·이동 속도 2배",timed:!0},chain:{name:"연쇄 폭발",icon:"💥",desc:"격자의 모든 주사위가 하나로 합쳐져요",timed:!1},rain:{name:"주사위 비",icon:"🎲",desc:"미확정 주사위 5개가 바로 쏟아져요",timed:!1},strike:{name:"운명의 일격",icon:"☄️",desc:"격자 눈금 합만큼 전장 전체를 바로 폭격",timed:!1}},sm=5,am=6,rm=25,om=10,sd=[0,1,2,3,4];function fn(i){return i%Ds===0}function lm(i){return fn(i)?36+8*$n(i):Math.min(fm,cm+dm*(i-1))}const cm=62,dm=5,fm=100,fh=.3,hm=4,um=2,pm=2,Dn=[{id:"grid",name:"격자 확장",desc:"격자에 한 줄 추가",baseCost:20,step:10,max:6},{id:"train",name:"용병 훈련",desc:"모든 용병 능력치 +10%",baseCost:15,step:8,max:18},{id:"floor",name:"바닥 다지기",desc:"굴림 최저 눈금 +1",baseCost:15,step:10,max:5},{id:"face",name:"고면체",desc:"더 큰 주사위가 열려요 (Lv1 d8 · Lv2 d12 · Lv3 d20, 그 뒤엔 더 자주)",baseCost:12,step:6,max:5},{id:"compress",name:"공간 압축",desc:"작은 형태 등장 확률 증가",baseCost:12,step:6,max:4},{id:"forge",name:"강화 숙련",desc:"합치기 성공률 +5%p",baseCost:12,step:6,max:4},{id:"quick",name:"빠른 손",desc:"주사위 굴림 시간 -15%",baseCost:12,step:8,max:4},{id:"hold",name:"보관함 확장",desc:"보관함 +1칸 (최대 3칸)",baseCost:10,step:10,max:2},{id:"bpower",name:"망루 화살촉",desc:"본진 사격 위력 +100%",baseCost:10,step:7,max:8},{id:"brange",name:"망루 높이기",desc:"본진 사격 사거리 +2.5m",baseCost:10,step:7,max:6},{id:"prepdice",name:"보급 상자",desc:"스테이지마다 준비 시간 주사위 +1",baseCost:15,step:10,max:5},{id:"lives",name:"강인함",desc:"원정을 시작할 때 목숨 +1",baseCost:30,step:30,max:2},{id:"bounty",name:"전리품 감각",desc:"보너스 시간 처치에서 주사위가 나올 확률 +10%p",baseCost:12,step:8,max:3},{id:"bmove",name:"본진 다리",desc:"본진 걷는 속도 +0.12m/초 (용병이 없을 때 더 빨리 전진)",baseCost:10,step:7,max:6},{id:"bspeed",name:"연발 장치",desc:"본진 사격 속도 +40%",baseCost:10,step:7,max:8}];function hh(i){return i.stages*1e3+i.kills*10+i.coins*5}const qi=6,uh=3,ad=new Set(["grid","hold","quick"]),rd=2;class mm{constructor(t=Date.now(),e){W(this,"rng");W(this,"game");W(this,"battle");W(this,"day",1);W(this,"flags",lo);W(this,"coins",0);W(this,"phase","deck");W(this,"deck",[...tp]);W(this,"deckFromCamp",!1);W(this,"time",0);W(this,"clockMs",0);W(this,"trainLv",0);W(this,"bought",{});W(this,"cardLv",{});W(this,"bossHp",null);W(this,"lastResult",null);W(this,"history",[]);W(this,"summoned",0);W(this,"feverEffect",null);W(this,"deferKillExp",!1);W(this,"pendingExp",0);W(this,"feverEnded",!1);W(this,"seenUnlocks",pe.filter(t=>(Ls[t.id]??1)<=1).map(t=>t.id));W(this,"opening",!1);W(this,"prep",!1);W(this,"bankedDice",0);W(this,"bonusCoins",0);W(this,"totalTime",0);W(this,"stageBonusDice",0);W(this,"cards",[]);W(this,"cardOffer",null);W(this,"blessLv",{});W(this,"lastBankUsed",0);W(this,"summonMode",tm);W(this,"stageSummons",0);W(this,"stageSummonsBy",{});W(this,"zoneReset",!1);W(this,"partRetry",!1);W(this,"partHistoryFrom",0);if(this.rng=oh(t^2654435769),this.game=new em(t),this.game.unconfirmed=0,this.game.clock=()=>this.clockMs,e){this.coins=Math.max(0,Math.floor(e.coins||0));for(const[n,s]of Object.entries(e.levels??{})){const a=Dn.find(o=>o.id===n);if(!a||ad.has(n))continue;const r=Math.max(0,Math.min(a.max,Math.floor(s)));this.bought[n]=r;for(let o=0;o<r;o++)this.applyEffect(n)}}this.battle=this.makeBattle()}makeBattle(){return new zp(this.day,this.rng,{bossDay:fn(this.day),bossHp:fn(this.day)?this.bossHp:null,target:this.target,base:this.baseLevels})}get baseLevels(){return{power:this.permLevel("bpower"),range:this.permLevel("brange"),speed:this.permLevel("bspeed"),move:this.permLevel("bmove")}}isUnlocked(t){return(Ls[t]??1)<=this.upcomingDay}takeNewUnlocks(){const t=pe.filter(e=>this.isUnlocked(e.id)&&!this.seenUnlocks.includes(e.id)).map(e=>e.id);return this.seenUnlocks.push(...t),t}isValidDeck(t){return t.length===xi&&new Set(t).size===t.length&&t.every(e=>pe.some(n=>n.id===e)&&this.isUnlocked(e))}setDeck(t){return this.phase!=="deck"||!this.isValidDeck(t)?!1:(this.deck=[...t],!0)}beginAtCamp(){this.phase!=="deck"||this.lastResult||this.history.length||(this.phase="camp",this.opening=!0)}openStartDeck(){!this.opening||this.phase!=="camp"||(this.deckFromCamp=!1,this.phase="deck")}get deckOverCamp(){return this.phase==="deck"&&(this.opening||this.deckFromCamp)}cancelDeck(){this.deckOverCamp&&(this.deckFromCamp=!1,this.phase="camp")}confirmDeck(){return this.phase!=="deck"||!this.isValidDeck(this.deck)?!1:(this.deckFromCamp?(this.deckFromCamp=!1,this.phase="camp"):(this.opening=!1,this.startDay()),!0)}get canEditDeck(){const t=this.lastResult;return this.phase==="camp"&&(this.opening||!!t&&(!t.success||t.boss))}get deckEditReason(){return!this.canEditDeck||this.opening?null:this.lastResult.success?"chapter":"fail"}openDeck(){this.canEditDeck&&(this.deckFromCamp=!0,this.phase="deck")}get gridLocked(){return this.phase!=="march"}partStart(t=this.day){return t-(t-1)%Ds}get upcomingDay(){return!this.lastResult||this.phase==="march"?this.day:this.lastResult.retry?this.partStart(this.day):this.day+1}get target(){return lm(this.day)}get startDice(){return nm+sd[Math.min(sd.length-1,$n(this.day))]}get chapter(){return im[$n(this.day)]}record(){const t=this.history,e={victory:this.phase==="victory",stages:t.filter(n=>n.success).length,reached:this.day,kills:t.reduce((n,s)=>n+s.kills,0),summoned:this.summoned,merges:this.game.stats.mergeSuccess,coins:t.reduce((n,s)=>n+s.coins,0),breaches:t.reduce((n,s)=>n+s.breaches,0),time:Math.round(this.totalTime),cards:this.cards.length};return{...e,score:hh(e)}}cardLevelOf(t){return this.cards.includes(t)?Math.max(1,this.blessLv[t]??1):0}hasCard(t){return this.cards.includes(t)}canOfferCard(t){if(this.cards.includes(t.id)&&this.cardLevelOf(t.id)>=uh)return!1;if(t.shop){const e=Dn.find(n=>n.id===t.shop);return t.shop==="grid"&&this.game.grid.w>=_i&&this.game.grid.h>=_i?!1:!!e&&this.itemLevel(e.id)<e.max+rd}return!0}get blessFull(){return this.cards.length>=qi}pickCard(t,e){var s;if(!((s=this.cardOffer)!=null&&s.includes(t))||!ni.get(t))return!1;if(this.cards.includes(t))return this.blessLv[t]=this.cardLevelOf(t)+1,this.cardOffer=null,this.applyBless(t),!0;if(this.blessFull){if(e==null||e<0||e>=this.cards.length)return!1;this.removeCardAt(e)}return this.cards.push(t),this.blessLv[t]=1,this.cardOffer=null,this.applyBless(t),!0}applyBless(t){const e=ni.get(t);if(!e)return;const n=this.game,s=this.cardLevelOf(t);switch(e.shop&&this.applyItem(e.shop),t){case"twin":n.twinChance=.05+.1*s;break;case"carry":n.carry=!0;break;case"legion":n.burstMax=15+5*s,n.legion=!0;break;case"fusion":n.mergeExtra=1+s;break}}skipCard(){this.cardOffer=null}removeCardAt(t){const e=this.cards[t];if(!e)return null;const n=this.cardLevelOf(e);this.cards.splice(t,1),delete this.blessLv[e];const s=ni.get(e),a=this.game;for(let r=0;r<n;r++)s!=null&&s.shop&&this.cardLevel(s.shop)>0&&(this.cardLv[s.shop]=this.cardLevel(s.shop)-1,this.revertEffect(s.shop));if(!this.cards.includes(e))switch(e){case"twin":a.twinChance=0;break;case"carry":a.carry=!1;break;case"legion":a.burstMax=dh,a.legion=!1;break;case"combo":a.streakMax=a.streakMax+1;break;case"longfever":a.feverMs=lc;break;case"fusion":a.mergeExtra=0;break;case"twin":a.twinChance=0;break}return e}startDay(){this.stageSummons=0,this.stageSummonsBy={},this.battle=this.makeBattle(),this.time=0,this.phase="march",this.prep=!0;const t=this.cardLevelOf("rain");this.game.addDice(this.startDice+(t?3+2*t:0)+this.bankedDice+this.itemLevel("prepdice")),this.lastBankUsed=this.bankedDice,this.bankedDice=0,this.bonusCoins=0,this.stageBonusDice=0}get waitingCount(){return this.prep?this.battle.units.filter(t=>t.side==="ally").length:0}launch(){if(this.phase==="march"&&this.prep){this.prep=!1,this.game.feverLocked=!1;const t=this.battle.units.filter(e=>e.side==="ally");if(this.hasCard("march")&&t.length>=5&&(this.battle.rushT=Math.max(this.battle.rushT,1+2*this.cardLevelOf("march"))),this.hasCard("phalanx")){const e=1.2+.2*this.cardLevelOf("phalanx");for(const n of t)n.hp*=e,n.maxHp*=e}this.hasCard("warcry")&&(this.battle.rushT=Math.max(this.battle.rushT,5+3*this.cardLevelOf("warcry")))}}get goalReached(){return this.phase==="march"&&!fn(this.day)&&this.battle.progress>=this.target}canSummon(t){const e=pe.find(n=>n.id===t);return this.phase==="march"&&!this.goalReached&&!!e&&this.deck.includes(t)&&this.game.canSummon(e)}summon(t){if(!this.canSummon(t))return null;const e=this.game.summon(t);return e&&(this.battle.spawnAlly(e.merc,e.golden,this.trainLv),this.summoned++),e}deckDefs(){return this.deck.map(t=>pe.find(e=>e.id===t)).filter(Boolean)}summonAll(t){if(this.summonMode==="single"){const r=this.summon(t);return r?[r]:[]}if(!this.canSummon(t))return[];if(this.summonMode==="one")return this.summonOneMerc(t);const e=this.prep?this.battle.units.filter(r=>r.side==="ally").length:0,n=this.game.grid.findSpot([[0,0]])===null,s=this.hasCard("festival")&&this.game.isFever(),a=this.game.summonBurst(t,this.deckDefs());return a.forEach((r,o)=>{s&&(r.golden=!0);const l=this.battle.spawnAlly(r.merc,r.golden,this.trainLv);if(this.prep){const c=e+o;l.x=this.battle.rear+1.2+c%12*.65+Math.floor(c/12)*.3}else l.x-=o*.9;if(o===0&&this.hasCard("vanguard")){const c=1.5+.5*this.cardLevelOf("vanguard");l.hp*=c,l.maxHp*=c}n&&this.hasCard("full")&&(l.atk*=1+.15+.15*this.cardLevelOf("full")),this.summoned++}),!this.prep&&a.length>=5&&this.hasCard("march")&&(this.battle.rushT=Math.max(this.battle.rushT,1+2*this.cardLevelOf("march"))),a}summonOneMerc(t){const e=this.prep?this.battle.units.filter(o=>o.side==="ally").length:0,n=this.game.grid.findSpot([[0,0]])===null,s=this.game.summonOne(t);if(!s)return[];const a=[s];this.stageSummonsBy[t]=(this.stageSummonsBy[t]??0)+1;const r=this.cardLevelOf("legion");if(r&&this.stageSummonsBy[t]%(5-r)===0){const o={merc:s.merc,golden:!1,spent:0,wasted:0};this.game.army.push(o),a.push(o)}return a.forEach((o,l)=>{const c=this.battle.spawnAlly(o.merc,o.golden,this.trainLv);if(this.prep){const f=e+l;c.x=this.battle.rear+1.2+f%12*.65+Math.floor(f/12)*.3}else c.x-=l*.9;if(this.stageSummons<3&&this.hasCard("vanguard")){const f=1.5+.5*this.cardLevelOf("vanguard");c.hp*=f,c.maxHp*=f}n&&this.hasCard("full")&&(c.atk*=1+.15+.15*this.cardLevelOf("full")),this.stageSummons++,this.summoned++,!this.prep&&this.stageSummons%5===0&&this.hasCard("march")&&(this.battle.rushT=Math.max(this.battle.rushT,1+2*this.cardLevelOf("march")))}),a}previewSummon(t){if(this.summonMode==="one"){const e=pe.find(n=>n.id===t);return e&&this.game.sum()>=e.cost?{list:[e],wasted:0}:{list:[],wasted:0}}if(this.summonMode==="single"){const e=pe.find(s=>s.id===t),n=this.game.sum();return e&&n>=e.cost?{list:[e],wasted:n-e.cost}:{list:[],wasted:n}}return this.game.planBurst(t,this.deckDefs())}pickFeverEffect(){const t=Object.keys(Fn);return t[Math.floor(this.rng()*t.length)]}applyFeverEffect(t){return this.game.feverGain=0,t==="sure"||t==="maxroll"||t==="rush"?(this.feverEffect=t,this.game.startFever(t),[]):(this.feverEffect=null,t==="rain"&&(this.game.unconfirmed+=sm),t==="strike"&&this.phase==="march"&&this.battle.strike(this.strikeDamage()),t==="chain"?this.game.chainMerge():[])}get overshootBonus(){return fn(this.day)?0:Math.max(0,Math.floor((this.battle.progress-this.target)/5))}strikeDamage(){return(60+this.game.sum()*3)*Math.pow(cc,this.day-1)}tick(t){if(this.clockMs+=t*1e3,this.game.finishRoll(),this.feverEffect&&!this.game.isFever()&&(this.feverEffect=null,this.game.feverKind=null,this.feverEnded=!0),this.phase!=="march")return[];if(this.prep)return this.game.feverLocked=!0,[];this.battle.rush=this.feverEffect==="rush",this.game.feverLocked=this.goalReached,this.battle.invincible=this.goalReached,this.time+=t,this.battle.tick(t);const e=this.battle.drainEvents(),n=this.goalReached;for(const s of e){if(s.type==="kill"&&n){const a=this.cardLevelOf("hunter"),r=fh+.1*this.itemLevel("bounty")+(a?.1+.1*a:0);this.stageBonusDice<hm+(a?1+a:0)&&this.rng()<r?(this.bankedDice++,this.stageBonusDice++,s.reward="dice"):(this.bonusCoins+=um,s.reward="coin")}s.type==="loot"&&s.kind==="dice"&&this.game.addDice(pm),s.type==="loot"&&s.kind==="coin"&&(this.coins+=Op)}return(this.battle.bossDead||this.time>=ks)&&this.endDay(),e}collectExp(t){const e=Math.min(t,this.pendingExp);e<=0||(this.pendingExp-=e,this.game.addExp(e))}endDay(){this.game.feverLocked=!1,this.totalTime+=this.time,this.collectExp(this.pendingExp);const t=this.battle,e=fn(this.day),n=e?t.bossDead:t.progress>=this.target,s=e&&n?Math.max(0,Math.floor(ks-this.time)):0,a={base:om,boss:e&&n?rm:0,overshoot:n&&!e?this.overshootBonus:0,time:Math.ceil(s/am),bonus:this.bonusCoins};this.bonusCoins=0;const r=a.base+a.boss+a.overshoot+a.time+a.bonus;this.coins+=r,n||this.flags--,e&&(this.bossHp=null);const o={day:this.day,boss:e,success:n,progress:t.progress,target:this.target,kills:t.kills,breaches:t.breaches,coins:r,flagLost:!n,retry:!n,coinParts:a,timeLeft:s,bankedDice:this.bankedDice,time:Math.round(this.time)};this.lastResult=o,this.history.push(o),this.cardOffer=Jp(this.rng,l=>this.canOfferCard(l),3,e&&n),this.cardOffer.length||(this.cardOffer=null),this.flags<=0?this.phase="over":n&&this.day>=Es?this.phase="victory":this.phase="dusk"}toCamp(){this.phase==="dusk"&&(this.phase="camp")}nextDay(){if(!(this.phase!=="camp"&&this.phase!=="dusk")){if(this.opening)return this.openStartDeck();this.advanceDay()}}advanceDay(){const t=this.lastResult;if(this.partRetry=!!(t!=null&&t.retry),this.day=t!=null&&t.retry?this.partStart(this.day):this.day+1,this.zoneReset=!!t&&(t.boss&&t.success||this.partRetry),this.zoneReset){this.partHistoryFrom=this.history.length;const e=this.game;e.grid.clear(),e.unconfirmed=0,e.pending=null,e.rolling=null,e.held=[],e.bonusPips=0,e.streak=0,this.bankedDice=0}this.startDay()}zoneRecord(t=this.day){const e=t-(t-1)%Ds,n=this.history.slice(this.partHistoryFrom).filter(s=>s.day>=e&&s.day<=t);return{from:e,to:t,stages:new Set(n.filter(s=>s.success).map(s=>s.day)).size,kills:n.reduce((s,a)=>s+a.kills,0),coins:n.reduce((s,a)=>s+a.coins,0),breaches:n.reduce((s,a)=>s+a.breaches,0),time:n.reduce((s,a)=>s+(a.time??0),0),bonusDice:n.reduce((s,a)=>s+(a.bankedDice??0),0)}}itemLevel(t){return this.permLevel(t)+this.cardLevel(t)}permLevel(t){return this.bought[t]??0}cardLevel(t){return this.cardLv[t]??0}meta(){return{coins:this.coins,levels:{...this.bought}}}itemCost(t){return t.baseCost+t.step*this.permLevel(t.id)}canBuy(t){return ad.has(t.id)||this.permLevel(t.id)>=t.max||this.coins<this.itemCost(t)?!1:t.id==="grid"?this.game.grid.w<_i||this.game.grid.h<_i:!0}buy(t){const e=Dn.find(n=>n.id===t);return!e||!this.canBuy(e)?!1:(this.coins-=this.itemCost(e),this.bought[t]=this.permLevel(t)+1,this.applyEffect(t),!0)}applyItem(t){const e=Dn.find(n=>n.id===t);!e||this.itemLevel(t)>=e.max+rd||(this.cardLv[t]=this.cardLevel(t)+1,this.applyEffect(t))}revertEffect(t){const e=this.game;switch(t){case"grid":e.shrinkGrid();break;case"train":this.trainLv=Math.max(0,this.trainLv-1);break;case"floor":e.minPips=Math.max(1,e.minPips-1);break;case"face":e.faceLv=Math.max(0,e.faceLv-1);break;case"compress":e.compressLv=Math.max(0,e.compressLv-1);break;case"forge":e.mergeBonus-=5;break;case"quick":e.quickLv=Math.max(0,e.quickLv-1);break;case"hold":e.holdSlots=Math.max(0,e.holdSlots-1);break;case"lives":this.flags=Math.max(1,this.flags-1);break}}applyEffect(t){const e=this.game;switch(t){case"grid":e.expandGrid();break;case"train":this.trainLv++;break;case"floor":e.minPips++;break;case"face":e.faceLv++;break;case"compress":e.compressLv++;break;case"forge":e.mergeBonus+=5;break;case"quick":e.quickLv++;break;case"hold":e.holdSlots++;break;case"lives":this.flags++;break}}}function mc(i){const t=i.game;if(!t.pending)return!0;let e=t.pending.cells;for(let n=0;n<4;n++){if(t.grid.findSpot(e))return!0;e=pc(e)}return!1}function ph(i){const t=i.game;for(let e=0;e<4;e++){const n=t.grid.findSpot(t.pending.cells);if(n)return t.placePending(n.x,n.y);t.rotatePending()}return!1}function od(i){const t=i.game;let e=null,n=-1/0;for(const s of t.grid.items)for(const a of t.grid.items){if(s===a||t.canMerge(s.die.id,a.die.id)!==null||s.die.pips>a.die.pips)continue;const r=t.mergeChance(a.die.cells.length)*10+s.die.cells.length*5-s.die.pips;r>n&&(n=r,e=[s.die.id,a.die.id])}return e}function Xr(i,t){const e=pe.find(c=>c.id===t),n=Sa[t].traits??{},s=i.battle,a=s.units.filter(c=>c.side==="enemy"),r=s.units.filter(c=>c.side==="ally").length;let o=Math.pow(e.cost,1.3);const l=s.boss&&s.boss.hp>0?s.boss:null;return l&&(l.traits.flying&&!n.air?o*=.35:e.kind==="melee"&&!n.block&&(o*=.6),l.traits.armor&&n.dmg==="magic"&&(o*=1.4)),a.some(c=>c.traits.flying)&&n.air&&(o*=1.2),a.some(c=>c.traits.armor)&&n.dmg==="magic"&&(o*=1.3),e.kind==="support"&&r<2&&(o*=.4),n.bomb&&a.length<3&&(o*=.5),o}function ld(i){var M,x;const t=i.game,e=t.sum(),n=i.deck.map(v=>pe.find(R=>R.id===v)).sort((v,R)=>v.cost-R.cost),s=n.filter(v=>e>=v.cost&&i.canSummon(v.id));if(s.length===0)return null;const a=[...s].sort((v,R)=>Xr(i,R.id)-Xr(i,v.id))[0],r=i.battle,o=r.units.filter(v=>v.side==="ally").length,l=r.units.filter(v=>v.side==="enemy"&&v.x-r.rear<7).length,c=t.grid.findSpot([[0,0]])===null,f=ks-i.time,d=n[n.length-1],h=n[Math.min(1,n.length-1)].cost;if(l>=2&&o===0||c||f<12||e>=d.cost)return a.id;if(e<h)return null;const u=r.units.filter(v=>v.side==="enemy"),g=v=>n.find(R=>v(R.id)),_=[[u.some(v=>v.traits.armor)||!!((M=r.boss)!=null&&M.traits.armor),g(v=>{var R;return((R=Sa[v].traits)==null?void 0:R.dmg)==="magic"})],[u.some(v=>v.traits.flying)||!!((x=r.boss)!=null&&x.traits.flying),g(v=>{var R;return!!((R=Sa[v].traits)!=null&&R.air)})]],m=o>=2&&l<2;for(const[v,R]of _)if(!(!v||!R)){if(e>=R.cost&&i.canSummon(R.id))return R.id;if(m)return null}if(o<4||l>=2)return a.id;const p=n[Math.min(2,n.length-1)].cost;return e>=p?a.id:null}function gm(i,t={}){var s;if(i.phase!=="march")return{type:"idle"};const e=i.game;if(e.pending){if(ph(i))return{type:"place"};const a=od(i);if(a){if(t.merge)return t.merge(a[0],a[1]),{type:"merge-ui",materialId:a[0],targetId:a[1]};const r=e.merge(a[0],a[1]);if(r.ok)return r.feverTriggered&&i.applyFeverEffect("chain"),{type:"merge",result:r}}return e.discardPending(),{type:"discard"}}if(i.prep){if(e.held.length&&e.takeHeld(0))return{type:"take"};if(e.unconfirmed>0&&e.roll())return{type:"roll"};if(e.rolling)return{type:"idle"};const a=i.deck.map(o=>pe.find(l=>l.id===o)).filter(o=>i.canSummon(o.id)),r=ld(i)??((s=[...a].sort((o,l)=>Xr(i,l.id)-Xr(i,o.id))[0])==null?void 0:s.id);if(r){const o=i.summonAll(r);if(o.length)return{type:"summon",summoned:o[0],all:o}}return i.launch(),{type:"launch"}}const n=ld(i);if(n){const a=i.summonAll(n);if(a.length)return{type:"summon",summoned:a[0],all:a}}if(i.goalReached){const a=od(i);if(a){if(t.merge)return t.merge(a[0],a[1]),{type:"merge-ui",materialId:a[0],targetId:a[1]};const r=e.merge(a[0],a[1]);if(r.ok)return r.feverTriggered&&i.applyFeverEffect("chain"),{type:"merge",result:r}}}return e.held.length&&e.takeHeld(0)?{type:"take"}:e.unconfirmed>0&&e.roll()?{type:"roll"}:{type:"idle"}}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const gc="170",vm=0,cd=1,_m=2,mh=1,xm=2,jn=3,Ai=0,qe=1,Jn=2,Si=0,Ts=1,dd=2,fd=3,hd=4,bm=5,Gi=100,ym=101,Mm=102,Sm=103,Em=104,Tm=200,wm=201,Am=202,Rm=203,fl=204,hl=205,Cm=206,Pm=207,Lm=208,Dm=209,Im=210,km=211,Um=212,Nm=213,Fm=214,ul=0,pl=1,ml=2,Us=3,gl=4,vl=5,_l=6,xl=7,gh=0,Om=1,Bm=2,Ei=0,$m=1,zm=2,Hm=3,Gm=4,Vm=5,Wm=6,Xm=7,vh=300,Ns=301,Fs=302,bl=303,yl=304,co=306,Ml=1e3,Wi=1001,Sl=1002,Sn=1003,qm=1004,Ya=1005,In=1006,So=1007,Xi=1008,oi=1009,_h=1010,xh=1011,Aa=1012,vc=1013,Ki=1014,Qn=1015,Da=1016,_c=1017,xc=1018,Os=1020,bh=35902,yh=1021,Mh=1022,yn=1023,Sh=1024,Eh=1025,ws=1026,Bs=1027,Th=1028,bc=1029,wh=1030,yc=1031,Mc=1033,Ar=33776,Rr=33777,Cr=33778,Pr=33779,El=35840,Tl=35841,wl=35842,Al=35843,Rl=36196,Cl=37492,Pl=37496,Ll=37808,Dl=37809,Il=37810,kl=37811,Ul=37812,Nl=37813,Fl=37814,Ol=37815,Bl=37816,$l=37817,zl=37818,Hl=37819,Gl=37820,Vl=37821,Lr=36492,Wl=36494,Xl=36495,Ah=36283,ql=36284,Yl=36285,jl=36286,Ym=3200,jm=3201,Rh=0,Km=1,vi="",cn="srgb",Ws="srgb-linear",fo="linear",re="srgb",is=7680,ud=519,Zm=512,Jm=513,Qm=514,Ch=515,t0=516,e0=517,n0=518,i0=519,pd=35044,md="300 es",ti=2e3,qr=2001;class Xs{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const a=s.indexOf(e);a!==-1&&s.splice(a,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let a=0,r=s.length;a<r;a++)s[a].call(this,t);t.target=null}}}const Ue=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Dr=Math.PI/180,Kl=180/Math.PI;function Ia(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ue[i&255]+Ue[i>>8&255]+Ue[i>>16&255]+Ue[i>>24&255]+"-"+Ue[t&255]+Ue[t>>8&255]+"-"+Ue[t>>16&15|64]+Ue[t>>24&255]+"-"+Ue[e&63|128]+Ue[e>>8&255]+"-"+Ue[e>>16&255]+Ue[e>>24&255]+Ue[n&255]+Ue[n>>8&255]+Ue[n>>16&255]+Ue[n>>24&255]).toLowerCase()}function Xe(i,t,e){return Math.max(t,Math.min(e,i))}function s0(i,t){return(i%t+t)%t}function Eo(i,t,e){return(1-e)*i+e*t}function ia(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Ve(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class Kt{constructor(t=0,e=0){Kt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Xe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),a=this.x-t.x,r=this.y-t.y;return this.x=a*n-r*s+t.x,this.y=a*s+r*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ft{constructor(t,e,n,s,a,r,o,l,c){Ft.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,a,r,o,l,c)}set(t,e,n,s,a,r,o,l,c){const f=this.elements;return f[0]=t,f[1]=s,f[2]=o,f[3]=e,f[4]=a,f[5]=l,f[6]=n,f[7]=r,f[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,a=this.elements,r=n[0],o=n[3],l=n[6],c=n[1],f=n[4],d=n[7],h=n[2],u=n[5],g=n[8],_=s[0],m=s[3],p=s[6],M=s[1],x=s[4],v=s[7],R=s[2],w=s[5],C=s[8];return a[0]=r*_+o*M+l*R,a[3]=r*m+o*x+l*w,a[6]=r*p+o*v+l*C,a[1]=c*_+f*M+d*R,a[4]=c*m+f*x+d*w,a[7]=c*p+f*v+d*C,a[2]=h*_+u*M+g*R,a[5]=h*m+u*x+g*w,a[8]=h*p+u*v+g*C,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],a=t[3],r=t[4],o=t[5],l=t[6],c=t[7],f=t[8];return e*r*f-e*o*c-n*a*f+n*o*l+s*a*c-s*r*l}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],a=t[3],r=t[4],o=t[5],l=t[6],c=t[7],f=t[8],d=f*r-o*c,h=o*l-f*a,u=c*a-r*l,g=e*d+n*h+s*u;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=d*_,t[1]=(s*c-f*n)*_,t[2]=(o*n-s*r)*_,t[3]=h*_,t[4]=(f*e-s*l)*_,t[5]=(s*a-o*e)*_,t[6]=u*_,t[7]=(n*l-c*e)*_,t[8]=(r*e-n*a)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,a,r,o){const l=Math.cos(a),c=Math.sin(a);return this.set(n*l,n*c,-n*(l*r+c*o)+r+t,-s*c,s*l,-s*(-c*r+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(To.makeScale(t,e)),this}rotate(t){return this.premultiply(To.makeRotation(-t)),this}translate(t,e){return this.premultiply(To.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const To=new Ft;function Ph(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Yr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function a0(){const i=Yr("canvas");return i.style.display="block",i}const gd={};function ua(i){i in gd||(gd[i]=!0,console.warn(i))}function r0(i,t,e){return new Promise(function(n,s){function a(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(a,e);break;default:n()}}setTimeout(a,e)})}function o0(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function l0(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const jt={enabled:!0,workingColorSpace:Ws,spaces:{},convert:function(i,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===re&&(i.r=ii(i.r),i.g=ii(i.g),i.b=ii(i.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(i.applyMatrix3(this.spaces[t].toXYZ),i.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===re&&(i.r=As(i.r),i.g=As(i.g),i.b=As(i.b))),i},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===vi?fo:this.spaces[i].transfer},getLuminanceCoefficients:function(i,t=this.workingColorSpace){return i.fromArray(this.spaces[t].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,t,e){return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function ii(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function As(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const vd=[.64,.33,.3,.6,.15,.06],_d=[.2126,.7152,.0722],xd=[.3127,.329],bd=new Ft().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),yd=new Ft().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);jt.define({[Ws]:{primaries:vd,whitePoint:xd,transfer:fo,toXYZ:bd,fromXYZ:yd,luminanceCoefficients:_d,workingColorSpaceConfig:{unpackColorSpace:cn},outputColorSpaceConfig:{drawingBufferColorSpace:cn}},[cn]:{primaries:vd,whitePoint:xd,transfer:re,toXYZ:bd,fromXYZ:yd,luminanceCoefficients:_d,outputColorSpaceConfig:{drawingBufferColorSpace:cn}}});let ss;class c0{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{ss===void 0&&(ss=Yr("canvas")),ss.width=t.width,ss.height=t.height;const n=ss.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=ss}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Yr("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),a=s.data;for(let r=0;r<a.length;r++)a[r]=ii(a[r]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(ii(e[n]/255)*255):e[n]=ii(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let d0=0;class Lh{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:d0++}),this.uuid=Ia(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let a;if(Array.isArray(s)){a=[];for(let r=0,o=s.length;r<o;r++)s[r].isDataTexture?a.push(wo(s[r].image)):a.push(wo(s[r]))}else a=wo(s);n.url=a}return e||(t.images[this.uuid]=n),n}}function wo(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?c0.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let f0=0;class He extends Xs{constructor(t=He.DEFAULT_IMAGE,e=He.DEFAULT_MAPPING,n=Wi,s=Wi,a=In,r=Xi,o=yn,l=oi,c=He.DEFAULT_ANISOTROPY,f=vi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:f0++}),this.uuid=Ia(),this.name="",this.source=new Lh(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=a,this.minFilter=r,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Kt(0,0),this.repeat=new Kt(1,1),this.center=new Kt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ft,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=f,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==vh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ml:t.x=t.x-Math.floor(t.x);break;case Wi:t.x=t.x<0?0:1;break;case Sl:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ml:t.y=t.y-Math.floor(t.y);break;case Wi:t.y=t.y<0?0:1;break;case Sl:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}He.DEFAULT_IMAGE=null;He.DEFAULT_MAPPING=vh;He.DEFAULT_ANISOTROPY=1;class Se{constructor(t=0,e=0,n=0,s=1){Se.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,a=this.w,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s+r[12]*a,this.y=r[1]*e+r[5]*n+r[9]*s+r[13]*a,this.z=r[2]*e+r[6]*n+r[10]*s+r[14]*a,this.w=r[3]*e+r[7]*n+r[11]*s+r[15]*a,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,a;const l=t.elements,c=l[0],f=l[4],d=l[8],h=l[1],u=l[5],g=l[9],_=l[2],m=l[6],p=l[10];if(Math.abs(f-h)<.01&&Math.abs(d-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(f+h)<.1&&Math.abs(d+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+u+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const x=(c+1)/2,v=(u+1)/2,R=(p+1)/2,w=(f+h)/4,C=(d+_)/4,P=(g+m)/4;return x>v&&x>R?x<.01?(n=0,s=.707106781,a=.707106781):(n=Math.sqrt(x),s=w/n,a=C/n):v>R?v<.01?(n=.707106781,s=0,a=.707106781):(s=Math.sqrt(v),n=w/s,a=P/s):R<.01?(n=.707106781,s=.707106781,a=0):(a=Math.sqrt(R),n=C/a,s=P/a),this.set(n,s,a,e),this}let M=Math.sqrt((m-g)*(m-g)+(d-_)*(d-_)+(h-f)*(h-f));return Math.abs(M)<.001&&(M=1),this.x=(m-g)/M,this.y=(d-_)/M,this.z=(h-f)/M,this.w=Math.acos((c+u+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class h0 extends Xs{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Se(0,0,t,e),this.scissorTest=!1,this.viewport=new Se(0,0,t,e);const s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:In,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const a=new He(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);a.flipY=!1,a.generateMipmaps=n.generateMipmaps,a.internalFormat=n.internalFormat,this.textures=[];const r=n.count;for(let o=0;o<r;o++)this.textures[o]=a.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,a=this.textures.length;s<a;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Lh(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Zi extends h0{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Dh extends He{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Sn,this.minFilter=Sn,this.wrapR=Wi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class u0 extends He{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Sn,this.minFilter=Sn,this.wrapR=Wi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class On{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,a,r,o){let l=n[s+0],c=n[s+1],f=n[s+2],d=n[s+3];const h=a[r+0],u=a[r+1],g=a[r+2],_=a[r+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=f,t[e+3]=d;return}if(o===1){t[e+0]=h,t[e+1]=u,t[e+2]=g,t[e+3]=_;return}if(d!==_||l!==h||c!==u||f!==g){let m=1-o;const p=l*h+c*u+f*g+d*_,M=p>=0?1:-1,x=1-p*p;if(x>Number.EPSILON){const R=Math.sqrt(x),w=Math.atan2(R,p*M);m=Math.sin(m*w)/R,o=Math.sin(o*w)/R}const v=o*M;if(l=l*m+h*v,c=c*m+u*v,f=f*m+g*v,d=d*m+_*v,m===1-o){const R=1/Math.sqrt(l*l+c*c+f*f+d*d);l*=R,c*=R,f*=R,d*=R}}t[e]=l,t[e+1]=c,t[e+2]=f,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,s,a,r){const o=n[s],l=n[s+1],c=n[s+2],f=n[s+3],d=a[r],h=a[r+1],u=a[r+2],g=a[r+3];return t[e]=o*g+f*d+l*u-c*h,t[e+1]=l*g+f*h+c*d-o*u,t[e+2]=c*g+f*u+o*h-l*d,t[e+3]=f*g-o*d-l*h-c*u,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,a=t._z,r=t._order,o=Math.cos,l=Math.sin,c=o(n/2),f=o(s/2),d=o(a/2),h=l(n/2),u=l(s/2),g=l(a/2);switch(r){case"XYZ":this._x=h*f*d+c*u*g,this._y=c*u*d-h*f*g,this._z=c*f*g+h*u*d,this._w=c*f*d-h*u*g;break;case"YXZ":this._x=h*f*d+c*u*g,this._y=c*u*d-h*f*g,this._z=c*f*g-h*u*d,this._w=c*f*d+h*u*g;break;case"ZXY":this._x=h*f*d-c*u*g,this._y=c*u*d+h*f*g,this._z=c*f*g+h*u*d,this._w=c*f*d-h*u*g;break;case"ZYX":this._x=h*f*d-c*u*g,this._y=c*u*d+h*f*g,this._z=c*f*g-h*u*d,this._w=c*f*d+h*u*g;break;case"YZX":this._x=h*f*d+c*u*g,this._y=c*u*d+h*f*g,this._z=c*f*g-h*u*d,this._w=c*f*d-h*u*g;break;case"XZY":this._x=h*f*d-c*u*g,this._y=c*u*d-h*f*g,this._z=c*f*g+h*u*d,this._w=c*f*d+h*u*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+r)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],a=e[8],r=e[1],o=e[5],l=e[9],c=e[2],f=e[6],d=e[10],h=n+o+d;if(h>0){const u=.5/Math.sqrt(h+1);this._w=.25/u,this._x=(f-l)*u,this._y=(a-c)*u,this._z=(r-s)*u}else if(n>o&&n>d){const u=2*Math.sqrt(1+n-o-d);this._w=(f-l)/u,this._x=.25*u,this._y=(s+r)/u,this._z=(a+c)/u}else if(o>d){const u=2*Math.sqrt(1+o-n-d);this._w=(a-c)/u,this._x=(s+r)/u,this._y=.25*u,this._z=(l+f)/u}else{const u=2*Math.sqrt(1+d-n-o);this._w=(r-s)/u,this._x=(a+c)/u,this._y=(l+f)/u,this._z=.25*u}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Xe(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,a=t._z,r=t._w,o=e._x,l=e._y,c=e._z,f=e._w;return this._x=n*f+r*o+s*c-a*l,this._y=s*f+r*l+a*o-n*c,this._z=a*f+r*c+n*l-s*o,this._w=r*f-n*o-s*l-a*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,a=this._z,r=this._w;let o=r*t._w+n*t._x+s*t._y+a*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=r,this._x=n,this._y=s,this._z=a,this;const l=1-o*o;if(l<=Number.EPSILON){const u=1-e;return this._w=u*r+e*this._w,this._x=u*n+e*this._x,this._y=u*s+e*this._y,this._z=u*a+e*this._z,this.normalize(),this}const c=Math.sqrt(l),f=Math.atan2(c,o),d=Math.sin((1-e)*f)/c,h=Math.sin(e*f)/c;return this._w=r*d+this._w*h,this._x=n*d+this._x*h,this._y=s*d+this._y*h,this._z=a*d+this._z*h,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),a=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),a*Math.sin(e),a*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class F{constructor(t=0,e=0,n=0){F.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Md.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Md.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,a=t.elements;return this.x=a[0]*e+a[3]*n+a[6]*s,this.y=a[1]*e+a[4]*n+a[7]*s,this.z=a[2]*e+a[5]*n+a[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,a=t.elements,r=1/(a[3]*e+a[7]*n+a[11]*s+a[15]);return this.x=(a[0]*e+a[4]*n+a[8]*s+a[12])*r,this.y=(a[1]*e+a[5]*n+a[9]*s+a[13])*r,this.z=(a[2]*e+a[6]*n+a[10]*s+a[14])*r,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,a=t.x,r=t.y,o=t.z,l=t.w,c=2*(r*s-o*n),f=2*(o*e-a*s),d=2*(a*n-r*e);return this.x=e+l*c+r*d-o*f,this.y=n+l*f+o*c-a*d,this.z=s+l*d+a*f-r*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s,this.y=a[1]*e+a[5]*n+a[9]*s,this.z=a[2]*e+a[6]*n+a[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,a=t.z,r=e.x,o=e.y,l=e.z;return this.x=s*l-a*o,this.y=a*r-n*l,this.z=n*o-s*r,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Ao.copy(this).projectOnVector(t),this.sub(Ao)}reflect(t){return this.sub(Ao.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Xe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ao=new F,Md=new On;class ka{constructor(t=new F(1/0,1/0,1/0),e=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(gn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(gn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=gn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const a=n.getAttribute("position");if(e===!0&&a!==void 0&&t.isInstancedMesh!==!0)for(let r=0,o=a.count;r<o;r++)t.isMesh===!0?t.getVertexPosition(r,gn):gn.fromBufferAttribute(a,r),gn.applyMatrix4(t.matrixWorld),this.expandByPoint(gn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ja.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ja.copy(n.boundingBox)),ja.applyMatrix4(t.matrixWorld),this.union(ja)}const s=t.children;for(let a=0,r=s.length;a<r;a++)this.expandByObject(s[a],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,gn),gn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(sa),Ka.subVectors(this.max,sa),as.subVectors(t.a,sa),rs.subVectors(t.b,sa),os.subVectors(t.c,sa),di.subVectors(rs,as),fi.subVectors(os,rs),ki.subVectors(as,os);let e=[0,-di.z,di.y,0,-fi.z,fi.y,0,-ki.z,ki.y,di.z,0,-di.x,fi.z,0,-fi.x,ki.z,0,-ki.x,-di.y,di.x,0,-fi.y,fi.x,0,-ki.y,ki.x,0];return!Ro(e,as,rs,os,Ka)||(e=[1,0,0,0,1,0,0,0,1],!Ro(e,as,rs,os,Ka))?!1:(Za.crossVectors(di,fi),e=[Za.x,Za.y,Za.z],Ro(e,as,rs,os,Ka))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,gn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(gn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Vn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Vn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Vn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Vn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Vn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Vn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Vn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Vn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Vn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Vn=[new F,new F,new F,new F,new F,new F,new F,new F],gn=new F,ja=new ka,as=new F,rs=new F,os=new F,di=new F,fi=new F,ki=new F,sa=new F,Ka=new F,Za=new F,Ui=new F;function Ro(i,t,e,n,s){for(let a=0,r=i.length-3;a<=r;a+=3){Ui.fromArray(i,a);const o=s.x*Math.abs(Ui.x)+s.y*Math.abs(Ui.y)+s.z*Math.abs(Ui.z),l=t.dot(Ui),c=e.dot(Ui),f=n.dot(Ui);if(Math.max(-Math.max(l,c,f),Math.min(l,c,f))>o)return!1}return!0}const p0=new ka,aa=new F,Co=new F;class ho{constructor(t=new F,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):p0.setFromPoints(t).getCenter(n);let s=0;for(let a=0,r=t.length;a<r;a++)s=Math.max(s,n.distanceToSquared(t[a]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;aa.subVectors(t,this.center);const e=aa.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(aa,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Co.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(aa.copy(t.center).add(Co)),this.expandByPoint(aa.copy(t.center).sub(Co))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Wn=new F,Po=new F,Ja=new F,hi=new F,Lo=new F,Qa=new F,Do=new F;class Ih{constructor(t=new F,e=new F(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Wn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Wn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Wn.copy(this.origin).addScaledVector(this.direction,e),Wn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Po.copy(t).add(e).multiplyScalar(.5),Ja.copy(e).sub(t).normalize(),hi.copy(this.origin).sub(Po);const a=t.distanceTo(e)*.5,r=-this.direction.dot(Ja),o=hi.dot(this.direction),l=-hi.dot(Ja),c=hi.lengthSq(),f=Math.abs(1-r*r);let d,h,u,g;if(f>0)if(d=r*l-o,h=r*o-l,g=a*f,d>=0)if(h>=-g)if(h<=g){const _=1/f;d*=_,h*=_,u=d*(d+r*h+2*o)+h*(r*d+h+2*l)+c}else h=a,d=Math.max(0,-(r*h+o)),u=-d*d+h*(h+2*l)+c;else h=-a,d=Math.max(0,-(r*h+o)),u=-d*d+h*(h+2*l)+c;else h<=-g?(d=Math.max(0,-(-r*a+o)),h=d>0?-a:Math.min(Math.max(-a,-l),a),u=-d*d+h*(h+2*l)+c):h<=g?(d=0,h=Math.min(Math.max(-a,-l),a),u=h*(h+2*l)+c):(d=Math.max(0,-(r*a+o)),h=d>0?a:Math.min(Math.max(-a,-l),a),u=-d*d+h*(h+2*l)+c);else h=r>0?-a:a,d=Math.max(0,-(r*h+o)),u=-d*d+h*(h+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(Po).addScaledVector(Ja,h),u}intersectSphere(t,e){Wn.subVectors(t.center,this.origin);const n=Wn.dot(this.direction),s=Wn.dot(Wn)-n*n,a=t.radius*t.radius;if(s>a)return null;const r=Math.sqrt(a-s),o=n-r,l=n+r;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,a,r,o,l;const c=1/this.direction.x,f=1/this.direction.y,d=1/this.direction.z,h=this.origin;return c>=0?(n=(t.min.x-h.x)*c,s=(t.max.x-h.x)*c):(n=(t.max.x-h.x)*c,s=(t.min.x-h.x)*c),f>=0?(a=(t.min.y-h.y)*f,r=(t.max.y-h.y)*f):(a=(t.max.y-h.y)*f,r=(t.min.y-h.y)*f),n>r||a>s||((a>n||isNaN(n))&&(n=a),(r<s||isNaN(s))&&(s=r),d>=0?(o=(t.min.z-h.z)*d,l=(t.max.z-h.z)*d):(o=(t.max.z-h.z)*d,l=(t.min.z-h.z)*d),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Wn)!==null}intersectTriangle(t,e,n,s,a){Lo.subVectors(e,t),Qa.subVectors(n,t),Do.crossVectors(Lo,Qa);let r=this.direction.dot(Do),o;if(r>0){if(s)return null;o=1}else if(r<0)o=-1,r=-r;else return null;hi.subVectors(this.origin,t);const l=o*this.direction.dot(Qa.crossVectors(hi,Qa));if(l<0)return null;const c=o*this.direction.dot(Lo.cross(hi));if(c<0||l+c>r)return null;const f=-o*hi.dot(Do);return f<0?null:this.at(f/r,a)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class be{constructor(t,e,n,s,a,r,o,l,c,f,d,h,u,g,_,m){be.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,a,r,o,l,c,f,d,h,u,g,_,m)}set(t,e,n,s,a,r,o,l,c,f,d,h,u,g,_,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=a,p[5]=r,p[9]=o,p[13]=l,p[2]=c,p[6]=f,p[10]=d,p[14]=h,p[3]=u,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new be().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/ls.setFromMatrixColumn(t,0).length(),a=1/ls.setFromMatrixColumn(t,1).length(),r=1/ls.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*a,e[5]=n[5]*a,e[6]=n[6]*a,e[7]=0,e[8]=n[8]*r,e[9]=n[9]*r,e[10]=n[10]*r,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,a=t.z,r=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),f=Math.cos(a),d=Math.sin(a);if(t.order==="XYZ"){const h=r*f,u=r*d,g=o*f,_=o*d;e[0]=l*f,e[4]=-l*d,e[8]=c,e[1]=u+g*c,e[5]=h-_*c,e[9]=-o*l,e[2]=_-h*c,e[6]=g+u*c,e[10]=r*l}else if(t.order==="YXZ"){const h=l*f,u=l*d,g=c*f,_=c*d;e[0]=h+_*o,e[4]=g*o-u,e[8]=r*c,e[1]=r*d,e[5]=r*f,e[9]=-o,e[2]=u*o-g,e[6]=_+h*o,e[10]=r*l}else if(t.order==="ZXY"){const h=l*f,u=l*d,g=c*f,_=c*d;e[0]=h-_*o,e[4]=-r*d,e[8]=g+u*o,e[1]=u+g*o,e[5]=r*f,e[9]=_-h*o,e[2]=-r*c,e[6]=o,e[10]=r*l}else if(t.order==="ZYX"){const h=r*f,u=r*d,g=o*f,_=o*d;e[0]=l*f,e[4]=g*c-u,e[8]=h*c+_,e[1]=l*d,e[5]=_*c+h,e[9]=u*c-g,e[2]=-c,e[6]=o*l,e[10]=r*l}else if(t.order==="YZX"){const h=r*l,u=r*c,g=o*l,_=o*c;e[0]=l*f,e[4]=_-h*d,e[8]=g*d+u,e[1]=d,e[5]=r*f,e[9]=-o*f,e[2]=-c*f,e[6]=u*d+g,e[10]=h-_*d}else if(t.order==="XZY"){const h=r*l,u=r*c,g=o*l,_=o*c;e[0]=l*f,e[4]=-d,e[8]=c*f,e[1]=h*d+_,e[5]=r*f,e[9]=u*d-g,e[2]=g*d-u,e[6]=o*f,e[10]=_*d+h}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(m0,t,g0)}lookAt(t,e,n){const s=this.elements;return je.subVectors(t,e),je.lengthSq()===0&&(je.z=1),je.normalize(),ui.crossVectors(n,je),ui.lengthSq()===0&&(Math.abs(n.z)===1?je.x+=1e-4:je.z+=1e-4,je.normalize(),ui.crossVectors(n,je)),ui.normalize(),tr.crossVectors(je,ui),s[0]=ui.x,s[4]=tr.x,s[8]=je.x,s[1]=ui.y,s[5]=tr.y,s[9]=je.y,s[2]=ui.z,s[6]=tr.z,s[10]=je.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,a=this.elements,r=n[0],o=n[4],l=n[8],c=n[12],f=n[1],d=n[5],h=n[9],u=n[13],g=n[2],_=n[6],m=n[10],p=n[14],M=n[3],x=n[7],v=n[11],R=n[15],w=s[0],C=s[4],P=s[8],E=s[12],y=s[1],L=s[5],X=s[9],D=s[13],z=s[2],K=s[6],H=s[10],et=s[14],G=s[3],rt=s[7],ut=s[11],St=s[15];return a[0]=r*w+o*y+l*z+c*G,a[4]=r*C+o*L+l*K+c*rt,a[8]=r*P+o*X+l*H+c*ut,a[12]=r*E+o*D+l*et+c*St,a[1]=f*w+d*y+h*z+u*G,a[5]=f*C+d*L+h*K+u*rt,a[9]=f*P+d*X+h*H+u*ut,a[13]=f*E+d*D+h*et+u*St,a[2]=g*w+_*y+m*z+p*G,a[6]=g*C+_*L+m*K+p*rt,a[10]=g*P+_*X+m*H+p*ut,a[14]=g*E+_*D+m*et+p*St,a[3]=M*w+x*y+v*z+R*G,a[7]=M*C+x*L+v*K+R*rt,a[11]=M*P+x*X+v*H+R*ut,a[15]=M*E+x*D+v*et+R*St,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],a=t[12],r=t[1],o=t[5],l=t[9],c=t[13],f=t[2],d=t[6],h=t[10],u=t[14],g=t[3],_=t[7],m=t[11],p=t[15];return g*(+a*l*d-s*c*d-a*o*h+n*c*h+s*o*u-n*l*u)+_*(+e*l*u-e*c*h+a*r*h-s*r*u+s*c*f-a*l*f)+m*(+e*c*d-e*o*u-a*r*d+n*r*u+a*o*f-n*c*f)+p*(-s*o*f-e*l*d+e*o*h+s*r*d-n*r*h+n*l*f)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],a=t[3],r=t[4],o=t[5],l=t[6],c=t[7],f=t[8],d=t[9],h=t[10],u=t[11],g=t[12],_=t[13],m=t[14],p=t[15],M=d*m*c-_*h*c+_*l*u-o*m*u-d*l*p+o*h*p,x=g*h*c-f*m*c-g*l*u+r*m*u+f*l*p-r*h*p,v=f*_*c-g*d*c+g*o*u-r*_*u-f*o*p+r*d*p,R=g*d*l-f*_*l-g*o*h+r*_*h+f*o*m-r*d*m,w=e*M+n*x+s*v+a*R;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/w;return t[0]=M*C,t[1]=(_*h*a-d*m*a-_*s*u+n*m*u+d*s*p-n*h*p)*C,t[2]=(o*m*a-_*l*a+_*s*c-n*m*c-o*s*p+n*l*p)*C,t[3]=(d*l*a-o*h*a-d*s*c+n*h*c+o*s*u-n*l*u)*C,t[4]=x*C,t[5]=(f*m*a-g*h*a+g*s*u-e*m*u-f*s*p+e*h*p)*C,t[6]=(g*l*a-r*m*a-g*s*c+e*m*c+r*s*p-e*l*p)*C,t[7]=(r*h*a-f*l*a+f*s*c-e*h*c-r*s*u+e*l*u)*C,t[8]=v*C,t[9]=(g*d*a-f*_*a-g*n*u+e*_*u+f*n*p-e*d*p)*C,t[10]=(r*_*a-g*o*a+g*n*c-e*_*c-r*n*p+e*o*p)*C,t[11]=(f*o*a-r*d*a-f*n*c+e*d*c+r*n*u-e*o*u)*C,t[12]=R*C,t[13]=(f*_*s-g*d*s+g*n*h-e*_*h-f*n*m+e*d*m)*C,t[14]=(g*o*s-r*_*s-g*n*l+e*_*l+r*n*m-e*o*m)*C,t[15]=(r*d*s-f*o*s+f*n*l-e*d*l-r*n*h+e*o*h)*C,this}scale(t){const e=this.elements,n=t.x,s=t.y,a=t.z;return e[0]*=n,e[4]*=s,e[8]*=a,e[1]*=n,e[5]*=s,e[9]*=a,e[2]*=n,e[6]*=s,e[10]*=a,e[3]*=n,e[7]*=s,e[11]*=a,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),a=1-n,r=t.x,o=t.y,l=t.z,c=a*r,f=a*o;return this.set(c*r+n,c*o-s*l,c*l+s*o,0,c*o+s*l,f*o+n,f*l-s*r,0,c*l-s*o,f*l+s*r,a*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,a,r){return this.set(1,n,a,0,t,1,r,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,a=e._x,r=e._y,o=e._z,l=e._w,c=a+a,f=r+r,d=o+o,h=a*c,u=a*f,g=a*d,_=r*f,m=r*d,p=o*d,M=l*c,x=l*f,v=l*d,R=n.x,w=n.y,C=n.z;return s[0]=(1-(_+p))*R,s[1]=(u+v)*R,s[2]=(g-x)*R,s[3]=0,s[4]=(u-v)*w,s[5]=(1-(h+p))*w,s[6]=(m+M)*w,s[7]=0,s[8]=(g+x)*C,s[9]=(m-M)*C,s[10]=(1-(h+_))*C,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let a=ls.set(s[0],s[1],s[2]).length();const r=ls.set(s[4],s[5],s[6]).length(),o=ls.set(s[8],s[9],s[10]).length();this.determinant()<0&&(a=-a),t.x=s[12],t.y=s[13],t.z=s[14],vn.copy(this);const c=1/a,f=1/r,d=1/o;return vn.elements[0]*=c,vn.elements[1]*=c,vn.elements[2]*=c,vn.elements[4]*=f,vn.elements[5]*=f,vn.elements[6]*=f,vn.elements[8]*=d,vn.elements[9]*=d,vn.elements[10]*=d,e.setFromRotationMatrix(vn),n.x=a,n.y=r,n.z=o,this}makePerspective(t,e,n,s,a,r,o=ti){const l=this.elements,c=2*a/(e-t),f=2*a/(n-s),d=(e+t)/(e-t),h=(n+s)/(n-s);let u,g;if(o===ti)u=-(r+a)/(r-a),g=-2*r*a/(r-a);else if(o===qr)u=-r/(r-a),g=-r*a/(r-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=f,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=u,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,a,r,o=ti){const l=this.elements,c=1/(e-t),f=1/(n-s),d=1/(r-a),h=(e+t)*c,u=(n+s)*f;let g,_;if(o===ti)g=(r+a)*d,_=-2*d;else if(o===qr)g=a*d,_=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*f,l[9]=0,l[13]=-u,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const ls=new F,vn=new be,m0=new F(0,0,0),g0=new F(1,1,1),ui=new F,tr=new F,je=new F,Sd=new be,Ed=new On;class Tn{constructor(t=0,e=0,n=0,s=Tn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,a=s[0],r=s[4],o=s[8],l=s[1],c=s[5],f=s[9],d=s[2],h=s[6],u=s[10];switch(e){case"XYZ":this._y=Math.asin(Xe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-f,u),this._z=Math.atan2(-r,a)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Xe(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(o,u),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,a),this._z=0);break;case"ZXY":this._x=Math.asin(Xe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,u),this._z=Math.atan2(-r,c)):(this._y=0,this._z=Math.atan2(l,a));break;case"ZYX":this._y=Math.asin(-Xe(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,u),this._z=Math.atan2(l,a)):(this._x=0,this._z=Math.atan2(-r,c));break;case"YZX":this._z=Math.asin(Xe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-f,c),this._y=Math.atan2(-d,a)):(this._x=0,this._y=Math.atan2(o,u));break;case"XZY":this._z=Math.asin(-Xe(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,a)):(this._x=Math.atan2(-f,u),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Sd.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Sd,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Ed.setFromEuler(this),this.setFromQuaternion(Ed,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Tn.DEFAULT_ORDER="XYZ";class kh{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let v0=0;const Td=new F,cs=new On,Xn=new be,er=new F,ra=new F,_0=new F,x0=new On,wd=new F(1,0,0),Ad=new F(0,1,0),Rd=new F(0,0,1),Cd={type:"added"},b0={type:"removed"},ds={type:"childadded",child:null},Io={type:"childremoved",child:null};class Ie extends Xs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:v0++}),this.uuid=Ia(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ie.DEFAULT_UP.clone();const t=new F,e=new Tn,n=new On,s=new F(1,1,1);function a(){n.setFromEuler(e,!1)}function r(){e.setFromQuaternion(n,void 0,!1)}e._onChange(a),n._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new be},normalMatrix:{value:new Ft}}),this.matrix=new be,this.matrixWorld=new be,this.matrixAutoUpdate=Ie.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ie.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new kh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return cs.setFromAxisAngle(t,e),this.quaternion.multiply(cs),this}rotateOnWorldAxis(t,e){return cs.setFromAxisAngle(t,e),this.quaternion.premultiply(cs),this}rotateX(t){return this.rotateOnAxis(wd,t)}rotateY(t){return this.rotateOnAxis(Ad,t)}rotateZ(t){return this.rotateOnAxis(Rd,t)}translateOnAxis(t,e){return Td.copy(t).applyQuaternion(this.quaternion),this.position.add(Td.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(wd,t)}translateY(t){return this.translateOnAxis(Ad,t)}translateZ(t){return this.translateOnAxis(Rd,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Xn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?er.copy(t):er.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),ra.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Xn.lookAt(ra,er,this.up):Xn.lookAt(er,ra,this.up),this.quaternion.setFromRotationMatrix(Xn),s&&(Xn.extractRotation(s.matrixWorld),cs.setFromRotationMatrix(Xn),this.quaternion.premultiply(cs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Cd),ds.child=t,this.dispatchEvent(ds),ds.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(b0),Io.child=t,this.dispatchEvent(Io),Io.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Xn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Xn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Xn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Cd),ds.child=t,this.dispatchEvent(ds),ds.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const r=this.children[n].getObjectByProperty(t,e);if(r!==void 0)return r}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let a=0,r=s.length;a<r;a++)s[a].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ra,t,_0),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ra,x0,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let a=0,r=s.length;a<r;a++)s[a].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function a(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=a(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,f=l.length;c<f;c++){const d=l[c];a(t.shapes,d)}else a(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(a(t.materials,this.material[l]));s.material=o}else s.material=a(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(a(t.animations,l))}}if(e){const o=r(t.geometries),l=r(t.materials),c=r(t.textures),f=r(t.images),d=r(t.shapes),h=r(t.skeletons),u=r(t.animations),g=r(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),f.length>0&&(n.images=f),d.length>0&&(n.shapes=d),h.length>0&&(n.skeletons=h),u.length>0&&(n.animations=u),g.length>0&&(n.nodes=g)}return n.object=s,n;function r(o){const l=[];for(const c in o){const f=o[c];delete f.metadata,l.push(f)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}Ie.DEFAULT_UP=new F(0,1,0);Ie.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ie.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const _n=new F,qn=new F,ko=new F,Yn=new F,fs=new F,hs=new F,Pd=new F,Uo=new F,No=new F,Fo=new F,Oo=new Se,Bo=new Se,$o=new Se;class hn{constructor(t=new F,e=new F,n=new F){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),_n.subVectors(t,e),s.cross(_n);const a=s.lengthSq();return a>0?s.multiplyScalar(1/Math.sqrt(a)):s.set(0,0,0)}static getBarycoord(t,e,n,s,a){_n.subVectors(s,e),qn.subVectors(n,e),ko.subVectors(t,e);const r=_n.dot(_n),o=_n.dot(qn),l=_n.dot(ko),c=qn.dot(qn),f=qn.dot(ko),d=r*c-o*o;if(d===0)return a.set(0,0,0),null;const h=1/d,u=(c*l-o*f)*h,g=(r*f-o*l)*h;return a.set(1-u-g,g,u)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Yn)===null?!1:Yn.x>=0&&Yn.y>=0&&Yn.x+Yn.y<=1}static getInterpolation(t,e,n,s,a,r,o,l){return this.getBarycoord(t,e,n,s,Yn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(a,Yn.x),l.addScaledVector(r,Yn.y),l.addScaledVector(o,Yn.z),l)}static getInterpolatedAttribute(t,e,n,s,a,r){return Oo.setScalar(0),Bo.setScalar(0),$o.setScalar(0),Oo.fromBufferAttribute(t,e),Bo.fromBufferAttribute(t,n),$o.fromBufferAttribute(t,s),r.setScalar(0),r.addScaledVector(Oo,a.x),r.addScaledVector(Bo,a.y),r.addScaledVector($o,a.z),r}static isFrontFacing(t,e,n,s){return _n.subVectors(n,e),qn.subVectors(t,e),_n.cross(qn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return _n.subVectors(this.c,this.b),qn.subVectors(this.a,this.b),_n.cross(qn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return hn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return hn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,a){return hn.getInterpolation(t,this.a,this.b,this.c,e,n,s,a)}containsPoint(t){return hn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return hn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,a=this.c;let r,o;fs.subVectors(s,n),hs.subVectors(a,n),Uo.subVectors(t,n);const l=fs.dot(Uo),c=hs.dot(Uo);if(l<=0&&c<=0)return e.copy(n);No.subVectors(t,s);const f=fs.dot(No),d=hs.dot(No);if(f>=0&&d<=f)return e.copy(s);const h=l*d-f*c;if(h<=0&&l>=0&&f<=0)return r=l/(l-f),e.copy(n).addScaledVector(fs,r);Fo.subVectors(t,a);const u=fs.dot(Fo),g=hs.dot(Fo);if(g>=0&&u<=g)return e.copy(a);const _=u*c-l*g;if(_<=0&&c>=0&&g<=0)return o=c/(c-g),e.copy(n).addScaledVector(hs,o);const m=f*g-u*d;if(m<=0&&d-f>=0&&u-g>=0)return Pd.subVectors(a,s),o=(d-f)/(d-f+(u-g)),e.copy(s).addScaledVector(Pd,o);const p=1/(m+_+h);return r=_*p,o=h*p,e.copy(n).addScaledVector(fs,r).addScaledVector(hs,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Uh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},pi={h:0,s:0,l:0},nr={h:0,s:0,l:0};function zo(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class ee{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=cn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,jt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=jt.workingColorSpace){return this.r=t,this.g=e,this.b=n,jt.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=jt.workingColorSpace){if(t=s0(t,1),e=Xe(e,0,1),n=Xe(n,0,1),e===0)this.r=this.g=this.b=n;else{const a=n<=.5?n*(1+e):n+e-n*e,r=2*n-a;this.r=zo(r,a,t+1/3),this.g=zo(r,a,t),this.b=zo(r,a,t-1/3)}return jt.toWorkingColorSpace(this,s),this}setStyle(t,e=cn){function n(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let a;const r=s[1],o=s[2];switch(r){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,e);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,e);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const a=s[1],r=a.length;if(r===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,e);if(r===6)return this.setHex(parseInt(a,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=cn){const n=Uh[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ii(t.r),this.g=ii(t.g),this.b=ii(t.b),this}copyLinearToSRGB(t){return this.r=As(t.r),this.g=As(t.g),this.b=As(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=cn){return jt.fromWorkingColorSpace(Ne.copy(this),t),Math.round(Xe(Ne.r*255,0,255))*65536+Math.round(Xe(Ne.g*255,0,255))*256+Math.round(Xe(Ne.b*255,0,255))}getHexString(t=cn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=jt.workingColorSpace){jt.fromWorkingColorSpace(Ne.copy(this),e);const n=Ne.r,s=Ne.g,a=Ne.b,r=Math.max(n,s,a),o=Math.min(n,s,a);let l,c;const f=(o+r)/2;if(o===r)l=0,c=0;else{const d=r-o;switch(c=f<=.5?d/(r+o):d/(2-r-o),r){case n:l=(s-a)/d+(s<a?6:0);break;case s:l=(a-n)/d+2;break;case a:l=(n-s)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=f,t}getRGB(t,e=jt.workingColorSpace){return jt.fromWorkingColorSpace(Ne.copy(this),e),t.r=Ne.r,t.g=Ne.g,t.b=Ne.b,t}getStyle(t=cn){jt.fromWorkingColorSpace(Ne.copy(this),t);const e=Ne.r,n=Ne.g,s=Ne.b;return t!==cn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(pi),this.setHSL(pi.h+t,pi.s+e,pi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(pi),t.getHSL(nr);const n=Eo(pi.h,nr.h,e),s=Eo(pi.s,nr.s,e),a=Eo(pi.l,nr.l,e);return this.setHSL(n,s,a),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,a=t.elements;return this.r=a[0]*e+a[3]*n+a[6]*s,this.g=a[1]*e+a[4]*n+a[7]*s,this.b=a[2]*e+a[5]*n+a[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ne=new ee;ee.NAMES=Uh;let y0=0;class qs extends Xs{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:y0++}),this.uuid=Ia(),this.name="",this.blending=Ts,this.side=Ai,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=fl,this.blendDst=hl,this.blendEquation=Gi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ee(0,0,0),this.blendAlpha=0,this.depthFunc=Us,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ud,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=is,this.stencilZFail=is,this.stencilZPass=is,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ts&&(n.blending=this.blending),this.side!==Ai&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==fl&&(n.blendSrc=this.blendSrc),this.blendDst!==hl&&(n.blendDst=this.blendDst),this.blendEquation!==Gi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Us&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ud&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==is&&(n.stencilFail=this.stencilFail),this.stencilZFail!==is&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==is&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(a){const r=[];for(const o in a){const l=a[o];delete l.metadata,r.push(l)}return r}if(e){const a=s(t.textures),r=s(t.images);a.length>0&&(n.textures=a),r.length>0&&(n.images=r)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let a=0;a!==s;++a)n[a]=e[a].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Sc extends qs{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new ee(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Tn,this.combine=gh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const we=new F,ir=new Kt;class Bn{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=pd,this.updateRanges=[],this.gpuType=Qn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,a=this.itemSize;s<a;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)ir.fromBufferAttribute(this,e),ir.applyMatrix3(t),this.setXY(e,ir.x,ir.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)we.fromBufferAttribute(this,e),we.applyMatrix3(t),this.setXYZ(e,we.x,we.y,we.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)we.fromBufferAttribute(this,e),we.applyMatrix4(t),this.setXYZ(e,we.x,we.y,we.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)we.fromBufferAttribute(this,e),we.applyNormalMatrix(t),this.setXYZ(e,we.x,we.y,we.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)we.fromBufferAttribute(this,e),we.transformDirection(t),this.setXYZ(e,we.x,we.y,we.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=ia(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Ve(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=ia(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ve(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=ia(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ve(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=ia(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ve(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=ia(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ve(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Ve(e,this.array),n=Ve(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Ve(e,this.array),n=Ve(n,this.array),s=Ve(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,a){return t*=this.itemSize,this.normalized&&(e=Ve(e,this.array),n=Ve(n,this.array),s=Ve(s,this.array),a=Ve(a,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=a,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==pd&&(t.usage=this.usage),t}}class Nh extends Bn{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Fh extends Bn{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class nn extends Bn{constructor(t,e,n){super(new Float32Array(t),e,n)}}let M0=0;const on=new be,Ho=new Ie,us=new F,Ke=new ka,oa=new ka,Pe=new F;class zn extends Xs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:M0++}),this.uuid=Ia(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Ph(t)?Fh:Nh)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const a=new Ft().getNormalMatrix(t);n.applyNormalMatrix(a),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return on.makeRotationFromQuaternion(t),this.applyMatrix4(on),this}rotateX(t){return on.makeRotationX(t),this.applyMatrix4(on),this}rotateY(t){return on.makeRotationY(t),this.applyMatrix4(on),this}rotateZ(t){return on.makeRotationZ(t),this.applyMatrix4(on),this}translate(t,e,n){return on.makeTranslation(t,e,n),this.applyMatrix4(on),this}scale(t,e,n){return on.makeScale(t,e,n),this.applyMatrix4(on),this}lookAt(t){return Ho.lookAt(t),Ho.updateMatrix(),this.applyMatrix4(Ho.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(us).negate(),this.translate(us.x,us.y,us.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,a=t.length;s<a;s++){const r=t[s];n.push(r.x,r.y,r.z||0)}this.setAttribute("position",new nn(n,3))}else{for(let n=0,s=e.count;n<s;n++){const a=t[n];e.setXYZ(n,a.x,a.y,a.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ka);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const a=e[n];Ke.setFromBufferAttribute(a),this.morphTargetsRelative?(Pe.addVectors(this.boundingBox.min,Ke.min),this.boundingBox.expandByPoint(Pe),Pe.addVectors(this.boundingBox.max,Ke.max),this.boundingBox.expandByPoint(Pe)):(this.boundingBox.expandByPoint(Ke.min),this.boundingBox.expandByPoint(Ke.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ho);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new F,1/0);return}if(t){const n=this.boundingSphere.center;if(Ke.setFromBufferAttribute(t),e)for(let a=0,r=e.length;a<r;a++){const o=e[a];oa.setFromBufferAttribute(o),this.morphTargetsRelative?(Pe.addVectors(Ke.min,oa.min),Ke.expandByPoint(Pe),Pe.addVectors(Ke.max,oa.max),Ke.expandByPoint(Pe)):(Ke.expandByPoint(oa.min),Ke.expandByPoint(oa.max))}Ke.getCenter(n);let s=0;for(let a=0,r=t.count;a<r;a++)Pe.fromBufferAttribute(t,a),s=Math.max(s,n.distanceToSquared(Pe));if(e)for(let a=0,r=e.length;a<r;a++){const o=e[a],l=this.morphTargetsRelative;for(let c=0,f=o.count;c<f;c++)Pe.fromBufferAttribute(o,c),l&&(us.fromBufferAttribute(t,c),Pe.add(us)),s=Math.max(s,n.distanceToSquared(Pe))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,a=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Bn(new Float32Array(4*n.count),4));const r=this.getAttribute("tangent"),o=[],l=[];for(let P=0;P<n.count;P++)o[P]=new F,l[P]=new F;const c=new F,f=new F,d=new F,h=new Kt,u=new Kt,g=new Kt,_=new F,m=new F;function p(P,E,y){c.fromBufferAttribute(n,P),f.fromBufferAttribute(n,E),d.fromBufferAttribute(n,y),h.fromBufferAttribute(a,P),u.fromBufferAttribute(a,E),g.fromBufferAttribute(a,y),f.sub(c),d.sub(c),u.sub(h),g.sub(h);const L=1/(u.x*g.y-g.x*u.y);isFinite(L)&&(_.copy(f).multiplyScalar(g.y).addScaledVector(d,-u.y).multiplyScalar(L),m.copy(d).multiplyScalar(u.x).addScaledVector(f,-g.x).multiplyScalar(L),o[P].add(_),o[E].add(_),o[y].add(_),l[P].add(m),l[E].add(m),l[y].add(m))}let M=this.groups;M.length===0&&(M=[{start:0,count:t.count}]);for(let P=0,E=M.length;P<E;++P){const y=M[P],L=y.start,X=y.count;for(let D=L,z=L+X;D<z;D+=3)p(t.getX(D+0),t.getX(D+1),t.getX(D+2))}const x=new F,v=new F,R=new F,w=new F;function C(P){R.fromBufferAttribute(s,P),w.copy(R);const E=o[P];x.copy(E),x.sub(R.multiplyScalar(R.dot(E))).normalize(),v.crossVectors(w,E);const L=v.dot(l[P])<0?-1:1;r.setXYZW(P,x.x,x.y,x.z,L)}for(let P=0,E=M.length;P<E;++P){const y=M[P],L=y.start,X=y.count;for(let D=L,z=L+X;D<z;D+=3)C(t.getX(D+0)),C(t.getX(D+1)),C(t.getX(D+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Bn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let h=0,u=n.count;h<u;h++)n.setXYZ(h,0,0,0);const s=new F,a=new F,r=new F,o=new F,l=new F,c=new F,f=new F,d=new F;if(t)for(let h=0,u=t.count;h<u;h+=3){const g=t.getX(h+0),_=t.getX(h+1),m=t.getX(h+2);s.fromBufferAttribute(e,g),a.fromBufferAttribute(e,_),r.fromBufferAttribute(e,m),f.subVectors(r,a),d.subVectors(s,a),f.cross(d),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),o.add(f),l.add(f),c.add(f),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,u=e.count;h<u;h+=3)s.fromBufferAttribute(e,h+0),a.fromBufferAttribute(e,h+1),r.fromBufferAttribute(e,h+2),f.subVectors(r,a),d.subVectors(s,a),f.cross(d),n.setXYZ(h+0,f.x,f.y,f.z),n.setXYZ(h+1,f.x,f.y,f.z),n.setXYZ(h+2,f.x,f.y,f.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Pe.fromBufferAttribute(t,e),Pe.normalize(),t.setXYZ(e,Pe.x,Pe.y,Pe.z)}toNonIndexed(){function t(o,l){const c=o.array,f=o.itemSize,d=o.normalized,h=new c.constructor(l.length*f);let u=0,g=0;for(let _=0,m=l.length;_<m;_++){o.isInterleavedBufferAttribute?u=l[_]*o.data.stride+o.offset:u=l[_]*f;for(let p=0;p<f;p++)h[g++]=c[u++]}return new Bn(h,f,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new zn,n=this.index.array,s=this.attributes;for(const o in s){const l=s[o],c=t(l,n);e.setAttribute(o,c)}const a=this.morphAttributes;for(const o in a){const l=[],c=a[o];for(let f=0,d=c.length;f<d;f++){const h=c[f],u=t(h,n);l.push(u)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const r=this.groups;for(let o=0,l=r.length;o<l;o++){const c=r[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let a=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],f=[];for(let d=0,h=c.length;d<h;d++){const u=c[d];f.push(u.toJSON(t.data))}f.length>0&&(s[l]=f,a=!0)}a&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const r=this.groups;r.length>0&&(t.data.groups=JSON.parse(JSON.stringify(r)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const s=t.attributes;for(const c in s){const f=s[c];this.setAttribute(c,f.clone(e))}const a=t.morphAttributes;for(const c in a){const f=[],d=a[c];for(let h=0,u=d.length;h<u;h++)f.push(d[h].clone(e));this.morphAttributes[c]=f}this.morphTargetsRelative=t.morphTargetsRelative;const r=t.groups;for(let c=0,f=r.length;c<f;c++){const d=r[c];this.addGroup(d.start,d.count,d.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ld=new be,Ni=new Ih,sr=new ho,Dd=new F,ar=new F,rr=new F,or=new F,Go=new F,lr=new F,Id=new F,cr=new F;class Mn extends Ie{constructor(t=new zn,e=new Sc){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,r=s.length;a<r;a++){const o=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,a=n.morphAttributes.position,r=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const o=this.morphTargetInfluences;if(a&&o){lr.set(0,0,0);for(let l=0,c=a.length;l<c;l++){const f=o[l],d=a[l];f!==0&&(Go.fromBufferAttribute(d,t),r?lr.addScaledVector(Go,f):lr.addScaledVector(Go.sub(e),f))}e.add(lr)}return e}raycast(t,e){const n=this.geometry,s=this.material,a=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),sr.copy(n.boundingSphere),sr.applyMatrix4(a),Ni.copy(t.ray).recast(t.near),!(sr.containsPoint(Ni.origin)===!1&&(Ni.intersectSphere(sr,Dd)===null||Ni.origin.distanceToSquared(Dd)>(t.far-t.near)**2))&&(Ld.copy(a).invert(),Ni.copy(t.ray).applyMatrix4(Ld),!(n.boundingBox!==null&&Ni.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Ni)))}_computeIntersections(t,e,n){let s;const a=this.geometry,r=this.material,o=a.index,l=a.attributes.position,c=a.attributes.uv,f=a.attributes.uv1,d=a.attributes.normal,h=a.groups,u=a.drawRange;if(o!==null)if(Array.isArray(r))for(let g=0,_=h.length;g<_;g++){const m=h[g],p=r[m.materialIndex],M=Math.max(m.start,u.start),x=Math.min(o.count,Math.min(m.start+m.count,u.start+u.count));for(let v=M,R=x;v<R;v+=3){const w=o.getX(v),C=o.getX(v+1),P=o.getX(v+2);s=dr(this,p,t,n,c,f,d,w,C,P),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,u.start),_=Math.min(o.count,u.start+u.count);for(let m=g,p=_;m<p;m+=3){const M=o.getX(m),x=o.getX(m+1),v=o.getX(m+2);s=dr(this,r,t,n,c,f,d,M,x,v),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(r))for(let g=0,_=h.length;g<_;g++){const m=h[g],p=r[m.materialIndex],M=Math.max(m.start,u.start),x=Math.min(l.count,Math.min(m.start+m.count,u.start+u.count));for(let v=M,R=x;v<R;v+=3){const w=v,C=v+1,P=v+2;s=dr(this,p,t,n,c,f,d,w,C,P),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,u.start),_=Math.min(l.count,u.start+u.count);for(let m=g,p=_;m<p;m+=3){const M=m,x=m+1,v=m+2;s=dr(this,r,t,n,c,f,d,M,x,v),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function S0(i,t,e,n,s,a,r,o){let l;if(t.side===qe?l=n.intersectTriangle(r,a,s,!0,o):l=n.intersectTriangle(s,a,r,t.side===Ai,o),l===null)return null;cr.copy(o),cr.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(cr);return c<e.near||c>e.far?null:{distance:c,point:cr.clone(),object:i}}function dr(i,t,e,n,s,a,r,o,l,c){i.getVertexPosition(o,ar),i.getVertexPosition(l,rr),i.getVertexPosition(c,or);const f=S0(i,t,e,n,ar,rr,or,Id);if(f){const d=new F;hn.getBarycoord(Id,ar,rr,or,d),s&&(f.uv=hn.getInterpolatedAttribute(s,o,l,c,d,new Kt)),a&&(f.uv1=hn.getInterpolatedAttribute(a,o,l,c,d,new Kt)),r&&(f.normal=hn.getInterpolatedAttribute(r,o,l,c,d,new F),f.normal.dot(n.direction)>0&&f.normal.multiplyScalar(-1));const h={a:o,b:l,c,normal:new F,materialIndex:0};hn.getNormal(ar,rr,or,h.normal),f.face=h,f.barycoord=d}return f}class Ys extends zn{constructor(t=1,e=1,n=1,s=1,a=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:a,depthSegments:r};const o=this;s=Math.floor(s),a=Math.floor(a),r=Math.floor(r);const l=[],c=[],f=[],d=[];let h=0,u=0;g("z","y","x",-1,-1,n,e,t,r,a,0),g("z","y","x",1,-1,n,e,-t,r,a,1),g("x","z","y",1,1,t,n,e,s,r,2),g("x","z","y",1,-1,t,n,-e,s,r,3),g("x","y","z",1,-1,t,e,n,s,a,4),g("x","y","z",-1,-1,t,e,-n,s,a,5),this.setIndex(l),this.setAttribute("position",new nn(c,3)),this.setAttribute("normal",new nn(f,3)),this.setAttribute("uv",new nn(d,2));function g(_,m,p,M,x,v,R,w,C,P,E){const y=v/C,L=R/P,X=v/2,D=R/2,z=w/2,K=C+1,H=P+1;let et=0,G=0;const rt=new F;for(let ut=0;ut<H;ut++){const St=ut*L-D;for(let $t=0;$t<K;$t++){const oe=$t*y-X;rt[_]=oe*M,rt[m]=St*x,rt[p]=z,c.push(rt.x,rt.y,rt.z),rt[_]=0,rt[m]=0,rt[p]=w>0?1:-1,f.push(rt.x,rt.y,rt.z),d.push($t/C),d.push(1-ut/P),et+=1}}for(let ut=0;ut<P;ut++)for(let St=0;St<C;St++){const $t=h+St+K*ut,oe=h+St+K*(ut+1),j=h+(St+1)+K*(ut+1),st=h+(St+1)+K*ut;l.push($t,oe,st),l.push(oe,j,st),G+=6}o.addGroup(u,G,E),u+=G,h+=et}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ys(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function $s(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Fe(i){const t={};for(let e=0;e<i.length;e++){const n=$s(i[e]);for(const s in n)t[s]=n[s]}return t}function E0(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Oh(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:jt.workingColorSpace}const T0={clone:$s,merge:Fe};var w0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,A0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ri extends qs{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=w0,this.fragmentShader=A0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=$s(t.uniforms),this.uniformsGroups=E0(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const r=this.uniforms[s].value;r&&r.isTexture?e.uniforms[s]={type:"t",value:r.toJSON(t).uuid}:r&&r.isColor?e.uniforms[s]={type:"c",value:r.getHex()}:r&&r.isVector2?e.uniforms[s]={type:"v2",value:r.toArray()}:r&&r.isVector3?e.uniforms[s]={type:"v3",value:r.toArray()}:r&&r.isVector4?e.uniforms[s]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?e.uniforms[s]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?e.uniforms[s]={type:"m4",value:r.toArray()}:e.uniforms[s]={value:r}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Bh extends Ie{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new be,this.projectionMatrix=new be,this.projectionMatrixInverse=new be,this.coordinateSystem=ti}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const mi=new F,kd=new Kt,Ud=new Kt;class dn extends Bh{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Kl*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Dr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Kl*2*Math.atan(Math.tan(Dr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){mi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(mi.x,mi.y).multiplyScalar(-t/mi.z),mi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(mi.x,mi.y).multiplyScalar(-t/mi.z)}getViewSize(t,e){return this.getViewBounds(t,kd,Ud),e.subVectors(Ud,kd)}setViewOffset(t,e,n,s,a,r){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=a,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Dr*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,a=-.5*s;const r=this.view;if(this.view!==null&&this.view.enabled){const l=r.fullWidth,c=r.fullHeight;a+=r.offsetX*s/l,e-=r.offsetY*n/c,s*=r.width/l,n*=r.height/c}const o=this.filmOffset;o!==0&&(a+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const ps=-90,ms=1;class R0 extends Ie{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new dn(ps,ms,t,e);s.layers=this.layers,this.add(s);const a=new dn(ps,ms,t,e);a.layers=this.layers,this.add(a);const r=new dn(ps,ms,t,e);r.layers=this.layers,this.add(r);const o=new dn(ps,ms,t,e);o.layers=this.layers,this.add(o);const l=new dn(ps,ms,t,e);l.layers=this.layers,this.add(l);const c=new dn(ps,ms,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,a,r,o,l]=e;for(const c of e)this.remove(c);if(t===ti)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===qr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[a,r,o,l,c,f]=this.children,d=t.getRenderTarget(),h=t.getActiveCubeFace(),u=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,a),t.setRenderTarget(n,1,s),t.render(e,r),t.setRenderTarget(n,2,s),t.render(e,o),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,s),t.render(e,f),t.setRenderTarget(d,h,u),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class $h extends He{constructor(t,e,n,s,a,r,o,l,c,f){t=t!==void 0?t:[],e=e!==void 0?e:Ns,super(t,e,n,s,a,r,o,l,c,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class C0 extends Zi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new $h(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:In}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Ys(5,5,5),a=new Ri({name:"CubemapFromEquirect",uniforms:$s(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:qe,blending:Si});a.uniforms.tEquirect.value=e;const r=new Mn(s,a),o=e.minFilter;return e.minFilter===Xi&&(e.minFilter=In),new R0(1,10,this).update(t,r),e.minFilter=o,r.geometry.dispose(),r.material.dispose(),this}clear(t,e,n,s){const a=t.getRenderTarget();for(let r=0;r<6;r++)t.setRenderTarget(this,r),t.clear(e,n,s);t.setRenderTarget(a)}}const Vo=new F,P0=new F,L0=new Ft;class $i{constructor(t=new F(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=Vo.subVectors(n,e).cross(P0.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Vo),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const a=-(t.start.dot(this.normal)+this.constant)/s;return a<0||a>1?null:e.copy(t.start).addScaledVector(n,a)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||L0.getNormalMatrix(t),s=this.coplanarPoint(Vo).applyMatrix4(t),a=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(a),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Fi=new ho,fr=new F;class Ec{constructor(t=new $i,e=new $i,n=new $i,s=new $i,a=new $i,r=new $i){this.planes=[t,e,n,s,a,r]}set(t,e,n,s,a,r){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(a),o[5].copy(r),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=ti){const n=this.planes,s=t.elements,a=s[0],r=s[1],o=s[2],l=s[3],c=s[4],f=s[5],d=s[6],h=s[7],u=s[8],g=s[9],_=s[10],m=s[11],p=s[12],M=s[13],x=s[14],v=s[15];if(n[0].setComponents(l-a,h-c,m-u,v-p).normalize(),n[1].setComponents(l+a,h+c,m+u,v+p).normalize(),n[2].setComponents(l+r,h+f,m+g,v+M).normalize(),n[3].setComponents(l-r,h-f,m-g,v-M).normalize(),n[4].setComponents(l-o,h-d,m-_,v-x).normalize(),e===ti)n[5].setComponents(l+o,h+d,m+_,v+x).normalize();else if(e===qr)n[5].setComponents(o,d,_,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Fi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Fi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Fi)}intersectsSprite(t){return Fi.center.set(0,0,0),Fi.radius=.7071067811865476,Fi.applyMatrix4(t.matrixWorld),this.intersectsSphere(Fi)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let a=0;a<6;a++)if(e[a].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(fr.x=s.normal.x>0?t.max.x:t.min.x,fr.y=s.normal.y>0?t.max.y:t.min.y,fr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(fr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function zh(){let i=null,t=!1,e=null,n=null;function s(a,r){e(a,r),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(a){e=a},setContext:function(a){i=a}}}function D0(i){const t=new WeakMap;function e(o,l){const c=o.array,f=o.usage,d=c.byteLength,h=i.createBuffer();i.bindBuffer(l,h),i.bufferData(l,c,f),o.onUploadCallback();let u;if(c instanceof Float32Array)u=i.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?u=i.HALF_FLOAT:u=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)u=i.SHORT;else if(c instanceof Uint32Array)u=i.UNSIGNED_INT;else if(c instanceof Int32Array)u=i.INT;else if(c instanceof Int8Array)u=i.BYTE;else if(c instanceof Uint8Array)u=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)u=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:u,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,l,c){const f=l.array,d=l.updateRanges;if(i.bindBuffer(c,o),d.length===0)i.bufferSubData(c,0,f);else{d.sort((u,g)=>u.start-g.start);let h=0;for(let u=1;u<d.length;u++){const g=d[h],_=d[u];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++h,d[h]=_)}d.length=h+1;for(let u=0,g=d.length;u<g;u++){const _=d[u];i.bufferSubData(c,_.start*f.BYTES_PER_ELEMENT,f,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function a(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(i.deleteBuffer(l.buffer),t.delete(o))}function r(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const f=t.get(o);(!f||f.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:a,update:r}}class Ua extends zn{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const a=t/2,r=e/2,o=Math.floor(n),l=Math.floor(s),c=o+1,f=l+1,d=t/o,h=e/l,u=[],g=[],_=[],m=[];for(let p=0;p<f;p++){const M=p*h-r;for(let x=0;x<c;x++){const v=x*d-a;g.push(v,-M,0),_.push(0,0,1),m.push(x/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let M=0;M<o;M++){const x=M+c*p,v=M+c*(p+1),R=M+1+c*(p+1),w=M+1+c*p;u.push(x,v,w),u.push(v,R,w)}this.setIndex(u),this.setAttribute("position",new nn(g,3)),this.setAttribute("normal",new nn(_,3)),this.setAttribute("uv",new nn(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ua(t.width,t.height,t.widthSegments,t.heightSegments)}}var I0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,k0=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,U0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,N0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,F0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,O0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,B0=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,$0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,z0=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,H0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,G0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,V0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,W0=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,X0=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,q0=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Y0=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,j0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,K0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Z0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,J0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Q0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,tg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,eg=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,ng=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,ig=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,sg=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,ag=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,rg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,og=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,lg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,cg="gl_FragColor = linearToOutputTexel( gl_FragColor );",dg=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,fg=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,hg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,ug=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,pg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,mg=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,gg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,vg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,_g=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,xg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,bg=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,yg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Mg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Sg=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Eg=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Tg=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,wg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Ag=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Rg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Cg=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Pg=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Lg=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Dg=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Ig=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,kg=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Ug=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ng=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Fg=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Og=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Bg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,$g=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,zg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Hg=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Gg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Vg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Wg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Xg=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,qg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Yg=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,jg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Kg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Zg=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Jg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Qg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,tv=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,ev=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,nv=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,iv=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,sv=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,av=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,rv=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ov=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,lv=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,cv=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dv=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,fv=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,hv=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,uv=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,pv=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,mv=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,gv=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,vv=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,_v=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,xv=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,bv=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,yv=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Mv=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Sv=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ev=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Tv=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,wv=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Av=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Rv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Cv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Pv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Lv=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Dv=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Iv=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,kv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Uv=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Nv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Fv=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ov=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Bv=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,$v=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,zv=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Hv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Gv=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Vv=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Wv=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Xv=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,qv=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Yv=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,jv=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Kv=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Zv=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Jv=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Qv=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,t_=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,e_=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,n_=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,i_=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,s_=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,a_=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,r_=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,o_=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,l_=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,c_=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,d_=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,f_=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Bt={alphahash_fragment:I0,alphahash_pars_fragment:k0,alphamap_fragment:U0,alphamap_pars_fragment:N0,alphatest_fragment:F0,alphatest_pars_fragment:O0,aomap_fragment:B0,aomap_pars_fragment:$0,batching_pars_vertex:z0,batching_vertex:H0,begin_vertex:G0,beginnormal_vertex:V0,bsdfs:W0,iridescence_fragment:X0,bumpmap_pars_fragment:q0,clipping_planes_fragment:Y0,clipping_planes_pars_fragment:j0,clipping_planes_pars_vertex:K0,clipping_planes_vertex:Z0,color_fragment:J0,color_pars_fragment:Q0,color_pars_vertex:tg,color_vertex:eg,common:ng,cube_uv_reflection_fragment:ig,defaultnormal_vertex:sg,displacementmap_pars_vertex:ag,displacementmap_vertex:rg,emissivemap_fragment:og,emissivemap_pars_fragment:lg,colorspace_fragment:cg,colorspace_pars_fragment:dg,envmap_fragment:fg,envmap_common_pars_fragment:hg,envmap_pars_fragment:ug,envmap_pars_vertex:pg,envmap_physical_pars_fragment:Tg,envmap_vertex:mg,fog_vertex:gg,fog_pars_vertex:vg,fog_fragment:_g,fog_pars_fragment:xg,gradientmap_pars_fragment:bg,lightmap_pars_fragment:yg,lights_lambert_fragment:Mg,lights_lambert_pars_fragment:Sg,lights_pars_begin:Eg,lights_toon_fragment:wg,lights_toon_pars_fragment:Ag,lights_phong_fragment:Rg,lights_phong_pars_fragment:Cg,lights_physical_fragment:Pg,lights_physical_pars_fragment:Lg,lights_fragment_begin:Dg,lights_fragment_maps:Ig,lights_fragment_end:kg,logdepthbuf_fragment:Ug,logdepthbuf_pars_fragment:Ng,logdepthbuf_pars_vertex:Fg,logdepthbuf_vertex:Og,map_fragment:Bg,map_pars_fragment:$g,map_particle_fragment:zg,map_particle_pars_fragment:Hg,metalnessmap_fragment:Gg,metalnessmap_pars_fragment:Vg,morphinstance_vertex:Wg,morphcolor_vertex:Xg,morphnormal_vertex:qg,morphtarget_pars_vertex:Yg,morphtarget_vertex:jg,normal_fragment_begin:Kg,normal_fragment_maps:Zg,normal_pars_fragment:Jg,normal_pars_vertex:Qg,normal_vertex:tv,normalmap_pars_fragment:ev,clearcoat_normal_fragment_begin:nv,clearcoat_normal_fragment_maps:iv,clearcoat_pars_fragment:sv,iridescence_pars_fragment:av,opaque_fragment:rv,packing:ov,premultiplied_alpha_fragment:lv,project_vertex:cv,dithering_fragment:dv,dithering_pars_fragment:fv,roughnessmap_fragment:hv,roughnessmap_pars_fragment:uv,shadowmap_pars_fragment:pv,shadowmap_pars_vertex:mv,shadowmap_vertex:gv,shadowmask_pars_fragment:vv,skinbase_vertex:_v,skinning_pars_vertex:xv,skinning_vertex:bv,skinnormal_vertex:yv,specularmap_fragment:Mv,specularmap_pars_fragment:Sv,tonemapping_fragment:Ev,tonemapping_pars_fragment:Tv,transmission_fragment:wv,transmission_pars_fragment:Av,uv_pars_fragment:Rv,uv_pars_vertex:Cv,uv_vertex:Pv,worldpos_vertex:Lv,background_vert:Dv,background_frag:Iv,backgroundCube_vert:kv,backgroundCube_frag:Uv,cube_vert:Nv,cube_frag:Fv,depth_vert:Ov,depth_frag:Bv,distanceRGBA_vert:$v,distanceRGBA_frag:zv,equirect_vert:Hv,equirect_frag:Gv,linedashed_vert:Vv,linedashed_frag:Wv,meshbasic_vert:Xv,meshbasic_frag:qv,meshlambert_vert:Yv,meshlambert_frag:jv,meshmatcap_vert:Kv,meshmatcap_frag:Zv,meshnormal_vert:Jv,meshnormal_frag:Qv,meshphong_vert:t_,meshphong_frag:e_,meshphysical_vert:n_,meshphysical_frag:i_,meshtoon_vert:s_,meshtoon_frag:a_,points_vert:r_,points_frag:o_,shadow_vert:l_,shadow_frag:c_,sprite_vert:d_,sprite_frag:f_},at={common:{diffuse:{value:new ee(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ft},alphaMap:{value:null},alphaMapTransform:{value:new Ft},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ft}},envmap:{envMap:{value:null},envMapRotation:{value:new Ft},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ft}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ft}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ft},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ft},normalScale:{value:new Kt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ft},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ft}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ft}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ft}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ee(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ee(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ft},alphaTest:{value:0},uvTransform:{value:new Ft}},sprite:{diffuse:{value:new ee(16777215)},opacity:{value:1},center:{value:new Kt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ft},alphaMap:{value:null},alphaMapTransform:{value:new Ft},alphaTest:{value:0}}},Pn={basic:{uniforms:Fe([at.common,at.specularmap,at.envmap,at.aomap,at.lightmap,at.fog]),vertexShader:Bt.meshbasic_vert,fragmentShader:Bt.meshbasic_frag},lambert:{uniforms:Fe([at.common,at.specularmap,at.envmap,at.aomap,at.lightmap,at.emissivemap,at.bumpmap,at.normalmap,at.displacementmap,at.fog,at.lights,{emissive:{value:new ee(0)}}]),vertexShader:Bt.meshlambert_vert,fragmentShader:Bt.meshlambert_frag},phong:{uniforms:Fe([at.common,at.specularmap,at.envmap,at.aomap,at.lightmap,at.emissivemap,at.bumpmap,at.normalmap,at.displacementmap,at.fog,at.lights,{emissive:{value:new ee(0)},specular:{value:new ee(1118481)},shininess:{value:30}}]),vertexShader:Bt.meshphong_vert,fragmentShader:Bt.meshphong_frag},standard:{uniforms:Fe([at.common,at.envmap,at.aomap,at.lightmap,at.emissivemap,at.bumpmap,at.normalmap,at.displacementmap,at.roughnessmap,at.metalnessmap,at.fog,at.lights,{emissive:{value:new ee(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Bt.meshphysical_vert,fragmentShader:Bt.meshphysical_frag},toon:{uniforms:Fe([at.common,at.aomap,at.lightmap,at.emissivemap,at.bumpmap,at.normalmap,at.displacementmap,at.gradientmap,at.fog,at.lights,{emissive:{value:new ee(0)}}]),vertexShader:Bt.meshtoon_vert,fragmentShader:Bt.meshtoon_frag},matcap:{uniforms:Fe([at.common,at.bumpmap,at.normalmap,at.displacementmap,at.fog,{matcap:{value:null}}]),vertexShader:Bt.meshmatcap_vert,fragmentShader:Bt.meshmatcap_frag},points:{uniforms:Fe([at.points,at.fog]),vertexShader:Bt.points_vert,fragmentShader:Bt.points_frag},dashed:{uniforms:Fe([at.common,at.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Bt.linedashed_vert,fragmentShader:Bt.linedashed_frag},depth:{uniforms:Fe([at.common,at.displacementmap]),vertexShader:Bt.depth_vert,fragmentShader:Bt.depth_frag},normal:{uniforms:Fe([at.common,at.bumpmap,at.normalmap,at.displacementmap,{opacity:{value:1}}]),vertexShader:Bt.meshnormal_vert,fragmentShader:Bt.meshnormal_frag},sprite:{uniforms:Fe([at.sprite,at.fog]),vertexShader:Bt.sprite_vert,fragmentShader:Bt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ft},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Bt.background_vert,fragmentShader:Bt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ft}},vertexShader:Bt.backgroundCube_vert,fragmentShader:Bt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Bt.cube_vert,fragmentShader:Bt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Bt.equirect_vert,fragmentShader:Bt.equirect_frag},distanceRGBA:{uniforms:Fe([at.common,at.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Bt.distanceRGBA_vert,fragmentShader:Bt.distanceRGBA_frag},shadow:{uniforms:Fe([at.lights,at.fog,{color:{value:new ee(0)},opacity:{value:1}}]),vertexShader:Bt.shadow_vert,fragmentShader:Bt.shadow_frag}};Pn.physical={uniforms:Fe([Pn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ft},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ft},clearcoatNormalScale:{value:new Kt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ft},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ft},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ft},sheen:{value:0},sheenColor:{value:new ee(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ft},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ft},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ft},transmissionSamplerSize:{value:new Kt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ft},attenuationDistance:{value:0},attenuationColor:{value:new ee(0)},specularColor:{value:new ee(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ft},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ft},anisotropyVector:{value:new Kt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ft}}]),vertexShader:Bt.meshphysical_vert,fragmentShader:Bt.meshphysical_frag};const hr={r:0,b:0,g:0},Oi=new Tn,h_=new be;function u_(i,t,e,n,s,a,r){const o=new ee(0);let l=a===!0?0:1,c,f,d=null,h=0,u=null;function g(M){let x=M.isScene===!0?M.background:null;return x&&x.isTexture&&(x=(M.backgroundBlurriness>0?e:t).get(x)),x}function _(M){let x=!1;const v=g(M);v===null?p(o,l):v&&v.isColor&&(p(v,1),x=!0);const R=i.xr.getEnvironmentBlendMode();R==="additive"?n.buffers.color.setClear(0,0,0,1,r):R==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,r),(i.autoClear||x)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(M,x){const v=g(x);v&&(v.isCubeTexture||v.mapping===co)?(f===void 0&&(f=new Mn(new Ys(1,1,1),new Ri({name:"BackgroundCubeMaterial",uniforms:$s(Pn.backgroundCube.uniforms),vertexShader:Pn.backgroundCube.vertexShader,fragmentShader:Pn.backgroundCube.fragmentShader,side:qe,depthTest:!1,depthWrite:!1,fog:!1})),f.geometry.deleteAttribute("normal"),f.geometry.deleteAttribute("uv"),f.onBeforeRender=function(R,w,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(f.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(f)),Oi.copy(x.backgroundRotation),Oi.x*=-1,Oi.y*=-1,Oi.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Oi.y*=-1,Oi.z*=-1),f.material.uniforms.envMap.value=v,f.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,f.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,f.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,f.material.uniforms.backgroundRotation.value.setFromMatrix4(h_.makeRotationFromEuler(Oi)),f.material.toneMapped=jt.getTransfer(v.colorSpace)!==re,(d!==v||h!==v.version||u!==i.toneMapping)&&(f.material.needsUpdate=!0,d=v,h=v.version,u=i.toneMapping),f.layers.enableAll(),M.unshift(f,f.geometry,f.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new Mn(new Ua(2,2),new Ri({name:"BackgroundMaterial",uniforms:$s(Pn.background.uniforms),vertexShader:Pn.background.vertexShader,fragmentShader:Pn.background.fragmentShader,side:Ai,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=jt.getTransfer(v.colorSpace)!==re,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(d!==v||h!==v.version||u!==i.toneMapping)&&(c.material.needsUpdate=!0,d=v,h=v.version,u=i.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null))}function p(M,x){M.getRGB(hr,Oh(i)),n.buffers.color.setClear(hr.r,hr.g,hr.b,x,r)}return{getClearColor:function(){return o},setClearColor:function(M,x=1){o.set(M),l=x,p(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(M){l=M,p(o,l)},render:_,addToRenderList:m}}function p_(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=h(null);let a=s,r=!1;function o(y,L,X,D,z){let K=!1;const H=d(D,X,L);a!==H&&(a=H,c(a.object)),K=u(y,D,X,z),K&&g(y,D,X,z),z!==null&&t.update(z,i.ELEMENT_ARRAY_BUFFER),(K||r)&&(r=!1,v(y,L,X,D),z!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(z).buffer))}function l(){return i.createVertexArray()}function c(y){return i.bindVertexArray(y)}function f(y){return i.deleteVertexArray(y)}function d(y,L,X){const D=X.wireframe===!0;let z=n[y.id];z===void 0&&(z={},n[y.id]=z);let K=z[L.id];K===void 0&&(K={},z[L.id]=K);let H=K[D];return H===void 0&&(H=h(l()),K[D]=H),H}function h(y){const L=[],X=[],D=[];for(let z=0;z<e;z++)L[z]=0,X[z]=0,D[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:X,attributeDivisors:D,object:y,attributes:{},index:null}}function u(y,L,X,D){const z=a.attributes,K=L.attributes;let H=0;const et=X.getAttributes();for(const G in et)if(et[G].location>=0){const ut=z[G];let St=K[G];if(St===void 0&&(G==="instanceMatrix"&&y.instanceMatrix&&(St=y.instanceMatrix),G==="instanceColor"&&y.instanceColor&&(St=y.instanceColor)),ut===void 0||ut.attribute!==St||St&&ut.data!==St.data)return!0;H++}return a.attributesNum!==H||a.index!==D}function g(y,L,X,D){const z={},K=L.attributes;let H=0;const et=X.getAttributes();for(const G in et)if(et[G].location>=0){let ut=K[G];ut===void 0&&(G==="instanceMatrix"&&y.instanceMatrix&&(ut=y.instanceMatrix),G==="instanceColor"&&y.instanceColor&&(ut=y.instanceColor));const St={};St.attribute=ut,ut&&ut.data&&(St.data=ut.data),z[G]=St,H++}a.attributes=z,a.attributesNum=H,a.index=D}function _(){const y=a.newAttributes;for(let L=0,X=y.length;L<X;L++)y[L]=0}function m(y){p(y,0)}function p(y,L){const X=a.newAttributes,D=a.enabledAttributes,z=a.attributeDivisors;X[y]=1,D[y]===0&&(i.enableVertexAttribArray(y),D[y]=1),z[y]!==L&&(i.vertexAttribDivisor(y,L),z[y]=L)}function M(){const y=a.newAttributes,L=a.enabledAttributes;for(let X=0,D=L.length;X<D;X++)L[X]!==y[X]&&(i.disableVertexAttribArray(X),L[X]=0)}function x(y,L,X,D,z,K,H){H===!0?i.vertexAttribIPointer(y,L,X,z,K):i.vertexAttribPointer(y,L,X,D,z,K)}function v(y,L,X,D){_();const z=D.attributes,K=X.getAttributes(),H=L.defaultAttributeValues;for(const et in K){const G=K[et];if(G.location>=0){let rt=z[et];if(rt===void 0&&(et==="instanceMatrix"&&y.instanceMatrix&&(rt=y.instanceMatrix),et==="instanceColor"&&y.instanceColor&&(rt=y.instanceColor)),rt!==void 0){const ut=rt.normalized,St=rt.itemSize,$t=t.get(rt);if($t===void 0)continue;const oe=$t.buffer,j=$t.type,st=$t.bytesPerElement,Et=j===i.INT||j===i.UNSIGNED_INT||rt.gpuType===vc;if(rt.isInterleavedBufferAttribute){const lt=rt.data,Pt=lt.stride,kt=rt.offset;if(lt.isInstancedInterleavedBuffer){for(let zt=0;zt<G.locationSize;zt++)p(G.location+zt,lt.meshPerAttribute);y.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=lt.meshPerAttribute*lt.count)}else for(let zt=0;zt<G.locationSize;zt++)m(G.location+zt);i.bindBuffer(i.ARRAY_BUFFER,oe);for(let zt=0;zt<G.locationSize;zt++)x(G.location+zt,St/G.locationSize,j,ut,Pt*st,(kt+St/G.locationSize*zt)*st,Et)}else{if(rt.isInstancedBufferAttribute){for(let lt=0;lt<G.locationSize;lt++)p(G.location+lt,rt.meshPerAttribute);y.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=rt.meshPerAttribute*rt.count)}else for(let lt=0;lt<G.locationSize;lt++)m(G.location+lt);i.bindBuffer(i.ARRAY_BUFFER,oe);for(let lt=0;lt<G.locationSize;lt++)x(G.location+lt,St/G.locationSize,j,ut,St*st,St/G.locationSize*lt*st,Et)}}else if(H!==void 0){const ut=H[et];if(ut!==void 0)switch(ut.length){case 2:i.vertexAttrib2fv(G.location,ut);break;case 3:i.vertexAttrib3fv(G.location,ut);break;case 4:i.vertexAttrib4fv(G.location,ut);break;default:i.vertexAttrib1fv(G.location,ut)}}}}M()}function R(){P();for(const y in n){const L=n[y];for(const X in L){const D=L[X];for(const z in D)f(D[z].object),delete D[z];delete L[X]}delete n[y]}}function w(y){if(n[y.id]===void 0)return;const L=n[y.id];for(const X in L){const D=L[X];for(const z in D)f(D[z].object),delete D[z];delete L[X]}delete n[y.id]}function C(y){for(const L in n){const X=n[L];if(X[y.id]===void 0)continue;const D=X[y.id];for(const z in D)f(D[z].object),delete D[z];delete X[y.id]}}function P(){E(),r=!0,a!==s&&(a=s,c(a.object))}function E(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:P,resetDefaultState:E,dispose:R,releaseStatesOfGeometry:w,releaseStatesOfProgram:C,initAttributes:_,enableAttribute:m,disableUnusedAttributes:M}}function m_(i,t,e){let n;function s(c){n=c}function a(c,f){i.drawArrays(n,c,f),e.update(f,n,1)}function r(c,f,d){d!==0&&(i.drawArraysInstanced(n,c,f,d),e.update(f,n,d))}function o(c,f,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,f,0,d);let u=0;for(let g=0;g<d;g++)u+=f[g];e.update(u,n,1)}function l(c,f,d,h){if(d===0)return;const u=t.get("WEBGL_multi_draw");if(u===null)for(let g=0;g<c.length;g++)r(c[g],f[g],h[g]);else{u.multiDrawArraysInstancedWEBGL(n,c,0,f,0,h,0,d);let g=0;for(let _=0;_<d;_++)g+=f[_]*h[_];e.update(g,n,1)}}this.setMode=s,this.render=a,this.renderInstances=r,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function g_(i,t,e,n){let s;function a(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const C=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function r(C){return!(C!==yn&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(C){const P=C===Da&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(C!==oi&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==Qn&&!P)}function l(C){if(C==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const f=l(c);f!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",f,"instead."),c=f);const d=e.logarithmicDepthBuffer===!0,h=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),u=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),M=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),x=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),R=g>0,w=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:l,textureFormatReadable:r,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reverseDepthBuffer:h,maxTextures:u,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:M,maxVaryings:x,maxFragmentUniforms:v,vertexTextures:R,maxSamples:w}}function v_(i){const t=this;let e=null,n=0,s=!1,a=!1;const r=new $i,o=new Ft,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){const u=d.length!==0||h||n!==0||s;return s=h,n=d.length,u},this.beginShadows=function(){a=!0,f(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(d,h){e=f(d,h,0)},this.setState=function(d,h,u){const g=d.clippingPlanes,_=d.clipIntersection,m=d.clipShadows,p=i.get(d);if(!s||g===null||g.length===0||a&&!m)a?f(null):c();else{const M=a?0:n,x=M*4;let v=p.clippingState||null;l.value=v,v=f(g,h,x,u);for(let R=0;R!==x;++R)v[R]=e[R];p.clippingState=v,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function f(d,h,u,g){const _=d!==null?d.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const p=u+_*4,M=h.matrixWorldInverse;o.getNormalMatrix(M),(m===null||m.length<p)&&(m=new Float32Array(p));for(let x=0,v=u;x!==_;++x,v+=4)r.copy(d[x]).applyMatrix4(M,o),r.normal.toArray(m,v),m[v+3]=r.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}function __(i){let t=new WeakMap;function e(r,o){return o===bl?r.mapping=Ns:o===yl&&(r.mapping=Fs),r}function n(r){if(r&&r.isTexture){const o=r.mapping;if(o===bl||o===yl)if(t.has(r)){const l=t.get(r).texture;return e(l,r.mapping)}else{const l=r.image;if(l&&l.height>0){const c=new C0(l.height);return c.fromEquirectangularTexture(i,r),t.set(r,c),r.addEventListener("dispose",s),e(c.texture,r.mapping)}else return null}}return r}function s(r){const o=r.target;o.removeEventListener("dispose",s);const l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function a(){t=new WeakMap}return{get:n,dispose:a}}class Hh extends Bh{constructor(t=-1,e=1,n=1,s=-1,a=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=a,this.far=r,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,a,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=a,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let a=n-t,r=n+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=c*this.view.offsetX,r=a+c*this.view.width,o-=f*this.view.offsetY,l=o-f*this.view.height}this.projectionMatrix.makeOrthographic(a,r,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const bs=4,Nd=[.125,.215,.35,.446,.526,.582],Vi=20,Wo=new Hh,Fd=new ee;let Xo=null,qo=0,Yo=0,jo=!1;const zi=(1+Math.sqrt(5))/2,gs=1/zi,Od=[new F(-zi,gs,0),new F(zi,gs,0),new F(-gs,0,zi),new F(gs,0,zi),new F(0,zi,-gs),new F(0,zi,gs),new F(-1,1,-1),new F(1,1,-1),new F(-1,1,1),new F(1,1,1)];class Bd{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){Xo=this._renderer.getRenderTarget(),qo=this._renderer.getActiveCubeFace(),Yo=this._renderer.getActiveMipmapLevel(),jo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const a=this._allocateTargets();return a.depthBuffer=!0,this._sceneToCubeUV(t,n,s,a),e>0&&this._blur(a,0,0,e),this._applyPMREM(a),this._cleanup(a),a}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Hd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=zd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Xo,qo,Yo),this._renderer.xr.enabled=jo,t.scissorTest=!1,ur(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ns||t.mapping===Fs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Xo=this._renderer.getRenderTarget(),qo=this._renderer.getActiveCubeFace(),Yo=this._renderer.getActiveMipmapLevel(),jo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:In,minFilter:In,generateMipmaps:!1,type:Da,format:yn,colorSpace:Ws,depthBuffer:!1},s=$d(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=$d(t,e,n);const{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=x_(a)),this._blurMaterial=b_(a,t,e)}return s}_compileMaterial(t){const e=new Mn(this._lodPlanes[0],t);this._renderer.compile(e,Wo)}_sceneToCubeUV(t,e,n,s){const o=new dn(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],f=this._renderer,d=f.autoClear,h=f.toneMapping;f.getClearColor(Fd),f.toneMapping=Ei,f.autoClear=!1;const u=new Sc({name:"PMREM.Background",side:qe,depthWrite:!1,depthTest:!1}),g=new Mn(new Ys,u);let _=!1;const m=t.background;m?m.isColor&&(u.color.copy(m),t.background=null,_=!0):(u.color.copy(Fd),_=!0);for(let p=0;p<6;p++){const M=p%3;M===0?(o.up.set(0,l[p],0),o.lookAt(c[p],0,0)):M===1?(o.up.set(0,0,l[p]),o.lookAt(0,c[p],0)):(o.up.set(0,l[p],0),o.lookAt(0,0,c[p]));const x=this._cubeSize;ur(s,M*x,p>2?x:0,x,x),f.setRenderTarget(s),_&&f.render(g,o),f.render(t,o)}g.geometry.dispose(),g.material.dispose(),f.toneMapping=h,f.autoClear=d,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===Ns||t.mapping===Fs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Hd()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=zd());const a=s?this._cubemapMaterial:this._equirectMaterial,r=new Mn(this._lodPlanes[0],a),o=a.uniforms;o.envMap.value=t;const l=this._cubeSize;ur(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(r,Wo)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let a=1;a<s;a++){const r=Math.sqrt(this._sigmas[a]*this._sigmas[a]-this._sigmas[a-1]*this._sigmas[a-1]),o=Od[(s-a-1)%Od.length];this._blur(t,a-1,a,r,o)}e.autoClear=n}_blur(t,e,n,s,a){const r=this._pingPongRenderTarget;this._halfBlur(t,r,e,n,s,"latitudinal",a),this._halfBlur(r,t,n,n,s,"longitudinal",a)}_halfBlur(t,e,n,s,a,r,o){const l=this._renderer,c=this._blurMaterial;r!=="latitudinal"&&r!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const f=3,d=new Mn(this._lodPlanes[s],c),h=c.uniforms,u=this._sizeLods[n]-1,g=isFinite(a)?Math.PI/(2*u):2*Math.PI/(2*Vi-1),_=a/g,m=isFinite(a)?1+Math.floor(f*_):Vi;m>Vi&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Vi}`);const p=[];let M=0;for(let C=0;C<Vi;++C){const P=C/_,E=Math.exp(-P*P/2);p.push(E),C===0?M+=E:C<m&&(M+=2*E)}for(let C=0;C<p.length;C++)p[C]=p[C]/M;h.envMap.value=t.texture,h.samples.value=m,h.weights.value=p,h.latitudinal.value=r==="latitudinal",o&&(h.poleAxis.value=o);const{_lodMax:x}=this;h.dTheta.value=g,h.mipInt.value=x-n;const v=this._sizeLods[s],R=3*v*(s>x-bs?s-x+bs:0),w=4*(this._cubeSize-v);ur(e,R,w,3*v,2*v),l.setRenderTarget(e),l.render(d,Wo)}}function x_(i){const t=[],e=[],n=[];let s=i;const a=i-bs+1+Nd.length;for(let r=0;r<a;r++){const o=Math.pow(2,s);e.push(o);let l=1/o;r>i-bs?l=Nd[r-i+bs-1]:r===0&&(l=0),n.push(l);const c=1/(o-2),f=-c,d=1+c,h=[f,f,d,f,d,d,f,f,d,d,f,d],u=6,g=6,_=3,m=2,p=1,M=new Float32Array(_*g*u),x=new Float32Array(m*g*u),v=new Float32Array(p*g*u);for(let w=0;w<u;w++){const C=w%3*2/3-1,P=w>2?0:-1,E=[C,P,0,C+2/3,P,0,C+2/3,P+1,0,C,P,0,C+2/3,P+1,0,C,P+1,0];M.set(E,_*g*w),x.set(h,m*g*w);const y=[w,w,w,w,w,w];v.set(y,p*g*w)}const R=new zn;R.setAttribute("position",new Bn(M,_)),R.setAttribute("uv",new Bn(x,m)),R.setAttribute("faceIndex",new Bn(v,p)),t.push(R),s>bs&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function $d(i,t,e){const n=new Zi(i,t,e);return n.texture.mapping=co,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ur(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function b_(i,t,e){const n=new Float32Array(Vi),s=new F(0,1,0);return new Ri({name:"SphericalGaussianBlur",defines:{n:Vi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Tc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Si,depthTest:!1,depthWrite:!1})}function zd(){return new Ri({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Tc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Si,depthTest:!1,depthWrite:!1})}function Hd(){return new Ri({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Tc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Si,depthTest:!1,depthWrite:!1})}function Tc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function y_(i){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===bl||l===yl,f=l===Ns||l===Fs;if(c||f){let d=t.get(o);const h=d!==void 0?d.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==h)return e===null&&(e=new Bd(i)),d=c?e.fromEquirectangular(o,d):e.fromCubemap(o,d),d.texture.pmremVersion=o.pmremVersion,t.set(o,d),d.texture;if(d!==void 0)return d.texture;{const u=o.image;return c&&u&&u.height>0||f&&u&&s(u)?(e===null&&(e=new Bd(i)),d=c?e.fromEquirectangular(o):e.fromCubemap(o),d.texture.pmremVersion=o.pmremVersion,t.set(o,d),o.addEventListener("dispose",a),d.texture):null}}}return o}function s(o){let l=0;const c=6;for(let f=0;f<c;f++)o[f]!==void 0&&l++;return l===c}function a(o){const l=o.target;l.removeEventListener("dispose",a);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function r(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:r}}function M_(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&ua("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function S_(i,t,e,n){const s={},a=new WeakMap;function r(d){const h=d.target;h.index!==null&&t.remove(h.index);for(const g in h.attributes)t.remove(h.attributes[g]);for(const g in h.morphAttributes){const _=h.morphAttributes[g];for(let m=0,p=_.length;m<p;m++)t.remove(_[m])}h.removeEventListener("dispose",r),delete s[h.id];const u=a.get(h);u&&(t.remove(u),a.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,e.memory.geometries--}function o(d,h){return s[h.id]===!0||(h.addEventListener("dispose",r),s[h.id]=!0,e.memory.geometries++),h}function l(d){const h=d.attributes;for(const g in h)t.update(h[g],i.ARRAY_BUFFER);const u=d.morphAttributes;for(const g in u){const _=u[g];for(let m=0,p=_.length;m<p;m++)t.update(_[m],i.ARRAY_BUFFER)}}function c(d){const h=[],u=d.index,g=d.attributes.position;let _=0;if(u!==null){const M=u.array;_=u.version;for(let x=0,v=M.length;x<v;x+=3){const R=M[x+0],w=M[x+1],C=M[x+2];h.push(R,w,w,C,C,R)}}else if(g!==void 0){const M=g.array;_=g.version;for(let x=0,v=M.length/3-1;x<v;x+=3){const R=x+0,w=x+1,C=x+2;h.push(R,w,w,C,C,R)}}else return;const m=new(Ph(h)?Fh:Nh)(h,1);m.version=_;const p=a.get(d);p&&t.remove(p),a.set(d,m)}function f(d){const h=a.get(d);if(h){const u=d.index;u!==null&&h.version<u.version&&c(d)}else c(d);return a.get(d)}return{get:o,update:l,getWireframeAttribute:f}}function E_(i,t,e){let n;function s(h){n=h}let a,r;function o(h){a=h.type,r=h.bytesPerElement}function l(h,u){i.drawElements(n,u,a,h*r),e.update(u,n,1)}function c(h,u,g){g!==0&&(i.drawElementsInstanced(n,u,a,h*r,g),e.update(u,n,g))}function f(h,u,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,a,h,0,g);let m=0;for(let p=0;p<g;p++)m+=u[p];e.update(m,n,1)}function d(h,u,g,_){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<h.length;p++)c(h[p]/r,u[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(n,u,0,a,h,0,_,0,g);let p=0;for(let M=0;M<g;M++)p+=u[M]*_[M];e.update(p,n,1)}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=f,this.renderMultiDrawInstances=d}function T_(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(a,r,o){switch(e.calls++,r){case i.TRIANGLES:e.triangles+=o*(a/3);break;case i.LINES:e.lines+=o*(a/2);break;case i.LINE_STRIP:e.lines+=o*(a-1);break;case i.LINE_LOOP:e.lines+=o*a;break;case i.POINTS:e.points+=o*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",r);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function w_(i,t,e){const n=new WeakMap,s=new Se;function a(r,o,l){const c=r.morphTargetInfluences,f=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=f!==void 0?f.length:0;let h=n.get(o);if(h===void 0||h.count!==d){let E=function(){C.dispose(),n.delete(o),o.removeEventListener("dispose",E)};h!==void 0&&h.texture.dispose();const u=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,_=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],M=o.morphAttributes.color||[];let x=0;u===!0&&(x=1),g===!0&&(x=2),_===!0&&(x=3);let v=o.attributes.position.count*x,R=1;v>t.maxTextureSize&&(R=Math.ceil(v/t.maxTextureSize),v=t.maxTextureSize);const w=new Float32Array(v*R*4*d),C=new Dh(w,v,R,d);C.type=Qn,C.needsUpdate=!0;const P=x*4;for(let y=0;y<d;y++){const L=m[y],X=p[y],D=M[y],z=v*R*4*y;for(let K=0;K<L.count;K++){const H=K*P;u===!0&&(s.fromBufferAttribute(L,K),w[z+H+0]=s.x,w[z+H+1]=s.y,w[z+H+2]=s.z,w[z+H+3]=0),g===!0&&(s.fromBufferAttribute(X,K),w[z+H+4]=s.x,w[z+H+5]=s.y,w[z+H+6]=s.z,w[z+H+7]=0),_===!0&&(s.fromBufferAttribute(D,K),w[z+H+8]=s.x,w[z+H+9]=s.y,w[z+H+10]=s.z,w[z+H+11]=D.itemSize===4?s.w:1)}}h={count:d,texture:C,size:new Kt(v,R)},n.set(o,h),o.addEventListener("dispose",E)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",r.morphTexture,e);else{let u=0;for(let _=0;_<c.length;_++)u+=c[_];const g=o.morphTargetsRelative?1:1-u;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",h.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",h.size)}return{update:a}}function A_(i,t,e,n){let s=new WeakMap;function a(l){const c=n.render.frame,f=l.geometry,d=t.get(l,f);if(s.get(d)!==c&&(t.update(d),s.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;s.get(h)!==c&&(h.update(),s.set(h,c))}return d}function r(){s=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:a,dispose:r}}class Gh extends He{constructor(t,e,n,s,a,r,o,l,c,f=ws){if(f!==ws&&f!==Bs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&f===ws&&(n=Ki),n===void 0&&f===Bs&&(n=Os),super(null,s,a,r,o,l,f,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:Sn,this.minFilter=l!==void 0?l:Sn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Vh=new He,Gd=new Gh(1,1),Wh=new Dh,Xh=new u0,qh=new $h,Vd=[],Wd=[],Xd=new Float32Array(16),qd=new Float32Array(9),Yd=new Float32Array(4);function js(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let a=Vd[s];if(a===void 0&&(a=new Float32Array(s),Vd[s]=a),t!==0){n.toArray(a,0);for(let r=1,o=0;r!==t;++r)o+=e,i[r].toArray(a,o)}return a}function Re(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Ce(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function uo(i,t){let e=Wd[t];e===void 0&&(e=new Int32Array(t),Wd[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function R_(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function C_(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Re(e,t))return;i.uniform2fv(this.addr,t),Ce(e,t)}}function P_(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Re(e,t))return;i.uniform3fv(this.addr,t),Ce(e,t)}}function L_(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Re(e,t))return;i.uniform4fv(this.addr,t),Ce(e,t)}}function D_(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Re(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Ce(e,t)}else{if(Re(e,n))return;Yd.set(n),i.uniformMatrix2fv(this.addr,!1,Yd),Ce(e,n)}}function I_(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Re(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Ce(e,t)}else{if(Re(e,n))return;qd.set(n),i.uniformMatrix3fv(this.addr,!1,qd),Ce(e,n)}}function k_(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Re(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Ce(e,t)}else{if(Re(e,n))return;Xd.set(n),i.uniformMatrix4fv(this.addr,!1,Xd),Ce(e,n)}}function U_(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function N_(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Re(e,t))return;i.uniform2iv(this.addr,t),Ce(e,t)}}function F_(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Re(e,t))return;i.uniform3iv(this.addr,t),Ce(e,t)}}function O_(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Re(e,t))return;i.uniform4iv(this.addr,t),Ce(e,t)}}function B_(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function $_(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Re(e,t))return;i.uniform2uiv(this.addr,t),Ce(e,t)}}function z_(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Re(e,t))return;i.uniform3uiv(this.addr,t),Ce(e,t)}}function H_(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Re(e,t))return;i.uniform4uiv(this.addr,t),Ce(e,t)}}function G_(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let a;this.type===i.SAMPLER_2D_SHADOW?(Gd.compareFunction=Ch,a=Gd):a=Vh,e.setTexture2D(t||a,s)}function V_(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Xh,s)}function W_(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||qh,s)}function X_(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Wh,s)}function q_(i){switch(i){case 5126:return R_;case 35664:return C_;case 35665:return P_;case 35666:return L_;case 35674:return D_;case 35675:return I_;case 35676:return k_;case 5124:case 35670:return U_;case 35667:case 35671:return N_;case 35668:case 35672:return F_;case 35669:case 35673:return O_;case 5125:return B_;case 36294:return $_;case 36295:return z_;case 36296:return H_;case 35678:case 36198:case 36298:case 36306:case 35682:return G_;case 35679:case 36299:case 36307:return V_;case 35680:case 36300:case 36308:case 36293:return W_;case 36289:case 36303:case 36311:case 36292:return X_}}function Y_(i,t){i.uniform1fv(this.addr,t)}function j_(i,t){const e=js(t,this.size,2);i.uniform2fv(this.addr,e)}function K_(i,t){const e=js(t,this.size,3);i.uniform3fv(this.addr,e)}function Z_(i,t){const e=js(t,this.size,4);i.uniform4fv(this.addr,e)}function J_(i,t){const e=js(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Q_(i,t){const e=js(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function tx(i,t){const e=js(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function ex(i,t){i.uniform1iv(this.addr,t)}function nx(i,t){i.uniform2iv(this.addr,t)}function ix(i,t){i.uniform3iv(this.addr,t)}function sx(i,t){i.uniform4iv(this.addr,t)}function ax(i,t){i.uniform1uiv(this.addr,t)}function rx(i,t){i.uniform2uiv(this.addr,t)}function ox(i,t){i.uniform3uiv(this.addr,t)}function lx(i,t){i.uniform4uiv(this.addr,t)}function cx(i,t,e){const n=this.cache,s=t.length,a=uo(e,s);Re(n,a)||(i.uniform1iv(this.addr,a),Ce(n,a));for(let r=0;r!==s;++r)e.setTexture2D(t[r]||Vh,a[r])}function dx(i,t,e){const n=this.cache,s=t.length,a=uo(e,s);Re(n,a)||(i.uniform1iv(this.addr,a),Ce(n,a));for(let r=0;r!==s;++r)e.setTexture3D(t[r]||Xh,a[r])}function fx(i,t,e){const n=this.cache,s=t.length,a=uo(e,s);Re(n,a)||(i.uniform1iv(this.addr,a),Ce(n,a));for(let r=0;r!==s;++r)e.setTextureCube(t[r]||qh,a[r])}function hx(i,t,e){const n=this.cache,s=t.length,a=uo(e,s);Re(n,a)||(i.uniform1iv(this.addr,a),Ce(n,a));for(let r=0;r!==s;++r)e.setTexture2DArray(t[r]||Wh,a[r])}function ux(i){switch(i){case 5126:return Y_;case 35664:return j_;case 35665:return K_;case 35666:return Z_;case 35674:return J_;case 35675:return Q_;case 35676:return tx;case 5124:case 35670:return ex;case 35667:case 35671:return nx;case 35668:case 35672:return ix;case 35669:case 35673:return sx;case 5125:return ax;case 36294:return rx;case 36295:return ox;case 36296:return lx;case 35678:case 36198:case 36298:case 36306:case 35682:return cx;case 35679:case 36299:case 36307:return dx;case 35680:case 36300:case 36308:case 36293:return fx;case 36289:case 36303:case 36311:case 36292:return hx}}class px{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=q_(e.type)}}class mx{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=ux(e.type)}}class gx{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let a=0,r=s.length;a!==r;++a){const o=s[a];o.setValue(t,e[o.id],n)}}}const Ko=/(\w+)(\])?(\[|\.)?/g;function jd(i,t){i.seq.push(t),i.map[t.id]=t}function vx(i,t,e){const n=i.name,s=n.length;for(Ko.lastIndex=0;;){const a=Ko.exec(n),r=Ko.lastIndex;let o=a[1];const l=a[2]==="]",c=a[3];if(l&&(o=o|0),c===void 0||c==="["&&r+2===s){jd(e,c===void 0?new px(o,i,t):new mx(o,i,t));break}else{let d=e.map[o];d===void 0&&(d=new gx(o),jd(e,d)),e=d}}}class Ir{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const a=t.getActiveUniform(e,s),r=t.getUniformLocation(e,a.name);vx(a,r,this)}}setValue(t,e,n,s){const a=this.map[e];a!==void 0&&a.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let a=0,r=e.length;a!==r;++a){const o=e[a],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,a=t.length;s!==a;++s){const r=t[s];r.id in e&&n.push(r)}return n}}function Kd(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const _x=37297;let xx=0;function bx(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),a=Math.min(t+6,e.length);for(let r=s;r<a;r++){const o=r+1;n.push(`${o===t?">":" "} ${o}: ${e[r]}`)}return n.join(`
`)}const Zd=new Ft;function yx(i){jt._getMatrix(Zd,jt.workingColorSpace,i);const t=`mat3( ${Zd.elements.map(e=>e.toFixed(4))} )`;switch(jt.getTransfer(i)){case fo:return[t,"LinearTransferOETF"];case re:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Jd(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const r=parseInt(a[1]);return e.toUpperCase()+`

`+s+`

`+bx(i.getShaderSource(t),r)}else return s}function Mx(i,t){const e=yx(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Sx(i,t){let e;switch(t){case $m:e="Linear";break;case zm:e="Reinhard";break;case Hm:e="Cineon";break;case Gm:e="ACESFilmic";break;case Wm:e="AgX";break;case Xm:e="Neutral";break;case Vm:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const pr=new F;function Ex(){jt.getLuminanceCoefficients(pr);const i=pr.x.toFixed(4),t=pr.y.toFixed(4),e=pr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Tx(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(pa).join(`
`)}function wx(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Ax(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const a=i.getActiveAttrib(t,s),r=a.name;let o=1;a.type===i.FLOAT_MAT2&&(o=2),a.type===i.FLOAT_MAT3&&(o=3),a.type===i.FLOAT_MAT4&&(o=4),e[r]={type:a.type,location:i.getAttribLocation(t,r),locationSize:o}}return e}function pa(i){return i!==""}function Qd(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function tf(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Rx=/^[ \t]*#include +<([\w\d./]+)>/gm;function Zl(i){return i.replace(Rx,Px)}const Cx=new Map;function Px(i,t){let e=Bt[t];if(e===void 0){const n=Cx.get(t);if(n!==void 0)e=Bt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Zl(e)}const Lx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ef(i){return i.replace(Lx,Dx)}function Dx(i,t,e,n){let s="";for(let a=parseInt(t);a<parseInt(e);a++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return s}function nf(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Ix(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===mh?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===xm?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===jn&&(t="SHADOWMAP_TYPE_VSM"),t}function kx(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Ns:case Fs:t="ENVMAP_TYPE_CUBE";break;case co:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Ux(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Fs:t="ENVMAP_MODE_REFRACTION";break}return t}function Nx(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case gh:t="ENVMAP_BLENDING_MULTIPLY";break;case Om:t="ENVMAP_BLENDING_MIX";break;case Bm:t="ENVMAP_BLENDING_ADD";break}return t}function Fx(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function Ox(i,t,e,n){const s=i.getContext(),a=e.defines;let r=e.vertexShader,o=e.fragmentShader;const l=Ix(e),c=kx(e),f=Ux(e),d=Nx(e),h=Fx(e),u=Tx(e),g=wx(a),_=s.createProgram();let m,p,M=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(pa).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(pa).join(`
`),p.length>0&&(p+=`
`)):(m=[nf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+f:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(pa).join(`
`),p=[nf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+f:"",e.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Ei?"#define TONE_MAPPING":"",e.toneMapping!==Ei?Bt.tonemapping_pars_fragment:"",e.toneMapping!==Ei?Sx("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Bt.colorspace_pars_fragment,Mx("linearToOutputTexel",e.outputColorSpace),Ex(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(pa).join(`
`)),r=Zl(r),r=Qd(r,e),r=tf(r,e),o=Zl(o),o=Qd(o,e),o=tf(o,e),r=ef(r),o=ef(o),e.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,m=[u,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===md?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===md?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const x=M+m+r,v=M+p+o,R=Kd(s,s.VERTEX_SHADER,x),w=Kd(s,s.FRAGMENT_SHADER,v);s.attachShader(_,R),s.attachShader(_,w),e.index0AttributeName!==void 0?s.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function C(L){if(i.debug.checkShaderErrors){const X=s.getProgramInfoLog(_).trim(),D=s.getShaderInfoLog(R).trim(),z=s.getShaderInfoLog(w).trim();let K=!0,H=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(K=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,R,w);else{const et=Jd(s,R,"vertex"),G=Jd(s,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+X+`
`+et+`
`+G)}else X!==""?console.warn("THREE.WebGLProgram: Program Info Log:",X):(D===""||z==="")&&(H=!1);H&&(L.diagnostics={runnable:K,programLog:X,vertexShader:{log:D,prefix:m},fragmentShader:{log:z,prefix:p}})}s.deleteShader(R),s.deleteShader(w),P=new Ir(s,_),E=Ax(s,_)}let P;this.getUniforms=function(){return P===void 0&&C(this),P};let E;this.getAttributes=function(){return E===void 0&&C(this),E};let y=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=s.getProgramParameter(_,_x)),y},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=xx++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=R,this.fragmentShader=w,this}let Bx=0;class $x{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),a=this._getShaderStage(n),r=this._getShaderCacheForMaterial(t);return r.has(s)===!1&&(r.add(s),s.usedTimes++),r.has(a)===!1&&(r.add(a),a.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new zx(t),e.set(t,n)),n}}class zx{constructor(t){this.id=Bx++,this.code=t,this.usedTimes=0}}function Hx(i,t,e,n,s,a,r){const o=new kh,l=new $x,c=new Set,f=[],d=s.logarithmicDepthBuffer,h=s.vertexTextures;let u=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(E){return c.add(E),E===0?"uv":`uv${E}`}function m(E,y,L,X,D){const z=X.fog,K=D.geometry,H=E.isMeshStandardMaterial?X.environment:null,et=(E.isMeshStandardMaterial?e:t).get(E.envMap||H),G=et&&et.mapping===co?et.image.height:null,rt=g[E.type];E.precision!==null&&(u=s.getMaxPrecision(E.precision),u!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",u,"instead."));const ut=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,St=ut!==void 0?ut.length:0;let $t=0;K.morphAttributes.position!==void 0&&($t=1),K.morphAttributes.normal!==void 0&&($t=2),K.morphAttributes.color!==void 0&&($t=3);let oe,j,st,Et;if(rt){const se=Pn[rt];oe=se.vertexShader,j=se.fragmentShader}else oe=E.vertexShader,j=E.fragmentShader,l.update(E),st=l.getVertexShaderID(E),Et=l.getFragmentShaderID(E);const lt=i.getRenderTarget(),Pt=i.state.buffers.depth.getReversed(),kt=D.isInstancedMesh===!0,zt=D.isBatchedMesh===!0,_e=!!E.map,qt=!!E.matcap,Ee=!!et,N=!!E.aoMap,an=!!E.lightMap,Gt=!!E.bumpMap,Vt=!!E.normalMap,Rt=!!E.displacementMap,de=!!E.emissiveMap,At=!!E.metalnessMap,A=!!E.roughnessMap,b=E.anisotropy>0,O=E.clearcoat>0,Z=E.dispersion>0,tt=E.iridescence>0,Y=E.sheen>0,Tt=E.transmission>0,ct=b&&!!E.anisotropyMap,pt=O&&!!E.clearcoatMap,Yt=O&&!!E.clearcoatNormalMap,nt=O&&!!E.clearcoatRoughnessMap,mt=tt&&!!E.iridescenceMap,Ct=tt&&!!E.iridescenceThicknessMap,Lt=Y&&!!E.sheenColorMap,gt=Y&&!!E.sheenRoughnessMap,Wt=!!E.specularMap,Ot=!!E.specularColorMap,le=!!E.specularIntensityMap,I=Tt&&!!E.transmissionMap,ot=Tt&&!!E.thicknessMap,V=!!E.gradientMap,J=!!E.alphaMap,ht=E.alphaTest>0,dt=!!E.alphaHash,Ut=!!E.extensions;let ye=Ei;E.toneMapped&&(lt===null||lt.isXRRenderTarget===!0)&&(ye=i.toneMapping);const ke={shaderID:rt,shaderType:E.type,shaderName:E.name,vertexShader:oe,fragmentShader:j,defines:E.defines,customVertexShaderID:st,customFragmentShaderID:Et,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:u,batching:zt,batchingColor:zt&&D._colorsTexture!==null,instancing:kt,instancingColor:kt&&D.instanceColor!==null,instancingMorph:kt&&D.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:lt===null?i.outputColorSpace:lt.isXRRenderTarget===!0?lt.texture.colorSpace:Ws,alphaToCoverage:!!E.alphaToCoverage,map:_e,matcap:qt,envMap:Ee,envMapMode:Ee&&et.mapping,envMapCubeUVHeight:G,aoMap:N,lightMap:an,bumpMap:Gt,normalMap:Vt,displacementMap:h&&Rt,emissiveMap:de,normalMapObjectSpace:Vt&&E.normalMapType===Km,normalMapTangentSpace:Vt&&E.normalMapType===Rh,metalnessMap:At,roughnessMap:A,anisotropy:b,anisotropyMap:ct,clearcoat:O,clearcoatMap:pt,clearcoatNormalMap:Yt,clearcoatRoughnessMap:nt,dispersion:Z,iridescence:tt,iridescenceMap:mt,iridescenceThicknessMap:Ct,sheen:Y,sheenColorMap:Lt,sheenRoughnessMap:gt,specularMap:Wt,specularColorMap:Ot,specularIntensityMap:le,transmission:Tt,transmissionMap:I,thicknessMap:ot,gradientMap:V,opaque:E.transparent===!1&&E.blending===Ts&&E.alphaToCoverage===!1,alphaMap:J,alphaTest:ht,alphaHash:dt,combine:E.combine,mapUv:_e&&_(E.map.channel),aoMapUv:N&&_(E.aoMap.channel),lightMapUv:an&&_(E.lightMap.channel),bumpMapUv:Gt&&_(E.bumpMap.channel),normalMapUv:Vt&&_(E.normalMap.channel),displacementMapUv:Rt&&_(E.displacementMap.channel),emissiveMapUv:de&&_(E.emissiveMap.channel),metalnessMapUv:At&&_(E.metalnessMap.channel),roughnessMapUv:A&&_(E.roughnessMap.channel),anisotropyMapUv:ct&&_(E.anisotropyMap.channel),clearcoatMapUv:pt&&_(E.clearcoatMap.channel),clearcoatNormalMapUv:Yt&&_(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:nt&&_(E.clearcoatRoughnessMap.channel),iridescenceMapUv:mt&&_(E.iridescenceMap.channel),iridescenceThicknessMapUv:Ct&&_(E.iridescenceThicknessMap.channel),sheenColorMapUv:Lt&&_(E.sheenColorMap.channel),sheenRoughnessMapUv:gt&&_(E.sheenRoughnessMap.channel),specularMapUv:Wt&&_(E.specularMap.channel),specularColorMapUv:Ot&&_(E.specularColorMap.channel),specularIntensityMapUv:le&&_(E.specularIntensityMap.channel),transmissionMapUv:I&&_(E.transmissionMap.channel),thicknessMapUv:ot&&_(E.thicknessMap.channel),alphaMapUv:J&&_(E.alphaMap.channel),vertexTangents:!!K.attributes.tangent&&(Vt||b),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!K.attributes.uv&&(_e||J),fog:!!z,useFog:E.fog===!0,fogExp2:!!z&&z.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:Pt,skinning:D.isSkinnedMesh===!0,morphTargets:K.morphAttributes.position!==void 0,morphNormals:K.morphAttributes.normal!==void 0,morphColors:K.morphAttributes.color!==void 0,morphTargetsCount:St,morphTextureStride:$t,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:E.dithering,shadowMapEnabled:i.shadowMap.enabled&&L.length>0,shadowMapType:i.shadowMap.type,toneMapping:ye,decodeVideoTexture:_e&&E.map.isVideoTexture===!0&&jt.getTransfer(E.map.colorSpace)===re,decodeVideoTextureEmissive:de&&E.emissiveMap.isVideoTexture===!0&&jt.getTransfer(E.emissiveMap.colorSpace)===re,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===Jn,flipSided:E.side===qe,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:Ut&&E.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ut&&E.extensions.multiDraw===!0||zt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return ke.vertexUv1s=c.has(1),ke.vertexUv2s=c.has(2),ke.vertexUv3s=c.has(3),c.clear(),ke}function p(E){const y=[];if(E.shaderID?y.push(E.shaderID):(y.push(E.customVertexShaderID),y.push(E.customFragmentShaderID)),E.defines!==void 0)for(const L in E.defines)y.push(L),y.push(E.defines[L]);return E.isRawShaderMaterial===!1&&(M(y,E),x(y,E),y.push(i.outputColorSpace)),y.push(E.customProgramCacheKey),y.join()}function M(E,y){E.push(y.precision),E.push(y.outputColorSpace),E.push(y.envMapMode),E.push(y.envMapCubeUVHeight),E.push(y.mapUv),E.push(y.alphaMapUv),E.push(y.lightMapUv),E.push(y.aoMapUv),E.push(y.bumpMapUv),E.push(y.normalMapUv),E.push(y.displacementMapUv),E.push(y.emissiveMapUv),E.push(y.metalnessMapUv),E.push(y.roughnessMapUv),E.push(y.anisotropyMapUv),E.push(y.clearcoatMapUv),E.push(y.clearcoatNormalMapUv),E.push(y.clearcoatRoughnessMapUv),E.push(y.iridescenceMapUv),E.push(y.iridescenceThicknessMapUv),E.push(y.sheenColorMapUv),E.push(y.sheenRoughnessMapUv),E.push(y.specularMapUv),E.push(y.specularColorMapUv),E.push(y.specularIntensityMapUv),E.push(y.transmissionMapUv),E.push(y.thicknessMapUv),E.push(y.combine),E.push(y.fogExp2),E.push(y.sizeAttenuation),E.push(y.morphTargetsCount),E.push(y.morphAttributeCount),E.push(y.numDirLights),E.push(y.numPointLights),E.push(y.numSpotLights),E.push(y.numSpotLightMaps),E.push(y.numHemiLights),E.push(y.numRectAreaLights),E.push(y.numDirLightShadows),E.push(y.numPointLightShadows),E.push(y.numSpotLightShadows),E.push(y.numSpotLightShadowsWithMaps),E.push(y.numLightProbes),E.push(y.shadowMapType),E.push(y.toneMapping),E.push(y.numClippingPlanes),E.push(y.numClipIntersection),E.push(y.depthPacking)}function x(E,y){o.disableAll(),y.supportsVertexTextures&&o.enable(0),y.instancing&&o.enable(1),y.instancingColor&&o.enable(2),y.instancingMorph&&o.enable(3),y.matcap&&o.enable(4),y.envMap&&o.enable(5),y.normalMapObjectSpace&&o.enable(6),y.normalMapTangentSpace&&o.enable(7),y.clearcoat&&o.enable(8),y.iridescence&&o.enable(9),y.alphaTest&&o.enable(10),y.vertexColors&&o.enable(11),y.vertexAlphas&&o.enable(12),y.vertexUv1s&&o.enable(13),y.vertexUv2s&&o.enable(14),y.vertexUv3s&&o.enable(15),y.vertexTangents&&o.enable(16),y.anisotropy&&o.enable(17),y.alphaHash&&o.enable(18),y.batching&&o.enable(19),y.dispersion&&o.enable(20),y.batchingColor&&o.enable(21),E.push(o.mask),o.disableAll(),y.fog&&o.enable(0),y.useFog&&o.enable(1),y.flatShading&&o.enable(2),y.logarithmicDepthBuffer&&o.enable(3),y.reverseDepthBuffer&&o.enable(4),y.skinning&&o.enable(5),y.morphTargets&&o.enable(6),y.morphNormals&&o.enable(7),y.morphColors&&o.enable(8),y.premultipliedAlpha&&o.enable(9),y.shadowMapEnabled&&o.enable(10),y.doubleSided&&o.enable(11),y.flipSided&&o.enable(12),y.useDepthPacking&&o.enable(13),y.dithering&&o.enable(14),y.transmission&&o.enable(15),y.sheen&&o.enable(16),y.opaque&&o.enable(17),y.pointsUvs&&o.enable(18),y.decodeVideoTexture&&o.enable(19),y.decodeVideoTextureEmissive&&o.enable(20),y.alphaToCoverage&&o.enable(21),E.push(o.mask)}function v(E){const y=g[E.type];let L;if(y){const X=Pn[y];L=T0.clone(X.uniforms)}else L=E.uniforms;return L}function R(E,y){let L;for(let X=0,D=f.length;X<D;X++){const z=f[X];if(z.cacheKey===y){L=z,++L.usedTimes;break}}return L===void 0&&(L=new Ox(i,y,E,a),f.push(L)),L}function w(E){if(--E.usedTimes===0){const y=f.indexOf(E);f[y]=f[f.length-1],f.pop(),E.destroy()}}function C(E){l.remove(E)}function P(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:v,acquireProgram:R,releaseProgram:w,releaseShaderCache:C,programs:f,dispose:P}}function Gx(){let i=new WeakMap;function t(r){return i.has(r)}function e(r){let o=i.get(r);return o===void 0&&(o={},i.set(r,o)),o}function n(r){i.delete(r)}function s(r,o,l){i.get(r)[o]=l}function a(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:a}}function Vx(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function sf(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function af(){const i=[];let t=0;const e=[],n=[],s=[];function a(){t=0,e.length=0,n.length=0,s.length=0}function r(d,h,u,g,_,m){let p=i[t];return p===void 0?(p={id:d.id,object:d,geometry:h,material:u,groupOrder:g,renderOrder:d.renderOrder,z:_,group:m},i[t]=p):(p.id=d.id,p.object=d,p.geometry=h,p.material=u,p.groupOrder=g,p.renderOrder=d.renderOrder,p.z=_,p.group=m),t++,p}function o(d,h,u,g,_,m){const p=r(d,h,u,g,_,m);u.transmission>0?n.push(p):u.transparent===!0?s.push(p):e.push(p)}function l(d,h,u,g,_,m){const p=r(d,h,u,g,_,m);u.transmission>0?n.unshift(p):u.transparent===!0?s.unshift(p):e.unshift(p)}function c(d,h){e.length>1&&e.sort(d||Vx),n.length>1&&n.sort(h||sf),s.length>1&&s.sort(h||sf)}function f(){for(let d=t,h=i.length;d<h;d++){const u=i[d];if(u.id===null)break;u.id=null,u.object=null,u.geometry=null,u.material=null,u.group=null}}return{opaque:e,transmissive:n,transparent:s,init:a,push:o,unshift:l,finish:f,sort:c}}function Wx(){let i=new WeakMap;function t(n,s){const a=i.get(n);let r;return a===void 0?(r=new af,i.set(n,[r])):s>=a.length?(r=new af,a.push(r)):r=a[s],r}function e(){i=new WeakMap}return{get:t,dispose:e}}function Xx(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new F,color:new ee};break;case"SpotLight":e={position:new F,direction:new F,color:new ee,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new F,color:new ee,distance:0,decay:0};break;case"HemisphereLight":e={direction:new F,skyColor:new ee,groundColor:new ee};break;case"RectAreaLight":e={color:new ee,position:new F,halfWidth:new F,halfHeight:new F};break}return i[t.id]=e,e}}}function qx(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Kt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Kt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Kt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let Yx=0;function jx(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Kx(i){const t=new Xx,e=qx(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new F);const s=new F,a=new be,r=new be;function o(c){let f=0,d=0,h=0;for(let E=0;E<9;E++)n.probe[E].set(0,0,0);let u=0,g=0,_=0,m=0,p=0,M=0,x=0,v=0,R=0,w=0,C=0;c.sort(jx);for(let E=0,y=c.length;E<y;E++){const L=c[E],X=L.color,D=L.intensity,z=L.distance,K=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)f+=X.r*D,d+=X.g*D,h+=X.b*D;else if(L.isLightProbe){for(let H=0;H<9;H++)n.probe[H].addScaledVector(L.sh.coefficients[H],D);C++}else if(L.isDirectionalLight){const H=t.get(L);if(H.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const et=L.shadow,G=e.get(L);G.shadowIntensity=et.intensity,G.shadowBias=et.bias,G.shadowNormalBias=et.normalBias,G.shadowRadius=et.radius,G.shadowMapSize=et.mapSize,n.directionalShadow[u]=G,n.directionalShadowMap[u]=K,n.directionalShadowMatrix[u]=L.shadow.matrix,M++}n.directional[u]=H,u++}else if(L.isSpotLight){const H=t.get(L);H.position.setFromMatrixPosition(L.matrixWorld),H.color.copy(X).multiplyScalar(D),H.distance=z,H.coneCos=Math.cos(L.angle),H.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),H.decay=L.decay,n.spot[_]=H;const et=L.shadow;if(L.map&&(n.spotLightMap[R]=L.map,R++,et.updateMatrices(L),L.castShadow&&w++),n.spotLightMatrix[_]=et.matrix,L.castShadow){const G=e.get(L);G.shadowIntensity=et.intensity,G.shadowBias=et.bias,G.shadowNormalBias=et.normalBias,G.shadowRadius=et.radius,G.shadowMapSize=et.mapSize,n.spotShadow[_]=G,n.spotShadowMap[_]=K,v++}_++}else if(L.isRectAreaLight){const H=t.get(L);H.color.copy(X).multiplyScalar(D),H.halfWidth.set(L.width*.5,0,0),H.halfHeight.set(0,L.height*.5,0),n.rectArea[m]=H,m++}else if(L.isPointLight){const H=t.get(L);if(H.color.copy(L.color).multiplyScalar(L.intensity),H.distance=L.distance,H.decay=L.decay,L.castShadow){const et=L.shadow,G=e.get(L);G.shadowIntensity=et.intensity,G.shadowBias=et.bias,G.shadowNormalBias=et.normalBias,G.shadowRadius=et.radius,G.shadowMapSize=et.mapSize,G.shadowCameraNear=et.camera.near,G.shadowCameraFar=et.camera.far,n.pointShadow[g]=G,n.pointShadowMap[g]=K,n.pointShadowMatrix[g]=L.shadow.matrix,x++}n.point[g]=H,g++}else if(L.isHemisphereLight){const H=t.get(L);H.skyColor.copy(L.color).multiplyScalar(D),H.groundColor.copy(L.groundColor).multiplyScalar(D),n.hemi[p]=H,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=at.LTC_FLOAT_1,n.rectAreaLTC2=at.LTC_FLOAT_2):(n.rectAreaLTC1=at.LTC_HALF_1,n.rectAreaLTC2=at.LTC_HALF_2)),n.ambient[0]=f,n.ambient[1]=d,n.ambient[2]=h;const P=n.hash;(P.directionalLength!==u||P.pointLength!==g||P.spotLength!==_||P.rectAreaLength!==m||P.hemiLength!==p||P.numDirectionalShadows!==M||P.numPointShadows!==x||P.numSpotShadows!==v||P.numSpotMaps!==R||P.numLightProbes!==C)&&(n.directional.length=u,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.pointShadow.length=x,n.pointShadowMap.length=x,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=M,n.pointShadowMatrix.length=x,n.spotLightMatrix.length=v+R-w,n.spotLightMap.length=R,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=C,P.directionalLength=u,P.pointLength=g,P.spotLength=_,P.rectAreaLength=m,P.hemiLength=p,P.numDirectionalShadows=M,P.numPointShadows=x,P.numSpotShadows=v,P.numSpotMaps=R,P.numLightProbes=C,n.version=Yx++)}function l(c,f){let d=0,h=0,u=0,g=0,_=0;const m=f.matrixWorldInverse;for(let p=0,M=c.length;p<M;p++){const x=c[p];if(x.isDirectionalLight){const v=n.directional[d];v.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(m),d++}else if(x.isSpotLight){const v=n.spot[u];v.position.setFromMatrixPosition(x.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(m),u++}else if(x.isRectAreaLight){const v=n.rectArea[g];v.position.setFromMatrixPosition(x.matrixWorld),v.position.applyMatrix4(m),r.identity(),a.copy(x.matrixWorld),a.premultiply(m),r.extractRotation(a),v.halfWidth.set(x.width*.5,0,0),v.halfHeight.set(0,x.height*.5,0),v.halfWidth.applyMatrix4(r),v.halfHeight.applyMatrix4(r),g++}else if(x.isPointLight){const v=n.point[h];v.position.setFromMatrixPosition(x.matrixWorld),v.position.applyMatrix4(m),h++}else if(x.isHemisphereLight){const v=n.hemi[_];v.direction.setFromMatrixPosition(x.matrixWorld),v.direction.transformDirection(m),_++}}}return{setup:o,setupView:l,state:n}}function rf(i){const t=new Kx(i),e=[],n=[];function s(f){c.camera=f,e.length=0,n.length=0}function a(f){e.push(f)}function r(f){n.push(f)}function o(){t.setup(e)}function l(f){t.setupView(e,f)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:a,pushShadow:r}}function Zx(i){let t=new WeakMap;function e(s,a=0){const r=t.get(s);let o;return r===void 0?(o=new rf(i),t.set(s,[o])):a>=r.length?(o=new rf(i),r.push(o)):o=r[a],o}function n(){t=new WeakMap}return{get:e,dispose:n}}class Jx extends qs{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Ym,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Qx extends qs{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const tb=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,eb=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function nb(i,t,e){let n=new Ec;const s=new Kt,a=new Kt,r=new Se,o=new Jx({depthPacking:jm}),l=new Qx,c={},f=e.maxTextureSize,d={[Ai]:qe,[qe]:Ai,[Jn]:Jn},h=new Ri({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Kt},radius:{value:4}},vertexShader:tb,fragmentShader:eb}),u=h.clone();u.defines.HORIZONTAL_PASS=1;const g=new zn;g.setAttribute("position",new Bn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Mn(g,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=mh;let p=this.type;this.render=function(w,C,P){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;const E=i.getRenderTarget(),y=i.getActiveCubeFace(),L=i.getActiveMipmapLevel(),X=i.state;X.setBlending(Si),X.buffers.color.setClear(1,1,1,1),X.buffers.depth.setTest(!0),X.setScissorTest(!1);const D=p!==jn&&this.type===jn,z=p===jn&&this.type!==jn;for(let K=0,H=w.length;K<H;K++){const et=w[K],G=et.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",et,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;s.copy(G.mapSize);const rt=G.getFrameExtents();if(s.multiply(rt),a.copy(G.mapSize),(s.x>f||s.y>f)&&(s.x>f&&(a.x=Math.floor(f/rt.x),s.x=a.x*rt.x,G.mapSize.x=a.x),s.y>f&&(a.y=Math.floor(f/rt.y),s.y=a.y*rt.y,G.mapSize.y=a.y)),G.map===null||D===!0||z===!0){const St=this.type!==jn?{minFilter:Sn,magFilter:Sn}:{};G.map!==null&&G.map.dispose(),G.map=new Zi(s.x,s.y,St),G.map.texture.name=et.name+".shadowMap",G.camera.updateProjectionMatrix()}i.setRenderTarget(G.map),i.clear();const ut=G.getViewportCount();for(let St=0;St<ut;St++){const $t=G.getViewport(St);r.set(a.x*$t.x,a.y*$t.y,a.x*$t.z,a.y*$t.w),X.viewport(r),G.updateMatrices(et,St),n=G.getFrustum(),v(C,P,G.camera,et,this.type)}G.isPointLightShadow!==!0&&this.type===jn&&M(G,P),G.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(E,y,L)};function M(w,C){const P=t.update(_);h.defines.VSM_SAMPLES!==w.blurSamples&&(h.defines.VSM_SAMPLES=w.blurSamples,u.defines.VSM_SAMPLES=w.blurSamples,h.needsUpdate=!0,u.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new Zi(s.x,s.y)),h.uniforms.shadow_pass.value=w.map.texture,h.uniforms.resolution.value=w.mapSize,h.uniforms.radius.value=w.radius,i.setRenderTarget(w.mapPass),i.clear(),i.renderBufferDirect(C,null,P,h,_,null),u.uniforms.shadow_pass.value=w.mapPass.texture,u.uniforms.resolution.value=w.mapSize,u.uniforms.radius.value=w.radius,i.setRenderTarget(w.map),i.clear(),i.renderBufferDirect(C,null,P,u,_,null)}function x(w,C,P,E){let y=null;const L=P.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(L!==void 0)y=L;else if(y=P.isPointLight===!0?l:o,i.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){const X=y.uuid,D=C.uuid;let z=c[X];z===void 0&&(z={},c[X]=z);let K=z[D];K===void 0&&(K=y.clone(),z[D]=K,C.addEventListener("dispose",R)),y=K}if(y.visible=C.visible,y.wireframe=C.wireframe,E===jn?y.side=C.shadowSide!==null?C.shadowSide:C.side:y.side=C.shadowSide!==null?C.shadowSide:d[C.side],y.alphaMap=C.alphaMap,y.alphaTest=C.alphaTest,y.map=C.map,y.clipShadows=C.clipShadows,y.clippingPlanes=C.clippingPlanes,y.clipIntersection=C.clipIntersection,y.displacementMap=C.displacementMap,y.displacementScale=C.displacementScale,y.displacementBias=C.displacementBias,y.wireframeLinewidth=C.wireframeLinewidth,y.linewidth=C.linewidth,P.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const X=i.properties.get(y);X.light=P}return y}function v(w,C,P,E,y){if(w.visible===!1)return;if(w.layers.test(C.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&y===jn)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,w.matrixWorld);const D=t.update(w),z=w.material;if(Array.isArray(z)){const K=D.groups;for(let H=0,et=K.length;H<et;H++){const G=K[H],rt=z[G.materialIndex];if(rt&&rt.visible){const ut=x(w,rt,E,y);w.onBeforeShadow(i,w,C,P,D,ut,G),i.renderBufferDirect(P,null,D,ut,w,G),w.onAfterShadow(i,w,C,P,D,ut,G)}}}else if(z.visible){const K=x(w,z,E,y);w.onBeforeShadow(i,w,C,P,D,K,null),i.renderBufferDirect(P,null,D,K,w,null),w.onAfterShadow(i,w,C,P,D,K,null)}}const X=w.children;for(let D=0,z=X.length;D<z;D++)v(X[D],C,P,E,y)}function R(w){w.target.removeEventListener("dispose",R);for(const P in c){const E=c[P],y=w.target.uuid;y in E&&(E[y].dispose(),delete E[y])}}}const ib={[ul]:pl,[ml]:_l,[gl]:xl,[Us]:vl,[pl]:ul,[_l]:ml,[xl]:gl,[vl]:Us};function sb(i,t){function e(){let I=!1;const ot=new Se;let V=null;const J=new Se(0,0,0,0);return{setMask:function(ht){V!==ht&&!I&&(i.colorMask(ht,ht,ht,ht),V=ht)},setLocked:function(ht){I=ht},setClear:function(ht,dt,Ut,ye,ke){ke===!0&&(ht*=ye,dt*=ye,Ut*=ye),ot.set(ht,dt,Ut,ye),J.equals(ot)===!1&&(i.clearColor(ht,dt,Ut,ye),J.copy(ot))},reset:function(){I=!1,V=null,J.set(-1,0,0,0)}}}function n(){let I=!1,ot=!1,V=null,J=null,ht=null;return{setReversed:function(dt){if(ot!==dt){const Ut=t.get("EXT_clip_control");ot?Ut.clipControlEXT(Ut.LOWER_LEFT_EXT,Ut.ZERO_TO_ONE_EXT):Ut.clipControlEXT(Ut.LOWER_LEFT_EXT,Ut.NEGATIVE_ONE_TO_ONE_EXT);const ye=ht;ht=null,this.setClear(ye)}ot=dt},getReversed:function(){return ot},setTest:function(dt){dt?lt(i.DEPTH_TEST):Pt(i.DEPTH_TEST)},setMask:function(dt){V!==dt&&!I&&(i.depthMask(dt),V=dt)},setFunc:function(dt){if(ot&&(dt=ib[dt]),J!==dt){switch(dt){case ul:i.depthFunc(i.NEVER);break;case pl:i.depthFunc(i.ALWAYS);break;case ml:i.depthFunc(i.LESS);break;case Us:i.depthFunc(i.LEQUAL);break;case gl:i.depthFunc(i.EQUAL);break;case vl:i.depthFunc(i.GEQUAL);break;case _l:i.depthFunc(i.GREATER);break;case xl:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}J=dt}},setLocked:function(dt){I=dt},setClear:function(dt){ht!==dt&&(ot&&(dt=1-dt),i.clearDepth(dt),ht=dt)},reset:function(){I=!1,V=null,J=null,ht=null,ot=!1}}}function s(){let I=!1,ot=null,V=null,J=null,ht=null,dt=null,Ut=null,ye=null,ke=null;return{setTest:function(se){I||(se?lt(i.STENCIL_TEST):Pt(i.STENCIL_TEST))},setMask:function(se){ot!==se&&!I&&(i.stencilMask(se),ot=se)},setFunc:function(se,pn,Hn){(V!==se||J!==pn||ht!==Hn)&&(i.stencilFunc(se,pn,Hn),V=se,J=pn,ht=Hn)},setOp:function(se,pn,Hn){(dt!==se||Ut!==pn||ye!==Hn)&&(i.stencilOp(se,pn,Hn),dt=se,Ut=pn,ye=Hn)},setLocked:function(se){I=se},setClear:function(se){ke!==se&&(i.clearStencil(se),ke=se)},reset:function(){I=!1,ot=null,V=null,J=null,ht=null,dt=null,Ut=null,ye=null,ke=null}}}const a=new e,r=new n,o=new s,l=new WeakMap,c=new WeakMap;let f={},d={},h=new WeakMap,u=[],g=null,_=!1,m=null,p=null,M=null,x=null,v=null,R=null,w=null,C=new ee(0,0,0),P=0,E=!1,y=null,L=null,X=null,D=null,z=null;const K=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let H=!1,et=0;const G=i.getParameter(i.VERSION);G.indexOf("WebGL")!==-1?(et=parseFloat(/^WebGL (\d)/.exec(G)[1]),H=et>=1):G.indexOf("OpenGL ES")!==-1&&(et=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),H=et>=2);let rt=null,ut={};const St=i.getParameter(i.SCISSOR_BOX),$t=i.getParameter(i.VIEWPORT),oe=new Se().fromArray(St),j=new Se().fromArray($t);function st(I,ot,V,J){const ht=new Uint8Array(4),dt=i.createTexture();i.bindTexture(I,dt),i.texParameteri(I,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(I,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ut=0;Ut<V;Ut++)I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY?i.texImage3D(ot,0,i.RGBA,1,1,J,0,i.RGBA,i.UNSIGNED_BYTE,ht):i.texImage2D(ot+Ut,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ht);return dt}const Et={};Et[i.TEXTURE_2D]=st(i.TEXTURE_2D,i.TEXTURE_2D,1),Et[i.TEXTURE_CUBE_MAP]=st(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Et[i.TEXTURE_2D_ARRAY]=st(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Et[i.TEXTURE_3D]=st(i.TEXTURE_3D,i.TEXTURE_3D,1,1),a.setClear(0,0,0,1),r.setClear(1),o.setClear(0),lt(i.DEPTH_TEST),r.setFunc(Us),Gt(!1),Vt(cd),lt(i.CULL_FACE),N(Si);function lt(I){f[I]!==!0&&(i.enable(I),f[I]=!0)}function Pt(I){f[I]!==!1&&(i.disable(I),f[I]=!1)}function kt(I,ot){return d[I]!==ot?(i.bindFramebuffer(I,ot),d[I]=ot,I===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=ot),I===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=ot),!0):!1}function zt(I,ot){let V=u,J=!1;if(I){V=h.get(ot),V===void 0&&(V=[],h.set(ot,V));const ht=I.textures;if(V.length!==ht.length||V[0]!==i.COLOR_ATTACHMENT0){for(let dt=0,Ut=ht.length;dt<Ut;dt++)V[dt]=i.COLOR_ATTACHMENT0+dt;V.length=ht.length,J=!0}}else V[0]!==i.BACK&&(V[0]=i.BACK,J=!0);J&&i.drawBuffers(V)}function _e(I){return g!==I?(i.useProgram(I),g=I,!0):!1}const qt={[Gi]:i.FUNC_ADD,[ym]:i.FUNC_SUBTRACT,[Mm]:i.FUNC_REVERSE_SUBTRACT};qt[Sm]=i.MIN,qt[Em]=i.MAX;const Ee={[Tm]:i.ZERO,[wm]:i.ONE,[Am]:i.SRC_COLOR,[fl]:i.SRC_ALPHA,[Im]:i.SRC_ALPHA_SATURATE,[Lm]:i.DST_COLOR,[Cm]:i.DST_ALPHA,[Rm]:i.ONE_MINUS_SRC_COLOR,[hl]:i.ONE_MINUS_SRC_ALPHA,[Dm]:i.ONE_MINUS_DST_COLOR,[Pm]:i.ONE_MINUS_DST_ALPHA,[km]:i.CONSTANT_COLOR,[Um]:i.ONE_MINUS_CONSTANT_COLOR,[Nm]:i.CONSTANT_ALPHA,[Fm]:i.ONE_MINUS_CONSTANT_ALPHA};function N(I,ot,V,J,ht,dt,Ut,ye,ke,se){if(I===Si){_===!0&&(Pt(i.BLEND),_=!1);return}if(_===!1&&(lt(i.BLEND),_=!0),I!==bm){if(I!==m||se!==E){if((p!==Gi||v!==Gi)&&(i.blendEquation(i.FUNC_ADD),p=Gi,v=Gi),se)switch(I){case Ts:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case dd:i.blendFunc(i.ONE,i.ONE);break;case fd:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case hd:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case Ts:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case dd:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case fd:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case hd:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}M=null,x=null,R=null,w=null,C.set(0,0,0),P=0,m=I,E=se}return}ht=ht||ot,dt=dt||V,Ut=Ut||J,(ot!==p||ht!==v)&&(i.blendEquationSeparate(qt[ot],qt[ht]),p=ot,v=ht),(V!==M||J!==x||dt!==R||Ut!==w)&&(i.blendFuncSeparate(Ee[V],Ee[J],Ee[dt],Ee[Ut]),M=V,x=J,R=dt,w=Ut),(ye.equals(C)===!1||ke!==P)&&(i.blendColor(ye.r,ye.g,ye.b,ke),C.copy(ye),P=ke),m=I,E=!1}function an(I,ot){I.side===Jn?Pt(i.CULL_FACE):lt(i.CULL_FACE);let V=I.side===qe;ot&&(V=!V),Gt(V),I.blending===Ts&&I.transparent===!1?N(Si):N(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),r.setFunc(I.depthFunc),r.setTest(I.depthTest),r.setMask(I.depthWrite),a.setMask(I.colorWrite);const J=I.stencilWrite;o.setTest(J),J&&(o.setMask(I.stencilWriteMask),o.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),o.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),de(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?lt(i.SAMPLE_ALPHA_TO_COVERAGE):Pt(i.SAMPLE_ALPHA_TO_COVERAGE)}function Gt(I){y!==I&&(I?i.frontFace(i.CW):i.frontFace(i.CCW),y=I)}function Vt(I){I!==vm?(lt(i.CULL_FACE),I!==L&&(I===cd?i.cullFace(i.BACK):I===_m?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Pt(i.CULL_FACE),L=I}function Rt(I){I!==X&&(H&&i.lineWidth(I),X=I)}function de(I,ot,V){I?(lt(i.POLYGON_OFFSET_FILL),(D!==ot||z!==V)&&(i.polygonOffset(ot,V),D=ot,z=V)):Pt(i.POLYGON_OFFSET_FILL)}function At(I){I?lt(i.SCISSOR_TEST):Pt(i.SCISSOR_TEST)}function A(I){I===void 0&&(I=i.TEXTURE0+K-1),rt!==I&&(i.activeTexture(I),rt=I)}function b(I,ot,V){V===void 0&&(rt===null?V=i.TEXTURE0+K-1:V=rt);let J=ut[V];J===void 0&&(J={type:void 0,texture:void 0},ut[V]=J),(J.type!==I||J.texture!==ot)&&(rt!==V&&(i.activeTexture(V),rt=V),i.bindTexture(I,ot||Et[I]),J.type=I,J.texture=ot)}function O(){const I=ut[rt];I!==void 0&&I.type!==void 0&&(i.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function Z(){try{i.compressedTexImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function tt(){try{i.compressedTexImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Y(){try{i.texSubImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Tt(){try{i.texSubImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ct(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function pt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Yt(){try{i.texStorage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function nt(){try{i.texStorage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function mt(){try{i.texImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ct(){try{i.texImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Lt(I){oe.equals(I)===!1&&(i.scissor(I.x,I.y,I.z,I.w),oe.copy(I))}function gt(I){j.equals(I)===!1&&(i.viewport(I.x,I.y,I.z,I.w),j.copy(I))}function Wt(I,ot){let V=c.get(ot);V===void 0&&(V=new WeakMap,c.set(ot,V));let J=V.get(I);J===void 0&&(J=i.getUniformBlockIndex(ot,I.name),V.set(I,J))}function Ot(I,ot){const J=c.get(ot).get(I);l.get(ot)!==J&&(i.uniformBlockBinding(ot,J,I.__bindingPointIndex),l.set(ot,J))}function le(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),r.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),f={},rt=null,ut={},d={},h=new WeakMap,u=[],g=null,_=!1,m=null,p=null,M=null,x=null,v=null,R=null,w=null,C=new ee(0,0,0),P=0,E=!1,y=null,L=null,X=null,D=null,z=null,oe.set(0,0,i.canvas.width,i.canvas.height),j.set(0,0,i.canvas.width,i.canvas.height),a.reset(),r.reset(),o.reset()}return{buffers:{color:a,depth:r,stencil:o},enable:lt,disable:Pt,bindFramebuffer:kt,drawBuffers:zt,useProgram:_e,setBlending:N,setMaterial:an,setFlipSided:Gt,setCullFace:Vt,setLineWidth:Rt,setPolygonOffset:de,setScissorTest:At,activeTexture:A,bindTexture:b,unbindTexture:O,compressedTexImage2D:Z,compressedTexImage3D:tt,texImage2D:mt,texImage3D:Ct,updateUBOMapping:Wt,uniformBlockBinding:Ot,texStorage2D:Yt,texStorage3D:nt,texSubImage2D:Y,texSubImage3D:Tt,compressedTexSubImage2D:ct,compressedTexSubImage3D:pt,scissor:Lt,viewport:gt,reset:le}}function of(i,t,e,n){const s=ab(n);switch(e){case yh:return i*t;case Sh:return i*t;case Eh:return i*t*2;case Th:return i*t/s.components*s.byteLength;case bc:return i*t/s.components*s.byteLength;case wh:return i*t*2/s.components*s.byteLength;case yc:return i*t*2/s.components*s.byteLength;case Mh:return i*t*3/s.components*s.byteLength;case yn:return i*t*4/s.components*s.byteLength;case Mc:return i*t*4/s.components*s.byteLength;case Ar:case Rr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Cr:case Pr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Tl:case Al:return Math.max(i,16)*Math.max(t,8)/4;case El:case wl:return Math.max(i,8)*Math.max(t,8)/2;case Rl:case Cl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Pl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ll:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Dl:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Il:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case kl:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Ul:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Nl:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Fl:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Ol:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Bl:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case $l:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case zl:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Hl:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Gl:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Vl:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Lr:case Wl:case Xl:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Ah:case ql:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Yl:case jl:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function ab(i){switch(i){case oi:case _h:return{byteLength:1,components:1};case Aa:case xh:case Da:return{byteLength:2,components:1};case _c:case xc:return{byteLength:2,components:4};case Ki:case vc:case Qn:return{byteLength:4,components:1};case bh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function rb(i,t,e,n,s,a,r){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Kt,f=new WeakMap;let d;const h=new WeakMap;let u=!1;try{u=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(A,b){return u?new OffscreenCanvas(A,b):Yr("canvas")}function _(A,b,O){let Z=1;const tt=At(A);if((tt.width>O||tt.height>O)&&(Z=O/Math.max(tt.width,tt.height)),Z<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const Y=Math.floor(Z*tt.width),Tt=Math.floor(Z*tt.height);d===void 0&&(d=g(Y,Tt));const ct=b?g(Y,Tt):d;return ct.width=Y,ct.height=Tt,ct.getContext("2d").drawImage(A,0,0,Y,Tt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+tt.width+"x"+tt.height+") to ("+Y+"x"+Tt+")."),ct}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+tt.width+"x"+tt.height+")."),A;return A}function m(A){return A.generateMipmaps}function p(A){i.generateMipmap(A)}function M(A){return A.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?i.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function x(A,b,O,Z,tt=!1){if(A!==null){if(i[A]!==void 0)return i[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let Y=b;if(b===i.RED&&(O===i.FLOAT&&(Y=i.R32F),O===i.HALF_FLOAT&&(Y=i.R16F),O===i.UNSIGNED_BYTE&&(Y=i.R8)),b===i.RED_INTEGER&&(O===i.UNSIGNED_BYTE&&(Y=i.R8UI),O===i.UNSIGNED_SHORT&&(Y=i.R16UI),O===i.UNSIGNED_INT&&(Y=i.R32UI),O===i.BYTE&&(Y=i.R8I),O===i.SHORT&&(Y=i.R16I),O===i.INT&&(Y=i.R32I)),b===i.RG&&(O===i.FLOAT&&(Y=i.RG32F),O===i.HALF_FLOAT&&(Y=i.RG16F),O===i.UNSIGNED_BYTE&&(Y=i.RG8)),b===i.RG_INTEGER&&(O===i.UNSIGNED_BYTE&&(Y=i.RG8UI),O===i.UNSIGNED_SHORT&&(Y=i.RG16UI),O===i.UNSIGNED_INT&&(Y=i.RG32UI),O===i.BYTE&&(Y=i.RG8I),O===i.SHORT&&(Y=i.RG16I),O===i.INT&&(Y=i.RG32I)),b===i.RGB_INTEGER&&(O===i.UNSIGNED_BYTE&&(Y=i.RGB8UI),O===i.UNSIGNED_SHORT&&(Y=i.RGB16UI),O===i.UNSIGNED_INT&&(Y=i.RGB32UI),O===i.BYTE&&(Y=i.RGB8I),O===i.SHORT&&(Y=i.RGB16I),O===i.INT&&(Y=i.RGB32I)),b===i.RGBA_INTEGER&&(O===i.UNSIGNED_BYTE&&(Y=i.RGBA8UI),O===i.UNSIGNED_SHORT&&(Y=i.RGBA16UI),O===i.UNSIGNED_INT&&(Y=i.RGBA32UI),O===i.BYTE&&(Y=i.RGBA8I),O===i.SHORT&&(Y=i.RGBA16I),O===i.INT&&(Y=i.RGBA32I)),b===i.RGB&&O===i.UNSIGNED_INT_5_9_9_9_REV&&(Y=i.RGB9_E5),b===i.RGBA){const Tt=tt?fo:jt.getTransfer(Z);O===i.FLOAT&&(Y=i.RGBA32F),O===i.HALF_FLOAT&&(Y=i.RGBA16F),O===i.UNSIGNED_BYTE&&(Y=Tt===re?i.SRGB8_ALPHA8:i.RGBA8),O===i.UNSIGNED_SHORT_4_4_4_4&&(Y=i.RGBA4),O===i.UNSIGNED_SHORT_5_5_5_1&&(Y=i.RGB5_A1)}return(Y===i.R16F||Y===i.R32F||Y===i.RG16F||Y===i.RG32F||Y===i.RGBA16F||Y===i.RGBA32F)&&t.get("EXT_color_buffer_float"),Y}function v(A,b){let O;return A?b===null||b===Ki||b===Os?O=i.DEPTH24_STENCIL8:b===Qn?O=i.DEPTH32F_STENCIL8:b===Aa&&(O=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===Ki||b===Os?O=i.DEPTH_COMPONENT24:b===Qn?O=i.DEPTH_COMPONENT32F:b===Aa&&(O=i.DEPTH_COMPONENT16),O}function R(A,b){return m(A)===!0||A.isFramebufferTexture&&A.minFilter!==Sn&&A.minFilter!==In?Math.log2(Math.max(b.width,b.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?b.mipmaps.length:1}function w(A){const b=A.target;b.removeEventListener("dispose",w),P(b),b.isVideoTexture&&f.delete(b)}function C(A){const b=A.target;b.removeEventListener("dispose",C),y(b)}function P(A){const b=n.get(A);if(b.__webglInit===void 0)return;const O=A.source,Z=h.get(O);if(Z){const tt=Z[b.__cacheKey];tt.usedTimes--,tt.usedTimes===0&&E(A),Object.keys(Z).length===0&&h.delete(O)}n.remove(A)}function E(A){const b=n.get(A);i.deleteTexture(b.__webglTexture);const O=A.source,Z=h.get(O);delete Z[b.__cacheKey],r.memory.textures--}function y(A){const b=n.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),n.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(b.__webglFramebuffer[Z]))for(let tt=0;tt<b.__webglFramebuffer[Z].length;tt++)i.deleteFramebuffer(b.__webglFramebuffer[Z][tt]);else i.deleteFramebuffer(b.__webglFramebuffer[Z]);b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer[Z])}else{if(Array.isArray(b.__webglFramebuffer))for(let Z=0;Z<b.__webglFramebuffer.length;Z++)i.deleteFramebuffer(b.__webglFramebuffer[Z]);else i.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&i.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let Z=0;Z<b.__webglColorRenderbuffer.length;Z++)b.__webglColorRenderbuffer[Z]&&i.deleteRenderbuffer(b.__webglColorRenderbuffer[Z]);b.__webglDepthRenderbuffer&&i.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const O=A.textures;for(let Z=0,tt=O.length;Z<tt;Z++){const Y=n.get(O[Z]);Y.__webglTexture&&(i.deleteTexture(Y.__webglTexture),r.memory.textures--),n.remove(O[Z])}n.remove(A)}let L=0;function X(){L=0}function D(){const A=L;return A>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+s.maxTextures),L+=1,A}function z(A){const b=[];return b.push(A.wrapS),b.push(A.wrapT),b.push(A.wrapR||0),b.push(A.magFilter),b.push(A.minFilter),b.push(A.anisotropy),b.push(A.internalFormat),b.push(A.format),b.push(A.type),b.push(A.generateMipmaps),b.push(A.premultiplyAlpha),b.push(A.flipY),b.push(A.unpackAlignment),b.push(A.colorSpace),b.join()}function K(A,b){const O=n.get(A);if(A.isVideoTexture&&Rt(A),A.isRenderTargetTexture===!1&&A.version>0&&O.__version!==A.version){const Z=A.image;if(Z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{j(O,A,b);return}}e.bindTexture(i.TEXTURE_2D,O.__webglTexture,i.TEXTURE0+b)}function H(A,b){const O=n.get(A);if(A.version>0&&O.__version!==A.version){j(O,A,b);return}e.bindTexture(i.TEXTURE_2D_ARRAY,O.__webglTexture,i.TEXTURE0+b)}function et(A,b){const O=n.get(A);if(A.version>0&&O.__version!==A.version){j(O,A,b);return}e.bindTexture(i.TEXTURE_3D,O.__webglTexture,i.TEXTURE0+b)}function G(A,b){const O=n.get(A);if(A.version>0&&O.__version!==A.version){st(O,A,b);return}e.bindTexture(i.TEXTURE_CUBE_MAP,O.__webglTexture,i.TEXTURE0+b)}const rt={[Ml]:i.REPEAT,[Wi]:i.CLAMP_TO_EDGE,[Sl]:i.MIRRORED_REPEAT},ut={[Sn]:i.NEAREST,[qm]:i.NEAREST_MIPMAP_NEAREST,[Ya]:i.NEAREST_MIPMAP_LINEAR,[In]:i.LINEAR,[So]:i.LINEAR_MIPMAP_NEAREST,[Xi]:i.LINEAR_MIPMAP_LINEAR},St={[Zm]:i.NEVER,[i0]:i.ALWAYS,[Jm]:i.LESS,[Ch]:i.LEQUAL,[Qm]:i.EQUAL,[n0]:i.GEQUAL,[t0]:i.GREATER,[e0]:i.NOTEQUAL};function $t(A,b){if(b.type===Qn&&t.has("OES_texture_float_linear")===!1&&(b.magFilter===In||b.magFilter===So||b.magFilter===Ya||b.magFilter===Xi||b.minFilter===In||b.minFilter===So||b.minFilter===Ya||b.minFilter===Xi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(A,i.TEXTURE_WRAP_S,rt[b.wrapS]),i.texParameteri(A,i.TEXTURE_WRAP_T,rt[b.wrapT]),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,rt[b.wrapR]),i.texParameteri(A,i.TEXTURE_MAG_FILTER,ut[b.magFilter]),i.texParameteri(A,i.TEXTURE_MIN_FILTER,ut[b.minFilter]),b.compareFunction&&(i.texParameteri(A,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(A,i.TEXTURE_COMPARE_FUNC,St[b.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===Sn||b.minFilter!==Ya&&b.minFilter!==Xi||b.type===Qn&&t.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||n.get(b).__currentAnisotropy){const O=t.get("EXT_texture_filter_anisotropic");i.texParameterf(A,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,s.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy}}}function oe(A,b){let O=!1;A.__webglInit===void 0&&(A.__webglInit=!0,b.addEventListener("dispose",w));const Z=b.source;let tt=h.get(Z);tt===void 0&&(tt={},h.set(Z,tt));const Y=z(b);if(Y!==A.__cacheKey){tt[Y]===void 0&&(tt[Y]={texture:i.createTexture(),usedTimes:0},r.memory.textures++,O=!0),tt[Y].usedTimes++;const Tt=tt[A.__cacheKey];Tt!==void 0&&(tt[A.__cacheKey].usedTimes--,Tt.usedTimes===0&&E(b)),A.__cacheKey=Y,A.__webglTexture=tt[Y].texture}return O}function j(A,b,O){let Z=i.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(Z=i.TEXTURE_2D_ARRAY),b.isData3DTexture&&(Z=i.TEXTURE_3D);const tt=oe(A,b),Y=b.source;e.bindTexture(Z,A.__webglTexture,i.TEXTURE0+O);const Tt=n.get(Y);if(Y.version!==Tt.__version||tt===!0){e.activeTexture(i.TEXTURE0+O);const ct=jt.getPrimaries(jt.workingColorSpace),pt=b.colorSpace===vi?null:jt.getPrimaries(b.colorSpace),Yt=b.colorSpace===vi||ct===pt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Yt);let nt=_(b.image,!1,s.maxTextureSize);nt=de(b,nt);const mt=a.convert(b.format,b.colorSpace),Ct=a.convert(b.type);let Lt=x(b.internalFormat,mt,Ct,b.colorSpace,b.isVideoTexture);$t(Z,b);let gt;const Wt=b.mipmaps,Ot=b.isVideoTexture!==!0,le=Tt.__version===void 0||tt===!0,I=Y.dataReady,ot=R(b,nt);if(b.isDepthTexture)Lt=v(b.format===Bs,b.type),le&&(Ot?e.texStorage2D(i.TEXTURE_2D,1,Lt,nt.width,nt.height):e.texImage2D(i.TEXTURE_2D,0,Lt,nt.width,nt.height,0,mt,Ct,null));else if(b.isDataTexture)if(Wt.length>0){Ot&&le&&e.texStorage2D(i.TEXTURE_2D,ot,Lt,Wt[0].width,Wt[0].height);for(let V=0,J=Wt.length;V<J;V++)gt=Wt[V],Ot?I&&e.texSubImage2D(i.TEXTURE_2D,V,0,0,gt.width,gt.height,mt,Ct,gt.data):e.texImage2D(i.TEXTURE_2D,V,Lt,gt.width,gt.height,0,mt,Ct,gt.data);b.generateMipmaps=!1}else Ot?(le&&e.texStorage2D(i.TEXTURE_2D,ot,Lt,nt.width,nt.height),I&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,nt.width,nt.height,mt,Ct,nt.data)):e.texImage2D(i.TEXTURE_2D,0,Lt,nt.width,nt.height,0,mt,Ct,nt.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){Ot&&le&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ot,Lt,Wt[0].width,Wt[0].height,nt.depth);for(let V=0,J=Wt.length;V<J;V++)if(gt=Wt[V],b.format!==yn)if(mt!==null)if(Ot){if(I)if(b.layerUpdates.size>0){const ht=of(gt.width,gt.height,b.format,b.type);for(const dt of b.layerUpdates){const Ut=gt.data.subarray(dt*ht/gt.data.BYTES_PER_ELEMENT,(dt+1)*ht/gt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,V,0,0,dt,gt.width,gt.height,1,mt,Ut)}b.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,V,0,0,0,gt.width,gt.height,nt.depth,mt,gt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,V,Lt,gt.width,gt.height,nt.depth,0,gt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ot?I&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,V,0,0,0,gt.width,gt.height,nt.depth,mt,Ct,gt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,V,Lt,gt.width,gt.height,nt.depth,0,mt,Ct,gt.data)}else{Ot&&le&&e.texStorage2D(i.TEXTURE_2D,ot,Lt,Wt[0].width,Wt[0].height);for(let V=0,J=Wt.length;V<J;V++)gt=Wt[V],b.format!==yn?mt!==null?Ot?I&&e.compressedTexSubImage2D(i.TEXTURE_2D,V,0,0,gt.width,gt.height,mt,gt.data):e.compressedTexImage2D(i.TEXTURE_2D,V,Lt,gt.width,gt.height,0,gt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ot?I&&e.texSubImage2D(i.TEXTURE_2D,V,0,0,gt.width,gt.height,mt,Ct,gt.data):e.texImage2D(i.TEXTURE_2D,V,Lt,gt.width,gt.height,0,mt,Ct,gt.data)}else if(b.isDataArrayTexture)if(Ot){if(le&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ot,Lt,nt.width,nt.height,nt.depth),I)if(b.layerUpdates.size>0){const V=of(nt.width,nt.height,b.format,b.type);for(const J of b.layerUpdates){const ht=nt.data.subarray(J*V/nt.data.BYTES_PER_ELEMENT,(J+1)*V/nt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,J,nt.width,nt.height,1,mt,Ct,ht)}b.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,nt.width,nt.height,nt.depth,mt,Ct,nt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Lt,nt.width,nt.height,nt.depth,0,mt,Ct,nt.data);else if(b.isData3DTexture)Ot?(le&&e.texStorage3D(i.TEXTURE_3D,ot,Lt,nt.width,nt.height,nt.depth),I&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,nt.width,nt.height,nt.depth,mt,Ct,nt.data)):e.texImage3D(i.TEXTURE_3D,0,Lt,nt.width,nt.height,nt.depth,0,mt,Ct,nt.data);else if(b.isFramebufferTexture){if(le)if(Ot)e.texStorage2D(i.TEXTURE_2D,ot,Lt,nt.width,nt.height);else{let V=nt.width,J=nt.height;for(let ht=0;ht<ot;ht++)e.texImage2D(i.TEXTURE_2D,ht,Lt,V,J,0,mt,Ct,null),V>>=1,J>>=1}}else if(Wt.length>0){if(Ot&&le){const V=At(Wt[0]);e.texStorage2D(i.TEXTURE_2D,ot,Lt,V.width,V.height)}for(let V=0,J=Wt.length;V<J;V++)gt=Wt[V],Ot?I&&e.texSubImage2D(i.TEXTURE_2D,V,0,0,mt,Ct,gt):e.texImage2D(i.TEXTURE_2D,V,Lt,mt,Ct,gt);b.generateMipmaps=!1}else if(Ot){if(le){const V=At(nt);e.texStorage2D(i.TEXTURE_2D,ot,Lt,V.width,V.height)}I&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,mt,Ct,nt)}else e.texImage2D(i.TEXTURE_2D,0,Lt,mt,Ct,nt);m(b)&&p(Z),Tt.__version=Y.version,b.onUpdate&&b.onUpdate(b)}A.__version=b.version}function st(A,b,O){if(b.image.length!==6)return;const Z=oe(A,b),tt=b.source;e.bindTexture(i.TEXTURE_CUBE_MAP,A.__webglTexture,i.TEXTURE0+O);const Y=n.get(tt);if(tt.version!==Y.__version||Z===!0){e.activeTexture(i.TEXTURE0+O);const Tt=jt.getPrimaries(jt.workingColorSpace),ct=b.colorSpace===vi?null:jt.getPrimaries(b.colorSpace),pt=b.colorSpace===vi||Tt===ct?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,pt);const Yt=b.isCompressedTexture||b.image[0].isCompressedTexture,nt=b.image[0]&&b.image[0].isDataTexture,mt=[];for(let J=0;J<6;J++)!Yt&&!nt?mt[J]=_(b.image[J],!0,s.maxCubemapSize):mt[J]=nt?b.image[J].image:b.image[J],mt[J]=de(b,mt[J]);const Ct=mt[0],Lt=a.convert(b.format,b.colorSpace),gt=a.convert(b.type),Wt=x(b.internalFormat,Lt,gt,b.colorSpace),Ot=b.isVideoTexture!==!0,le=Y.__version===void 0||Z===!0,I=tt.dataReady;let ot=R(b,Ct);$t(i.TEXTURE_CUBE_MAP,b);let V;if(Yt){Ot&&le&&e.texStorage2D(i.TEXTURE_CUBE_MAP,ot,Wt,Ct.width,Ct.height);for(let J=0;J<6;J++){V=mt[J].mipmaps;for(let ht=0;ht<V.length;ht++){const dt=V[ht];b.format!==yn?Lt!==null?Ot?I&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,ht,0,0,dt.width,dt.height,Lt,dt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,ht,Wt,dt.width,dt.height,0,dt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ot?I&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,ht,0,0,dt.width,dt.height,Lt,gt,dt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,ht,Wt,dt.width,dt.height,0,Lt,gt,dt.data)}}}else{if(V=b.mipmaps,Ot&&le){V.length>0&&ot++;const J=At(mt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,ot,Wt,J.width,J.height)}for(let J=0;J<6;J++)if(nt){Ot?I&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,mt[J].width,mt[J].height,Lt,gt,mt[J].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,Wt,mt[J].width,mt[J].height,0,Lt,gt,mt[J].data);for(let ht=0;ht<V.length;ht++){const Ut=V[ht].image[J].image;Ot?I&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,ht+1,0,0,Ut.width,Ut.height,Lt,gt,Ut.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,ht+1,Wt,Ut.width,Ut.height,0,Lt,gt,Ut.data)}}else{Ot?I&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,Lt,gt,mt[J]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,Wt,Lt,gt,mt[J]);for(let ht=0;ht<V.length;ht++){const dt=V[ht];Ot?I&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,ht+1,0,0,Lt,gt,dt.image[J]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,ht+1,Wt,Lt,gt,dt.image[J])}}}m(b)&&p(i.TEXTURE_CUBE_MAP),Y.__version=tt.version,b.onUpdate&&b.onUpdate(b)}A.__version=b.version}function Et(A,b,O,Z,tt,Y){const Tt=a.convert(O.format,O.colorSpace),ct=a.convert(O.type),pt=x(O.internalFormat,Tt,ct,O.colorSpace),Yt=n.get(b),nt=n.get(O);if(nt.__renderTarget=b,!Yt.__hasExternalTextures){const mt=Math.max(1,b.width>>Y),Ct=Math.max(1,b.height>>Y);tt===i.TEXTURE_3D||tt===i.TEXTURE_2D_ARRAY?e.texImage3D(tt,Y,pt,mt,Ct,b.depth,0,Tt,ct,null):e.texImage2D(tt,Y,pt,mt,Ct,0,Tt,ct,null)}e.bindFramebuffer(i.FRAMEBUFFER,A),Vt(b)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Z,tt,nt.__webglTexture,0,Gt(b)):(tt===i.TEXTURE_2D||tt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&tt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Z,tt,nt.__webglTexture,Y),e.bindFramebuffer(i.FRAMEBUFFER,null)}function lt(A,b,O){if(i.bindRenderbuffer(i.RENDERBUFFER,A),b.depthBuffer){const Z=b.depthTexture,tt=Z&&Z.isDepthTexture?Z.type:null,Y=v(b.stencilBuffer,tt),Tt=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ct=Gt(b);Vt(b)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ct,Y,b.width,b.height):O?i.renderbufferStorageMultisample(i.RENDERBUFFER,ct,Y,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,Y,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Tt,i.RENDERBUFFER,A)}else{const Z=b.textures;for(let tt=0;tt<Z.length;tt++){const Y=Z[tt],Tt=a.convert(Y.format,Y.colorSpace),ct=a.convert(Y.type),pt=x(Y.internalFormat,Tt,ct,Y.colorSpace),Yt=Gt(b);O&&Vt(b)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Yt,pt,b.width,b.height):Vt(b)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Yt,pt,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,pt,b.width,b.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Pt(A,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,A),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Z=n.get(b.depthTexture);Z.__renderTarget=b,(!Z.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),K(b.depthTexture,0);const tt=Z.__webglTexture,Y=Gt(b);if(b.depthTexture.format===ws)Vt(b)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,tt,0,Y):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,tt,0);else if(b.depthTexture.format===Bs)Vt(b)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,tt,0,Y):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,tt,0);else throw new Error("Unknown depthTexture format")}function kt(A){const b=n.get(A),O=A.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==A.depthTexture){const Z=A.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),Z){const tt=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,Z.removeEventListener("dispose",tt)};Z.addEventListener("dispose",tt),b.__depthDisposeCallback=tt}b.__boundDepthTexture=Z}if(A.depthTexture&&!b.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");Pt(b.__webglFramebuffer,A)}else if(O){b.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(e.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer[Z]),b.__webglDepthbuffer[Z]===void 0)b.__webglDepthbuffer[Z]=i.createRenderbuffer(),lt(b.__webglDepthbuffer[Z],A,!1);else{const tt=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Y=b.__webglDepthbuffer[Z];i.bindRenderbuffer(i.RENDERBUFFER,Y),i.framebufferRenderbuffer(i.FRAMEBUFFER,tt,i.RENDERBUFFER,Y)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=i.createRenderbuffer(),lt(b.__webglDepthbuffer,A,!1);else{const Z=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,tt=b.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,tt),i.framebufferRenderbuffer(i.FRAMEBUFFER,Z,i.RENDERBUFFER,tt)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function zt(A,b,O){const Z=n.get(A);b!==void 0&&Et(Z.__webglFramebuffer,A,A.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),O!==void 0&&kt(A)}function _e(A){const b=A.texture,O=n.get(A),Z=n.get(b);A.addEventListener("dispose",C);const tt=A.textures,Y=A.isWebGLCubeRenderTarget===!0,Tt=tt.length>1;if(Tt||(Z.__webglTexture===void 0&&(Z.__webglTexture=i.createTexture()),Z.__version=b.version,r.memory.textures++),Y){O.__webglFramebuffer=[];for(let ct=0;ct<6;ct++)if(b.mipmaps&&b.mipmaps.length>0){O.__webglFramebuffer[ct]=[];for(let pt=0;pt<b.mipmaps.length;pt++)O.__webglFramebuffer[ct][pt]=i.createFramebuffer()}else O.__webglFramebuffer[ct]=i.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){O.__webglFramebuffer=[];for(let ct=0;ct<b.mipmaps.length;ct++)O.__webglFramebuffer[ct]=i.createFramebuffer()}else O.__webglFramebuffer=i.createFramebuffer();if(Tt)for(let ct=0,pt=tt.length;ct<pt;ct++){const Yt=n.get(tt[ct]);Yt.__webglTexture===void 0&&(Yt.__webglTexture=i.createTexture(),r.memory.textures++)}if(A.samples>0&&Vt(A)===!1){O.__webglMultisampledFramebuffer=i.createFramebuffer(),O.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let ct=0;ct<tt.length;ct++){const pt=tt[ct];O.__webglColorRenderbuffer[ct]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,O.__webglColorRenderbuffer[ct]);const Yt=a.convert(pt.format,pt.colorSpace),nt=a.convert(pt.type),mt=x(pt.internalFormat,Yt,nt,pt.colorSpace,A.isXRRenderTarget===!0),Ct=Gt(A);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ct,mt,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ct,i.RENDERBUFFER,O.__webglColorRenderbuffer[ct])}i.bindRenderbuffer(i.RENDERBUFFER,null),A.depthBuffer&&(O.__webglDepthRenderbuffer=i.createRenderbuffer(),lt(O.__webglDepthRenderbuffer,A,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Y){e.bindTexture(i.TEXTURE_CUBE_MAP,Z.__webglTexture),$t(i.TEXTURE_CUBE_MAP,b);for(let ct=0;ct<6;ct++)if(b.mipmaps&&b.mipmaps.length>0)for(let pt=0;pt<b.mipmaps.length;pt++)Et(O.__webglFramebuffer[ct][pt],A,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,pt);else Et(O.__webglFramebuffer[ct],A,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0);m(b)&&p(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Tt){for(let ct=0,pt=tt.length;ct<pt;ct++){const Yt=tt[ct],nt=n.get(Yt);e.bindTexture(i.TEXTURE_2D,nt.__webglTexture),$t(i.TEXTURE_2D,Yt),Et(O.__webglFramebuffer,A,Yt,i.COLOR_ATTACHMENT0+ct,i.TEXTURE_2D,0),m(Yt)&&p(i.TEXTURE_2D)}e.unbindTexture()}else{let ct=i.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(ct=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(ct,Z.__webglTexture),$t(ct,b),b.mipmaps&&b.mipmaps.length>0)for(let pt=0;pt<b.mipmaps.length;pt++)Et(O.__webglFramebuffer[pt],A,b,i.COLOR_ATTACHMENT0,ct,pt);else Et(O.__webglFramebuffer,A,b,i.COLOR_ATTACHMENT0,ct,0);m(b)&&p(ct),e.unbindTexture()}A.depthBuffer&&kt(A)}function qt(A){const b=A.textures;for(let O=0,Z=b.length;O<Z;O++){const tt=b[O];if(m(tt)){const Y=M(A),Tt=n.get(tt).__webglTexture;e.bindTexture(Y,Tt),p(Y),e.unbindTexture()}}}const Ee=[],N=[];function an(A){if(A.samples>0){if(Vt(A)===!1){const b=A.textures,O=A.width,Z=A.height;let tt=i.COLOR_BUFFER_BIT;const Y=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Tt=n.get(A),ct=b.length>1;if(ct)for(let pt=0;pt<b.length;pt++)e.bindFramebuffer(i.FRAMEBUFFER,Tt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+pt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Tt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+pt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Tt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Tt.__webglFramebuffer);for(let pt=0;pt<b.length;pt++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(tt|=i.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(tt|=i.STENCIL_BUFFER_BIT)),ct){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Tt.__webglColorRenderbuffer[pt]);const Yt=n.get(b[pt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Yt,0)}i.blitFramebuffer(0,0,O,Z,0,0,O,Z,tt,i.NEAREST),l===!0&&(Ee.length=0,N.length=0,Ee.push(i.COLOR_ATTACHMENT0+pt),A.depthBuffer&&A.resolveDepthBuffer===!1&&(Ee.push(Y),N.push(Y),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,N)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Ee))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ct)for(let pt=0;pt<b.length;pt++){e.bindFramebuffer(i.FRAMEBUFFER,Tt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+pt,i.RENDERBUFFER,Tt.__webglColorRenderbuffer[pt]);const Yt=n.get(b[pt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Tt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+pt,i.TEXTURE_2D,Yt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Tt.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&l){const b=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[b])}}}function Gt(A){return Math.min(s.maxSamples,A.samples)}function Vt(A){const b=n.get(A);return A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function Rt(A){const b=r.render.frame;f.get(A)!==b&&(f.set(A,b),A.update())}function de(A,b){const O=A.colorSpace,Z=A.format,tt=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||O!==Ws&&O!==vi&&(jt.getTransfer(O)===re?(Z!==yn||tt!==oi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),b}function At(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=D,this.resetTextureUnits=X,this.setTexture2D=K,this.setTexture2DArray=H,this.setTexture3D=et,this.setTextureCube=G,this.rebindTextures=zt,this.setupRenderTarget=_e,this.updateRenderTargetMipmap=qt,this.updateMultisampleRenderTarget=an,this.setupDepthRenderbuffer=kt,this.setupFrameBufferTexture=Et,this.useMultisampledRTT=Vt}function ob(i,t){function e(n,s=vi){let a;const r=jt.getTransfer(s);if(n===oi)return i.UNSIGNED_BYTE;if(n===_c)return i.UNSIGNED_SHORT_4_4_4_4;if(n===xc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===bh)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===_h)return i.BYTE;if(n===xh)return i.SHORT;if(n===Aa)return i.UNSIGNED_SHORT;if(n===vc)return i.INT;if(n===Ki)return i.UNSIGNED_INT;if(n===Qn)return i.FLOAT;if(n===Da)return i.HALF_FLOAT;if(n===yh)return i.ALPHA;if(n===Mh)return i.RGB;if(n===yn)return i.RGBA;if(n===Sh)return i.LUMINANCE;if(n===Eh)return i.LUMINANCE_ALPHA;if(n===ws)return i.DEPTH_COMPONENT;if(n===Bs)return i.DEPTH_STENCIL;if(n===Th)return i.RED;if(n===bc)return i.RED_INTEGER;if(n===wh)return i.RG;if(n===yc)return i.RG_INTEGER;if(n===Mc)return i.RGBA_INTEGER;if(n===Ar||n===Rr||n===Cr||n===Pr)if(r===re)if(a=t.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(n===Ar)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Rr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Cr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Pr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=t.get("WEBGL_compressed_texture_s3tc"),a!==null){if(n===Ar)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Rr)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Cr)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Pr)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===El||n===Tl||n===wl||n===Al)if(a=t.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(n===El)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Tl)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===wl)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Al)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Rl||n===Cl||n===Pl)if(a=t.get("WEBGL_compressed_texture_etc"),a!==null){if(n===Rl||n===Cl)return r===re?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(n===Pl)return r===re?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Ll||n===Dl||n===Il||n===kl||n===Ul||n===Nl||n===Fl||n===Ol||n===Bl||n===$l||n===zl||n===Hl||n===Gl||n===Vl)if(a=t.get("WEBGL_compressed_texture_astc"),a!==null){if(n===Ll)return r===re?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Dl)return r===re?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Il)return r===re?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===kl)return r===re?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ul)return r===re?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Nl)return r===re?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Fl)return r===re?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ol)return r===re?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Bl)return r===re?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===$l)return r===re?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===zl)return r===re?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Hl)return r===re?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Gl)return r===re?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Vl)return r===re?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Lr||n===Wl||n===Xl)if(a=t.get("EXT_texture_compression_bptc"),a!==null){if(n===Lr)return r===re?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Wl)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Xl)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Ah||n===ql||n===Yl||n===jl)if(a=t.get("EXT_texture_compression_rgtc"),a!==null){if(n===Lr)return a.COMPRESSED_RED_RGTC1_EXT;if(n===ql)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Yl)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===jl)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Os?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}class lb extends dn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class ma extends Ie{constructor(){super(),this.isGroup=!0,this.type="Group"}}const cb={type:"move"};class Zo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ma,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ma,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ma,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,a=null,r=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){r=!0;for(const _ of t.hand.values()){const m=e.getJointPose(_,n),p=this._getHandJoint(c,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const f=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],h=f.position.distanceTo(d.position),u=.02,g=.005;c.inputState.pinching&&h>u+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&h<=u-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(a=e.getPose(t.gripSpace,n),a!==null&&(l.matrix.fromArray(a.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,a.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(a.linearVelocity)):l.hasLinearVelocity=!1,a.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(a.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&a!==null&&(s=a),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(cb)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=a!==null),c!==null&&(c.visible=r!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new ma;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const db=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,fb=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class hb{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const s=new He,a=t.properties.get(s);a.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Ri({vertexShader:db,fragmentShader:fb,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Mn(new Ua(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class ub extends Xs{constructor(t,e){super();const n=this;let s=null,a=1,r=null,o="local-floor",l=1,c=null,f=null,d=null,h=null,u=null,g=null;const _=new hb,m=e.getContextAttributes();let p=null,M=null;const x=[],v=[],R=new Kt;let w=null;const C=new dn;C.viewport=new Se;const P=new dn;P.viewport=new Se;const E=[C,P],y=new lb;let L=null,X=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let st=x[j];return st===void 0&&(st=new Zo,x[j]=st),st.getTargetRaySpace()},this.getControllerGrip=function(j){let st=x[j];return st===void 0&&(st=new Zo,x[j]=st),st.getGripSpace()},this.getHand=function(j){let st=x[j];return st===void 0&&(st=new Zo,x[j]=st),st.getHandSpace()};function D(j){const st=v.indexOf(j.inputSource);if(st===-1)return;const Et=x[st];Et!==void 0&&(Et.update(j.inputSource,j.frame,c||r),Et.dispatchEvent({type:j.type,data:j.inputSource}))}function z(){s.removeEventListener("select",D),s.removeEventListener("selectstart",D),s.removeEventListener("selectend",D),s.removeEventListener("squeeze",D),s.removeEventListener("squeezestart",D),s.removeEventListener("squeezeend",D),s.removeEventListener("end",z),s.removeEventListener("inputsourceschange",K);for(let j=0;j<x.length;j++){const st=v[j];st!==null&&(v[j]=null,x[j].disconnect(st))}L=null,X=null,_.reset(),t.setRenderTarget(p),u=null,h=null,d=null,s=null,M=null,oe.stop(),n.isPresenting=!1,t.setPixelRatio(w),t.setSize(R.width,R.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){a=j,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){o=j,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||r},this.setReferenceSpace=function(j){c=j},this.getBaseLayer=function(){return h!==null?h:u},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(j){if(s=j,s!==null){if(p=t.getRenderTarget(),s.addEventListener("select",D),s.addEventListener("selectstart",D),s.addEventListener("selectend",D),s.addEventListener("squeeze",D),s.addEventListener("squeezestart",D),s.addEventListener("squeezeend",D),s.addEventListener("end",z),s.addEventListener("inputsourceschange",K),m.xrCompatible!==!0&&await e.makeXRCompatible(),w=t.getPixelRatio(),t.getSize(R),s.renderState.layers===void 0){const st={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:a};u=new XRWebGLLayer(s,e,st),s.updateRenderState({baseLayer:u}),t.setPixelRatio(1),t.setSize(u.framebufferWidth,u.framebufferHeight,!1),M=new Zi(u.framebufferWidth,u.framebufferHeight,{format:yn,type:oi,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let st=null,Et=null,lt=null;m.depth&&(lt=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,st=m.stencil?Bs:ws,Et=m.stencil?Os:Ki);const Pt={colorFormat:e.RGBA8,depthFormat:lt,scaleFactor:a};d=new XRWebGLBinding(s,e),h=d.createProjectionLayer(Pt),s.updateRenderState({layers:[h]}),t.setPixelRatio(1),t.setSize(h.textureWidth,h.textureHeight,!1),M=new Zi(h.textureWidth,h.textureHeight,{format:yn,type:oi,depthTexture:new Gh(h.textureWidth,h.textureHeight,Et,void 0,void 0,void 0,void 0,void 0,void 0,st),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,r=await s.requestReferenceSpace(o),oe.setContext(s),oe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function K(j){for(let st=0;st<j.removed.length;st++){const Et=j.removed[st],lt=v.indexOf(Et);lt>=0&&(v[lt]=null,x[lt].disconnect(Et))}for(let st=0;st<j.added.length;st++){const Et=j.added[st];let lt=v.indexOf(Et);if(lt===-1){for(let kt=0;kt<x.length;kt++)if(kt>=v.length){v.push(Et),lt=kt;break}else if(v[kt]===null){v[kt]=Et,lt=kt;break}if(lt===-1)break}const Pt=x[lt];Pt&&Pt.connect(Et)}}const H=new F,et=new F;function G(j,st,Et){H.setFromMatrixPosition(st.matrixWorld),et.setFromMatrixPosition(Et.matrixWorld);const lt=H.distanceTo(et),Pt=st.projectionMatrix.elements,kt=Et.projectionMatrix.elements,zt=Pt[14]/(Pt[10]-1),_e=Pt[14]/(Pt[10]+1),qt=(Pt[9]+1)/Pt[5],Ee=(Pt[9]-1)/Pt[5],N=(Pt[8]-1)/Pt[0],an=(kt[8]+1)/kt[0],Gt=zt*N,Vt=zt*an,Rt=lt/(-N+an),de=Rt*-N;if(st.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(de),j.translateZ(Rt),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert(),Pt[10]===-1)j.projectionMatrix.copy(st.projectionMatrix),j.projectionMatrixInverse.copy(st.projectionMatrixInverse);else{const At=zt+Rt,A=_e+Rt,b=Gt-de,O=Vt+(lt-de),Z=qt*_e/A*At,tt=Ee*_e/A*At;j.projectionMatrix.makePerspective(b,O,Z,tt,At,A),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}}function rt(j,st){st===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(st.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(s===null)return;let st=j.near,Et=j.far;_.texture!==null&&(_.depthNear>0&&(st=_.depthNear),_.depthFar>0&&(Et=_.depthFar)),y.near=P.near=C.near=st,y.far=P.far=C.far=Et,(L!==y.near||X!==y.far)&&(s.updateRenderState({depthNear:y.near,depthFar:y.far}),L=y.near,X=y.far),C.layers.mask=j.layers.mask|2,P.layers.mask=j.layers.mask|4,y.layers.mask=C.layers.mask|P.layers.mask;const lt=j.parent,Pt=y.cameras;rt(y,lt);for(let kt=0;kt<Pt.length;kt++)rt(Pt[kt],lt);Pt.length===2?G(y,C,P):y.projectionMatrix.copy(C.projectionMatrix),ut(j,y,lt)};function ut(j,st,Et){Et===null?j.matrix.copy(st.matrixWorld):(j.matrix.copy(Et.matrixWorld),j.matrix.invert(),j.matrix.multiply(st.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(st.projectionMatrix),j.projectionMatrixInverse.copy(st.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=Kl*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(h===null&&u===null))return l},this.setFoveation=function(j){l=j,h!==null&&(h.fixedFoveation=j),u!==null&&u.fixedFoveation!==void 0&&(u.fixedFoveation=j)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(y)};let St=null;function $t(j,st){if(f=st.getViewerPose(c||r),g=st,f!==null){const Et=f.views;u!==null&&(t.setRenderTargetFramebuffer(M,u.framebuffer),t.setRenderTarget(M));let lt=!1;Et.length!==y.cameras.length&&(y.cameras.length=0,lt=!0);for(let kt=0;kt<Et.length;kt++){const zt=Et[kt];let _e=null;if(u!==null)_e=u.getViewport(zt);else{const Ee=d.getViewSubImage(h,zt);_e=Ee.viewport,kt===0&&(t.setRenderTargetTextures(M,Ee.colorTexture,h.ignoreDepthValues?void 0:Ee.depthStencilTexture),t.setRenderTarget(M))}let qt=E[kt];qt===void 0&&(qt=new dn,qt.layers.enable(kt),qt.viewport=new Se,E[kt]=qt),qt.matrix.fromArray(zt.transform.matrix),qt.matrix.decompose(qt.position,qt.quaternion,qt.scale),qt.projectionMatrix.fromArray(zt.projectionMatrix),qt.projectionMatrixInverse.copy(qt.projectionMatrix).invert(),qt.viewport.set(_e.x,_e.y,_e.width,_e.height),kt===0&&(y.matrix.copy(qt.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),lt===!0&&y.cameras.push(qt)}const Pt=s.enabledFeatures;if(Pt&&Pt.includes("depth-sensing")){const kt=d.getDepthInformation(Et[0]);kt&&kt.isValid&&kt.texture&&_.init(t,kt,s.renderState)}}for(let Et=0;Et<x.length;Et++){const lt=v[Et],Pt=x[Et];lt!==null&&Pt!==void 0&&Pt.update(lt,st,c||r)}St&&St(j,st),st.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:st}),g=null}const oe=new zh;oe.setAnimationLoop($t),this.setAnimationLoop=function(j){St=j},this.dispose=function(){}}}const Bi=new Tn,pb=new be;function mb(i,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Oh(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,M,x,v){p.isMeshBasicMaterial||p.isMeshLambertMaterial?a(m,p):p.isMeshToonMaterial?(a(m,p),d(m,p)):p.isMeshPhongMaterial?(a(m,p),f(m,p)):p.isMeshStandardMaterial?(a(m,p),h(m,p),p.isMeshPhysicalMaterial&&u(m,p,v)):p.isMeshMatcapMaterial?(a(m,p),g(m,p)):p.isMeshDepthMaterial?a(m,p):p.isMeshDistanceMaterial?(a(m,p),_(m,p)):p.isMeshNormalMaterial?a(m,p):p.isLineBasicMaterial?(r(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,M,x):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function a(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===qe&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===qe&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const M=t.get(p),x=M.envMap,v=M.envMapRotation;x&&(m.envMap.value=x,Bi.copy(v),Bi.x*=-1,Bi.y*=-1,Bi.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Bi.y*=-1,Bi.z*=-1),m.envMapRotation.value.setFromMatrix4(pb.makeRotationFromEuler(Bi)),m.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function r(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,M,x){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*M,m.scale.value=x*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function f(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function d(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function h(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function u(m,p,M){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===qe&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const M=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function gb(i,t,e,n){let s={},a={},r=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(M,x){const v=x.program;n.uniformBlockBinding(M,v)}function c(M,x){let v=s[M.id];v===void 0&&(g(M),v=f(M),s[M.id]=v,M.addEventListener("dispose",m));const R=x.program;n.updateUBOMapping(M,R);const w=t.render.frame;a[M.id]!==w&&(h(M),a[M.id]=w)}function f(M){const x=d();M.__bindingPointIndex=x;const v=i.createBuffer(),R=M.__size,w=M.usage;return i.bindBuffer(i.UNIFORM_BUFFER,v),i.bufferData(i.UNIFORM_BUFFER,R,w),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,x,v),v}function d(){for(let M=0;M<o;M++)if(r.indexOf(M)===-1)return r.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(M){const x=s[M.id],v=M.uniforms,R=M.__cache;i.bindBuffer(i.UNIFORM_BUFFER,x);for(let w=0,C=v.length;w<C;w++){const P=Array.isArray(v[w])?v[w]:[v[w]];for(let E=0,y=P.length;E<y;E++){const L=P[E];if(u(L,w,E,R)===!0){const X=L.__offset,D=Array.isArray(L.value)?L.value:[L.value];let z=0;for(let K=0;K<D.length;K++){const H=D[K],et=_(H);typeof H=="number"||typeof H=="boolean"?(L.__data[0]=H,i.bufferSubData(i.UNIFORM_BUFFER,X+z,L.__data)):H.isMatrix3?(L.__data[0]=H.elements[0],L.__data[1]=H.elements[1],L.__data[2]=H.elements[2],L.__data[3]=0,L.__data[4]=H.elements[3],L.__data[5]=H.elements[4],L.__data[6]=H.elements[5],L.__data[7]=0,L.__data[8]=H.elements[6],L.__data[9]=H.elements[7],L.__data[10]=H.elements[8],L.__data[11]=0):(H.toArray(L.__data,z),z+=et.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,X,L.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function u(M,x,v,R){const w=M.value,C=x+"_"+v;if(R[C]===void 0)return typeof w=="number"||typeof w=="boolean"?R[C]=w:R[C]=w.clone(),!0;{const P=R[C];if(typeof w=="number"||typeof w=="boolean"){if(P!==w)return R[C]=w,!0}else if(P.equals(w)===!1)return P.copy(w),!0}return!1}function g(M){const x=M.uniforms;let v=0;const R=16;for(let C=0,P=x.length;C<P;C++){const E=Array.isArray(x[C])?x[C]:[x[C]];for(let y=0,L=E.length;y<L;y++){const X=E[y],D=Array.isArray(X.value)?X.value:[X.value];for(let z=0,K=D.length;z<K;z++){const H=D[z],et=_(H),G=v%R,rt=G%et.boundary,ut=G+rt;v+=rt,ut!==0&&R-ut<et.storage&&(v+=R-ut),X.__data=new Float32Array(et.storage/Float32Array.BYTES_PER_ELEMENT),X.__offset=v,v+=et.storage}}}const w=v%R;return w>0&&(v+=R-w),M.__size=v,M.__cache={},this}function _(M){const x={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(x.boundary=4,x.storage=4):M.isVector2?(x.boundary=8,x.storage=8):M.isVector3||M.isColor?(x.boundary=16,x.storage=12):M.isVector4?(x.boundary=16,x.storage=16):M.isMatrix3?(x.boundary=48,x.storage=48):M.isMatrix4?(x.boundary=64,x.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),x}function m(M){const x=M.target;x.removeEventListener("dispose",m);const v=r.indexOf(x.__bindingPointIndex);r.splice(v,1),i.deleteBuffer(s[x.id]),delete s[x.id],delete a[x.id]}function p(){for(const M in s)i.deleteBuffer(s[M]);r=[],s={},a={}}return{bind:l,update:c,dispose:p}}class vb{constructor(t={}){const{canvas:e=a0(),context:n=null,depth:s=!0,stencil:a=!1,alpha:r=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:d=!1,reverseDepthBuffer:h=!1}=t;this.isWebGLRenderer=!0;let u;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");u=n.getContextAttributes().alpha}else u=r;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,p=null;const M=[],x=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=cn,this.toneMapping=Ei,this.toneMappingExposure=1;const v=this;let R=!1,w=0,C=0,P=null,E=-1,y=null;const L=new Se,X=new Se;let D=null;const z=new ee(0);let K=0,H=e.width,et=e.height,G=1,rt=null,ut=null;const St=new Se(0,0,H,et),$t=new Se(0,0,H,et);let oe=!1;const j=new Ec;let st=!1,Et=!1;const lt=new be,Pt=new be,kt=new F,zt=new Se,_e={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let qt=!1;function Ee(){return P===null?G:1}let N=n;function an(S,k){return e.getContext(S,k)}try{const S={alpha:!0,depth:s,stencil:a,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:f,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${gc}`),e.addEventListener("webglcontextlost",J,!1),e.addEventListener("webglcontextrestored",ht,!1),e.addEventListener("webglcontextcreationerror",dt,!1),N===null){const k="webgl2";if(N=an(k,S),N===null)throw an(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let Gt,Vt,Rt,de,At,A,b,O,Z,tt,Y,Tt,ct,pt,Yt,nt,mt,Ct,Lt,gt,Wt,Ot,le,I;function ot(){Gt=new M_(N),Gt.init(),Ot=new ob(N,Gt),Vt=new g_(N,Gt,t,Ot),Rt=new sb(N,Gt),Vt.reverseDepthBuffer&&h&&Rt.buffers.depth.setReversed(!0),de=new T_(N),At=new Gx,A=new rb(N,Gt,Rt,At,Vt,Ot,de),b=new __(v),O=new y_(v),Z=new D0(N),le=new p_(N,Z),tt=new S_(N,Z,de,le),Y=new A_(N,tt,Z,de),Lt=new w_(N,Vt,A),nt=new v_(At),Tt=new Hx(v,b,O,Gt,Vt,le,nt),ct=new mb(v,At),pt=new Wx,Yt=new Zx(Gt),Ct=new u_(v,b,O,Rt,Y,u,l),mt=new nb(v,Y,Vt),I=new gb(N,de,Vt,Rt),gt=new m_(N,Gt,de),Wt=new E_(N,Gt,de),de.programs=Tt.programs,v.capabilities=Vt,v.extensions=Gt,v.properties=At,v.renderLists=pt,v.shadowMap=mt,v.state=Rt,v.info=de}ot();const V=new ub(v,N);this.xr=V,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){const S=Gt.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=Gt.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return G},this.setPixelRatio=function(S){S!==void 0&&(G=S,this.setSize(H,et,!1))},this.getSize=function(S){return S.set(H,et)},this.setSize=function(S,k,B=!0){if(V.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}H=S,et=k,e.width=Math.floor(S*G),e.height=Math.floor(k*G),B===!0&&(e.style.width=S+"px",e.style.height=k+"px"),this.setViewport(0,0,S,k)},this.getDrawingBufferSize=function(S){return S.set(H*G,et*G).floor()},this.setDrawingBufferSize=function(S,k,B){H=S,et=k,G=B,e.width=Math.floor(S*B),e.height=Math.floor(k*B),this.setViewport(0,0,S,k)},this.getCurrentViewport=function(S){return S.copy(L)},this.getViewport=function(S){return S.copy(St)},this.setViewport=function(S,k,B,$){S.isVector4?St.set(S.x,S.y,S.z,S.w):St.set(S,k,B,$),Rt.viewport(L.copy(St).multiplyScalar(G).round())},this.getScissor=function(S){return S.copy($t)},this.setScissor=function(S,k,B,$){S.isVector4?$t.set(S.x,S.y,S.z,S.w):$t.set(S,k,B,$),Rt.scissor(X.copy($t).multiplyScalar(G).round())},this.getScissorTest=function(){return oe},this.setScissorTest=function(S){Rt.setScissorTest(oe=S)},this.setOpaqueSort=function(S){rt=S},this.setTransparentSort=function(S){ut=S},this.getClearColor=function(S){return S.copy(Ct.getClearColor())},this.setClearColor=function(){Ct.setClearColor.apply(Ct,arguments)},this.getClearAlpha=function(){return Ct.getClearAlpha()},this.setClearAlpha=function(){Ct.setClearAlpha.apply(Ct,arguments)},this.clear=function(S=!0,k=!0,B=!0){let $=0;if(S){let U=!1;if(P!==null){const it=P.texture.format;U=it===Mc||it===yc||it===bc}if(U){const it=P.texture.type,ft=it===oi||it===Ki||it===Aa||it===Os||it===_c||it===xc,bt=Ct.getClearColor(),yt=Ct.getClearAlpha(),Dt=bt.r,Nt=bt.g,Mt=bt.b;ft?(g[0]=Dt,g[1]=Nt,g[2]=Mt,g[3]=yt,N.clearBufferuiv(N.COLOR,0,g)):(_[0]=Dt,_[1]=Nt,_[2]=Mt,_[3]=yt,N.clearBufferiv(N.COLOR,0,_))}else $|=N.COLOR_BUFFER_BIT}k&&($|=N.DEPTH_BUFFER_BIT),B&&($|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),N.clear($)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",J,!1),e.removeEventListener("webglcontextrestored",ht,!1),e.removeEventListener("webglcontextcreationerror",dt,!1),pt.dispose(),Yt.dispose(),At.dispose(),b.dispose(),O.dispose(),Y.dispose(),le.dispose(),I.dispose(),Tt.dispose(),V.dispose(),V.removeEventListener("sessionstart",Fc),V.removeEventListener("sessionend",Oc),Li.stop()};function J(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),R=!0}function ht(){console.log("THREE.WebGLRenderer: Context Restored."),R=!1;const S=de.autoReset,k=mt.enabled,B=mt.autoUpdate,$=mt.needsUpdate,U=mt.type;ot(),de.autoReset=S,mt.enabled=k,mt.autoUpdate=B,mt.needsUpdate=$,mt.type=U}function dt(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function Ut(S){const k=S.target;k.removeEventListener("dispose",Ut),ye(k)}function ye(S){ke(S),At.remove(S)}function ke(S){const k=At.get(S).programs;k!==void 0&&(k.forEach(function(B){Tt.releaseProgram(B)}),S.isShaderMaterial&&Tt.releaseShaderCache(S))}this.renderBufferDirect=function(S,k,B,$,U,it){k===null&&(k=_e);const ft=U.isMesh&&U.matrixWorld.determinant()<0,bt=Nu(S,k,B,$,U);Rt.setMaterial($,ft);let yt=B.index,Dt=1;if($.wireframe===!0){if(yt=tt.getWireframeAttribute(B),yt===void 0)return;Dt=2}const Nt=B.drawRange,Mt=B.attributes.position;let Zt=Nt.start*Dt,ce=(Nt.start+Nt.count)*Dt;it!==null&&(Zt=Math.max(Zt,it.start*Dt),ce=Math.min(ce,(it.start+it.count)*Dt)),yt!==null?(Zt=Math.max(Zt,0),ce=Math.min(ce,yt.count)):Mt!=null&&(Zt=Math.max(Zt,0),ce=Math.min(ce,Mt.count));const fe=ce-Zt;if(fe<0||fe===1/0)return;le.setup(U,$,bt,B,yt);let Ge,ne=gt;if(yt!==null&&(Ge=Z.get(yt),ne=Wt,ne.setIndex(Ge)),U.isMesh)$.wireframe===!0?(Rt.setLineWidth($.wireframeLinewidth*Ee()),ne.setMode(N.LINES)):ne.setMode(N.TRIANGLES);else if(U.isLine){let wt=$.linewidth;wt===void 0&&(wt=1),Rt.setLineWidth(wt*Ee()),U.isLineSegments?ne.setMode(N.LINES):U.isLineLoop?ne.setMode(N.LINE_LOOP):ne.setMode(N.LINE_STRIP)}else U.isPoints?ne.setMode(N.POINTS):U.isSprite&&ne.setMode(N.TRIANGLES);if(U.isBatchedMesh)if(U._multiDrawInstances!==null)ne.renderMultiDrawInstances(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount,U._multiDrawInstances);else if(Gt.get("WEBGL_multi_draw"))ne.renderMultiDraw(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount);else{const wt=U._multiDrawStarts,Gn=U._multiDrawCounts,ie=U._multiDrawCount,mn=yt?Z.get(yt).bytesPerElement:1,ns=At.get($).currentProgram.getUniforms();for(let Ye=0;Ye<ie;Ye++)ns.setValue(N,"_gl_DrawID",Ye),ne.render(wt[Ye]/mn,Gn[Ye])}else if(U.isInstancedMesh)ne.renderInstances(Zt,fe,U.count);else if(B.isInstancedBufferGeometry){const wt=B._maxInstanceCount!==void 0?B._maxInstanceCount:1/0,Gn=Math.min(B.instanceCount,wt);ne.renderInstances(Zt,fe,Gn)}else ne.render(Zt,fe)};function se(S,k,B){S.transparent===!0&&S.side===Jn&&S.forceSinglePass===!1?(S.side=qe,S.needsUpdate=!0,Ha(S,k,B),S.side=Ai,S.needsUpdate=!0,Ha(S,k,B),S.side=Jn):Ha(S,k,B)}this.compile=function(S,k,B=null){B===null&&(B=S),p=Yt.get(B),p.init(k),x.push(p),B.traverseVisible(function(U){U.isLight&&U.layers.test(k.layers)&&(p.pushLight(U),U.castShadow&&p.pushShadow(U))}),S!==B&&S.traverseVisible(function(U){U.isLight&&U.layers.test(k.layers)&&(p.pushLight(U),U.castShadow&&p.pushShadow(U))}),p.setupLights();const $=new Set;return S.traverse(function(U){if(!(U.isMesh||U.isPoints||U.isLine||U.isSprite))return;const it=U.material;if(it)if(Array.isArray(it))for(let ft=0;ft<it.length;ft++){const bt=it[ft];se(bt,B,U),$.add(bt)}else se(it,B,U),$.add(it)}),x.pop(),p=null,$},this.compileAsync=function(S,k,B=null){const $=this.compile(S,k,B);return new Promise(U=>{function it(){if($.forEach(function(ft){At.get(ft).currentProgram.isReady()&&$.delete(ft)}),$.size===0){U(S);return}setTimeout(it,10)}Gt.get("KHR_parallel_shader_compile")!==null?it():setTimeout(it,10)})};let pn=null;function Hn(S){pn&&pn(S)}function Fc(){Li.stop()}function Oc(){Li.start()}const Li=new zh;Li.setAnimationLoop(Hn),typeof self<"u"&&Li.setContext(self),this.setAnimationLoop=function(S){pn=S,V.setAnimationLoop(S),S===null?Li.stop():Li.start()},V.addEventListener("sessionstart",Fc),V.addEventListener("sessionend",Oc),this.render=function(S,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),V.enabled===!0&&V.isPresenting===!0&&(V.cameraAutoUpdate===!0&&V.updateCamera(k),k=V.getCamera()),S.isScene===!0&&S.onBeforeRender(v,S,k,P),p=Yt.get(S,x.length),p.init(k),x.push(p),Pt.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),j.setFromProjectionMatrix(Pt),Et=this.localClippingEnabled,st=nt.init(this.clippingPlanes,Et),m=pt.get(S,M.length),m.init(),M.push(m),V.enabled===!0&&V.isPresenting===!0){const it=v.xr.getDepthSensingMesh();it!==null&&xo(it,k,-1/0,v.sortObjects)}xo(S,k,0,v.sortObjects),m.finish(),v.sortObjects===!0&&m.sort(rt,ut),qt=V.enabled===!1||V.isPresenting===!1||V.hasDepthSensing()===!1,qt&&Ct.addToRenderList(m,S),this.info.render.frame++,st===!0&&nt.beginShadows();const B=p.state.shadowsArray;mt.render(B,S,k),st===!0&&nt.endShadows(),this.info.autoReset===!0&&this.info.reset();const $=m.opaque,U=m.transmissive;if(p.setupLights(),k.isArrayCamera){const it=k.cameras;if(U.length>0)for(let ft=0,bt=it.length;ft<bt;ft++){const yt=it[ft];$c($,U,S,yt)}qt&&Ct.render(S);for(let ft=0,bt=it.length;ft<bt;ft++){const yt=it[ft];Bc(m,S,yt,yt.viewport)}}else U.length>0&&$c($,U,S,k),qt&&Ct.render(S),Bc(m,S,k);P!==null&&(A.updateMultisampleRenderTarget(P),A.updateRenderTargetMipmap(P)),S.isScene===!0&&S.onAfterRender(v,S,k),le.resetDefaultState(),E=-1,y=null,x.pop(),x.length>0?(p=x[x.length-1],st===!0&&nt.setGlobalState(v.clippingPlanes,p.state.camera)):p=null,M.pop(),M.length>0?m=M[M.length-1]:m=null};function xo(S,k,B,$){if(S.visible===!1)return;if(S.layers.test(k.layers)){if(S.isGroup)B=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(k);else if(S.isLight)p.pushLight(S),S.castShadow&&p.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||j.intersectsSprite(S)){$&&zt.setFromMatrixPosition(S.matrixWorld).applyMatrix4(Pt);const ft=Y.update(S),bt=S.material;bt.visible&&m.push(S,ft,bt,B,zt.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||j.intersectsObject(S))){const ft=Y.update(S),bt=S.material;if($&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),zt.copy(S.boundingSphere.center)):(ft.boundingSphere===null&&ft.computeBoundingSphere(),zt.copy(ft.boundingSphere.center)),zt.applyMatrix4(S.matrixWorld).applyMatrix4(Pt)),Array.isArray(bt)){const yt=ft.groups;for(let Dt=0,Nt=yt.length;Dt<Nt;Dt++){const Mt=yt[Dt],Zt=bt[Mt.materialIndex];Zt&&Zt.visible&&m.push(S,ft,Zt,B,zt.z,Mt)}}else bt.visible&&m.push(S,ft,bt,B,zt.z,null)}}const it=S.children;for(let ft=0,bt=it.length;ft<bt;ft++)xo(it[ft],k,B,$)}function Bc(S,k,B,$){const U=S.opaque,it=S.transmissive,ft=S.transparent;p.setupLightsView(B),st===!0&&nt.setGlobalState(v.clippingPlanes,B),$&&Rt.viewport(L.copy($)),U.length>0&&za(U,k,B),it.length>0&&za(it,k,B),ft.length>0&&za(ft,k,B),Rt.buffers.depth.setTest(!0),Rt.buffers.depth.setMask(!0),Rt.buffers.color.setMask(!0),Rt.setPolygonOffset(!1)}function $c(S,k,B,$){if((B.isScene===!0?B.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[$.id]===void 0&&(p.state.transmissionRenderTarget[$.id]=new Zi(1,1,{generateMipmaps:!0,type:Gt.has("EXT_color_buffer_half_float")||Gt.has("EXT_color_buffer_float")?Da:oi,minFilter:Xi,samples:4,stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:jt.workingColorSpace}));const it=p.state.transmissionRenderTarget[$.id],ft=$.viewport||L;it.setSize(ft.z,ft.w);const bt=v.getRenderTarget();v.setRenderTarget(it),v.getClearColor(z),K=v.getClearAlpha(),K<1&&v.setClearColor(16777215,.5),v.clear(),qt&&Ct.render(B);const yt=v.toneMapping;v.toneMapping=Ei;const Dt=$.viewport;if($.viewport!==void 0&&($.viewport=void 0),p.setupLightsView($),st===!0&&nt.setGlobalState(v.clippingPlanes,$),za(S,B,$),A.updateMultisampleRenderTarget(it),A.updateRenderTargetMipmap(it),Gt.has("WEBGL_multisampled_render_to_texture")===!1){let Nt=!1;for(let Mt=0,Zt=k.length;Mt<Zt;Mt++){const ce=k[Mt],fe=ce.object,Ge=ce.geometry,ne=ce.material,wt=ce.group;if(ne.side===Jn&&fe.layers.test($.layers)){const Gn=ne.side;ne.side=qe,ne.needsUpdate=!0,zc(fe,B,$,Ge,ne,wt),ne.side=Gn,ne.needsUpdate=!0,Nt=!0}}Nt===!0&&(A.updateMultisampleRenderTarget(it),A.updateRenderTargetMipmap(it))}v.setRenderTarget(bt),v.setClearColor(z,K),Dt!==void 0&&($.viewport=Dt),v.toneMapping=yt}function za(S,k,B){const $=k.isScene===!0?k.overrideMaterial:null;for(let U=0,it=S.length;U<it;U++){const ft=S[U],bt=ft.object,yt=ft.geometry,Dt=$===null?ft.material:$,Nt=ft.group;bt.layers.test(B.layers)&&zc(bt,k,B,yt,Dt,Nt)}}function zc(S,k,B,$,U,it){S.onBeforeRender(v,k,B,$,U,it),S.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),U.onBeforeRender(v,k,B,$,S,it),U.transparent===!0&&U.side===Jn&&U.forceSinglePass===!1?(U.side=qe,U.needsUpdate=!0,v.renderBufferDirect(B,k,$,U,S,it),U.side=Ai,U.needsUpdate=!0,v.renderBufferDirect(B,k,$,U,S,it),U.side=Jn):v.renderBufferDirect(B,k,$,U,S,it),S.onAfterRender(v,k,B,$,U,it)}function Ha(S,k,B){k.isScene!==!0&&(k=_e);const $=At.get(S),U=p.state.lights,it=p.state.shadowsArray,ft=U.state.version,bt=Tt.getParameters(S,U.state,it,k,B),yt=Tt.getProgramCacheKey(bt);let Dt=$.programs;$.environment=S.isMeshStandardMaterial?k.environment:null,$.fog=k.fog,$.envMap=(S.isMeshStandardMaterial?O:b).get(S.envMap||$.environment),$.envMapRotation=$.environment!==null&&S.envMap===null?k.environmentRotation:S.envMapRotation,Dt===void 0&&(S.addEventListener("dispose",Ut),Dt=new Map,$.programs=Dt);let Nt=Dt.get(yt);if(Nt!==void 0){if($.currentProgram===Nt&&$.lightsStateVersion===ft)return Gc(S,bt),Nt}else bt.uniforms=Tt.getUniforms(S),S.onBeforeCompile(bt,v),Nt=Tt.acquireProgram(bt,yt),Dt.set(yt,Nt),$.uniforms=bt.uniforms;const Mt=$.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Mt.clippingPlanes=nt.uniform),Gc(S,bt),$.needsLights=Ou(S),$.lightsStateVersion=ft,$.needsLights&&(Mt.ambientLightColor.value=U.state.ambient,Mt.lightProbe.value=U.state.probe,Mt.directionalLights.value=U.state.directional,Mt.directionalLightShadows.value=U.state.directionalShadow,Mt.spotLights.value=U.state.spot,Mt.spotLightShadows.value=U.state.spotShadow,Mt.rectAreaLights.value=U.state.rectArea,Mt.ltc_1.value=U.state.rectAreaLTC1,Mt.ltc_2.value=U.state.rectAreaLTC2,Mt.pointLights.value=U.state.point,Mt.pointLightShadows.value=U.state.pointShadow,Mt.hemisphereLights.value=U.state.hemi,Mt.directionalShadowMap.value=U.state.directionalShadowMap,Mt.directionalShadowMatrix.value=U.state.directionalShadowMatrix,Mt.spotShadowMap.value=U.state.spotShadowMap,Mt.spotLightMatrix.value=U.state.spotLightMatrix,Mt.spotLightMap.value=U.state.spotLightMap,Mt.pointShadowMap.value=U.state.pointShadowMap,Mt.pointShadowMatrix.value=U.state.pointShadowMatrix),$.currentProgram=Nt,$.uniformsList=null,Nt}function Hc(S){if(S.uniformsList===null){const k=S.currentProgram.getUniforms();S.uniformsList=Ir.seqWithValue(k.seq,S.uniforms)}return S.uniformsList}function Gc(S,k){const B=At.get(S);B.outputColorSpace=k.outputColorSpace,B.batching=k.batching,B.batchingColor=k.batchingColor,B.instancing=k.instancing,B.instancingColor=k.instancingColor,B.instancingMorph=k.instancingMorph,B.skinning=k.skinning,B.morphTargets=k.morphTargets,B.morphNormals=k.morphNormals,B.morphColors=k.morphColors,B.morphTargetsCount=k.morphTargetsCount,B.numClippingPlanes=k.numClippingPlanes,B.numIntersection=k.numClipIntersection,B.vertexAlphas=k.vertexAlphas,B.vertexTangents=k.vertexTangents,B.toneMapping=k.toneMapping}function Nu(S,k,B,$,U){k.isScene!==!0&&(k=_e),A.resetTextureUnits();const it=k.fog,ft=$.isMeshStandardMaterial?k.environment:null,bt=P===null?v.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:Ws,yt=($.isMeshStandardMaterial?O:b).get($.envMap||ft),Dt=$.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,Nt=!!B.attributes.tangent&&(!!$.normalMap||$.anisotropy>0),Mt=!!B.morphAttributes.position,Zt=!!B.morphAttributes.normal,ce=!!B.morphAttributes.color;let fe=Ei;$.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(fe=v.toneMapping);const Ge=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,ne=Ge!==void 0?Ge.length:0,wt=At.get($),Gn=p.state.lights;if(st===!0&&(Et===!0||S!==y)){const rn=S===y&&$.id===E;nt.setState($,S,rn)}let ie=!1;$.version===wt.__version?(wt.needsLights&&wt.lightsStateVersion!==Gn.state.version||wt.outputColorSpace!==bt||U.isBatchedMesh&&wt.batching===!1||!U.isBatchedMesh&&wt.batching===!0||U.isBatchedMesh&&wt.batchingColor===!0&&U.colorTexture===null||U.isBatchedMesh&&wt.batchingColor===!1&&U.colorTexture!==null||U.isInstancedMesh&&wt.instancing===!1||!U.isInstancedMesh&&wt.instancing===!0||U.isSkinnedMesh&&wt.skinning===!1||!U.isSkinnedMesh&&wt.skinning===!0||U.isInstancedMesh&&wt.instancingColor===!0&&U.instanceColor===null||U.isInstancedMesh&&wt.instancingColor===!1&&U.instanceColor!==null||U.isInstancedMesh&&wt.instancingMorph===!0&&U.morphTexture===null||U.isInstancedMesh&&wt.instancingMorph===!1&&U.morphTexture!==null||wt.envMap!==yt||$.fog===!0&&wt.fog!==it||wt.numClippingPlanes!==void 0&&(wt.numClippingPlanes!==nt.numPlanes||wt.numIntersection!==nt.numIntersection)||wt.vertexAlphas!==Dt||wt.vertexTangents!==Nt||wt.morphTargets!==Mt||wt.morphNormals!==Zt||wt.morphColors!==ce||wt.toneMapping!==fe||wt.morphTargetsCount!==ne)&&(ie=!0):(ie=!0,wt.__version=$.version);let mn=wt.currentProgram;ie===!0&&(mn=Ha($,k,U));let ns=!1,Ye=!1,Js=!1;const he=mn.getUniforms(),wn=wt.uniforms;if(Rt.useProgram(mn.program)&&(ns=!0,Ye=!0,Js=!0),$.id!==E&&(E=$.id,Ye=!0),ns||y!==S){Rt.buffers.depth.getReversed()?(lt.copy(S.projectionMatrix),o0(lt),l0(lt),he.setValue(N,"projectionMatrix",lt)):he.setValue(N,"projectionMatrix",S.projectionMatrix),he.setValue(N,"viewMatrix",S.matrixWorldInverse);const li=he.map.cameraPosition;li!==void 0&&li.setValue(N,kt.setFromMatrixPosition(S.matrixWorld)),Vt.logarithmicDepthBuffer&&he.setValue(N,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial)&&he.setValue(N,"isOrthographic",S.isOrthographicCamera===!0),y!==S&&(y=S,Ye=!0,Js=!0)}if(U.isSkinnedMesh){he.setOptional(N,U,"bindMatrix"),he.setOptional(N,U,"bindMatrixInverse");const rn=U.skeleton;rn&&(rn.boneTexture===null&&rn.computeBoneTexture(),he.setValue(N,"boneTexture",rn.boneTexture,A))}U.isBatchedMesh&&(he.setOptional(N,U,"batchingTexture"),he.setValue(N,"batchingTexture",U._matricesTexture,A),he.setOptional(N,U,"batchingIdTexture"),he.setValue(N,"batchingIdTexture",U._indirectTexture,A),he.setOptional(N,U,"batchingColorTexture"),U._colorsTexture!==null&&he.setValue(N,"batchingColorTexture",U._colorsTexture,A));const Qs=B.morphAttributes;if((Qs.position!==void 0||Qs.normal!==void 0||Qs.color!==void 0)&&Lt.update(U,B,mn),(Ye||wt.receiveShadow!==U.receiveShadow)&&(wt.receiveShadow=U.receiveShadow,he.setValue(N,"receiveShadow",U.receiveShadow)),$.isMeshGouraudMaterial&&$.envMap!==null&&(wn.envMap.value=yt,wn.flipEnvMap.value=yt.isCubeTexture&&yt.isRenderTargetTexture===!1?-1:1),$.isMeshStandardMaterial&&$.envMap===null&&k.environment!==null&&(wn.envMapIntensity.value=k.environmentIntensity),Ye&&(he.setValue(N,"toneMappingExposure",v.toneMappingExposure),wt.needsLights&&Fu(wn,Js),it&&$.fog===!0&&ct.refreshFogUniforms(wn,it),ct.refreshMaterialUniforms(wn,$,G,et,p.state.transmissionRenderTarget[S.id]),Ir.upload(N,Hc(wt),wn,A)),$.isShaderMaterial&&$.uniformsNeedUpdate===!0&&(Ir.upload(N,Hc(wt),wn,A),$.uniformsNeedUpdate=!1),$.isSpriteMaterial&&he.setValue(N,"center",U.center),he.setValue(N,"modelViewMatrix",U.modelViewMatrix),he.setValue(N,"normalMatrix",U.normalMatrix),he.setValue(N,"modelMatrix",U.matrixWorld),$.isShaderMaterial||$.isRawShaderMaterial){const rn=$.uniformsGroups;for(let li=0,ci=rn.length;li<ci;li++){const Vc=rn[li];I.update(Vc,mn),I.bind(Vc,mn)}}return mn}function Fu(S,k){S.ambientLightColor.needsUpdate=k,S.lightProbe.needsUpdate=k,S.directionalLights.needsUpdate=k,S.directionalLightShadows.needsUpdate=k,S.pointLights.needsUpdate=k,S.pointLightShadows.needsUpdate=k,S.spotLights.needsUpdate=k,S.spotLightShadows.needsUpdate=k,S.rectAreaLights.needsUpdate=k,S.hemisphereLights.needsUpdate=k}function Ou(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(S,k,B){At.get(S.texture).__webglTexture=k,At.get(S.depthTexture).__webglTexture=B;const $=At.get(S);$.__hasExternalTextures=!0,$.__autoAllocateDepthBuffer=B===void 0,$.__autoAllocateDepthBuffer||Gt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),$.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(S,k){const B=At.get(S);B.__webglFramebuffer=k,B.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(S,k=0,B=0){P=S,w=k,C=B;let $=!0,U=null,it=!1,ft=!1;if(S){const yt=At.get(S);if(yt.__useDefaultFramebuffer!==void 0)Rt.bindFramebuffer(N.FRAMEBUFFER,null),$=!1;else if(yt.__webglFramebuffer===void 0)A.setupRenderTarget(S);else if(yt.__hasExternalTextures)A.rebindTextures(S,At.get(S.texture).__webglTexture,At.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){const Mt=S.depthTexture;if(yt.__boundDepthTexture!==Mt){if(Mt!==null&&At.has(Mt)&&(S.width!==Mt.image.width||S.height!==Mt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");A.setupDepthRenderbuffer(S)}}const Dt=S.texture;(Dt.isData3DTexture||Dt.isDataArrayTexture||Dt.isCompressedArrayTexture)&&(ft=!0);const Nt=At.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(Nt[k])?U=Nt[k][B]:U=Nt[k],it=!0):S.samples>0&&A.useMultisampledRTT(S)===!1?U=At.get(S).__webglMultisampledFramebuffer:Array.isArray(Nt)?U=Nt[B]:U=Nt,L.copy(S.viewport),X.copy(S.scissor),D=S.scissorTest}else L.copy(St).multiplyScalar(G).floor(),X.copy($t).multiplyScalar(G).floor(),D=oe;if(Rt.bindFramebuffer(N.FRAMEBUFFER,U)&&$&&Rt.drawBuffers(S,U),Rt.viewport(L),Rt.scissor(X),Rt.setScissorTest(D),it){const yt=At.get(S.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+k,yt.__webglTexture,B)}else if(ft){const yt=At.get(S.texture),Dt=k||0;N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,yt.__webglTexture,B||0,Dt)}E=-1},this.readRenderTargetPixels=function(S,k,B,$,U,it,ft){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let bt=At.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&ft!==void 0&&(bt=bt[ft]),bt){Rt.bindFramebuffer(N.FRAMEBUFFER,bt);try{const yt=S.texture,Dt=yt.format,Nt=yt.type;if(!Vt.textureFormatReadable(Dt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Vt.textureTypeReadable(Nt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=S.width-$&&B>=0&&B<=S.height-U&&N.readPixels(k,B,$,U,Ot.convert(Dt),Ot.convert(Nt),it)}finally{const yt=P!==null?At.get(P).__webglFramebuffer:null;Rt.bindFramebuffer(N.FRAMEBUFFER,yt)}}},this.readRenderTargetPixelsAsync=async function(S,k,B,$,U,it,ft){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let bt=At.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&ft!==void 0&&(bt=bt[ft]),bt){const yt=S.texture,Dt=yt.format,Nt=yt.type;if(!Vt.textureFormatReadable(Dt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Vt.textureTypeReadable(Nt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(k>=0&&k<=S.width-$&&B>=0&&B<=S.height-U){Rt.bindFramebuffer(N.FRAMEBUFFER,bt);const Mt=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,Mt),N.bufferData(N.PIXEL_PACK_BUFFER,it.byteLength,N.STREAM_READ),N.readPixels(k,B,$,U,Ot.convert(Dt),Ot.convert(Nt),0);const Zt=P!==null?At.get(P).__webglFramebuffer:null;Rt.bindFramebuffer(N.FRAMEBUFFER,Zt);const ce=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await r0(N,ce,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,Mt),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,it),N.deleteBuffer(Mt),N.deleteSync(ce),it}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(S,k=null,B=0){S.isTexture!==!0&&(ua("WebGLRenderer: copyFramebufferToTexture function signature has changed."),k=arguments[0]||null,S=arguments[1]);const $=Math.pow(2,-B),U=Math.floor(S.image.width*$),it=Math.floor(S.image.height*$),ft=k!==null?k.x:0,bt=k!==null?k.y:0;A.setTexture2D(S,0),N.copyTexSubImage2D(N.TEXTURE_2D,B,0,0,ft,bt,U,it),Rt.unbindTexture()},this.copyTextureToTexture=function(S,k,B=null,$=null,U=0){S.isTexture!==!0&&(ua("WebGLRenderer: copyTextureToTexture function signature has changed."),$=arguments[0]||null,S=arguments[1],k=arguments[2],U=arguments[3]||0,B=null);let it,ft,bt,yt,Dt,Nt,Mt,Zt,ce;const fe=S.isCompressedTexture?S.mipmaps[U]:S.image;B!==null?(it=B.max.x-B.min.x,ft=B.max.y-B.min.y,bt=B.isBox3?B.max.z-B.min.z:1,yt=B.min.x,Dt=B.min.y,Nt=B.isBox3?B.min.z:0):(it=fe.width,ft=fe.height,bt=fe.depth||1,yt=0,Dt=0,Nt=0),$!==null?(Mt=$.x,Zt=$.y,ce=$.z):(Mt=0,Zt=0,ce=0);const Ge=Ot.convert(k.format),ne=Ot.convert(k.type);let wt;k.isData3DTexture?(A.setTexture3D(k,0),wt=N.TEXTURE_3D):k.isDataArrayTexture||k.isCompressedArrayTexture?(A.setTexture2DArray(k,0),wt=N.TEXTURE_2D_ARRAY):(A.setTexture2D(k,0),wt=N.TEXTURE_2D),N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,k.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,k.unpackAlignment);const Gn=N.getParameter(N.UNPACK_ROW_LENGTH),ie=N.getParameter(N.UNPACK_IMAGE_HEIGHT),mn=N.getParameter(N.UNPACK_SKIP_PIXELS),ns=N.getParameter(N.UNPACK_SKIP_ROWS),Ye=N.getParameter(N.UNPACK_SKIP_IMAGES);N.pixelStorei(N.UNPACK_ROW_LENGTH,fe.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,fe.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,yt),N.pixelStorei(N.UNPACK_SKIP_ROWS,Dt),N.pixelStorei(N.UNPACK_SKIP_IMAGES,Nt);const Js=S.isDataArrayTexture||S.isData3DTexture,he=k.isDataArrayTexture||k.isData3DTexture;if(S.isRenderTargetTexture||S.isDepthTexture){const wn=At.get(S),Qs=At.get(k),rn=At.get(wn.__renderTarget),li=At.get(Qs.__renderTarget);Rt.bindFramebuffer(N.READ_FRAMEBUFFER,rn.__webglFramebuffer),Rt.bindFramebuffer(N.DRAW_FRAMEBUFFER,li.__webglFramebuffer);for(let ci=0;ci<bt;ci++)Js&&N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,At.get(S).__webglTexture,U,Nt+ci),S.isDepthTexture?(he&&N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,At.get(k).__webglTexture,U,ce+ci),N.blitFramebuffer(yt,Dt,it,ft,Mt,Zt,it,ft,N.DEPTH_BUFFER_BIT,N.NEAREST)):he?N.copyTexSubImage3D(wt,U,Mt,Zt,ce+ci,yt,Dt,it,ft):N.copyTexSubImage2D(wt,U,Mt,Zt,ce+ci,yt,Dt,it,ft);Rt.bindFramebuffer(N.READ_FRAMEBUFFER,null),Rt.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else he?S.isDataTexture||S.isData3DTexture?N.texSubImage3D(wt,U,Mt,Zt,ce,it,ft,bt,Ge,ne,fe.data):k.isCompressedArrayTexture?N.compressedTexSubImage3D(wt,U,Mt,Zt,ce,it,ft,bt,Ge,fe.data):N.texSubImage3D(wt,U,Mt,Zt,ce,it,ft,bt,Ge,ne,fe):S.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,U,Mt,Zt,it,ft,Ge,ne,fe.data):S.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,U,Mt,Zt,fe.width,fe.height,Ge,fe.data):N.texSubImage2D(N.TEXTURE_2D,U,Mt,Zt,it,ft,Ge,ne,fe);N.pixelStorei(N.UNPACK_ROW_LENGTH,Gn),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,ie),N.pixelStorei(N.UNPACK_SKIP_PIXELS,mn),N.pixelStorei(N.UNPACK_SKIP_ROWS,ns),N.pixelStorei(N.UNPACK_SKIP_IMAGES,Ye),U===0&&k.generateMipmaps&&N.generateMipmap(wt),Rt.unbindTexture()},this.copyTextureToTexture3D=function(S,k,B=null,$=null,U=0){return S.isTexture!==!0&&(ua("WebGLRenderer: copyTextureToTexture3D function signature has changed."),B=arguments[0]||null,$=arguments[1]||null,S=arguments[2],k=arguments[3],U=arguments[4]||0),ua('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(S,k,B,$,U)},this.initRenderTarget=function(S){At.get(S).__webglFramebuffer===void 0&&A.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?A.setTextureCube(S,0):S.isData3DTexture?A.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?A.setTexture2DArray(S,0):A.setTexture2D(S,0),Rt.unbindTexture()},this.resetState=function(){w=0,C=0,P=null,Rt.reset(),le.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ti}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=jt._getDrawingBufferColorSpace(t),e.unpackColorSpace=jt._getUnpackColorSpace()}}class _b extends Ie{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Tn,this.environmentIntensity=1,this.environmentRotation=new Tn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Yh extends qs{static get type(){return"LineBasicMaterial"}constructor(t){super(),this.isLineBasicMaterial=!0,this.color=new ee(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const jr=new F,Kr=new F,lf=new be,la=new Ih,mr=new ho,Jo=new F,cf=new F;class xb extends Ie{constructor(t=new zn,e=new Yh){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let s=1,a=e.count;s<a;s++)jr.fromBufferAttribute(e,s-1),Kr.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=jr.distanceTo(Kr);t.setAttribute("lineDistance",new nn(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,a=t.params.Line.threshold,r=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),mr.copy(n.boundingSphere),mr.applyMatrix4(s),mr.radius+=a,t.ray.intersectsSphere(mr)===!1)return;lf.copy(s).invert(),la.copy(t.ray).applyMatrix4(lf);const o=a/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,f=n.index,h=n.attributes.position;if(f!==null){const u=Math.max(0,r.start),g=Math.min(f.count,r.start+r.count);for(let _=u,m=g-1;_<m;_+=c){const p=f.getX(_),M=f.getX(_+1),x=gr(this,t,la,l,p,M);x&&e.push(x)}if(this.isLineLoop){const _=f.getX(g-1),m=f.getX(u),p=gr(this,t,la,l,_,m);p&&e.push(p)}}else{const u=Math.max(0,r.start),g=Math.min(h.count,r.start+r.count);for(let _=u,m=g-1;_<m;_+=c){const p=gr(this,t,la,l,_,_+1);p&&e.push(p)}if(this.isLineLoop){const _=gr(this,t,la,l,g-1,u);_&&e.push(_)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,r=s.length;a<r;a++){const o=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}}function gr(i,t,e,n,s,a){const r=i.geometry.attributes.position;if(jr.fromBufferAttribute(r,s),Kr.fromBufferAttribute(r,a),e.distanceSqToSegment(jr,Kr,Jo,cf)>n)return;Jo.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(Jo);if(!(l<t.near||l>t.far))return{distance:l,point:cf.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}const df=new F,ff=new F;class bb extends xb{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let s=0,a=e.count;s<a;s+=2)df.fromBufferAttribute(e,s),ff.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+df.distanceTo(ff);t.setAttribute("lineDistance",new nn(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class yb extends He{constructor(t,e,n,s,a,r,o,l,c){super(t,e,n,s,a,r,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Ks extends zn{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};const a=[],r=[];o(s),c(n),f(),this.setAttribute("position",new nn(a,3)),this.setAttribute("normal",new nn(a.slice(),3)),this.setAttribute("uv",new nn(r,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(M){const x=new F,v=new F,R=new F;for(let w=0;w<e.length;w+=3)u(e[w+0],x),u(e[w+1],v),u(e[w+2],R),l(x,v,R,M)}function l(M,x,v,R){const w=R+1,C=[];for(let P=0;P<=w;P++){C[P]=[];const E=M.clone().lerp(v,P/w),y=x.clone().lerp(v,P/w),L=w-P;for(let X=0;X<=L;X++)X===0&&P===w?C[P][X]=E:C[P][X]=E.clone().lerp(y,X/L)}for(let P=0;P<w;P++)for(let E=0;E<2*(w-P)-1;E++){const y=Math.floor(E/2);E%2===0?(h(C[P][y+1]),h(C[P+1][y]),h(C[P][y])):(h(C[P][y+1]),h(C[P+1][y+1]),h(C[P+1][y]))}}function c(M){const x=new F;for(let v=0;v<a.length;v+=3)x.x=a[v+0],x.y=a[v+1],x.z=a[v+2],x.normalize().multiplyScalar(M),a[v+0]=x.x,a[v+1]=x.y,a[v+2]=x.z}function f(){const M=new F;for(let x=0;x<a.length;x+=3){M.x=a[x+0],M.y=a[x+1],M.z=a[x+2];const v=m(M)/2/Math.PI+.5,R=p(M)/Math.PI+.5;r.push(v,1-R)}g(),d()}function d(){for(let M=0;M<r.length;M+=6){const x=r[M+0],v=r[M+2],R=r[M+4],w=Math.max(x,v,R),C=Math.min(x,v,R);w>.9&&C<.1&&(x<.2&&(r[M+0]+=1),v<.2&&(r[M+2]+=1),R<.2&&(r[M+4]+=1))}}function h(M){a.push(M.x,M.y,M.z)}function u(M,x){const v=M*3;x.x=t[v+0],x.y=t[v+1],x.z=t[v+2]}function g(){const M=new F,x=new F,v=new F,R=new F,w=new Kt,C=new Kt,P=new Kt;for(let E=0,y=0;E<a.length;E+=9,y+=6){M.set(a[E+0],a[E+1],a[E+2]),x.set(a[E+3],a[E+4],a[E+5]),v.set(a[E+6],a[E+7],a[E+8]),w.set(r[y+0],r[y+1]),C.set(r[y+2],r[y+3]),P.set(r[y+4],r[y+5]),R.copy(M).add(x).add(v).divideScalar(3);const L=m(R);_(w,y+0,M,L),_(C,y+2,x,L),_(P,y+4,v,L)}}function _(M,x,v,R){R<0&&M.x===1&&(r[x]=M.x-1),v.x===0&&v.z===0&&(r[x]=R/2/Math.PI+.5)}function m(M){return Math.atan2(M.z,-M.x)}function p(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ks(t.vertices,t.indices,t.radius,t.details)}}class wc extends Ks{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=1/n,a=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-n,0,-s,n,0,s,-n,0,s,n,-s,-n,0,-s,n,0,s,-n,0,s,n,0,-n,0,-s,n,0,-s,-n,0,s,n,0,s],r=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(a,r,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new wc(t.radius,t.detail)}}const vr=new F,_r=new F,Qo=new F,xr=new hn;class Mb extends zn{constructor(t=null,e=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},t!==null){const s=Math.pow(10,4),a=Math.cos(Dr*e),r=t.getIndex(),o=t.getAttribute("position"),l=r?r.count:o.count,c=[0,0,0],f=["a","b","c"],d=new Array(3),h={},u=[];for(let g=0;g<l;g+=3){r?(c[0]=r.getX(g),c[1]=r.getX(g+1),c[2]=r.getX(g+2)):(c[0]=g,c[1]=g+1,c[2]=g+2);const{a:_,b:m,c:p}=xr;if(_.fromBufferAttribute(o,c[0]),m.fromBufferAttribute(o,c[1]),p.fromBufferAttribute(o,c[2]),xr.getNormal(Qo),d[0]=`${Math.round(_.x*s)},${Math.round(_.y*s)},${Math.round(_.z*s)}`,d[1]=`${Math.round(m.x*s)},${Math.round(m.y*s)},${Math.round(m.z*s)}`,d[2]=`${Math.round(p.x*s)},${Math.round(p.y*s)},${Math.round(p.z*s)}`,!(d[0]===d[1]||d[1]===d[2]||d[2]===d[0]))for(let M=0;M<3;M++){const x=(M+1)%3,v=d[M],R=d[x],w=xr[f[M]],C=xr[f[x]],P=`${v}_${R}`,E=`${R}_${v}`;E in h&&h[E]?(Qo.dot(h[E].normal)<=a&&(u.push(w.x,w.y,w.z),u.push(C.x,C.y,C.z)),h[E]=null):P in h||(h[P]={index0:c[M],index1:c[x],normal:Qo.clone()})}}for(const g in h)if(h[g]){const{index0:_,index1:m}=h[g];vr.fromBufferAttribute(o,_),_r.fromBufferAttribute(o,m),u.push(vr.x,vr.y,vr.z),u.push(_r.x,_r.y,_r.z)}this.setAttribute("position",new nn(u,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}class Ac extends Ks{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],a=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,a,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Ac(t.radius,t.detail)}}class Rc extends Ks{constructor(t=1,e=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Rc(t.radius,t.detail)}}class Cc extends Ks{constructor(t=1,e=0){const n=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],s=[2,1,0,0,3,2,1,3,0,2,3,1];super(n,s,t,e),this.type="TetrahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Cc(t.radius,t.detail)}}class Sb extends qs{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new ee(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ee(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Rh,this.normalScale=new Kt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Tn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class jh extends Ie{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new ee(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}const tl=new be,hf=new F,uf=new F;class Eb{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Kt(512,512),this.map=null,this.mapPass=null,this.matrix=new be,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ec,this._frameExtents=new Kt(1,1),this._viewportCount=1,this._viewports=[new Se(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;hf.setFromMatrixPosition(t.matrixWorld),e.position.copy(hf),uf.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(uf),e.updateMatrixWorld(),tl.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(tl),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(tl)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class Tb extends Eb{constructor(){super(new Hh(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class pf extends jh{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ie.DEFAULT_UP),this.updateMatrix(),this.target=new Ie,this.shadow=new Tb}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class wb extends jh{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:gc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=gc);const mf={4:8367754,6:6000111,8:10775528,12:15766858,20:15253818};function Ab(i){switch(i){case 4:return new Cc(1.15);case 6:return new Ys(1.25,1.25,1.25);case 8:return new Rc(1.1);case 12:return new wc(1.05);default:return new Ac(1.08)}}function Rb(i){const e=(i.index?i.toNonIndexed():i).getAttribute("position"),n=[],s=new F,a=new F,r=new F;for(let o=0;o<e.count;o+=3){s.fromBufferAttribute(e,o),a.fromBufferAttribute(e,o+1),r.fromBufferAttribute(e,o+2);const l=new F().subVectors(r,a).cross(new F().subVectors(s,a)).normalize();let c=n.find(f=>f.normal.dot(l)>.995);c||(c={normal:l,verts:[]},n.push(c)),c.verts.push(s.clone(),a.clone(),r.clone())}return n.map(o=>{const l=[];for(const h of o.verts)l.some(u=>u.distanceToSquared(h)<1e-6)||l.push(h);const c=l.reduce((h,u)=>h.add(u),new F).divideScalar(l.length),f=Math.min(...l.map(h=>h.distanceTo(c)));return{normal:o.normal.dot(c)<0?o.normal.clone().negate():o.normal,center:c,size:f}})}function Cb(i,t){const e=document.createElement("canvas");e.width=e.height=128;const n=e.getContext("2d");n.fillStyle="#ffffff",n.font=`900 ${t>=12?60:72}px sans-serif`,n.textAlign="center",n.textBaseline="middle",n.shadowColor="rgba(0,0,0,0.55)",n.shadowBlur=6,n.fillText(String(i),64,66),(i===6||i===9)&&n.fillRect(44,100,40,6);const s=new yb(e);return s.anisotropy=4,s}function Pb(i,t){const e=Ab(i),n=new ma,s=new Sb({color:t,flatShading:!0,roughness:.45,metalness:.1});n.add(new Mn(e,s)),n.add(new bb(new Mb(e),new Yh({color:16777215,transparent:!0,opacity:.55})));const a=Rb(e).slice(0,i),r=[];return a.forEach((o,l)=>{const c=new Mn(new Ua(o.size*1.25,o.size*1.25),new Sc({map:Cb(l+1,i),transparent:!0,depthWrite:!1}));c.position.copy(o.center).addScaledVector(o.normal,.01);const f=Math.abs(o.normal.y)>.9?new F(0,0,1):new F(0,1,0),d=f.clone().sub(o.normal.clone().multiplyScalar(f.dot(o.normal))).normalize();c.up.copy(d),c.lookAt(c.position.clone().add(o.normal)),n.add(c),r.push({normal:o.normal.clone(),up:d})}),{group:n,faces:r}}function Lb(i){const t=new F(0,0,1),e=new On().setFromUnitVectors(i.normal,t),n=i.up.clone().applyQuaternion(e),s=Math.atan2(n.x,n.y),a=new On().setFromAxisAngle(t,s);return new On().setFromEuler(new Tn(-.38,.32,0)).multiply(a.multiply(e))}const Db=i=>1-Math.pow(1-i,3);class Ib{constructor(t=96){W(this,"canvas");W(this,"renderer",null);W(this,"scene",new _b);W(this,"camera",new dn(32,1,.1,50));W(this,"model",null);W(this,"modelKey","");W(this,"snaps",new Map);W(this,"target",new On);W(this,"spinAxis",new F(1,0,0));W(this,"spinTotal",0);W(this,"rollKey",-1);this.canvas=document.createElement("canvas"),this.canvas.className="die3d",this.canvas.width=this.canvas.height=t*Math.min(2,window.devicePixelRatio||1),this.canvas.style.width=this.canvas.style.height=`${t}px`;try{this.renderer=new vb({canvas:this.canvas,antialias:!0,alpha:!0}),this.renderer.setPixelRatio(1)}catch{this.renderer=null}this.camera.position.set(0,0,5),this.scene.add(new wb(16777215,.75));const e=new pf(16777215,1.6);e.position.set(2,3,4),this.scene.add(e);const n=new pf(16769184,.6);n.position.set(-3,-1,2),this.scene.add(n)}get ok(){return!!this.renderer}ensureModel(t,e){const n=`${t}:${e}`;this.modelKey===n&&this.model||(this.model&&this.scene.remove(this.model.group),this.model=Pb(t,e),this.modelKey=n,this.scene.add(this.model.group))}prepare(t,e,n,s){this.ensureModel(t,s);const a=this.model.faces[Math.max(0,Math.min(t-1,e-1))];this.target=Lb(a),this.spinAxis.set(Math.random()-.5,Math.random()-.5,Math.random()-.5).normalize(),this.spinTotal=Math.PI*(5+Math.random()*3),this.rollKey=n}drawRolling(t,e,n,s,a=mf[t]){if(!this.renderer)return;n!==this.rollKey&&this.prepare(t,e,n,a);const r=Db(Math.min(1,s)),o=new On().setFromAxisAngle(this.spinAxis,this.spinTotal*(1-r)),l=this.model.group;l.quaternion.copy(this.target).multiply(o);const c=Math.abs(Math.sin(s*Math.PI*3.2))*(1-s)*.9;l.position.set(0,c-.1,0);const f=1+(1-r)*.08;l.scale.setScalar(f),this.renderer.render(this.scene,this.camera)}drawResult(t,e,n,s=mf[t]){if(!this.renderer)return;n!==this.rollKey&&this.prepare(t,e,n,s);const a=this.model.group;a.quaternion.copy(this.target),a.position.set(0,-.1,0),a.scale.setScalar(1),this.renderer.render(this.scene,this.camera)}snapshot(t,e,n){const s=Math.max(1,Math.min(t,e)),a=`${t}:${s}:${n}`,r=this.snaps.get(a);if(r)return r;if(!this.renderer)return"";this.rollKey=-1,this.drawResult(t,s,-2-this.snaps.size,n);const o=this.canvas.toDataURL("image/png");return this.snaps.set(a,o),this.rollKey=-1,o}}const kb=28,Ub=520,Nb=decodeURIComponent(location.hash.slice(1));let Q=Ea.get(Nb)??wi[0],si=Q.cat,Zr="",vt=Ji(Q),Na=!1,Pc=!1,Kh=!0,Rs=null;const Jl=()=>Na||Pc;let zs="",Lc=!1,Fb=0,$e;function ga(i){return!!ve[i]}function va(i){return i.key.replace(/@attack$/,"")}function gf(i){return{file:"",...i.defaults??{}}}function Ji(i){const t=ve[i.key],e={meta:t?{...gf(i),...t}:gf(i),img:null,font:null,src:null,upload:null,dirty:!1},n=ei(t);if(n)if(e.src=n,i.kind==="font")Zh(e,n);else{const s=new Image;s.onload=()=>{e.img=s,vt===e&&De()},s.src=n}return e}function Zh(i,t){const e=`RDPreview${++Fb}`;new FontFace(e,`url(${t})`).load().then(s=>{document.fonts.add(s),i.font=e,vt===i&&De()}).catch(()=>en("글꼴을 읽지 못했어요. 파일이 깨졌는지 확인해 주세요",!0))}function Jh(i,t){const e=Math.floor(i.naturalWidth/t),n=i.naturalHeight,s=document.createElement("canvas");s.width=e,s.height=n;const a=s.getContext("2d");a.drawImage(i,0,0);const r=a.getImageData(0,0,e,n).data;for(let o=n-1;o>=0;o--)for(let l=0;l<e;l++)if(r[(o*e+l)*4+3]>24)return Math.min(1,(o+1)/n);return .95}function Ob(i){const t=i.naturalWidth,e=i.naturalHeight;return t>e&&t%e===0?t/e:Math.max(1,Math.round(t/e))}function vf(i){const t=(i.name.split(".").pop()??"").toLowerCase(),e=Q.kind==="font"?["ttf","otf","woff","woff2"]:Q.kind==="sheet"?["png","webp","gif"]:["png","webp","gif","svg","jpg","jpeg"];if(!e.includes(t)){en(`이 칸에는 ${e.join(" · ").toUpperCase()} 파일만 넣을 수 있어요`,!0);return}const n=new FileReader;n.onload=()=>{const s=String(n.result);if(vt.upload={data:s.split(",")[1],ext:t,name:i.name},vt.src=s,vt.dirty=!0,Q.kind==="font"){Zh(vt,s),en(`${i.name} 글꼴을 불러왔어요`),De();return}const a=new Image;a.onload=()=>{if(vt.img=a,Q.kind==="sheet"){const r=Ob(a);vt.meta={...vt.meta,frames:r},Q.anchor==="foot"&&(vt.meta.foot=Jh(a,r)),en(`${i.name} · ${a.naturalWidth}×${a.naturalHeight} · 프레임 ${r}장으로 나눴어요`)}else en(`${i.name} · ${a.naturalWidth}×${a.naturalHeight}`);De()},a.src=s},n.readAsDataURL(i)}async function Qh(i,t){const e=await fetch(i,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}),n=await e.json().catch(()=>({}));if(!e.ok)throw new Error(n.error??e.statusText)}async function Bb(){if(vt.src){if(!Na){const i=$e.querySelector('[data-act="save"]');i&&(i.disabled=!0,i.textContent="올리는 중…");try{const{file:t,v:e,url:n,asset:s,...a}=vt.meta,r=vt.upload,o=r?await(await fetch(`data:application/octet-stream;base64,${r.data}`)).blob():null;await yp(Q.key,a,r&&o?{blob:o,ext:r.ext,name:r.name}:null),en(`${Q.name} 저장했어요. 이 링크의 게임에 바로 반영돼요`),vt=Ji(Q),De()}catch(t){en(`저장하지 못했어요: ${tu(t)}`,!0),De()}return}try{const{file:i,v:t,url:e,asset:n,...s}=vt.meta;await Qh("/__assets/save",{slot:Q.key,meta:s,image:vt.upload?{data:vt.upload.data,ext:vt.upload.ext}:null}),sessionStorage.setItem("asset-tool-toast",`${Q.name} 저장했어요. 게임에 바로 반영돼요`),setTimeout(()=>location.reload(),500)}catch(i){en(`저장하지 못했어요: ${i instanceof Error?i.message:i}`,!0)}}}async function $b(){if(confirm(`${Q.name}: 교체한 것을 빼고 기본으로 돌릴까요?`)){if(!Na){try{await Mp(Q.key),en(`${Q.name} 기본으로 돌렸어요`),vt=Ji(Q),De()}catch(i){en(`되돌리지 못했어요: ${tu(i)}`,!0)}return}try{await Qh("/__assets/reset",{slot:Q.key}),sessionStorage.setItem("asset-tool-toast",`${Q.name} 기본으로 돌렸어요`),setTimeout(()=>location.reload(),500)}catch(i){en(`되돌리지 못했어요: ${i instanceof Error?i.message:i}`,!0)}}}function zb(){const i=Q.unit,t=i?Ss(i.side,i.id):null;if(!t){en("기본 그림을 아직 못 불러왔어요. 잠시 뒤 다시 눌러 주세요",!0);return}const e=document.createElement("canvas");e.width=128,e.height=128,e.getContext("2d").drawImage(t,0,0,128,128);const n=document.createElement("a");n.href=e.toDataURL("image/png"),n.download=`${Q.key.replace(/[:@]/g,"_")}_template.png`,n.click()}function tu(i){return i instanceof Error?i.message:i&&typeof i=="object"&&"message"in i?String(i.message):String(i)}let _f=0;function en(i,t=!1){zs=i,Lc=t,clearTimeout(_f),_f=window.setTimeout(()=>{zs="",xf()},3800),xf()}function xf(){const i=document.getElementById("toast");i&&(i.textContent=zs,i.classList.toggle("show",!!zs),i.classList.toggle("bad",Lc))}function bf(i){if(i.unit){const n=i.unit;return n.side==="ally"?ri(n.id,pe.find(s=>s.id===n.id).kind):Gr(n.id)}const t=ve[i.key],e=ei(t);return t&&e?i.kind==="font"?`<span class="at-glyph font" style="font-family:'RDList-${i.key.replace(/\W/g,"")}'">가A</span>`:i.kind==="sheet"?`<span class="at-sheetthumb" style="background-image:url('${e}');background-size:${(t.frames??1)*100}% 100%"></span>`:`<img class="at-imgthumb ${i.cat==="bg"?"cover":""}" src="${e}" alt="">`:`<span class="at-glyph">${i.glyph??"·"}</span>`}function Hb(){const i=Zr.trim();return wi.filter(t=>t.cat===si&&!t.key.endsWith("@attack")&&(!i||t.name.includes(i)||t.key.includes(i)||t.where.includes(i)))}function Gb(i){const t=wi.filter(e=>e.cat===i);return`${t.filter(e=>ga(e.key)).length}/${t.length}`}function De(){const i=jc.find(r=>r.id===si),t=Hb(),e=ga(Q.key),n=!!vt.src,s=(r,o)=>`${o?`<div class="at-list-h">${o}</div>`:""}${r.map(l=>{const c=Ea.get(`${l.key}@attack`),f=(ga(l.key)?1:0)+(c&&ga(c.key)?1:0);return`<button class="at-slot ${va(Q)===l.key?"on":""}" data-slot="${l.key}">
          <span class="at-thumb">${bf(l)}</span>
          <span class="at-sn"><b>${l.name}</b><small>${l.where}</small></span>
          ${f?`<em class="at-badge custom">교체${c?` ${f}/2`:"됨"}</em>`:'<em class="at-badge">기본</em>'}
        </button>`}).join("")}`,a=si==="character"?s(t.filter(r=>{var o;return((o=r.unit)==null?void 0:o.side)==="ally"}),"⚔️ 용병")+s(t.filter(r=>{var o;return((o=r.unit)==null?void 0:o.side)==="enemy"}),"👾 몬스터"):s(t);$e.innerHTML=`
  <header class="at-head">
    <div class="at-title">🎨 에셋 교체 <span>RoopDice</span></div>
    <nav class="at-cats">${jc.map(r=>`<button class="${r.id===si?"on":""}" data-cat="${r.id}"><span>${r.icon}</span>${r.name}<i>${Gb(r.id)}</i></button>`).join("")}</nav>
    ${Rs?'<button class="at-link" data-act="close">← 게임으로</button>':'<a class="at-link" href="/" target="_blank">게임 열기 ↗</a>'}
  </header>
  ${Kh||Jl()?"":'<div class="at-warn">이 화면에서는 미리보기만 돼요. 저장은 공유 링크의 편집자이거나 내 컴퓨터의 개발 서버(npm run tool)에서 할 수 있어요.</div>'}
  ${!Na&&Pc?'<div class="at-note">🌐 웹 모드: 저장한 파일은 이 공유 링크에 보관되고, 링크로 게임을 여는 모두에게 바로 반영돼요. 내 컴퓨터 프로젝트 폴더에는 들어가지 않아요.</div>':""}
  <div class="at-body">
    <aside class="at-side">
      <p class="at-catdesc">${i.icon} ${i.desc}</p>
      <input class="at-search" id="search" placeholder="이름으로 찾기" value="${Zr.replace(/"/g,"&quot;")}" />
      <div class="at-list">${a||'<p class="muted">찾는 칸이 없어요</p>'}</div>
    </aside>
    <main class="at-main">
      <div class="at-slot-head">
        <span class="at-thumb big">${bf(Ea.get(va(Q)))}</span>
        <div class="at-sh-txt">
          <h2>${Q.name} <small>${Q.key}</small></h2>
          <p>${Q.where}${Q.hint?` · <span class="hint">${Q.hint}</span>`:""}</p>
        </div>
        <span class="at-state ${e?"custom":""}">${e?`교체됨 · ${ve[Q.key].file}`:"기본 사용 중"}</span>
      </div>
      ${Q.unit?`<div class="at-seg">${[Q.unit?va(Q):Q.key,`${va(Q)}@attack`].map((r,o)=>`<button class="${Q.key===r?"on":""}" data-slot="${r}">${o===0?"🚶 걷기":"⚔️ 공격"}${ga(r)?" ✓":""}</button>`).join("")}</div>`:""}

      <label class="at-drop" id="drop">
        <input type="file" accept="${dp[Q.kind]}" id="file" hidden />
        <span class="at-drop-ico">⬆️</span>
        <b>${n?"다른 파일로 바꾸기":Vb()}</b>
        <small>${Wb()}</small>
        ${vt.upload?`<span class="at-file">📄 ${vt.upload.name} <i>저장 전</i></span>`:""}
      </label>

      ${n?qb():Xb()}

      <div class="at-actions">
        ${e?'<button class="ghost danger" data-act="reset">기본으로 되돌리기</button>':""}
        ${Q.unit?'<button class="ghost" data-act="template">기본 그림 틀 받기</button>':""}
        ${vt.dirty?'<button class="ghost" data-act="cancel">바꾼 것 취소</button>':""}
        <button class="primary" data-act="save" ${vt.dirty&&n&&Jl()?"":"disabled"}>${vt.dirty?"💾 저장하고 게임에 반영":e?"저장됨":"파일을 넣어 주세요"}</button>
      </div>
    </main>
  </div>
  <div class="at-toast ${zs?"show":""} ${Lc?"bad":""}" id="toast">${zs}</div>`,iy(),eu()}function Vb(){return Q.kind==="font"?"글꼴 파일을 끌어다 놓거나 눌러서 고르기":Q.kind==="sheet"?"스프라이트 시트를 끌어다 놓거나 눌러서 고르기":"그림을 끌어다 놓거나 눌러서 고르기"}function Wb(){return Q.kind==="font"?"TTF · OTF · WOFF · WOFF2":Q.kind==="sheet"?"PNG · WEBP · GIF · 프레임을 가로로 나란히 (예: 128×128 네 장 → 512×128) · 프레임 1장이면 그냥 그림 한 장":Q.cat==="icon"?"PNG · SVG · WEBP · 정사각형 · 투명 배경":"PNG · SVG · WEBP · JPG"}function Xb(){return`<section class="at-card at-empty">${Q.unit?"<p>지금은 기본 그림을 쓰고 있어요. 크기를 맞추려면 아래 <b>기본 그림 틀 받기</b>로 128×128 틀을 받아 그 위에 그려 보세요.</p>":"<p>지금은 기본 모습을 쓰고 있어요. 파일을 넣으면 여기서 미리 보고 저장할 수 있어요.</p>"}</section>`}function qb(){return Q.kind==="font"?ty():Q.kind==="sheet"?Yb():Q.cat==="icon"?Kb():Q.key==="ui:panel"||Q.key==="ui:button"?Zb():Q.key.startsWith("ui:emblem")?Jb():Q.cat==="bg"?Qb():""}function Yb(){const i=vt.meta,t=Q.unit?Q.unit.side==="ally"?"용병은 오른쪽(→)으로 걸어요":"몬스터는 왼쪽(←)으로 걸어요":"",e=Q.cat==="fx";return`
  <section class="at-card">
    <h3>프레임 나누기 <small>${Q.anchor==="foot"?"빨간 선이 땅(발바닥)이에요":"노란 십자가 가운데(기준점)예요"}</small></h3>
    <canvas id="frames" class="at-frames"></canvas>
    <div class="at-controls">
      ${ey("frames","프레임 수",i.frames??1,1,64,"장")}
      ${Cs("fps",e?"재생 속도":"움직임 속도",i.fps??8,1,30,1,"프레임/초")}
      ${Q.anchor==="foot"?Cs("foot","발 위치",Math.round((i.foot??.95)*100),5,100,1,"%",'<button class="mini" data-act="auto-foot">자동</button>'):""}
      ${Cs("scale","크기",Math.round((i.scale??1)*100),10,300,5,"%")}
      ${e?"":`<label class="at-check"><input type="checkbox" data-k="flip" ${i.flip?"checked":""}/> 좌우 뒤집기 <small>${t}</small></label>`}
      <label class="at-check"><input type="checkbox" data-k="pixel" ${i.pixel!==!1?"checked":""}/> 픽셀아트 (확대해도 선명하게)</label>
    </div>
  </section>
  <div class="at-previews ${Q.unit&&!Q.key.endsWith("@attack")?"":"one"}">
    <section class="at-card grow">
      <h3>${jb()}</h3>
      <canvas id="stage" class="at-stage ${Q.cat==="fx"&&/merge|roll|upgrade/.test(Q.key)?"ui":""}"></canvas>
    </section>
    ${Q.unit&&!Q.key.endsWith("@attack")?`<section class="at-card"><h3>카드 미리보기</h3><div class="at-cardprev"><span class="at-thumb card" id="cardprev"></span><b>${Q.unit?Ea.get(va(Q)).name:""}</b></div></section>`:""}
  </div>`}function jb(){return Q.unit?Q.key.endsWith("@attack")?"전투 미리보기 <small>공격 → 잠깐 쉼 → 공격을 반복해요</small>":"전투 미리보기 <small>왼쪽 흐린 그림이 기본 그림 크기예요</small>":Q.key==="base:walk"?"전투 미리보기 <small>본진은 걸을 때만 프레임이 넘어가요</small>":Q.cat==="fx"?"재생 미리보기 <small>한 번 재생하고 잠깐 쉬었다 다시 보여 줘요</small>":"반복 재생 미리보기"}function Kb(){const i=vt.src,t=(Q.chars??[]).join(" "),e=`<img class="ico" src="${i}" alt="">`;return`
  <section class="at-card">
    <h3>화면 미리보기 <small>게임에서 ${t} 이모지가 모두 이 그림으로 바뀌어요</small></h3>
    <div class="at-icon-rows">
      <div class="at-icon-row dark"><span style="font-size:12px">${e} 작은 글씨 120</span><span style="font-size:16px">${e} 보통 글씨 120</span><span style="font-size:24px">${e} 큰 글씨</span><span style="font-size:40px">${e}</span></div>
      <div class="at-icon-row light"><span style="font-size:12px">${e} 작은 글씨 120</span><span style="font-size:16px">${e} 보통 글씨 120</span><span style="font-size:24px">${e} 큰 글씨</span><span style="font-size:40px">${e}</span></div>
    </div>
  </section>`}function Zb(){const i=vt.meta;return`
  <section class="at-card">
    <h3>9칸 나누기 <small>모서리는 그대로, 가운데·변만 늘어나요. 점선이 자르는 선이에요</small></h3>
    <canvas id="slice" class="at-frames"></canvas>
    <div class="at-controls">
      ${Cs("slice","모서리 자르기",i.slice??24,1,200,1,"px")}
      ${Cs("border","화면 테두리 두께",i.border??12,1,64,1,"px")}
    </div>
  </section>
  <section class="at-card">
    <h3>화면 미리보기</h3>
    <div class="at-ui-prev" id="uiprev">
      ${Q.key==="ui:panel"?'<div class="rd-sample panel"><b>목표 달성!</b><p>목표보다 12m 더 나아갔어요</p><div class="rd-sample-row"><span>기본 보상</span><b>+10</b></div></div><div class="rd-sample panel small"><b>스테이지 3</b><p>초원</p></div>':'<button class="rd-sample btn">캠프로 →</button><button class="rd-sample btn wide">스테이지 2 · 초원으로 이동 →</button>'}
    </div>
  </section>`}function Jb(){return`
  <section class="at-card">
    <h3>결과 팝업 미리보기</h3>
    <div class="at-result"><img src="${vt.src}" alt=""><b>${Q.key.endsWith("fail")?"목표 미달":Q.key.endsWith("boss")?"보스 격파!":"목표 달성!"}</b><p>스테이지 3 · 초원</p></div>
  </section>`}function Qb(){const i=vt.meta;return Q.key==="bg:camp"?`
  <section class="at-card">
    <h3>캠프 미리보기 <small>화면을 꽉 채우게 가운데 기준으로 잘려요</small></h3>
    <div class="at-camp-prev"><img src="${vt.src}" alt="">${i.props!==!1?'<span class="cp-fire">🔥</span><span class="cp-tag" style="left:20%;top:52%">⛺ 막사</span><span class="cp-tag" style="left:70%;top:76%">⚒ 대장간</span><span class="cp-tag" style="left:80%;top:56%">🧳 짐수레</span>':""}</div>
    <div class="at-controls one"><label class="at-check"><input type="checkbox" data-k="props" ${i.props!==!1?"checked":""}/> 그 위에 모닥불·용병·장소 그림도 그리기 <small>끄면 배경 그림만 보여요 (장소 이름표는 그대로)</small></label></div>
  </section>`:`
  <section class="at-card">
    <h3>전투 미리보기 <small>높이에 맞춰 가로로 이어 붙여요 · 점선이 땅 높이(아래 38px)</small></h3>
    <canvas id="stage" class="at-stage bg"></canvas>
    <div class="at-controls">${Cs("parallax","흐르는 속도",Math.round((i.parallax??.5)*100),0,100,5,"%")}</div>
  </section>`}function ty(){const i=vt.font?`'${vt.font}'`:"inherit";return`
  <section class="at-card">
    <h3>글꼴 미리보기 ${vt.font?"":"<small>불러오는 중…</small>"}</h3>
    <div class="at-font" style="font-family:${i}">
      <p style="font-size:34px">RoopDice 원정대</p>
      <p style="font-size:22px">목표 달성! 🪙 +24 · 스테이지 7</p>
      <p style="font-size:15px">주사위를 굴려 격자에 놓고, 용병을 불러 원정을 떠나요. 0123456789</p>
      <p style="font-size:12px">작은 글씨: 공격 간격 1.20초 · 이동 속도 2.2 · 사거리 6m</p>
    </div>
  </section>`}function ey(i,t,e,n,s,a){return`<label class="at-ctl"><span>${t}</span><span class="at-num"><button class="mini" data-step="${i}" data-d="-1">−</button><input type="number" data-k="${i}" value="${e}" min="${n}" max="${s}" step="1"/><button class="mini" data-step="${i}" data-d="1">+</button></span><i>${a}</i></label>`}function Cs(i,t,e,n,s,a,r,o=""){return`<label class="at-ctl"><span>${t}</span><input type="range" data-k="${i}" data-unit="${r}" value="${e}" min="${n}" max="${s}" step="${a}"/><b id="v-${i}">${e}${r}</b>${o}</label>`}const ny=new Set(["foot","scale","parallax"]);function yf(i,t){const e=vt.meta;typeof t=="boolean"?e[i]=t:i==="frames"?e[i]=Math.max(1,Math.min(64,Math.round(t)||1)):e[i]=ny.has(i)?t/100:t,vt.dirty=!0}function Mf(i){i!==Q.key&&(vt.dirty&&!confirm("저장하지 않은 변경이 있어요. 버리고 넘어갈까요?")||(Q=Ea.get(i),si=Q.cat,history.replaceState(null,"",`#${encodeURIComponent(Q.key)}`),vt=Ji(Q),De()))}function iy(){$e.querySelectorAll("[data-cat]").forEach(n=>n.addEventListener("click",()=>{const s=n.dataset.cat;if(s===si)return;const a=wi.find(r=>r.cat===s);si=s,Zr="",Mf(a.key),Q.cat!==s&&(si=Q.cat,De())})),$e.querySelectorAll("[data-slot]").forEach(n=>n.addEventListener("click",()=>Mf(n.dataset.slot)));const i=$e.querySelector("#search");i.addEventListener("input",()=>{Zr=i.value;const n=i.selectionStart;De();const s=$e.querySelector("#search");s.focus(),s.setSelectionRange(n,n)});const t=$e.querySelector("#file");t.addEventListener("change",()=>{var n;return((n=t.files)==null?void 0:n[0])&&vf(t.files[0])});const e=$e.querySelector("#drop");e.addEventListener("dragover",n=>{n.preventDefault(),e.classList.add("over")}),e.addEventListener("dragleave",()=>e.classList.remove("over")),e.addEventListener("drop",n=>{var a,r;n.preventDefault(),e.classList.remove("over");const s=(r=(a=n.dataTransfer)==null?void 0:a.files)==null?void 0:r[0];s&&vf(s)}),$e.querySelectorAll("input[data-k]").forEach(n=>{const s=n.dataset.k;n.addEventListener(n.type==="range"?"input":"change",()=>{if(yf(s,n.type==="checkbox"?n.checked:Number(n.value)),n.type==="range"){const a=document.getElementById(`v-${s}`);a&&(a.textContent=`${n.value}${n.dataset.unit??""}`),sy(),eu()}else De()})}),$e.querySelectorAll("[data-step]").forEach(n=>n.addEventListener("click",s=>{s.preventDefault(),yf(n.dataset.step,(vt.meta.frames??1)+Number(n.dataset.d)),De()})),$e.querySelectorAll("[data-act]").forEach(n=>n.addEventListener("click",s=>{s.preventDefault();const a=n.dataset.act;a==="close"&&(Rs==null||Rs()),a==="save"&&Bb(),a==="reset"&&$b(),a==="template"&&zb(),a==="cancel"&&(vt=Ji(Q),De()),a==="auto-foot"&&vt.img&&(vt.meta.foot=Jh(vt.img,vt.meta.frames??1),vt.dirty=!0,De())}))}function sy(){const i=$e.querySelector('[data-act="save"]');i&&Jl()&&vt.src&&(i.disabled=!1,i.textContent="💾 저장하고 게임에 반영")}function eu(){const i=vt.meta,t=document.getElementById("cardprev");if(t&&vt.src&&Q.unit){const n=Q.unit.side==="ally"?pe.find(r=>r.id===Q.unit.id).kind:"",s={melee:"#3b4766,#26304a",ranged:"#2f5a48,#1e3a30",magic:"#4f3a73,#2f2450",support:"#6a5326,#43341a"},a=Q.unit.side==="ally"?`radial-gradient(circle at 50% 35%, ${s[n]??s.melee})`:"linear-gradient(#3a2430,#3a2430)";t.innerHTML=`<span class="portrait sheet-portrait ${i.pixel!==!1?"pixel":""}" style="background-image:url('${vt.src}'),${a};background-size:${(i.frames??1)*100}% 100%,cover"></span>`}const e=document.getElementById("uiprev");e&&vt.src&&e.querySelectorAll(".rd-sample").forEach(n=>{n.style.borderStyle="solid",n.style.borderColor="transparent",n.style.borderWidth=`${i.border??12}px`,n.style.borderImage=`url('${vt.src}') ${i.slice??24} fill / ${i.border??12}px stretch`,n.style.background="none"})}function Dc(i){const t=Math.min(2,devicePixelRatio||1),e=i.clientWidth,n=i.clientHeight;(i.width!==Math.round(e*t)||i.height!==Math.round(n*t))&&(i.width=Math.round(e*t),i.height=Math.round(n*t));const s=i.getContext("2d");return s.setTransform(t,0,0,t,0,0),s}function nu(i,t,e,n,s){for(let a=0;a<s;a+=10)for(let r=0;r<n;r+=10)i.fillStyle=(r+a)/10%2?"#2a2c3e":"#33364a",i.fillRect(t+r,e+a,Math.min(10,n-r),Math.min(10,s-a))}function iu(i){const t=vt.meta,e=Math.max(1,t.frames??1),n=t.fps??8;if(Q.cat==="fx"||Q.key.endsWith("@attack")){const s=e/n,a=s+.6,r=i%a;return r<s?Math.floor(r*n):-1}return Math.floor(i*n)%e}function ay(i){const t=document.getElementById("frames"),e=vt.img;if(!t||!e)return;const n=vt.meta,s=Math.max(1,n.frames??1);t.style.height=`${Math.min(220,Math.max(90,t.clientWidth*(e.naturalHeight/e.naturalWidth)))}px`;const a=Dc(t),r=t.clientWidth,o=t.clientHeight;a.clearRect(0,0,r,o);const l=Math.min(r/e.naturalWidth,o/e.naturalHeight),c=e.naturalWidth*l,f=e.naturalHeight*l,d=(r-c)/2,h=(o-f)/2;nu(a,d,h,c,f),a.imageSmoothingEnabled=n.pixel===!1,a.drawImage(e,d,h,c,f);const u=c/s,g=iu(i);a.font="bold 11px sans-serif";for(let _=0;_<s;_++){const m=_===g;a.strokeStyle=m?"#ffd34d":"rgba(255,255,255,0.35)",a.lineWidth=m?2:1,a.strokeRect(d+_*u+.5,h+.5,u-1,f-1),s<=24&&(a.fillStyle=m?"#ffd34d":"rgba(255,255,255,0.6)",a.fillText(String(_+1),d+_*u+4,h+12))}if(Q.anchor==="foot")a.strokeStyle="#ff5a5a",a.setLineDash([5,4]),a.beginPath(),a.moveTo(d,h+f*(n.foot??.95)),a.lineTo(d+c,h+f*(n.foot??.95)),a.stroke(),a.setLineDash([]);else{a.strokeStyle="#ffd34d";for(let _=0;_<s;_++){const m=d+_*u+u/2,p=h+f/2;a.beginPath(),a.moveTo(m-6,p),a.lineTo(m+6,p),a.moveTo(m,p-6),a.lineTo(m,p+6),a.stroke()}}}function ry(){const i=document.getElementById("slice"),t=vt.img;if(!i||!t)return;const e=vt.meta,n=Dc(i),s=i.clientWidth,a=i.clientHeight;n.clearRect(0,0,s,a);const r=Math.min(s/t.naturalWidth,a/t.naturalHeight,4),o=t.naturalWidth*r,l=t.naturalHeight*r,c=(s-o)/2,f=(a-l)/2;nu(n,c,f,o,l),n.drawImage(t,c,f,o,l);const d=(e.slice??24)*r;n.strokeStyle="#ffd34d",n.setLineDash([4,3]),n.beginPath();for(const h of[c+d,c+o-d])n.moveTo(h,f),n.lineTo(h,f+l);for(const h of[f+d,f+l-d])n.moveTo(c,h),n.lineTo(c+o,h);n.stroke(),n.setLineDash([])}function oy(i,t,e,n){const s=i.createLinearGradient(0,0,0,e);s.addColorStop(0,"#7ec8ff"),s.addColorStop(1,"#cfeaff"),i.fillStyle=s,i.fillRect(0,0,t,e),i.fillStyle="#6cc46a",i.fillRect(0,n,t,e-n),i.fillStyle="#4ea24e",i.fillRect(0,n,t,4)}function ly(i){const t=document.getElementById("stage"),e=vt.img;if(!t||!e)return;const n=vt.meta,s=Dc(t),a=t.clientWidth,r=t.clientHeight;if(s.imageSmoothingEnabled=!0,Q.cat==="bg"){const m=e.naturalWidth*(r/e.naturalHeight),p=(i*60*(n.parallax??.5)%m+m)%m;for(let x=-p;x<a;x+=m)s.drawImage(e,x,0,m+1,r);s.strokeStyle="rgba(255,255,255,0.8)",s.setLineDash([6,5]),s.beginPath(),s.moveTo(0,r-38),s.lineTo(a,r-38),s.stroke(),s.setLineDash([]);const M=Ss("ally","knight");M&&s.drawImage(M,a*.3-30,r-38-57,60,60);return}const o=t.classList.contains("ui"),l=r-34;if(o){s.fillStyle="#1d1f30",s.fillRect(0,0,a,r),s.fillStyle="#2b2e45";for(let m=0;m<4;m++)s.fillRect(a/2-110+m*56,r/2-24,50,50)}else Q.key==="anim:stone"?(s.fillStyle="#1d1f30",s.fillRect(0,0,a,r)):oy(s,a,r,l);const c=Math.max(1,n.frames??1),f=e.naturalWidth/c,d=e.naturalHeight,h=iu(i),u=(m,p,M,x,v=!1)=>{if(h<0)return;const R=M*(f/d);s.imageSmoothingEnabled=n.pixel===!1,s.save(),s.translate(m,x==="foot"?p-M*(n.foot??.95):p-M/2),v!==!!n.flip&&s.scale(-1,1),s.drawImage(e,h*f,0,f,d,-R/2,0,R,M),s.restore(),s.imageSmoothingEnabled=!0},g=(m,p)=>{s.fillStyle=o||Q.key==="anim:stone"?"rgba(255,255,255,0.6)":"rgba(0,0,0,0.55)",s.font="bold 11px sans-serif",s.textAlign="center",s.fillText(m,p,r-10),s.textAlign="left"};if(Q.unit){const p=Ub/kb*2,M=Math.max(16*2,Q.unit.size*p*1.25),x=Q.unit.side==="ally"?1:-1;s.fillStyle="rgba(0,0,0,0.12)";for(let R=-40;R<a+40;R+=40){const w=((R-x*i*40)%(a+80)+a+80)%(a+80)-40;s.fillRect(w,l+12,14,3)}const v=Ss(Q.unit.side,Q.unit.id);if(v){const R=M*(Q.unit.boss?1.5:1.75);s.globalAlpha=.35,s.drawImage(v,a*.28-R/2,l-R*.95,R,R),s.globalAlpha=1,g("기본",a*.28)}u(a*.64,l,M*1.7*(n.scale??1),"foot"),g(`새 그림  ${x>0?"→":"←"} 진행 방향`,a*.64);return}if(Q.key==="base:walk"){u(a*.45,l+2,96*2*(n.scale??1),"foot"),g("본진 (2배 확대) →",a*.45);return}if(Q.key==="anim:chest"){u(a*.5,l,26*3*(n.scale??1),"foot"),g("전리품 상자 (3배 확대)",a*.5);return}if(Q.key==="anim:stone"){u(a*.5,r/2,22*4*(n.scale??1),"center"),g("마석 (4배 확대)",a*.5);return}const _={"fx:hit":44,"fx:kill":60,"fx:explode":110,"fx:heal":50,"fx:volley":80,"fx:loot":70};if(o)u(a/2,r/2,130*(n.scale??1),"center");else{const m=Ss("enemy","slime");m&&s.drawImage(m,a/2-25,l-47,50,50);const p=_[Q.key]??60;u(a/2,l-p*.45,p*(n.scale??1),"center")}g(o?"화면 연출 (실제 크기)":"전투 화면 (실제 크기) · 슬라임 옆",a/2)}function cy(i){const t=i/1e3;ay(t),ly(t),ry(),Ql&&requestAnimationFrame(Ql)}function dy(i,t={}){$e=i,$e.classList.add("at-root"),Rs=t.onClose??null,Rs&&(Q=wi[0],si=Q.cat,vt=Ji(Q));for(const a of wi){if(a.kind!=="font")continue;const r=ei(ve[a.key]);if(!r)continue;new FontFace(`RDList-${a.key.replace(/\W/g,"")}`,`url(${r})`).load().then(l=>document.fonts.add(l)).catch(()=>{})}De(),fetch("/__assets").then(a=>a.ok&&(a.headers.get("content-type")??"").includes("json")).catch(()=>!1).then(async a=>{Na=a,a||(La(),Pc=await xp()),Kh=!1,vt.dirty||(vt=Ji(Q)),De()});const n=sessionStorage.getItem("asset-tool-toast");n&&(sessionStorage.removeItem("asset-tool-toast"),setTimeout(()=>en(n),50)),setTimeout(()=>{vt.dirty||De()},400);const s=a=>{$e.isConnected&&cy(a)};requestAnimationFrame(s),Ql=s}let Ql=null;const su="roopdice.tutSeen";function fy(){try{return new Set(JSON.parse(localStorage.getItem(su)??"[]"))}catch{return new Set}}const Ra=fy();function au(){try{localStorage.setItem(su,JSON.stringify([...Ra]))}catch{}}function ca(i){return Ra.has(i)}function hy(){Ra.clear(),au()}let kr=null;function ru(){return kr!==null}function uy(i){if(!i)return null;for(const t of Array.isArray(i)?i:[i])for(const e of document.querySelectorAll(t)){const n=e.getBoundingClientRect();if(n.width>0&&n.height>0)return e}return null}function da(i,t,e){if(Ra.has(i)||kr||!t.length)return!1;kr=i,Ra.add(i),au();const n=document.createElement("div");n.className="tut-root",n.innerHTML='<div class="tut-hole"></div><div class="tut-bubble" role="dialog" aria-live="polite"></div>',document.body.appendChild(n);const s=n.querySelector(".tut-hole"),a=n.querySelector(".tut-bubble");let r=0;const o=()=>{const h=t[r],u=uy(h.target),g=window.innerWidth,_=window.innerHeight,m=6;if(u){const p=u.getBoundingClientRect(),M=Math.max(4,p.left-m),x=Math.max(4,p.top-m),v=Math.min(g-8,p.right+m)-M,R=Math.min(_-8,p.bottom+m)-x;Object.assign(s.style,{left:`${M}px`,top:`${x}px`,width:`${v}px`,height:`${R}px`,opacity:"1"}),s.classList.remove("none");const w=Math.min(360,g-24);a.style.width=`${w}px`;const C=a.offsetHeight||160;let P=Math.min(g-w-12,Math.max(12,p.left+p.width/2-w/2)),E;p.bottom+m+12+C<_?E=p.bottom+m+12:p.top-m-12-C>0?E=p.top-m-12-C:p.right+m+12+w<g?(P=p.right+m+12,E=Math.min(_-C-12,Math.max(12,p.top+p.height/2-C/2))):p.left-m-12-w>0?(P=p.left-m-12-w,E=Math.min(_-C-12,Math.max(12,p.top+p.height/2-C/2))):E=Math.max(12,_-C-16),Object.assign(a.style,{left:`${P}px`,top:`${E}px`})}else{Object.assign(s.style,{left:`${g/2}px`,top:`${_/2}px`,width:"0px",height:"0px"}),s.classList.add("none");const p=Math.min(420,g-24);a.style.width=`${p}px`;const M=a.offsetHeight||160;Object.assign(a.style,{left:`${(g-p)/2}px`,top:`${Math.max(12,(_-M)/2)}px`})}},l=()=>{const h=t[r],u=r===t.length-1,g=t.map((_,m)=>`<i class="${m===r?"on":m<r?"done":""}"></i>`).join("");a.innerHTML=`
      <div class="tut-title">${h.title}</div>
      <div class="tut-body">${h.body}</div>
      <div class="tut-foot">
        <span class="tut-dots">${g}</span>
        ${u?"":'<button class="tut-skip" data-tut="skip">건너뛰기</button>'}
        ${r>0?'<button class="tut-prev" data-tut="prev">← 이전</button>':""}
        <button class="tut-next primary" data-tut="next">${u?"알겠어요!":"다음 →"}</button>
      </div>`,o(),requestAnimationFrame(o)},c=()=>{n.remove(),window.removeEventListener("resize",o),window.removeEventListener("keydown",d,!0),kr=null},f=h=>{if(r+h>=t.length)return c();r=Math.max(0,r+h),l()},d=h=>{h.stopImmediatePropagation(),h.preventDefault(),h.key==="Enter"||h.key==="ArrowRight"||h.key===" "?f(1):h.key==="ArrowLeft"?f(-1):h.key==="Escape"&&c()};return n.addEventListener("click",h=>{h.stopPropagation();const u=h.target.closest("[data-tut]");if(!u)return;const g=u.dataset.tut;g==="next"?f(1):g==="prev"?f(-1):g==="skip"&&c()}),n.addEventListener("contextmenu",h=>{h.preventDefault(),h.stopPropagation()}),window.addEventListener("resize",o),window.addEventListener("keydown",d,!0),l(),!0}let ue=56;const xe=4;let Xt=ue+xe;const py=()=>window.innerHeight<=760?150:200;function ou(i,t=q.grid.h){const e=document.getElementById("grid-panel"),n=((e==null?void 0:e.clientWidth)??400)-28,s=e==null?void 0:e.querySelector(".grid-wrap");if(window.innerWidth>=700&&e&&s&&s.clientHeight>0){const c=getComputedStyle(s),f=s.clientHeight-parseFloat(c.paddingTop)-parseFloat(c.paddingBottom),d=Math.floor((f-(t-1)*xe)/t),h=s.clientWidth-parseFloat(c.paddingLeft)-parseFloat(c.paddingRight),u=Math.floor((h-(i-1)*xe)/i);ue=Math.max(34,Math.min(72,u,d)),Xt=ue+xe;return}let a=Math.min(56,Math.floor((n-(i-1)*xe)/i));const r=document.querySelector(".layout"),o=document.querySelector(".battle-panel"),l=document.querySelector(".grid-holder");if(r&&o&&l&&r.clientHeight>0&&!o.querySelector(".stage-overlay.show")){const c=r.scrollHeight-o.offsetHeight-l.offsetHeight,f=r.clientHeight-c-py();a=Math.min(a,Math.floor((f-(t-1)*xe)/t))}ue=Math.max(34,a),Xt=ue+xe}const lu="roopdice.lastDeck";function my(){try{const i=JSON.parse(localStorage.getItem(lu)??"null");return Array.isArray(i)?i:null}catch{return null}}function gy(i){try{localStorage.setItem(lu,JSON.stringify(i))}catch{}}const Jr="roopdice.meta",vy="roopdice.keepMeta";function Hs(){return!0}function _y(){if(Hs())try{const i=localStorage.getItem(Jr);return i?JSON.parse(i):void 0}catch{return}}let Qr="";function cu(){if(!T||!Hs())return;const i=JSON.stringify(T.meta());if(i!==Qr){Qr=i;try{localStorage.setItem(Jr,i)}catch{}}}function du(){const i=new mm(Date.now(),_y());i.deferKillExp=!0;const t=my();return t&&i.isValidDeck(t)&&(i.deck=t),i.beginAtCamp(),i}let T=du(),q=T.game,Ht=null,te=null,me=null,Cn=null,Fa="mouse",Te=null;function Oa(i){const t=i.reduce((a,r)=>a+r[0],0)/i.length,e=i.reduce((a,r)=>a+r[1],0)/i.length;let n=i[0],s=1/0;for(const a of i){const r=(a[0]-t)**2+(a[1]-e)**2;r<s-1e-9&&(s=r,n=a)}return n}let Me=!1,ai=1,to=!1,fu=1,ze=!1,Qi=!1,eo=-1,br=0,Sf=0,Ef=0,Tf=-1,Ur=0,Nr=0,yr=!1,no=0,wf=0,yi=!1,Fr=0;const xy=!1,hu="roopdice.assist",bn=(()=>{const i={roll:!0,place:!1};try{return xy?{...i,...JSON.parse(localStorage.getItem(hu)??"{}"),place:!1}:{roll:!1,place:!1}}catch{return i}})();let el=0,Mr=0;function uu(){try{localStorage.setItem(hu,JSON.stringify(bn))}catch{}}let tc=null,Ps=!1,Hi=!1;const by={1:6000111,2:5230987,3:15766858,4:10775528},io=i=>by[Math.min(4,Math.max(1,i))],un=i=>`#${io(i).toString(16).padStart(6,"0")}`,Ic=document.getElementById("app");vp(document.body);La();_p(()=>{typeof It=="function"&&It()});Ic.innerHTML=`
  <header class="topbar"><div class="topbar-info" id="topbar"></div><button id="asset-btn" class="asset-btn" data-act="asset-tool" hidden data-tip="에셋 교체 툴 (편집 권한이 있을 때만)">🎨</button><button id="give-up" class="give-up" data-act="give-up" data-tip="원정 포기 · 3초 안에 한 번 더 누르면 새 원정">🏳</button></header>
  <main class="layout">
    <div class="panel battle-panel">
      <div class="battle-head" id="battle-head"></div>
      <div class="stage">
        <canvas id="battle" class="battle-canvas"></canvas>
        <div id="wave-slot" class="wave-slot"></div>
        <div id="prep-banner" class="prep-banner"></div>
      </div>
      <div class="battle-ctrl">
        <button data-speed="pause" id="pause-btn" data-tip="일시정지 / 계속 (Space)">⏸</button>
        <button data-act="speed-cycle" id="speed-btn" data-tip="게임 속도: 누를 때마다 1 → 2 → 4배속">⏩ ×1</button>
      </div>
    </div>
    <div class="panel grid-panel" id="grid-panel">
      <div class="dice-sec" id="dice-panel"></div>
      <h3>격자 <span id="grid-used" class="muted small"></span><span id="streak-mini" class="streak-mini"></span><span class="h3-btns"><button class="icon-btn" data-act="merge-info" title="강화 확률과 규칙">?</button><button id="clear-grid" class="clear-grid" data-act="clear-grid" data-tip="격자 비우기 · 3초 안에 한 번 더 누르면 놓인 주사위를 모두 버려요">🗑</button></span></h3>
      <div id="grid-sum" class="grid-sum"></div>
      <div id="fever-hud" class="fever-hud"></div>
      <div class="grid-wrap"><div class="grid-holder"><div id="grid" class="grid"></div><div id="grid-fx" class="grid-fx"></div></div></div>
      <div id="grid-actions" class="grid-actions"></div>
    </div>
    <div class="panel" id="merc-panel"></div>
  </main>
  <div id="stage-overlay" class="stage-overlay"></div>
  
  <div id="merge-modal" class="modal">
    <div class="modal-box">
      <h3>강화 정보 <button class="icon-btn close" data-act="close-modal">✕</button></h3>
      <div class="merge-row">
        <div class="dial-wrap">
          <div class="dial" id="dial"><div class="needle" id="needle"></div><div class="dial-hub"></div></div>
          <div class="cast-track" id="cast-track"><i id="cast-fill"></i><span id="cast-label">강화 대기</span></div>
          <div id="dial-caption" class="dial-caption">최근 판정이 여기 보여요</div>
        </div>
        <div class="merge-side" id="merge-side"></div>
      </div>
      <div class="size-legend">색 = 칸 수 (같은 색끼리 합쳐요)
        <span><i style="background:${un(1)}"></i>1칸</span><span><i style="background:${un(2)}"></i>2칸</span><span><i style="background:${un(3)}"></i>3칸</span><span><i style="background:${un(4)}"></i>4칸</span></div>
      <p class="small muted how">① 강화할 주사위(대상)를 누르고 → ② 반짝이는 재료를 누르고 → ③ 재료 위 <b>⚒ 강화</b>(또는 재료를 한 번 더). 대상은 모양·위치를 유지하고 눈금이 더해져요.</p>
      <div id="log"></div>
    </div>
  </div>
  <div id="debug-modal" class="modal">
    <div class="modal-box">
      <h3>디버그 <span class="muted small">수치 테스트용</span> <button class="icon-btn close" data-act="close-modal">✕</button></h3>
      <div id="debug"></div>
    </div>
  </div>
  <div id="camp" class="camp-screen">
    <div class="camp-top" id="camp-top"></div>
    <div class="camp-stage"><canvas id="camp-canvas" class="camp-canvas"></canvas><div id="camp-stats" class="camp-stats"></div><div id="camp-spots" class="camp-spots"></div></div>
    <div class="camp-bottom" id="camp-bottom"></div>
  </div>
  <div id="camp-sheet" class="modal"><div class="modal-box" id="camp-sheet-box"></div></div>
  <button class="pause-pill" data-speed="pause">⏸ 일시정지 중 · <b>▶ 계속</b></button>
  <div id="fullscreen" class="fullscreen"></div>
  <div id="toast" class="toast"></div>
  <div id="fever-fx" class="fever-fx">피버 룰렛!</div>
  <div id="roulette" class="roulette"></div>
  <div id="dayfx" class="dayfx"></div>
`;const xt=i=>document.getElementById(i),Af=new Gp(xt("battle")),gi=new Ib(88);function yy(){const i=document.getElementById("give-up");if(!i)return;const t=T.phase!=="deck"&&T.phase!=="over"&&T.phase!=="victory",e=performance.now()<Ur;i.style.display=t?"":"none",i.classList.toggle("armed",e),i.textContent=e?"한 번 더 누르면 포기":"🏳 포기"}function po(){yy();const i=T.battle;Math.max(0,ks-T.time);const t=fn(T.day);t||Math.min(100,i.progress/T.target*100);const e=Array.from({length:lo},(s,a)=>`<span class="flag ${a<T.flags?"on":""} ${a===eo?"breaking":""}">${a<T.flags||a===eo?"❤":"♡"}</span>`).join(""),n=q.feverLeft();document.body.classList.toggle("fever",n>0),xt("topbar").innerHTML=`
    <div class="day">스테이지 ${T.day} <span class="muted">· ${We[ts(T.day)].icon} ${Pa(T.day)}${t?' · <b class="badc">보스</b>':""}</span></div>
    <div class="flags" title="목숨: 목표를 못 채우면 하나씩 잃어요">${e}</div>
    <div class="coins" data-tip="코인: 원정이 끝나도 남아요 · 캠프에서 영구 업그레이드에 써요">🪙 <b>${T.coins}</b>${T.phase==="march"&&T.overshootBonus>0?` <span class="pending-coins">+${T.overshootBonus}</span>`:""}</div>
    ${Du({mark:rc})}
  `,ec(),Ey(n)}const My={melee:"⚔️",ranged:"🏹",magic:"✨",support:"💚"},Kn=document.createElement("div");Kn.className="rd-tip";document.body.appendChild(Kn);let so=null,Or=null;function pu(i){const t=(i==null?void 0:i.closest("[data-tip],[data-tip-html],[title]"))??null;return!t||t.classList.contains("st-ico")||t.closest(".at-root")?null:(t.hasAttribute("title")&&(!t.dataset.tip&&!t.dataset.tipHtml&&(t.dataset.tip=t.getAttribute("title")??""),t.removeAttribute("title")),t.dataset.tip||t.dataset.tipHtml?t:null)}function mo(i){if(so=i,!i){Kn.classList.remove("show");return}i.dataset.tipHtml?Kn.innerHTML=i.dataset.tipHtml:Kn.textContent=i.dataset.tip??"",Kn.classList.add("show");const t=i.getBoundingClientRect(),e=Kn.offsetWidth,n=Kn.offsetHeight;let s=t.left+t.width/2-e/2;s=Math.max(6,Math.min(window.innerWidth-e-6,s));let a=t.top-n-8;a<6&&(a=t.bottom+8),Kn.style.transform=`translate(${Math.round(s)}px, ${Math.round(a)}px)`}document.addEventListener("mouseover",i=>{const t=pu(i.target);t!==so&&mo(t)});document.addEventListener("mousemove",i=>{Or={x:i.clientX,y:i.clientY}});document.addEventListener("mouseleave",()=>mo(null));document.addEventListener("pointerdown",()=>mo(null));function Sy(){if(!so||so.isConnected)return;const i=Or?document.elementFromPoint(Or.x,Or.y):null;mo(pu(i))}let Sr="",Br=0;function ec(){const i=document.getElementById("prep-banner");if(!i)return;const t=T.phase==="march"&&T.prep;if(i.classList.toggle("show",t),!t){Sr&&(Sr="",i.innerHTML="");return}const e=q.unconfirmed+(q.pending?1:0)+(q.rolling?1:0),n=T.waitingCount,s=T.day,a=fn(s),r=a?Un[Vs[$n(s)].boss]:null,l=[...Zf(s)].sort((h,u)=>u[1]-h[1]).slice(0,5).map(([h])=>`<span class="pp-foe" title="${Un[h].note}"><span class="pp-foe-art">${Gr(h)}</span><b>${Un[h].name}</b></span>`).join(""),c=new Map;for(const h of T.battle.units)h.side==="ally"&&c.set(h.kind,(c.get(h.kind)??0)+1);const f=[...c.entries()].map(([h,u])=>{const g=pe.find(_=>_.id===h);return`<span class="pp-merc"><span class="pp-merc-art">${ri(g.id,g.kind)}</span>×${u}</span>`}).join(""),d=`<div class="pp-box">
    <div class="pp-head"><span class="pp-tag">⏸ 준비 시간</span><b>스테이지 ${s} · ${We[ts(s)].icon} ${Pa(s)}</b>${a?'<span class="pp-boss">👑 보스</span>':""}</div>
    ${T.zoneReset?T.partRetry?`<div class="pp-reset fail">💔 파트 다시 도전 · <b>스테이지 ${T.day}부터</b> · 격자와 남은 주사위를 비웠어요 · ✨ 가호 ${T.cards.length}개는 그대로</div>`:`<div class="pp-reset">👑 보스 격파 · <b>새 파트 시작!</b> 격자와 남은 주사위를 비웠어요 · ✨ 가호 ${T.cards.length}개는 그대로</div>`:""}
    <div class="pp-row">
      <div class="pp-cell goal"><small>목표</small><b>${a&&r?`👑 ${r.name}`:`🚩 ${T.target}m`}</b></div>
      <div class="pp-cell"><small>남은 주사위</small><b>🎲 ${e}</b></div>
      <div class="pp-cell"><small>대기 용병</small><b>${n?`🛡 ${n}명`:"-"}</b>${f?`<span class="pp-mercs">${f}</span>`:""}</div>
      ${performance.now()<Br?'<button class="pp-go armed" data-act="launch">⚠ 대기 용병 0명<small>그래도 출격하려면 한 번 더</small></button>':'<button class="pp-go" data-act="launch">⚔ 출격!<small>전투 준비를 충분히 마친 뒤 출격하세요</small></button>'}
    </div>
    ${a?'<div class="pp-boss-tip">👑 <b>보스전</b> · 남은 주사위는 다음 파트로 넘어가지 않아요 · <b>모든 주사위를 쏟아부어</b> 쓰러뜨려요!</div>':""}
    <div class="pp-foes"><small>나오는 적</small>${r?`<span class="pp-foe boss"><span class="pp-foe-art">${Gr(r.id)}</span><b>${r.name}</b></span>`:""}${l}</div>
  </div>`;Sr!==d&&(Sr=d,i.innerHTML=d)}let nc=0;function Ey(i){const t=xt("fever-hud"),e=T.feverEffect;if(i<=0||!e){t.classList.contains("on")&&(t.className="fever-hud");return}const n=Fn[e],s=Math.ceil(i/1e3);s<=3&&s!==nc&&(nc=s,_t.tick()),t.className=`fever-hud on fx-${e} ${s<=3?"ending":""}`,t.innerHTML=`<span class="fh-icon">${n.icon}</span><div class="fh-text"><b>${n.name}</b><span>${n.desc}</span></div>
    <div class="fh-time"><b>${s}</b><small>초 남음</small></div><div class="fh-bar"><i style="width:${i/lc*100}%"></i></div>`}function mu(){const i=T.battle,t=i.units.filter(d=>d.side==="ally"),e=Math.max(0,ks-T.time),n=Math.min(100,T.time/ks*100),s=e<=10?"danger":e<=20?"warn":"",a=fn(T.day);let r,o,l;if(a&&i.boss){const d=Math.max(0,i.boss.hp);r=Math.min(100,(i.boss.maxHp-d)/i.boss.maxHp*100),l=d<=0,o=l?'<span class="g-done">👑 함락!</span>':`👑 ${i.boss.name} 남은 체력 <span class="g-num">${Math.ceil(d)}</span>`}else{const d=Math.floor(i.progress);r=Math.min(100,i.progress/T.target*100),l=i.progress>=T.target,T.goalReached&&Tf!==T.history.length&&(Tf=T.history.length,to||(fu=ai,to=!0,ai=4,En()),ae("🚩 목표 도착! 보너스 시간 ⏩ 4배속 · 🛡 본진 무적 · 잡으면 🎲 주사위나 🪙 골드 (출격은 끝)","ok"),_t.sparkle(),Gs(),ro());const h=T.overshootBonus,u=5-(d-T.target)%5;o=l?`<span class="g-done">🚩 도착! +${d-T.target}m</span> · 보너스 <span class="g-coin">🪙 +${h}</span> 적립 중 <span class="muted small">(${u}m 더 가면 +1)</span>`:`🚩 전선 ${d}m · 목표까지 <span class="g-num">${T.target-d}m</span>`}Ef!==T.history.length&&(Ef=T.history.length,br=0);const c=T.phase==="march"?T.overshootBonus:br,f=c-br;br=c,xt("battle-head").innerHTML=`

    <div class="race ${s} ${l?"reached":""}">
      <div class="race-labels">
        <div class="race-go">${o}</div>
        <div class="race-sun">⏱ 남은 시간 <span class="g-num">${Math.ceil(e)}초</span>${e<=10&&T.phase==="march"&&!l?' <b class="badc">서둘러요!</b>':""}</div>
      </div>
      <div class="race-track">
        <div class="race-half go"><i style="width:${r}%"></i>${i.loot.map(d=>`<span class="race-loot ${d.taken?"taken":""}" style="left:${Math.min(100,d.x/T.target*100)}%">${wa[d.kind].icon}</span>`).join("")}<span class="race-runner" style="left:${r}%">${a?"⚔️":"🚩"}</span></div>
        <div class="race-goal" id="race-goal">${a?"👑":"🏁"}<small>목표</small>${!a&&l?`<span class="goal-coins ${performance.now()-Sf<350?"bump":""}">🪙+${T.overshootBonus}</span>`:""}</div>
        <div class="race-half sun"><i style="width:${n}%"></i><span class="race-runner" style="right:${n}%">⏳</span></div>
      </div>
    </div>`,xt("wave-slot").innerHTML=`${Ty()}<span class="stage-stat">아군 ${t.length} · 처치 ${i.kills}${i.breaches?` · 돌파 ${i.breaches}`:""}</span>`,f>0&&(Sf=performance.now(),Ay(f))}function Ty(){if(T.phase!=="march")return"";const i=T.battle.wave();return i.on?`<span class="wave-chip on">⚔ ${i.n}번째 파도 · <b>${Math.ceil(i.left)}초</b></span>`:`<span class="wave-chip off">☕ 소강 · <b>${Math.ceil(i.left)}초</b> 뒤 다음 파도</span>`}let wy=0;function Ay(i){var n,s;const t=(n=document.getElementById("race-goal"))==null?void 0:n.getBoundingClientRect(),e=(s=document.querySelector("#topbar .coins"))==null?void 0:s.getBoundingClientRect();if(!(!t||!e)){for(let a=0;a<Math.min(i,5);a++){const r=document.createElement("div");r.className="coin-fly",r.textContent="🪙";const o=t.left+t.width/2,l=t.top+t.height/2;r.style.left=`${o}px`,r.style.top=`${l}px`,r.style.setProperty("--dx",`${e.left+e.width/2-o}px`),r.style.setProperty("--dy",`${e.top+e.height/2-l}px`),r.style.setProperty("--hop",`${-40-Math.random()*30}px`),r.style.animationDelay=`${a*.08}s`,document.body.appendChild(r),setTimeout(()=>r.remove(),1100+a*80)}_t.coin()}}function Ry(){var n;const i=xt("stage-overlay"),t=T.lastResult;if(Qi){i.className="stage-overlay",xt("fullscreen").className="fullscreen";return}T.phase==="dusk"&&t?(i.className="stage-overlay show",i.innerHTML=`
      ${MM(t)}`):(i.className="stage-overlay",i.innerHTML="");const e=xt("fullscreen");if(T.phase!=="deck"&&delete e.dataset.deckHtml,T.phase==="deck"){e.className="fullscreen show";const s=Yy();if(e.dataset.deckHtml!==s){const a=((n=e.querySelector(".dex-scroll"))==null?void 0:n.scrollTop)??0;e.innerHTML=s,e.dataset.deckHtml=s;const r=e.querySelector(".dex-scroll");if(r){r.scrollTop=a;const o=r.querySelector(".mc-card.sel");if(o){const l=o.offsetTop;l<r.scrollTop?r.scrollTop=l-4:l+o.offsetHeight>r.scrollTop+r.clientHeight&&(r.scrollTop=l+o.offsetHeight-r.clientHeight+4)}}}}else if(T.phase==="camp"&&Hi&&t&&!t.success){const s=T.upcomingDay,a=Vs[$n(s)],r=[...a.pool.map(([o])=>o),...fn(s)?[a.boss]:[]];e.className="fullscreen show",e.innerHTML=`
      <div class="card bad deck-prompt">
        <h2>💔 목숨을 하나 잃었어요</h2>
        <p>${t.boss?`거점 보스를 쓰러뜨리지 못했어요. 남은 체력 ${Math.ceil(T.bossHp??0)} 그대로 다시 도전해요.`:`전선 ${Math.floor(t.progress)}m / 목표 ${t.target}m · 돌파당함 ${t.breaches}번`}</p>
        <p class="small">덱을 바꿔서 다시 도전해볼까요? 지금 덱: <b>${T.deck.map(o=>pe.find(l=>l.id===o).name).join(", ")}</b></p>
        <div class="deck-enemies"><span class="small muted">스테이지 ${s}에 나오는 적</span><div>${r.map(o=>`<span class="enemy-chip ${Un[o].boss?"boss":""}"><b>${Un[o].name}</b> ${Un[o].note}</span>`).join("")}</div></div>
        <div class="btn-row center">
          <button data-act="open-deck" class="primary">덱 바꾸기 →</button>
          <button data-act="dismiss-prompt">이대로 갈게요</button>
        </div>
      </div>`}else if(T.phase==="over"||T.phase==="victory"){const s=T.phase==="victory";e.className="fullscreen show";const a=yM(s),r=`${Pu}:${T.history.length}`;(e.dataset.end!==r||!e.innerHTML)&&(e.dataset.end=r,e.innerHTML=a),s?`${Es}`:`${T.day}`,`${T.summoned}${q.stats.mergeSuccess}${q.stats.merges}${T.history.reduce((o,l)=>o+l.kills,0)}${T.coins}${Object.values(T.bought).reduce((o,l)=>o+l,0)}${T.cards.length}`}else e.className="fullscreen"}const Cy=[{title:"🔥 캠프에 온 걸 환영해요",body:"여기는 원정 사이사이 쉬어 가는 <b>캠프</b>예요.<br>스테이지에서 번 <b>🪙 코인</b>으로 시설에서 능력치를 올리고, 준비가 되면 원정을 떠나요."},{target:"#camp-top .coins",title:"🪙 코인",body:"스테이지를 깨거나 보너스 시간에 적을 잡으면 모여요. 캠프 시설에서 쓰는 돈이에요."},{target:'.camp-spot[data-spot="training"]',title:"🎯 훈련장",body:"지금 <b>덱에 있는 용병들의 능력치</b>를 보고, <b>용병 편성</b>을 바꿔요.<br>훈련을 올리면 모든 용병이 강해지고, 시작 목숨도 늘릴 수 있어요."},{target:'.camp-spot[data-spot="tent"]',title:"⛺ 막사 · 본진 망루",body:"맨 뒤 <b>본진</b>이 쏘는 화살의 위력·사거리·연사, 본진이 걷는 속도를 올려요.<br>본진은 멈춰 있을 때만 쏴요."},{target:'.camp-spot[data-spot="forge"]',title:"⚒ 대장간",body:"<b>강화 성공 확률</b>, 주사위 <b>최저 눈금</b>, 큰 주사위(고면체)가 나올 확률을 올려요."},{target:'.camp-spot[data-spot="wagon"]',title:"🧳 짐수레",body:"<b>준비 시간 주사위 개수</b>, 작은 칸 블럭 확률, 보너스 시간에 주사위가 떨어질 확률을 올려요."},{target:['.camp-spot[data-spot="relic"]','.camp-spot[data-spot="oracle"]'],title:"🔒 준비 중인 시설",body:"유물 상인과 점술사는 곧 열려요."},{target:"#camp-stats",title:"📋 내 능력치",body:"시설에서 올린 <b>영구 능력치</b>가 여기 한눈에 보여요. 원정에 실패해도 남아요.<br><small>(지금은 개발 모드라 새 원정마다 처음으로 돌아가요)</small>"},{target:".camp-bottom .depart",title:"⚔ 원정 출발",body:"준비가 되면 눌러요. <b>용병 3종</b>을 골라 덱을 짜고 스테이지 1로 떠나요."}],Py=[{target:"#prep-banner .pp-box",title:"⏸ 전투 준비 시간",body:"적이 오기 전, 시간이 <b>멈춰 있어요</b>.<br>주사위를 굴려 격자에 놓고, 그 눈금으로 용병을 뽑아 <b>본진 앞에 대기</b>시킨 뒤 출격해요."},{target:"#dice-panel",title:"🎲 주사위 굴리기",body:"<b>마우스 오른쪽 클릭</b>(또는 ? 버튼)으로 굴려요. 나온 블럭은 끌어서 격자에 놓고, 오른쪽 클릭으로 돌려요."},{target:"#grid-panel .grid-wrap",title:"🧩 격자",body:"블럭을 놓으면 <b>눈금</b>이 쌓여요. 같은 칸 수(같은 색) 블럭끼리 <b>강화</b>하면 눈금이 합쳐져요.<br>자리가 없거나 눈금이 낮으면 옆의 ♻ 버리기로 경험치를 받아요."},{target:"#merc-panel",title:"🛡 용병 뽑기",body:"격자에 쌓인 눈금으로 용병을 뽑아요. 카드의 숫자가 필요한 눈금이에요.<br>준비 시간에 뽑은 용병은 출격할 때까지 대기해요."},{target:"#prep-banner .pp-go",title:"💡 주사위는 아껴요",body:"<b>남은 주사위는 다음 스테이지로 이어져요.</b> 준비 때는 버틸 만큼만 쓰고 아껴 두세요.<br>(파트가 바뀌거나 파트를 다시 하면 비워져요)<br>준비가 되면 <b>⚔ 출격!</b>"}],Ly=[{target:"#battle-head",title:"⚔ 전투 시작!",body:"용병들이 앞으로 밀고 나가요. 시간 안에 <b>전선이 🚩 목표 거리</b>에 닿으면 클리어예요.<br>못 닿으면 목숨이 하나 줄고 파트 처음으로 돌아가요."},{target:["#merc-panel"],title:"🆘 위기일 때",body:"전선이 밀리면 <b>남은 주사위를 굴려</b> 눈금을 모으고 <b>용병을 바로 투입</b>해요.<br>여유가 있으면 아껴 두세요. 다음 스테이지 준비에 쓸 수 있어요."},{target:"#grid-panel .grid-wrap",title:"⚒ 전투 중 강화",body:"싸우는 동안에도 격자 블럭을 강화해 눈금을 키울 수 있어요. 연속 5번 성공하면 주사위가 모두 압축돼요."},{target:".battle-ctrl",title:"⏸ 속도 조절",body:"<b>Space</b>로 일시정지, ⏩ 버튼으로 1·2·4배속을 바꿔요."}],Dy=[{target:"#battle-head",title:"🚩 목표 도착 · 보너스 시간!",body:"이번 스테이지는 이미 <b>성공</b>이에요. 남은 시간 동안 보너스 시간이 이어지고, 자동으로 <b>4배속</b>이 돼요.<br>🛡 <b>본진은 무적</b>이라 적이 닿아도 뒤로 밀리지 않아요."},{target:".stage",title:"🎁 여기서 얻는 것",body:"적을 잡을 때마다 <b>🎲 주사위</b>나 <b>🪙 골드</b>가 떨어져요.<br>주사위는 <b>다음 스테이지 준비 시간</b>에 더해지고, 전선을 더 밀면 보너스 코인도 쌓여요."},{target:"#merc-panel",title:"🚫 여기서 못 하는 것",body:"보너스 시간엔 <b>용병을 새로 뽑을 수 없어요</b>.<br>격자 정리·강화는 할 수 있으니 다음 스테이지를 준비해요."}],Iy=[{target:"#prep-banner .pp-box",title:"👑 보스전!",body:"파트의 마지막 스테이지예요. 보스를 쓰러뜨리면 파트 클리어!<br>보스는 시간 안에 <b>체력을 0으로</b> 만들어야 해요."},{target:["#prep-banner .pp-boss-tip","#dice-panel"],title:"🎲 주사위를 아끼지 마세요",body:"보스전이 끝나면 <b>남은 주사위와 격자는 비워져요</b> (이기면 새 파트, 지면 파트 처음부터).<br>그러니 <b>모든 힘을 모아서</b> — 준비 때도 전투 중에도 주사위를 전부 굴려 용병을 쏟아부어요!"}];function ky(){if(ru()||Qi||Me||Te||document.querySelector(".modal.show, #unlock-pop.show, .at-root"))return;const i=document.getElementById("fullscreen");if(T.phase==="camp"){T.opening&&!tn&&!(i!=null&&i.classList.contains("show"))&&!ca("camp")&&da("camp",Cy);return}if(!(T.phase!=="march"||i!=null&&i.classList.contains("show")))if(T.prep){if(!document.querySelector("#prep-banner .pp-go"))return;ca("prep")?fn(T.day)&&!ca("boss")&&da("boss",Iy):da("prep",Py)}else T.goalReached?ca("bonus")||da("bonus",Dy):T.time>1&&!ca("battle")&&da("battle",Ly)}const ao={tent:{name:"막사",icon:"⛺",desc:"본진 망루",items:["bpower","brange","bspeed","bmove"]},forge:{name:"대장간",icon:"⚒",desc:"주사위와 강화를 손질해요",items:["forge","floor","face"]},wagon:{name:"짐수레",icon:"🧳",desc:"주사위 보급 (격자 줄 수는 가호로)",items:["prepdice","compress","bounty"]},training:{name:"훈련장",icon:"🎯",desc:"용병 능력치 · 편성 · 단련",items:["train","lives"]},relic:{name:"유물 상인",icon:"🔮",desc:"원정을 바꾸는 유물",items:[],soon:"원정 동안 효과가 이어지는 유물을 사고팔 수 있는 노점이에요. 준비 중이에요."},oracle:{name:"점술사",icon:"🌙",desc:"다음 장소 엿보기",items:[],soon:"다음 스테이지에 나올 적이나 날씨를 미리 보고 대비할 수 있는 천막이에요. 준비 중이에요."}},Uy=new Vp(document.getElementById("camp-canvas"));let tn=null,Mi=null;function Ny(i){return i.items.filter(t=>T.canBuy(Dn.find(e=>e.id===t))).length}function Fy(){var r;const i=xt("camp"),t=T.phase==="camp"||T.deckOverCamp;if(i.classList.toggle("show",t),T.phase==="deck"&&(tn=null),!t){tn=null,xt("camp-sheet").classList.remove("show");return}const e=T.lastResult,n=T.upcomingDay,s=Array.from({length:lo},(o,l)=>`<span class="flag ${l<T.flags?"on":""}">${l<T.flags?"❤":"♡"}</span>`).join("");xt("camp-top").innerHTML=`
    <div class="ct-title">🔥 캠프 <span class="muted">· ${T.opening?"원정 준비":`스테이지 ${T.day}${(r=T.lastResult)!=null&&r.success?" ✓":""}`}</span></div>
    <div class="flags">${s}</div>
    ${Oy()}
    <div class="coins">🪙 <b>${T.coins}</b></div>`,xt("camp-spots").innerHTML=Object.keys(ao).map(o=>{const l=ao[o],c=Le[o],f=l.soon?0:Ny(l),d=o==="training"&&T.canEditDeck&&!T.opening;return`<button class="camp-spot ${l.soon?"soon":""}" data-act="camp-spot" data-spot="${o}" style="left:${c.x*100}%;top:${c.y*100}%">
        <span class="cs-icon">${l.soon?"🔒":l.icon}</span><span class="cs-name">${l.name}</span>${f||d?`<i class="cs-badge">${d?"!":f}</i>`:""}</button>`}).join("");const a=T.opening?"시설을 눌러 영구 능력치를 올려요. 준비가 되면 출발해서 용병 3종을 골라요.":T.deckEditReason==="chapter"?"보스를 넘어 새 파트로 가요. 훈련장에서 편성을 바꿀 수 있어요.":T.deckEditReason==="fail"?"목표를 못 채운 날이라 훈련장에서 편성을 바꿀 수 있어요.":"장소를 눌러 업그레이드를 살펴봐요. 격자와 주사위는 다음 스테이지로 이어져요.";xt("camp-bottom").innerHTML=`
    <p class="small">${a}</p>
    ${T.opening?'<button data-act="next-day" class="primary depart">⚔ 원정 출발 · 용병 편성 →</button>':`<button data-act="next-day" class="primary depart">스테이지 ${n} · ${We[ts(n)].icon} ${go(Pa(n),"으로","로")} ${e!=null&&e.retry?"파트 다시 도전":"이동"}${fn(n)?" · 보스":""} →</button>`}`,Hy(),gu()}function Oy(){const i=Array.from({length:qi},(t,e)=>{const n=T.cards[e];if(!n)return'<span class="cb-item empty" data-tip="빈 가호 칸 · 스테이지를 마치면 하나 골라 채워요"></span>';const s=ni.get(n),a=T.cardLevelOf(s.id);return`<span class="cb-item r-${s.rarity}" data-tip-html="${Lu(s.id,"")}"><span class="cb-ico">${s.icon}</span><span class="cb-name">${s.name}</span>${a>1?`<i class="bs-lv">${a}</i>`:""}</span>`}).join("");return`<div class="camp-bless"><span class="cb-label" data-tip="가호: 이번 원정에만 효과 · 파트를 다시 해도 유지 · ${qi}칸">✨ 가호 <b>${T.cards.length}/${qi}</b></span>${i}</div>`}function gu(){const i=xt("camp-sheet-box"),t=xt("camp-sheet");if(!tn){t.classList.remove("show");return}const e=ao[tn];let n="";if(e.soon)n=`<div class="soon-note">🔒 <b>곧 열려요</b><p class="small">${e.soon}</p></div>`;else if(tn==="tent"){const s=xs(T.baseLevels);n=`<h4 class="tent-sub">🏹 본진 망루 <span class="muted small">원정대장이 본진에서 쏘는 화살</span></h4>
      <div class="base-now small">위력 <b>${s.atk.toFixed(1)}</b> · 사거리 <b>${s.range.toFixed(1)}m</b> · 초당 <b>${(1/s.cd).toFixed(2)}발</b> <span class="muted">(스테이지 1 기준)</span></div>
      ${nl(e.items)}`}else if(tn==="training"){const s=T.deck.map(o=>Ci(o)),a=Dn.find(o=>o.id==="train"),r=T.permLevel("train")<a.max;n=`<h4 class="tent-sub">🎯 단련 <span class="muted small">올리면 아래 용병 능력치가 바로 바뀌어요</span></h4>
      ${nl(e.items)}
      <h4 class="tent-sub">⚔ 내 용병 <span class="muted small">훈련 Lv${T.trainLv} 반영${r?' · <em class="td-next-legend">→ 다음 훈련 시</em>':" · 훈련 최대"}</span></h4>
      <div class="train-deck">${s.map(o=>`<div class="td-card">
            <div class="td-top"><span class="mc-art">${ri(o.id,o.kind)}${Ba(o.cost)}</span>
              <div class="td-head"><b>${o.name}</b><span class="mc-tags">${vo(o)}</span><span class="mc-role">${o.role}</span></div></div>
            <p class="mc-skill">${o.skill?`✦ ${o.skill}`:"✦ 기본 공격만"}</p>
            <div class="mc-stats">${By(o)}</div>
          </div>`).join("")}</div>
      ${T.canEditDeck?'<button data-act="open-deck" class="primary train-edit">⚔ 용병 편성 바꾸기 →</button>':'<p class="small muted">편성은 원정을 시작할 때, 보스를 잡고 새 파트에 들어갈 때, 목표를 못 채운 스테이지 뒤에 바꿀 수 있어요.</p>'}`}else n=nl(e.items);i.innerHTML=`<h3>${e.soon?"🔒":e.icon} ${e.name} <span class="muted small">${e.desc}</span><span class="coins small">🪙 ${T.coins}</span><button class="icon-btn close" data-act="close-modal">✕</button></h3>${e.soon?"":Hs()?'<p class="perm-note">🏕 <b>영구 업그레이드</b> · 원정에 실패해도 다음 원정까지 남아요</p>':'<p class="perm-note dev">🧪 <b>개발 모드</b> · 지금은 새 원정마다 처음 상태로 돌아가요 (🛠 디버그에서 영구 기록 유지를 켜면 남아요)</p>'}${n}`,t.classList.add("show")}function By(i){const t=T.trainLv,e=Dn.find(d=>d.id==="train"),n=T.permLevel("train")<e.max,s=ys(i,!1,t),a=ys(i,!1,t+1),r=t>0?ys(i,!1,t-1):s,o=(Mi==null?void 0:Mi.id)==="train"&&performance.now()-Mi.at<2500,l=!!s.traits.heal,c=d=>l?d.atk*1.5:d.atk;return ic(i).map(d=>{let h="",u=d.text;if(d.key==="hp"||d.key==="atk"){const g=d.key==="hp"?a.hp:c(a),_=d.key==="hp"?r.hp:c(r),m=d.key==="hp"?s.hp:c(s),p=M=>m<30?M.toFixed(1):`${Math.round(M)}`;u=p(m),o&&m>_&&(h+=`<em class="td-up">+${p(m-_)}</em>`),n&&(h+=`<em class="td-next">→ ${p(g)}</em>`)}return`<div class="mc-stat ${o&&h.includes("td-up")?"td-fresh":""}"><span class="st-ico" data-tip="${d.tip}" tabindex="0" aria-label="${d.tip}">${d.icon}</span><span class="st-bar"><i style="width:${Math.round(Math.max(.04,Math.min(1,d.bar))*100)}%"></i></span><b class="st-val">${u}${h}</b></div>`}).join("")}function Ti(i,t){var n;const e=q.grid;switch(i){case"grid":{let s=e.w,a=e.h;const r=t-T.itemLevel("grid");for(let o=0;o<r;o++)s<=a&&s<_i?s++:a<_i&&a++;return`${s}×${a}칸`}case"train":return`+${t*10}%`;case"floor":return`최저 ${1+t}`;case"face":{const s=hc(t),a=s[s.length-1][0];if(t<=3)return`d${a}까지`;const r=s.reduce((o,[,l])=>o+l,0);return`d12·20 ${Math.round(s.filter(([o])=>o>=12).reduce((o,[,l])=>o+l,0)/r*100)}%`}case"compress":{const s=uc(t),a=s.reduce((r,[,o])=>r+o,0);return`${Math.round((((n=s.find(([r])=>r===1))==null?void 0:n[1])??0)/a*100)}%`}case"forge":return`+${t*5}%p`;case"quick":return`${(1*Math.pow(.85,t)).toFixed(2)}초`;case"hold":return`${1+t}칸`;case"bpower":return`${xs({...T.baseLevels,power:t}).atk.toFixed(1)}`;case"brange":return`${xs({...T.baseLevels,range:t}).range.toFixed(1)}m`;case"bspeed":return`${(1/xs({...T.baseLevels,speed:t}).cd).toFixed(1)}발/초`;case"prepdice":return`+${t}개`;case"lives":return`❤ ${lo+t}`;case"bounty":return`${Math.round((fh+.1*t)*100)}%`;case"bmove":return`${xs({...T.baseLevels,move:t}).creep.toFixed(2)}m/초`}return`Lv${t}`}const $y={grid:"격자",hold:"보관함",floor:"최저 눈금",face:"고면체",compress:"작은 칸",quick:"굴림 시간",forge:"강화 성공",train:"용병 훈련",bpower:"위력",brange:"사거리",bspeed:"연사",bmove:"걸음",prepdice:"준비 주사위",lives:"시작 목숨",bounty:"보너스 주사위"},zy=[["forge","wagon"],["tent","training"]];function Hy(){const i=document.getElementById("camp-stats");if(!i)return;const t=Mi&&performance.now()-Mi.at<1500?Mi.id:null,e=s=>{const a=Dn.find(f=>f.id===s),r=T.itemLevel(s),o=T.permLevel(s),l=T.cardLevel(s),c=o>=a.max;return`<div class="cs-row ${t===s?"just":""} ${o>0?"has":""} ${c?"maxed":""}" data-stat="${s}" title="${a.name} · ${a.desc} · 영구 Lv${o}${l?` + 이번 원정 가호 +${l}`:""}">
      <span class="cs-nm">${$y[s]}${l?`<i class="cs-card">+${l}✨</i>`:""}</span>
      <span class="cs-lv">${c?"MAX":`Lv${o}`}</span>
      <span class="cs-now">${Ti(s,r)}</span>
      <span class="cs-arr">${c?"":"›"}</span>
      <span class="cs-next">${c?"":Ti(s,r+1)}</span>
    </div>`},n=s=>{const a=ao[s],r=s==="tent"?"막사 · 본진":a.name;return`<div class="cs-group"><div class="cs-gh"><span>${a.icon}</span>${r}</div>${a.items.map(e).join("")}</div>`};i.innerHTML=`<div class="cs-head"><span>📊 내 능력치</span><span class="cs-legend">지금 <i>›</i> <b>다음 레벨</b></span></div>
    <div class="cs-cols">${[0,1].flatMap(s=>zy.map(a=>n(a[s]))).join("")}</div>`}function Gy(i,t){const e=Dn.find(l=>l.id===i),n=T.itemLevel(i),s=t.left+t.width/2,a=t.top+t.height/2;kn("roll-rays",s,a,"",900,{"--rc":"#ffd34d"}),fc("fx:upgrade",s,a,140);for(let l=0;l<12;l++){const c=l/12*Math.PI*2+Math.random()*.3,f=46+Math.random()*26;kn("roll-spark",s,a,l%3===0?"★":"",800,{"--dx":`${Math.cos(c)*f}px`,"--dy":`${Math.sin(c)*f}px`,"--sc":l%2?"#ffd34d":"#9ff0c0"})}kn("up-pop",s,a-6,`<b>▲ Lv${n}</b><small>${e.name} · ${Ti(i,n)}</small>`,1300);const r=document.querySelector("#camp-sheet .coins")??document.querySelector("#camp-top .coins"),o=r==null?void 0:r.getBoundingClientRect();o&&kn("up-cost",o.left+o.width/2,o.top+o.height/2,`-🪙${T.itemCost(e)-e.step}`,900),_t.coin(),setTimeout(()=>_t.sparkle(),120),setTimeout(()=>{var l,c;(l=document.querySelector(`[data-buy="${i}"]`))==null||l.classList.add("just-up"),(c=document.querySelector(`[data-stat="${i}"]`))==null||c.classList.add("just")},0)}function nl(i){return`<div class="shop">${i.map(t=>{const e=Dn.find(r=>r.id===t),n=T.itemLevel(e.id),s=T.canBuy(e),a=T.permLevel(e.id)>=e.max;return`<button class="shop-item ${s?"on":""}" data-buy="${e.id}" ${s?"":"disabled"}>
          <span class="s-name">${e.name} <span class="muted">Lv${T.permLevel(e.id)}/${e.max}</span>${T.cardLevel(e.id)?` <span class="s-card" title="가호로 이번 원정에만 +${T.cardLevel(e.id)}">+${T.cardLevel(e.id)}✨</span>`:""}</span>
          <span class="s-cost">${a?"MAX":`🪙${T.itemCost(e)}`}</span>
          <span class="s-desc">${e.desc}</span>
          <span class="s-now">${a?`현재 <b>${Ti(e.id,n)}</b> · 최대`:`<b>${Ti(e.id,n)}</b> → <b class="s-next">${Ti(e.id,n+1)}</b>`}</span>
        </button>`}).join("")}</div>`}let Oe=null,Be=null;function Vy(i){const t=[];for(let e=i;e<i+5&&e<=Es;e++){const n=`${We[ts(e)].icon} ${Pa(e)}`;t[t.length-1]!==n&&t.push(n)}return t.join(" → ")}function go(i,t,e){const n=i.charCodeAt(i.length-1),s=n>=44032&&n<=55203&&(n-44032)%28!==0;return i+(s?t:e)}function Ci(i){return pe.find(t=>t.id===i)}function vo(i){const t=ys(i,!1,T.trainLv);return[`<span class="kind k-${i.kind}">${Yf[i.kind]}</span>`,t.traits.air?'<span class="kind k-air">대공</span>':"",t.traits.dmg==="magic"?'<span class="kind k-magic">갑옷 무시</span>':""].join("")}function Wy(i,t){return`<button class="mc-mini ${Oe===i.id?"sel":""}" data-deck-sel="${i.id}">
    <span class="slot-no">${t+1}</span>
    <span class="mc-art">${ri(i.id,i.kind)}${Ba(i.cost)}</span>
    <span class="mc-name">${i.name}</span>
  </button>`}function Xy(i){return T.isUnlocked(i.id)?`<button class="mc-card ${Be===i.id?"sel":""}" data-dex-sel="${i.id}">
    <span class="mc-art">${ri(i.id,i.kind)}${Ba(i.cost)}</span>
    <span class="mc-name">${i.name}</span>
    <span class="mc-tags">${vo(i)}</span>
    <span class="mc-role">${i.role}</span>
  </button>`:`<div class="mc-card locked" title="스테이지 ${Ls[i.id]}부터 쓸 수 있어요">
    <span class="mc-art">${ri(i.id,i.kind)}<span class="mc-lock">🔒</span></span>
    <span class="mc-name">${i.name}</span>
    <span class="mc-unlock">스테이지 ${Ls[i.id]} 해금</span>
  </div>`}function Ba(i){return`<span class="mc-cost" title="출격 비용: 눈금 ${i}"><svg class="die-ico" viewBox="0 0 12 12" aria-hidden="true"><rect x="0.6" y="0.6" width="10.8" height="10.8" rx="2.6" fill="#fff"/><circle cx="3.4" cy="3.4" r="1.1" fill="#2a2433"/><circle cx="6" cy="6" r="1.1" fill="#e05a3a"/><circle cx="8.6" cy="8.6" r="1.1" fill="#2a2433"/></svg>×${i}</span>`}function Rf(i){const t=ys(i,!1,T.trainLv),e=!!t.traits.heal;return{s:t,heal:e,power:e?t.atk*1.5:t.atk}}function ic(i){const{s:t,heal:e,power:n}=Rf(i),s=pe.map(Rf),a=o=>Math.max(...s.map(o)),r=Math.min(...s.map(o=>o.s.cd));return[{key:"hp",icon:"❤️",tip:"체력 · 버틸 수 있는 피해",val:t.hp,text:`${Math.round(t.hp)}`,up:!0,bar:t.hp/a(o=>o.s.hp)},{key:"atk",icon:e?"💚":"⚔️",tip:e?"회복량 · 한 번에 회복하는 체력":"공격력 · 한 번 때릴 때 피해",val:n,text:`${Math.round(n)}`,up:!0,bar:n/a(o=>o.power)},{key:"cd",icon:"⏱️",tip:"공격 간격 · 짧을수록 자주 때려요",val:t.cd,text:`${t.cd}초`,up:!1,bar:r/t.cd},{key:"speed",icon:"👟",tip:"이동 속도 · 초당 몇 m 걷나",val:t.speed,text:`${t.speed}m/초`,up:!0,bar:t.speed/a(o=>o.s.speed)}]}function Cf(i,t,e){const n=ic(i),s=e?ic(e):null,a=T.deck.length>=xi;let r="";return t==="deck"?r='<button class="mc-act out" data-act="deck-remove">덱에서 빼기</button>':a?e?r=`<button class="mc-act primary" data-act="dex-swap">⇄ ${go(e.name,"과","와")} 바꾸기</button>`:r='<button class="mc-act" disabled>덱이 가득 찼어요 · 위에서 바꿀 카드를 골라요</button>':r='<button class="mc-act primary" data-act="dex-add">＋ 덱에 넣기</button>',`<div class="mc-detail ${t}">
    <button class="icon-btn mc-close" data-act="${t}-close" aria-label="닫기">✕</button>
    <div class="mc-d-top">
      <span class="mc-art big">${ri(i.id,i.kind)}${Ba(i.cost)}</span>
      <div class="mc-d-head">
        <span class="mc-d-from">${t==="deck"?"내 덱":"용병 도감"}</span>
        <b class="mc-d-name">${i.name}</b>
        <span class="mc-tags">${vo(i)}</span>
        <span class="mc-role">${i.role}</span>
      </div>
    </div>
    <p class="mc-skill">${i.skill?`✦ ${i.skill}`:"✦ 특수 능력 없음 · 기본 공격만"}</p>
    <div class="mc-stats">${n.map((o,l)=>{const c=s==null?void 0:s[l],f=c&&o.val!==c.val?o.up?o.val>c.val:o.val<c.val:null;return`<div class="mc-stat ${f===!0?"better":f===!1?"worse":""}">
          <span class="st-ico" data-tip="${o.tip}" tabindex="0" aria-label="${o.tip}">${o.icon}</span>
          <span class="st-bar"><i style="width:${Math.round(Math.max(.04,Math.min(1,o.bar))*100)}%"></i></span>
          <b class="st-val">${o.text}${f===!0?"<em>▲</em>":""}</b>
        </div>`}).join("")}</div>
    ${r}
  </div>`}function qy(i){const t=Oe&&T.deck.includes(Oe)?Ci(Oe):null,e=Be&&!T.deck.includes(Be)?Ci(Be):null;if(!t&&!e)return`<div class="mc-row">${i.map((a,r)=>Wy(a,r)).join("")}${Array.from({length:xi-i.length},()=>'<div class="mc-empty">빈 칸<small>도감에서 골라요</small></div>').join("")}</div>`;const n=t?Cf(t,"deck",e):`<div class="mc-detail pick"><span class="mc-d-from">내 덱에서 비교할 카드</span><div class="mc-pick">${i.map(a=>`<button class="mc-pick-btn" data-deck-sel="${a.id}">${ri(a.id,a.kind)}<span>${a.name}</span></button>`).join("")}</div></div>`,s=e?Cf(e,"dex",t):'<div class="mc-detail hint"><span class="mc-d-from">용병 도감</span><p>아래 도감에서 카드를 고르면<br/>나란히 비교할 수 있어요</p></div>';return`<div class="mc-compare">${n}${s}</div>`}function Yy(){const i=T.upcomingDay,t=Vs[$n(i)],e=[...t.pool.map(([a])=>a),t.boss],n=T.deck.map(a=>Ci(a));return`
    <div class="card deck-screen">
      <h1>${T.day===1&&!T.lastResult?"⚔ 용병 편성":"새 파트 준비"} <span class="muted small">스테이지 ${i}~${i+Ds-1} · ${Vy(i)}</span>${T.deckOverCamp?'<button class="icon-btn close deck-x" data-act="deck-cancel" title="캠프로 돌아가기 (ESC)">✕</button>':""}</h1>
      <div class="deck-enemies">
        <b>이번 파트에 나오는 적</b>
        <div class="enemy-strip">${e.map(a=>{var o,l;const r=Un[a];return`<span class="enemy-chip ${r.boss?"boss":""} ${(o=r.traits)!=null&&o.flying||(l=r.traits)!=null&&l.armor||r.range>2?"warn":""}"><span class="ec-art">${Gr(a)}</span><b>${r.name}</b> ${r.note}</span>`}).join("")}</div>
      </div>
      <div class="deck-slots">
        <div class="deck-sec-head"><b>내 덱 (${T.deck.length}/${xi})</b> <span class="muted small">카드를 누르면 자세히 · 도감 카드와 비교</span></div>
        ${qy(n)}
      </div>
      <div class="deck-roster">
        <div class="deck-sec-head"><b>용병 도감</b> <span class="muted small">${pe.filter(a=>T.isUnlocked(a.id)).length}/${pe.length}종 해금</span></div>
        <div class="dex-scroll"><div class="dex-grid">${pe.filter(a=>!T.deck.includes(a.id)).sort((a,r)=>+!T.isUnlocked(a.id)-+!T.isUnlocked(r.id)||(Ls[a.id]??1)-(Ls[r.id]??1)).map(a=>Xy(a)).join("")}</div></div>
      </div>
      <button data-act="confirm-deck" class="primary deck-go" ${T.deck.length===xi?"":"disabled"}>${T.deck.length===xi?"이 덱으로 출발 →":`${xi-T.deck.length}종 더 골라요`}</button>
    </div>`}function jy(i,t=22){const e=Math.max(...i.cells.map(a=>a[0]))+1,n=Math.max(...i.cells.map(a=>a[1]))+1,s=i.cells.map(([a,r])=>`<div class="mini-cell" style="left:${a*t}px;top:${r*t}px;width:${t}px;height:${t}px;background:${un(i.cells.length)}"></div>`).join("");return`<div class="mini" style="width:${e*t}px;height:${n*t}px">${s}</div>`}function Ky(i,t=18){const e=Math.max(...i.cells.map(o=>o[0]))+1,n=Math.max(...i.cells.map(o=>o[1]))+1,[s,a]=Oa(i.cells),r=i.cells.map(([o,l])=>`<i style="left:${o*t}px;top:${l*t}px;width:${t}px;height:${t}px"></i>`).join("");return`<div class="hs" style="width:${e*t}px;height:${n*t}px;--c:${un(i.cells.length)}">${r}<b style="left:${s*t}px;top:${a*t}px;width:${t}px;height:${t}px">${i.pips}</b></div>`}function vu(i){return`<div class="die-shape" style="position:relative;--c:${un(i.cells.length)}">${xu(i.cells)}</div>`}function _o(i){return qp(i,q.minPips)}function Zy(i){return _o(i)==="low"||!mc(T)}function Jy(i){const t=_o(i),e=mc(T);return t==="max"?'<div class="grade-badge g-max">🌟 최대 눈금!</div>':t==="great"?'<div class="grade-badge g-great">✨ 높은 눈금!</div>':e?t==="low"?'<div class="grade-badge g-low">💤 낮은 눈금 · 버려도 괜찮아요</div>':"":'<div class="grade-badge g-nofit">자리 없음 · 합치거나 버려요</div>'}function kn(i,t,e,n="",s=900,a={}){const r=document.createElement("div");r.className=`sfx-layer ${i}`,r.style.left=`${t}px`,r.style.top=`${e}px`;for(const[o,l]of Object.entries(a))r.style.setProperty(o,l);return r.innerHTML=n,document.body.appendChild(r),setTimeout(()=>r.remove(),s),r}function Pf(i){var r;const t=_o(i),e=document.querySelector(".hand-die");if(!e)return;const n=e.getBoundingClientRect(),s=n.left+Math.min(n.width,120)/2,a=n.top+n.height/2;if(t==="max"||t==="great"){const o=t==="max";kn("roll-rays",s,a,"",o?1100:800,{"--rc":o?"#ffd34d":"#7ee8a8"}),fc("fx:roll-great",s,a,o?150:110);const l=o?16:9;for(let c=0;c<l;c++){const f=c/l*Math.PI*2+Math.random()*.3,d=(o?70:48)+Math.random()*24;kn("roll-spark",s,a,o&&c%3===0?"★":"",800,{"--dx":`${Math.cos(f)*d}px`,"--dy":`${Math.sin(f)*d}px`,"--sc":o?"#ffd34d":"#9ff0c0"})}kn(`roll-pop ${o?"max":"great"}`,s,n.top-6,o?`MAX ${i.pips}!`:`${i.pips}! 좋아요`,1200),(r=document.getElementById("dice-panel"))==null||r.classList.add(o?"flash-max":"flash-great"),setTimeout(()=>{var c;return(c=document.getElementById("dice-panel"))==null?void 0:c.classList.remove("flash-max","flash-great")},700),_t.sparkle(),o&&setTimeout(()=>_t.coin(),160)}else t==="low"&&_t.low()}function _u(i){const t=document.querySelector(".hand-die");if(_t.toss(),!t)return;const e=t.getBoundingClientRect();kn("toss-die",e.left+30,e.top+e.height/2,`<b>${i.pips}</b>`,600,{"--c":un(i.cells.length)});const n=document.querySelector(".exp-mini"),s=n==null?void 0:n.getBoundingClientRect();kn("toss-exp",e.left+40,e.top,`♻ +${Ma}`,900,{"--tx":s?`${s.left+s.width/2-(e.left+40)}px`:"0px","--ty":s?`${s.top-e.top}px`:"-30px"})}let sc=null,il=!1;function _a(){const i=q.pending;return!!i&&i.id===sc&&Ht!=null}function sn(){return _a()?null:q.pending}function xa(){const i=sn(),t=_a();Array.from({length:ju},(s,a)=>{if(a>=q.holdSlots)return'<span class="hold-slot locked" title="캠프에서 보관함 확장으로 열 수 있어요">🔒</span>';const r=q.held[a];if(!r)return'<span class="hold-slot empty" title="보관함: 손의 주사위를 넣어 둘 수 있어요"></span>';const o=!q.pending&&!q.rolling&&!T.gridLocked;return`<button class="hold-slot" data-act="take-held" data-i="${a}" ${o?"":"disabled"} title="${o?"꺼내서 손에 들기":"손이 비어야 꺼낼 수 있어요"}">${jy(r,6)}<b>${r.pips}</b></button>`}).join("");const e=T.gridLocked;xt("dice-panel").innerHTML=`
    <h3>주사위 </h3>
    <div class="stack-row">
      <div class="roll-col">
        <button id="roll-btn" class="stack-btn ${q.rolling?"busy":""}" ${q.pending||q.rolling||q.unconfirmed===0||e?"disabled":""} title="눌러서 굴리기">
          <span class="q">?</span><span class="count">x${q.unconfirmed}</span>
        </button>
        <div class="exp-mini ${performance.now()-wy<350?"gain":""}" title="경험치 ${q.exp}/${zr} · 다 차면 주사위 +1"><i style="width:${q.exp/zr*100}%"></i></div>
      </div>
      <div class="hand">
        ${q.rolling?`<div class="rolling">
                 ${gi.ok?'<div class="die3d-slot" id="die3d-slot"></div>':'<div class="rolling-die" id="rolling-die">?</div>'}
                 <div class="rolling-info"><b>데굴데굴…</b>
                   <div class="roll-track"><i id="roll-bar" style="width:${q.rollProgress()*100}%"></i></div>
                   ${q.hasBoost("maxroll")?'<div class="muted small">🎯 최대 눈금!</div>':""}</div>
               </div>`:i?`<div class="hand-die grade-${_o(i)} ${performance.now()<no?"landed":""}">${gi.ok?'<div class="die3d-slot" id="die3d-slot"></div>':""}
                 <div class="hand-shape" id="hand-shape" title="끌어서 격자에 놓기 · 누르면 회전">${Ky(i)}</div>
                 <div class="hand-info"><div><b class="big">${i.pips}</b> <span class="tag">d${i.faces}</span> ${i.cells.length}칸</div>
                   ${Jy(i)}
                   ${e?'<div class="lock-note small">🔒 행군이 시작되면 놓을 수 있어요</div>':'<div class="hand-btns"><button data-act="rotate" title="회전 (R) · 도형을 눌러도 돌아가요">↻</button></div>'}</div>
                 ${e?"":'<p class="roll-hint rot"><span class="rh-mouse" aria-hidden="true"><i></i></span><span><b>마우스 오른쪽 클릭</b>으로 돌려요<small>또는 R · 도형 클릭 · 끌어서 격자에 놓기</small></span></p>'}
               </div>`:t?'<div class="hand-hidden"><span class="hh-die">?</span><div><b>🔨 강화 중</b><div class="muted small">굴린 주사위는 강화를 마치거나 대상 선택을 풀면 나와요</div></div></div>':e?'<p class="muted small">🔒 행군 중에만 굴릴 수 있어요</p>':q.unconfirmed>0?'<p class="roll-hint"><span class="rh-mouse" aria-hidden="true"><i></i></span><span><b>마우스 오른쪽 클릭</b>으로 굴려요<small>또는 ? 를 눌러요</small></span></p>':'<p class="muted small">주사위를 다 썼어요 · 보너스 시간에 잡으면 다음 스테이지 주사위가 모여요</p>'}
      </div>
    </div>
  `;const n=document.getElementById("die3d-slot");if(n&&gi.ok)if(n.appendChild(gi.canvas),q.rolling){const s=q.rolling.die;gi.drawRolling(s.faces,s.pips,s.id,q.rollProgress(),io(s.cells.length))}else i&&gi.drawResult(i.faces,i.pips,i.id,io(i.cells.length))}let ac="";function Lf(i,t){t!==ac&&(ac=t,i.innerHTML=t)}function Zs(){var h,u;const i=q.grid,t=xt("grid");ou(i.w),xt("grid-used").textContent=`${i.usedCells()}/${i.w*i.h}`,Qy(),t.style.setProperty("--cell",`${ue}px`),t.style.width=`${i.w*Xt-xe}px`,t.style.height=`${i.h*Xt-xe}px`;const e=T.gridLocked;xt("grid-panel").classList.toggle("locked",e);const n=xt("clear-grid"),s=performance.now()<Nr;n.disabled=e||i.items.length===0,n.classList.toggle("armed",s&&!n.disabled),n.textContent=s&&!n.disabled?`정말 비울까요? (${i.items.length}개 사라짐)`:"🗑 비우기",e&&(Ht=null,te=null);const a=Ht!=null?i.get(Ht):void 0;let r="";for(let g=0;g<i.h;g++)for(let _=0;_<i.w;_++)r+=`<div class="cell" style="left:${_*Xt}px;top:${g*Xt}px"></div>`;te!=null&&(!a||q.canMerge(te,a.die.id)!==null)&&(te=null);const o=me&&!sn()?i.occupant(me.x,me.y):void 0;let l=te!=null?(h=i.get(te))==null?void 0:h.die:void 0;for(const g of i.items){const _=g.die,m=_.id===Ht,p=!!a&&!m&&q.canMerge(_.id,a.die.id)===null,M=_.id===te,x=p&&!M&&(o==null?void 0:o.die.id)===_.id;x&&!l&&(l=_);const v=!!a&&!m&&!p,R=`die-shape${m?" target":""}${p&&!M?" can-merge":""}${M?" mat-picked":""}${x?" mat-hover":""}${v?" dim":""}`,w=Kp(_.cells),C=(g.x+w.x)*Xt-xe/2,P=(g.y+w.y)*Xt-xe/2;r+=`<div class="${R}" data-die="${_.id}" style="transform-origin:${C}px ${P}px;--c:${un(_.cells.length)}">${xu(i.cellsOf(g))}</div>`;const E=C-(ue-14)/2,y=P-(ue-14)/2,L=m?'<em class="badge t">대상</em>':M?'<em class="badge m picked">재료 ✓</em>':p?'<em class="badge m">재료</em>':"";r+=`<div class="die-label flat${m?" target":""}${M?" mat-picked":""}${x?" mat-hover":""}${v?" dim":""}" data-die="${_.id}" title="d${_.faces} · 눈금 ${_.pips}" style="left:${E}px;top:${y}px;width:${ue-14}px;height:${ue-14}px;--c:${un(_.cells.length)}">
      ${L}<b class="pip">${_.pips}</b>${_.merges?`<small class="merges">+${_.merges}</small>`:""}</div>`}const c=te!=null?i.get(te):void 0;if(a&&c){const g=i.cellsOf(c),_=g.map(w=>w[0]),m=g.map(w=>w[1]),p=(Math.min(..._)+Math.max(..._)+1)/2*Xt-xe/2,M=(Math.max(...m)+1)*Xt-xe,x=q.mergeChance(a.die.cells.length),v=ya[Math.min(4,a.die.cells.length)].destroyBoth,R=x>=100?"실패 없음":q.protectNext?"실패해도 파괴 방지":v?"실패하면 대상도 깨짐!":"실패하면 재료만 깨짐";r+=`<button class="grid-merge-btn ${v&&x<100&&!q.protectNext?"risky":""}" data-act="do-merge" style="left:${p}px;top:${M}px">⚒ 강화 ${x}%<small>${R}</small></button>`}const f=sn();if(f&&me){const[g,_]=Oa(f.cells),m=me.x-g,p=me.y-_,M=i.canPlace(f.cells,m,p);for(const[x,v]of f.cells){const R=m+x,w=p+v;R<0||w<0||R>=i.w||w>=i.h||(r+=`<div class="place-ghost ${M?"ok":"bad"}" style="left:${R*Xt}px;top:${w*Xt}px"></div>`)}}t.innerHTML=r;const d=xt("grid-actions");if(a){const g=a.die,_=i.items.filter(w=>w.die.id!==g.id&&q.canMerge(w.die.id,g.id)===null),m=q.mergeChance(g.cells.length),p=Math.min(4,g.cells.length),M=q.protectNext?"실패해도 파괴 방지 (이번 1회)":ya[p].destroyBoth?'실패 시 대상과 재료 <b class="badc">둘 다 파괴</b>':'실패 시 <b class="badc">재료만 파괴</b>',x=te!=null?(u=i.get(te))==null?void 0:u.die:void 0,v=x?"done":_.length?"now":"stuck",R=x?"now":"";ac="\0merge",d.innerHTML=`
      <div class="merge-guide">
        <div class="mg-title">⚒ 강화 중 <small>${p}칸 블럭 · 눈금 ${g.pips}</small></div>
        <ol class="mg-steps">
          <li class="done"><b>강화할 블럭</b> 골랐어요</li>
          <li class="${v}">${v==="stuck"?"같은 칸 수(<b>"+p+"칸</b>) 블럭이 없어요 · 주사위를 더 놓거나 선택을 풀어요":x?"재료 골랐어요 (눈금 "+x.pips+")":"<b>반짝이는 블럭</b>을 클릭해 재료로 고르기 <small>같은 "+p+"칸 블럭 "+_.length+"개</small>"}</li>
          <li class="${R}">재료 위 <b>⚒ 강화</b> 버튼을 누르거나 재료를 <b>한 번 더 클릭</b></li>
        </ol>
        <div class="mg-rate">성공 <b>${m}%</b>${l?` → 눈금 <b class="okc">${g.pips+l.pips}</b>`:""}<br>${M}</div>
        <div class="btn-row">
          <button data-act="deselect" class="ghost">선택 취소 <small>ESC</small></button>
          <button data-act="discard-sel" class="ghost danger">대상 버리기</button>
        </div>
      </div>`}else if(e)Lf(d,'<div class="lock-note small">🔒 행군이 시작되면 다시 만질 수 있어요</div>');else{const g=sn();Lf(d,g?`<div class="side-discard"><button data-act="discard-pending" class="discard-btn ${Zy(g)?"suggest":"ghost"}" title="버리면 경험치 ${Ma}를 돌려받아요 (X)">♻ 버리기 <small>+${Ma}</small></button><div class="sd-note">놓을 자리가 없거나 눈금이 낮으면 버리고 경험치를 받아요 <small>X</small></div></div>`:"")}}function xu(i){const t=(s,a)=>i.some(r=>r[0]===s&&r[1]===a);let n="";for(const[s,a]of i){const r=t(s-1,a),o=t(s+1,a),l=t(s,a-1),c=t(s,a+1),f=(d,h)=>!d&&!h?7:0;n+=`<i style="left:${s*Xt}px;top:${a*Xt}px;width:${ue}px;height:${ue}px;border-radius:${f(l,r)}px ${f(l,o)}px ${f(c,o)}px ${f(c,r)}px"></i>`,o&&(n+=`<i style="left:${s*Xt+ue}px;top:${a*Xt}px;width:${xe}px;height:${ue}px"></i>`),c&&(n+=`<i style="left:${s*Xt}px;top:${a*Xt+ue}px;width:${ue}px;height:${xe}px"></i>`),o&&c&&t(s+1,a+1)&&(n+=`<i style="left:${s*Xt+ue}px;top:${a*Xt+ue}px;width:${xe}px;height:${xe}px"></i>`)}return n}let Er=-1;function Qy(){const i=document.getElementById("grid-sum");if(!i)return;const t=q.sum(),e=T.deck.map(o=>Ci(o)).sort((o,l)=>o.cost-l.cost),n=[...e].reverse().find(o=>t>=o.cost),s=e.find(o=>t<o.cost),a=Er!==-1&&t!==Er,r=t>Er;Er=t,i.className=`grid-sum ${n?"can":""} ${a?r?"bump-up":"bump-down":""}`,i.innerHTML=`<span class="gs-label">합산 눈금</span><b class="gs-num">${t}</b>
    <span class="gs-hint">${n?`<span class="gs-ok">⚔ ${n.name} 출격 가능</span>`:""}${s?`<span class="gs-next">${s.name}까지 <b>${s.cost-t}</b></span>`:'<span class="gs-ok">덱 전부 출격 가능</span>'}</span>`}function bu(i){const t=new Map;for(const e of i){const n=t.get(e.id)??{name:e.name,n:0};n.n++,t.set(e.id,n)}return[...t.values()].map(e=>`${e.name}×${e.n}`).join(" · ")}function yu(i,t=""){const e=Math.min(i.length,6);for(let a=0;a<e;a++)setTimeout(()=>_t.summon(),a*70);const n=i.reduce((a,r)=>a+r.wasted,0),s=bu(i.map(a=>a.merc));if(T.prep){ae(`${t}${s} 대기 · 출격을 누르면 함께 출발해요${n?` · 남는 눈금 ${n} 소멸`:""}`,"ok");return}if(ae(`${t}${i.length>1?`⚔ ${i.length}명 우르르 출격! `:""}${s}${i.length>1?"":" 출격!"}${n?` · 남는 눈금 ${n} 소멸`:""}`,"ok"),i.length>1){const a=document.querySelector(".battle-panel .stage");a&&Pi(a,"charge")}}function ro(){const i=q.sum(),t=T.phase==="march",e=T.deck.map(o=>pe.find(l=>l.id===o)).sort((o,l)=>o.cost-l.cost),n=[...e].reverse().find(o=>i>=o.cost),s=e.find(o=>i<o.cost),a=s?q.needFor(s.cost):null,r=T.goalReached;document.body.classList.toggle("goal-lock",r),xt("merc-panel").innerHTML=`
    ${r?`<div class="summon-line lock-line">🚩 <b>보너스 시간!</b> 몬스터를 잡으면 <b class="gold">🎲 주사위</b> 또는 <b class="gold">🪙 골드</b> · 모은 주사위 <b>${T.bankedDice}</b>개는 다음 스테이지 준비에 더해져요</div>`:`<div class="summon-line"><span class="sum-chip">눈금 <b>${i}</b></span> ${n?T.summonMode==="one"?`누를 때마다 <b class="okc">1명씩</b> ${T.prep?"대기":"출격"} <span class="muted">· 남는 눈금은 합산 눈금에 그대로</span>`:T.summonMode==="burst"?'용병을 누르면 <b class="okc">눈금이 닿는 만큼 연속 출격</b>':`<b class="okc">${n.name}</b> 출격 가능${i>n.cost?` <span class="muted">(남는 ${i-n.cost} 소멸)</span>`:""}`:'<span class="muted">아직 출격 불가</span>'}${s&&a?` · 다음 <b>${s.name}</b>까지 <b class="gold">${a.left}</b>${a.tight?' <span class="badc">자리 부족</span>':""}`:""}</div>`}
    <div class="mercs">
      ${e.map(o=>{const l=T.canSummon(o.id),c=q.needFor(o.cost),f=l?T.previewSummon(o.id):null,d=f?f.list.filter(g=>g.id===o.id).length:0,h=f?f.list.length-d:0,u=r?"🔒 다음":l?T.summonMode==="burst"?`×${d}${h?` <small>+${h}</small>`:""} ${T.prep?"대기":"출격!"}`:T.prep?"대기":"출격!":i>=o.cost?"대기":`${c.left} 남음`;return`<button class="merc ${l?"on":"off"} ${o===n?"best":""}" data-merc="${o.id}" ${l?"":"disabled"} title="${o.name} · ${o.skill||o.role} · 비용 ${o.cost}${t?"":" (행군 중에만)"}">
          <span class="m-cost" data-tip="비용: 격자 합산 눈금이 이만큼 있어야 1명">${o.cost}</span><span class="m-name">${o.name}</span><span class="kind k-${o.kind} ico" data-tip="${Yf[o.kind]}${o.skill?` · ${o.skill}`:""}">${My[o.kind]}</span>
          <span class="m-hint">${u}</span>
          ${f&&T.summonMode==="burst"?`<span class="m-plan">${bu(f.list)}${f.wasted?` · 소멸 ${f.wasted}`:""}</span>`:""}
        </button>`}).join("")}
    </div>`}let $r=null,Mu=0;function Gs(){const i=performance.now(),t=$r&&i<$r.until?$r:null,e=Array.from({length:Qe},(a,r)=>{const o=t&&r>=t.from&&r<t.to;return`<i class="${r<q.streak?"lit":""} ${o?"pop":""}" style="${o?`animation-delay:${(r-t.from)*.08}s`:""}"></i>`}).join(""),n=!q.isFever()&&q.streak>=Qe-2;q.feverLocked;const s=i<Mu;xt("streak-mini").className=`streak-mini big ${n?"near":""} ${t?"gain":""} ${s?"broke":""}`,xt("streak-mini").innerHTML=`<span class="sm-label" data-tip="연쇄: 강화에 성공한 칸 수만큼 차요 · ${Qe}칸이 차면 격자의 모든 주사위를 하나로 압축">⛓ 강화 연쇄</span><span class="sm-segs">${e}</span><b class="sm-num">${q.streak}<small>/${Qe}</small></b>`,xt("streak-mini").title=`강화에 성공하면 그 블럭 칸 수만큼 차고, 실패하면 0. ${Qe} 차면 격자의 모든 주사위를 하나로 압축`,xt("merge-side").innerHTML=`
    <div class="gauge-label">연쇄 게이지 <b>${q.isFever()?"MAX":`${q.streak}/${Qe}`}</b></div>
    <div class="gauge ${n?"near":""} ${q.isFever()?"full":""}" style="grid-template-columns:repeat(${Qe},1fr)">${e}</div>
    <div class="small muted">성공 시 칸 수만큼 차고, 실패하면 0. ${Qe} 차면 피버 룰렛 (효과 하나)</div>
    <ul class="status">
      <li>불운 보정 <b>${q.pity?`+${q.pity}%`:"없음"}</b></li>
      <li>파괴 방지 <b>${q.protectNext?"다음 1회 적용":"없음"}</b></li>
    </ul>
    <table class="rate">
      <tr><th>칸</th><th>성공률</th><th>실패 시</th></tr>
      ${[1,2,3,4].map(a=>`<tr><td>${a}칸</td><td>${q.mergeChance(a)}%</td><td>${ya[a].destroyBoth?"둘 다 파괴":"재료만 파괴"}</td></tr>`).join("")}
    </table>`}function Su(){xt("debug").innerHTML=`
    <div class="btn-row wrap">
      <button data-dbg="add5">주사위 +5</button>
      <button data-dbg="coins">코인 +50</button>
      <button data-dbg="endday">스테이지 즉시 종료 (실패)</button>
      <button data-dbg="win">목표 달성시키기</button>
      <button data-dbg="push">전선 +20m</button>
      <button data-dbg="fever">피버 룰렛 돌리기</button>
      ${Object.keys(Fn).map(i=>`<button data-dbg="fx-${i}">룰렛: ${Fn[i].name}</button>`).join("")}
      <button data-dbg="reset" class="ghost">처음부터</button>
      <button data-dbg="keep-meta" class="${Hs()?"primary":"ghost"}">영구 기록 유지: ${Hs()?"켬 (원정이 끝나도 남음)":"끔 (새 원정마다 초기화 · 개발용)"}</button>
      <button data-dbg="reset-tut" class="ghost">튜토리얼 다시 보기 (처음부터)</button>
      <button data-dbg="reset-meta" class="ghost danger">영구 기록(코인·캠프 업그레이드) 초기화</button>
    </div>`}function tM(){xt("log").innerHTML=`
    <h3>판정 기록 <span class="muted small">최근 20회</span></h3>
    <ol class="log">${q.log.length?q.log.map(i=>`<li class="${i.success?"ok":"bad"}">${i.success?"성공":"실패"} · ${i.cells}칸 · 확률 ${i.chance}% · 판정 ${i.roll.toFixed(1)}${i.fever?" · 피버 중":""}${i.outcome==="fail-protected"?" · 파괴 방지됨":""}</li>`).join(""):'<li class="muted">아직 없음</li>'}</ol>`}function En(){var e,n;(e=document.getElementById("assist-roll"))==null||e.classList.toggle("active",bn.roll),(n=document.getElementById("auto-btn"))==null||n.classList.toggle("active",yi);const i=document.getElementById("pause-btn");i&&(i.classList.toggle("active",ze),i.textContent=ze?"▶":"⏸"),document.body.classList.toggle("is-paused",Nc());const t=document.getElementById("speed-btn");t&&(t.textContent=`⏩ ×${ai}`,t.classList.toggle("active",ai!==1))}function It(){if(to&&!T.goalReached&&(to=!1,ai=fu,En()),(T.phase==="camp"||T.phase==="deck")&&!Qi){const i=T.takeNewUnlocks();i.length&&nM(i)}po(),mu(),Ry(),Fy(),xa(),Zs(),ro(),Gs(),Su(),tM(),En(),Uc(),cu(),Sy()}let Df=0,If=0;function eM(i,t){const e=wa[i],n=document.querySelector(".stage");if(!n)return;let s=n.querySelector(".loot-ribbon");s||(s=document.createElement("div"),s.className="loot-ribbon",n.appendChild(s)),s.innerHTML=`<span class="lr-icon">${e.icon}</span><span class="lr-text"><b>${e.name}!</b> <span class="lr-desc">${e.desc}</span></span>${t?`<span class="lr-extra">${t}</span>`:""}`,s.classList.remove("show"),s.offsetWidth,s.classList.add("show"),clearTimeout(If),If=window.setTimeout(()=>s.classList.remove("show"),2600)}function nM(i){const t=i.map(n=>Ci(n));let e=document.getElementById("unlock-pop");e||(e=document.createElement("div"),e.id="unlock-pop",e.className="unlock-pop",document.getElementById("app").appendChild(e)),e.innerHTML=`<div class="up-card">
    <div class="up-rays"></div>
    <div class="up-kicker">🎉 새 용병 합류!</div>
    <div class="up-list">${t.map(n=>`<div class="up-merc"><span class="mc-art">${ri(n.id,n.kind)}${Ba(n.cost)}</span>
          <b>${n.name}</b><span class="mc-tags">${vo(n)}</span><span class="up-skill">${n.skill||n.role}</span></div>`).join("")}</div>
    <p class="up-note">${T.canEditDeck?"훈련장에서 편성을 바꿔 덱에 넣을 수 있어요":"다음 편성 때 덱에 넣을 수 있어요"}</p>
    <div class="up-btns">${T.canEditDeck?'<button class="primary" data-act="unlock-deck">편성하러 가기 →</button>':""}<button data-act="unlock-close">확인</button></div>
  </div>`,e.classList.add("show"),_t.fever()}function ae(i,t="info"){const e=xt("toast");e.textContent=i,e.className=`toast show ${t}`,clearTimeout(Df),Df=window.setTimeout(()=>e.className="toast",1800)}function Pi(i,t){i.classList.remove(t),i.offsetWidth,i.classList.add(t)}function iM(i,t){const e=xt("cast-fill"),n=xt("cast-label"),s=xt("cast-track");s.classList.add("on"),n.textContent="강화 시전 중…",e.style.transition="none",e.style.width="0%",e.offsetWidth,e.style.transition=`width ${t}ms linear`,e.style.width="100%",setTimeout(()=>{s.classList.remove("on"),n.textContent="강화 대기"},t+150)}function sM(i,t,e){const n=xt("dial"),s=xt("needle"),a=i.chance*3.6;n.style.background=`conic-gradient(var(--ok) 0deg ${a}deg, var(--bad) ${a}deg 360deg)`,xt("dial-caption").innerHTML=`성공 확률 <b>${i.chance}%</b> · 판정 중…`;const r=!i.success&&i.chance>=75?2400:1300;return iM(e,r),s.style.transition="none",s.style.transform="rotate(0deg)",s.offsetWidth,s.style.transition=`transform ${r}ms cubic-bezier(.1,.75,.15,1)`,s.style.transform=`rotate(${1080+i.roll*3.6}deg)`,n.classList.toggle("tense",!i.fever&&t>=Qe-2),new Promise(o=>setTimeout(o,r+120))}function aM(){_t.fever(),Pi(xt("fever-fx"),"go"),Pi(document.body,"flash")}function rM(i,t){const e=q.streak,n=e>i?e:Qe,s=n-i;if(s<=0)return;const a=document.querySelector("#streak-mini .sm-segs"),r=xt("grid").getBoundingClientRect(),o=a==null?void 0:a.getBoundingClientRect();if(t&&o){const l=r.left+t.x,c=r.top+t.y;kn("streak-fly",l,c,`⛓ +${s}`,800,{"--tx":`${o.left+o.width/2-l}px`,"--ty":`${o.top+o.height/2-c}px`})}setTimeout(()=>{$r={from:i,to:n,until:performance.now()+1200},Gs(),_t.sparkle(),setTimeout(()=>Gs(),1250)},560)}function Ca(i){const t=xt("grid").querySelector(`.die-label[data-die="${i}"]`);if(!t)return null;const e=parseFloat(t.style.width)||ue-14;return{x:parseFloat(t.style.left)+e/2,y:parseFloat(t.style.top)+e/2,el:t}}function Eu(i,t,e){const n=xt("grid-fx").getBoundingClientRect();fc(i,n.left+t,n.top+e,130)}function Ln(i,t,e,n="",s=900,a={}){const r=document.createElement("div");r.className=i,r.style.left=`${t}px`,r.style.top=`${e}px`;for(const[o,l]of Object.entries(a))r.style.setProperty(o,l);return r.innerHTML=n,xt("grid-fx").appendChild(r),setTimeout(()=>r.remove(),s),r}const Yi=i=>new Promise(t=>setTimeout(t,i));function Tu(i){return!i.success&&i.chance>=75?1700:1e3}async function oM(i,t,e){const n=Tu(i),s=i.chance*3.6,r=Ln("judge-dial",t.x,t.y,'<i class="jd-needle"></i><b>'+i.chance+"%</b>",n+250,{"--okdeg":`${s}deg`}).querySelector(".jd-needle");r.offsetWidth,r.style.transition=`transform ${n}ms cubic-bezier(.1,.75,.15,1)`,r.style.transform=`rotate(${1080+i.roll*3.6}deg)`,e&&(e.el.style.zIndex="6",e.el.style.transition="transform 260ms ease-out",e.el.style.transform=`translate(${(t.x-e.x)*.3}px, ${(t.y-e.y)*.3}px) scale(0.9)`,e.el.classList.add("judging"));let o=0,l=45;for(;o<n-120;)setTimeout(()=>_t.tick(),o),o+=l,l*=1.12;await Yi(n)}async function lM(i,t,e,n,s){n&&(n.el.classList.remove("judging"),n.el.style.transition="transform 200ms cubic-bezier(.6,0,.9,.4), opacity 200ms",n.el.style.transform=`translate(${e.x-n.x}px, ${e.y-n.y}px) scale(0.35)`,n.el.style.opacity="0.2"),xt("grid").querySelectorAll(`.die-shape[data-die="${i.materialId}"]`).forEach(r=>r.classList.add("absorb")),await Yi(200),It(),_t.sparkle(),Ln("fx-ring gold",e.x,e.y,"",600),Eu("fx:merge-ok",e.x,e.y);for(let r=0;r<14;r++){const o=r/14*Math.PI*2+Math.random()*.3,l=38+Math.random()*34;Ln("fx-spark",e.x,e.y,"",700,{"--dx":`${Math.cos(o)*l}px`,"--dy":`${Math.sin(o)*l}px`})}Ln("fx-float gold",e.x,e.y-26,`+${i.newPips-s}`,1e3),Ln("fx-stamp ok",e.x,e.y-52,"강화 성공!",1100);const a=Ca(t);if(a){a.el.classList.add("powered-up");const r=a.el.querySelector(".pip");r&&await wu(r,s,i.newPips,420)}xt("grid").querySelectorAll(`.die-shape[data-die="${t}"]`).forEach(r=>r.classList.add("powered")),await Yi(200)}async function cM(i,t,e,n){if(i.outcome==="fail-protected"){e&&(e.el.classList.remove("judging"),e.el.style.transition="transform 220ms ease-out",e.el.style.transform="",Ln("fx-ring shield",e.x,e.y,"",700),Ln("fx-stamp shield",e.x,e.y-40,"🛡 방어!",1100)),_t.crack(),await Yi(500),It();return}for(const s of t){const a=Ca(s);a&&a.el.classList.add("cracking")}_t.crack(),await Yi(260),_t.shatter(),Pi(xt("grid-panel"),"shake");for(const s of t){const a=Ca(s);if(xt("grid").querySelectorAll(`[data-die="${s}"]`).forEach(r=>r.style.visibility="hidden"),!!a){Ln("fx-ring bad",a.x,a.y,"",500),Eu("fx:merge-fail",a.x,a.y);for(let r=0;r<12;r++){const o=r/12*Math.PI*2+Math.random()*.5,l=24+Math.random()*40;Ln("fx-shard",a.x,a.y,"",900,{"--dx":`${Math.cos(o)*l}px`,"--dy":`${Math.sin(o)*l-10}px`,"--rot":`${Math.random()*540-270}deg`,"--c":n[s]??"#ccc"})}Ln("fx-stamp bad",a.x,a.y-36,"깨짐!",1e3)}}await Yi(450),It()}async function kc(i,t){var u;const e=q.streak,n=q.grid.get(t),s=q.grid.get(i),a=(n==null?void 0:n.die.pips)??0,r={};n&&(r[t]=un(n.die.cells.length)),s&&(r[i]=un(s.die.cells.length));const o=Ca(t),l=Ca(i),c=q.merge(i,t);if(te=null,!c.ok){ae(c.reason,"bad"),It();return}Me=!0,(u=xt("grid").querySelector(".grid-merge-btn"))==null||u.remove(),sM(c,e,null),o?await oM(c,o,l):await Yi(Tu(c));const f=xt("dial-caption");if(c.success)f.innerHTML=`성공 확률 ${c.chance}% · 판정 ${c.roll.toFixed(1)} → <b class="okc">성공!</b>`,o?await lM(c,t,o,l,a):It(),rM(e,o);else{f.innerHTML=`성공 확률 ${c.chance}% · 판정 ${c.roll.toFixed(1)} → <b class="badc">실패</b>`;const g=c.outcome==="fail-both"?[i,t]:c.outcome==="fail-material"?[i]:[];await cM(c,g,l,r),e>0&&(Mu=performance.now()+700,Gs(),setTimeout(()=>Gs(),720))}Me=!1;const d=!!q.grid.get(t),h=d&&q.grid.items.some(g=>g.die.id!==t&&q.canMerge(g.die.id,t)===null);Ht=h?t:null,d&&!h&&ae("더 합칠 재료가 없어서 강화 상태를 풀었어요","info"),It(),c.feverTriggered&&await fM()}const vs=["sure","miss","chain","maxroll","rain","miss","strike","rush"],kf={sure:"#e8c13a",maxroll:"#a46be8",chain:"#ff9a3c",rain:"#5b8def",strike:"#ef5a5a",rush:"#4fd18b",miss:"#3a3d55"},Uf=i=>i==="miss"?"꽝":Fn[i].icon;function dM(i){const t=xt("roulette"),e=vs.length,n=360/e,s=vs.map((_,m)=>`${kf[_]} ${m*n}deg ${(m+1)*n}deg`).join(", "),a=vs.map((_,m)=>{const p=m*n+n/2,M=_==="miss"?"꽝":Fn[_].name;return`<div class="r-label ${_==="miss"?"miss":""}" style="transform: rotate(${p}deg) translateY(-96px) rotate(${-p}deg)"><span>${Uf(_)}</span>${_==="miss"?"":`<b>${M}</b>`}</div>`}).join("");t.innerHTML=`
    <div class="r-box">
      <div class="r-title">피버 룰렛!</div>
      <div class="r-wheel-wrap">
        <div class="r-pointer">▼</div>
        <div class="r-wheel" id="r-wheel" style="background: conic-gradient(${s})">${a}<div class="r-hub">★</div></div>
      </div>
      <div class="r-result" id="r-result"></div>
    </div>`,t.className="roulette show";const r=vs.indexOf(i),o=vs[(r+1)%e]==="miss"?1:vs[(r-1+e)%e]==="miss"?-1:0;let l=(Math.random()-.5)*n*.5;o&&Math.random()<.55&&(l=o*(n/2-2-Math.random()*5));const c=r*n+n/2+l,f=360*6-c,d=3600,h=xt("r-wheel");h.style.transition="none",h.style.transform="rotate(0deg)",h.offsetWidth,h.style.transition=`transform ${d}ms cubic-bezier(.12,.72,.1,1)`,h.style.transform=`rotate(${f}deg)`;let u=0,g=55;for(;u<d-150;)setTimeout(()=>_t.tick(),u),u+=g,g*=1.09;return new Promise(_=>setTimeout(()=>{const m=Fn[i];xt("r-result").innerHTML=`<b style="color:${kf[i]}">${Uf(i)} ${m.name}!</b><span>${m.desc}</span>`,xt("r-result").classList.add("show"),_t.fever(),Pi(document.body,"flash"),setTimeout(()=>{t.className="roulette",_()},1500)},d+100))}function wu(i,t,e,n){return new Promise(s=>{const a=performance.now(),r=()=>{const o=Math.min(1,(performance.now()-a)/n);i.textContent=String(Math.round(t+(e-t)*o)),o<1?requestAnimationFrame(r):s()};setTimeout(()=>{i.textContent=String(e),s()},n+200),requestAnimationFrame(r)})}async function Au(i,t){var h,u,g;const e=xt("grid"),n=((h=T.game.grid.get(t))==null?void 0:h.die.pips)??0;let s=n-i.reduce((_,m)=>_+m.gained,0);const a=ue-14,r={x:.5*Xt-xe/2-a/2,y:.5*Xt-xe/2-a/2},o=document.createElement("div");o.className="chain-collector",o.style.left=`${r.x}px`,o.style.top=`${r.y}px`,o.style.width=`${a}px`,o.style.height=`${a}px`,o.innerHTML=`<b>${s}</b><small>연쇄 0</small>`;const l=o.querySelector("b"),c=o.querySelector("small"),f=(_,m)=>{const p=e.querySelector(`.die-label[data-die="${_}"]`);if(e.querySelectorAll(`.die-shape[data-die="${_}"]`).forEach(v=>v.classList.add("absorb")),!p)return;const M=r.x-parseFloat(p.style.left),x=r.y-parseFloat(p.style.top);p.style.zIndex="10",p.style.transition=`transform ${m}ms cubic-bezier(.5,0,.9,.6), opacity ${m}ms`,p.style.transform=`translate(${M}px, ${x}px) scale(0.7)`};f(t,320),await new Promise(_=>setTimeout(_,320)),(u=e.querySelector(`.die-label[data-die="${t}"]`))==null||u.remove(),e.appendChild(o),_t.place();let d=340;for(let _=0;_<i.length;_++){const m=i[_],p=Math.max(140,d-60);f(m.materialId,p),await new Promise(x=>setTimeout(x,p)),(g=e.querySelector(`.die-label[data-die="${m.materialId}"]`))==null||g.remove(),_t.success(Math.min(14,_+2)),c.textContent=`연쇄 ${_+1}`,o.classList.remove("hit"),o.offsetWidth,o.classList.add("hit");const M=document.createElement("div");M.className="chain-plus",M.textContent=`+${m.gained}`,M.style.left=`${r.x+a}px`,M.style.top=`${r.y}px`,e.appendChild(M),setTimeout(()=>M.remove(),700),await wu(l,s,s+m.gained,Math.max(120,d-80)),s+=m.gained,d=Math.max(160,d*.82)}o.classList.add("final"),_t.fever(),ae(`💥 연쇄 ${i.length}! 눈금 ${n} 주사위 완성 · 빈칸을 마음껏 채워요`,"ok"),await new Promise(_=>setTimeout(_,650))}async function fM(){var e;Me=!0,Ht=null,te=null,Pi(xt("grid-panel"),"flash"),_t.fever(),await new Promise(n=>setTimeout(n,350));const i=T.applyFeverEffect("chain"),t=(e=T.game.grid.items[0])==null?void 0:e.die.id;t!=null&&i.length?(ae(`⛓ 연쇄 ${Qe}! 격자의 모든 주사위를 하나로 압축해요`,"ok"),await Au(i,t)):ae(`⛓ 연쇄 ${Qe}! 압축할 주사위가 하나뿐이었어요`,"ok"),Me=!1,It()}async function Nf(){var e;Ps=!0,Me=!0,Ht=null,te=null,aM(),await new Promise(n=>setTimeout(n,700));const i=tc??T.pickFeverEffect();tc=null,await dM(i);const t=T.applyFeverEffect(i);if(Ps=!1,i==="chain"){const n=(e=T.game.grid.items[0])==null?void 0:e.die.id;n!=null?await Au(t,n):ae("💥 격자가 비어 있었어요. 빈칸을 마음껏 채워요!","ok")}i!=="chain"&&ae(`${Fn[i].icon} ${Fn[i].name}! ${Fn[i].desc}`,"ok"),Me=!1,It()}function Ru(i){const t=xt("grid").getBoundingClientRect(),e=Math.floor((i.clientX-t.left+xe/2)/Xt),n=Math.floor((i.clientY-t.top+xe/2)/Xt);return e<0||n<0||e>=q.grid.w||n>=q.grid.h?null:{x:e,y:n}}document.addEventListener("pointerdown",i=>{!i.target.closest("#hand-shape")||!sn()||T.gridLocked||Me||(i.preventDefault(),Te={sx:i.clientX,sy:i.clientY,moved:!1,el:null,touch:i.pointerType!=="mouse",origin:null})});document.addEventListener("pointermove",i=>{var u;if(!Te||!q.pending)return;if(!Te.moved){if(Math.hypot(i.clientX-Te.sx,i.clientY-Te.sy)<8)return;Te.moved=!0,ou(q.grid.w);const g=document.createElement("div");g.className="drag-ghost",g.innerHTML=vu(q.pending),g.style.setProperty("--cell",`${ue}px`),document.body.appendChild(g),Te.el=g,Cn=null}const t=q.pending.cells,e=(Math.max(...t.map(g=>g[0]))+1)*Xt-xe,n=(Math.max(...t.map(g=>g[1]))+1)*Xt-xe,s=i.clientX-e/2,a=i.clientY-n/2-(Te.touch?n/2+36:0);Te.el&&(Te.el.style.transform=`translate(${s}px, ${a}px)`);const r=$a.getBoundingClientRect(),o=Math.round((s-r.left)/Xt),l=Math.round((a-r.top)/Xt),c=s+e>r.left-Xt/2&&s<r.right+Xt/2&&a+n>r.top-Xt/2&&a<r.bottom+Xt/2,[f,d]=Oa(t),h=c?{x:o+f,y:l+d}:null;Te.origin=c?{x:o,y:l}:null,(u=Te.el)==null||u.classList.toggle("over",c),((h==null?void 0:h.x)!==(me==null?void 0:me.x)||(h==null?void 0:h.y)!==(me==null?void 0:me.y))&&(me=h,Zs())});function Cu(i,t=!1){var n;if(!Te)return;const e=Te;if(Te=null,(n=e.el)==null||n.remove(),!!q.pending){if(!e.moved){!t&&i.type==="pointerup"&&(q.rotatePending(),_t.tick(),It());return}me=null,!t&&e.origin&&(q.placePending(e.origin.x,e.origin.y)?_t.place():ae("여기엔 안 들어가요 · 회전하거나 다른 자리에 놓아요","bad")),It()}}document.addEventListener("pointerup",i=>Cu(i));document.addEventListener("pointercancel",i=>Cu(i,!0));document.querySelectorAll(".modal").forEach(i=>i.addEventListener("click",t=>{t.target===i&&(i.classList.remove("show"),i.id==="camp-sheet"&&(tn=null))}));xt("debug").addEventListener("click",i=>{i.target.closest("[data-dbg]")&&xt("debug-modal").classList.remove("show")});const $a=xt("grid");$a.addEventListener("pointerdown",i=>{Fa=i.pointerType||"mouse"});$a.addEventListener("mousemove",i=>{if(Me||T.gridLocked||Te||Fa!=="mouse")return;const t=Ru(i);(t==null?void 0:t.x)===(me==null?void 0:me.x)&&(t==null?void 0:t.y)===(me==null?void 0:me.y)||(me=t,(sn()||Ht!=null)&&Zs())});$a.addEventListener("mouseleave",()=>{Te||Fa!=="mouse"||(me=null,(sn()||Ht!=null)&&!Me&&Zs())});Ic.addEventListener("contextmenu",i=>{if(i.preventDefault(),!(T.gridLocked||Me)){if(sn()){q.rotatePending(),It();return}!q.pending&&!q.rolling&&q.unconfirmed>0&&q.roll()&&(_t.roll(),Ht=null,It())}});let Rn=null,Ff="",ba=null;function Uc(){const i=sn();if(!(!!i&&!!ba&&!Te&&!T.gridLocked&&!Me&&!document.querySelector(".at-root"))){Rn&&(Rn.style.display="none");return}Rn||(Rn=document.createElement("div"),Rn.className="cursor-ghost",document.body.appendChild(Rn));const e=`${i.id}|${JSON.stringify(i.cells)}|${i.pips}|${ue}`;e!==Ff&&(Ff=e,Rn.style.setProperty("--cell",`${ue}px`),Rn.innerHTML=vu(i));const[n,s]=Oa(i.cells);Rn.style.display="block",Rn.style.transform=`translate(${ba.x-(n*Xt+ue/2)}px, ${ba.y-(s*Xt+ue/2)}px)`}document.addEventListener("pointermove",i=>{i.pointerType==="mouse"&&(ba={x:i.clientX,y:i.clientY},Uc())});document.addEventListener("mouseleave",()=>{ba=null,Uc()});$a.addEventListener("click",i=>{if(Me||T.gridLocked||i.target.closest("button"))return;const t=Ru(i);if(!t)return;if(sn()){const n=q.grid.occupant(t.x,t.y);if(n&&q.holdPending()){Ht=n.die.id,te=null,ae("손의 주사위는 보관함에 넣어 뒀어요","info"),It();return}const[s,a]=Oa(q.pending.cells);if(Fa!=="mouse"&&((Cn==null?void 0:Cn.x)!==t.x||(Cn==null?void 0:Cn.y)!==t.y)){Cn=t,me=t,Zs(),q.grid.canPlace(q.pending.cells,t.x-s,t.y-a)||ae("여기엔 안 들어가요 · 회전하거나 다른 칸을 눌러요","bad");return}Cn=null,q.placePending(t.x-s,t.y-a)?(_t.place(),me=null):ae("여기엔 들어가지 않아요. 회전하거나 다른 곳을 골라요","bad"),It();return}const e=q.grid.occupant(t.x,t.y);if(!e)Ht=null,te=null;else if(Ht==null)Ht=e.die.id;else if(Ht===e.die.id)Ht=null,te=null;else{const n=q.canMerge(e.die.id,Ht);if(n===null){if(te===e.die.id){kc(te,Ht);return}te=e.die.id}else ae(`${n} · 강화 대상을 바꿨어요`,"info"),Ht=e.die.id,te=null}It()});function Nc(){return ze&&T.phase==="march"}const hM="#dice-panel, #grid-panel, #merc-panel, #merge-modal";let Of=0;for(const i of["pointerdown","mousedown","touchstart","click","dblclick","contextmenu"])window.addEventListener(i,t=>{var n;if(!Nc())return;const e=t.target;!((n=e==null?void 0:e.closest)!=null&&n.call(e,hM))||e.closest('[data-speed="pause"]')||(t.preventDefault(),t.stopPropagation(),i==="click"&&performance.now()-Of>1200&&(Of=performance.now(),ae("⏸ 일시정지 중엔 조작할 수 없어요 · ▶ 계속을 눌러요","info")))},{capture:!0,passive:!1});document.addEventListener("keydown",i=>{document.querySelector(".at-root")||Nc()&&i.key!==" "&&i.key!=="Escape"||((i.key==="r"||i.key==="R"||i.key==="ㄱ")&&!T.gridLocked&&sn()&&(q.rotatePending(),It()),i.key==="Escape"&&(T.deckOverCamp&&!document.querySelector(".modal.show")&&T.cancelDeck(),document.querySelectorAll(".modal.show").forEach(t=>t.classList.remove("show")),Ht=null,te=null,It()),(i.key==="x"||i.key==="X"||i.key==="ㅌ")&&sn()&&!T.gridLocked&&(_u(q.pending),q.discardPending(),It()),i.key===" "&&(i.preventDefault(),ze=!ze,En()))});let Pu=0;function fa(){Pu++,T=du(),oc=0,q=T.game,Ht=null}let Bf=0;document.addEventListener("click",i=>{const t=i.target.closest(".st-ico");document.querySelectorAll(".st-ico.tip-on").forEach(e=>e!==t&&e.classList.remove("tip-on")),t&&(t.classList.toggle("tip-on"),clearTimeout(Bf),Bf=window.setTimeout(()=>t.classList.remove("tip-on"),1800))});let $f=0;window.addEventListener("resize",()=>{clearTimeout($f),$f=window.setTimeout(()=>It(),120)});function uM(){if(document.querySelector(".at-root"))return;const i=ze;ze=!0,En();const t=document.createElement("div");document.body.appendChild(t),dy(t,{onClose:()=>{t.remove(),ze=i,En(),It()}})}(async()=>{const i=document.getElementById("asset-btn");if(!i)return;const t=window.claude,e=t!=null&&t.use?await t.use("user").catch(()=>null):null;e&&await e.canEdit().catch(()=>!1)&&(i.hidden=!1)})();Ic.addEventListener("click",i=>{var c,f,d,h;const t=i.target.closest("button");if(!t||t.disabled)return;if(t.dataset.act==="asset-tool"){uM();return}if(t.dataset.act==="give-up"){performance.now()<Ur?(Ur=0,yi&&zf(),Me=!1,Ps=!1,xt("roulette").className="roulette",fa(),ae("🏳 원정을 포기했어요. 새 원정을 준비해요","info"),It()):(Ur=performance.now()+3e3,po());return}if(t.dataset.act==="hold"){q.holdPending()?_t.place():ae("보관함이 꽉 찼어요","bad"),It();return}if(t.dataset.act==="take-held"){q.takeHeld(Number(t.dataset.i))&&(Ht=null,te=null,_t.place(),no=performance.now()+400),It();return}if(t.dataset.act==="auto"){zf();return}if(t.dataset.act==="assist-roll"||t.dataset.act==="assist-place"){const u=t.dataset.act==="assist-roll"?"roll":"place";bn[u]=!bn[u],uu(),En(),xa(),ae(`${u==="roll"?"🎲 자동 굴리기":"📦 자동 배치"} ${bn[u]?"켬":"끔"}`,"info");return}if(t.dataset.act==="speed-cycle"){const u=[1,2,4];ai=u[(u.indexOf(ai)+1)%u.length],ze=!1,En();return}if(t.dataset.act==="merge-info"||t.dataset.act==="open-debug"){xt(t.dataset.act==="merge-info"?"merge-modal":"debug-modal").classList.add("show");return}if(t.dataset.act==="close-modal"){t.closest("#camp-sheet")&&(tn=null),(c=t.closest(".modal"))==null||c.classList.remove("show");return}if(t.dataset.act==="camp-spot"){tn=t.dataset.spot,_t.place(),gu();return}const e=t.dataset.speed;if(e){e==="pause"?ze=!ze:(ai=Number(e),ze=!1),En();return}if(Me)return;const n=["rotate","discard-pending","discard-sel","do-merge","clear-grid"];if(T.gridLocked&&(t.id==="roll-btn"||n.includes(t.dataset.act??"")))return;if(t.id==="roll-btn"){q.roll()&&(_t.roll(),Ht=null),It();return}const s=t.dataset.act;if(s==="rotate"&&q.rotatePending(),s==="discard-pending"&&sn()&&(_u(q.pending),q.discardPending()),s==="discard-sel"&&Ht!=null&&(q.discardPlaced(Ht),Ht=null,te=null),s==="clear-grid")if(performance.now()<Nr){Nr=0;const u=q.clearGrid();Ht=null,te=null,_t.fail(),ae(`격자를 비웠어요 · 주사위 ${u}개 버림`,"info")}else Nr=performance.now()+3e3,setTimeout(()=>Zs(),3050);if(s==="deselect"&&(Ht=null,te=null),s==="do-merge"&&Ht!=null&&te!=null){kc(te,Ht);return}if(s==="to-camp"&&(T.toCamp(),Hi=T.deckEditReason==="fail"),s==="next-day"&&(tn=null,T.nextDay()),s==="open-deck"&&(Hi=!1,tn=null,T.openDeck()),s==="dismiss-prompt"&&(Hi=!1),(s==="unlock-close"||s==="unlock-deck")&&((f=document.getElementById("unlock-pop"))==null||f.classList.remove("show")),s==="unlock-deck"&&T.canEditDeck&&(Hi=!1,tn=null,T.openDeck()),s==="confirm-deck"&&T.confirmDeck()&&gy(T.deck),s==="deck-cancel"&&(Oe=null,Be=null,T.cancelDeck()),s==="restart"&&fa(),T.phase==="deck"){const u=t.dataset.deckSel,g=t.dataset.dexSel;u&&(Oe=Oe===u?null:u),g&&(Be=Be===g?null:g),(u||g)&&_t.place();const _=t.dataset.act;if(_==="deck-close"&&(Oe=null),_==="dex-close"&&(Be=null),_==="deck-remove"&&Oe&&(T.deck=T.deck.filter(m=>m!==Oe),Oe=null,Be=null),_==="dex-add"&&Be&&T.deck.length<xi&&(T.deck=[...T.deck,Be],Oe=null,Be=null,_t.summon()),_==="dex-swap"&&Be&&Oe){const m=Oe,p=Be;T.deck=T.deck.map(M=>M===m?p:M),Oe=null,Be=null,_t.summon(),ae(`⇄ ${Ci(m).name} 빼고 ${go(Ci(p).name,"을","를")} 넣었어요`,"ok")}}const a=t.dataset.buy;if(a){const u=t.getBoundingClientRect();if(T.buy(a)){Mi={id:a,at:performance.now()},It(),Gy(a,u);return}}const r=t.dataset.card,o=t.dataset.replace;if(r&&T.blessFull&&((d=T.cardOffer)!=null&&d.includes(r))&&!T.cards.includes(r)){xn=r,_t.place(),It();return}if(r&&T.pickCard(r)||o!=null&&xn&&T.pickCard(xn,Number(o))){const u=r??xn;xn=null,_t.sparkle();const g=ni.get(u);ae(`${g.icon} 가호 '${g.name}'를 받았어요`,"ok"),rc=T.cards.length-1,setTimeout(()=>{rc=-1},1300),T.toCamp(),Hi=T.deckEditReason==="fail",It();return}if(t.dataset.act==="bless-back"){xn=null,It();return}if(t.dataset.act==="bless-skip"){xn=null,T.skipCard(),T.toCamp(),Hi=T.deckEditReason==="fail",It();return}if(t.dataset.act==="launch"){const u=T.waitingCount;if(u===0&&performance.now()>=Br){Br=performance.now()+3e3,_t.fail(),ae("⚠ 아직 대기 중인 용병이 없어요 · 주사위를 굴려 용병을 뽑고 출격해요","info"),ec(),setTimeout(()=>ec(),3050);return}Br=0,T.launch();for(let g=0;g<Math.min(6,Math.max(1,u));g++)setTimeout(()=>_t.summon(),g*70);if(ae(u?`⚔ ${u}명 출격!`:"⚔ 출격! 용병 없이 본진만 출발해요","ok"),u>1){const g=document.querySelector(".battle-panel .stage");g&&Pi(g,"charge")}It();return}const l=t.dataset.merc;if(l){const u=T.summonAll(l);u.length&&(Ht!=null&&!q.grid.get(Ht)&&(Ht=null),te!=null&&!q.grid.get(te)&&(te=null),yu(u))}switch(t.dataset.dbg){case"add5":q.addDice(5);break;case"coins":T.coins+=50;break;case"endday":T.phase==="march"&&T.endDay();break;case"push":T.phase==="march"&&(T.battle.progress+=20);break;case"win":T.phase==="march"&&(T.battle.boss?T.battle.boss.hp=0:T.battle.progress=T.target+15,T.endDay());break;case"fever":Nf();return;case"reset":fa();break;case"keep-meta":{const u=!Hs();try{localStorage.setItem(vy,u?"1":"0"),u||localStorage.removeItem(Jr)}catch{}Qr="",u&&cu(),ae(u?"🏕 영구 기록 유지 켬: 코인·캠프 업그레이드가 원정이 끝나도 남아요":"🧪 영구 기록 유지 끔: 새 원정마다 처음 상태로 시작해요","info"),Su();break}case"reset-tut":hy(),document.querySelectorAll(".modal.show").forEach(u=>u.classList.remove("show")),fa(),It();break;case"reset-meta":try{localStorage.removeItem(Jr)}catch{}Qr="",T.coins=0,T.bought={},fa();break;default:if((h=t.dataset.dbg)!=null&&h.startsWith("fx-")){tc=t.dataset.dbg.slice(3),Nf();return}}It()});function zf(){yi=!yi,Fr=0,document.body.classList.toggle("auto-on",yi),En(),ae(yi?"🤖 자동 전투 시작! 굴리기·배치·강화·출격을 알아서 해요":"🤖 자동 전투 끔","info")}function pM(){const i=gm(T,{merge:(t,e)=>void kc(t,e)});switch(i.type){case"roll":_t.roll();break;case"place":case"take":_t.place();break;case"summon":yu(i.all,"🤖 ");break;case"launch":_t.summon();break;case"merge-ui":case"idle":return}It()}function mM(i){const t=["#ffd34d","#ff9a3c","#4fd18b","#7aa2ff","#ff7aa2","#ffffff"];return Array.from({length:i},()=>{const e=Math.random()*100,n=Math.random()*.5,s=1.4+Math.random()*1.2,a=Math.floor(Math.random()*720-360),r=t[Math.floor(Math.random()*t.length)];return`<i style="left:${e}%;background:${r};animation-delay:${n}s;animation-duration:${s}s;--rot:${a}deg"></i>`}).join("")}function gM(i){const t=i.success?i.boss?"boss":"clear":"fail",e=oo(`ui:emblem-${t}`);if(e)return`<img class="rc-emblem-svg" src="${e}" alt="">`;const n={clear:"달성",boss:"함락",fail:"실패"}[t],s={clear:"#2fae6a",boss:"#8a3fd1",fail:"#c0392b"}[t],a=o=>Array.from({length:6},(l,c)=>{const f=(-80+c*26)*(Math.PI/180),d=50+o*Math.cos(f)*36,h=52+Math.sin(f)*34;return`<ellipse cx="${d.toFixed(1)}" cy="${h.toFixed(1)}" rx="7" ry="3.4" transform="rotate(${(o*f*180/Math.PI+o*60).toFixed(0)} ${d.toFixed(1)} ${h.toFixed(1)})" fill="url(#em-leaf)"/>`}).join("");let r="";return t==="clear"?r=`${a(1)}${a(-1)}
      <circle cx="50" cy="48" r="27" fill="url(#em-gold)" stroke="#fff3c4" stroke-width="2"/>
      <circle cx="50" cy="48" r="21" fill="none" stroke="#b07a10" stroke-width="1.5" stroke-dasharray="2 3"/>
      <path d="M50 32 l4.6 9.6 l10.4 1.4 l-7.6 7.2 l1.9 10.4 l-9.3 -5 l-9.3 5 l1.9 -10.4 l-7.6 -7.2 l10.4 -1.4z" fill="#fff8dc" stroke="#b07a10" stroke-width="1.2"/>`:t==="boss"?r=`${a(1)}${a(-1)}
      <path d="M50 20 l26 9 v18 q0 20 -26 31 q-26 -11 -26 -31 v-18z" fill="url(#em-royal)" stroke="#ffe08a" stroke-width="2.5"/>
      <path d="M36 52 l4 -14 l6 7 l4 -10 l4 10 l6 -7 l4 14z" fill="url(#em-gold)" stroke="#fff3c4" stroke-width="1"/>
      <circle cx="50" cy="35" r="2" fill="#ef5a5a"/><rect x="36" y="53" width="28" height="4" rx="1.5" fill="url(#em-gold)"/>`:r=`<path d="M50 22 l24 8 v17 q0 19 -24 29 q-24 -10 -24 -29 v-17z" fill="url(#em-iron)" stroke="#9aa0b0" stroke-width="2.5"/>
      <path d="M52 24 l-6 14 l7 6 l-8 12 l5 8" stroke="#2a2433" stroke-width="2.5" fill="none" stroke-linejoin="round"/>
      <path d="M38 40 l24 22 M62 40 l-24 22" stroke="#ef5a5a" stroke-width="4" stroke-linecap="round" opacity="0.9"/>`,`<svg class="rc-emblem-svg" viewBox="0 0 100 100" aria-hidden="true">
    <defs>
      <linearGradient id="em-gold" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#fff0a0"/><stop offset="0.5" stop-color="#ffcc3a"/><stop offset="1" stop-color="#d9901a"/></linearGradient>
      <linearGradient id="em-leaf" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#9be37a"/><stop offset="1" stop-color="#3f9a4a"/></linearGradient>
      <linearGradient id="em-royal" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#9a5ae8"/><stop offset="1" stop-color="#4a1f8a"/></linearGradient>
      <linearGradient id="em-iron" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#d4d9e4"/><stop offset="0.55" stop-color="#9aa2b4"/><stop offset="1" stop-color="#666e82"/></linearGradient>
    </defs>
    ${r}
    <path d="M18 76 h64 l-6 8 l6 8 h-64 l6 -8z" fill="${s}" stroke="rgba(255,255,255,0.5)" stroke-width="1"/>
    <text x="50" y="88.5" text-anchor="middle" font-size="11" font-weight="900" fill="#fff" letter-spacing="2">${n}</text>
  </svg>`}function Hf(i,t){const e=ni.get(i),n=dl[e.family],s=e.shop?T.itemLevel(e.shop):0,a=T.cardLevelOf(e.id);return`<button class="ab-card r-${e.rarity} ${a?"merge":""}" ${t?`data-card="${e.id}"`:"disabled"} style="--fam:${n.color}">
    <span class="ab-rar">${a?`⬆ 합치기 Lv${a}→${a+1}`:Wr[e.rarity].name}</span>
    <span class="ab-ico">${e.icon}</span>
    <b class="ab-name">${e.name}</b>
    <span class="ab-fam">${n.name}</span>
    <span class="ab-desc">${e.desc}</span>
    ${e.shop?`<span class="ab-lv">${Ti(e.shop,s)} → ${Ti(e.shop,s+1)}</span>`:""}
  </button>`}function Lu(i,t=""){const e=ni.get(i),n=T.cardLevelOf(i);return`<div class="tt-bless r-${e.rarity}"><b>${e.icon} ${e.name}${n?` Lv${n}/${uh}`:""}</b><span class="tt-tags"><i class="tt-rar">${Wr[e.rarity].name}</i><i style="color:${dl[e.family].color}">${dl[e.family].name}</i></span><p>${e.desc}</p><small>이번 원정에만 효과${t?` · ${t}`:""}</small></div>`.replace(/&/g,"&amp;").replace(/"/g,"&quot;")}function Du(i={}){const t=Array.from({length:qi},(e,n)=>{const s=T.cards[n];if(!s)return'<span class="bless-slot empty" data-tip="빈 가호 칸 · 스테이지를 마치면 가호를 하나 골라 채워요"></span>';const a=ni.get(s),r=Lu(a.id,i.pick?"눌러서 이 가호를 빼고 새 가호로 바꿔요":"");return i.pick?`<button class="bless-slot r-${a.rarity}" data-replace="${n}" data-tip-html="${r}"><span>${a.icon}</span><small>${a.name}</small></button>`:`<span class="bless-slot r-${a.rarity} ${i.mark===n?"just":""}" data-tip-html="${r}">${a.icon}${T.cardLevelOf(a.id)>1?`<i class="bs-lv">${T.cardLevelOf(a.id)}</i>`:""}</span>`}).join("");return`<div class="bless-bar ${i.pick?"pick":""}"><span class="bb-label" data-tip="가호: 이번 원정에만 효과 · ${qi}칸까지, 가득 차면 바꿔서 받아요">✨</span>${t}</div>`}let rc=-1,xn=null;function vM(){const i=T.cardOffer;if(!(i!=null&&i.length))return'<button data-act="to-camp" class="primary rc-go">캠프로 →</button>';if(xn&&i.includes(xn)){const t=ni.get(xn);return`<div class="rc-cards">
      <div class="rc-cards-h">✨ 가호 칸이 가득 찼어요 <span class="muted">새 가호 <b>${t.icon} ${t.name}</b>${go(t.name,"과","와").slice(t.name.length)} 바꿀 가호를 고르세요 · 뺀 가호의 효과는 사라져요</span></div>
      ${Du({pick:!0})}
      <div class="rc-cards-row one">${Hf(xn,!1)}</div>
      <div class="bless-actions"><button class="ghost" data-act="bless-back">← 다른 가호 보기</button><button class="ghost" data-act="bless-skip">이번엔 받지 않기</button></div>
    </div>`}return`<div class="rc-cards">
    <div class="rc-cards-h">✨ 가호 <span class="rc-temp">이번 원정에만 · 원정이 끝나면 사라져요</span><span class="muted">하나를 고르면 캠프로 가요${T.blessFull?" · 칸이 가득 차서 하나를 바꿔야 해요":` · 가호 칸 ${T.cards.length}/${qi}`}</span></div>
    <div class="rc-cards-row">${i.map(t=>Hf(t,!0)).join("")}</div>
  </div>`}const Iu="roopdice.best";function _M(){try{const i=localStorage.getItem(Iu);return i?JSON.parse(i):null}catch{return null}}let ha=null;function xM(){if(ha&&ha.run===T)return ha;const i=T.record(),t=_M(),e=!t||i.score>(t.score??hh(t));if(e)try{localStorage.setItem(Iu,JSON.stringify({...i,at:new Date().toISOString().slice(0,10)}))}catch{}return ha={run:T,rec:i,prev:t,isBest:e},ha}function ku(i){const t=Math.floor(i/60),e=i%60;return`${t}분 ${String(e).padStart(2,"0")}초`}function bM(i){const t=T.zoneRecord(i),e=Math.floor((i-1)/Ds)+1,n=(s,a,r)=>`<div class="zs-tile" data-tip="${a}"><span>${s}</span><b>${r}</b><small>${a}</small></div>`;return`<div class="zone-sum">
    <div class="zs-h">🗺 파트 ${e} 기록 <small>스테이지 ${t.from}~${t.to}</small></div>
    <div class="zs-grid">
      ${n("🚩","클리어",`${t.stages}/${t.to-t.from+1}`)}
      ${n("⚔️","처치",`${t.kills}`)}
      ${n("🪙","번 코인",`${t.coins}`)}
      ${n("🎲","보너스 주사위",`${t.bonusDice}`)}
      ${n("💥","돌파당함",`${t.breaches}`)}
      ${n("⏱","전투 시간",ku(t.time))}
    </div>
    <div class="zs-note">다음 파트는 <b>격자와 남은 주사위를 비우고</b> 시작해요 · ✨ 가호는 그대로</div>
  </div>`}function yM(i){const{rec:t,prev:e,isBest:n}=xM(),s=(r,o,l=!1)=>o==null||r===o?"":(l?r<o:r>o)?'<i class="up">▲</i>':"",a=(r,o,l,c="")=>`<div class="er-tile"><span>${r}</span><b>${l}${c}</b><small>${o}</small></div>`;return`<div class="card end-card ${i?"ok":"bad"}">
    <div class="ec-head">${i?"👑":"🏳"}</div>
    <h1>${i?"원정 성공!":"원정 실패"}</h1>
    <p class="muted">${i?`${Es}개 스테이지를 모두 돌파하고 마왕을 쓰러뜨렸어요`:`스테이지 ${t.reached}에서 목숨을 모두 잃었어요`}</p>
    ${n?`<div class="er-best new">🏆 최고 기록 갱신!${e?` <small>이전 ${e.score.toLocaleString()}점 → ${t.score.toLocaleString()}점</small>`:" <small>첫 기록이에요</small>"}</div>`:""}
    <div class="er-score"><small>점수</small><b>${t.score.toLocaleString()}</b></div>
    <div class="er-grid">
      ${a("🚩","클리어 스테이지",`${t.stages}/${Es}`,s(t.stages,e==null?void 0:e.stages))}
      ${a("⚔️","처치",`${t.kills}`,s(t.kills,e==null?void 0:e.kills))}
      ${a("🪙","번 코인",`${t.coins}`,s(t.coins,e==null?void 0:e.coins))}
      ${a("🛡","출격 용병",`${t.summoned}`)}
      ${a("⚒","강화 성공",`${t.merges}`)}
      ${a("✨","가호",`${t.cards}개`)}
      ${a("💥","돌파당함",`${t.breaches}`)}
      ${a("⏱","전투 시간",ku(t.time))}
    </div>
    ${!n&&e?`<div class="er-best">🏆 최고 기록 ${e.score.toLocaleString()}점 <small>스테이지 ${e.stages}/${Es} 클리어 · 처치 ${e.kills}${e.at?` · ${e.at}`:""}</small></div>`:""}
    <p class="er-foot small muted">점수 = 클리어 스테이지 × 1000 + 처치 × 10 + 번 코인 × 5</p>
    <div class="end-keep">
      <div class="ek-row keep">🏕 남아요 <b>🪙 ${T.coins}</b> · 캠프 업그레이드 <b>${Object.values(T.bought).reduce((r,o)=>r+o,0)}단계</b></div>
      <div class="ek-row lose">✨ 사라져요 <b>가호 ${T.cards.length}개</b> (이번 원정에만 효과)</div>
    </div>
    <button data-act="restart" class="primary">새 원정 시작</button>
  </div>`}function MM(i){const t=i.coinParts,e=i.success?i.boss?"보스 격파!":"목표 달성!":i.boss?"보스 공략 실패":"목표 미달";i.boss?i.success:i.success?`${Math.max(0,Math.floor(i.progress-i.target))}`:`${Math.max(0,Math.ceil(i.target-i.progress))}`,[i.boss?`<div class="rc-chip"><span>👑</span><b>${i.success?"격파":"생존"}</b><small>보스</small></div>`:`<div class="rc-chip"><span>🚩</span><b>${Math.floor(i.progress)}<i>/${i.target}m</i></b><small>전선</small></div>`,`<div class="rc-chip"><span>⚔️</span><b>${i.kills}</b><small>처치</small></div>`,`<div class="rc-chip ${i.breaches?"warn":""}"><span>💥</span><b>${i.breaches}</b><small>돌파당함</small></div>`].join("");const n=[];return t&&(n.push(`<div class="rc-row"><span>기본 보상</span><b>+${t.base}</b></div>`),t.boss&&n.push(`<div class="rc-row"><span>👑 보스 격파</span><b>+${t.boss}</b></div>`),t.overshoot&&n.push(`<div class="rc-row"><span>🚩 목표 초과 거리</span><b>+${t.overshoot}</b></div>`),i.boss&&i.success&&n.push(`<div class="rc-row tb"><span>⏱ 남은 시간 ${i.timeLeft}초</span><b>+${t.time}</b></div>`),t.bonus&&n.push(`<div class="rc-row"><span>💀 보너스 시간 처치</span><b>+${t.bonus}</b></div>`)),`<div class="card result-card v2 mini ${i.success?"ok":"bad"} ${i.boss?"boss":""}">
    <div class="rc-emblem">${gM(i)}</div>
    <div class="rc-kicker">${We[ts(i.day)].icon} 스테이지 ${i.day} · ${Pa(i.day)}</div>
    <h2 class="rc-title">${i.success?i.boss?"보스 격파!":"스테이지 클리어!":e}</h2>
    ${i.flagLost?`<p class="rc-sub lose">💔 파트 실패 · 목숨 -1 (남은 목숨 ${T.flags})<br><small>파트 첫 스테이지(스테이지 ${T.partStart(i.day)})부터 다시 · 주사위·격자는 비우고 ✨ 가호는 그대로</small></p>`:""}
    ${i.boss&&i.success?bM(i.day):""}
    ${vM()}
  </div>`}async function SM(){var a;const i=T.lastResult,t=xt("dayfx");Qi=!0,Ht=null,te=null,It();const e=i.success,n=e?i.boss?"거점 함락!":"목표 달성!":i.boss?"공략 실패…":"후퇴…",s=e?`<span class="coin-up">🪙 +<b id="coin-count">0</b></span>${i.boss&&((a=i.coinParts)!=null&&a.time)?`<span class="time-bonus">⏱ 남은 ${i.timeLeft}초 보너스 🪙 +${i.coinParts.time}</span>`:""}`:'<span class="flag-lost">💔 목숨 -1</span>';if(t.innerHTML=`
    ${e?'<div class="rays"></div>':'<div class="vignette"></div>'}
    <div class="dayfx-title">${n}</div>
    <div class="dayfx-sub">${s}</div>
    ${e?`<div class="confetti">${mM(70)}</div>`:""}`,t.className=`dayfx show ${e?"win":"lose"}`,document.body.classList.add(e?"day-win":"day-lose"),e){_t.victory();const r=()=>document.getElementById("coin-count");for(let o=1;o<=12;o++)setTimeout(()=>r()&&(r().textContent=String(Math.round(i.coins*o/12))),500+o*60)}else _t.defeat(),setTimeout(()=>{eo=T.flags,_t.crack(),po()},700);await new Promise(r=>setTimeout(r,e?2300:2500)),t.className="dayfx",document.body.classList.remove("day-win","day-lose"),eo=-1,Qi=!1,It()}let Gf=performance.now(),sl=T.phase,oc=0,Vf=-1,Wf=-1,al=0,Xf=!1,qf="";function Uu(i){const t=Math.max(0,Math.min(.05,(i-Gf)/1e3));Gf=i;const e=ze||Ps||ru()?0:t*ai,n=Math.max(1,Math.ceil(e/.02)),s=[];for(let l=0;l<n;l++)s.push(...T.tick(e/n));if(Af.push(s),Af.draw(T.battle,T.target,e),q.rolling){yr||xa();const l=document.getElementById("roll-bar");l&&(l.style.width=`${q.rollProgress()*100}%`);const c=q.rolling.die,f=q.rollProgress();gi.ok&&gi.drawRolling(c.faces,c.pips,c.id,f,io(c.cells.length));const d=document.getElementById("rolling-die");i>wf&&f<.92&&(wf=i+50+f*220,_t.tick(),d&&(d.textContent=String(1+Math.floor(Math.random()*c.faces)),d.style.transform=`rotate(${Math.floor(Math.random()*60-30)}deg)`)),yr=!0}else yr&&(yr=!1,no=performance.now()+400,Mr=performance.now(),Cn=null,Fa!=="mouse"&&(me=null),_t.place(),q.pending&&Ht!=null&&(sc=q.pending.id,il=!0),Me||It(),q.pending&&!_a()&&Pf(q.pending));if(il&&!_a()&&(il=!1,sc=null,q.pending&&(no=performance.now()+400,Mr=performance.now(),_t.place(),Me||It(),Pf(q.pending))),!yi&&!ze&&(bn.roll||bn.place)&&T.phase==="march"&&!Me&&!Ps&&!Qi&&!T.gridLocked){const l=performance.now();q.pending?!_a()&&l-Mr>=700&&(mc(T)?bn.place&&Ht==null&&!Te&&ph(T)&&(el=l,_t.place(),It()):(bn.roll=!1,bn.place=!1,uu(),En(),_t.fail(),ae("자리가 없어서 자동 굴리기·배치를 껐어요. 합치기나 비우기로 자리를 만든 뒤 다시 켜세요","bad"))):bn.roll&&!q.rolling&&q.unconfirmed>0&&l-el>=500&&l-Mr>=500&&q.roll()&&(el=l,_t.roll(),xa())}yi&&!ze&&T.phase==="march"&&!Me&&!Ps&&!Qi&&!Te&&(Fr+=e,Fr>=.6&&(Fr=0,pM())),s.some(l=>l.type==="breach")&&_t.fail(),s.some(l=>l.type==="guard")&&_t.place(),s.some(l=>l.type==="boss-down")&&_t.fever(),s.some(l=>l.type==="kill"&&l.reward==="dice")&&_t.place(),s.some(l=>l.type==="kill"&&l.reward==="coin")&&_t.coin();for(const l of s)l.type==="loot"&&(_t.coin(),_t.sparkle(),eM(l.kind,l.kind==="volley"&&l.xs.length>0?`적 ${l.xs.length}명 명중!`:""));const a=s.find(l=>l.type==="strike");a&&a.type==="strike"&&(_t.fever(),Pi(document.body,"flash"),ae(`☄️ 운명의 일격! 적 ${a.xs.length}명에게 ${a.dmg} 피해`,"ok")),T.history.length!==oc?(oc=T.history.length,sl=T.phase,T.history.length>0&&SM()):T.phase!==sl?(sl=T.phase,Me||It()):(q.unconfirmed!==Vf||q.exp!==Wf)&&(Vf=q.unconfirmed,Wf=q.exp,Me||(xa(),ro()));const r=q.isFever();T.feverEnded&&(T.feverEnded=!1,nc=0,_t.fail(),ae("⏱ 피버 끝! 평소대로 돌아왔어요","info")),Xf&&!r&&!Me&&It(),Xf=r,(T.phase==="camp"||T.deckOverCamp)&&Uy.draw(i/1e3,Math.min(.05,t),$n(T.upcomingDay),T.deck),al+=t,al>.1&&(al=0,po(),mu()),requestAnimationFrame(Uu),ky();const o=`${T.phase}|${T.goalReached}|${T.prep}|${T.deck.map(l=>T.canSummon(l)?1:0).join("")}`;o!==qf&&(qf=o,ro())}It();requestAnimationFrame(Uu);
