"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[63671],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return k}});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},s=Object.keys(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var u=a.createContext({}),i=function(e){var t=a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},l=function(e){var t=i(e.components);return a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,s=e.originalType,u=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),d=i(r),k=n,b=d["".concat(u,".").concat(k)]||d[k]||p[k]||s;return r?a.createElement(b,c(c({ref:t},l),{},{components:r})):a.createElement(b,c({ref:t},l))}));function k(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=r.length,c=new Array(s);c[0]=d;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:n,c[1]=o;for(var i=2;i<s;i++)c[i]=r[i];return a.createElement.apply(null,c)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},45100:function(e,t,r){r.r(t),r.d(t,{assets:function(){return l},contentTitle:function(){return u},default:function(){return k},frontMatter:function(){return o},metadata:function(){return i},toc:function(){return p}});var a=r(87462),n=r(63366),s=(r(67294),r(3905)),c=["components"],o={title:"Backing up Rancher Installed on a K3s Kubernetes Cluster",shortTitle:"K3s Installs",weight:1,aliases:["/rancher/v2.0-v2.4/en/backups/backups/k3s-backups","/rancher/v2.0-v2.4/en/backups/backups/k8s-backups/k3s-backups","/rancher/v2.0-v2.4/en/backups/legacy/backup/k8s-backups/k3s-backups/","/rancher/v2.0-v2.4/en/backups/legacy/backups/k3s-backups","/rancher/v2.0-v2.4/en/backups/legacy/backup/k3s-backups","/rancher/v2.0-v2.4/en/backups/v2.0.x-v2.4.x/backup/k3s-backups","/rancher/v2.x/en/backups/v2.0.x-v2.4.x/backup/k3s-backups/"]},u=void 0,i={unversionedId:"how-to-guides/new-user-guides/backup-restore-and-disaster-recovery/back-up-k3s-installed-rancher",id:"version-2.0-2.4/how-to-guides/new-user-guides/backup-restore-and-disaster-recovery/back-up-k3s-installed-rancher",title:"Backing up Rancher Installed on a K3s Kubernetes Cluster",description:"When Rancher is installed on a high-availability Kubernetes cluster, we recommend using an external database to store the cluster data.",source:"@site/versioned_docs/version-2.0-2.4/how-to-guides/new-user-guides/backup-restore-and-disaster-recovery/back-up-k3s-installed-rancher.md",sourceDirName:"how-to-guides/new-user-guides/backup-restore-and-disaster-recovery",slug:"/how-to-guides/new-user-guides/backup-restore-and-disaster-recovery/back-up-k3s-installed-rancher",permalink:"/v2.0-v2.4/how-to-guides/new-user-guides/backup-restore-and-disaster-recovery/back-up-k3s-installed-rancher",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.0-2.4/how-to-guides/new-user-guides/backup-restore-and-disaster-recovery/back-up-k3s-installed-rancher.md",tags:[],version:"2.0-2.4",lastUpdatedAt:1662676534,formattedLastUpdatedAt:"9/8/2022",frontMatter:{title:"Backing up Rancher Installed on a K3s Kubernetes Cluster",shortTitle:"K3s Installs",weight:1,aliases:["/rancher/v2.0-v2.4/en/backups/backups/k3s-backups","/rancher/v2.0-v2.4/en/backups/backups/k8s-backups/k3s-backups","/rancher/v2.0-v2.4/en/backups/legacy/backup/k8s-backups/k3s-backups/","/rancher/v2.0-v2.4/en/backups/legacy/backups/k3s-backups","/rancher/v2.0-v2.4/en/backups/legacy/backup/k3s-backups","/rancher/v2.0-v2.4/en/backups/v2.0.x-v2.4.x/backup/k3s-backups","/rancher/v2.x/en/backups/v2.0.x-v2.4.x/backup/k3s-backups/"]},sidebar:"tutorialSidebar",previous:{title:"Restoring Backups\u2014Docker Installs",permalink:"/v2.0-v2.4/how-to-guides/new-user-guides/backup-restore-and-disaster-recovery/restore-docker-installed-rancher"},next:{title:"Restoring Rancher Installed on a K3s Kubernetes Cluster",permalink:"/v2.0-v2.4/how-to-guides/new-user-guides/backup-restore-and-disaster-recovery/restore-k3s-installed-rancher"}},l={},p=[{value:"K3s Kubernetes Cluster Data",id:"k3s-kubernetes-cluster-data",level:3},{value:"Creating Snapshots and Restoring Databases from Snapshots",id:"creating-snapshots-and-restoring-databases-from-snapshots",level:3}],d={toc:p};function k(e){var t=e.components,r=(0,n.Z)(e,c);return(0,s.kt)("wrapper",(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"When Rancher is installed on a high-availability Kubernetes cluster, we recommend using an external database to store the cluster data."),(0,s.kt)("p",null,"The database administrator will need to back up the external database, or restore it from a snapshot or dump."),(0,s.kt)("p",null,"We recommend configuring the database to take recurring snapshots."),(0,s.kt)("h3",{id:"k3s-kubernetes-cluster-data"},"K3s Kubernetes Cluster Data"),(0,s.kt)("p",null,"One main advantage of this K3s architecture is that it allows an external datastore to hold the cluster data, allowing the K3s server nodes to be treated as ephemeral."),(0,s.kt)("figcaption",null,"Architecture of a K3s Kubernetes Cluster Running the Rancher Management Server"),"![Architecture of an RKE Kubernetes Cluster Running the Rancher Management Server](/img/k3s-server-storage.svg)",(0,s.kt)("h3",{id:"creating-snapshots-and-restoring-databases-from-snapshots"},"Creating Snapshots and Restoring Databases from Snapshots"),(0,s.kt)("p",null,"For details on taking database snapshots and restoring your database from them, refer to the official database documentation:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://dev.mysql.com/doc/refman/8.0/en/replication-snapshot-method.html"},"Official MySQL documentation")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://www.postgresql.org/docs/8.3/backup-dump.html"},"Official PostgreSQL documentation")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://github.com/etcd-io/etcd/blob/master/Documentation/op-guide/recovery.md"},"Official etcd documentation"))))}k.isMDXComponent=!0}}]);