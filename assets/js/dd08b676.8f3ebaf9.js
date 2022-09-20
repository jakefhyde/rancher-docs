"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[34663],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return d}});var o=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,o,a=function(e,t){if(null==e)return{};var r,o,a={},n=Object.keys(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=o.createContext({}),u=function(e){var t=o.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=u(e.components);return o.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var r=e.components,a=e.mdxType,n=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(r),d=a,m=p["".concat(l,".").concat(d)]||p[d]||h[d]||n;return r?o.createElement(m,i(i({ref:t},c),{},{components:r})):o.createElement(m,i({ref:t},c))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=r.length,i=new Array(n);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var u=2;u<n;u++)i[u]=r[u];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}p.displayName="MDXCreateElement"},4676:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return h}});var o=r(87462),a=r(63366),n=(r(67294),r(3905)),i=["components"],s={title:"Monitoring Best Practices",weight:2},l=void 0,u={unversionedId:"reference-guides/best-practices/rancher-managed-clusters/monitoring-best-practices",id:"reference-guides/best-practices/rancher-managed-clusters/monitoring-best-practices",title:"Monitoring Best Practices",description:"Configuring sensible monitoring and alerting rules is vital for running any production workloads securely and reliably. This is not different when using Kubernetes and Rancher. Fortunately the integrated monitoring and alerting functionality makes this whole process a lot easier.",source:"@site/docs/reference-guides/best-practices/rancher-managed-clusters/monitoring-best-practices.md",sourceDirName:"reference-guides/best-practices/rancher-managed-clusters",slug:"/reference-guides/best-practices/rancher-managed-clusters/monitoring-best-practices",permalink:"/reference-guides/best-practices/rancher-managed-clusters/monitoring-best-practices",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/reference-guides/best-practices/rancher-managed-clusters/monitoring-best-practices.md",tags:[],version:"current",lastUpdatedAt:1663691987,formattedLastUpdatedAt:"9/20/2022",frontMatter:{title:"Monitoring Best Practices",weight:2},sidebar:"tutorialSidebar",previous:{title:"Logging Best Practices",permalink:"/reference-guides/best-practices/rancher-managed-clusters/logging-best-practices"},next:{title:"Tips for Setting Up Containers",permalink:"/reference-guides/best-practices/rancher-managed-clusters/tips-to-set-up-containers"}},c={},h=[{value:"What to Monitor",id:"what-to-monitor",level:2},{value:"Configuring Prometheus Resource Usage",id:"configuring-prometheus-resource-usage",level:2},{value:"Storage and Data Retention",id:"storage-and-data-retention",level:3},{value:"CPU and Memory Requests and Limits",id:"cpu-and-memory-requests-and-limits",level:3},{value:"Federation and Long-term Storage",id:"federation-and-long-term-storage",level:3},{value:"Scraping Custom Workloads",id:"scraping-custom-workloads",level:2},{value:"About Prometheus Exporters",id:"about-prometheus-exporters",level:3},{value:"Prometheus support in Programming Languages and Frameworks",id:"prometheus-support-in-programming-languages-and-frameworks",level:3},{value:"ServiceMonitors and PodMonitors",id:"servicemonitors-and-podmonitors",level:3},{value:"Prometheus Push Gateway",id:"prometheus-push-gateway",level:3},{value:"Prometheus Blackbox Monitor",id:"prometheus-blackbox-monitor",level:3},{value:"Monitoring in a (Micro)Service Architecture",id:"monitoring-in-a-microservice-architecture",level:2},{value:"Real User Monitoring",id:"real-user-monitoring",level:2},{value:"Security Monitoring",id:"security-monitoring",level:2},{value:"Setting up Alerts",id:"setting-up-alerts",level:2}],p={toc:h};function d(e){var t=e.components,r=(0,a.Z)(e,i);return(0,n.kt)("wrapper",(0,o.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Configuring sensible monitoring and alerting rules is vital for running any production workloads securely and reliably. This is not different when using Kubernetes and Rancher. Fortunately the integrated monitoring and alerting functionality makes this whole process a lot easier."),(0,n.kt)("p",null,"The ",(0,n.kt)("a",{parentName:"p",href:"/pages-for-subheaders/monitoring-and-alerting"},"Rancher monitoring documentation")," describes how you can set up a complete Prometheus and Grafana stack. Out of the box this will scrape monitoring data from all system and Kubernetes components in your cluster and provide sensible dashboards and alerts for them to get started. But for a reliable setup, you also need to monitor your own workloads and adapt Prometheus and Grafana to your own specific use cases and cluster sizes. This document aims to give you best practices for this."),(0,n.kt)("h2",{id:"what-to-monitor"},"What to Monitor"),(0,n.kt)("p",null,"Kubernetes itself, as well as applications running inside of it, form a distributed system where different components interact with each other. For the whole system and each individual component, you have to ensure performance, availability, reliability and scalability. A good resource with more details and information is Google's free ",(0,n.kt)("a",{parentName:"p",href:"https://landing.google.com/sre/sre-book/"},"Site Reliability Engineering Book"),", especially the chapter about ",(0,n.kt)("a",{parentName:"p",href:"https://landing.google.com/sre/sre-book/chapters/monitoring-distributed-systems/"},"Monitoring distributed systems"),"."),(0,n.kt)("h2",{id:"configuring-prometheus-resource-usage"},"Configuring Prometheus Resource Usage"),(0,n.kt)("p",null,"When installing the integrated monitoring stack, Rancher allows to configure several settings that are dependent on the size of your cluster and the workloads running in it. This chapter covers these in more detail."),(0,n.kt)("h3",{id:"storage-and-data-retention"},"Storage and Data Retention"),(0,n.kt)("p",null,"The amount of storage needed for Prometheus directly correlates to the amount of time series and labels that you store and the data retention you have configured. It is important to note that Prometheus is not meant to be used as a long-term metrics storage. Data retention time is usually only a couple of days and not weeks or months. The reason for this is that Prometheus does not perform any aggregation on its stored metrics. This is great because aggregation can dilute data, but it also means that the needed storage grows linearly over time without retention."),(0,n.kt)("p",null,"One way to calculate the necessary storage is to look at the average size of a storage chunk in Prometheus with this query"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"rate(prometheus_tsdb_compaction_chunk_size_bytes_sum[1h]) / rate(prometheus_tsdb_compaction_chunk_samples_sum[1h])\n")),(0,n.kt)("p",null,"Next, find out your data ingestion rate per second:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"rate(prometheus_tsdb_head_samples_appended_total[1h])\n")),(0,n.kt)("p",null,"and then multiply this with the retention time, adding a few percentage points as buffer:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"average chunk size in bytes * ingestion rate per second * retention time in seconds * 1.1 = necessary storage in bytes\n")),(0,n.kt)("p",null,"You can find more information about how to calculate the necessary storage in this ",(0,n.kt)("a",{parentName:"p",href:"https://www.robustperception.io/how-much-disk-space-do-prometheus-blocks-use"},"blog post"),"."),(0,n.kt)("p",null,"You can read more about the Prometheus storage concept in the ",(0,n.kt)("a",{parentName:"p",href:"https://prometheus.io/docs/prometheus/latest/storage"},"Prometheus documentation"),"."),(0,n.kt)("h3",{id:"cpu-and-memory-requests-and-limits"},"CPU and Memory Requests and Limits"),(0,n.kt)("p",null,"In larger Kubernetes clusters Prometheus can consume quite a bit of memory. The amount of memory Prometheus needs directly correlates to the amount of time series and amount of labels it stores and the scrape interval in which these are filled."),(0,n.kt)("p",null,"You can find more information about how to calculate the necessary memory in this ",(0,n.kt)("a",{parentName:"p",href:"https://www.robustperception.io/how-much-ram-does-prometheus-2-x-need-for-cardinality-and-ingestion"},"blog post"),"."),(0,n.kt)("p",null,"The amount of necessary CPUs correlate with the amount of queries you are performing."),(0,n.kt)("h3",{id:"federation-and-long-term-storage"},"Federation and Long-term Storage"),(0,n.kt)("p",null,"Prometheus is not meant to store metrics for a long amount of time, but should only be used for short term storage."),(0,n.kt)("p",null,"In order to store some, or all metrics for a long time, you can leverage Prometheus' ",(0,n.kt)("a",{parentName:"p",href:"https://prometheus.io/docs/prometheus/latest/storage/#remote-storage-integrations"},"remote read/write")," capabilities to connect it to storage systems like ",(0,n.kt)("a",{parentName:"p",href:"https://thanos.io/"},"Thanos"),", ",(0,n.kt)("a",{parentName:"p",href:"https://www.influxdata.com/"},"InfluxDB"),", ",(0,n.kt)("a",{parentName:"p",href:"https://www.m3db.io/"},"M3DB"),", or others. You can find an example setup in this ",(0,n.kt)("a",{parentName:"p",href:"https://rancher.com/blog/2020/prometheus-metric-federation"},"blog post"),"."),(0,n.kt)("h2",{id:"scraping-custom-workloads"},"Scraping Custom Workloads"),(0,n.kt)("p",null,"While the integrated Rancher Monitoring already scrapes system metrics from a cluster's nodes and system components, the custom workloads that you deploy on Kubernetes should also be scraped for data. For that you can configure Prometheus to do an HTTP request to an endpoint of your applications in a certain interval. These endpoints should then return their metrics in a Prometheus format."),(0,n.kt)("p",null,"In general, you want to scrape data from all the workloads running in your cluster so that you can use them for alerts or debugging issues. Often, you recognize that you need some data only when you actually need the metrics during an incident. It is good, if it is already scraped and stored. Since Prometheus is only meant to be a short-term metrics storage, scraping and keeping lots of data is usually not that expensive. If you are using a long-term storage solution with Prometheus, you can then still decide which data you are actually persisting and keeping there."),(0,n.kt)("h3",{id:"about-prometheus-exporters"},"About Prometheus Exporters"),(0,n.kt)("p",null,"A lot of 3rd party workloads like databases, queues or web-servers either already support exposing metrics in a Prometheus format, or there are so called exporters available that translate between the tool's metrics and the format that Prometheus understands. Usually you can add these exporters as additional sidecar containers to the workload's Pods. A lot of helm charts already include options to deploy the correct exporter. Additionally you can find a curated list of exports by SysDig on ",(0,n.kt)("a",{parentName:"p",href:"https://promcat.io/"},"promcat.io")," and on ",(0,n.kt)("a",{parentName:"p",href:"https://exporterhub.io/"},"ExporterHub"),"."),(0,n.kt)("h3",{id:"prometheus-support-in-programming-languages-and-frameworks"},"Prometheus support in Programming Languages and Frameworks"),(0,n.kt)("p",null,"To get your own custom application metrics into Prometheus, you have to collect and expose these metrics directly from your application's code. Fortunately, there are already libraries and integrations available to help with this for most popular programming languages and frameworks. One example for this is the Prometheus support in the ",(0,n.kt)("a",{parentName:"p",href:"https://docs.spring.io/spring-metrics/docs/current/public/prometheus"},"Spring Framework"),"."),(0,n.kt)("h3",{id:"servicemonitors-and-podmonitors"},"ServiceMonitors and PodMonitors"),(0,n.kt)("p",null,"Once all your workloads expose metrics in a Prometheus format, you have to configure Prometheus to scrape it. Under the hood Rancher is using the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/prometheus-operator/prometheus-operator"},"prometheus-operator"),". This makes it easy to add additional scraping targets with ServiceMonitors and PodMonitors. A lot of helm charts already include an option to create these monitors directly. You can also find more information in the Rancher documentation."),(0,n.kt)("h3",{id:"prometheus-push-gateway"},"Prometheus Push Gateway"),(0,n.kt)("p",null,"There are some workloads that are traditionally hard to scrape by Prometheus. Examples for these are short lived workloads like Jobs and CronJobs, or applications that do not allow sharing data between individual handled incoming requests, like PHP applications."),(0,n.kt)("p",null,"To still get metrics for these use cases, you can set up ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/prometheus/pushgateway"},"prometheus-pushgateways"),". The CronJob or PHP application would push metric updates to the pushgateway. The pushgateway aggregates and exposes them through an HTTP endpoint, which then can be scraped by Prometheus."),(0,n.kt)("h3",{id:"prometheus-blackbox-monitor"},"Prometheus Blackbox Monitor"),(0,n.kt)("p",null,"Sometimes it is useful to monitor workloads from the outside. For this, you can use the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/prometheus/blackbox_exporter"},"Prometheus blackbox-exporter")," which allows probing any kind of endpoint over HTTP, HTTPS, DNS, TCP and ICMP."),(0,n.kt)("h2",{id:"monitoring-in-a-microservice-architecture"},"Monitoring in a (Micro)Service Architecture"),(0,n.kt)("p",null,"If you have a (micro)service architecture where multiple individual workloads within your cluster are communicating with each other, it is really important to have detailed metrics and traces about this traffic to understand how all these workloads are communicating with each other and where a problem or bottleneck may be."),(0,n.kt)("p",null,"Of course you can monitor all this internal traffic in all your workloads and expose these metrics to Prometheus. But this can quickly become quite work intensive. Service Meshes like Istio, which can be installed with ",(0,n.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rancher/v2.6/en/istio/"},"a click")," in Rancher, can do this automatically and provide rich telemetry about the traffic between all services."),(0,n.kt)("h2",{id:"real-user-monitoring"},"Real User Monitoring"),(0,n.kt)("p",null,"Monitoring the availability and performance of all your internal workloads is vitally important to run stable, reliable and fast applications. But these metrics only show you parts of the picture. To get a complete view it is also necessary to know how your end users are actually perceiving it. For this you can look into various ",(0,n.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Real_user_monitoring"},"Real user monitoring solutions"),"."),(0,n.kt)("h2",{id:"security-monitoring"},"Security Monitoring"),(0,n.kt)("p",null,"In addition to monitoring workloads to detect performance, availability or scalability problems, the cluster and the workloads running into it should also be monitored for potential security problems. A good starting point is to frequently run and alert on ",(0,n.kt)("a",{parentName:"p",href:"/pages-for-subheaders/cis-scan-guides"},"CIS Scans")," which check if the cluster is configured according to security best practices."),(0,n.kt)("p",null,"For the workloads, you can have a look at Kubernetes and Container security solutions like ",(0,n.kt)("a",{parentName:"p",href:"https://www.suse.com/products/neuvector/"},"NeuVector"),", ",(0,n.kt)("a",{parentName:"p",href:"https://falco.org/"},"Falco"),", ",(0,n.kt)("a",{parentName:"p",href:"https://www.aquasec.com/solutions/kubernetes-container-security/"},"Aqua Kubernetes Security"),", ",(0,n.kt)("a",{parentName:"p",href:"https://sysdig.com/"},"SysDig"),"."),(0,n.kt)("h2",{id:"setting-up-alerts"},"Setting up Alerts"),(0,n.kt)("p",null,"Getting all the metrics into a monitoring systems and visualizing them in dashboards is great, but you also want to be pro-actively alerted if something goes wrong."),(0,n.kt)("p",null,"The integrated Rancher monitoring already configures a sensible set of alerts that make sense in any Kubernetes cluster. You should extend these to cover your specific workloads and use cases."),(0,n.kt)("p",null,"When setting up alerts, configure them for all the workloads that are critical to the availability of your applications. But also make sure that they are not too noisy. Ideally every alert you are receiving should be because of a problem that needs your attention and needs to be fixed. If you have alerts that are firing all the time but are not that critical, there is a danger that you start ignoring your alerts all together and then miss the real important ones. Less may be more here. Start to focus on the real important metrics first, for example alert if your application is offline. Fix all the problems that start to pop up and then start to create more detailed alerts."),(0,n.kt)("p",null,"If an alert starts firing, but there is nothing you can do about it at the moment, it's also fine to silence the alert for a certain amount of time, so that you can look at it later."),(0,n.kt)("p",null,"You can find more information on how to set up alerts and notification channels in the ",(0,n.kt)("a",{parentName:"p",href:"/pages-for-subheaders/monitoring-and-alerting"},"Rancher Documentation"),"."))}d.isMDXComponent=!0}}]);