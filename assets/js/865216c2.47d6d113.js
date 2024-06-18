"use strict";(self.webpackChunkturf_www=self.webpackChunkturf_www||[]).push([[89798],{68471:(n,e,o)=>{o.r(e),o.d(e,{assets:()=>a,contentTitle:()=>r,default:()=>h,frontMatter:()=>s,metadata:()=>l,toc:()=>d});var t=o(74848),i=o(28453);o(36145),o(78478);const s={title:"booleanPointInPolygon"},r=void 0,l={id:"api/booleanPointInPolygon",title:"booleanPointInPolygon",description:"Description",source:"@site/versioned_docs/version-7.0.0/api/booleanPointInPolygon.mdx",sourceDirName:"api",slug:"/api/booleanPointInPolygon",permalink:"/docs/api/booleanPointInPolygon",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/versioned_docs/version-7.0.0/api/booleanPointInPolygon.mdx",tags:[],version:"7.0.0",frontMatter:{title:"booleanPointInPolygon"},sidebar:"apiSidebar",previous:{title:"booleanParallel",permalink:"/docs/api/booleanParallel"},next:{title:"booleanPointOnLine",permalink:"/docs/api/booleanPointOnLine"}},a={},d=[{value:"Description",id:"description",level:3},{value:"Parameters",id:"parameters",level:3},{value:"Returns",id:"returns",level:3},{value:"Examples",id:"examples",level:3},{value:"Installation",id:"installation",level:3}];function c(n){const e={a:"a",code:"code",em:"em",h3:"h3",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.h3,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(e.p,{children:["Takes a ",(0,t.jsx)(e.a,{href:"https://tools.ietf.org/html/rfc7946#section-3.1.2",children:"Point"})," and a ",(0,t.jsx)(e.a,{href:"https://tools.ietf.org/html/rfc7946#section-3.1.6",children:"Polygon"})," or ",(0,t.jsx)(e.a,{href:"https://tools.ietf.org/html/rfc7946#section-3.1.7",children:"MultiPolygon"})," and determines if the point\nresides inside the polygon. The polygon can be convex or concave. The function accounts for holes."]}),"\n",(0,t.jsx)(e.h3,{id:"parameters",children:"Parameters"}),"\n",(0,t.jsxs)(e.table,{children:[(0,t.jsx)(e.thead,{children:(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.th,{children:"Name"}),(0,t.jsx)(e.th,{children:"Type"}),(0,t.jsx)(e.th,{children:"Description"})]})}),(0,t.jsxs)(e.tbody,{children:[(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"point"}),(0,t.jsx)(e.td,{children:(0,t.jsx)(e.strong,{children:(0,t.jsx)(e.a,{href:"https://tools.ietf.org/html/rfc7946#section-3.1.1",children:"Coord"})})}),(0,t.jsx)(e.td,{children:"input point"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"polygon"}),(0,t.jsx)(e.td,{children:(0,t.jsxs)(e.strong,{children:[(0,t.jsx)(e.a,{href:"https://tools.ietf.org/html/rfc7946#section-3.2",children:"Feature"}),"<",(0,t.jsx)(e.a,{href:"https://tools.ietf.org/html/rfc7946#section-3.1.6",children:"Polygon"})," | ",(0,t.jsx)(e.a,{href:"https://tools.ietf.org/html/rfc7946#section-3.1.7",children:"MultiPolygon"}),">"]})}),(0,t.jsx)(e.td,{children:"input polygon or multipolygon"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsxs)(e.td,{children:["options",(0,t.jsx)("i",{children:"?"})]}),(0,t.jsx)(e.td,{children:(0,t.jsx)(e.strong,{children:"Object"})}),(0,t.jsxs)(e.td,{children:["Optional parameters ",(0,t.jsx)(e.em,{children:"(default {})"})]})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsxs)(e.td,{children:["options.ignoreBoundary",(0,t.jsx)("i",{children:"?"})]}),(0,t.jsx)(e.td,{children:(0,t.jsx)(e.strong,{children:"boolean"})}),(0,t.jsxs)(e.td,{children:["True if polygon boundary should be ignored when determining if the point is inside the polygon otherwise false. ",(0,t.jsx)(e.em,{children:"(default false)"})]})]})]})]}),"\n",(0,t.jsx)(e.h3,{id:"returns",children:"Returns"}),"\n",(0,t.jsx)("ul",{children:(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.strong,{children:"boolean"})," ",(0,t.jsx)(e.code,{children:"true"})," if the Point is inside the Polygon; ",(0,t.jsx)(e.code,{children:"false"})," if the Point is not inside the Polygon"]})}),"\n",(0,t.jsx)(e.h3,{id:"examples",children:"Examples"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-javascript",children:"var pt = turf.point([-77, 44]);\nvar poly = turf.polygon([\n  [\n    [-81, 41],\n    [-81, 47],\n    [-72, 47],\n    [-72, 41],\n    [-81, 41],\n  ],\n]);\n\nturf.booleanPointInPolygon(pt, poly);\n//= true\n"})}),"\n",(0,t.jsx)(e.h3,{id:"installation",children:"Installation"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-javascript",children:'$ npm install @turf/boolean-point-in-polygon\n\nimport { booleanPointInPolygon } from "@turf/boolean-point-in-polygon";\nconst result = booleanPointInPolygon(...);\n'})}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-javascript",children:'$ npm install @turf/turf\n\nimport * as turf from "@turf/turf";\nconst result = turf.booleanPointInPolygon(...);\n'})})]})}function h(n={}){const{wrapper:e}={...(0,i.R)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(c,{...n})}):c(n)}}}]);