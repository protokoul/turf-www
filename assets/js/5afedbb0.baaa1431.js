"use strict";(self.webpackChunkturf_www=self.webpackChunkturf_www||[]).push([[48370],{55450:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>a,contentTitle:()=>o,default:()=>A,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var s=t(74848),n=t(28453);t(54550),t(36145),t(78478);const l={title:"coordAll"},o=void 0,i={id:"api/coordAll",title:"coordAll",description:"Description",source:"@site/versioned_docs/version-6.5.0/api/coordAll.mdx",sourceDirName:"api",slug:"/api/coordAll",permalink:"/docs/6.5.0/api/coordAll",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/versioned_docs/version-6.5.0/api/coordAll.mdx",tags:[],version:"6.5.0",frontMatter:{title:"coordAll"},sidebar:"apiSidebar",previous:{title:"clusterReduce",permalink:"/docs/6.5.0/api/clusterReduce"},next:{title:"coordEach",permalink:"/docs/6.5.0/api/coordEach"}},a={},c=[{value:"Description",id:"description",level:3},{value:"Parameters",id:"parameters",level:3},{value:"Returns",id:"returns",level:3},{value:"Examples",id:"examples",level:3},{value:"Installation",id:"installation",level:3}];function d(e){const r={a:"a",code:"code",h3:"h3",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.h3,{id:"description",children:"Description"}),"\n",(0,s.jsx)(r.p,{children:"Get all coordinates from any GeoJSON object."}),"\n",(0,s.jsx)(r.h3,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"Name"}),(0,s.jsx)(r.th,{children:"Type"}),(0,s.jsx)(r.th,{children:"Description"})]})}),(0,s.jsx)(r.tbody,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"geojson"}),(0,s.jsx)(r.td,{children:(0,s.jsxs)(r.strong,{children:[(0,s.jsx)(r.a,{href:"https://tools.ietf.org/html/rfc7946#section-3.3",children:"FeatureCollection"})," | ",(0,s.jsx)(r.a,{href:"https://tools.ietf.org/html/rfc7946#section-3.2",children:"Feature"})," | ",(0,s.jsx)(r.a,{href:"https://tools.ietf.org/html/rfc7946#section-3.1",children:"Geometry"})]})}),(0,s.jsx)(r.td,{children:"any GeoJSON object"})]})})]}),"\n",(0,s.jsx)(r.h3,{id:"returns",children:"Returns"}),"\n",(0,s.jsx)("ul",{children:(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:"Array<Array<number>>"})," coordinate position array"]})}),"\n",(0,s.jsx)(r.h3,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-javascript",children:'var features = turf.featureCollection([\n  turf.point([26, 37], { foo: "bar" }),\n  turf.point([36, 53], { hello: "world" }),\n]);\n\nvar coords = turf.coordAll(features);\n//= [[26, 37], [36, 53]]\n'})}),"\n",(0,s.jsx)(r.h3,{id:"installation",children:"Installation"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-javascript",children:'$ npm install @turf/meta\n\nimport { coordAll } from "@turf/meta";\nconst result = coordAll(...);\n'})}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-javascript",children:'$ npm install @turf/turf\n\nimport * as turf from "@turf/turf";\nconst result = turf.coordAll(...);\n'})})]})}function A(e={}){const{wrapper:r}={...(0,n.R)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},54550:(e,r,t)=>{t.d(r,{B8d:()=>ue.A,BoU:()=>V.A,Bqz:()=>K.A,Bw9:()=>B.A,C0c:()=>me.A,CNZ:()=>Z.Ay,CRN:()=>c.A,EUY:()=>te.A,EwI:()=>p.A,FU4:()=>ve.F,Fc$:()=>re.A,Fod:()=>i.A,FsR:()=>Q.A,GWP:()=>We.A,Gdr:()=>b.A,Glg:()=>Y.A,IoC:()=>w.A,JQ7:()=>O.A,K9N:()=>F.A,KCZ:()=>Ne.A,KrA:()=>le.A,LNI:()=>s.A,Lrk:()=>we.Lr,Ms8:()=>o.A,NAY:()=>f.A,O9B:()=>Fe.A,PVF:()=>j.A,Qk1:()=>k.A,QwJ:()=>U.A,Qwm:()=>z.A,REH:()=>u.A,TcI:()=>A.A,UUz:()=>a.A,Vwd:()=>Ee.A,W1F:()=>C.A,W26:()=>T.A,WRA:()=>we.WR,Wcw:()=>q.A,XM1:()=>h.A,Zqw:()=>de.A,_6q:()=>he.A,_Jg:()=>X.A,_eC:()=>ge._e,a1F:()=>Ce.A,bmV:()=>fe.A,cS4:()=>Ie.A,dKf:()=>_e.A,dcc:()=>E.A,eZr:()=>je.A,g52:()=>we.g5,gP4:()=>$.A,gXo:()=>m.A,hq2:()=>P.A,iv2:()=>ke.A,j_:()=>W.A,kJI:()=>N.A,kVe:()=>S.A,kg7:()=>g.A,n1:()=>we.n1,n1W:()=>x.A,nIv:()=>ie.A,nUT:()=>G.A,nYW:()=>y.A,ne9:()=>J.A,nj9:()=>l.A,pPd:()=>Ae.A,pw2:()=>pe.A,qMT:()=>M.A,qS_:()=>oe.A,ra8:()=>ye.A,rb:()=>xe.A,rkH:()=>ee.A,rmV:()=>se.A,tLh:()=>ae.A,uO7:()=>ce.A,ucs:()=>I.A,usj:()=>be.us,v4M:()=>ne.A,vKl:()=>d.A,vh2:()=>v.A,wdR:()=>L.A,wiw:()=>we.wi,xCI:()=>R.A,xYr:()=>_.A,xvE:()=>D.A,y$5:()=>Re.A,y5H:()=>n.A,ywB:()=>H.A,zY8:()=>ve.z,zx7:()=>we.zx});var s=t(27082),n=t(57941),l=t(50360),o=t(64335),i=t(44660),a=t(90301),c=t(47109),d=t(26584),A=t(102),h=t(59788),u=t(58658),p=t(47969),x=t(96338),j=t(33922),m=t(25903),f=t(12102),v=t(17450),g=t(2343),w=t(30669),b=t(29307),k=t(75917),y=t(39654),N=t(31234),R=(t(22608),t(69399)),C=t(37028),F=t(2116),_=t(18034),I=t(96221),E=t(67604),W=t(96558),G=t(37654),U=t(89481),q=t(90999),z=t(20491),B=t(50802),J=t(59895),M=t(18743),P=t(83811),D=t(51204),K=t(40368),S=t(78640),T=t(91988),V=t(46021),Y=t(52282),L=t(75448),O=t(86069),Q=t(82861),Z=t(65875),$=t(6773),H=t(5266),X=t(20790),ee=t(46156),re=t(7743),te=t(78664),se=t(7861),ne=t(46977),le=t(38197),oe=(t(74169),t(5486)),ie=t(91349),ae=t(11557),ce=t(17788),de=(t(58649),t(28297),t(64284),t(50347),t(20145),t(27296),t(1958),t(3327),t(64078),t(55263),t(22900),t(40231)),Ae=t(37601),he=(t(17885),t(52170),t(57784)),ue=t(13012),pe=t(53416),xe=t(75843),je=t(87836),me=t(29611),fe=(t(66093),t(19117)),ve=(t(25590),t(38220),t(2811)),ge=t(60073),we=(t(67925),t(93279)),be=(t(45046),t(29987)),ke=t(50365),ye=t(57468),Ne=t(14657),Re=t(95475),Ce=t(39721),Fe=t(68526),_e=t(33102),Ie=t(84071),Ee=t(51465),We=t(83185)}}]);