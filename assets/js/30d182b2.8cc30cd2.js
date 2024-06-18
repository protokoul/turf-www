(self.webpackChunkturf_www=self.webpackChunkturf_www||[]).push([[40349],{71131:(e,t,r)=>{"use strict";r.r(t),r.d(t,{Map0:()=>f,assets:()=>h,contentTitle:()=>u,default:()=>m,frontMatter:()=>l,metadata:()=>d,toc:()=>p});var n=r(74848),o=r(28453),i=r(67149),s=r(11021),c=r(36145),a=r(78478);const l={title:"concave"},u=void 0,d={id:"api/concave",title:"concave",description:"Description",source:"@site/versioned_docs/version-7.0.0/api/concave.mdx",sourceDirName:"api",slug:"/api/concave",permalink:"/docs/api/concave",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/versioned_docs/version-7.0.0/api/concave.mdx",tags:[],version:"7.0.0",frontMatter:{title:"concave"},sidebar:"apiSidebar",previous:{title:"clone",permalink:"/docs/api/clone"},next:{title:"convex",permalink:"/docs/api/convex"}},h={},p=[{value:"Description",id:"description",level:3},{value:"Parameters",id:"parameters",level:3},{value:"Returns",id:"returns",level:3},{value:"Examples",id:"examples",level:3},{value:"Installation",id:"installation",level:3}];function f(){var e=i.Lr([i.zx([-63.601226,44.642643]),i.zx([-63.591442,44.651436]),i.zx([-63.580799,44.648749]),i.zx([-63.573589,44.641788]),i.zx([-63.587665,44.64533]),i.zx([-63.595218,44.64765])]),t={points:e,hull:s.M(e,{units:"miles",maxEdge:1})};return(0,n.jsx)(c.A,{addToMap:t})}function y(e){const t={a:"a",code:"code",em:"em",h3:"h3",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h3,{id:"description",children:"Description"}),"\n",(0,n.jsxs)(t.p,{children:["Takes a set of ",(0,n.jsx)(t.a,{href:"https://tools.ietf.org/html/rfc7946#section-3.1.2",children:"points"})," and returns a concave hull Polygon or MultiPolygon.\nInternally, this uses ",(0,n.jsx)(t.a,{href:"https://github.com/Turfjs/turf-tin",children:"turf-tin"})," to generate geometries."]}),"\n",(0,n.jsx)(t.h3,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"points"}),(0,n.jsx)(t.td,{children:(0,n.jsxs)(t.strong,{children:[(0,n.jsx)(t.a,{href:"https://tools.ietf.org/html/rfc7946#section-3.3",children:"FeatureCollection"}),"<",(0,n.jsx)(t.a,{href:"https://tools.ietf.org/html/rfc7946#section-3.1.2",children:"Point"}),">"]})}),(0,n.jsx)(t.td,{children:"input points"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsxs)(t.td,{children:["options",(0,n.jsx)("i",{children:"?"})]}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:"Object"})}),(0,n.jsxs)(t.td,{children:["Optional parameters ",(0,n.jsx)(t.em,{children:"(default {})"})]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsxs)(t.td,{children:["options.maxEdge",(0,n.jsx)("i",{children:"?"})]}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:"number"})}),(0,n.jsxs)(t.td,{children:["the length (in 'units') of an edge necessary for part of the hull to become concave. ",(0,n.jsx)(t.em,{children:"(default Infinity)"})]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsxs)(t.td,{children:["options.units",(0,n.jsx)("i",{children:"?"})]}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:"string"})}),(0,n.jsxs)(t.td,{children:["can be degrees, radians, miles, or kilometers ",(0,n.jsx)(t.em,{children:"(default 'kilometers')"})]})]})]})]}),"\n",(0,n.jsx)(t.h3,{id:"returns",children:"Returns"}),"\n",(0,n.jsx)("ul",{children:(0,n.jsxs)(t.p,{children:[(0,n.jsxs)(t.strong,{children:[(0,n.jsx)(t.a,{href:"https://tools.ietf.org/html/rfc7946#section-3.2",children:"Feature"}),"<",(0,n.jsx)(t.a,{href:"https://tools.ietf.org/html/rfc7946#section-3.1.6",children:"Polygon"})," | ",(0,n.jsx)(t.a,{href:"https://tools.ietf.org/html/rfc7946#section-3.1.7",children:"MultiPolygon"}),"> | null"]})," a concave hull (null value is returned if unable to compute hull)"]})}),"\n",(0,n.jsx)(t.h3,{id:"examples",children:"Examples"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-javascript",children:'var points = turf.featureCollection([\n  turf.point([-63.601226, 44.642643]),\n  turf.point([-63.591442, 44.651436]),\n  turf.point([-63.580799, 44.648749]),\n  turf.point([-63.573589, 44.641788]),\n  turf.point([-63.587665, 44.64533]),\n  turf.point([-63.595218, 44.64765]),\n]);\nvar options = { units: "miles", maxEdge: 1 };\n\nvar hull = turf.concave(points, options);\n'})}),"\n","\n",(0,n.jsx)(a.A,{children:()=>(0,n.jsx)(f,{})}),"\n",(0,n.jsx)(t.h3,{id:"installation",children:"Installation"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-javascript",children:'$ npm install @turf/concave\n\nimport { concave } from "@turf/concave";\nconst result = concave(...);\n'})}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-javascript",children:'$ npm install @turf/turf\n\nimport * as turf from "@turf/turf";\nconst result = turf.concave(...);\n'})})]})}function m(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(y,{...e})}):y(e)}},42634:()=>{},53257:(e,t,r)=>{"use strict";r.d(t,{Rd:()=>c,o8:()=>i});var n=Object.defineProperty,o=(e,t)=>n(e,"name",{value:t,configurable:!0});function i(e){if(!e)throw new Error("geojson is required");switch(e.type){case"Feature":return s(e);case"FeatureCollection":return a(e);case"Point":case"LineString":case"Polygon":case"MultiPoint":case"MultiLineString":case"MultiPolygon":case"GeometryCollection":return l(e);default:throw new Error("unknown GeoJSON type")}}function s(e){const t={type:"Feature"};return Object.keys(e).forEach((r=>{switch(r){case"type":case"properties":case"geometry":return;default:t[r]=e[r]}})),t.properties=c(e.properties),null==e.geometry?t.geometry=null:t.geometry=l(e.geometry),t}function c(e){const t={};return e?(Object.keys(e).forEach((r=>{const n=e[r];"object"==typeof n?null===n?t[r]=null:Array.isArray(n)?t[r]=n.map((e=>e)):t[r]=c(n):t[r]=n})),t):t}function a(e){const t={type:"FeatureCollection"};return Object.keys(e).forEach((r=>{switch(r){case"type":case"features":return;default:t[r]=e[r]}})),t.features=e.features.map((e=>s(e))),t}function l(e){const t={type:e.type};return e.bbox&&(t.bbox=e.bbox),"GeometryCollection"===e.type?(t.geometries=e.geometries.map((e=>l(e))),t):(t.coordinates=u(e.coordinates),t)}function u(e){const t=e;return"object"!=typeof t[0]?t.slice():t.map((e=>u(e)))}o(i,"clone"),o(s,"cloneFeature"),o(c,"cloneProperties"),o(a,"cloneFeatureCollection"),o(l,"cloneGeometry"),o(u,"deepSlice")},11021:(e,t,r)=>{"use strict";r.d(t,{M:()=>j});var n=r(18685),o=r(67149),i=r(63399),s=r(98999),c=r(53257),a=r(83490),l=r(15189),u=r(19079),d=Object.defineProperty,h=(e,t)=>d(e,"name",{value:t,configurable:!0});function p(e,t={}){if(t=t||{},!(0,o.Gv)(t))throw new Error("options is invalid");const r=t.mutate;if("FeatureCollection"!==(0,a.Pw)(e))throw new Error("geojson must be a FeatureCollection");if(!e.features.length)throw new Error("geojson is empty");!1!==r&&void 0!==r||(e=(0,c.o8)(e));const n=[],s=(0,i.t0)(e,((e,t)=>{const r=y(e,t);return r||(n.push(e),t)}));return s&&n.push(s),n.length?1===n.length?n[0]:(0,o.NU)(n.map((e=>e.coordinates))):null}function f(e){return e[0].toString()+","+e[1].toString()}function y(e,t){const r=e.geometry.coordinates,n=t.geometry.coordinates,i=f(r[0]),s=f(r[r.length-1]),c=f(n[0]),a=f(n[n.length-1]);let l;if(i===a)l=n.concat(r.slice(1));else if(c===s)l=r.concat(n.slice(1));else if(i===c)l=r.slice(1).reverse().concat(n);else{if(s!==a)return null;l=r.concat(n.reverse().slice(1))}return(0,o.wi)(l)}function m(e,t={}){if("FeatureCollection"!==(0,a.Pw)(e))throw new Error("geojson must be a FeatureCollection");if(!e.features.length)throw new Error("geojson is empty");!1!==t.mutate&&void 0!==t.mutate||(e=(0,c.o8)(e));const r=[];(0,i.iw)(e,(e=>{r.push(e.geometry)}));const n=(0,u.K)({geoms:(0,o.zb)(r).geometry});return(0,l.A)(n,n.objects.geoms.geometries)}function g(e,t={}){if(t=t||{},!(0,o.Gv)(t))throw new Error("options is invalid");const r=t.mutate;if("FeatureCollection"!==(0,a.Pw)(e))throw new Error("geojson must be a FeatureCollection");if(!e.features.length)throw new Error("geojson is empty");!1!==r&&void 0!==r||(e=(0,c.o8)(e));const n=x(e);if(!n)throw new Error("geojson must be homogenous");const i=e;switch(n){case"LineString":return p(i,t);case"Polygon":return m(i,t);default:throw new Error(n+" is not supported")}}function x(e){const t={};(0,i.iw)(e,(e=>{t[e.geometry.type]=!0}));const r=Object.keys(t);return 1===r.length?r[0]:null}function j(e,t={}){const r=t.maxEdge||1/0,i=w(e),c=(0,s.u)(i);if(c.features=c.features.filter((e=>{const o=e.geometry.coordinates[0][0],i=e.geometry.coordinates[0][1],s=e.geometry.coordinates[0][2],c=(0,n.I)(o,i,t),a=(0,n.I)(i,s,t),l=(0,n.I)(o,s,t);return c<=r&&a<=r&&l<=r})),c.features.length<1)return null;const a=g(c);return 1===a.coordinates.length&&(a.coordinates=a.coordinates[0],a.type="Polygon"),(0,o.N4)(a)}function w(e){const t=[],r={};return(0,i.us)(e,(e=>{if(!e.geometry)return;const n=e.geometry.coordinates.join("-");Object.prototype.hasOwnProperty.call(r,n)||(t.push(e),r[n]=!0)})),(0,o.Lr)(t)}h(p,"lineDissolve"),h(f,"coordId"),h(y,"mergeLineStrings"),h(m,"polygonDissolve"),h(g,"dissolve"),h(x,"getHomogenousType"),h(j,"concave"),h(w,"removeDuplicates")},18685:(e,t,r)=>{"use strict";r.d(t,{I:()=>i});var n=r(83490),o=r(67149);function i(e,t,r={}){var i=(0,n.uG)(e),s=(0,n.uG)(t),c=(0,o.tR)(s[1]-i[1]),a=(0,o.tR)(s[0]-i[0]),l=(0,o.tR)(i[1]),u=(0,o.tR)(s[1]),d=Math.pow(Math.sin(c/2),2)+Math.pow(Math.sin(a/2),2)*Math.cos(l)*Math.cos(u);return(0,o.cJ)(2*Math.atan2(Math.sqrt(d),Math.sqrt(1-d)),r.units)}(0,Object.defineProperty)(i,"name",{value:"distance",configurable:!0})},83490:(e,t,r)=>{"use strict";r.d(t,{$R:()=>c,Pw:()=>d,bg:()=>u,iw:()=>l,mo:()=>a,uG:()=>s});var n=r(67149),o=Object.defineProperty,i=(e,t)=>o(e,"name",{value:t,configurable:!0});function s(e){if(!e)throw new Error("coord is required");if(!Array.isArray(e)){if("Feature"===e.type&&null!==e.geometry&&"Point"===e.geometry.type)return[...e.geometry.coordinates];if("Point"===e.type)return[...e.coordinates]}if(Array.isArray(e)&&e.length>=2&&!Array.isArray(e[0])&&!Array.isArray(e[1]))return[...e];throw new Error("coord must be GeoJSON Point or an Array of numbers")}function c(e){if(Array.isArray(e))return e;if("Feature"===e.type){if(null!==e.geometry)return e.geometry.coordinates}else if(e.coordinates)return e.coordinates;throw new Error("coords must be GeoJSON Feature, Geometry Object or an Array")}function a(e,t,r){if(!e)throw new Error("No feature passed");if(!r)throw new Error(".featureOf() requires a name");if(!e||"Feature"!==e.type||!e.geometry)throw new Error("Invalid input to "+r+", Feature with geometry required");if(!e.geometry||e.geometry.type!==t)throw new Error("Invalid input to "+r+": must be a "+t+", given "+e.geometry.type)}function l(e,t,r){if(!e)throw new Error("No featureCollection passed");if(!r)throw new Error(".collectionOf() requires a name");if(!e||"FeatureCollection"!==e.type)throw new Error("Invalid input to "+r+", FeatureCollection required");for(const n of e.features){if(!n||"Feature"!==n.type||!n.geometry)throw new Error("Invalid input to "+r+", Feature with geometry required");if(!n.geometry||n.geometry.type!==t)throw new Error("Invalid input to "+r+": must be a "+t+", given "+n.geometry.type)}}function u(e){return"Feature"===e.type?e.geometry:e}function d(e,t){return"FeatureCollection"===e.type?"FeatureCollection":"GeometryCollection"===e.type?"GeometryCollection":"Feature"===e.type&&null!==e.geometry?e.geometry.type:e.type}i(s,"getCoord"),i(c,"getCoords"),i((function e(t){if(t.length>1&&(0,n.Et)(t[0])&&(0,n.Et)(t[1]))return!0;if(Array.isArray(t[0])&&t[0].length)return e(t[0]);throw new Error("coordinates must only contain numbers")}),"containsNumber"),i((function(e,t,r){if(!t||!r)throw new Error("type and name required");if(!e||e.type!==t)throw new Error("Invalid input to "+r+": must be a "+t+", given "+e.type)}),"geojsonType"),i(a,"featureOf"),i(l,"collectionOf"),i(u,"getGeom"),i(d,"getType")},98999:(e,t,r)=>{"use strict";r.d(t,{u:()=>s});var n=r(67149),o=Object.defineProperty,i=(e,t)=>o(e,"name",{value:t,configurable:!0});function s(e,t){let r=!1;return(0,n.Lr)(d(e.features.map((e=>{const n={x:e.geometry.coordinates[0],y:e.geometry.coordinates[1]};return t?n.z=e.properties[t]:3===e.geometry.coordinates.length&&(r=!0,n.z=e.geometry.coordinates[2]),n}))).map((e=>{const t=[e.a.x,e.a.y],o=[e.b.x,e.b.y],i=[e.c.x,e.c.y];let s={};return r?(t.push(e.a.z),o.push(e.b.z),i.push(e.c.z)):s={a:e.a.z,b:e.b.z,c:e.c.z},(0,n.n1)([[t,o,i,t]],s)})))}i(s,"tin");var c=class{constructor(e,t,r){this.a=e,this.b=t,this.c=r;const n=t.x-e.x,o=t.y-e.y,i=r.x-e.x,s=r.y-e.y,c=n*(e.x+t.x)+o*(e.y+t.y),a=i*(e.x+r.x)+s*(e.y+r.y),l=2*(n*(r.y-t.y)-o*(r.x-t.x));let u,d;this.x=(s*c-o*a)/l,this.y=(n*a-i*c)/l,u=this.x-e.x,d=this.y-e.y,this.r=u*u+d*d}};i(c,"Triangle");var a=c;function l(e,t){return t.x-e.x}function u(e){let t,r,n,o,i,s=e.length;e:for(;s;)for(r=e[--s],t=e[--s],n=s;n;)if(i=e[--n],o=e[--n],t===o&&r===i||t===i&&r===o){e.splice(s,2),e.splice(n,2),s-=2;continue e}}function d(e){if(e.length<3)return[];e.sort(l);let t=e.length-1;const r=e[t].x,n=e[0].x;let o=e[t].y,i=o;let s,c,d,h,p,f;for(;t--;)e[t].y<o&&(o=e[t].y),e[t].y>i&&(i=e[t].y);let y=n-r,m=i-o;const g=y>m?y:m,x=.5*(n+r),j=.5*(i+o),w=[new a({__sentinel:!0,x:x-20*g,y:j-g},{__sentinel:!0,x:x,y:j+20*g},{__sentinel:!0,x:x+20*g,y:j-g})],v=[],b=[];let E;for(t=e.length;t--;){for(b.length=0,E=w.length;E--;)y=e[t].x-w[E].x,y>0&&y*y>w[E].r?(v.push(w[E]),w.splice(E,1)):(m=e[t].y-w[E].y,y*y+m*m>w[E].r||(b.push(w[E].a,w[E].b,w[E].b,w[E].c,w[E].c,w[E].a),w.splice(E,1)));for(u(b),E=b.length;E;)c=b[--E],s=b[--E],d=e[t],h=c.x-s.x,p=c.y-s.y,f=2*(h*(d.y-c.y)-p*(d.x-c.x)),Math.abs(f)>1e-12&&w.push(new a(s,c,d))}for(Array.prototype.push.apply(v,w),t=v.length;t--;)(v[t].a.__sentinel||v[t].b.__sentinel||v[t].c.__sentinel)&&v.splice(t,1);return v}i(l,"byX"),i(u,"dedup"),i(d,"triangulate")}}]);