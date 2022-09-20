"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[72949],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return h}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),u=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(r),h=a,f=d["".concat(i,".").concat(h)]||d[h]||p[h]||o;return r?n.createElement(f,l(l({ref:t},c),{},{components:r})):n.createElement(f,l({ref:t},c))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:a,l[1]=s;for(var u=2;u<o;u++)l[u]=r[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},85162:function(e,t,r){r.d(t,{Z:function(){return l}});var n=r(67294),a=r(86010),o="tabItem_Ymn6";function l(e){var t=e.children,r=e.hidden,l=e.className;return n.createElement("div",{role:"tabpanel",className:(0,a.Z)(o,l),hidden:r},t)}},65488:function(e,t,r){r.d(t,{Z:function(){return h}});var n=r(87462),a=r(67294),o=r(86010),l=r(72389),s=r(67392),i=r(7094),u=r(12466),c="tabList__CuJ",p="tabItem_LNqP";function d(e){var t,r,l=e.lazy,d=e.block,h=e.defaultValue,f=e.values,m=e.groupId,g=e.className,v=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=f?f:v.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),y=(0,s.l)(b,(function(e,t){return e.value===t.value}));if(y.length>0)throw new Error('Docusaurus error: Duplicate values "'+y.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var k=null===h?h:null!=(t=null!=h?h:null==(r=v.find((function(e){return e.props.default})))?void 0:r.props.value)?t:v[0].props.value;if(null!==k&&!b.some((function(e){return e.value===k})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+k+'" but none of its children has the corresponding value. Available values are: '+b.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var w=(0,i.U)(),T=w.tabGroupChoices,E=w.setTabGroupChoices,O=(0,a.useState)(k),C=O[0],x=O[1],P=[],N=(0,u.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var j=T[m];null!=j&&j!==C&&b.some((function(e){return e.value===j}))&&x(j)}var M=function(e){var t=e.currentTarget,r=P.indexOf(t),n=b[r].value;n!==C&&(N(t),x(n),null!=m&&E(m,String(n)))},D=function(e){var t,r=null;switch(e.key){case"ArrowRight":var n,a=P.indexOf(e.currentTarget)+1;r=null!=(n=P[a])?n:P[0];break;case"ArrowLeft":var o,l=P.indexOf(e.currentTarget)-1;r=null!=(o=P[l])?o:P[P.length-1]}null==(t=r)||t.focus()};return a.createElement("div",{className:(0,o.Z)("tabs-container",c)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":d},g)},b.map((function(e){var t=e.value,r=e.label,l=e.attributes;return a.createElement("li",(0,n.Z)({role:"tab",tabIndex:C===t?0:-1,"aria-selected":C===t,key:t,ref:function(e){return P.push(e)},onKeyDown:D,onFocus:M,onClick:M},l,{className:(0,o.Z)("tabs__item",p,null==l?void 0:l.className,{"tabs__item--active":C===t})}),null!=r?r:t)}))),l?(0,a.cloneElement)(v.filter((function(e){return e.props.value===C}))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},v.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==C})}))))}function h(e){var t=(0,l.Z)();return a.createElement(d,(0,n.Z)({key:String(t)},e))}},10901:function(e,t,r){r.r(t),r.d(t,{assets:function(){return d},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return u},metadata:function(){return p},toc:function(){return h}});var n=r(87462),a=r(63366),o=(r(67294),r(3905)),l=r(65488),s=r(85162),i=["components"],u={title:"User Preferences",weight:7012,aliases:["/rancher/v2.x/en/user-settings/preferences/"]},c=void 0,p={unversionedId:"reference-guides/user-settings/user-preferences",id:"version-2.5/reference-guides/user-settings/user-preferences",title:"User Preferences",description:"Each user can choose preferences to personalize their Rancher experience. To change preference settings, open the User Settings menu and then select Preferences.",source:"@site/versioned_docs/version-2.5/reference-guides/user-settings/user-preferences.md",sourceDirName:"reference-guides/user-settings",slug:"/reference-guides/user-settings/user-preferences",permalink:"/zh/v2.5/reference-guides/user-settings/user-preferences",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.5/reference-guides/user-settings/user-preferences.md",tags:[],version:"2.5",lastUpdatedAt:1663691987,formattedLastUpdatedAt:"2022/9/20",frontMatter:{title:"User Preferences",weight:7012,aliases:["/rancher/v2.x/en/user-settings/preferences/"]},sidebar:"tutorialSidebar",previous:{title:"Managing Cloud Credentials",permalink:"/zh/v2.5/reference-guides/user-settings/manage-cloud-credentials"},next:{title:"CLI with Rancher",permalink:"/zh/v2.5/pages-for-subheaders/cli-with-rancher"}},d={},h=[{value:"Theme",id:"theme",level:2},{value:"My Account",id:"my-account",level:2},{value:"Table Row per Page",id:"table-row-per-page",level:2},{value:"Theme",id:"theme-1",level:2},{value:"Login Landing Page",id:"login-landing-page",level:2},{value:"Date Format",id:"date-format",level:2},{value:"Time Format",id:"time-format",level:2},{value:"Table Row per Page",id:"table-row-per-page-1",level:2},{value:"YAML Editor Key Mapping",id:"yaml-editor-key-mapping",level:2},{value:"Enable Developer Tools &amp; Features",id:"enable-developer-tools--features",level:2},{value:"Hide All Type Description Boxes",id:"hide-all-type-description-boxes",level:2},{value:"Helm Charts",id:"helm-charts",level:2}],f={toc:h};function m(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Each user can choose preferences to personalize their Rancher experience. To change preference settings, open the ",(0,o.kt)("strong",{parentName:"p"},"User Settings")," menu and then select ",(0,o.kt)("strong",{parentName:"p"},"Preferences"),"."),(0,o.kt)("p",null,"The preferences available will differ depending on whether the ",(0,o.kt)("strong",{parentName:"p"},"User Settings")," menu was accessed while on the Cluster Manager UI or the Cluster Explorer UI."),(0,o.kt)(l.Z,{mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"Cluster Manager",mdxType:"TabItem"},(0,o.kt)("h2",{id:"theme"},"Theme"),(0,o.kt)("p",null,"Choose your background color for the Rancher UI. If you choose ",(0,o.kt)("strong",{parentName:"p"},"Auto"),", the background color changes from light to dark at 6 PM, and then changes back at 6 AM."),(0,o.kt)("h2",{id:"my-account"},"My Account"),(0,o.kt)("p",null,"This section displays the ",(0,o.kt)("strong",{parentName:"p"},"Name")," (your display name) and ",(0,o.kt)("strong",{parentName:"p"},"Username")," (your login) used for your session. To change your login's current password, click the ",(0,o.kt)("strong",{parentName:"p"},"Change Password")," button."),(0,o.kt)("h2",{id:"table-row-per-page"},"Table Row per Page"),(0,o.kt)("p",null,"On pages that display system objects like clusters or deployments in a table, you can set the number of objects that display on the page before you must paginate. The default setting is ",(0,o.kt)("inlineCode",{parentName:"p"},"50"),".")),(0,o.kt)(s.Z,{value:"Cluster Explorer",mdxType:"TabItem"},(0,o.kt)("h2",{id:"theme-1"},"Theme"),(0,o.kt)("p",null,"Choose your background color for the Rancher UI. If you choose ",(0,o.kt)("strong",{parentName:"p"},"Auto"),", the background color changes from light to dark at 6 PM, and then changes back at 6 AM."),(0,o.kt)("h2",{id:"login-landing-page"},"Login Landing Page"),(0,o.kt)("p",null,"Choose the default page to display after logging in."),(0,o.kt)("h2",{id:"date-format"},"Date Format"),(0,o.kt)("p",null,"Choose your preferred format to display dates. By default, dates are displayed in the form ",(0,o.kt)("inlineCode",{parentName:"p"},"Wed, Jun 9 2021"),"."),(0,o.kt)("h2",{id:"time-format"},"Time Format"),(0,o.kt)("p",null,"Choose your preferred format to display time. By default, the 12-hour format is used."),(0,o.kt)("h2",{id:"table-row-per-page-1"},"Table Row per Page"),(0,o.kt)("p",null,"On pages that display system objects like clusters or deployments in a table, you can set the number of objects that display on the page before you must paginate. The default setting is ",(0,o.kt)("inlineCode",{parentName:"p"},"50"),"."),(0,o.kt)("h2",{id:"yaml-editor-key-mapping"},"YAML Editor Key Mapping"),(0,o.kt)("p",null,"Choose the editor used when editing YAML configurations. When Emacs or Vim is chosen, the editor's shortcut commands can also be used."),(0,o.kt)("h2",{id:"enable-developer-tools--features"},"Enable Developer Tools & Features"),(0,o.kt)("p",null,"Enables developer tools and features to be used."),(0,o.kt)("h2",{id:"hide-all-type-description-boxes"},"Hide All Type Description Boxes"),(0,o.kt)("p",null,"Hides all description boxes."),(0,o.kt)("h2",{id:"helm-charts"},"Helm Charts"),(0,o.kt)("p",null,'When deploying applications from the "Apps & Marketplace", choose whether to show only released versions of the Helm chart or to include prerelease versions as well.'))))}m.isMDXComponent=!0}}]);