"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[53314],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=u(n),d=a,h=m["".concat(s,".").concat(d)]||m[d]||c[d]||i;return n?r.createElement(h,l(l({ref:t},p),{},{components:n})):r.createElement(h,l({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var u=2;u<i;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},92534:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return o},metadata:function(){return u},toc:function(){return c}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),l=["components"],o={title:"\u521b\u5efa vSphere \u865a\u62df\u673a\u6a21\u677f",weight:4},s=void 0,u={unversionedId:"how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher/use-new-nodes-in-an-infra-provider/vsphere/create-a-vm-template",id:"how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher/use-new-nodes-in-an-infra-provider/vsphere/create-a-vm-template",title:"\u521b\u5efa vSphere \u865a\u62df\u673a\u6a21\u677f",description:"\u8981\u91cd\u590d\u4e14\u53ef\u9760\u5730\u521b\u5efa\u865a\u62df\u673a\u901a\u5e38\u975e\u5e38\u56f0\u96be\u3002VMware vSphere \u652f\u6301\u6784\u5efa\u53ef\u4ee5\u8f6c\u6362\u4e3a\u6a21\u677f\u7684\u865a\u62df\u673a\u3002\u7136\u540e\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528\u8be5\u6a21\u677f\u6765\u521b\u5efa\u914d\u7f6e\u76f8\u540c\u7684\u865a\u62df\u673a\u3002Rancher \u4f1a\u5728\u8282\u70b9\u6c60\u4e2d\u5229\u7528\u6b64\u529f\u80fd\u6765\u521b\u5efa\u76f8\u540c\u7684 RKE1 \u548c RKE2 \u8282\u70b9\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher/use-new-nodes-in-an-infra-provider/vsphere/create-a-vm-template.md",sourceDirName:"how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher/use-new-nodes-in-an-infra-provider/vsphere",slug:"/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher/use-new-nodes-in-an-infra-provider/vsphere/create-a-vm-template",permalink:"/zh/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher/use-new-nodes-in-an-infra-provider/vsphere/create-a-vm-template",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher/use-new-nodes-in-an-infra-provider/vsphere/create-a-vm-template.md",tags:[],version:"current",lastUpdatedAt:1663691987,formattedLastUpdatedAt:"2022/9/20",frontMatter:{title:"\u521b\u5efa vSphere \u865a\u62df\u673a\u6a21\u677f",weight:4},sidebar:"tutorialSidebar",previous:{title:"\u5728 vSphere \u63a7\u5236\u53f0\u4e2d\u521b\u5efa\u51ed\u8bc1",permalink:"/zh/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/launch-kubernetes-with-rancher/use-new-nodes-in-an-infra-provider/vsphere/create-credentials"},next:{title:"\u521b\u5efa Nutanix AOS \u96c6\u7fa4",permalink:"/zh/pages-for-subheaders/nutanix"}},p={},c=[{value:"\u8981\u6c42",id:"\u8981\u6c42",level:2},{value:"Linux \u4f9d\u8d56\u9879",id:"linux-\u4f9d\u8d56\u9879",level:2},{value:"Windows \u4f9d\u8d56\u9879",id:"windows-\u4f9d\u8d56\u9879",level:2},{value:"\u521b\u5efa\u6a21\u677f",id:"\u521b\u5efa\u6a21\u677f",level:2},{value:"\u624b\u52a8\u521b\u5efa",id:"\u624b\u52a8\u521b\u5efa",level:3},{value:"\u624b\u52a8\u521b\u5efa\u7684\u66ff\u4ee3\u65b9\u6848",id:"\u624b\u52a8\u521b\u5efa\u7684\u66ff\u4ee3\u65b9\u6848",level:3},{value:"\u51c6\u5907\u865a\u62df\u673a",id:"\u51c6\u5907\u865a\u62df\u673a",level:2},{value:"Linux \u51c6\u5907",id:"linux-\u51c6\u5907",level:3},{value:"Windows \u51c6\u5907",id:"windows-\u51c6\u5907",level:3},{value:"\u8f6c\u6362\u4e3a\u6a21\u677f",id:"\u8f6c\u6362\u4e3a\u6a21\u677f",level:2},{value:"\u79fb\u52a8\u5230\u5185\u5bb9\u5e93",id:"\u79fb\u52a8\u5230\u5185\u5bb9\u5e93",level:2},{value:"\u5176\u4ed6\u8d44\u6e90",id:"\u5176\u4ed6\u8d44\u6e90",level:2}],m={toc:c};function d(e){var t=e.components,n=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\u8981\u91cd\u590d\u4e14\u53ef\u9760\u5730\u521b\u5efa\u865a\u62df\u673a\u901a\u5e38\u975e\u5e38\u56f0\u96be\u3002VMware vSphere \u652f\u6301\u6784\u5efa\u53ef\u4ee5\u8f6c\u6362\u4e3a\u6a21\u677f\u7684\u865a\u62df\u673a\u3002\u7136\u540e\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528\u8be5\u6a21\u677f\u6765\u521b\u5efa\u914d\u7f6e\u76f8\u540c\u7684\u865a\u62df\u673a\u3002Rancher \u4f1a\u5728\u8282\u70b9\u6c60\u4e2d\u5229\u7528\u6b64\u529f\u80fd\u6765\u521b\u5efa\u76f8\u540c\u7684 RKE1 \u548c RKE2 \u8282\u70b9\u3002"),(0,i.kt)("p",null,"\u4e3a\u4e86\u4f7f\u7528\u6a21\u677f\u521b\u5efa\u65b0\u7684\u865a\u62df\u673a\uff0cRancher \u6709\u865a\u62df\u673a\u5fc5\u987b\u9884\u5148\u5b89\u88c5\u7684",(0,i.kt)("a",{parentName:"p",href:"#%E8%A6%81%E6%B1%82"},"\u7279\u5b9a\u8981\u6c42"),"\u3002\u6839\u636e\u8fd9\u4e9b\u8981\u6c42\u914d\u7f6e\u865a\u62df\u673a\u540e\uff0c\u4f60\u9700\u8981",(0,i.kt)("a",{parentName:"p",href:"#%E5%87%86%E5%A4%87%E8%99%9A%E6%8B%9F%E6%9C%BA"},"\u51c6\u5907\u865a\u62df\u673a"),"\uff0c\u7136\u540e\u518d",(0,i.kt)("a",{parentName:"p",href:"#%E5%88%9B%E5%BB%BA%E6%A8%A1%E6%9D%BF"},"\u521b\u5efa\u6a21\u677f"),"\u3002\u51c6\u5907\u5de5\u4f5c\u5b8c\u6210\u540e\uff0c\u865a\u62df\u673a\u53ef\u4ee5",(0,i.kt)("a",{parentName:"p",href:"#%E8%BD%AC%E6%8D%A2%E4%B8%BA%E6%A8%A1%E6%9D%BF"},"\u8f6c\u6362\u4e3a\u6a21\u677f"),"\u5e76",(0,i.kt)("a",{parentName:"p",href:"#%E7%A7%BB%E5%8A%A8%E5%88%B0%E5%86%85%E5%AE%B9%E5%BA%93"},"\u79fb\u52a8\u5230\u5185\u5bb9\u5e93\u4e2d"),"\uff0c\u7136\u540e Rancher \u8282\u70b9\u6c60\u5c31\u53ef\u4ee5\u4f7f\u7528\u5b83\u4e86\u3002"),(0,i.kt)("h2",{id:"\u8981\u6c42"},"\u8981\u6c42"),(0,i.kt)("p",null,"Linux \u548c Windows \u865a\u62df\u673a\u90fd\u9700\u8981\u7279\u5b9a\u5de5\u5177\u624d\u80fd\u4f9b vSphere \u4e3b\u673a\u9a71\u52a8\u4f7f\u7528\u3002\u6700\u5173\u952e\u7684\u4f9d\u8d56\u9879\u662f Linux \u7684 ",(0,i.kt)("a",{parentName:"p",href:"https://cloud-init.io/"},"cloud-init")," \u548c Windows \u7684 ",(0,i.kt)("a",{parentName:"p",href:"https://cloudbase.it/cloudbase-init/"},"cloudbase-init"),"\u3002\u4e8c\u8005\u90fd\u7528\u4e8e\u901a\u8fc7\u914d\u7f6e\u4e3b\u673a\u540d\u548c\u8bbe\u7f6e SSH \u8bbf\u95ee\u4ee5\u53ca\u9ed8\u8ba4 Rancher \u7528\u6237\u6765\u914d\u7f6e\u865a\u62df\u673a\u3002\u5982\u679c\u9700\u8981\u5176\u4ed6\u914d\u7f6e\uff0c\u7528\u6237\u53ef\u4ee5\u6839\u636e\u9700\u8981\u6dfb\u52a0\u5176\u4ed6\u5185\u5bb9\u3002\u6b64\u5916\uff0c\u4e0b\u9762\u5217\u51fa\u4e86\u5176\u4ed6\u8981\u6c42\u4ee5\u4f9b\u53c2\u8003\u3002"),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u5982\u679c\u4f60\u6709\u4efb\u4f55\u7279\u5b9a\u7684\u9632\u706b\u5899\u89c4\u5219\u6216\u914d\u7f6e\uff0c\u5219\u9700\u8981\u5728\u521b\u5efa\u6a21\u677f\u4e4b\u524d\u5c06\u5176\u6dfb\u52a0\u5230\u865a\u62df\u673a\u3002"))),(0,i.kt)("h2",{id:"linux-\u4f9d\u8d56\u9879"},"Linux \u4f9d\u8d56\u9879"),(0,i.kt)("p",null,"\u4e0b\u9762\u5217\u51fa\u4e86\u9700\u8981\u5728\u6a21\u677f\u4e0a\u5b89\u88c5\u7684\u5305\u3002\u4e0d\u540c\u7684\u53d1\u884c\u7248\u5bf9\u5e94\u7684\u540d\u79f0\u4f1a\u7565\u6709\u4e0d\u540c\uff0c\u4f8b\u5982\uff0c\u67d0\u4e9b\u53d1\u884c\u7248\u4f1a\u9ed8\u8ba4\u63d0\u4f9b\u3002"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"curl"),(0,i.kt)("li",{parentName:"ul"},"wget"),(0,i.kt)("li",{parentName:"ul"},"git"),(0,i.kt)("li",{parentName:"ul"},"net-tools"),(0,i.kt)("li",{parentName:"ul"},"unzip"),(0,i.kt)("li",{parentName:"ul"},"apparmor-parser"),(0,i.kt)("li",{parentName:"ul"},"ca-certificates"),(0,i.kt)("li",{parentName:"ul"},"cloud-init"),(0,i.kt)("li",{parentName:"ul"},"cloud-guest-utils"),(0,i.kt)("li",{parentName:"ul"},"cloud-image-utils"),(0,i.kt)("li",{parentName:"ul"},"growpart"),(0,i.kt)("li",{parentName:"ul"},"cloud-initramfs-growroot"),(0,i.kt)("li",{parentName:"ul"},"open-iscsi"),(0,i.kt)("li",{parentName:"ul"},"openssh-server"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.vmware.com/en/VMware-Tools/11.3.0/com.vmware.vsphere.vmwaretools.doc/GUID-8B6EA5B7-453B-48AA-92E5-DB7F061341D1.html"},"open-vm-tools"))),(0,i.kt)("h2",{id:"windows-\u4f9d\u8d56\u9879"},"Windows \u4f9d\u8d56\u9879"),(0,i.kt)("p",null,"\u6a21\u677f\u4e0a\u9700\u8981\u5b89\u88c5\u7684\u5305\u5982\u4e0b\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Windows \u5bb9\u5668\u529f\u80fd"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://cloudbase.it/cloudbase-init/#download"},"cloudbase-init")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/virtualization/windowscontainers/quick-start/set-up-environment?tabs=Windows-Server#install-docker"},"Docker EE")," - \u4ec5\u9650 RKE1")),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"RKE1 \u548c RKE2 \u5bf9\u5e94\u7684 Windows \u6a21\u677f\u7684\u914d\u7f6e\u6709\u6240\u4e0d\u540c\uff1a"),(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},"RKE1 \u4f7f\u7528 Docker\uff0c\u56e0\u6b64\u4efb\u4f55 RKE1 \u6a21\u677f\u90fd\u9700\u8981\u9884\u5148\u5b89\u88c5 Docker EE"),(0,i.kt)("li",{parentName:"ul"},"RKE2 \u4e0d\u9700\u8981 Docker EE\uff0c\u56e0\u6b64\u4e0d\u9700\u8981\u5b89\u88c5")))),(0,i.kt)("h2",{id:"\u521b\u5efa\u6a21\u677f"},"\u521b\u5efa\u6a21\u677f"),(0,i.kt)("p",null,"\u4f60\u53ef\u4ee5\u624b\u52a8\u521b\u5efa\u865a\u62df\u673a\uff0c\u4e5f\u53ef\u4ee5\u4f7f\u7528",(0,i.kt)("a",{parentName:"p",href:"#%E6%89%8B%E5%8A%A8%E5%88%9B%E5%BB%BA%E7%9A%84%E6%9B%BF%E4%BB%A3%E6%96%B9%E6%A1%88"},"\u5176\u4ed6\u66ff\u4ee3\u65b9\u6cd5"),"\u6765\u521b\u5efa\u865a\u62df\u673a\u3002"),(0,i.kt)("h3",{id:"\u624b\u52a8\u521b\u5efa"},"\u624b\u52a8\u521b\u5efa"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"\u5728 VMware \u4e2d\u6309\u7167",(0,i.kt)("a",{parentName:"li",href:"https://docs.vmware.com/en/VMware-vSphere/7.0/com.vmware.vsphere.vm_admin.doc/GUID-AE8AFBF1-75D1-4172-988C-378C35C9FAF2.html"},"\u8fd9\u4e9b\u8bf4\u660e"),"\u624b\u52a8\u521b\u5efa\u865a\u62df\u673a\u3002\u865a\u62df\u673a\u8fd0\u884c\u540e\uff0c\u4f60\u53ef\u4ee5\u624b\u52a8\u5b89\u88c5\u4e0a\u9762\u5217\u51fa\u7684\u4f9d\u8d56\u9879\uff0c\u4ee5\u4fbf\u4e3a vSphere \u4e3b\u673a\u9a71\u52a8\u6b63\u786e\u914d\u7f6e\u865a\u62df\u673a\u3002"),(0,i.kt)("li",{parentName:"ol"},"\u6839\u636e\u4f60\u7684\u7279\u5b9a\u73af\u5883\u548c\u8981\u6c42\u6309\u9700\u5b9a\u5236\u3002"),(0,i.kt)("li",{parentName:"ol"},"\u5728\u521b\u5efa\u6a21\u677f\u4e4b\u524d\u8fdb\u884c\u6700\u540e\u7684\u51c6\u5907\u5de5\u4f5c\u3002")),(0,i.kt)("h3",{id:"\u624b\u52a8\u521b\u5efa\u7684\u66ff\u4ee3\u65b9\u6848"},"\u624b\u52a8\u521b\u5efa\u7684\u66ff\u4ee3\u65b9\u6848"),(0,i.kt)("p",null,"\u4e0b\u9762\u5217\u51fa\u4e86\u521b\u5efa\u865a\u62df\u673a\u7684\u5176\u4ed6\u66ff\u4ee3\u9009\u9879\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://developer.vmware.com/powercli"},"VMware PowerCLI")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.packer.io/"},"Packer")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://saltproject.io/"},"SaltStack")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.ansible.com/"},"Ansible"))),(0,i.kt)("p",null,"Packer \u662f\u4e00\u79cd\u5e38\u7528\u7684\u66ff\u4ee3\u65b9\u6848\u3002\u6709\u5173\u5c06\u5176\u4e0e vSphere \u4e00\u8d77\u4f7f\u7528\u7684\u793a\u4f8b\uff0c\u8bf7\u53c2\u9605",(0,i.kt)("a",{parentName:"p",href:"https://github.com/vmware-samples/packer-examples-for-vsphere"},"\u53c2\u8003"),"\u3002"),(0,i.kt)("h2",{id:"\u51c6\u5907\u865a\u62df\u673a"},"\u51c6\u5907\u865a\u62df\u673a"),(0,i.kt)("p",null,"\u521b\u5efa\u5177\u6709\u6240\u6709\u5fc5\u9700\u4f9d\u8d56\u9879\uff08\u4ee5\u53ca\u4efb\u4f55\u5176\u4ed6\u5fc5\u9700\u9879\uff09\u7684\u865a\u62df\u673a\u540e\uff0c\u4f60\u5fc5\u987b\u6267\u884c\u6700\u5173\u952e\u7684\u4e0b\u4e00\u4e2a\u6b65\u9aa4\uff0c\u5373\u51c6\u5907\u5c06\u865a\u62df\u673a\u8f6c\u6362\u4e3a\u6a21\u677f\u3002\u6b64\u51c6\u5907\u6b65\u9aa4\u4f1a\u91cd\u7f6e\u5173\u952e\u6570\u636e\uff08\u4f8b\u5982\u865a\u62df\u673a\u4e3b\u673a\u540d\u3001IP \u7b49\uff09\u4ee5\u9632\u6b62\u8fd9\u4e9b\u4fe1\u606f\u88ab\u5e26\u5165\u65b0\u865a\u62df\u673a\u3002\u5982\u679c\u4f60\u65e0\u6cd5\u6267\u884c\u6b64\u6b65\u9aa4\uff0c\u4f60\u4e5f\u53ef\u4ee5\u521b\u5efa\u4e00\u4e2a\u5177\u6709\u76f8\u540c\u4e3b\u673a\u540d\u3001IP \u5730\u5740\u7b49\u7684\u865a\u62df\u673a\u3002"),(0,i.kt)("p",null,"\u8bf7\u6ce8\u610f\uff0cLinux \u548c Windows \u5bf9\u5e94\u7684\u51c6\u5907\u6b65\u9aa4\u6709\u6240\u4e0d\u540c\u3002"),(0,i.kt)("h3",{id:"linux-\u51c6\u5907"},"Linux \u51c6\u5907"),(0,i.kt)("p",null,"\u4ee5\u4e0b\u547d\u4ee4\u5c06\u5728 Linux \u4e2d\u91cd\u7f6e\u4f60\u7684\u865a\u62df\u673a\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# \u6e05\u7406\u65e5\u5fd7\u3002\nif [ -f /var/log/audit/audit.log ]; then\n  cat /dev/null > /var/log/audit/audit.log\nfi\nif [ -f /var/log/wtmp ]; then\n  cat /dev/null > /var/log/wtmp\nfi\nif [ -f /var/log/lastlog ]; then\n  cat /dev/null > /var/log/lastlog\nfi\n\n# \u6e05\u7406 udev \u89c4\u5219\u3002\nif [ -f /etc/udev/rules.d/70-persistent-net.rules ]; then\n  rm /etc/udev/rules.d/70-persistent-net.rules\nfi\n\n# \u6e05\u7406 /tmp \u8def\u5f84\u3002\nrm -rf /tmp/*\nrm -rf /var/tmp/*\n\n# \u6e05\u7406 SSH \u4e3b\u673a\u5bc6\u94a5\u3002\nrm -f /etc/ssh/ssh_host_*\n\n# \u6e05\u7406 machine-id\u3002\ntruncate -s 0 /etc/machine-id\nrm /var/lib/dbus/machine-id\nln -s /etc/machine-id /var/lib/dbus/machine-id\n\n# \u6e05\u7406 shell \u5386\u53f2\u3002\nunset HISTFILE\nhistory -cw\necho > ~/.bash_history\nrm -fr /root/.bash_history\n\n# \u622a\u65ad\u4e3b\u673a\u540d\u3001\u4e3b\u673a\u548c resolv.conf\uff0c\u5e76\u5c06\u4e3b\u673a\u540d\u8bbe\u7f6e\u4e3a localhost\u3002\ntruncate -s 0 /etc/{hostname,hosts,resolv.conf}\nhostnamectl set-hostname localhost\n\n# \u6e05\u7406 cloud-init\u3002\ncloud-init clean -s -l\n")),(0,i.kt)("h3",{id:"windows-\u51c6\u5907"},"Windows \u51c6\u5907"),(0,i.kt)("p",null,"Windows \u6709\u4e00\u4e2a\u540d\u4e3a ",(0,i.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/windows-hardware/manufacture/desktop/sysprep--generalize--a-windows-installation"},"sysprep")," \u7684\u5b9e\u7528\u7a0b\u5e8f\uff0c\u7528\u4e8e\u4e00\u822c\u5316\u955c\u50cf\u5e76\u91cd\u7f6e\u4e0a\u8ff0 Linux \u9879\u76ee\u3002\u547d\u4ee4\u5982\u4e0b\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-PowerShell"},"sysprep.exe /generalize /shutdown /oobe\n")),(0,i.kt)("h2",{id:"\u8f6c\u6362\u4e3a\u6a21\u677f"},"\u8f6c\u6362\u4e3a\u6a21\u677f"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"\u5173\u95ed\u5e76\u505c\u6b62\u865a\u62df\u673a\u3002"),(0,i.kt)("li",{parentName:"ol"},"\u53f3\u952e\u5355\u51fb\u6e05\u5355\u5217\u8868\u4e2d\u7684\u865a\u62df\u673a\uff0c\u7136\u540e\u9009\u62e9",(0,i.kt)("strong",{parentName:"li"},"\u6a21\u677f"),"\u3002"),(0,i.kt)("li",{parentName:"ol"},"\u70b9\u51fb",(0,i.kt)("strong",{parentName:"li"},"\u8f6c\u6362\u4e3a\u6a21\u677f"),"\u3002")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u7ed3\u679c"),"\uff1a\u6d41\u7a0b\u5b8c\u6210\u540e\uff0c\u5373\u53ef\u4f7f\u7528\u6a21\u677f\u3002"),(0,i.kt)("p",null,"\u6709\u5173\u5c06\u865a\u62df\u673a\u8f6c\u6362\u4e3a\u6a21\u677f\u7684\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605 ",(0,i.kt)("a",{parentName:"p",href:"https://docs.vmware.com/en/VMware-vSphere/7.0/com.vmware.vsphere.vm_admin.doc/GUID-5B3737CC-28DB-4334-BD18-6E12011CDC9F.html"},"VMware \u6307\u5357"),"\u3002"),(0,i.kt)("h2",{id:"\u79fb\u52a8\u5230\u5185\u5bb9\u5e93"},"\u79fb\u52a8\u5230\u5185\u5bb9\u5e93"),(0,i.kt)("p",null,"Rancher \u652f\u6301\u4f7f\u7528\u5185\u5bb9\u5e93\u63d0\u4f9b\u7684\u6a21\u677f\u3002\u5185\u5bb9\u5e93\u5728 vSphere \u4e2d\u5b58\u50a8\u548c\u7ba1\u7406\u5185\u5bb9\uff0c\u8fd8\u652f\u6301\u53d1\u5e03\u548c\u5171\u4eab\u8be5\u5185\u5bb9\u3002"),(0,i.kt)("p",null,"\u4ee5\u4e0b\u662f\u6709\u5173\u5185\u5bb9\u5e93\u7684\u4e00\u4e9b\u6709\u7528\u94fe\u63a5\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.vmware.com/en/VMware-vSphere/7.0/com.vmware.vsphere.vm_admin.doc/GUID-2A0F1C13-7336-45CE-B211-610D39A6E1F4.html"},"\u521b\u5efa\u5185\u5bb9\u5e93")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.vmware.com/en/VMware-vSphere/7.0/com.vmware.vsphere.vm_admin.doc/GUID-AC1545F0-F8BA-4CD2-96EB-21B3DFAA1DC1.html"},"\u5c06\u6a21\u677f\u514b\u9686\u5230\u5185\u5bb9\u5e93"))),(0,i.kt)("h2",{id:"\u5176\u4ed6\u8d44\u6e90"},"\u5176\u4ed6\u8d44\u6e90"),(0,i.kt)("p",null,"\u4ee5\u4e0b\u662f\u53ef\u80fd\u6709\u7528\u7684\u5176\u4ed6\u8d44\u6e90\u5217\u8868\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/azure/cloud-adoption-framework/manage/hybrid/server/best-practices/vmware-ubuntu-template"},"Linux \u6a21\u677f\u521b\u5efa\u6559\u7a0b")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/azure/cloud-adoption-framework/manage/hybrid/server/best-practices/vmware-windows-template"},"Windows \u6a21\u677f\u521b\u5efa\u6559\u7a0b"))))}d.isMDXComponent=!0}}]);