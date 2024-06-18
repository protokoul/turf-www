"use strict";(self.webpackChunkturf_www=self.webpackChunkturf_www||[]).push([[51925],{60378:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=n(74848),s=n(28453);n(36145),n(78478);const o={title:"booleanTouches"},i=void 0,l={id:"api/booleanTouches",title:"booleanTouches",description:"Description",source:"@site/docs/api/booleanTouches.mdx",sourceDirName:"api",slug:"/api/booleanTouches",permalink:"/docs/next/api/booleanTouches",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/api/booleanTouches.mdx",tags:[],version:"current",frontMatter:{title:"booleanTouches"},sidebar:"apiSidebar",previous:{title:"booleanPointOnLine",permalink:"/docs/next/api/booleanPointOnLine"},next:{title:"booleanWithin",permalink:"/docs/next/api/booleanWithin"}},a={},c=[{value:"Description",id:"description",level:3},{value:"Parameters",id:"parameters",level:3},{value:"Returns",id:"returns",level:3},{value:"Examples",id:"examples",level:3},{value:"Installation",id:"installation",level:3}];function h(e){const t={a:"a",code:"code",h3:"h3",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h3,{id:"description",children:"Description"}),"\n",(0,r.jsx)(t.p,{children:"Boolean-touches true if none of the points common to both geometries\nintersect the interiors of both geometries."}),"\n",(0,r.jsx)(t.h3,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Name"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"feature1"}),(0,r.jsx)(t.td,{children:(0,r.jsxs)(t.strong,{children:[(0,r.jsx)(t.a,{href:"https://tools.ietf.org/html/rfc7946#section-3.1",children:"Geometry"})," | ",(0,r.jsx)(t.a,{href:"https://tools.ietf.org/html/rfc7946#section-3.2",children:"Feature"}),"<any>"]})}),(0,r.jsx)(t.td,{children:"GeoJSON Feature or Geometry"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"feature2"}),(0,r.jsx)(t.td,{children:(0,r.jsxs)(t.strong,{children:[(0,r.jsx)(t.a,{href:"https://tools.ietf.org/html/rfc7946#section-3.1",children:"Geometry"})," | ",(0,r.jsx)(t.a,{href:"https://tools.ietf.org/html/rfc7946#section-3.2",children:"Feature"}),"<any>"]})}),(0,r.jsx)(t.td,{children:"GeoJSON Feature or Geometry"})]})]})]}),"\n",(0,r.jsx)(t.h3,{id:"returns",children:"Returns"}),"\n",(0,r.jsx)("ul",{children:(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"boolean"})," true/false"]})}),"\n",(0,r.jsx)(t.h3,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-javascript",children:"var line = turf.lineString([\n  [1, 1],\n  [1, 2],\n  [1, 3],\n  [1, 4],\n]);\nvar point = turf.point([1, 1]);\n\nturf.booleanTouches(point, line);\n//=true\n"})}),"\n",(0,r.jsx)(t.h3,{id:"installation",children:"Installation"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-javascript",children:'$ npm install @turf/boolean-touches\n\nimport { booleanTouches } from "@turf/boolean-touches";\nconst result = booleanTouches(...);\n'})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-javascript",children:'$ npm install @turf/turf\n\nimport * as turf from "@turf/turf";\nconst result = turf.booleanTouches(...);\n'})})]})}function d(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}}}]);