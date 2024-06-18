"use strict";(self.webpackChunkturf_www=self.webpackChunkturf_www||[]).push([[69576],{26736:(e,t,n)=>{n.r(t),n.d(t,{Map0:()=>A,assets:()=>h,contentTitle:()=>l,default:()=>j,frontMatter:()=>o,metadata:()=>c,toc:()=>p});var i=n(74848),s=n(28453),r=n(54550),d=n(36145),a=n(78478);const o={title:"destination"},l=void 0,c={id:"api/destination",title:"destination",description:"Description",source:"@site/versioned_docs/version-6.5.0/api/destination.mdx",sourceDirName:"api",slug:"/api/destination",permalink:"/docs/6.5.0/api/destination",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/versioned_docs/version-6.5.0/api/destination.mdx",tags:[],version:"6.5.0",frontMatter:{title:"destination"},sidebar:"apiSidebar",previous:{title:"centroid",permalink:"/docs/6.5.0/api/centroid"},next:{title:"distance",permalink:"/docs/6.5.0/api/distance"}},h={},p=[{value:"Description",id:"description",level:3},{value:"Parameters",id:"parameters",level:3},{value:"Returns",id:"returns",level:3},{value:"Examples",id:"examples",level:3},{value:"Installation",id:"installation",level:3}];function A(){var e=r.zx7([-75.343,39.984]),t=r.j_(e,50,90,{units:"miles"}),n={point:e,destination:t};return t.properties["marker-color"]="#f00",e.properties["marker-color"]="#0f0",(0,i.jsx)(d.A,{addToMap:n})}function x(e){const t={a:"a",code:"code",em:"em",h3:"h3",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h3,{id:"description",children:"Description"}),"\n",(0,i.jsxs)(t.p,{children:["Takes a ",(0,i.jsx)(t.a,{href:"https://tools.ietf.org/html/rfc7946#section-3.1.2",children:"Point"})," and calculates the location of a destination point given a distance in\ndegrees, radians, miles, or kilometers; and bearing in degrees.\nThis uses the ",(0,i.jsx)(t.a,{href:"http://en.wikipedia.org/wiki/Haversine_formula",children:"Haversine formula"})," to account for global curvature."]}),"\n",(0,i.jsx)(t.h3,{id:"parameters",children:"Parameters"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Name"}),(0,i.jsx)(t.th,{children:"Type"}),(0,i.jsx)(t.th,{children:"Description"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"origin"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.strong,{children:(0,i.jsx)(t.a,{href:"https://tools.ietf.org/html/rfc7946#section-3.1.1",children:"Coord"})})}),(0,i.jsx)(t.td,{children:"starting point"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"distance"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.strong,{children:"number"})}),(0,i.jsx)(t.td,{children:"distance from the origin point"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"bearing"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.strong,{children:"number"})}),(0,i.jsx)(t.td,{children:"ranging from -180 to 180"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsxs)(t.td,{children:["options",(0,i.jsx)("i",{children:"?"})]}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.strong,{children:"Object"})}),(0,i.jsxs)(t.td,{children:["Optional parameters ",(0,i.jsx)(t.em,{children:"(default {})"})]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsxs)(t.td,{children:["options.units",(0,i.jsx)("i",{children:"?"})]}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.strong,{children:"string"})}),(0,i.jsxs)(t.td,{children:["miles, kilometers, degrees, or radians ",(0,i.jsx)(t.em,{children:"(default 'kilometers')"})]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsxs)(t.td,{children:["options.properties",(0,i.jsx)("i",{children:"?"})]}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.strong,{children:"Object"})}),(0,i.jsxs)(t.td,{children:["Translate properties to Point ",(0,i.jsx)(t.em,{children:"(default {})"})]})]})]})]}),"\n",(0,i.jsx)(t.h3,{id:"returns",children:"Returns"}),"\n",(0,i.jsx)("ul",{children:(0,i.jsxs)(t.p,{children:[(0,i.jsxs)(t.strong,{children:[(0,i.jsx)(t.a,{href:"https://tools.ietf.org/html/rfc7946#section-3.2",children:"Feature"}),"<",(0,i.jsx)(t.a,{href:"https://tools.ietf.org/html/rfc7946#section-3.1.2",children:"Point"}),">"]})," destination point"]})}),"\n",(0,i.jsx)(t.h3,{id:"examples",children:"Examples"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-javascript",children:'var point = turf.point([-75.343, 39.984]);\nvar distance = 50;\nvar bearing = 90;\nvar options = { units: "miles" };\n\nvar destination = turf.destination(point, distance, bearing, options);\n'})}),"\n","\n",(0,i.jsx)(a.A,{children:()=>(0,i.jsx)(A,{})}),"\n",(0,i.jsx)(t.h3,{id:"installation",children:"Installation"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-javascript",children:'$ npm install @turf/destination\n\nimport { destination } from "@turf/destination";\nconst result = destination(...);\n'})}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-javascript",children:'$ npm install @turf/turf\n\nimport * as turf from "@turf/turf";\nconst result = turf.destination(...);\n'})})]})}function j(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(x,{...e})}):x(e)}},54550:(e,t,n)=>{n.d(t,{B8d:()=>Ae.A,BoU:()=>Y.A,Bqz:()=>K.A,Bw9:()=>q.A,C0c:()=>me.A,CNZ:()=>$.Ay,CRN:()=>l.A,EUY:()=>ne.A,EwI:()=>x.A,FU4:()=>ge.F,Fc$:()=>te.A,Fod:()=>a.A,FsR:()=>Z.A,GWP:()=>ye.A,Gdr:()=>b.A,Glg:()=>J.A,IoC:()=>w.A,JQ7:()=>Q.A,K9N:()=>R.A,KCZ:()=>Ce.A,KrA:()=>re.A,LNI:()=>i.A,Lrk:()=>we.Lr,Ms8:()=>d.A,NAY:()=>f.A,O9B:()=>Re.A,PVF:()=>u.A,Qk1:()=>k.A,QwJ:()=>W.A,Qwm:()=>U.A,REH:()=>A.A,TcI:()=>h.A,UUz:()=>o.A,Vwd:()=>Te.A,W1F:()=>N.A,W26:()=>V.A,WRA:()=>we.WR,Wcw:()=>z.A,XM1:()=>p.A,Zqw:()=>ce.A,_6q:()=>pe.A,_Jg:()=>X.A,_eC:()=>ve._e,a1F:()=>Ne.A,bmV:()=>fe.A,cS4:()=>Pe.A,dKf:()=>Ie.A,dcc:()=>T.A,eZr:()=>ue.A,g52:()=>we.g5,gP4:()=>G.A,gXo:()=>m.A,hq2:()=>D.A,iv2:()=>ke.A,j_:()=>y.A,kJI:()=>C.A,kVe:()=>O.A,kg7:()=>v.A,n1:()=>we.n1,n1W:()=>j.A,nIv:()=>ae.A,nUT:()=>M.A,nYW:()=>_.A,ne9:()=>B.A,nj9:()=>r.A,pPd:()=>he.A,pw2:()=>xe.A,qMT:()=>E.A,qS_:()=>de.A,ra8:()=>_e.A,rb:()=>je.A,rkH:()=>ee.A,rmV:()=>ie.A,tLh:()=>oe.A,uO7:()=>le.A,ucs:()=>P.A,usj:()=>be.us,v4M:()=>se.A,vKl:()=>c.A,vh2:()=>g.A,wdR:()=>L.A,wiw:()=>we.wi,xCI:()=>F.A,xYr:()=>I.A,xvE:()=>H.A,y$5:()=>Fe.A,y5H:()=>s.A,ywB:()=>S.A,zY8:()=>ge.z,zx7:()=>we.zx});var i=n(27082),s=n(57941),r=n(50360),d=n(64335),a=n(44660),o=n(90301),l=n(47109),c=n(26584),h=n(102),p=n(59788),A=n(58658),x=n(47969),j=n(96338),u=n(33922),m=n(25903),f=n(12102),g=n(17450),v=n(2343),w=n(30669),b=n(29307),k=n(75917),_=n(39654),C=n(31234),F=(n(22608),n(69399)),N=n(37028),R=n(2116),I=n(18034),P=n(96221),T=n(67604),y=n(96558),M=n(37654),W=n(89481),z=n(90999),U=n(20491),q=n(50802),B=n(59895),E=n(18743),D=n(83811),H=n(51204),K=n(40368),O=n(78640),V=n(91988),Y=n(46021),J=n(52282),L=n(75448),Q=n(86069),Z=n(82861),$=n(65875),G=n(6773),S=n(5266),X=n(20790),ee=n(46156),te=n(7743),ne=n(78664),ie=n(7861),se=n(46977),re=n(38197),de=(n(74169),n(5486)),ae=n(91349),oe=n(11557),le=n(17788),ce=(n(58649),n(28297),n(64284),n(50347),n(20145),n(27296),n(1958),n(3327),n(64078),n(55263),n(22900),n(40231)),he=n(37601),pe=(n(17885),n(52170),n(57784)),Ae=n(13012),xe=n(53416),je=n(75843),ue=n(87836),me=n(29611),fe=(n(66093),n(19117)),ge=(n(25590),n(38220),n(2811)),ve=n(60073),we=(n(67925),n(93279)),be=(n(45046),n(29987)),ke=n(50365),_e=n(57468),Ce=n(14657),Fe=n(95475),Ne=n(39721),Re=n(68526),Ie=n(33102),Pe=n(84071),Te=n(51465),ye=n(83185)}}]);