"use strict";(self.webpackChunkturf_www=self.webpackChunkturf_www||[]).push([[38384],{4009:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>l,default:()=>h,frontMatter:()=>i,metadata:()=>d,toc:()=>o});var s=n(74848),r=n(28453);n(36145),n(78478);const i={title:"angle"},l=void 0,d={id:"api/angle",title:"angle",description:"Description",source:"@site/versioned_docs/version-7.0.0/api/angle.mdx",sourceDirName:"api",slug:"/api/angle",permalink:"/docs/api/angle",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/versioned_docs/version-7.0.0/api/angle.mdx",tags:[],version:"7.0.0",frontMatter:{title:"angle"},sidebar:"apiSidebar",previous:{title:"toWgs84",permalink:"/docs/api/toWgs84"},next:{title:"booleanIntersects",permalink:"/docs/api/booleanIntersects"}},a={},o=[{value:"Description",id:"description",level:3},{value:"Parameters",id:"parameters",level:3},{value:"Returns",id:"returns",level:3},{value:"Examples",id:"examples",level:3},{value:"Installation",id:"installation",level:3}];function c(e){const t={a:"a",code:"code",em:"em",h3:"h3",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h3,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(t.p,{children:["Finds the angle formed by two adjacent segments defined by 3 points. The result will be the (positive clockwise)\nangle with origin on the ",(0,s.jsx)(t.code,{children:"startPoint-midPoint"})," segment, or its explementary angle if required."]}),"\n",(0,s.jsx)(t.h3,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Name"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"startPoint"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.strong,{children:(0,s.jsx)(t.a,{href:"https://tools.ietf.org/html/rfc7946#section-3.1.1",children:"Coord"})})}),(0,s.jsx)(t.td,{children:"Start Point Coordinates"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"midPoint"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.strong,{children:(0,s.jsx)(t.a,{href:"https://tools.ietf.org/html/rfc7946#section-3.1.1",children:"Coord"})})}),(0,s.jsx)(t.td,{children:"Mid Point Coordinates"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"endPoint"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.strong,{children:(0,s.jsx)(t.a,{href:"https://tools.ietf.org/html/rfc7946#section-3.1.1",children:"Coord"})})}),(0,s.jsx)(t.td,{children:"End Point Coordinates"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsxs)(t.td,{children:["options",(0,s.jsx)("i",{children:"?"})]}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.strong,{children:"Object"})}),(0,s.jsxs)(t.td,{children:["Optional parameters ",(0,s.jsx)(t.em,{children:"(default {})"})]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsxs)(t.td,{children:["options.explementary",(0,s.jsx)("i",{children:"?"})]}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.strong,{children:"boolean"})}),(0,s.jsxs)(t.td,{children:["Returns the explementary angle instead (360 - angle) ",(0,s.jsx)(t.em,{children:"(default false)"})]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsxs)(t.td,{children:["options.mercator",(0,s.jsx)("i",{children:"?"})]}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.strong,{children:"boolean"})}),(0,s.jsxs)(t.td,{children:["if calculations should be performed over Mercator or WGS84 projection ",(0,s.jsx)(t.em,{children:"(default false)"})]})]})]})]}),"\n",(0,s.jsx)(t.h3,{id:"returns",children:"Returns"}),"\n",(0,s.jsx)("ul",{children:(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"number"})," Angle between the provided points, or its explementary."]})}),"\n",(0,s.jsx)(t.h3,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-javascript",children:"turf.angle([5, 5], [5, 6], [3, 4]);\n//=45\n"})}),"\n",(0,s.jsx)(t.h3,{id:"installation",children:"Installation"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-javascript",children:'$ npm install @turf/angle\n\nimport { angle } from "@turf/angle";\nconst result = angle(...);\n'})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-javascript",children:'$ npm install @turf/turf\n\nimport * as turf from "@turf/turf";\nconst result = turf.angle(...);\n'})})]})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}}}]);