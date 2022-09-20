"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[95682],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=c(n),f=a,m=d["".concat(s,".").concat(f)]||d[f]||p[f]||l;return n?r.createElement(m,i(i({ref:t},u),{},{components:n})):r.createElement(m,i({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var c=2;c<l;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},69259:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return o},metadata:function(){return c},toc:function(){return p}});var r=n(87462),a=n(63366),l=(n(67294),n(3905)),i=["components"],o={title:"TLS \u8bbe\u7f6e",weight:3},s=void 0,c={unversionedId:"reference-guides/installation-references/tls-settings",id:"reference-guides/installation-references/tls-settings",title:"TLS \u8bbe\u7f6e",description:"\u66f4\u6539\u9ed8\u8ba4 TLS \u8bbe\u7f6e\u7684\u65b9\u6cd5\u53d6\u51b3\u4e8e\u5b83\u7684\u5b89\u88c5\u65b9\u5f0f\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/reference-guides/installation-references/tls-settings.md",sourceDirName:"reference-guides/installation-references",slug:"/reference-guides/installation-references/tls-settings",permalink:"/zh/reference-guides/installation-references/tls-settings",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/reference-guides/installation-references/tls-settings.md",tags:[],version:"current",lastUpdatedAt:1663691987,formattedLastUpdatedAt:"2022/9/20",frontMatter:{title:"TLS \u8bbe\u7f6e",weight:3},sidebar:"tutorialSidebar",previous:{title:"Rancher Helm Chart \u9009\u9879",permalink:"/zh/reference-guides/installation-references/helm-chart-options"},next:{title:"\u529f\u80fd\u5f00\u5173",permalink:"/zh/reference-guides/installation-references/feature-flags"}},u={},p=[],d={toc:p};function f(e){var t=e.components,n=(0,a.Z)(e,i);return(0,l.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"\u66f4\u6539\u9ed8\u8ba4 TLS \u8bbe\u7f6e\u7684\u65b9\u6cd5\u53d6\u51b3\u4e8e\u5b83\u7684\u5b89\u88c5\u65b9\u5f0f\u3002"),(0,l.kt)("h1",{id:"\u5728\u9ad8\u53ef\u7528-kubernetes-\u96c6\u7fa4\u4e2d\u8fd0\u884c-rancher"},"\u5728\u9ad8\u53ef\u7528 Kubernetes \u96c6\u7fa4\u4e2d\u8fd0\u884c Rancher"),(0,l.kt)("p",null,"\u5f53\u4f60\u5728 Kubernetes \u96c6\u7fa4\u5185\u5b89\u88c5 Rancher \u65f6\uff0cTLS \u4f1a\u5728\u96c6\u7fa4\u7684 Ingress Controller \u4e0a\u5378\u8f7d\u3002\u53ef\u7528\u7684 TLS \u8bbe\u7f6e\u53d6\u51b3\u4e8e\u4f7f\u7528\u7684 Ingress Controller\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"nginx-ingress-controller\uff08RKE1 \u548c RKE2 \u9ed8\u8ba4\uff09\uff1a",(0,l.kt)("a",{parentName:"li",href:"https://kubernetes.github.io/ingress-nginx/user-guide/tls/#default-tls-version-and-ciphers"},"\u9ed8\u8ba4\u7684 TLS \u7248\u672c\u548c\u5bc6\u7801"),"\u3002"),(0,l.kt)("li",{parentName:"ul"},"traefik\uff08K3s \u9ed8\u8ba4\uff09\uff1a",(0,l.kt)("a",{parentName:"li",href:"https://doc.traefik.io/traefik/https/tls/#tls-options"},"TLS \u9009\u9879"),"\u3002")),(0,l.kt)("h1",{id:"\u5728\u5355\u4e2a-docker-\u5bb9\u5668\u4e2d\u8fd0\u884c-rancher"},"\u5728\u5355\u4e2a Docker \u5bb9\u5668\u4e2d\u8fd0\u884c Rancher"),(0,l.kt)("p",null,"\u9ed8\u8ba4 TLS \u914d\u7f6e\u4ec5\u652f\u6301 TLS 1.2 \u548c\u5b89\u5168\u7684 TLS \u5bc6\u7801\u5957\u4ef6\u3002\u4f60\u53ef\u4ee5\u901a\u8fc7\u8bbe\u7f6e\u4ee5\u4e0b\u73af\u5883\u53d8\u91cf\u6765\u66f4\u6539\u6b64\u914d\u7f6e\uff1a"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,l.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"),(0,l.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4"),(0,l.kt)("th",{parentName:"tr",align:null},"\u53ef\u7528\u9009\u9879"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"CATTLE_TLS_MIN_VERSION")),(0,l.kt)("td",{parentName:"tr",align:null},"\u6700\u5c0f TLS \u7248\u672c"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"1.2")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"1.0"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"1.1"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"1.2"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"1.3"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"CATTLE_TLS_CIPHERS")),(0,l.kt)("td",{parentName:"tr",align:null},"\u652f\u6301\u7684 TLS \u5bc6\u7801\u5957\u4ef6"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256"),",",(0,l.kt)("br",null),(0,l.kt)("inlineCode",{parentName:"td"},"TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384"),",",(0,l.kt)("br",null),(0,l.kt)("inlineCode",{parentName:"td"},"TLS_ECDHE_ECDSA_WITH_CHACHA20_POLY1305"),",",(0,l.kt)("br",null),(0,l.kt)("inlineCode",{parentName:"td"},"TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256"),",",(0,l.kt)("br",null),(0,l.kt)("inlineCode",{parentName:"td"},"TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384"),",",(0,l.kt)("br",null),(0,l.kt)("inlineCode",{parentName:"td"},"TLS_ECDHE_RSA_WITH_CHACHA20_POLY1305")),(0,l.kt)("td",{parentName:"tr",align:null},"\u8be6\u60c5\u8bf7\u53c2\u89c1 ",(0,l.kt)("a",{parentName:"td",href:"https://golang.org/pkg/crypto/tls/#pkg-constants"},"Golang TLS \u5e38\u91cf"),"\u3002")))))}f.isMDXComponent=!0}}]);