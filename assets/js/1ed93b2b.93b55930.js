"use strict";(self.webpackChunkturf_www=self.webpackChunkturf_www||[]).push([[41559],{38305:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>s,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var o=t(74848),a=t(28453);t(36145),t(78478);const r={title:"booleanConcave"},s=void 0,l={id:"api/booleanConcave",title:"booleanConcave",description:"Description",source:"@site/versioned_docs/version-7.0.0/api/booleanConcave.mdx",sourceDirName:"api",slug:"/api/booleanConcave",permalink:"/docs/api/booleanConcave",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/versioned_docs/version-7.0.0/api/booleanConcave.mdx",tags:[],version:"7.0.0",frontMatter:{title:"booleanConcave"},sidebar:"apiSidebar",previous:{title:"booleanClockwise",permalink:"/docs/api/booleanClockwise"},next:{title:"booleanContains",permalink:"/docs/api/booleanContains"}},i={},c=[{value:"Description",id:"description",level:3},{value:"Parameters",id:"parameters",level:3},{value:"Returns",id:"returns",level:3},{value:"Examples",id:"examples",level:3},{value:"Installation",id:"installation",level:3}];function d(e){const n={a:"a",code:"code",h3:"h3",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h3,{id:"description",children:"Description"}),"\n",(0,o.jsx)(n.p,{children:"Takes a polygon and return true or false as to whether it is concave or not."}),"\n",(0,o.jsx)(n.h3,{id:"parameters",children:"Parameters"}),"\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"Name"}),(0,o.jsx)(n.th,{children:"Type"}),(0,o.jsx)(n.th,{children:"Description"})]})}),(0,o.jsx)(n.tbody,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"polygon"}),(0,o.jsx)(n.td,{children:(0,o.jsxs)(n.strong,{children:[(0,o.jsx)(n.a,{href:"https://tools.ietf.org/html/rfc7946#section-3.2",children:"Feature"}),"<",(0,o.jsx)(n.a,{href:"https://tools.ietf.org/html/rfc7946#section-3.1.6",children:"Polygon"}),">"]})}),(0,o.jsx)(n.td,{children:"to be evaluated"})]})})]}),"\n",(0,o.jsx)(n.h3,{id:"returns",children:"Returns"}),"\n",(0,o.jsx)("ul",{children:(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"boolean"})," true/false"]})}),"\n",(0,o.jsx)(n.h3,{id:"examples",children:"Examples"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-javascript",children:"var convexPolygon = turf.polygon([\n  [\n    [0, 0],\n    [0, 1],\n    [1, 1],\n    [1, 0],\n    [0, 0],\n  ],\n]);\n\nturf.booleanConcave(convexPolygon);\n//=false\n"})}),"\n",(0,o.jsx)(n.h3,{id:"installation",children:"Installation"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-javascript",children:'$ npm install @turf/boolean-concave\n\nimport { booleanConcave } from "@turf/boolean-concave";\nconst result = booleanConcave(...);\n'})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-javascript",children:'$ npm install @turf/turf\n\nimport * as turf from "@turf/turf";\nconst result = turf.booleanConcave(...);\n'})})]})}function h(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}}}]);