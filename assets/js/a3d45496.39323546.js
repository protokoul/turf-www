"use strict";(self.webpackChunkturf_www=self.webpackChunkturf_www||[]).push([[761],{6243:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var n=r(4848),a=r(8453);r(800),r(6145),r(8478);const s={title:"booleanEqual"},l=void 0,i={id:"api/booleanEqual",title:"booleanEqual",description:"Description",source:"@site/docs/api/booleanEqual.mdx",sourceDirName:"api",slug:"/api/booleanEqual",permalink:"/docs/api/booleanEqual",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/api/booleanEqual.mdx",tags:[],version:"current",frontMatter:{title:"booleanEqual"},sidebar:"apiSidebar",previous:{title:"booleanDisjoint",permalink:"/docs/api/booleanDisjoint"},next:{title:"booleanOverlap",permalink:"/docs/api/booleanOverlap"}},o={},c=[{value:"Description",id:"description",level:3},{value:"Parameters",id:"parameters",level:3},{value:"Returns",id:"returns",level:3},{value:"Examples",id:"examples",level:3},{value:"Installation",id:"installation",level:3}];function d(e){const t={a:"a",code:"code",h3:"h3",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h3,{id:"description",children:"Description"}),"\n",(0,n.jsxs)(t.p,{children:["Determine whether two geometries of the same type have identical X,Y coordinate values.\nSee ",(0,n.jsx)(t.a,{href:"http://edndoc.esri.com/arcsde/9.0/general_topics/understand_spatial_relations.htm",children:"http://edndoc.esri.com/arcsde/9.0/general_topics/understand_spatial_relations.htm"})]}),"\n",(0,n.jsx)(t.h3,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"feature1"}),(0,n.jsx)(t.td,{children:(0,n.jsxs)(t.strong,{children:[(0,n.jsx)(t.a,{href:"https://tools.ietf.org/html/rfc7946#section-3.1",children:"Geometry"})," | ",(0,n.jsx)(t.a,{href:"https://tools.ietf.org/html/rfc7946#section-3.2",children:"Feature"})]})}),(0,n.jsx)(t.td,{children:"GeoJSON input"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"feature2"}),(0,n.jsx)(t.td,{children:(0,n.jsxs)(t.strong,{children:[(0,n.jsx)(t.a,{href:"https://tools.ietf.org/html/rfc7946#section-3.1",children:"Geometry"})," | ",(0,n.jsx)(t.a,{href:"https://tools.ietf.org/html/rfc7946#section-3.2",children:"Feature"})]})}),(0,n.jsx)(t.td,{children:"GeoJSON input"})]})]})]}),"\n",(0,n.jsx)(t.h3,{id:"returns",children:"Returns"}),"\n",(0,n.jsx)("ul",{children:(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"boolean"})," true if the objects are equal, false otherwise"]})}),"\n",(0,n.jsx)(t.h3,{id:"examples",children:"Examples"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-javascript",children:"var pt1 = turf.point([0, 0]);\nvar pt2 = turf.point([0, 0]);\nvar pt3 = turf.point([1, 1]);\n\nturf.booleanEqual(pt1, pt2);\n//= true\nturf.booleanEqual(pt2, pt3);\n//= false\n"})}),"\n",(0,n.jsx)(t.h3,{id:"installation",children:"Installation"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-javascript",children:'$ npm install @turf/boolean-equal\n\nimport { booleanEqual } from "@turf/boolean-equal";\nconst result = booleanEqual(...);\n'})}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-javascript",children:'$ npm install @turf/turf\n\nimport * as turf from "@turf/turf";\nconst result = turf.booleanEqual(...);\n'})})]})}function h(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}}}]);