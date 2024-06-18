"use strict";(self.webpackChunkturf_www=self.webpackChunkturf_www||[]).push([[7786],{39449:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>a});var s=r(74848),t=r(28453);r(36145),r(78478);const i={title:"randomPolygon"},o=void 0,l={id:"api/randomPolygon",title:"randomPolygon",description:"Description",source:"@site/versioned_docs/version-7.0.0/api/randomPolygon.mdx",sourceDirName:"api",slug:"/api/randomPolygon",permalink:"/docs/api/randomPolygon",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/versioned_docs/version-7.0.0/api/randomPolygon.mdx",tags:[],version:"7.0.0",frontMatter:{title:"randomPolygon"},sidebar:"apiSidebar",previous:{title:"randomPoint",permalink:"/docs/api/randomPoint"},next:{title:"randomPosition",permalink:"/docs/api/randomPosition"}},d={},a=[{value:"Description",id:"description",level:3},{value:"Parameters",id:"parameters",level:3},{value:"Returns",id:"returns",level:3},{value:"Examples",id:"examples",level:3},{value:"Installation",id:"installation",level:3}];function c(e){const n={a:"a",code:"code",em:"em",h3:"h3",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h3,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(n.p,{children:["Returns a random ",(0,s.jsx)(n.a,{href:"polygon",children:"polygon"}),"."]}),"\n",(0,s.jsx)(n.h3,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Name"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{children:["count",(0,s.jsx)("i",{children:"?"})]}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.strong,{children:"number"})}),(0,s.jsxs)(n.td,{children:["how many geometries will be generated ",(0,s.jsx)(n.em,{children:"(default 1)"})]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{children:["options",(0,s.jsx)("i",{children:"?"})]}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.strong,{children:"Object"})}),(0,s.jsxs)(n.td,{children:["Optional parameters ",(0,s.jsx)(n.em,{children:"(default {})"})]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{children:["options.bbox",(0,s.jsx)("i",{children:"?"})]}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.strong,{children:"Array<number>"})}),(0,s.jsxs)(n.td,{children:["a bounding box inside of which geometries are placed. ",(0,s.jsx)(n.em,{children:"(default [-180,-90,180,90])"})]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{children:["options.num_vertices",(0,s.jsx)("i",{children:"?"})]}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.strong,{children:"number"})}),(0,s.jsxs)(n.td,{children:["is how many coordinates each LineString will contain. ",(0,s.jsx)(n.em,{children:"(default 10)"})]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{children:["options.max_radial_length",(0,s.jsx)("i",{children:"?"})]}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.strong,{children:"number"})}),(0,s.jsxs)(n.td,{children:["is the maximum number of decimal degrees latitude or longitude that a vertex can reach out of the center of the Polygon. ",(0,s.jsx)(n.em,{children:"(default 10)"})]})]})]})]}),"\n",(0,s.jsx)(n.h3,{id:"returns",children:"Returns"}),"\n",(0,s.jsx)("ul",{children:(0,s.jsxs)(n.p,{children:[(0,s.jsxs)(n.strong,{children:[(0,s.jsx)(n.a,{href:"https://tools.ietf.org/html/rfc7946#section-3.3",children:"FeatureCollection"}),"<",(0,s.jsx)(n.a,{href:"https://tools.ietf.org/html/rfc7946#section-3.1.6",children:"Polygon"}),">"]})," GeoJSON FeatureCollection of polygons"]})}),"\n",(0,s.jsx)(n.h3,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"var polygons = turf.randomPolygon(25, { bbox: [-180, -90, 180, 90] });\n// => polygons\n"})}),"\n",(0,s.jsx)(n.h3,{id:"installation",children:"Installation"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:'$ npm install @turf/random\n\nimport { randomPolygon } from "@turf/random";\nconst result = randomPolygon(...);\n'})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:'$ npm install @turf/turf\n\nimport * as turf from "@turf/turf";\nconst result = turf.randomPolygon(...);\n'})})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}}}]);