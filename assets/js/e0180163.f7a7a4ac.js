"use strict";(self.webpackChunkturf_www=self.webpackChunkturf_www||[]).push([[80011],{17367:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>a,contentTitle:()=>l,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var r=s(74848),n=s(28453);s(36145),s(78478);const i={title:"points"},l=void 0,o={id:"api/points",title:"points",description:"Description",source:"@site/versioned_docs/version-7.0.0/api/points.mdx",sourceDirName:"api",slug:"/api/points",permalink:"/docs/api/points",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/versioned_docs/version-7.0.0/api/points.mdx",tags:[],version:"7.0.0",frontMatter:{title:"points"},sidebar:"apiSidebar",previous:{title:"pNormDistance",permalink:"/docs/api/pNormDistance"},next:{title:"polygons",permalink:"/docs/api/polygons"}},a={},d=[{value:"Description",id:"description",level:3},{value:"Parameters",id:"parameters",level:3},{value:"Returns",id:"returns",level:3},{value:"Examples",id:"examples",level:3},{value:"Installation",id:"installation",level:3}];function c(e){const t={a:"a",code:"code",em:"em",h3:"h3",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h3,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(t.p,{children:["Creates a ",(0,r.jsx)(t.a,{href:"https://tools.ietf.org/html/rfc7946#section-3.1.2",children:"Point"})," ",(0,r.jsx)(t.a,{href:"https://tools.ietf.org/html/rfc7946#section-3.3",children:"FeatureCollection"})," from an Array of Point coordinates."]}),"\n",(0,r.jsx)(t.h3,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Name"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"coordinates"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.strong,{children:"Array<Array<number>>"})}),(0,r.jsx)(t.td,{children:"an array of Points"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsxs)(t.td,{children:["properties",(0,r.jsx)("i",{children:"?"})]}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.strong,{children:"Object"})}),(0,r.jsxs)(t.td,{children:["Translate these properties to each Feature ",(0,r.jsx)(t.em,{children:"(default {})"})]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsxs)(t.td,{children:["options",(0,r.jsx)("i",{children:"?"})]}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.strong,{children:"Object"})}),(0,r.jsxs)(t.td,{children:["Optional Parameters ",(0,r.jsx)(t.em,{children:"(default {})"})]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsxs)(t.td,{children:["options.bbox",(0,r.jsx)("i",{children:"?"})]}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.strong,{children:"Array<number>"})}),(0,r.jsx)(t.td,{children:"Bounding Box Array [west, south, east, north] associated with the FeatureCollection"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsxs)(t.td,{children:["options.id",(0,r.jsx)("i",{children:"?"})]}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.strong,{children:"string | number"})}),(0,r.jsx)(t.td,{children:"Identifier associated with the FeatureCollection"})]})]})]}),"\n",(0,r.jsx)(t.h3,{id:"returns",children:"Returns"}),"\n",(0,r.jsx)("ul",{children:(0,r.jsxs)(t.p,{children:[(0,r.jsxs)(t.strong,{children:[(0,r.jsx)(t.a,{href:"https://tools.ietf.org/html/rfc7946#section-3.3",children:"FeatureCollection"}),"<",(0,r.jsx)(t.a,{href:"https://tools.ietf.org/html/rfc7946#section-3.1.2",children:"Point"}),">"]})," Point Feature"]})}),"\n",(0,r.jsx)(t.h3,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-javascript",children:"var points = turf.points([\n  [-75, 39],\n  [-80, 45],\n  [-78, 50],\n]);\n\n//=points\n"})}),"\n",(0,r.jsx)(t.h3,{id:"installation",children:"Installation"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-javascript",children:'$ npm install @turf/helpers\n\nimport { points } from "@turf/helpers";\nconst result = points(...);\n'})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-javascript",children:'$ npm install @turf/turf\n\nimport * as turf from "@turf/turf";\nconst result = turf.points(...);\n'})})]})}function h(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}}}]);