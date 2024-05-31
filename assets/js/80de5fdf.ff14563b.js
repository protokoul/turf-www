"use strict";(self.webpackChunkturf_www=self.webpackChunkturf_www||[]).push([[6985],{5393:(e,t,r)=>{r.r(t),r.d(t,{Map0:()=>u,assets:()=>p,contentTitle:()=>c,default:()=>x,frontMatter:()=>o,metadata:()=>d,toc:()=>h});var s=r(4848),n=r(8453),a=r(800),i=r(6145),l=r(8478);const o={title:"sample"},c=void 0,d={id:"api/sample",title:"sample",description:"Description",source:"@site/docs/api/sample.mdx",sourceDirName:"api",slug:"/api/sample",permalink:"/docs/api/sample",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/api/sample.mdx",tags:[],version:"current",frontMatter:{title:"sample"},sidebar:"apiSidebar",previous:{title:"randomPosition",permalink:"/docs/api/randomPosition"},next:{title:"interpolate",permalink:"/docs/api/interpolate"}},p={},h=[{value:"Description",id:"description",level:3},{value:"Parameters",id:"parameters",level:3},{value:"Returns",id:"returns",level:3},{value:"Examples",id:"examples",level:3},{value:"Installation",id:"installation",level:3}];function u(){var e=a._eC(100,{bbox:[-80,30,-60,60]}),t=a.XM1(e,5),r={points:e,sample:t};return a.usj(t,(function(e){e.properties["marker-size"]="large",e.properties["marker-color"]="#000"})),(0,s.jsx)(i.A,{addToMap:r})}function m(e){const t={a:"a",code:"code",h3:"h3",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h3,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(t.p,{children:["Takes a ",(0,s.jsx)(t.a,{href:"https://tools.ietf.org/html/rfc7946#section-3.3",children:"FeatureCollection"})," and returns a FeatureCollection with given number of ",(0,s.jsx)(t.a,{href:"https://tools.ietf.org/html/rfc7946#section-3.2",children:"features"})," at random."]}),"\n",(0,s.jsx)(t.h3,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Name"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"featurecollection"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.strong,{children:(0,s.jsx)(t.a,{href:"https://tools.ietf.org/html/rfc7946#section-3.3",children:"FeatureCollection"})})}),(0,s.jsx)(t.td,{children:"set of input features"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"num"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.strong,{children:"number"})}),(0,s.jsx)(t.td,{children:"number of features to select"})]})]})]}),"\n",(0,s.jsx)(t.h3,{id:"returns",children:"Returns"}),"\n",(0,s.jsx)("ul",{children:(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:(0,s.jsx)(t.a,{href:"https://tools.ietf.org/html/rfc7946#section-3.3",children:"FeatureCollection"})})," a FeatureCollection with ",(0,s.jsx)(t.code,{children:"n"})," features"]})}),"\n",(0,s.jsx)(t.h3,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-javascript",children:"var points = turf.randomPoint(100, { bbox: [-80, 30, -60, 60] });\n\nvar sample = turf.sample(points, 5);\n"})}),"\n","\n",(0,s.jsx)(l.A,{children:()=>(0,s.jsx)(u,{})}),"\n",(0,s.jsx)(t.h3,{id:"installation",children:"Installation"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-javascript",children:'$ npm install @turf/sample\n\nimport { sample } from "@turf/sample";\nconst result = sample(...);\n'})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-javascript",children:'$ npm install @turf/turf\n\nimport * as turf from "@turf/turf";\nconst result = turf.sample(...);\n'})})]})}function x(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(m,{...e})}):m(e)}}}]);