"use strict";(self.webpackChunkturf_www=self.webpackChunkturf_www||[]).push([[75829],{92908:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>c,toc:()=>o});var n=r(74848),s=r(28453);r(54550),r(36145),r(78478);const i={title:"geomReduce"},a=void 0,c={id:"api/geomReduce",title:"geomReduce",description:"Description",source:"@site/versioned_docs/version-6.5.0/api/geomReduce.mdx",sourceDirName:"api",slug:"/api/geomReduce",permalink:"/docs/6.5.0/api/geomReduce",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/versioned_docs/version-6.5.0/api/geomReduce.mdx",tags:[],version:"6.5.0",frontMatter:{title:"geomReduce"},sidebar:"apiSidebar",previous:{title:"geomEach",permalink:"/docs/6.5.0/api/geomEach"},next:{title:"getCluster",permalink:"/docs/6.5.0/api/getCluster"}},l={},o=[{value:"Description",id:"description",level:3},{value:"Parameters",id:"parameters",level:3},{value:"Returns",id:"returns",level:3},{value:"Examples",id:"examples",level:3},{value:"Installation",id:"installation",level:3}];function d(e){const t={a:"a",code:"code",h3:"h3",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h3,{id:"description",children:"Description"}),"\n",(0,n.jsx)(t.p,{children:"Reduce geometry in any GeoJSON object, similar to Array.reduce()."}),"\n",(0,n.jsx)(t.h3,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"geojson"}),(0,n.jsx)(t.td,{children:(0,n.jsxs)(t.strong,{children:[(0,n.jsx)(t.a,{href:"https://tools.ietf.org/html/rfc7946#section-3.3",children:"FeatureCollection"})," | ",(0,n.jsx)(t.a,{href:"https://tools.ietf.org/html/rfc7946#section-3.2",children:"Feature"})," | ",(0,n.jsx)(t.a,{href:"https://tools.ietf.org/html/rfc7946#section-3.1",children:"Geometry"})]})}),(0,n.jsx)(t.td,{children:"any GeoJSON object"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"callback"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:"Function"})}),(0,n.jsx)(t.td,{children:"a method that takes (previousValue, currentGeometry, featureIndex, featureProperties, featureBBox, featureId)"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsxs)(t.td,{children:["initialValue",(0,n.jsx)("i",{children:"?"})]}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:"*"})}),(0,n.jsx)(t.td,{children:"Value to use as the first argument to the first call of the callback."})]})]})]}),"\n",(0,n.jsx)(t.h3,{id:"returns",children:"Returns"}),"\n",(0,n.jsx)("ul",{children:(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"*"})," The value that results from the reduction."]})}),"\n",(0,n.jsx)(t.h3,{id:"examples",children:"Examples"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-javascript",children:'var features = turf.featureCollection([\n  turf.point([26, 37], { foo: "bar" }),\n  turf.point([36, 53], { hello: "world" }),\n]);\n\nturf.geomReduce(\n  features,\n  function (\n    previousValue,\n    currentGeometry,\n    featureIndex,\n    featureProperties,\n    featureBBox,\n    featureId,\n  ) {\n    //=previousValue\n    //=currentGeometry\n    //=featureIndex\n    //=featureProperties\n    //=featureBBox\n    //=featureId\n    return currentGeometry;\n  },\n);\n'})}),"\n",(0,n.jsx)(t.h3,{id:"installation",children:"Installation"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-javascript",children:'$ npm install @turf/meta\n\nimport { geomReduce } from "@turf/meta";\nconst result = geomReduce(...);\n'})}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-javascript",children:'$ npm install @turf/turf\n\nimport * as turf from "@turf/turf";\nconst result = turf.geomReduce(...);\n'})})]})}function u(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},54550:(e,t,r)=>{r.d(t,{B8d:()=>Ae.A,BoU:()=>S.A,Bqz:()=>T.A,Bw9:()=>U.A,C0c:()=>fe.A,CNZ:()=>Z.Ay,CRN:()=>o.A,EUY:()=>re.A,EwI:()=>p.A,FU4:()=>ge.F,Fc$:()=>te.A,Fod:()=>c.A,FsR:()=>Q.A,GWP:()=>Ve.A,Gdr:()=>R.A,Glg:()=>Y.A,IoC:()=>w.A,JQ7:()=>O.A,K9N:()=>B.A,KCZ:()=>ye.A,KrA:()=>ie.A,LNI:()=>n.A,Lrk:()=>we.Lr,Ms8:()=>a.A,NAY:()=>j.A,O9B:()=>Be.A,PVF:()=>x.A,Qk1:()=>b.A,QwJ:()=>P.A,Qwm:()=>W.A,REH:()=>A.A,TcI:()=>u.A,UUz:()=>l.A,Vwd:()=>Ge.A,W1F:()=>C.A,W26:()=>K.A,WRA:()=>we.WR,Wcw:()=>E.A,XM1:()=>h.A,Zqw:()=>de.A,_6q:()=>he.A,_Jg:()=>X.A,_eC:()=>ve._e,a1F:()=>Ce.A,bmV:()=>je.A,cS4:()=>Ne.A,dKf:()=>Fe.A,dcc:()=>G.A,eZr:()=>xe.A,g52:()=>we.g5,gP4:()=>$.A,gXo:()=>f.A,hq2:()=>J.A,iv2:()=>be.A,j_:()=>V.A,kJI:()=>y.A,kVe:()=>D.A,kg7:()=>v.A,n1:()=>we.n1,n1W:()=>m.A,nIv:()=>ce.A,nUT:()=>_.A,nYW:()=>k.A,ne9:()=>q.A,nj9:()=>i.A,pPd:()=>ue.A,pw2:()=>pe.A,qMT:()=>z.A,qS_:()=>ae.A,ra8:()=>ke.A,rb:()=>me.A,rkH:()=>ee.A,rmV:()=>ne.A,tLh:()=>le.A,uO7:()=>oe.A,ucs:()=>N.A,usj:()=>Re.us,v4M:()=>se.A,vKl:()=>d.A,vh2:()=>g.A,wdR:()=>L.A,wiw:()=>we.wi,xCI:()=>I.A,xYr:()=>F.A,xvE:()=>M.A,y$5:()=>Ie.A,y5H:()=>s.A,ywB:()=>H.A,zY8:()=>ge.z,zx7:()=>we.zx});var n=r(27082),s=r(57941),i=r(50360),a=r(64335),c=r(44660),l=r(90301),o=r(47109),d=r(26584),u=r(102),h=r(59788),A=r(58658),p=r(47969),m=r(96338),x=r(33922),f=r(25903),j=r(12102),g=r(17450),v=r(2343),w=r(30669),R=r(29307),b=r(75917),k=r(39654),y=r(31234),I=(r(22608),r(69399)),C=r(37028),B=r(2116),F=r(18034),N=r(96221),G=r(67604),V=r(96558),_=r(37654),P=r(89481),E=r(90999),W=r(20491),U=r(50802),q=r(59895),z=r(18743),J=r(83811),M=r(51204),T=r(40368),D=r(78640),K=r(91988),S=r(46021),Y=r(52282),L=r(75448),O=r(86069),Q=r(82861),Z=r(65875),$=r(6773),H=r(5266),X=r(20790),ee=r(46156),te=r(7743),re=r(78664),ne=r(7861),se=r(46977),ie=r(38197),ae=(r(74169),r(5486)),ce=r(91349),le=r(11557),oe=r(17788),de=(r(58649),r(28297),r(64284),r(50347),r(20145),r(27296),r(1958),r(3327),r(64078),r(55263),r(22900),r(40231)),ue=r(37601),he=(r(17885),r(52170),r(57784)),Ae=r(13012),pe=r(53416),me=r(75843),xe=r(87836),fe=r(29611),je=(r(66093),r(19117)),ge=(r(25590),r(38220),r(2811)),ve=r(60073),we=(r(67925),r(93279)),Re=(r(45046),r(29987)),be=r(50365),ke=r(57468),ye=r(14657),Ie=r(95475),Ce=r(39721),Be=r(68526),Fe=r(33102),Ne=r(84071),Ge=r(51465),Ve=r(83185)}}]);