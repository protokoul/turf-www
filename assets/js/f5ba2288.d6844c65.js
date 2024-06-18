(self.webpackChunkturf_www=self.webpackChunkturf_www||[]).push([[81507],{29690:(e,t,r)=>{"use strict";r.r(t),r.d(t,{Map0:()=>f,assets:()=>h,contentTitle:()=>d,default:()=>g,frontMatter:()=>c,metadata:()=>u,toc:()=>p});var n=r(74848),i=r(28453),o=r(67149),s=r(91452),a=r(36145),l=r(78478);const c={title:"length"},d=void 0,u={id:"api/length",title:"length",description:"Description",source:"@site/versioned_docs/version-7.0.0/api/length.mdx",sourceDirName:"api",slug:"/api/length",permalink:"/docs/api/length",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/versioned_docs/version-7.0.0/api/length.mdx",tags:[],version:"7.0.0",frontMatter:{title:"length"},sidebar:"apiSidebar",previous:{title:"greatCircle",permalink:"/docs/api/greatCircle"},next:{title:"midpoint",permalink:"/docs/api/midpoint"}},h={},p=[{value:"Description",id:"description",level:3},{value:"Parameters",id:"parameters",level:3},{value:"Returns",id:"returns",level:3},{value:"Examples",id:"examples",level:3},{value:"Installation",id:"installation",level:3}];function f(){var e=o.wi([[115,-32],[131,-22],[143,-25],[150,-34]]),t=s.B(e,{units:"miles"}),r={line:e};return e.properties.distance=t,(0,n.jsx)(a.A,{addToMap:r})}function m(e){const t={a:"a",code:"code",em:"em",h3:"h3",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h3,{id:"description",children:"Description"}),"\n",(0,n.jsxs)(t.p,{children:["Takes a ",(0,n.jsx)(t.a,{href:"https://tools.ietf.org/html/rfc7946#section-3",children:"GeoJSON"})," and measures its length in the specified units, ",(0,n.jsx)(t.a,{href:"https://tools.ietf.org/html/rfc7946#section-3.1.2",children:"(Multi)Point"}),"'s distance are ignored."]}),"\n",(0,n.jsx)(t.h3,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"geojson"}),(0,n.jsx)(t.td,{children:(0,n.jsxs)(t.strong,{children:[(0,n.jsx)(t.a,{href:"https://tools.ietf.org/html/rfc7946#section-3.2",children:"Feature"}),"<",(0,n.jsx)(t.a,{href:"https://tools.ietf.org/html/rfc7946#section-3.1.4",children:"LineString"})," | ",(0,n.jsx)(t.a,{href:"https://tools.ietf.org/html/rfc7946#section-3.1.5",children:"MultiLineString"}),">"]})}),(0,n.jsx)(t.td,{children:"GeoJSON to measure"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsxs)(t.td,{children:["options",(0,n.jsx)("i",{children:"?"})]}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:"Object"})}),(0,n.jsxs)(t.td,{children:["Optional parameters ",(0,n.jsx)(t.em,{children:"(default {})"})]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsxs)(t.td,{children:["options.units",(0,n.jsx)("i",{children:"?"})]}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:"string"})}),(0,n.jsxs)(t.td,{children:["can be degrees, radians, miles, or kilometers ",(0,n.jsx)(t.em,{children:"(default kilometers)"})]})]})]})]}),"\n",(0,n.jsx)(t.h3,{id:"returns",children:"Returns"}),"\n",(0,n.jsx)("ul",{children:(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"number"})," length of GeoJSON"]})}),"\n",(0,n.jsx)(t.h3,{id:"examples",children:"Examples"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-javascript",children:'var line = turf.lineString([\n  [115, -32],\n  [131, -22],\n  [143, -25],\n  [150, -34],\n]);\nvar length = turf.length(line, { units: "miles" });\n'})}),"\n","\n",(0,n.jsx)(l.A,{children:()=>(0,n.jsx)(f,{})}),"\n",(0,n.jsx)(t.h3,{id:"installation",children:"Installation"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-javascript",children:'$ npm install @turf/length\n\nimport { length } from "@turf/length";\nconst result = length(...);\n'})}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-javascript",children:'$ npm install @turf/turf\n\nimport * as turf from "@turf/turf";\nconst result = turf.length(...);\n'})})]})}function g(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(m,{...e})}):m(e)}},42634:()=>{},18685:(e,t,r)=>{"use strict";r.d(t,{I:()=>o});var n=r(83490),i=r(67149);function o(e,t,r={}){var o=(0,n.uG)(e),s=(0,n.uG)(t),a=(0,i.tR)(s[1]-o[1]),l=(0,i.tR)(s[0]-o[0]),c=(0,i.tR)(o[1]),d=(0,i.tR)(s[1]),u=Math.pow(Math.sin(a/2),2)+Math.pow(Math.sin(l/2),2)*Math.cos(c)*Math.cos(d);return(0,i.cJ)(2*Math.atan2(Math.sqrt(u),Math.sqrt(1-u)),r.units)}(0,Object.defineProperty)(o,"name",{value:"distance",configurable:!0})},83490:(e,t,r)=>{"use strict";r.d(t,{$R:()=>a,Pw:()=>u,bg:()=>d,iw:()=>c,mo:()=>l,uG:()=>s});var n=r(67149),i=Object.defineProperty,o=(e,t)=>i(e,"name",{value:t,configurable:!0});function s(e){if(!e)throw new Error("coord is required");if(!Array.isArray(e)){if("Feature"===e.type&&null!==e.geometry&&"Point"===e.geometry.type)return[...e.geometry.coordinates];if("Point"===e.type)return[...e.coordinates]}if(Array.isArray(e)&&e.length>=2&&!Array.isArray(e[0])&&!Array.isArray(e[1]))return[...e];throw new Error("coord must be GeoJSON Point or an Array of numbers")}function a(e){if(Array.isArray(e))return e;if("Feature"===e.type){if(null!==e.geometry)return e.geometry.coordinates}else if(e.coordinates)return e.coordinates;throw new Error("coords must be GeoJSON Feature, Geometry Object or an Array")}function l(e,t,r){if(!e)throw new Error("No feature passed");if(!r)throw new Error(".featureOf() requires a name");if(!e||"Feature"!==e.type||!e.geometry)throw new Error("Invalid input to "+r+", Feature with geometry required");if(!e.geometry||e.geometry.type!==t)throw new Error("Invalid input to "+r+": must be a "+t+", given "+e.geometry.type)}function c(e,t,r){if(!e)throw new Error("No featureCollection passed");if(!r)throw new Error(".collectionOf() requires a name");if(!e||"FeatureCollection"!==e.type)throw new Error("Invalid input to "+r+", FeatureCollection required");for(const n of e.features){if(!n||"Feature"!==n.type||!n.geometry)throw new Error("Invalid input to "+r+", Feature with geometry required");if(!n.geometry||n.geometry.type!==t)throw new Error("Invalid input to "+r+": must be a "+t+", given "+n.geometry.type)}}function d(e){return"Feature"===e.type?e.geometry:e}function u(e,t){return"FeatureCollection"===e.type?"FeatureCollection":"GeometryCollection"===e.type?"GeometryCollection":"Feature"===e.type&&null!==e.geometry?e.geometry.type:e.type}o(s,"getCoord"),o(a,"getCoords"),o((function e(t){if(t.length>1&&(0,n.Et)(t[0])&&(0,n.Et)(t[1]))return!0;if(Array.isArray(t[0])&&t[0].length)return e(t[0]);throw new Error("coordinates must only contain numbers")}),"containsNumber"),o((function(e,t,r){if(!t||!r)throw new Error("type and name required");if(!e||e.type!==t)throw new Error("Invalid input to "+r+": must be a "+t+", given "+e.type)}),"geojsonType"),o(l,"featureOf"),o(c,"collectionOf"),o(d,"getGeom"),o(u,"getType")},91452:(e,t,r)=>{"use strict";r.d(t,{B:()=>o});var n=r(18685),i=r(63399);function o(e,t={}){return(0,i.OQ)(e,((e,r)=>{const i=r.geometry.coordinates;return e+(0,n.I)(i[0],i[1],t)}),0)}(0,Object.defineProperty)(o,"name",{value:"length",configurable:!0})}}]);