"use strict";(self.webpackChunkturf_www=self.webpackChunkturf_www||[]).push([[24842],{47431:(e,r,n)=>{n.r(r),n.d(r,{Map0:()=>p,assets:()=>h,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>c,toc:()=>A});var s=n(74848),i=n(28453),t=n(54550),d=n(36145),l=n(78478);const a={title:"rewind"},o=void 0,c={id:"api/rewind",title:"rewind",description:"Description",source:"@site/versioned_docs/version-6.5.0/api/rewind.mdx",sourceDirName:"api",slug:"/api/rewind",permalink:"/docs/6.5.0/api/rewind",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/versioned_docs/version-6.5.0/api/rewind.mdx",tags:[],version:"6.5.0",frontMatter:{title:"rewind"},sidebar:"apiSidebar",previous:{title:"flip",permalink:"/docs/6.5.0/api/flip"},next:{title:"round",permalink:"/docs/6.5.0/api/round"}},h={},A=[{value:"Description",id:"description",level:3},{value:"Parameters",id:"parameters",level:3},{value:"Returns",id:"returns",level:3},{value:"Examples",id:"examples",level:3},{value:"Installation",id:"installation",level:3}];function p(){var e=t.n1([[[121,-29],[138,-29],[138,-18],[121,-18],[121,-29]]]),r={rewind:t.KrA(e)};return(0,s.jsx)(d.A,{addToMap:r})}function x(e){const r={a:"a",code:"code",em:"em",h3:"h3",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.h3,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(r.p,{children:["Rewind ",(0,s.jsx)(r.a,{href:"https://tools.ietf.org/html/rfc7946#section-3.1.4",children:"(Multi)LineString"})," or ",(0,s.jsx)(r.a,{href:"https://tools.ietf.org/html/rfc7946#section-3.1.6",children:"(Multi)Polygon"})," outer ring counterclockwise and inner rings clockwise (Uses ",(0,s.jsx)(r.a,{href:"http://en.wikipedia.org/wiki/Shoelace_formula",children:"Shoelace Formula"}),")."]}),"\n",(0,s.jsx)(r.h3,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"Name"}),(0,s.jsx)(r.th,{children:"Type"}),(0,s.jsx)(r.th,{children:"Description"})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"geojson"}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.a,{href:"https://tools.ietf.org/html/rfc7946#section-3",children:"GeoJSON"})})}),(0,s.jsx)(r.td,{children:"input GeoJSON Polygon"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsxs)(r.td,{children:["options",(0,s.jsx)("i",{children:"?"})]}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.strong,{children:"Object"})}),(0,s.jsxs)(r.td,{children:["Optional parameters ",(0,s.jsx)(r.em,{children:"(default {})"})]})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsxs)(r.td,{children:["options.reverse",(0,s.jsx)("i",{children:"?"})]}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.strong,{children:"boolean"})}),(0,s.jsxs)(r.td,{children:["enable reverse winding ",(0,s.jsx)(r.em,{children:"(default false)"})]})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsxs)(r.td,{children:["options.mutate",(0,s.jsx)("i",{children:"?"})]}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.strong,{children:"boolean"})}),(0,s.jsxs)(r.td,{children:["allows GeoJSON input to be mutated (significant performance increase if true) ",(0,s.jsx)(r.em,{children:"(default false)"})]})]})]})]}),"\n",(0,s.jsx)(r.h3,{id:"returns",children:"Returns"}),"\n",(0,s.jsx)("ul",{children:(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:(0,s.jsx)(r.a,{href:"https://tools.ietf.org/html/rfc7946#section-3",children:"GeoJSON"})})," rewind Polygon"]})}),"\n",(0,s.jsx)(r.h3,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-javascript",children:"var polygon = turf.polygon([\n  [\n    [121, -29],\n    [138, -29],\n    [138, -18],\n    [121, -18],\n    [121, -29],\n  ],\n]);\n\nvar rewind = turf.rewind(polygon);\n"})}),"\n","\n",(0,s.jsx)(l.A,{children:()=>(0,s.jsx)(p,{})}),"\n",(0,s.jsx)(r.h3,{id:"installation",children:"Installation"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-javascript",children:'$ npm install @turf/rewind\n\nimport { rewind } from "@turf/rewind";\nconst result = rewind(...);\n'})}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-javascript",children:'$ npm install @turf/turf\n\nimport * as turf from "@turf/turf";\nconst result = turf.rewind(...);\n'})})]})}function u(e={}){const{wrapper:r}={...(0,i.R)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(x,{...e})}):x(e)}},54550:(e,r,n)=>{n.d(r,{B8d:()=>pe.A,BoU:()=>D.A,Bqz:()=>E.A,Bw9:()=>W.A,C0c:()=>fe.A,CNZ:()=>Z.Ay,CRN:()=>o.A,EUY:()=>ne.A,EwI:()=>x.A,FU4:()=>we.F,Fc$:()=>re.A,Fod:()=>l.A,FsR:()=>Q.A,GWP:()=>Ie.A,Gdr:()=>b.A,Glg:()=>L.A,IoC:()=>v.A,JQ7:()=>Y.A,K9N:()=>F.A,KCZ:()=>Ne.A,KrA:()=>te.A,LNI:()=>s.A,Lrk:()=>ve.Lr,Ms8:()=>d.A,NAY:()=>m.A,O9B:()=>Fe.A,PVF:()=>j.A,Qk1:()=>k.A,QwJ:()=>J.A,Qwm:()=>U.A,REH:()=>p.A,TcI:()=>h.A,UUz:()=>a.A,Vwd:()=>Ce.A,W1F:()=>_.A,W26:()=>T.A,WRA:()=>ve.WR,Wcw:()=>O.A,XM1:()=>A.A,Zqw:()=>ce.A,_6q:()=>Ae.A,_Jg:()=>X.A,_eC:()=>ge._e,a1F:()=>_e.A,bmV:()=>me.A,cS4:()=>Se.A,dKf:()=>Me.A,dcc:()=>C.A,eZr:()=>je.A,g52:()=>ve.g5,gP4:()=>$.A,gXo:()=>f.A,hq2:()=>z.A,iv2:()=>ke.A,j_:()=>I.A,kJI:()=>N.A,kVe:()=>K.A,kg7:()=>g.A,n1:()=>ve.n1,n1W:()=>u.A,nIv:()=>le.A,nUT:()=>P.A,nYW:()=>y.A,ne9:()=>G.A,nj9:()=>t.A,pPd:()=>he.A,pw2:()=>xe.A,qMT:()=>q.A,qS_:()=>de.A,ra8:()=>ye.A,rb:()=>ue.A,rkH:()=>ee.A,rmV:()=>se.A,tLh:()=>ae.A,uO7:()=>oe.A,ucs:()=>S.A,usj:()=>be.us,v4M:()=>ie.A,vKl:()=>c.A,vh2:()=>w.A,wdR:()=>V.A,wiw:()=>ve.wi,xCI:()=>R.A,xYr:()=>M.A,xvE:()=>B.A,y$5:()=>Re.A,y5H:()=>i.A,ywB:()=>H.A,zY8:()=>we.z,zx7:()=>ve.zx});var s=n(27082),i=n(57941),t=n(50360),d=n(64335),l=n(44660),a=n(90301),o=n(47109),c=n(26584),h=n(102),A=n(59788),p=n(58658),x=n(47969),u=n(96338),j=n(33922),f=n(25903),m=n(12102),w=n(17450),g=n(2343),v=n(30669),b=n(29307),k=n(75917),y=n(39654),N=n(31234),R=(n(22608),n(69399)),_=n(37028),F=n(2116),M=n(18034),S=n(96221),C=n(67604),I=n(96558),P=n(37654),J=n(89481),O=n(90999),U=n(20491),W=n(50802),G=n(59895),q=n(18743),z=n(83811),B=n(51204),E=n(40368),K=n(78640),T=n(91988),D=n(46021),L=n(52282),V=n(75448),Y=n(86069),Q=n(82861),Z=n(65875),$=n(6773),H=n(5266),X=n(20790),ee=n(46156),re=n(7743),ne=n(78664),se=n(7861),ie=n(46977),te=n(38197),de=(n(74169),n(5486)),le=n(91349),ae=n(11557),oe=n(17788),ce=(n(58649),n(28297),n(64284),n(50347),n(20145),n(27296),n(1958),n(3327),n(64078),n(55263),n(22900),n(40231)),he=n(37601),Ae=(n(17885),n(52170),n(57784)),pe=n(13012),xe=n(53416),ue=n(75843),je=n(87836),fe=n(29611),me=(n(66093),n(19117)),we=(n(25590),n(38220),n(2811)),ge=n(60073),ve=(n(67925),n(93279)),be=(n(45046),n(29987)),ke=n(50365),ye=n(57468),Ne=n(14657),Re=n(95475),_e=n(39721),Fe=n(68526),Me=n(33102),Se=n(84071),Ce=n(51465),Ie=n(83185)}}]);