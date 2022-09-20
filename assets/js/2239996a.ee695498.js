"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[16137],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return h}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(n),h=a,m=u["".concat(c,".").concat(h)]||u[h]||d[h]||o;return n?r.createElement(m,i(i({ref:t},p),{},{components:n})):r.createElement(m,i({ref:t},p))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},93785:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return h},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return d}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=["components"],l={title:"Rancher CLI",description:"Interact with Rancher using command line interface (CLI) tools from your workstation.",weight:21},c=void 0,s={unversionedId:"reference-guides/cli-with-rancher/rancher-cli",id:"reference-guides/cli-with-rancher/rancher-cli",title:"Rancher CLI",description:"Interact with Rancher using command line interface (CLI) tools from your workstation.",source:"@site/docs/reference-guides/cli-with-rancher/rancher-cli.md",sourceDirName:"reference-guides/cli-with-rancher",slug:"/reference-guides/cli-with-rancher/rancher-cli",permalink:"/reference-guides/cli-with-rancher/rancher-cli",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/reference-guides/cli-with-rancher/rancher-cli.md",tags:[],version:"current",lastUpdatedAt:1663691987,formattedLastUpdatedAt:"9/20/2022",frontMatter:{title:"Rancher CLI",description:"Interact with Rancher using command line interface (CLI) tools from your workstation.",weight:21},sidebar:"tutorialSidebar",previous:{title:"CLI with Rancher",permalink:"/pages-for-subheaders/cli-with-rancher"},next:{title:"kubectl Utility",permalink:"/reference-guides/cli-with-rancher/kubectl-utility"}},p={},d=[{value:"Download Rancher CLI",id:"download-rancher-cli",level:3},{value:"Requirements",id:"requirements",level:3},{value:"CLI Authentication",id:"cli-authentication",level:3},{value:"Project Selection",id:"project-selection",level:3},{value:"Commands",id:"commands",level:3},{value:"Rancher CLI Help",id:"rancher-cli-help",level:3},{value:"Limitations",id:"limitations",level:3}],u={toc:d};function h(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The Rancher CLI (Command Line Interface) is a unified tool that you can use to interact with Rancher. With this tool, you can operate Rancher using a command line rather than the GUI."),(0,o.kt)("h3",{id:"download-rancher-cli"},"Download Rancher CLI"),(0,o.kt)("p",null,"The binary can be downloaded directly from the UI. The link can be found in the right hand side of the footer in the UI. We have binaries for Windows, Mac, and Linux. You can also check the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/rancher/cli/releases"},"releases page for our CLI")," for direct downloads of the binary."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"In the upper left corner, click ",(0,o.kt)("strong",{parentName:"li"},"\u2630"),"."),(0,o.kt)("li",{parentName:"ol"},"At the bottom, click ",(0,o.kt)("strong",{parentName:"li"},"v2.6.x"),", where ",(0,o.kt)("strong",{parentName:"li"},"v2.6.x")," is a hyperlinked text indicating the installed Rancher version."),(0,o.kt)("li",{parentName:"ol"},"Under the ",(0,o.kt)("strong",{parentName:"li"},"CLI Downloads section"),", there are links to download the binaries for Windows, Mac, and Linux. You can also check the ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/rancher/cli/releases"},"releases page for our CLI")," for direct downloads of the binary.")),(0,o.kt)("h3",{id:"requirements"},"Requirements"),(0,o.kt)("p",null,"After you download the Rancher CLI, you need to make a few configurations. Rancher CLI requires:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Your Rancher Server URL, which is used to connect to Rancher Server."),(0,o.kt)("li",{parentName:"ul"},"An API Bearer Token, which is used to authenticate with Rancher. For more information about obtaining a Bearer Token, see ",(0,o.kt)("a",{parentName:"li",href:"/reference-guides/user-settings/api-keys"},"Creating an API Key"),".")),(0,o.kt)("h3",{id:"cli-authentication"},"CLI Authentication"),(0,o.kt)("p",null,"Before you can use Rancher CLI to control your Rancher Server, you must authenticate using an API Bearer Token. Log in using the following command (replace ",(0,o.kt)("inlineCode",{parentName:"p"},"<BEARER_TOKEN>")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"<SERVER_URL>")," with your information):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ ./rancher login https://<SERVER_URL> --token <BEARER_TOKEN>\n")),(0,o.kt)("p",null,"If Rancher Server uses a self-signed certificate, Rancher CLI prompts you to continue with the connection."),(0,o.kt)("h3",{id:"project-selection"},"Project Selection"),(0,o.kt)("p",null,"Before you can perform any commands, you must select a Rancher project to perform those commands against. To select a ",(0,o.kt)("a",{parentName:"p",href:"/how-to-guides/advanced-user-guides/manage-clusters/projects-and-namespaces"},"project")," to work on, use the command ",(0,o.kt)("inlineCode",{parentName:"p"},"./rancher context switch"),". When you enter this command, a list of available projects displays. Enter a number to choose your project."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example: ",(0,o.kt)("inlineCode",{parentName:"strong"},"./rancher context switch")," Output")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"User:rancher-cli-directory user$ ./rancher context switch\nNUMBER    CLUSTER NAME   PROJECT ID              PROJECT NAME\n1         cluster-2      c-7q96s:p-h4tmb         project-2\n2         cluster-2      c-7q96s:project-j6z6d   Default\n3         cluster-1      c-lchzv:p-xbpdt         project-1\n4         cluster-1      c-lchzv:project-s2mch   Default\nSelect a Project:\n")),(0,o.kt)("p",null,"After you enter a number, the console displays a message that you've changed projects."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"INFO[0005] Setting new context to project project-1\nINFO[0005] Saving config to /Users/markbishop/.ranchcli2.json\n")),(0,o.kt)("p",null,"Ensure you can run ",(0,o.kt)("inlineCode",{parentName:"p"},"rancher kubectl get pods")," successfully."),(0,o.kt)("h3",{id:"commands"},"Commands"),(0,o.kt)("p",null,"The following commands are available for use in Rancher CLI."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Command"),(0,o.kt)("th",{parentName:"tr",align:null},"Result"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"apps, [app]")),(0,o.kt)("td",{parentName:"tr",align:null},"Performs operations on catalog applications (i.e., individual ",(0,o.kt)("a",{parentName:"td",href:"https://docs.helm.sh/developing_charts/"},"Helm charts"),") or Rancher charts.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"catalog")),(0,o.kt)("td",{parentName:"tr",align:null},"Performs operations on ",(0,o.kt)("a",{parentName:"td",href:"/pages-for-subheaders/helm-charts-in-rancher"},"catalogs"),".")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"clusters, [cluster]")),(0,o.kt)("td",{parentName:"tr",align:null},"Performs operations on your ",(0,o.kt)("a",{parentName:"td",href:"/pages-for-subheaders/kubernetes-clusters-in-rancher-setup"},"clusters"),".")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"context")),(0,o.kt)("td",{parentName:"tr",align:null},"Switches between Rancher ",(0,o.kt)("a",{parentName:"td",href:"/how-to-guides/advanced-user-guides/manage-clusters/projects-and-namespaces"},"projects"),". For an example, see ",(0,o.kt)("a",{parentName:"td",href:"#project-selection"},"Project Selection"),".")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"inspect [OPTIONS] [RESOURCEID RESOURCENAME]")),(0,o.kt)("td",{parentName:"tr",align:null},"Displays details about ",(0,o.kt)("a",{parentName:"td",href:"https://kubernetes.io/docs/reference/kubectl/cheatsheet/#resource-types"},"Kubernetes resources")," or Rancher resources (i.e.: ",(0,o.kt)("a",{parentName:"td",href:"/how-to-guides/advanced-user-guides/manage-clusters/projects-and-namespaces"},"projects")," and ",(0,o.kt)("a",{parentName:"td",href:"/pages-for-subheaders/workloads-and-pods"},"workloads"),"). Specify resources by name or ID.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"kubectl")),(0,o.kt)("td",{parentName:"tr",align:null},"Runs ",(0,o.kt)("a",{parentName:"td",href:"https://kubernetes.io/docs/reference/kubectl/overview/#operations"},"kubectl commands"),".")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"login, [l]")),(0,o.kt)("td",{parentName:"tr",align:null},"Logs into a Rancher Server. For an example, see ",(0,o.kt)("a",{parentName:"td",href:"#cli-authentication"},"CLI Authentication"),".")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"namespaces, [namespace]")),(0,o.kt)("td",{parentName:"tr",align:null},"Performs operations on namespaces.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"nodes, [node]")),(0,o.kt)("td",{parentName:"tr",align:null},"Performs operations on nodes.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"projects, [project]")),(0,o.kt)("td",{parentName:"tr",align:null},"Performs operations on ",(0,o.kt)("a",{parentName:"td",href:"/how-to-guides/advanced-user-guides/manage-clusters/projects-and-namespaces"},"projects"),".")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"ps")),(0,o.kt)("td",{parentName:"tr",align:null},"Displays ",(0,o.kt)("a",{parentName:"td",href:"/pages-for-subheaders/workloads-and-pods"},"workloads")," in a project.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"settings, [setting]")),(0,o.kt)("td",{parentName:"tr",align:null},"Shows the current settings for your Rancher Server.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"ssh")),(0,o.kt)("td",{parentName:"tr",align:null},"Connects to one of your cluster nodes using the SSH protocol.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"help, [h]")),(0,o.kt)("td",{parentName:"tr",align:null},"Shows a list of commands or help for one command.")))),(0,o.kt)("h3",{id:"rancher-cli-help"},"Rancher CLI Help"),(0,o.kt)("p",null,"Once logged into Rancher Server using the CLI, enter ",(0,o.kt)("inlineCode",{parentName:"p"},"./rancher --help")," for a list of commands."),(0,o.kt)("p",null,"All commands accept the ",(0,o.kt)("inlineCode",{parentName:"p"},"--help")," flag, which documents each command's usage."),(0,o.kt)("h3",{id:"limitations"},"Limitations"),(0,o.kt)("p",null,"The Rancher CLI ",(0,o.kt)("strong",{parentName:"p"},"cannot")," be used to install ",(0,o.kt)("a",{parentName:"p",href:"/pages-for-subheaders/helm-charts-in-rancher"},"dashboard apps or Rancher feature charts"),"."))}h.isMDXComponent=!0}}]);