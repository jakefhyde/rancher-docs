"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[52242],{3905:function(e,r,t){t.d(r,{Zo:function(){return l},kt:function(){return d}});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function s(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?s(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function o(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)t=s[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)t=s[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=n.createContext({}),u=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},l=function(e){var r=u(e.components);return n.createElement(c.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},g=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,s=e.originalType,c=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),g=u(t),d=a,f=g["".concat(c,".").concat(d)]||g[d]||p[d]||s;return t?n.createElement(f,i(i({ref:r},l),{},{components:t})):n.createElement(f,i({ref:r},l))}));function d(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var s=t.length,i=new Array(s);i[0]=g;var o={};for(var c in r)hasOwnProperty.call(r,c)&&(o[c]=r[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var u=2;u<s;u++)i[u]=t[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}g.displayName="MDXCreateElement"},86479:function(e,r,t){t.r(r),t.d(r,{assets:function(){return l},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return o},metadata:function(){return u},toc:function(){return p}});var n=t(87462),a=t(63366),s=(t(67294),t(3905)),i=["components"],o={title:"Best Practices for Rancher Managed Clusters",shortTitle:"Rancher Managed Clusters",weight:2},c=void 0,u={unversionedId:"pages-for-subheaders/rancher-managed-clusters",id:"pages-for-subheaders/rancher-managed-clusters",title:"Best Practices for Rancher Managed Clusters",description:"Logging",source:"@site/docs/pages-for-subheaders/rancher-managed-clusters.md",sourceDirName:"pages-for-subheaders",slug:"/pages-for-subheaders/rancher-managed-clusters",permalink:"/pages-for-subheaders/rancher-managed-clusters",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/pages-for-subheaders/rancher-managed-clusters.md",tags:[],version:"current",lastUpdatedAt:1663691987,formattedLastUpdatedAt:"9/20/2022",frontMatter:{title:"Best Practices for Rancher Managed Clusters",shortTitle:"Rancher Managed Clusters",weight:2},sidebar:"tutorialSidebar",previous:{title:"Tips for Running Rancher",permalink:"/reference-guides/best-practices/rancher-server/tips-for-running-rancher"},next:{title:"Logging Best Practices",permalink:"/reference-guides/best-practices/rancher-managed-clusters/logging-best-practices"}},l={},p=[{value:"Logging",id:"logging",level:3},{value:"Monitoring",id:"monitoring",level:3},{value:"Tips for Setting Up Containers",id:"tips-for-setting-up-containers",level:3},{value:"Best Practices for Rancher Managed vSphere Clusters",id:"best-practices-for-rancher-managed-vsphere-clusters",level:3}],g={toc:p};function d(e){var r=e.components,t=(0,a.Z)(e,i);return(0,s.kt)("wrapper",(0,n.Z)({},g,t,{components:r,mdxType:"MDXLayout"}),(0,s.kt)("h3",{id:"logging"},"Logging"),(0,s.kt)("p",null,"Refer to ",(0,s.kt)("a",{parentName:"p",href:"/reference-guides/best-practices/rancher-managed-clusters/logging-best-practices"},"this guide")," for our recommendations for cluster-level logging and application logging."),(0,s.kt)("h3",{id:"monitoring"},"Monitoring"),(0,s.kt)("p",null,"Configuring sensible monitoring and alerting rules is vital for running any production workloads securely and reliably. Refer to this ",(0,s.kt)("a",{parentName:"p",href:"/reference-guides/best-practices/rancher-managed-clusters/monitoring-best-practices"},"guide")," for our recommendations."),(0,s.kt)("h3",{id:"tips-for-setting-up-containers"},"Tips for Setting Up Containers"),(0,s.kt)("p",null,"Running well-built containers can greatly impact the overall performance and security of your environment. Refer to this ",(0,s.kt)("a",{parentName:"p",href:"/reference-guides/best-practices/rancher-managed-clusters/tips-to-set-up-containers"},"guide")," for tips."),(0,s.kt)("h3",{id:"best-practices-for-rancher-managed-vsphere-clusters"},"Best Practices for Rancher Managed vSphere Clusters"),(0,s.kt)("p",null,"This ",(0,s.kt)("a",{parentName:"p",href:"/reference-guides/best-practices/rancher-managed-clusters/rancher-managed-clusters-in-vsphere"},"guide")," outlines a reference architecture for provisioning downstream Rancher clusters in a vSphere environment, in addition to standard vSphere best practices as documented by VMware."))}d.isMDXComponent=!0}}]);