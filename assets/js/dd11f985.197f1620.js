(self.webpackChunkturf_www=self.webpackChunkturf_www||[]).push([[93071],{57413:(t,e,n)=>{"use strict";n.r(e),n.d(e,{Map0:()=>x,assets:()=>u,contentTitle:()=>d,default:()=>m,frontMatter:()=>c,metadata:()=>h,toc:()=>p});var r=n(74848),i=n(28453),o=n(84245),s=n(98999),a=n(36145),l=n(78478);const c={title:"tin"},d=void 0,h={id:"api/tin",title:"tin",description:"Description",source:"@site/versioned_docs/version-7.0.0/api/tin.mdx",sourceDirName:"api",slug:"/api/tin",permalink:"/docs/api/tin",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/versioned_docs/version-7.0.0/api/tin.mdx",tags:[],version:"7.0.0",frontMatter:{title:"tin"},sidebar:"apiSidebar",previous:{title:"planepoint",permalink:"/docs/api/planepoint"},next:{title:"pointsWithinPolygon",permalink:"/docs/api/pointsWithinPolygon"}},u={},p=[{value:"Description",id:"description",level:3},{value:"Parameters",id:"parameters",level:3},{value:"Returns",id:"returns",level:3},{value:"Examples",id:"examples",level:3},{value:"Installation",id:"installation",level:3}];function x(){for(var t=o._e(30,{bbox:[50,30,70,50]}),e=0;e<t.features.length;e++)t.features[e].properties.z=~~(9*Math.random());var n=s.u(t,"z"),i={tin:n,points:t};for(e=0;e<n.features.length;e++){var l=n.features[e].properties;l.fill="#"+l.a+l.b+l.c}return(0,r.jsx)(a.A,{addToMap:i})}function f(t){const e={a:"a",code:"code",h3:"h3",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...t.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.h3,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(e.p,{children:["Takes a set of ",(0,r.jsx)(e.a,{href:"https://tools.ietf.org/html/rfc7946#section-3.1.2",children:"points"})," and creates a\n",(0,r.jsx)(e.a,{href:"http://en.wikipedia.org/wiki/Triangulated_irregular_network",children:"Triangulated Irregular Network"}),",\nor a TIN for short, returned as a collection of Polygons. These are often used\nfor developing elevation contour maps or stepped heat visualizations."]}),"\n",(0,r.jsxs)(e.p,{children:["If an optional z-value property is provided then it is added as properties called ",(0,r.jsx)(e.code,{children:"a"}),", ",(0,r.jsx)(e.code,{children:"b"}),",\nand ",(0,r.jsx)(e.code,{children:"c"})," representing its value at each of the points that represent the corners of the\ntriangle."]}),"\n",(0,r.jsx)(e.h3,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)(e.table,{children:[(0,r.jsx)(e.thead,{children:(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.th,{children:"Name"}),(0,r.jsx)(e.th,{children:"Type"}),(0,r.jsx)(e.th,{children:"Description"})]})}),(0,r.jsxs)(e.tbody,{children:[(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"points"}),(0,r.jsx)(e.td,{children:(0,r.jsxs)(e.strong,{children:[(0,r.jsx)(e.a,{href:"https://tools.ietf.org/html/rfc7946#section-3.3",children:"FeatureCollection"}),"<",(0,r.jsx)(e.a,{href:"https://tools.ietf.org/html/rfc7946#section-3.1.2",children:"Point"}),">"]})}),(0,r.jsx)(e.td,{children:"input points"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsxs)(e.td,{children:["z",(0,r.jsx)("i",{children:"?"})]}),(0,r.jsx)(e.td,{children:(0,r.jsx)(e.strong,{children:"String"})}),(0,r.jsx)(e.td,{children:"name of the property from which to pull z values This is optional: if not given, then there will be no extra data added to the derived triangles."})]})]})]}),"\n",(0,r.jsx)(e.h3,{id:"returns",children:"Returns"}),"\n",(0,r.jsx)("ul",{children:(0,r.jsxs)(e.p,{children:[(0,r.jsxs)(e.strong,{children:[(0,r.jsx)(e.a,{href:"https://tools.ietf.org/html/rfc7946#section-3.3",children:"FeatureCollection"}),"<",(0,r.jsx)(e.a,{href:"https://tools.ietf.org/html/rfc7946#section-3.1.6",children:"Polygon"}),">"]})," TIN output"]})}),"\n",(0,r.jsx)(e.h3,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-javascript",children:'// generate some random point data\nvar points = turf.randomPoint(30, { bbox: [50, 30, 70, 50] });\n\n// add a random property to each point between 0 and 9\nfor (var i = 0; i < points.features.length; i++) {\n  points.features[i].properties.z = ~~(Math.random() * 9);\n}\nvar tin = turf.tin(points, "z");\n'})}),"\n","\n",(0,r.jsx)(l.A,{children:()=>(0,r.jsx)(x,{})}),"\n",(0,r.jsx)(e.h3,{id:"installation",children:"Installation"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-javascript",children:'$ npm install @turf/tin\n\nimport { tin } from "@turf/tin";\nconst result = tin(...);\n'})}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-javascript",children:'$ npm install @turf/turf\n\nimport * as turf from "@turf/turf";\nconst result = turf.tin(...);\n'})})]})}function m(t={}){const{wrapper:e}={...(0,i.R)(),...t.components};return e?(0,r.jsx)(e,{...t,children:(0,r.jsx)(f,{...t})}):f(t)}},42634:()=>{},84245:(t,e,n)=>{"use strict";n.d(e,{_e:()=>l});var r=n(67149),i=Object.defineProperty,o=(t,e)=>i(t,"name",{value:e,configurable:!0});function s(t){return Array.isArray(t)?p(t):t&&t.bbox?p(t.bbox):[h(),u()]}function a(t){null!=t&&(Array.isArray(t)?(0,r.O6)(t):null!=t.bbox&&(0,r.O6)(t.bbox))}function l(t,e={}){a(e.bbox),null==t&&(t=1);const n=[];for(let i=0;i<t;i++)n.push((0,r.zx)(s(e.bbox)));return(0,r.Lr)(n)}function c(t){return e=>[e[0]+t[0],e[1]+t[1]]}function d(){return Math.random()-.5}function h(){return 360*d()}function u(){return 180*d()}function p(t){return[Math.random()*(t[2]-t[0])+t[0],Math.random()*(t[3]-t[1])+t[1]]}o((function(t){return a(t),s(t)}),"randomPosition"),o(s,"randomPositionUnchecked"),o(a,"checkBBox"),o(l,"randomPoint"),o((function(t,e={}){a(e.bbox),null==t&&(t=1),(0,r.Et)(e.num_vertices)&&void 0!==e.num_vertices||(e.num_vertices=10),(0,r.Et)(e.max_radial_length)&&void 0!==e.max_radial_length||(e.max_radial_length=10);const n=[];for(let i=0;i<t;i++){let t=[];const i=[...Array(e.num_vertices+1)].map(Math.random);i.forEach(((t,e,n)=>{n[e]=e>0?t+n[e-1]:t})),i.forEach((n=>{n=2*n*Math.PI/i[i.length-1];const r=Math.random();t.push([r*(e.max_radial_length||10)*Math.sin(n),r*(e.max_radial_length||10)*Math.cos(n)])})),t[t.length-1]=t[0],t=t.map(c(s(e.bbox))),n.push((0,r.n1)([t]))}return(0,r.Lr)(n)}),"randomPolygon"),o((function(t,e={}){if(e=e||{},!(0,r.Gv)(e))throw new Error("options is invalid");const n=e.bbox;a(n);let i=e.num_vertices,o=e.max_length,l=e.max_rotation;null==t&&(t=1),(!(0,r.Et)(i)||void 0===i||i<2)&&(i=10),(0,r.Et)(o)&&void 0!==o||(o=1e-4),(0,r.Et)(l)&&void 0!==l||(l=Math.PI/8);const c=[];for(let a=0;a<t;a++){const t=[s(n)];for(let e=0;e<i-1;e++){const n=(0===e?2*Math.random()*Math.PI:Math.tan((t[e][1]-t[e-1][1])/(t[e][0]-t[e-1][0])))+(Math.random()-.5)*l*2,r=Math.random()*o;t.push([t[e][0]+r*Math.cos(n),t[e][1]+r*Math.sin(n)])}c.push((0,r.wi)(t))}return(0,r.Lr)(c)}),"randomLineString"),o(c,"vertexToCoordinate"),o(d,"rnd"),o(h,"lon"),o(u,"lat"),o(p,"coordInBBox")},98999:(t,e,n)=>{"use strict";n.d(e,{u:()=>s});var r=n(67149),i=Object.defineProperty,o=(t,e)=>i(t,"name",{value:e,configurable:!0});function s(t,e){let n=!1;return(0,r.Lr)(h(t.features.map((t=>{const r={x:t.geometry.coordinates[0],y:t.geometry.coordinates[1]};return e?r.z=t.properties[e]:3===t.geometry.coordinates.length&&(n=!0,r.z=t.geometry.coordinates[2]),r}))).map((t=>{const e=[t.a.x,t.a.y],i=[t.b.x,t.b.y],o=[t.c.x,t.c.y];let s={};return n?(e.push(t.a.z),i.push(t.b.z),o.push(t.c.z)):s={a:t.a.z,b:t.b.z,c:t.c.z},(0,r.n1)([[e,i,o,e]],s)})))}o(s,"tin");var a=class{constructor(t,e,n){this.a=t,this.b=e,this.c=n;const r=e.x-t.x,i=e.y-t.y,o=n.x-t.x,s=n.y-t.y,a=r*(t.x+e.x)+i*(t.y+e.y),l=o*(t.x+n.x)+s*(t.y+n.y),c=2*(r*(n.y-e.y)-i*(n.x-e.x));let d,h;this.x=(s*a-i*l)/c,this.y=(r*l-o*a)/c,d=this.x-t.x,h=this.y-t.y,this.r=d*d+h*h}};o(a,"Triangle");var l=a;function c(t,e){return e.x-t.x}function d(t){let e,n,r,i,o,s=t.length;t:for(;s;)for(n=t[--s],e=t[--s],r=s;r;)if(o=t[--r],i=t[--r],e===i&&n===o||e===o&&n===i){t.splice(s,2),t.splice(r,2),s-=2;continue t}}function h(t){if(t.length<3)return[];t.sort(c);let e=t.length-1;const n=t[e].x,r=t[0].x;let i=t[e].y,o=i;let s,a,h,u,p,x;for(;e--;)t[e].y<i&&(i=t[e].y),t[e].y>o&&(o=t[e].y);let f=r-n,m=o-i;const g=f>m?f:m,y=.5*(r+n),v=.5*(o+i),j=[new l({__sentinel:!0,x:y-20*g,y:v-g},{__sentinel:!0,x:y,y:v+20*g},{__sentinel:!0,x:y+20*g,y:v-g})],b=[],_=[];let M;for(e=t.length;e--;){for(_.length=0,M=j.length;M--;)f=t[e].x-j[M].x,f>0&&f*f>j[M].r?(b.push(j[M]),j.splice(M,1)):(m=t[e].y-j[M].y,f*f+m*m>j[M].r||(_.push(j[M].a,j[M].b,j[M].b,j[M].c,j[M].c,j[M].a),j.splice(M,1)));for(d(_),M=_.length;M;)a=_[--M],s=_[--M],h=t[e],u=a.x-s.x,p=a.y-s.y,x=2*(u*(h.y-a.y)-p*(h.x-a.x)),Math.abs(x)>1e-12&&j.push(new l(s,a,h))}for(Array.prototype.push.apply(b,j),e=b.length;e--;)(b[e].a.__sentinel||b[e].b.__sentinel||b[e].c.__sentinel)&&b.splice(e,1);return b}o(c,"byX"),o(d,"dedup"),o(h,"triangulate")}}]);