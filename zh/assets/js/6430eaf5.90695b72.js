"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[87257],{3905:function(e,t,n){n.d(t,{Zo:function(){return o},kt:function(){return k}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},o=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,o=i(e,["components","mdxType","originalType","parentName"]),d=p(n),k=r,m=d["".concat(s,".").concat(k)]||d[k]||u[k]||l;return n?a.createElement(m,c(c({ref:t},o),{},{components:n})):a.createElement(m,c({ref:t},o))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,c=new Array(l);c[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var p=2;p<l;p++)c[p]=n[p];return a.createElement.apply(null,c)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},52888:function(e,t,n){n.r(t),n.d(t,{assets:function(){return o},contentTitle:function(){return s},default:function(){return k},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return u}});var a=n(87462),r=n(63366),l=(n(67294),n(3905)),c=["components"],i={title:"\u66f4\u65b0 Rancher \u8bc1\u4e66",weight:10},s="\u66f4\u65b0\u79c1\u6709 CA \u8bc1\u4e66",p={unversionedId:"getting-started/installation-and-upgrade/resources/update-rancher-certificate",id:"getting-started/installation-and-upgrade/resources/update-rancher-certificate",title:"\u66f4\u65b0 Rancher \u8bc1\u4e66",description:"\u672c\u6587\u4ecb\u7ecd\u5982\u4f55\u66f4\u65b0 Rancher \u9ad8\u53ef\u7528 Kubernetes \u5b89\u88c5 \u4e2d Ingress \u7684 SSL \u8bc1\u4e66\uff0c\u4ee5\u53ca\u5982\u4f55\u4ece\u9ed8\u8ba4\u7684\u81ea\u7b7e\u540d\u8bc1\u4e66\u5207\u6362\u5230\u81ea\u5b9a\u4e49\u8bc1\u4e66\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/getting-started/installation-and-upgrade/resources/update-rancher-certificate.md",sourceDirName:"getting-started/installation-and-upgrade/resources",slug:"/getting-started/installation-and-upgrade/resources/update-rancher-certificate",permalink:"/zh/getting-started/installation-and-upgrade/resources/update-rancher-certificate",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/getting-started/installation-and-upgrade/resources/update-rancher-certificate.md",tags:[],version:"current",lastUpdatedAt:1663691987,formattedLastUpdatedAt:"2022/9/20",frontMatter:{title:"\u66f4\u65b0 Rancher \u8bc1\u4e66",weight:10},sidebar:"tutorialSidebar",previous:{title:"\u5347\u7ea7 Cert-Manager",permalink:"/zh/getting-started/installation-and-upgrade/resources/upgrade-cert-manager"},next:{title:"\u5f15\u5bfc\u5bc6\u7801",permalink:"/zh/getting-started/installation-and-upgrade/resources/bootstrap-password"}},o={},u=[{value:"1. \u521b\u5efa/\u66f4\u65b0\u8bc1\u4e66\u5bc6\u6587\u8d44\u6e90",id:"1-\u521b\u5efa\u66f4\u65b0\u8bc1\u4e66\u5bc6\u6587\u8d44\u6e90",level:2},{value:"2. \u521b\u5efa/\u66f4\u65b0\u8bc1\u4e66 CA \u5bc6\u6587\u8d44\u6e90",id:"2-\u521b\u5efa\u66f4\u65b0\u8bc1\u4e66-ca-\u5bc6\u6587\u8d44\u6e90",level:2},{value:"3. \u91cd\u65b0\u914d\u7f6e Rancher \u90e8\u7f72",id:"3-\u91cd\u65b0\u914d\u7f6e-rancher-\u90e8\u7f72",level:2},{value:"4. \u91cd\u65b0\u914d\u7f6e Rancher Agent \u4ee5\u4fe1\u4efb\u79c1\u6709 CA",id:"4-\u91cd\u65b0\u914d\u7f6e-rancher-agent-\u4ee5\u4fe1\u4efb\u79c1\u6709-ca",level:2},{value:"\u4e3a\u4ec0\u4e48\u8981\u6267\u884c\u8fd9\u4e00\u6b65\u9aa4\uff1f",id:"\u4e3a\u4ec0\u4e48\u8981\u6267\u884c\u8fd9\u4e00\u6b65\u9aa4",level:3},{value:"\u53ef\u4f7f\u7528\u7684\u65b9\u6cd5",id:"\u53ef\u4f7f\u7528\u7684\u65b9\u6cd5",level:3},{value:"\u65b9\u6cd5 1\uff1aKubectl \u547d\u4ee4",id:"\u65b9\u6cd5-1kubectl-\u547d\u4ee4",level:3},{value:"\u65b9\u6cd5 2\uff1a\u624b\u52a8\u66f4\u65b0\u6821\u9a8c\u548c",id:"\u65b9\u6cd5-2\u624b\u52a8\u66f4\u65b0\u6821\u9a8c\u548c",level:3},{value:"\u65b9\u6cd5 3\uff1a\u91cd\u65b0\u521b\u5efa Rancher Agent",id:"\u65b9\u6cd5-3\u91cd\u65b0\u521b\u5efa-rancher-agent",level:3},{value:"5. \u9009\u62e9 Fleet \u96c6\u7fa4\u7684\u5f3a\u5236\u66f4\u65b0\uff0c\u6765\u5c06 fleet-agent \u8fde\u63a5\u5230 Rancher",id:"5-\u9009\u62e9-fleet-\u96c6\u7fa4\u7684\u5f3a\u5236\u66f4\u65b0\u6765\u5c06-fleet-agent-\u8fde\u63a5\u5230-rancher",level:2},{value:"\u4e3a\u4ec0\u4e48\u8981\u6267\u884c\u8fd9\u4e00\u6b65\u9aa4\uff1f",id:"\u4e3a\u4ec0\u4e48\u8981\u6267\u884c\u8fd9\u4e00\u6b65\u9aa4-1",level:3},{value:"1. \u521b\u5efa/\u66f4\u65b0\u8bc1\u4e66\u5bc6\u6587\u8d44\u6e90",id:"1-\u521b\u5efa\u66f4\u65b0\u8bc1\u4e66\u5bc6\u6587\u8d44\u6e90-1",level:2},{value:"2. \u5220\u9664 CA \u8bc1\u4e66\u5bc6\u6587\u8d44\u6e90",id:"2-\u5220\u9664-ca-\u8bc1\u4e66\u5bc6\u6587\u8d44\u6e90",level:2},{value:"3. \u91cd\u65b0\u914d\u7f6e Rancher \u90e8\u7f72",id:"3-\u91cd\u65b0\u914d\u7f6e-rancher-\u90e8\u7f72-1",level:2},{value:"4. \u4e3a\u975e\u79c1\u6709/\u901a\u7528\u8bc1\u4e66\u91cd\u65b0\u914d\u7f6e Rancher Agent",id:"4-\u4e3a\u975e\u79c1\u6709\u901a\u7528\u8bc1\u4e66\u91cd\u65b0\u914d\u7f6e-rancher-agent",level:2},{value:"5. \u9009\u62e9 Fleet \u96c6\u7fa4\u7684\u5f3a\u5236\u66f4\u65b0\uff0c\u6765\u5c06 fleet-agent \u8fde\u63a5\u5230 Rancher",id:"5-\u9009\u62e9-fleet-\u96c6\u7fa4\u7684\u5f3a\u5236\u66f4\u65b0\u6765\u5c06-fleet-agent-\u8fde\u63a5\u5230-rancher-1",level:2},{value:"\u4e3a\u4ec0\u4e48\u8981\u6267\u884c\u8fd9\u4e00\u6b65\u9aa4\uff1f",id:"\u4e3a\u4ec0\u4e48\u8981\u6267\u884c\u8fd9\u4e00\u6b65\u9aa4-2",level:3}],d={toc:u};function k(e){var t=e.components,n=(0,r.Z)(e,c);return(0,l.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"\u66f4\u65b0\u79c1\u6709-ca-\u8bc1\u4e66"},"\u66f4\u65b0\u79c1\u6709 CA \u8bc1\u4e66"),(0,l.kt)("p",null,"\u672c\u6587\u4ecb\u7ecd\u5982\u4f55\u66f4\u65b0 Rancher ",(0,l.kt)("a",{parentName:"p",href:"/zh/pages-for-subheaders/install-upgrade-on-a-kubernetes-cluster"},"\u9ad8\u53ef\u7528 Kubernetes \u5b89\u88c5")," \u4e2d Ingress \u7684 SSL \u8bc1\u4e66\uff0c\u4ee5\u53ca\u5982\u4f55\u4ece\u9ed8\u8ba4\u7684\u81ea\u7b7e\u540d\u8bc1\u4e66\u5207\u6362\u5230\u81ea\u5b9a\u4e49\u8bc1\u4e66\u3002"),(0,l.kt)("p",null,"\u6b65\u9aa4\u6982\u8ff0\uff1a"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u4f7f\u7528\u65b0\u8bc1\u4e66\u548c\u79c1\u94a5\u521b\u5efa\u6216\u66f4\u65b0 ",(0,l.kt)("inlineCode",{parentName:"li"},"tls-rancher-ingress")," Kubernetes \u5bc6\u6587\u8d44\u6e90\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u4f7f\u7528\u6839 CA \u8bc1\u4e66\u521b\u5efa\u6216\u66f4\u65b0 ",(0,l.kt)("inlineCode",{parentName:"li"},"tls-ca")," Kubernetes \u5bc6\u6587\u8d44\u6e90\uff08\u4ec5\u5728\u4f7f\u7528\u79c1\u6709 CA \u65f6\u9700\u8981\uff09\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u4f7f\u7528 Helm CLI \u66f4\u65b0 Rancher \u5b89\u88c5\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u91cd\u65b0\u914d\u7f6e Rancher Agent \u4ee5\u4fe1\u4efb\u65b0\u7684 CA \u8bc1\u4e66\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u9009\u62e9 Fleet \u96c6\u7fa4\u7684\u5f3a\u5236\u66f4\u65b0\uff0c\u6765\u5c06 fleet-agent \u8fde\u63a5\u5230 Rancher\u3002")),(0,l.kt)("p",null,"\u5404\u4e2a\u6b65\u9aa4\u7684\u8be6\u7ec6\u8bf4\u660e\u5982\u4e0b\u3002"),(0,l.kt)("h2",{id:"1-\u521b\u5efa\u66f4\u65b0\u8bc1\u4e66\u5bc6\u6587\u8d44\u6e90"},"1. \u521b\u5efa/\u66f4\u65b0\u8bc1\u4e66\u5bc6\u6587\u8d44\u6e90"),(0,l.kt)("p",null,"\u9996\u5148\uff0c\u5c06\u670d\u52a1\u5668\u8bc1\u4e66\u548c\u6240\u6709\u4e2d\u95f4\u8bc1\u4e66\u5408\u5e76\u5230\u540d\u4e3a ",(0,l.kt)("inlineCode",{parentName:"p"},"tls.crt")," \u7684\u6587\u4ef6\uff0c\u5e76\u5728\u540d\u4e3a ",(0,l.kt)("inlineCode",{parentName:"p"},"tls.key")," \u7684\u6587\u4ef6\u4e2d\u63d0\u4f9b\u76f8\u5e94\u7684\u8bc1\u4e66\u5bc6\u94a5\u3002"),(0,l.kt)("p",null,"\u5982\u679c\u4f60\u60f3\u5207\u6362 Rancher \u81ea\u7b7e\u540d\u8bc1\u4e66\u6216 Let's Encrypt \u8bc1\u4e66\uff0c\u8bf7\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\uff0c\u5728 Rancher \u9ad8\u53ef\u7528\u96c6\u7fa4\u4e2d\u521b\u5efa ",(0,l.kt)("inlineCode",{parentName:"p"},"tls-rancher-ingress")," \u5bc6\u6587\u8d44\u6e90\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"$ kubectl -n cattle-system create secret tls tls-rancher-ingress \\\n  --cert=tls.crt \\\n  --key=tls.key\n")),(0,l.kt)("p",null,"\u4f60\u4e5f\u53ef\u4ee5\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\uff0c\u66f4\u65b0\u73b0\u6709\u7684\u8bc1\u4e66\u5bc6\u6587\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"$ kubectl -n cattle-system create secret tls tls-rancher-ingress \\\n  --cert=tls.crt \\\n  --key=tls.key \\\n  --dry-run --save-config -o yaml | kubectl apply -f -\n")),(0,l.kt)("h2",{id:"2-\u521b\u5efa\u66f4\u65b0\u8bc1\u4e66-ca-\u5bc6\u6587\u8d44\u6e90"},"2. \u521b\u5efa/\u66f4\u65b0\u8bc1\u4e66 CA \u5bc6\u6587\u8d44\u6e90"),(0,l.kt)("p",null,"\u5982\u679c\u65b0\u8bc1\u4e66\u7531\u79c1\u6709 CA \u7b7e\u53d1\u7684\uff0c\u4f60\u9700\u8981\u5c06\u76f8\u5e94\u7684\u6839 CA \u8bc1\u4e66\u590d\u5236\u5230\u540d\u4e3a ",(0,l.kt)("inlineCode",{parentName:"p"},"cacerts.pem")," \u7684\u6587\u4ef6\u4e2d\uff0c\u5e76\u521b\u5efa\u6216\u66f4\u65b0 ",(0,l.kt)("inlineCode",{parentName:"p"},"cattle-system")," \u547d\u540d\u7a7a\u95f4\u4e2d\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"tls-ca")," \u5bc6\u6587\u3002\u5982\u679c\u8bc1\u4e66\u7531\u4e2d\u95f4 CA \u7b7e\u540d\uff0c\u5219 ",(0,l.kt)("inlineCode",{parentName:"p"},"cacerts.pem")," \u5fc5\u987b\u6309\u987a\u5e8f\u540c\u65f6\u5305\u542b\u4e2d\u95f4 CA \u8bc1\u4e66\u548c\u6839 CA \u8bc1\u4e66\u3002"),(0,l.kt)("p",null,"\u521b\u5efa\u521d\u59cb\u5bc6\u6587\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"$ kubectl -n cattle-system create secret generic tls-ca \\\n  --from-file=cacerts.pem\n")),(0,l.kt)("p",null,"\u8981\u66f4\u65b0\u73b0\u6709\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"tls-ca")," \u5bc6\u6587\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"$ kubectl -n cattle-system create secret generic tls-ca \\\n  --from-file=cacerts.pem \\\n  --dry-run --save-config -o yaml | kubectl apply -f -\n")),(0,l.kt)("h2",{id:"3-\u91cd\u65b0\u914d\u7f6e-rancher-\u90e8\u7f72"},"3. \u91cd\u65b0\u914d\u7f6e Rancher \u90e8\u7f72"),(0,l.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"\u5728\u7ee7\u7eed\u4e4b\u524d\uff0c\u5728 Rancher UI (",(0,l.kt)("b",null,"\u7528\u6237 > API & \u5bc6\u94a5 "),") \u4e2d\u751f\u6210\u4e00\u4e2a API Token\uff0c\u5e76\u4fdd\u5b58\u6301\u6709\u8005 Token\uff08\u4f60\u5728\u6b65\u9aa4 4 \u4e2d\u53ef\u80fd\u9700\u8981\uff09\u3002"))),(0,l.kt)("p",null,"\u53ea\u6709\u5728\u6700\u521d\u5b89\u88c5 Rancher \u65f6\u4f7f\u7528\u4e86\u81ea\u7b7e\u540d\u8bc1\u4e66 \uff08",(0,l.kt)("inlineCode",{parentName:"p"},"ingress.tls.source=rancher"),"\uff09\u6216 Let's Encrypt \u8bc1\u4e66\uff08",(0,l.kt)("inlineCode",{parentName:"p"},"ingress.tls.source=letsEncrypt"),"\uff09\u65f6\uff0c\u4f60\u624d\u9700\u8981\u6267\u884c\u6b64\u6b65\u9aa4\u3002"),(0,l.kt)("p",null,"\u8fd9\u4e00\u6b65\u9aa4\u786e\u4fdd Rancher Pod \u548c Ingress \u8d44\u6e90\u80fd\u591f\u91cd\u65b0\u914d\u7f6e\uff0c\u6765\u4f7f\u7528\u65b0\u7684\u670d\u52a1\u5668\u548c\u53ef\u9009\u7684 CA \u8bc1\u4e66\u3002"),(0,l.kt)("p",null,"\u8981\u66f4\u65b0 Helm \u90e8\u7f72\uff0c\u8bf7\u4f7f\u7528\u521d\u59cb\u5b89\u88c5\u65f6\u7684\u9009\u9879\uff08",(0,l.kt)("inlineCode",{parentName:"p"},"--set"),"\uff09\u3002\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\u68c0\u67e5\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"$ helm get values rancher -n cattle-system\n")),(0,l.kt)("p",null,"\u83b7\u53d6\u5f53\u524d\u90e8\u7f72\u7684 Rancher Chart \u7684\u7248\u672c\u5b57\u7b26\u4e32\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"$ helm ls -A\n")),(0,l.kt)("p",null,"\u4f7f\u7528\u521d\u59cb\u914d\u7f6e\u7684\u503c\u5347\u7ea7 Helm \u5e94\u7528\u5b9e\u4f8b\uff0c\u5e76\u6307\u5b9a ",(0,l.kt)("inlineCode",{parentName:"p"},"ingress.tls.source=secret")," \u4ee5\u53ca\u5f53\u524d\u7684 Chart \u7248\u672c\u6765\u9632\u6b62\u5e94\u7528\u5347\u7ea7\u3002"),(0,l.kt)("p",null,"\u5982\u679c\u8bc1\u4e66\u662f\u7531\u79c1\u6709 CA \u7b7e\u53d1\u7684\uff0c\u4f60\u9700\u8981\u6dfb\u52a0 ",(0,l.kt)("inlineCode",{parentName:"p"},"set privateCA=true")," \u53c2\u6570\u3002\u8bf7\u786e\u4fdd\u4f60\u5df2\u7ecf\u9605\u8bfb\u4e86\u4f7f\u7528\u81ea\u5b9a\u4e49\u8bc1\u4e66\u8fdb\u884c\u521d\u59cb\u5b89\u88c5\u7684\u6587\u6863\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"helm upgrade rancher rancher-stable/rancher \\\n  --namespace cattle-system \\\n  --version <DEPLOYED_CHART_VERSION> \\\n  --set hostname=rancher.my.org \\\n  --set ingress.tls.source=secret \\\n  --set ...\n")),(0,l.kt)("p",null,"\u5347\u7ea7\u5b8c\u6210\u540e\uff0c\u8bbf\u95ee ",(0,l.kt)("inlineCode",{parentName:"p"},"https://<Rancher_SERVER>/v3/settings/cacerts"),"\uff0c\u9a8c\u8bc1\u8be5\u503c\u662f\u5426\u4e0e\u5148\u524d\u5199\u5165 ",(0,l.kt)("inlineCode",{parentName:"p"},"tls-ca")," \u5bc6\u6587\u4e2d\u7684 CA \u8bc1\u4e66\u5339\u914d\u3002"),(0,l.kt)("h2",{id:"4-\u91cd\u65b0\u914d\u7f6e-rancher-agent-\u4ee5\u4fe1\u4efb\u79c1\u6709-ca"},"4. \u91cd\u65b0\u914d\u7f6e Rancher Agent \u4ee5\u4fe1\u4efb\u79c1\u6709 CA"),(0,l.kt)("p",null,"\u672c\u8282\u4ecb\u7ecd\u4e86\u91cd\u65b0\u914d\u7f6e Rancher Agent \u4ee5\u4fe1\u4efb\u79c1\u6709 CA \u7684\u4e09\u79cd\u65b9\u6cd5\u3002\u5982\u679c\u4f60\u7684\u5b9e\u9645\u60c5\u51b5\u7b26\u5408\u4ee5\u4e0b\u4efb\u610f\u4e00\u4e2a\u6761\u4ef6\uff0c\u8bf7\u6267\u884c\u6b64\u6b65\u9aa4\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Rancher \u521d\u59cb\u914d\u7f6e\u4e2d\u4f7f\u7528\u4e86 Rancher \u81ea\u7b7e\u540d\u8bc1\u4e66 (",(0,l.kt)("inlineCode",{parentName:"li"},"ingress.tls.source=rancher"),") \u6216 Let's Encrypt \u8bc1\u4e66 (",(0,l.kt)("inlineCode",{parentName:"li"},"ingress.tls.source=letsEncrypt"),")\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u65b0\u81ea\u5b9a\u4e49\u8bc1\u4e66\u7684\u6839 CA \u8bc1\u4e66\u5df2\u66f4\u6539\u3002")),(0,l.kt)("h3",{id:"\u4e3a\u4ec0\u4e48\u8981\u6267\u884c\u8fd9\u4e00\u6b65\u9aa4"},"\u4e3a\u4ec0\u4e48\u8981\u6267\u884c\u8fd9\u4e00\u6b65\u9aa4\uff1f"),(0,l.kt)("p",null,"\u5982\u679c Rancher \u914d\u7f6e\u4e86\u79c1\u6709 CA \u7b7e\u540d\u7684\u8bc1\u4e66\u65f6\uff0cCA \u8bc1\u4e66\u94fe\u4f1a\u4e0b\u8f7d\u5230 Rancher Agent \u5bb9\u5668\u4e2d\u3002\u4ee3\u7406\u4f1a\u5bf9\u4e0b\u8f7d\u8bc1\u4e66\u7684\u6821\u9a8c\u548c\u53ca ",(0,l.kt)("inlineCode",{parentName:"p"},"CATTLE_CA_CHECKSUM")," \u73af\u5883\u53d8\u91cf\u8fdb\u884c\u6bd4\u8f83\u3002\u5982\u679c\u79c1\u6709 CA \u8bc1\u4e66\u5728 Rancher Server \u7aef\u66f4\u6539\u4e86\uff0c\u73af\u5883\u53d8\u91cf ",(0,l.kt)("inlineCode",{parentName:"p"},"CATTLE_CA_CHECKSUM")," \u5fc5\u987b\u76f8\u5e94\u8fdb\u884c\u66f4\u65b0\u3002"),(0,l.kt)("h3",{id:"\u53ef\u4f7f\u7528\u7684\u65b9\u6cd5"},"\u53ef\u4f7f\u7528\u7684\u65b9\u6cd5"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u65b9\u6cd5 1\uff08\u6700\u7b80\u5355\u7684\u65b9\u6cd5\uff09\uff1a\n\u5728\u8f6e\u6362\u8bc1\u4e66\u540e\u5c06\u6240\u6709\u96c6\u7fa4\u8fde\u63a5\u5230 Rancher\u3002\u9002\u7528\u4e8e\u66f4\u65b0 Rancher \u90e8\u7f72\uff08\u6b65\u9aa4 3\uff09\u540e\u7acb\u5373\u6267\u884c\u7684\u60c5\u51b5\u3002")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u65b9\u6cd5 2\uff1a\u9002\u7528\u4e8e\u96c6\u7fa4\u5931\u53bb\u4e86\u4e0e Rancher \u7684\u8fde\u63a5\uff0c\u4f46\u662f\u4f60\u5df2\u542f\u52a8\u4e86",(0,l.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rancher/v2.6/en/cluster-admin/cluster-access/ace/"},"\u6388\u6743\u96c6\u7fa4\u7aef\u70b9\uff08ACE\uff09"),"\u7684\u60c5\u51b5\u3002")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u65b9\u6cd5 3\uff1a\u65b9\u6cd5 1 \u548c\u65b9\u6cd5 2 \u4e0d\u53ef\u7528\u7684\u60c5\u51b5\u4e0b\u53ef\u4f7f\u7528\u3002"))),(0,l.kt)("h3",{id:"\u65b9\u6cd5-1kubectl-\u547d\u4ee4"},"\u65b9\u6cd5 1\uff1aKubectl \u547d\u4ee4"),(0,l.kt)("p",null,"\u5bf9\u4e8e",(0,l.kt)("strong",{parentName:"p"},"\u96c6\u7fa4\u7ba1\u7406"),"\u4e2d\u7684\u6bcf\u4e2a\u96c6\u7fa4\uff08\u9664\u53bb ",(0,l.kt)("inlineCode",{parentName:"p"},"local")," Rancher \u7ba1\u7406\u96c6\u7fa4\uff09\uff0c\u4f7f\u7528 Rancher \u7ba1\u7406\u96c6\u7fa4\uff08RKE \u6216 K3S\uff09\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"Kubeconfig")," \u6587\u4ef6\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'kubectl patch clusters.management.cattle.io <REPLACE_WITH_CLUSTERID> -p \'{"status":{"agentImage":"dummy"}}\' --type merge\n')),(0,l.kt)("p",null,"\u8fd9\u4e2a\u547d\u4ee4\u80fd\u4f7f\u6240\u6709 Agent Kubernetes \u8d44\u6e90\u4f7f\u7528\u65b0\u8bc1\u4e66\u7684\u6821\u9a8c\u548c\u91cd\u65b0\u914d\u7f6e\u3002"),(0,l.kt)("h3",{id:"\u65b9\u6cd5-2\u624b\u52a8\u66f4\u65b0\u6821\u9a8c\u548c"},"\u65b9\u6cd5 2\uff1a\u624b\u52a8\u66f4\u65b0\u6821\u9a8c\u548c"),(0,l.kt)("p",null,"\u901a\u8fc7\u5c06 ",(0,l.kt)("inlineCode",{parentName:"p"},"CATTLE_CA_CHECKSUM")," \u73af\u5883\u53d8\u91cf\u66f4\u65b0\u4e3a\u5339\u914d\u65b0 CA \u8bc1\u4e66\u6821\u9a8c\u548c\u7684\u503c\uff0c\u6765\u624b\u52a8\u4e3a Agent Kubernetes \u8d44\u6e90\u6253\u4e0a\u8865\u4e01\u3002\u901a\u8fc7\u4ee5\u4e0b\u64cd\u4f5c\u751f\u6210\u65b0\u7684\u6821\u9a8c\u548c\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"$ curl -k -s -fL <RANCHER_SERVER>/v3/settings/cacerts | jq -r .value > cacert.tmp\n$ sha256sum cacert.tmp | awk '{print $1}'\n")),(0,l.kt)("p",null,"\u4e3a\u6bcf\u4e2a\u4e0b\u6e38\u96c6\u7fa4\u4f7f\u7528 Kubeconfig \u66f4\u65b0\u4e24\u4e2a Agent \u90e8\u7f72\u7684\u73af\u5883\u53d8\u91cf\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"$ kubectl edit -n cattle-system ds/cattle-node-agent\n$ kubectl edit -n cattle-system deployment/cattle-cluster-agent\n")),(0,l.kt)("h3",{id:"\u65b9\u6cd5-3\u91cd\u65b0\u521b\u5efa-rancher-agent"},"\u65b9\u6cd5 3\uff1a\u91cd\u65b0\u521b\u5efa Rancher Agent"),(0,l.kt)("p",null,"\u4f60\u53ef\u4ee5\u5728\u6bcf\u4e2a\u4e0b\u6e38\u96c6\u7fa4\u7684 controlplane \u8282\u70b9\u4e0a\u8fd0\u884c\u4e00\u7ec4\u547d\u4ee4\uff0c\u6765\u91cd\u65b0\u521b\u5efa Rancher Agent\u3002"),(0,l.kt)("p",null,"\u9996\u5148\uff0c\u751f\u6210 Agent \u5b9a\u4e49\uff08\u53c2\u89c1",(0,l.kt)("a",{parentName:"p",href:"https://gist.github.com/superseb/076f20146e012f1d4e289f5bd1bd4971"},"\u6b64\u5904"),"\uff09\u3002"),(0,l.kt)("p",null,"\u7136\u540e\uff0cSSH \u8fde\u63a5\u5230\u4e0b\u6e38\u96c6\u7fa4\u7684 controlplane \u8282\u70b9\uff0c\u521b\u5efa Kubeconfig \u5e76\u5e94\u7528\u5b9a\u4e49\uff08\u53c2\u89c1",(0,l.kt)("a",{parentName:"p",href:"https://gist.github.com/superseb/b14ed3b5535f621ad3d2aa6a4cd6443b"},"\u6b64\u5904"),"\uff09\u3002"),(0,l.kt)("h2",{id:"5-\u9009\u62e9-fleet-\u96c6\u7fa4\u7684\u5f3a\u5236\u66f4\u65b0\u6765\u5c06-fleet-agent-\u8fde\u63a5\u5230-rancher"},"5. \u9009\u62e9 Fleet \u96c6\u7fa4\u7684\u5f3a\u5236\u66f4\u65b0\uff0c\u6765\u5c06 fleet-agent \u8fde\u63a5\u5230 Rancher"),(0,l.kt)("p",null,"\u5728 Rancher UI \u7684",(0,l.kt)("a",{parentName:"p",href:"/zh/how-to-guides/new-user-guides/deploy-apps-across-clusters/fleet#%E5%9C%A8-rancher-ui-%E4%B8%AD%E8%AE%BF%E9%97%AE-fleet"},"\u6301\u7eed\u4ea4\u4ed8"),"\u4e2d\uff0c\u4e3a\u96c6\u7fa4\u9009\u62e9\u201c\u5f3a\u5236\u66f4\u65b0\u201d\uff0c\u6765\u5141\u8bb8\u4e0b\u6e38\u96c6\u7fa4\u4e2d\u7684 fleet-agent \u6210\u529f\u8fde\u63a5\u5230 Rancher\u3002"),(0,l.kt)("h3",{id:"\u4e3a\u4ec0\u4e48\u8981\u6267\u884c\u8fd9\u4e00\u6b65\u9aa4-1"},"\u4e3a\u4ec0\u4e48\u8981\u6267\u884c\u8fd9\u4e00\u6b65\u9aa4\uff1f"),(0,l.kt)("p",null,"Rancher \u7ba1\u7406\u7684\u96c6\u7fa4\u4e2d\u7684 Fleet agent \u5b58\u50a8 kubeconfig\uff0c\u8be5\u914d\u7f6e\u7528\u4e8e\u8fde\u63a5\u5230 Fleet \u7cfb\u7edf\u547d\u540d\u7a7a\u95f4\u7684 fleet-agent \u5bc6\u6587\u4e2d\u7684 Rancher \u4ee3\u7406 kube-api\u3002kubeconfig \u5305\u62ec\u4e00\u4e2a\u5305\u542b Rancher CA \u7684\u8bc1\u4e66\u6388\u6743\u6570\u636e\u5757\u3002\u66f4\u6539 Rancher CA \u65f6\uff0c\u9700\u8981\u66f4\u65b0\u6b64\u5757\u6765\u4f7f fleet-agent \u6210\u529f\u8fde\u63a5\u5230 Rancher\u3002"),(0,l.kt)("h1",{id:"\u5c06\u79c1\u6709-ca-\u8bc1\u4e66\u66f4\u6539\u4e3a\u901a\u7528\u8bc1\u4e66"},"\u5c06\u79c1\u6709 CA \u8bc1\u4e66\u66f4\u6539\u4e3a\u901a\u7528\u8bc1\u4e66"),(0,l.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"\u4f60\u53ef\u4ee5\u6267\u884c\u4e0e\u4e0a\u6587\u63cf\u8ff0\u76f8\u53cd\u7684\u64cd\u4f5c\uff0c\u5373\u5c06\u79c1\u6709\u8bc1\u4e66\u66f4\u6539\u4e3a\u901a\u7528\u6216\u975e\u79c1\u6709\u8bc1\u4e66\u3002\u6240\u6d89\u53ca\u7684\u6b65\u9aa4\u6982\u8ff0\u5982\u4e0b\u3002"))),(0,l.kt)("h2",{id:"1-\u521b\u5efa\u66f4\u65b0\u8bc1\u4e66\u5bc6\u6587\u8d44\u6e90-1"},"1. \u521b\u5efa/\u66f4\u65b0\u8bc1\u4e66\u5bc6\u6587\u8d44\u6e90"),(0,l.kt)("p",null,"\u9996\u5148\uff0c\u5c06\u670d\u52a1\u5668\u8bc1\u4e66\u548c\u6240\u6709\u4e2d\u95f4\u8bc1\u4e66\u5408\u5e76\u5230\u540d\u4e3a ",(0,l.kt)("inlineCode",{parentName:"p"},"tls.crt")," \u7684\u6587\u4ef6\uff0c\u5e76\u5728\u540d\u4e3a ",(0,l.kt)("inlineCode",{parentName:"p"},"tls.key")," \u7684\u6587\u4ef6\u4e2d\u63d0\u4f9b\u76f8\u5e94\u7684\u8bc1\u4e66\u5bc6\u94a5\u3002"),(0,l.kt)("p",null,"\u5982\u679c\u4f60\u60f3\u5207\u6362 Rancher \u81ea\u7b7e\u540d\u8bc1\u4e66\u6216 Let's Encrypt \u8bc1\u4e66\uff0c\u8bf7\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\uff0c\u5728 Rancher \u9ad8\u53ef\u7528\u96c6\u7fa4\u4e2d\u521b\u5efa ",(0,l.kt)("inlineCode",{parentName:"p"},"tls-rancher-ingress")," \u5bc6\u6587\u8d44\u6e90\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"$ kubectl -n cattle-system create secret tls tls-rancher-ingress \\\n  --cert=tls.crt \\\n  --key=tls.key\n")),(0,l.kt)("p",null,"\u4f60\u4e5f\u53ef\u4ee5\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\uff0c\u66f4\u65b0\u73b0\u6709\u7684\u8bc1\u4e66\u5bc6\u6587\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"$ kubectl -n cattle-system create secret tls tls-rancher-ingress \\\n  --cert=tls.crt \\\n  --key=tls.key \\\n  --dry-run --save-config -o yaml | kubectl apply -f -\n")),(0,l.kt)("h2",{id:"2-\u5220\u9664-ca-\u8bc1\u4e66\u5bc6\u6587\u8d44\u6e90"},"2. \u5220\u9664 CA \u8bc1\u4e66\u5bc6\u6587\u8d44\u6e90"),(0,l.kt)("p",null,"\u4f60\u9700\u8981\u5220\u9664 ",(0,l.kt)("inlineCode",{parentName:"p"},"cattle-system")," \u547d\u540d\u7a7a\u95f4\u4e2d\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"tls-ca secret"),"\uff08\u4e0d\u518d\u9700\u8981\u5b83\uff09\u3002\u5982\u679c\u9700\u8981\uff0c\u4f60\u8fd8\u53ef\u4ee5\u9009\u62e9\u4fdd\u5b58 ",(0,l.kt)("inlineCode",{parentName:"p"},"tls-ca secret")," \u7684\u526f\u672c\u3002"),(0,l.kt)("p",null,"\u8981\u4fdd\u5b58\u73b0\u6709\u5bc6\u6587\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"kubectl -n cattle-system get secret tls-ca -o yaml > tls-ca.yaml\n")),(0,l.kt)("p",null,"\u8981\u5220\u9664\u73b0\u6709\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"tls-ca")," \u5bc6\u6587\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"kubectl -n cattle-system delete secret tls-ca\n")),(0,l.kt)("h2",{id:"3-\u91cd\u65b0\u914d\u7f6e-rancher-\u90e8\u7f72-1"},"3. \u91cd\u65b0\u914d\u7f6e Rancher \u90e8\u7f72"),(0,l.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"\u91cd\u8981\u63d0\u793a\uff1a")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"\u5728\u7ee7\u7eed\u4e4b\u524d\uff0c\u5148",(0,l.kt)("a",{parentName:"p",href:"/zh/reference-guides/user-settings/api-keys#%E5%88%9B%E5%BB%BA-api-%E5%AF%86%E9%92%A5"},"\u5728 Rancher UI \u4e2d\u751f\u6210 API \u4ee4\u724c"),"\uff08\u5728 ",(0,l.kt)("b",null,"User > API & Keys")," \u4e2d\uff09\u3002"))),(0,l.kt)("p",null,"\u53ea\u6709\u5728\u6700\u521d\u5b89\u88c5 Rancher \u65f6\u4f7f\u7528\u4e86\u81ea\u7b7e\u540d\u8bc1\u4e66 \uff08",(0,l.kt)("inlineCode",{parentName:"p"},"ingress.tls.source=rancher"),"\uff09\u6216 Let's Encrypt \u8bc1\u4e66\uff08",(0,l.kt)("inlineCode",{parentName:"p"},"ingress.tls.source=letsEncrypt"),"\uff09\u65f6\uff0c\u4f60\u624d\u9700\u8981\u6267\u884c\u6b64\u6b65\u9aa4\u3002"),(0,l.kt)("p",null,"\u8fd9\u4e00\u6b65\u9aa4\u786e\u4fdd Rancher Pod \u548c Ingress \u8d44\u6e90\u80fd\u591f\u91cd\u65b0\u914d\u7f6e\uff0c\u6765\u4f7f\u7528\u65b0\u7684\u670d\u52a1\u5668\u548c\u53ef\u9009\u7684 CA \u8bc1\u4e66\u3002"),(0,l.kt)("p",null,"\u8981\u66f4\u65b0 Helm \u90e8\u7f72\uff0c\u8bf7\u4f7f\u7528\u521d\u59cb\u5b89\u88c5\u65f6\u7684\u9009\u9879\uff08",(0,l.kt)("inlineCode",{parentName:"p"},"--set"),"\uff09\u3002\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\u68c0\u67e5\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"$ helm get values rancher -n cattle-system\n")),(0,l.kt)("p",null,"\u83b7\u53d6\u5f53\u524d\u90e8\u7f72\u7684 Rancher Chart \u7684\u7248\u672c\u5b57\u7b26\u4e32\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"$ helm ls -A\n")),(0,l.kt)("p",null,"\u4f7f\u7528\u521d\u59cb\u914d\u7f6e\u7684\u503c\u5347\u7ea7 Helm \u5e94\u7528\u7a0b\u5e8f\u5b9e\u4f8b\uff0c\u5e76\u6307\u5b9a\u5f53\u524d\u7684 Chart \u7248\u672c\u4ee5\u9632\u6b62\u5e94\u7528\u7a0b\u5e8f\u5347\u7ea7\u3002"),(0,l.kt)("p",null,"\u8bf7\u786e\u4fdd\u4f60\u5df2\u7ecf\u9605\u8bfb\u4e86\u4f7f\u7528\u81ea\u5b9a\u4e49\u8bc1\u4e66\u8fdb\u884c\u521d\u59cb\u5b89\u88c5\u7684\u6587\u6863\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"helm upgrade rancher rancher-stable/rancher \\\n  --namespace cattle-system \\\n  --version <DEPLOYED_CHART_VERSION> \\\n  --set hostname=rancher.my.org \\\n  --set ...\n")),(0,l.kt)("p",null,"\u5347\u7ea7\u65f6\uff0c\u4f60\u53ef\u4ee5\u6267\u884c\u4ee5\u4e0b\u5176\u4e2d\u4e00\u4e2a\u64cd\u4f5c\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u4ece Helm \u5347\u7ea7\u547d\u4ee4\u4e2d\u5220\u9664 ",(0,l.kt)("inlineCode",{parentName:"p"},"--set ingress.tls.source=secret \\"),"\uff0c\u5982\u4e0a\u6240\u793a\u3002")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u5220\u9664 ",(0,l.kt)("inlineCode",{parentName:"p"},"privateCA")," \u53c2\u6570\u6216\u5c06\u5176\u8bbe\u7f6e\u4e3a ",(0,l.kt)("inlineCode",{parentName:"p"},"false")," \uff08\u56e0\u4e3a CA \u6709\u6548\uff09\uff1a"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"set privateCA=false\n")),(0,l.kt)("h2",{id:"4-\u4e3a\u975e\u79c1\u6709\u901a\u7528\u8bc1\u4e66\u91cd\u65b0\u914d\u7f6e-rancher-agent"},"4. \u4e3a\u975e\u79c1\u6709/\u901a\u7528\u8bc1\u4e66\u91cd\u65b0\u914d\u7f6e Rancher Agent"),(0,l.kt)("p",null,"\u4e0b\u6e38\u96c6\u7fa4 Agent \u4e0a\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"CATTLE_CA_CHECKSUM")," \u73af\u5883\u53d8\u91cf\u5e94\u8be5\u88ab\u5220\u9664\u6216\u8bbe\u7f6e\u4e3a\u201c\u201d\uff08\u4e00\u4e2a\u7a7a\u5b57\u7b26\u4e32\uff09\u3002"),(0,l.kt)("h2",{id:"5-\u9009\u62e9-fleet-\u96c6\u7fa4\u7684\u5f3a\u5236\u66f4\u65b0\u6765\u5c06-fleet-agent-\u8fde\u63a5\u5230-rancher-1"},"5. \u9009\u62e9 Fleet \u96c6\u7fa4\u7684\u5f3a\u5236\u66f4\u65b0\uff0c\u6765\u5c06 fleet-agent \u8fde\u63a5\u5230 Rancher"),(0,l.kt)("p",null,"\u5728 Rancher UI \u7684",(0,l.kt)("a",{parentName:"p",href:"/zh/how-to-guides/new-user-guides/deploy-apps-across-clusters/fleet#%E5%9C%A8-rancher-ui-%E4%B8%AD%E8%AE%BF%E9%97%AE-fleet"},"\u6301\u7eed\u4ea4\u4ed8"),"\u4e2d\uff0c\u4e3a\u96c6\u7fa4\u9009\u62e9\u201c\u5f3a\u5236\u66f4\u65b0\u201d\uff0c\u6765\u5141\u8bb8\u4e0b\u6e38\u96c6\u7fa4\u4e2d\u7684 fleet-agent \u6210\u529f\u8fde\u63a5\u5230 Rancher\u3002"),(0,l.kt)("h3",{id:"\u4e3a\u4ec0\u4e48\u8981\u6267\u884c\u8fd9\u4e00\u6b65\u9aa4-2"},"\u4e3a\u4ec0\u4e48\u8981\u6267\u884c\u8fd9\u4e00\u6b65\u9aa4\uff1f"),(0,l.kt)("p",null,"Rancher \u7ba1\u7406\u7684\u96c6\u7fa4\u4e2d\u7684 Fleet agent \u5b58\u50a8 kubeconfig\uff0c\u8be5\u914d\u7f6e\u7528\u4e8e\u8fde\u63a5\u5230 Fleet \u7cfb\u7edf\u547d\u540d\u7a7a\u95f4\u7684 fleet-agent \u5bc6\u6587\u4e2d\u7684 Rancher \u4ee3\u7406 kube-api\u3002kubeconfig \u5305\u62ec\u4e00\u4e2a\u5305\u542b Rancher CA \u7684\u8bc1\u4e66\u6388\u6743\u6570\u636e\u5757\u3002\u66f4\u6539 Rancher CA \u65f6\uff0c\u9700\u8981\u66f4\u65b0\u6b64\u5757\u6765\u4f7f fleet-agent \u6210\u529f\u8fde\u63a5\u5230 Rancher\u3002"))}k.isMDXComponent=!0}}]);