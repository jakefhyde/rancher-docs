"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[79573],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return u}});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,c=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),m=l(n),u=i,g=m["".concat(c,".").concat(u)]||m[u]||d[u]||r;return n?a.createElement(g,o(o({ref:t},s),{},{components:n})):a.createElement(g,o({ref:t},s))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=m;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:i,o[1]=p;for(var l=2;l<r;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},55583:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return c},default:function(){return u},frontMatter:function(){return p},metadata:function(){return l},toc:function(){return d}});var a=n(87462),i=n(63366),r=(n(67294),n(3905)),o=["components"],p={title:"\u914d\u7f6e PingIdentity (SAML)",weight:1200},c=void 0,l={unversionedId:"how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-authentication/authentication-config/configure-pingidentity",id:"how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-authentication/authentication-config/configure-pingidentity",title:"\u914d\u7f6e PingIdentity (SAML)",description:"\u5982\u679c\u4f60\u7684\u7ec4\u7ec7\u4f7f\u7528 Ping Identity Provider (IdP) \u8fdb\u884c\u7528\u6237\u8eab\u4efd\u9a8c\u8bc1\uff0c\u4f60\u53ef\u4ee5\u901a\u8fc7\u914d\u7f6e Rancher \u6765\u5141\u8bb8\u7528\u6237\u4f7f\u7528 IdP \u51ed\u8bc1\u767b\u5f55\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-authentication/authentication-config/configure-pingidentity.md",sourceDirName:"how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-authentication/authentication-config",slug:"/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-authentication/authentication-config/configure-pingidentity",permalink:"/zh/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-authentication/authentication-config/configure-pingidentity",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-authentication/authentication-config/configure-pingidentity.md",tags:[],version:"current",lastUpdatedAt:1663691987,formattedLastUpdatedAt:"2022/9/20",frontMatter:{title:"\u914d\u7f6e PingIdentity (SAML)",weight:1200},sidebar:"tutorialSidebar",previous:{title:"\u914d\u7f6e Keycloak (SAML)",permalink:"/zh/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-authentication/authentication-config/configure-keycloak-saml"},next:{title:"\u914d\u7f6e Okta (SAML)",permalink:"/zh/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/about-authentication/authentication-config/configure-okta-saml"}},s={},d=[],m={toc:d};function u(e){var t=e.components,n=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u5982\u679c\u4f60\u7684\u7ec4\u7ec7\u4f7f\u7528 Ping Identity Provider (IdP) \u8fdb\u884c\u7528\u6237\u8eab\u4efd\u9a8c\u8bc1\uff0c\u4f60\u53ef\u4ee5\u901a\u8fc7\u914d\u7f6e Rancher \u6765\u5141\u8bb8\u7528\u6237\u4f7f\u7528 IdP \u51ed\u8bc1\u767b\u5f55\u3002"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"\u5148\u51b3\u6761\u4ef6"),"\uff1a"),(0,r.kt)("ul",{parentName:"blockquote"},(0,r.kt)("li",{parentName:"ul"},"\u4f60\u5fc5\u987b\u914d\u7f6e\u4e86 ",(0,r.kt)("a",{parentName:"li",href:"https://www.pingidentity.com/"},"Ping IdP \u670d\u52a1\u5668"),"\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u4ee5\u4e0b\u662f Rancher Service Provider \u914d\u7f6e\u6240\u9700\u7684 URL\uff1a\n\u5143\u6570\u636e URL\uff1a",(0,r.kt)("inlineCode",{parentName:"li"},"https://<rancher-server>/v1-saml/ping/saml/metadata"),"\n\u65ad\u8a00\u4f7f\u7528\u8005\u670d\u52a1 (ACS) URL\uff1a",(0,r.kt)("inlineCode",{parentName:"li"},"https://<rancher-server>/v1-saml/ping/saml/acs"),"\n\u8bf7\u6ce8\u610f\uff0c\u5728 Rancher \u4e2d\u4fdd\u5b58\u9a8c\u8bc1\u914d\u7f6e\u4e4b\u524d\uff0c\u8fd9\u4e9b URL \u4e0d\u4f1a\u8fd4\u56de\u6709\u6548\u6570\u636e\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u4ece IdP \u670d\u52a1\u5668\u5bfc\u51fa ",(0,r.kt)("inlineCode",{parentName:"li"},"metadata.xml")," \u6587\u4ef6\u3002\u8be6\u60c5\u8bf7\u53c2\u89c1 ",(0,r.kt)("a",{parentName:"li",href:"https://documentation.pingidentity.com/pingfederate/pf83/index.shtml#concept_exportingMetadata.html"},"PingIdentity \u6587\u6863"),"\u3002"))),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u5728\u5de6\u4e0a\u89d2\uff0c\u5355\u51fb ",(0,r.kt)("strong",{parentName:"p"},"\u2630 > \u7528\u6237 & \u8ba4\u8bc1"),"\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u5728\u5de6\u4fa7\u5bfc\u822a\u680f\uff0c\u5355\u51fb",(0,r.kt)("strong",{parentName:"p"},"\u8ba4\u8bc1"),"\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u5355\u51fb ",(0,r.kt)("strong",{parentName:"p"},"Ping Identity"),"\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u586b\u5199",(0,r.kt)("strong",{parentName:"p"},"\u914d\u7f6e Ping \u8d26\u53f7"),"\u8868\u5355\u3002Ping IdP \u5141\u8bb8\u4f60\u6307\u5b9a\u8981\u4f7f\u7528\u7684\u6570\u636e\u5b58\u50a8\u3002\u4f60\u53ef\u4ee5\u6dfb\u52a0\u6570\u636e\u5e93\u6216\u4f7f\u7528\u73b0\u6709\u7684 ldap \u670d\u52a1\u5668\u3002\u4f8b\u5982\uff0c\u5982\u679c\u4f60\u9009\u62e9 Active Directory (AD) \u670d\u52a1\u5668\uff0c\u4e0b\u9762\u7684\u793a\u4f8b\u5c06\u63cf\u8ff0\u5982\u4f55\u5c06 AD \u5c5e\u6027\u6620\u5c04\u5230 Rancher \u4e2d\u7684\u5b57\u6bb5\uff1a"),(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"\u663e\u793a\u540d\u79f0\u5b57\u6bb5"),"\uff1a\u5305\u542b\u7528\u6237\u663e\u793a\u540d\u79f0\u7684 AD \u5c5e\u6027\uff08\u4f8b\u5982\uff1a",(0,r.kt)("inlineCode",{parentName:"p"},"displayName"),"\uff09\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"\u7528\u6237\u540d\u5b57\u6bb5"),"\uff1a\u5305\u542b\u7528\u6237\u540d/\u7ed9\u5b9a\u540d\u79f0\u7684 AD \u5c5e\u6027\uff08\u4f8b\u5982\uff1a",(0,r.kt)("inlineCode",{parentName:"p"},"givenName"),"\uff09\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"UID \u5b57\u6bb5"),"\uff1a\u6bcf\u4e2a\u7528\u6237\u552f\u4e00\u7684 AD \u5c5e\u6027\uff08\u4f8b\u5982\uff1a",(0,r.kt)("inlineCode",{parentName:"p"},"sAMAccountName"),"\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"distinguishedName"),"\uff09\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"\u7528\u6237\u7ec4\u5b57\u6bb5"),": \u521b\u5efa\u7528\u4e8e\u7ba1\u7406\u7ec4\u6210\u5458\u5173\u7cfb\u7684\u6761\u76ee\uff08\u4f8b\u5982\uff1a",(0,r.kt)("inlineCode",{parentName:"p"},"memberOf"),"\uff09\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Entity ID \u5b57\u6bb5"),"\uff08\u53ef\u9009\uff09\uff1a\u4f60\u7684\u5408\u4f5c\u4f19\u4f34\u5df2\u516c\u5e03\u7684\u3001\u4f9d\u8d56\u534f\u8bae\u7684\u3001\u552f\u4e00\u7684\u6807\u8bc6\u7b26\u3002\u8be5 ID \u5c06\u4f60\u7684\u7ec4\u7ec7\u5b9a\u4e49\u4e3a\u5c06\u670d\u52a1\u5668\u7528\u4e8e SAML 2.0 \u4e8b\u52a1\u7684\u5b9e\u4f53\u3002\u8fd9\u4e2a ID \u53ef\u4ee5\u901a\u8fc7\u5e26\u5916\u4f20\u8f93\u6216 SAML \u5143\u6570\u636e\u6587\u4ef6\u83b7\u5f97\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Rancher API \u4e3b\u673a"),"\uff1a\u4f60\u7684 Rancher Server \u7684 URL\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"\u79c1\u94a5"),"\u548c",(0,r.kt)("strong",{parentName:"p"},"\u8bc1\u4e66"),"\uff1a\u5bc6\u94a5/\u8bc1\u4e66\u5bf9\uff0c\u7528\u4e8e\u5728 Rancher \u548c\u4f60\u7684 IdP \u4e4b\u95f4\u521b\u5efa\u4e00\u4e2a\u5b89\u5168\u5916\u58f3\uff08SSH\uff09\u3002"),(0,r.kt)("p",{parentName:"li"},"\u4f60\u53ef\u4ee5\u4f7f\u7528 openssl \u547d\u4ee4\u8fdb\u884c\u521b\u5efa\u3002\u4f8b\u5982\uff1a"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},'openssl req -x509 -newkey rsa:2048 -keyout myservice.key -out myservice.cert -days 365 -nodes -subj "/CN=myservice.example.com"\n'))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"IDP \u5143\u6570\u636e"),"\uff1a",(0,r.kt)("a",{parentName:"p",href:"https://documentation.pingidentity.com/pingfederate/pf83/index.shtml#concept_exportingMetadata.html"},"\u4ece IdP \u670d\u52a1\u5668\u5bfc\u51fa\u7684 ",(0,r.kt)("inlineCode",{parentName:"a"},"metadata.xml")," \u6587\u4ef6"),"\u3002"))))),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u5b8c\u6210",(0,r.kt)("strong",{parentName:"p"},"\u914d\u7f6e Ping \u8d26\u53f7"),"\u8868\u5355\u540e\uff0c\u5355\u51fb",(0,r.kt)("strong",{parentName:"p"},"\u542f\u7528"),"\u3002"),(0,r.kt)("p",{parentName:"li"},"Rancher \u4f1a\u5c06\u4f60\u91cd\u5b9a\u5411\u5230 IdP \u767b\u5f55\u9875\u9762\u3002\u8f93\u5165\u4f7f\u7528 Ping IdP \u8fdb\u884c\u8eab\u4efd\u9a8c\u8bc1\u7684\u51ed\u8bc1\uff0c\u6765\u9a8c\u8bc1\u4f60\u7684 Rancher PingIdentity \u914d\u7f6e\u3002"),(0,r.kt)("div",{parentName:"li",className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"\u4f60\u53ef\u80fd\u9700\u8981\u7981\u7528\u5f39\u51fa\u7a97\u53e3\u963b\u6b62\u7a0b\u5e8f\u624d\u80fd\u770b\u5230 IdP \u767b\u5f55\u9875\u9762\u3002"))))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u7ed3\u679c"),"\uff1a\u5df2\u5c06 Rancher \u914d\u7f6e\u4e3a\u4f7f\u7528 PingIdentity\u3002\u4f60\u7684\u7528\u6237\u73b0\u5728\u53ef\u4ee5\u4f7f\u7528 PingIdentity \u767b\u5f55\u540d\u767b\u5f55 Rancher\u3002"),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"SAML \u8eab\u4efd\u63d0\u4f9b\u5546\u6ce8\u610f\u4e8b\u9879")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("ul",{parentName:"div"},(0,r.kt)("li",{parentName:"ul"},"SAML \u534f\u8bae\u4e0d\u652f\u6301\u641c\u7d22\u6216\u67e5\u627e\u7528\u6237\u6216\u7ec4\u3002\u56e0\u6b64\uff0c\u5c06\u7528\u6237\u6216\u7ec4\u6dfb\u52a0\u5230 Rancher \u65f6\u4e0d\u4f1a\u5bf9\u5176\u8fdb\u884c\u9a8c\u8bc1\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u6dfb\u52a0\u7528\u6237\u65f6\uff0c\u5fc5\u987b\u6b63\u786e\u8f93\u5165\u786e\u5207\u7684\u7528\u6237 ID\uff08\u5373 ",(0,r.kt)("inlineCode",{parentName:"li"},"UID")," \u5b57\u6bb5\uff09\u3002\u952e\u5165\u7528\u6237 ID \u65f6\uff0c\u5c06\u4e0d\u4f1a\u641c\u7d22\u53ef\u80fd\u5339\u914d\u7684\u5176\u4ed6\u7528\u6237 ID\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u6dfb\u52a0\u7ec4\u65f6\uff0c\u5fc5\u987b\u4ece\u6587\u672c\u6846\u65c1\u8fb9\u7684\u4e0b\u62c9\u5217\u8868\u4e2d\u9009\u62e9\u7ec4\u3002Rancher \u5047\u5b9a\u6765\u81ea\u6587\u672c\u6846\u7684\u4efb\u4f55\u8f93\u5165\u90fd\u662f\u7528\u6237\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u7528\u6237\u7ec4\u4e0b\u62c9\u5217\u8868\u4ec5\u663e\u793a\u4f60\u6240\u5c5e\u7684\u7528\u6237\u7ec4\u3002\u5982\u679c\u4f60\u4e0d\u662f\u67d0\u4e2a\u7ec4\u7684\u6210\u5458\uff0c\u4f60\u5c06\u65e0\u6cd5\u6dfb\u52a0\u8be5\u7ec4\u3002")))))}u.isMDXComponent=!0}}]);