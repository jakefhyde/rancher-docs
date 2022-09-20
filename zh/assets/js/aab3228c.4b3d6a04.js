"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[96188],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return d}});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),l=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=l(e.components);return a.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=l(r),d=n,h=m["".concat(p,".").concat(d)]||m[d]||c[d]||o;return r?a.createElement(h,i(i({ref:t},u),{},{components:r})):a.createElement(h,i({ref:t},u))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=m;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var l=2;l<o;l++)i[l]=r[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},96036:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return p},default:function(){return d},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return c}});var a=r(87462),n=r(63366),o=(r(67294),r(3905)),i=["components"],s={title:"\u4f7f\u7528 Rancher UI \u7ba1\u7406 HPA",weight:3028},p=void 0,l={unversionedId:"how-to-guides/new-user-guides/kubernetes-resources-setup/horizontal-pod-autoscaler/manage-hpas-with-ui",id:"how-to-guides/new-user-guides/kubernetes-resources-setup/horizontal-pod-autoscaler/manage-hpas-with-ui",title:"\u4f7f\u7528 Rancher UI \u7ba1\u7406 HPA",description:"Rancher UI \u652f\u6301\u521b\u5efa\u3001\u7ba1\u7406\u548c\u5220\u9664 HPA\u3002\u4f60\u53ef\u4ee5\u5c06 CPU \u6216\u5185\u5b58\u4f7f\u7528\u60c5\u51b5\u914d\u7f6e\u4e3a\u7528\u4e8e HPA \u6269\u7f29\u7684\u6307\u6807\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/how-to-guides/new-user-guides/kubernetes-resources-setup/horizontal-pod-autoscaler/manage-hpas-with-ui.md",sourceDirName:"how-to-guides/new-user-guides/kubernetes-resources-setup/horizontal-pod-autoscaler",slug:"/how-to-guides/new-user-guides/kubernetes-resources-setup/horizontal-pod-autoscaler/manage-hpas-with-ui",permalink:"/zh/how-to-guides/new-user-guides/kubernetes-resources-setup/horizontal-pod-autoscaler/manage-hpas-with-ui",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/how-to-guides/new-user-guides/kubernetes-resources-setup/horizontal-pod-autoscaler/manage-hpas-with-ui.md",tags:[],version:"current",lastUpdatedAt:1663691987,formattedLastUpdatedAt:"2022/9/20",frontMatter:{title:"\u4f7f\u7528 Rancher UI \u7ba1\u7406 HPA",weight:3028},sidebar:"tutorialSidebar",previous:{title:"Horizontal Pod Autoscaler \u4ecb\u7ecd",permalink:"/zh/how-to-guides/new-user-guides/kubernetes-resources-setup/horizontal-pod-autoscaler/about-hpas"},next:{title:"\u4f7f\u7528 kubectl \u7ba1\u7406 HPA",permalink:"/zh/how-to-guides/new-user-guides/kubernetes-resources-setup/horizontal-pod-autoscaler/manage-hpas-with-kubectl"}},u={},c=[{value:"\u521b\u5efa HPA",id:"\u521b\u5efa-hpa",level:2},{value:"\u83b7\u53d6 HPA \u6307\u6807\u548c\u72b6\u6001",id:"\u83b7\u53d6-hpa-\u6307\u6807\u548c\u72b6\u6001",level:2},{value:"\u5220\u9664 HPA",id:"\u5220\u9664-hpa",level:2}],m={toc:c};function d(e){var t=e.components,r=(0,n.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Rancher UI \u652f\u6301\u521b\u5efa\u3001\u7ba1\u7406\u548c\u5220\u9664 HPA\u3002\u4f60\u53ef\u4ee5\u5c06 CPU \u6216\u5185\u5b58\u4f7f\u7528\u60c5\u51b5\u914d\u7f6e\u4e3a\u7528\u4e8e HPA \u6269\u7f29\u7684\u6307\u6807\u3002"),(0,o.kt)("p",null,"\u5982\u679c\u4f60\u60f3\u4f7f\u7528 CPU/\u5185\u5b58\u4e4b\u5916\u7684\u5176\u4ed6\u6307\u6807\u521b\u5efa HPA\uff0c\u8bf7\u53c2\u9605",(0,o.kt)("a",{parentName:"p",href:"/zh/how-to-guides/new-user-guides/kubernetes-resources-setup/horizontal-pod-autoscaler/manage-hpas-with-kubectl#%E9%85%8D%E7%BD%AE-hpa-%E4%BB%A5%E4%BD%BF%E7%94%A8-prometheus-%E8%87%AA%E5%AE%9A%E4%B9%89%E6%8C%87%E6%A0%87%E8%BF%9B%E8%A1%8C%E6%89%A9%E7%BC%A9"},"\u914d\u7f6e HPA \u4ee5\u4f7f\u7528 Prometheus \u7684\u81ea\u5b9a\u4e49\u6307\u6807\u8fdb\u884c\u6269\u7f29"),"\u3002"),(0,o.kt)("h2",{id:"\u521b\u5efa-hpa"},"\u521b\u5efa HPA"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u5728\u5de6\u4e0a\u89d2\uff0c\u5355\u51fb ",(0,o.kt)("strong",{parentName:"p"},"\u2630 > \u96c6\u7fa4\u7ba1\u7406"),"\u3002")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u8f6c\u5230\u8981\u521b\u5efa HPA \u7684\u96c6\u7fa4\uff0c\u7136\u540e\u5355\u51fb ",(0,o.kt)("strong",{parentName:"p"},"Explore"),"\u3002")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u5728\u5de6\u4fa7\u5bfc\u822a\u680f\u4e2d\uff0c\u5355\u51fb",(0,o.kt)("strong",{parentName:"p"},"\u670d\u52a1\u53d1\u73b0 > Horizo\u200b\u200bntalPodAutoscalers"),"\u3002")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u5355\u51fb",(0,o.kt)("strong",{parentName:"p"},"\u521b\u5efa"),"\u3002")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u4e3a HPA \u9009\u62e9 ",(0,o.kt)("strong",{parentName:"p"},"\u547d\u540d\u7a7a\u95f4"),"\u3002")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u8f93\u5165 HPA \u7684",(0,o.kt)("strong",{parentName:"p"},"\u540d\u79f0"),"\u3002")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u9009\u62e9",(0,o.kt)("strong",{parentName:"p"},"\u76ee\u6807\u5f15\u7528"),"\u4f5c\u4e3a HPA \u7684\u6269\u7f29\u76ee\u6807\u3002")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u4e3a HPA \u6307\u5b9a",(0,o.kt)("strong",{parentName:"p"},"\u6700\u5c0f\u526f\u672c\u6570"),"\u548c",(0,o.kt)("strong",{parentName:"p"},"\u6700\u5927\u526f\u672c\u6570"),"\u3002")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u914d\u7f6e HPA \u7684\u6307\u6807\u3002\u4f60\u53ef\u4ee5\u5c06\u5185\u5b58\u6216 CPU \u4f7f\u7528\u7387\u4f5c\u4e3a\u8ba9 HPA \u6269\u7f29\u670d\u52a1\u7684\u6307\u6807\u3002\u5728",(0,o.kt)("strong",{parentName:"p"},"\u6570\u91cf"),"\u5b57\u6bb5\u4e2d\uff0c\u8f93\u5165\u8ba9 HPA \u6269\u7f29\u670d\u52a1\u7684\u5de5\u4f5c\u8d1f\u8f7d\u5185\u5b58/CPU \u4f7f\u7528\u7387\u7684\u767e\u5206\u6bd4\u3002\u8981\u914d\u7f6e\u5176\u4ed6 HPA \u6307\u6807\uff0c\u5305\u62ec Prometheus \u63d0\u4f9b\u7684\u6307\u6807\uff0c\u4f60\u9700\u8981",(0,o.kt)("a",{parentName:"p",href:"/zh/how-to-guides/new-user-guides/kubernetes-resources-setup/horizontal-pod-autoscaler/manage-hpas-with-kubectl#%E9%85%8D%E7%BD%AE-hpa-%E4%BB%A5%E4%BD%BF%E7%94%A8-prometheus-%E8%87%AA%E5%AE%9A%E4%B9%89%E6%8C%87%E6%A0%87%E8%BF%9B%E8%A1%8C%E6%89%A9%E7%BC%A9"},"\u4f7f\u7528 kubectl \u7ba1\u7406 HPA"),"\u3002")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u5355\u51fb",(0,o.kt)("strong",{parentName:"p"},"\u521b\u5efa"),"\u4ee5\u521b\u5efaHPA\u3002"))),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"\u7ed3\u679c\uff1a")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"HPA \u5df2\u88ab\u90e8\u7f72\u5230\u9009\u5b9a\u7684\u547d\u540d\u7a7a\u95f4\u3002\u4f60\u53ef\u4ee5\u5728\u9879\u76ee\u7684",(0,o.kt)("strong",{parentName:"p"},"\u8d44\u6e90 > HPA")," \u89c6\u56fe\u4e2d\u67e5\u770b HPA \u7684\u72b6\u6001\u3002"))),(0,o.kt)("h2",{id:"\u83b7\u53d6-hpa-\u6307\u6807\u548c\u72b6\u6001"},"\u83b7\u53d6 HPA \u6307\u6807\u548c\u72b6\u6001"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u5728\u5de6\u4e0a\u89d2\uff0c\u5355\u51fb ",(0,o.kt)("strong",{parentName:"li"},"\u2630 > \u96c6\u7fa4\u7ba1\u7406"),"\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u8f6c\u5230\u5177\u6709 HPA \u7684\u96c6\u7fa4\u5e76\u5355\u51fb ",(0,o.kt)("strong",{parentName:"li"},"Explore"),"\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u5728\u5de6\u4fa7\u5bfc\u822a\u680f\u4e2d\uff0c\u5355\u51fb",(0,o.kt)("strong",{parentName:"li"},"\u670d\u52a1\u53d1\u73b0 > Horizo\u200b\u200bntalPodAutoscalers"),"\u3002",(0,o.kt)("strong",{parentName:"li"},"Horizo\u200b\u200bntalPodAutoscalers")," \u9875\u9762\u663e\u793a\u5f53\u524d\u526f\u672c\u7684\u6570\u91cf\u3002")),(0,o.kt)("p",null,"\u6709\u5173\u7279\u5b9a HPA \u7684\u66f4\u8be6\u7ec6\u6307\u6807\u548c\u72b6\u6001\uff0c\u8bf7\u5355\u51fb HPA \u7684\u540d\u79f0\u3002\u4f60\u4f1a\u8f6c\u5230 HPA \u7684\u8be6\u60c5\u9875\u9762\u3002"),(0,o.kt)("h2",{id:"\u5220\u9664-hpa"},"\u5220\u9664 HPA"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u5728\u5de6\u4e0a\u89d2\uff0c\u5355\u51fb ",(0,o.kt)("strong",{parentName:"li"},"\u2630 > \u96c6\u7fa4\u7ba1\u7406"),"\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u8f6c\u5230\u8981\u5220\u9664\u7684 HPA \u7684\u96c6\u7fa4\uff0c\u7136\u540e\u5355\u51fb ",(0,o.kt)("strong",{parentName:"li"},"Explore"),"\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u5728\u5de6\u4fa7\u5bfc\u822a\u680f\u4e2d\uff0c\u5355\u51fb",(0,o.kt)("strong",{parentName:"li"},"\u670d\u52a1\u53d1\u73b0 > Horizo\u200b\u200bntalPodAutoscalers"),"\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u5355\u51fb",(0,o.kt)("strong",{parentName:"li"},"\u8d44\u6e90 > HPA"),"\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u627e\u5230\u8981\u5220\u9664\u7684 HPA\uff0c\u7136\u540e\u5355\u51fb ",(0,o.kt)("strong",{parentName:"li"},"\u22ee > \u5220\u9664"),"\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u5355\u51fb",(0,o.kt)("strong",{parentName:"li"},"\u5220\u9664"),"\u4ee5\u8fdb\u884c\u786e\u8ba4\u3002")),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"\u7ed3\u679c\uff1a")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"HPA \u5df2\u4ece\u5f53\u524d\u96c6\u7fa4\u4e2d\u5220\u9664\u3002"))))}d.isMDXComponent=!0}}]);