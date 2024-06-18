(self.webpackChunkturf_www=self.webpackChunkturf_www||[]).push([[67248],{13573:(e,r,t)=>{"use strict";t.r(r),t.d(r,{Map0:()=>f,assets:()=>u,contentTitle:()=>c,default:()=>g,frontMatter:()=>l,metadata:()=>d,toc:()=>h});var n=t(74848),i=t(28453),o=t(76693),s=t(36145),a=t(78478);const l={title:"pointGrid"},c=void 0,d={id:"api/pointGrid",title:"pointGrid",description:"Description",source:"@site/docs/api/pointGrid.mdx",sourceDirName:"api",slug:"/api/pointGrid",permalink:"/docs/next/api/pointGrid",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/api/pointGrid.mdx",tags:[],version:"current",frontMatter:{title:"pointGrid"},sidebar:"apiSidebar",previous:{title:"hexGrid",permalink:"/docs/next/api/hexGrid"},next:{title:"squareGrid",permalink:"/docs/next/api/squareGrid"}},u={},h=[{value:"Description",id:"description",level:3},{value:"Parameters",id:"parameters",level:3},{value:"Returns",id:"returns",level:3},{value:"Examples",id:"examples",level:3},{value:"Installation",id:"installation",level:3}];function f(){var e={grid:o.h([-70.823364,-33.553984,-70.473175,-33.302986],3,{units:"miles"})};return(0,n.jsx)(s.A,{addToMap:e})}function p(e){const r={a:"a",code:"code",em:"em",h3:"h3",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.h3,{id:"description",children:"Description"}),"\n",(0,n.jsxs)(r.p,{children:["Creates a ",(0,n.jsx)(r.a,{href:"https://tools.ietf.org/html/rfc7946#section-3.1.2",children:"Point"})," grid from a bounding box, ",(0,n.jsx)(r.a,{href:"https://tools.ietf.org/html/rfc7946#section-3.3",children:"FeatureCollection"})," or ",(0,n.jsx)(r.a,{href:"https://tools.ietf.org/html/rfc7946#section-3.2",children:"Feature"}),"."]}),"\n",(0,n.jsx)(r.h3,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Name"}),(0,n.jsx)(r.th,{children:"Type"}),(0,n.jsx)(r.th,{children:"Description"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"bbox"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.strong,{children:"Array<number>"})}),(0,n.jsx)(r.td,{children:"extent in [minX, minY, maxX, maxY] order"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"cellSide"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.strong,{children:"number"})}),(0,n.jsx)(r.td,{children:"the distance between points, in units"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsxs)(r.td,{children:["options",(0,n.jsx)("i",{children:"?"})]}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.strong,{children:"Object"})}),(0,n.jsxs)(r.td,{children:["Optional parameters ",(0,n.jsx)(r.em,{children:"(default {})"})]})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsxs)(r.td,{children:["options.units",(0,n.jsx)("i",{children:"?"})]}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.strong,{children:"string"})}),(0,n.jsxs)(r.td,{children:["used in calculating cellSide, can be degrees, radians, miles, or kilometers ",(0,n.jsx)(r.em,{children:"(default 'kilometers')"})]})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsxs)(r.td,{children:["options.mask",(0,n.jsx)("i",{children:"?"})]}),(0,n.jsx)(r.td,{children:(0,n.jsxs)(r.strong,{children:[(0,n.jsx)(r.a,{href:"https://tools.ietf.org/html/rfc7946#section-3.2",children:"Feature"}),"<",(0,n.jsx)(r.a,{href:"https://tools.ietf.org/html/rfc7946#section-3.1.6",children:"Polygon"})," | ",(0,n.jsx)(r.a,{href:"https://tools.ietf.org/html/rfc7946#section-3.1.7",children:"MultiPolygon"}),">"]})}),(0,n.jsx)(r.td,{children:"if passed a Polygon or MultiPolygon, the grid Points will be created only inside it"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsxs)(r.td,{children:["options.properties",(0,n.jsx)("i",{children:"?"})]}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.strong,{children:"Object"})}),(0,n.jsxs)(r.td,{children:["passed to each point of the grid ",(0,n.jsx)(r.em,{children:"(default {})"})]})]})]})]}),"\n",(0,n.jsx)(r.h3,{id:"returns",children:"Returns"}),"\n",(0,n.jsx)("ul",{children:(0,n.jsxs)(r.p,{children:[(0,n.jsxs)(r.strong,{children:[(0,n.jsx)(r.a,{href:"https://tools.ietf.org/html/rfc7946#section-3.3",children:"FeatureCollection"}),"<",(0,n.jsx)(r.a,{href:"https://tools.ietf.org/html/rfc7946#section-3.1.2",children:"Point"}),">"]})," grid of points"]})}),"\n",(0,n.jsx)(r.h3,{id:"examples",children:"Examples"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-javascript",children:'var extent = [-70.823364, -33.553984, -70.473175, -33.302986];\nvar cellSide = 3;\nvar options = { units: "miles" };\n\nvar grid = turf.pointGrid(extent, cellSide, options);\n'})}),"\n","\n",(0,n.jsx)(a.A,{children:()=>(0,n.jsx)(f,{})}),"\n",(0,n.jsx)(r.h3,{id:"installation",children:"Installation"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-javascript",children:'$ npm install @turf/point-grid\n\nimport { pointGrid } from "@turf/point-grid";\nconst result = pointGrid(...);\n'})}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-javascript",children:'$ npm install @turf/turf\n\nimport * as turf from "@turf/turf";\nconst result = turf.pointGrid(...);\n'})})]})}function g(e={}){const{wrapper:r}={...(0,i.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(p,{...e})}):p(e)}},42634:()=>{},99589:(e,r,t)=>{"use strict";t.d(r,{Q:()=>i});var n=t(63399);function i(e,r={}){if(null!=e.bbox&&!0!==r.recompute)return e.bbox;const t=[1/0,1/0,-1/0,-1/0];return(0,n.Fh)(e,(e=>{t[0]>e[0]&&(t[0]=e[0]),t[1]>e[1]&&(t[1]=e[1]),t[2]<e[0]&&(t[2]=e[0]),t[3]<e[1]&&(t[3]=e[1])})),t}(0,Object.defineProperty)(i,"name",{value:"bbox",configurable:!0})},10200:(e,r,t)=>{"use strict";t.d(r,{m:()=>a});const n=function(e,r){for(var t=0,n=0,i=0,o=0,s=0,a=0,l=0,c=0,d=null,u=null,h=e[0],f=e[1],p=r.length;t<p;t++){n=0;var g=r[t].length-1,m=r[t];if((d=m[0])[0]!==m[g][0]&&d[1]!==m[g][1])throw new Error("First and last coordinates in a ring must be the same");for(s=d[0]-h,a=d[1]-f;n<g;n++)if(c=(u=m[n+1])[1]-f,a<0&&c<0||a>0&&c>0)a=c,s=(d=u)[0]-h;else{if(l=u[0]-e[0],c>0&&a<=0){if((o=s*c-l*a)>0)i+=1;else if(0===o)return 0}else if(a>0&&c<=0){if((o=s*c-l*a)<0)i+=1;else if(0===o)return 0}else if(0===c&&a<0){if(0===(o=s*c-l*a))return 0}else if(0===a&&c<0){if(0===(o=s*c-l*a))return 0}else if(0===a&&0===c){if(l<=0&&s>=0)return 0;if(s<=0&&l>=0)return 0}d=u,a=c,s=l}}return i%2!=0};var i=t(83490),o=Object.defineProperty,s=(e,r)=>o(e,"name",{value:r,configurable:!0});function a(e,r,t={}){if(!e)throw new Error("point is required");if(!r)throw new Error("polygon is required");const o=(0,i.uG)(e),s=(0,i.bg)(r),a=s.type,c=r.bbox;let d=s.coordinates;if(c&&!1===l(o,c))return!1;"Polygon"===a&&(d=[d]);let u=!1;for(var h=0;h<d.length;++h){const e=n(o,d[h]);if(0===e)return!t.ignoreBoundary;e&&(u=!0)}return u}function l(e,r){return r[0]<=e[0]&&r[1]<=e[1]&&r[2]>=e[0]&&r[3]>=e[1]}s(a,"booleanPointInPolygon"),s(l,"inBBox")},85078:(e,r,t)=>{"use strict";t.d(r,{O:()=>s});var n=t(83490),i=Object.defineProperty,o=(e,r)=>i(e,"name",{value:r,configurable:!0});function s(e,r,t={}){const i=(0,n.uG)(e),o=(0,n.$R)(r);for(let n=0;n<o.length-1;n++){let e=!1;if(t.ignoreEndVertices&&(0===n&&(e="start"),n===o.length-2&&(e="end"),0===n&&n+1===o.length-1&&(e="both")),a(o[n],o[n+1],i,e,void 0===t.epsilon?null:t.epsilon))return!0}return!1}function a(e,r,t,n,i){const o=t[0],s=t[1],a=e[0],l=e[1],c=r[0],d=r[1],u=c-a,h=d-l,f=(t[0]-a)*h-(t[1]-l)*u;if(null!==i){if(Math.abs(f)>i)return!1}else if(0!==f)return!1;return n?"start"===n?Math.abs(u)>=Math.abs(h)?u>0?a<o&&o<=c:c<=o&&o<a:h>0?l<s&&s<=d:d<=s&&s<l:"end"===n?Math.abs(u)>=Math.abs(h)?u>0?a<=o&&o<c:c<o&&o<=a:h>0?l<=s&&s<d:d<s&&s<=l:"both"===n&&(Math.abs(u)>=Math.abs(h)?u>0?a<o&&o<c:c<o&&o<a:h>0?l<s&&s<d:d<s&&s<l):Math.abs(u)>=Math.abs(h)?u>0?a<=o&&o<=c:c<=o&&o<=a:h>0?l<=s&&s<=d:d<=s&&s<=l}o(s,"booleanPointOnLine"),o(a,"isPointOnLineSegment")},18685:(e,r,t)=>{"use strict";t.d(r,{I:()=>o});var n=t(83490),i=t(67149);function o(e,r,t={}){var o=(0,n.uG)(e),s=(0,n.uG)(r),a=(0,i.tR)(s[1]-o[1]),l=(0,i.tR)(s[0]-o[0]),c=(0,i.tR)(o[1]),d=(0,i.tR)(s[1]),u=Math.pow(Math.sin(a/2),2)+Math.pow(Math.sin(l/2),2)*Math.cos(c)*Math.cos(d);return(0,i.cJ)(2*Math.atan2(Math.sqrt(u),Math.sqrt(1-u)),t.units)}(0,Object.defineProperty)(o,"name",{value:"distance",configurable:!0})},83490:(e,r,t)=>{"use strict";t.d(r,{$R:()=>a,Pw:()=>u,bg:()=>d,iw:()=>c,mo:()=>l,uG:()=>s});var n=t(67149),i=Object.defineProperty,o=(e,r)=>i(e,"name",{value:r,configurable:!0});function s(e){if(!e)throw new Error("coord is required");if(!Array.isArray(e)){if("Feature"===e.type&&null!==e.geometry&&"Point"===e.geometry.type)return[...e.geometry.coordinates];if("Point"===e.type)return[...e.coordinates]}if(Array.isArray(e)&&e.length>=2&&!Array.isArray(e[0])&&!Array.isArray(e[1]))return[...e];throw new Error("coord must be GeoJSON Point or an Array of numbers")}function a(e){if(Array.isArray(e))return e;if("Feature"===e.type){if(null!==e.geometry)return e.geometry.coordinates}else if(e.coordinates)return e.coordinates;throw new Error("coords must be GeoJSON Feature, Geometry Object or an Array")}function l(e,r,t){if(!e)throw new Error("No feature passed");if(!t)throw new Error(".featureOf() requires a name");if(!e||"Feature"!==e.type||!e.geometry)throw new Error("Invalid input to "+t+", Feature with geometry required");if(!e.geometry||e.geometry.type!==r)throw new Error("Invalid input to "+t+": must be a "+r+", given "+e.geometry.type)}function c(e,r,t){if(!e)throw new Error("No featureCollection passed");if(!t)throw new Error(".collectionOf() requires a name");if(!e||"FeatureCollection"!==e.type)throw new Error("Invalid input to "+t+", FeatureCollection required");for(const n of e.features){if(!n||"Feature"!==n.type||!n.geometry)throw new Error("Invalid input to "+t+", Feature with geometry required");if(!n.geometry||n.geometry.type!==r)throw new Error("Invalid input to "+t+": must be a "+r+", given "+n.geometry.type)}}function d(e){return"Feature"===e.type?e.geometry:e}function u(e,r){return"FeatureCollection"===e.type?"FeatureCollection":"GeometryCollection"===e.type?"GeometryCollection":"Feature"===e.type&&null!==e.geometry?e.geometry.type:e.type}o(s,"getCoord"),o(a,"getCoords"),o((function e(r){if(r.length>1&&(0,n.Et)(r[0])&&(0,n.Et)(r[1]))return!0;if(Array.isArray(r[0])&&r[0].length)return e(r[0]);throw new Error("coordinates must only contain numbers")}),"containsNumber"),o((function(e,r,t){if(!r||!t)throw new Error("type and name required");if(!e||e.type!==r)throw new Error("Invalid input to "+t+": must be a "+r+", given "+e.type)}),"geojsonType"),o(l,"featureOf"),o(c,"collectionOf"),o(d,"getGeom"),o(u,"getType")},76693:(e,r,t)=>{"use strict";t.d(r,{h:()=>v});var n=t(99589),i=t(85078),o=t(10200),s=t(83490),a=Object.defineProperty,l=(e,r)=>a(e,"name",{value:r,configurable:!0});function c(e,r){var t=(0,s.bg)(e),n=(0,s.bg)(r),a=t.type,l=n.type;switch(a){case"Point":switch(l){case"MultiPoint":return d(t,n);case"LineString":return(0,i.O)(t,n,{ignoreEndVertices:!0});case"Polygon":case"MultiPolygon":return(0,o.m)(t,n,{ignoreBoundary:!0});default:throw new Error("feature2 "+l+" geometry not supported")}case"MultiPoint":switch(l){case"MultiPoint":return u(t,n);case"LineString":return h(t,n);case"Polygon":case"MultiPolygon":return f(t,n);default:throw new Error("feature2 "+l+" geometry not supported")}case"LineString":switch(l){case"LineString":return p(t,n);case"Polygon":case"MultiPolygon":return g(t,n);default:throw new Error("feature2 "+l+" geometry not supported")}case"Polygon":switch(l){case"Polygon":case"MultiPolygon":return m(t,n);default:throw new Error("feature2 "+l+" geometry not supported")}default:throw new Error("feature1 "+a+" geometry not supported")}}function d(e,r){var t,n=!1;for(t=0;t<r.coordinates.length;t++)if(x(r.coordinates[t],e.coordinates)){n=!0;break}return n}function u(e,r){for(var t=0;t<e.coordinates.length;t++){for(var n=!1,i=0;i<r.coordinates.length;i++)x(e.coordinates[t],r.coordinates[i])&&(n=!0);if(!n)return!1}return!0}function h(e,r){for(var t=!1,n=0;n<e.coordinates.length;n++){if(!(0,i.O)(e.coordinates[n],r))return!1;t||(t=(0,i.O)(e.coordinates[n],r,{ignoreEndVertices:!0}))}return t}function f(e,r){for(var t=!0,n=!1,i=0;i<e.coordinates.length;i++){if(!(n=(0,o.m)(e.coordinates[i],r))){t=!1;break}n=(0,o.m)(e.coordinates[i],r,{ignoreBoundary:!0})}return t&&n}function p(e,r){for(var t=0;t<e.coordinates.length;t++)if(!(0,i.O)(e.coordinates[t],r))return!1;return!0}function g(e,r){if(!y((0,n.Q)(r),(0,n.Q)(e)))return!1;for(var t=!1,i=0;i<e.coordinates.length;i++){if(!(0,o.m)(e.coordinates[i],r))return!1;if(t||(t=(0,o.m)(e.coordinates[i],r,{ignoreBoundary:!0})),!t&&i<e.coordinates.length-1){var s=j(e.coordinates[i],e.coordinates[i+1]);t=(0,o.m)(s,r,{ignoreBoundary:!0})}}return t}function m(e,r){var t=(0,n.Q)(e);if(!y((0,n.Q)(r),t))return!1;for(var i=0;i<e.coordinates[0].length;i++)if(!(0,o.m)(e.coordinates[0][i],r))return!1;return!0}function y(e,r){return!(e[0]>r[0])&&(!(e[2]<r[2])&&(!(e[1]>r[1])&&!(e[3]<r[3])))}function x(e,r){return e[0]===r[0]&&e[1]===r[1]}function j(e,r){return[(e[0]+r[0])/2,(e[1]+r[1])/2]}l(c,"booleanWithin"),l(d,"isPointInMultiPoint"),l(u,"isMultiPointInMultiPoint"),l(h,"isMultiPointOnLine"),l(f,"isMultiPointInPoly"),l(p,"isLineOnLine"),l(g,"isLineInPoly"),l(m,"isPolyInPoly"),l(y,"doBBoxOverlap"),l(x,"compareCoords"),l(j,"getMidpoint");var b=t(18685),w=t(67149);function v(e,r,t={}){t.mask&&!t.units&&(t.units="kilometers");for(var n=[],i=e[0],o=e[1],s=e[2],a=e[3],l=r/(0,b.I)([i,o],[s,o],t)*(s-i),d=r/(0,b.I)([i,o],[i,a],t)*(a-o),u=s-i,h=a-o,f=Math.floor(u/l),p=(h-Math.floor(h/d)*d)/2,g=i+(u-f*l)/2;g<=s;){for(var m=o+p;m<=a;){var y=(0,w.zx)([g,m],t.properties);t.mask?c(y,t.mask)&&n.push(y):n.push(y),m+=d}g+=l}return(0,w.Lr)(n)}(0,Object.defineProperty)(v,"name",{value:"pointGrid",configurable:!0})}}]);