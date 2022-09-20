"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[43825],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),s=p(n),m=a,k=s["".concat(c,".").concat(m)]||s[m]||u[m]||o;return n?r.createElement(k,i(i({ref:t},d),{},{components:n})):r.createElement(k,i({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=s;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},51889:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return u}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=["components"],l={title:"HTTP \u4ee3\u7406\u914d\u7f6e",weight:251},c=void 0,p={unversionedId:"reference-guides/single-node-rancher-in-docker/http-proxy-configuration",id:"reference-guides/single-node-rancher-in-docker/http-proxy-configuration",title:"HTTP \u4ee3\u7406\u914d\u7f6e",description:"\u5982\u679c\u4f60\u901a\u8fc7\u4ee3\u7406\u6765\u64cd\u4f5c Rancher\uff0c\u5e76\u60f3\u8981\u901a\u8fc7\u4ee3\u7406\u8bbf\u95ee\u670d\u52a1\uff08\u4f8b\u5982\u62c9\u53d6\u5e94\u7528\u5546\u5e97\uff09\uff0c\u4f60\u9700\u8981\u63d0\u4f9b Rancher \u4ee3\u7406\u7684\u4fe1\u606f\u3002\u7531\u4e8e Rancher \u662f\u7528 Go \u7f16\u5199\u7684\uff0cRancher \u4f7f\u7528\u5982\u4e0b\u5e38\u89c1\u7684\u4ee3\u7406\u73af\u5883\u53d8\u91cf\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/reference-guides/single-node-rancher-in-docker/http-proxy-configuration.md",sourceDirName:"reference-guides/single-node-rancher-in-docker",slug:"/reference-guides/single-node-rancher-in-docker/http-proxy-configuration",permalink:"/zh/reference-guides/single-node-rancher-in-docker/http-proxy-configuration",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/reference-guides/single-node-rancher-in-docker/http-proxy-configuration.md",tags:[],version:"current",lastUpdatedAt:1663691987,formattedLastUpdatedAt:"2022/9/20",frontMatter:{title:"HTTP \u4ee3\u7406\u914d\u7f6e",weight:251},sidebar:"tutorialSidebar",previous:{title:"Docker \u4e2d\u7684\u5355\u8282\u70b9 Rancher",permalink:"/zh/pages-for-subheaders/single-node-rancher-in-docker"},next:{title:"Docker \u5b89\u88c5\u9ad8\u7ea7\u9009\u9879",permalink:"/zh/reference-guides/single-node-rancher-in-docker/advanced-options"}},d={},u=[{value:"\u57fa\u4e8e Docker \u5b89\u88c5",id:"\u57fa\u4e8e-docker-\u5b89\u88c5",level:2},{value:"\u79bb\u7ebf\u4ee3\u7406\u914d\u7f6e",id:"\u79bb\u7ebf\u4ee3\u7406\u914d\u7f6e",level:3}],s={toc:u};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u5982\u679c\u4f60\u901a\u8fc7\u4ee3\u7406\u6765\u64cd\u4f5c Rancher\uff0c\u5e76\u60f3\u8981\u901a\u8fc7\u4ee3\u7406\u8bbf\u95ee\u670d\u52a1\uff08\u4f8b\u5982\u62c9\u53d6\u5e94\u7528\u5546\u5e97\uff09\uff0c\u4f60\u9700\u8981\u63d0\u4f9b Rancher \u4ee3\u7406\u7684\u4fe1\u606f\u3002\u7531\u4e8e Rancher \u662f\u7528 Go \u7f16\u5199\u7684\uff0cRancher \u4f7f\u7528\u5982\u4e0b\u5e38\u89c1\u7684\u4ee3\u7406\u73af\u5883\u53d8\u91cf\u3002"),(0,o.kt)("p",null,"\u8bf7\u786e\u4fdd ",(0,o.kt)("inlineCode",{parentName:"p"},"NO_PROXY")," \u5305\u542b\u4e0d\u4f7f\u7528\u4ee3\u7406\u7684\u7f51\u7edc\u5730\u5740\uff0c\u7f51\u7edc\u5730\u5740\u8303\u56f4\u548c\u57df\u540d\u3002"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"\u73af\u5883\u53d8\u91cf"),(0,o.kt)("th",{parentName:"tr",align:null},"\u7528\u9014"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"HTTP_PROXY"),(0,o.kt)("td",{parentName:"tr",align:null},"\u53d1\u8d77 HTTP \u8fde\u63a5\u7684\u4ee3\u7406\u5730\u5740")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"HTTPS_PROXY"),(0,o.kt)("td",{parentName:"tr",align:null},"\u53d1\u8d77 HTTPS \u8fde\u63a5\u7684\u4ee3\u7406\u5730\u5740")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"NO_PROXY"),(0,o.kt)("td",{parentName:"tr",align:null},"\u53d1\u8d77\u8fde\u63a5\u65f6\u4e0d\u4f7f\u7528\u4ee3\u7406\u7684\u7f51\u7edc\u5730\u5740\uff0c\u7f51\u7edc\u5730\u5740\u8303\u56f4\u548c\u57df\u540d")))),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"\u91cd\u8981\u63d0\u793a\uff1a")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},(0,o.kt)("inlineCode",{parentName:"p"},"NO_PROXY")," \u5fc5\u987b\u5927\u5199\u624d\u80fd\u4f7f\u7528\u7f51\u7edc\u8303\u56f4 CIDR \u8868\u793a\u6cd5\u3002"))),(0,o.kt)("h2",{id:"\u57fa\u4e8e-docker-\u5b89\u88c5"},"\u57fa\u4e8e Docker \u5b89\u88c5"),(0,o.kt)("p",null,"\u4f60\u53ef\u4f7f\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"-e KEY=VALUE")," \u6216 ",(0,o.kt)("inlineCode",{parentName:"p"},"--env KEY=VALUE"),"\u5c06\u73af\u5883\u53d8\u91cf\u4f20\u7ed9 Rancher \u5bb9\u5668\u3002\u5728 ",(0,o.kt)("a",{parentName:"p",href:"/zh/pages-for-subheaders/rancher-on-a-single-node-with-docker"},"Docker \u5b89\u88c5"),"\u4e2d\uff0c",(0,o.kt)("inlineCode",{parentName:"p"},"NO_PROXY")," \u5fc5\u987b\u7684\u503c\u4e3a\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"localhost")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"127.0.0.1")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"0.0.0.0")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"10.0.0.0/8")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"cattle-system.svc")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},".svc")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},".cluster.local"))),(0,o.kt)("p",null,"\u4ee5\u4e0b\u793a\u4f8b\u4e2d\uff0c\u4ee3\u7406\u670d\u52a1\u5668\u53ef\u4ee5\u901a\u8fc7 ",(0,o.kt)("inlineCode",{parentName:"p"},"http://192.168.0.1:3128")," \u8bbf\u95ee\u3002\u6b64\u5916\uff0c\u5728\u8bbf\u95ee ",(0,o.kt)("inlineCode",{parentName:"p"},"192.168.10.0/24")," \u7f51\u7edc\u8303\u56f4\u4ee5\u53ca ",(0,o.kt)("inlineCode",{parentName:"p"},"example.com")," \u57df\u540d\u4e0b\u7684\u6bcf\u4e2a\u4e3b\u673a\u540d\u65f6\u5747\u4e0d\u4f7f\u7528\u4ee3\u7406\u670d\u52a1\u5668\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'docker run -d --restart=unless-stopped \\\n  -p 80:80 -p 443:443 \\\n  -e HTTP_PROXY="http://192.168.10.1:3128" \\\n  -e HTTPS_PROXY="http://192.168.10.1:3128" \\\n  -e NO_PROXY="localhost,127.0.0.1,0.0.0.0,10.0.0.0/8,cattle-system.svc,192.168.10.0/24,.svc,.cluster.local,example.com" \\\n  --privileged \\\n  rancher/rancher:latest\n')),(0,o.kt)("p",null,"\u7279\u6743\u8bbf\u95ee\u662f",(0,o.kt)("a",{parentName:"p",href:"/zh/pages-for-subheaders/rancher-on-a-single-node-with-docker#rancher-%E7%89%B9%E6%9D%83%E8%AE%BF%E9%97%AE"},"\u5fc5\u987b"),"\u7684\u3002"),(0,o.kt)("h3",{id:"\u79bb\u7ebf\u4ee3\u7406\u914d\u7f6e"},"\u79bb\u7ebf\u4ee3\u7406\u914d\u7f6e"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"v2.6.4 \u7684\u65b0\u529f\u80fd")),(0,o.kt)("p",null,"\u4f60\u73b0\u5728\u53ef\u4ee5\u5728\u914d\u7f6e\u7684\u79bb\u7ebf\u96c6\u7fa4\u4e2d\u914d\u7f6e\u4e3b\u673a\u9a71\u52a8\u96c6\u7fa4\uff0c\u4ee5\u4f7f\u7528\u4ee3\u7406\u8fdb\u884c\u51fa\u7ad9\u8fde\u63a5\u3002"),(0,o.kt)("p",null,"\u9664\u4e86\u5982\u4e0a\u4e3a\u4ee3\u7406\u670d\u52a1\u5668\u8bbe\u7f6e\u9ed8\u8ba4\u89c4\u5219\u5916\uff0c\u4f60\u8fd8\u9700\u8981\u989d\u5916\u6dfb\u52a0\u5982\u4e0b\u6240\u793a\u7684\u89c4\u5219\uff0c\u4ee5\u4ece\u4ee3\u7406\u7684 Rancher \u73af\u5883\u4e2d\u914d\u7f6e\u4e3b\u673a\u9a71\u52a8\u96c6\u7fa4\u3002"),(0,o.kt)("p",null,"\u6839\u636e\u4f60\u7684\u8bbe\u7f6e\u914d\u7f6e\u6587\u4ef6\u8def\u5f84\uff0c\u4f8b\u5982 ",(0,o.kt)("inlineCode",{parentName:"p"},"/etc/apt/apt.conf.d/proxy.conf"),"\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"acl SSL_ports port 22\nacl SSL_ports port 2376\n\nacl Safe_ports port 22      # ssh\nacl Safe_ports port 2376    # docker port\n")))}m.isMDXComponent=!0}}]);