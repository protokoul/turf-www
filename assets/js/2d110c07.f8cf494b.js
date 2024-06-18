(self.webpackChunkturf_www=self.webpackChunkturf_www||[]).push([[52083],{57945:(t,e,r)=>{"use strict";r.r(e),r.d(e,{Map0:()=>g,assets:()=>p,contentTitle:()=>u,default:()=>m,frontMatter:()=>h,metadata:()=>f,toc:()=>d});var n=r(74848),o=r(28453),i=r(67149),s=r(46244),l=r(63399),a=r(36145),c=r(78478);const h={title:"pointsWithinPolygon"},u=void 0,f={id:"api/pointsWithinPolygon",title:"pointsWithinPolygon",description:"Description",source:"@site/docs/api/pointsWithinPolygon.mdx",sourceDirName:"api",slug:"/api/pointsWithinPolygon",permalink:"/docs/next/api/pointsWithinPolygon",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/api/pointsWithinPolygon.mdx",tags:[],version:"current",frontMatter:{title:"pointsWithinPolygon"},sidebar:"apiSidebar",previous:{title:"tin",permalink:"/docs/next/api/tin"},next:{title:"tag",permalink:"/docs/next/api/tag"}},p={},d=[{value:"Description",id:"description",level:3},{value:"Parameters",id:"parameters",level:3},{value:"Returns",id:"returns",level:3},{value:"Examples",id:"examples",level:3},{value:"Installation",id:"installation",level:3}];function g(){var t=i.WR([[-46.6318,-23.5523],[-46.6246,-23.5325],[-46.6062,-23.5513],[-46.663,-23.554],[-46.643,-23.557]]),e=i.n1([[[-46.653,-23.543],[-46.634,-23.5346],[-46.613,-23.543],[-46.614,-23.559],[-46.631,-23.567],[-46.653,-23.56],[-46.653,-23.543]]]),r=s.n(t,e),o={points:t,searchWithin:e,ptsWithin:r};return l.us(r,(function(t){t.properties["marker-size"]="large",t.properties["marker-color"]="#000"})),(0,n.jsx)(a.A,{addToMap:o})}function y(t){const e={a:"a",code:"code",h3:"h3",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.R)(),...t.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(e.h3,{id:"description",children:"Description"}),"\n",(0,n.jsxs)(e.p,{children:["Finds ",(0,n.jsx)(e.a,{href:"https://tools.ietf.org/html/rfc7946#section-3.1.2",children:"Points"})," or ",(0,n.jsx)(e.a,{href:"https://tools.ietf.org/html/rfc7946#section-3.1.3",children:"MultiPoint"})," coordinate positions that fall within ",(0,n.jsx)(e.a,{href:"https://tools.ietf.org/html/rfc7946#section-3.1.6",children:"(Multi)Polygon(s)"}),"."]}),"\n",(0,n.jsx)(e.h3,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(e.table,{children:[(0,n.jsx)(e.thead,{children:(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.th,{children:"Name"}),(0,n.jsx)(e.th,{children:"Type"}),(0,n.jsx)(e.th,{children:"Description"})]})}),(0,n.jsxs)(e.tbody,{children:[(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:"points"}),(0,n.jsx)(e.td,{children:(0,n.jsxs)(e.strong,{children:[(0,n.jsx)(e.a,{href:"https://tools.ietf.org/html/rfc7946#section-3.2",children:"Feature"})," | ",(0,n.jsx)(e.a,{href:"https://tools.ietf.org/html/rfc7946#section-3.3",children:"FeatureCollection"}),"<",(0,n.jsx)(e.a,{href:"https://tools.ietf.org/html/rfc7946#section-3.1.2",children:"Point"})," | ",(0,n.jsx)(e.a,{href:"https://tools.ietf.org/html/rfc7946#section-3.1.3",children:"MultiPoint"}),">"]})}),(0,n.jsx)(e.td,{children:"Point(s) or MultiPoint(s) as input search"})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:"polygons"}),(0,n.jsx)(e.td,{children:(0,n.jsxs)(e.strong,{children:[(0,n.jsx)(e.a,{href:"https://tools.ietf.org/html/rfc7946#section-3.3",children:"FeatureCollection"})," | ",(0,n.jsx)(e.a,{href:"https://tools.ietf.org/html/rfc7946#section-3.1",children:"Geometry"})," | ",(0,n.jsx)(e.a,{href:"https://tools.ietf.org/html/rfc7946#section-3.2",children:"Feature"}),"<",(0,n.jsx)(e.a,{href:"https://tools.ietf.org/html/rfc7946#section-3.1.6",children:"Polygon"})," | ",(0,n.jsx)(e.a,{href:"https://tools.ietf.org/html/rfc7946#section-3.1.7",children:"MultiPolygon"}),">"]})}),(0,n.jsx)(e.td,{children:"(Multi)Polygon(s) to check if points are within"})]})]})]}),"\n",(0,n.jsx)(e.h3,{id:"returns",children:"Returns"}),"\n",(0,n.jsx)("ul",{children:(0,n.jsxs)(e.p,{children:[(0,n.jsxs)(e.strong,{children:[(0,n.jsx)(e.a,{href:"https://tools.ietf.org/html/rfc7946#section-3.3",children:"FeatureCollection"}),"<",(0,n.jsx)(e.a,{href:"https://tools.ietf.org/html/rfc7946#section-3.1.2",children:"Point"})," | ",(0,n.jsx)(e.a,{href:"https://tools.ietf.org/html/rfc7946#section-3.1.3",children:"MultiPoint"}),">"]})," Point(s) or MultiPoint(s) with positions that land within at least one polygon.  The geometry type will match what was passsed in"]})}),"\n",(0,n.jsx)(e.h3,{id:"examples",children:"Examples"}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-javascript",children:"var points = turf.points([\n  [-46.6318, -23.5523],\n  [-46.6246, -23.5325],\n  [-46.6062, -23.5513],\n  [-46.663, -23.554],\n  [-46.643, -23.557],\n]);\n\nvar searchWithin = turf.polygon([\n  [\n    [-46.653, -23.543],\n    [-46.634, -23.5346],\n    [-46.613, -23.543],\n    [-46.614, -23.559],\n    [-46.631, -23.567],\n    [-46.653, -23.56],\n    [-46.653, -23.543],\n  ],\n]);\n\nvar ptsWithin = turf.pointsWithinPolygon(points, searchWithin);\n"})}),"\n","\n",(0,n.jsx)(c.A,{children:()=>(0,n.jsx)(g,{})}),"\n",(0,n.jsx)(e.h3,{id:"installation",children:"Installation"}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-javascript",children:'$ npm install @turf/points-within-polygon\n\nimport { pointsWithinPolygon } from "@turf/points-within-polygon";\nconst result = pointsWithinPolygon(...);\n'})}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-javascript",children:'$ npm install @turf/turf\n\nimport * as turf from "@turf/turf";\nconst result = turf.pointsWithinPolygon(...);\n'})})]})}function m(t={}){const{wrapper:e}={...(0,o.R)(),...t.components};return e?(0,n.jsx)(e,{...t,children:(0,n.jsx)(y,{...t})}):y(t)}},42634:()=>{},10200:(t,e,r)=>{"use strict";r.d(e,{m:()=>l});const n=function(t,e){for(var r=0,n=0,o=0,i=0,s=0,l=0,a=0,c=0,h=null,u=null,f=t[0],p=t[1],d=e.length;r<d;r++){n=0;var g=e[r].length-1,y=e[r];if((h=y[0])[0]!==y[g][0]&&h[1]!==y[g][1])throw new Error("First and last coordinates in a ring must be the same");for(s=h[0]-f,l=h[1]-p;n<g;n++)if(c=(u=y[n+1])[1]-p,l<0&&c<0||l>0&&c>0)l=c,s=(h=u)[0]-f;else{if(a=u[0]-t[0],c>0&&l<=0){if((i=s*c-a*l)>0)o+=1;else if(0===i)return 0}else if(l>0&&c<=0){if((i=s*c-a*l)<0)o+=1;else if(0===i)return 0}else if(0===c&&l<0){if(0===(i=s*c-a*l))return 0}else if(0===l&&c<0){if(0===(i=s*c-a*l))return 0}else if(0===l&&0===c){if(a<=0&&s>=0)return 0;if(s<=0&&a>=0)return 0}h=u,l=c,s=a}}return o%2!=0};var o=r(83490),i=Object.defineProperty,s=(t,e)=>i(t,"name",{value:e,configurable:!0});function l(t,e,r={}){if(!t)throw new Error("point is required");if(!e)throw new Error("polygon is required");const i=(0,o.uG)(t),s=(0,o.bg)(e),l=s.type,c=e.bbox;let h=s.coordinates;if(c&&!1===a(i,c))return!1;"Polygon"===l&&(h=[h]);let u=!1;for(var f=0;f<h.length;++f){const t=n(i,h[f]);if(0===t)return!r.ignoreBoundary;t&&(u=!0)}return u}function a(t,e){return e[0]<=t[0]&&e[1]<=t[1]&&e[2]>=t[0]&&e[3]>=t[1]}s(l,"booleanPointInPolygon"),s(a,"inBBox")},83490:(t,e,r)=>{"use strict";r.d(e,{$R:()=>l,Pw:()=>u,bg:()=>h,iw:()=>c,mo:()=>a,uG:()=>s});var n=r(67149),o=Object.defineProperty,i=(t,e)=>o(t,"name",{value:e,configurable:!0});function s(t){if(!t)throw new Error("coord is required");if(!Array.isArray(t)){if("Feature"===t.type&&null!==t.geometry&&"Point"===t.geometry.type)return[...t.geometry.coordinates];if("Point"===t.type)return[...t.coordinates]}if(Array.isArray(t)&&t.length>=2&&!Array.isArray(t[0])&&!Array.isArray(t[1]))return[...t];throw new Error("coord must be GeoJSON Point or an Array of numbers")}function l(t){if(Array.isArray(t))return t;if("Feature"===t.type){if(null!==t.geometry)return t.geometry.coordinates}else if(t.coordinates)return t.coordinates;throw new Error("coords must be GeoJSON Feature, Geometry Object or an Array")}function a(t,e,r){if(!t)throw new Error("No feature passed");if(!r)throw new Error(".featureOf() requires a name");if(!t||"Feature"!==t.type||!t.geometry)throw new Error("Invalid input to "+r+", Feature with geometry required");if(!t.geometry||t.geometry.type!==e)throw new Error("Invalid input to "+r+": must be a "+e+", given "+t.geometry.type)}function c(t,e,r){if(!t)throw new Error("No featureCollection passed");if(!r)throw new Error(".collectionOf() requires a name");if(!t||"FeatureCollection"!==t.type)throw new Error("Invalid input to "+r+", FeatureCollection required");for(const n of t.features){if(!n||"Feature"!==n.type||!n.geometry)throw new Error("Invalid input to "+r+", Feature with geometry required");if(!n.geometry||n.geometry.type!==e)throw new Error("Invalid input to "+r+": must be a "+e+", given "+n.geometry.type)}}function h(t){return"Feature"===t.type?t.geometry:t}function u(t,e){return"FeatureCollection"===t.type?"FeatureCollection":"GeometryCollection"===t.type?"GeometryCollection":"Feature"===t.type&&null!==t.geometry?t.geometry.type:t.type}i(s,"getCoord"),i(l,"getCoords"),i((function t(e){if(e.length>1&&(0,n.Et)(e[0])&&(0,n.Et)(e[1]))return!0;if(Array.isArray(e[0])&&e[0].length)return t(e[0]);throw new Error("coordinates must only contain numbers")}),"containsNumber"),i((function(t,e,r){if(!e||!r)throw new Error("type and name required");if(!t||t.type!==e)throw new Error("Invalid input to "+r+": must be a "+e+", given "+t.type)}),"geojsonType"),i(a,"featureOf"),i(c,"collectionOf"),i(h,"getGeom"),i(u,"getType")},46244:(t,e,r)=>{"use strict";r.d(e,{n:()=>s});var n=r(10200),o=r(67149),i=r(63399);function s(t,e){const r=[];return(0,i.us)(t,(function(t){let s=!1;if("Point"===t.geometry.type)(0,i.kX)(e,(function(e){(0,n.m)(t,e)&&(s=!0)})),s&&r.push(t);else{if("MultiPoint"!==t.geometry.type)throw new Error("Input geometry must be a Point or MultiPoint");var l=[];(0,i.kX)(e,(function(e){(0,i.Fh)(t,(function(t){(0,n.m)(t,e)&&(s=!0,l.push(t))}))})),s&&r.push((0,o.kB)(l,t.properties))}})),(0,o.Lr)(r)}(0,Object.defineProperty)(s,"name",{value:"pointsWithinPolygon",configurable:!0})}}]);