"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[55845],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return f}});var r=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var p=r.createContext({}),c=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},s=function(e){var n=c(e.components);return r.createElement(p.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=c(t),f=i,d=m["".concat(p,".").concat(f)]||m[f]||u[f]||o;return t?r.createElement(d,a(a({ref:n},s),{},{components:t})):r.createElement(d,a({ref:n},s))}));function f(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=m;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var c=2;c<o;c++)a[c]=t[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},84274:function(e,n,t){t.r(n),t.d(n,{assets:function(){return s},contentTitle:function(){return p},default:function(){return f},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return u}});var r=t(87462),i=t(63366),o=(t(67294),t(3905)),a=["components"],l={title:"Example YAML File",weight:501},p=void 0,c={unversionedId:"reference-guides/pipelines/example-yaml",id:"reference-guides/pipelines/example-yaml",title:"Example YAML File",description:"Pipelines can be configured either through the UI or using a yaml file in the repository, i.e. .rancher-pipeline.yml or .rancher-pipeline.yaml.",source:"@site/docs/reference-guides/pipelines/example-yaml.md",sourceDirName:"reference-guides/pipelines",slug:"/reference-guides/pipelines/example-yaml",permalink:"/reference-guides/pipelines/example-yaml",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/reference-guides/pipelines/example-yaml.md",tags:[],version:"current",lastUpdatedAt:1663691987,formattedLastUpdatedAt:"9/20/2022",frontMatter:{title:"Example YAML File",weight:501},sidebar:"tutorialSidebar",previous:{title:"Example Repositories",permalink:"/reference-guides/pipelines/example-repositories"},next:{title:"Security",permalink:"/pages-for-subheaders/rancher-security"}},s={},u=[],m={toc:u};function f(e){var n=e.components,t=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Pipelines can be configured either through the UI or using a yaml file in the repository, i.e. ",(0,o.kt)("inlineCode",{parentName:"p"},".rancher-pipeline.yml")," or ",(0,o.kt)("inlineCode",{parentName:"p"},".rancher-pipeline.yaml"),"."),(0,o.kt)("p",null,"In the ",(0,o.kt)("a",{parentName:"p",href:"/reference-guides/pipelines/pipeline-configuration"},"pipeline configuration reference"),", we provide examples of how to configure each feature using the Rancher UI or using YAML configuration."),(0,o.kt)("p",null,"Below is a full example ",(0,o.kt)("inlineCode",{parentName:"p"},"rancher-pipeline.yml")," for those who want to jump right in."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'# example\nstages:\n  - name: Build something\n    # Conditions for stages\n    when:\n      branch: master\n      event: [ push, pull_request ]\n    # Multiple steps run concurrently\n    steps:\n    - runScriptConfig:\n        image: busybox\n        shellScript: echo ${FIRST_KEY} && echo ${ALIAS_ENV}\n      # Set environment variables in container for the step\n      env:\n        FIRST_KEY: VALUE\n        SECOND_KEY: VALUE2\n      # Set environment variables from project secrets\n      envFrom:\n      - sourceName: my-secret\n        sourceKey: secret-key\n        targetKey: ALIAS_ENV\n    - runScriptConfig:\n        image: busybox\n        shellScript: date -R\n      # Conditions for steps\n      when:\n        branch: [ master, dev ]\n        event: push\n  - name: Publish my image\n    steps:\n    - publishImageConfig:\n        dockerfilePath: ./Dockerfile\n        buildContext: .\n        tag: rancher/rancher:v2.0.0\n        # Optionally push to remote registry\n        pushRemote: true\n        registry: reg.example.com\n  - name: Deploy some workloads\n    steps:\n    - applyYamlConfig:\n        path: ./deployment.yaml\n# branch conditions for the pipeline\nbranch:\n  include: [ master, feature/*]\n  exclude: [ dev ]\n# timeout in minutes\ntimeout: 30\nnotification:\n  recipients:\n  - # Recipient\n    recipient: "#mychannel"\n    # ID of Notifier\n    notifier: "c-wdcsr:n-c9pg7"\n  - recipient: "test@example.com"\n    notifier: "c-wdcsr:n-lkrhd"\n  # Select which statuses you want the notification to be sent  \n  condition: ["Failed", "Success", "Changed"]\n  # Ability to override the default message (Optional)\n  message: "my-message"\n')))}f.isMDXComponent=!0}}]);