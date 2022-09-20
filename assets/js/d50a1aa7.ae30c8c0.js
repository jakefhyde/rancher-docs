"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[8899],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return m}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),s=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=s(e.components);return r.createElement(c.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(t),m=a,h=u["".concat(c,".").concat(m)]||u[m]||d[m]||o;return t?r.createElement(h,i(i({ref:n},p),{},{components:t})):r.createElement(h,i({ref:n},p))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=u;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=t[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},20270:function(e,n,t){t.r(n),t.d(n,{assets:function(){return p},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return d}});var r=t(87462),a=t(63366),o=(t(67294),t(3905)),i=["components"],l={title:"HTTP Proxy Configuration",weight:251},c=void 0,s={unversionedId:"reference-guides/single-node-rancher-in-docker/http-proxy-configuration",id:"reference-guides/single-node-rancher-in-docker/http-proxy-configuration",title:"HTTP Proxy Configuration",description:"If you operate Rancher behind a proxy and you want to access services through the proxy (such as retrieving catalogs), you must provide Rancher information about your proxy. As Rancher is written in Go, it uses the common proxy environment variables as shown below.",source:"@site/docs/reference-guides/single-node-rancher-in-docker/http-proxy-configuration.md",sourceDirName:"reference-guides/single-node-rancher-in-docker",slug:"/reference-guides/single-node-rancher-in-docker/http-proxy-configuration",permalink:"/reference-guides/single-node-rancher-in-docker/http-proxy-configuration",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/reference-guides/single-node-rancher-in-docker/http-proxy-configuration.md",tags:[],version:"current",lastUpdatedAt:1663691987,formattedLastUpdatedAt:"9/20/2022",frontMatter:{title:"HTTP Proxy Configuration",weight:251},sidebar:"tutorialSidebar",previous:{title:"Single Node Rancher in Docker",permalink:"/pages-for-subheaders/single-node-rancher-in-docker"},next:{title:"Advanced Options for Docker Installs",permalink:"/reference-guides/single-node-rancher-in-docker/advanced-options"}},p={},d=[{value:"Docker Installation",id:"docker-installation",level:2},{value:"Air-gapped proxy configuration",id:"air-gapped-proxy-configuration",level:3}],u={toc:d};function m(e){var n=e.components,t=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"If you operate Rancher behind a proxy and you want to access services through the proxy (such as retrieving catalogs), you must provide Rancher information about your proxy. As Rancher is written in Go, it uses the common proxy environment variables as shown below."),(0,o.kt)("p",null,"Make sure ",(0,o.kt)("inlineCode",{parentName:"p"},"NO_PROXY")," contains the network addresses, network address ranges and domains that should be excluded from using the proxy."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Environment variable"),(0,o.kt)("th",{parentName:"tr",align:null},"Purpose"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"HTTP_PROXY"),(0,o.kt)("td",{parentName:"tr",align:null},"Proxy address to use when initiating HTTP connection(s)")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"HTTPS_PROXY"),(0,o.kt)("td",{parentName:"tr",align:null},"Proxy address to use when initiating HTTPS connection(s)")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"NO_PROXY"),(0,o.kt)("td",{parentName:"tr",align:null},"Network address(es), network address range(s) and domains to exclude from using the proxy when initiating connection(s)")))),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Important:")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"NO_PROXY must be in uppercase to use network range (CIDR) notation."))),(0,o.kt)("h2",{id:"docker-installation"},"Docker Installation"),(0,o.kt)("p",null,"Passing environment variables to the Rancher container can be done using ",(0,o.kt)("inlineCode",{parentName:"p"},"-e KEY=VALUE")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"--env KEY=VALUE"),". Required values for ",(0,o.kt)("inlineCode",{parentName:"p"},"NO_PROXY")," in a ",(0,o.kt)("a",{parentName:"p",href:"/pages-for-subheaders/rancher-on-a-single-node-with-docker"},"Docker Installation")," are:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"localhost")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"127.0.0.1")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"0.0.0.0")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"10.0.0.0/8")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"cattle-system.svc")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},".svc")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},".cluster.local"))),(0,o.kt)("p",null,"The example below is based on a proxy server accessible at ",(0,o.kt)("inlineCode",{parentName:"p"},"http://192.168.0.1:3128"),", and excluding usage the proxy when accessing network range ",(0,o.kt)("inlineCode",{parentName:"p"},"192.168.10.0/24")," and every hostname under the domain ",(0,o.kt)("inlineCode",{parentName:"p"},"example.com"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'docker run -d --restart=unless-stopped \\\n  -p 80:80 -p 443:443 \\\n  -e HTTP_PROXY="http://192.168.10.1:3128" \\\n  -e HTTPS_PROXY="http://192.168.10.1:3128" \\\n  -e NO_PROXY="localhost,127.0.0.1,0.0.0.0,10.0.0.0/8,cattle-system.svc,192.168.10.0/24,.svc,.cluster.local,example.com" \\\n  --privileged \\\n  rancher/rancher:latest\n')),(0,o.kt)("p",null,"Privileged access is ",(0,o.kt)("a",{parentName:"p",href:"/pages-for-subheaders/rancher-on-a-single-node-with-docker#privileged-access-for-rancher"},"required.")),(0,o.kt)("h3",{id:"air-gapped-proxy-configuration"},"Air-gapped proxy configuration"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"New in v2.6.4")),(0,o.kt)("p",null,"You can now provision node driver clusters from an air-gapped cluster configured to use a proxy for outbound connections."),(0,o.kt)("p",null,"In addition to setting the default rules for a proxy server as shown above, you will need to add additional rules, shown below, to provision node driver clusters from a proxied Rancher environment."),(0,o.kt)("p",null,"You will configure your filepath according to your setup, e.g., ",(0,o.kt)("inlineCode",{parentName:"p"},"/etc/apt/apt.conf.d/proxy.conf"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"acl SSL_ports port 22\nacl SSL_ports port 2376\n\nacl Safe_ports port 22      # ssh\nacl Safe_ports port 2376    # docker port\n")))}m.isMDXComponent=!0}}]);