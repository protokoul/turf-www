"use strict";(self.webpackChunkturf_www=self.webpackChunkturf_www||[]).push([[85295],{47192:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var t=r(74848),s=r(28453);r(36145),r(78478);const i={title:"booleanClockwise"},o=void 0,l={id:"api/booleanClockwise",title:"booleanClockwise",description:"Description",source:"@site/versioned_docs/version-7.0.0/api/booleanClockwise.mdx",sourceDirName:"api",slug:"/api/booleanClockwise",permalink:"/docs/api/booleanClockwise",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/versioned_docs/version-7.0.0/api/booleanClockwise.mdx",tags:[],version:"7.0.0",frontMatter:{title:"booleanClockwise"},sidebar:"apiSidebar",previous:{title:"geojsonType",permalink:"/docs/api/geojsonType"},next:{title:"booleanConcave",permalink:"/docs/api/booleanConcave"}},a={},c=[{value:"Description",id:"description",level:3},{value:"Parameters",id:"parameters",level:3},{value:"Returns",id:"returns",level:3},{value:"Examples",id:"examples",level:3},{value:"Installation",id:"installation",level:3}];function d(e){const n={a:"a",code:"code",h3:"h3",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h3,{id:"description",children:"Description"}),"\n",(0,t.jsx)(n.p,{children:"Takes a ring and return true or false whether or not the ring is clockwise or counter-clockwise."}),"\n",(0,t.jsx)(n.h3,{id:"parameters",children:"Parameters"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Name"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"line"}),(0,t.jsx)(n.td,{children:(0,t.jsxs)(n.strong,{children:[(0,t.jsx)(n.a,{href:"https://tools.ietf.org/html/rfc7946#section-3.2",children:"Feature"}),"<",(0,t.jsx)(n.a,{href:"https://tools.ietf.org/html/rfc7946#section-3.1.4",children:"LineString"}),"> | ",(0,t.jsx)(n.a,{href:"https://tools.ietf.org/html/rfc7946#section-3.1.4",children:"LineString"})," | Array<Array<number>>"]})}),(0,t.jsx)(n.td,{children:"to be evaluated"})]})})]}),"\n",(0,t.jsx)(n.h3,{id:"returns",children:"Returns"}),"\n",(0,t.jsx)("ul",{children:(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"boolean"})," true/false"]})}),"\n",(0,t.jsx)(n.h3,{id:"examples",children:"Examples"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:"var clockwiseRing = turf.lineString([\n  [0, 0],\n  [1, 1],\n  [1, 0],\n  [0, 0],\n]);\nvar counterClockwiseRing = turf.lineString([\n  [0, 0],\n  [1, 0],\n  [1, 1],\n  [0, 0],\n]);\n\nturf.booleanClockwise(clockwiseRing);\n//=true\nturf.booleanClockwise(counterClockwiseRing);\n//=false\n"})}),"\n",(0,t.jsx)(n.h3,{id:"installation",children:"Installation"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:'$ npm install @turf/boolean-clockwise\n\nimport { booleanClockwise } from "@turf/boolean-clockwise";\nconst result = booleanClockwise(...);\n'})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:'$ npm install @turf/turf\n\nimport * as turf from "@turf/turf";\nconst result = turf.booleanClockwise(...);\n'})})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}}}]);