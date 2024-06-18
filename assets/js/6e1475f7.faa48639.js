"use strict";(self.webpackChunkturf_www=self.webpackChunkturf_www||[]).push([[28606],{72876:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>A,frontMatter:()=>i,metadata:()=>a,toc:()=>d});var r=n(74848),s=n(28453);n(54550),n(36145),n(78478);const i={title:"booleanDisjoint"},o=void 0,a={id:"api/booleanDisjoint",title:"booleanDisjoint",description:"Description",source:"@site/versioned_docs/version-6.5.0/api/booleanDisjoint.mdx",sourceDirName:"api",slug:"/api/booleanDisjoint",permalink:"/docs/6.5.0/api/booleanDisjoint",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/versioned_docs/version-6.5.0/api/booleanDisjoint.mdx",tags:[],version:"6.5.0",frontMatter:{title:"booleanDisjoint"},sidebar:"apiSidebar",previous:{title:"booleanCrosses",permalink:"/docs/6.5.0/api/booleanCrosses"},next:{title:"booleanEqual",permalink:"/docs/6.5.0/api/booleanEqual"}},l={},d=[{value:"Description",id:"description",level:3},{value:"Parameters",id:"parameters",level:3},{value:"Returns",id:"returns",level:3},{value:"Examples",id:"examples",level:3},{value:"Installation",id:"installation",level:3}];function c(e){const t={a:"a",code:"code",h3:"h3",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h3,{id:"description",children:"Description"}),"\n",(0,r.jsx)(t.p,{children:"Boolean-disjoint returns (TRUE) if the intersection of the two geometries is an empty set."}),"\n",(0,r.jsx)(t.h3,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Name"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"feature1"}),(0,r.jsx)(t.td,{children:(0,r.jsxs)(t.strong,{children:[(0,r.jsx)(t.a,{href:"https://tools.ietf.org/html/rfc7946#section-3.1",children:"Geometry"})," | ",(0,r.jsx)(t.a,{href:"https://tools.ietf.org/html/rfc7946#section-3.2",children:"Feature"}),"<any>"]})}),(0,r.jsx)(t.td,{children:"GeoJSON Feature or Geometry"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"feature2"}),(0,r.jsx)(t.td,{children:(0,r.jsxs)(t.strong,{children:[(0,r.jsx)(t.a,{href:"https://tools.ietf.org/html/rfc7946#section-3.1",children:"Geometry"})," | ",(0,r.jsx)(t.a,{href:"https://tools.ietf.org/html/rfc7946#section-3.2",children:"Feature"}),"<any>"]})}),(0,r.jsx)(t.td,{children:"GeoJSON Feature or Geometry"})]})]})]}),"\n",(0,r.jsx)(t.h3,{id:"returns",children:"Returns"}),"\n",(0,r.jsx)("ul",{children:(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"boolean"})," true/false"]})}),"\n",(0,r.jsx)(t.h3,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-javascript",children:"var point = turf.point([2, 2]);\nvar line = turf.lineString([\n  [1, 1],\n  [1, 2],\n  [1, 3],\n  [1, 4],\n]);\n\nturf.booleanDisjoint(line, point);\n//=true\n"})}),"\n",(0,r.jsx)(t.h3,{id:"installation",children:"Installation"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-javascript",children:'$ npm install @turf/boolean-disjoint\n\nimport { booleanDisjoint } from "@turf/boolean-disjoint";\nconst result = booleanDisjoint(...);\n'})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-javascript",children:'$ npm install @turf/turf\n\nimport * as turf from "@turf/turf";\nconst result = turf.booleanDisjoint(...);\n'})})]})}function A(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},54550:(e,t,n)=>{n.d(t,{B8d:()=>ue.A,BoU:()=>V.A,Bqz:()=>S.A,Bw9:()=>B.A,C0c:()=>me.A,CNZ:()=>Z.Ay,CRN:()=>d.A,EUY:()=>ne.A,EwI:()=>p.A,FU4:()=>be.F,Fc$:()=>te.A,Fod:()=>a.A,FsR:()=>Q.A,GWP:()=>Ge.A,Gdr:()=>w.A,Glg:()=>Y.A,IoC:()=>g.A,JQ7:()=>O.A,K9N:()=>C.A,KCZ:()=>ye.A,KrA:()=>ie.A,LNI:()=>r.A,Lrk:()=>ge.Lr,Ms8:()=>o.A,NAY:()=>f.A,O9B:()=>Ce.A,PVF:()=>x.A,Qk1:()=>D.A,QwJ:()=>q.A,Qwm:()=>W.A,REH:()=>u.A,TcI:()=>A.A,UUz:()=>l.A,Vwd:()=>Ee.A,W1F:()=>N.A,W26:()=>K.A,WRA:()=>ge.WR,Wcw:()=>U.A,XM1:()=>h.A,Zqw:()=>ce.A,_6q:()=>he.A,_Jg:()=>X.A,_eC:()=>ve._e,a1F:()=>Ne.A,bmV:()=>fe.A,cS4:()=>_e.A,dKf:()=>Re.A,dcc:()=>E.A,eZr:()=>xe.A,g52:()=>ge.g5,gP4:()=>$.A,gXo:()=>m.A,hq2:()=>M.A,iv2:()=>De.A,j_:()=>G.A,kJI:()=>y.A,kVe:()=>T.A,kg7:()=>v.A,n1:()=>ge.n1,n1W:()=>j.A,nIv:()=>ae.A,nUT:()=>I.A,nYW:()=>k.A,ne9:()=>z.A,nj9:()=>i.A,pPd:()=>Ae.A,pw2:()=>pe.A,qMT:()=>J.A,qS_:()=>oe.A,ra8:()=>ke.A,rb:()=>je.A,rkH:()=>ee.A,rmV:()=>re.A,tLh:()=>le.A,uO7:()=>de.A,ucs:()=>_.A,usj:()=>we.us,v4M:()=>se.A,vKl:()=>c.A,vh2:()=>b.A,wdR:()=>L.A,wiw:()=>ge.wi,xCI:()=>F.A,xYr:()=>R.A,xvE:()=>P.A,y$5:()=>Fe.A,y5H:()=>s.A,ywB:()=>H.A,zY8:()=>be.z,zx7:()=>ge.zx});var r=n(27082),s=n(57941),i=n(50360),o=n(64335),a=n(44660),l=n(90301),d=n(47109),c=n(26584),A=n(102),h=n(59788),u=n(58658),p=n(47969),j=n(96338),x=n(33922),m=n(25903),f=n(12102),b=n(17450),v=n(2343),g=n(30669),w=n(29307),D=n(75917),k=n(39654),y=n(31234),F=(n(22608),n(69399)),N=n(37028),C=n(2116),R=n(18034),_=n(96221),E=n(67604),G=n(96558),I=n(37654),q=n(89481),U=n(90999),W=n(20491),B=n(50802),z=n(59895),J=n(18743),M=n(83811),P=n(51204),S=n(40368),T=n(78640),K=n(91988),V=n(46021),Y=n(52282),L=n(75448),O=n(86069),Q=n(82861),Z=n(65875),$=n(6773),H=n(5266),X=n(20790),ee=n(46156),te=n(7743),ne=n(78664),re=n(7861),se=n(46977),ie=n(38197),oe=(n(74169),n(5486)),ae=n(91349),le=n(11557),de=n(17788),ce=(n(58649),n(28297),n(64284),n(50347),n(20145),n(27296),n(1958),n(3327),n(64078),n(55263),n(22900),n(40231)),Ae=n(37601),he=(n(17885),n(52170),n(57784)),ue=n(13012),pe=n(53416),je=n(75843),xe=n(87836),me=n(29611),fe=(n(66093),n(19117)),be=(n(25590),n(38220),n(2811)),ve=n(60073),ge=(n(67925),n(93279)),we=(n(45046),n(29987)),De=n(50365),ke=n(57468),ye=n(14657),Fe=n(95475),Ne=n(39721),Ce=n(68526),Re=n(33102),_e=n(84071),Ee=n(51465),Ge=n(83185)}}]);