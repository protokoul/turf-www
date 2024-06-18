"use strict";(self.webpackChunkturf_www=self.webpackChunkturf_www||[]).push([[46584],{21673:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>l});var i=t(74848),s=t(28453);t(54550),t(36145),t(78478);const r={title:"pointToLineDistance"},o=void 0,a={id:"api/pointToLineDistance",title:"pointToLineDistance",description:"Description",source:"@site/versioned_docs/version-6.5.0/api/pointToLineDistance.mdx",sourceDirName:"api",slug:"/api/pointToLineDistance",permalink:"/docs/6.5.0/api/pointToLineDistance",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/versioned_docs/version-6.5.0/api/pointToLineDistance.mdx",tags:[],version:"6.5.0",frontMatter:{title:"pointToLineDistance"},sidebar:"apiSidebar",previous:{title:"pointOnFeature",permalink:"/docs/6.5.0/api/pointOnFeature"},next:{title:"polygonTangents",permalink:"/docs/6.5.0/api/polygonTangents"}},d={},l=[{value:"Description",id:"description",level:3},{value:"Parameters",id:"parameters",level:3},{value:"Returns",id:"returns",level:3},{value:"Examples",id:"examples",level:3},{value:"Installation",id:"installation",level:3}];function c(e){const n={a:"a",code:"code",em:"em",h3:"h3",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h3,{id:"description",children:"Description"}),"\n",(0,i.jsxs)(n.p,{children:["Returns the minimum distance between a ",(0,i.jsx)(n.a,{href:"https://tools.ietf.org/html/rfc7946#section-3.1.2",children:"Point"})," and a ",(0,i.jsx)(n.a,{href:"https://tools.ietf.org/html/rfc7946#section-3.1.4",children:"LineString"}),", being the distance from a line the\nminimum distance between the point and any segment of the ",(0,i.jsx)(n.code,{children:"LineString"}),"."]}),"\n",(0,i.jsx)(n.h3,{id:"parameters",children:"Parameters"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Name"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"pt"}),(0,i.jsx)(n.td,{children:(0,i.jsxs)(n.strong,{children:[(0,i.jsx)(n.a,{href:"https://tools.ietf.org/html/rfc7946#section-3.2",children:"Feature"}),"<",(0,i.jsx)(n.a,{href:"https://tools.ietf.org/html/rfc7946#section-3.1.2",children:"Point"}),"> | Array<number>"]})}),(0,i.jsx)(n.td,{children:"Feature or Geometry"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"line"}),(0,i.jsx)(n.td,{children:(0,i.jsxs)(n.strong,{children:[(0,i.jsx)(n.a,{href:"https://tools.ietf.org/html/rfc7946#section-3.2",children:"Feature"}),"<",(0,i.jsx)(n.a,{href:"https://tools.ietf.org/html/rfc7946#section-3.1.4",children:"LineString"}),">"]})}),(0,i.jsx)(n.td,{children:"GeoJSON Feature or Geometry"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsxs)(n.td,{children:["options",(0,i.jsx)("i",{children:"?"})]}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.strong,{children:"Object"})}),(0,i.jsxs)(n.td,{children:["Optional parameters ",(0,i.jsx)(n.em,{children:"(default {})"})]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsxs)(n.td,{children:["options.units",(0,i.jsx)("i",{children:"?"})]}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.strong,{children:"string"})}),(0,i.jsxs)(n.td,{children:["can be anything supported by turf/convertLength (ex: degrees, radians, miles, or kilometers) ",(0,i.jsx)(n.em,{children:'(default "kilometers")'})]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsxs)(n.td,{children:["options.method",(0,i.jsx)("i",{children:"?"})]}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.strong,{children:"string"})}),(0,i.jsxs)(n.td,{children:["wether to calculate the distance based on geodesic (spheroid) or planar (flat) method. Valid options are 'geodesic' or 'planar'. ",(0,i.jsx)(n.em,{children:'(default "geodesic")'})]})]})]})]}),"\n",(0,i.jsx)(n.h3,{id:"returns",children:"Returns"}),"\n",(0,i.jsx)("ul",{children:(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"number"})," distance between point and line"]})}),"\n",(0,i.jsx)(n.h3,{id:"examples",children:"Examples"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:'var pt = turf.point([0, 0]);\nvar line = turf.lineString([\n  [1, 1],\n  [-1, 1],\n]);\n\nvar distance = turf.pointToLineDistance(pt, line, { units: "miles" });\n//=69.11854715938406\n'})}),"\n",(0,i.jsx)(n.h3,{id:"installation",children:"Installation"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:'$ npm install @turf/point-to-line-distance\n\nimport { pointToLineDistance } from "@turf/point-to-line-distance";\nconst result = pointToLineDistance(...);\n'})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:'$ npm install @turf/turf\n\nimport * as turf from "@turf/turf";\nconst result = turf.pointToLineDistance(...);\n'})})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},54550:(e,n,t)=>{t.d(n,{B8d:()=>Ae.A,BoU:()=>V.A,Bqz:()=>E.A,Bw9:()=>O.A,C0c:()=>me.A,CNZ:()=>Z.Ay,CRN:()=>l.A,EUY:()=>te.A,EwI:()=>x.A,FU4:()=>ge.F,Fc$:()=>ne.A,Fod:()=>a.A,FsR:()=>Q.A,GWP:()=>Ce.A,Gdr:()=>b.A,Glg:()=>J.A,IoC:()=>w.A,JQ7:()=>Y.A,K9N:()=>F.A,KCZ:()=>ke.A,KrA:()=>re.A,LNI:()=>i.A,Lrk:()=>we.Lr,Ms8:()=>o.A,NAY:()=>f.A,O9B:()=>Fe.A,PVF:()=>j.A,Qk1:()=>L.A,QwJ:()=>P.A,Qwm:()=>W.A,REH:()=>A.A,TcI:()=>h.A,UUz:()=>d.A,Vwd:()=>_e.A,W1F:()=>y.A,W26:()=>M.A,WRA:()=>we.WR,Wcw:()=>S.A,XM1:()=>p.A,Zqw:()=>ce.A,_6q:()=>pe.A,_Jg:()=>X.A,_eC:()=>ve._e,a1F:()=>ye.A,bmV:()=>fe.A,cS4:()=>Re.A,dKf:()=>Ne.A,dcc:()=>_.A,eZr:()=>je.A,g52:()=>we.g5,gP4:()=>$.A,gXo:()=>m.A,hq2:()=>z.A,iv2:()=>Le.A,j_:()=>C.A,kJI:()=>k.A,kVe:()=>G.A,kg7:()=>v.A,n1:()=>we.n1,n1W:()=>u.A,nIv:()=>ae.A,nUT:()=>I.A,nYW:()=>T.A,ne9:()=>U.A,nj9:()=>r.A,pPd:()=>he.A,pw2:()=>xe.A,qMT:()=>q.A,qS_:()=>oe.A,ra8:()=>Te.A,rb:()=>ue.A,rkH:()=>ee.A,rmV:()=>ie.A,tLh:()=>de.A,uO7:()=>le.A,ucs:()=>R.A,usj:()=>be.us,v4M:()=>se.A,vKl:()=>c.A,vh2:()=>g.A,wdR:()=>K.A,wiw:()=>we.wi,xCI:()=>D.A,xYr:()=>N.A,xvE:()=>B.A,y$5:()=>De.A,y5H:()=>s.A,ywB:()=>H.A,zY8:()=>ge.z,zx7:()=>we.zx});var i=t(27082),s=t(57941),r=t(50360),o=t(64335),a=t(44660),d=t(90301),l=t(47109),c=t(26584),h=t(102),p=t(59788),A=t(58658),x=t(47969),u=t(96338),j=t(33922),m=t(25903),f=t(12102),g=t(17450),v=t(2343),w=t(30669),b=t(29307),L=t(75917),T=t(39654),k=t(31234),D=(t(22608),t(69399)),y=t(37028),F=t(2116),N=t(18034),R=t(96221),_=t(67604),C=t(96558),I=t(37654),P=t(89481),S=t(90999),W=t(20491),O=t(50802),U=t(59895),q=t(18743),z=t(83811),B=t(51204),E=t(40368),G=t(78640),M=t(91988),V=t(46021),J=t(52282),K=t(75448),Y=t(86069),Q=t(82861),Z=t(65875),$=t(6773),H=t(5266),X=t(20790),ee=t(46156),ne=t(7743),te=t(78664),ie=t(7861),se=t(46977),re=t(38197),oe=(t(74169),t(5486)),ae=t(91349),de=t(11557),le=t(17788),ce=(t(58649),t(28297),t(64284),t(50347),t(20145),t(27296),t(1958),t(3327),t(64078),t(55263),t(22900),t(40231)),he=t(37601),pe=(t(17885),t(52170),t(57784)),Ae=t(13012),xe=t(53416),ue=t(75843),je=t(87836),me=t(29611),fe=(t(66093),t(19117)),ge=(t(25590),t(38220),t(2811)),ve=t(60073),we=(t(67925),t(93279)),be=(t(45046),t(29987)),Le=t(50365),Te=t(57468),ke=t(14657),De=t(95475),ye=t(39721),Fe=t(68526),Ne=t(33102),Re=t(84071),_e=t(51465),Ce=t(83185)}}]);