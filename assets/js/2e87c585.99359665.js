"use strict";(self.webpackChunkturf_www=self.webpackChunkturf_www||[]).push([[33226],{57964:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>o});var n=r(74848),s=r(28453);r(36145),r(78478);const i={title:"getType"},a=void 0,l={id:"api/getType",title:"getType",description:"Description",source:"@site/versioned_docs/version-7.0.0/api/getType.mdx",sourceDirName:"api",slug:"/api/getType",permalink:"/docs/api/getType",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/versioned_docs/version-7.0.0/api/getType.mdx",tags:[],version:"7.0.0",frontMatter:{title:"getType"},sidebar:"apiSidebar",previous:{title:"getGeom",permalink:"/docs/api/getGeom"},next:{title:"propEach",permalink:"/docs/api/propEach"}},d={},o=[{value:"Description",id:"description",level:3},{value:"Parameters",id:"parameters",level:3},{value:"Returns",id:"returns",level:3},{value:"Examples",id:"examples",level:3},{value:"Installation",id:"installation",level:3}];function c(e){const t={a:"a",code:"code",em:"em",h3:"h3",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h3,{id:"description",children:"Description"}),"\n",(0,n.jsx)(t.p,{children:"Get GeoJSON object's type, Geometry type is prioritize."}),"\n",(0,n.jsx)(t.h3,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"geojson"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.a,{href:"https://tools.ietf.org/html/rfc7946#section-3",children:"GeoJSON"})})}),(0,n.jsx)(t.td,{children:"GeoJSON object"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsxs)(t.td,{children:["name",(0,n.jsx)("i",{children:"?"})]}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:"string"})}),(0,n.jsxs)(t.td,{children:["name of the variable to display in error message (unused) ",(0,n.jsx)(t.em,{children:'(default "geojson")'})]})]})]})]}),"\n",(0,n.jsx)(t.h3,{id:"returns",children:"Returns"}),"\n",(0,n.jsx)("ul",{children:(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"string"})," GeoJSON type"]})}),"\n",(0,n.jsx)(t.h3,{id:"examples",children:"Examples"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-javascript",children:'var point = {\n  type: "Feature",\n  properties: {},\n  geometry: {\n    type: "Point",\n    coordinates: [110, 40],\n  },\n};\nvar geom = turf.getType(point);\n//="Point"\n'})}),"\n",(0,n.jsx)(t.h3,{id:"installation",children:"Installation"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-javascript",children:'$ npm install @turf/invariant\n\nimport { getType } from "@turf/invariant";\nconst result = getType(...);\n'})}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-javascript",children:'$ npm install @turf/turf\n\nimport * as turf from "@turf/turf";\nconst result = turf.getType(...);\n'})})]})}function p(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}}}]);