"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[43816],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return y}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),g=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=g(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=g(r),y=o,m=p["".concat(s,".").concat(y)]||p[y]||u[y]||a;return r?n.createElement(m,i(i({ref:t},c),{},{components:r})):n.createElement(m,i({ref:t},c))}));function y(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var g=2;g<a;g++)i[g]=r[g];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},96185:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return y},frontMatter:function(){return l},metadata:function(){return g},toc:function(){return u}});var n=r(87462),o=r(63366),a=(r(67294),r(3905)),i=["components"],l={title:"Syslog",weight:500,aliases:["/rancher/v2.0-v2.4/en/tools/logging/syslog/","/rancher/v2.0-v2.4/en/cluster-admin/tools/logging/syslog","/rancher/v2.0-v2.4/en/logging/legacy/cluster-logging/syslog","/rancher/v2.0-v2.4/en/logging/v2.0.x-v2.4.x/cluster-logging/syslog","/rancher/v2.x/en/logging/v2.0.x-v2.4.x/cluster-logging/syslog/"]},s=void 0,g={unversionedId:"explanations/integrations-in-rancher/cluster-logging/syslog",id:"version-2.0-2.4/explanations/integrations-in-rancher/cluster-logging/syslog",title:"Syslog",description:"If your organization uses Syslog, you can configure Rancher to send it Kubernetes logs. Afterwards, you can log into your Syslog server to view logs.",source:"@site/versioned_docs/version-2.0-2.4/explanations/integrations-in-rancher/cluster-logging/syslog.md",sourceDirName:"explanations/integrations-in-rancher/cluster-logging",slug:"/explanations/integrations-in-rancher/cluster-logging/syslog",permalink:"/zh/v2.0-v2.4/explanations/integrations-in-rancher/cluster-logging/syslog",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.0-2.4/explanations/integrations-in-rancher/cluster-logging/syslog.md",tags:[],version:"2.0-2.4",lastUpdatedAt:1663691987,formattedLastUpdatedAt:"2022/9/20",frontMatter:{title:"Syslog",weight:500,aliases:["/rancher/v2.0-v2.4/en/tools/logging/syslog/","/rancher/v2.0-v2.4/en/cluster-admin/tools/logging/syslog","/rancher/v2.0-v2.4/en/logging/legacy/cluster-logging/syslog","/rancher/v2.0-v2.4/en/logging/v2.0.x-v2.4.x/cluster-logging/syslog","/rancher/v2.x/en/logging/v2.0.x-v2.4.x/cluster-logging/syslog/"]},sidebar:"tutorialSidebar",previous:{title:"Splunk",permalink:"/zh/v2.0-v2.4/explanations/integrations-in-rancher/cluster-logging/splunk"},next:{title:"Cluster Alerts",permalink:"/zh/v2.0-v2.4/pages-for-subheaders/cluster-alerts"}},c={},u=[{value:"Syslog Server Configuration",id:"syslog-server-configuration",level:2},{value:"Encryption Configuration",id:"encryption-configuration",level:2}],p={toc:u};function y(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"If your organization uses ",(0,a.kt)("a",{parentName:"p",href:"https://tools.ietf.org/html/rfc5424"},"Syslog"),", you can configure Rancher to send it Kubernetes logs. Afterwards, you can log into your Syslog server to view logs."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Prerequisite:")," You must have a Syslog server configured.")),(0,a.kt)("p",null,"If you are using rsyslog, please make sure your rsyslog authentication mode is ",(0,a.kt)("inlineCode",{parentName:"p"},"x509/name"),"."),(0,a.kt)("h2",{id:"syslog-server-configuration"},"Syslog Server Configuration"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"In the ",(0,a.kt)("strong",{parentName:"p"},"Endpoint")," field, enter the IP address and port for your Syslog server. Additionally, in the dropdown, select the protocol that your Syslog server uses.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"In the ",(0,a.kt)("strong",{parentName:"p"},"Program")," field, enter the name of the application sending logs to your Syslog server, e.g. ",(0,a.kt)("inlineCode",{parentName:"p"},"Rancher"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"If you are using a cloud logging service, e.g. ",(0,a.kt)("a",{parentName:"p",href:"https://www.sumologic.com/"},"Sumologic"),", enter a ",(0,a.kt)("strong",{parentName:"p"},"Token")," that authenticates with your Syslog server. You will need to create this token in the cloud logging service.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Select a ",(0,a.kt)("strong",{parentName:"p"},"Log Severity")," for events that are logged to the Syslog server. For more information on each severity level, see the ",(0,a.kt)("a",{parentName:"p",href:"https://tools.ietf.org/html/rfc5424#page-11"},"Syslog protocol documentation"),"."),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"By specifying a ",(0,a.kt)("strong",{parentName:"li"},"Log Severity")," does not mean that will act as a filtering mechanism for logs. To do that you should use a parser on the Syslog server.")))),(0,a.kt)("h2",{id:"encryption-configuration"},"Encryption Configuration"),(0,a.kt)("p",null,"If your Syslog server is using ",(0,a.kt)("strong",{parentName:"p"},"TCP")," protocol and uses TLS, you need to select ",(0,a.kt)("strong",{parentName:"p"},"Use TLS")," and complete the ",(0,a.kt)("strong",{parentName:"p"},"Encryption Configuration")," form."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Provide the ",(0,a.kt)("strong",{parentName:"p"},"Client Private Key")," and ",(0,a.kt)("strong",{parentName:"p"},"Client Certificate"),". You can either copy and paste them or upload them by using the ",(0,a.kt)("strong",{parentName:"p"},"Read from a file")," button."),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"You can use either a self-signed certificate or one provided by a certificate authority.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"You can generate a self-signed certificate using an openssl command. For example:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},'openssl req -x509 -newkey rsa:2048 -keyout myservice.key -out myservice.cert -days 365 -nodes -subj "/CN=myservice.example.com"\n'))))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Select whether or not you want to verify your SSL."),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"If you are using a self-signed certificate, select ",(0,a.kt)("strong",{parentName:"li"},"Enabled - Input trusted server certificate"),", provide the ",(0,a.kt)("strong",{parentName:"li"},"CA Certificate PEM"),". You can copy and paste the certificate or upload it using the ",(0,a.kt)("strong",{parentName:"li"},"Read from a file")," button.  "),(0,a.kt)("li",{parentName:"ul"},"If you are using a certificate from a certificate authority, select ",(0,a.kt)("strong",{parentName:"li"},"Enabled - Input trusted server certificate"),". You do not need to provide a ",(0,a.kt)("strong",{parentName:"li"},"CA Certificate PEM"),".")))))}y.isMDXComponent=!0}}]);