"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[6054],{3905:function(e,t,a){a.d(t,{Zo:function(){return d},kt:function(){return g}});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),p=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),c=p(a),g=n,k=c["".concat(s,".").concat(g)]||c[g]||u[g]||l;return a?r.createElement(k,o(o({ref:t},d),{},{components:a})):r.createElement(k,o({ref:t},d))}));function g(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,o=new Array(l);o[0]=c;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var p=2;p<l;p++)o[p]=a[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},43496:function(e,t,a){a.r(t),a.d(t,{assets:function(){return d},contentTitle:function(){return s},default:function(){return g},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return u}});var r=a(87462),n=a(63366),l=(a(67294),a(3905)),o=["components"],i={title:"Setting up Amazon ELB Network Load Balancer",weight:5,aliases:["/rancher/v2.5/en/installation/ha/create-nodes-lb/nlb","/rancher/v2.5/en/installation/k8s-install/create-nodes-lb/nlb","/rancher/v2.5/en/installation/options/nlb","/rancher/v2.x/en/installation/resources/k8s-tutorials/infrastructure-tutorials/nlb/"]},s=void 0,p={unversionedId:"how-to-guides/new-user-guides/infrastructure-setup/amazon-elb-load-balancer",id:"version-2.5/how-to-guides/new-user-guides/infrastructure-setup/amazon-elb-load-balancer",title:"Setting up Amazon ELB Network Load Balancer",description:"This how-to guide describes how to set up a Network Load Balancer (NLB) in Amazon's EC2 service that will direct traffic to multiple instances on EC2.",source:"@site/versioned_docs/version-2.5/how-to-guides/new-user-guides/infrastructure-setup/amazon-elb-load-balancer.md",sourceDirName:"how-to-guides/new-user-guides/infrastructure-setup",slug:"/how-to-guides/new-user-guides/infrastructure-setup/amazon-elb-load-balancer",permalink:"/v2.5/how-to-guides/new-user-guides/infrastructure-setup/amazon-elb-load-balancer",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.5/how-to-guides/new-user-guides/infrastructure-setup/amazon-elb-load-balancer.md",tags:[],version:"2.5",lastUpdatedAt:1662676534,formattedLastUpdatedAt:"9/8/2022",frontMatter:{title:"Setting up Amazon ELB Network Load Balancer",weight:5,aliases:["/rancher/v2.5/en/installation/ha/create-nodes-lb/nlb","/rancher/v2.5/en/installation/k8s-install/create-nodes-lb/nlb","/rancher/v2.5/en/installation/options/nlb","/rancher/v2.x/en/installation/resources/k8s-tutorials/infrastructure-tutorials/nlb/"]},sidebar:"tutorialSidebar",previous:{title:"Setting up an NGINX Load Balancer",permalink:"/v2.5/how-to-guides/new-user-guides/infrastructure-setup/nginx-load-balancer"},next:{title:"Setting up Kubernetes Clusters in Rancher",permalink:"/v2.5/pages-for-subheaders/kubernetes-clusters-in-rancher-setup"}},d={},u=[{value:"Target Group (TCP port 443)",id:"target-group-tcp-port-443",level:3},{value:"Target Group (TCP port 80)",id:"target-group-tcp-port-80",level:3},{value:"Step 1: Configure Load Balancer",id:"step-1-configure-load-balancer",level:3},{value:"Step 2: Configure Routing",id:"step-2-configure-routing",level:3},{value:"Step 3: Register Targets",id:"step-3-register-targets",level:3},{value:"Step 4: Review",id:"step-4-review",level:3}],c={toc:u};function g(e){var t=e.components,i=(0,n.Z)(e,o);return(0,l.kt)("wrapper",(0,r.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"This how-to guide describes how to set up a Network Load Balancer (NLB) in Amazon's EC2 service that will direct traffic to multiple instances on EC2."),(0,l.kt)("p",null,"These examples show the load balancer being configured to direct traffic to three Rancher server nodes. If Rancher is installed on an RKE Kubernetes cluster, three nodes are required. If Rancher is installed on a K3s Kubernetes cluster, only two nodes are required."),(0,l.kt)("p",null,"This tutorial is about one possible way to set up your load balancer, not the only way. Other types of load balancers, such as a Classic Load Balancer or Application Load Balancer, could also direct traffic to the Rancher server nodes."),(0,l.kt)("p",null,"Rancher only supports using the Amazon NLB when terminating traffic in ",(0,l.kt)("inlineCode",{parentName:"p"},"tcp")," mode for port 443 rather than ",(0,l.kt)("inlineCode",{parentName:"p"},"tls")," mode. This is due to the fact that the NLB does not inject the correct headers into requests when terminated at the NLB. This means that if you want to use certificates managed by the Amazon Certificate Manager (ACM), you should use an ALB."),(0,l.kt)("h1",{id:"setting-up-the-load-balancer"},"Setting up the Load Balancer"),(0,l.kt)("p",null,"Configuring an Amazon NLB is a multistage process:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("a",{parentName:"li",href:"#1-create-target-groups"},"Create Target Groups")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("a",{parentName:"li",href:"#2-register-targets"},"Register Targets")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("a",{parentName:"li",href:"#3-create-your-nlb"},"Create Your NLB")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("a",{parentName:"li",href:"#4-add-listener-to-nlb-for-tcp-port-80"},"Add listener to NLB for TCP port 80"))),(0,l.kt)("h1",{id:"requirements"},"Requirements"),(0,l.kt)("p",null,"These instructions assume you have already created Linux instances in EC2. The load balancer will direct traffic to these nodes."),(0,l.kt)("h1",{id:"1-create-target-groups"},"1. Create Target Groups"),(0,l.kt)("p",null,"Begin by creating two target groups for the ",(0,l.kt)("strong",{parentName:"p"},"TCP")," protocol, one with TCP port 443 and one regarding TCP port 80 (providing redirect to TCP port 443). You'll add your Linux nodes to these groups."),(0,l.kt)("p",null,"Your first NLB configuration step is to create two target groups. Technically, only port 443 is needed to access Rancher, but it's convenient to add a listener for port 80, because traffic to port 80 will be automatically redirected to port 443."),(0,l.kt)("p",null,"Regardless of whether an NGINX Ingress or Traefik Ingress controller is used, the Ingress should redirect traffic from port 80 to port 443."),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Log into the ",(0,l.kt)("a",{parentName:"li",href:"https://console.aws.amazon.com/ec2/"},"Amazon AWS Console")," to get started. Make sure to select the ",(0,l.kt)("strong",{parentName:"li"},"Region")," where your EC2 instances (Linux nodes) are created."),(0,l.kt)("li",{parentName:"ol"},"Select ",(0,l.kt)("strong",{parentName:"li"},"Services")," and choose ",(0,l.kt)("strong",{parentName:"li"},"EC2"),", find the section ",(0,l.kt)("strong",{parentName:"li"},"Load Balancing")," and open ",(0,l.kt)("strong",{parentName:"li"},"Target Groups"),"."),(0,l.kt)("li",{parentName:"ol"},"Click ",(0,l.kt)("strong",{parentName:"li"},"Create target group")," to create the first target group, regarding TCP port 443.")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("strong",{parentName:"p"},"Note:")," Health checks are handled differently based on the Ingress. For details, refer to ",(0,l.kt)("a",{parentName:"p",href:"#health-check-paths-for-nginx-ingress-and-traefik-ingresses"},"this section."))),(0,l.kt)("h3",{id:"target-group-tcp-port-443"},"Target Group (TCP port 443)"),(0,l.kt)("p",null,"Configure the first target group according to the table below."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Option"),(0,l.kt)("th",{parentName:"tr",align:null},"Setting"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Target Group Name"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"rancher-tcp-443"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Target type"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"instance"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Protocol"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"TCP"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Port"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"443"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"VPC"),(0,l.kt)("td",{parentName:"tr",align:null},"Choose your VPC")))),(0,l.kt)("p",null,"Health check settings:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Option"),(0,l.kt)("th",{parentName:"tr",align:null},"Setting"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Protocol"),(0,l.kt)("td",{parentName:"tr",align:null},"TCP")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Port"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"override"),",",(0,l.kt)("inlineCode",{parentName:"td"},"80"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Healthy threshold"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"3"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Unhealthy threshold"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"3"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Timeout"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"6 seconds"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Interval"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"10 seconds"))))),(0,l.kt)("p",null,"Click ",(0,l.kt)("strong",{parentName:"p"},"Create target group")," to create the second target group, regarding TCP port 80."),(0,l.kt)("h3",{id:"target-group-tcp-port-80"},"Target Group (TCP port 80)"),(0,l.kt)("p",null,"Configure the second target group according to the table below."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Option"),(0,l.kt)("th",{parentName:"tr",align:null},"Setting"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Target Group Name"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"rancher-tcp-80"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Target type"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"instance"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Protocol"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"TCP"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Port"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"80"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"VPC"),(0,l.kt)("td",{parentName:"tr",align:null},"Choose your VPC")))),(0,l.kt)("p",null,"Health check settings:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Option"),(0,l.kt)("th",{parentName:"tr",align:null},"Setting"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Protocol"),(0,l.kt)("td",{parentName:"tr",align:null},"TCP")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Port"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"traffic port"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Healthy threshold"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"3"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Unhealthy threshold"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"3"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Timeout"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"6 seconds"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Interval"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"10 seconds"))))),(0,l.kt)("h1",{id:"2-register-targets"},"2. Register Targets"),(0,l.kt)("p",null,"Next, add your Linux nodes to both target groups."),(0,l.kt)("p",null,"Select the target group named ",(0,l.kt)("strong",{parentName:"p"},"rancher-tcp-443"),", click the tab ",(0,l.kt)("strong",{parentName:"p"},"Targets")," and choose ",(0,l.kt)("strong",{parentName:"p"},"Edit"),"."),(0,l.kt)("p",null,(0,l.kt)("img",{src:a(85550).Z,width:"624",height:"736"})),(0,l.kt)("p",null,"Select the instances (Linux nodes) you want to add, and click ",(0,l.kt)("strong",{parentName:"p"},"Add to registered"),"."),(0,l.kt)("hr",null),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Screenshot Add targets to target group TCP port 443"),(0,l.kt)("br",null)),(0,l.kt)("p",null,(0,l.kt)("img",{src:a(53623).Z,width:"1094",height:"1136"})),(0,l.kt)("hr",null),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Screenshot Added targets to target group TCP port 443"),(0,l.kt)("br",null)),(0,l.kt)("p",null,(0,l.kt)("img",{src:a(65392).Z,width:"1586",height:"656"})),(0,l.kt)("p",null,"When the instances are added, click ",(0,l.kt)("strong",{parentName:"p"},"Save")," on the bottom right of the screen."),(0,l.kt)("p",null,"Repeat those steps, replacing ",(0,l.kt)("strong",{parentName:"p"},"rancher-tcp-443")," with ",(0,l.kt)("strong",{parentName:"p"},"rancher-tcp-80"),". The same instances need to be added as targets to this target group."),(0,l.kt)("h1",{id:"3-create-your-nlb"},"3. Create Your NLB"),(0,l.kt)("p",null,"Use Amazon's Wizard to create a Network Load Balancer. As part of this process, you'll add the target groups you created in ",(0,l.kt)("a",{parentName:"p",href:"#1-create-target-groups"},"1. Create Target Groups"),"."),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"From your web browser, navigate to the ",(0,l.kt)("a",{parentName:"p",href:"https://console.aws.amazon.com/ec2/"},"Amazon EC2 Console"),".")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"From the navigation pane, choose ",(0,l.kt)("strong",{parentName:"p"},"LOAD BALANCING")," > ",(0,l.kt)("strong",{parentName:"p"},"Load Balancers"),".")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Click ",(0,l.kt)("strong",{parentName:"p"},"Create Load Balancer"),".")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Choose ",(0,l.kt)("strong",{parentName:"p"},"Network Load Balancer")," and click ",(0,l.kt)("strong",{parentName:"p"},"Create"),". Then complete each form."))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#step-1-configure-load-balancer"},"Step 1: Configure Load Balancer")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#step-2-configure-routing"},"Step 2: Configure Routing")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#step-3-register-targets"},"Step 3: Register Targets")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#step-4-review"},"Step 4: Review"))),(0,l.kt)("h3",{id:"step-1-configure-load-balancer"},"Step 1: Configure Load Balancer"),(0,l.kt)("p",null,"Set the following fields in the form:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Name:")," ",(0,l.kt)("inlineCode",{parentName:"li"},"rancher")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Scheme:")," ",(0,l.kt)("inlineCode",{parentName:"li"},"internal")," or ",(0,l.kt)("inlineCode",{parentName:"li"},"internet-facing"),". The scheme that you choose for your NLB is dependent on the configuration of your instances and VPC. If your instances do not have public IPs associated with them, or you will only be accessing Rancher internally, you should set your NLB Scheme to ",(0,l.kt)("inlineCode",{parentName:"li"},"internal")," rather than ",(0,l.kt)("inlineCode",{parentName:"li"},"internet-facing"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Listeners:")," The Load Balancer Protocol should be ",(0,l.kt)("inlineCode",{parentName:"li"},"TCP")," and the corresponding Load Balancer Port should be set to ",(0,l.kt)("inlineCode",{parentName:"li"},"443"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Availability Zones:")," Select Your ",(0,l.kt)("strong",{parentName:"li"},"VPC")," and ",(0,l.kt)("strong",{parentName:"li"},"Availability Zones"),".")),(0,l.kt)("h3",{id:"step-2-configure-routing"},"Step 2: Configure Routing"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"From the ",(0,l.kt)("strong",{parentName:"li"},"Target Group")," drop-down, choose ",(0,l.kt)("strong",{parentName:"li"},"Existing target group"),"."),(0,l.kt)("li",{parentName:"ol"},"From the ",(0,l.kt)("strong",{parentName:"li"},"Name")," drop-down, choose ",(0,l.kt)("inlineCode",{parentName:"li"},"rancher-tcp-443"),"."),(0,l.kt)("li",{parentName:"ol"},"Open ",(0,l.kt)("strong",{parentName:"li"},"Advanced health check settings"),", and configure ",(0,l.kt)("strong",{parentName:"li"},"Interval")," to ",(0,l.kt)("inlineCode",{parentName:"li"},"10 seconds"),".")),(0,l.kt)("h3",{id:"step-3-register-targets"},"Step 3: Register Targets"),(0,l.kt)("p",null,"Since you registered your targets earlier, all you have to do is click ",(0,l.kt)("strong",{parentName:"p"},"Next: Review"),"."),(0,l.kt)("h3",{id:"step-4-review"},"Step 4: Review"),(0,l.kt)("p",null,"Look over the load balancer details and click ",(0,l.kt)("strong",{parentName:"p"},"Create")," when you're satisfied."),(0,l.kt)("p",null,"After AWS creates the NLB, click ",(0,l.kt)("strong",{parentName:"p"},"Close"),"."),(0,l.kt)("h1",{id:"4-add-listener-to-nlb-for-tcp-port-80"},"4. Add listener to NLB for TCP port 80"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Select your newly created NLB and select the ",(0,l.kt)("strong",{parentName:"p"},"Listeners")," tab.")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Click ",(0,l.kt)("strong",{parentName:"p"},"Add listener"),".")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Use ",(0,l.kt)("inlineCode",{parentName:"p"},"TCP"),":",(0,l.kt)("inlineCode",{parentName:"p"},"80")," as ",(0,l.kt)("strong",{parentName:"p"},"Protocol")," : ",(0,l.kt)("strong",{parentName:"p"},"Port"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Click ",(0,l.kt)("strong",{parentName:"p"},"Add action")," and choose ",(0,l.kt)("strong",{parentName:"p"},"Forward to..."))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"From the ",(0,l.kt)("strong",{parentName:"p"},"Forward to")," drop-down, choose ",(0,l.kt)("inlineCode",{parentName:"p"},"rancher-tcp-80"),".")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Click ",(0,l.kt)("strong",{parentName:"p"},"Save")," in the top right of the screen."))),(0,l.kt)("h1",{id:"health-check-paths-for-nginx-ingress-and-traefik-ingresses"},"Health Check Paths for NGINX Ingress and Traefik Ingresses"),(0,l.kt)("p",null,"K3s and RKE Kubernetes clusters handle health checks differently because they use different Ingresses by default."),(0,l.kt)("p",null,"For RKE Kubernetes clusters, NGINX Ingress is used by default, whereas for K3s Kubernetes clusters, Traefik is the default Ingress."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Traefik:")," The health check path is ",(0,l.kt)("inlineCode",{parentName:"li"},"/ping"),". By default ",(0,l.kt)("inlineCode",{parentName:"li"},"/ping")," is always matched (regardless of Host), and a response from ",(0,l.kt)("a",{parentName:"li",href:"https://docs.traefik.io/operations/ping/"},"Traefik itself")," is always served."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"NGINX Ingress:")," The default backend of the NGINX Ingress controller has a ",(0,l.kt)("inlineCode",{parentName:"li"},"/healthz")," endpoint. By default ",(0,l.kt)("inlineCode",{parentName:"li"},"/healthz")," is always matched (regardless of Host), and a response from ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/kubernetes/ingress-nginx/blob/0cbe783f43a9313c9c26136e888324b1ee91a72f/charts/ingress-nginx/values.yaml#L212"},(0,l.kt)("inlineCode",{parentName:"a"},"ingress-nginx")," itself")," is always served.")),(0,l.kt)("p",null,"To simulate an accurate health check, it is a best practice to use the Host header (Rancher hostname) combined with ",(0,l.kt)("inlineCode",{parentName:"p"},"/ping")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"/healthz")," (for K3s or for RKE clusters, respectively) wherever possible, to get a response from the Rancher Pods, not the Ingress."))}g.isMDXComponent=!0},53623:function(e,t,a){t.Z=a.p+"assets/images/add-targets-targetgroup-443-331e2f186b568860b9d8700b7acfc1ea.png"},65392:function(e,t,a){t.Z=a.p+"assets/images/added-targets-targetgroup-443-e076e0c70c61c458767ccb7bc17e9361.png"},85550:function(e,t,a){t.Z=a.p+"assets/images/edit-targetgroup-443-1143314c2ed28b80d6b1daf6068bf52e.png"}}]);