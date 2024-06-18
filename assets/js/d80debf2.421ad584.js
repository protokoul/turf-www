"use strict";(self.webpackChunkturf_www=self.webpackChunkturf_www||[]).push([[66434],{78266:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>d,default:()=>h,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var r=n(74848),i=n(28453);n(36145),n(78478);const s={title:"findPoint"},d=void 0,l={id:"api/findPoint",title:"findPoint",description:"Description",source:"@site/docs/api/findPoint.mdx",sourceDirName:"api",slug:"/api/findPoint",permalink:"/docs/next/api/findPoint",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/api/findPoint.mdx",tags:[],version:"current",frontMatter:{title:"findPoint"},sidebar:"apiSidebar",previous:{title:"ellipse",permalink:"/docs/next/api/ellipse"},next:{title:"findSegment",permalink:"/docs/next/api/findSegment"}},o={},c=[{value:"Description",id:"description",level:3},{value:"Parameters",id:"parameters",level:3},{value:"Returns",id:"returns",level:3},{value:"Examples",id:"examples",level:3},{value:"Installation",id:"installation",level:3}];function a(e){const t={a:"a",code:"code",em:"em",h3:"h3",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h3,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(t.p,{children:["Finds a particular Point from a GeoJSON using ",(0,r.jsx)(t.code,{children:"@turf/meta"})," indexes."]}),"\n",(0,r.jsx)(t.p,{children:"Negative indexes are permitted."}),"\n",(0,r.jsx)(t.h3,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Name"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"geojson"}),(0,r.jsx)(t.td,{children:(0,r.jsxs)(t.strong,{children:[(0,r.jsx)(t.a,{href:"https://tools.ietf.org/html/rfc7946#section-3.3",children:"FeatureCollection"})," | ",(0,r.jsx)(t.a,{href:"https://tools.ietf.org/html/rfc7946#section-3.2",children:"Feature"})," | ",(0,r.jsx)(t.a,{href:"https://tools.ietf.org/html/rfc7946#section-3.1",children:"Geometry"})]})}),(0,r.jsx)(t.td,{children:"Any GeoJSON Feature or Geometry"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsxs)(t.td,{children:["options",(0,r.jsx)("i",{children:"?"})]}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.strong,{children:"Object"})}),(0,r.jsxs)(t.td,{children:["Optional parameters ",(0,r.jsx)(t.em,{children:"(default {})"})]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsxs)(t.td,{children:["options.featureIndex",(0,r.jsx)("i",{children:"?"})]}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.strong,{children:"number"})}),(0,r.jsxs)(t.td,{children:["Feature Index ",(0,r.jsx)(t.em,{children:"(default 0)"})]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsxs)(t.td,{children:["options.multiFeatureIndex",(0,r.jsx)("i",{children:"?"})]}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.strong,{children:"number"})}),(0,r.jsxs)(t.td,{children:["Multi-Feature Index ",(0,r.jsx)(t.em,{children:"(default 0)"})]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsxs)(t.td,{children:["options.geometryIndex",(0,r.jsx)("i",{children:"?"})]}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.strong,{children:"number"})}),(0,r.jsxs)(t.td,{children:["Geometry Index ",(0,r.jsx)(t.em,{children:"(default 0)"})]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsxs)(t.td,{children:["options.coordIndex",(0,r.jsx)("i",{children:"?"})]}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.strong,{children:"number"})}),(0,r.jsxs)(t.td,{children:["Coord Index ",(0,r.jsx)(t.em,{children:"(default 0)"})]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsxs)(t.td,{children:["options.properties",(0,r.jsx)("i",{children:"?"})]}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.strong,{children:"Object"})}),(0,r.jsxs)(t.td,{children:["Translate Properties to output Point ",(0,r.jsx)(t.em,{children:"(default {})"})]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsxs)(t.td,{children:["options.bbox",(0,r.jsx)("i",{children:"?"})]}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.strong,{children:(0,r.jsx)(t.a,{href:"https://tools.ietf.org/html/rfc7946#section-5",children:"BBox"})})}),(0,r.jsxs)(t.td,{children:["Translate BBox to output Point ",(0,r.jsx)(t.em,{children:"(default {})"})]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsxs)(t.td,{children:["options.id",(0,r.jsx)("i",{children:"?"})]}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.strong,{children:"number | string"})}),(0,r.jsxs)(t.td,{children:["Translate Id to output Point ",(0,r.jsx)(t.em,{children:"(default {})"})]})]})]})]}),"\n",(0,r.jsx)(t.h3,{id:"returns",children:"Returns"}),"\n",(0,r.jsx)("ul",{children:(0,r.jsxs)(t.p,{children:[(0,r.jsxs)(t.strong,{children:[(0,r.jsx)(t.a,{href:"https://tools.ietf.org/html/rfc7946#section-3.2",children:"Feature"}),"<",(0,r.jsx)(t.a,{href:"https://tools.ietf.org/html/rfc7946#section-3.1.2",children:"Point"}),">"]})," 2-vertex GeoJSON Feature Point"]})}),"\n",(0,r.jsx)(t.h3,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-javascript",children:"var multiLine = turf.multiLineString([\n  [\n    [10, 10],\n    [50, 30],\n    [30, 40],\n  ],\n  [\n    [-10, -10],\n    [-50, -30],\n    [-30, -40],\n  ],\n]);\n\n// First Segment (defaults are 0)\nturf.findPoint(multiLine);\n// => Feature<Point<[10, 10]>>\n\n// First Segment of the 2nd Multi-Feature\nturf.findPoint(multiLine, { multiFeatureIndex: 1 });\n// => Feature<Point<[-10, -10]>>\n\n// Last Segment of last Multi-Feature\nturf.findPoint(multiLine, { multiFeatureIndex: -1, coordIndex: -1 });\n// => Feature<Point<[-30, -40]>>\n"})}),"\n",(0,r.jsx)(t.h3,{id:"installation",children:"Installation"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-javascript",children:'$ npm install @turf/meta\n\nimport { findPoint } from "@turf/meta";\nconst result = findPoint(...);\n'})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-javascript",children:'$ npm install @turf/turf\n\nimport * as turf from "@turf/turf";\nconst result = turf.findPoint(...);\n'})})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}}}]);