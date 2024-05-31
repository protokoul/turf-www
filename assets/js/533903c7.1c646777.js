"use strict";(self.webpackChunkturf_www=self.webpackChunkturf_www||[]).push([[2818],{811:(e,r,s)=>{s.r(r),s.d(r,{Map0:()=>x,assets:()=>h,contentTitle:()=>d,default:()=>u,frontMatter:()=>a,metadata:()=>c,toc:()=>p});var t=s(4848),i=s(8453),n=s(800),l=s(6145),o=s(8478);const a={title:"isolines"},d=void 0,c={id:"api/isolines",title:"isolines",description:"Description",source:"@site/docs/api/isolines.mdx",sourceDirName:"api",slug:"/api/isolines",permalink:"/docs/api/isolines",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/api/isolines.mdx",tags:[],version:"current",frontMatter:{title:"isolines"},sidebar:"apiSidebar",previous:{title:"isobands",permalink:"/docs/api/isobands"},next:{title:"planepoint",permalink:"/docs/api/planepoint"}},h={},p=[{value:"Description",id:"description",level:3},{value:"Parameters",id:"parameters",level:3},{value:"Returns",id:"returns",level:3},{value:"Examples",id:"examples",level:3},{value:"Installation",id:"installation",level:3}];function x(){for(var e=n.hq2([0,30,20,50],100,{units:"miles"}),r=0;r<e.features.length;r++)e.features[r].properties.temperature=10*Math.random();var s={lines:n.LNI(e,[0,1,2,3,4,5,6,7,8,9,10],{zProperty:"temperature"})};return(0,t.jsx)(l.A,{addToMap:s})}function j(e){const r={a:"a",code:"code",em:"em",h3:"h3",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.h3,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(r.p,{children:["Takes a grid ",(0,t.jsx)(r.a,{href:"https://tools.ietf.org/html/rfc7946#section-3.3",children:"FeatureCollection"})," of ",(0,t.jsx)(r.a,{href:"https://tools.ietf.org/html/rfc7946#section-3.1.2",children:"Point"})," features with z-values and an array of\nvalue breaks and generates ",(0,t.jsx)(r.a,{href:"https://en.wikipedia.org/wiki/Contour_line",children:"isolines"}),"."]}),"\n",(0,t.jsx)(r.h3,{id:"parameters",children:"Parameters"}),"\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Name"}),(0,t.jsx)(r.th,{children:"Type"}),(0,t.jsx)(r.th,{children:"Description"})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"pointGrid"}),(0,t.jsx)(r.td,{children:(0,t.jsxs)(r.strong,{children:[(0,t.jsx)(r.a,{href:"https://tools.ietf.org/html/rfc7946#section-3.3",children:"FeatureCollection"}),"<",(0,t.jsx)(r.a,{href:"https://tools.ietf.org/html/rfc7946#section-3.1.2",children:"Point"}),">"]})}),(0,t.jsx)(r.td,{children:"input points"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"breaks"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.strong,{children:"Array<number>"})}),(0,t.jsxs)(r.td,{children:["values of ",(0,t.jsx)(r.code,{children:"zProperty"})," where to draw isolines"]})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsxs)(r.td,{children:["options",(0,t.jsx)("i",{children:"?"})]}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.strong,{children:"Object"})}),(0,t.jsxs)(r.td,{children:["Optional parameters ",(0,t.jsx)(r.em,{children:"(default {})"})]})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsxs)(r.td,{children:["options.zProperty",(0,t.jsx)("i",{children:"?"})]}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.strong,{children:"string"})}),(0,t.jsxs)(r.td,{children:["the property name in ",(0,t.jsx)(r.code,{children:"points"})," from which z-values will be pulled ",(0,t.jsx)(r.em,{children:"(default 'elevation')"})]})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsxs)(r.td,{children:["options.commonProperties",(0,t.jsx)("i",{children:"?"})]}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.strong,{children:"Object"})}),(0,t.jsxs)(r.td,{children:["GeoJSON properties passed to ALL isolines ",(0,t.jsx)(r.em,{children:"(default {})"})]})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsxs)(r.td,{children:["options.breaksProperties",(0,t.jsx)("i",{children:"?"})]}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.strong,{children:"Array<Object>"})}),(0,t.jsxs)(r.td,{children:["GeoJSON properties passed, in order, to the correspondent isoline; the breaks array will define the order in which the isolines are created ",(0,t.jsx)(r.em,{children:"(default [])"})]})]})]})]}),"\n",(0,t.jsx)(r.h3,{id:"returns",children:"Returns"}),"\n",(0,t.jsx)("ul",{children:(0,t.jsxs)(r.p,{children:[(0,t.jsxs)(r.strong,{children:[(0,t.jsx)(r.a,{href:"https://tools.ietf.org/html/rfc7946#section-3.3",children:"FeatureCollection"}),"<",(0,t.jsx)(r.a,{href:"https://tools.ietf.org/html/rfc7946#section-3.1.5",children:"MultiLineString"}),">"]})," a FeatureCollection of ",(0,t.jsx)(r.a,{href:"https://tools.ietf.org/html/rfc7946#section-3.1.5",children:"MultiLineString"})," features representing isolines"]})}),"\n",(0,t.jsx)(r.h3,{id:"examples",children:"Examples"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-javascript",children:'// create a grid of points with random z-values in their properties\nvar extent = [0, 30, 20, 50];\nvar cellWidth = 100;\nvar pointGrid = turf.pointGrid(extent, cellWidth, { units: "miles" });\n\nfor (var i = 0; i < pointGrid.features.length; i++) {\n  pointGrid.features[i].properties.temperature = Math.random() * 10;\n}\nvar breaks = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];\n\nvar lines = turf.isolines(pointGrid, breaks, { zProperty: "temperature" });\n'})}),"\n","\n",(0,t.jsx)(o.A,{children:()=>(0,t.jsx)(x,{})}),"\n",(0,t.jsx)(r.h3,{id:"installation",children:"Installation"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-javascript",children:'$ npm install @turf/isolines\n\nimport { isolines } from "@turf/isolines";\nconst result = isolines(...);\n'})}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-javascript",children:'$ npm install @turf/turf\n\nimport * as turf from "@turf/turf";\nconst result = turf.isolines(...);\n'})})]})}function u(e={}){const{wrapper:r}={...(0,i.R)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(j,{...e})}):j(e)}}}]);