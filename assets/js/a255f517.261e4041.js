"use strict";(self.webpackChunkturf_www=self.webpackChunkturf_www||[]).push([[88315],{92637:(e,t,i)=>{i.r(t),i.d(t,{Map0:()=>x,assets:()=>h,contentTitle:()=>o,default:()=>j,frontMatter:()=>d,metadata:()=>c,toc:()=>p});var s=i(74848),n=i(28453),r=i(54550),a=i(36145),l=i(78478);const d={title:"standardDeviationalEllipse"},o=void 0,c={id:"api/standardDeviationalEllipse",title:"standardDeviationalEllipse",description:"Description",source:"@site/versioned_docs/version-6.5.0/api/standardDeviationalEllipse.mdx",sourceDirName:"api",slug:"/api/standardDeviationalEllipse",permalink:"/docs/6.5.0/api/standardDeviationalEllipse",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/versioned_docs/version-6.5.0/api/standardDeviationalEllipse.mdx",tags:[],version:"6.5.0",frontMatter:{title:"standardDeviationalEllipse"},sidebar:"apiSidebar",previous:{title:"quadratAnalysis",permalink:"/docs/6.5.0/api/quadratAnalysis"},next:{title:"variance",permalink:"/docs/6.5.0/api/variance"}},h={},p=[{value:"Description",id:"description",level:3},{value:"Parameters",id:"parameters",level:3},{value:"Returns",id:"returns",level:3},{value:"Examples",id:"examples",level:3},{value:"Installation",id:"installation",level:3}];function x(){var e=r._eC(400,{bbox:[-74,40.72,-73.98,40.74]}),t={points:e,sdEllipse:r.C0c(e)};return(0,s.jsx)(a.A,{addToMap:t})}function A(e){const t={a:"a",code:"code",em:"em",h3:"h3",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h3,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(t.p,{children:["Takes a ",(0,s.jsx)(t.a,{href:"https://tools.ietf.org/html/rfc7946#section-3.3",children:"FeatureCollection"})," and returns a standard deviational ellipse,\nalso known as a \u201cdirectional distribution.\u201d The standard deviational ellipse\naims to show the direction and the distribution of a dataset by drawing\nan ellipse that contains about one standard deviation\u2019s worth (~ 70%) of the\ndata."]}),"\n",(0,s.jsxs)(t.p,{children:["This module mirrors the functionality of ",(0,s.jsx)(t.a,{href:"http://desktop.arcgis.com/en/arcmap/10.3/tools/spatial-statistics-toolbox/directional-distribution.htm",children:"Directional Distribution"}),"\nin ArcGIS and the ",(0,s.jsx)(t.a,{href:"http://arken.nmbu.no/~havatv/gis/qgisplugins/SDEllipse/",children:"QGIS Standard Deviational Ellipse Plugin"})]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Bibliography"})}),"\n",(0,s.jsxs)(t.p,{children:["\u2022 Robert S. Yuill, \u201cThe Standard Deviational Ellipse; An Updated Tool for\nSpatial Description,\u201d ",(0,s.jsx)(t.em,{children:"Geografiska Annaler"})," 53, no. 1 (1971): 28\u201339,\ndoi:",(0,s.jsx)(t.a,{href:"https://doi.org/10.2307/490885",children:"10.2307/490885"}),"."]}),"\n",(0,s.jsxs)(t.p,{children:["\u2022 Paul Hanly Furfey, \u201cA Note on Lefever\u2019s \u201cStandard Deviational Ellipse,\u201d\n",(0,s.jsx)(t.em,{children:"American Journal of Sociology"})," 33, no. 1 (1927): 94\u201498,\ndoi:",(0,s.jsx)(t.a,{href:"https://doi.org/10.1086/214336",children:"10.1086/214336"}),"."]}),"\n",(0,s.jsx)(t.h3,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Name"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"points"}),(0,s.jsx)(t.td,{children:(0,s.jsxs)(t.strong,{children:[(0,s.jsx)(t.a,{href:"https://tools.ietf.org/html/rfc7946#section-3.3",children:"FeatureCollection"}),"<",(0,s.jsx)(t.a,{href:"https://tools.ietf.org/html/rfc7946#section-3.1.2",children:"Point"}),">"]})}),(0,s.jsx)(t.td,{children:"GeoJSON points"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsxs)(t.td,{children:["options",(0,s.jsx)("i",{children:"?"})]}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.strong,{children:"Object"})}),(0,s.jsxs)(t.td,{children:["Optional parameters ",(0,s.jsx)(t.em,{children:"(default {})"})]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsxs)(t.td,{children:["options.weight",(0,s.jsx)("i",{children:"?"})]}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.strong,{children:"string"})}),(0,s.jsx)(t.td,{children:"the property name used to weight the center"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsxs)(t.td,{children:["options.steps",(0,s.jsx)("i",{children:"?"})]}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.strong,{children:"number"})}),(0,s.jsxs)(t.td,{children:["number of steps for the polygon ",(0,s.jsx)(t.em,{children:"(default 64)"})]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsxs)(t.td,{children:["options.properties",(0,s.jsx)("i",{children:"?"})]}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.strong,{children:"Object"})}),(0,s.jsxs)(t.td,{children:["properties to pass to the resulting ellipse ",(0,s.jsx)(t.em,{children:"(default {})"})]})]})]})]}),"\n",(0,s.jsx)(t.h3,{id:"returns",children:"Returns"}),"\n",(0,s.jsx)("ul",{children:(0,s.jsxs)(t.p,{children:[(0,s.jsxs)(t.strong,{children:[(0,s.jsx)(t.a,{href:"https://tools.ietf.org/html/rfc7946#section-3.2",children:"Feature"}),"<",(0,s.jsx)(t.a,{href:"https://tools.ietf.org/html/rfc7946#section-3.1.6",children:"Polygon"}),">"]})," an elliptical Polygon that includes approximately 1 SD of the dataset within it."]})}),"\n",(0,s.jsx)(t.h3,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-javascript",children:"var bbox = [-74, 40.72, -73.98, 40.74];\nvar points = turf.randomPoint(400, { bbox: bbox });\nvar sdEllipse = turf.standardDeviationalEllipse(points);\n"})}),"\n","\n",(0,s.jsx)(l.A,{children:()=>(0,s.jsx)(x,{})}),"\n",(0,s.jsx)(t.h3,{id:"installation",children:"Installation"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-javascript",children:'$ npm install @turf/standard-deviational-ellipse\n\nimport { standardDeviationalEllipse } from "@turf/standard-deviational-ellipse";\nconst result = standardDeviationalEllipse(...);\n'})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-javascript",children:'$ npm install @turf/turf\n\nimport * as turf from "@turf/turf";\nconst result = turf.standardDeviationalEllipse(...);\n'})})]})}function j(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(A,{...e})}):A(e)}},54550:(e,t,i)=>{i.d(t,{B8d:()=>xe.A,BoU:()=>Y.A,Bqz:()=>z.A,Bw9:()=>M.A,C0c:()=>me.A,CNZ:()=>H.Ay,CRN:()=>o.A,EUY:()=>ie.A,EwI:()=>A.A,FU4:()=>ve.F,Fc$:()=>te.A,Fod:()=>l.A,FsR:()=>V.A,GWP:()=>Ie.A,Gdr:()=>w.A,Glg:()=>K.A,IoC:()=>b.A,JQ7:()=>Q.A,K9N:()=>C.A,KCZ:()=>ye.A,KrA:()=>re.A,LNI:()=>s.A,Lrk:()=>be.Lr,Ms8:()=>a.A,NAY:()=>f.A,O9B:()=>Ce.A,PVF:()=>u.A,Qk1:()=>D.A,QwJ:()=>T.A,Qwm:()=>q.A,REH:()=>x.A,TcI:()=>h.A,UUz:()=>d.A,Vwd:()=>Pe.A,W1F:()=>S.A,W26:()=>O.A,WRA:()=>be.WR,Wcw:()=>_.A,XM1:()=>p.A,Zqw:()=>ce.A,_6q:()=>pe.A,_Jg:()=>X.A,_eC:()=>ge._e,a1F:()=>Se.A,bmV:()=>fe.A,cS4:()=>Ne.A,dKf:()=>Fe.A,dcc:()=>P.A,eZr:()=>ue.A,g52:()=>be.g5,gP4:()=>Z.A,gXo:()=>m.A,hq2:()=>B.A,iv2:()=>De.A,j_:()=>I.A,kJI:()=>y.A,kVe:()=>J.A,kg7:()=>g.A,n1:()=>be.n1,n1W:()=>j.A,nIv:()=>le.A,nUT:()=>R.A,nYW:()=>E.A,ne9:()=>U.A,nj9:()=>r.A,pPd:()=>he.A,pw2:()=>Ae.A,qMT:()=>W.A,qS_:()=>ae.A,ra8:()=>Ee.A,rb:()=>je.A,rkH:()=>ee.A,rmV:()=>se.A,tLh:()=>de.A,uO7:()=>oe.A,ucs:()=>N.A,usj:()=>we.us,v4M:()=>ne.A,vKl:()=>c.A,vh2:()=>v.A,wdR:()=>L.A,wiw:()=>be.wi,xCI:()=>k.A,xYr:()=>F.A,xvE:()=>G.A,y$5:()=>ke.A,y5H:()=>n.A,ywB:()=>$.A,zY8:()=>ve.z,zx7:()=>be.zx});var s=i(27082),n=i(57941),r=i(50360),a=i(64335),l=i(44660),d=i(90301),o=i(47109),c=i(26584),h=i(102),p=i(59788),x=i(58658),A=i(47969),j=i(96338),u=i(33922),m=i(25903),f=i(12102),v=i(17450),g=i(2343),b=i(30669),w=i(29307),D=i(75917),E=i(39654),y=i(31234),k=(i(22608),i(69399)),S=i(37028),C=i(2116),F=i(18034),N=i(96221),P=i(67604),I=i(96558),R=i(37654),T=i(89481),_=i(90999),q=i(20491),M=i(50802),U=i(59895),W=i(18743),B=i(83811),G=i(51204),z=i(40368),J=i(78640),O=i(91988),Y=i(46021),K=i(52282),L=i(75448),Q=i(86069),V=i(82861),H=i(65875),Z=i(6773),$=i(5266),X=i(20790),ee=i(46156),te=i(7743),ie=i(78664),se=i(7861),ne=i(46977),re=i(38197),ae=(i(74169),i(5486)),le=i(91349),de=i(11557),oe=i(17788),ce=(i(58649),i(28297),i(64284),i(50347),i(20145),i(27296),i(1958),i(3327),i(64078),i(55263),i(22900),i(40231)),he=i(37601),pe=(i(17885),i(52170),i(57784)),xe=i(13012),Ae=i(53416),je=i(75843),ue=i(87836),me=i(29611),fe=(i(66093),i(19117)),ve=(i(25590),i(38220),i(2811)),ge=i(60073),be=(i(67925),i(93279)),we=(i(45046),i(29987)),De=i(50365),Ee=i(57468),ye=i(14657),ke=i(95475),Se=i(39721),Ce=i(68526),Fe=i(33102),Ne=i(84071),Pe=i(51465),Ie=i(83185)}}]);