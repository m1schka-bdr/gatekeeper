"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4177],{3905:function(e,n,a){a.d(n,{Zo:function(){return m},kt:function(){return u}});var t=a(67294);function i(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function o(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function s(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?o(Object(a),!0).forEach((function(n){i(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function l(e,n){if(null==e)return{};var a,t,i=function(e,n){if(null==e)return{};var a,t,i={},o=Object.keys(e);for(t=0;t<o.length;t++)a=o[t],n.indexOf(a)>=0||(i[a]=e[a]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)a=o[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var r=t.createContext({}),p=function(e){var n=t.useContext(r),a=n;return e&&(a="function"==typeof e?e(n):s(s({},n),e)),a},m=function(e){var n=p(e.components);return t.createElement(r.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},c=t.forwardRef((function(e,n){var a=e.components,i=e.mdxType,o=e.originalType,r=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),c=p(a),u=i,g=c["".concat(r,".").concat(u)]||c[u]||d[u]||o;return a?t.createElement(g,s(s({ref:n},m),{},{components:a})):t.createElement(g,s({ref:n},m))}));function u(e,n){var a=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=a.length,s=new Array(o);s[0]=c;var l={};for(var r in n)hasOwnProperty.call(n,r)&&(l[r]=n[r]);l.originalType=e,l.mdxType="string"==typeof e?e:i,s[1]=l;for(var p=2;p<o;p++)s[p]=a[p];return t.createElement.apply(null,s)}return t.createElement.apply(null,a)}c.displayName="MDXCreateElement"},89034:function(e,n,a){a.r(n),a.d(n,{assets:function(){return m},contentTitle:function(){return r},default:function(){return u},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return d}});var t=a(87462),i=a(63366),o=(a(67294),a(3905)),s=["components"],l={id:"mutation",title:"Mutation"},r=void 0,p={unversionedId:"mutation",id:"version-v3.16.x/mutation",title:"Mutation",description:"Feature State: Gatekeeper version v3.10+ (stable)",source:"@site/versioned_docs/version-v3.16.x/mutation.md",sourceDirName:".",slug:"/mutation",permalink:"/gatekeeper/website/docs/v3.16.x/mutation",draft:!1,editUrl:"https://github.com/open-policy-agent/gatekeeper/edit/master/website/versioned_docs/version-v3.16.x/mutation.md",tags:[],version:"v3.16.x",frontMatter:{id:"mutation",title:"Mutation"},sidebar:"docs",previous:{title:"Failing Closed",permalink:"/gatekeeper/website/docs/v3.16.x/failing-closed"},next:{title:"Constraint Templates",permalink:"/gatekeeper/website/docs/v3.16.x/constrainttemplates"}},m={},d=[{value:"Mutation CRDs",id:"mutation-crds",level:2},{value:"Extent of changes",id:"extent-of-changes",level:4},{value:"Intent",id:"intent",level:4},{value:"Assigning values from metadata",id:"assigning-values-from-metadata",level:5},{value:"Conditionals",id:"conditionals",level:5},{value:"AssignMetadata",id:"assignmetadata",level:3},{value:"ModifySet",id:"modifyset",level:3},{value:"AssignImage",id:"assignimage",level:3},{value:"Mutation Annotations",id:"mutation-annotations",level:3},{value:"Examples",id:"examples",level:2},{value:"Adding an annotation",id:"adding-an-annotation",level:3},{value:"Setting security context of a specific container in a Pod in a namespace to be non-privileged",id:"setting-security-context-of-a-specific-container-in-a-pod-in-a-namespace-to-be-non-privileged",level:3},{value:"Setting imagePullPolicy of all containers to Always in all namespaces except namespace <code>system</code>",id:"setting-imagepullpolicy-of-all-containers-to-always-in-all-namespaces-except-namespace-system",level:4},{value:"Adding a <code>network</code> sidecar to a Pod",id:"adding-a-network-sidecar-to-a-pod",level:3},{value:"Adding dnsPolicy and dnsConfig to a Pod",id:"adding-dnspolicy-and-dnsconfig-to-a-pod",level:3},{value:"Setting a Pod&#39;s container image to use a specific digest:",id:"setting-a-pods-container-image-to-use-a-specific-digest",level:3},{value:"External Data",id:"external-data",level:3}],c={toc:d};function u(e){var n=e.components,a=(0,i.Z)(e,s);return(0,o.kt)("wrapper",(0,t.Z)({},c,a,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Feature State"),": Gatekeeper version v3.10+ (stable)"),(0,o.kt)("p",null,"The mutation feature allows Gatekeeper modify Kubernetes resources at request time based on customizable mutation policies."),(0,o.kt)("h2",{id:"mutation-crds"},"Mutation CRDs"),(0,o.kt)("p",null,"Mutation policies are defined using mutation-specific CRDs, called ",(0,o.kt)("strong",{parentName:"p"},"mutators"),":"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"AssignMetadata - defines changes to the metadata section of a resource"),(0,o.kt)("li",{parentName:"ul"},"Assign - any change outside the metadata section"),(0,o.kt)("li",{parentName:"ul"},"ModifySet - adds or removes entries from a list, such as the arguments to a container"),(0,o.kt)("li",{parentName:"ul"},"AssignImage - defines changes to the components of an image string")),(0,o.kt)("p",null,"The rules for mutating metadata are more strict than for mutating the rest of the resource. The differences are described in more detail below."),(0,o.kt)("p",null,"Here is an example of a simple AssignMetadata CRD:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: mutations.gatekeeper.sh/v1\nkind: AssignMetadata\nmetadata:\n  name: demo-annotation-owner\nspec:\n  match:\n    scope: Namespaced\n    name: nginx-*\n    kinds:\n    - apiGroups: ["*"]\n      kinds: ["Pod"]\n  location: "metadata.annotations.owner"\n  parameters:\n    assign:\n      value:  "admin"\n')),(0,o.kt)("p",null,"Each mutation CRD can be divided into 3 distinct sections:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"extent of changes - what is to be modified (kinds, namespaces, ...)"),(0,o.kt)("li",{parentName:"ul"},"intent - the path and value of the modification"),(0,o.kt)("li",{parentName:"ul"},"conditional - conditions under which the mutation will be applied")),(0,o.kt)("h4",{id:"extent-of-changes"},"Extent of changes"),(0,o.kt)("p",null,"The extent of changes section describes which resources will be mutated.\nIt allows selecting resources to be mutated using the same match criteria\nas constraints."),(0,o.kt)("p",null,"An example of the extent of changes section."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'applyTo:\n- groups: [""]\n  kinds: ["Pod"]\n  versions: ["v1"]\nmatch:\n  scope: Namespaced | Cluster\n  kinds:\n  - apiGroups: []\n    kinds: []\n  labelSelector: []\n  namespaces: []\n  namespaceSelector: []\n  excludedNamespaces: []\n')),(0,o.kt)("p",null,"Note that the ",(0,o.kt)("inlineCode",{parentName:"p"},"applyTo")," field is required for all mutators except ",(0,o.kt)("inlineCode",{parentName:"p"},"AssignMetadata"),", which does not have the ",(0,o.kt)("inlineCode",{parentName:"p"},"applyTo")," field.\n",(0,o.kt)("inlineCode",{parentName:"p"},"applyTo")," allows Gatekeeper to understand the schema of the objects being modified, so that it can detect when two mutators disagree as\nto a kind's schema, which can cause non-convergent mutations. Also, the ",(0,o.kt)("inlineCode",{parentName:"p"},"applyTo")," section does not accept globs."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"match")," section is common to all mutators. It supports the following match criteria:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"scope - the scope (Namespaced | Cluster) of the mutated resource"),(0,o.kt)("li",{parentName:"ul"},"kinds - the resource kind, any of the elements listed"),(0,o.kt)("li",{parentName:"ul"},"labelSelector - filters resources by resource labels listed"),(0,o.kt)("li",{parentName:"ul"},"namespaces - list of allowed namespaces, only resources in listed namespaces will be mutated"),(0,o.kt)("li",{parentName:"ul"},"namespaceSelector - filters resources by namespace selector"),(0,o.kt)("li",{parentName:"ul"},"excludedNamespaces - list of excluded namespaces, resources in listed namespaces will not be mutated"),(0,o.kt)("li",{parentName:"ul"},"name - the name of an object.  If defined, it matches against objects with the specified name.  Name also supports a prefix-based glob.  For example, ",(0,o.kt)("inlineCode",{parentName:"li"},"name: pod-*")," matches both ",(0,o.kt)("inlineCode",{parentName:"li"},"pod-a")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"pod-b"),".")),(0,o.kt)("p",null,"Note that any empty/undefined match criteria are inclusive: they match any object."),(0,o.kt)("h4",{id:"intent"},"Intent"),(0,o.kt)("p",null,"This specifies what should be changed in the resource."),(0,o.kt)("p",null,"An example of the section is shown below:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'location: "spec.containers[name: foo].imagePullPolicy"\nparameters:\n  assign:\n    value: "Always"\n')),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"location")," element specifies the path to be modified.\nThe ",(0,o.kt)("inlineCode",{parentName:"p"},"parameters.assign.value")," element specifies the value to be set for the element specified in ",(0,o.kt)("inlineCode",{parentName:"p"},"location"),". Note that the value can either be a simple string or a composite value."),(0,o.kt)("p",null,"An example of a composite value:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'location: "spec.containers[name: networking]"\nparameters:\n  assign:\n    value:\n      name: "networking"\n      imagePullPolicy: Always\n\n')),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"location")," element can specify either a simple subelement or an element in a list.\nFor example the location ",(0,o.kt)("inlineCode",{parentName:"p"},"spec.containers[name:foo].imagePullPolicy")," would be parsed as follows:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"*spec"),".containers","[name: foo]",".imagePullPolicy* - the spec element"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("em",{parentName:"li"},"spec.",(0,o.kt)("strong",{parentName:"em"},"containers","[name: foo]"),".imagePullPolicy")," - container subelement of spec. The container element is a list. Out of the list chosen, an element with the ",(0,o.kt)("inlineCode",{parentName:"li"},"name")," element having the value ",(0,o.kt)("inlineCode",{parentName:"li"},"foo"),"."),(0,o.kt)("li",{parentName:"ul"},"*spec.containers","[name: foo]",".",(0,o.kt)("strong",{parentName:"li"},"imagePullPolicy*")," - in the element from the list chosen in the previous step the element ",(0,o.kt)("inlineCode",{parentName:"li"},"imagePullPolicy")," is chosen")),(0,o.kt)("p",null,"The yaml illustrating the above ",(0,o.kt)("inlineCode",{parentName:"p"},"location"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"spec:\n  containers:\n  - name: foo\n    imagePullPolicy:\n")),(0,o.kt)("p",null,"Wildcards can be used for list element values: ",(0,o.kt)("inlineCode",{parentName:"p"},"spec.containers[name: *].imagePullPolicy")),(0,o.kt)("h5",{id:"assigning-values-from-metadata"},"Assigning values from metadata"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"This section does not apply to ModifySet mutators")),(0,o.kt)("p",null,"Sometimes it's useful to assign a field's value from metadata. For instance, injecting a deployment's name into its pod template's labels\nto use affinity/anti-affinity rules to ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/open-policy-agent/feedback/discussions/15"},"keep Pods from the same deployment on different nodes"),"."),(0,o.kt)("p",null,"Assign and AssignMetadata can do this via the ",(0,o.kt)("inlineCode",{parentName:"p"},"fromMetadata")," field. Here is an example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'apiVersion: mutations.gatekeeper.sh/v1\nkind: AssignMetadata\nmetadata:\n  name: demo-annotation-owner\nspec:\n  location: "metadata.labels.namespace"\n  parameters:\n    assign:\n      fromMetadata:\n        field: namespace\n')),(0,o.kt)("p",null,"Valid values for ",(0,o.kt)("inlineCode",{parentName:"p"},"spec.parameters.assign.fromMetadata.field")," are ",(0,o.kt)("inlineCode",{parentName:"p"},"namespace")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"name"),". They will inject the namespace's name and the object's name, respectively."),(0,o.kt)("h5",{id:"conditionals"},"Conditionals"),(0,o.kt)("p",null,"The conditions for updating the resource."),(0,o.kt)("p",null,'Mutation has path tests, which make it so the resource will only be mutated if the specified path exists/does not exist.\nThis can be useful for things like setting a default value if a field is undeclared, or for avoiding creating a field\nwhen a parent is missing, such as accidentally creating an empty sidecar named "foo" in the example below:'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'parameters:\n  pathTests:\n  - subPath: "spec.containers[name: foo]"\n    condition: MustExist\n  - subPath: "spec.containers[name: foo].securityContext.capabilities"\n    condition: MustNotExist\n')),(0,o.kt)("h3",{id:"assignmetadata"},"AssignMetadata"),(0,o.kt)("p",null,"AssignMetadata is a mutator that modifies the metadata section of a resource. Note that the metadata of a resource is a very sensitive piece of data,\nand certain mutations could result in unintended consequences. An example of this could be changing the name or namespace of a resource.\nThe AssignMetadata changes have therefore been limited to only the labels and annotations. Furthermore, it is currently only allowed to add a label or annotation.\nPre-existing labels and annotations cannot be modified."),(0,o.kt)("p",null," An example of an AssignMetadata adding a label ",(0,o.kt)("inlineCode",{parentName:"p"},"owner")," set to ",(0,o.kt)("inlineCode",{parentName:"p"},"admin"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: mutations.gatekeeper.sh/v1\nkind: AssignMetadata\nmetadata:\n  name: demo-annotation-owner\nspec:\n  match:\n    scope: Namespaced\n  location: "metadata.labels.owner"\n  parameters:\n    assign:\n      value: "admin"\n')),(0,o.kt)("h3",{id:"modifyset"},"ModifySet"),(0,o.kt)("p",null,"ModifySet is a mutator that allows for the adding and removal of items from a list as if that list were a set.\nNew values are appended to the end of a list."),(0,o.kt)("p",null,"For example, the following mutator removes an ",(0,o.kt)("inlineCode",{parentName:"p"},"--alsologtostderr")," argument from all containers in a pod:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: mutations.gatekeeper.sh/v1\nkind: ModifySet\nmetadata:\n  name: remove-err-logging\nspec:\n  applyTo:\n  - groups: [""]\n    kinds: ["Pod"]\n    versions: ["v1"]\n  location: "spec.containers[name: *].args"\n  parameters:\n    operation: prune\n    values:\n      fromList:\n        - --alsologtostderr\n')),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"spec.parameters.values.fromList")," holds the list of values that will be added or removed."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"operation")," can be ",(0,o.kt)("inlineCode",{parentName:"li"},"merge")," to insert values into the list if missing, or ",(0,o.kt)("inlineCode",{parentName:"li"},"prune")," to remove values from the list. ",(0,o.kt)("inlineCode",{parentName:"li"},"merge")," is default.")),(0,o.kt)("h3",{id:"assignimage"},"AssignImage"),(0,o.kt)("p",null,"AssignImage is a mutator specifically for changing the components of an image\nstring. Suppose you have an image like ",(0,o.kt)("inlineCode",{parentName:"p"},"my.registry.io:2000/repo/app:latest"),".\n",(0,o.kt)("inlineCode",{parentName:"p"},"my.registry.io:2000")," would be the domain, ",(0,o.kt)("inlineCode",{parentName:"p"},"repo/app")," would be the path, and\n",(0,o.kt)("inlineCode",{parentName:"p"},":latest")," would be the tag. The domain, path, and tag of an image can be changed\nseparately or in conjunction."),(0,o.kt)("p",null,"For example, to change the whole image to ",(0,o.kt)("inlineCode",{parentName:"p"},"my.registry.io/repo/app@sha256:abcde67890123456789abc345678901a"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: mutations.gatekeeper.sh/v1alpha1\nkind: AssignImage\nmetadata:\n  name: assign-container-image\nspec:\n  applyTo:\n  - groups: [ "" ]\n    kinds: [ "Pod" ]\n    versions: [ "v1" ]\n  location: "spec.containers[name:*].image"\n  parameters:\n    assignDomain: "my.registry.io"\n    assignPath: "repo/app"\n    assignTag: "@sha256:abcde67890123456789abc345678901a"\n  match:\n    source: "All"\n    scope: Namespaced\n    kinds:\n    - apiGroups: [ "*" ]\n      kinds: [ "Pod" ]\n')),(0,o.kt)("p",null,"Only one of ",(0,o.kt)("inlineCode",{parentName:"p"},"[assignDomain, assignPath, assignTag]")," is required. Note that ",(0,o.kt)("inlineCode",{parentName:"p"},"assignTag"),"\nmust start with ",(0,o.kt)("inlineCode",{parentName:"p"},":")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"@"),". Also, if ",(0,o.kt)("inlineCode",{parentName:"p"},"assignPath")," is set to a value which could potentially\nbe interpreted as a domain, such as ",(0,o.kt)("inlineCode",{parentName:"p"},"my.repo.lib/app"),", then ",(0,o.kt)("inlineCode",{parentName:"p"},"assignDomain")," must\nalso be specified."),(0,o.kt)("h3",{id:"mutation-annotations"},"Mutation Annotations"),(0,o.kt)("p",null,"You can have two recording annotations applied at mutation time by enabling the ",(0,o.kt)("inlineCode",{parentName:"p"},"--mutation-annotations")," flag. More details can be found on the\n",(0,o.kt)("a",{parentName:"p",href:"/gatekeeper/website/docs/v3.16.x/customize-startup"},"customize startup docs page"),"."),(0,o.kt)("h2",{id:"examples"},"Examples"),(0,o.kt)("h3",{id:"adding-an-annotation"},"Adding an annotation"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: mutations.gatekeeper.sh/v1\nkind: AssignMetadata\nmetadata:\n  name: demo-annotation-owner\nspec:\n  match:\n    scope: Namespaced\n  location: "metadata.annotations.owner"\n  parameters:\n    assign:\n      value: "admin"\n')),(0,o.kt)("h3",{id:"setting-security-context-of-a-specific-container-in-a-pod-in-a-namespace-to-be-non-privileged"},"Setting security context of a specific container in a Pod in a namespace to be non-privileged"),(0,o.kt)("p",null,"Set the security context of container named ",(0,o.kt)("inlineCode",{parentName:"p"},"foo")," in a Pod in namespace ",(0,o.kt)("inlineCode",{parentName:"p"},"bar")," to be non-privileged"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: mutations.gatekeeper.sh/v1\nkind: Assign\nmetadata:\n  name: demo-privileged\nspec:\n  applyTo:\n  - groups: [""]\n    kinds: ["Pod"]\n    versions: ["v1"]\n  match:\n    scope: Namespaced\n    kinds:\n    - apiGroups: ["*"]\n      kinds: ["Pod"]\n    namespaces: ["bar"]\n  location: "spec.containers[name:foo].securityContext.privileged"\n  parameters:\n    assign:\n      value: false\n')),(0,o.kt)("h4",{id:"setting-imagepullpolicy-of-all-containers-to-always-in-all-namespaces-except-namespace-system"},"Setting imagePullPolicy of all containers to Always in all namespaces except namespace ",(0,o.kt)("inlineCode",{parentName:"h4"},"system")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: mutations.gatekeeper.sh/v1\nkind: Assign\nmetadata:\n  name: demo-image-pull-policy\nspec:\n  applyTo:\n  - groups: [""]\n    kinds: ["Pod"]\n    versions: ["v1"]\n  match:\n    scope: Namespaced\n    kinds:\n    - apiGroups: ["*"]\n      kinds: ["Pod"]\n    excludedNamespaces: ["system"]\n  location: "spec.containers[name:*].imagePullPolicy"\n  parameters:\n    assign:\n      value: Always\n')),(0,o.kt)("h3",{id:"adding-a-network-sidecar-to-a-pod"},"Adding a ",(0,o.kt)("inlineCode",{parentName:"h3"},"network")," sidecar to a Pod"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: mutations.gatekeeper.sh/v1\nkind: Assign\nmetadata:\n  name: demo-sidecar\nspec:\n  applyTo:\n  - groups: [""]\n    kinds: ["Pod"]\n    versions: ["v1"]\n  match:\n    scope: Namespaced\n    kinds:\n    - apiGroups: ["*"]\n      kinds: ["Pod"]\n  location: "spec.containers[name:networking]"\n  parameters:\n    assign:\n      value:\n        name: "networking"\n        imagePullPolicy: Always\n        image: quay.io/foo/bar:latest\n        command: ["/bin/bash", "-c", "sleep INF"]\n\n')),(0,o.kt)("h3",{id:"adding-dnspolicy-and-dnsconfig-to-a-pod"},"Adding dnsPolicy and dnsConfig to a Pod"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: mutations.gatekeeper.sh/v1\nkind: Assign\nmetadata:\n  name: demo-dns-policy\nspec:\n  applyTo:\n  - groups: [""]\n    kinds: ["Pod"]\n    versions: ["v1"]\n  match:\n    scope: Namespaced\n    kinds:\n    - apiGroups: ["*"]\n      kinds: ["Pod"]\n  location: "spec.dnsPolicy"\n  parameters:\n    assign:\n      value: None\n---\napiVersion: mutations.gatekeeper.sh/v1\nkind: Assign\nmetadata:\n  name: demo-dns-config\nspec:\n  applyTo:\n  - groups: [""]\n    kinds: ["Pod"]\n    versions: ["v1"]\n  match:\n    scope: Namespaced\n    kinds:\n    - apiGroups: ["*"]\n      kinds: ["Pod"]\n  location: "spec.dnsConfig"\n  parameters:\n    assign:\n      value:\n        nameservers:\n        - 1.2.3.4\n')),(0,o.kt)("h3",{id:"setting-a-pods-container-image-to-use-a-specific-digest"},"Setting a Pod's container image to use a specific digest:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: mutations.gatekeeper.sh/v1alpha1\nkind: AssignImage\nmetadata:\n  name: add-nginx-digest\nspec:\n  applyTo:\n  - groups: [ "" ]\n    kinds: [ "Pod" ]\n    versions: [ "v1" ]\n  location: "spec.containers[name:nginx].image"\n  parameters:\n    assignTag: "@sha256:abcde67890123456789abc345678901a"\n  match:\n    source: "All"\n    scope: Namespaced\n    kinds:\n    - apiGroups: [ "*" ]\n      kinds: [ "Pod" ]\n')),(0,o.kt)("h3",{id:"external-data"},"External Data"),(0,o.kt)("p",null,"See ",(0,o.kt)("a",{parentName:"p",href:"/gatekeeper/website/docs/v3.16.x/externaldata#external-data-for-gatekeeper-mutating-webhook"},"External Data For Gatekeeper Mutating Webhook"),"."))}u.isMDXComponent=!0}}]);