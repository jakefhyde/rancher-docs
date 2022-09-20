"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[52801],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return d}});var a=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,i=function(e,t){if(null==e)return{};var r,a,i={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=a.createContext({}),c=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var r=e.components,i=e.mdxType,n=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(r),d=i,m=p["".concat(l,".").concat(d)]||p[d]||h[d]||n;return r?a.createElement(m,o(o({ref:t},u),{},{components:r})):a.createElement(m,o({ref:t},u))}));function d(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=r.length,o=new Array(n);o[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var c=2;c<n;c++)o[c]=r[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}p.displayName="MDXCreateElement"},51270:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return h}});var a=r(87462),i=r(63366),n=(r(67294),r(3905)),o=["components"],s={title:"Istio",weight:15,aliases:["/rancher/v2.0-v2.4/en/dashboard/istio","/rancher/v2.0-v2.4/en/project-admin/istio/configuring-resource-allocations/","/rancher/v2.0-v2.4/en/cluster-admin/tools/istio/","/rancher/v2.0-v2.4/en/project-admin/istio","/rancher/v2.0-v2.4/en/istio/legacy/cluster-istio","/rancher/v2.x/en/istio/v2.3.x-v2.4.x/"]},l=void 0,c={unversionedId:"pages-for-subheaders/istio",id:"version-2.0-2.4/pages-for-subheaders/istio",title:"Istio",description:"Available as of v2.3.0",source:"@site/versioned_docs/version-2.0-2.4/pages-for-subheaders/istio.md",sourceDirName:"pages-for-subheaders",slug:"/pages-for-subheaders/istio",permalink:"/zh/v2.0-v2.4/pages-for-subheaders/istio",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.0-2.4/pages-for-subheaders/istio.md",tags:[],version:"2.0-2.4",lastUpdatedAt:1663691987,formattedLastUpdatedAt:"2022/9/20",frontMatter:{title:"Istio",weight:15,aliases:["/rancher/v2.0-v2.4/en/dashboard/istio","/rancher/v2.0-v2.4/en/project-admin/istio/configuring-resource-allocations/","/rancher/v2.0-v2.4/en/cluster-admin/tools/istio/","/rancher/v2.0-v2.4/en/project-admin/istio","/rancher/v2.0-v2.4/en/istio/legacy/cluster-istio","/rancher/v2.x/en/istio/v2.3.x-v2.4.x/"]},sidebar:"tutorialSidebar",previous:{title:"Skipped and Not Applicable Tests",permalink:"/zh/v2.0-v2.4/explanations/integrations-in-rancher/cis-scans/skipped-and-not-applicable-tests"},next:{title:"CPU and Memory Allocations",permalink:"/zh/v2.0-v2.4/explanations/integrations-in-rancher/istio/cpu-and-memory-allocations"}},u={},h=[{value:"Two Ingresses",id:"two-ingresses",level:3}],p={toc:h};function d(e){var t=e.components,s=(0,i.Z)(e,o);return(0,n.kt)("wrapper",(0,a.Z)({},p,s,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"Available as of v2.3.0")),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://istio.io/"},"Istio")," is an open-source tool that makes it easier for DevOps teams to observe, control, troubleshoot, and secure the traffic within a complex network of microservices."),(0,n.kt)("p",null,"As a network of microservices changes and grows, the interactions between them can become more difficult to manage and understand. In such a situation, it is useful to have a service mesh as a separate infrastructure layer. Istio's service mesh lets you manipulate traffic between microservices without changing the microservices directly."),(0,n.kt)("p",null,"Our integration of Istio is designed so that a Rancher operator, such as an administrator or cluster owner, can deliver Istio to developers. Then developers can use Istio to enforce security policies, troubleshoot problems, or manage traffic for green/blue deployments, canary deployments, or A/B testing."),(0,n.kt)("p",null,"This service mesh provides features that include but are not limited to the following:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Traffic management features"),(0,n.kt)("li",{parentName:"ul"},"Enhanced monitoring and tracing"),(0,n.kt)("li",{parentName:"ul"},"Service discovery and routing"),(0,n.kt)("li",{parentName:"ul"},"Secure connections and service-to-service authentication with mutual TLS"),(0,n.kt)("li",{parentName:"ul"},"Load balancing"),(0,n.kt)("li",{parentName:"ul"},"Automatic retries, backoff, and circuit breaking")),(0,n.kt)("p",null,"After Istio is enabled in a cluster, you can leverage Istio's control plane functionality with ",(0,n.kt)("inlineCode",{parentName:"p"},"kubectl"),"."),(0,n.kt)("p",null,"Rancher's Istio integration comes with comprehensive visualization aids:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Trace the root cause of errors with Jaeger.")," ",(0,n.kt)("a",{parentName:"li",href:"https://www.jaegertracing.io/"},"Jaeger")," is an open-source tool that provides a UI for a distributed tracing system, which is useful for root cause analysis and for determining what causes poor performance. Distributed tracing allows you to view an entire chain of calls, which might originate with a user request and traverse dozens of microservices."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Get the full picture of your microservice architecture with Kiali.")," ",(0,n.kt)("a",{parentName:"li",href:"https://www.kiali.io/"},"Kiali")," provides a diagram that shows the services within a service mesh and how they are connected, including the traffic rates and latencies between them. You can check the health of the service mesh, or drill down to see the incoming and outgoing requests to a single component."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Gain insights from time series analytics with Grafana dashboards.")," ",(0,n.kt)("a",{parentName:"li",href:"https://grafana.com/"},"Grafana")," is an analytics platform that allows you to query, visualize, alert on and understand the data gathered by Prometheus."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Write custom queries for time series data with the Prometheus UI.")," ",(0,n.kt)("a",{parentName:"li",href:"https://prometheus.io/"},"Prometheus")," is a systems monitoring and alerting toolkit. Prometheus scrapes data from your cluster, which is then used by Grafana. A Prometheus UI is also integrated into Rancher, and lets you write custom queries for time series data and see the results in the UI.")),(0,n.kt)("p",null,"Istio needs to be set up by a Rancher administrator or cluster administrator before it can be used in a project."),(0,n.kt)("h1",{id:"prerequisites"},"Prerequisites"),(0,n.kt)("p",null,"Before enabling Istio, we recommend that you confirm that your Rancher worker nodes have enough ",(0,n.kt)("a",{parentName:"p",href:"/zh/v2.0-v2.4/explanations/integrations-in-rancher/istio/cpu-and-memory-allocations"},"CPU and memory")," to run all of the components of Istio."),(0,n.kt)("h1",{id:"setup-guide"},"Setup Guide"),(0,n.kt)("p",null,"Refer to the ",(0,n.kt)("a",{parentName:"p",href:"/zh/v2.0-v2.4/pages-for-subheaders/istio-setup-guide"},"setup guide")," for instructions on how to set up Istio and use it in a project."),(0,n.kt)("h1",{id:"disabling-istio"},"Disabling Istio"),(0,n.kt)("p",null,"To remove Istio components from a cluster, namespace, or workload, refer to the section on ",(0,n.kt)("a",{parentName:"p",href:"/zh/v2.0-v2.4/explanations/integrations-in-rancher/istio/disable-istio"},"disabling Istio.")),(0,n.kt)("h1",{id:"accessing-visualizations"},"Accessing Visualizations"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"By default, only cluster owners have access to Jaeger and Kiali. For instructions on how to allow project members to access them, see ",(0,n.kt)("a",{parentName:"p",href:"/zh/v2.0-v2.4/explanations/integrations-in-rancher/istio/rbac-for-istio"},"this section."))),(0,n.kt)("p",null,"After Istio is set up in a cluster, Grafana, Prometheus, Jaeger, and Kiali are available in the Rancher UI."),(0,n.kt)("p",null,"Your access to the visualizations depend on your role. Grafana and Prometheus are only available for cluster owners. The Kiali and Jaeger UIs are available only to cluster owners by default, but cluster owners can allow project members to access them by editing the Istio settings. When you go to your project and click ",(0,n.kt)("strong",{parentName:"p"},"Resources > Istio,")," you can go to each UI for Kiali, Jaeger, Grafana, and Prometheus by clicking their icons in the top right corner of the page."),(0,n.kt)("p",null,"To see the visualizations, go to the cluster where Istio is set up and click ",(0,n.kt)("strong",{parentName:"p"},"Tools > Istio.")," You should see links to each UI at the top of the page."),(0,n.kt)("p",null,"You can also get to the visualization tools from the project view."),(0,n.kt)("h1",{id:"viewing-the-kiali-traffic-graph"},"Viewing the Kiali Traffic Graph"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"From the project view in Rancher, click ",(0,n.kt)("strong",{parentName:"li"},"Resources > Istio.")),(0,n.kt)("li",{parentName:"ol"},"If you are a cluster owner, you can go to the ",(0,n.kt)("strong",{parentName:"li"},"Traffic Graph")," tab. This tab has the Kiali network visualization integrated into the UI.")),(0,n.kt)("h1",{id:"viewing-traffic-metrics"},"Viewing Traffic Metrics"),(0,n.kt)("p",null,"Istio\u2019s monitoring features provide visibility into the performance of all your services."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"From the project view in Rancher, click ",(0,n.kt)("strong",{parentName:"li"},"Resources > Istio.")),(0,n.kt)("li",{parentName:"ol"},"Go to the ",(0,n.kt)("strong",{parentName:"li"},"Traffic Metrics")," tab. After traffic is generated in your cluster, you should be able to see metrics for ",(0,n.kt)("strong",{parentName:"li"},"Success Rate, Request Volume, 4xx Response Count, Project 5xx Response Count")," and ",(0,n.kt)("strong",{parentName:"li"},"Request Duration.")," Cluster owners can see all of the metrics, while project members can see a subset of the metrics.")),(0,n.kt)("h1",{id:"architecture"},"Architecture"),(0,n.kt)("p",null,"Istio installs a service mesh that uses ",(0,n.kt)("a",{parentName:"p",href:"https://www.envoyproxy.io/learn/service-mesh"},"Envoy")," sidecar proxies to intercept traffic to each workload. These sidecars intercept and manage service-to-service communication, allowing fine-grained observation and control over traffic within the cluster."),(0,n.kt)("p",null,"Only workloads that have the Istio sidecar injected can be tracked and controlled by Istio."),(0,n.kt)("p",null,"Enabling Istio in Rancher enables monitoring in the cluster, and enables Istio in all new namespaces that are created in a cluster. You need to manually enable Istio in preexisting namespaces."),(0,n.kt)("p",null,"When a namespace has Istio enabled, new workloads deployed in the namespace will automatically have the Istio sidecar. You need to manually enable Istio in preexisting workloads."),(0,n.kt)("p",null,"For more information on the Istio sidecar, refer to the ",(0,n.kt)("a",{parentName:"p",href:"https://istio.io/docs/setup/kubernetes/additional-setup/sidecar-injection/"},"Istio docs"),"."),(0,n.kt)("h3",{id:"two-ingresses"},"Two Ingresses"),(0,n.kt)("p",null,"By default, each Rancher-provisioned cluster has one NGINX ingress controller allowing traffic into the cluster. To allow Istio to receive external traffic, you need to enable the Istio ingress gateway for the cluster. The result is that your cluster will have two ingresses."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"In an Istio-enabled cluster, you can have two ingresses: the default Nginx ingress, and the default Istio controller.",src:r(74025).Z,width:"691",height:"572"})))}d.isMDXComponent=!0},74025:function(e,t,r){t.Z=r.p+"assets/images/istio-ingress-3ca2b3bfa19fe1f0d38b74966b383ac0.svg"}}]);