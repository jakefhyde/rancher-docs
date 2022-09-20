"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[86459],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return f}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(r),f=o,h=d["".concat(l,".").concat(f)]||d[f]||p[f]||i;return r?n.createElement(h,a(a({ref:t},c),{},{components:r})):n.createElement(h,a({ref:t},c))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var u=2;u<i;u++)a[u]=r[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},5087:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return p}});var n=r(87462),o=r(63366),i=(r(67294),r(3905)),a=["components"],s={title:"RKE Cluster Configuration",weight:1},l=void 0,u={unversionedId:"reference-guides/cluster-configuration/rancher-server-configuration/rke1-cluster-configuration",id:"version-2.5/reference-guides/cluster-configuration/rancher-server-configuration/rke1-cluster-configuration",title:"RKE Cluster Configuration",description:"In clusters launched by RKE, you can edit any of the remaining options that follow.",source:"@site/versioned_docs/version-2.5/reference-guides/cluster-configuration/rancher-server-configuration/rke1-cluster-configuration.md",sourceDirName:"reference-guides/cluster-configuration/rancher-server-configuration",slug:"/reference-guides/cluster-configuration/rancher-server-configuration/rke1-cluster-configuration",permalink:"/v2.5/reference-guides/cluster-configuration/rancher-server-configuration/rke1-cluster-configuration",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.5/reference-guides/cluster-configuration/rancher-server-configuration/rke1-cluster-configuration.md",tags:[],version:"2.5",lastUpdatedAt:1663691987,formattedLastUpdatedAt:"9/20/2022",frontMatter:{title:"RKE Cluster Configuration",weight:1},sidebar:"tutorialSidebar",previous:{title:"Rancher Server Configuration",permalink:"/v2.5/pages-for-subheaders/rancher-server-configuration"},next:{title:"EKS Cluster Configuration Reference",permalink:"/v2.5/reference-guides/cluster-configuration/rancher-server-configuration/eks-cluster-configuration"}},c={},p=[{value:"Kubernetes Version",id:"kubernetes-version",level:3},{value:"Network Provider",id:"network-provider",level:3},{value:"Project Network Isolation",id:"project-network-isolation",level:3},{value:"Nginx Ingress",id:"nginx-ingress",level:3},{value:"Metrics Server Monitoring",id:"metrics-server-monitoring",level:3},{value:"Pod Security Policy Support",id:"pod-security-policy-support",level:3},{value:"Docker version on nodes",id:"docker-version-on-nodes",level:3},{value:"Docker Root Directory",id:"docker-root-directory",level:3},{value:"Default Pod Security Policy",id:"default-pod-security-policy",level:3},{value:"Cloud Provider",id:"cloud-provider",level:3}],d={toc:p};function f(e){var t=e.components,s=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"In ",(0,i.kt)("a",{parentName:"p",href:"/v2.5/pages-for-subheaders/launch-kubernetes-with-rancher"},"clusters launched by RKE"),", you can edit any of the remaining options that follow."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#configuration-options-in-the-rancher-ui"},"Configuration Options in the Rancher UI")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#editing-clusters-with-yaml"},"Editing Clusters with YAML")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#updating-ingress-nginx"},"Updating ingress-nginx"))),(0,i.kt)("h1",{id:"configuration-options-in-the-rancher-ui"},"Configuration Options in the Rancher UI"),(0,i.kt)("p",null,"To edit your cluster, open the ",(0,i.kt)("strong",{parentName:"p"},"Global")," view, make sure the ",(0,i.kt)("strong",{parentName:"p"},"Clusters")," tab is selected, and then select ",(0,i.kt)("strong",{parentName:"p"},"\u22ee"," > Edit")," for the cluster that you want to edit."),(0,i.kt)("p",null,"Some advanced configuration options are not exposed in the Rancher UI forms, but they can be enabled by editing the RKE cluster configuration file in YAML. For the complete reference of configurable options for RKE Kubernetes clusters in YAML, see the ",(0,i.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rke/latest/en/config-options/"},"RKE documentation.")),(0,i.kt)("h3",{id:"kubernetes-version"},"Kubernetes Version"),(0,i.kt)("p",null,"The version of Kubernetes installed on each cluster node. For more detail, see ",(0,i.kt)("a",{parentName:"p",href:"/v2.5/getting-started/installation-and-upgrade/upgrade-and-roll-back-kubernetes"},"Upgrading Kubernetes"),"."),(0,i.kt)("h3",{id:"network-provider"},"Network Provider"),(0,i.kt)("p",null,"The \\container networking interface (CNI) that powers networking for your cluster.",(0,i.kt)("br",null),(0,i.kt)("br",null),(0,i.kt)("strong",{parentName:"p"},"Note:")," You can only choose this option while provisioning your cluster. It cannot be edited later."),(0,i.kt)("h3",{id:"project-network-isolation"},"Project Network Isolation"),(0,i.kt)("p",null,"If your network provider allows project network isolation, you can choose whether to enable or disable inter-project communication."),(0,i.kt)("p",null,"Before Rancher v2.5.8, project network isolation is only available if you are using the Canal network plugin for RKE."),(0,i.kt)("p",null,"In v2.5.8+, project network isolation is available if you are using any RKE network plugin that supports the enforcement of Kubernetes network policies, such as Canal or the Cisco ACI plugin."),(0,i.kt)("h3",{id:"nginx-ingress"},"Nginx Ingress"),(0,i.kt)("p",null,"If you want to publish your applications in a high-availability configuration, and you're hosting your nodes with a cloud-provider that doesn't have a native load-balancing feature, enable this option to use Nginx ingress within the cluster."),(0,i.kt)("h3",{id:"metrics-server-monitoring"},"Metrics Server Monitoring"),(0,i.kt)("p",null,"Each cloud provider capable of launching a cluster using RKE can collect metrics and monitor for your cluster nodes. Enable this option to view your node metrics from your cloud provider's portal."),(0,i.kt)("h3",{id:"pod-security-policy-support"},"Pod Security Policy Support"),(0,i.kt)("p",null,"Enables ",(0,i.kt)("a",{parentName:"p",href:"/v2.5/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/create-pod-security-policies"},"pod security policies")," for the cluster. After enabling this option, choose a policy using the ",(0,i.kt)("strong",{parentName:"p"},"Default Pod Security Policy")," drop-down."),(0,i.kt)("h3",{id:"docker-version-on-nodes"},"Docker version on nodes"),(0,i.kt)("p",null,"Configures whether nodes are allowed to run versions of Docker that Rancher doesn't officially support. If you choose to require a supported Docker version, Rancher will stop pods from running on nodes that don't have a supported Docker version installed."),(0,i.kt)("h3",{id:"docker-root-directory"},"Docker Root Directory"),(0,i.kt)("p",null,"The directory on your cluster nodes where you've installed Docker. If you install Docker on your nodes to a non-default directory, update this path."),(0,i.kt)("h3",{id:"default-pod-security-policy"},"Default Pod Security Policy"),(0,i.kt)("p",null,"If you enable ",(0,i.kt)("strong",{parentName:"p"},"Pod Security Policy Support"),", use this drop-down to choose the pod security policy that's applied to the cluster."),(0,i.kt)("h3",{id:"cloud-provider"},"Cloud Provider"),(0,i.kt)("p",null,"If you're using a cloud provider to host cluster nodes launched by RKE, enable ",(0,i.kt)("a",{parentName:"p",href:"/v2.5/pages-for-subheaders/set-up-cloud-providers"},"this option")," so that you can use the cloud provider's native features. If you want to store persistent data for your cloud-hosted cluster, this option is required."),(0,i.kt)("h1",{id:"editing-clusters-with-yaml"},"Editing Clusters with YAML"),(0,i.kt)("p",null,"Instead of using the Rancher UI to choose Kubernetes options for the cluster, advanced users can create an RKE config file. Using a config file allows you to set any of the options available in an RKE installation, except for system_images configuration, by specifying them in YAML."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"To edit an RKE config file directly from the Rancher UI, click ",(0,i.kt)("strong",{parentName:"li"},"Edit as YAML"),"."),(0,i.kt)("li",{parentName:"ul"},"To read from an existing RKE file, click ",(0,i.kt)("strong",{parentName:"li"},"Read from File"),".")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image",src:r(69871).Z,width:"2708",height:"258"})),(0,i.kt)("p",null,"For an example of RKE config file syntax, see the ",(0,i.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rke/latest/en/example-yamls/"},"RKE documentation"),"."),(0,i.kt)("p",null,"For the complete reference of configurable options for RKE Kubernetes clusters in YAML, see the ",(0,i.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rke/latest/en/config-options/"},"RKE documentation.")),(0,i.kt)("h1",{id:"updating-ingress-nginx"},"Updating ingress-nginx"),(0,i.kt)("p",null,"Clusters that were created before Kubernetes 1.16 will have an ",(0,i.kt)("inlineCode",{parentName:"p"},"ingress-nginx")," ",(0,i.kt)("inlineCode",{parentName:"p"},"updateStrategy")," of ",(0,i.kt)("inlineCode",{parentName:"p"},"OnDelete"),". Clusters that were created with Kubernetes 1.16 or newer will have ",(0,i.kt)("inlineCode",{parentName:"p"},"RollingUpdate"),"."),(0,i.kt)("p",null,"If the ",(0,i.kt)("inlineCode",{parentName:"p"},"updateStrategy")," of ",(0,i.kt)("inlineCode",{parentName:"p"},"ingress-nginx")," is ",(0,i.kt)("inlineCode",{parentName:"p"},"OnDelete"),", you will need to delete these pods to get the correct version for your deployment."))}f.isMDXComponent=!0},69871:function(e,t,r){t.Z=r.p+"assets/images/cluster-options-yaml-994a3b9b3d53ed35101fa31517f64620.png"}}]);