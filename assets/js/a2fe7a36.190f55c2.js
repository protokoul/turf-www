"use strict";(self.webpackChunkturf_www=self.webpackChunkturf_www||[]).push([[2650],{2103:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>a,contentTitle:()=>d,default:()=>h,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var t=r(4848),i=r(8453);r(800),r(6145),r(8478);const s={title:"randomLineString"},d=void 0,l={id:"api/randomLineString",title:"randomLineString",description:"Description",source:"@site/docs/api/randomLineString.mdx",sourceDirName:"api",slug:"/api/randomLineString",permalink:"/docs/api/randomLineString",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/api/randomLineString.mdx",tags:[],version:"current",frontMatter:{title:"randomLineString"},sidebar:"apiSidebar",previous:{title:"polygon",permalink:"/docs/api/polygon"},next:{title:"randomPoint",permalink:"/docs/api/randomPoint"}},a={},c=[{value:"Description",id:"description",level:3},{value:"Parameters",id:"parameters",level:3},{value:"Returns",id:"returns",level:3},{value:"Examples",id:"examples",level:3},{value:"Installation",id:"installation",level:3}];function o(e){const n={a:"a",code:"code",em:"em",h3:"h3",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h3,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(n.p,{children:["Returns a random ",(0,t.jsx)(n.a,{href:"linestring",children:"linestring"}),"."]}),"\n",(0,t.jsx)(n.h3,{id:"parameters",children:"Parameters"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Name"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:["count",(0,t.jsx)("i",{children:"?"})]}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:"number"})}),(0,t.jsxs)(n.td,{children:["how many geometries will be generated ",(0,t.jsx)(n.em,{children:"(default 1)"})]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:["options",(0,t.jsx)("i",{children:"?"})]}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:"Object"})}),(0,t.jsxs)(n.td,{children:["Optional parameters ",(0,t.jsx)(n.em,{children:"(default {})"})]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:["options.bbox",(0,t.jsx)("i",{children:"?"})]}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:"Array<number>"})}),(0,t.jsxs)(n.td,{children:["a bounding box inside of which geometries are placed. ",(0,t.jsx)(n.em,{children:"(default [-180,-90,180,90])"})]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:["options.num_vertices",(0,t.jsx)("i",{children:"?"})]}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:"number"})}),(0,t.jsxs)(n.td,{children:["is how many coordinates each LineString will contain. ",(0,t.jsx)(n.em,{children:"(default 10)"})]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:["options.max_length",(0,t.jsx)("i",{children:"?"})]}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:"number"})}),(0,t.jsxs)(n.td,{children:["is the maximum number of decimal degrees that a vertex can be from its predecessor ",(0,t.jsx)(n.em,{children:"(default 0.0001)"})]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:["options.max_rotation",(0,t.jsx)("i",{children:"?"})]}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:"number"})}),(0,t.jsxs)(n.td,{children:["is the maximum number of radians that a line segment can turn from the previous segment. ",(0,t.jsx)(n.em,{children:"(default Math.PI/8)"})]})]})]})]}),"\n",(0,t.jsx)(n.h3,{id:"returns",children:"Returns"}),"\n",(0,t.jsx)("ul",{children:(0,t.jsxs)(n.p,{children:[(0,t.jsxs)(n.strong,{children:[(0,t.jsx)(n.a,{href:"https://tools.ietf.org/html/rfc7946#section-3.3",children:"FeatureCollection"}),"<",(0,t.jsx)(n.a,{href:"https://tools.ietf.org/html/rfc7946#section-3.1.4",children:"LineString"}),">"]})," GeoJSON FeatureCollection of linestrings"]})}),"\n",(0,t.jsx)(n.h3,{id:"examples",children:"Examples"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:"var lineStrings = turf.randomLineString(25, { bbox: [-180, -90, 180, 90] });\n// => lineStrings\n"})}),"\n",(0,t.jsx)(n.h3,{id:"installation",children:"Installation"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:'$ npm install @turf/random\n\nimport { randomLineString } from "@turf/random";\nconst result = randomLineString(...);\n'})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:'$ npm install @turf/turf\n\nimport * as turf from "@turf/turf";\nconst result = turf.randomLineString(...);\n'})})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}}}]);