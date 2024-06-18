"use strict";(self.webpackChunkturf_www=self.webpackChunkturf_www||[]).push([[65746],{66007:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>a});var r=s(74848),n=s(28453);s(54550),s(36145),s(78478);const i={title:"points"},l=void 0,o={id:"api/points",title:"points",description:"Description",source:"@site/versioned_docs/version-6.5.0/api/points.mdx",sourceDirName:"api",slug:"/api/points",permalink:"/docs/6.5.0/api/points",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/versioned_docs/version-6.5.0/api/points.mdx",tags:[],version:"6.5.0",frontMatter:{title:"points"},sidebar:"apiSidebar",previous:{title:"pNormDistance",permalink:"/docs/6.5.0/api/pNormDistance"},next:{title:"polygons",permalink:"/docs/6.5.0/api/polygons"}},d={},a=[{value:"Description",id:"description",level:3},{value:"Parameters",id:"parameters",level:3},{value:"Returns",id:"returns",level:3},{value:"Examples",id:"examples",level:3},{value:"Installation",id:"installation",level:3}];function c(e){const t={a:"a",code:"code",em:"em",h3:"h3",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h3,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(t.p,{children:["Creates a ",(0,r.jsx)(t.a,{href:"https://tools.ietf.org/html/rfc7946#section-3.1.2",children:"Point"})," ",(0,r.jsx)(t.a,{href:"https://tools.ietf.org/html/rfc7946#section-3.3",children:"FeatureCollection"})," from an Array of Point coordinates."]}),"\n",(0,r.jsx)(t.h3,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Name"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"coordinates"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.strong,{children:"Array<Array<number>>"})}),(0,r.jsx)(t.td,{children:"an array of Points"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsxs)(t.td,{children:["properties",(0,r.jsx)("i",{children:"?"})]}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.strong,{children:"Object"})}),(0,r.jsxs)(t.td,{children:["Translate these properties to each Feature ",(0,r.jsx)(t.em,{children:"(default {})"})]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsxs)(t.td,{children:["options",(0,r.jsx)("i",{children:"?"})]}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.strong,{children:"Object"})}),(0,r.jsxs)(t.td,{children:["Optional Parameters ",(0,r.jsx)(t.em,{children:"(default {})"})]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsxs)(t.td,{children:["options.bbox",(0,r.jsx)("i",{children:"?"})]}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.strong,{children:"Array<number>"})}),(0,r.jsx)(t.td,{children:"Bounding Box Array [west, south, east, north] associated with the FeatureCollection"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsxs)(t.td,{children:["options.id",(0,r.jsx)("i",{children:"?"})]}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.strong,{children:"string | number"})}),(0,r.jsx)(t.td,{children:"Identifier associated with the FeatureCollection"})]})]})]}),"\n",(0,r.jsx)(t.h3,{id:"returns",children:"Returns"}),"\n",(0,r.jsx)("ul",{children:(0,r.jsxs)(t.p,{children:[(0,r.jsxs)(t.strong,{children:[(0,r.jsx)(t.a,{href:"https://tools.ietf.org/html/rfc7946#section-3.3",children:"FeatureCollection"}),"<",(0,r.jsx)(t.a,{href:"https://tools.ietf.org/html/rfc7946#section-3.1.2",children:"Point"}),">"]})," Point Feature"]})}),"\n",(0,r.jsx)(t.h3,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-javascript",children:"var points = turf.points([\n  [-75, 39],\n  [-80, 45],\n  [-78, 50],\n]);\n\n//=points\n"})}),"\n",(0,r.jsx)(t.h3,{id:"installation",children:"Installation"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-javascript",children:'$ npm install @turf/helpers\n\nimport { points } from "@turf/helpers";\nconst result = points(...);\n'})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-javascript",children:'$ npm install @turf/turf\n\nimport * as turf from "@turf/turf";\nconst result = turf.points(...);\n'})})]})}function h(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},54550:(e,t,s)=>{s.d(t,{B8d:()=>pe.A,BoU:()=>J.A,Bqz:()=>O.A,Bw9:()=>z.A,C0c:()=>me.A,CNZ:()=>G.Ay,CRN:()=>a.A,EUY:()=>se.A,EwI:()=>x.A,FU4:()=>ge.F,Fc$:()=>te.A,Fod:()=>o.A,FsR:()=>$.A,GWP:()=>Be.A,Gdr:()=>b.A,Glg:()=>L.A,IoC:()=>w.A,JQ7:()=>Z.A,K9N:()=>P.A,KCZ:()=>Fe.A,KrA:()=>ie.A,LNI:()=>r.A,Lrk:()=>we.Lr,Ms8:()=>l.A,NAY:()=>f.A,O9B:()=>Pe.A,PVF:()=>u.A,Qk1:()=>y.A,QwJ:()=>D.A,Qwm:()=>q.A,REH:()=>p.A,TcI:()=>h.A,UUz:()=>d.A,Vwd:()=>_e.A,W1F:()=>N.A,W26:()=>Y.A,WRA:()=>we.WR,Wcw:()=>U.A,XM1:()=>A.A,Zqw:()=>ce.A,_6q:()=>Ae.A,_Jg:()=>X.A,_eC:()=>ve._e,a1F:()=>Ne.A,bmV:()=>fe.A,cS4:()=>Re.A,dKf:()=>Ie.A,dcc:()=>_.A,eZr:()=>ue.A,g52:()=>we.g5,gP4:()=>H.A,gXo:()=>m.A,hq2:()=>T.A,iv2:()=>ye.A,j_:()=>B.A,kJI:()=>F.A,kVe:()=>V.A,kg7:()=>v.A,n1:()=>we.n1,n1W:()=>j.A,nIv:()=>oe.A,nUT:()=>W.A,nYW:()=>k.A,ne9:()=>E.A,nj9:()=>i.A,pPd:()=>he.A,pw2:()=>xe.A,qMT:()=>M.A,qS_:()=>le.A,ra8:()=>ke.A,rb:()=>je.A,rkH:()=>ee.A,rmV:()=>re.A,tLh:()=>de.A,uO7:()=>ae.A,ucs:()=>R.A,usj:()=>be.us,v4M:()=>ne.A,vKl:()=>c.A,vh2:()=>g.A,wdR:()=>Q.A,wiw:()=>we.wi,xCI:()=>C.A,xYr:()=>I.A,xvE:()=>K.A,y$5:()=>Ce.A,y5H:()=>n.A,ywB:()=>S.A,zY8:()=>ge.z,zx7:()=>we.zx});var r=s(27082),n=s(57941),i=s(50360),l=s(64335),o=s(44660),d=s(90301),a=s(47109),c=s(26584),h=s(102),A=s(59788),p=s(58658),x=s(47969),j=s(96338),u=s(33922),m=s(25903),f=s(12102),g=s(17450),v=s(2343),w=s(30669),b=s(29307),y=s(75917),k=s(39654),F=s(31234),C=(s(22608),s(69399)),N=s(37028),P=s(2116),I=s(18034),R=s(96221),_=s(67604),B=s(96558),W=s(37654),D=s(89481),U=s(90999),q=s(20491),z=s(50802),E=s(59895),M=s(18743),T=s(83811),K=s(51204),O=s(40368),V=s(78640),Y=s(91988),J=s(46021),L=s(52282),Q=s(75448),Z=s(86069),$=s(82861),G=s(65875),H=s(6773),S=s(5266),X=s(20790),ee=s(46156),te=s(7743),se=s(78664),re=s(7861),ne=s(46977),ie=s(38197),le=(s(74169),s(5486)),oe=s(91349),de=s(11557),ae=s(17788),ce=(s(58649),s(28297),s(64284),s(50347),s(20145),s(27296),s(1958),s(3327),s(64078),s(55263),s(22900),s(40231)),he=s(37601),Ae=(s(17885),s(52170),s(57784)),pe=s(13012),xe=s(53416),je=s(75843),ue=s(87836),me=s(29611),fe=(s(66093),s(19117)),ge=(s(25590),s(38220),s(2811)),ve=s(60073),we=(s(67925),s(93279)),be=(s(45046),s(29987)),ye=s(50365),ke=s(57468),Fe=s(14657),Ce=s(95475),Ne=s(39721),Pe=s(68526),Ie=s(33102),Re=s(84071),_e=s(51465),Be=s(83185)}}]);