"use strict";(self.webpackChunkturf_www=self.webpackChunkturf_www||[]).push([[79635],{1714:(e,r,i)=>{i.r(r),i.d(r,{Map0:()=>A,assets:()=>h,contentTitle:()=>c,default:()=>p,frontMatter:()=>a,metadata:()=>o,toc:()=>x});var n=i(74848),t=i(28453),s=i(54550),l=i(36145),d=i(78478);const a={title:"triangleGrid"},c=void 0,o={id:"api/triangleGrid",title:"triangleGrid",description:"Description",source:"@site/versioned_docs/version-6.5.0/api/triangleGrid.mdx",sourceDirName:"api",slug:"/api/triangleGrid",permalink:"/docs/6.5.0/api/triangleGrid",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/versioned_docs/version-6.5.0/api/triangleGrid.mdx",tags:[],version:"6.5.0",frontMatter:{title:"triangleGrid"},sidebar:"apiSidebar",previous:{title:"squareGrid",permalink:"/docs/6.5.0/api/squareGrid"},next:{title:"nearestPoint",permalink:"/docs/6.5.0/api/nearestPoint"}},h={},x=[{value:"Description",id:"description",level:3},{value:"Parameters",id:"parameters",level:3},{value:"Returns",id:"returns",level:3},{value:"Examples",id:"examples",level:3},{value:"Installation",id:"installation",level:3}];function A(){var e={triangleGrid:s.Vwd([-95,30,-85,40],50,{units:"miles"})};return(0,n.jsx)(l.A,{addToMap:e})}function j(e){const r={a:"a",code:"code",em:"em",h3:"h3",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.h3,{id:"description",children:"Description"}),"\n",(0,n.jsxs)(r.p,{children:["Takes a bounding box and a cell depth and returns a set of triangular ",(0,n.jsx)(r.a,{href:"https://tools.ietf.org/html/rfc7946#section-3.1.6",children:"polygons"})," in a grid."]}),"\n",(0,n.jsx)(r.h3,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Name"}),(0,n.jsx)(r.th,{children:"Type"}),(0,n.jsx)(r.th,{children:"Description"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"bbox"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.strong,{children:"Array<number>"})}),(0,n.jsx)(r.td,{children:"extent in [minX, minY, maxX, maxY] order"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"cellSide"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.strong,{children:"number"})}),(0,n.jsx)(r.td,{children:"dimension of each cell"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsxs)(r.td,{children:["options",(0,n.jsx)("i",{children:"?"})]}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.strong,{children:"Object"})}),(0,n.jsxs)(r.td,{children:["Optional parameters ",(0,n.jsx)(r.em,{children:"(default {})"})]})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsxs)(r.td,{children:["options.units",(0,n.jsx)("i",{children:"?"})]}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.strong,{children:"string"})}),(0,n.jsxs)(r.td,{children:["used in calculating cellSide, can be degrees, radians, miles, or kilometers ",(0,n.jsx)(r.em,{children:"(default 'kilometers')"})]})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsxs)(r.td,{children:["options.mask",(0,n.jsx)("i",{children:"?"})]}),(0,n.jsx)(r.td,{children:(0,n.jsxs)(r.strong,{children:[(0,n.jsx)(r.a,{href:"https://tools.ietf.org/html/rfc7946#section-3.2",children:"Feature"}),"<",(0,n.jsx)(r.a,{href:"https://tools.ietf.org/html/rfc7946#section-3.1.6",children:"Polygon"}),">"]})}),(0,n.jsx)(r.td,{children:"if passed a Polygon or MultiPolygon, the grid Points will be created only inside it"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsxs)(r.td,{children:["options.properties",(0,n.jsx)("i",{children:"?"})]}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.strong,{children:"Object"})}),(0,n.jsxs)(r.td,{children:["passed to each point of the grid ",(0,n.jsx)(r.em,{children:"(default {})"})]})]})]})]}),"\n",(0,n.jsx)(r.h3,{id:"returns",children:"Returns"}),"\n",(0,n.jsx)("ul",{children:(0,n.jsxs)(r.p,{children:[(0,n.jsxs)(r.strong,{children:[(0,n.jsx)(r.a,{href:"https://tools.ietf.org/html/rfc7946#section-3.3",children:"FeatureCollection"}),"<",(0,n.jsx)(r.a,{href:"https://tools.ietf.org/html/rfc7946#section-3.1.6",children:"Polygon"}),">"]})," grid of polygons"]})}),"\n",(0,n.jsx)(r.h3,{id:"examples",children:"Examples"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-javascript",children:'var bbox = [-95, 30, -85, 40];\nvar cellSide = 50;\nvar options = { units: "miles" };\n\nvar triangleGrid = turf.triangleGrid(bbox, cellSide, options);\n'})}),"\n","\n",(0,n.jsx)(d.A,{children:()=>(0,n.jsx)(A,{})}),"\n",(0,n.jsx)(r.h3,{id:"installation",children:"Installation"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-javascript",children:'$ npm install @turf/triangle-grid\n\nimport { triangleGrid } from "@turf/triangle-grid";\nconst result = triangleGrid(...);\n'})}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-javascript",children:'$ npm install @turf/turf\n\nimport * as turf from "@turf/turf";\nconst result = turf.triangleGrid(...);\n'})})]})}function p(e={}){const{wrapper:r}={...(0,t.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(j,{...e})}):j(e)}},54550:(e,r,i)=>{i.d(r,{B8d:()=>Ae.A,BoU:()=>K.A,Bqz:()=>E.A,Bw9:()=>T.A,C0c:()=>ge.A,CNZ:()=>X.Ay,CRN:()=>c.A,EUY:()=>ie.A,EwI:()=>j.A,FU4:()=>fe.F,Fc$:()=>re.A,Fod:()=>d.A,FsR:()=>Q.A,GWP:()=>Ie.A,Gdr:()=>w.A,Glg:()=>O.A,IoC:()=>b.A,JQ7:()=>L.A,K9N:()=>C.A,KCZ:()=>ye.A,KrA:()=>se.A,LNI:()=>n.A,Lrk:()=>be.Lr,Ms8:()=>l.A,NAY:()=>m.A,O9B:()=>Ce.A,PVF:()=>u.A,Qk1:()=>k.A,QwJ:()=>q.A,Qwm:()=>S.A,REH:()=>A.A,TcI:()=>h.A,UUz:()=>a.A,Vwd:()=>_e.A,W1F:()=>F.A,W26:()=>D.A,WRA:()=>be.WR,Wcw:()=>W.A,XM1:()=>x.A,Zqw:()=>oe.A,_6q:()=>xe.A,_Jg:()=>H.A,_eC:()=>ve._e,a1F:()=>Fe.A,bmV:()=>me.A,cS4:()=>Re.A,dKf:()=>Ne.A,dcc:()=>_.A,eZr:()=>ue.A,g52:()=>be.g5,gP4:()=>Z.A,gXo:()=>g.A,hq2:()=>z.A,iv2:()=>ke.A,j_:()=>I.A,kJI:()=>y.A,kVe:()=>V.A,kg7:()=>v.A,n1:()=>be.n1,n1W:()=>p.A,nIv:()=>de.A,nUT:()=>M.A,nYW:()=>G.A,ne9:()=>U.A,nj9:()=>s.A,pPd:()=>he.A,pw2:()=>je.A,qMT:()=>Y.A,qS_:()=>le.A,ra8:()=>Ge.A,rb:()=>pe.A,rkH:()=>ee.A,rmV:()=>ne.A,tLh:()=>ae.A,uO7:()=>ce.A,ucs:()=>R.A,usj:()=>we.us,v4M:()=>te.A,vKl:()=>o.A,vh2:()=>f.A,wdR:()=>J.A,wiw:()=>be.wi,xCI:()=>P.A,xYr:()=>N.A,xvE:()=>B.A,y$5:()=>Pe.A,y5H:()=>t.A,ywB:()=>$.A,zY8:()=>fe.z,zx7:()=>be.zx});var n=i(27082),t=i(57941),s=i(50360),l=i(64335),d=i(44660),a=i(90301),c=i(47109),o=i(26584),h=i(102),x=i(59788),A=i(58658),j=i(47969),p=i(96338),u=i(33922),g=i(25903),m=i(12102),f=i(17450),v=i(2343),b=i(30669),w=i(29307),k=i(75917),G=i(39654),y=i(31234),P=(i(22608),i(69399)),F=i(37028),C=i(2116),N=i(18034),R=i(96221),_=i(67604),I=i(96558),M=i(37654),q=i(89481),W=i(90999),S=i(20491),T=i(50802),U=i(59895),Y=i(18743),z=i(83811),B=i(51204),E=i(40368),V=i(78640),D=i(91988),K=i(46021),O=i(52282),J=i(75448),L=i(86069),Q=i(82861),X=i(65875),Z=i(6773),$=i(5266),H=i(20790),ee=i(46156),re=i(7743),ie=i(78664),ne=i(7861),te=i(46977),se=i(38197),le=(i(74169),i(5486)),de=i(91349),ae=i(11557),ce=i(17788),oe=(i(58649),i(28297),i(64284),i(50347),i(20145),i(27296),i(1958),i(3327),i(64078),i(55263),i(22900),i(40231)),he=i(37601),xe=(i(17885),i(52170),i(57784)),Ae=i(13012),je=i(53416),pe=i(75843),ue=i(87836),ge=i(29611),me=(i(66093),i(19117)),fe=(i(25590),i(38220),i(2811)),ve=i(60073),be=(i(67925),i(93279)),we=(i(45046),i(29987)),ke=i(50365),Ge=i(57468),ye=i(14657),Pe=i(95475),Fe=i(39721),Ce=i(68526),Ne=i(33102),Re=i(84071),_e=i(51465),Ie=i(83185)}}]);