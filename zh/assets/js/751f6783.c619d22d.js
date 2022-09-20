"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[60425],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return f}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=s(r),f=a,m=d["".concat(l,".").concat(f)]||d[f]||p[f]||o;return r?n.createElement(m,i(i({ref:t},u),{},{components:r})):n.createElement(m,i({ref:t},u))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},71098:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return c},metadata:function(){return s},toc:function(){return p}});var n=r(87462),a=r(63366),o=(r(67294),r(3905)),i=["components"],c={title:"\u5b89\u88c5 Docker",weight:1},l=void 0,s={unversionedId:"getting-started/installation-and-upgrade/installation-requirements/install-docker",id:"getting-started/installation-and-upgrade/installation-requirements/install-docker",title:"\u5b89\u88c5 Docker",description:"\u5728\u4f7f\u7528 Helm \u6216 Docker \u5728\u8282\u70b9\u4e0a\u5b89\u88c5 Rancher Server \u524d\uff0c\u4f60\u9700\u8981\u5148\u5b89\u88c5 Docker\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/getting-started/installation-and-upgrade/installation-requirements/install-docker.md",sourceDirName:"getting-started/installation-and-upgrade/installation-requirements",slug:"/getting-started/installation-and-upgrade/installation-requirements/install-docker",permalink:"/zh/getting-started/installation-and-upgrade/installation-requirements/install-docker",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/getting-started/installation-and-upgrade/installation-requirements/install-docker.md",tags:[],version:"current",lastUpdatedAt:1663691987,formattedLastUpdatedAt:"2022/9/20",frontMatter:{title:"\u5b89\u88c5 Docker",weight:1},sidebar:"tutorialSidebar",previous:{title:"\u5b89\u88c5\u8981\u6c42",permalink:"/zh/pages-for-subheaders/installation-requirements"},next:{title:"Dockershim",permalink:"/zh/getting-started/installation-and-upgrade/installation-requirements/dockershim"}},u={},p=[],d={toc:p};function f(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u5728\u4f7f\u7528 Helm \u6216 Docker \u5728\u8282\u70b9\u4e0a\u5b89\u88c5 Rancher Server \u524d\uff0c\u4f60\u9700\u8981\u5148\u5b89\u88c5 Docker\u3002"),(0,o.kt)("p",null,"Docker \u6709\u51e0\u4e2a\u5b89\u88c5\u65b9\u6cd5\u3002\u4e00\u79cd\u65b9\u6cd5\u662f\u53c2\u89c1 ",(0,o.kt)("a",{parentName:"p",href:"https://docs.docker.com/install/"},"Docker \u5b98\u65b9\u6587\u6863"),"\u4ee5\u4e86\u89e3\u5982\u4f55\u5728 Linux \u4e0a\u5b89\u88c5 Docker\u3002\u4e0d\u540c Linux \u53d1\u884c\u7248\u7684\u5b89\u88c5\u6b65\u9aa4\u53ef\u80fd\u6709\u6240\u4e0d\u540c\u3002"),(0,o.kt)("p",null,"\u53e6\u4e00\u79cd\u65b9\u5f0f\u662f\u4f7f\u7528 Rancher \u7684 Docker \u5b89\u88c5\u811a\u672c\uff0c\u8be5\u811a\u672c\u53ef\u7528\u4e8e\u8f83\u65b0\u7684 Docker \u7248\u672c\u3002"),(0,o.kt)("p",null,"\u4f8b\u5982\uff0c\u4f60\u53ef\u6267\u884c\u4ee5\u4e0b\u547d\u4ee4\uff0c\u5728 Ubuntu \u4e0a\u5b89\u88c5 Docker 20.10\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"curl https://releases.rancher.com/install-docker/20.10.sh | sh\n")),(0,o.kt)("p",null,"Rancher \u63d0\u4f9b Kubernetes \u652f\u6301\u7684\u6240\u6709\u4e0a\u6e38 Docker \u7248\u672c\u7684\u5b89\u88c5\u811a\u672c\u3002\u5982\u9700\u4e86\u89e3\u6211\u4eec\u662f\u5426\u63d0\u4f9b\u67d0\u4e2a Docker \u7248\u672c\u7684\u5b89\u88c5\u811a\u672c\uff0c\u8bf7\u53c2\u89c1\u5305\u542b\u4e86 Rancher \u6240\u6709\u7684 Docker \u5b89\u88c5\u811a\u672c\u7684 ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/rancher/install-docker"},"GitHub \u4ed3\u5e93"),"\u3002"))}f.isMDXComponent=!0}}]);