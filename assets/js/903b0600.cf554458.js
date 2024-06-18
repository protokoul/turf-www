"use strict";(self.webpackChunkturf_www=self.webpackChunkturf_www||[]).push([[48993],{56909:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>a,contentTitle:()=>o,default:()=>h,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var s=t(74848),n=t(28453);t(36145),t(78478);const l={title:"coordAll"},o=void 0,i={id:"api/coordAll",title:"coordAll",description:"Description",source:"@site/versioned_docs/version-7.0.0/api/coordAll.mdx",sourceDirName:"api",slug:"/api/coordAll",permalink:"/docs/api/coordAll",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/versioned_docs/version-7.0.0/api/coordAll.mdx",tags:[],version:"7.0.0",frontMatter:{title:"coordAll"},sidebar:"apiSidebar",previous:{title:"clusterReduce",permalink:"/docs/api/clusterReduce"},next:{title:"coordEach",permalink:"/docs/api/coordEach"}},a={},c=[{value:"Description",id:"description",level:3},{value:"Parameters",id:"parameters",level:3},{value:"Returns",id:"returns",level:3},{value:"Examples",id:"examples",level:3},{value:"Installation",id:"installation",level:3}];function d(e){const r={a:"a",code:"code",h3:"h3",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.h3,{id:"description",children:"Description"}),"\n",(0,s.jsx)(r.p,{children:"Get all coordinates from any GeoJSON object."}),"\n",(0,s.jsx)(r.h3,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"Name"}),(0,s.jsx)(r.th,{children:"Type"}),(0,s.jsx)(r.th,{children:"Description"})]})}),(0,s.jsx)(r.tbody,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"geojson"}),(0,s.jsx)(r.td,{children:(0,s.jsxs)(r.strong,{children:[(0,s.jsx)(r.a,{href:"https://tools.ietf.org/html/rfc7946#section-3.3",children:"FeatureCollection"})," | ",(0,s.jsx)(r.a,{href:"https://tools.ietf.org/html/rfc7946#section-3.2",children:"Feature"})," | ",(0,s.jsx)(r.a,{href:"https://tools.ietf.org/html/rfc7946#section-3.1",children:"Geometry"})]})}),(0,s.jsx)(r.td,{children:"any GeoJSON object"})]})})]}),"\n",(0,s.jsx)(r.h3,{id:"returns",children:"Returns"}),"\n",(0,s.jsx)("ul",{children:(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:"Array<Array<number>>"})," coordinate position array"]})}),"\n",(0,s.jsx)(r.h3,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-javascript",children:'var features = turf.featureCollection([\n  turf.point([26, 37], { foo: "bar" }),\n  turf.point([36, 53], { hello: "world" }),\n]);\n\nvar coords = turf.coordAll(features);\n//= [[26, 37], [36, 53]]\n'})}),"\n",(0,s.jsx)(r.h3,{id:"installation",children:"Installation"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-javascript",children:'$ npm install @turf/meta\n\nimport { coordAll } from "@turf/meta";\nconst result = coordAll(...);\n'})}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-javascript",children:'$ npm install @turf/turf\n\nimport * as turf from "@turf/turf";\nconst result = turf.coordAll(...);\n'})})]})}function h(e={}){const{wrapper:r}={...(0,n.R)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}}}]);