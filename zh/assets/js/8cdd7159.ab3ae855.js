"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[59097],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return m}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function u(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?u(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):u(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},u=Object.keys(e);for(r=0;r<u.length;r++)t=u[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(r=0;r<u.length;r++)t=u[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=r.createContext({}),s=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=s(e.components);return r.createElement(i.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,u=e.originalType,i=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=s(t),m=a,h=d["".concat(i,".").concat(m)]||d[m]||p[m]||u;return t?r.createElement(h,l(l({ref:n},c),{},{components:t})):r.createElement(h,l({ref:n},c))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var u=t.length,l=new Array(u);l[0]=d;var o={};for(var i in n)hasOwnProperty.call(n,i)&&(o[i]=n[i]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var s=2;s<u;s++)l[s]=t[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},85162:function(e,n,t){t.d(n,{Z:function(){return l}});var r=t(67294),a=t(86010),u="tabItem_Ymn6";function l(e){var n=e.children,t=e.hidden,l=e.className;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(u,l),hidden:t},n)}},65488:function(e,n,t){t.d(n,{Z:function(){return m}});var r=t(87462),a=t(67294),u=t(86010),l=t(72389),o=t(67392),i=t(7094),s=t(12466),c="tabList__CuJ",p="tabItem_LNqP";function d(e){var n,t,l=e.lazy,d=e.block,m=e.defaultValue,h=e.values,f=e.groupId,k=e.className,v=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=h?h:v.map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes}})),g=(0,o.l)(b,(function(e,n){return e.value===n.value}));if(g.length>0)throw new Error('Docusaurus error: Duplicate values "'+g.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var w=null===m?m:null!=(n=null!=m?m:null==(t=v.find((function(e){return e.props.default})))?void 0:t.props.value)?n:v[0].props.value;if(null!==w&&!b.some((function(e){return e.value===w})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+w+'" but none of its children has the corresponding value. Available values are: '+b.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var N=(0,i.U)(),E=N.tabGroupChoices,y=N.setTabGroupChoices,x=(0,a.useState)(w),O=x[0],C=x[1],_=[],B=(0,s.o5)().blockElementScrollPositionUntilNextRender;if(null!=f){var R=E[f];null!=R&&R!==O&&b.some((function(e){return e.value===R}))&&C(R)}var T=function(e){var n=e.currentTarget,t=_.indexOf(n),r=b[t].value;r!==O&&(B(n),C(r),null!=f&&y(f,String(r)))},z=function(e){var n,t=null;switch(e.key){case"ArrowRight":var r,a=_.indexOf(e.currentTarget)+1;t=null!=(r=_[a])?r:_[0];break;case"ArrowLeft":var u,l=_.indexOf(e.currentTarget)-1;t=null!=(u=_[l])?u:_[_.length-1]}null==(n=t)||n.focus()};return a.createElement("div",{className:(0,u.Z)("tabs-container",c)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,u.Z)("tabs",{"tabs--block":d},k)},b.map((function(e){var n=e.value,t=e.label,l=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:O===n?0:-1,"aria-selected":O===n,key:n,ref:function(e){return _.push(e)},onKeyDown:z,onFocus:T,onClick:T},l,{className:(0,u.Z)("tabs__item",p,null==l?void 0:l.className,{"tabs__item--active":O===n})}),null!=t?t:n)}))),l?(0,a.cloneElement)(v.filter((function(e){return e.props.value===O}))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},v.map((function(e,n){return(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==O})}))))}function m(e){var n=(0,l.Z)();return a.createElement(d,(0,r.Z)({key:String(n)},e))}},55144:function(e,n,t){t.r(n),t.d(n,{assets:function(){return d},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return m}});var r=t(87462),a=t(63366),u=(t(67294),t(3905)),l=t(65488),o=t(85162),i=["components"],s={title:"Rancher \u7ba1\u7406\u96c6\u7fa4\u7684\u8282\u70b9\u8981\u6c42",weight:1},c=void 0,p={unversionedId:"how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/node-requirements-for-rancher-managed-clusters",id:"how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/node-requirements-for-rancher-managed-clusters",title:"Rancher \u7ba1\u7406\u96c6\u7fa4\u7684\u8282\u70b9\u8981\u6c42",description:"\u672c\u9875\u63cf\u8ff0\u4e86 Rancher \u7ba1\u7406\u7684 Kubernetes \u96c6\u7fa4\u7684\u8981\u6c42\uff0c\u4f60\u7684\u5e94\u7528\u548c\u670d\u52a1\u5c06\u5b89\u88c5\u5728\u8fd9\u4e9b\u96c6\u7fa4\u4e2d\u3002\u8fd9\u4e9b\u4e0b\u6e38\u96c6\u7fa4\u5e94\u8be5\u4e0e\u8fd0\u884c Rancher \u7684\u4e09\u8282\u70b9\u96c6\u7fa4\u5206\u5f00\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/node-requirements-for-rancher-managed-clusters.md",sourceDirName:"how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup",slug:"/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/node-requirements-for-rancher-managed-clusters",permalink:"/zh/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/node-requirements-for-rancher-managed-clusters",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/node-requirements-for-rancher-managed-clusters.md",tags:[],version:"current",lastUpdatedAt:1663691987,formattedLastUpdatedAt:"2022/9/20",frontMatter:{title:"Rancher \u7ba1\u7406\u96c6\u7fa4\u7684\u8282\u70b9\u8981\u6c42",weight:1},sidebar:"tutorialSidebar",previous:{title:"\u5728 Rancher \u4e2d\u8bbe\u7f6e Kubernetes \u96c6\u7fa4",permalink:"/zh/pages-for-subheaders/kubernetes-clusters-in-rancher-setup"},next:{title:"\u751f\u4ea7\u5c31\u7eea\u96c6\u7fa4\u68c0\u67e5\u6e05\u5355",permalink:"/zh/pages-for-subheaders/checklist-for-production-ready-clusters"}},d={},m=[{value:"\u64cd\u4f5c\u7cfb\u7edf\u548c\u5bb9\u5668\u8fd0\u884c\u65f6\u8981\u6c42",id:"\u64cd\u4f5c\u7cfb\u7edf\u548c\u5bb9\u5668\u8fd0\u884c\u65f6\u8981\u6c42",level:2},{value:"Oracle Linux \u548c RHEL \u884d\u751f\u7684 Linux \u8282\u70b9",id:"oracle-linux-\u548c-rhel-\u884d\u751f\u7684-linux-\u8282\u70b9",level:3},{value:"SUSE Linux \u8282\u70b9",id:"suse-linux-\u8282\u70b9",level:3},{value:"Flatcar Container Linux \u8282\u70b9",id:"flatcar-container-linux-\u8282\u70b9",level:3},{value:"Windows \u8282\u70b9",id:"windows-\u8282\u70b9",level:3},{value:"\u786c\u4ef6\u8981\u6c42",id:"\u786c\u4ef6\u8981\u6c42",level:2},{value:"\u7f51\u7edc\u8981\u6c42",id:"\u7f51\u7edc\u8981\u6c42",level:2},{value:"\u53ef\u9009\uff1a\u5b89\u5168\u6ce8\u610f\u4e8b\u9879",id:"\u53ef\u9009\u5b89\u5168\u6ce8\u610f\u4e8b\u9879",level:2}],h={toc:m};function f(e){var n=e.components,t=(0,a.Z)(e,i);return(0,u.kt)("wrapper",(0,r.Z)({},h,t,{components:n,mdxType:"MDXLayout"}),(0,u.kt)("p",null,"\u672c\u9875\u63cf\u8ff0\u4e86 Rancher \u7ba1\u7406\u7684 Kubernetes \u96c6\u7fa4\u7684\u8981\u6c42\uff0c\u4f60\u7684\u5e94\u7528\u548c\u670d\u52a1\u5c06\u5b89\u88c5\u5728\u8fd9\u4e9b\u96c6\u7fa4\u4e2d\u3002\u8fd9\u4e9b\u4e0b\u6e38\u96c6\u7fa4\u5e94\u8be5\u4e0e\u8fd0\u884c Rancher \u7684\u4e09\u8282\u70b9\u96c6\u7fa4\u5206\u5f00\u3002"),(0,u.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,u.kt)("div",{parentName:"div",className:"admonition-heading"},(0,u.kt)("h5",{parentName:"div"},(0,u.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,u.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,u.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,u.kt)("div",{parentName:"div",className:"admonition-content"},(0,u.kt)("p",{parentName:"div"},"\u5982\u679c Rancher \u5b89\u88c5\u5728\u9ad8\u53ef\u7528\u7684 Kubernetes \u96c6\u7fa4\u4e0a\uff0cRancher Server \u7684\u4e09\u8282\u70b9\u96c6\u7fa4\u548c\u4e0b\u6e38\u96c6\u7fa4\u6709\u4e0d\u540c\u7684\u8981\u6c42\u3002\u6709\u5173 Rancher \u7684\u5b89\u88c5\u8981\u6c42\uff0c\u8bf7\u53c2\u8003",(0,u.kt)("a",{parentName:"p",href:"/zh/pages-for-subheaders/installation-requirements"},"\u5b89\u88c5\u6587\u6863"),"\u4e2d\u7684\u8282\u70b9\u8981\u6c42\u3002"))),(0,u.kt)("h2",{id:"\u64cd\u4f5c\u7cfb\u7edf\u548c\u5bb9\u5668\u8fd0\u884c\u65f6\u8981\u6c42"},"\u64cd\u4f5c\u7cfb\u7edf\u548c\u5bb9\u5668\u8fd0\u884c\u65f6\u8981\u6c42"),(0,u.kt)("p",null,"Rancher \u517c\u5bb9\u5f53\u524d\u6240\u6709\u7684\u4e3b\u6d41 Linux \u53d1\u884c\u7248\u548c\u4efb\u4f55\u901a\u7528\u7684 Docker \u7248\u672c\u3002\u6240\u6709\u4e0b\u6e38\u96c6\u7fa4\u7684 etcd \u548c controlplane \u8282\u70b9\u90fd\u9700\u8981\u8fd0\u884c\u5728 Linux \u4e0a\u3002\u800c Worker \u8282\u70b9\u53ef\u4ee5\u8fd0\u884c\u5728 Linux \u6216 ",(0,u.kt)("a",{parentName:"p",href:"#windows-%E8%8A%82%E7%82%B9"},"Windows Server")," \u4e0a\u3002"),(0,u.kt)("p",null,"\u5982\u9700\u4e86\u89e3\u5404\u4e2a Rancher \u7248\u672c\u901a\u8fc7\u4e86\u54ea\u4e9b\u64cd\u4f5c\u7cfb\u7edf\u548c Docker \u7248\u672c\u6d4b\u8bd5\uff0c\u8bf7\u53c2\u89c1",(0,u.kt)("a",{parentName:"p",href:"https://rancher.com/support-maintenance-terms/"},"\u652f\u6301\u548c\u7ef4\u62a4\u6761\u6b3e"),"\u3002"),(0,u.kt)("p",null,"\u6240\u6709\u652f\u6301\u7684\u64cd\u4f5c\u7cfb\u7edf\u90fd\u4f7f\u7528 64-bit x86 \u67b6\u6784\u3002"),(0,u.kt)("p",null,"\u5982\u679c\u4f60\u60f3\u4f7f\u7528 ARM64\uff0c\u8bf7\u53c2\u9605",(0,u.kt)("a",{parentName:"p",href:"/zh/getting-started/installation-and-upgrade/advanced-options/enable-experimental-features/rancher-on-arm64"},"\u5728 ARM64 \u4e0a\u8fd0\u884c\uff08\u5b9e\u9a8c\u529f\u80fd\uff09\u3002")),(0,u.kt)("p",null,"\u6709\u5173\u5982\u4f55\u5b89\u88c5 Docker \u7684\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605 ",(0,u.kt)("a",{parentName:"p",href:"https://docs.docker.com/"},"Docker \u5b98\u65b9\u6587\u6863"),"\u3002"),(0,u.kt)("h3",{id:"oracle-linux-\u548c-rhel-\u884d\u751f\u7684-linux-\u8282\u70b9"},"Oracle Linux \u548c RHEL \u884d\u751f\u7684 Linux \u8282\u70b9"),(0,u.kt)("p",null,"\u67d0\u4e9b\u6e90\u81ea RHEL \u7684 Linux \u53d1\u884c\u7248\uff08\u5305\u62ec Oracle Linux\uff09\u7684\u9ed8\u8ba4\u9632\u706b\u5899\u89c4\u5219\u53ef\u80fd\u4f1a\u963b\u6b62\u4e0e Helm \u7684\u901a\u4fe1\u3002\u6211\u4eec\u5efa\u8bae\u7981\u7528 firewalld\u3002\u5982\u679c\u4f60\u7684 Kubernetes \u7248\u672c\u662f 1.19\uff0c\u8bf7\u52a1\u5fc5\u7981\u7528 firewalld\u3002"),(0,u.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,u.kt)("div",{parentName:"div",className:"admonition-heading"},(0,u.kt)("h5",{parentName:"div"},(0,u.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,u.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,u.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,u.kt)("div",{parentName:"div",className:"admonition-content"},(0,u.kt)("p",{parentName:"div"},"\u5728 RHEL 8.4 \u4e2d\uff0cNetworkManager \u4e0a\u6709\u4e24\u4e2a\u989d\u5916\u7684\u670d\u52a1\uff0c\u5373 ",(0,u.kt)("inlineCode",{parentName:"p"},"nm-cloud-setup.service")," \u548c ",(0,u.kt)("inlineCode",{parentName:"p"},"nm-cloud-setup.timer"),"\u3002\u8fd9\u4e9b\u670d\u52a1\u589e\u52a0\u4e86\u4e00\u4e2a\u8def\u7531\u8868\uff0c\u5e72\u6270\u4e86 CNI \u63d2\u4ef6\u7684\u914d\u7f6e\u3002\u5982\u679c\u542f\u7528\u4e86\u8fd9\u4e9b\u670d\u52a1\uff0c\u4f60\u5fc5\u987b\u4f7f\u7528\u4ee5\u4e0b\u547d\u4ee4\u7981\u7528\u5b83\u4eec\uff0c\u7136\u540e\u91cd\u65b0\u542f\u52a8\u8282\u70b9\u4ee5\u6062\u590d\u8fde\u63a5\uff1a"),(0,u.kt)("pre",{parentName:"div"},(0,u.kt)("code",{parentName:"pre"},"systemctl disable nm-cloud-setup.service nm-cloud-setup.timer\nreboot\n")))),(0,u.kt)("h3",{id:"suse-linux-\u8282\u70b9"},"SUSE Linux \u8282\u70b9"),(0,u.kt)("p",null,"SUSE Linux \u53ef\u80fd\u6709\u4e00\u4e2a\u9632\u706b\u5899\uff0c\u9ed8\u8ba4\u60c5\u51b5\u4e0b\u4f1a\u963b\u6b62\u6240\u6709\u7aef\u53e3\u3002\u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u8bf7\u6309\u7167",(0,u.kt)("a",{parentName:"p",href:"/zh/getting-started/installation-and-upgrade/installation-requirements/port-requirements#%E6%89%93%E5%BC%80-suse-linux-%E7%AB%AF%E5%8F%A3"},"\u6b65\u9aa4"),"\u6253\u5f00\u5c06\u4e3b\u673a\u6dfb\u52a0\u5230\u81ea\u5b9a\u4e49\u96c6\u7fa4\u6240\u9700\u7684\u7aef\u53e3\u3002"),(0,u.kt)("h3",{id:"flatcar-container-linux-\u8282\u70b9"},"Flatcar Container Linux \u8282\u70b9"),(0,u.kt)("p",null,"\u4f7f\u7528 Flatcar Container Linux \u8282\u70b9",(0,u.kt)("a",{parentName:"p",href:"/zh/pages-for-subheaders/launch-kubernetes-with-rancher"},"\u901a\u8fc7 Rancher \u542f\u52a8 Kubernetes")," \u65f6\uff0c\u9700\u8981\u5728 ",(0,u.kt)("a",{parentName:"p",href:"/zh/reference-guides/cluster-configuration/rancher-server-configuration/rke1-cluster-configuration#rke-%E9%9B%86%E7%BE%A4%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6%E5%8F%82%E8%80%83"},"Cluster Config \u6587\u4ef6"),"\u4e2d\u4f7f\u7528\u5982\u4e0b\u914d\u7f6e\uff1a"),(0,u.kt)(l.Z,{mdxType:"Tabs"},(0,u.kt)(o.Z,{value:"Canal",mdxType:"TabItem"},(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-yaml"},"rancher_kubernetes_engine_config:\n  network:\n    plugin: canal\n    options:\n      canal_flex_volume_plugin_dir: /opt/kubernetes/kubelet-plugins/volume/exec/nodeagent~uds\n      flannel_backend_type: vxlan\n\n  services:\n    kube-controller:\n      extra_args:\n        flex-volume-plugin-dir: /opt/kubernetes/kubelet-plugins/volume/exec/\n"))),(0,u.kt)(o.Z,{value:"Calico",mdxType:"TabItem"},(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-yaml"},"rancher_kubernetes_engine_config:\n  network:\n    plugin: calico\n    options:\n      calico_flex_volume_plugin_dir: /opt/kubernetes/kubelet-plugins/volume/exec/nodeagent~uds\n      flannel_backend_type: vxlan\n\n  services:\n    kube-controller:\n      extra_args:\n        flex-volume-plugin-dir: /opt/kubernetes/kubelet-plugins/volume/exec/\n")))),(0,u.kt)("p",null,"\u8fd8\u9700\u8981\u542f\u7528 Docker \u670d\u52a1\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528\u4ee5\u4e0b\u547d\u4ee4\u542f\u7528 Docker \u670d\u52a1\uff1a"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre"},"systemctl enable docker.service\n")),(0,u.kt)("p",null,"\u4f7f\u7528",(0,u.kt)("a",{parentName:"p",href:"/zh/pages-for-subheaders/about-provisioning-drivers#%E4%B8%BB%E6%9C%BA%E9%A9%B1%E5%8A%A8"},"\u4e3b\u673a\u9a71\u52a8"),"\u65f6\u4f1a\u81ea\u52a8\u542f\u7528 Docker \u670d\u52a1\u3002"),(0,u.kt)("h3",{id:"windows-\u8282\u70b9"},"Windows \u8282\u70b9"),(0,u.kt)("p",null,"\u8fd0\u884c Windows Server \u8282\u70b9\u5fc5\u987b\u4f7f\u7528 Docker \u4f01\u4e1a\u7248\u3002"),(0,u.kt)("p",null,"Windows \u8282\u70b9\u53ea\u80fd\u7528\u4e8e Worker \u8282\u70b9\u3002\u8bf7\u53c2\u9605",(0,u.kt)("a",{parentName:"p",href:"/zh/pages-for-subheaders/use-windows-clusters"},"\u914d\u7f6e Windows \u81ea\u5b9a\u4e49\u96c6\u7fa4"),"\u3002"),(0,u.kt)("h2",{id:"\u786c\u4ef6\u8981\u6c42"},"\u786c\u4ef6\u8981\u6c42"),(0,u.kt)("p",null,"\u4f60\u7684\u5de5\u4f5c\u8d1f\u8f7d\u51b3\u5b9a\u4e86\u5177\u6709 ",(0,u.kt)("inlineCode",{parentName:"p"},"worker")," \u89d2\u8272\u7684\u8282\u70b9\u7684\u786c\u4ef6\u8981\u6c42\u3002\u8fd0\u884c Kubernetes \u8282\u70b9\u7ec4\u4ef6\u7684\u6700\u4f4e\u8981\u6c42\u662f 1 \u4e2a CPU\uff08\u6838\u5fc3\uff09\u548c 1GB \u5185\u5b58\u3002"),(0,u.kt)("p",null,"\u5173\u4e8e CPU \u548c\u5185\u5b58\uff0c\u5efa\u8bae\u5c06 Kubernetes \u96c6\u7fa4\u7684\u4e0d\u540c\u5e73\u9762\uff08etcd\u3001controlplane \u548c worker\uff09\u6258\u7ba1\u5728\u4e0d\u540c\u7684\u8282\u70b9\u4e0a\uff0c\u4ee5\u4fbf\u5b83\u4eec\u53ef\u4ee5\u76f8\u4e92\u72ec\u7acb\u6269\u5c55\u3002"),(0,u.kt)("p",null,"\u6709\u5173\u5927\u578b Kubernetes \u96c6\u7fa4\u7684\u786c\u4ef6\u5efa\u8bae\uff0c\u8bf7\u53c2\u9605",(0,u.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/setup/best-practices/cluster-large/"},"\u6784\u5efa\u5927\u578b\u96c6\u7fa4"),"\u7684\u5b98\u65b9 Kubernetes \u6587\u6863\u3002"),(0,u.kt)("p",null,"\u6709\u5173\u751f\u4ea7\u73af\u5883\u4e2d etcd \u96c6\u7fa4\u7684\u786c\u4ef6\u5efa\u8bae\uff0c\u8bf7\u53c2\u9605\u5b98\u65b9 ",(0,u.kt)("a",{parentName:"p",href:"https://etcd.io/docs/v3.4.0/op-guide/hardware/"},"etcd \u6587\u6863"),"\u3002"),(0,u.kt)("h2",{id:"\u7f51\u7edc\u8981\u6c42"},"\u7f51\u7edc\u8981\u6c42"),(0,u.kt)("p",null,"\u5bf9\u4e8e\u751f\u4ea7\u96c6\u7fa4\uff0c\u6211\u4eec\u5efa\u8bae\u4f60\u901a\u8fc7\u4ec5\u6253\u5f00\u4ee5\u4e0b\u7aef\u53e3\u8981\u6c42\u4e2d\u5b9a\u4e49\u7684\u7aef\u53e3\u6765\u9650\u5236\u6d41\u91cf\u3002"),(0,u.kt)("p",null,"\u9700\u8981\u5f00\u653e\u7684\u7aef\u53e3\u6839\u636e\u4e0b\u6e38\u96c6\u7fa4\u7684\u542f\u52a8\u65b9\u5f0f\u800c\u6709\u6240\u4e0d\u540c\u3002\u4ee5\u4e0b\u5217\u51fa\u4e86\u9700\u8981\u4e3a\u4e0d\u540c",(0,u.kt)("a",{parentName:"p",href:"/zh/pages-for-subheaders/kubernetes-clusters-in-rancher-setup"},"\u96c6\u7fa4\u521b\u5efa\u9009\u9879"),"\u6253\u5f00\u7684\u7aef\u53e3\u3002"),(0,u.kt)("p",null,"\u6709\u5173 Kubernetes \u96c6\u7fa4\u4e2d etcd \u8282\u70b9\u3001controlplane \u8282\u70b9\u548c Worker \u8282\u70b9\u7684\u7aef\u53e3\u8981\u6c42\u7684\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605 ",(0,u.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rke/latest/en/os/#ports"},"Rancher Kubernetes Engine \u7684\u7aef\u53e3\u8981\u6c42"),"\u3002"),(0,u.kt)("p",null,"\u5728",(0,u.kt)("a",{parentName:"p",href:"/zh/getting-started/installation-and-upgrade/installation-requirements/port-requirements#%E4%B8%8B%E6%B8%B8-kubernetes-%E9%9B%86%E7%BE%A4%E8%8A%82%E7%82%B9"},"\u4e0b\u6e38\u96c6\u7fa4\u7aef\u53e3\u8981\u6c42"),"\u4e2d\uff0c\u4f60\u53ef\u4ee5\u627e\u5230\u5728\u5404\u79cd\u60c5\u51b5\u4e0b\u4f7f\u7528\u7684\u7aef\u53e3\u7684\u8be6\u7ec6\u4fe1\u606f\u3002"),(0,u.kt)("h2",{id:"\u53ef\u9009\u5b89\u5168\u6ce8\u610f\u4e8b\u9879"},"\u53ef\u9009\uff1a\u5b89\u5168\u6ce8\u610f\u4e8b\u9879"),(0,u.kt)("p",null,"\u5982\u679c\u4f60\u8981\u914d\u7f6e\u7b26\u5408 CIS\uff08\u4e92\u8054\u7f51\u5b89\u5168\u4e2d\u5fc3\uff09Kubernetes \u57fa\u51c6\u7684 Kubernetes \u96c6\u7fa4\uff0c\u6211\u4eec\u5efa\u8bae\u4f60\u5728\u5b89\u88c5 Kubernetes \u4e4b\u524d\u6309\u7167\u6211\u4eec\u7684\u5f3a\u5316\u6307\u5357\u6765\u914d\u7f6e\u8282\u70b9\u3002"),(0,u.kt)("p",null,"\u6709\u5173\u5f3a\u5316\u6307\u5357\u7684\u66f4\u591a\u4fe1\u606f\uff0c\u4ee5\u53ca\u4e86\u89e3\u54ea\u4e2a\u6307\u5357\u7248\u672c\u5bf9\u5e94\u4e8e\u4f60\u7684 Rancher \u548c Kubernetes \u7248\u672c\uff0c\u8bf7\u53c2\u9605",(0,u.kt)("a",{parentName:"p",href:"/zh/pages-for-subheaders/rancher-security#rancher-%E5%BC%BA%E5%8C%96%E6%8C%87%E5%8D%97"},"\u5b89\u5168"),"\u3002"))}f.isMDXComponent=!0}}]);