"use strict";(self.webpackChunkturf_www=self.webpackChunkturf_www||[]).push([[4496],{3130:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>i,toc:()=>d});var r=n(4848),a=n(8453);n(800),n(6145),n(8478);const s={title:"flattenEach"},l=void 0,i={id:"api/flattenEach",title:"flattenEach",description:"Description",source:"@site/docs/api/flattenEach.mdx",sourceDirName:"api",slug:"/api/flattenEach",permalink:"/docs/api/flattenEach",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/api/flattenEach.mdx",tags:[],version:"current",frontMatter:{title:"flattenEach"},sidebar:"apiSidebar",previous:{title:"featureReduce",permalink:"/docs/api/featureReduce"},next:{title:"flattenReduce",permalink:"/docs/api/flattenReduce"}},c={},d=[{value:"Description",id:"description",level:3},{value:"Parameters",id:"parameters",level:3},{value:"Returns",id:"returns",level:3},{value:"Examples",id:"examples",level:3},{value:"Installation",id:"installation",level:3}];function o(e){const t={a:"a",code:"code",h3:"h3",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h3,{id:"description",children:"Description"}),"\n",(0,r.jsx)(t.p,{children:"Iterate over flattened features in any GeoJSON object, similar to\nArray.forEach."}),"\n",(0,r.jsx)(t.h3,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Name"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"geojson"}),(0,r.jsx)(t.td,{children:(0,r.jsxs)(t.strong,{children:[(0,r.jsx)(t.a,{href:"https://tools.ietf.org/html/rfc7946#section-3.3",children:"FeatureCollection"})," | ",(0,r.jsx)(t.a,{href:"https://tools.ietf.org/html/rfc7946#section-3.2",children:"Feature"})," | ",(0,r.jsx)(t.a,{href:"https://tools.ietf.org/html/rfc7946#section-3.1",children:"Geometry"})]})}),(0,r.jsx)(t.td,{children:"any GeoJSON object"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"callback"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.strong,{children:"Function"})}),(0,r.jsx)(t.td,{children:"a method that takes (currentFeature, featureIndex, multiFeatureIndex)"})]})]})]}),"\n",(0,r.jsx)(t.h3,{id:"returns",children:"Returns"}),"\n",(0,r.jsx)(t.h3,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-javascript",children:'var features = turf.featureCollection([\n  turf.point([26, 37], { foo: "bar" }),\n  turf.multiPoint(\n    [\n      [40, 30],\n      [36, 53],\n    ],\n    { hello: "world" },\n  ),\n]);\n\nturf.flattenEach(\n  features,\n  function (currentFeature, featureIndex, multiFeatureIndex) {\n    //=currentFeature\n    //=featureIndex\n    //=multiFeatureIndex\n  },\n);\n'})}),"\n",(0,r.jsx)(t.h3,{id:"installation",children:"Installation"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-javascript",children:'$ npm install @turf/meta\n\nimport { flattenEach } from "@turf/meta";\nconst result = flattenEach(...);\n'})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-javascript",children:'$ npm install @turf/turf\n\nimport * as turf from "@turf/turf";\nconst result = turf.flattenEach(...);\n'})})]})}function h(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}}}]);