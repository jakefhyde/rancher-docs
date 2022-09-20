"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[49028],{3905:function(e,t,a){a.d(t,{Zo:function(){return d},kt:function(){return m}});var r=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,o=function(e,t){if(null==e)return{};var a,r,o={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,o=e.mdxType,n=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=c(a),m=o,g=u["".concat(s,".").concat(m)]||u[m]||p[m]||n;return a?r.createElement(g,i(i({ref:t},d),{},{components:a})):r.createElement(g,i({ref:t},d))}));function m(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=a.length,i=new Array(n);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<n;c++)i[c]=a[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},73947:function(e,t,a){a.r(t),a.d(t,{assets:function(){return d},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return p}});var r=a(87462),o=a(63366),n=(a(67294),a(3905)),i=["components"],l={title:"Creating Custom Catalogs",weight:200,aliases:["/rancher/v2.0-v2.4/en/tasks/global-configuration/catalog/adding-custom-catalogs/","/rancher/v2.0-v2.4/en/catalog/custom/adding","/rancher/v2.0-v2.4/en/catalog/adding-catalogs","/rancher/v2.0-v2.4/en/catalog/custom/","/rancher/v2.0-v2.4/en/helm-charts/legacy-catalogs/adding-catalogs"]},s=void 0,c={unversionedId:"how-to-guides/new-user-guides/helm-charts-in-rancher/adding-catalogs",id:"version-2.0-2.4/how-to-guides/new-user-guides/helm-charts-in-rancher/adding-catalogs",title:"Creating Custom Catalogs",description:"Custom catalogs can be added into Rancher at a global scope, cluster scope, or project scope.",source:"@site/versioned_docs/version-2.0-2.4/how-to-guides/new-user-guides/helm-charts-in-rancher/adding-catalogs.md",sourceDirName:"how-to-guides/new-user-guides/helm-charts-in-rancher",slug:"/how-to-guides/new-user-guides/helm-charts-in-rancher/adding-catalogs",permalink:"/zh/v2.0-v2.4/how-to-guides/new-user-guides/helm-charts-in-rancher/adding-catalogs",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.0-2.4/how-to-guides/new-user-guides/helm-charts-in-rancher/adding-catalogs.md",tags:[],version:"2.0-2.4",lastUpdatedAt:1663691987,formattedLastUpdatedAt:"2022/9/20",frontMatter:{title:"Creating Custom Catalogs",weight:200,aliases:["/rancher/v2.0-v2.4/en/tasks/global-configuration/catalog/adding-custom-catalogs/","/rancher/v2.0-v2.4/en/catalog/custom/adding","/rancher/v2.0-v2.4/en/catalog/adding-catalogs","/rancher/v2.0-v2.4/en/catalog/custom/","/rancher/v2.0-v2.4/en/helm-charts/legacy-catalogs/adding-catalogs"]},sidebar:"tutorialSidebar",previous:{title:"Enabling and Disabling Built-in Global Catalogs",permalink:"/zh/v2.0-v2.4/how-to-guides/new-user-guides/helm-charts-in-rancher/built-in"},next:{title:"Custom Catalog Configuration Reference",permalink:"/zh/v2.0-v2.4/how-to-guides/new-user-guides/helm-charts-in-rancher/catalog-config"}},d={},p=[{value:"Add Custom Git Repositories",id:"add-custom-git-repositories",level:3},{value:"Add Custom Helm Chart Repositories",id:"add-custom-helm-chart-repositories",level:3},{value:"Add Private Git/Helm Chart Repositories",id:"add-private-githelm-chart-repositories",level:3}],u={toc:p};function m(e){var t=e.components,a=(0,o.Z)(e,i);return(0,n.kt)("wrapper",(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Custom catalogs can be added into Rancher at a global scope, cluster scope, or project scope."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#adding-catalog-repositories"},"Adding catalog repositories"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#add-custom-git-repositories"},"Add custom Git repositories")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#add-custom-helm-chart-repositories"},"Add custom Helm chart repositories")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#add-private-git-helm-chart-repositories"},"Add private Git/Helm chart repositories")))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#adding-global-catalogs"},"Adding global catalogs")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#adding-cluster-level-catalogs"},"Adding cluster level catalogs")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#adding-project-level-catalogs"},"Adding project level catalogs")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#custom-catalog-configuration-reference"},"Custom catalog configuration reference"))),(0,n.kt)("h1",{id:"adding-catalog-repositories"},"Adding Catalog Repositories"),(0,n.kt)("p",null,"Adding a catalog is as simple as adding a catalog name, a URL and a branch name."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Prerequisite:")," An ",(0,n.kt)("a",{parentName:"p",href:"/zh/v2.0-v2.4/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac/global-permissions"},"admin")," of Rancher has the ability to add or remove catalogs globally in Rancher."),(0,n.kt)("h3",{id:"add-custom-git-repositories"},"Add Custom Git Repositories"),(0,n.kt)("p",null,"The Git URL needs to be one that ",(0,n.kt)("inlineCode",{parentName:"p"},"git clone")," ",(0,n.kt)("a",{parentName:"p",href:"https://git-scm.com/docs/git-clone#_git_urls_a_id_urls_a"},"can handle")," and must end in ",(0,n.kt)("inlineCode",{parentName:"p"},".git"),". The branch name must be a branch that is in your catalog URL. If no branch name is provided, it will use the ",(0,n.kt)("inlineCode",{parentName:"p"},"master")," branch by default. Whenever you add a catalog to Rancher, it will be available immediately."),(0,n.kt)("h3",{id:"add-custom-helm-chart-repositories"},"Add Custom Helm Chart Repositories"),(0,n.kt)("p",null,"A Helm chart repository is an HTTP server that houses one or more packaged charts. Any HTTP server that can serve YAML files and tar files and can answer GET requests can be used as a repository server."),(0,n.kt)("p",null,"Helm comes with built-in package server for developer testing (helm serve). The Helm team has tested other servers, including Google Cloud Storage with website mode enabled, S3 with website mode enabled or hosting custom chart repository server using open-source projects like ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/helm/chartmuseum"},"ChartMuseum"),"."),(0,n.kt)("p",null,"In Rancher, you can add the custom Helm chart repository with only a catalog name and the URL address of the chart repository."),(0,n.kt)("h3",{id:"add-private-githelm-chart-repositories"},"Add Private Git/Helm Chart Repositories"),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"Available as of v2.2.0")),(0,n.kt)("p",null,"Private catalog repositories can be added using credentials like Username and Password. You may also want to use the OAuth token if your Git or Helm repository server supports that."),(0,n.kt)("p",null,"For more information on private Git/Helm catalogs, refer to the ",(0,n.kt)("a",{parentName:"p",href:"/zh/v2.0-v2.4/how-to-guides/new-user-guides/helm-charts-in-rancher/catalog-config"},"custom catalog configuration reference.")),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"From the ",(0,n.kt)("strong",{parentName:"p"},"Global")," view, choose ",(0,n.kt)("strong",{parentName:"p"},"Tools > Catalogs")," in the navigation bar. In versions before v2.2.0, you can select ",(0,n.kt)("strong",{parentName:"p"},"Catalogs")," directly in the navigation bar.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Click ",(0,n.kt)("strong",{parentName:"p"},"Add Catalog"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Complete the form and click ",(0,n.kt)("strong",{parentName:"p"},"Create"),"."),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Result:")," Your catalog is added to Rancher."))),(0,n.kt)("h1",{id:"adding-global-catalogs"},"Adding Global Catalogs"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"Prerequisites:")," In order to manage the ",(0,n.kt)("a",{parentName:"p",href:"/zh/v2.0-v2.4/how-to-guides/new-user-guides/helm-charts-in-rancher/built-in"},"built-in catalogs")," or manage global catalogs, you need ",(0,n.kt)("em",{parentName:"p"},"one")," of the following permissions:"),(0,n.kt)("ul",{parentName:"blockquote"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/zh/v2.0-v2.4/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac/global-permissions"},"Administrator Global Permissions")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/zh/v2.0-v2.4/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac/global-permissions#custom-global-permissions"},"Custom Global Permissions")," with the ",(0,n.kt)("a",{parentName:"li",href:"/zh/v2.0-v2.4/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac/global-permissions"},"Manage Catalogs")," role assigned."))),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"From the ",(0,n.kt)("strong",{parentName:"p"},"Global")," view, choose ",(0,n.kt)("strong",{parentName:"p"},"Tools > Catalogs")," in the navigation bar. In versions before v2.2.0, you can select ",(0,n.kt)("strong",{parentName:"p"},"Catalogs")," directly in the navigation bar.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Click ",(0,n.kt)("strong",{parentName:"p"},"Add Catalog"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Complete the form. Select the Helm version that will be used to launch all of the apps in the catalog. For more information about the Helm version, refer to ",(0,n.kt)("a",{parentName:"p",href:"/zh/v2.0-v2.4/pages-for-subheaders/helm-charts-in-rancher#catalog-helm-deployment-versions"},"this section."))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Click ",(0,n.kt)("strong",{parentName:"p"},"Create"),"."),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Result"),": Your custom global catalog is added to Rancher. Once it is in ",(0,n.kt)("inlineCode",{parentName:"p"},"Active")," state, it has completed synchronization and you will be able to start deploying ",(0,n.kt)("a",{parentName:"p",href:"/zh/v2.0-v2.4/how-to-guides/new-user-guides/deploy-apps-across-clusters"},"multi-cluster apps")," or ",(0,n.kt)("a",{parentName:"p",href:"/zh/v2.0-v2.4/how-to-guides/new-user-guides/helm-charts-in-rancher/launching-apps"},"applications in any project")," from this catalog."))),(0,n.kt)("h1",{id:"adding-cluster-level-catalogs"},"Adding Cluster Level Catalogs"),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"Available as of v2.2.0")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"Prerequisites:")," In order to manage cluster scoped catalogs, you need ",(0,n.kt)("em",{parentName:"p"},"one")," of the following permissions:"),(0,n.kt)("ul",{parentName:"blockquote"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/zh/v2.0-v2.4/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac/global-permissions"},"Administrator Global Permissions")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/zh/v2.0-v2.4/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac/cluster-and-project-roles#cluster-roles"},"Cluster Owner Permissions")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/zh/v2.0-v2.4/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac/cluster-and-project-roles#cluster-roles"},"Custom Cluster Permissions")," with the ",(0,n.kt)("a",{parentName:"li",href:"/zh/v2.0-v2.4/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac/cluster-and-project-roles#cluster-role-reference"},"Manage Cluster Catalogs")," role assigned."))),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"From the ",(0,n.kt)("strong",{parentName:"li"},"Global")," view, navigate to your cluster that you want to start adding custom catalogs."),(0,n.kt)("li",{parentName:"ol"},"Choose the ",(0,n.kt)("strong",{parentName:"li"},"Tools > Catalogs")," in the navigation bar."),(0,n.kt)("li",{parentName:"ol"},"Click ",(0,n.kt)("strong",{parentName:"li"},"Add Catalog"),"."),(0,n.kt)("li",{parentName:"ol"},"Complete the form. By default, the form will provide the ability to select ",(0,n.kt)("inlineCode",{parentName:"li"},"Scope")," of the catalog. When you have added a catalog from the ",(0,n.kt)("strong",{parentName:"li"},"Cluster")," scope, it is defaulted to ",(0,n.kt)("inlineCode",{parentName:"li"},"Cluster"),". Select the Helm version that will be used to launch all of the apps in the catalog. For more information about the Helm version, refer to ",(0,n.kt)("a",{parentName:"li",href:"/zh/v2.0-v2.4/pages-for-subheaders/helm-charts-in-rancher#catalog-helm-deployment-versions"},"this section.")),(0,n.kt)("li",{parentName:"ol"},"Click ",(0,n.kt)("strong",{parentName:"li"},"Create"),".")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Result"),": Your custom cluster catalog is added to Rancher. Once it is in ",(0,n.kt)("inlineCode",{parentName:"p"},"Active")," state, it has completed synchronization and you will be able to start deploying  ",(0,n.kt)("a",{parentName:"p",href:"/zh/v2.0-v2.4/pages-for-subheaders/helm-charts-in-rancher"},"applications in any project in that cluster")," from this catalog."),(0,n.kt)("h1",{id:"adding-project-level-catalogs"},"Adding Project Level Catalogs"),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"Available as of v2.2.0")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"Prerequisites:")," In order to manage project scoped catalogs, you need ",(0,n.kt)("em",{parentName:"p"},"one")," of the following permissions:"),(0,n.kt)("ul",{parentName:"blockquote"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/zh/v2.0-v2.4/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac/global-permissions"},"Administrator Global Permissions")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/zh/v2.0-v2.4/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac/cluster-and-project-roles#cluster-roles"},"Cluster Owner Permissions")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/zh/v2.0-v2.4/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac/cluster-and-project-roles#project-roles"},"Project Owner Permissions")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/zh/v2.0-v2.4/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac/cluster-and-project-roles#cluster-roles"},"Custom Project Permissions")," with the ",(0,n.kt)("a",{parentName:"li",href:"/zh/v2.0-v2.4/how-to-guides/advanced-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac/cluster-and-project-roles#project-role-reference"},"Manage Project Catalogs")," role assigned."))),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"From the ",(0,n.kt)("strong",{parentName:"li"},"Global")," view, navigate to your project that you want to start adding custom catalogs."),(0,n.kt)("li",{parentName:"ol"},"Choose the ",(0,n.kt)("strong",{parentName:"li"},"Tools > Catalogs")," in the navigation bar."),(0,n.kt)("li",{parentName:"ol"},"Click ",(0,n.kt)("strong",{parentName:"li"},"Add Catalog"),"."),(0,n.kt)("li",{parentName:"ol"},"Complete the form. By default, the form will provide the ability to select ",(0,n.kt)("inlineCode",{parentName:"li"},"Scope")," of the catalog. When you have added a catalog from the ",(0,n.kt)("strong",{parentName:"li"},"Project")," scope, it is defaulted to ",(0,n.kt)("inlineCode",{parentName:"li"},"Cluster"),". Select the Helm version that will be used to launch all of the apps in the catalog. For more information about the Helm version, refer to ",(0,n.kt)("a",{parentName:"li",href:"/zh/v2.0-v2.4/pages-for-subheaders/helm-charts-in-rancher#catalog-helm-deployment-versions"},"this section.")),(0,n.kt)("li",{parentName:"ol"},"Click ",(0,n.kt)("strong",{parentName:"li"},"Create"),".")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Result"),": Your custom project catalog is added to Rancher. Once it is in ",(0,n.kt)("inlineCode",{parentName:"p"},"Active")," state, it has completed synchronization and you will be able to start deploying  ",(0,n.kt)("a",{parentName:"p",href:"/zh/v2.0-v2.4/pages-for-subheaders/helm-charts-in-rancher"},"applications in that project")," from this catalog."),(0,n.kt)("h1",{id:"custom-catalog-configuration-reference"},"Custom Catalog Configuration Reference"),(0,n.kt)("p",null,"Refer to ",(0,n.kt)("a",{parentName:"p",href:"/zh/v2.0-v2.4/how-to-guides/new-user-guides/helm-charts-in-rancher/catalog-config"},"this page")," more information on configuring custom catalogs."))}m.isMDXComponent=!0}}]);