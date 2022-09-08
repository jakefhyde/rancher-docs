"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[62030],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=l(n),m=a,h=d["".concat(p,".").concat(m)]||d[m]||u[m]||i;return n?r.createElement(h,o(o({ref:t},c),{},{components:n})):r.createElement(h,o({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},67156:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return u}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),o=["components"],s={title:"API Keys",weight:7005},p=void 0,l={unversionedId:"reference-guides/user-settings/api-keys",id:"reference-guides/user-settings/api-keys",title:"API Keys",description:"API Keys and User Authentication",source:"@site/docs/reference-guides/user-settings/api-keys.md",sourceDirName:"reference-guides/user-settings",slug:"/reference-guides/user-settings/api-keys",permalink:"/reference-guides/user-settings/api-keys",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/reference-guides/user-settings/api-keys.md",tags:[],version:"current",lastUpdatedAt:1662676534,formattedLastUpdatedAt:"9/8/2022",frontMatter:{title:"API Keys",weight:7005},sidebar:"tutorialSidebar",previous:{title:"User Settings",permalink:"/pages-for-subheaders/user-settings"},next:{title:"Managing Node Templates",permalink:"/reference-guides/user-settings/manage-node-templates"}},c={},u=[{value:"API Keys and User Authentication",id:"api-keys-and-user-authentication",level:2},{value:"Creating an API Key",id:"creating-an-api-key",level:2},{value:"What&#39;s Next?",id:"whats-next",level:2},{value:"Deleting API Keys",id:"deleting-api-keys",level:2}],d={toc:u};function m(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"api-keys-and-user-authentication"},"API Keys and User Authentication"),(0,i.kt)("p",null,"If you want to access your Rancher clusters, projects, or other objects using external applications, you can do so using the Rancher API. However, before your application can access the API, you must provide the app with a key used to authenticate with Rancher. You can obtain a key using the Rancher UI."),(0,i.kt)("p",null,"An API key is also required for using Rancher CLI."),(0,i.kt)("p",null,"API Keys are composed of four components:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Endpoint:")," This is the IP address and path that other applications use to send requests to the Rancher API."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Access Key:")," The token's username."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Secret Key:")," The token's password. For applications that prompt you for two different strings for API authentication, you usually enter the two keys together."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Bearer Token:")," The token username and password concatenated together. Use this string for applications that prompt you for one authentication string.")),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Users may opt to enable ",(0,i.kt)("a",{parentName:"p",href:"/reference-guides/about-the-api/api-tokens"},"token hashing"),"."))),(0,i.kt)("h2",{id:"creating-an-api-key"},"Creating an API Key"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Select ",(0,i.kt)("strong",{parentName:"p"},"User Avatar > Account & API Keys")," from upper right corner.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Click ",(0,i.kt)("strong",{parentName:"p"},"Create API Key"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Optional:")," Enter a description for the API key and select an expiration period or a scope. We recommend setting an expiration date."),(0,i.kt)("p",{parentName:"li"},"The API key won't be valid after expiration. Shorter expiration periods are more secure."),(0,i.kt)("p",{parentName:"li"},"Expiration period will be bound by ",(0,i.kt)("inlineCode",{parentName:"p"},"v3/settings/auth-token-max-ttl-minutes"),". If it exceeds the max-ttl, API key will be created with max-ttl as the expiration period."),(0,i.kt)("p",{parentName:"li"},"A scope will limit the API key so that it will only work against the Kubernetes API of the specified cluster. If the cluster is configured with an Authorized Cluster Endpoint, you will be able to use a scoped token directly against the cluster's API without proxying through the Rancher server. See ",(0,i.kt)("a",{parentName:"p",href:"/pages-for-subheaders/rancher-manager-architecture#4-authorized-cluster-endpoint"},"Authorized Cluster Endpoints")," for more information.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Click ",(0,i.kt)("strong",{parentName:"p"},"Create"),"."),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Step Result:")," Your API Key is created. Your API ",(0,i.kt)("strong",{parentName:"p"},"Endpoint"),", ",(0,i.kt)("strong",{parentName:"p"},"Access Key"),", ",(0,i.kt)("strong",{parentName:"p"},"Secret Key"),", and ",(0,i.kt)("strong",{parentName:"p"},"Bearer Token")," are displayed."),(0,i.kt)("p",{parentName:"li"},"Use the ",(0,i.kt)("strong",{parentName:"p"},"Bearer Token")," to authenticate with Rancher CLI.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Copy the information displayed to a secure location. This information is only displayed once, so if you lose your key, you'll have to make a new one."))),(0,i.kt)("h2",{id:"whats-next"},"What's Next?"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Enter your API key information into the application that will send requests to the Rancher API."),(0,i.kt)("li",{parentName:"ul"},"Learn more about the Rancher endpoints and parameters by selecting ",(0,i.kt)("strong",{parentName:"li"},"View in API")," for an object in the Rancher UI."),(0,i.kt)("li",{parentName:"ul"},"API keys are used for API calls and ",(0,i.kt)("a",{parentName:"li",href:"/pages-for-subheaders/cli-with-rancher"},"Rancher CLI"),".")),(0,i.kt)("h2",{id:"deleting-api-keys"},"Deleting API Keys"),(0,i.kt)("p",null,"If you need to revoke an API key, delete it. You should delete API keys:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"That may have been compromised."),(0,i.kt)("li",{parentName:"ul"},"That have expired.")),(0,i.kt)("p",null,"To delete an API, select the stale key and click ",(0,i.kt)("strong",{parentName:"p"},"Delete"),"."))}m.isMDXComponent=!0}}]);