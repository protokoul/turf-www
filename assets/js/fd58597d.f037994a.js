"use strict";(self.webpackChunkturf_www=self.webpackChunkturf_www||[]).push([[7773],{8524:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>a,toc:()=>d});var n=r(4848),s=r(8453);r(800),r(6145),r(8478);const i={title:"getCoord"},o=void 0,a={id:"api/getCoord",title:"getCoord",description:"Description",source:"@site/docs/api/getCoord.mdx",sourceDirName:"api",slug:"/api/getCoord",permalink:"/docs/api/getCoord",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/api/getCoord.mdx",tags:[],version:"current",frontMatter:{title:"getCoord"},sidebar:"apiSidebar",previous:{title:"getCluster",permalink:"/docs/api/getCluster"},next:{title:"getCoords",permalink:"/docs/api/getCoords"}},l={},d=[{value:"Description",id:"description",level:3},{value:"Parameters",id:"parameters",level:3},{value:"Returns",id:"returns",level:3},{value:"Examples",id:"examples",level:3},{value:"Installation",id:"installation",level:3}];function c(e){const t={a:"a",code:"code",h3:"h3",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h3,{id:"description",children:"Description"}),"\n",(0,n.jsx)(t.p,{children:"Unwrap a coordinate from a Point Feature, Geometry or a single coordinate."}),"\n",(0,n.jsx)(t.h3,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"coord"}),(0,n.jsx)(t.td,{children:(0,n.jsxs)(t.strong,{children:["Array<number> | ",(0,n.jsx)(t.a,{href:"https://tools.ietf.org/html/rfc7946#section-3.1",children:"Geometry"}),"<",(0,n.jsx)(t.a,{href:"https://tools.ietf.org/html/rfc7946#section-3.1.2",children:"Point"}),"> | ",(0,n.jsx)(t.a,{href:"https://tools.ietf.org/html/rfc7946#section-3.2",children:"Feature"}),"<",(0,n.jsx)(t.a,{href:"https://tools.ietf.org/html/rfc7946#section-3.1.2",children:"Point"}),">"]})}),(0,n.jsx)(t.td,{children:"GeoJSON Point or an Array of numbers"})]})})]}),"\n",(0,n.jsx)(t.h3,{id:"returns",children:"Returns"}),"\n",(0,n.jsx)("ul",{children:(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Array<number>"})," coordinates"]})}),"\n",(0,n.jsx)(t.h3,{id:"examples",children:"Examples"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-javascript",children:"var pt = turf.point([10, 10]);\n\nvar coord = turf.getCoord(pt);\n//= [10, 10]\n"})}),"\n",(0,n.jsx)(t.h3,{id:"installation",children:"Installation"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-javascript",children:'$ npm install @turf/invariant\n\nimport { getCoord } from "@turf/invariant";\nconst result = getCoord(...);\n'})}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-javascript",children:'$ npm install @turf/turf\n\nimport * as turf from "@turf/turf";\nconst result = turf.getCoord(...);\n'})})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}}}]);