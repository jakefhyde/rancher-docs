"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[94398],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return c}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=u(n),c=a,h=m["".concat(s,".").concat(c)]||m[c]||d[c]||l;return n?r.createElement(h,i(i({ref:t},p),{},{components:n})):r.createElement(h,i({ref:t},p))}));function c(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var u=2;u<l;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},85162:function(e,t,n){n.d(t,{Z:function(){return i}});var r=n(67294),a=n(86010),l="tabItem_Ymn6";function i(e){var t=e.children,n=e.hidden,i=e.className;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(l,i),hidden:n},t)}},65488:function(e,t,n){n.d(t,{Z:function(){return c}});var r=n(87462),a=n(67294),l=n(86010),i=n(72389),o=n(67392),s=n(7094),u=n(12466),p="tabList__CuJ",d="tabItem_LNqP";function m(e){var t,n,i=e.lazy,m=e.block,c=e.defaultValue,h=e.values,k=e.groupId,g=e.className,f=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),N=null!=h?h:f.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),v=(0,o.l)(N,(function(e,t){return e.value===t.value}));if(v.length>0)throw new Error('Docusaurus error: Duplicate values "'+v.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var b=null===c?c:null!=(t=null!=c?c:null==(n=f.find((function(e){return e.props.default})))?void 0:n.props.value)?t:f[0].props.value;if(null!==b&&!N.some((function(e){return e.value===b})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+b+'" but none of its children has the corresponding value. Available values are: '+N.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var y=(0,s.U)(),w=y.tabGroupChoices,R=y.setTabGroupChoices,q=(0,a.useState)(b),U=q[0],P=q[1],T=[],O=(0,u.o5)().blockElementScrollPositionUntilNextRender;if(null!=k){var D=w[k];null!=D&&D!==U&&N.some((function(e){return e.value===D}))&&P(D)}var I=function(e){var t=e.currentTarget,n=T.indexOf(t),r=N[n].value;r!==U&&(O(t),P(r),null!=k&&R(k,String(r)))},C=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r,a=T.indexOf(e.currentTarget)+1;n=null!=(r=T[a])?r:T[0];break;case"ArrowLeft":var l,i=T.indexOf(e.currentTarget)-1;n=null!=(l=T[i])?l:T[T.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:(0,l.Z)("tabs-container",p)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":m},g)},N.map((function(e){var t=e.value,n=e.label,i=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:U===t?0:-1,"aria-selected":U===t,key:t,ref:function(e){return T.push(e)},onKeyDown:C,onFocus:I,onClick:I},i,{className:(0,l.Z)("tabs__item",d,null==i?void 0:i.className,{"tabs__item--active":U===t})}),null!=n?n:t)}))),i?(0,a.cloneElement)(f.filter((function(e){return e.props.value===U}))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},f.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==U})}))))}function c(e){var t=(0,i.Z)();return a.createElement(m,(0,r.Z)({key:String(t)},e))}},14939:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return p},default:function(){return k},frontMatter:function(){return u},metadata:function(){return d},toc:function(){return c}});var r=n(87462),a=n(63366),l=(n(67294),n(3905)),i=n(65488),o=n(85162),s=["components"],u={title:"Installation Requirements",description:"Learn the node requirements for each node running Rancher server when you\u2019re configuring  Rancher to run either in a Docker or Kubernetes setup",weight:1},p=void 0,d={unversionedId:"pages-for-subheaders/installation-requirements",id:"version-2.0-2.4/pages-for-subheaders/installation-requirements",title:"Installation Requirements",description:"Learn the node requirements for each node running Rancher server when you\u2019re configuring  Rancher to run either in a Docker or Kubernetes setup",source:"@site/versioned_docs/version-2.0-2.4/pages-for-subheaders/installation-requirements.md",sourceDirName:"pages-for-subheaders",slug:"/pages-for-subheaders/installation-requirements",permalink:"/zh/v2.0-v2.4/pages-for-subheaders/installation-requirements",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.0-2.4/pages-for-subheaders/installation-requirements.md",tags:[],version:"2.0-2.4",lastUpdatedAt:1663691987,formattedLastUpdatedAt:"2022/9/20",frontMatter:{title:"Installation Requirements",description:"Learn the node requirements for each node running Rancher server when you\u2019re configuring  Rancher to run either in a Docker or Kubernetes setup",weight:1},sidebar:"tutorialSidebar",previous:{title:"Installing/Upgrading Rancher",permalink:"/zh/v2.0-v2.4/pages-for-subheaders/installation-and-upgrade"},next:{title:"Installing Docker",permalink:"/zh/v2.0-v2.4/getting-started/installation-and-upgrade/installation-requirements/install-docker"}},m={},c=[{value:"RKE Specific Requirements",id:"rke-specific-requirements",level:3},{value:"K3s Specific Requirements",id:"k3s-specific-requirements",level:3},{value:"Installing Docker",id:"installing-docker",level:3},{value:"CPU and Memory",id:"cpu-and-memory",level:3},{value:"CPU and Memory for Rancher before v2.4.0",id:"cpu-and-memory-for-rancher-before-v240",level:3},{value:"Disks",id:"disks",level:3},{value:"Node IP Addresses",id:"node-ip-addresses",level:3},{value:"Port Requirements",id:"port-requirements",level:3}],h={toc:c};function k(e){var t=e.components,n=(0,a.Z)(e,s);return(0,l.kt)("wrapper",(0,r.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"This page describes the software, hardware, and networking requirements for the nodes where the Rancher server will be installed. The Rancher server can be installed on a single node or a high-availability Kubernetes cluster."),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"It is important to note that if you install Rancher on a Kubernetes cluster, requirements are different from the ",(0,l.kt)("a",{parentName:"p",href:"/zh/v2.0-v2.4/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/node-requirements-for-rancher-managed-clusters"},"node requirements for downstream user clusters,")," which will run your apps and services.")),(0,l.kt)("p",null,"Make sure the node(s) for the Rancher server fulfill the following requirements:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#operating-systems-and-container-runtime-requirements"},"Operating Systems and Container Runtime Requirements")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#hardware-requirements"},"Hardware Requirements"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#cpu-and-memory"},"CPU and Memory")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#cpu-and-memory-for-rancher-before-v2-4-0"},"CPU and Memory for Rancher before v2.4.0")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#disks"},"Disks")))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#networking-requirements"},"Networking Requirements"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#node-ip-addresses"},"Node IP Addresses")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#port-requirements"},"Port Requirements"))))),(0,l.kt)("p",null,"For a list of best practices that we recommend for running the Rancher server in production, refer to the ",(0,l.kt)("a",{parentName:"p",href:"/zh/v2.0-v2.4/reference-guides/best-practices/deployment-types"},"best practices section.")),(0,l.kt)("p",null,"The Rancher UI works best in Firefox or Chrome."),(0,l.kt)("h1",{id:"operating-systems-and-container-runtime-requirements"},"Operating Systems and Container Runtime Requirements"),(0,l.kt)("p",null,"Rancher should work with any modern Linux distribution."),(0,l.kt)("p",null,"For details on which OS, Docker, and Kubernetes versions were tested with each Rancher version, refer to the ",(0,l.kt)("a",{parentName:"p",href:"https://rancher.com/support-maintenance-terms/"},"support maintenance terms.")),(0,l.kt)("p",null,"All supported operating systems are 64-bit x86."),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"ntp")," (Network Time Protocol) package should be installed. This prevents errors with certificate validation that can occur when the time is not synchronized between the client and server."),(0,l.kt)("p",null,"Some distributions of Linux may have default firewall rules that block communication with Helm. We recommend disabling firewalld. For Kubernetes 1.19, firewalld must be turned off."),(0,l.kt)("p",null,"If you plan to run Rancher on ARM64, see ",(0,l.kt)("a",{parentName:"p",href:"/zh/v2.0-v2.4/getting-started/installation-and-upgrade/advanced-options/enable-experimental-features/rancher-on-arm64"},"Running on ARM64 (Experimental).")),(0,l.kt)("h3",{id:"rke-specific-requirements"},"RKE Specific Requirements"),(0,l.kt)("p",null,"For the container runtime, RKE should work with any modern Docker version."),(0,l.kt)("h3",{id:"k3s-specific-requirements"},"K3s Specific Requirements"),(0,l.kt)("p",null,"For the container runtime, K3s should work with any modern version of Docker or containerd."),(0,l.kt)("p",null,"Rancher needs to be installed on a supported Kubernetes version. To find out which versions of Kubernetes are supported for your Rancher version, refer to the ",(0,l.kt)("a",{parentName:"p",href:"https://rancher.com/support-maintenance-terms/"},"support maintenance terms.")," To specify the K3s version, use the INSTALL_K3S_VERSION environment variable when running the K3s installation script."),(0,l.kt)("p",null,"If you are installing Rancher on a K3s cluster with ",(0,l.kt)("strong",{parentName:"p"},"Raspbian Buster"),", follow ",(0,l.kt)("a",{parentName:"p",href:"https://rancher.com/docs/k3s/latest/en/advanced/#enabling-legacy-iptables-on-raspbian-buster"},"these steps")," to switch to legacy iptables."),(0,l.kt)("p",null,"If you are installing Rancher on a K3s cluster with Alpine Linux, follow ",(0,l.kt)("a",{parentName:"p",href:"https://rancher.com/docs/k3s/latest/en/advanced/#additional-preparation-for-alpine-linux-setup"},"these steps")," for additional setup."),(0,l.kt)("h3",{id:"installing-docker"},"Installing Docker"),(0,l.kt)("p",null,"Docker is required for Helm chart installs, and it can be installed by following the steps in the official ",(0,l.kt)("a",{parentName:"p",href:"https://docs.docker.com/"},"Docker documentation.")," Rancher also provides ",(0,l.kt)("a",{parentName:"p",href:"/zh/v2.0-v2.4/getting-started/installation-and-upgrade/installation-requirements/install-docker"},"scripts")," to install Docker with one command."),(0,l.kt)("h1",{id:"hardware-requirements"},"Hardware Requirements"),(0,l.kt)("p",null,"This section describes the CPU, memory, and disk requirements for the nodes where the Rancher server is installed."),(0,l.kt)("h3",{id:"cpu-and-memory"},"CPU and Memory"),(0,l.kt)("p",null,"Hardware requirements scale based on the size of your Rancher deployment. Provision each individual node according to the requirements. The requirements are different depending on if you are installing Rancher in a single container with Docker, or if you are installing Rancher on a Kubernetes cluster."),(0,l.kt)(i.Z,{mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"RKE",mdxType:"TabItem"},(0,l.kt)("p",null,"These requirements apply to each host in an ",(0,l.kt)("a",{parentName:"p",href:"/zh/v2.0-v2.4/pages-for-subheaders/install-upgrade-on-a-kubernetes-cluster"},"RKE Kubernetes cluster where the Rancher server is installed.")),(0,l.kt)("p",null,"Performance increased in Rancher v2.4.0. For the requirements of Rancher before v2.4.0, refer to ",(0,l.kt)("a",{parentName:"p",href:"#cpu-and-memory-for-rancher-before-v2-4-0"},"this section.")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Deployment Size"),(0,l.kt)("th",{parentName:"tr",align:null},"Clusters"),(0,l.kt)("th",{parentName:"tr",align:null},"Nodes"),(0,l.kt)("th",{parentName:"tr",align:null},"vCPUs"),(0,l.kt)("th",{parentName:"tr",align:null},"RAM"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Small"),(0,l.kt)("td",{parentName:"tr",align:null},"Up to 150"),(0,l.kt)("td",{parentName:"tr",align:null},"Up to 1500"),(0,l.kt)("td",{parentName:"tr",align:null},"2"),(0,l.kt)("td",{parentName:"tr",align:null},"8 GB")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Medium"),(0,l.kt)("td",{parentName:"tr",align:null},"Up to 300"),(0,l.kt)("td",{parentName:"tr",align:null},"Up to 3000"),(0,l.kt)("td",{parentName:"tr",align:null},"4"),(0,l.kt)("td",{parentName:"tr",align:null},"16 GB")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Large"),(0,l.kt)("td",{parentName:"tr",align:null},"Up to 500"),(0,l.kt)("td",{parentName:"tr",align:null},"Up to 5000"),(0,l.kt)("td",{parentName:"tr",align:null},"8"),(0,l.kt)("td",{parentName:"tr",align:null},"32 GB")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"X-Large"),(0,l.kt)("td",{parentName:"tr",align:null},"Up to 1000"),(0,l.kt)("td",{parentName:"tr",align:null},"Up to 10,000"),(0,l.kt)("td",{parentName:"tr",align:null},"16"),(0,l.kt)("td",{parentName:"tr",align:null},"64 GB")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"XX-Large"),(0,l.kt)("td",{parentName:"tr",align:null},"Up to 2000"),(0,l.kt)("td",{parentName:"tr",align:null},"Up to 20,000"),(0,l.kt)("td",{parentName:"tr",align:null},"32"),(0,l.kt)("td",{parentName:"tr",align:null},"128 GB")))),(0,l.kt)("p",null,"Every use case and environment is different. Please ",(0,l.kt)("a",{parentName:"p",href:"https://rancher.com/contact/"},"contact Rancher")," to review yours.")),(0,l.kt)(o.Z,{value:"K3s",mdxType:"TabItem"},(0,l.kt)("p",null,"These requirements apply to each host in a ",(0,l.kt)("a",{parentName:"p",href:"/zh/v2.0-v2.4/pages-for-subheaders/install-upgrade-on-a-kubernetes-cluster"},"K3s Kubernetes cluster where the Rancher server is installed.")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Deployment Size"),(0,l.kt)("th",{parentName:"tr",align:null},"Clusters"),(0,l.kt)("th",{parentName:"tr",align:null},"Nodes"),(0,l.kt)("th",{parentName:"tr",align:null},"vCPUs"),(0,l.kt)("th",{parentName:"tr",align:null},"RAM"),(0,l.kt)("th",{parentName:"tr",align:null},"Database Size"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Small"),(0,l.kt)("td",{parentName:"tr",align:null},"Up to 150"),(0,l.kt)("td",{parentName:"tr",align:null},"Up to 1500"),(0,l.kt)("td",{parentName:"tr",align:null},"2"),(0,l.kt)("td",{parentName:"tr",align:null},"8 GB"),(0,l.kt)("td",{parentName:"tr",align:null},"2 cores, 4 GB + 1000 IOPS")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Medium"),(0,l.kt)("td",{parentName:"tr",align:null},"Up to 300"),(0,l.kt)("td",{parentName:"tr",align:null},"Up to 3000"),(0,l.kt)("td",{parentName:"tr",align:null},"4"),(0,l.kt)("td",{parentName:"tr",align:null},"16 GB"),(0,l.kt)("td",{parentName:"tr",align:null},"2 cores, 4 GB + 1000 IOPS")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Large"),(0,l.kt)("td",{parentName:"tr",align:null},"Up to 500"),(0,l.kt)("td",{parentName:"tr",align:null},"Up to 5000"),(0,l.kt)("td",{parentName:"tr",align:null},"8"),(0,l.kt)("td",{parentName:"tr",align:null},"32 GB"),(0,l.kt)("td",{parentName:"tr",align:null},"2 cores, 4 GB + 1000 IOPS")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"X-Large"),(0,l.kt)("td",{parentName:"tr",align:null},"Up to 1000"),(0,l.kt)("td",{parentName:"tr",align:null},"Up to 10,000"),(0,l.kt)("td",{parentName:"tr",align:null},"16"),(0,l.kt)("td",{parentName:"tr",align:null},"64 GB"),(0,l.kt)("td",{parentName:"tr",align:null},"2 cores, 4 GB + 1000 IOPS")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"XX-Large"),(0,l.kt)("td",{parentName:"tr",align:null},"Up to 2000"),(0,l.kt)("td",{parentName:"tr",align:null},"Up to 20,000"),(0,l.kt)("td",{parentName:"tr",align:null},"32"),(0,l.kt)("td",{parentName:"tr",align:null},"128 GB"),(0,l.kt)("td",{parentName:"tr",align:null},"2 cores, 4 GB + 1000 IOPS")))),(0,l.kt)("p",null,"Every use case and environment is different. Please ",(0,l.kt)("a",{parentName:"p",href:"https://rancher.com/contact/"},"contact Rancher")," to review yours.")),(0,l.kt)(o.Z,{value:"Docker",mdxType:"TabItem"},(0,l.kt)("p",null,"These requirements apply to a host with a ",(0,l.kt)("a",{parentName:"p",href:"/zh/v2.0-v2.4/pages-for-subheaders/rancher-on-a-single-node-with-docker"},"single-node")," installation of Rancher."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Deployment Size"),(0,l.kt)("th",{parentName:"tr",align:null},"Clusters"),(0,l.kt)("th",{parentName:"tr",align:null},"Nodes"),(0,l.kt)("th",{parentName:"tr",align:null},"vCPUs"),(0,l.kt)("th",{parentName:"tr",align:null},"RAM"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Small"),(0,l.kt)("td",{parentName:"tr",align:null},"Up to 5"),(0,l.kt)("td",{parentName:"tr",align:null},"Up to 50"),(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"4 GB")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Medium"),(0,l.kt)("td",{parentName:"tr",align:null},"Up to 15"),(0,l.kt)("td",{parentName:"tr",align:null},"Up to 200"),(0,l.kt)("td",{parentName:"tr",align:null},"2"),(0,l.kt)("td",{parentName:"tr",align:null},"8 GB")))))),(0,l.kt)("h3",{id:"cpu-and-memory-for-rancher-before-v240"},"CPU and Memory for Rancher before v2.4.0"),(0,l.kt)("details",null,(0,l.kt)("summary",null,"Click to expand"),(0,l.kt)("p",null,"These requirements apply to installing Rancher on an RKE Kubernetes cluster before Rancher v2.4.0:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Deployment Size"),(0,l.kt)("th",{parentName:"tr",align:null},"Clusters"),(0,l.kt)("th",{parentName:"tr",align:null},"Nodes"),(0,l.kt)("th",{parentName:"tr",align:null},"vCPUs"),(0,l.kt)("th",{parentName:"tr",align:null},"RAM"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Small"),(0,l.kt)("td",{parentName:"tr",align:null},"Up to 5"),(0,l.kt)("td",{parentName:"tr",align:null},"Up to 50"),(0,l.kt)("td",{parentName:"tr",align:null},"2"),(0,l.kt)("td",{parentName:"tr",align:null},"8 GB")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Medium"),(0,l.kt)("td",{parentName:"tr",align:null},"Up to 15"),(0,l.kt)("td",{parentName:"tr",align:null},"Up to 200"),(0,l.kt)("td",{parentName:"tr",align:null},"4"),(0,l.kt)("td",{parentName:"tr",align:null},"16 GB")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Large"),(0,l.kt)("td",{parentName:"tr",align:null},"Up to 50"),(0,l.kt)("td",{parentName:"tr",align:null},"Up to 500"),(0,l.kt)("td",{parentName:"tr",align:null},"8"),(0,l.kt)("td",{parentName:"tr",align:null},"32 GB")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"X-Large"),(0,l.kt)("td",{parentName:"tr",align:null},"Up to 100"),(0,l.kt)("td",{parentName:"tr",align:null},"Up to 1000"),(0,l.kt)("td",{parentName:"tr",align:null},"32"),(0,l.kt)("td",{parentName:"tr",align:null},"128 GB")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"XX-Large"),(0,l.kt)("td",{parentName:"tr",align:null},"100+"),(0,l.kt)("td",{parentName:"tr",align:null},"1000+"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://rancher.com/contact/"},"Contact Rancher")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://rancher.com/contact/"},"Contact Rancher")))))),(0,l.kt)("h3",{id:"disks"},"Disks"),(0,l.kt)("p",null,"Rancher performance depends on etcd in the cluster performance. To ensure optimal speed, we recommend always using SSD disks to back your Rancher management Kubernetes cluster. On cloud providers, you will also want to use the minimum size that allows the maximum IOPS. In larger clusters, consider using dedicated storage devices for etcd data and wal directories."),(0,l.kt)("h1",{id:"networking-requirements"},"Networking Requirements"),(0,l.kt)("p",null,"This section describes the networking requirements for the node(s) where the Rancher server is installed."),(0,l.kt)("h3",{id:"node-ip-addresses"},"Node IP Addresses"),(0,l.kt)("p",null,"Each node used should have a static IP configured, regardless of whether you are installing Rancher on a single node or on an HA cluster. In case of DHCP, each node should have a DHCP reservation to make sure the node gets the same IP allocated."),(0,l.kt)("h3",{id:"port-requirements"},"Port Requirements"),(0,l.kt)("p",null,"To operate properly, Rancher requires a number of ports to be open on Rancher nodes and on downstream Kubernetes cluster nodes. ",(0,l.kt)("a",{parentName:"p",href:"/zh/v2.0-v2.4/getting-started/installation-and-upgrade/installation-requirements/port-requirements"},"Port Requirements")," lists all the necessary ports for Rancher and Downstream Clusters for the different cluster types."))}k.isMDXComponent=!0}}]);