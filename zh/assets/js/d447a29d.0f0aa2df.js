"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[69477],{3905:function(e,t,n){n.d(t,{Zo:function(){return i},kt:function(){return k}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var d=r.createContext({}),s=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},i=function(e){var t=s(e.components);return r.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,d=e.parentName,i=p(e,["components","mdxType","originalType","parentName"]),c=s(n),k=o,g=c["".concat(d,".").concat(k)]||c[k]||u[k]||a;return n?r.createElement(g,l(l({ref:t},i),{},{components:n})):r.createElement(g,l({ref:t},i))}));function k(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=c;var p={};for(var d in t)hasOwnProperty.call(t,d)&&(p[d]=t[d]);p.originalType=e,p.mdxType="string"==typeof e?e:o,l[1]=p;for(var s=2;s<a;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},24882:function(e,t,n){n.r(t),n.d(t,{assets:function(){return i},contentTitle:function(){return d},default:function(){return k},frontMatter:function(){return p},metadata:function(){return s},toc:function(){return u}});var r=n(87462),o=n(63366),a=(n(67294),n(3905)),l=["components"],p={title:"Kubernetes \u8d44\u6e90",weight:101},d=void 0,s={unversionedId:"troubleshooting/other-troubleshooting-tips/kubernetes-resources",id:"troubleshooting/other-troubleshooting-tips/kubernetes-resources",title:"Kubernetes \u8d44\u6e90",description:"\u672c\u6587\u5217\u51fa\u7684\u547d\u4ee4/\u6b65\u9aa4\u53ef\u7528\u4e8e\u68c0\u67e5\u6700\u91cd\u8981\u7684 Kubernetes \u8d44\u6e90\uff0c\u5e76\u5e94\u7528\u4e8e Rancher \u542f\u52a8\u7684 Kubernetes \u96c6\u7fa4\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/troubleshooting/other-troubleshooting-tips/kubernetes-resources.md",sourceDirName:"troubleshooting/other-troubleshooting-tips",slug:"/troubleshooting/other-troubleshooting-tips/kubernetes-resources",permalink:"/zh/troubleshooting/other-troubleshooting-tips/kubernetes-resources",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/troubleshooting/other-troubleshooting-tips/kubernetes-resources.md",tags:[],version:"current",lastUpdatedAt:1663691987,formattedLastUpdatedAt:"2022/9/20",frontMatter:{title:"Kubernetes \u8d44\u6e90",weight:101},sidebar:"tutorialSidebar",previous:{title:"\u5176\u4ed6\u6545\u969c\u6392\u9664\u63d0\u793a",permalink:"/zh/pages-for-subheaders/other-troubleshooting-tips"},next:{title:"\u7f51\u7edc",permalink:"/zh/troubleshooting/other-troubleshooting-tips/networking"}},i={},u=[{value:"\u8282\u70b9",id:"\u8282\u70b9",level:2},{value:"\u83b7\u53d6\u8282\u70b9",id:"\u83b7\u53d6\u8282\u70b9",level:3},{value:"\u83b7\u53d6\u8282\u70b9\u72b6\u51b5",id:"\u83b7\u53d6\u8282\u70b9\u72b6\u51b5",level:3},{value:"Kubernetes leader \u9009\u4e3e",id:"kubernetes-leader-\u9009\u4e3e",level:2},{value:"Kubernetes Controller \u7ba1\u7406\u5668 leader",id:"kubernetes-controller-\u7ba1\u7406\u5668-leader",level:3},{value:"Kubernetes \u8c03\u5ea6\u5668 Leader",id:"kubernetes-\u8c03\u5ea6\u5668-leader",level:3},{value:"Ingress Controller",id:"ingress-controller",level:2},{value:"Pod \u8be6\u7ec6\u4fe1\u606f",id:"pod-\u8be6\u7ec6\u4fe1\u606f",level:3},{value:"Pod \u5bb9\u5668\u65e5\u5fd7",id:"pod-\u5bb9\u5668\u65e5\u5fd7",level:3},{value:"\u547d\u540d\u7a7a\u95f4\u4e8b\u4ef6",id:"\u547d\u540d\u7a7a\u95f4\u4e8b\u4ef6",level:3},{value:"\u8c03\u8bd5\u65e5\u5fd7",id:"\u8c03\u8bd5\u65e5\u5fd7",level:3},{value:"\u68c0\u67e5\u914d\u7f6e",id:"\u68c0\u67e5\u914d\u7f6e",level:3},{value:"Rancher Agents",id:"rancher-agents",level:2},{value:"cattle-node-agent",id:"cattle-node-agent",level:4},{value:"cattle-cluster-agent",id:"cattle-cluster-agent",level:4},{value:"Jobs \u548c Pods",id:"jobs-\u548c-pods",level:2},{value:"\u68c0\u67e5 Pod \u6216 Job \u7684\u72b6\u6001\u662f\u5426\u4e3a <strong>Running</strong>/<strong>Completed</strong>",id:"\u68c0\u67e5-pod-\u6216-job-\u7684\u72b6\u6001\u662f\u5426\u4e3a-runningcompleted",level:3},{value:"\u63cf\u8ff0 Pod",id:"\u63cf\u8ff0-pod",level:3},{value:"Pod \u5bb9\u5668\u65e5\u5fd7",id:"pod-\u5bb9\u5668\u65e5\u5fd7-1",level:3},{value:"\u63cf\u8ff0 Job",id:"\u63cf\u8ff0-job",level:3},{value:"Job Pod \u5bb9\u5668\u7684\u65e5\u5fd7",id:"job-pod-\u5bb9\u5668\u7684\u65e5\u5fd7",level:3},{value:"\u9a71\u9010\u7684 Pod",id:"\u9a71\u9010\u7684-pod",level:3},{value:"Job \u672a\u5b8c\u6210",id:"job-\u672a\u5b8c\u6210",level:3}],c={toc:u};function k(e){var t=e.components,n=(0,o.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u672c\u6587\u5217\u51fa\u7684\u547d\u4ee4/\u6b65\u9aa4\u53ef\u7528\u4e8e\u68c0\u67e5\u6700\u91cd\u8981\u7684 Kubernetes \u8d44\u6e90\uff0c\u5e76\u5e94\u7528\u4e8e ",(0,a.kt)("a",{parentName:"p",href:"/zh/pages-for-subheaders/launch-kubernetes-with-rancher"},"Rancher \u542f\u52a8\u7684 Kubernetes")," \u96c6\u7fa4\u3002"),(0,a.kt)("p",null,"\u8bf7\u786e\u4fdd\u4f60\u914d\u7f6e\u4e86\u6b63\u786e\u7684 kubeconfig\uff08\u4f8b\u5982\uff0c\u4e3a Rancher HA \u914d\u7f6e\u4e86 ",(0,a.kt)("inlineCode",{parentName:"p"},"export KUBECONFIG=$PWD/kube_config_cluster.yml"),"\uff09\u6216\u901a\u8fc7 UI \u4f7f\u7528\u4e86\u5d4c\u5165\u5f0f kubectl\u3002"),(0,a.kt)("h2",{id:"\u8282\u70b9"},"\u8282\u70b9"),(0,a.kt)("h3",{id:"\u83b7\u53d6\u8282\u70b9"},"\u83b7\u53d6\u8282\u70b9"),(0,a.kt)("p",null,"\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\u5e76\u68c0\u67e5\u4ee5\u4e0b\u5185\u5bb9\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u96c6\u7fa4\u4e2d\u7684\u6240\u6709\u8282\u70b9\u90fd\u5df2\u5217\u51fa\uff0c\u6ca1\u6709\u7f3a\u5931\u7684\u8282\u70b9\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u6240\u6709\u8282\u70b9\u7684\u72b6\u6001\u90fd\u662f ",(0,a.kt)("strong",{parentName:"li"},"Ready"),"\uff08\u5982\u679c\u672a\u5904\u4e8e ",(0,a.kt)("strong",{parentName:"li"},"Ready")," \u72b6\u6001\uff0c\u8bf7\u8fd0\u884c ",(0,a.kt)("inlineCode",{parentName:"li"},"docker logs kubelet")," \u68c0\u67e5\u8be5\u8282\u70b9\u4e0a\u7684 ",(0,a.kt)("inlineCode",{parentName:"li"},"kubelet")," \u5bb9\u5668\u65e5\u5fd7)"),(0,a.kt)("li",{parentName:"ul"},"\u68c0\u67e5\u6240\u6709\u8282\u70b9\u662f\u5426\u62a5\u544a\u4e86\u6b63\u786e\u7684\u7248\u672c\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u68c0\u67e5 OS/Kernel/Docker \u503c\u662f\u5426\u6309\u9884\u671f\u663e\u793a\uff08\u6b64\u95ee\u9898\u53ef\u80fd\u4e0e\u5347\u7ea7 OS/Kernel/Docker \u76f8\u5173\uff09\u3002")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"kubectl get nodes -o wide\n")),(0,a.kt)("p",null,"\u8f93\u51fa\u793a\u4f8b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"NAME             STATUS   ROLES          AGE   VERSION   INTERNAL-IP      EXTERNAL-IP   OS-IMAGE             KERNEL-VERSION      CONTAINER-RUNTIME\ncontrolplane-0   Ready    controlplane   31m   v1.13.5   138.68.188.91    <none>        Ubuntu 18.04.2 LTS   4.15.0-47-generic   docker://18.9.5\netcd-0           Ready    etcd           31m   v1.13.5   138.68.180.33    <none>        Ubuntu 18.04.2 LTS   4.15.0-47-generic   docker://18.9.5\nworker-0         Ready    worker         30m   v1.13.5   139.59.179.88    <none>        Ubuntu 18.04.2 LTS   4.15.0-47-generic   docker://18.9.5\n")),(0,a.kt)("h3",{id:"\u83b7\u53d6\u8282\u70b9\u72b6\u51b5"},"\u83b7\u53d6\u8282\u70b9\u72b6\u51b5"),(0,a.kt)("p",null,"\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\u5217\u51fa\u5177\u6709 ",(0,a.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/architecture/nodes/#condition"},"Node Conditions")," \u7684\u8282\u70b9\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'kubectl get nodes -o go-template=\'{{range .items}}{{$node := .}}{{range .status.conditions}}{{$node.metadata.name}}{{": "}}{{.type}}{{":"}}{{.status}}{{"\\n"}}{{end}}{{end}}\'\n')),(0,a.kt)("p",null,"\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\uff0c\u5217\u51fa\u5177\u6709 active ",(0,a.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/architecture/nodes/#condition"},"Node Conditions")," \u7684\u8282\u70b9\uff0c\u8fd9\u4e9b\u8282\u70b9\u53ef\u80fd\u963b\u6b62\u6b63\u5e38\u64cd\u4f5c\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'kubectl get nodes -o go-template=\'{{range .items}}{{$node := .}}{{range .status.conditions}}{{if ne .type "Ready"}}{{if eq .status "True"}}{{$node.metadata.name}}{{": "}}{{.type}}{{":"}}{{.status}}{{"\\n"}}{{end}}{{else}}{{if ne .status "True"}}{{$node.metadata.name}}{{": "}}{{.type}}{{": "}}{{.status}}{{"\\n"}}{{end}}{{end}}{{end}}{{end}}\'\n')),(0,a.kt)("p",null,"\u8f93\u51fa\u793a\u4f8b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"worker-0: DiskPressure:True\n")),(0,a.kt)("h2",{id:"kubernetes-leader-\u9009\u4e3e"},"Kubernetes leader \u9009\u4e3e"),(0,a.kt)("h3",{id:"kubernetes-controller-\u7ba1\u7406\u5668-leader"},"Kubernetes Controller \u7ba1\u7406\u5668 leader"),(0,a.kt)("p",null,"Leader \u7531 Leader \u9009\u4e3e\u786e\u5b9a\u3002\u786e\u5b9a Leader \u540e\uff0cLeader\uff08",(0,a.kt)("inlineCode",{parentName:"p"},"holderIdentity"),"\uff09\u4f1a\u4fdd\u5b58\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"kube-controller-manager")," \u7aef\u70b9\u4e2d\uff08\u5728\u672c\u4f8b\u4e2d\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"controlplane-0"),"\uff09\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'kubectl -n kube-system get endpoints kube-controller-manager -o jsonpath=\'{.metadata.annotations.control-plane\\.alpha\\.kubernetes\\.io/leader}\'\n{"holderIdentity":"controlplane-0_xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx","leaseDurationSeconds":15,"acquireTime":"2018-12-27T08:59:45Z","renewTime":"2018-12-27T09:44:57Z","leaderTransitions":0}>\n')),(0,a.kt)("h3",{id:"kubernetes-\u8c03\u5ea6\u5668-leader"},"Kubernetes \u8c03\u5ea6\u5668 Leader"),(0,a.kt)("p",null,"Leader \u7531 Leader \u9009\u4e3e\u786e\u5b9a\u3002\u786e\u5b9a Leader \u540e\uff0cLeader\uff08",(0,a.kt)("inlineCode",{parentName:"p"},"holderIdentity"),"\uff09\u4f1a\u4fdd\u5b58\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"kube-scheduler")," \u7aef\u70b9\u4e2d\uff08\u5728\u672c\u4f8b\u4e2d\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"controlplane-0"),"\uff09\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'kubectl -n kube-system get endpoints kube-scheduler -o jsonpath=\'{.metadata.annotations.control-plane\\.alpha\\.kubernetes\\.io/leader}\'\n{"holderIdentity":"controlplane-0_xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx","leaseDurationSeconds":15,"acquireTime":"2018-12-27T08:59:45Z","renewTime":"2018-12-27T09:44:57Z","leaderTransitions":0}>\n')),(0,a.kt)("h2",{id:"ingress-controller"},"Ingress Controller"),(0,a.kt)("p",null,"\u9ed8\u8ba4\u7684 Ingress Controller \u662f NGINX\uff0c\u4f5c\u4e3a DaemonSet \u90e8\u7f72\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"ingress-nginx")," \u547d\u540d\u7a7a\u95f4\u4e2d\u3002Pod \u4ec5\u4f1a\u8c03\u5ea6\u5230\u5177\u6709 ",(0,a.kt)("inlineCode",{parentName:"p"},"worker")," \u89d2\u8272\u7684\u8282\u70b9\u3002"),(0,a.kt)("p",null,"\u68c0\u67e5 pod \u662f\u5426\u8fd0\u884c\u5728\u6240\u6709\u8282\u70b9\u4e0a\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"kubectl -n ingress-nginx get pods -o wide\n")),(0,a.kt)("p",null,"\u8f93\u51fa\u793a\u4f8b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"kubectl -n ingress-nginx get pods -o wide\nNAME                                    READY     STATUS    RESTARTS   AGE       IP               NODE\ndefault-http-backend-797c5bc547-kwwlq   1/1       Running   0          17m       x.x.x.x          worker-1\nnginx-ingress-controller-4qd64          1/1       Running   0          14m       x.x.x.x          worker-1\nnginx-ingress-controller-8wxhm          1/1       Running   0          13m       x.x.x.x          worker-0\n")),(0,a.kt)("p",null,"\u5982\u679c pod \u65e0\u6cd5\u8fd0\u884c\uff08\u5373\u72b6\u6001\u4e0d\u662f ",(0,a.kt)("strong",{parentName:"p"},"Running"),"\uff0cReady \u72b6\u6001\u672a\u663e\u793a ",(0,a.kt)("inlineCode",{parentName:"p"},"1/1"),"\uff0c\u6216\u8005\u6709\u5927\u91cf Restarts\uff09\uff0c\u8bf7\u68c0\u67e5 pod \u8be6\u7ec6\u4fe1\u606f\uff0c\u65e5\u5fd7\u548c\u547d\u540d\u7a7a\u95f4\u4e8b\u4ef6\u3002"),(0,a.kt)("h3",{id:"pod-\u8be6\u7ec6\u4fe1\u606f"},"Pod \u8be6\u7ec6\u4fe1\u606f"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"kubectl -n ingress-nginx describe pods -l app=ingress-nginx\n")),(0,a.kt)("h3",{id:"pod-\u5bb9\u5668\u65e5\u5fd7"},"Pod \u5bb9\u5668\u65e5\u5fd7"),(0,a.kt)("p",null,"\u4e0b\u9762\u7684\u547d\u4ee4\u53ef\u4ee5\u663e\u793a\u6240\u6709\u6807\u8bb0\u4e3a \u201capp=ingress-nginx\u201d \u7684 pod \u7684\u65e5\u5fd7\uff0c\u4f46\u662f\u7531\u4e8e ",(0,a.kt)("inlineCode",{parentName:"p"},"kubectl logs")," \u547d\u4ee4\u7684\u9650\u5236\uff0c\u5b83\u53ea\u4f1a\u663e\u793a 10 \u884c\u65e5\u5fd7\u3002\u6709\u5173\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605 ",(0,a.kt)("inlineCode",{parentName:"p"},"kubectl logs -h")," \u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"--tail"),"\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"kubectl -n ingress-nginx logs -l app=ingress-nginx\n")),(0,a.kt)("p",null,"\u5982\u679c\u9700\u8981\u67e5\u770b\u5b8c\u6574\u7684\u65e5\u5fd7\uff0c\u8bf7\u5728\u547d\u4ee4\u4e2d\u5c3e\u968f pod \u540d\u79f0\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"kubectl -n ingress-nginx logs <pod name>\n")),(0,a.kt)("h3",{id:"\u547d\u540d\u7a7a\u95f4\u4e8b\u4ef6"},"\u547d\u540d\u7a7a\u95f4\u4e8b\u4ef6"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"kubectl -n ingress-nginx get events\n")),(0,a.kt)("h3",{id:"\u8c03\u8bd5\u65e5\u5fd7"},"\u8c03\u8bd5\u65e5\u5fd7"),(0,a.kt)("p",null,"\u8981\u542f\u7528\u8c03\u8bd5\u65e5\u5fd7\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'kubectl -n ingress-nginx patch ds nginx-ingress-controller --type=\'json\' -p=\'[{"op": "add", "path": "/spec/template/spec/containers/0/args/-", "value": "--v=5"}]\'\n')),(0,a.kt)("h3",{id:"\u68c0\u67e5\u914d\u7f6e"},"\u68c0\u67e5\u914d\u7f6e"),(0,a.kt)("p",null,"\u5728\u6bcf\u4e2a pod \u4e2d\u68c0\u7d22\u751f\u6210\u7684\u914d\u7f6e\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"kubectl -n ingress-nginx get pods -l app=ingress-nginx --no-headers -o custom-columns=.NAME:.metadata.name | while read pod; do kubectl -n ingress-nginx exec $pod -- cat /etc/nginx/nginx.conf; done\n")),(0,a.kt)("h2",{id:"rancher-agents"},"Rancher Agents"),(0,a.kt)("p",null,"Rancher Agent \u7528\u4e8e\u5b9e\u73b0\u4e0e\u96c6\u7fa4\u7684\u901a\u4fe1\uff08\u901a\u8fc7 ",(0,a.kt)("inlineCode",{parentName:"p"},"cattle-cluster-agent")," \u7684 Kubernetes API\uff09\u548c\u4e0e\u8282\u70b9\u7684\u901a\u4fe1\uff08\u901a\u8fc7 ",(0,a.kt)("inlineCode",{parentName:"p"},"cattle-node-agent")," \u7684\u96c6\u7fa4\u914d\u7f6e\uff09\u3002"),(0,a.kt)("h4",{id:"cattle-node-agent"},"cattle-node-agent"),(0,a.kt)("p",null,"\u68c0\u67e5\u6bcf\u4e2a\u8282\u70b9\u4e0a\u662f\u5426\u5b58\u5728 cattle-node-agent pod\uff0c\u72b6\u6001\u662f\u5426\u4e3a ",(0,a.kt)("strong",{parentName:"p"},"Running"),"\uff0c\u5e76\u4e14\u91cd\u542f\u6b21\u6570\u4e0d\u591a\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"kubectl -n cattle-system get pods -l app=cattle-agent -o wide\n")),(0,a.kt)("p",null,"\u8f93\u51fa\u793a\u4f8b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"NAME                      READY     STATUS    RESTARTS   AGE       IP                NODE\ncattle-node-agent-4gc2p   1/1       Running   0          2h        x.x.x.x           worker-1\ncattle-node-agent-8cxkk   1/1       Running   0          2h        x.x.x.x           etcd-1\ncattle-node-agent-kzrlg   1/1       Running   0          2h        x.x.x.x           etcd-0\ncattle-node-agent-nclz9   1/1       Running   0          2h        x.x.x.x           controlplane-0\ncattle-node-agent-pwxp7   1/1       Running   0          2h        x.x.x.x           worker-0\ncattle-node-agent-t5484   1/1       Running   0          2h        x.x.x.x           controlplane-1\ncattle-node-agent-t8mtz   1/1       Running   0          2h        x.x.x.x           etcd-2\n")),(0,a.kt)("p",null,"\u68c0\u67e5\u7279\u5b9a\u6216\u6240\u6709 cattle-node-agent pod \u7684\u65e5\u5fd7\u8bb0\u5f55\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"kubectl -n cattle-system logs -l app=cattle-agent\n")),(0,a.kt)("h4",{id:"cattle-cluster-agent"},"cattle-cluster-agent"),(0,a.kt)("p",null,"\u68c0\u67e5 cattle-cluster-agent pod \u662f\u5426\u5b58\u5728\u4e8e\u96c6\u7fa4\u4e2d\uff0c\u72b6\u6001\u662f\u5426\u4e3a ",(0,a.kt)("strong",{parentName:"p"},"Running"),"\uff0c\u5e76\u4e14\u91cd\u542f\u6b21\u6570\u4e0d\u591a\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"kubectl -n cattle-system get pods -l app=cattle-cluster-agent -o wide\n")),(0,a.kt)("p",null,"\u8f93\u51fa\u793a\u4f8b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"NAME                                    READY     STATUS    RESTARTS   AGE       IP           NODE\ncattle-cluster-agent-54d7c6c54d-ht9h4   1/1       Running   0          2h        x.x.x.x      worker-1\n")),(0,a.kt)("p",null,"\u68c0\u67e5 cattle-cluster-agent pod \u7684\u65e5\u5fd7\u8bb0\u5f55\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"kubectl -n cattle-system logs -l app=cattle-cluster-agent\n")),(0,a.kt)("h2",{id:"jobs-\u548c-pods"},"Jobs \u548c Pods"),(0,a.kt)("h3",{id:"\u68c0\u67e5-pod-\u6216-job-\u7684\u72b6\u6001\u662f\u5426\u4e3a-runningcompleted"},"\u68c0\u67e5 Pod \u6216 Job \u7684\u72b6\u6001\u662f\u5426\u4e3a ",(0,a.kt)("strong",{parentName:"h3"},"Running"),"/",(0,a.kt)("strong",{parentName:"h3"},"Completed")),(0,a.kt)("p",null,"\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\u8fdb\u884c\u68c0\u67e5\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"kubectl get pods --all-namespaces\n")),(0,a.kt)("p",null,"\u5982\u679c Pod \u7684\u72b6\u6001\u4e0d\u662f ",(0,a.kt)("strong",{parentName:"p"},"Running"),"\uff0c\u4f60\u53ef\u4ee5\u901a\u8fc7\u8fd0\u884c\u547d\u4ee4\u6765\u627e\u5230\u6839\u672c\u539f\u56e0\u3002"),(0,a.kt)("h3",{id:"\u63cf\u8ff0-pod"},"\u63cf\u8ff0 Pod"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"kubectl describe pod POD_NAME -n NAMESPACE\n")),(0,a.kt)("h3",{id:"pod-\u5bb9\u5668\u65e5\u5fd7-1"},"Pod \u5bb9\u5668\u65e5\u5fd7"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"kubectl logs POD_NAME -n NAMESPACE\n")),(0,a.kt)("p",null,"\u5982\u679c Job \u7684\u72b6\u6001\u4e0d\u662f ",(0,a.kt)("strong",{parentName:"p"},"Completed"),"\uff0c\u4f60\u53ef\u4ee5\u901a\u8fc7\u8fd0\u884c\u547d\u4ee4\u6765\u627e\u5230\u6839\u672c\u539f\u56e0\u3002"),(0,a.kt)("h3",{id:"\u63cf\u8ff0-job"},"\u63cf\u8ff0 Job"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"kubectl describe job JOB_NAME -n NAMESPACE\n")),(0,a.kt)("h3",{id:"job-pod-\u5bb9\u5668\u7684\u65e5\u5fd7"},"Job Pod \u5bb9\u5668\u7684\u65e5\u5fd7"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"kubectl logs -l job-name=JOB_NAME -n NAMESPACE\n")),(0,a.kt)("h3",{id:"\u9a71\u9010\u7684-pod"},"\u9a71\u9010\u7684 Pod"),(0,a.kt)("p",null,"\u53ef\u4ee5\u6839\u636e ",(0,a.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/tasks/administer-cluster/out-of-resource/#eviction-policy"},"eviction \u4fe1\u53f7"),"\u6765\u9a71\u9010 Pod\u3002"),(0,a.kt)("p",null,"\u68c0\u7d22\u88ab\u9a71\u9010\u7684 Pod \u5217\u8868\uff08podname \u548c\u547d\u540d\u7a7a\u95f4\uff09\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'kubectl get pods --all-namespaces -o go-template=\'{{range .items}}{{if eq .status.phase "Failed"}}{{if eq .status.reason "Evicted"}}{{.metadata.name}}{{" "}}{{.metadata.namespace}}{{"\\n"}}{{end}}{{end}}{{end}}\'\n')),(0,a.kt)("p",null,"\u8981\u5220\u9664\u6240\u6709\u88ab\u9a71\u9010\u7684 pod\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'kubectl get pods --all-namespaces -o go-template=\'{{range .items}}{{if eq .status.phase "Failed"}}{{if eq .status.reason "Evicted"}}{{.metadata.name}}{{" "}}{{.metadata.namespace}}{{"\\n"}}{{end}}{{end}}{{end}}\' | while read epod enamespace; do kubectl -n $enamespace delete pod $epod; done\n')),(0,a.kt)("p",null,"\u68c0\u7d22\u88ab\u9a71\u9010\u7684 pod \u5217\u8868\u3001\u8c03\u5ea6\u8282\u70b9\u4ee5\u53ca\u539f\u56e0\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'kubectl get pods --all-namespaces -o go-template=\'{{range .items}}{{if eq .status.phase "Failed"}}{{if eq .status.reason "Evicted"}}{{.metadata.name}}{{" "}}{{.metadata.namespace}}{{"\\n"}}{{end}}{{end}}{{end}}\' | while read epod enamespace; do kubectl -n $enamespace get pod $epod -o=custom-columns=NAME:.metadata.name,NODE:.spec.nodeName,MSG:.status.message; done\n')),(0,a.kt)("h3",{id:"job-\u672a\u5b8c\u6210"},"Job \u672a\u5b8c\u6210"),(0,a.kt)("p",null,"\u5982\u679c\u4f60\u542f\u7528\u4e86 Istio \u800c\u4e14\u4f60\u90e8\u7f72\u7684 Job \u672a\u5b8c\u6210\uff0c\u4f60\u9700\u8981\u6309\u7167",(0,a.kt)("a",{parentName:"p",href:"/zh/how-to-guides/advanced-user-guides/istio-setup-guide/enable-istio-in-namespace"},"\u8fd9\u4e9b\u6b65\u9aa4"),"\u5c06\u6ce8\u91ca\u6dfb\u52a0\u5230 Pod \u4e2d\u3002"),(0,a.kt)("p",null,"\u7531\u4e8e Istio Sidecars \u4f1a\u4e00\u76f4\u8fd0\u884c\uff0c\u56e0\u6b64\u5373\u4f7f\u4efb\u52a1\u5b8c\u6210\u4e86\uff0c\u4e5f\u4e0d\u80fd\u8ba4\u4e3a Job \u5df2\u5b8c\u6210\u3002\u8fd9\u662f\u4e00\u4e2a\u4e34\u65f6\u7684\u89e3\u51b3\u65b9\u6cd5\uff0c\u5b83\u7981\u6b62\u4e86 Istio \u548c\u6dfb\u52a0\u4e86\u6ce8\u91ca\u7684 Pod \u4e4b\u95f4\u7684\u901a\u4fe1\u3002\u5982\u679c\u4f60\u4f7f\u7528\u4e86\u8fd9\u4e2a\u65b9\u6cd5\uff0c\u7531\u4e8e\u8fd9\u4e2a Job \u65e0\u6cd5\u8bbf\u95ee\u670d\u52a1\u7f51\u683c\uff0c\u56e0\u6b64\u4f60\u5c06\u4e0d\u80fd\u7ee7\u7eed\u4f7f\u7528 Job \u8fdb\u884c\u96c6\u6210\u6d4b\u8bd5\u3002"))}k.isMDXComponent=!0}}]);