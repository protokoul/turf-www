"use strict";(self.webpackChunkturf_www=self.webpackChunkturf_www||[]).push([[1139],{7159:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>h,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var t=r(4848),s=r(8453);r(800),r(6145),r(8478);const i={title:"lineStrings"},l=void 0,a={id:"api/lineStrings",title:"lineStrings",description:"Description",source:"@site/docs/api/lineStrings.mdx",sourceDirName:"api",slug:"/api/lineStrings",permalink:"/docs/api/lineStrings",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/api/lineStrings.mdx",tags:[],version:"current",frontMatter:{title:"lineStrings"},sidebar:"apiSidebar",previous:{title:"lineReduce",permalink:"/docs/api/lineReduce"},next:{title:"mean",permalink:"/docs/api/mean"}},d={},c=[{value:"Description",id:"description",level:3},{value:"Parameters",id:"parameters",level:3},{value:"Returns",id:"returns",level:3},{value:"Examples",id:"examples",level:3},{value:"Installation",id:"installation",level:3}];function o(e){const n={a:"a",code:"code",em:"em",h3:"h3",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h3,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(n.p,{children:["Creates a ",(0,t.jsx)(n.a,{href:"https://tools.ietf.org/html/rfc7946#section-3.1.4",children:"LineString"})," ",(0,t.jsx)(n.a,{href:"https://tools.ietf.org/html/rfc7946#section-3.3",children:"FeatureCollection"})," from an Array of LineString coordinates."]}),"\n",(0,t.jsx)(n.h3,{id:"parameters",children:"Parameters"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Name"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"coordinates"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:"Array<Array<Array<number>>>"})}),(0,t.jsx)(n.td,{children:"an array of LinearRings"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:["properties",(0,t.jsx)("i",{children:"?"})]}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:"Object"})}),(0,t.jsxs)(n.td,{children:["an Object of key-value pairs to add as properties ",(0,t.jsx)(n.em,{children:"(default {})"})]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:["options",(0,t.jsx)("i",{children:"?"})]}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:"Object"})}),(0,t.jsxs)(n.td,{children:["Optional Parameters ",(0,t.jsx)(n.em,{children:"(default {})"})]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:["options.bbox",(0,t.jsx)("i",{children:"?"})]}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:"Array<number>"})}),(0,t.jsx)(n.td,{children:"Bounding Box Array [west, south, east, north] associated with the FeatureCollection"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:["options.id",(0,t.jsx)("i",{children:"?"})]}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:"string | number"})}),(0,t.jsx)(n.td,{children:"Identifier associated with the FeatureCollection"})]})]})]}),"\n",(0,t.jsx)(n.h3,{id:"returns",children:"Returns"}),"\n",(0,t.jsx)("ul",{children:(0,t.jsxs)(n.p,{children:[(0,t.jsxs)(n.strong,{children:[(0,t.jsx)(n.a,{href:"https://tools.ietf.org/html/rfc7946#section-3.3",children:"FeatureCollection"}),"<",(0,t.jsx)(n.a,{href:"https://tools.ietf.org/html/rfc7946#section-3.1.4",children:"LineString"}),">"]})," LineString FeatureCollection"]})}),"\n",(0,t.jsx)(n.h3,{id:"examples",children:"Examples"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:"var linestrings = turf.lineStrings([\n  [\n    [-24, 63],\n    [-23, 60],\n    [-25, 65],\n    [-20, 69],\n  ],\n  [\n    [-14, 43],\n    [-13, 40],\n    [-15, 45],\n    [-10, 49],\n  ],\n]);\n\n//=linestrings\n"})}),"\n",(0,t.jsx)(n.h3,{id:"installation",children:"Installation"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:'$ npm install @turf/helpers\n\nimport { lineStrings } from "@turf/helpers";\nconst result = lineStrings(...);\n'})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:'$ npm install @turf/turf\n\nimport * as turf from "@turf/turf";\nconst result = turf.lineStrings(...);\n'})})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}}}]);