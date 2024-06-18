"use strict";(self.webpackChunkturf_www=self.webpackChunkturf_www||[]).push([[58983],{69919:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>a,contentTitle:()=>c,default:()=>o,frontMatter:()=>l,metadata:()=>u,toc:()=>i});var n=r(74848),s=r(28453);r(36145),r(78478);const l={title:"clusterReduce"},c=void 0,u={id:"api/clusterReduce",title:"clusterReduce",description:"Description",source:"@site/docs/api/clusterReduce.mdx",sourceDirName:"api",slug:"/api/clusterReduce",permalink:"/docs/next/api/clusterReduce",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/api/clusterReduce.mdx",tags:[],version:"current",frontMatter:{title:"clusterReduce"},sidebar:"apiSidebar",previous:{title:"clusterEach",permalink:"/docs/next/api/clusterEach"},next:{title:"coordAll",permalink:"/docs/next/api/coordAll"}},a={},i=[{value:"Description",id:"description",level:3},{value:"Parameters",id:"parameters",level:3},{value:"Returns",id:"returns",level:3},{value:"Examples",id:"examples",level:3},{value:"Installation",id:"installation",level:3}];function d(e){const t={a:"a",code:"code",h3:"h3",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h3,{id:"description",children:"Description"}),"\n",(0,n.jsx)(t.p,{children:"Reduce clusters in GeoJSON Features, similar to Array.reduce()"}),"\n",(0,n.jsx)(t.h3,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"geojson"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.a,{href:"https://tools.ietf.org/html/rfc7946#section-3.3",children:"FeatureCollection"})})}),(0,n.jsx)(t.td,{children:"GeoJSON Features"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"property"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:"string | number"})}),(0,n.jsx)(t.td,{children:"GeoJSON property key/value used to create clusters"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"callback"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:"Function"})}),(0,n.jsx)(t.td,{children:"a method that takes (previousValue, cluster, clusterValue, currentIndex)"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsxs)(t.td,{children:["initialValue",(0,n.jsx)("i",{children:"?"})]}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:"*"})}),(0,n.jsx)(t.td,{children:"Value to use as the first argument to the first call of the callback."})]})]})]}),"\n",(0,n.jsx)(t.h3,{id:"returns",children:"Returns"}),"\n",(0,n.jsx)("ul",{children:(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"*"})," The value that results from the reduction."]})}),"\n",(0,n.jsx)(t.h3,{id:"examples",children:"Examples"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-javascript",children:'var geojson = turf.featureCollection([\n  turf.point([0, 0]),\n  turf.point([2, 4]),\n  turf.point([3, 6]),\n  turf.point([5, 1]),\n  turf.point([4, 2]),\n]);\n\n// Create a cluster using K-Means (adds `cluster` to GeoJSON properties)\nvar clustered = turf.clustersKmeans(geojson);\n\n// Iterate over each cluster and perform a calculation\nvar initialValue = 0;\nturf.clusterReduce(\n  clustered,\n  "cluster",\n  function (previousValue, cluster, clusterValue, currentIndex) {\n    //=previousValue\n    //=cluster\n    //=clusterValue\n    //=currentIndex\n    return previousValue++;\n  },\n  initialValue,\n);\n\n// Calculate the total number of clusters\nvar total = turf.clusterReduce(\n  clustered,\n  "cluster",\n  function (previousValue) {\n    return previousValue++;\n  },\n  0,\n);\n\n// Create an Array of all the values retrieved from the \'cluster\' property\nvar values = turf.clusterReduce(\n  clustered,\n  "cluster",\n  function (previousValue, cluster, clusterValue) {\n    return previousValue.concat(clusterValue);\n  },\n  [],\n);\n'})}),"\n",(0,n.jsx)(t.h3,{id:"installation",children:"Installation"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-javascript",children:'$ npm install @turf/clusters\n\nimport { clusterReduce } from "@turf/clusters";\nconst result = clusterReduce(...);\n'})}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-javascript",children:'$ npm install @turf/turf\n\nimport * as turf from "@turf/turf";\nconst result = turf.clusterReduce(...);\n'})})]})}function o(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}}}]);