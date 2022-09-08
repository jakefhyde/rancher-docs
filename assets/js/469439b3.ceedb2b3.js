"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[83075],{3905:function(e,a,t){t.d(a,{Zo:function(){return p},kt:function(){return c}});var n=t(67294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function s(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=n.createContext({}),d=function(e){var a=n.useContext(l),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},p=function(e){var a=d(e.components);return n.createElement(l.Provider,{value:a},e.children)},u={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},h=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),h=d(t),c=r,m=h["".concat(l,".").concat(c)]||h[c]||u[c]||o;return t?n.createElement(m,i(i({ref:a},p),{},{components:t})):n.createElement(m,i({ref:a},p))}));function c(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=h;var s={};for(var l in a)hasOwnProperty.call(a,l)&&(s[l]=a[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var d=2;d<o;d++)i[d]=t[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}h.displayName="MDXCreateElement"},85162:function(e,a,t){t.d(a,{Z:function(){return i}});var n=t(67294),r=t(86010),o="tabItem_Ymn6";function i(e){var a=e.children,t=e.hidden,i=e.className;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,i),hidden:t},a)}},65488:function(e,a,t){t.d(a,{Z:function(){return c}});var n=t(87462),r=t(67294),o=t(86010),i=t(72389),s=t(67392),l=t(7094),d=t(12466),p="tabList__CuJ",u="tabItem_LNqP";function h(e){var a,t,i=e.lazy,h=e.block,c=e.defaultValue,m=e.values,g=e.groupId,f=e.className,b=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),k=null!=m?m:b.map((function(e){var a=e.props;return{value:a.value,label:a.label,attributes:a.attributes}})),v=(0,s.l)(k,(function(e,a){return e.value===a.value}));if(v.length>0)throw new Error('Docusaurus error: Duplicate values "'+v.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var N=null===c?c:null!=(a=null!=c?c:null==(t=b.find((function(e){return e.props.default})))?void 0:t.props.value)?a:b[0].props.value;if(null!==N&&!k.some((function(e){return e.value===N})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+N+'" but none of its children has the corresponding value. Available values are: '+k.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var y=(0,l.U)(),w=y.tabGroupChoices,C=y.setTabGroupChoices,O=(0,r.useState)(N),T=O[0],G=O[1],M=[],x=(0,d.o5)().blockElementScrollPositionUntilNextRender;if(null!=g){var D=w[g];null!=D&&D!==T&&k.some((function(e){return e.value===D}))&&G(D)}var j=function(e){var a=e.currentTarget,t=M.indexOf(a),n=k[t].value;n!==T&&(x(a),G(n),null!=g&&C(g,String(n)))},E=function(e){var a,t=null;switch(e.key){case"ArrowRight":var n,r=M.indexOf(e.currentTarget)+1;t=null!=(n=M[r])?n:M[0];break;case"ArrowLeft":var o,i=M.indexOf(e.currentTarget)-1;t=null!=(o=M[i])?o:M[M.length-1]}null==(a=t)||a.focus()};return r.createElement("div",{className:(0,o.Z)("tabs-container",p)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":h},f)},k.map((function(e){var a=e.value,t=e.label,i=e.attributes;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:T===a?0:-1,"aria-selected":T===a,key:a,ref:function(e){return M.push(e)},onKeyDown:E,onFocus:j,onClick:j},i,{className:(0,o.Z)("tabs__item",u,null==i?void 0:i.className,{"tabs__item--active":T===a})}),null!=t?t:a)}))),i?(0,r.cloneElement)(b.filter((function(e){return e.props.value===T}))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},b.map((function(e,a){return(0,r.cloneElement)(e,{key:a,hidden:e.props.value!==T})}))))}function c(e){var a=(0,i.Z)();return r.createElement(h,(0,n.Z)({key:String(a)},e))}},4766:function(e,a,t){t.r(a),t.d(a,{assets:function(){return h},contentTitle:function(){return p},default:function(){return g},frontMatter:function(){return d},metadata:function(){return u},toc:function(){return c}});var n=t(87462),r=t(63366),o=(t(67294),t(3905)),i=t(65488),s=t(85162),l=["components"],d={title:"Persistent Grafana Dashboards",weight:6,aliases:["/rancher/v2.5/en/monitoring-alerting/persist-grafana","/rancher/v2.x/en/monitoring-alerting/v2.5/persist-grafana/"]},p=void 0,u={unversionedId:"how-to-guides/advanced-user-guides/monitoring-alerting-guides/create-persistent-grafana-dashboard",id:"version-2.5/how-to-guides/advanced-user-guides/monitoring-alerting-guides/create-persistent-grafana-dashboard",title:"Persistent Grafana Dashboards",description:"To allow the Grafana dashboard to persist after the Grafana instance restarts, add the dashboard configuration JSON into a ConfigMap. ConfigMaps also allow the dashboards to be deployed with a GitOps or CD based approach. This allows the dashboard to be put under version control.",source:"@site/versioned_docs/version-2.5/how-to-guides/advanced-user-guides/monitoring-alerting-guides/create-persistent-grafana-dashboard.md",sourceDirName:"how-to-guides/advanced-user-guides/monitoring-alerting-guides",slug:"/how-to-guides/advanced-user-guides/monitoring-alerting-guides/create-persistent-grafana-dashboard",permalink:"/v2.5/how-to-guides/advanced-user-guides/monitoring-alerting-guides/create-persistent-grafana-dashboard",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.5/how-to-guides/advanced-user-guides/monitoring-alerting-guides/create-persistent-grafana-dashboard.md",tags:[],version:"2.5",lastUpdatedAt:1662676534,formattedLastUpdatedAt:"9/8/2022",frontMatter:{title:"Persistent Grafana Dashboards",weight:6,aliases:["/rancher/v2.5/en/monitoring-alerting/persist-grafana","/rancher/v2.x/en/monitoring-alerting/v2.5/persist-grafana/"]},sidebar:"tutorialSidebar",previous:{title:"Customizing Grafana Dashboards",permalink:"/v2.5/how-to-guides/advanced-user-guides/monitoring-alerting-guides/customize-grafana-dashboard"},next:{title:"Debugging High Memory Usage",permalink:"/v2.5/how-to-guides/advanced-user-guides/monitoring-alerting-guides/debug-high-memory-usage"}},h={},c=[{value:"1. Get the JSON model of the dashboard that you want to persist",id:"1-get-the-json-model-of-the-dashboard-that-you-want-to-persist",level:3},{value:"2. Create a ConfigMap using the Grafana JSON model",id:"2-create-a-configmap-using-the-grafana-json-model",level:3},{value:"Configuring Namespaces for the Grafana Dashboard ConfigMap",id:"configuring-namespaces-for-the-grafana-dashboard-configmap",level:3}],m={toc:c};function g(e){var a=e.components,t=(0,r.Z)(e,l);return(0,o.kt)("wrapper",(0,n.Z)({},m,t,{components:a,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"To allow the Grafana dashboard to persist after the Grafana instance restarts, add the dashboard configuration JSON into a ConfigMap. ConfigMaps also allow the dashboards to be deployed with a GitOps or CD based approach. This allows the dashboard to be put under version control."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#creating-a-persistent-grafana-dashboard"},"Creating a Persistent Grafana Dashboard")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#known-issues"},"Known Issues"))),(0,o.kt)("h1",{id:"creating-a-persistent-grafana-dashboard"},"Creating a Persistent Grafana Dashboard"),(0,o.kt)(i.Z,{mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"Rancher v2.5.8+",mdxType:"TabItem"},(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Prerequisites:")),(0,o.kt)("ul",{parentName:"blockquote"},(0,o.kt)("li",{parentName:"ul"},"The monitoring application needs to be installed."),(0,o.kt)("li",{parentName:"ul"},"To create the persistent dashboard, you must have at least the ",(0,o.kt)("strong",{parentName:"li"},"Manage Config Maps")," Rancher RBAC permissions assigned to you in the project or namespace that contains the Grafana Dashboards. This correlates to the ",(0,o.kt)("inlineCode",{parentName:"li"},"monitoring-dashboard-edit")," or ",(0,o.kt)("inlineCode",{parentName:"li"},"monitoring-dashboard-admin")," Kubernetes native RBAC Roles exposed by the Monitoring chart."),(0,o.kt)("li",{parentName:"ul"},"To see the links to the external monitoring UIs, including Grafana dashboards, you will need at least a ",(0,o.kt)("a",{parentName:"li",href:"/v2.5/explanations/integrations-in-rancher/monitoring-and-alerting/rbac-for-monitoring#users-with-rancher-cluster-manager-based-permissions"},"project-member role.")))),(0,o.kt)("h3",{id:"1-get-the-json-model-of-the-dashboard-that-you-want-to-persist"},"1. Get the JSON model of the dashboard that you want to persist"),(0,o.kt)("p",null,"To create a persistent dashboard, you will need to get the JSON model of the dashboard you want to persist. You can use a premade dashboard or build your own."),(0,o.kt)("p",null,"To use a premade dashboard, go to ",(0,o.kt)("a",{parentName:"p",href:"https://grafana.com/grafana/dashboards"},"https://grafana.com/grafana/dashboards"),", open up its detail page, and click on the ",(0,o.kt)("strong",{parentName:"p"},"Download JSON")," button to get the JSON model for the next step."),(0,o.kt)("p",null,"To use your own dashboard:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click on the link to open Grafana. From the ",(0,o.kt)("strong",{parentName:"p"},"Cluster Explorer,")," click ",(0,o.kt)("strong",{parentName:"p"},"Cluster Explorer > Monitoring."))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Log in to Grafana. Note: The default Admin username and password for the Grafana instance is ",(0,o.kt)("inlineCode",{parentName:"p"},"admin/prom-operator"),". Alternative credentials can also be supplied on deploying or upgrading the chart."),(0,o.kt)("blockquote",{parentName:"li"},(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Note:")," Regardless of who has the password, in order to access the Grafana instance, you still need at least the ",(0,o.kt)("b",null,"Manage Services")," or ",(0,o.kt)("b",null,"View Monitoring")," permissions in the project that Rancher Monitoring is deployed into. Alternative credentials can also be supplied on deploying or upgrading the chart."))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Create a dashboard using Grafana's UI. Once complete, go to the dashboard's settings by clicking on the gear icon in the top navigation menu. In the left navigation menu, click ",(0,o.kt)("strong",{parentName:"p"},"JSON Model."))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Copy the JSON data structure that appears."))),(0,o.kt)("h3",{id:"2-create-a-configmap-using-the-grafana-json-model"},"2. Create a ConfigMap using the Grafana JSON model"),(0,o.kt)("p",null,"Create a ConfigMap in the namespace that contains your Grafana Dashboards (e.g. cattle-dashboards by default)."),(0,o.kt)("p",null,"The ConfigMap should look like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: v1\nkind: ConfigMap\nmetadata:\n  labels:\n    grafana_dashboard: "1"\n  name: <dashboard-name>\n  namespace: cattle-dashboards # Change if using a non-default namespace\ndata:\n  <dashboard-name>.json: |-\n    <copied-json>\n')),(0,o.kt)("p",null,"By default, Grafana is configured to watch all ConfigMaps with the ",(0,o.kt)("inlineCode",{parentName:"p"},"grafana_dashboard")," label within the ",(0,o.kt)("inlineCode",{parentName:"p"},"cattle-dashboards")," namespace."),(0,o.kt)("p",null,"To specify that you would like Grafana to watch for ConfigMaps across all namespaces, refer to ",(0,o.kt)("a",{parentName:"p",href:"#configuring-namespaces-for-the-grafana-dashboard-configmap"},"this section.")),(0,o.kt)("p",null,"To create the ConfigMap in the Rancher UI,"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Go to the Cluster Explorer."),(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("strong",{parentName:"li"},"Core > ConfigMaps"),"."),(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("strong",{parentName:"li"},"Create"),"."),(0,o.kt)("li",{parentName:"ol"},"Set up the key-value pairs similar to the example above. When entering the value for ",(0,o.kt)("inlineCode",{parentName:"li"},"<dashboard-name>.json"),", click ",(0,o.kt)("strong",{parentName:"li"},"Read from File")," to upload the JSON data model as the value."),(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("strong",{parentName:"li"},"Create"),".")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Result:")," After the ConfigMap is created, it should show up on the Grafana UI and be persisted even if the Grafana pod is restarted."),(0,o.kt)("p",null,"Dashboards that are persisted using ConfigMaps cannot be deleted or edited from the Grafana UI."),(0,o.kt)("p",null,'If you attempt to delete the dashboard in the Grafana UI, you will see the error message "Dashboard cannot be deleted because it was provisioned." To delete the dashboard, you will need to delete the ConfigMap.'),(0,o.kt)("h3",{id:"configuring-namespaces-for-the-grafana-dashboard-configmap"},"Configuring Namespaces for the Grafana Dashboard ConfigMap"),(0,o.kt)("p",null,"To specify that you would like Grafana to watch for ConfigMaps across all namespaces, set this value in the ",(0,o.kt)("inlineCode",{parentName:"p"},"rancher-monitoring")," Helm chart:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"grafana.sidecar.dashboards.searchNamespace=ALL\n")),(0,o.kt)("p",null,"Note that the RBAC roles exposed by the Monitoring chart to add Grafana Dashboards are still restricted to giving permissions for users to add dashboards in the namespace defined in ",(0,o.kt)("inlineCode",{parentName:"p"},"grafana.dashboards.namespace"),", which defaults to ",(0,o.kt)("inlineCode",{parentName:"p"},"cattle-dashboards"),".")),(0,o.kt)(s.Z,{value:"Rancher before v2.5.8",mdxType:"TabItem"},(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Prerequisites:")),(0,o.kt)("ul",{parentName:"blockquote"},(0,o.kt)("li",{parentName:"ul"},"The monitoring application needs to be installed."),(0,o.kt)("li",{parentName:"ul"},"You must have the cluster-admin ClusterRole permission."))),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Open the Grafana dashboard. From the ",(0,o.kt)("strong",{parentName:"p"},"Cluster Explorer,")," click ",(0,o.kt)("strong",{parentName:"p"},"Cluster Explorer > Monitoring."))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Log in to Grafana. Note: The default Admin username and password for the Grafana instance is ",(0,o.kt)("inlineCode",{parentName:"p"},"admin/prom-operator"),". Alternative credentials can also be supplied on deploying or upgrading the chart."),(0,o.kt)("blockquote",{parentName:"li"},(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Note:")," Regardless of who has the password, cluster administrator permission in Rancher is still required to access the Grafana instance."))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Go to the dashboard that you want to persist. In the top navigation menu, go to the dashboard settings by clicking the gear icon.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"In the left navigation menu, click ",(0,o.kt)("strong",{parentName:"p"},"JSON Model."))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Copy the JSON data structure that appears.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Create a ConfigMap in the ",(0,o.kt)("inlineCode",{parentName:"p"},"cattle-dashboards")," namespace. The ConfigMap needs to have the label ",(0,o.kt)("inlineCode",{parentName:"p"},'grafana_dashboard: "1"'),". Paste the JSON into the ConfigMap in the format shown in the example below:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: v1\nkind: ConfigMap\nmetadata:\n  labels:\n    grafana_dashboard: "1"\n  name: <dashboard-name>\n  namespace: cattle-dashboards\ndata:\n  <dashboard-name>.json: |-\n    <copied-json>\n')))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Result:")," After the ConfigMap is created, it should show up on the Grafana UI and be persisted even if the Grafana pod is restarted."),(0,o.kt)("p",null,'Dashboards that are persisted using ConfigMaps cannot be deleted from the Grafana UI. If you attempt to delete the dashboard in the Grafana UI, you will see the error message "Dashboard cannot be deleted because it was provisioned." To delete the dashboard, you will need to delete the ConfigMap.'),(0,o.kt)("p",null,"To prevent the persistent dashboard from being deleted when Monitoring v2 is uninstalled, add the following annotation to the ",(0,o.kt)("inlineCode",{parentName:"p"},"cattle-dashboards")," namespace:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'helm.sh/resource-policy: "keep"\n')))),(0,o.kt)("h1",{id:"known-issues"},"Known Issues"),(0,o.kt)("p",null,"For users who are using Monitoring V2 v9.4.203 or below, uninstalling the Monitoring chart will delete the ",(0,o.kt)("inlineCode",{parentName:"p"},"cattle-dashboards")," namespace, which will delete all persisted dashboards, unless the namespace is marked with the annotation ",(0,o.kt)("inlineCode",{parentName:"p"},'helm.sh/resource-policy: "keep"'),"."),(0,o.kt)("p",null,"This annotation will be added by default in the new monitoring chart released by Rancher v2.5.8, but it still needs to be manually applied for users of earlier Rancher versions."))}g.isMDXComponent=!0}}]);