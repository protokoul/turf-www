"use strict";(self.webpackChunkturf_www=self.webpackChunkturf_www||[]).push([[99763],{99589:(e,r,t)=>{t.d(r,{Q:()=>o});var n=t(63399);function o(e,r={}){if(null!=e.bbox&&!0!==r.recompute)return e.bbox;const t=[1/0,1/0,-1/0,-1/0];return(0,n.Fh)(e,(e=>{t[0]>e[0]&&(t[0]=e[0]),t[1]>e[1]&&(t[1]=e[1]),t[2]<e[0]&&(t[2]=e[0]),t[3]<e[1]&&(t[3]=e[1])})),t}(0,Object.defineProperty)(o,"name",{value:"bbox",configurable:!0})},85078:(e,r,t)=>{t.d(r,{O:()=>a});var n=t(83490),o=Object.defineProperty,i=(e,r)=>o(e,"name",{value:r,configurable:!0});function a(e,r,t={}){const o=(0,n.uG)(e),i=(0,n.$R)(r);for(let n=0;n<i.length-1;n++){let e=!1;if(t.ignoreEndVertices&&(0===n&&(e="start"),n===i.length-2&&(e="end"),0===n&&n+1===i.length-1&&(e="both")),s(i[n],i[n+1],o,e,void 0===t.epsilon?null:t.epsilon))return!0}return!1}function s(e,r,t,n,o){const i=t[0],a=t[1],s=e[0],u=e[1],c=r[0],l=r[1],f=c-s,h=l-u,p=(t[0]-s)*h-(t[1]-u)*f;if(null!==o){if(Math.abs(p)>o)return!1}else if(0!==p)return!1;return n?"start"===n?Math.abs(f)>=Math.abs(h)?f>0?s<i&&i<=c:c<=i&&i<s:h>0?u<a&&a<=l:l<=a&&a<u:"end"===n?Math.abs(f)>=Math.abs(h)?f>0?s<=i&&i<c:c<i&&i<=s:h>0?u<=a&&a<l:l<a&&a<=u:"both"===n&&(Math.abs(f)>=Math.abs(h)?f>0?s<i&&i<c:c<i&&i<s:h>0?u<a&&a<l:l<a&&a<u):Math.abs(f)>=Math.abs(h)?f>0?s<=i&&i<=c:c<=i&&i<=s:h>0?u<=a&&a<=l:l<=a&&a<=u}i(a,"booleanPointOnLine"),i(s,"isPointOnLineSegment")},79204:(e,r,t)=>{t.d(r,{v:()=>i});var n=t(67149),o=t(63399);function i(e,r={}){let t=0,i=0,a=0;return(0,o.Fh)(e,(function(e){t+=e[0],i+=e[1],a++}),!0),(0,n.zx)([t/a,i/a],r.properties)}(0,Object.defineProperty)(i,"name",{value:"centroid",configurable:!0})},53257:(e,r,t)=>{t.d(r,{Rd:()=>s,o8:()=>i});var n=Object.defineProperty,o=(e,r)=>n(e,"name",{value:r,configurable:!0});function i(e){if(!e)throw new Error("geojson is required");switch(e.type){case"Feature":return a(e);case"FeatureCollection":return u(e);case"Point":case"LineString":case"Polygon":case"MultiPoint":case"MultiLineString":case"MultiPolygon":case"GeometryCollection":return c(e);default:throw new Error("unknown GeoJSON type")}}function a(e){const r={type:"Feature"};return Object.keys(e).forEach((t=>{switch(t){case"type":case"properties":case"geometry":return;default:r[t]=e[t]}})),r.properties=s(e.properties),null==e.geometry?r.geometry=null:r.geometry=c(e.geometry),r}function s(e){const r={};return e?(Object.keys(e).forEach((t=>{const n=e[t];"object"==typeof n?null===n?r[t]=null:Array.isArray(n)?r[t]=n.map((e=>e)):r[t]=s(n):r[t]=n})),r):r}function u(e){const r={type:"FeatureCollection"};return Object.keys(e).forEach((t=>{switch(t){case"type":case"features":return;default:r[t]=e[t]}})),r.features=e.features.map((e=>a(e))),r}function c(e){const r={type:e.type};return e.bbox&&(r.bbox=e.bbox),"GeometryCollection"===e.type?(r.geometries=e.geometries.map((e=>c(e))),r):(r.coordinates=l(e.coordinates),r)}function l(e){const r=e;return"object"!=typeof r[0]?r.slice():r.map((e=>l(e)))}o(i,"clone"),o(a,"cloneFeature"),o(s,"cloneProperties"),o(u,"cloneFeatureCollection"),o(c,"cloneGeometry"),o(l,"deepSlice")},18685:(e,r,t)=>{t.d(r,{I:()=>i});var n=t(83490),o=t(67149);function i(e,r,t={}){var i=(0,n.uG)(e),a=(0,n.uG)(r),s=(0,o.tR)(a[1]-i[1]),u=(0,o.tR)(a[0]-i[0]),c=(0,o.tR)(i[1]),l=(0,o.tR)(a[1]),f=Math.pow(Math.sin(s/2),2)+Math.pow(Math.sin(u/2),2)*Math.cos(c)*Math.cos(l);return(0,o.cJ)(2*Math.atan2(Math.sqrt(f),Math.sqrt(1-f)),t.units)}(0,Object.defineProperty)(i,"name",{value:"distance",configurable:!0})},35176:(e,r,t)=>{t.d(r,{O:()=>u});var n=t(18685),o=t(1529),i=t(67149),a=Object.defineProperty,s=(e,r)=>a(e,"name",{value:r,configurable:!0});function u(e,r,t={}){const a=JSON.stringify(t.properties||{}),[s,u,f,h]=e,p=(u+h)/2,d=(s+f)/2,g=2*r/(0,n.I)([s,p],[f,p],t)*(f-s),b=2*r/(0,n.I)([d,u],[d,h],t)*(h-u),m=g/2,y=2*m,v=Math.sqrt(3)/2*b,M=f-s,w=h-u,P=3/4*y,x=v,O=(M-y)/(y-m/2),E=Math.floor(O),k=(E*P-m/2-M)/2-m/2+P/2,L=Math.floor((w-v)/v);let _=(w-L*v)/2;const j=L*v-w>v/2;j&&(_-=v/4);const I=[],S=[];for(let n=0;n<6;n++){const e=2*Math.PI/6*n;I.push(Math.cos(e)),S.push(Math.sin(e))}const G=[];for(let n=0;n<=E;n++)for(let e=0;e<=L;e++){const r=n%2==1;if(0===e&&r)continue;if(0===e&&j)continue;const f=n*P+s-k;let h=e*x+u+_;if(r&&(h-=v/2),!0===t.triangles)l([f,h],g/2,b/2,JSON.parse(a),I,S).forEach((function(e){t.mask?(0,o.y)((0,i.Lr)([t.mask,e]))&&G.push(e):G.push(e)}));else{const e=c([f,h],g/2,b/2,JSON.parse(a),I,S);t.mask?(0,o.y)((0,i.Lr)([t.mask,e]))&&G.push(e):G.push(e)}}return(0,i.Lr)(G)}function c(e,r,t,n,o,a){const s=[];for(let i=0;i<6;i++){const n=e[0]+r*o[i],u=e[1]+t*a[i];s.push([n,u])}return s.push(s[0].slice()),(0,i.n1)([s],n)}function l(e,r,t,n,o,a){const s=[];for(let u=0;u<6;u++){const c=[];c.push(e),c.push([e[0]+r*o[u],e[1]+t*a[u]]),c.push([e[0]+r*o[(u+1)%6],e[1]+t*a[(u+1)%6]]),c.push(e),s.push((0,i.n1)([c],n))}return s}s(u,"hexGrid"),s(c,"hexagon"),s(l,"hexTriangles")},70799:(e,r,t)=>{t.d(r,{G:()=>d});var n=t(99589),o=t(35176),i=t(76693),a=t(18685),s=t(79204),u=t(69748),c=t(98199),l=t(53257),f=t(67149),h=t(63399),p=t(83490);function d(e,r,t){if("object"!=typeof(t=t||{}))throw new Error("options is invalid");var d=t.gridType,g=t.property,b=t.weight;if(!e)throw new Error("points is required");if((0,p.iw)(e,"Point","input must contain Points"),!r)throw new Error("cellSize is required");if(void 0!==b&&"number"!=typeof b)throw new Error("weight must be a number");g=g||"elevation",d=d||"square",b=b||1;var m,y=(0,n.Q)(e);switch(d){case"point":case"points":m=(0,i.h)(y,r,t);break;case"square":case"squares":m=(0,u.c)(y,r,t);break;case"hex":case"hexes":m=(0,o.O)(y,r,t);break;case"triangle":case"triangles":m=(0,c.V)(y,r,t);break;default:throw new Error("invalid gridType")}var v=[];return(0,h.us)(m,(function(r){var n=0,o=0;(0,h.us)(e,(function(e){var i,u="point"===d?r:(0,s.v)(r),c=(0,a.I)(u,e,t);if(void 0!==g&&(i=e.properties[g]),void 0===i&&(i=e.geometry.coordinates[2]),void 0===i)throw new Error("zValue is missing");0===c&&(n=i);var l=1/Math.pow(c,b);o+=l,n+=l*i}));var i=(0,l.o8)(r);i.properties[g]=n/o,v.push(i)})),(0,f.Lr)(v)}(0,Object.defineProperty)(d,"name",{value:"interpolate",configurable:!0})},1529:(e,r,t)=>{t.d(r,{y:()=>a});var n=t(67149),o=t(63399),i=t(59004);function a(e,r={}){const t=[];if((0,o.kX)(e,(e=>{t.push(e.coordinates)})),t.length<2)throw new Error("Must specify at least 2 geometries");const a=i.intersection(t[0],...t.slice(1));return 0===a.length?null:1===a.length?(0,n.n1)(a[0],r.properties):(0,n.g5)(a,r.properties)}(0,Object.defineProperty)(a,"name",{value:"intersect",configurable:!0})},76693:(e,r,t)=>{t.d(r,{h:()=>P});var n=t(99589),o=t(85078),i=t(10200),a=t(83490),s=Object.defineProperty,u=(e,r)=>s(e,"name",{value:r,configurable:!0});function c(e,r){var t=(0,a.bg)(e),n=(0,a.bg)(r),s=t.type,u=n.type;switch(s){case"Point":switch(u){case"MultiPoint":return l(t,n);case"LineString":return(0,o.O)(t,n,{ignoreEndVertices:!0});case"Polygon":case"MultiPolygon":return(0,i.m)(t,n,{ignoreBoundary:!0});default:throw new Error("feature2 "+u+" geometry not supported")}case"MultiPoint":switch(u){case"MultiPoint":return f(t,n);case"LineString":return h(t,n);case"Polygon":case"MultiPolygon":return p(t,n);default:throw new Error("feature2 "+u+" geometry not supported")}case"LineString":switch(u){case"LineString":return d(t,n);case"Polygon":case"MultiPolygon":return g(t,n);default:throw new Error("feature2 "+u+" geometry not supported")}case"Polygon":switch(u){case"Polygon":case"MultiPolygon":return b(t,n);default:throw new Error("feature2 "+u+" geometry not supported")}default:throw new Error("feature1 "+s+" geometry not supported")}}function l(e,r){var t,n=!1;for(t=0;t<r.coordinates.length;t++)if(y(r.coordinates[t],e.coordinates)){n=!0;break}return n}function f(e,r){for(var t=0;t<e.coordinates.length;t++){for(var n=!1,o=0;o<r.coordinates.length;o++)y(e.coordinates[t],r.coordinates[o])&&(n=!0);if(!n)return!1}return!0}function h(e,r){for(var t=!1,n=0;n<e.coordinates.length;n++){if(!(0,o.O)(e.coordinates[n],r))return!1;t||(t=(0,o.O)(e.coordinates[n],r,{ignoreEndVertices:!0}))}return t}function p(e,r){for(var t=!0,n=!1,o=0;o<e.coordinates.length;o++){if(!(n=(0,i.m)(e.coordinates[o],r))){t=!1;break}n=(0,i.m)(e.coordinates[o],r,{ignoreBoundary:!0})}return t&&n}function d(e,r){for(var t=0;t<e.coordinates.length;t++)if(!(0,o.O)(e.coordinates[t],r))return!1;return!0}function g(e,r){if(!m((0,n.Q)(r),(0,n.Q)(e)))return!1;for(var t=!1,o=0;o<e.coordinates.length;o++){if(!(0,i.m)(e.coordinates[o],r))return!1;if(t||(t=(0,i.m)(e.coordinates[o],r,{ignoreBoundary:!0})),!t&&o<e.coordinates.length-1){var a=v(e.coordinates[o],e.coordinates[o+1]);t=(0,i.m)(a,r,{ignoreBoundary:!0})}}return t}function b(e,r){var t=(0,n.Q)(e);if(!m((0,n.Q)(r),t))return!1;for(var o=0;o<e.coordinates[0].length;o++)if(!(0,i.m)(e.coordinates[0][o],r))return!1;return!0}function m(e,r){return!(e[0]>r[0])&&(!(e[2]<r[2])&&(!(e[1]>r[1])&&!(e[3]<r[3])))}function y(e,r){return e[0]===r[0]&&e[1]===r[1]}function v(e,r){return[(e[0]+r[0])/2,(e[1]+r[1])/2]}u(c,"booleanWithin"),u(l,"isPointInMultiPoint"),u(f,"isMultiPointInMultiPoint"),u(h,"isMultiPointOnLine"),u(p,"isMultiPointInPoly"),u(d,"isLineOnLine"),u(g,"isLineInPoly"),u(b,"isPolyInPoly"),u(m,"doBBoxOverlap"),u(y,"compareCoords"),u(v,"getMidpoint");var M=t(18685),w=t(67149);function P(e,r,t={}){t.mask&&!t.units&&(t.units="kilometers");for(var n=[],o=e[0],i=e[1],a=e[2],s=e[3],u=r/(0,M.I)([o,i],[a,i],t)*(a-o),l=r/(0,M.I)([o,i],[o,s],t)*(s-i),f=a-o,h=s-i,p=Math.floor(f/u),d=(h-Math.floor(h/l)*l)/2,g=o+(f-p*u)/2;g<=a;){for(var b=i+d;b<=s;){var m=(0,w.zx)([g,b],t.properties);t.mask?c(m,t.mask)&&n.push(m):n.push(m),b+=l}g+=u}return(0,w.Lr)(n)}(0,Object.defineProperty)(P,"name",{value:"pointGrid",configurable:!0})},84245:(e,r,t)=>{t.d(r,{_e:()=>u});var n=t(67149),o=Object.defineProperty,i=(e,r)=>o(e,"name",{value:r,configurable:!0});function a(e){return Array.isArray(e)?p(e):e&&e.bbox?p(e.bbox):[f(),h()]}function s(e){null!=e&&(Array.isArray(e)?(0,n.O6)(e):null!=e.bbox&&(0,n.O6)(e.bbox))}function u(e,r={}){s(r.bbox),null==e&&(e=1);const t=[];for(let o=0;o<e;o++)t.push((0,n.zx)(a(r.bbox)));return(0,n.Lr)(t)}function c(e){return r=>[r[0]+e[0],r[1]+e[1]]}function l(){return Math.random()-.5}function f(){return 360*l()}function h(){return 180*l()}function p(e){return[Math.random()*(e[2]-e[0])+e[0],Math.random()*(e[3]-e[1])+e[1]]}i((function(e){return s(e),a(e)}),"randomPosition"),i(a,"randomPositionUnchecked"),i(s,"checkBBox"),i(u,"randomPoint"),i((function(e,r={}){s(r.bbox),null==e&&(e=1),(0,n.Et)(r.num_vertices)&&void 0!==r.num_vertices||(r.num_vertices=10),(0,n.Et)(r.max_radial_length)&&void 0!==r.max_radial_length||(r.max_radial_length=10);const t=[];for(let o=0;o<e;o++){let e=[];const o=[...Array(r.num_vertices+1)].map(Math.random);o.forEach(((e,r,t)=>{t[r]=r>0?e+t[r-1]:e})),o.forEach((t=>{t=2*t*Math.PI/o[o.length-1];const n=Math.random();e.push([n*(r.max_radial_length||10)*Math.sin(t),n*(r.max_radial_length||10)*Math.cos(t)])})),e[e.length-1]=e[0],e=e.map(c(a(r.bbox))),t.push((0,n.n1)([e]))}return(0,n.Lr)(t)}),"randomPolygon"),i((function(e,r={}){if(r=r||{},!(0,n.Gv)(r))throw new Error("options is invalid");const t=r.bbox;s(t);let o=r.num_vertices,i=r.max_length,u=r.max_rotation;null==e&&(e=1),(!(0,n.Et)(o)||void 0===o||o<2)&&(o=10),(0,n.Et)(i)&&void 0!==i||(i=1e-4),(0,n.Et)(u)&&void 0!==u||(u=Math.PI/8);const c=[];for(let s=0;s<e;s++){const e=[a(t)];for(let r=0;r<o-1;r++){const t=(0===r?2*Math.random()*Math.PI:Math.tan((e[r][1]-e[r-1][1])/(e[r][0]-e[r-1][0])))+(Math.random()-.5)*u*2,n=Math.random()*i;e.push([e[r][0]+n*Math.cos(t),e[r][1]+n*Math.sin(t)])}c.push((0,n.wi)(e))}return(0,n.Lr)(c)}),"randomLineString"),i(c,"vertexToCoordinate"),i(l,"rnd"),i(f,"lon"),i(h,"lat"),i(p,"coordInBBox")},98199:(e,r,t)=>{t.d(r,{V:()=>a});var n=t(18685),o=t(1529),i=t(67149);function a(e,r,t={}){for(var a=[],s=r/(0,n.I)([e[0],e[1]],[e[2],e[1]],t)*(e[2]-e[0]),u=r/(0,n.I)([e[0],e[1]],[e[0],e[3]],t)*(e[3]-e[1]),c=0,l=e[0];l<=e[2];){for(var f=0,h=e[1];h<=e[3];){var p=null,d=null;c%2==0&&f%2==0?(p=(0,i.n1)([[[l,h],[l,h+u],[l+s,h],[l,h]]],t.properties),d=(0,i.n1)([[[l,h+u],[l+s,h+u],[l+s,h],[l,h+u]]],t.properties)):c%2==0&&f%2==1?(p=(0,i.n1)([[[l,h],[l+s,h+u],[l+s,h],[l,h]]],t.properties),d=(0,i.n1)([[[l,h],[l,h+u],[l+s,h+u],[l,h]]],t.properties)):f%2==0&&c%2==1?(p=(0,i.n1)([[[l,h],[l,h+u],[l+s,h+u],[l,h]]],t.properties),d=(0,i.n1)([[[l,h],[l+s,h+u],[l+s,h],[l,h]]],t.properties)):f%2==1&&c%2==1&&(p=(0,i.n1)([[[l,h],[l,h+u],[l+s,h],[l,h]]],t.properties),d=(0,i.n1)([[[l,h+u],[l+s,h+u],[l+s,h],[l,h+u]]],t.properties)),t.mask?((0,o.y)((0,i.Lr)([t.mask,p]))&&a.push(p),(0,o.y)((0,i.Lr)([t.mask,d]))&&a.push(d)):(a.push(p),a.push(d)),h+=u,f++}c++,l+=s}return(0,i.Lr)(a)}(0,Object.defineProperty)(a,"name",{value:"triangleGrid",configurable:!0})}}]);