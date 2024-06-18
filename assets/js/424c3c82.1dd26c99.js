"use strict";(self.webpackChunkturf_www=self.webpackChunkturf_www||[]).push([[38042],{78750:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>a,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var s=r(74848),n=r(28453);r(36145),r(78478);const i={title:"feature"},a=void 0,l={id:"api/feature",title:"feature",description:"Description",source:"@site/versioned_docs/version-7.0.0/api/feature.mdx",sourceDirName:"api",slug:"/api/feature",permalink:"/docs/api/feature",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/versioned_docs/version-7.0.0/api/feature.mdx",tags:[],version:"7.0.0",frontMatter:{title:"feature"},sidebar:"apiSidebar",previous:{title:"unkinkPolygon",permalink:"/docs/api/unkinkPolygon"},next:{title:"featureCollection",permalink:"/docs/api/featureCollection"}},d={},c=[{value:"Description",id:"description",level:3},{value:"Parameters",id:"parameters",level:3},{value:"Returns",id:"returns",level:3},{value:"Examples",id:"examples",level:3},{value:"Installation",id:"installation",level:3}];function o(e){const t={a:"a",code:"code",em:"em",h3:"h3",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h3,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(t.p,{children:["Wraps a GeoJSON ",(0,s.jsx)(t.a,{href:"https://tools.ietf.org/html/rfc7946#section-3.1",children:"Geometry"})," in a GeoJSON ",(0,s.jsx)(t.a,{href:"https://tools.ietf.org/html/rfc7946#section-3.2",children:"Feature"}),"."]}),"\n",(0,s.jsx)(t.h3,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Name"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"geometry"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.strong,{children:(0,s.jsx)(t.a,{href:"https://tools.ietf.org/html/rfc7946#section-3.1",children:"Geometry"})})}),(0,s.jsx)(t.td,{children:"input geometry"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsxs)(t.td,{children:["properties",(0,s.jsx)("i",{children:"?"})]}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.strong,{children:"Object"})}),(0,s.jsxs)(t.td,{children:["an Object of key-value pairs to add as properties ",(0,s.jsx)(t.em,{children:"(default {})"})]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsxs)(t.td,{children:["options",(0,s.jsx)("i",{children:"?"})]}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.strong,{children:"Object"})}),(0,s.jsxs)(t.td,{children:["Optional Parameters ",(0,s.jsx)(t.em,{children:"(default {})"})]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsxs)(t.td,{children:["options.bbox",(0,s.jsx)("i",{children:"?"})]}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.strong,{children:"Array<number>"})}),(0,s.jsx)(t.td,{children:"Bounding Box Array [west, south, east, north] associated with the Feature"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsxs)(t.td,{children:["options.id",(0,s.jsx)("i",{children:"?"})]}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.strong,{children:"string | number"})}),(0,s.jsx)(t.td,{children:"Identifier associated with the Feature"})]})]})]}),"\n",(0,s.jsx)(t.h3,{id:"returns",children:"Returns"}),"\n",(0,s.jsx)("ul",{children:(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:(0,s.jsx)(t.a,{href:"https://tools.ietf.org/html/rfc7946#section-3.2",children:"Feature"})})," a GeoJSON Feature"]})}),"\n",(0,s.jsx)(t.h3,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-javascript",children:'var geometry = {\n  type: "Point",\n  coordinates: [110, 50],\n};\n\nvar feature = turf.feature(geometry);\n\n//=feature\n'})}),"\n",(0,s.jsx)(t.h3,{id:"installation",children:"Installation"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-javascript",children:'$ npm install @turf/helpers\n\nimport { feature } from "@turf/helpers";\nconst result = feature(...);\n'})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-javascript",children:'$ npm install @turf/turf\n\nimport * as turf from "@turf/turf";\nconst result = turf.feature(...);\n'})})]})}function h(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}}}]);