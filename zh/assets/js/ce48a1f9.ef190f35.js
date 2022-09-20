"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[66795],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return h}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),s=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=s(n),h=r,u=d["".concat(i,".").concat(h)]||d[h]||m[h]||l;return n?a.createElement(u,o(o({ref:t},p),{},{components:n})):a.createElement(u,o({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=d;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var s=2;s<l;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},85266:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return i},default:function(){return h},frontMatter:function(){return c},metadata:function(){return s},toc:function(){return m}});var a=n(87462),r=n(63366),l=(n(67294),n(3905)),o=["components"],c={title:"3. \u5b89\u88c5 Rancher",weight:300},i=void 0,s={unversionedId:"getting-started/installation-and-upgrade/other-installation-methods/rancher-behind-an-http-proxy/install-rancher",id:"getting-started/installation-and-upgrade/other-installation-methods/rancher-behind-an-http-proxy/install-rancher",title:"3. \u5b89\u88c5 Rancher",description:"\u5728\u524d\u6587\u7684\u64cd\u4f5c\u540e\uff0c\u4f60\u5df2\u7ecf\u6709\u4e86\u4e00\u4e2a\u8fd0\u884c\u7684 RKE \u96c6\u7fa4\uff0c\u73b0\u5728\u53ef\u4ee5\u5728\u5176\u4e2d\u5b89\u88c5 Rancher \u4e86\u3002\u51fa\u4e8e\u5b89\u5168\u8003\u8651\uff0c\u6240\u6709\u5230 Rancher \u7684\u6d41\u91cf\u90fd\u5fc5\u987b\u4f7f\u7528 TLS \u52a0\u5bc6\u3002\u5728\u672c\u6559\u7a0b\u4e2d\uff0c\u4f60\u5c06\u4f7f\u7528 cert-manager\u81ea\u52a8\u9881\u53d1\u81ea\u7b7e\u540d\u8bc1\u4e66\u3002\u5728\u5b9e\u9645\u4f7f\u7528\u60c5\u51b5\u4e0b\uff0c\u4f60\u53ef\u4f7f\u7528 Let's Encrypt \u6216\u81ea\u5df1\u7684\u8bc1\u4e66\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/getting-started/installation-and-upgrade/other-installation-methods/rancher-behind-an-http-proxy/install-rancher.md",sourceDirName:"getting-started/installation-and-upgrade/other-installation-methods/rancher-behind-an-http-proxy",slug:"/getting-started/installation-and-upgrade/other-installation-methods/rancher-behind-an-http-proxy/install-rancher",permalink:"/zh/getting-started/installation-and-upgrade/other-installation-methods/rancher-behind-an-http-proxy/install-rancher",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/getting-started/installation-and-upgrade/other-installation-methods/rancher-behind-an-http-proxy/install-rancher.md",tags:[],version:"current",lastUpdatedAt:1663691987,formattedLastUpdatedAt:"2022/9/20",frontMatter:{title:"3. \u5b89\u88c5 Rancher",weight:300},sidebar:"tutorialSidebar",previous:{title:"2. \u5b89\u88c5 Kubernetes",permalink:"/zh/getting-started/installation-and-upgrade/other-installation-methods/rancher-behind-an-http-proxy/install-kubernetes"},next:{title:"\u8d44\u6e90",permalink:"/zh/pages-for-subheaders/resources"}},p={},m=[{value:"\u5b89\u88c5 cert-manager",id:"\u5b89\u88c5-cert-manager",level:3},{value:"\u5b89\u88c5 Rancher",id:"\u5b89\u88c5-rancher",level:3},{value:"\u5176\u4ed6\u8d44\u6e90",id:"\u5176\u4ed6\u8d44\u6e90",level:3}],d={toc:m};function h(e){var t=e.components,n=(0,r.Z)(e,o);return(0,l.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"\u5728\u524d\u6587\u7684\u64cd\u4f5c\u540e\uff0c\u4f60\u5df2\u7ecf\u6709\u4e86\u4e00\u4e2a\u8fd0\u884c\u7684 RKE \u96c6\u7fa4\uff0c\u73b0\u5728\u53ef\u4ee5\u5728\u5176\u4e2d\u5b89\u88c5 Rancher \u4e86\u3002\u51fa\u4e8e\u5b89\u5168\u8003\u8651\uff0c\u6240\u6709\u5230 Rancher \u7684\u6d41\u91cf\u90fd\u5fc5\u987b\u4f7f\u7528 TLS \u52a0\u5bc6\u3002\u5728\u672c\u6559\u7a0b\u4e2d\uff0c\u4f60\u5c06\u4f7f\u7528 ",(0,l.kt)("a",{parentName:"p",href:"https://cert-manager.io/"},"cert-manager"),"\u81ea\u52a8\u9881\u53d1\u81ea\u7b7e\u540d\u8bc1\u4e66\u3002\u5728\u5b9e\u9645\u4f7f\u7528\u60c5\u51b5\u4e0b\uff0c\u4f60\u53ef\u4f7f\u7528 Let's Encrypt \u6216\u81ea\u5df1\u7684\u8bc1\u4e66\u3002"),(0,l.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"\u8fd9\u4e9b\u5b89\u88c5\u6307\u5357\u5047\u5b9a\u4f60\u4f7f\u7528\u7684\u662f Helm 3\u3002"))),(0,l.kt)("h3",{id:"\u5b89\u88c5-cert-manager"},"\u5b89\u88c5 cert-manager"),(0,l.kt)("p",null,"\u6dfb\u52a0 cert-manager Helm \u4ed3\u5e93\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"helm repo add jetstack https://charts.jetstack.io\n")),(0,l.kt)("p",null,"\u4e3a cert-manager \u521b\u5efa\u547d\u540d\u7a7a\u95f4\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"kubectl create namespace cert-manager\n")),(0,l.kt)("p",null,"\u5b89\u88c5 cert-manager \u7684 CustomResourceDefinitions\uff1a"),(0,l.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"v2.6.4 \u517c\u5bb9 cert-manager \u7248\u672c 1.6.2 \u548c 1.7.1\u3002\u63a8\u8350\u4f7f\u7528 v1.7.x\uff0c\u56e0\u4e3a v 1.6.x \u5c06\u5728 2022 \u5e74 3 \u6708 30 \u65e5\u7ed3\u675f\u751f\u547d\u5468\u671f\u3002"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"kubectl apply -f https://github.com/cert-manager/cert-manager/releases/download/v1.7.1/cert-manager.crds.yaml\n")),(0,l.kt)("p",null,"\u4f7f\u7528 Helm \u5b89\u88c5 cert-manager\u3002\u8bf7\u6ce8\u610f\uff0ccert-manager \u8fd8\u9700\u8981\u4f60\u914d\u7f6e\u4ee3\u7406\uff0c\u4ee5\u9632\u5b83\u9700\u8981\u4e0e Let's Encrypt \u6216\u5176\u4ed6\u5916\u90e8\u8bc1\u4e66\u9881\u53d1\u5546\u8fdb\u884c\u901a\u4fe1\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"helm upgrade --install cert-manager jetstack/cert-manager \\\n  --namespace cert-manager --version v1.7.1 \\\n  --set http_proxy=http://${proxy_host} \\\n  --set https_proxy=http://${proxy_host} \\\n  --set no_proxy=127.0.0.0/8\\\\,10.0.0.0/8\\\\,cattle-system.svc\\\\,172.16.0.0/12\\\\,192.168.0.0/16\\\\,.svc\\\\,.cluster.local\n")),(0,l.kt)("p",null,"\u7b49\u5f85 cert-manager \u5b8c\u6210\u542f\u52a8\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"kubectl rollout status deployment -n cert-manager cert-manager\nkubectl rollout status deployment -n cert-manager cert-manager-webhook\n")),(0,l.kt)("h3",{id:"\u5b89\u88c5-rancher"},"\u5b89\u88c5 Rancher"),(0,l.kt)("p",null,"\u63a5\u4e0b\u6765\uff0c\u4f60\u53ef\u4ee5\u5b89\u88c5 Rancher \u4e86\u3002\u9996\u5148\uff0c\u6dfb\u52a0 Helm \u4ed3\u5e93\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"helm repo add rancher-latest https://releases.rancher.com/server-charts/latest\n")),(0,l.kt)("p",null,"\u521b\u5efa\u547d\u540d\u7a7a\u95f4\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"kubectl create namespace cattle-system\n")),(0,l.kt)("p",null,"\u7136\u540e\u4f7f\u7528 Helm \u5b89\u88c5 Rancher\uff1aRancher \u4e5f\u9700\u8981\u4f60\u914d\u7f6e\u4ee3\u7406\uff0c\u4ee5\u4fbf\u5b83\u53ef\u4ee5\u4e0e\u5916\u90e8\u5e94\u7528\u5546\u5e97\u901a\u4fe1\uff0c\u6216\u68c0\u7d22 Kubernetes \u7248\u672c\u66f4\u65b0\u5143\u6570\u636e\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"helm upgrade --install rancher rancher-latest/rancher \\\n   --namespace cattle-system \\\n   --set hostname=rancher.example.com \\\n   --set proxy=http://${proxy_host} \\\n   --set noProxy=127.0.0.0/8\\\\,10.0.0.0/8\\\\,cattle-system.svc\\\\,172.16.0.0/12\\\\,192.168.0.0/16\\\\,.svc\\\\,.cluster.local\n")),(0,l.kt)("p",null,"\u7b49\u5f85\u90e8\u7f72\u5b8c\u6210\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"kubectl rollout status deployment -n cattle-system rancher\n")),(0,l.kt)("p",null,"\u73b0\u5728\uff0c\u4f60\u53ef\u4ee5\u5bfc\u822a\u5230 ",(0,l.kt)("inlineCode",{parentName:"p"},"https://rancher.example.com")," \u5e76\u5f00\u59cb\u4f7f\u7528 Rancher\u3002"),(0,l.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"\u5982\u679c\u4f60\u4e0d\u60f3\u53d1\u9001\u9065\u6d4b\u6570\u636e\uff0c\u5728\u9996\u6b21\u767b\u5f55\u65f6\u9000\u51fa",(0,l.kt)("a",{parentName:"p",href:"/zh/faq/telemetry"},"\u9065\u6d4b"),"\u3002\u5982\u679c\u5728\u79bb\u7ebf\u5b89\u88c5\u7684\u73af\u5883\u4e2d\u8ba9\u8fd9\u4e2a\u529f\u80fd\u5904\u4e8e active \u72b6\u6001\uff0csocket \u53ef\u80fd\u65e0\u6cd5\u6253\u5f00\u3002"))),(0,l.kt)("h3",{id:"\u5176\u4ed6\u8d44\u6e90"},"\u5176\u4ed6\u8d44\u6e90"),(0,l.kt)("p",null,"\u4ee5\u4e0b\u8d44\u6e90\u53ef\u80fd\u5bf9\u5b89\u88c5 Rancher \u6709\u5e2e\u52a9\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/zh/reference-guides/installation-references/helm-chart-options"},"Rancher Helm Chart \u9009\u9879")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/zh/getting-started/installation-and-upgrade/resources/add-tls-secrets"},"\u6dfb\u52a0 TLS \u5bc6\u6587")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/zh/getting-started/installation-and-upgrade/install-upgrade-on-a-kubernetes-cluster/troubleshooting"},"Rancher Kubernetes \u5b89\u88c5\u7684\u6545\u969c\u6392\u9664"))))}h.isMDXComponent=!0}}]);