"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[43675],{3905:function(e,t,n){n.d(t,{Zo:function(){return i},kt:function(){return k}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},i=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,i=p(e,["components","mdxType","originalType","parentName"]),f=u(n),k=a,h=f["".concat(c,".").concat(k)]||f[k]||s[k]||o;return n?r.createElement(h,l(l({ref:t},i),{},{components:n})):r.createElement(h,l({ref:t},i))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=f;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:a,l[1]=p;for(var u=2;u<o;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},77515:function(e,t,n){n.r(t),n.d(t,{assets:function(){return i},contentTitle:function(){return c},default:function(){return k},frontMatter:function(){return p},metadata:function(){return u},toc:function(){return s}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),l=["components"],p={title:"\u5e38\u89c1\u95ee\u9898",weight:500},c=void 0,u={unversionedId:"faq",id:"faq",title:"\u5e38\u89c1\u95ee\u9898",description:"\u672c\u6587\u5305\u542b\u4e86\u7528\u6237\u5e38\u89c1\u7684 Rancher 2.x \u95ee\u9898\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/faq.md",sourceDirName:".",slug:"/faq",permalink:"/zh/faq",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/faq.md",tags:[],version:"current",lastUpdatedAt:1663691987,formattedLastUpdatedAt:"2022/9/20",frontMatter:{title:"\u5e38\u89c1\u95ee\u9898",weight:500},sidebar:"tutorialSidebar",previous:{title:"OPA Gatekeeper",permalink:"/zh/explanations/integrations-in-rancher/opa-gatekeeper"},next:{title:"Rancher \u5f03\u7528\u7684\u529f\u80fd",permalink:"/zh/faq/deprecated-features-in-v2.5"}},i={},s=[],f={toc:s};function k(e){var t=e.components,n=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u672c\u6587\u5305\u542b\u4e86\u7528\u6237\u5e38\u89c1\u7684 Rancher 2.x \u95ee\u9898\u3002"),(0,o.kt)("p",null,"\u6709\u5173\u5e38\u89c1\u6280\u672f\u95ee\u9898\uff0c\u8bf7\u53c2\u9605",(0,o.kt)("a",{parentName:"p",href:"/zh/faq/technical-items"},"\u5e38\u89c1\u6280\u672f\u95ee\u9898\u89e3\u7b54"),"\u3002"),(0,o.kt)("br",null),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Rancher 2.x \u652f\u6301 Docker Swarm \u548c Mesos \u4f5c\u4e3a\u73af\u5883\u7c7b\u578b\u5417\uff1f")),(0,o.kt)("p",null,"\u5982\u679c\u4f60\u5728 Rancher 2.x \u4e2d\u521b\u5efa\u73af\u5883\uff0cSwarm \u548c Mesos \u5c06\u4e0d\u518d\u662f\u53ef\u9009\u7684\u6807\u51c6\u9009\u9879\u3002\u4f46\u662f\uff0cSwarm \u548c Mesos \u8fd8\u80fd\u7ee7\u7eed\u4f5c\u4e3a\u53ef\u4ee5\u90e8\u7f72\u7684\u5546\u5e97\u5e94\u7528\u7a0b\u5e8f\u3002\u8fd9\u662f\u4e00\u4e2a\u8270\u96be\u7684\u51b3\u5b9a\uff0c\u4f46\u8fd9\u662f\u5927\u52bf\u6240\u8d8b\u3002\u6bd4\u5982\u8bf4\uff0c15,000 \u591a\u4e2a\u96c6\u7fa4\u53ef\u80fd\u53ea\u6709\u5927\u7ea6 200 \u4e2a\u5728\u8fd0\u884c Swarm\u3002"),(0,o.kt)("br",null),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u662f\u5426\u53ef\u4ee5\u4f7f\u7528 Rancher 2.x \u7ba1\u7406 Azure Kubernetes \u670d\u52a1\uff1f")),(0,o.kt)("p",null,"\u662f\u7684\u3002"),(0,o.kt)("br",null),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Rancher \u662f\u5426\u652f\u6301 Windows\uff1f")),(0,o.kt)("p",null,"\u4ece Rancher 2.3.0 \u5f00\u59cb\uff0c\u6211\u4eec\u652f\u6301 Windows Server 1809 \u5bb9\u5668\u3002\u6709\u5173\u5982\u4f55\u4f7f\u7528 Windows Worker \u8282\u70b9\u8bbe\u7f6e\u96c6\u7fa4\u7684\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605",(0,o.kt)("a",{parentName:"p",href:"/zh/pages-for-subheaders/use-windows-clusters"},"\u4e3a Windows \u914d\u7f6e\u81ea\u5b9a\u4e49\u96c6\u7fa4"),"\u3002"),(0,o.kt)("br",null),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Rancher \u662f\u5426\u652f\u6301 Istio\uff1f")),(0,o.kt)("p",null,"\u4ece Rancher 2.3.0 \u5f00\u59cb\uff0c\u6211\u4eec\u652f\u6301 ",(0,o.kt)("a",{parentName:"p",href:"/zh/pages-for-subheaders/istio"},"Istio.")),(0,o.kt)("p",null,"\u6b64\u5916\uff0cIstio \u662f\u5728\u6211\u4eec\u7684\u5fae\u578b PaaS \u201cRio\u201d \u4e2d\u5b9e\u73b0\u7684\uff0c\u5b83\u53ef\u4ee5\u8fd0\u884c\u5728 Rancher 2.x \u4ee5\u53ca\u4efb\u4f55\u7b26\u5408 CNCF \u7684 Kubernetes \u96c6\u7fa4\u4e0a\u3002\u8be6\u60c5\u8bf7\u53c2\u9605",(0,o.kt)("a",{parentName:"p",href:"https://rio.io/"},"\u8fd9\u91cc"),"\u3002"),(0,o.kt)("br",null),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Rancher 2.x \u662f\u5426\u652f\u6301\u4f7f\u7528 Hashicorp \u7684 Vault \u6765\u5b58\u50a8\u5bc6\u6587\uff1f")),(0,o.kt)("p",null,"\u5bc6\u6587\u7ba1\u7406\u5df2\u5728\u6211\u4eec\u7684 roadmap \u4e0a\uff0c\u4f46\u6211\u4eec\u5c1a\u672a\u5c06\u8be5\u529f\u80fd\u5206\u914d\u7ed9\u7279\u5b9a\u7248\u672c\u3002"),(0,o.kt)("br",null),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Rancher 2.x \u662f\u5426\u4e5f\u652f\u6301 RKT \u5bb9\u5668\uff1f")),(0,o.kt)("p",null,"\u76ee\u524d\uff0c\u6211\u4eec\u53ea\u652f\u6301 Docker\u3002"),(0,o.kt)("br",null),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Rancher 2.x \u662f\u5426\u652f\u6301\u5c06 Calico\u3001Contiv\u3001Contrail\u3001Flannel\u3001Weave net \u7b49\u7f51\u7edc\u63d2\u4ef6\u7528\u4e8e\u5d4c\u5165\u548c\u5df2\u6ce8\u518c\u7684 Kubernetes\uff1f")),(0,o.kt)("p",null,"Rancher \u5f00\u7bb1\u5373\u7528\u5730\u4e3a Kubernetes \u96c6\u7fa4\u63d0\u4f9b\u4e86\u51e0\u4e2a CNI \u7f51\u7edc\u63d2\u4ef6\uff0c\u5206\u522b\u662f Canal\u3001Flannel\u3001Calico \u548c Weave\u3002\u6709\u5173\u5b98\u65b9\u652f\u6301\u7684\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605 ",(0,o.kt)("a",{parentName:"p",href:"https://rancher.com/support-maintenance-terms/"},"Rancher \u652f\u6301\u77e9\u9635"),"\u3002"),(0,o.kt)("br",null),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Rancher \u662f\u5426\u8ba1\u5212\u652f\u6301 Traefik\uff1f")),(0,o.kt)("p",null,"\u76ee\u524d\uff0c\u6211\u4eec\u4e0d\u6253\u7b97\u63d0\u4f9b\u5d4c\u5165\u5f0f Traefik \u652f\u6301\uff0c\u4f46\u6211\u4eec\u4ecd\u5728\u63a2\u7d22\u8d1f\u8f7d\u5747\u8861\u65b9\u6848\u3002"),(0,o.kt)("br",null),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u6211\u53ef\u4ee5\u5c06 OpenShift Kubernetes \u96c6\u7fa4\u5bfc\u5165 2.x \u5417\uff1f")),(0,o.kt)("p",null,"\u6211\u4eec\u7684\u76ee\u6807\u662f\u8fd0\u884c\u4efb\u4f55\u4e0a\u6e38 Kubernetes \u96c6\u7fa4\u3002\u56e0\u6b64\uff0cRancher 2.x \u5e94\u8be5\u53ef\u4ee5\u4e0e OpenShift \u4e00\u8d77\u4f7f\u7528\uff0c\u4f46\u6211\u4eec\u5c1a\u672a\u5bf9\u6b64\u8fdb\u884c\u6d4b\u8bd5\u3002"),(0,o.kt)("br",null),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Rancher \u4f1a\u96c6\u6210 Longhorn \u5417\uff1f")),(0,o.kt)("p",null,"\u662f\u7684\u3002Longhorn \u5df2\u96c6\u6210\u5230 Rancher 2.5+ \u4e2d\u3002"))}k.isMDXComponent=!0}}]);