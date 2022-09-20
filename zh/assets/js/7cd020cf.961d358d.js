"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[3608],{3905:function(e,t,r){r.d(t,{Zo:function(){return d},kt:function(){return p}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},d=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},g={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},l=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,d=u(e,["components","mdxType","originalType","parentName"]),l=c(r),p=o,m=l["".concat(s,".").concat(p)]||l[p]||g[p]||i;return r?n.createElement(m,a(a({ref:t},d),{},{components:r})):n.createElement(m,a({ref:t},d))}));function p(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=l;var u={};for(var s in t)hasOwnProperty.call(t,s)&&(u[s]=t[s]);u.originalType=e,u.mdxType="string"==typeof e?e:o,a[1]=u;for(var c=2;c<i;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}l.displayName="MDXCreateElement"},33580:function(e,t,r){r.r(t),r.d(t,{assets:function(){return d},contentTitle:function(){return s},default:function(){return p},frontMatter:function(){return u},metadata:function(){return c},toc:function(){return g}});var n=r(87462),o=r(63366),i=(r(67294),r(3905)),a=["components"],u={title:"\u8c03\u8bd5\u9ad8\u5185\u5b58\u7528\u91cf",weight:8},s=void 0,c={unversionedId:"how-to-guides/advanced-user-guides/monitoring-alerting-guides/debug-high-memory-usage",id:"how-to-guides/advanced-user-guides/monitoring-alerting-guides/debug-high-memory-usage",title:"\u8c03\u8bd5\u9ad8\u5185\u5b58\u7528\u91cf",description:"Prometheus \u4e2d\u7684\u6bcf\u4e2a\u65f6\u95f4\u5e8f\u5217\u90fd\u7531\u5176\u6307\u6807\u540d\u79f0\u548c\u79f0\u4e3a\u6807\u7b7e\u7684\u53ef\u9009\u952e\u503c\u5bf9\u552f\u4e00\u6807\u8bc6\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/how-to-guides/advanced-user-guides/monitoring-alerting-guides/debug-high-memory-usage.md",sourceDirName:"how-to-guides/advanced-user-guides/monitoring-alerting-guides",slug:"/how-to-guides/advanced-user-guides/monitoring-alerting-guides/debug-high-memory-usage",permalink:"/zh/how-to-guides/advanced-user-guides/monitoring-alerting-guides/debug-high-memory-usage",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/how-to-guides/advanced-user-guides/monitoring-alerting-guides/debug-high-memory-usage.md",tags:[],version:"current",lastUpdatedAt:1663691987,formattedLastUpdatedAt:"2022/9/20",frontMatter:{title:"\u8c03\u8bd5\u9ad8\u5185\u5b58\u7528\u91cf",weight:8},sidebar:"tutorialSidebar",previous:{title:"\u6301\u4e45\u5316 Grafana \u4eea\u8868\u677f",permalink:"/zh/how-to-guides/advanced-user-guides/monitoring-alerting-guides/create-persistent-grafana-dashboard"},next:{title:"\u8fc1\u79fb\u5230 Rancher 2.5+ Monitoring",permalink:"/zh/how-to-guides/advanced-user-guides/monitoring-alerting-guides/migrate-to-rancher-v2.5+-monitoring"}},d={},g=[{value:"\u51cf\u5c11\u5185\u5b58\u6fc0\u589e",id:"\u51cf\u5c11\u5185\u5b58\u6fc0\u589e",level:3}],l={toc:g};function p(e){var t=e.components,r=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Prometheus \u4e2d\u7684\u6bcf\u4e2a\u65f6\u95f4\u5e8f\u5217\u90fd\u7531\u5176",(0,i.kt)("a",{parentName:"p",href:"https://prometheus.io/docs/practices/naming/#metric-names"},"\u6307\u6807\u540d\u79f0"),"\u548c\u79f0\u4e3a",(0,i.kt)("a",{parentName:"p",href:"https://prometheus.io/docs/practices/naming/#labels"},"\u6807\u7b7e"),"\u7684\u53ef\u9009\u952e\u503c\u5bf9\u552f\u4e00\u6807\u8bc6\u3002"),(0,i.kt)("p",null,"\u6807\u7b7e\u5141\u8bb8\u8fc7\u6ee4\u548c\u805a\u5408\u65f6\u95f4\u5e8f\u5217\u6570\u636e\uff0c\u4f46\u5b83\u4eec\u4e5f\u4f7f Prometheus \u6536\u96c6\u7684\u6570\u636e\u91cf\u6210\u500d\u589e\u52a0\u3002"),(0,i.kt)("p",null,"\u6bcf\u4e2a\u65f6\u95f4\u5e8f\u5217\u90fd\u6709\u4e00\u7ec4\u5b9a\u4e49\u7684\u6807\u7b7e\uff0cPrometheus \u4e3a\u6240\u6709\u552f\u4e00\u7684\u6807\u7b7e\u7ec4\u5408\u751f\u6210\u4e00\u4e2a\u65b0\u7684\u65f6\u95f4\u5e8f\u5217\u3002\u5982\u679c\u4e00\u4e2a\u6307\u6807\u9644\u52a0\u4e86\u4e24\u4e2a\u6807\u7b7e\uff0c\u5219\u4f1a\u4e3a\u8be5\u6307\u6807\u751f\u6210\u4e24\u4e2a\u65f6\u95f4\u5e8f\u5217\u3002\u66f4\u6539\u4efb\u4f55\u6807\u7b7e\u503c\uff0c\u5305\u62ec\u6dfb\u52a0\u6216\u5220\u9664\u6807\u7b7e\uff0c\u90fd\u4f1a\u521b\u5efa\u4e00\u4e2a\u65b0\u7684\u65f6\u95f4\u5e8f\u5217\u3002"),(0,i.kt)("p",null,"Prometheus \u7ecf\u8fc7\u4e86\u4f18\u5316\uff0c\u53ef\u4ee5\u5b58\u50a8\u57fa\u4e8e\u7d22\u5f15\u7684\u5e8f\u5217\u6570\u636e\u3002\u5b83\u662f\u4e3a\u76f8\u5bf9\u4e00\u81f4\u7684\u65f6\u95f4\u5e8f\u5217\u6570\u91cf\u548c\u76f8\u5bf9\u5927\u91cf\u7684\u6837\u672c\u800c\u8bbe\u8ba1\u7684\uff0c\u8fd9\u4e9b\u6837\u672c\u9700\u8981\u968f\u65f6\u95f4\u4ece exporter \u5904\u6536\u96c6\u3002"),(0,i.kt)("p",null,"\u4f46\u662f\uff0cPrometheus \u6ca1\u6709\u5c31\u5feb\u901f\u53d8\u5316\u7684\u65f6\u95f4\u5e8f\u5217\u6570\u91cf\u8fdb\u884c\u5bf9\u5e94\u7684\u4f18\u5316\u3002\u56e0\u6b64\uff0c\u5982\u679c\u4f60\u5728\u521b\u5efa\u548c\u9500\u6bc1\u4e86\u5927\u91cf\u8d44\u6e90\u7684\u96c6\u7fa4\uff08\u5c24\u5176\u662f\u591a\u79df\u6237\u96c6\u7fa4\uff09\u4e0a\u5b89\u88c5 Monitoring\uff0c\u53ef\u80fd\u4f1a\u51fa\u73b0\u5185\u5b58\u4f7f\u7528\u91cf\u6fc0\u589e\u7684\u60c5\u51b5\u3002"),(0,i.kt)("h3",{id:"\u51cf\u5c11\u5185\u5b58\u6fc0\u589e"},"\u51cf\u5c11\u5185\u5b58\u6fc0\u589e"),(0,i.kt)("p",null,"\u4e3a\u4e86\u51cf\u5c11\u5185\u5b58\u6d88\u8017\uff0cPrometheus \u53ef\u4ee5\u901a\u8fc7\u6293\u53d6\u66f4\u5c11\u7684\u6307\u6807\u6216\u5728\u65f6\u95f4\u5e8f\u5217\u4e0a\u6dfb\u52a0\u66f4\u5c11\u7684\u6807\u7b7e\uff0c\u4ece\u800c\u5b58\u50a8\u66f4\u5c11\u7684\u65f6\u95f4\u5e8f\u5217\u3002\u8981\u67e5\u770b\u4f7f\u7528\u5185\u5b58\u6700\u591a\u7684\u5e8f\u5217\uff0c\u4f60\u53ef\u4ee5\u67e5\u770b Prometheus UI \u4e2d\u7684 TSDB\uff08\u65f6\u5e8f\u6570\u636e\u5e93\uff09\u72b6\u6001\u9875\u9762\u3002"),(0,i.kt)("p",null,"\u5206\u5e03\u5f0f Prometheus \u89e3\u51b3\u65b9\u6848\uff08\u4f8b\u5982 ",(0,i.kt)("a",{parentName:"p",href:"https://thanos.io/"},"Thanos")," \u548c ",(0,i.kt)("a",{parentName:"p",href:"https://cortexmetrics.io/"},"Cortex"),"\uff09\u4f7f\u7528\u4e86\u4e00\u4e2a\u66ff\u4ee3\u67b6\u6784\uff0c\u8be5\u67b6\u6784\u90e8\u7f72\u591a\u4e2a\u5c0f\u578b Prometheus \u5b9e\u4f8b\u3002\u5982\u679c\u4f7f\u7528 Thanos\uff0c\u6bcf\u4e2a Prometheus \u7684\u6307\u6807\u90fd\u805a\u5408\u5230\u901a\u7528\u7684 Thanos \u90e8\u7f72\u4e2d\uff0c\u7136\u540e\u518d\u5c06\u8fd9\u4e9b\u6307\u6807\u5bfc\u51fa\u5230 S3 \u4e4b\u7c7b\u7684\u6301\u4e45\u5b58\u50a8\u3002\u8fd9\u79cd\u67b6\u6784\u66f4\u52a0\u5065\u5eb7\uff0c\u80fd\u907f\u514d\u7ed9\u5355\u4e2a Prometheus \u5b9e\u4f8b\u5e26\u6765\u8fc7\u591a\u65f6\u95f4\u5e8f\u5217\uff0c\u540c\u65f6\u8fd8\u80fd\u5728\u5168\u5c40\u7ea7\u522b\u67e5\u8be2\u6307\u6807\u3002"))}p.isMDXComponent=!0}}]);