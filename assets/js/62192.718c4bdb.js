"use strict";(self.webpackChunkturf_www=self.webpackChunkturf_www||[]).push([[62192],{44732:(t,e,r)=>{r.d(e,{k:()=>o});var n=r(67149);function o(t,e={}){const r=Number(t[0]),o=Number(t[1]),i=Number(t[2]),a=Number(t[3]);if(6===t.length)throw new Error("@turf/bbox-polygon does not support BBox with 6 positions");const s=[r,o],u=[r,a],c=[i,a],h=[i,o];return(0,n.n1)([[s,h,c,u,s]],e.properties,{bbox:t,id:e.id})}(0,Object.defineProperty)(o,"name",{value:"bboxPolygon",configurable:!0})},99589:(t,e,r)=>{r.d(e,{Q:()=>o});var n=r(63399);function o(t,e={}){if(null!=t.bbox&&!0!==e.recompute)return t.bbox;const r=[1/0,1/0,-1/0,-1/0];return(0,n.Fh)(t,(t=>{r[0]>t[0]&&(r[0]=t[0]),r[1]>t[1]&&(r[1]=t[1]),r[2]<t[0]&&(r[2]=t[0]),r[3]<t[1]&&(r[3]=t[1])})),r}(0,Object.defineProperty)(o,"name",{value:"bbox",configurable:!0})},10200:(t,e,r)=>{r.d(e,{m:()=>s});const n=function(t,e){for(var r=0,n=0,o=0,i=0,a=0,s=0,u=0,c=0,h=null,l=null,f=t[0],p=t[1],y=e.length;r<y;r++){n=0;var g=e[r].length-1,d=e[r];if((h=d[0])[0]!==d[g][0]&&h[1]!==d[g][1])throw new Error("First and last coordinates in a ring must be the same");for(a=h[0]-f,s=h[1]-p;n<g;n++)if(c=(l=d[n+1])[1]-p,s<0&&c<0||s>0&&c>0)s=c,a=(h=l)[0]-f;else{if(u=l[0]-t[0],c>0&&s<=0){if((i=a*c-u*s)>0)o+=1;else if(0===i)return 0}else if(s>0&&c<=0){if((i=a*c-u*s)<0)o+=1;else if(0===i)return 0}else if(0===c&&s<0){if(0===(i=a*c-u*s))return 0}else if(0===s&&c<0){if(0===(i=a*c-u*s))return 0}else if(0===s&&0===c){if(u<=0&&a>=0)return 0;if(a<=0&&u>=0)return 0}h=l,s=c,a=u}}return o%2!=0};var o=r(83490),i=Object.defineProperty,a=(t,e)=>i(t,"name",{value:e,configurable:!0});function s(t,e,r={}){if(!t)throw new Error("point is required");if(!e)throw new Error("polygon is required");const i=(0,o.uG)(t),a=(0,o.bg)(e),s=a.type,c=e.bbox;let h=a.coordinates;if(c&&!1===u(i,c))return!1;"Polygon"===s&&(h=[h]);let l=!1;for(var f=0;f<h.length;++f){const t=n(i,h[f]);if(0===t)return!r.ignoreBoundary;t&&(l=!0)}return l}function u(t,e){return e[0]<=t[0]&&e[1]<=t[1]&&e[2]>=t[0]&&e[3]>=t[1]}a(s,"booleanPointInPolygon"),a(u,"inBBox")},36223:(t,e,r)=>{r.d(e,{g:()=>i});var n=r(99589),o=r(67149);function i(t,e={}){const r=(0,n.Q)(t),i=(r[0]+r[2])/2,a=(r[1]+r[3])/2;return(0,o.zx)([i,a],e.properties,e)}(0,Object.defineProperty)(i,"name",{value:"center",configurable:!0})},79204:(t,e,r)=>{r.d(e,{v:()=>i});var n=r(67149),o=r(63399);function i(t,e={}){let r=0,i=0,a=0;return(0,o.Fh)(t,(function(t){r+=t[0],i+=t[1],a++}),!0),(0,n.zx)([r/a,i/a],e.properties)}(0,Object.defineProperty)(i,"name",{value:"centroid",configurable:!0})},86150:(t,e,r)=>{r.d(e,{a:()=>s});var n=r(67149),o=r(83490),i=Object.defineProperty,a=(t,e)=>i(t,"name",{value:e,configurable:!0});function s(t,e={}){var r="object"==typeof e?e.mutate:e;if(!t)throw new Error("geojson is required");var i=(0,o.Pw)(t),a=[];switch(i){case"LineString":a=u(t,i);break;case"MultiLineString":case"Polygon":(0,o.$R)(t).forEach((function(t){a.push(u(t,i))}));break;case"MultiPolygon":(0,o.$R)(t).forEach((function(t){var e=[];t.forEach((function(t){e.push(u(t,i))})),a.push(e)}));break;case"Point":return t;case"MultiPoint":var s={};(0,o.$R)(t).forEach((function(t){var e=t.join("-");Object.prototype.hasOwnProperty.call(s,e)||(a.push(t),s[e]=!0)}));break;default:throw new Error(i+" geometry not supported")}return t.coordinates?!0===r?(t.coordinates=a,t):{type:i,coordinates:a}:!0===r?(t.geometry.coordinates=a,t):(0,n.N4)({type:i,coordinates:a},t.properties,{bbox:t.bbox,id:t.id})}function u(t,e){var r=(0,o.$R)(t);if(2===r.length&&!c(r[0],r[1]))return r;var n=[],i=r.length-1,a=n.length;n.push(r[0]);for(var s=1;s<i;s++){var u=n[n.length-1];r[s][0]===u[0]&&r[s][1]===u[1]||(n.push(r[s]),(a=n.length)>2&&h(n[a-3],n[a-1],n[a-2])&&n.splice(n.length-2,1))}if(n.push(r[r.length-1]),a=n.length,("Polygon"===e||"MultiPolygon"===e)&&c(r[0],r[r.length-1])&&a<4)throw new Error("invalid polygon");return"LineString"===e&&a<3||h(n[a-3],n[a-1],n[a-2])&&n.splice(n.length-2,1),n}function c(t,e){return t[0]===e[0]&&t[1]===e[1]}function h(t,e,r){var n=r[0],o=r[1],i=t[0],a=t[1],s=e[0],u=e[1],c=s-i,h=u-a;return 0===(n-i)*h-(o-a)*c&&(Math.abs(c)>=Math.abs(h)?c>0?i<=n&&n<=s:s<=n&&n<=i:h>0?a<=o&&o<=u:u<=o&&o<=a)}a(s,"cleanCoords"),a(u,"cleanLine"),a(c,"equals"),a(h,"isPointOnLineSegment")},53257:(t,e,r)=>{r.d(e,{Rd:()=>s,o8:()=>i});var n=Object.defineProperty,o=(t,e)=>n(t,"name",{value:e,configurable:!0});function i(t){if(!t)throw new Error("geojson is required");switch(t.type){case"Feature":return a(t);case"FeatureCollection":return u(t);case"Point":case"LineString":case"Polygon":case"MultiPoint":case"MultiLineString":case"MultiPolygon":case"GeometryCollection":return c(t);default:throw new Error("unknown GeoJSON type")}}function a(t){const e={type:"Feature"};return Object.keys(t).forEach((r=>{switch(r){case"type":case"properties":case"geometry":return;default:e[r]=t[r]}})),e.properties=s(t.properties),null==t.geometry?e.geometry=null:e.geometry=c(t.geometry),e}function s(t){const e={};return t?(Object.keys(t).forEach((r=>{const n=t[r];"object"==typeof n?null===n?e[r]=null:Array.isArray(n)?e[r]=n.map((t=>t)):e[r]=s(n):e[r]=n})),e):e}function u(t){const e={type:"FeatureCollection"};return Object.keys(t).forEach((r=>{switch(r){case"type":case"features":return;default:e[r]=t[r]}})),e.features=t.features.map((t=>a(t))),e}function c(t){const e={type:t.type};return t.bbox&&(e.bbox=t.bbox),"GeometryCollection"===t.type?(e.geometries=t.geometries.map((t=>c(t))),e):(e.coordinates=h(t.coordinates),e)}function h(t){const e=t;return"object"!=typeof e[0]?e.slice():e.map((t=>h(t)))}o(i,"clone"),o(a,"cloneFeature"),o(s,"cloneProperties"),o(u,"cloneFeatureCollection"),o(c,"cloneGeometry"),o(h,"deepSlice")},18685:(t,e,r)=>{r.d(e,{I:()=>i});var n=r(83490),o=r(67149);function i(t,e,r={}){var i=(0,n.uG)(t),a=(0,n.uG)(e),s=(0,o.tR)(a[1]-i[1]),u=(0,o.tR)(a[0]-i[0]),c=(0,o.tR)(i[1]),h=(0,o.tR)(a[1]),l=Math.pow(Math.sin(s/2),2)+Math.pow(Math.sin(u/2),2)*Math.cos(c)*Math.cos(h);return(0,o.cJ)(2*Math.atan2(Math.sqrt(l),Math.sqrt(1-l)),r.units)}(0,Object.defineProperty)(i,"name",{value:"distance",configurable:!0})},83490:(t,e,r)=>{r.d(e,{$R:()=>s,Pw:()=>l,bg:()=>h,iw:()=>c,mo:()=>u,uG:()=>a});var n=r(67149),o=Object.defineProperty,i=(t,e)=>o(t,"name",{value:e,configurable:!0});function a(t){if(!t)throw new Error("coord is required");if(!Array.isArray(t)){if("Feature"===t.type&&null!==t.geometry&&"Point"===t.geometry.type)return[...t.geometry.coordinates];if("Point"===t.type)return[...t.coordinates]}if(Array.isArray(t)&&t.length>=2&&!Array.isArray(t[0])&&!Array.isArray(t[1]))return[...t];throw new Error("coord must be GeoJSON Point or an Array of numbers")}function s(t){if(Array.isArray(t))return t;if("Feature"===t.type){if(null!==t.geometry)return t.geometry.coordinates}else if(t.coordinates)return t.coordinates;throw new Error("coords must be GeoJSON Feature, Geometry Object or an Array")}function u(t,e,r){if(!t)throw new Error("No feature passed");if(!r)throw new Error(".featureOf() requires a name");if(!t||"Feature"!==t.type||!t.geometry)throw new Error("Invalid input to "+r+", Feature with geometry required");if(!t.geometry||t.geometry.type!==e)throw new Error("Invalid input to "+r+": must be a "+e+", given "+t.geometry.type)}function c(t,e,r){if(!t)throw new Error("No featureCollection passed");if(!r)throw new Error(".collectionOf() requires a name");if(!t||"FeatureCollection"!==t.type)throw new Error("Invalid input to "+r+", FeatureCollection required");for(const n of t.features){if(!n||"Feature"!==n.type||!n.geometry)throw new Error("Invalid input to "+r+", Feature with geometry required");if(!n.geometry||n.geometry.type!==e)throw new Error("Invalid input to "+r+": must be a "+e+", given "+n.geometry.type)}}function h(t){return"Feature"===t.type?t.geometry:t}function l(t,e){return"FeatureCollection"===t.type?"FeatureCollection":"GeometryCollection"===t.type?"GeometryCollection":"Feature"===t.type&&null!==t.geometry?t.geometry.type:t.type}i(a,"getCoord"),i(s,"getCoords"),i((function t(e){if(e.length>1&&(0,n.Et)(e[0])&&(0,n.Et)(e[1]))return!0;if(Array.isArray(e[0])&&e[0].length)return t(e[0]);throw new Error("coordinates must only contain numbers")}),"containsNumber"),i((function(t,e,r){if(!e||!r)throw new Error("type and name required");if(!t||t.type!==e)throw new Error("Invalid input to "+r+": must be a "+e+", given "+t.type)}),"geojsonType"),i(u,"featureOf"),i(c,"collectionOf"),i(h,"getGeom"),i(l,"getType")},86137:(t,e,r)=>{r.d(e,{F:()=>s});var n=r(67149),o=r(83490),i=Object.defineProperty,a=(t,e)=>i(t,"name",{value:e,configurable:!0});function s(t,e,r={}){let n;n=r.final?u((0,o.uG)(e),(0,o.uG)(t)):u((0,o.uG)(t),(0,o.uG)(e));return n>180?-(360-n):n}function u(t,e){const r=(0,n.tR)(t[1]),o=(0,n.tR)(e[1]);let i=(0,n.tR)(e[0]-t[0]);i>Math.PI&&(i-=2*Math.PI),i<-Math.PI&&(i+=2*Math.PI);const a=Math.log(Math.tan(o/2+Math.PI/4)/Math.tan(r/2+Math.PI/4)),s=Math.atan2(i,a);return((0,n.nv)(s)+360)%360}a(s,"rhumbBearing"),a(u,"calculateRhumbBearing")},89783:(t,e,r)=>{r.d(e,{r:()=>s});var n=r(67149),o=r(83490),i=Object.defineProperty,a=(t,e)=>i(t,"name",{value:e,configurable:!0});function s(t,e,r,i={}){const a=e<0;let s=(0,n.I3)(Math.abs(e),i.units,"meters");a&&(s=-Math.abs(s));const c=(0,o.uG)(t),h=u(c,s,r);return h[0]+=h[0]-c[0]>180?-360:c[0]-h[0]>180?360:0,(0,n.zx)(h,i.properties)}function u(t,e,r,o){const i=e/(o=void 0===o?n.zX:Number(o)),a=t[0]*Math.PI/180,s=(0,n.tR)(t[1]),u=(0,n.tR)(r),c=i*Math.cos(u);let h=s+c;Math.abs(h)>Math.PI/2&&(h=h>0?Math.PI-h:-Math.PI-h);const l=Math.log(Math.tan(h/2+Math.PI/4)/Math.tan(s/2+Math.PI/4)),f=Math.abs(l)>1e-11?c/l:Math.cos(s);return[(180*(a+i*Math.sin(u)/f)/Math.PI+540)%360-180,180*h/Math.PI]}a(s,"rhumbDestination"),a(u,"calculateRhumbDestination")},82:(t,e,r)=>{r.d(e,{E:()=>s});var n=r(67149),o=r(83490),i=Object.defineProperty,a=(t,e)=>i(t,"name",{value:e,configurable:!0});function s(t,e,r={}){const i=(0,o.uG)(t),a=(0,o.uG)(e);a[0]+=a[0]-i[0]>180?-360:i[0]-a[0]>180?360:0;const s=u(i,a);return(0,n.I3)(s,"meters",r.units)}function u(t,e,r){const o=r=void 0===r?n.zX:Number(r),i=t[1]*Math.PI/180,a=e[1]*Math.PI/180,s=a-i;let u=Math.abs(e[0]-t[0])*Math.PI/180;u>Math.PI&&(u-=2*Math.PI);const c=Math.log(Math.tan(a/2+Math.PI/4)/Math.tan(i/2+Math.PI/4)),h=Math.abs(c)>1e-11?s/c:Math.cos(i);return Math.sqrt(s*s+h*h*u*u)*o}a(s,"rhumbDistance"),a(u,"calculateRhumbDistance")},62192:(t,e,r)=>{r.d(e,{_:()=>m});var n=r(99589),o=r(10200),i=r(18685),a=r(54387),s=r(86150),u=r(44732),c=r(83490),h=r(67149),l=Object.defineProperty,f=(t,e)=>l(t,"name",{value:e,configurable:!0});function p(t){for(var e=t,r=[];e.parent;)r.unshift(e),e=e.parent;return r}function y(){return new w((function(t){return t.f}))}f(p,"pathTo"),f(y,"getHeap");var g={search:function(t,e,r,n){var o;t.cleanDirty();var i=(n=n||{}).heuristic||g.heuristics.manhattan,a=null!=(o=n.closest)&&o,s=y(),u=e;for(e.h=i(e,r),s.push(e);s.size()>0;){var c=s.pop();if(c===r)return p(c);c.closed=!0;for(var h=t.neighbors(c),l=0,f=h.length;l<f;++l){var d=h[l];if(!d.closed&&!d.isWall()){var b=c.g+d.getCost(c),w=d.visited;(!w||b<d.g)&&(d.visited=!0,d.parent=c,d.h=d.h||i(d,r),d.g=b,d.f=d.g+d.h,t.markDirty(d),a&&(d.h<u.h||d.h===u.h&&d.g<u.g)&&(u=d),w?s.rescoreElement(d):s.push(d))}}}return a?p(u):[]},heuristics:{manhattan:function(t,e){return Math.abs(e.x-t.x)+Math.abs(e.y-t.y)},diagonal:function(t,e){var r=Math.sqrt(2),n=Math.abs(e.x-t.x),o=Math.abs(e.y-t.y);return 1*(n+o)+(r-2)*Math.min(n,o)}},cleanNode:function(t){t.f=0,t.g=0,t.h=0,t.visited=!1,t.closed=!1,t.parent=null}};function d(t,e){e=e||{},this.nodes=[],this.diagonal=!!e.diagonal,this.grid=[];for(var r=0;r<t.length;r++){this.grid[r]=[];for(var n=0,o=t[r];n<o.length;n++){var i=new b(r,n,o[n]);this.grid[r][n]=i,this.nodes.push(i)}}this.init()}function b(t,e,r){this.x=t,this.y=e,this.weight=r}function w(t){this.content=[],this.scoreFunction=t}function m(t,e,r={}){if(r=r||{},!(0,h.Gv)(r))throw new Error("options is invalid");let o=r.obstacles||(0,h.Lr)([]),l=r.resolution||100;if(!t)throw new Error("start is required");if(!e)throw new Error("end is required");if(l&&(!(0,h.Et)(l)||l<=0))throw new Error("options.resolution must be a number, greater than 0");const f=(0,c.uG)(t),p=(0,c.uG)(e);if(t=(0,h.zx)(f),e=(0,h.zx)(p),"FeatureCollection"===o.type){if(0===o.features.length)return(0,h.wi)([f,p])}else{if("Polygon"!==o.type)throw new Error("invalid obstacles");o=(0,h.Lr)([(0,h.N4)((0,c.bg)(o))])}const y=o;y.features.push(t),y.features.push(e);const b=(0,n.Q)((0,a.n)((0,u.k)((0,n.Q)(y)),1.15)),[w,m,M,P]=b,E=(0,i.I)([w,m],[M,m],r)/l;y.features.pop(),y.features.pop();const x=E/(0,i.I)([w,m],[M,m],r)*(M-w),I=E/(0,i.I)([w,m],[w,P],r)*(P-m),F=M-w,j=P-m,O=Math.floor(F/x),G=Math.floor(j/I),N=(F-O*x)/2,k=[],C=[];let A,q,R=1/0,z=1/0,S=P-(j-G*I)/2,D=0;for(;S>=m;){const r=[],n=[];let a=w+N,s=0;for(;a<=M;){const u=(0,h.zx)([a,S]),c=v(u,o);r.push(c?0:1),n.push(a+"|"+S);const l=(0,i.I)(u,t);!c&&l<R&&(R=l,A={x:s,y:D});const f=(0,i.I)(u,e);!c&&f<z&&(z=f,q={x:s,y:D}),a+=x,s++}C.push(r),k.push(n),S-=I,D++}const L=new d(C,{diagonal:!0}),B=L.grid[A.y][A.x],$=L.grid[q.y][q.x],Q=g.search(L,B,$),J=[f];return Q.forEach((function(t){const e=k[t.x][t.y].split("|");J.push([+e[0],+e[1]])})),J.push(p),(0,s.a)((0,h.wi)(J))}function v(t,e){for(let r=0;r<e.features.length;r++)if((0,o.m)(t,e.features[r]))return!0;return!1}f(d,"Graph"),d.prototype.init=function(){this.dirtyNodes=[];for(var t=0;t<this.nodes.length;t++)g.cleanNode(this.nodes[t])},d.prototype.cleanDirty=function(){for(var t=0;t<this.dirtyNodes.length;t++)g.cleanNode(this.dirtyNodes[t]);this.dirtyNodes=[]},d.prototype.markDirty=function(t){this.dirtyNodes.push(t)},d.prototype.neighbors=function(t){var e=[],r=t.x,n=t.y,o=this.grid;return o[r-1]&&o[r-1][n]&&e.push(o[r-1][n]),o[r+1]&&o[r+1][n]&&e.push(o[r+1][n]),o[r]&&o[r][n-1]&&e.push(o[r][n-1]),o[r]&&o[r][n+1]&&e.push(o[r][n+1]),this.diagonal&&(o[r-1]&&o[r-1][n-1]&&e.push(o[r-1][n-1]),o[r+1]&&o[r+1][n-1]&&e.push(o[r+1][n-1]),o[r-1]&&o[r-1][n+1]&&e.push(o[r-1][n+1]),o[r+1]&&o[r+1][n+1]&&e.push(o[r+1][n+1])),e},d.prototype.toString=function(){for(var t,e,r,n,o=[],i=this.grid,a=0,s=i.length;a<s;a++){for(t=[],r=0,n=(e=i[a]).length;r<n;r++)t.push(e[r].weight);o.push(t.join(" "))}return o.join("\n")},f(b,"GridNode"),b.prototype.toString=function(){return"["+this.x+" "+this.y+"]"},b.prototype.getCost=function(t){return t&&t.x!==this.x&&t.y!==this.y?1.41421*this.weight:this.weight},b.prototype.isWall=function(){return 0===this.weight},f(w,"BinaryHeap"),w.prototype={push:function(t){this.content.push(t),this.sinkDown(this.content.length-1)},pop:function(){var t=this.content[0],e=this.content.pop();return this.content.length>0&&(this.content[0]=e,this.bubbleUp(0)),t},remove:function(t){var e=this.content.indexOf(t),r=this.content.pop();e!==this.content.length-1&&(this.content[e]=r,this.scoreFunction(r)<this.scoreFunction(t)?this.sinkDown(e):this.bubbleUp(e))},size:function(){return this.content.length},rescoreElement:function(t){this.sinkDown(this.content.indexOf(t))},sinkDown:function(t){for(var e=this.content[t];t>0;){var r=(t+1>>1)-1,n=this.content[r];if(!(this.scoreFunction(e)<this.scoreFunction(n)))break;this.content[r]=e,this.content[t]=n,t=r}},bubbleUp:function(t){for(var e=this.content.length,r=this.content[t],n=this.scoreFunction(r);;){var o,i=t+1<<1,a=i-1,s=null;if(a<e){var u=this.content[a];(o=this.scoreFunction(u))<n&&(s=a)}if(i<e){var c=this.content[i];this.scoreFunction(c)<(null===s?n:o)&&(s=i)}if(null===s)break;this.content[t]=this.content[s],this.content[s]=r,t=s}}},f(m,"shortestPath"),f(v,"isInside")},54387:(t,e,r)=>{r.d(e,{n:()=>g});var n=r(53257),o=r(36223),i=r(79204),a=r(99589),s=r(86137),u=r(82),c=r(89783),h=r(63399),l=r(67149),f=r(83490),p=Object.defineProperty,y=(t,e)=>p(t,"name",{value:e,configurable:!0});function g(t,e,r){if(r=r||{},!(0,l.Gv)(r))throw new Error("options is invalid");var o=r.origin,i=r.mutate;if(!t)throw new Error("geojson required");if("number"!=typeof e||e<=0)throw new Error("invalid factor");var a=Array.isArray(o)||"object"==typeof o;return!0!==i&&(t=(0,n.o8)(t)),"FeatureCollection"!==t.type||a?d(t,e,o):((0,h.us)(t,(function(r,n){t.features[n]=d(r,e,o)})),t)}function d(t,e,r){var n="Point"===(0,f.Pw)(t);return r=b(t,r),1===e||n||((0,h.Fh)(t,(function(t){var n=(0,u.E)(r,t),o=(0,s.F)(r,t),i=n*e,a=(0,f.$R)((0,c.r)(r,i,o));t[0]=a[0],t[1]=a[1],3===t.length&&(t[2]*=e)})),delete t.bbox),t}function b(t,e){if(null==e&&(e="centroid"),Array.isArray(e)||"object"==typeof e)return(0,f.uG)(e);var r=t.bbox?t.bbox:(0,a.Q)(t,{recalculate:!0}),n=r[0],s=r[1],u=r[2],c=r[3];switch(e){case"sw":case"southwest":case"westsouth":case"bottomleft":return(0,l.zx)([n,s]);case"se":case"southeast":case"eastsouth":case"bottomright":return(0,l.zx)([u,s]);case"nw":case"northwest":case"westnorth":case"topleft":return(0,l.zx)([n,c]);case"ne":case"northeast":case"eastnorth":case"topright":return(0,l.zx)([u,c]);case"center":return(0,o.g)(t);case void 0:case null:case"centroid":return(0,i.v)(t);default:throw new Error("invalid origin")}}y(g,"transformScale"),y(d,"scale"),y(b,"defineOrigin")}}]);