"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[18138],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),d=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=d(e.components);return a.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=d(n),m=r,h=u["".concat(p,".").concat(m)]||u[m]||s[m]||i;return n?a.createElement(h,l(l({ref:t},c),{},{components:n})):a.createElement(h,l({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=u;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var d=2;d<i;d++)l[d]=n[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},61347:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return o},metadata:function(){return d},toc:function(){return s}});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),l=["components"],o={title:"7 \u5c42 NGINX \u8d1f\u8f7d\u5747\u8861\u5668\u4e0a\u7684 TLS \u7ec8\u6b62\uff08Docker \u5b89\u88c5\uff09",weight:252},p=void 0,d={unversionedId:"getting-started/installation-and-upgrade/advanced-options/advanced-use-cases/configure-layer-7-nginx-load-balancer",id:"getting-started/installation-and-upgrade/advanced-options/advanced-use-cases/configure-layer-7-nginx-load-balancer",title:"7 \u5c42 NGINX \u8d1f\u8f7d\u5747\u8861\u5668\u4e0a\u7684 TLS \u7ec8\u6b62\uff08Docker \u5b89\u88c5\uff09",description:"\u5982\u679c\u4f60\u7684\u5f00\u53d1\u6216\u6d4b\u8bd5\u73af\u5883\u8981\u6c42\u5728\u8d1f\u8f7d\u5747\u8861\u5668\u4e0a\u7ec8\u6b62 TLS/SSL\uff0c\u800c\u4e0d\u662f\u5728 Rancher Server \u4e0a\uff0c\u8bf7\u90e8\u7f72 Rancher \u5e76\u914d\u7f6e\u8d1f\u8f7d\u5747\u8861\u5668\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/getting-started/installation-and-upgrade/advanced-options/advanced-use-cases/configure-layer-7-nginx-load-balancer.md",sourceDirName:"getting-started/installation-and-upgrade/advanced-options/advanced-use-cases",slug:"/getting-started/installation-and-upgrade/advanced-options/advanced-use-cases/configure-layer-7-nginx-load-balancer",permalink:"/zh/getting-started/installation-and-upgrade/advanced-options/advanced-use-cases/configure-layer-7-nginx-load-balancer",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/getting-started/installation-and-upgrade/advanced-options/advanced-use-cases/configure-layer-7-nginx-load-balancer.md",tags:[],version:"current",lastUpdatedAt:1663691987,formattedLastUpdatedAt:"2022/9/20",frontMatter:{title:"7 \u5c42 NGINX \u8d1f\u8f7d\u5747\u8861\u5668\u4e0a\u7684 TLS \u7ec8\u6b62\uff08Docker \u5b89\u88c5\uff09",weight:252},sidebar:"tutorialSidebar",previous:{title:"\u542f\u7528 API \u5ba1\u8ba1\u65e5\u5fd7\u4ee5\u8bb0\u5f55\u7cfb\u7edf\u4e8b\u4ef6",permalink:"/zh/getting-started/installation-and-upgrade/advanced-options/advanced-use-cases/enable-api-audit-log"},next:{title:"\u64cd\u4f5c\u6307\u5357",permalink:"/zh/how-to-guides"}},c={},s=[{value:"\u64cd\u4f5c\u7cfb\u7edf\uff0cDocker\uff0c\u786c\u4ef6\u548c\u7f51\u7edc\u8981\u6c42",id:"\u64cd\u4f5c\u7cfb\u7edfdocker\u786c\u4ef6\u548c\u7f51\u7edc\u8981\u6c42",level:2},{value:"\u5b89\u88c5\u6982\u8981",id:"\u5b89\u88c5\u6982\u8981",level:2},{value:"1. \u914d\u7f6e Linux \u4e3b\u673a",id:"1-\u914d\u7f6e-linux-\u4e3b\u673a",level:2},{value:"2. \u9009\u62e9\u4e00\u4e2a SSL \u9009\u9879\u5e76\u5b89\u88c5 Rancher",id:"2-\u9009\u62e9\u4e00\u4e2a-ssl-\u9009\u9879\u5e76\u5b89\u88c5-rancher",level:2},{value:"3. \u914d\u7f6e\u8d1f\u8f7d\u5747\u8861\u5668",id:"3-\u914d\u7f6e\u8d1f\u8f7d\u5747\u8861\u5668",level:2},{value:"\u793a\u4f8b NGINX \u914d\u7f6e",id:"\u793a\u4f8b-nginx-\u914d\u7f6e",level:3},{value:"\u540e\u7eed\u64cd\u4f5c",id:"\u540e\u7eed\u64cd\u4f5c",level:2},{value:"\u5e38\u89c1\u95ee\u9898\u548c\u6545\u969c\u6392\u9664",id:"\u5e38\u89c1\u95ee\u9898\u548c\u6545\u969c\u6392\u9664",level:2},{value:"\u9ad8\u7ea7\u9009\u9879",id:"\u9ad8\u7ea7\u9009\u9879",level:2},{value:"API \u5ba1\u8ba1",id:"api-\u5ba1\u8ba1",level:3},{value:"\u79bb\u7ebf\u73af\u5883",id:"\u79bb\u7ebf\u73af\u5883",level:3},{value:"\u6301\u4e45\u5316\u6570\u636e",id:"\u6301\u4e45\u5316\u6570\u636e",level:3}],u={toc:s};function m(e){var t=e.components,n=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\u5982\u679c\u4f60\u7684\u5f00\u53d1\u6216\u6d4b\u8bd5\u73af\u5883\u8981\u6c42\u5728\u8d1f\u8f7d\u5747\u8861\u5668\u4e0a\u7ec8\u6b62 TLS/SSL\uff0c\u800c\u4e0d\u662f\u5728 Rancher Server \u4e0a\uff0c\u8bf7\u90e8\u7f72 Rancher \u5e76\u914d\u7f6e\u8d1f\u8f7d\u5747\u8861\u5668\u3002"),(0,i.kt)("p",null,"\u5982\u679c\u8981\u5728\u57fa\u7840\u8bbe\u65bd\u4e2d\u5bf9 TLS \u96c6\u4e2d\u8fdb\u884c\u7ec8\u6b62\uff0c\u8bf7\u4f7f\u7528 7 \u5c42\u8d1f\u8f7d\u5747\u8861\u5668\u30027 \u5c42\u8d1f\u8f7d\u5747\u8861\u8fd8\u80fd\u8ba9\u4f60\u7684\u8d1f\u8f7d\u5747\u8861\u5668\u57fa\u4e8e HTTP \u5c5e\u6027\uff08\u4f8b\u5982 cookie \u7b49\uff09\u505a\u51fa\u51b3\u7b56\uff0c\u800c 4 \u5c42\u8d1f\u8f7d\u5747\u8861\u5668\u5219\u4e0d\u80fd\u3002"),(0,i.kt)("p",null,"\u672c\u6587\u4e2d\u7684\u5b89\u88c5\u6b65\u9aa4\u5c06\u5f15\u5bfc\u4f60\u4f7f\u7528\u5355\u4e2a\u5bb9\u5668\u90e8\u7f72 Rancher\uff0c\u5e76\u63d0\u4f9b 7 \u5c42 NGINX \u8d1f\u8f7d\u5747\u8861\u5668\u7684\u793a\u4f8b\u914d\u7f6e\u3002"),(0,i.kt)("h2",{id:"\u64cd\u4f5c\u7cfb\u7edfdocker\u786c\u4ef6\u548c\u7f51\u7edc\u8981\u6c42"},"\u64cd\u4f5c\u7cfb\u7edf\uff0cDocker\uff0c\u786c\u4ef6\u548c\u7f51\u7edc\u8981\u6c42"),(0,i.kt)("p",null,"\u8bf7\u786e\u4fdd\u4f60\u7684\u8282\u70b9\u6ee1\u8db3\u5e38\u89c4\u7684",(0,i.kt)("a",{parentName:"p",href:"/zh/pages-for-subheaders/installation-requirements"},"\u5b89\u88c5\u8981\u6c42"),"\u3002"),(0,i.kt)("h2",{id:"\u5b89\u88c5\u6982\u8981"},"\u5b89\u88c5\u6982\u8981"),(0,i.kt)("h2",{id:"1-\u914d\u7f6e-linux-\u4e3b\u673a"},"1. \u914d\u7f6e Linux \u4e3b\u673a"),(0,i.kt)("p",null,"\u6839\u636e\u6211\u4eec\u7684",(0,i.kt)("a",{parentName:"p",href:"/zh/pages-for-subheaders/installation-requirements"},"\u8981\u6c42"),"\u914d\u7f6e\u4e00\u4e2a Linux \u4e3b\u673a\u6765\u542f\u52a8 Rancher Server\u3002"),(0,i.kt)("h2",{id:"2-\u9009\u62e9\u4e00\u4e2a-ssl-\u9009\u9879\u5e76\u5b89\u88c5-rancher"},"2. \u9009\u62e9\u4e00\u4e2a SSL \u9009\u9879\u5e76\u5b89\u88c5 Rancher"),(0,i.kt)("p",null,"\u51fa\u4e8e\u5b89\u5168\u8003\u8651\uff0c\u4f7f\u7528 Rancher \u65f6\u8bf7\u4f7f\u7528 SSL\uff08Secure Sockets Layer\uff09\u3002SSL \u4fdd\u62a4\u6240\u6709 Rancher \u7f51\u7edc\u901a\u4fe1\uff08\u5982\u767b\u5f55\u548c\u4e0e\u96c6\u7fa4\u4ea4\u4e92\uff09\u7684\u5b89\u5168\u3002"),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"\u4f60\u662f\u5426\u9700\u8981\uff1a")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},"\u5b8c\u6210\u79bb\u7ebf\u5b89\u88c5\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u8bb0\u5f55\u6240\u6709 Rancher API \u7684\u4e8b\u52a1\u3002")),(0,i.kt)("p",{parentName:"div"},"\u7ee7\u7eed\u4e4b\u524d\uff0c\u8bf7\u53c2\u89c1",(0,i.kt)("a",{parentName:"p",href:"#%E9%AB%98%E7%BA%A7%E9%80%89%E9%A1%B9"},"\u9ad8\u7ea7\u9009\u9879"),"\u3002"))),(0,i.kt)("p",null,"\u9009\u62e9\u4ee5\u4e0b\u7684\u9009\u9879\u4e4b\u4e00\uff1a"),(0,i.kt)("details",{id:"option-a"},(0,i.kt)("summary",null,"\u9009\u9879 A\uff1a\u4f7f\u7528\u4f60\u81ea\u5df1\u7684\u8bc1\u4e66 - \u81ea\u7b7e\u540d"),(0,i.kt)("p",null,"\u5982\u679c\u8981\u4f7f\u7528\u81ea\u7b7e\u540d\u8bc1\u4e66\u6765\u52a0\u5bc6\u901a\u4fe1\uff0c\u4f60\u5fc5\u987b\u5728\u8d1f\u8f7d\u5747\u8861\u5668\uff08\u540e\u7eed\u6b65\u9aa4\uff09\u548c Rancher \u5bb9\u5668\u4e0a\u5b89\u88c5\u8bc1\u4e66\u3002\u8fd0\u884c Docker \u547d\u4ee4\u90e8\u7f72 Rancher\uff0c\u5c06 Docker \u6307\u5411\u4f60\u7684\u8bc1\u4e66\u3002"),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"\u5148\u51b3\u6761\u4ef6\uff1a")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u521b\u5efa\u81ea\u7b7e\u540d\u8bc1\u4e66\u3002"),(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},"\u8bc1\u4e66\u6587\u4ef6\u7684\u683c\u5f0f\u5fc5\u987b\u662f PEM\u3002")))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u4f7f\u7528\u81ea\u7b7e\u540d\u8bc1\u4e66\u5b89\u88c5 Rancher"),"\uff1a"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u5728\u8fd0\u884c Docker \u547d\u4ee4\u90e8\u7f72 Rancher \u65f6\uff0c\u5c06 Docker \u6307\u5411\u4f60\u7684 CA \u8bc1\u4e66\u6587\u4ef6\u3002"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"docker run -d --restart=unless-stopped \\\n  -p 80:80 -p 443:443 \\\n  -v /etc/your_certificate_directory/cacerts.pem:/etc/rancher/ssl/cacerts.pem \\\n  rancher/rancher:latest\n"))))),(0,i.kt)("details",{id:"option-b"},(0,i.kt)("summary",null,"\u9009\u9879 B\uff1a\u4f7f\u7528\u4f60\u81ea\u5df1\u7684\u8bc1\u4e66 - \u53ef\u4fe1 CA \u7b7e\u540d\u7684\u8bc1\u4e66"),(0,i.kt)("p",null,"\u5982\u679c\u4f60\u7684\u96c6\u7fa4\u9762\u5411\u516c\u4f17\uff0c\u5219\u6700\u597d\u4f7f\u7528\u7531\u516c\u8ba4 CA \u7b7e\u7f72\u7684\u8bc1\u4e66\u3002"),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"\u5148\u51b3\u6761\u4ef6\uff1a")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},"\u8bc1\u4e66\u6587\u4ef6\u7684\u683c\u5f0f\u5fc5\u987b\u662f PEM\u3002")))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u4f7f\u7528\u6388\u4fe1 CA \u7b7e\u53d1\u7684\u8bc1\u4e66\u5b89\u88c5 Rancher"),"\uff1a"),(0,i.kt)("p",null,"\u5982\u679c\u4f60\u4f7f\u7528\u6388\u4fe1 CA \u7b7e\u53d1\u7684\u8bc1\u4e66\uff0c\u4f60\u65e0\u9700\u5728 Rancher \u5bb9\u5668\u4e2d\u5b89\u88c5\u8bc1\u4e66\u3002\u4f46\u662f\uff0c\u8bf7\u786e\u4fdd\u4e0d\u8981\u751f\u6210\u548c\u5b58\u50a8\u9ed8\u8ba4\u7684 CA \u8bc1\u4e66\uff08\u4f60\u53ef\u4ee5\u901a\u8fc7\u5c06 ",(0,i.kt)("inlineCode",{parentName:"p"},"--no-cacerts")," \u53c2\u6570\u4f20\u9012\u7ed9\u5bb9\u5668\u6765\u5b9e\u73b0\uff09\u3002"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u8f93\u5165\u4ee5\u4e0b\u547d\u4ee4\uff1a"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"docker run -d --restart=unless-stopped \\\n-p 80:80 -p 443:443 \\\nrancher/rancher:latest --no-cacerts\n"))))),(0,i.kt)("h2",{id:"3-\u914d\u7f6e\u8d1f\u8f7d\u5747\u8861\u5668"},"3. \u914d\u7f6e\u8d1f\u8f7d\u5747\u8861\u5668"),(0,i.kt)("p",null,"\u5728 Rancher \u5bb9\u5668\u524d\u4f7f\u7528\u8d1f\u8f7d\u5747\u8861\u5668\u65f6\uff0c\u5bb9\u5668\u65e0\u9700\u4ece\u7aef\u53e3 80 \u6216\u7aef\u53e3 443 \u91cd\u5b9a\u5411\u7aef\u53e3\u901a\u4fe1\u3002\u4f60\u53ef\u4ee5\u901a\u8fc7\u4f20\u9012 ",(0,i.kt)("inlineCode",{parentName:"p"},"X-Forwarded-Proto: https")," \u6807\u5934\u7981\u7528\u6b64\u91cd\u5b9a\u5411\u3002"),(0,i.kt)("p",null,"\u8d1f\u8f7d\u5747\u8861\u5668\u6216\u4ee3\u7406\u5fc5\u987b\u652f\u6301\u4ee5\u4e0b\u5185\u5bb9\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"WebSocket")," \u8fde\u63a5")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"SPDY")," / ",(0,i.kt)("strong",{parentName:"p"},"HTTP/2")," \u534f\u8bae")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u4f20\u9012/\u8bbe\u7f6e\u4ee5\u4e0b\u6807\u5934\uff1a"),(0,i.kt)("table",{parentName:"li"},(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"\u6807\u5934"),(0,i.kt)("th",{parentName:"tr",align:null},"\u503c"),(0,i.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Host")),(0,i.kt)("td",{parentName:"tr",align:null},"\u7528\u4e8e\u8bbf\u95ee Rancher \u7684\u4e3b\u673a\u540d\u3002"),(0,i.kt)("td",{parentName:"tr",align:null},"\u8bc6\u522b\u5ba2\u6237\u7aef\u6240\u8bf7\u6c42\u7684\u670d\u52a1\u5668\u3002")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"X-Forwarded-Proto")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"https")),(0,i.kt)("td",{parentName:"tr",align:null},"\u8bc6\u522b\u5ba2\u6237\u7aef\u8fde\u63a5\u8d1f\u8f7d\u5747\u8861\u5668\u6216\u4ee3\u7406\u65f6\u6240\u7528\u7684\u534f\u8bae\u3002",(0,i.kt)("br",null),(0,i.kt)("br",null),(0,i.kt)("strong",{parentName:"td"},"\u6ce8\u610f"),"\uff1a\u5982\u679c\u6b64\u6807\u5934\u5b58\u5728\uff0c",(0,i.kt)("inlineCode",{parentName:"td"},"rancher/rancher")," \u4e0d\u4f1a\u5c06 HTTP \u91cd\u5b9a\u5411\u5230 HTTPS\u3002")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"X-Forwarded-Port")),(0,i.kt)("td",{parentName:"tr",align:null},"\u7528\u4e8e\u8bbf\u95ee Rancher \u7684\u7aef\u53e3\u3002"),(0,i.kt)("td",{parentName:"tr",align:null},"\u8bc6\u522b\u5ba2\u6237\u7aef\u8fde\u63a5\u5230\u8d1f\u8f7d\u5747\u8861\u5668\u6216\u4ee3\u7406\u65f6\u6240\u7528\u7684\u7aef\u53e3\u3002")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"X-Forwarded-For")),(0,i.kt)("td",{parentName:"tr",align:null},"\u5ba2\u6237\u7aef IP \u5730\u5740"),(0,i.kt)("td",{parentName:"tr",align:null},"\u8bc6\u522b\u5ba2\u6237\u7aef\u7684\u539f\u59cb IP \u5730\u5740\u3002")))))),(0,i.kt)("h3",{id:"\u793a\u4f8b-nginx-\u914d\u7f6e"},"\u793a\u4f8b NGINX \u914d\u7f6e"),(0,i.kt)("p",null,"\u6b64 NGINX \u914d\u7f6e\u5df2\u5728 NGINX 1.14 \u4e0a\u8fdb\u884c\u4e86\u6d4b\u8bd5\u3002"),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u6b64 NGINX \u914d\u7f6e\u53ea\u662f\u4e00\u4e2a\u793a\u4f8b\uff0c\u53ef\u80fd\u4e0d\u9002\u5408\u4f60\u7684\u73af\u5883\u3002\u5982\u9700\u67e5\u9605\u5b8c\u6574\u6587\u6863\uff0c\u8bf7\u53c2\u89c1 ",(0,i.kt)("a",{parentName:"p",href:"https://docs.nginx.com/nginx/admin-guide/load-balancer/http-load-balancer/"},"NGINX \u8d1f\u8f7d\u5747\u8861 - HTTP \u8d1f\u8f7d\u5747\u8861"),"\u3002"))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u5c06 ",(0,i.kt)("inlineCode",{parentName:"li"},"rancher-server")," \u66ff\u6362\u4e3a\u8fd0\u884c Rancher \u5bb9\u5668\u7684\u8282\u70b9\u7684 IP \u6216\u4e3b\u673a\u540d\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u5c06\u4e24\u5904\u7684 ",(0,i.kt)("inlineCode",{parentName:"li"},"FQDN")," \u5747\u66ff\u6362\u4e3a Rancher \u7684 DNS \u540d\u79f0\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u628a ",(0,i.kt)("inlineCode",{parentName:"li"},"/certs/fullchain.pem")," \u548c ",(0,i.kt)("inlineCode",{parentName:"li"},"/certs/privkey.pem")," \u5206\u522b\u66ff\u6362\u4e3a\u670d\u52a1\u5668\u8bc1\u4e66\u548c\u670d\u52a1\u5668\u8bc1\u4e66\u5bc6\u94a5\u7684\u4f4d\u7f6e\u3002")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"worker_processes 4;\nworker_rlimit_nofile 40000;\n\nevents {\n    worker_connections 8192;\n}\n\nhttp {\n    upstream rancher {\n        server rancher-server:80;\n    }\n\n    map $http_upgrade $connection_upgrade {\n        default Upgrade;\n        ''      close;\n    }\n\n    server {\n        listen 443 ssl http2;\n        server_name FQDN;\n        ssl_certificate /certs/fullchain.pem;\n        ssl_certificate_key /certs/privkey.pem;\n\n        location / {\n            proxy_set_header Host $host;\n            proxy_set_header X-Forwarded-Proto $scheme;\n            proxy_set_header X-Forwarded-Port $server_port;\n            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;\n            proxy_pass http://rancher;\n            proxy_http_version 1.1;\n            proxy_set_header Upgrade $http_upgrade;\n            proxy_set_header Connection $connection_upgrade;\n            # \u6b64\u9879\u5141\u8bb8\u6267\u884c\u7684 shell \u7a97\u53e3\u4fdd\u6301\u5f00\u542f\uff0c\u6700\u957f\u53ef\u8fbe15\u5206\u949f\u3002\u4e0d\u4f7f\u7528\u6b64\u53c2\u6570\u7684\u8bdd\uff0c\u9ed8\u8ba41\u5206\u949f\u540e\u81ea\u52a8\u5173\u95ed\u3002\n            proxy_read_timeout 900s;\n            proxy_buffering off;\n        }\n    }\n\n    server {\n        listen 80;\n        server_name FQDN;\n        return 301 https://$server_name$request_uri;\n    }\n}\n")),(0,i.kt)("br",null),(0,i.kt)("h2",{id:"\u540e\u7eed\u64cd\u4f5c"},"\u540e\u7eed\u64cd\u4f5c"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"\u63a8\u8350"),"\uff1a\u68c0\u67e5\u5355\u8282\u70b9",(0,i.kt)("a",{parentName:"li",href:"/zh/how-to-guides/new-user-guides/backup-restore-and-disaster-recovery/back-up-docker-installed-rancher"},"\u5907\u4efd"),"\u548c",(0,i.kt)("a",{parentName:"li",href:"/zh/how-to-guides/new-user-guides/backup-restore-and-disaster-recovery/restore-docker-installed-rancher"},"\u6062\u590d"),"\u3002\u4f60\u53ef\u80fd\u6682\u65f6\u6ca1\u6709\u9700\u8981\u5907\u4efd\u7684\u6570\u636e\uff0c\u4f46\u662f\u6211\u4eec\u5efa\u8bae\u4f60\u5728\u5e38\u89c4\u4f7f\u7528 Rancher \u540e\u521b\u5efa\u5907\u4efd\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u521b\u5efa Kubernetes \u96c6\u7fa4\uff1a",(0,i.kt)("a",{parentName:"li",href:"/zh/pages-for-subheaders/kubernetes-clusters-in-rancher-setup"},"\u914d\u7f6e Kubernetes \u96c6\u7fa4"),"\u3002")),(0,i.kt)("br",null),(0,i.kt)("h2",{id:"\u5e38\u89c1\u95ee\u9898\u548c\u6545\u969c\u6392\u9664"},"\u5e38\u89c1\u95ee\u9898\u548c\u6545\u969c\u6392\u9664"),(0,i.kt)("p",null,"\u5982\u679c\u4f60\u9700\u8981\u5bf9\u8bc1\u4e66\u8fdb\u884c\u6545\u969c\u6392\u9664\uff0c\u8bf7\u53c2\u89c1",(0,i.kt)("a",{parentName:"p",href:"/zh/getting-started/installation-and-upgrade/other-installation-methods/rancher-on-a-single-node-with-docker/certificate-troubleshooting"},"\u6b64\u7ae0\u8282"),"\u3002"),(0,i.kt)("h2",{id:"\u9ad8\u7ea7\u9009\u9879"},"\u9ad8\u7ea7\u9009\u9879"),(0,i.kt)("h3",{id:"api-\u5ba1\u8ba1"},"API \u5ba1\u8ba1"),(0,i.kt)("p",null,"\u5982\u679c\u4f60\u9700\u8981\u8bb0\u5f55\u6240\u6709 Rancher API \u4e8b\u52a1\uff0c\u8bf7\u5c06\u4ee5\u4e0b\u6807\u5fd7\u6dfb\u52a0\u5230\u5b89\u88c5\u547d\u4ee4\u4e2d\uff0c\u4ece\u800c\u542f\u7528 ",(0,i.kt)("a",{parentName:"p",href:"/zh/getting-started/installation-and-upgrade/advanced-options/advanced-use-cases/enable-api-audit-log"},"API \u5ba1\u8ba1"),"\u529f\u80fd\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"-e AUDIT_LEVEL=1 \\\n-e AUDIT_LOG_PATH=/var/log/auditlog/rancher-api-audit.log \\\n-e AUDIT_LOG_MAXAGE=20 \\\n-e AUDIT_LOG_MAXBACKUP=20 \\\n-e AUDIT_LOG_MAXSIZE=100 \\\n")),(0,i.kt)("h3",{id:"\u79bb\u7ebf\u73af\u5883"},"\u79bb\u7ebf\u73af\u5883"),(0,i.kt)("p",null,"\u5982\u679c\u4f60\u8bbf\u95ee\u6b64\u9875\u9762\u662f\u4e3a\u4e86\u5b8c\u6210",(0,i.kt)("a",{parentName:"p",href:"/zh/pages-for-subheaders/air-gapped-helm-cli-install"},"\u79bb\u7ebf\u5b89\u88c5"),"\uff0c\u5219\u5728\u8fd0\u884c\u5b89\u88c5\u547d\u4ee4\u65f6\uff0c\u5148\u5c06\u4f60\u7684\u79c1\u6709\u955c\u50cf\u4ed3\u5e93 URL \u9644\u52a0\u5230 Server \u6807\u5fd7\u4e2d\u3002\u4e5f\u5c31\u662f\u8bf4\uff0c\u5728 ",(0,i.kt)("inlineCode",{parentName:"p"},"rancher/rancher:latest")," \u524d\u9762\u6dfb\u52a0 ",(0,i.kt)("inlineCode",{parentName:"p"},"<REGISTRY.DOMAIN.COM:PORT>")," \u548c\u79c1\u6709\u955c\u50cf\u4ed3\u5e93 URL\u3002"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u793a\u4f8b"),"\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"}," <REGISTRY.DOMAIN.COM:PORT>/rancher/rancher:latest\n")),(0,i.kt)("h3",{id:"\u6301\u4e45\u5316\u6570\u636e"},"\u6301\u4e45\u5316\u6570\u636e"),(0,i.kt)("p",null,"Rancher \u4f7f\u7528 etcd \u4f5c\u4e3a\u6570\u636e\u5b58\u50a8\u3002\u5982\u679c Rancher \u662f\u4f7f\u7528 Docker \u5b89\u88c5\u7684\uff0cRancher \u4f1a\u4f7f\u7528\u5d4c\u5165\u5f0f etcd\u3002\u6301\u4e45\u5316\u6570\u636e\u4f4d\u4e8e\u5bb9\u5668\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"/var/lib/rancher")," \u8def\u5f84\u4e2d\u3002"),(0,i.kt)("p",null,"\u4f60\u53ef\u4ee5\u5c06\u4e3b\u673a\u5377\u6302\u8f7d\u5230\u8be5\u4f4d\u7f6e\uff0c\u6765\u5c06\u6570\u636e\u4fdd\u7559\u5728\u8fd0\u884c\u5b83\u7684\u4e3b\u673a\u4e0a\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"docker run -d --restart=unless-stopped \\\n  -p 80:80 -p 443:443 \\\n  -v /opt/rancher:/var/lib/rancher \\\n  --privileged \\\n  rancher/rancher:latest\n")),(0,i.kt)("p",null,"Rancher 2.5 \u5f00\u59cb\u9700\u8981",(0,i.kt)("a",{parentName:"p",href:"/zh/pages-for-subheaders/rancher-on-a-single-node-with-docker#rancher-%E7%89%B9%E6%9D%83%E8%AE%BF%E9%97%AE"},"\u7279\u6743\u8bbf\u95ee"),"\u3002"),(0,i.kt)("p",null,"\u8fd9\u4e2a 7 \u5c42 NGINX \u914d\u7f6e\u5df2\u7ecf\u5728 NGINX 1.13\uff08Mainline\uff09\u548c 1.14\uff08Stable\uff09\u7248\u672c\u4e0a\u8fdb\u884c\u4e86\u6d4b\u8bd5\u3002"),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u6b64 NGINX \u914d\u7f6e\u53ea\u662f\u4e00\u4e2a\u793a\u4f8b\uff0c\u53ef\u80fd\u4e0d\u9002\u5408\u4f60\u7684\u73af\u5883\u3002\u5982\u679c\u9700\u8981\u67e5\u9605\u5b8c\u6574\u6587\u6863\uff0c\u8bf7\u53c2\u89c1 ",(0,i.kt)("a",{parentName:"p",href:"https://docs.nginx.com/nginx/admin-guide/load-balancer/tcp-udp-load-balancer/"},"NGINX \u8d1f\u8f7d\u5747\u8861 - TCP \u548c UDP \u8d1f\u8f7d\u5747\u8861\u5668"),"\u3002"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"upstream rancher {\n    server rancher-server:80;\n}\n\nmap $http_upgrade $connection_upgrade {\n    default Upgrade;\n    ''      close;\n}\n\nserver {\n    listen 443 ssl http2;\n    server_name rancher.yourdomain.com;\n    ssl_certificate /etc/your_certificate_directory/fullchain.pem;\n    ssl_certificate_key /etc/your_certificate_directory/privkey.pem;\n\n    location / {\n        proxy_set_header Host $host;\n        proxy_set_header X-Forwarded-Proto $scheme;\n        proxy_set_header X-Forwarded-Port $server_port;\n        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;\n        proxy_pass http://rancher;\n        proxy_http_version 1.1;\n        proxy_set_header Upgrade $http_upgrade;\n        proxy_set_header Connection $connection_upgrade;\n        # \u6b64\u9879\u5141\u8bb8\u6267\u884c\u7684 shell \u7a97\u53e3\u4fdd\u6301\u5f00\u542f\uff0c\u6700\u957f\u53ef\u8fbe15\u5206\u949f\u3002\u4e0d\u4f7f\u7528\u6b64\u53c2\u6570\u7684\u8bdd\uff0c\u9ed8\u8ba41\u5206\u949f\u540e\u81ea\u52a8\u5173\u95ed\u3002\n        proxy_read_timeout 900s;\n        proxy_buffering off;\n    }\n}\n\nserver {\n    listen 80;\n    server_name rancher.yourdomain.com;\n    return 301 https://$server_name$request_uri;\n}\n")),(0,i.kt)("br",null))}m.isMDXComponent=!0}}]);