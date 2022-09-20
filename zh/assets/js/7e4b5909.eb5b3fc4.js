"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[51443],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return m}});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),s=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=s(r),m=n,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||i;return r?a.createElement(f,o(o({ref:t},p),{},{components:r})):a.createElement(f,o({ref:t},p))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var s=2;s<i;s++)o[s]=r[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},31127:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return c},metadata:function(){return s},toc:function(){return u}});var a=r(87462),n=r(63366),i=(r(67294),r(3905)),o=["components"],c={title:"Certificate Rotation",weight:2040},l=void 0,s={unversionedId:"how-to-guides/advanced-user-guides/manage-clusters/rotate-certificates",id:"version-2.0-2.4/how-to-guides/advanced-user-guides/manage-clusters/rotate-certificates",title:"Certificate Rotation",description:"Warning: Rotating Kubernetes certificates may result in your cluster being temporarily unavailable as components are restarted. For production environments, it's recommended to perform this action during a maintenance window.",source:"@site/versioned_docs/version-2.0-2.4/how-to-guides/advanced-user-guides/manage-clusters/rotate-certificates.md",sourceDirName:"how-to-guides/advanced-user-guides/manage-clusters",slug:"/how-to-guides/advanced-user-guides/manage-clusters/rotate-certificates",permalink:"/zh/v2.0-v2.4/how-to-guides/advanced-user-guides/manage-clusters/rotate-certificates",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.0-2.4/how-to-guides/advanced-user-guides/manage-clusters/rotate-certificates.md",tags:[],version:"2.0-2.4",lastUpdatedAt:1663691987,formattedLastUpdatedAt:"2022/9/20",frontMatter:{title:"Certificate Rotation",weight:2040},sidebar:"tutorialSidebar",previous:{title:"Cloning Clusters",permalink:"/zh/v2.0-v2.4/how-to-guides/advanced-user-guides/manage-clusters/clone-cluster-configuration"},next:{title:"Nodes and Node Pools",permalink:"/zh/v2.0-v2.4/how-to-guides/advanced-user-guides/manage-clusters/nodes-and-node-pools"}},p={},u=[{value:"Certificate Rotation in Rancher v2.2.x",id:"certificate-rotation-in-rancher-v22x",level:3},{value:"Certificate Rotation in Rancher v2.1.x and v2.0.x",id:"certificate-rotation-in-rancher-v21x-and-v20x",level:3},{value:"Rotating Expired Certificates After Upgrading Older Rancher Versions",id:"rotating-expired-certificates-after-upgrading-older-rancher-versions",level:3}],d={toc:u};function m(e){var t=e.components,r=(0,n.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"Warning:")," Rotating Kubernetes certificates may result in your cluster being temporarily unavailable as components are restarted. For production environments, it's recommended to perform this action during a maintenance window.")),(0,i.kt)("p",null,"By default, Kubernetes clusters require certificates and Rancher launched Kubernetes clusters automatically generate  certificates for the Kubernetes components. Rotating these certificates is important before the certificates expire as well as if a certificate is compromised. After the certificates are rotated, the Kubernetes components are automatically restarted."),(0,i.kt)("p",null,"Certificates can be rotated for the following services:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"etcd"),(0,i.kt)("li",{parentName:"ul"},"kubelet"),(0,i.kt)("li",{parentName:"ul"},"kube-apiserver"),(0,i.kt)("li",{parentName:"ul"},"kube-proxy"),(0,i.kt)("li",{parentName:"ul"},"kube-scheduler"),(0,i.kt)("li",{parentName:"ul"},"kube-controller-manager")),(0,i.kt)("h3",{id:"certificate-rotation-in-rancher-v22x"},"Certificate Rotation in Rancher v2.2.x"),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Available as of v2.2.0")),(0,i.kt)("p",null,"Rancher launched Kubernetes clusters have the ability to rotate the auto-generated certificates through the UI."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"In the ",(0,i.kt)("strong",{parentName:"p"},"Global")," view, navigate to the cluster that you want to rotate certificates.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Select the ",(0,i.kt)("strong",{parentName:"p"},"\u22ee"," > Rotate Certificates"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Select which certificates that you want to rotate."),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Rotate all Service certificates (keep the same CA)"),(0,i.kt)("li",{parentName:"ul"},"Rotate an individual service and choose one of the services from the drop down menu"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Click ",(0,i.kt)("strong",{parentName:"p"},"Save"),"."))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Results:")," The selected certificates will be rotated and the related services will be restarted to start using the new certificate."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"Note:")," Even though the RKE CLI can use custom certificates for the Kubernetes cluster components, Rancher currently doesn't allow the ability to upload these in Rancher Launched Kubernetes clusters.")),(0,i.kt)("h3",{id:"certificate-rotation-in-rancher-v21x-and-v20x"},"Certificate Rotation in Rancher v2.1.x and v2.0.x"),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Available as of v2.0.14 and v2.1.9")),(0,i.kt)("p",null,"Rancher launched Kubernetes clusters have the ability to rotate the auto-generated certificates through the API."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"In the ",(0,i.kt)("strong",{parentName:"p"},"Global")," view, navigate to the cluster that you want to rotate certificates.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Select the ",(0,i.kt)("strong",{parentName:"p"},"\u22ee"," > View in API"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Click on ",(0,i.kt)("strong",{parentName:"p"},"RotateCertificates"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Click on ",(0,i.kt)("strong",{parentName:"p"},"Show Request"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Click on ",(0,i.kt)("strong",{parentName:"p"},"Send Request"),"."))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Results:")," All Kubernetes certificates will be rotated."),(0,i.kt)("h3",{id:"rotating-expired-certificates-after-upgrading-older-rancher-versions"},"Rotating Expired Certificates After Upgrading Older Rancher Versions"),(0,i.kt)("p",null,"If you are upgrading from Rancher v2.0.13 or earlier, or v2.1.8 or earlier, and your clusters have expired certificates, some manual steps are required to complete the certificate rotation."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"For the ",(0,i.kt)("inlineCode",{parentName:"p"},"controlplane")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"etcd")," nodes, log in to each corresponding host and check if the certificate ",(0,i.kt)("inlineCode",{parentName:"p"},"kube-apiserver-requestheader-ca.pem")," is in the following directory:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"cd /etc/kubernetes/.tmp\n")),(0,i.kt)("p",{parentName:"li"},"If the certificate is not in the directory, perform the following commands:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"cp kube-ca.pem kube-apiserver-requestheader-ca.pem\ncp kube-ca-key.pem kube-apiserver-requestheader-ca-key.pem\ncp kube-apiserver.pem kube-apiserver-proxy-client.pem\ncp kube-apiserver-key.pem kube-apiserver-proxy-client-key.pem\n")),(0,i.kt)("p",{parentName:"li"},"If the ",(0,i.kt)("inlineCode",{parentName:"p"},".tmp")," directory does not exist, you can copy the entire SSL certificate to ",(0,i.kt)("inlineCode",{parentName:"p"},".tmp"),":"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"cp -r /etc/kubernetes/ssl /etc/kubernetes/.tmp\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Rotate the certificates. For Rancher v2.0.x and v2.1.x, use the ",(0,i.kt)("a",{parentName:"p",href:"#certificate-rotation-in-rancher-v2-1-x-and-v2-0-x"},"Rancher API.")," For Rancher 2.2.x, ",(0,i.kt)("a",{parentName:"p",href:"#certificate-rotation-in-rancher-v2-2-x"},"use the UI."))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"After the command is finished, check if the ",(0,i.kt)("inlineCode",{parentName:"p"},"worker")," nodes are Active. If not, log in to each ",(0,i.kt)("inlineCode",{parentName:"p"},"worker")," node and restart the kubelet and proxy."))))}m.isMDXComponent=!0}}]);