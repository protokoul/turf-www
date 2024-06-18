"use strict";(self.webpackChunkturf_www=self.webpackChunkturf_www||[]).push([[8212],{26098:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>a});var i=n(74848),o=n(28453);n(36145),n(78478);const r={title:"polygonize"},s=void 0,l={id:"api/polygonize",title:"polygonize",description:"Description",source:"@site/versioned_docs/version-7.0.0/api/polygonize.mdx",sourceDirName:"api",slug:"/api/polygonize",permalink:"/docs/api/polygonize",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/versioned_docs/version-7.0.0/api/polygonize.mdx",tags:[],version:"7.0.0",frontMatter:{title:"polygonize"},sidebar:"apiSidebar",previous:{title:"polygonToLine",permalink:"/docs/api/polygonToLine"},next:{title:"kinks",permalink:"/docs/api/kinks"}},c={},a=[{value:"Description",id:"description",level:3},{value:"Parameters",id:"parameters",level:3},{value:"Returns",id:"returns",level:3},{value:"Installation",id:"installation",level:3}];function d(e){const t={a:"a",code:"code",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h3,{id:"description",children:"Description"}),"\n",(0,i.jsxs)(t.p,{children:["Polygonizes ",(0,i.jsx)(t.a,{href:"https://tools.ietf.org/html/rfc7946#section-3.1.4",children:"(Multi)LineString(s)"})," into ",(0,i.jsx)(t.a,{href:"https://tools.ietf.org/html/rfc7946#section-3.1.6",children:"Polygons"}),"."]}),"\n",(0,i.jsxs)(t.p,{children:["Implementation of GEOSPolygonize function (",(0,i.jsx)(t.code,{children:"geos::operation::polygonize::Polygonizer"}),")."]}),"\n",(0,i.jsx)(t.p,{children:"Polygonizes a set of lines that represents edges in a planar graph. Edges must be correctly\nnoded, i.e., they must only meet at their endpoints."}),"\n",(0,i.jsx)(t.p,{children:"The implementation correctly handles:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Dangles: edges which have one or both ends which are not incident on another edge endpoint."}),"\n",(0,i.jsx)(t.li,{children:"Cut Edges (bridges): edges that are connected at both ends but which do not form part of a polygon."}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"parameters",children:"Parameters"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Name"}),(0,i.jsx)(t.th,{children:"Type"}),(0,i.jsx)(t.th,{children:"Description"})]})}),(0,i.jsx)(t.tbody,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"geoJson"}),(0,i.jsx)(t.td,{children:(0,i.jsxs)(t.strong,{children:[(0,i.jsx)(t.a,{href:"https://tools.ietf.org/html/rfc7946#section-3.3",children:"FeatureCollection"})," | ",(0,i.jsx)(t.a,{href:"https://tools.ietf.org/html/rfc7946#section-3.1",children:"Geometry"})," | ",(0,i.jsx)(t.a,{href:"https://tools.ietf.org/html/rfc7946#section-3.2",children:"Feature"}),"<",(0,i.jsx)(t.a,{href:"https://tools.ietf.org/html/rfc7946#section-3.1.4",children:"LineString"})," | ",(0,i.jsx)(t.a,{href:"https://tools.ietf.org/html/rfc7946#section-3.1.5",children:"MultiLineString"}),">"]})}),(0,i.jsx)(t.td,{children:"Lines in order to polygonize"})]})})]}),"\n",(0,i.jsx)(t.h3,{id:"returns",children:"Returns"}),"\n",(0,i.jsx)("ul",{children:(0,i.jsxs)(t.p,{children:[(0,i.jsxs)(t.strong,{children:[(0,i.jsx)(t.a,{href:"https://tools.ietf.org/html/rfc7946#section-3.3",children:"FeatureCollection"}),"<",(0,i.jsx)(t.a,{href:"https://tools.ietf.org/html/rfc7946#section-3.1.6",children:"Polygon"}),">"]})," Polygons created"]})}),"\n",(0,i.jsx)(t.h3,{id:"installation",children:"Installation"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-javascript",children:'$ npm install @turf/polygonize\n\nimport { polygonize } from "@turf/polygonize";\nconst result = polygonize(...);\n'})}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-javascript",children:'$ npm install @turf/turf\n\nimport * as turf from "@turf/turf";\nconst result = turf.polygonize(...);\n'})})]})}function h(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}}}]);