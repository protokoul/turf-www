"use strict";(self.webpackChunkturf_www=self.webpackChunkturf_www||[]).push([[99509],{9953:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>a,toc:()=>d});var r=t(74848),s=t(28453);t(36145),t(78478);const i={title:"segmentReduce"},l=void 0,a={id:"api/segmentReduce",title:"segmentReduce",description:"Description",source:"@site/versioned_docs/version-7.0.0/api/segmentReduce.mdx",sourceDirName:"api",slug:"/api/segmentReduce",permalink:"/docs/api/segmentReduce",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/versioned_docs/version-7.0.0/api/segmentReduce.mdx",tags:[],version:"7.0.0",frontMatter:{title:"segmentReduce"},sidebar:"apiSidebar",previous:{title:"segmentEach",permalink:"/docs/api/segmentEach"},next:{title:"collectionOf",permalink:"/docs/api/collectionOf"}},c={},d=[{value:"Description",id:"description",level:3},{value:"Parameters",id:"parameters",level:3},{value:"Returns",id:"returns",level:3},{value:"Examples",id:"examples",level:3},{value:"Installation",id:"installation",level:3}];function o(e){const n={a:"a",code:"code",h3:"h3",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h3,{id:"description",children:"Description"}),"\n",(0,r.jsx)(n.p,{children:"Reduce 2-vertex line segment in any GeoJSON object, similar to Array.reduce()\n(Multi)Point geometries do not contain segments therefore they are ignored during this operation."}),"\n",(0,r.jsx)(n.h3,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Name"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"geojson"}),(0,r.jsx)(n.td,{children:(0,r.jsxs)(n.strong,{children:[(0,r.jsx)(n.a,{href:"https://tools.ietf.org/html/rfc7946#section-3.3",children:"FeatureCollection"})," | ",(0,r.jsx)(n.a,{href:"https://tools.ietf.org/html/rfc7946#section-3.2",children:"Feature"})," | ",(0,r.jsx)(n.a,{href:"https://tools.ietf.org/html/rfc7946#section-3.1",children:"Geometry"})]})}),(0,r.jsx)(n.td,{children:"any GeoJSON"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"callback"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:"Function"})}),(0,r.jsx)(n.td,{children:"a method that takes (previousValue, currentSegment, currentIndex)"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:["initialValue",(0,r.jsx)("i",{children:"?"})]}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:"*"})}),(0,r.jsx)(n.td,{children:"Value to use as the first argument to the first call of the callback."})]})]})]}),"\n",(0,r.jsx)(n.h3,{id:"returns",children:"Returns"}),"\n",(0,r.jsx)("ul",{children:(0,r.jsx)(n.strong,{children:"void"})}),"\n",(0,r.jsx)(n.h3,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"var polygon = turf.polygon([\n  [\n    [-50, 5],\n    [-40, -10],\n    [-50, -10],\n    [-40, 5],\n    [-50, 5],\n  ],\n]);\n\n// Iterate over GeoJSON by 2-vertex segments\nturf.segmentReduce(\n  polygon,\n  function (\n    previousSegment,\n    currentSegment,\n    featureIndex,\n    multiFeatureIndex,\n    geometryIndex,\n    segmentIndex,\n  ) {\n    //= previousSegment\n    //= currentSegment\n    //= featureIndex\n    //= multiFeatureIndex\n    //= geometryIndex\n    //= segmentIndex\n    return currentSegment;\n  },\n);\n\n// Calculate the total number of segments\nvar initialValue = 0;\nvar total = turf.segmentReduce(\n  polygon,\n  function (previousValue) {\n    previousValue++;\n    return previousValue;\n  },\n  initialValue,\n);\n"})}),"\n",(0,r.jsx)(n.h3,{id:"installation",children:"Installation"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:'$ npm install @turf/meta\n\nimport { segmentReduce } from "@turf/meta";\nconst result = segmentReduce(...);\n'})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:'$ npm install @turf/turf\n\nimport * as turf from "@turf/turf";\nconst result = turf.segmentReduce(...);\n'})})]})}function u(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}}}]);