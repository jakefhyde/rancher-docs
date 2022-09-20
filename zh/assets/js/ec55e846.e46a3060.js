"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[44890],{3905:function(t,e,r){r.d(e,{Zo:function(){return p},kt:function(){return m}});var n=r(67294);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function u(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function l(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},o=Object.keys(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var i=n.createContext({}),c=function(t){var e=n.useContext(i),r=e;return t&&(r="function"==typeof t?t(e):u(u({},e),t)),r},p=function(t){var e=c(t.components);return n.createElement(i.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},d=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,o=t.originalType,i=t.parentName,p=l(t,["components","mdxType","originalType","parentName"]),d=c(r),m=a,g=d["".concat(i,".").concat(m)]||d[m]||s[m]||o;return r?n.createElement(g,u(u({ref:e},p),{},{components:r})):n.createElement(g,u({ref:e},p))}));function m(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=r.length,u=new Array(o);u[0]=d;var l={};for(var i in e)hasOwnProperty.call(e,i)&&(l[i]=e[i]);l.originalType=t,l.mdxType="string"==typeof t?t:a,u[1]=l;for(var c=2;c<o;c++)u[c]=r[c];return n.createElement.apply(null,u)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},25144:function(t,e,r){r.r(e),r.d(e,{assets:function(){return p},contentTitle:function(){return i},default:function(){return m},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return s}});var n=r(87462),a=r(63366),o=(r(67294),r(3905)),u=["components"],l={title:"\u8d44\u6e90\u914d\u989d\u7c7b\u578b\u53c2\u8003",weight:4},i=void 0,c={unversionedId:"how-to-guides/advanced-user-guides/manage-projects/manage-project-resource-quotas/resource-quota-types",id:"how-to-guides/advanced-user-guides/manage-projects/manage-project-resource-quotas/resource-quota-types",title:"\u8d44\u6e90\u914d\u989d\u7c7b\u578b\u53c2\u8003",description:"\u521b\u5efa\u8d44\u6e90\u914d\u989d\u76f8\u5f53\u4e8e\u914d\u7f6e\u9879\u76ee\u53ef\u7528\u7684\u8d44\u6e90\u6c60\u3002\u4f60\u53ef\u4ee5\u4e3a\u4ee5\u4e0b\u8d44\u6e90\u7c7b\u578b\u8bbe\u7f6e\u8d44\u6e90\u914d\u989d\uff1a",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/how-to-guides/advanced-user-guides/manage-projects/manage-project-resource-quotas/resource-quota-types.md",sourceDirName:"how-to-guides/advanced-user-guides/manage-projects/manage-project-resource-quotas",slug:"/how-to-guides/advanced-user-guides/manage-projects/manage-project-resource-quotas/resource-quota-types",permalink:"/zh/how-to-guides/advanced-user-guides/manage-projects/manage-project-resource-quotas/resource-quota-types",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/how-to-guides/advanced-user-guides/manage-projects/manage-project-resource-quotas/resource-quota-types.md",tags:[],version:"current",lastUpdatedAt:1663691987,formattedLastUpdatedAt:"2022/9/20",frontMatter:{title:"\u8d44\u6e90\u914d\u989d\u7c7b\u578b\u53c2\u8003",weight:4},sidebar:"tutorialSidebar",previous:{title:"\u8bbe\u7f6e\u5bb9\u5668\u9ed8\u8ba4\u8d44\u6e90\u9650\u5236",permalink:"/zh/how-to-guides/advanced-user-guides/manage-projects/manage-project-resource-quotas/set-container-default-resource-limits"},next:{title:"Monitoring \u6307\u5357",permalink:"/zh/pages-for-subheaders/monitoring-alerting-guides"}},p={},s=[],d={toc:s};function m(t){var e=t.components,r=(0,a.Z)(t,u);return(0,o.kt)("wrapper",(0,n.Z)({},d,r,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u521b\u5efa\u8d44\u6e90\u914d\u989d\u76f8\u5f53\u4e8e\u914d\u7f6e\u9879\u76ee\u53ef\u7528\u7684\u8d44\u6e90\u6c60\u3002\u4f60\u53ef\u4ee5\u4e3a\u4ee5\u4e0b\u8d44\u6e90\u7c7b\u578b\u8bbe\u7f6e\u8d44\u6e90\u914d\u989d\uff1a"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"\u8d44\u6e90\u7c7b\u578b"),(0,o.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"CPU \u9650\u5236","*"),(0,o.kt)("td",{parentName:"tr",align:null},"\u5206\u914d\u7ed9\u9879\u76ee/\u547d\u540d\u7a7a\u95f4\u7684\u6700\u5927 CPU \u91cf\uff08\u4ee5",(0,o.kt)("a",{parentName:"td",href:"https://kubernetes.io/docs/concepts/configuration/manage-compute-resources-container/#meaning-of-cpu"},"\u6beb\u6838"),"\u4e3a\u5355\u4f4d\uff09",(0,o.kt)("sup",null,"1"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"CPU \u9884\u7559","*"),(0,o.kt)("td",{parentName:"tr",align:null},"\u9884\u7559\u7ed9\u9879\u76ee/\u547d\u540d\u7a7a\u95f4\u7684\u6700\u5c0f CPU \u91cf\uff08\u4ee5\u6beb\u6838\u4e3a\u5355\u4f4d\uff09",(0,o.kt)("sup",null,"1"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"\u5185\u5b58\u9650\u5236","*"),(0,o.kt)("td",{parentName:"tr",align:null},"\u5206\u914d\u7ed9\u9879\u76ee/\u547d\u540d\u7a7a\u95f4\u7684\u6700\u5927\u5185\u5b58\u91cf\uff08\u4ee5\u5b57\u8282\u4e3a\u5355\u4f4d\uff09",(0,o.kt)("sup",null,"1"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"\u5185\u5b58\u9884\u7559","*"),(0,o.kt)("td",{parentName:"tr",align:null},"\u9884\u7559\u7ed9\u9879\u76ee/\u547d\u540d\u7a7a\u95f4\u7684\u6700\u5c0f\u5185\u5b58\u91cf\uff08\u4ee5\u5b57\u8282\u4e3a\u5355\u4f4d\uff09",(0,o.kt)("sup",null,"1"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"\u5b58\u50a8\u9884\u7559"),(0,o.kt)("td",{parentName:"tr",align:null},"\u9884\u7559\u7ed9\u9879\u76ee/\u547d\u540d\u7a7a\u95f4\u7684\u6700\u5c0f\u5b58\u50a8\u91cf\uff08\u4ee5\u5343\u5146\u5b57\u8282\u4e3a\u5355\u4f4d\uff09")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"\u670d\u52a1\u8d1f\u8f7d\u5747\u8861\u5668"),(0,o.kt)("td",{parentName:"tr",align:null},"\u9879\u76ee/\u547d\u540d\u7a7a\u95f4\u4e2d\u53ef\u4ee5\u5b58\u5728\u7684\u8d1f\u8f7d\u5747\u8861\u5668\u670d\u52a1\u7684\u6700\u5927\u6570\u91cf")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"\u670d\u52a1\u8282\u70b9\u7aef\u53e3"),(0,o.kt)("td",{parentName:"tr",align:null},"\u9879\u76ee/\u547d\u540d\u7a7a\u95f4\u4e2d\u53ef\u4ee5\u5b58\u5728\u7684\u8282\u70b9\u7aef\u53e3\u670d\u52a1\u7684\u6700\u5927\u6570\u91cf")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Pod"),(0,o.kt)("td",{parentName:"tr",align:null},"\u53ef\u4ee5\u5728\u9879\u76ee/\u547d\u540d\u7a7a\u95f4\u4e2d\u4ee5\u975e\u7ec8\u7aef\u72b6\u6001\u5b58\u5728\u7684 pod \u7684\u6700\u5927\u6570\u91cf\uff08\u5373 ",(0,o.kt)("inlineCode",{parentName:"td"},".status.phase in (Failed, Succeeded)")," \u7b49\u4e8e true \u7684 pod\uff09")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Services"),(0,o.kt)("td",{parentName:"tr",align:null},"\u9879\u76ee/\u547d\u540d\u7a7a\u95f4\u4e2d\u53ef\u4ee5\u5b58\u5728\u7684\u6700\u5927 service \u6570\u91cf")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"ConfigMap"),(0,o.kt)("td",{parentName:"tr",align:null},"\u9879\u76ee/\u547d\u540d\u7a7a\u95f4\u4e2d\u53ef\u4ee5\u5b58\u5728\u7684 ConfigMap \u7684\u6700\u5927\u6570\u91cf")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"\u6301\u4e45\u5377\u58f0\u660e"),(0,o.kt)("td",{parentName:"tr",align:null},"\u9879\u76ee/\u547d\u540d\u7a7a\u95f4\u4e2d\u53ef\u4ee5\u5b58\u5728\u7684\u6301\u4e45\u5377\u58f0\u660e\u7684\u6700\u5927\u6570\u91cf")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"ReplicationController"),(0,o.kt)("td",{parentName:"tr",align:null},"\u9879\u76ee/\u547d\u540d\u7a7a\u95f4\u4e2d\u53ef\u4ee5\u5b58\u5728\u7684\u6700\u5927 ReplicationController \u6570\u91cf")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"\u5bc6\u6587"),(0,o.kt)("td",{parentName:"tr",align:null},"\u9879\u76ee/\u547d\u540d\u7a7a\u95f4\u4e2d\u53ef\u4ee5\u5b58\u5728\u7684\u6700\u5927\u5bc6\u6587\u6570\u91cf")))),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),(0,o.kt)("strong",{parentName:"h5"},(0,o.kt)("sup",null,"*")))),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"\u5728\u8bbe\u7f6e\u8d44\u6e90\u914d\u989d\u65f6\uff0c\u5982\u679c\u4f60\u5728\u9879\u76ee\u6216\u547d\u540d\u7a7a\u95f4\u4e0a\u8bbe\u7f6e\u4e86\u4efb\u4f55\u4e0e CPU \u6216\u5185\u5b58\u76f8\u5173\u7684\u5185\u5bb9\uff08\u5373\u9650\u5236\u6216\u9884\u7559\uff09\uff0c\u6240\u6709\u5bb9\u5668\u90fd\u9700\u8981\u5728\u521b\u5efa\u671f\u95f4\u8bbe\u7f6e\u5404\u81ea\u7684 CPU \u6216\u5185\u5b58\u5b57\u6bb5\u3002\u4f60\u53ef\u4ee5\u540c\u65f6\u8bbe\u7f6e\u5bb9\u5668\u7684\u9ed8\u8ba4\u8d44\u6e90\u9650\u5236\uff0c\u4ee5\u907f\u514d\u4e3a\u6bcf\u4e2a\u5de5\u4f5c\u8d1f\u8f7d\u663e\u5f0f\u8bbe\u7f6e\u8fd9\u4e9b\u9650\u5236\u3002\u8be6\u60c5\u8bf7\u53c2\u9605 ",(0,o.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/policy/resource-quotas/#requests-vs-limits"},"Kubernetes \u6587\u6863"),"\u3002"))))}m.isMDXComponent=!0}}]);