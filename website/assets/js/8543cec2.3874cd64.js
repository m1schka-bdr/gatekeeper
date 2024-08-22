"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9137],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return m}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(t),m=a,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||o;return t?r.createElement(f,i(i({ref:n},p),{},{components:t})):r.createElement(f,i({ref:n},p))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=d;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},35105:function(e,n,t){t.r(n),t.d(n,{assets:function(){return p},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return u}});var r=t(87462),a=t(63366),o=(t(67294),t(3905)),i=["components"],s={id:"violations",title:"Handling Constraint Violations"},l=void 0,c={unversionedId:"violations",id:"version-v3.16.x/violations",title:"Handling Constraint Violations",description:"Log denies",source:"@site/versioned_docs/version-v3.16.x/violations.md",sourceDirName:".",slug:"/violations",permalink:"/gatekeeper/website/docs/v3.16.x/violations",draft:!1,editUrl:"https://github.com/open-policy-agent/gatekeeper/edit/master/website/versioned_docs/version-v3.16.x/violations.md",tags:[],version:"v3.16.x",frontMatter:{id:"violations",title:"Handling Constraint Violations"},sidebar:"docs",previous:{title:"Audit",permalink:"/gatekeeper/website/docs/v3.16.x/audit"},next:{title:"Replicating Data",permalink:"/gatekeeper/website/docs/v3.16.x/sync"}},p={},u=[{value:"Log denies",id:"log-denies",level:2},{value:"Dry Run enforcement action",id:"dry-run-enforcement-action",level:2},{value:"Warn enforcement action",id:"warn-enforcement-action",level:2}],d={toc:u};function m(e){var n=e.components,t=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"log-denies"},"Log denies"),(0,o.kt)("p",null,"Set the ",(0,o.kt)("inlineCode",{parentName:"p"},"--log-denies")," flag to log all deny, dryrun and warn failures.\nThis is useful when trying to see what is being denied/fails dry-run and keeping a log to debug cluster problems without having to enable syncing or looking through the status of all constraints."),(0,o.kt)("h2",{id:"dry-run-enforcement-action"},"Dry Run enforcement action"),(0,o.kt)("p",null,"When rolling out new constraints to running clusters, the dry run functionality can be helpful as it enables constraints to be deployed in the cluster without making actual changes. This allows constraints to be tested in a running cluster without enforcing them. Cluster resources that are impacted by the dry run constraint are surfaced as violations in the ",(0,o.kt)("inlineCode",{parentName:"p"},"status")," field of the constraint."),(0,o.kt)("p",null,"To use the dry run feature, add ",(0,o.kt)("inlineCode",{parentName:"p"},"enforcementAction: dryrun")," to the constraint spec to ensure no actual changes are made as a result of the constraint. By default, ",(0,o.kt)("inlineCode",{parentName:"p"},"enforcementAction")," is set to ",(0,o.kt)("inlineCode",{parentName:"p"},"deny")," as the default behavior is to deny admission requests with any violation."),(0,o.kt)("p",null,"For example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: constraints.gatekeeper.sh/v1beta1\nkind: K8sRequiredLabels\nmetadata:\n  name: ns-must-have-gk\nspec:\n  enforcementAction: dryrun\n  match:\n    kinds:\n      - apiGroups: [""]\n        kinds: ["Namespace"]\n  parameters:\n    labels: ["gatekeeper"]\nstatus:\n  auditTimestamp: "2019-08-15T01:46:13Z"\n  enforced: true\n  violations:\n  - enforcementAction: dryrun\n    kind: Namespace\n    message: \'you must provide labels: {"gatekeeper"}\'\n    name: default\n  - enforcementAction: dryrun\n    kind: Namespace\n    message: \'you must provide labels: {"gatekeeper"}\'\n    name: gatekeeper-system\n\n')),(0,o.kt)("h2",{id:"warn-enforcement-action"},"Warn enforcement action"),(0,o.kt)("p",null,"Warn enforcement action offers the same benefits as dry run, such as testing constraints without enforcing them. In addition to this, it will also provide immediate feedback on why that constraint would have been denied. It is available in Gatekeeper v3.4+ with Kubernetes v1.19+."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: constraints.gatekeeper.sh/v1beta1\nkind: K8sAllowedRepos\nmetadata:\n  name: repo-is-openpolicyagent\nspec:\n  enforcementAction: warn\n  match:\n    kinds:\n      - apiGroups: [""]\n        kinds: ["Pod"]\n  parameters:\n    repos:\n      - "openpolicyagent"\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'$ kubectl apply pod.yaml\nWarning: [prod-repo-is-openpolicyagent] container <nginx> has an invalid image repo <nginx>, allowed repos are ["openpolicyagent"]\npod/pause created\n')),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"NOTE: The supported enforcementActions are ","[",(0,o.kt)("inlineCode",{parentName:"p"},"deny"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"dryrun"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"warn"),"]"," for constraints. Update the ",(0,o.kt)("inlineCode",{parentName:"p"},"--disable-enforcementaction-validation=true")," flag if the desire is to disable enforcementAction validation against the list of supported enforcementActions.")))}m.isMDXComponent=!0}}]);