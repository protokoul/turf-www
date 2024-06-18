"use strict";(self.webpackChunkturf_www=self.webpackChunkturf_www||[]).push([[80834],{1957:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>d,contentTitle:()=>o,default:()=>A,frontMatter:()=>i,metadata:()=>a,toc:()=>l});var n=t(74848),s=t(28453);t(54550),t(36145),t(78478);const i={title:"getCoord"},o=void 0,a={id:"api/getCoord",title:"getCoord",description:"Description",source:"@site/versioned_docs/version-6.5.0/api/getCoord.mdx",sourceDirName:"api",slug:"/api/getCoord",permalink:"/docs/6.5.0/api/getCoord",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/versioned_docs/version-6.5.0/api/getCoord.mdx",tags:[],version:"6.5.0",frontMatter:{title:"getCoord"},sidebar:"apiSidebar",previous:{title:"getCluster",permalink:"/docs/6.5.0/api/getCluster"},next:{title:"getCoords",permalink:"/docs/6.5.0/api/getCoords"}},d={},l=[{value:"Description",id:"description",level:3},{value:"Parameters",id:"parameters",level:3},{value:"Returns",id:"returns",level:3},{value:"Examples",id:"examples",level:3},{value:"Installation",id:"installation",level:3}];function c(e){const r={a:"a",code:"code",h3:"h3",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.h3,{id:"description",children:"Description"}),"\n",(0,n.jsx)(r.p,{children:"Unwrap a coordinate from a Point Feature, Geometry or a single coordinate."}),"\n",(0,n.jsx)(r.h3,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Name"}),(0,n.jsx)(r.th,{children:"Type"}),(0,n.jsx)(r.th,{children:"Description"})]})}),(0,n.jsx)(r.tbody,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"coord"}),(0,n.jsx)(r.td,{children:(0,n.jsxs)(r.strong,{children:["Array<number> | ",(0,n.jsx)(r.a,{href:"https://tools.ietf.org/html/rfc7946#section-3.1",children:"Geometry"}),"<",(0,n.jsx)(r.a,{href:"https://tools.ietf.org/html/rfc7946#section-3.1.2",children:"Point"}),"> | ",(0,n.jsx)(r.a,{href:"https://tools.ietf.org/html/rfc7946#section-3.2",children:"Feature"}),"<",(0,n.jsx)(r.a,{href:"https://tools.ietf.org/html/rfc7946#section-3.1.2",children:"Point"}),">"]})}),(0,n.jsx)(r.td,{children:"GeoJSON Point or an Array of numbers"})]})})]}),"\n",(0,n.jsx)(r.h3,{id:"returns",children:"Returns"}),"\n",(0,n.jsx)("ul",{children:(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Array<number>"})," coordinates"]})}),"\n",(0,n.jsx)(r.h3,{id:"examples",children:"Examples"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-javascript",children:"var pt = turf.point([10, 10]);\n\nvar coord = turf.getCoord(pt);\n//= [10, 10]\n"})}),"\n",(0,n.jsx)(r.h3,{id:"installation",children:"Installation"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-javascript",children:'$ npm install @turf/invariant\n\nimport { getCoord } from "@turf/invariant";\nconst result = getCoord(...);\n'})}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-javascript",children:'$ npm install @turf/turf\n\nimport * as turf from "@turf/turf";\nconst result = turf.getCoord(...);\n'})})]})}function A(e={}){const{wrapper:r}={...(0,s.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},54550:(e,r,t)=>{t.d(r,{B8d:()=>pe.A,BoU:()=>Y.A,Bqz:()=>K.A,Bw9:()=>E.A,C0c:()=>ge.A,CNZ:()=>$.Ay,CRN:()=>l.A,EUY:()=>te.A,EwI:()=>u.A,FU4:()=>fe.F,Fc$:()=>re.A,Fod:()=>a.A,FsR:()=>Z.A,GWP:()=>Ue.A,Gdr:()=>w.A,Glg:()=>L.A,IoC:()=>C.A,JQ7:()=>S.A,K9N:()=>P.A,KCZ:()=>ye.A,KrA:()=>ie.A,LNI:()=>n.A,Lrk:()=>Ce.Lr,Ms8:()=>o.A,NAY:()=>j.A,O9B:()=>Pe.A,PVF:()=>m.A,Qk1:()=>b.A,QwJ:()=>q.A,Qwm:()=>B.A,REH:()=>p.A,TcI:()=>A.A,UUz:()=>d.A,Vwd:()=>Ie.A,W1F:()=>N.A,W26:()=>V.A,WRA:()=>Ce.WR,Wcw:()=>z.A,XM1:()=>h.A,Zqw:()=>ce.A,_6q:()=>he.A,_Jg:()=>X.A,_eC:()=>ve._e,a1F:()=>Ne.A,bmV:()=>je.A,cS4:()=>_e.A,dKf:()=>Re.A,dcc:()=>I.A,eZr:()=>me.A,g52:()=>Ce.g5,gP4:()=>H.A,gXo:()=>g.A,hq2:()=>D.A,iv2:()=>be.A,j_:()=>U.A,kJI:()=>y.A,kVe:()=>T.A,kg7:()=>v.A,n1:()=>Ce.n1,n1W:()=>x.A,nIv:()=>ae.A,nUT:()=>W.A,nYW:()=>k.A,ne9:()=>G.A,nj9:()=>i.A,pPd:()=>Ae.A,pw2:()=>ue.A,qMT:()=>M.A,qS_:()=>oe.A,ra8:()=>ke.A,rb:()=>xe.A,rkH:()=>ee.A,rmV:()=>ne.A,tLh:()=>de.A,uO7:()=>le.A,ucs:()=>_.A,usj:()=>we.us,v4M:()=>se.A,vKl:()=>c.A,vh2:()=>f.A,wdR:()=>Q.A,wiw:()=>Ce.wi,xCI:()=>F.A,xYr:()=>R.A,xvE:()=>J.A,y$5:()=>Fe.A,y5H:()=>s.A,ywB:()=>O.A,zY8:()=>fe.z,zx7:()=>Ce.zx});var n=t(27082),s=t(57941),i=t(50360),o=t(64335),a=t(44660),d=t(90301),l=t(47109),c=t(26584),A=t(102),h=t(59788),p=t(58658),u=t(47969),x=t(96338),m=t(33922),g=t(25903),j=t(12102),f=t(17450),v=t(2343),C=t(30669),w=t(29307),b=t(75917),k=t(39654),y=t(31234),F=(t(22608),t(69399)),N=t(37028),P=t(2116),R=t(18034),_=t(96221),I=t(67604),U=t(96558),W=t(37654),q=t(89481),z=t(90999),B=t(20491),E=t(50802),G=t(59895),M=t(18743),D=t(83811),J=t(51204),K=t(40368),T=t(78640),V=t(91988),Y=t(46021),L=t(52282),Q=t(75448),S=t(86069),Z=t(82861),$=t(65875),H=t(6773),O=t(5266),X=t(20790),ee=t(46156),re=t(7743),te=t(78664),ne=t(7861),se=t(46977),ie=t(38197),oe=(t(74169),t(5486)),ae=t(91349),de=t(11557),le=t(17788),ce=(t(58649),t(28297),t(64284),t(50347),t(20145),t(27296),t(1958),t(3327),t(64078),t(55263),t(22900),t(40231)),Ae=t(37601),he=(t(17885),t(52170),t(57784)),pe=t(13012),ue=t(53416),xe=t(75843),me=t(87836),ge=t(29611),je=(t(66093),t(19117)),fe=(t(25590),t(38220),t(2811)),ve=t(60073),Ce=(t(67925),t(93279)),we=(t(45046),t(29987)),be=t(50365),ke=t(57468),ye=t(14657),Fe=t(95475),Ne=t(39721),Pe=t(68526),Re=t(33102),_e=t(84071),Ie=t(51465),Ue=t(83185)}}]);