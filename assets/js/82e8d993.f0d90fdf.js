"use strict";(self.webpackChunkturf_www=self.webpackChunkturf_www||[]).push([[99427],{30753:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>c,frontMatter:()=>s,metadata:()=>A,toc:()=>l});var t=r(74848),i=r(28453);r(54550),r(36145),r(78478);const s={title:"bearingToAzimuth"},a=void 0,A={id:"api/bearingToAzimuth",title:"bearingToAzimuth",description:"Description",source:"@site/versioned_docs/version-6.5.0/api/bearingToAzimuth.mdx",sourceDirName:"api",slug:"/api/bearingToAzimuth",permalink:"/docs/6.5.0/api/bearingToAzimuth",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/versioned_docs/version-6.5.0/api/bearingToAzimuth.mdx",tags:[],version:"6.5.0",frontMatter:{title:"bearingToAzimuth"},sidebar:"apiSidebar",previous:{title:"booleanWithin",permalink:"/docs/6.5.0/api/booleanWithin"},next:{title:"convertArea",permalink:"/docs/6.5.0/api/convertArea"}},d={},l=[{value:"Description",id:"description",level:3},{value:"Parameters",id:"parameters",level:3},{value:"Returns",id:"returns",level:3},{value:"Installation",id:"installation",level:3}];function o(e){const n={code:"code",h3:"h3",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h3,{id:"description",children:"Description"}),"\n",(0,t.jsx)(n.p,{children:"Converts any bearing angle from the north line direction (positive clockwise)\nand returns an angle between 0-360 degrees (positive clockwise), 0 being the north line"}),"\n",(0,t.jsx)(n.h3,{id:"parameters",children:"Parameters"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Name"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"bearing"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:"number"})}),(0,t.jsx)(n.td,{children:"angle, between -180 and +180 degrees"})]})})]}),"\n",(0,t.jsx)(n.h3,{id:"returns",children:"Returns"}),"\n",(0,t.jsx)("ul",{children:(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"number"})," angle between 0 and 360 degrees"]})}),"\n",(0,t.jsx)(n.h3,{id:"installation",children:"Installation"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:'$ npm install @turf/helpers\n\nimport { bearingToAzimuth } from "@turf/helpers";\nconst result = bearingToAzimuth(...);\n'})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:'$ npm install @turf/turf\n\nimport * as turf from "@turf/turf";\nconst result = turf.bearingToAzimuth(...);\n'})})]})}function c(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}},54550:(e,n,r)=>{r.d(n,{B8d:()=>ue.A,BoU:()=>L.A,Bqz:()=>Y.A,Bw9:()=>M.A,C0c:()=>be.A,CNZ:()=>H.Ay,CRN:()=>l.A,EUY:()=>re.A,EwI:()=>p.A,FU4:()=>je.F,Fc$:()=>ne.A,Fod:()=>A.A,FsR:()=>G.A,GWP:()=>Ie.A,Gdr:()=>f.A,Glg:()=>Q.A,IoC:()=>w.A,JQ7:()=>$.A,K9N:()=>W.A,KCZ:()=>Te.A,KrA:()=>se.A,LNI:()=>t.A,Lrk:()=>we.Lr,Ms8:()=>a.A,NAY:()=>x.A,O9B:()=>We.A,PVF:()=>g.A,Qk1:()=>k.A,QwJ:()=>U.A,Qwm:()=>B.A,REH:()=>u.A,TcI:()=>c.A,UUz:()=>d.A,Vwd:()=>Fe.A,W1F:()=>R.A,W26:()=>J.A,WRA:()=>we.WR,Wcw:()=>q.A,XM1:()=>h.A,Zqw:()=>oe.A,_6q:()=>he.A,_Jg:()=>X.A,_eC:()=>ve._e,a1F:()=>Re.A,bmV:()=>xe.A,cS4:()=>ye.A,dKf:()=>_e.A,dcc:()=>F.A,eZr:()=>ge.A,g52:()=>we.g5,gP4:()=>S.A,gXo:()=>b.A,hq2:()=>K.A,iv2:()=>ke.A,j_:()=>I.A,kJI:()=>T.A,kVe:()=>E.A,kg7:()=>v.A,n1:()=>we.n1,n1W:()=>m.A,nIv:()=>Ae.A,nUT:()=>N.A,nYW:()=>z.A,ne9:()=>P.A,nj9:()=>s.A,pPd:()=>ce.A,pw2:()=>pe.A,qMT:()=>D.A,qS_:()=>ae.A,ra8:()=>ze.A,rb:()=>me.A,rkH:()=>ee.A,rmV:()=>te.A,tLh:()=>de.A,uO7:()=>le.A,ucs:()=>y.A,usj:()=>fe.us,v4M:()=>ie.A,vKl:()=>o.A,vh2:()=>j.A,wdR:()=>Z.A,wiw:()=>we.wi,xCI:()=>C.A,xYr:()=>_.A,xvE:()=>V.A,y$5:()=>Ce.A,y5H:()=>i.A,ywB:()=>O.A,zY8:()=>je.z,zx7:()=>we.zx});var t=r(27082),i=r(57941),s=r(50360),a=r(64335),A=r(44660),d=r(90301),l=r(47109),o=r(26584),c=r(102),h=r(59788),u=r(58658),p=r(47969),m=r(96338),g=r(33922),b=r(25903),x=r(12102),j=r(17450),v=r(2343),w=r(30669),f=r(29307),k=r(75917),z=r(39654),T=r(31234),C=(r(22608),r(69399)),R=r(37028),W=r(2116),_=r(18034),y=r(96221),F=r(67604),I=r(96558),N=r(37654),U=r(89481),q=r(90999),B=r(20491),M=r(50802),P=r(59895),D=r(18743),K=r(83811),V=r(51204),Y=r(40368),E=r(78640),J=r(91988),L=r(46021),Q=r(52282),Z=r(75448),$=r(86069),G=r(82861),H=r(65875),S=r(6773),O=r(5266),X=r(20790),ee=r(46156),ne=r(7743),re=r(78664),te=r(7861),ie=r(46977),se=r(38197),ae=(r(74169),r(5486)),Ae=r(91349),de=r(11557),le=r(17788),oe=(r(58649),r(28297),r(64284),r(50347),r(20145),r(27296),r(1958),r(3327),r(64078),r(55263),r(22900),r(40231)),ce=r(37601),he=(r(17885),r(52170),r(57784)),ue=r(13012),pe=r(53416),me=r(75843),ge=r(87836),be=r(29611),xe=(r(66093),r(19117)),je=(r(25590),r(38220),r(2811)),ve=r(60073),we=(r(67925),r(93279)),fe=(r(45046),r(29987)),ke=r(50365),ze=r(57468),Te=r(14657),Ce=r(95475),Re=r(39721),We=r(68526),_e=r(33102),ye=r(84071),Fe=r(51465),Ie=r(83185)}}]);