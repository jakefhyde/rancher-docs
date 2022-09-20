"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[84549],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),h=u(n),d=r,m=h["".concat(s,".").concat(d)]||h[d]||p[d]||i;return n?a.createElement(m,o(o({ref:t},c),{},{components:n})):a.createElement(m,o({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},85162:function(e,t,n){n.d(t,{Z:function(){return o}});var a=n(67294),r=n(86010),i="tabItem_Ymn6";function o(e){var t=e.children,n=e.hidden,o=e.className;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(i,o),hidden:n},t)}},65488:function(e,t,n){n.d(t,{Z:function(){return d}});var a=n(87462),r=n(67294),i=n(86010),o=n(72389),l=n(67392),s=n(7094),u=n(12466),c="tabList__CuJ",p="tabItem_LNqP";function h(e){var t,n,o=e.lazy,h=e.block,d=e.defaultValue,m=e.values,f=e.groupId,k=e.className,g=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=m?m:g.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),b=(0,l.l)(v,(function(e,t){return e.value===t.value}));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var y=null===d?d:null!=(t=null!=d?d:null==(n=g.find((function(e){return e.props.default})))?void 0:n.props.value)?t:g[0].props.value;if(null!==y&&!v.some((function(e){return e.value===y})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+v.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var N=(0,s.U)(),w=N.tabGroupChoices,T=N.setTabGroupChoices,C=(0,r.useState)(y),P=C[0],I=C[1],A=[],E=(0,u.o5)().blockElementScrollPositionUntilNextRender;if(null!=f){var R=w[f];null!=R&&R!==P&&v.some((function(e){return e.value===R}))&&I(R)}var O=function(e){var t=e.currentTarget,n=A.indexOf(t),a=v[n].value;a!==P&&(E(t),I(a),null!=f&&T(f,String(a)))},U=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a,r=A.indexOf(e.currentTarget)+1;n=null!=(a=A[r])?a:A[0];break;case"ArrowLeft":var i,o=A.indexOf(e.currentTarget)-1;n=null!=(i=A[o])?i:A[A.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,i.Z)("tabs-container",c)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":h},k)},v.map((function(e){var t=e.value,n=e.label,o=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:P===t?0:-1,"aria-selected":P===t,key:t,ref:function(e){return A.push(e)},onKeyDown:U,onFocus:O,onClick:O},o,{className:(0,i.Z)("tabs__item",p,null==o?void 0:o.className,{"tabs__item--active":P===t})}),null!=n?n:t)}))),o?(0,r.cloneElement)(g.filter((function(e){return e.props.value===P}))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},g.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==P})}))))}function d(e){var t=(0,o.Z)();return r.createElement(h,(0,a.Z)({key:String(t)},e))}},88683:function(e,t,n){n.r(t),n.d(t,{assets:function(){return h},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return u},metadata:function(){return p},toc:function(){return d}});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),o=n(65488),l=n(85162),s=["components"],u={title:"API",weight:24},c=void 0,p={unversionedId:"pages-for-subheaders/about-the-api",id:"pages-for-subheaders/about-the-api",title:"API",description:"How to use the API",source:"@site/docs/pages-for-subheaders/about-the-api.md",sourceDirName:"pages-for-subheaders",slug:"/pages-for-subheaders/about-the-api",permalink:"/pages-for-subheaders/about-the-api",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/pages-for-subheaders/about-the-api.md",tags:[],version:"current",lastUpdatedAt:1663691987,formattedLastUpdatedAt:"9/20/2022",frontMatter:{title:"API",weight:24},sidebar:"tutorialSidebar",previous:{title:"kubectl Utility",permalink:"/reference-guides/cli-with-rancher/kubectl-utility"},next:{title:"API Tokens",permalink:"/reference-guides/about-the-api/api-tokens"}},h={},d=[{value:"How to use the API",id:"how-to-use-the-api",level:2},{value:"Authentication",id:"authentication",level:2},{value:"Making requests",id:"making-requests",level:2},{value:"Filtering",id:"filtering",level:2},{value:"Sorting",id:"sorting",level:2},{value:"Pagination",id:"pagination",level:2},{value:"Capturing Rancher API Calls",id:"capturing-rancher-api-calls",level:2}],m={toc:d};function f(e){var t=e.components,n=(0,r.Z)(e,s);return(0,i.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"how-to-use-the-api"},"How to use the API"),(0,i.kt)("p",null,"The API has its own user interface accessible from a web browser.  This is an easy way to see resources, perform actions, and see the equivalent cURL or HTTP request & response.  To access it:"),(0,i.kt)(o.Z,{mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"Rancher v2.6.4+",mdxType:"TabItem"},(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Click on your user avatar in the upper right corner."),(0,i.kt)("li",{parentName:"ol"},"Click  ",(0,i.kt)("strong",{parentName:"li"},"Account & API Keys"),"."),(0,i.kt)("li",{parentName:"ol"},"Under the ",(0,i.kt)("strong",{parentName:"li"},"API Keys")," section, find the ",(0,i.kt)("strong",{parentName:"li"},"API Endpoint")," field and click the link. The link will look something like ",(0,i.kt)("inlineCode",{parentName:"li"},"https://<RANCHER_FQDN>/v3"),", where ",(0,i.kt)("inlineCode",{parentName:"li"},"<RANCHER_FQDN>")," is the fully qualified domain name of your Rancher deployment."))),(0,i.kt)(l.Z,{value:"Rancher before v2.6.4",mdxType:"TabItem"},(0,i.kt)("p",null,"Go to the URL endpoint at ",(0,i.kt)("inlineCode",{parentName:"p"},"https://<RANCHER_FQDN>/v3"),", where ",(0,i.kt)("inlineCode",{parentName:"p"},"<RANCHER_FQDN>")," is the fully qualified domain name of your Rancher deployment."))),(0,i.kt)("h2",{id:"authentication"},"Authentication"),(0,i.kt)("p",null,"API requests must include authentication information.  Authentication is done with HTTP basic authentication using ",(0,i.kt)("a",{parentName:"p",href:"/reference-guides/user-settings/api-keys"},"API Keys"),". API keys can create new clusters and have access to multiple clusters via ",(0,i.kt)("inlineCode",{parentName:"p"},"/v3/clusters/"),". ",(0,i.kt)("a",{parentName:"p",href:"/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac/cluster-and-project-roles"},"Cluster and project roles")," apply to these keys and restrict what clusters and projects the account can see and what actions they can take."),(0,i.kt)("p",null,"By default, some cluster-level API tokens are generated with infinite time-to-live (",(0,i.kt)("inlineCode",{parentName:"p"},"ttl=0"),"). In other words, API tokens with ",(0,i.kt)("inlineCode",{parentName:"p"},"ttl=0")," never expire unless you invalidate them. For details on how to invalidate them, refer to the ",(0,i.kt)("a",{parentName:"p",href:"/reference-guides/about-the-api/api-tokens"},"API tokens page"),"."),(0,i.kt)("h2",{id:"making-requests"},"Making requests"),(0,i.kt)("p",null,"The API is generally RESTful but has several features to make the definition of everything discoverable by a client so that generic clients can be written instead of having to write specific code for every type of resource.  For detailed info about the generic API spec, ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/rancher/api-spec/blob/master/specification.md"},"see here"),"."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Every type has a Schema which describes:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"The URL to get to the collection of this type of resources"),(0,i.kt)("li",{parentName:"ul"},"Every field the resource can have, along with their type, basic validation rules, whether they are required or optional, etc."),(0,i.kt)("li",{parentName:"ul"},"Every action that is possible on this type of resource, with their inputs and outputs (also as schemas)."),(0,i.kt)("li",{parentName:"ul"},"Every field that filtering is allowed on"),(0,i.kt)("li",{parentName:"ul"},"What HTTP verb methods are available for the collection itself, or for individual resources in the collection.")))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"So the theory is that you can load just the list of schemas and know everything about the API.  This is in fact how the UI for the API works, it contains no code specific to Rancher itself.  The URL to get Schemas is sent in every HTTP response as a ",(0,i.kt)("inlineCode",{parentName:"p"},"X-Api-Schemas")," header.  From there you can follow the ",(0,i.kt)("inlineCode",{parentName:"p"},"collection")," link on each schema to know where to list resources, and other ",(0,i.kt)("inlineCode",{parentName:"p"},"links")," inside of the returned resources to get any other information.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"In practice, you will probably just want to construct URL strings.  We highly suggest limiting this to the top-level to list a collection (",(0,i.kt)("inlineCode",{parentName:"p"},"/v3/<type>"),") or get a specific resource (",(0,i.kt)("inlineCode",{parentName:"p"},"/v3/<type>/<id>"),").  Anything deeper than that is subject to change in future releases.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Resources have relationships between each other called links.  Each resource includes a map of ",(0,i.kt)("inlineCode",{parentName:"p"},"links")," with the name of the link and the URL to retrieve that information.  Again you should ",(0,i.kt)("inlineCode",{parentName:"p"},"GET")," the resource and then follow the URL in the ",(0,i.kt)("inlineCode",{parentName:"p"},"links")," map, not construct these strings yourself.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Most resources have actions, which do something or change the state of the resource.  To use these, send a HTTP ",(0,i.kt)("inlineCode",{parentName:"p"},"POST")," to the URL in the ",(0,i.kt)("inlineCode",{parentName:"p"},"actions")," map for the action you want.  Some actions require input or produce output, see the individual documentation for each type or the schemas for specific information.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"To edit a resource, send a HTTP ",(0,i.kt)("inlineCode",{parentName:"p"},"PUT")," to the ",(0,i.kt)("inlineCode",{parentName:"p"},"links.update")," link on the resource with the fields that you want to change.  If the link is missing then you don't have permission to update the resource. Unknown fields and ones that are not editable are ignored.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"To delete a resource, send a HTTP ",(0,i.kt)("inlineCode",{parentName:"p"},"DELETE")," to the ",(0,i.kt)("inlineCode",{parentName:"p"},"links.remove")," link on the resource.  If the link is missing then you don't have permission to update the resource.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"To create a new resource, HTTP ",(0,i.kt)("inlineCode",{parentName:"p"},"POST")," to the collection URL in the schema (which is ",(0,i.kt)("inlineCode",{parentName:"p"},"/v3/<type>"),")."))),(0,i.kt)("h2",{id:"filtering"},"Filtering"),(0,i.kt)("p",null,"Most collections can be filtered on the server-side by common fields using HTTP query parameters.  The ",(0,i.kt)("inlineCode",{parentName:"p"},"filters"),' map shows you what fields can be filtered on and what the filtered values were for the request you made.  The API UI has controls to setup filtering and show you the appropriate request.  For simple "equals" matches it\'s just ',(0,i.kt)("inlineCode",{parentName:"p"},"field=value"),".  Modifiers can be added to the field name, e.g. ",(0,i.kt)("inlineCode",{parentName:"p"},"field_gt=42"),' for "field is greater than 42".  See the ',(0,i.kt)("a",{parentName:"p",href:"https://github.com/rancher/api-spec/blob/master/specification.md#filtering"},"API spec")," for full details."),(0,i.kt)("h2",{id:"sorting"},"Sorting"),(0,i.kt)("p",null,"Most collections can be sorted on the server-side by common fields using HTTP query parameters.  The ",(0,i.kt)("inlineCode",{parentName:"p"},"sortLinks")," map shows you what sorts are available, along with the URL to get the collection sorted by that.  It also includes info about what the current response was sorted by, if specified."),(0,i.kt)("h2",{id:"pagination"},"Pagination"),(0,i.kt)("p",null,"API responses are paginated with a limit of 100 resources per page by default.  This can be changed with the ",(0,i.kt)("inlineCode",{parentName:"p"},"limit")," query parameter, up to a maximum of 1000, e.g. ",(0,i.kt)("inlineCode",{parentName:"p"},"/v3/pods?limit=1000"),".  The ",(0,i.kt)("inlineCode",{parentName:"p"},"pagination")," map in collection responses tells you whether or not you have the full result set and has a link to the next page if you do not."),(0,i.kt)("h2",{id:"capturing-rancher-api-calls"},"Capturing Rancher API Calls"),(0,i.kt)("p",null,"You can use browser developer tools to capture how the Rancher API is called. For example, you could follow these steps to use the Chrome developer tools to get the API call for provisioning an RKE cluster:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"In the Rancher UI, go to ",(0,i.kt)("strong",{parentName:"li"},"Cluster Management")," and click ",(0,i.kt)("strong",{parentName:"li"},"Create.")),(0,i.kt)("li",{parentName:"ol"},"Click one of the cluster types. This example uses Digital Ocean."),(0,i.kt)("li",{parentName:"ol"},"Fill out the form with a cluster name and node template, but don't click ",(0,i.kt)("strong",{parentName:"li"},"Create"),"."),(0,i.kt)("li",{parentName:"ol"},"You will need to open the developer tools before the cluster creation to see the API call being recorded. To open the tools, right-click on the Rancher UI and click ",(0,i.kt)("strong",{parentName:"li"},"Inspect.")),(0,i.kt)("li",{parentName:"ol"},"In the developer tools, click the ",(0,i.kt)("strong",{parentName:"li"},"Network")," tab."),(0,i.kt)("li",{parentName:"ol"},"On the ",(0,i.kt)("strong",{parentName:"li"},"Network")," tab, make sure ",(0,i.kt)("strong",{parentName:"li"},"Fetch/XHR")," is selected."),(0,i.kt)("li",{parentName:"ol"},"In the Rancher UI, click ",(0,i.kt)("strong",{parentName:"li"},"Create"),". In the developer tools, you should see a new network request with the name ",(0,i.kt)("inlineCode",{parentName:"li"},"cluster?_replace=true"),"."),(0,i.kt)("li",{parentName:"ol"},"Right-click ",(0,i.kt)("inlineCode",{parentName:"li"},"cluster?_replace=true")," and click ",(0,i.kt)("strong",{parentName:"li"},"Copy > Copy as cURL.")),(0,i.kt)("li",{parentName:"ol"},"Paste the result into any text editor. You will be able to see the POST request, including the URL it was sent to, all of the headers, and the full body of the request. This command can be used to create a cluster from the command line. Note: The request should be stored in a safe place because it contains credentials.")))}f.isMDXComponent=!0}}]);