"use strict";(self.webpackChunkturf_www=self.webpackChunkturf_www||[]).push([[38177],{42015:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>a,toc:()=>d});var n=r(74848),s=r(28453);const i={sidebar_position:2},o="Getting started",a={id:"getting-started",title:"Getting started",description:"How you add Turf to your project will dependend on your environment and tooling but here are some guidelines to get you started.",source:"@site/versioned_docs/version-7.0.0/getting-started.md",sourceDirName:".",slug:"/getting-started",permalink:"/docs/getting-started",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/versioned_docs/version-7.0.0/getting-started.md",tags:[],version:"7.0.0",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"docsSidebar",previous:{title:"Introduction",permalink:"/docs/intro"},next:{title:"Upgrade Guide",permalink:"/docs/upgrade-guide"}},l={},d=[{value:"Installation",id:"installation",level:2},{value:"In Node.js",id:"in-nodejs",level:3},{value:"In browser",id:"in-browser",level:3},{value:"TypeScript",id:"typescript",level:2},{value:"Other languages",id:"other-languages",level:2},{value:"Data in Turf",id:"data-in-turf",level:2},{value:"Browser support",id:"browser-support",level:2}];function c(e){const t={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"getting-started",children:"Getting started"}),"\n",(0,n.jsx)(t.p,{children:"How you add Turf to your project will dependend on your environment and tooling but here are some guidelines to get you started."}),"\n",(0,n.jsxs)(t.p,{children:["The source of truth for published versions of Turf is ",(0,n.jsx)(t.a,{href:"https://www.npmjs.com/package/@turf/turf?activeTab=versions",children:"NPM"}),".  You are welcome to use other providers that republish these packages."]}),"\n",(0,n.jsx)(t.h2,{id:"installation",children:"Installation"}),"\n",(0,n.jsx)(t.h3,{id:"in-nodejs",children:"In Node.js"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"# get all of turf\nnpm install @turf/turf\n\n# or get individual packages\nnpm install @turf/helpers\nnpm install @turf/buffer\n"})}),"\n",(0,n.jsx)(t.p,{children:"As of v7, both CommonJS and ESM bundles are included."}),"\n",(0,n.jsx)(t.h3,{id:"in-browser",children:"In browser"}),"\n",(0,n.jsx)(t.p,{children:"Whether downloading locally, or including a 3rd party version of turf directly, there are multiple CDN's to choose from and each has a URL scheme that allows you to specify what version you want, with some flexibility.  Structure your URL as appropriate for your needs:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"https://www.jsdelivr.com/",children:"jsdelivr"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["browse: ",(0,n.jsx)(t.a,{href:"https://www.jsdelivr.com/package/npm/@turf/turf",children:"https://www.jsdelivr.com/package/npm/@turf/turf"})]}),"\n",(0,n.jsxs)(t.li,{children:["latest within major version: ",(0,n.jsx)(t.a,{href:"https://cdn.jsdelivr.net/npm/@turf/turf@7/turf.min.js",children:"https://cdn.jsdelivr.net/npm/@turf/turf@7/turf.min.js"})]}),"\n",(0,n.jsxs)(t.li,{children:["latest within minor version: ",(0,n.jsx)(t.a,{href:"https://cdn.jsdelivr.net/npm/@turf/turf@7.0/turf.min.js",children:"https://cdn.jsdelivr.net/npm/@turf/turf@7.0/turf.min.js"})]}),"\n",(0,n.jsxs)(t.li,{children:["specific version: ",(0,n.jsx)(t.a,{href:"https://cdn.jsdelivr.net/npm/@turf/turf@7.0.0/turf.min.js",children:"https://cdn.jsdelivr.net/npm/@turf/turf@7.0.0/turf.min.js"})]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"https://www.unpkg.com/",children:"unpkg"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["browse: ",(0,n.jsx)(t.a,{href:"https://unpkg.com/browse/@turf/turf@7.0.0/",children:"https://unpkg.com/browse/@turf/turf@7.0.0/"})]}),"\n",(0,n.jsxs)(t.li,{children:["latest within major version: ",(0,n.jsx)(t.a,{href:"https://unpkg.com/@turf/turf@%5E7/turf.min.js",children:"https://unpkg.com/@turf/turf@^7/turf.min.js"})]}),"\n",(0,n.jsxs)(t.li,{children:["latest within minor version: ",(0,n.jsx)(t.a,{href:"https://unpkg.com/@turf/turf@%5E7.0/turf.min.js",children:"https://unpkg.com/@turf/turf@^7.0/turf.min.js"})]}),"\n",(0,n.jsxs)(t.li,{children:["specific version: ",(0,n.jsx)(t.a,{href:"https://unpkg.com/@turf/turf@7.0.0/turf.min.js",children:"https://unpkg.com/@turf/turf@7.0.0/turf.min.js"})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["For example, download the ",(0,n.jsx)(t.a,{href:"https://cdn.jsdelivr.net/npm/@turf/turf@7/turf.min.js",children:"latest minified version 7"}),", and include it in a script tag. This will expose a global variable named ",(0,n.jsx)(t.code,{children:"turf"}),"."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-html",children:'<script src="turf.min.js" charset="utf-8"><\/script>\n'})}),"\n",(0,n.jsx)(t.p,{children:"You can also include it directly from a CDN.  This example specifies the latest version within v7."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-html",children:'<script src="https://cdn.jsdelivr.net/npm/@turf/turf@7/turf.min.js"><\/script>\n'})}),"\n",(0,n.jsxs)(t.p,{children:["It is not recommended to use a CDN URL that gives you the ",(0,n.jsx)(t.code,{children:"latest"})," bleeding edge version of Turf, especially in a production app.  There are breaking changes to turf functions between major versions that can leave your app in a broken state because it always gives your browser users the latest version."]}),"\n",(0,n.jsx)(t.h2,{id:"typescript",children:"TypeScript"}),"\n",(0,n.jsxs)(t.p,{children:["TypeScript definitions are included and exported by each Turf module, except for GeoJSON type definitions (e.g. ",(0,n.jsx)(t.code,{children:"Polygon"}),", ",(0,n.jsx)(t.code,{children:"FeatureCollection"}),") which are provided by the ",(0,n.jsx)(t.a,{href:"https://www.npmjs.com/package/@types/geojson",children:"@types/geojson"})," package.  Turf does not re-export these type definitionas.  If you need them, you can import and use them directly, e.g. ",(0,n.jsx)(t.code,{children:"import { Polygon, FeatureCollection } from 'geojson'"}),".  You may need to install the ",(0,n.jsx)(t.code,{children:"@types/geojson"})," package first."]}),"\n",(0,n.jsx)(t.h2,{id:"other-languages",children:"Other languages"}),"\n",(0,n.jsx)(t.p,{children:"Ports of Turf.js are available in:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"https://github.com/mapbox/mapbox-java/tree/master/services-turf/src/main/java/com/mapbox/turf",children:"Java"})," (Android, Java SE)","\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.a,{href:"https://github.com/mapbox/mapbox-java/blob/master/docs/turf-port.md",children:"The current to-do list for porting to Java"})}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"https://github.com/mapbox/turf-swift/",children:"Swift"})," (iOS, macOS, tvOS, watchOS, Linux)","\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsxs)(t.p,{children:["Turf for Swift is ",(0,n.jsx)(t.strong,{children:"experimental"})," and its public API is subject to change. Please use with care."]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"https://github.com/dartclub/turf_dart",children:"Dart/Flutter"})," (Dart Web, Dart Native; Flutter for iOS, Android, macOS, Windows, Linux, Web)","\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsxs)(t.p,{children:["The Turf for Dart port is still in progress, the implementation status can be found in the ",(0,n.jsx)(t.a,{href:"https://github.com/dartclub/turf_dart#components",children:"README"}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h2,{id:"data-in-turf",children:"Data in Turf"}),"\n",(0,n.jsxs)(t.p,{children:["Turf uses ",(0,n.jsx)("a",{href:"https://geojson.org/",children:"GeoJSON"})," for all geographic data. Turf expects the data to be standard ",(0,n.jsx)("a",{href:"https://en.wikipedia.org/wiki/World_Geodetic_System",children:"WGS84"})," longitude, latitude coordinates. Check out ",(0,n.jsx)("a",{href:"https://geojson.io/#id=gist:anonymous/844f013aae8354eb889c&map=12/38.8955/-77.0135",children:"geojson.io"})," for a tool to easily create this data."]}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"NOTE:"})," Turf expects data in (longitude, latitude) order per the GeoJSON standard."]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"Most Turf functions work with GeoJSON features. These are pieces of data that represent a collection of properties (ie: population, elevation, zipcode, etc.) along with a geometry. GeoJSON has several geometry types such as:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Point"}),"\n",(0,n.jsx)(t.li,{children:"LineString"}),"\n",(0,n.jsx)(t.li,{children:"Polygon"}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"Turf provides a few geometry functions of its own. These are nothing more than simple (and optional) wrappers that output plain old GeoJSON. For example, these two methods of creating a point are functionally equivalent:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-js",children:'// Note order: longitude, latitude.\nvar point1 = turf.point([-73.988214, 40.749128]);\n\nvar point2 = {\n  type: "Feature",\n  geometry: {\n    type: "Point",\n    // Note order: longitude, latitude.\n    coordinates: [-73.988214, 40.749128],\n  },\n  properties: {},\n};\n'})}),"\n",(0,n.jsx)(t.h2,{id:"browser-support",children:"Browser support"}),"\n",(0,n.jsx)(t.p,{children:"Turf packages are compiled to target ES2017. However, the browser version of @turf/turf is transpiled to also include support for IE11. If you are using these packages and need to target IE11, please transpile the following packages as part of your build:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:"@turf/*\nrobust-predicates\nrbush\ntinyqueue\n"})})]})}function u(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}}}]);