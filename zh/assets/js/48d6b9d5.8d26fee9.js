"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[49621],{3905:function(e,t,r){r.d(t,{Zo:function(){return k},kt:function(){return m}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},k=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,k=i(e,["components","mdxType","originalType","parentName"]),u=s(r),m=a,c=u["".concat(p,".").concat(m)]||u[m]||d[m]||l;return r?n.createElement(c,o(o({ref:t},k),{},{components:r})):n.createElement(c,o({ref:t},k))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=u;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var s=2;s<l;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},64450:function(e,t,r){r.r(t),r.d(t,{assets:function(){return k},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return d}});var n=r(87462),a=r(63366),l=(r(67294),r(3905)),o=["components"],i={title:"\u90e8\u7f72\u5e26\u6709 Ingress \u7684\u5de5\u4f5c\u8d1f\u8f7d",weight:100},p=void 0,s={unversionedId:"getting-started/quick-start-guides/deploy-workloads/workload-ingress",id:"getting-started/quick-start-guides/deploy-workloads/workload-ingress",title:"\u90e8\u7f72\u5e26\u6709 Ingress \u7684\u5de5\u4f5c\u8d1f\u8f7d",description:"\u5148\u51b3\u6761\u4ef6",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/getting-started/quick-start-guides/deploy-workloads/workload-ingress.md",sourceDirName:"getting-started/quick-start-guides/deploy-workloads",slug:"/getting-started/quick-start-guides/deploy-workloads/workload-ingress",permalink:"/zh/getting-started/quick-start-guides/deploy-workloads/workload-ingress",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/getting-started/quick-start-guides/deploy-workloads/workload-ingress.md",tags:[],version:"current",lastUpdatedAt:1663691987,formattedLastUpdatedAt:"2022/9/20",frontMatter:{title:"\u90e8\u7f72\u5e26\u6709 Ingress \u7684\u5de5\u4f5c\u8d1f\u8f7d",weight:100},sidebar:"tutorialSidebar",previous:{title:"\u90e8\u7f72\u5de5\u4f5c\u8d1f\u8f7d",permalink:"/zh/pages-for-subheaders/deploy-rancher-workloads"},next:{title:"\u90e8\u7f72\u5e26\u6709 NodePort \u7684\u5de5\u4f5c\u8d1f\u8f7d",permalink:"/zh/getting-started/quick-start-guides/deploy-workloads/nodeports"}},k={},d=[{value:"\u5148\u51b3\u6761\u4ef6",id:"\u5148\u51b3\u6761\u4ef6",level:3},{value:"1. \u90e8\u7f72\u5de5\u4f5c\u8d1f\u8f7d",id:"1-\u90e8\u7f72\u5de5\u4f5c\u8d1f\u8f7d",level:3},{value:"2. \u901a\u8fc7 Ingress \u66b4\u9732\u5e94\u7528",id:"2-\u901a\u8fc7-ingress-\u66b4\u9732\u5e94\u7528",level:3},{value:"\u67e5\u770b\u5e94\u7528",id:"\u67e5\u770b\u5e94\u7528",level:3},{value:"\u5df2\u5b8c\u6210\uff01",id:"\u5df2\u5b8c\u6210",level:4},{value:"\u540e\u7eed\u64cd\u4f5c",id:"\u540e\u7eed\u64cd\u4f5c",level:4}],u={toc:d};function m(e){var t=e.components,r=(0,a.Z)(e,o);return(0,l.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h3",{id:"\u5148\u51b3\u6761\u4ef6"},"\u5148\u51b3\u6761\u4ef6"),(0,l.kt)("p",null,"\u4f60\u5df2\u6709\u4e00\u4e2a\u6b63\u5728\u8fd0\u884c\u7684\u96c6\u7fa4\uff0c\u4e14\u8be5\u96c6\u7fa4\u4e2d\u6709\u81f3\u5c11\u4e00\u4e2a\u8282\u70b9\u3002"),(0,l.kt)("h3",{id:"1-\u90e8\u7f72\u5de5\u4f5c\u8d1f\u8f7d"},"1. \u90e8\u7f72\u5de5\u4f5c\u8d1f\u8f7d"),(0,l.kt)("p",null,"\u4f60\u53ef\u4ee5\u5f00\u59cb\u521b\u5efa\u4f60\u7684\u7b2c\u4e00\u4e2a Kubernetes ",(0,l.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/workloads/"},"\u5de5\u4f5c\u8d1f\u8f7d"),"\u3002\u5de5\u4f5c\u8d1f\u8f7d\u662f\u4e00\u4e2a\u5bf9\u8c61\uff0c\u5176\u4e2d\u5305\u542b pod \u4ee5\u53ca\u90e8\u7f72\u5e94\u7528\u6240\u9700\u7684\u5176\u4ed6\u6587\u4ef6\u548c\u4fe1\u606f\u3002"),(0,l.kt)("p",null,"\u5728\u672c\u6587\u7684\u5de5\u4f5c\u8d1f\u8f7d\u4e2d\uff0c\u4f60\u5c06\u90e8\u7f72\u4e00\u4e2a Rancher Hello-World \u5e94\u7528\u3002"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u70b9\u51fb ",(0,l.kt)("strong",{parentName:"li"},"\u2630 > \u96c6\u7fa4\u7ba1\u7406"),"\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u9009\u62e9\u4f60\u521b\u5efa\u7684\u96c6\u7fa4\uff0c\u5e76\u70b9\u51fb ",(0,l.kt)("strong",{parentName:"li"},"Explore"),"\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u70b9\u51fb",(0,l.kt)("strong",{parentName:"li"},"\u5de5\u4f5c\u8d1f\u8f7d"),"\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u5355\u51fb",(0,l.kt)("strong",{parentName:"li"},"\u521b\u5efa"),"\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u70b9\u51fb ",(0,l.kt)("strong",{parentName:"li"},"Deployment"),"\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u4e3a\u5de5\u4f5c\u8d1f\u8f7d\u8bbe\u7f6e",(0,l.kt)("strong",{parentName:"li"},"\u540d\u79f0"),"\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u5728 ",(0,l.kt)("strong",{parentName:"li"},"Docker \u955c\u50cf"),"\u5b57\u6bb5\u4e2d\uff0c\u8f93\u5165 ",(0,l.kt)("inlineCode",{parentName:"li"},"rancher/hello-world"),"\u3002\u6ce8\u610f\u533a\u5206\u5927\u5c0f\u5199\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u70b9\u51fb",(0,l.kt)("strong",{parentName:"li"},"\u6dfb\u52a0\u7aef\u53e3"),"\u5e76\u5728",(0,l.kt)("strong",{parentName:"li"},"\u79c1\u6709\u5bb9\u5668\u7aef\u53e3"),"\u5b57\u6bb5\u4e2d\u8f93\u5165",(0,l.kt)("inlineCode",{parentName:"li"},"80"),"\u3002\u901a\u8fc7\u6dfb\u52a0\u7aef\u53e3\uff0c\u4f60\u53ef\u4ee5\u8bbf\u95ee\u96c6\u7fa4\u5185\u5916\u7684\u5e94\u7528\u3002\u8be6\u60c5\u8bf7\u53c2\u89c1 ",(0,l.kt)("a",{parentName:"li",href:"/zh/pages-for-subheaders/workloads-and-pods#services"},"Service"),"\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u5355\u51fb",(0,l.kt)("strong",{parentName:"li"},"\u521b\u5efa"),"\u3002")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u7ed3\u679c"),"\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5de5\u4f5c\u8d1f\u8f7d\u5df2\u90e8\u7f72\u3002\u6b64\u8fc7\u7a0b\u53ef\u80fd\u9700\u8981\u51e0\u5206\u949f\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u5f53\u5de5\u4f5c\u8d1f\u8f7d\u5b8c\u6210\u90e8\u7f72\u540e\uff0c\u5b83\u7684\u72b6\u6001\u4f1a\u53d8\u4e3a ",(0,l.kt)("strong",{parentName:"li"},"Active"),"\u3002\u4f60\u53ef\u4ee5\u4ece\u9879\u76ee\u7684",(0,l.kt)("strong",{parentName:"li"},"\u5de5\u4f5c\u8d1f\u8f7d"),"\u9875\u9762\u67e5\u770b\u5176\u72b6\u6001\u3002")),(0,l.kt)("h3",{id:"2-\u901a\u8fc7-ingress-\u66b4\u9732\u5e94\u7528"},"2. \u901a\u8fc7 Ingress \u66b4\u9732\u5e94\u7528"),(0,l.kt)("p",null,"\u73b0\u5728\u5e94\u7528\u5df2\u542f\u52a8\u5e76\u8fd0\u884c\uff0c\u4f60\u9700\u8981\u66b4\u9732\u5e94\u7528\u4ee5\u8ba9\u5176\u4ed6\u670d\u52a1\u8fde\u63a5\u5230\u5b83\u3002"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u70b9\u51fb ",(0,l.kt)("strong",{parentName:"p"},"\u2630 > \u96c6\u7fa4\u7ba1\u7406"),"\u3002")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u9009\u62e9\u4f60\u521b\u5efa\u7684\u96c6\u7fa4\uff0c\u5e76\u70b9\u51fb ",(0,l.kt)("strong",{parentName:"p"},"Explore"),"\u3002")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u70b9\u51fb",(0,l.kt)("strong",{parentName:"p"},"\u670d\u52a1\u53d1\u73b0 > Ingresses"),"\u3002")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u70b9\u51fb",(0,l.kt)("strong",{parentName:"p"},"\u521b\u5efa"),"\u3002")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u5728\u9009\u62e9",(0,l.kt)("strong",{parentName:"p"},"\u547d\u540d\u7a7a\u95f4"),"\u65f6\uff0c\u4f60\u9700\u8981\u9009\u62e9\u5728\u521b\u5efa deployment \u65f6\u4f7f\u7528\u7684\u547d\u540d\u7a7a\u95f4\u3002\u5426\u5219\uff0c\u5728\u6b65\u9aa48\u4e2d\u9009\u62e9",(0,l.kt)("strong",{parentName:"p"},"\u76ee\u6807\u670d\u52a1"),"\u65f6\uff0c\u4f60\u7684 deployment \u4f1a\u4e0d\u53ef\u7528\u3002")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u8f93\u5165",(0,l.kt)("strong",{parentName:"p"},"\u540d\u79f0"),"\uff0c\u4f8b\u5982 ",(0,l.kt)("strong",{parentName:"p"},"hello"),"\u3002")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u6307\u5b9a",(0,l.kt)("strong",{parentName:"p"},"\u8def\u5f84"),"\uff0c\u4f8b\u5982 ",(0,l.kt)("inlineCode",{parentName:"p"},"/hello"),"\u3002")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u5728",(0,l.kt)("strong",{parentName:"p"},"\u76ee\u6807\u670d\u52a1"),"\u5b57\u6bb5\u7684\u4e0b\u62c9\u83dc\u5355\u4e2d\uff0c\u9009\u62e9\u4f60\u4e3a\u670d\u52a1\u8bbe\u7f6e\u7684\u540d\u79f0\u3002")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u5728",(0,l.kt)("strong",{parentName:"p"},"\u7aef\u53e3"),"\u5b57\u6bb5\u4e2d\u7684\u4e0b\u62c9\u83dc\u5355\u4e2d\uff0c\u9009\u62e9 ",(0,l.kt)("inlineCode",{parentName:"p"},"80"),"\u3002")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u70b9\u51fb\u53f3\u4e0b\u89d2\u7684",(0,l.kt)("strong",{parentName:"p"},"\u521b\u5efa"),"\u3002"))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u7ed3\u679c"),"\uff1a\u5e94\u7528\u5206\u914d\u5230\u4e86\u4e00\u4e2a ",(0,l.kt)("inlineCode",{parentName:"p"},"sslip.io")," \u5730\u5740\u5e76\u66b4\u9732\u3002\u8fd9\u53ef\u80fd\u9700\u8981\u4e00\u4e24\u5206\u949f\u3002"),(0,l.kt)("h3",{id:"\u67e5\u770b\u5e94\u7528"},"\u67e5\u770b\u5e94\u7528"),(0,l.kt)("p",null,"\u5728 ",(0,l.kt)("strong",{parentName:"p"},"Deployments")," \u9875\u9762\u4e2d\uff0c\u627e\u5230\u4f60 deployment \u7684 ",(0,l.kt)("strong",{parentName:"p"},"endpoint")," \u5217\uff0c\u7136\u540e\u5355\u51fb\u4e00\u4e2a endpoint\u3002\u53ef\u7528\u7684 endpoint \u53d6\u51b3\u4e8e\u4f60\u6dfb\u52a0\u5230 deployment \u4e2d\u7684\u7aef\u53e3\u914d\u7f6e\u3002\u5982\u679c\u4f60\u770b\u4e0d\u5230\u968f\u673a\u5206\u914d\u7aef\u53e3\u7684 endpoint\uff0c\u8bf7\u5c06\u4f60\u5728\u521b\u5efa Ingress \u65f6\u6307\u5b9a\u7684\u8def\u5f84\u5c3e\u9644\u5230 IP \u5730\u5740\u4e0a\u3002\u4f8b\u5982\uff0c\u5982\u679c\u4f60\u7684 endpoint \u662f ",(0,l.kt)("inlineCode",{parentName:"p"},"xxx.xxx.xxx.xxx")," \u6216 ",(0,l.kt)("inlineCode",{parentName:"p"},"https://xxx.xxx.xxx.xxx"),"\uff0c\u628a\u5b83\u4fee\u6539\u4e3a ",(0,l.kt)("inlineCode",{parentName:"p"},"xxx.xxx.xxx.xxx/hello")," \u6216 ",(0,l.kt)("inlineCode",{parentName:"p"},"https://xxx.xxx.xxx.xxx/hello"),"\u3002"),(0,l.kt)("p",null,"\u5e94\u7528\u5c06\u5728\u53e6\u4e00\u4e2a\u7a97\u53e3\u4e2d\u6253\u5f00\u3002"),(0,l.kt)("h4",{id:"\u5df2\u5b8c\u6210"},"\u5df2\u5b8c\u6210\uff01"),(0,l.kt)("p",null,"\u606d\u559c\uff01\u4f60\u5df2\u6210\u529f\u901a\u8fc7 Ingress \u90e8\u7f72\u5de5\u4f5c\u8d1f\u8f7d\u3002"),(0,l.kt)("h4",{id:"\u540e\u7eed\u64cd\u4f5c"},"\u540e\u7eed\u64cd\u4f5c"),(0,l.kt)("p",null,"\u4f7f\u7528\u5b8c\u6c99\u76d2\u540e\uff0c\u4f60\u9700\u8981\u6e05\u7406 Rancher Server \u548c\u96c6\u7fa4\u3002\u8be6\u60c5\u8bf7\u53c2\u89c1\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/zh/getting-started/quick-start-guides/deploy-rancher-manager/aws#%E9%94%80%E6%AF%81%E7%8E%AF%E5%A2%83"},"Amazon AWS\uff1a\u9500\u6bc1\u73af\u5883")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/zh/getting-started/quick-start-guides/deploy-rancher-manager/digitalocean#%E9%94%80%E6%AF%81%E7%8E%AF%E5%A2%83"},"DigitalOcean\uff1a\u9500\u6bc1\u73af\u5883")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/zh/getting-started/quick-start-guides/deploy-rancher-manager/vagrant#%E9%94%80%E6%AF%81%E7%8E%AF%E5%A2%83"},"Vagrant\uff1a\u9500\u6bc1\u73af\u5883"))))}m.isMDXComponent=!0}}]);