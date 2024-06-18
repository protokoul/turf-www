"use strict";(self.webpackChunkturf_www=self.webpackChunkturf_www||[]).push([[7425],{77290:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>a,contentTitle:()=>l,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var n=r(74848),s=r(28453);r(36145),r(78478);const i={title:"cleanCoords"},l=void 0,o={id:"api/cleanCoords",title:"cleanCoords",description:"Description",source:"@site/docs/api/cleanCoords.mdx",sourceDirName:"api",slug:"/api/cleanCoords",permalink:"/docs/next/api/cleanCoords",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/api/cleanCoords.mdx",tags:[],version:"current",frontMatter:{title:"cleanCoords"},sidebar:"apiSidebar",previous:{title:"square",permalink:"/docs/next/api/square"},next:{title:"flip",permalink:"/docs/next/api/flip"}},a={},d=[{value:"Description",id:"description",level:3},{value:"Parameters",id:"parameters",level:3},{value:"Returns",id:"returns",level:3},{value:"Examples",id:"examples",level:3},{value:"Installation",id:"installation",level:3}];function c(e){const t={a:"a",code:"code",em:"em",h3:"h3",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h3,{id:"description",children:"Description"}),"\n",(0,n.jsx)(t.p,{children:"Removes redundant coordinates from any GeoJSON Geometry."}),"\n",(0,n.jsx)(t.h3,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"geojson"}),(0,n.jsx)(t.td,{children:(0,n.jsxs)(t.strong,{children:[(0,n.jsx)(t.a,{href:"https://tools.ietf.org/html/rfc7946#section-3.1",children:"Geometry"})," | ",(0,n.jsx)(t.a,{href:"https://tools.ietf.org/html/rfc7946#section-3.2",children:"Feature"})]})}),(0,n.jsx)(t.td,{children:"Feature or Geometry"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsxs)(t.td,{children:["options",(0,n.jsx)("i",{children:"?"})]}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:"Object"})}),(0,n.jsxs)(t.td,{children:["Optional parameters ",(0,n.jsx)(t.em,{children:"(default {})"})]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsxs)(t.td,{children:["options.mutate",(0,n.jsx)("i",{children:"?"})]}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:"boolean"})}),(0,n.jsxs)(t.td,{children:["allows GeoJSON input to be mutated ",(0,n.jsx)(t.em,{children:"(default false)"})]})]})]})]}),"\n",(0,n.jsx)(t.h3,{id:"returns",children:"Returns"}),"\n",(0,n.jsx)("ul",{children:(0,n.jsxs)(t.p,{children:[(0,n.jsxs)(t.strong,{children:[(0,n.jsx)(t.a,{href:"https://tools.ietf.org/html/rfc7946#section-3.1",children:"Geometry"})," | ",(0,n.jsx)(t.a,{href:"https://tools.ietf.org/html/rfc7946#section-3.2",children:"Feature"})]})," the cleaned input Feature/Geometry"]})}),"\n",(0,n.jsx)(t.h3,{id:"examples",children:"Examples"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-javascript",children:"var line = turf.lineString([\n  [0, 0],\n  [0, 2],\n  [0, 5],\n  [0, 8],\n  [0, 8],\n  [0, 10],\n]);\nvar multiPoint = turf.multiPoint([\n  [0, 0],\n  [0, 0],\n  [2, 2],\n]);\n\nturf.cleanCoords(line).geometry.coordinates;\n//= [[0, 0], [0, 10]]\n\nturf.cleanCoords(multiPoint).geometry.coordinates;\n//= [[0, 0], [2, 2]]\n"})}),"\n",(0,n.jsx)(t.h3,{id:"installation",children:"Installation"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-javascript",children:'$ npm install @turf/clean-coords\n\nimport { cleanCoords } from "@turf/clean-coords";\nconst result = cleanCoords(...);\n'})}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-javascript",children:'$ npm install @turf/turf\n\nimport * as turf from "@turf/turf";\nconst result = turf.cleanCoords(...);\n'})})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}}}]);