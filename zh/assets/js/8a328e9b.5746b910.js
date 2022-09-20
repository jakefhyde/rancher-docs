"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[12290],{3905:function(t,e,n){n.d(e,{Zo:function(){return c},kt:function(){return m}});var i=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,i,r=function(t,e){if(null==t)return{};var n,i,r={},a=Object.keys(t);for(i=0;i<a.length;i++)n=a[i],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(i=0;i<a.length;i++)n=a[i],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var l=i.createContext({}),p=function(t){var e=i.useContext(l),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},c=function(t){var e=p(t.components);return i.createElement(l.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return i.createElement(i.Fragment,{},e)}},d=i.forwardRef((function(t,e){var n=t.components,r=t.mdxType,a=t.originalType,l=t.parentName,c=s(t,["components","mdxType","originalType","parentName"]),d=p(n),m=r,k=d["".concat(l,".").concat(m)]||d[m]||u[m]||a;return n?i.createElement(k,o(o({ref:e},c),{},{components:n})):i.createElement(k,o({ref:e},c))}));function m(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var a=n.length,o=new Array(a);o[0]=d;var s={};for(var l in e)hasOwnProperty.call(e,l)&&(s[l]=e[l]);s.originalType=t,s.mdxType="string"==typeof t?t:r,o[1]=s;for(var p=2;p<a;p++)o[p]=n[p];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},26430:function(t,e,n){n.r(e),n.d(e,{assets:function(){return c},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return u}});var i=n(87462),r=n(63366),a=(n(67294),n(3905)),o=["components"],s={title:"\u7981\u7528 Istio",weight:4},l=void 0,p={unversionedId:"explanations/integrations-in-rancher/istio/disable-istio",id:"explanations/integrations-in-rancher/istio/disable-istio",title:"\u7981\u7528 Istio",description:"\u672c\u6587\u4ecb\u7ecd\u5982\u4f55\u5728\u96c6\u7fa4\u4e2d\u5378\u8f7d Istio\uff0c\u4ee5\u53ca\u5982\u4f55\u5728\u547d\u540d\u7a7a\u95f4\u6216\u5de5\u4f5c\u8d1f\u8f7d\u4e2d\u7981\u7528 Istio\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/explanations/integrations-in-rancher/istio/disable-istio.md",sourceDirName:"explanations/integrations-in-rancher/istio",slug:"/explanations/integrations-in-rancher/istio/disable-istio",permalink:"/zh/explanations/integrations-in-rancher/istio/disable-istio",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/explanations/integrations-in-rancher/istio/disable-istio.md",tags:[],version:"current",lastUpdatedAt:1663691987,formattedLastUpdatedAt:"2022/9/20",frontMatter:{title:"\u7981\u7528 Istio",weight:4},sidebar:"tutorialSidebar",previous:{title:"RBAC",permalink:"/zh/explanations/integrations-in-rancher/istio/rbac-for-istio"},next:{title:"\u914d\u7f6e\u9009\u9879",permalink:"/zh/pages-for-subheaders/configuration-options"}},c={},u=[{value:"\u5728\u96c6\u7fa4\u4e2d\u5378\u8f7d Istio",id:"\u5728\u96c6\u7fa4\u4e2d\u5378\u8f7d-istio",level:2},{value:"\u5728\u547d\u540d\u7a7a\u95f4\u4e2d\u7981\u7528 Istio",id:"\u5728\u547d\u540d\u7a7a\u95f4\u4e2d\u7981\u7528-istio",level:2},{value:"\u4ece\u5de5\u4f5c\u8d1f\u8f7d\u4e2d\u79fb\u9664 Istio Sidecar",id:"\u4ece\u5de5\u4f5c\u8d1f\u8f7d\u4e2d\u79fb\u9664-istio-sidecar",level:2}],d={toc:u};function m(t){var e=t.components,n=(0,r.Z)(t,o);return(0,a.kt)("wrapper",(0,i.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u672c\u6587\u4ecb\u7ecd\u5982\u4f55\u5728\u96c6\u7fa4\u4e2d\u5378\u8f7d Istio\uff0c\u4ee5\u53ca\u5982\u4f55\u5728\u547d\u540d\u7a7a\u95f4\u6216\u5de5\u4f5c\u8d1f\u8f7d\u4e2d\u7981\u7528 Istio\u3002"),(0,a.kt)("h2",{id:"\u5728\u96c6\u7fa4\u4e2d\u5378\u8f7d-istio"},"\u5728\u96c6\u7fa4\u4e2d\u5378\u8f7d Istio"),(0,a.kt)("p",null,"\u8981\u5378\u8f7d Istio\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u70b9\u51fb ",(0,a.kt)("strong",{parentName:"li"},"\u2630 > \u96c6\u7fa4\u7ba1\u7406"),"\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u9009\u62e9\u4f60\u521b\u5efa\u7684\u96c6\u7fa4\uff0c\u5e76\u70b9\u51fb ",(0,a.kt)("strong",{parentName:"li"},"Explore"),"\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u5728\u5de6\u4fa7\u5bfc\u822a\u680f\u4e2d\uff0c\u5355\u51fb",(0,a.kt)("strong",{parentName:"li"},"\u5e94\u7528 & \u5e94\u7528\u5e02\u573a > \u5df2\u5b89\u88c5\u7684\u5e94\u7528"),"\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u5728 ",(0,a.kt)("inlineCode",{parentName:"li"},"istio-system")," \u547d\u540d\u7a7a\u95f4\u4e2d\uff0c\u8f6c\u5230 ",(0,a.kt)("inlineCode",{parentName:"li"},"rancher-istio")," \u5e76\u5355\u51fb ",(0,a.kt)("strong",{parentName:"li"},"\u22ee > \u5220\u9664"),"\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u5220\u9664 ",(0,a.kt)("inlineCode",{parentName:"li"},"rancher-istio")," \u540e\uff0c\u9009\u62e9 ",(0,a.kt)("inlineCode",{parentName:"li"},"istio-system")," \u547d\u540d\u7a7a\u95f4\u4e2d\u6240\u6709\u5269\u4f59\u7684\u5e94\u7528\uff0c\u7136\u540e\u5355\u51fb",(0,a.kt)("strong",{parentName:"li"},"\u5220\u9664"),"\u3002")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u7ed3\u679c"),"\uff1a\u5df2\u5220\u9664\u96c6\u7fa4\u4e2d\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"rancher-istio")," \u5e94\u7528\u3002Istio sidecar \u4e0d\u80fd\u90e8\u7f72\u5728\u96c6\u7fa4\u4e2d\u7684\u4efb\u4f55\u5de5\u4f5c\u8d1f\u8f7d\u4e0a\u3002"),(0,a.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"\u4f60\u4e0d\u80fd\u518d\u7981\u7528\u548c\u91cd\u65b0\u542f\u7528\u4f60\u7684 Istio \u5b89\u88c5\u3002\u5982\u679c\u4f60\u60f3\u4fdd\u5b58\u8bbe\u7f6e\u4ee5\u4f9b\u5c06\u6765\u7684\u5b89\u88c5\u4f7f\u7528\uff0c\u8bf7\u67e5\u770b\u5e76\u4fdd\u5b58\u5404\u4e2a YAML\uff0c\u4ee5\u4fbf\u5728\u4e4b\u540e\u7684\u5b89\u88c5\u4e2d\u53c2\u8003/\u91cd\u590d\u4f7f\u7528\u3002"))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u5378\u8f7d\u7591\u96be\u89e3\u7b54"),"\uff1a\u5982\u679c\u4f60\u6ca1\u6709\u6309\u7167\u5378\u8f7d\u6b65\u9aa4\u64cd\u4f5c\uff0c\u5219\u53ef\u80fd\u4f1a\u5728\u5378\u8f7d\u8fc7\u7a0b\u4e2d\u9047\u5230\u4ee5\u4e0b\u8b66\u544a\uff1a"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},'Error: uninstallation completed with 1 error(s): unable to build kubernetes objects for delete: unable to recognize "": no matches for kind "MonitoringDashboard" in version "monitoring.kiali.io/v1alpha1"')),(0,a.kt)("p",null,"\u8fd9\u53ef\u80fd\u610f\u5473\u7740\u51e0\u79cd\u60c5\u51b5\u3002\u7b2c\u4e00\u79cd\u60c5\u51b5\u662f\u4f60\u9009\u62e9\u4e86 ",(0,a.kt)("inlineCode",{parentName:"p"},"istio-system")," \u547d\u540d\u7a7a\u95f4\u4e2d\u7684\u6240\u6709\u5e94\u7528\u5e76\u540c\u65f6\u5220\u9664\u4e86\u5b83\u4eec\uff0c\u53e6\u4e00\u79cd\u60c5\u51b5\u662f\u4f60\u5728\u5220\u9664 ",(0,a.kt)("inlineCode",{parentName:"p"},"rancher-istio")," Chart \u4e4b\u524d\u5220\u9664\u4e86",(0,a.kt)("inlineCode",{parentName:"p"},"rancher-istio")," Chart \u4f9d\u8d56\u9879\u3002\u7531\u4e8e\u5378\u8f7d\u672a\u6b63\u786e\u5b8c\u6210\uff0c\u4f60\u5c06\u9700\u8981\u624b\u52a8\u6e05\u7406 ",(0,a.kt)("inlineCode",{parentName:"p"},"istio-system")," \u547d\u540d\u7a7a\u95f4\u4e2d\u5269\u4f59\u7684\u8d44\u6e90\u3002\u5982\u679c\u4e0d\u60f3\u8fdb\u884c\u624b\u52a8\u6e05\u7406\uff0c\u4f60\u53ef\u4ee5\u91cd\u65b0\u5b89\u88c5 ",(0,a.kt)("inlineCode",{parentName:"p"},"rancher-istio"),"\uff0c\u7136\u540e\u6309\u7167\u6b63\u786e\u7684\u987a\u5e8f\u5378\u8f7d\u5b83\u3002"),(0,a.kt)("h2",{id:"\u5728\u547d\u540d\u7a7a\u95f4\u4e2d\u7981\u7528-istio"},"\u5728\u547d\u540d\u7a7a\u95f4\u4e2d\u7981\u7528 Istio"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u70b9\u51fb ",(0,a.kt)("strong",{parentName:"li"},"\u2630 > \u96c6\u7fa4\u7ba1\u7406"),"\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u9009\u62e9\u4f60\u521b\u5efa\u7684\u96c6\u7fa4\uff0c\u5e76\u70b9\u51fb ",(0,a.kt)("strong",{parentName:"li"},"Explore"),"\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u5355\u51fb",(0,a.kt)("strong",{parentName:"li"},"\u96c6\u7fa4 > \u9879\u76ee/\u547d\u540d\u7a7a\u95f4"),"\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u8f6c\u5230\u8981\u542f\u7528 Istio \u7684\u547d\u540d\u7a7a\u95f4\uff0c\u7136\u540e\u5355\u51fb",(0,a.kt)("strong",{parentName:"li"},"\u22ee > \u542f\u7528 Istio \u81ea\u52a8\u6ce8\u5165"),"\u3002\u6216\u8005\uff0c\u4f60\u4e5f\u53ef\u4ee5\u5355\u51fb\u547d\u540d\u7a7a\u95f4\uff0c\u7136\u540e\u5728\u547d\u540d\u7a7a\u95f4\u8be6\u60c5\u9875\u9762\u4e0a\uff0c\u5355\u51fb",(0,a.kt)("strong",{parentName:"li"},"\u22ee > \u542f\u7528 Istio \u81ea\u52a8\u6ce8\u5165"),"\u3002")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u7ed3\u679c"),"\uff1a\u5982\u679c\u5de5\u4f5c\u8d1f\u8f7d\u90e8\u7f72\u5230\u6b64\u547d\u540d\u7a7a\u95f4\uff0c\u5b83\u4eec\u5c06\u6ca1\u6709 Istio sidecar\u3002"),(0,a.kt)("h2",{id:"\u4ece\u5de5\u4f5c\u8d1f\u8f7d\u4e2d\u79fb\u9664-istio-sidecar"},"\u4ece\u5de5\u4f5c\u8d1f\u8f7d\u4e2d\u79fb\u9664 Istio Sidecar"),(0,a.kt)("p",null,"\u5728\u547d\u540d\u7a7a\u95f4\u4e2d\u7981\u7528 Istio\uff0c\u7136\u540e\u91cd\u65b0\u90e8\u7f72\u5176\u4e2d\u7684\u5de5\u4f5c\u8d1f\u8f7d\u3002\u8fd9\u4e9b\u5de5\u4f5c\u8d1f\u8f7d\u5c06\u5728\u6ca1\u6709 Istio sidecar \u7684\u60c5\u51b5\u4e0b\u90e8\u7f72\u3002"))}m.isMDXComponent=!0}}]);