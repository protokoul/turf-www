(self.webpackChunkturf_www=self.webpackChunkturf_www||[]).push([[39340],{54106:(e,n,t)=>{"use strict";t.r(n),t.d(n,{Map0:()=>p,assets:()=>h,contentTitle:()=>x,default:()=>m,frontMatter:()=>d,metadata:()=>b,toc:()=>u});var r=t(74848),s=t(28453),o=t(67149),i=t(99589),l=t(44732),a=t(36145),c=t(78478);const d={title:"bbox"},x=void 0,b={id:"api/bbox",title:"bbox",description:"Description",source:"@site/docs/api/bbox.mdx",sourceDirName:"api",slug:"/api/bbox",permalink:"/docs/next/api/bbox",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/api/bbox.mdx",tags:[],version:"current",frontMatter:{title:"bbox"},sidebar:"apiSidebar",previous:{title:"area",permalink:"/docs/next/api/area"},next:{title:"bboxPolygon",permalink:"/docs/next/api/bboxPolygon"}},h={},u=[{value:"Description",id:"description",level:3},{value:"Parameters",id:"parameters",level:3},{value:"Returns",id:"returns",level:3},{value:"Examples",id:"examples",level:3},{value:"Installation",id:"installation",level:3}];function p(){var e=o.wi([[-74,40],[-78,42],[-82,35]]),n=i.Q(e),t={line:e,bboxPolygon:l.k(n)};return(0,r.jsx)(a.A,{addToMap:t})}function j(e){const n={a:"a",code:"code",em:"em",h3:"h3",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h3,{id:"description",children:"Description"}),"\n",(0,r.jsx)(n.p,{children:"Calculates the bounding box for any GeoJSON object, including FeatureCollection.\nUses geojson.bbox if available and options.recompute is not set."}),"\n",(0,r.jsx)(n.h3,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Name"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"geojson"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.a,{href:"https://tools.ietf.org/html/rfc7946#section-3",children:"GeoJSON"})})}),(0,r.jsx)(n.td,{children:"any GeoJSON object"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:["options",(0,r.jsx)("i",{children:"?"})]}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:"Object"})}),(0,r.jsxs)(n.td,{children:["Optional parameters ",(0,r.jsx)(n.em,{children:"(default {})"})]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:["options.recompute",(0,r.jsx)("i",{children:"?"})]}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:"boolean"})}),(0,r.jsx)(n.td,{children:"Whether to ignore an existing bbox property on geojson"})]})]})]}),"\n",(0,r.jsx)(n.h3,{id:"returns",children:"Returns"}),"\n",(0,r.jsx)("ul",{children:(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.a,{href:"https://tools.ietf.org/html/rfc7946#section-5",children:"BBox"})})," bbox extent in [minX, minY, maxX, maxY] order"]})}),"\n",(0,r.jsx)(n.h3,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"var line = turf.lineString([\n  [-74, 40],\n  [-78, 42],\n  [-82, 35],\n]);\nvar bbox = turf.bbox(line);\nvar bboxPolygon = turf.bboxPolygon(bbox);\n"})}),"\n","\n",(0,r.jsx)(c.A,{children:()=>(0,r.jsx)(p,{})}),"\n",(0,r.jsx)(n.h3,{id:"installation",children:"Installation"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:'$ npm install @turf/bbox\n\nimport { bbox } from "@turf/bbox";\nconst result = bbox(...);\n'})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:'$ npm install @turf/turf\n\nimport * as turf from "@turf/turf";\nconst result = turf.bbox(...);\n'})})]})}function m(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(j,{...e})}):j(e)}},42634:()=>{},44732:(e,n,t)=>{"use strict";t.d(n,{k:()=>s});var r=t(67149);function s(e,n={}){const t=Number(e[0]),s=Number(e[1]),o=Number(e[2]),i=Number(e[3]);if(6===e.length)throw new Error("@turf/bbox-polygon does not support BBox with 6 positions");const l=[t,s],a=[t,i],c=[o,i],d=[o,s];return(0,r.n1)([[l,d,c,a,l]],n.properties,{bbox:e,id:n.id})}(0,Object.defineProperty)(s,"name",{value:"bboxPolygon",configurable:!0})},99589:(e,n,t)=>{"use strict";t.d(n,{Q:()=>s});var r=t(63399);function s(e,n={}){if(null!=e.bbox&&!0!==n.recompute)return e.bbox;const t=[1/0,1/0,-1/0,-1/0];return(0,r.Fh)(e,(e=>{t[0]>e[0]&&(t[0]=e[0]),t[1]>e[1]&&(t[1]=e[1]),t[2]<e[0]&&(t[2]=e[0]),t[3]<e[1]&&(t[3]=e[1])})),t}(0,Object.defineProperty)(s,"name",{value:"bbox",configurable:!0})}}]);