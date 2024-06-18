(self.webpackChunkturf_www=self.webpackChunkturf_www||[]).push([[79953],{31255:(t,e,n)=>{"use strict";n.r(e),n.d(e,{Map0:()=>f,assets:()=>d,contentTitle:()=>a,default:()=>x,frontMatter:()=>p,metadata:()=>c,toc:()=>u});var i=n(74848),r=n(28453),s=n(67149),o=n(61430),l=n(36145),h=n(78478);const p={title:"kinks"},a=void 0,c={id:"api/kinks",title:"kinks",description:"Description",source:"@site/docs/api/kinks.mdx",sourceDirName:"api",slug:"/api/kinks",permalink:"/docs/next/api/kinks",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/api/kinks.mdx",tags:[],version:"current",frontMatter:{title:"kinks"},sidebar:"apiSidebar",previous:{title:"polygonize",permalink:"/docs/next/api/polygonize"},next:{title:"lineArc",permalink:"/docs/next/api/lineArc"}},d={},u=[{value:"Description",id:"description",level:3},{value:"Parameters",id:"parameters",level:3},{value:"Returns",id:"returns",level:3},{value:"Examples",id:"examples",level:3},{value:"Installation",id:"installation",level:3}];function f(){var t=s.n1([[[-12.034835,8.901183],[-12.060413,8.899826],[-12.03638,8.873199],[-12.059383,8.871418],[-12.034835,8.901183]]]),e={poly:t,kinks:o.n(t)};return(0,i.jsx)(l.A,{addToMap:e})}function g(t){const e={a:"a",code:"code",h3:"h3",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...t.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h3,{id:"description",children:"Description"}),"\n",(0,i.jsxs)(e.p,{children:["Takes a ",(0,i.jsx)(e.a,{href:"https://tools.ietf.org/html/rfc7946#section-3.1.4",children:"linestring"}),", ",(0,i.jsx)(e.a,{href:"https://tools.ietf.org/html/rfc7946#section-3.1.5",children:"multi-linestring"}),",\n",(0,i.jsx)(e.a,{href:"https://tools.ietf.org/html/rfc7946#section-3.1.7",children:"multi-polygon"})," or ",(0,i.jsx)(e.a,{href:"https://tools.ietf.org/html/rfc7946#section-3.1.6",children:"polygon"})," and\nreturns ",(0,i.jsx)(e.a,{href:"https://tools.ietf.org/html/rfc7946#section-3.1.2",children:"points"})," at all self-intersections."]}),"\n",(0,i.jsx)(e.h3,{id:"parameters",children:"Parameters"}),"\n",(0,i.jsxs)(e.table,{children:[(0,i.jsx)(e.thead,{children:(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.th,{children:"Name"}),(0,i.jsx)(e.th,{children:"Type"}),(0,i.jsx)(e.th,{children:"Description"})]})}),(0,i.jsx)(e.tbody,{children:(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"featureIn"}),(0,i.jsx)(e.td,{children:(0,i.jsxs)(e.strong,{children:[(0,i.jsx)(e.a,{href:"https://tools.ietf.org/html/rfc7946#section-3.2",children:"Feature"}),"<",(0,i.jsx)(e.a,{href:"https://tools.ietf.org/html/rfc7946#section-3.1.4",children:"LineString"})," | ",(0,i.jsx)(e.a,{href:"https://tools.ietf.org/html/rfc7946#section-3.1.5",children:"MultiLineString"})," | ",(0,i.jsx)(e.a,{href:"https://tools.ietf.org/html/rfc7946#section-3.1.7",children:"MultiPolygon"})," | ",(0,i.jsx)(e.a,{href:"https://tools.ietf.org/html/rfc7946#section-3.1.6",children:"Polygon"}),">"]})}),(0,i.jsx)(e.td,{children:"input feature"})]})})]}),"\n",(0,i.jsx)(e.h3,{id:"returns",children:"Returns"}),"\n",(0,i.jsx)("ul",{children:(0,i.jsxs)(e.p,{children:[(0,i.jsxs)(e.strong,{children:[(0,i.jsx)(e.a,{href:"https://tools.ietf.org/html/rfc7946#section-3.3",children:"FeatureCollection"}),"<",(0,i.jsx)(e.a,{href:"https://tools.ietf.org/html/rfc7946#section-3.1.2",children:"Point"}),">"]})," self-intersections"]})}),"\n",(0,i.jsx)(e.h3,{id:"examples",children:"Examples"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-javascript",children:"var poly = turf.polygon([\n  [\n    [-12.034835, 8.901183],\n    [-12.060413, 8.899826],\n    [-12.03638, 8.873199],\n    [-12.059383, 8.871418],\n    [-12.034835, 8.901183],\n  ],\n]);\n\nvar kinks = turf.kinks(poly);\n"})}),"\n","\n",(0,i.jsx)(h.A,{children:()=>(0,i.jsx)(f,{})}),"\n",(0,i.jsx)(e.h3,{id:"installation",children:"Installation"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-javascript",children:'$ npm install @turf/kinks\n\nimport { kinks } from "@turf/kinks";\nconst result = kinks(...);\n'})}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-javascript",children:'$ npm install @turf/turf\n\nimport * as turf from "@turf/turf";\nconst result = turf.kinks(...);\n'})})]})}function x(t={}){const{wrapper:e}={...(0,r.R)(),...t.components};return e?(0,i.jsx)(e,{...t,children:(0,i.jsx)(g,{...t})}):g(t)}},23494:(t,e,n)=>{"use strict";n.d(e,{A:()=>f});class i{constructor(t=[],e=r){if(this.data=t,this.length=this.data.length,this.compare=e,this.length>0)for(let n=(this.length>>1)-1;n>=0;n--)this._down(n)}push(t){this.data.push(t),this.length++,this._up(this.length-1)}pop(){if(0===this.length)return;const t=this.data[0],e=this.data.pop();return this.length--,this.length>0&&(this.data[0]=e,this._down(0)),t}peek(){return this.data[0]}_up(t){const{data:e,compare:n}=this,i=e[t];for(;t>0;){const r=t-1>>1,s=e[r];if(n(i,s)>=0)break;e[t]=s,t=r}e[t]=i}_down(t){const{data:e,compare:n}=this,i=this.length>>1,r=e[t];for(;t<i;){let i=1+(t<<1),s=e[i];const o=i+1;if(o<this.length&&n(e[o],s)<0&&(i=o,s=e[o]),n(s,r)>=0)break;e[t]=s,t=i}e[t]=r}}function r(t,e){return t<e?-1:t>e?1:0}function s(t,e){return t.p.x>e.p.x?1:t.p.x<e.p.x?-1:t.p.y!==e.p.y?t.p.y>e.p.y?1:-1:1}function o(t,e){return t.rightSweepEvent.p.x>e.rightSweepEvent.p.x?1:t.rightSweepEvent.p.x<e.rightSweepEvent.p.x?-1:t.rightSweepEvent.p.y!==e.rightSweepEvent.p.y?t.rightSweepEvent.p.y<e.rightSweepEvent.p.y?1:-1:1}class l{constructor(t,e,n,i){this.p={x:t[0],y:t[1]},this.featureId=e,this.ringId=n,this.eventId=i,this.otherEvent=null,this.isLeftEndpoint=null}isSamePoint(t){return this.p.x===t.p.x&&this.p.y===t.p.y}}let h=0,p=0,a=0;function c(t,e){const n="Feature"===t.type?t.geometry:t;let i=n.coordinates;"Polygon"!==n.type&&"MultiLineString"!==n.type||(i=[i]),"LineString"===n.type&&(i=[[i]]);for(let r=0;r<i.length;r++)for(let t=0;t<i[r].length;t++){let n=i[r][t][0],o=null;p+=1;for(let c=0;c<i[r][t].length-1;c++){o=i[r][t][c+1];const d=new l(n,h,p,a),u=new l(o,h,p,a+1);d.otherEvent=u,u.otherEvent=d,s(d,u)>0?(u.isLeftEndpoint=!0,d.isLeftEndpoint=!1):(d.isLeftEndpoint=!0,u.isLeftEndpoint=!1),e.push(d),e.push(u),n=o,a+=1}}h+=1}class d{constructor(t){this.leftSweepEvent=t,this.rightSweepEvent=t.otherEvent}}function u(t,e){if(null===t||null===e)return!1;if(t.leftSweepEvent.ringId===e.leftSweepEvent.ringId&&(t.rightSweepEvent.isSamePoint(e.leftSweepEvent)||t.rightSweepEvent.isSamePoint(e.leftSweepEvent)||t.rightSweepEvent.isSamePoint(e.rightSweepEvent)||t.leftSweepEvent.isSamePoint(e.leftSweepEvent)||t.leftSweepEvent.isSamePoint(e.rightSweepEvent)))return!1;const n=t.leftSweepEvent.p.x,i=t.leftSweepEvent.p.y,r=t.rightSweepEvent.p.x,s=t.rightSweepEvent.p.y,o=e.leftSweepEvent.p.x,l=e.leftSweepEvent.p.y,h=e.rightSweepEvent.p.x,p=e.rightSweepEvent.p.y,a=(p-l)*(r-n)-(h-o)*(s-i),c=(h-o)*(i-l)-(p-l)*(n-o),d=(r-n)*(i-l)-(s-i)*(n-o);if(0===a)return!1;const u=c/a,f=d/a;if(u>=0&&u<=1&&f>=0&&f<=1){return[n+u*(r-n),i+u*(s-i)]}return!1}const f=function(t,e){const n=new i([],s);return function(t,e){if("FeatureCollection"===t.type){const n=t.features;for(let t=0;t<n.length;t++)c(n[t],e)}else c(t,e)}(t,n),function(t,e){e=e||!1;const n=[],r=new i([],o);for(;t.length;){const i=t.pop();if(i.isLeftEndpoint){const t=new d(i);for(let s=0;s<r.data.length;s++){const o=r.data[s];if(e&&o.leftSweepEvent.featureId===i.featureId)continue;const l=u(t,o);!1!==l&&n.push(l)}r.push(t)}else!1===i.isLeftEndpoint&&r.pop()}return n}(n,e)}},42634:()=>{},61430:(t,e,n)=>{"use strict";n.d(e,{n:()=>l});var i=n(67149),r=n(23494),s=Object.defineProperty,o=r.A;function l(t){const e={type:"FeatureCollection",features:[]};if("Feature"===t.type&&("Point"===t.geometry.type||"MultiPoint"===t.geometry.type))throw new Error("Input must be a LineString, MultiLineString, Polygon, or MultiPolygon Feature or Geometry");const n=o(t,!1);for(let r=0;r<n.length;++r){const t=n[r];e.features.push((0,i.zx)([t[0],t[1]]))}return e}s(l,"name",{value:"kinks",configurable:!0})}}]);