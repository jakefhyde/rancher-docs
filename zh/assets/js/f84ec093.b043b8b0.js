"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[73051],{3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return g}});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(a),g=o,h=p["".concat(l,".").concat(g)]||p[g]||d[g]||r;return a?n.createElement(h,s(s({ref:t},u),{},{components:a})):n.createElement(h,s({ref:t},u))}));function g(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,s=new Array(r);s[0]=p;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var c=2;c<r;c++)s[c]=a[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},41375:function(e,t,a){a.r(t),a.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return g},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return d}});var n=a(87462),o=a(63366),r=(a(67294),a(3905)),s=["components"],i={title:"7. Load Balancing",weight:700,aliases:["/rancher/v2.x/en/v1.6-migration/load-balancing/"]},l=void 0,c={unversionedId:"how-to-guides/new-user-guides/migrate-from-v1.6-v2.x/load-balancing",id:"version-2.0-2.4/how-to-guides/new-user-guides/migrate-from-v1.6-v2.x/load-balancing",title:"7. Load Balancing",description:"If your applications are public-facing and consume significant traffic, you should place a load balancer in front of your cluster so that users can always access their apps without service interruption. Typically, you can fulfill a high volume of service requests by horizontally scaling your deployment, which spins up additional application containers as traffic ramps up. However, this technique requires routing that distributes traffic across your nodes efficiently. In cases where you need to accommodate public traffic that scales up and down, you'll need a load balancer.",source:"@site/versioned_docs/version-2.0-2.4/how-to-guides/new-user-guides/migrate-from-v1.6-v2.x/load-balancing.md",sourceDirName:"how-to-guides/new-user-guides/migrate-from-v1.6-v2.x",slug:"/how-to-guides/new-user-guides/migrate-from-v1.6-v2.x/load-balancing",permalink:"/zh/v2.0-v2.4/how-to-guides/new-user-guides/migrate-from-v1.6-v2.x/load-balancing",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.0-2.4/how-to-guides/new-user-guides/migrate-from-v1.6-v2.x/load-balancing.md",tags:[],version:"2.0-2.4",lastUpdatedAt:1663691987,formattedLastUpdatedAt:"2022/9/20",frontMatter:{title:"7. Load Balancing",weight:700,aliases:["/rancher/v2.x/en/v1.6-migration/load-balancing/"]},sidebar:"tutorialSidebar",previous:{title:"6. Service Discovery",permalink:"/zh/v2.0-v2.4/how-to-guides/new-user-guides/migrate-from-v1.6-v2.x/discover-services"},next:{title:"Advanced User Guides",permalink:"/zh/v2.0-v2.4/pages-for-subheaders/advanced-user-guides"}},u={},d=[{value:"Load Balancing Protocol Options",id:"load-balancing-protocol-options",level:2},{value:"Load Balancer Deployment",id:"load-balancer-deployment",level:2},{value:"Load Balancing Architecture",id:"load-balancing-architecture",level:2},{value:"Ingress Caveats",id:"ingress-caveats",level:2},{value:"Deploying Ingress",id:"deploying-ingress",level:2},{value:"Configuring Host- and Path-Based Routing",id:"configuring-host--and-path-based-routing",level:3},{value:"HTTPS/Certificates Option",id:"httpscertificates-option",level:3},{value:"TCP Load Balancing Options",id:"tcp-load-balancing-options",level:3},{value:"Layer-4 Load Balancer",id:"layer-4-load-balancer",level:4},{value:"NGINX Ingress Controller TCP Support by ConfigMaps",id:"nginx-ingress-controller-tcp-support-by-configmaps",level:4},{value:"Rancher v2.x Load Balancing Limitations",id:"rancher-v2x-load-balancing-limitations",level:2},{value:"Finished!",id:"finished",level:3}],p={toc:d};function g(e){var t=e.components,i=(0,o.Z)(e,s);return(0,r.kt)("wrapper",(0,n.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"If your applications are public-facing and consume significant traffic, you should place a load balancer in front of your cluster so that users can always access their apps without service interruption. Typically, you can fulfill a high volume of service requests by ",(0,r.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/tasks/run-application/horizontal-pod-autoscale/"},"horizontally scaling")," your deployment, which spins up additional application containers as traffic ramps up. However, this technique requires routing that distributes traffic across your nodes efficiently. In cases where you need to accommodate public traffic that scales up and down, you'll need a load balancer."),(0,r.kt)("p",null,"As outlined in ",(0,r.kt)("a",{parentName:"p",href:"%7B%7B%3Cbaseurl%3E%7D%7D/rancher/v1.6/en/cattle/adding-load-balancers/"},"its documentation"),", Rancher v1.6 provided rich support for load balancing using its own microservice powered by HAProxy, which supports HTTP, HTTPS, TCP hostname, and path-based routing. Most of these same features are available in v2.x. However, load balancers that you used with v1.6 cannot be migrated to v2.x. You'll have to manually recreate your v1.6 load balancer in v2.x."),(0,r.kt)("p",null,"If you encounter the ",(0,r.kt)("inlineCode",{parentName:"p"},"output.txt")," text below after parsing your v1.6 Compose files to Kubernetes manifests, you'll have to resolve it by manually creating a load balancer in v2.x."),(0,r.kt)("figcaption",null,(0,r.kt)("code",null,"output.txt")," Load Balancer Directive"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Resolve Load Balancer Directive",src:a(85742).Z,width:"817",height:"400"})),(0,r.kt)("h2",{id:"load-balancing-protocol-options"},"Load Balancing Protocol Options"),(0,r.kt)("p",null,"By default, Rancher v2.x replaces the v1.6 load balancer microservice with the native ",(0,r.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/services-networking/ingress/"},"Kubernetes Ingress"),", which is backed by NGINX Ingress Controller for layer 7 load balancing. By default, Kubernetes Ingress only supports the HTTP and HTTPS protocols, not TCP. Load balancing is limited to these two protocols when using Ingress."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"TCP Required?")," See ",(0,r.kt)("a",{parentName:"p",href:"#tcp-load-balancing-options"},"TCP Load Balancing Options"))),(0,r.kt)("h2",{id:"load-balancer-deployment"},"Load Balancer Deployment"),(0,r.kt)("p",null,"In Rancher v1.6, you could add port/service rules for configuring your HA proxy to load balance for target services. You could also configure the hostname/path-based routing rules."),(0,r.kt)("p",null,"Rancher v2.x offers similar functionality, but load balancing is instead handled by Ingress. An Ingress is a specification of rules that a controller component applies to your load balancer. The actual load balancer can run outside of your cluster or within it."),(0,r.kt)("p",null,"By default, Rancher v2.x deploys NGINX Ingress Controller on clusters provisioned using RKE (Rancher's own Kubernetes installer) to process the Kubernetes Ingress rules. The NGINX Ingress Controller is installed by default only in clusters provisioned by RKE. Clusters provisioned by cloud providers like GKE have their own Ingress Controllers that configure the load balancer. For this document, our scope is limited to the RKE-installed NGINX Ingress Controller only."),(0,r.kt)("p",null,"RKE deploys NGINX Ingress Controller as a ",(0,r.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/workloads/controllers/daemonset/"},"Kubernetes DaemonSet"),", meaning that an NGINX instance is deployed on every node in the cluster. NGINX acts like an Ingress Controller listening to Ingress creation within your entire cluster, and it also configures itself as the load balancer to satisfy the Ingress rules. The DaemonSet is configured with hostNetwork to expose two ports: 80 and 443."),(0,r.kt)("p",null,"For more information NGINX Ingress Controller, their deployment as DaemonSets, deployment configuration options, see the ",(0,r.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rke/latest/en/config-options/add-ons/ingress-controllers/"},"RKE documentation"),"."),(0,r.kt)("h2",{id:"load-balancing-architecture"},"Load Balancing Architecture"),(0,r.kt)("p",null,"Deployment of Ingress Controller in v2.x as a DaemonSet brings some architectural changes that v1.6 users should know about."),(0,r.kt)("p",null,"In Rancher v1.6 you could deploy a scalable load balancer service within your stack. If you had four hosts in your Cattle environment, you could deploy one load balancer service with a scale of two and point to your application by appending port 80 to your two host IP Addresses. You could also launch another load balancer on the remaining two hosts to balance a different service again using port 80 because your load balancer is using different host IP Addresses)."),(0,r.kt)("figcaption",null,"Rancher v1.6 Load Balancing Architecture"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Rancher v1.6 Load Balancing",src:a(17742).Z,width:"765",height:"425"})),(0,r.kt)("p",null,"The Rancher v2.x Ingress Controller is a DaemonSet, it is globally deployed on all schedulable nodes to serve your entire Kubernetes Cluster. Therefore, when you program the Ingress rules, you must use a unique hostname and path to point to your workloads, as the load balancer node IP addresses and ports 80 and 443 are common access points for all workloads."),(0,r.kt)("figcaption",null,"Rancher v2.x Load Balancing Architecture"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Rancher v2.x Load Balancing",src:a(2902).Z,width:"764",height:"425"})),(0,r.kt)("h2",{id:"ingress-caveats"},"Ingress Caveats"),(0,r.kt)("p",null,"Although Rancher v2.x supports HTTP and HTTPS hostname and path-based load balancing, you must use unique host names and paths when configuring your workloads. This limitation derives from:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Ingress confinement to ports 80 and 443 (i.e, the ports HTTP","[S]"," uses for routing)."),(0,r.kt)("li",{parentName:"ul"},"The load balancer and the Ingress Controller is launched globally for the cluster as a DaemonSet.")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"TCP Required?")," Rancher v2.x still supports TCP. See ",(0,r.kt)("a",{parentName:"p",href:"#tcp-load-balancing-options"},"TCP Load Balancing Options")," for workarounds.")),(0,r.kt)("h2",{id:"deploying-ingress"},"Deploying Ingress"),(0,r.kt)("p",null,"You can launch a new load balancer to replace your load balancer from v1.6. Using the Rancher v2.x UI, browse to the applicable project and choose ",(0,r.kt)("strong",{parentName:"p"},"Resources > Workloads > Load Balancing.")," (In versions before v2.3.0, click ",(0,r.kt)("strong",{parentName:"p"},"Workloads > Load Balancing."),") Then click ",(0,r.kt)("strong",{parentName:"p"},"Deploy"),". During deployment, you can choose a target project or namespace."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Prerequisite:")," Before deploying Ingress, you must have a workload deployed that's running a scale of two or more pods.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Workload Scale",src:a(18813).Z,width:"345",height:"111"})),(0,r.kt)("p",null,"For balancing between these two pods, you must create a Kubernetes Ingress rule. To create this rule, navigate to your cluster and project, and click ",(0,r.kt)("strong",{parentName:"p"},"Resources > Workloads > Load Balancing.")," (In versions before v2.3.0, click ",(0,r.kt)("strong",{parentName:"p"},"Workloads > Load Balancing."),") Then click ",(0,r.kt)("strong",{parentName:"p"},"Add Ingress"),". This GIF below depicts how to add Ingress to one of your projects."),(0,r.kt)("figcaption",null,"Browsing to Load Balancer Tab and Adding Ingress"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Adding Ingress",src:a(90255).Z,width:"1920",height:"1080"})),(0,r.kt)("p",null,"Similar to a service/port rules in Rancher v1.6, here you can specify rules targeting your workload's container port. The sections below demonstrate how to create Ingress rules."),(0,r.kt)("h3",{id:"configuring-host--and-path-based-routing"},"Configuring Host- and Path-Based Routing"),(0,r.kt)("p",null,"Using Rancher v2.x, you can add Ingress rules that are based on host names or a URL path. Based on the rules you create, your NGINX Ingress Controller routes traffic to multiple target workloads or Kubernetes services."),(0,r.kt)("p",null,"For example, let's say you have multiple workloads deployed to a single namespace. You can add an Ingress to route traffic to these two workloads using the same hostname but different paths, as depicted in the image below. URL requests to ",(0,r.kt)("inlineCode",{parentName:"p"},"foo.com/name.html")," will direct users to the ",(0,r.kt)("inlineCode",{parentName:"p"},"web")," workload, and URL requests to ",(0,r.kt)("inlineCode",{parentName:"p"},"foo.com/login")," will direct users to the ",(0,r.kt)("inlineCode",{parentName:"p"},"chat")," workload."),(0,r.kt)("figcaption",null,"Ingress: Path-Based Routing Configuration"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Ingress: Path-Based Routing Configuration",src:a(99272).Z,width:"1323",height:"666"})),(0,r.kt)("p",null,"Rancher v2.x also places a convenient link to the workloads on the Ingress record. If you configure an external DNS to program the DNS records, this hostname can be mapped to the Kubernetes Ingress address."),(0,r.kt)("figcaption",null,"Workload Links"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Load Balancer Links to Workloads",src:a(6306).Z,width:"2563",height:"618"})),(0,r.kt)("p",null,"The Ingress address is the IP address in your cluster that the Ingress Controller allocates for your workload. You can reach your workload by browsing to this IP address. Use ",(0,r.kt)("inlineCode",{parentName:"p"},"kubectl")," command below to see the Ingress address assigned by the controller:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"kubectl get ingress\n")),(0,r.kt)("h3",{id:"httpscertificates-option"},"HTTPS/Certificates Option"),(0,r.kt)("p",null,"Rancher v2.x Ingress functionality supports the HTTPS protocol, but if you want to use it, you need to use a valid SSL/TLS certificate. While configuring Ingress rules, use the ",(0,r.kt)("strong",{parentName:"p"},"SSL/TLS Certificates")," section to configure a certificate."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"We recommend ",(0,r.kt)("a",{parentName:"li",href:"/zh/v2.0-v2.4/how-to-guides/new-user-guides/kubernetes-resources-setup/encrypt-http-communication"},"uploading a certificate")," from a known certificate authority (you'll have to do this before configuring Ingress). Then, while configuring your load balancer, use the ",(0,r.kt)("strong",{parentName:"li"},"Choose a certificate")," option and select the uploaded certificate that you want to use."),(0,r.kt)("li",{parentName:"ul"},"If you have configured ",(0,r.kt)("a",{parentName:"li",href:"https://rancher.com/docs/rke/latest/en/config-options/add-ons/ingress-controllers/#configuring-an-nginx-default-certificate"},"NGINX default certificate"),", you can select ",(0,r.kt)("strong",{parentName:"li"},"Use default ingress controller certificate"),".")),(0,r.kt)("figcaption",null,"Load Balancer Configuration: SSL/TLS Certificate Section"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"SSL/TLS Certificates Section",src:a(61774).Z,width:"1396",height:"390"})),(0,r.kt)("h3",{id:"tcp-load-balancing-options"},"TCP Load Balancing Options"),(0,r.kt)("h4",{id:"layer-4-load-balancer"},"Layer-4 Load Balancer"),(0,r.kt)("p",null,"For the TCP protocol, Rancher v2.x supports configuring a Layer 4 load balancer using the cloud provider in which your Kubernetes cluster is deployed. Once this load balancer appliance is configured for your cluster, when you choose the option of a ",(0,r.kt)("inlineCode",{parentName:"p"},"Layer-4 Load Balancer")," for port-mapping during workload deployment, Rancher automatically creates a corresponding load balancer service. This service will call the corresponding cloud provider and configure the load balancer appliance to route requests to the appropriate pods. See ",(0,r.kt)("a",{parentName:"p",href:"/zh/v2.0-v2.4/pages-for-subheaders/set-up-cloud-providers"},"Cloud Providers")," for information on how to configure LoadBalancer services for your cloud provider."),(0,r.kt)("p",null,"For example, if we create a deployment named ",(0,r.kt)("inlineCode",{parentName:"p"},"myapp")," and specify a Layer 4 load balancer in the ",(0,r.kt)("strong",{parentName:"p"},"Port Mapping")," section, Rancher will automatically add an entry to the ",(0,r.kt)("strong",{parentName:"p"},"Load Balancer")," tab named ",(0,r.kt)("inlineCode",{parentName:"p"},"myapp-loadbalancer"),"."),(0,r.kt)("figcaption",null,"Workload Deployment: Layer 4 Load Balancer Creation"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Deploy Layer-4 Load Balancer",src:a(96035).Z,width:"1748",height:"804"})),(0,r.kt)("p",null,"Once configuration of the load balancer succeeds, the Rancher UI provides a link to your workload's public endpoint."),(0,r.kt)("h4",{id:"nginx-ingress-controller-tcp-support-by-configmaps"},"NGINX Ingress Controller TCP Support by ConfigMaps"),(0,r.kt)("p",null,"Although NGINX supports TCP, Kubernetes Ingress itself does not support the TCP protocol. Therefore, out-of-the-box configuration of NGINX Ingress Controller for TCP balancing isn't possible."),(0,r.kt)("p",null,"However, there is a workaround to use NGINX's TCP balancing by creating a Kubernetes ConfigMap, as described in the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/kubernetes/ingress-nginx/blob/master/docs/user-guide/exposing-tcp-udp-services.md"},"Ingress GitHub readme"),". You can create a ConfigMap object that stores pod configuration parameters as key-value pairs, separate from the pod image, as described in the ",(0,r.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/tasks/configure-pod-container/configure-pod-configmap/"},"Kubernetes documentation"),"."),(0,r.kt)("p",null,"To configure NGINX to expose your services via TCP, you can add the ConfigMap ",(0,r.kt)("inlineCode",{parentName:"p"},"tcp-services")," that should exist in the ",(0,r.kt)("inlineCode",{parentName:"p"},"ingress-nginx")," namespace. This namespace also contains the NGINX Ingress Controller pods."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Layer-4 Load Balancer: ConfigMap Workaround",src:a(10496).Z,width:"1462",height:"694"})),(0,r.kt)("p",null,"The key in the ConfigMap entry should be the TCP port that you want to expose for public access: ",(0,r.kt)("inlineCode",{parentName:"p"},"<namespace/service name>:<service port>"),". As shown above, two workloads are listed in the ",(0,r.kt)("inlineCode",{parentName:"p"},"Default")," namespace. For example, the first entry in the ConfigMap above instructs NGINX to expose the ",(0,r.kt)("inlineCode",{parentName:"p"},"myapp")," workload (the one in the ",(0,r.kt)("inlineCode",{parentName:"p"},"default")," namespace that's listening on private port 80) over external port ",(0,r.kt)("inlineCode",{parentName:"p"},"6790"),". Adding these entries to the ConfigMap automatically updates the NGINX pods to configure these workloads for TCP balancing. The workloads exposed should be available at ",(0,r.kt)("inlineCode",{parentName:"p"},"<NodeIP>:<TCP Port>"),". If they are not accessible, you might have to expose the TCP port explicitly using a NodePort service."),(0,r.kt)("h2",{id:"rancher-v2x-load-balancing-limitations"},"Rancher v2.x Load Balancing Limitations"),(0,r.kt)("p",null,"Cattle provided feature-rich load balancer support that is ",(0,r.kt)("a",{parentName:"p",href:"%7B%7B%3Cbaseurl%3E%7D%7D/rancher/v1.6/en/cattle/adding-load-balancers/#load-balancers"},"well documented"),". Some of these features do not have equivalents in Rancher v2.x. This is the list of such features:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"No support for SNI in current NGINX Ingress Controller."),(0,r.kt)("li",{parentName:"ul"},"TCP load balancing requires a load balancer appliance enabled by cloud provider within the cluster. There is no Ingress support for TCP on Kubernetes."),(0,r.kt)("li",{parentName:"ul"},"Only ports 80 and 443 can be configured for HTTP/HTTPS routing via Ingress. Also Ingress Controller is deployed globally as a DaemonSet and not launched as a scalable service. Also, users cannot assign random external ports to be used for balancing. Therefore, users need to ensure that they configure unique hostname/path combinations to avoid routing conflicts using the same two ports."),(0,r.kt)("li",{parentName:"ul"},"There is no way to specify port rule priority and ordering."),(0,r.kt)("li",{parentName:"ul"},"Rancher v1.6 added support for draining backend connections and specifying a drain timeout. This is not supported in Rancher v2.x."),(0,r.kt)("li",{parentName:"ul"},"There is no support for specifying a custom stickiness policy and a custom load balancer config to be appended to the default config as of now in Rancher v2.x. There is some support, however, available in native Kubernetes for customizing the NGINX configuration as noted in the ",(0,r.kt)("a",{parentName:"li",href:"https://kubernetes.github.io/ingress-nginx/examples/customization/custom-configuration/"},"NGINX Ingress Controller Custom Configuration Documentation"),".")),(0,r.kt)("h3",{id:"finished"},"Finished!"))}g.isMDXComponent=!0},99272:function(e,t,a){t.Z=a.p+"assets/images/add-ingress-form-6bfb41ddce9d7f336376ae34fd34ca85.png"},90255:function(e,t,a){t.Z=a.p+"assets/images/add-ingress-a8c05c9e80c3d780b550291d6da83d6e.gif"},17742:function(e,t,a){t.Z=a.p+"assets/images/cattle-load-balancer-d435593d9576ac43013db96f7c787e82.svg"},96035:function(e,t,a){t.Z=a.p+"assets/images/deploy-workload-load-balancer-3f148093945e8c02303966ba757e324f.png"},2902:function(e,t,a){t.Z=a.p+"assets/images/kubernetes-load-balancer-9166956104c72208d0d9a5f282d5f7be.svg"},10496:function(e,t,a){t.Z=a.p+"assets/images/layer-4-lb-config-map-35083c9645393e1fd331656a313b2f32.png"},6306:function(e,t,a){t.Z=a.p+"assets/images/load-balancer-links-af6847f3d65c67359cf30c07454ed9ba.png"},61774:function(e,t,a){t.Z=a.p+"assets/images/load-balancer-ssl-certs-2ce2efec89c3d3a3b2bab094e7fd6215.png"},85742:function(e,t,a){t.Z=a.p+"assets/images/resolve-load-balancer-935fbcc19ef3e1126221ad93a48e417c.png"},18813:function(e,t){t.Z="data:image/png;base64,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"}}]);