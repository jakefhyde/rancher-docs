"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[1847],{3905:function(e,t,o){o.d(t,{Zo:function(){return p},kt:function(){return l}});var r=o(67294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)o=i[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)o=i[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var c=r.createContext({}),u=function(e){var t=r.useContext(c),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},p=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=u(o),l=n,h=m["".concat(c,".").concat(l)]||m[l]||d[l]||i;return o?r.createElement(h,a(a({ref:t},p),{},{components:o})):r.createElement(h,a({ref:t},p))}));function l(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=o.length,a=new Array(i);a[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,a[1]=s;for(var u=2;u<i;u++)a[u]=o[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,o)}m.displayName="MDXCreateElement"},30813:function(e,t,o){o.r(t),o.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return l},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return d}});var r=o(87462),n=o(63366),i=(o(67294),o(3905)),a=["components"],s={title:"ServiceMonitor and PodMonitor Configuration",shortTitle:"ServiceMonitors and PodMonitors",weight:7},c=void 0,u={unversionedId:"reference-guides/monitoring-v2-configuration/servicemonitors-and-podmonitors",id:"reference-guides/monitoring-v2-configuration/servicemonitors-and-podmonitors",title:"ServiceMonitor and PodMonitor Configuration",description:"ServiceMonitors and PodMonitors are both pseudo-CRDs that map the scrape configuration of the Prometheus custom resource.",source:"@site/docs/reference-guides/monitoring-v2-configuration/servicemonitors-and-podmonitors.md",sourceDirName:"reference-guides/monitoring-v2-configuration",slug:"/reference-guides/monitoring-v2-configuration/servicemonitors-and-podmonitors",permalink:"/reference-guides/monitoring-v2-configuration/servicemonitors-and-podmonitors",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/reference-guides/monitoring-v2-configuration/servicemonitors-and-podmonitors.md",tags:[],version:"current",lastUpdatedAt:1663691987,formattedLastUpdatedAt:"9/20/2022",frontMatter:{title:"ServiceMonitor and PodMonitor Configuration",shortTitle:"ServiceMonitors and PodMonitors",weight:7},sidebar:"tutorialSidebar",previous:{title:"Route Configuration",permalink:"/reference-guides/monitoring-v2-configuration/routes"},next:{title:"Helm Chart Options",permalink:"/reference-guides/monitoring-v2-configuration/helm-chart-options"}},p={},d=[{value:"ServiceMonitors",id:"servicemonitors",level:3},{value:"PodMonitors",id:"podmonitors",level:3}],m={toc:d};function l(e){var t=e.components,o=(0,n.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},m,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"ServiceMonitors and PodMonitors are both pseudo-CRDs that map the scrape configuration of the Prometheus custom resource."),(0,i.kt)("p",null,"These configuration objects declaratively specify the endpoints that Prometheus will scrape metrics from."),(0,i.kt)("p",null,"ServiceMonitors are more commonly used than PodMonitors, and we recommend them for most use cases."),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"This section assumes familiarity with how monitoring components work together. For more information about Alertmanager, see ",(0,i.kt)("a",{parentName:"p",href:"/explanations/integrations-in-rancher/monitoring-and-alerting/how-monitoring-works"},"this section.")))),(0,i.kt)("h3",{id:"servicemonitors"},"ServiceMonitors"),(0,i.kt)("p",null,"This pseudo-CRD maps to a section of the Prometheus custom resource configuration. It declaratively specifies how groups of Kubernetes services should be monitored. "),(0,i.kt)("p",null,"When a ServiceMonitor is created, the Prometheus Operator updates the Prometheus scrape configuration to include the ServiceMonitor configuration. Then Prometheus begins scraping metrics from the endpoint defined in the ServiceMonitor."),(0,i.kt)("p",null,"Any Services in your cluster that match the labels located within the ServiceMonitor ",(0,i.kt)("inlineCode",{parentName:"p"},"selector")," field will be monitored based on the ",(0,i.kt)("inlineCode",{parentName:"p"},"endpoints")," specified on the ServiceMonitor. For more information on what fields can be specified, please look at the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/prometheus-operator/prometheus-operator/blob/master/Documentation/api.md#servicemonitor"},"spec")," provided by Prometheus Operator."),(0,i.kt)("p",null,"For more information about how ServiceMonitors work, refer to the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/prometheus-operator/prometheus-operator/blob/master/Documentation/user-guides/running-exporters.md"},"Prometheus Operator documentation.")),(0,i.kt)("h3",{id:"podmonitors"},"PodMonitors"),(0,i.kt)("p",null,"This pseudo-CRD maps to a section of the Prometheus custom resource configuration. It declaratively specifies how group of pods should be monitored. "),(0,i.kt)("p",null,"When a PodMonitor is created, the Prometheus Operator updates the Prometheus scrape configuration to include the PodMonitor configuration. Then Prometheus begins scraping metrics from the endpoint defined in the PodMonitor."),(0,i.kt)("p",null,"Any Pods in your cluster that match the labels located within the PodMonitor ",(0,i.kt)("inlineCode",{parentName:"p"},"selector")," field will be monitored based on the ",(0,i.kt)("inlineCode",{parentName:"p"},"podMetricsEndpoints")," specified on the PodMonitor. For more information on what fields can be specified, please look at the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/prometheus-operator/prometheus-operator/blob/master/Documentation/api.md#podmonitorspec"},"spec")," provided by Prometheus Operator."))}l.isMDXComponent=!0}}]);