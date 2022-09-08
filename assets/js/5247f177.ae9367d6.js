"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[37258],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return g}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=u(n),g=r,h=c["".concat(l,".").concat(g)]||c[g]||p[g]||i;return n?a.createElement(h,o(o({ref:t},d),{},{components:n})):a.createElement(h,o({ref:t},d))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var u=2;u<i;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},17225:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return l},default:function(){return g},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return p}});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),o=["components"],s={title:"Upgrading and Rolling Back Kubernetes",weight:70},l=void 0,u={unversionedId:"getting-started/installation-and-upgrade/upgrade-and-roll-back-kubernetes",id:"getting-started/installation-and-upgrade/upgrade-and-roll-back-kubernetes",title:"Upgrading and Rolling Back Kubernetes",description:"Following an upgrade to the latest version of Rancher, downstream Kubernetes clusters can be upgraded to use the latest supported version of Kubernetes.",source:"@site/docs/getting-started/installation-and-upgrade/upgrade-and-roll-back-kubernetes.md",sourceDirName:"getting-started/installation-and-upgrade",slug:"/getting-started/installation-and-upgrade/upgrade-and-roll-back-kubernetes",permalink:"/getting-started/installation-and-upgrade/upgrade-and-roll-back-kubernetes",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/getting-started/installation-and-upgrade/upgrade-and-roll-back-kubernetes.md",tags:[],version:"current",lastUpdatedAt:1662676534,formattedLastUpdatedAt:"9/8/2022",frontMatter:{title:"Upgrading and Rolling Back Kubernetes",weight:70},sidebar:"tutorialSidebar",previous:{title:"Setting up Local System Charts for Air Gapped Installations",permalink:"/getting-started/installation-and-upgrade/resources/local-system-charts"},next:{title:"Upgrading Kubernetes without Upgrading Rancher",permalink:"/getting-started/installation-and-upgrade/upgrade-kubernetes-without-upgrading-rancher"}},d={},p=[{value:"Configuring the Maximum Unavailable Worker Nodes in the Rancher UI",id:"configuring-the-maximum-unavailable-worker-nodes-in-the-rancher-ui",level:3},{value:"Enabling Draining Nodes During Upgrades from the Rancher UI",id:"enabling-draining-nodes-during-upgrades-from-the-rancher-ui",level:3},{value:"Maintaining Availability for Applications During Upgrades",id:"maintaining-availability-for-applications-during-upgrades",level:3},{value:"Configuring the Upgrade Strategy in the cluster.yml",id:"configuring-the-upgrade-strategy-in-the-clusteryml",level:3}],c={toc:p};function g(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Following an upgrade to the latest version of Rancher, downstream Kubernetes clusters can be upgraded to use the latest supported version of Kubernetes."),(0,i.kt)("p",null,"Rancher calls RKE (Rancher Kubernetes Engine) as a library when provisioning and editing RKE clusters. For more information on configuring the upgrade strategy for RKE clusters, refer to the ",(0,i.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rke/latest/en/"},"RKE documentation"),"."),(0,i.kt)("p",null,"This section covers the following topics:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#new-features"},"New Features")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#tested-kubernetes-versions"},"Tested Kubernetes Versions")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#how-upgrades-work"},"How Upgrades Work")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#recommended-best-practice-for-upgrades"},"Recommended Best Practice for Upgrades")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#upgrading-the-kubernetes-version"},"Upgrading the Kubernetes Version")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#rolling-back"},"Rolling Back")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#configuring-the-upgrade-strategy"},"Configuring the Upgrade Strategy"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#configuring-the-maximum-unavailable-worker-nodes-in-the-rancher-ui"},"Configuring the Maximum Unavailable Worker Nodes in the Rancher UI")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#enabling-draining-nodes-during-upgrades-from-the-rancher-ui"},"Enabling Draining Nodes During Upgrades from the Rancher UI")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#maintaining-availability-for-applications-during-upgrades"},"Maintaining Availability for Applications During Upgrades")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#configuring-the-upgrade-strategy-in-the-cluster-yml"},"Configuring the Upgrade Strategy in the cluster.yml")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#troubleshooting"},"Troubleshooting"))),(0,i.kt)("h1",{id:"tested-kubernetes-versions"},"Tested Kubernetes Versions"),(0,i.kt)("p",null,"Before a new version of Rancher is released, it's tested with the latest minor versions of Kubernetes to ensure compatibility. For details on which versions of Kubernetes were tested on each Rancher version, refer to the ",(0,i.kt)("a",{parentName:"p",href:"https://rancher.com/support-maintenance-terms/all-supported-versions/rancher-v2.6.0/"},"support maintenance terms.")),(0,i.kt)("h1",{id:"how-upgrades-work"},"How Upgrades Work"),(0,i.kt)("p",null,"RKE v1.1.0 changed the way that clusters are upgraded."),(0,i.kt)("p",null,"In this section of the ",(0,i.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rke/latest/en/upgrades/how-upgrades-work"},"RKE documentation,")," you'll learn what happens when you edit or upgrade your RKE Kubernetes cluster."),(0,i.kt)("h1",{id:"recommended-best-practice-for-upgrades"},"Recommended Best Practice for Upgrades"),(0,i.kt)("p",null,"When upgrading the Kubernetes version of a cluster, we recommend that you:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Take a snapshot."),(0,i.kt)("li",{parentName:"ol"},"Initiate a Kubernetes upgrade."),(0,i.kt)("li",{parentName:"ol"},"If the upgrade fails, revert the cluster to the pre-upgrade Kubernetes version. This is achieved by selecting the ",(0,i.kt)("strong",{parentName:"li"},"Restore etcd and Kubernetes version")," option. This will return your cluster to the pre-upgrade kubernetes version before restoring the etcd snapshot.")),(0,i.kt)("p",null,"The restore operation will work on a cluster that is not in a healthy or active state."),(0,i.kt)("h1",{id:"upgrading-the-kubernetes-version"},"Upgrading the Kubernetes Version"),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Prerequisites:")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},"The options below are available only for ",(0,i.kt)("a",{parentName:"li",href:"/pages-for-subheaders/launch-kubernetes-with-rancher"},"Rancher-launched RKE Kubernetes clusters")," and ",(0,i.kt)("a",{parentName:"li",href:"/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/register-existing-clusters#additional-features-for-registered-k3s-clusters"},"Registered K3s Kubernetes clusters.")),(0,i.kt)("li",{parentName:"ul"},"Before upgrading Kubernetes, ",(0,i.kt)("a",{parentName:"li",href:"/pages-for-subheaders/backup-restore-and-disaster-recovery"},"back up your cluster."))))),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"In the upper left corner, click ",(0,i.kt)("strong",{parentName:"li"},"\u2630 > Cluster Management"),"."),(0,i.kt)("li",{parentName:"ol"},"On the ",(0,i.kt)("strong",{parentName:"li"},"Clusters")," page, go to the cluster you want to upgrade and click ",(0,i.kt)("strong",{parentName:"li"},"\u22ee > Edit Config"),"."),(0,i.kt)("li",{parentName:"ol"},"From the ",(0,i.kt)("strong",{parentName:"li"},"Kubernetes Version")," drop-down, choose the version of Kubernetes that you want to use for the cluster."),(0,i.kt)("li",{parentName:"ol"},"Click ",(0,i.kt)("strong",{parentName:"li"},"Save"),".")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Result:")," Kubernetes begins upgrading for the cluster."),(0,i.kt)("h1",{id:"rolling-back"},"Rolling Back"),(0,i.kt)("p",null,"A cluster can be restored to a backup in which the previous Kubernetes version was used. For more information, refer to the following sections:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/how-to-guides/new-user-guides/backup-restore-and-disaster-recovery/back-up-rancher-launched-kubernetes-clusters#how-snapshots-work"},"Backing up a cluster")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/how-to-guides/new-user-guides/backup-restore-and-disaster-recovery/restore-rancher-launched-kubernetes-clusters-from-backup#restoring-a-cluster-from-a-snapshot"},"Restoring a cluster from backup"))),(0,i.kt)("h1",{id:"configuring-the-upgrade-strategy"},"Configuring the Upgrade Strategy"),(0,i.kt)("p",null,"As of RKE v1.1.0, additional upgrade options became available to give you more granular control over the upgrade process. These options can be used to maintain availability of your applications during a cluster upgrade if certain ",(0,i.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rke/latest/en/upgrades/maintaining-availability"},"conditions and requirements")," are met."),(0,i.kt)("p",null,"The upgrade strategy can be configured in the Rancher UI, or by editing the ",(0,i.kt)("inlineCode",{parentName:"p"},"cluster.yml"),". More advanced options are available by editing the ",(0,i.kt)("inlineCode",{parentName:"p"},"cluster.yml"),"."),(0,i.kt)("h3",{id:"configuring-the-maximum-unavailable-worker-nodes-in-the-rancher-ui"},"Configuring the Maximum Unavailable Worker Nodes in the Rancher UI"),(0,i.kt)("p",null,"From the Rancher UI, the maximum number of unavailable worker nodes can be configured. During a cluster upgrade, worker nodes will be upgraded in batches of this size."),(0,i.kt)("p",null,"By default, the maximum number of unavailable worker is defined as 10 percent of all worker nodes. This number can be configured as a percentage or as an integer. When defined as a percentage, the batch size is rounded down to the nearest node, with a minimum of one node."),(0,i.kt)("p",null,"To change the default number or percentage of worker nodes,"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"In the upper left corner, click ",(0,i.kt)("strong",{parentName:"li"},"\u2630 > Cluster Management"),"."),(0,i.kt)("li",{parentName:"ol"},"On the ",(0,i.kt)("strong",{parentName:"li"},"Clusters")," page, go to the cluster you want to upgrade and click ",(0,i.kt)("strong",{parentName:"li"},"\u22ee > Edit Config"),"."),(0,i.kt)("li",{parentName:"ol"},"In the ",(0,i.kt)("strong",{parentName:"li"},"Upgrade Strategy")," tab, enter the ",(0,i.kt)("strong",{parentName:"li"},"Worker Concurrency")," as a fixed number or percentage. To get this number, you can take the number of nodes in your cluster and subtract the max unavailable nodes."),(0,i.kt)("li",{parentName:"ol"},"Click ",(0,i.kt)("strong",{parentName:"li"},"Save"),".")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Result:")," The cluster is updated to use the new upgrade strategy."),(0,i.kt)("h3",{id:"enabling-draining-nodes-during-upgrades-from-the-rancher-ui"},"Enabling Draining Nodes During Upgrades from the Rancher UI"),(0,i.kt)("p",null,"By default, RKE ",(0,i.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/architecture/nodes/#manual-node-administration"},"cordons")," each node before upgrading it. ",(0,i.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/tasks/administer-cluster/safely-drain-node/"},"Draining")," is disabled during upgrades by default. If draining is enabled in the cluster configuration, RKE will both cordon and drain the node before it is upgraded."),(0,i.kt)("p",null,"To enable draining each node during a cluster upgrade,"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"In the upper left corner, click ",(0,i.kt)("strong",{parentName:"li"},"\u2630 > Cluster Management"),"."),(0,i.kt)("li",{parentName:"ol"},"On the ",(0,i.kt)("strong",{parentName:"li"},"Clusters")," page, go to the cluster you want to enable node draining and click ",(0,i.kt)("strong",{parentName:"li"},"\u22ee > Edit Config"),"."),(0,i.kt)("li",{parentName:"ol"},"Click ",(0,i.kt)("strong",{parentName:"li"},"\u22ee > Edit"),"."),(0,i.kt)("li",{parentName:"ol"},"In the ",(0,i.kt)("strong",{parentName:"li"},"Upgrade Strategy")," tab, go to the ",(0,i.kt)("strong",{parentName:"li"},"Drain nodes")," field and click ",(0,i.kt)("strong",{parentName:"li"},"Yes"),". Node draining is configured separately for control plane and worker nodes."),(0,i.kt)("li",{parentName:"ol"},"Configure the options for how pods are deleted. For more information about each option, refer to ",(0,i.kt)("a",{parentName:"li",href:"/how-to-guides/advanced-user-guides/manage-clusters/nodes-and-node-pools#aggressive-and-safe-draining-options"},"this section.")),(0,i.kt)("li",{parentName:"ol"},"Optionally, configure a grace period. The grace period is the timeout given to each pod for cleaning things up, so they will have chance to exit gracefully. Pods might need to finish any outstanding requests, roll back transactions or save state to some external storage. If this value is negative, the default value specified in the pod will be used."),(0,i.kt)("li",{parentName:"ol"},"Optionally, configure a timeout, which is the amount of time the drain should continue to wait before giving up."),(0,i.kt)("li",{parentName:"ol"},"Click ",(0,i.kt)("strong",{parentName:"li"},"Save"),".")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Result:")," The cluster is updated to use the new upgrade strategy."),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"As of Rancher v2.4.0, there is a ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/rancher/rancher/issues/25478"},"known issue")," in which the Rancher UI doesn't show state of etcd and controlplane as drained, even though they are being drained."))),(0,i.kt)("h3",{id:"maintaining-availability-for-applications-during-upgrades"},"Maintaining Availability for Applications During Upgrades"),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Available as of RKE v1.1.0")),(0,i.kt)("p",null,"In ",(0,i.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rke/latest/en/upgrades/maintaining-availability/"},"this section of the RKE documentation,")," you'll learn the requirements to prevent downtime for your applications when upgrading the cluster."),(0,i.kt)("h3",{id:"configuring-the-upgrade-strategy-in-the-clusteryml"},"Configuring the Upgrade Strategy in the cluster.yml"),(0,i.kt)("p",null,"More advanced upgrade strategy configuration options are available by editing the ",(0,i.kt)("inlineCode",{parentName:"p"},"cluster.yml"),"."),(0,i.kt)("p",null,"For details, refer to ",(0,i.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rke/latest/en/upgrades/configuring-strategy"},"Configuring the Upgrade Strategy")," in the RKE documentation. The section also includes an example ",(0,i.kt)("inlineCode",{parentName:"p"},"cluster.yml")," for configuring the upgrade strategy."),(0,i.kt)("h1",{id:"troubleshooting"},"Troubleshooting"),(0,i.kt)("p",null,"If a node doesn't come up after an upgrade, the ",(0,i.kt)("inlineCode",{parentName:"p"},"rke up")," command errors out."),(0,i.kt)("p",null,"No upgrade will proceed if the number of unavailable nodes exceeds the configured maximum."),(0,i.kt)("p",null,"If an upgrade stops, you may need to fix an unavailable node or remove it from the cluster before the upgrade can continue."),(0,i.kt)("p",null,"A failed node could be in many different states:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Powered off"),(0,i.kt)("li",{parentName:"ul"},"Unavailable"),(0,i.kt)("li",{parentName:"ul"},"User drains a node while upgrade is in process, so there are no kubelets on the node"),(0,i.kt)("li",{parentName:"ul"},"The upgrade itself failed")),(0,i.kt)("p",null,"If the max unavailable number of nodes is reached during an upgrade, Rancher user clusters will be stuck in updating state and not move forward with upgrading any other control plane nodes. It will continue to evaluate the set of unavailable nodes in case one of the nodes becomes available. If the node cannot be fixed, you must remove the node in order to continue the upgrade."))}g.isMDXComponent=!0}}]);