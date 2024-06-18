"use strict";(self.webpackChunkturf_www=self.webpackChunkturf_www||[]).push([[65938],{94582:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>a,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>d,toc:()=>c});var i=r(74848),n=r(28453);r(54550),r(36145),r(78478);const s={title:"multiLineString"},l=void 0,d={id:"api/multiLineString",title:"multiLineString",description:"Description",source:"@site/versioned_docs/version-6.5.0/api/multiLineString.mdx",sourceDirName:"api",slug:"/api/multiLineString",permalink:"/docs/6.5.0/api/multiLineString",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/versioned_docs/version-6.5.0/api/multiLineString.mdx",tags:[],version:"6.5.0",frontMatter:{title:"multiLineString"},sidebar:"apiSidebar",previous:{title:"lineString",permalink:"/docs/6.5.0/api/lineString"},next:{title:"multiPoint",permalink:"/docs/6.5.0/api/multiPoint"}},a={},c=[{value:"Description",id:"description",level:3},{value:"Parameters",id:"parameters",level:3},{value:"Returns",id:"returns",level:3},{value:"Examples",id:"examples",level:3},{value:"Installation",id:"installation",level:3}];function o(e){const t={a:"a",code:"code",em:"em",h3:"h3",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h3,{id:"description",children:"Description"}),"\n",(0,i.jsxs)(t.p,{children:["Creates a ",(0,i.jsx)(t.a,{href:"https://tools.ietf.org/html/rfc7946#section-3.2",children:"Feature"}),"<",(0,i.jsx)(t.a,{href:"https://tools.ietf.org/html/rfc7946#section-3.1.5",children:"MultiLineString"}),"> based on a\ncoordinate array. Properties can be added optionally."]}),"\n",(0,i.jsx)(t.h3,{id:"parameters",children:"Parameters"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Name"}),(0,i.jsx)(t.th,{children:"Type"}),(0,i.jsx)(t.th,{children:"Description"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"coordinates"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.strong,{children:"Array<Array<Array<number>>>"})}),(0,i.jsx)(t.td,{children:"an array of LineStrings"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsxs)(t.td,{children:["properties",(0,i.jsx)("i",{children:"?"})]}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.strong,{children:"Object"})}),(0,i.jsxs)(t.td,{children:["an Object of key-value pairs to add as properties ",(0,i.jsx)(t.em,{children:"(default {})"})]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsxs)(t.td,{children:["options",(0,i.jsx)("i",{children:"?"})]}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.strong,{children:"Object"})}),(0,i.jsxs)(t.td,{children:["Optional Parameters ",(0,i.jsx)(t.em,{children:"(default {})"})]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsxs)(t.td,{children:["options.bbox",(0,i.jsx)("i",{children:"?"})]}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.strong,{children:"Array<number>"})}),(0,i.jsx)(t.td,{children:"Bounding Box Array [west, south, east, north] associated with the Feature"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsxs)(t.td,{children:["options.id",(0,i.jsx)("i",{children:"?"})]}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.strong,{children:"string | number"})}),(0,i.jsx)(t.td,{children:"Identifier associated with the Feature"})]})]})]}),"\n",(0,i.jsx)(t.h3,{id:"returns",children:"Returns"}),"\n",(0,i.jsx)("ul",{children:(0,i.jsxs)(t.p,{children:[(0,i.jsxs)(t.strong,{children:[(0,i.jsx)(t.a,{href:"https://tools.ietf.org/html/rfc7946#section-3.2",children:"Feature"}),"<",(0,i.jsx)(t.a,{href:"https://tools.ietf.org/html/rfc7946#section-3.1.5",children:"MultiLineString"}),">"]})," a MultiLineString feature"]})}),"\n",(0,i.jsx)(t.h3,{id:"examples",children:"Examples"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-javascript",children:"var multiLine = turf.multiLineString([\n  [\n    [0, 0],\n    [10, 10],\n  ],\n]);\n\n//=multiLine\n"})}),"\n",(0,i.jsx)(t.h3,{id:"installation",children:"Installation"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-javascript",children:'$ npm install @turf/helpers\n\nimport { multiLineString } from "@turf/helpers";\nconst result = multiLineString(...);\n'})}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-javascript",children:'$ npm install @turf/turf\n\nimport * as turf from "@turf/turf";\nconst result = turf.multiLineString(...);\n'})})]})}function h(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},54550:(e,t,r)=>{r.d(t,{B8d:()=>ue.A,BoU:()=>V.A,Bqz:()=>D.A,Bw9:()=>U.A,C0c:()=>me.A,CNZ:()=>$.Ay,CRN:()=>c.A,EUY:()=>re.A,EwI:()=>x.A,FU4:()=>fe.F,Fc$:()=>te.A,Fod:()=>d.A,FsR:()=>Z.A,GWP:()=>Re.A,Gdr:()=>b.A,Glg:()=>Y.A,IoC:()=>w.A,JQ7:()=>Q.A,K9N:()=>C.A,KCZ:()=>ye.A,KrA:()=>se.A,LNI:()=>i.A,Lrk:()=>we.Lr,Ms8:()=>l.A,NAY:()=>g.A,O9B:()=>Ce.A,PVF:()=>j.A,Qk1:()=>L.A,QwJ:()=>M.A,Qwm:()=>W.A,REH:()=>u.A,TcI:()=>h.A,UUz:()=>a.A,Vwd:()=>Pe.A,W1F:()=>F.A,W26:()=>T.A,WRA:()=>we.WR,Wcw:()=>B.A,XM1:()=>A.A,Zqw:()=>oe.A,_6q:()=>Ae.A,_Jg:()=>X.A,_eC:()=>ve._e,a1F:()=>Fe.A,bmV:()=>ge.A,cS4:()=>Ne.A,dKf:()=>Ie.A,dcc:()=>P.A,eZr:()=>je.A,g52:()=>we.g5,gP4:()=>G.A,gXo:()=>m.A,hq2:()=>E.A,iv2:()=>Le.A,j_:()=>R.A,kJI:()=>y.A,kVe:()=>K.A,kg7:()=>v.A,n1:()=>we.n1,n1W:()=>p.A,nIv:()=>de.A,nUT:()=>_.A,nYW:()=>S.A,ne9:()=>q.A,nj9:()=>s.A,pPd:()=>he.A,pw2:()=>xe.A,qMT:()=>z.A,qS_:()=>le.A,ra8:()=>Se.A,rb:()=>pe.A,rkH:()=>ee.A,rmV:()=>ie.A,tLh:()=>ae.A,uO7:()=>ce.A,ucs:()=>N.A,usj:()=>be.us,v4M:()=>ne.A,vKl:()=>o.A,vh2:()=>f.A,wdR:()=>J.A,wiw:()=>we.wi,xCI:()=>k.A,xYr:()=>I.A,xvE:()=>O.A,y$5:()=>ke.A,y5H:()=>n.A,ywB:()=>H.A,zY8:()=>fe.z,zx7:()=>we.zx});var i=r(27082),n=r(57941),s=r(50360),l=r(64335),d=r(44660),a=r(90301),c=r(47109),o=r(26584),h=r(102),A=r(59788),u=r(58658),x=r(47969),p=r(96338),j=r(33922),m=r(25903),g=r(12102),f=r(17450),v=r(2343),w=r(30669),b=r(29307),L=r(75917),S=r(39654),y=r(31234),k=(r(22608),r(69399)),F=r(37028),C=r(2116),I=r(18034),N=r(96221),P=r(67604),R=r(96558),_=r(37654),M=r(89481),B=r(90999),W=r(20491),U=r(50802),q=r(59895),z=r(18743),E=r(83811),O=r(51204),D=r(40368),K=r(78640),T=r(91988),V=r(46021),Y=r(52282),J=r(75448),Q=r(86069),Z=r(82861),$=r(65875),G=r(6773),H=r(5266),X=r(20790),ee=r(46156),te=r(7743),re=r(78664),ie=r(7861),ne=r(46977),se=r(38197),le=(r(74169),r(5486)),de=r(91349),ae=r(11557),ce=r(17788),oe=(r(58649),r(28297),r(64284),r(50347),r(20145),r(27296),r(1958),r(3327),r(64078),r(55263),r(22900),r(40231)),he=r(37601),Ae=(r(17885),r(52170),r(57784)),ue=r(13012),xe=r(53416),pe=r(75843),je=r(87836),me=r(29611),ge=(r(66093),r(19117)),fe=(r(25590),r(38220),r(2811)),ve=r(60073),we=(r(67925),r(93279)),be=(r(45046),r(29987)),Le=r(50365),Se=r(57468),ye=r(14657),ke=r(95475),Fe=r(39721),Ce=r(68526),Ie=r(33102),Ne=r(84071),Pe=r(51465),Re=r(83185)}}]);