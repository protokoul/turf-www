(self.webpackChunkturf_www=self.webpackChunkturf_www||[]).push([[80417],{262:function(e){e.exports=function(){"use strict";function e(e,n,o,i,a){!function e(r,n,o,i,a){for(;i>o;){if(i-o>600){var s=i-o+1,h=n-o+1,u=Math.log(s),l=.5*Math.exp(2*u/3),f=.5*Math.sqrt(u*l*(s-l)/s)*(h-s/2<0?-1:1);e(r,n,Math.max(o,Math.floor(n-h*l/s+f)),Math.min(i,Math.floor(n+(s-h)*l/s+f)),a)}var c=r[n],g=o,d=i;for(t(r,o,n),a(r[i],c)>0&&t(r,o,i);g<d;){for(t(r,g,d),g++,d--;a(r[g],c)<0;)g++;for(;a(r[d],c)>0;)d--}0===a(r[o],c)?t(r,o,d):t(r,++d,i),d<=n&&(o=d+1),n<=d&&(i=d-1)}}(e,n,o||0,i||e.length-1,a||r)}function t(e,t,r){var n=e[t];e[t]=e[r],e[r]=n}function r(e,t){return e<t?-1:e>t?1:0}var n=function(e){void 0===e&&(e=9),this._maxEntries=Math.max(4,e),this._minEntries=Math.max(2,Math.ceil(.4*this._maxEntries)),this.clear()};function o(e,t,r){if(!r)return t.indexOf(e);for(var n=0;n<t.length;n++)if(r(e,t[n]))return n;return-1}function i(e,t){a(e,0,e.children.length,t,e)}function a(e,t,r,n,o){o||(o=d(null)),o.minX=1/0,o.minY=1/0,o.maxX=-1/0,o.maxY=-1/0;for(var i=t;i<r;i++){var a=e.children[i];s(o,e.leaf?n(a):a)}return o}function s(e,t){return e.minX=Math.min(e.minX,t.minX),e.minY=Math.min(e.minY,t.minY),e.maxX=Math.max(e.maxX,t.maxX),e.maxY=Math.max(e.maxY,t.maxY),e}function h(e,t){return e.minX-t.minX}function u(e,t){return e.minY-t.minY}function l(e){return(e.maxX-e.minX)*(e.maxY-e.minY)}function f(e){return e.maxX-e.minX+(e.maxY-e.minY)}function c(e,t){return e.minX<=t.minX&&e.minY<=t.minY&&t.maxX<=e.maxX&&t.maxY<=e.maxY}function g(e,t){return t.minX<=e.maxX&&t.minY<=e.maxY&&t.maxX>=e.minX&&t.maxY>=e.minY}function d(e){return{children:e,height:1,leaf:!0,minX:1/0,minY:1/0,maxX:-1/0,maxY:-1/0}}function p(t,r,n,o,i){for(var a=[r,n];a.length;)if(!((n=a.pop())-(r=a.pop())<=o)){var s=r+Math.ceil((n-r)/o/2)*o;e(t,s,r,n,i),a.push(r,s,s,n)}}return n.prototype.all=function(){return this._all(this.data,[])},n.prototype.search=function(e){var t=this.data,r=[];if(!g(e,t))return r;for(var n=this.toBBox,o=[];t;){for(var i=0;i<t.children.length;i++){var a=t.children[i],s=t.leaf?n(a):a;g(e,s)&&(t.leaf?r.push(a):c(e,s)?this._all(a,r):o.push(a))}t=o.pop()}return r},n.prototype.collides=function(e){var t=this.data;if(!g(e,t))return!1;for(var r=[];t;){for(var n=0;n<t.children.length;n++){var o=t.children[n],i=t.leaf?this.toBBox(o):o;if(g(e,i)){if(t.leaf||c(e,i))return!0;r.push(o)}}t=r.pop()}return!1},n.prototype.load=function(e){if(!e||!e.length)return this;if(e.length<this._minEntries){for(var t=0;t<e.length;t++)this.insert(e[t]);return this}var r=this._build(e.slice(),0,e.length-1,0);if(this.data.children.length)if(this.data.height===r.height)this._splitRoot(this.data,r);else{if(this.data.height<r.height){var n=this.data;this.data=r,r=n}this._insert(r,this.data.height-r.height-1,!0)}else this.data=r;return this},n.prototype.insert=function(e){return e&&this._insert(e,this.data.height-1),this},n.prototype.clear=function(){return this.data=d([]),this},n.prototype.remove=function(e,t){if(!e)return this;for(var r,n,i,a=this.data,s=this.toBBox(e),h=[],u=[];a||h.length;){if(a||(a=h.pop(),n=h[h.length-1],r=u.pop(),i=!0),a.leaf){var l=o(e,a.children,t);if(-1!==l)return a.children.splice(l,1),h.push(a),this._condense(h),this}i||a.leaf||!c(a,s)?n?(r++,a=n.children[r],i=!1):a=null:(h.push(a),u.push(r),r=0,n=a,a=a.children[0])}return this},n.prototype.toBBox=function(e){return e},n.prototype.compareMinX=function(e,t){return e.minX-t.minX},n.prototype.compareMinY=function(e,t){return e.minY-t.minY},n.prototype.toJSON=function(){return this.data},n.prototype.fromJSON=function(e){return this.data=e,this},n.prototype._all=function(e,t){for(var r=[];e;)e.leaf?t.push.apply(t,e.children):r.push.apply(r,e.children),e=r.pop();return t},n.prototype._build=function(e,t,r,n){var o,a=r-t+1,s=this._maxEntries;if(a<=s)return i(o=d(e.slice(t,r+1)),this.toBBox),o;n||(n=Math.ceil(Math.log(a)/Math.log(s)),s=Math.ceil(a/Math.pow(s,n-1))),(o=d([])).leaf=!1,o.height=n;var h=Math.ceil(a/s),u=h*Math.ceil(Math.sqrt(s));p(e,t,r,u,this.compareMinX);for(var l=t;l<=r;l+=u){var f=Math.min(l+u-1,r);p(e,l,f,h,this.compareMinY);for(var c=l;c<=f;c+=h){var g=Math.min(c+h-1,f);o.children.push(this._build(e,c,g,n-1))}}return i(o,this.toBBox),o},n.prototype._chooseSubtree=function(e,t,r,n){for(;n.push(t),!t.leaf&&n.length-1!==r;){for(var o=1/0,i=1/0,a=void 0,s=0;s<t.children.length;s++){var h=t.children[s],u=l(h),f=(c=e,g=h,(Math.max(g.maxX,c.maxX)-Math.min(g.minX,c.minX))*(Math.max(g.maxY,c.maxY)-Math.min(g.minY,c.minY))-u);f<i?(i=f,o=u<o?u:o,a=h):f===i&&u<o&&(o=u,a=h)}t=a||t.children[0]}var c,g;return t},n.prototype._insert=function(e,t,r){var n=r?e:this.toBBox(e),o=[],i=this._chooseSubtree(n,this.data,t,o);for(i.children.push(e),s(i,n);t>=0&&o[t].children.length>this._maxEntries;)this._split(o,t),t--;this._adjustParentBBoxes(n,o,t)},n.prototype._split=function(e,t){var r=e[t],n=r.children.length,o=this._minEntries;this._chooseSplitAxis(r,o,n);var a=this._chooseSplitIndex(r,o,n),s=d(r.children.splice(a,r.children.length-a));s.height=r.height,s.leaf=r.leaf,i(r,this.toBBox),i(s,this.toBBox),t?e[t-1].children.push(s):this._splitRoot(r,s)},n.prototype._splitRoot=function(e,t){this.data=d([e,t]),this.data.height=e.height+1,this.data.leaf=!1,i(this.data,this.toBBox)},n.prototype._chooseSplitIndex=function(e,t,r){for(var n,o,i,s,h,u,f,c=1/0,g=1/0,d=t;d<=r-t;d++){var p=a(e,0,d,this.toBBox),m=a(e,d,r,this.toBBox),y=(o=p,i=m,s=void 0,h=void 0,u=void 0,f=void 0,s=Math.max(o.minX,i.minX),h=Math.max(o.minY,i.minY),u=Math.min(o.maxX,i.maxX),f=Math.min(o.maxY,i.maxY),Math.max(0,u-s)*Math.max(0,f-h)),v=l(p)+l(m);y<c?(c=y,n=d,g=v<g?v:g):y===c&&v<g&&(g=v,n=d)}return n||r-t},n.prototype._chooseSplitAxis=function(e,t,r){var n=e.leaf?this.compareMinX:h,o=e.leaf?this.compareMinY:u;this._allDistMargin(e,t,r,n)<this._allDistMargin(e,t,r,o)&&e.children.sort(n)},n.prototype._allDistMargin=function(e,t,r,n){e.children.sort(n);for(var o=this.toBBox,i=a(e,0,t,o),h=a(e,r-t,r,o),u=f(i)+f(h),l=t;l<r-t;l++){var c=e.children[l];s(i,e.leaf?o(c):c),u+=f(i)}for(var g=r-t-1;g>=t;g--){var d=e.children[g];s(h,e.leaf?o(d):d),u+=f(h)}return u},n.prototype._adjustParentBBoxes=function(e,t,r){for(var n=r;n>=0;n--)s(t[n],e)},n.prototype._condense=function(e){for(var t=e.length-1,r=void 0;t>=0;t--)0===e[t].children.length?t>0?(r=e[t-1].children).splice(r.indexOf(e[t]),1):this.clear():i(e[t],this.toBBox)},n}()},53143:(e,t,r)=>{"use strict";r.d(t,{W:()=>s});var n=r(67149),o=r(63399),i=Object.defineProperty,a=(e,t)=>i(e,"name",{value:t,configurable:!0});function s(e){return(0,o.jE)(e,((e,t)=>e+h(t)),0)}function h(e){let t,r=0;switch(e.type){case"Polygon":return u(e.coordinates);case"MultiPolygon":for(t=0;t<e.coordinates.length;t++)r+=u(e.coordinates[t]);return r;case"Point":case"MultiPoint":case"LineString":case"MultiLineString":return 0}return 0}function u(e){let t=0;if(e&&e.length>0){t+=Math.abs(c(e[0]));for(let r=1;r<e.length;r++)t-=Math.abs(c(e[r]))}return t}a(s,"area"),a(h,"calculateArea"),a(u,"polygonArea");var l=n.zX*n.zX/2,f=Math.PI/180;function c(e){const t=e.length;if(t<=2)return 0;let r=0,n=0;for(;n<t;){const o=e[n],i=e[n+1===t?0:n+1],a=e[n+2>=t?(n+2)%t:n+2],s=o[0]*f,h=i[1]*f;r+=(a[0]*f-s)*Math.sin(h),n++}return r*l}a(c,"ringArea")},10200:(e,t,r)=>{"use strict";r.d(t,{m:()=>s});const n=function(e,t){for(var r=0,n=0,o=0,i=0,a=0,s=0,h=0,u=0,l=null,f=null,c=e[0],g=e[1],d=t.length;r<d;r++){n=0;var p=t[r].length-1,m=t[r];if((l=m[0])[0]!==m[p][0]&&l[1]!==m[p][1])throw new Error("First and last coordinates in a ring must be the same");for(a=l[0]-c,s=l[1]-g;n<p;n++)if(u=(f=m[n+1])[1]-g,s<0&&u<0||s>0&&u>0)s=u,a=(l=f)[0]-c;else{if(h=f[0]-e[0],u>0&&s<=0){if((i=a*u-h*s)>0)o+=1;else if(0===i)return 0}else if(s>0&&u<=0){if((i=a*u-h*s)<0)o+=1;else if(0===i)return 0}else if(0===u&&s<0){if(0===(i=a*u-h*s))return 0}else if(0===s&&u<0){if(0===(i=a*u-h*s))return 0}else if(0===s&&0===u){if(h<=0&&a>=0)return 0;if(a<=0&&h>=0)return 0}l=f,s=u,a=h}}return o%2!=0};var o=r(83490),i=Object.defineProperty,a=(e,t)=>i(e,"name",{value:t,configurable:!0});function s(e,t,r={}){if(!e)throw new Error("point is required");if(!t)throw new Error("polygon is required");const i=(0,o.uG)(e),a=(0,o.bg)(t),s=a.type,u=t.bbox;let l=a.coordinates;if(u&&!1===h(i,u))return!1;"Polygon"===s&&(l=[l]);let f=!1;for(var c=0;c<l.length;++c){const e=n(i,l[c]);if(0===e)return!r.ignoreBoundary;e&&(f=!0)}return f}function h(e,t){return t[0]<=e[0]&&t[1]<=e[1]&&t[2]>=e[0]&&t[3]>=e[1]}a(s,"booleanPointInPolygon"),a(h,"inBBox")},83490:(e,t,r)=>{"use strict";r.d(t,{$R:()=>s,Pw:()=>f,bg:()=>l,iw:()=>u,mo:()=>h,uG:()=>a});var n=r(67149),o=Object.defineProperty,i=(e,t)=>o(e,"name",{value:t,configurable:!0});function a(e){if(!e)throw new Error("coord is required");if(!Array.isArray(e)){if("Feature"===e.type&&null!==e.geometry&&"Point"===e.geometry.type)return[...e.geometry.coordinates];if("Point"===e.type)return[...e.coordinates]}if(Array.isArray(e)&&e.length>=2&&!Array.isArray(e[0])&&!Array.isArray(e[1]))return[...e];throw new Error("coord must be GeoJSON Point or an Array of numbers")}function s(e){if(Array.isArray(e))return e;if("Feature"===e.type){if(null!==e.geometry)return e.geometry.coordinates}else if(e.coordinates)return e.coordinates;throw new Error("coords must be GeoJSON Feature, Geometry Object or an Array")}function h(e,t,r){if(!e)throw new Error("No feature passed");if(!r)throw new Error(".featureOf() requires a name");if(!e||"Feature"!==e.type||!e.geometry)throw new Error("Invalid input to "+r+", Feature with geometry required");if(!e.geometry||e.geometry.type!==t)throw new Error("Invalid input to "+r+": must be a "+t+", given "+e.geometry.type)}function u(e,t,r){if(!e)throw new Error("No featureCollection passed");if(!r)throw new Error(".collectionOf() requires a name");if(!e||"FeatureCollection"!==e.type)throw new Error("Invalid input to "+r+", FeatureCollection required");for(const n of e.features){if(!n||"Feature"!==n.type||!n.geometry)throw new Error("Invalid input to "+r+", Feature with geometry required");if(!n.geometry||n.geometry.type!==t)throw new Error("Invalid input to "+r+": must be a "+t+", given "+n.geometry.type)}}function l(e){return"Feature"===e.type?e.geometry:e}function f(e,t){return"FeatureCollection"===e.type?"FeatureCollection":"GeometryCollection"===e.type?"GeometryCollection":"Feature"===e.type&&null!==e.geometry?e.geometry.type:e.type}i(a,"getCoord"),i(s,"getCoords"),i((function e(t){if(t.length>1&&(0,n.Et)(t[0])&&(0,n.Et)(t[1]))return!0;if(Array.isArray(t[0])&&t[0].length)return e(t[0]);throw new Error("coordinates must only contain numbers")}),"containsNumber"),i((function(e,t,r){if(!t||!r)throw new Error("type and name required");if(!e||e.type!==t)throw new Error("Invalid input to "+r+": must be a "+t+", given "+e.type)}),"geojsonType"),i(h,"featureOf"),i(u,"collectionOf"),i(l,"getGeom"),i(f,"getType")},80417:(e,t,r)=>{"use strict";r.d(t,{B:()=>A});var n=r(63399),o=r(67149),i=r(262),a=r(53143),s=r(10200),h=Object.defineProperty,u=(e,t)=>h(e,"name",{value:t,configurable:!0});function l(e,t,r){if("Polygon"!==e.geometry.type)throw new Error("The input feature must be a Polygon");void 0===r&&(r=1);var n=e.geometry.coordinates,o=[],a={};if(r){for(var s=[],h=0;h<n.length;h++)for(var u=0;u<n[h].length-1;u++)s.push(y(h,u));var l=new i;l.load(s)}for(var c=0;c<n.length;c++)for(var g=0;g<n[c].length-1;g++){if(r)l.search(y(c,g)).forEach((function(e){var t=e.ring,r=e.edge;m(c,g,t,r)}));else for(var d=0;d<n.length;d++)for(var p=0;p<n[d].length-1;p++)m(c,g,d,p)}return t||(o={type:"Feature",geometry:{type:"MultiPoint",coordinates:o}}),o;function m(e,r,i,s){var h,u,l=n[e][r],c=n[e][r+1],g=n[i][s],d=n[i][s+1],p=f(l,c,g,d);if(null!==p&&(h=c[0]!==l[0]?(p[0]-l[0])/(c[0]-l[0]):(p[1]-l[1])/(c[1]-l[1]),u=d[0]!==g[0]?(p[0]-g[0])/(d[0]-g[0]):(p[1]-g[1])/(d[1]-g[1]),!(h>=1||h<=0||u>=1||u<=0))){var m=p,y=!a[m];y&&(a[m]=!0),t?o.push(t(p,e,r,l,c,h,i,s,g,d,u,y)):o.push(p)}}function y(e,t){var r,o,i,a,s=n[e][t],h=n[e][t+1];return s[0]<h[0]?(r=s[0],o=h[0]):(r=h[0],o=s[0]),s[1]<h[1]?(i=s[1],a=h[1]):(i=h[1],a=s[1]),{minX:r,minY:i,maxX:o,maxY:a,ring:e,edge:t}}}function f(e,t,r,n){if(c(e,r)||c(e,n)||c(t,r)||c(n,r))return null;var o=e[0],i=e[1],a=t[0],s=t[1],h=r[0],u=r[1],l=n[0],f=n[1],g=(o-a)*(u-f)-(i-s)*(h-l);return 0===g?null:[((o*s-i*a)*(h-l)-(o-a)*(h*f-u*l))/g,((o*s-i*a)*(u-f)-(i-s)*(h*f-u*l))/g]}function c(e,t){if(!e||!t)return!1;if(e.length!==t.length)return!1;for(var r=0,n=e.length;r<n;r++)if(e[r]instanceof Array&&t[r]instanceof Array){if(!c(e[r],t[r]))return!1}else if(e[r]!==t[r])return!1;return!0}function g(e){if("Feature"!=e.type)throw new Error("The input must a geojson object of type Feature");if(void 0===e.geometry||null==e.geometry)throw new Error("The input must a geojson object with a non-empty geometry");if("Polygon"!=e.geometry.type)throw new Error("The input must be a geojson Polygon");for(var t=e.geometry.coordinates.length,r=[],n=0;n<t;n++){var h=e.geometry.coordinates[n];v(h[0],h[h.length-1])||h.push(h[0]);for(var f=0;f<h.length-1;f++)r.push(h[f])}if(!w(r))throw new Error("The input polygon may not have duplicate vertices (except for the first and last vertex of each ring)");var c=r.length,g=l(e,u((function(e,t,r,n,o,i,a,s,h,u,l,f){return[e,t,r,n,o,i,a,s,h,u,l,f]}),"filterFn")),A=g.length;if(0==A){var E=[];for(n=0;n<t;n++)E.push((0,o.n1)([e.geometry.coordinates[n]],{parent:-1,winding:y(e.geometry.coordinates[n])}));var M=(0,o.Lr)(E);return $(),H(),M}var b=[],X=[];for(n=0;n<t;n++){b.push([]);for(f=0;f<e.geometry.coordinates[n].length-1;f++)b[n].push([new d(e.geometry.coordinates[n][x(f+1,e.geometry.coordinates[n].length-1)],1,[n,f],[n,x(f+1,e.geometry.coordinates[n].length-1)],void 0)]),X.push(new p(e.geometry.coordinates[n][f],[n,x(f-1,e.geometry.coordinates[n].length-1)],[n,f],void 0,void 0,!1,!0))}for(n=0;n<A;n++)b[g[n][1]][g[n][2]].push(new d(g[n][0],g[n][5],[g[n][1],g[n][2]],[g[n][6],g[n][7]],void 0)),g[n][11]&&X.push(new p(g[n][0],[g[n][1],g[n][2]],[g[n][6],g[n][7]],void 0,void 0,!0,!0));var Y=X.length;for(n=0;n<b.length;n++)for(f=0;f<b[n].length;f++)b[n][f].sort((function(e,t){return e.param<t.param?-1:1}));var I=[];for(n=0;n<Y;n++)I.push({minX:X[n].coord[0],minY:X[n].coord[1],maxX:X[n].coord[0],maxY:X[n].coord[1],index:n});var B=new i;B.load(I);for(n=0;n<b.length;n++)for(f=0;f<b[n].length;f++)for(var _=0;_<b[n][f].length;_++){O=_==b[n][f].length-1?b[n][x(f+1,e.geometry.coordinates[n].length-1)][0].coord:b[n][f][_+1].coord;var P=B.search({minX:O[0],minY:O[1],maxX:O[0],maxY:O[1]})[0];b[n][f][_].nxtIsectAlongEdgeIn=P.index}for(n=0;n<b.length;n++)for(f=0;f<b[n].length;f++)for(_=0;_<b[n][f].length;_++){var O=b[n][f][_].coord,R=(P=B.search({minX:O[0],minY:O[1],maxX:O[0],maxY:O[1]})[0]).index;R<c?X[R].nxtIsectAlongRingAndEdge2=b[n][f][_].nxtIsectAlongEdgeIn:v(X[R].ringAndEdge1,b[n][f][_].ringAndEdgeIn)?X[R].nxtIsectAlongRingAndEdge1=b[n][f][_].nxtIsectAlongEdgeIn:X[R].nxtIsectAlongRingAndEdge2=b[n][f][_].nxtIsectAlongEdgeIn}var F=[];for(n=0,f=0;f<t;f++){var j=n;for(_=0;_<e.geometry.coordinates[f].length-1;_++)X[n].coord[0]<X[j].coord[0]&&(j=n),n++;var k=X[j].nxtIsectAlongRingAndEdge2;for(_=0;_<X.length;_++)if(X[_].nxtIsectAlongRingAndEdge1==j||X[_].nxtIsectAlongRingAndEdge2==j){var q=_;break}var W=m([X[q].coord,X[j].coord,X[k].coord],!0)?1:-1;F.push({isect:j,parent:-1,winding:W})}F.sort((function(e,t){return X[e.isect].coord>X[t.isect].coord?-1:1}));for(E=[];F.length>0;){var C=F.pop(),S=C.isect,N=C.parent,G=C.winding,T=E.length,L=[X[S].coord],J=S;if(X[S].ringAndEdge1Walkable)var D=X[S].ringAndEdge1,z=X[S].nxtIsectAlongRingAndEdge1;else D=X[S].ringAndEdge2,z=X[S].nxtIsectAlongRingAndEdge2;for(;!v(X[S].coord,X[z].coord);){L.push(X[z].coord);var U=void 0;for(n=0;n<F.length;n++)if(F[n].isect==z){U=n;break}if(null!=U&&F.splice(U,1),v(D,X[z].ringAndEdge1)){if(D=X[z].ringAndEdge2,X[z].ringAndEdge2Walkable=!1,X[z].ringAndEdge1Walkable){var V={isect:z};m([X[J].coord,X[z].coord,X[X[z].nxtIsectAlongRingAndEdge2].coord],1==G)?(V.parent=N,V.winding=-G):(V.parent=T,V.winding=G),F.push(V)}J=z,z=X[z].nxtIsectAlongRingAndEdge2}else{if(D=X[z].ringAndEdge1,X[z].ringAndEdge1Walkable=!1,X[z].ringAndEdge2Walkable){V={isect:z};m([X[J].coord,X[z].coord,X[X[z].nxtIsectAlongRingAndEdge1].coord],1==G)?(V.parent=N,V.winding=-G):(V.parent=T,V.winding=G),F.push(V)}J=z,z=X[z].nxtIsectAlongRingAndEdge1}}L.push(X[z].coord),E.push((0,o.n1)([L],{index:T,parent:N,winding:G,netWinding:void 0}))}M=(0,o.Lr)(E);function $(){for(var e=[],t=0;t<M.features.length;t++)-1==M.features[t].properties.parent&&e.push(t);if(e.length>1)for(t=0;t<e.length;t++){for(var r=-1,n=1/0,o=0;o<M.features.length;o++)e[t]!=o&&(0,s.m)(M.features[e[t]].geometry.coordinates[0][0],M.features[o],{ignoreBoundary:!0})&&(0,a.W)(M.features[o])<n&&(r=o);M.features[e[t]].properties.parent=r}}function H(){for(var e=0;e<M.features.length;e++)if(-1==M.features[e].properties.parent){var t=M.features[e].properties.winding;M.features[e].properties.netWinding=t,K(e,t)}}function K(e,t){for(var r=0;r<M.features.length;r++)if(M.features[r].properties.parent==e){var n=t+M.features[r].properties.winding;M.features[r].properties.netWinding=n,K(r,n)}}return $(),H(),u($,"determineParents"),u(H,"setNetWinding"),u(K,"setNetWindingOfChildren"),M}u(l,"geojsonPolygonSelfIntersections"),u(f,"intersect"),u(c,"equalArrays"),u(g,"simplepolygon");var d=u((function(e,t,r,n,o){this.coord=e,this.param=t,this.ringAndEdgeIn=r,this.ringAndEdgeOut=n,this.nxtIsectAlongEdgeIn=o}),"PseudoVtx"),p=u((function(e,t,r,n,o,i,a){this.coord=e,this.ringAndEdge1=t,this.ringAndEdge2=r,this.nxtIsectAlongRingAndEdge1=n,this.nxtIsectAlongRingAndEdge2=o,this.ringAndEdge1Walkable=i,this.ringAndEdge2Walkable=a}),"Isect");function m(e,t){if(void 0===t&&(t=!0),3!=e.length)throw new Error("This function requires an array of three points [x,y]");return(e[1][0]-e[0][0])*(e[2][1]-e[0][1])-(e[1][1]-e[0][1])*(e[2][0]-e[0][0])>=0==t}function y(e){for(var t=0,r=0;r<e.length-1;r++)e[r][0]<e[t][0]&&(t=r);if(m([e[x(t-1,e.length-1)],e[t],e[x(t+1,e.length-1)]],!0))var n=1;else n=-1;return n}function v(e,t){if(!e||!t)return!1;if(e.length!=t.length)return!1;for(var r=0,n=e.length;r<n;r++)if(e[r]instanceof Array&&t[r]instanceof Array){if(!v(e[r],t[r]))return!1}else if(e[r]!=t[r])return!1;return!0}function x(e,t){return(e%t+t)%t}function w(e){for(var t={},r=1,n=0,o=e.length;n<o;++n){if(Object.prototype.hasOwnProperty.call(t,e[n])){r=0;break}t[e[n]]=1}return r}function A(e){var t=[];return(0,n.iw)(e,(function(e){"Polygon"===e.geometry.type&&(0,n.us)(g(e),(function(r){t.push((0,o.n1)(r.geometry.coordinates,e.properties))}))})),(0,o.Lr)(t)}u(m,"isConvex"),u(y,"windingOfRing"),u(v,"equalArrays"),u(x,"modulo"),u(w,"isUnique"),u(A,"unkinkPolygon")}}]);