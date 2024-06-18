"use strict";(self.webpackChunkturf_www=self.webpackChunkturf_www||[]).push([[74755],{43887:(e,n,t)=>{t.r(n),t.d(n,{Map0:()=>x,assets:()=>h,contentTitle:()=>c,default:()=>j,frontMatter:()=>d,metadata:()=>o,toc:()=>A});var s=t(74848),r=t(28453),i=t(54550),l=t(36145),a=t(78478);const d={title:"along"},c=void 0,o={id:"api/along",title:"along",description:"Description",source:"@site/versioned_docs/version-6.5.0/api/along.mdx",sourceDirName:"api",slug:"/api/along",permalink:"/docs/6.5.0/api/along",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/versioned_docs/version-6.5.0/api/along.mdx",tags:[],version:"6.5.0",frontMatter:{title:"along"},sidebar:"apiSidebar",next:{title:"area",permalink:"/docs/6.5.0/api/area"}},h={},A=[{value:"Description",id:"description",level:3},{value:"Parameters",id:"parameters",level:3},{value:"Returns",id:"returns",level:3},{value:"Examples",id:"examples",level:3},{value:"Installation",id:"installation",level:3}];function x(){var e=i.wiw([[-83,30],[-84,36],[-78,41]]),n={along:i.Qwm(e,200,{units:"miles"}),line:e};return(0,s.jsx)(l.A,{addToMap:n})}function p(e){const n={a:"a",code:"code",em:"em",h3:"h3",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h3,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(n.p,{children:["Takes a ",(0,s.jsx)(n.a,{href:"https://tools.ietf.org/html/rfc7946#section-3.1.4",children:"LineString"})," and returns a ",(0,s.jsx)(n.a,{href:"https://tools.ietf.org/html/rfc7946#section-3.1.2",children:"Point"})," at a specified distance along the line."]}),"\n",(0,s.jsx)(n.h3,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Name"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"line"}),(0,s.jsx)(n.td,{children:(0,s.jsxs)(n.strong,{children:[(0,s.jsx)(n.a,{href:"https://tools.ietf.org/html/rfc7946#section-3.2",children:"Feature"}),"<",(0,s.jsx)(n.a,{href:"https://tools.ietf.org/html/rfc7946#section-3.1.4",children:"LineString"}),">"]})}),(0,s.jsx)(n.td,{children:"input line"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"distance"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.strong,{children:"number"})}),(0,s.jsx)(n.td,{children:"distance along the line"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{children:["options",(0,s.jsx)("i",{children:"?"})]}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.strong,{children:"Object"})}),(0,s.jsx)(n.td,{children:"Optional parameters"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{children:["options.units",(0,s.jsx)("i",{children:"?"})]}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.strong,{children:"string"})}),(0,s.jsxs)(n.td,{children:["can be degrees, radians, miles, or kilometers ",(0,s.jsx)(n.em,{children:'(default "kilometers")'})]})]})]})]}),"\n",(0,s.jsx)(n.h3,{id:"returns",children:"Returns"}),"\n",(0,s.jsx)("ul",{children:(0,s.jsxs)(n.p,{children:[(0,s.jsxs)(n.strong,{children:[(0,s.jsx)(n.a,{href:"https://tools.ietf.org/html/rfc7946#section-3.2",children:"Feature"}),"<",(0,s.jsx)(n.a,{href:"https://tools.ietf.org/html/rfc7946#section-3.1.2",children:"Point"}),">"]})," Point ",(0,s.jsx)(n.code,{children:"distance"})," ",(0,s.jsx)(n.code,{children:"units"})," along the line"]})}),"\n",(0,s.jsx)(n.h3,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:'var line = turf.lineString([\n  [-83, 30],\n  [-84, 36],\n  [-78, 41],\n]);\nvar options = { units: "miles" };\n\nvar along = turf.along(line, 200, options);\n'})}),"\n","\n",(0,s.jsx)(a.A,{children:()=>(0,s.jsx)(x,{})}),"\n",(0,s.jsx)(n.h3,{id:"installation",children:"Installation"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:'$ npm install @turf/along\n\nimport { along } from "@turf/along";\nconst result = along(...);\n'})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:'$ npm install @turf/turf\n\nimport * as turf from "@turf/turf";\nconst result = turf.along(...);\n'})})]})}function j(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},54550:(e,n,t)=>{t.d(n,{B8d:()=>xe.A,BoU:()=>V.A,Bqz:()=>D.A,Bw9:()=>z.A,C0c:()=>ge.A,CNZ:()=>$.Ay,CRN:()=>c.A,EUY:()=>te.A,EwI:()=>p.A,FU4:()=>fe.F,Fc$:()=>ne.A,Fod:()=>a.A,FsR:()=>Z.A,GWP:()=>Me.A,Gdr:()=>b.A,Glg:()=>Y.A,IoC:()=>w.A,JQ7:()=>O.A,K9N:()=>C.A,KCZ:()=>Ne.A,KrA:()=>ie.A,LNI:()=>s.A,Lrk:()=>we.Lr,Ms8:()=>l.A,NAY:()=>m.A,O9B:()=>Ce.A,PVF:()=>u.A,Qk1:()=>k.A,QwJ:()=>T.A,Qwm:()=>q.A,REH:()=>x.A,TcI:()=>h.A,UUz:()=>d.A,Vwd:()=>ye.A,W1F:()=>_.A,W26:()=>Q.A,WRA:()=>we.WR,Wcw:()=>U.A,XM1:()=>A.A,Zqw:()=>oe.A,_6q:()=>Ae.A,_Jg:()=>X.A,_eC:()=>ve._e,a1F:()=>_e.A,bmV:()=>me.A,cS4:()=>Pe.A,dKf:()=>Ie.A,dcc:()=>y.A,eZr:()=>ue.A,g52:()=>we.g5,gP4:()=>G.A,gXo:()=>g.A,hq2:()=>L.A,iv2:()=>ke.A,j_:()=>M.A,kJI:()=>N.A,kVe:()=>K.A,kg7:()=>v.A,n1:()=>we.n1,n1W:()=>j.A,nIv:()=>ae.A,nUT:()=>W.A,nYW:()=>F.A,ne9:()=>B.A,nj9:()=>i.A,pPd:()=>he.A,pw2:()=>pe.A,qMT:()=>E.A,qS_:()=>le.A,ra8:()=>Fe.A,rb:()=>je.A,rkH:()=>ee.A,rmV:()=>se.A,tLh:()=>de.A,uO7:()=>ce.A,ucs:()=>P.A,usj:()=>be.us,v4M:()=>re.A,vKl:()=>o.A,vh2:()=>f.A,wdR:()=>J.A,wiw:()=>we.wi,xCI:()=>R.A,xYr:()=>I.A,xvE:()=>S.A,y$5:()=>Re.A,y5H:()=>r.A,ywB:()=>H.A,zY8:()=>fe.z,zx7:()=>we.zx});var s=t(27082),r=t(57941),i=t(50360),l=t(64335),a=t(44660),d=t(90301),c=t(47109),o=t(26584),h=t(102),A=t(59788),x=t(58658),p=t(47969),j=t(96338),u=t(33922),g=t(25903),m=t(12102),f=t(17450),v=t(2343),w=t(30669),b=t(29307),k=t(75917),F=t(39654),N=t(31234),R=(t(22608),t(69399)),_=t(37028),C=t(2116),I=t(18034),P=t(96221),y=t(67604),M=t(96558),W=t(37654),T=t(89481),U=t(90999),q=t(20491),z=t(50802),B=t(59895),E=t(18743),L=t(83811),S=t(51204),D=t(40368),K=t(78640),Q=t(91988),V=t(46021),Y=t(52282),J=t(75448),O=t(86069),Z=t(82861),$=t(65875),G=t(6773),H=t(5266),X=t(20790),ee=t(46156),ne=t(7743),te=t(78664),se=t(7861),re=t(46977),ie=t(38197),le=(t(74169),t(5486)),ae=t(91349),de=t(11557),ce=t(17788),oe=(t(58649),t(28297),t(64284),t(50347),t(20145),t(27296),t(1958),t(3327),t(64078),t(55263),t(22900),t(40231)),he=t(37601),Ae=(t(17885),t(52170),t(57784)),xe=t(13012),pe=t(53416),je=t(75843),ue=t(87836),ge=t(29611),me=(t(66093),t(19117)),fe=(t(25590),t(38220),t(2811)),ve=t(60073),we=(t(67925),t(93279)),be=(t(45046),t(29987)),ke=t(50365),Fe=t(57468),Ne=t(14657),Re=t(95475),_e=t(39721),Ce=t(68526),Ie=t(33102),Pe=t(84071),ye=t(51465),Me=t(83185)}}]);