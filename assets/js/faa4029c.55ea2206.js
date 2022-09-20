"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[36917],{3905:function(e,r,t){t.d(r,{Zo:function(){return l},kt:function(){return f}});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function s(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?s(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)t=s[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)t=s[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=n.createContext({}),u=function(e){var r=n.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},l=function(e){var r=u(e.components);return n.createElement(i.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,s=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=u(t),f=a,h=d["".concat(i,".").concat(f)]||d[f]||p[f]||s;return t?n.createElement(h,o(o({ref:r},l),{},{components:t})):n.createElement(h,o({ref:r},l))}));function f(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var s=t.length,o=new Array(s);o[0]=d;var c={};for(var i in r)hasOwnProperty.call(r,i)&&(c[i]=r[i]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var u=2;u<s;u++)o[u]=t[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},87375:function(e,r,t){t.r(r),t.d(r,{assets:function(){return l},contentTitle:function(){return i},default:function(){return f},frontMatter:function(){return c},metadata:function(){return u},toc:function(){return p}});var n=t(87462),a=t(63366),s=(t(67294),t(3905)),o=["components"],c={title:"CIS Scans",weight:18,aliases:["/rancher/v2.0-v2.4/en/cis-scans/legacy","/rancher/v2.0-v2.4/en/cis-scans","/rancher/v2.x/en/cis-scans/v2.4/"]},i=void 0,u={unversionedId:"pages-for-subheaders/cis-scans",id:"version-2.0-2.4/pages-for-subheaders/cis-scans",title:"CIS Scans",description:"Available as of v2.4.0",source:"@site/versioned_docs/version-2.0-2.4/pages-for-subheaders/cis-scans.md",sourceDirName:"pages-for-subheaders",slug:"/pages-for-subheaders/cis-scans",permalink:"/v2.0-v2.4/pages-for-subheaders/cis-scans",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.0-2.4/pages-for-subheaders/cis-scans.md",tags:[],version:"2.0-2.4",lastUpdatedAt:1663691987,formattedLastUpdatedAt:"9/20/2022",frontMatter:{title:"CIS Scans",weight:18,aliases:["/rancher/v2.0-v2.4/en/cis-scans/legacy","/rancher/v2.0-v2.4/en/cis-scans","/rancher/v2.x/en/cis-scans/v2.4/"]},sidebar:"tutorialSidebar",previous:{title:"Integrations in Rancher",permalink:"/v2.0-v2.4/pages-for-subheaders/integrations-in-rancher"},next:{title:"Skipped and Not Applicable Tests",permalink:"/v2.0-v2.4/explanations/integrations-in-rancher/cis-scans/skipped-and-not-applicable-tests"}},l={},p=[],d={toc:p};function f(e){var r=e.components,t=(0,a.Z)(e,o);return(0,s.kt)("wrapper",(0,n.Z)({},d,t,{components:r,mdxType:"MDXLayout"}),(0,s.kt)("p",null,(0,s.kt)("em",{parentName:"p"},"Available as of v2.4.0")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#prerequisites"},"Prerequisites")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#how-to-guides"},"How-to Guides"))),(0,s.kt)("h1",{id:"prerequisites"},"Prerequisites"),(0,s.kt)("p",null,"To run security scans on a cluster and access the generated reports, you must be an ",(0,s.kt)("a",{parentName:"p",href:"/v2.0-v2.4/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac/global-permissions"},"Administrator")," or ",(0,s.kt)("a",{parentName:"p",href:"/v2.0-v2.4/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac/cluster-and-project-roles"},"Cluster Owner.")),(0,s.kt)("p",null,"Rancher can only run security scans on clusters that were created with RKE, which includes custom clusters and clusters that Rancher created in an infrastructure provider such as Amazon EC2 or GCE. Imported clusters and clusters in hosted Kubernetes providers can't be scanned by Rancher."),(0,s.kt)("p",null,"The security scan cannot run in a cluster that has Windows nodes."),(0,s.kt)("p",null,"You will only be able to see the CIS scan reports for clusters that you have access to."),(0,s.kt)("h1",{id:"how-to-guides"},"How-to Guides"),(0,s.kt)("p",null,"Please refer ",(0,s.kt)("a",{parentName:"p",href:"/v2.0-v2.4/pages-for-subheaders/cis-scan-guides"},"here")," for how-to guides on CIS scans."))}f.isMDXComponent=!0}}]);