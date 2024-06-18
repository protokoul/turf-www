(self.webpackChunkturf_www=self.webpackChunkturf_www||[]).push([[53905],{2323:(e,r,t)=>{"use strict";t.r(r),t.d(r,{Map0:()=>p,assets:()=>h,contentTitle:()=>c,default:()=>x,frontMatter:()=>l,metadata:()=>d,toc:()=>u});var n=t(74848),i=t(28453),s=t(35176),o=t(36145),a=t(78478);const l={title:"hexGrid"},c=void 0,d={id:"api/hexGrid",title:"hexGrid",description:"Description",source:"@site/versioned_docs/version-7.0.0/api/hexGrid.mdx",sourceDirName:"api",slug:"/api/hexGrid",permalink:"/docs/api/hexGrid",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/versioned_docs/version-7.0.0/api/hexGrid.mdx",tags:[],version:"7.0.0",frontMatter:{title:"hexGrid"},sidebar:"apiSidebar",previous:{title:"tag",permalink:"/docs/api/tag"},next:{title:"pointGrid",permalink:"/docs/api/pointGrid"}},h={},u=[{value:"Description",id:"description",level:3},{value:"Parameters",id:"parameters",level:3},{value:"Returns",id:"returns",level:3},{value:"Examples",id:"examples",level:3},{value:"Installation",id:"installation",level:3}];function p(){var e={hexgrid:s.O([-96,31,-84,40],50,{units:"miles"})};return(0,n.jsx)(o.A,{addToMap:e})}function f(e){const r={a:"a",code:"code",em:"em",h3:"h3",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.h3,{id:"description",children:"Description"}),"\n",(0,n.jsxs)(r.p,{children:["Takes a bounding box and the diameter of the cell and returns a ",(0,n.jsx)(r.a,{href:"https://tools.ietf.org/html/rfc7946#section-3.3",children:"FeatureCollection"})," of flat-topped\nhexagons or triangles (",(0,n.jsx)(r.a,{href:"https://tools.ietf.org/html/rfc7946#section-3.1.6",children:"Polygon"}),' features) aligned in an "odd-q" vertical grid as\ndescribed in ',(0,n.jsx)(r.a,{href:"http://www.redblobgames.com/grids/hexagons/",children:"Hexagonal Grids"}),"."]}),"\n",(0,n.jsx)(r.h3,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Name"}),(0,n.jsx)(r.th,{children:"Type"}),(0,n.jsx)(r.th,{children:"Description"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"bbox"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.strong,{children:(0,n.jsx)(r.a,{href:"https://tools.ietf.org/html/rfc7946#section-5",children:"BBox"})})}),(0,n.jsx)(r.td,{children:"extent in [minX, minY, maxX, maxY] order"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"cellSide"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.strong,{children:"number"})}),(0,n.jsx)(r.td,{children:"length of the side of the the hexagons or triangles, in units. It will also coincide with the radius of the circumcircle of the hexagons."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsxs)(r.td,{children:["options",(0,n.jsx)("i",{children:"?"})]}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.strong,{children:"Object"})}),(0,n.jsxs)(r.td,{children:["Optional parameters ",(0,n.jsx)(r.em,{children:"(default {})"})]})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsxs)(r.td,{children:["options.units",(0,n.jsx)("i",{children:"?"})]}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.strong,{children:"string"})}),(0,n.jsxs)(r.td,{children:["used in calculating cell size, can be degrees, radians, miles, or kilometers ",(0,n.jsx)(r.em,{children:"(default 'kilometers')"})]})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsxs)(r.td,{children:["options.properties",(0,n.jsx)("i",{children:"?"})]}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.strong,{children:"Object"})}),(0,n.jsxs)(r.td,{children:["passed to each hexagon or triangle of the grid ",(0,n.jsx)(r.em,{children:"(default {})"})]})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsxs)(r.td,{children:["options.mask",(0,n.jsx)("i",{children:"?"})]}),(0,n.jsx)(r.td,{children:(0,n.jsxs)(r.strong,{children:[(0,n.jsx)(r.a,{href:"https://tools.ietf.org/html/rfc7946#section-3.2",children:"Feature"}),"<",(0,n.jsx)(r.a,{href:"https://tools.ietf.org/html/rfc7946#section-3.1.6",children:"Polygon"}),">"]})}),(0,n.jsx)(r.td,{children:"if passed a Polygon or MultiPolygon, the grid Points will be created only inside it"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsxs)(r.td,{children:["options.triangles",(0,n.jsx)("i",{children:"?"})]}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.strong,{children:"boolean"})}),(0,n.jsxs)(r.td,{children:["whether to return as triangles instead of hexagons ",(0,n.jsx)(r.em,{children:"(default false)"})]})]})]})]}),"\n",(0,n.jsx)(r.h3,{id:"returns",children:"Returns"}),"\n",(0,n.jsx)("ul",{children:(0,n.jsxs)(r.p,{children:[(0,n.jsxs)(r.strong,{children:[(0,n.jsx)(r.a,{href:"https://tools.ietf.org/html/rfc7946#section-3.3",children:"FeatureCollection"}),"<",(0,n.jsx)(r.a,{href:"https://tools.ietf.org/html/rfc7946#section-3.1.6",children:"Polygon"}),">"]})," a hexagonal grid"]})}),"\n",(0,n.jsx)(r.h3,{id:"examples",children:"Examples"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-javascript",children:'var bbox = [-96, 31, -84, 40];\nvar cellSide = 50;\nvar options = { units: "miles" };\n\nvar hexgrid = turf.hexGrid(bbox, cellSide, options);\n'})}),"\n","\n",(0,n.jsx)(a.A,{children:()=>(0,n.jsx)(p,{})}),"\n",(0,n.jsx)(r.h3,{id:"installation",children:"Installation"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-javascript",children:'$ npm install @turf/hex-grid\n\nimport { hexGrid } from "@turf/hex-grid";\nconst result = hexGrid(...);\n'})}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-javascript",children:'$ npm install @turf/turf\n\nimport * as turf from "@turf/turf";\nconst result = turf.hexGrid(...);\n'})})]})}function x(e={}){const{wrapper:r}={...(0,i.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(f,{...e})}):f(e)}},42634:()=>{},18685:(e,r,t)=>{"use strict";t.d(r,{I:()=>s});var n=t(83490),i=t(67149);function s(e,r,t={}){var s=(0,n.uG)(e),o=(0,n.uG)(r),a=(0,i.tR)(o[1]-s[1]),l=(0,i.tR)(o[0]-s[0]),c=(0,i.tR)(s[1]),d=(0,i.tR)(o[1]),h=Math.pow(Math.sin(a/2),2)+Math.pow(Math.sin(l/2),2)*Math.cos(c)*Math.cos(d);return(0,i.cJ)(2*Math.atan2(Math.sqrt(h),Math.sqrt(1-h)),t.units)}(0,Object.defineProperty)(s,"name",{value:"distance",configurable:!0})},35176:(e,r,t)=>{"use strict";t.d(r,{O:()=>l});var n=t(18685),i=t(1529),s=t(67149),o=Object.defineProperty,a=(e,r)=>o(e,"name",{value:r,configurable:!0});function l(e,r,t={}){const o=JSON.stringify(t.properties||{}),[a,l,h,u]=e,p=(l+u)/2,f=(a+h)/2,x=2*r/(0,n.I)([a,p],[h,p],t)*(h-a),g=2*r/(0,n.I)([f,l],[f,u],t)*(u-l),m=x/2,j=2*m,y=Math.sqrt(3)/2*g,w=h-a,b=u-l,v=3/4*j,G=y,E=(w-j)/(j-m/2),M=Math.floor(E),O=(M*v-m/2-w)/2-m/2+v/2,k=Math.floor((b-y)/y);let F=(b-k*y)/2;const P=k*y-b>y/2;P&&(F-=y/4);const A=[],C=[];for(let n=0;n<6;n++){const e=2*Math.PI/6*n;A.push(Math.cos(e)),C.push(Math.sin(e))}const I=[];for(let n=0;n<=M;n++)for(let e=0;e<=k;e++){const r=n%2==1;if(0===e&&r)continue;if(0===e&&P)continue;const h=n*v+a-O;let u=e*G+l+F;if(r&&(u-=y/2),!0===t.triangles)d([h,u],x/2,g/2,JSON.parse(o),A,C).forEach((function(e){t.mask?(0,i.y)((0,s.Lr)([t.mask,e]))&&I.push(e):I.push(e)}));else{const e=c([h,u],x/2,g/2,JSON.parse(o),A,C);t.mask?(0,i.y)((0,s.Lr)([t.mask,e]))&&I.push(e):I.push(e)}}return(0,s.Lr)(I)}function c(e,r,t,n,i,o){const a=[];for(let s=0;s<6;s++){const n=e[0]+r*i[s],l=e[1]+t*o[s];a.push([n,l])}return a.push(a[0].slice()),(0,s.n1)([a],n)}function d(e,r,t,n,i,o){const a=[];for(let l=0;l<6;l++){const c=[];c.push(e),c.push([e[0]+r*i[l],e[1]+t*o[l]]),c.push([e[0]+r*i[(l+1)%6],e[1]+t*o[(l+1)%6]]),c.push(e),a.push((0,s.n1)([c],n))}return a}a(l,"hexGrid"),a(c,"hexagon"),a(d,"hexTriangles")},1529:(e,r,t)=>{"use strict";t.d(r,{y:()=>o});var n=t(67149),i=t(63399),s=t(59004);function o(e,r={}){const t=[];if((0,i.kX)(e,(e=>{t.push(e.coordinates)})),t.length<2)throw new Error("Must specify at least 2 geometries");const o=s.intersection(t[0],...t.slice(1));return 0===o.length?null:1===o.length?(0,n.n1)(o[0],r.properties):(0,n.g5)(o,r.properties)}(0,Object.defineProperty)(o,"name",{value:"intersect",configurable:!0})},83490:(e,r,t)=>{"use strict";t.d(r,{$R:()=>a,Pw:()=>h,bg:()=>d,iw:()=>c,mo:()=>l,uG:()=>o});var n=t(67149),i=Object.defineProperty,s=(e,r)=>i(e,"name",{value:r,configurable:!0});function o(e){if(!e)throw new Error("coord is required");if(!Array.isArray(e)){if("Feature"===e.type&&null!==e.geometry&&"Point"===e.geometry.type)return[...e.geometry.coordinates];if("Point"===e.type)return[...e.coordinates]}if(Array.isArray(e)&&e.length>=2&&!Array.isArray(e[0])&&!Array.isArray(e[1]))return[...e];throw new Error("coord must be GeoJSON Point or an Array of numbers")}function a(e){if(Array.isArray(e))return e;if("Feature"===e.type){if(null!==e.geometry)return e.geometry.coordinates}else if(e.coordinates)return e.coordinates;throw new Error("coords must be GeoJSON Feature, Geometry Object or an Array")}function l(e,r,t){if(!e)throw new Error("No feature passed");if(!t)throw new Error(".featureOf() requires a name");if(!e||"Feature"!==e.type||!e.geometry)throw new Error("Invalid input to "+t+", Feature with geometry required");if(!e.geometry||e.geometry.type!==r)throw new Error("Invalid input to "+t+": must be a "+r+", given "+e.geometry.type)}function c(e,r,t){if(!e)throw new Error("No featureCollection passed");if(!t)throw new Error(".collectionOf() requires a name");if(!e||"FeatureCollection"!==e.type)throw new Error("Invalid input to "+t+", FeatureCollection required");for(const n of e.features){if(!n||"Feature"!==n.type||!n.geometry)throw new Error("Invalid input to "+t+", Feature with geometry required");if(!n.geometry||n.geometry.type!==r)throw new Error("Invalid input to "+t+": must be a "+r+", given "+n.geometry.type)}}function d(e){return"Feature"===e.type?e.geometry:e}function h(e,r){return"FeatureCollection"===e.type?"FeatureCollection":"GeometryCollection"===e.type?"GeometryCollection":"Feature"===e.type&&null!==e.geometry?e.geometry.type:e.type}s(o,"getCoord"),s(a,"getCoords"),s((function e(r){if(r.length>1&&(0,n.Et)(r[0])&&(0,n.Et)(r[1]))return!0;if(Array.isArray(r[0])&&r[0].length)return e(r[0]);throw new Error("coordinates must only contain numbers")}),"containsNumber"),s((function(e,r,t){if(!r||!t)throw new Error("type and name required");if(!e||e.type!==r)throw new Error("Invalid input to "+t+": must be a "+r+", given "+e.type)}),"geojsonType"),s(l,"featureOf"),s(c,"collectionOf"),s(d,"getGeom"),s(h,"getType")}}]);