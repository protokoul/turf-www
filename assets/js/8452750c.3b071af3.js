"use strict";(self.webpackChunkturf_www=self.webpackChunkturf_www||[]).push([[38529],{81491:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>i,contentTitle:()=>a,default:()=>h,frontMatter:()=>s,metadata:()=>c,toc:()=>d});var n=t(74848),o=t(28453);t(36145),t(78478);const s={title:"coordEach"},a=void 0,c={id:"api/coordEach",title:"coordEach",description:"Description",source:"@site/docs/api/coordEach.mdx",sourceDirName:"api",slug:"/api/coordEach",permalink:"/docs/next/api/coordEach",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/api/coordEach.mdx",tags:[],version:"current",frontMatter:{title:"coordEach"},sidebar:"apiSidebar",previous:{title:"coordAll",permalink:"/docs/next/api/coordAll"},next:{title:"coordReduce",permalink:"/docs/next/api/coordReduce"}},i={},d=[{value:"Description",id:"description",level:3},{value:"Parameters",id:"parameters",level:3},{value:"Returns",id:"returns",level:3},{value:"Examples",id:"examples",level:3},{value:"Installation",id:"installation",level:3}];function l(e){const r={a:"a",code:"code",em:"em",h3:"h3",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.h3,{id:"description",children:"Description"}),"\n",(0,n.jsx)(r.p,{children:"Iterate over coordinates in any GeoJSON object, similar to Array.forEach()"}),"\n",(0,n.jsx)(r.h3,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Name"}),(0,n.jsx)(r.th,{children:"Type"}),(0,n.jsx)(r.th,{children:"Description"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"geojson"}),(0,n.jsx)(r.td,{children:(0,n.jsxs)(r.strong,{children:[(0,n.jsx)(r.a,{href:"https://tools.ietf.org/html/rfc7946#section-3.3",children:"FeatureCollection"})," | ",(0,n.jsx)(r.a,{href:"https://tools.ietf.org/html/rfc7946#section-3.2",children:"Feature"})," | ",(0,n.jsx)(r.a,{href:"https://tools.ietf.org/html/rfc7946#section-3.1",children:"Geometry"})]})}),(0,n.jsx)(r.td,{children:"any GeoJSON object"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"callback"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.strong,{children:"Function"})}),(0,n.jsx)(r.td,{children:"a method that takes (currentCoord, coordIndex, featureIndex, multiFeatureIndex)"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsxs)(r.td,{children:["excludeWrapCoord",(0,n.jsx)("i",{children:"?"})]}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.strong,{children:"boolean"})}),(0,n.jsxs)(r.td,{children:["whether or not to include the final coordinate of LinearRings that wraps the ring in its iteration. ",(0,n.jsx)(r.em,{children:"(default false)"})]})]})]})]}),"\n",(0,n.jsx)(r.h3,{id:"returns",children:"Returns"}),"\n",(0,n.jsx)("ul",{children:(0,n.jsx)(r.strong,{children:"void"})}),"\n",(0,n.jsx)(r.h3,{id:"examples",children:"Examples"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-javascript",children:'var features = turf.featureCollection([\n  turf.point([26, 37], { foo: "bar" }),\n  turf.point([36, 53], { hello: "world" }),\n]);\n\nturf.coordEach(\n  features,\n  function (\n    currentCoord,\n    coordIndex,\n    featureIndex,\n    multiFeatureIndex,\n    geometryIndex,\n  ) {\n    //=currentCoord\n    //=coordIndex\n    //=featureIndex\n    //=multiFeatureIndex\n    //=geometryIndex\n  },\n);\n'})}),"\n",(0,n.jsx)(r.h3,{id:"installation",children:"Installation"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-javascript",children:'$ npm install @turf/meta\n\nimport { coordEach } from "@turf/meta";\nconst result = coordEach(...);\n'})}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-javascript",children:'$ npm install @turf/turf\n\nimport * as turf from "@turf/turf";\nconst result = turf.coordEach(...);\n'})})]})}function h(e={}){const{wrapper:r}={...(0,o.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}}}]);