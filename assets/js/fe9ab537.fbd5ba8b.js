"use strict";(self.webpackChunkturf_www=self.webpackChunkturf_www||[]).push([[58475],{24165:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>o});var n=r(74848),s=r(28453);r(36145),r(78478);const a={title:"geomReduce"},i=void 0,l={id:"api/geomReduce",title:"geomReduce",description:"Description",source:"@site/docs/api/geomReduce.mdx",sourceDirName:"api",slug:"/api/geomReduce",permalink:"/docs/next/api/geomReduce",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/api/geomReduce.mdx",tags:[],version:"current",frontMatter:{title:"geomReduce"},sidebar:"apiSidebar",previous:{title:"geomEach",permalink:"/docs/next/api/geomEach"},next:{title:"getCluster",permalink:"/docs/next/api/getCluster"}},c={},o=[{value:"Description",id:"description",level:3},{value:"Parameters",id:"parameters",level:3},{value:"Returns",id:"returns",level:3},{value:"Examples",id:"examples",level:3},{value:"Installation",id:"installation",level:3}];function d(e){const t={a:"a",code:"code",h3:"h3",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h3,{id:"description",children:"Description"}),"\n",(0,n.jsx)(t.p,{children:"Reduce geometry in any GeoJSON object, similar to Array.reduce()."}),"\n",(0,n.jsx)(t.h3,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"geojson"}),(0,n.jsx)(t.td,{children:(0,n.jsxs)(t.strong,{children:[(0,n.jsx)(t.a,{href:"https://tools.ietf.org/html/rfc7946#section-3.3",children:"FeatureCollection"})," | ",(0,n.jsx)(t.a,{href:"https://tools.ietf.org/html/rfc7946#section-3.2",children:"Feature"})," | ",(0,n.jsx)(t.a,{href:"https://tools.ietf.org/html/rfc7946#section-3.1",children:"Geometry"})]})}),(0,n.jsx)(t.td,{children:"any GeoJSON object"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"callback"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:"Function"})}),(0,n.jsx)(t.td,{children:"a method that takes (previousValue, currentGeometry, featureIndex, featureProperties, featureBBox, featureId)"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsxs)(t.td,{children:["initialValue",(0,n.jsx)("i",{children:"?"})]}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:"*"})}),(0,n.jsx)(t.td,{children:"Value to use as the first argument to the first call of the callback."})]})]})]}),"\n",(0,n.jsx)(t.h3,{id:"returns",children:"Returns"}),"\n",(0,n.jsx)("ul",{children:(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"*"})," The value that results from the reduction."]})}),"\n",(0,n.jsx)(t.h3,{id:"examples",children:"Examples"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-javascript",children:'var features = turf.featureCollection([\n  turf.point([26, 37], { foo: "bar" }),\n  turf.point([36, 53], { hello: "world" }),\n]);\n\nturf.geomReduce(\n  features,\n  function (\n    previousValue,\n    currentGeometry,\n    featureIndex,\n    featureProperties,\n    featureBBox,\n    featureId,\n  ) {\n    //=previousValue\n    //=currentGeometry\n    //=featureIndex\n    //=featureProperties\n    //=featureBBox\n    //=featureId\n    return currentGeometry;\n  },\n);\n'})}),"\n",(0,n.jsx)(t.h3,{id:"installation",children:"Installation"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-javascript",children:'$ npm install @turf/meta\n\nimport { geomReduce } from "@turf/meta";\nconst result = geomReduce(...);\n'})}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-javascript",children:'$ npm install @turf/turf\n\nimport * as turf from "@turf/turf";\nconst result = turf.geomReduce(...);\n'})})]})}function u(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}}}]);