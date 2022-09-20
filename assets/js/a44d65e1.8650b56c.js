"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[78140],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return h}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),u=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=u(e.components);return a.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=u(n),h=r,m=p["".concat(o,".").concat(h)]||p[h]||c[h]||i;return n?a.createElement(m,l(l({ref:t},d),{},{components:n})):a.createElement(m,l({ref:t},d))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=p;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:r,l[1]=s;for(var u=2;u<i;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},44772:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return o},default:function(){return h},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return c}});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),l=["components"],s={title:"Setting up a High-availability RKE Kubernetes Cluster",shortTitle:"Set up RKE Kubernetes",weight:3},o=void 0,u={unversionedId:"how-to-guides/new-user-guides/kubernetes-cluster-setup/rke1-for-rancher",id:"how-to-guides/new-user-guides/kubernetes-cluster-setup/rke1-for-rancher",title:"Setting up a High-availability RKE Kubernetes Cluster",description:"This section describes how to install a Kubernetes cluster. This cluster should be dedicated to run only the Rancher server.",source:"@site/docs/how-to-guides/new-user-guides/kubernetes-cluster-setup/rke1-for-rancher.md",sourceDirName:"how-to-guides/new-user-guides/kubernetes-cluster-setup",slug:"/how-to-guides/new-user-guides/kubernetes-cluster-setup/rke1-for-rancher",permalink:"/how-to-guides/new-user-guides/kubernetes-cluster-setup/rke1-for-rancher",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/how-to-guides/new-user-guides/kubernetes-cluster-setup/rke1-for-rancher.md",tags:[],version:"current",lastUpdatedAt:1663691987,formattedLastUpdatedAt:"9/20/2022",frontMatter:{title:"Setting up a High-availability RKE Kubernetes Cluster",shortTitle:"Set up RKE Kubernetes",weight:3},sidebar:"tutorialSidebar",previous:{title:"Setting up a High-availability K3s Kubernetes Cluster for Rancher",permalink:"/how-to-guides/new-user-guides/kubernetes-cluster-setup/k3s-for-rancher"},next:{title:"Setting up a High-availability RKE2 Kubernetes Cluster for Rancher",permalink:"/how-to-guides/new-user-guides/kubernetes-cluster-setup/rke2-for-rancher"}},d={},c=[{value:"Required CLI Tools",id:"required-cli-tools",level:3},{value:"1. Create the cluster configuration file",id:"1-create-the-cluster-configuration-file",level:3},{value:"2. Run RKE",id:"2-run-rke",level:3},{value:"3. Test Your Cluster",id:"3-test-your-cluster",level:3},{value:"4. Check the Health of Your Cluster Pods",id:"4-check-the-health-of-your-cluster-pods",level:3},{value:"5. Save Your Files",id:"5-save-your-files",level:3},{value:"Issues or errors?",id:"issues-or-errors",level:3},{value:"Next: Install Rancher",id:"next-install-rancher",level:3}],p={toc:c};function h(e){var t=e.components,n=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This section describes how to install a Kubernetes cluster. This cluster should be dedicated to run only the Rancher server."),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Rancher can run on any Kubernetes cluster, included hosted Kubernetes solutions such as Amazon EKS. The below instructions represent only one possible way to install Kubernetes."))),(0,i.kt)("p",null,"For systems without direct internet access, refer to ",(0,i.kt)("a",{parentName:"p",href:"/pages-for-subheaders/air-gapped-helm-cli-install"},"Air Gap: Kubernetes install.")),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Single-node Installation Tip:")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"In a single-node Kubernetes cluster, the Rancher server does not have high availability, which is important for running Rancher in production. However, installing Rancher on a single-node cluster can be useful if you want to save resources by using a single node in the short term, while preserving a high-availability migration path."),(0,i.kt)("p",{parentName:"div"},"To set up a single-node RKE cluster, configure only one node in the ",(0,i.kt)("inlineCode",{parentName:"p"},"cluster.yml")," . The single node should have all three roles: ",(0,i.kt)("inlineCode",{parentName:"p"},"etcd"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"controlplane"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"worker"),"."),(0,i.kt)("p",{parentName:"div"},"In both single-node setups, Rancher can be installed with Helm on the Kubernetes cluster in the same way that it would be installed on any other cluster."))),(0,i.kt)("h1",{id:"installing-kubernetes"},"Installing Kubernetes"),(0,i.kt)("h3",{id:"required-cli-tools"},"Required CLI Tools"),(0,i.kt)("p",null,"Install ",(0,i.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/tasks/tools/install-kubectl/#install-kubectl"},"kubectl,")," a Kubernetes command-line tool."),(0,i.kt)("p",null,"Also install ",(0,i.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rke/latest/en/installation/"},"RKE,")," the Rancher Kubernetes Engine, a Kubernetes distribution and command-line tool."),(0,i.kt)("h3",{id:"1-create-the-cluster-configuration-file"},"1. Create the cluster configuration file"),(0,i.kt)("p",null,"In this section, you will create a Kubernetes cluster configuration file called ",(0,i.kt)("inlineCode",{parentName:"p"},"rancher-cluster.yml"),". In a later step, when you set up the cluster with an RKE command, it will use this file to install Kubernetes on your nodes."),(0,i.kt)("p",null,"Using the sample below as a guide, create the ",(0,i.kt)("inlineCode",{parentName:"p"},"rancher-cluster.yml")," file. Replace the IP addresses in the ",(0,i.kt)("inlineCode",{parentName:"p"},"nodes")," list with the IP address or DNS names of the 3 nodes you created."),(0,i.kt)("p",null,"If your node has public and internal addresses, it is recommended to set the ",(0,i.kt)("inlineCode",{parentName:"p"},"internal_address:")," so Kubernetes will use it for intra-cluster communication. Some services like AWS EC2 require setting the ",(0,i.kt)("inlineCode",{parentName:"p"},"internal_address:")," if you want to use self-referencing security groups or firewalls."),(0,i.kt)("p",null,"RKE will need to connect to each node over SSH, and it will look for a private key in the default location of ",(0,i.kt)("inlineCode",{parentName:"p"},"~/.ssh/id_rsa"),". If your private key for a certain node is in a different location than the default, you will also need to configure the ",(0,i.kt)("inlineCode",{parentName:"p"},"ssh_key_path")," option for that node."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'nodes:\n  - address: 165.227.114.63\n    internal_address: 172.16.22.12\n    user: ubuntu\n    role: [controlplane, worker, etcd]\n  - address: 165.227.116.167\n    internal_address: 172.16.32.37\n    user: ubuntu\n    role: [controlplane, worker, etcd]\n  - address: 165.227.127.226\n    internal_address: 172.16.42.73\n    user: ubuntu\n    role: [controlplane, worker, etcd]\n\nservices:\n  etcd:\n    snapshot: true\n    creation: 6h\n    retention: 24h\n\n# Required for external TLS termination with\n# ingress-nginx v0.22+\ningress:\n  provider: nginx\n  options:\n    use-forwarded-headers: "true"\n')),(0,i.kt)("figcaption",null,"Common RKE Nodes Options"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Option"),(0,i.kt)("th",{parentName:"tr",align:null},"Required"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"address")),(0,i.kt)("td",{parentName:"tr",align:null},"yes"),(0,i.kt)("td",{parentName:"tr",align:null},"The public DNS or IP address")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"user")),(0,i.kt)("td",{parentName:"tr",align:null},"yes"),(0,i.kt)("td",{parentName:"tr",align:null},"A user that can run docker commands")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"role")),(0,i.kt)("td",{parentName:"tr",align:null},"yes"),(0,i.kt)("td",{parentName:"tr",align:null},"List of Kubernetes roles assigned to the node")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"internal_address")),(0,i.kt)("td",{parentName:"tr",align:null},"no"),(0,i.kt)("td",{parentName:"tr",align:null},"The private DNS or IP address for internal cluster traffic")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"ssh_key_path")),(0,i.kt)("td",{parentName:"tr",align:null},"no"),(0,i.kt)("td",{parentName:"tr",align:null},"Path to SSH private key used to authenticate to the node (defaults to ",(0,i.kt)("inlineCode",{parentName:"td"},"~/.ssh/id_rsa"),")")))),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Advanced Configurations:")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"RKE has many configuration options for customizing the install to suit your specific environment."),(0,i.kt)("p",{parentName:"div"},"Please see the ",(0,i.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rke/latest/en/config-options/"},"RKE Documentation")," for the full list of options and capabilities."),(0,i.kt)("p",{parentName:"div"},"For tuning your etcd cluster for larger Rancher installations, see the ",(0,i.kt)("a",{parentName:"p",href:"/getting-started/installation-and-upgrade/advanced-options/advanced-use-cases/tune-etcd-for-large-installs"},"etcd settings guide"),"."),(0,i.kt)("p",{parentName:"div"},"For more information regarding Dockershim support, refer to ",(0,i.kt)("a",{parentName:"p",href:"/getting-started/installation-and-upgrade/installation-requirements/dockershim"},"this page")))),(0,i.kt)("h3",{id:"2-run-rke"},"2. Run RKE"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"rke up --config ./rancher-cluster.yml\n")),(0,i.kt)("p",null,"When finished, it should end with the line: ",(0,i.kt)("inlineCode",{parentName:"p"},"Finished building Kubernetes cluster successfully"),"."),(0,i.kt)("h3",{id:"3-test-your-cluster"},"3. Test Your Cluster"),(0,i.kt)("p",null,"This section describes how to set up your workspace so that you can interact with this cluster using the ",(0,i.kt)("inlineCode",{parentName:"p"},"kubectl")," command-line tool."),(0,i.kt)("p",null,"Assuming you have installed ",(0,i.kt)("inlineCode",{parentName:"p"},"kubectl"),", you need to place the ",(0,i.kt)("inlineCode",{parentName:"p"},"kubeconfig")," file in a location where ",(0,i.kt)("inlineCode",{parentName:"p"},"kubectl")," can reach it. The ",(0,i.kt)("inlineCode",{parentName:"p"},"kubeconfig")," file contains the credentials necessary to access your cluster with ",(0,i.kt)("inlineCode",{parentName:"p"},"kubectl"),"."),(0,i.kt)("p",null,"When you ran ",(0,i.kt)("inlineCode",{parentName:"p"},"rke up"),", RKE should have created a ",(0,i.kt)("inlineCode",{parentName:"p"},"kubeconfig")," file named ",(0,i.kt)("inlineCode",{parentName:"p"},"kube_config_cluster.yml"),". This file has the credentials for ",(0,i.kt)("inlineCode",{parentName:"p"},"kubectl")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"helm"),"."),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"If you have used a different file name from ",(0,i.kt)("inlineCode",{parentName:"p"},"rancher-cluster.yml"),", then the kube config file will be named ",(0,i.kt)("inlineCode",{parentName:"p"},"kube_config_<FILE_NAME>.yml"),"."))),(0,i.kt)("p",null,"Move this file to ",(0,i.kt)("inlineCode",{parentName:"p"},"$HOME/.kube/config"),", or if you are working with multiple Kubernetes clusters, set the ",(0,i.kt)("inlineCode",{parentName:"p"},"KUBECONFIG")," environmental variable to the path of ",(0,i.kt)("inlineCode",{parentName:"p"},"kube_config_cluster.yml"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"export KUBECONFIG=$(pwd)/kube_config_cluster.yml\n")),(0,i.kt)("p",null,"Test your connectivity with ",(0,i.kt)("inlineCode",{parentName:"p"},"kubectl")," and see if all your nodes are in ",(0,i.kt)("inlineCode",{parentName:"p"},"Ready")," state:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"kubectl get nodes\n\nNAME                          STATUS    ROLES                      AGE       VERSION\n165.227.114.63                Ready     controlplane,etcd,worker   11m       v1.13.5\n165.227.116.167               Ready     controlplane,etcd,worker   11m       v1.13.5\n165.227.127.226               Ready     controlplane,etcd,worker   11m       v1.13.5\n")),(0,i.kt)("h3",{id:"4-check-the-health-of-your-cluster-pods"},"4. Check the Health of Your Cluster Pods"),(0,i.kt)("p",null,"Check that all the required pods and containers are healthy are ready to continue."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Pods are in ",(0,i.kt)("inlineCode",{parentName:"li"},"Running")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"Completed")," state."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"READY")," column shows all the containers are running (i.e. ",(0,i.kt)("inlineCode",{parentName:"li"},"3/3"),") for pods with ",(0,i.kt)("inlineCode",{parentName:"li"},"STATUS")," ",(0,i.kt)("inlineCode",{parentName:"li"},"Running")),(0,i.kt)("li",{parentName:"ul"},"Pods with ",(0,i.kt)("inlineCode",{parentName:"li"},"STATUS")," ",(0,i.kt)("inlineCode",{parentName:"li"},"Completed")," are run-once Jobs. For these pods ",(0,i.kt)("inlineCode",{parentName:"li"},"READY")," should be ",(0,i.kt)("inlineCode",{parentName:"li"},"0/1"),".")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"kubectl get pods --all-namespaces\n\nNAMESPACE       NAME                                      READY     STATUS      RESTARTS   AGE\ningress-nginx   nginx-ingress-controller-tnsn4            1/1       Running     0          30s\ningress-nginx   nginx-ingress-controller-tw2ht            1/1       Running     0          30s\ningress-nginx   nginx-ingress-controller-v874b            1/1       Running     0          30s\nkube-system     canal-jp4hz                               3/3       Running     0          30s\nkube-system     canal-z2hg8                               3/3       Running     0          30s\nkube-system     canal-z6kpw                               3/3       Running     0          30s\nkube-system     kube-dns-7588d5b5f5-sf4vh                 3/3       Running     0          30s\nkube-system     kube-dns-autoscaler-5db9bbb766-jz2k6      1/1       Running     0          30s\nkube-system     metrics-server-97bc649d5-4rl2q            1/1       Running     0          30s\nkube-system     rke-ingress-controller-deploy-job-bhzgm   0/1       Completed   0          30s\nkube-system     rke-kubedns-addon-deploy-job-gl7t4        0/1       Completed   0          30s\nkube-system     rke-metrics-addon-deploy-job-7ljkc        0/1       Completed   0          30s\nkube-system     rke-network-plugin-deploy-job-6pbgj       0/1       Completed   0          30s\n")),(0,i.kt)("p",null,"This confirms that you have successfully installed a Kubernetes cluster that the Rancher server will run on."),(0,i.kt)("h3",{id:"5-save-your-files"},"5. Save Your Files"),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Important:")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"The files mentioned below are needed to maintain, troubleshoot and upgrade your cluster."))),(0,i.kt)("p",null,"Save a copy of the following files in a secure location:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"rancher-cluster.yml"),": The RKE cluster configuration file."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"kube_config_cluster.yml"),": The ",(0,i.kt)("a",{parentName:"li",href:"https://rancher.com/docs/rke/latest/en/kubeconfig/"},"Kubeconfig file")," for the cluster, this file contains credentials for full access to the cluster."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"rancher-cluster.rkestate"),": The ",(0,i.kt)("a",{parentName:"li",href:"https://rancher.com/docs/rke/latest/en/installation/#kubernetes-cluster-state"},"Kubernetes Cluster State file"),", this file contains credentials for full access to the cluster.",(0,i.kt)("br",null),(0,i.kt)("br",null),(0,i.kt)("em",{parentName:"li"},"The Kubernetes Cluster State file is only created when using RKE v0.2.0 or higher."))),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},'The "rancher-cluster" parts of the two latter file names are dependent on how you name the RKE cluster configuration file.'))),(0,i.kt)("h3",{id:"issues-or-errors"},"Issues or errors?"),(0,i.kt)("p",null,"See the ",(0,i.kt)("a",{parentName:"p",href:"/getting-started/installation-and-upgrade/install-upgrade-on-a-kubernetes-cluster/troubleshooting"},"Troubleshooting")," page."),(0,i.kt)("h3",{id:"next-install-rancher"},(0,i.kt)("a",{parentName:"h3",href:"/pages-for-subheaders/install-upgrade-on-a-kubernetes-cluster"},"Next: Install Rancher")))}h.isMDXComponent=!0}}]);