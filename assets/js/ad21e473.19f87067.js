(self.webpackChunksap_cloud_sdk_documentation=self.webpackChunksap_cloud_sdk_documentation||[]).push([[6715],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return d},kt:function(){return m}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=u(n),m=o,h=p["".concat(s,".").concat(m)]||p[m]||c[m]||i;return n?a.createElement(h,r(r({ref:t},d),{},{components:n})):a.createElement(h,r({ref:t},d))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,r[1]=l;for(var u=2;u<i;u++)r[u]=n[u];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},7045:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return r},metadata:function(){return l},toc:function(){return s},default:function(){return d}});var a=n(2122),o=n(9756),i=(n(7294),n(3905)),r={id:"extension-model-sap-cloud-sdk-for-javascript-typescript",title:"Extension Model",sidebar_label:"Extension Model",description:"The SAP Cloud SDK collaboration model for developing extension",keywords:["sap","cloud","sdk","cloud native","cloud sdk","sap cloud sdk","extension"]},l={unversionedId:"js/extension-model-sap-cloud-sdk-for-javascript-typescript",id:"js/extension-model-sap-cloud-sdk-for-javascript-typescript",isDocsHomePage:!1,title:"Extension Model",description:"The SAP Cloud SDK collaboration model for developing extension",source:"@site/docs/js/extension-model.mdx",sourceDirName:"js",slug:"/js/extension-model-sap-cloud-sdk-for-javascript-typescript",permalink:"/cloud-sdk/docs/js/extension-model-sap-cloud-sdk-for-javascript-typescript",editUrl:"https://github.com/SAP/cloud-sdk/edit/main/docs/js/extension-model.mdx",version:"current",lastUpdatedBy:"Emdee89",lastUpdatedAt:1623069121,formattedLastUpdatedAt:"6/7/2021",sidebar_label:"Extension Model",frontMatter:{id:"extension-model-sap-cloud-sdk-for-javascript-typescript",title:"Extension Model",sidebar_label:"Extension Model",description:"The SAP Cloud SDK collaboration model for developing extension",keywords:["sap","cloud","sdk","cloud native","cloud sdk","sap cloud sdk","extension"]}},s=[{value:"Introduction",id:"introduction",children:[]},{value:"Roles",id:"roles",children:[{value:"Stakeholders and Contact Points",id:"stakeholders-and-contact-points",children:[]}]},{value:"Process Outline",id:"process-outline",children:[]},{value:"Development Guidelines",id:"development-guidelines",children:[{value:"Contribution Programming Language",id:"contribution-programming-language",children:[]},{value:"API Alignment",id:"api-alignment",children:[]},{value:"Repository",id:"repository",children:[]},{value:"Introducing Dependencies",id:"introducing-dependencies",children:[]},{value:"Coding Convention",id:"coding-convention",children:[]},{value:"Pull Requests",id:"pull-requests",children:[]},{value:"Branching Strategy",id:"branching-strategy",children:[]}]},{value:"Documentation",id:"documentation",children:[{value:"Documentation Portal",id:"documentation-portal",children:[]},{value:"Generated API Documentation",id:"generated-api-documentation",children:[]},{value:"README",id:"readme",children:[]}]},{value:"Releases",id:"releases",children:[{value:"Release Process",id:"release-process",children:[]},{value:"License",id:"license",children:[]}]},{value:"Support",id:"support",children:[]},{value:"Maintenance",id:"maintenance",children:[]}],u={toc:s};function d(e){var t=e.components,n=(0,o.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"introduction"},"Introduction"),(0,i.kt)("p",null,"SAP Cloud SDK for JavaScript welcomes extensions that bring value to SAP Cloud SDK users by simplifying and/or improving cloud application development within the SAP ecosystem.\nThe contributed feature or API library becomes an extension of SAP Cloud SDK and is released under the SAP Cloud SDK umbrella into the ",(0,i.kt)("inlineCode",{parentName:"p"},"@sap-cloud-sdk")," scope in ",(0,i.kt)("a",{parentName:"p",href:"https://www.npmjs.com/"},"npmjs.com"),"."),(0,i.kt)("p",null,"The core modules of the SAP Cloud SDK for JavaScript are released under the Apache 2.0 open source license.\nSAP Cloud SDK extensions should also be open source with Apache 2.0.\nIf this is impossible, e.g. For legal reasons, licensing has to be clarified in person."),(0,i.kt)("h2",{id:"roles"},"Roles"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"SAP Cloud SDK team")," - development team and Product Owner responsible for maintaining, developing, and releasing SAP Cloud SDK for JavaScript."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Contribution team")," - development team responsible for developing and contributing a feature or an API library.")),(0,i.kt)("h3",{id:"stakeholders-and-contact-points"},"Stakeholders and Contact Points"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"SAP Cloud SDK Team")," assigns two main stakeholders as contact points for the contribution process."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Product owner")," for organizational topics, priorities, and practicalities"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Developer")," for engineering onboarding, alignment, and consulting"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Contribution team")," assigns at least one contact point with an engineering background for regular collaboration and synchronization.")),(0,i.kt)("p",null,"Other stakeholders and/or contact points could be assigned if deemed necessary."),(0,i.kt)("h2",{id:"process-outline"},"Process Outline"),(0,i.kt)("p",null,"Below are generic steps for a successful contribution.\nThe process can be adopted for the needs of a particular contribution."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Initial alignment and approvals"),(0,i.kt)("li",{parentName:"ul"},"Plan contribution collaboration."),(0,i.kt)("li",{parentName:"ul"},"Prepare and configure required assets (repositories, configuration, pipelines, etc). The SAP Cloud SDK provides templates for those assets."),(0,i.kt)("li",{parentName:"ul"},"Onboarding session with SAP Cloud SDK team.\nGet to ",(0,i.kt)("inlineCode",{parentName:"li"},"Hello World!")),(0,i.kt)("li",{parentName:"ul"},"Start of development by the contribution team"),(0,i.kt)("li",{parentName:"ul"},"SAP Cloud SDK Team provides ongoing consulting"),(0,i.kt)("li",{parentName:"ul"},"Regular syncs on development and organizational topics"),(0,i.kt)("li",{parentName:"ul"},"Successful proof-of-concept"),(0,i.kt)("li",{parentName:"ul"},"Iterative development process with SAP Cloud SDK team contributing to PR reviews"),(0,i.kt)("li",{parentName:"ul"},'Releasing the contribution as "Beta"'),(0,i.kt)("li",{parentName:"ul"},"Iterative development.\nStabilizing the API."),(0,i.kt)("li",{parentName:"ul"},'Release the contribution with "General Availability" (GA)'),(0,i.kt)("li",{parentName:"ul"},"Keep functional scope up to date with customer requirements"),(0,i.kt)("li",{parentName:"ul"},"Maintenance and support of the contribution by ",(0,i.kt)("strong",{parentName:"li"},"Contribution Team")," or their successors")),(0,i.kt)("h2",{id:"development-guidelines"},"Development Guidelines"),(0,i.kt)("p",null,"This section establishes best engineering practices for a contributing team."),(0,i.kt)("h3",{id:"contribution-programming-language"},"Contribution Programming Language"),(0,i.kt)("p",null,"The contribution should happen in TypeScript and endorse type-safety whenever possible."),(0,i.kt)("h3",{id:"api-alignment"},"API Alignment"),(0,i.kt)("p",null,"To maintain a consistent API strategy, contribution, and SAP Cloud SDK teams align on the API.\nFinal approval is on the SAP Cloud SDK team."),(0,i.kt)("h3",{id:"repository"},"Repository"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The repository is created on GitHub under SAP Organization by the contribution team"),(0,i.kt)("li",{parentName:"ul"},"SAP Cloud SDK and contribution team co-own the repository and have full access rights to it"),(0,i.kt)("li",{parentName:"ul"},"SAP Cloud SDK team provides a repository structure and initial content as needed.\nThis helps the contribution team to kick-start their pipeline."),(0,i.kt)("li",{parentName:"ul"},"SAP Cloud SDK team can audit repository settings and require reasonable updates to the configuration")),(0,i.kt)("h3",{id:"introducing-dependencies"},"Introducing Dependencies"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Dependency audit should happen as a part of PR review"),(0,i.kt)("li",{parentName:"ul"},"SAP Cloud SDK provides a guide on dependency choices to the contributing team")),(0,i.kt)("h3",{id:"coding-convention"},"Coding Convention"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Contribution team should use coding conventions of the SAP Cloud SDK unless it's explicitly approved to be otherwise"),(0,i.kt)("li",{parentName:"ul"},"Most of the coding convention rules should be enforced by automated code checkers and linters like ESLint and Prettier",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"The SAP Cloud SDK provides ",(0,i.kt)("a",{parentName:"li",href:"/cloud-sdk/docs/js/features/eslint-configuration"},"a shared ESLint configuration")," with our recommended rules"))),(0,i.kt)("li",{parentName:"ul"},"Enforcement happens via continuous integration pipeline"),(0,i.kt)("li",{parentName:"ul"},"SAP Cloud SDK team provides guidelines on coding conventions that can't be automatically enforced")),(0,i.kt)("h3",{id:"pull-requests"},"Pull Requests"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Pull request should contain some logical and complete pile of work"),(0,i.kt)("li",{parentName:"ul"},"Pull request should be ",(0,i.kt)("strong",{parentName:"li"},"small")," for easy review"),(0,i.kt)("li",{parentName:"ul"},"Preferably Pull request should contain a tangible incremental value"),(0,i.kt)("li",{parentName:"ul"},"Pull request need to be reviewed by at least one of the SAP Cloud SDK team members")),(0,i.kt)("h3",{id:"branching-strategy"},"Branching Strategy"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("inlineCode",{parentName:"li"},"main")," branch always has to be ",(0,i.kt)("strong",{parentName:"li"},"release ready"),".\nIn other words: up to date, tested, and documented.")),(0,i.kt)("h2",{id:"documentation"},"Documentation"),(0,i.kt)("p",null,"SAP Cloud SDK for JavaScript has two types of documentation:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Documentation portal"),(0,i.kt)("li",{parentName:"ul"},"Generated API documentation")),(0,i.kt)("h3",{id:"documentation-portal"},"Documentation Portal"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"After reaching ",(0,i.kt)("inlineCode",{parentName:"li"},"Beta"),", features or API libraries have to be documented by the contribution team on SAP Cloud SDK's documentation portal"),(0,i.kt)("li",{parentName:"ul"},"Documentation has to be kept up to date by the contribution team")),(0,i.kt)("h3",{id:"generated-api-documentation"},"Generated API Documentation"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"API documentation has to be generated"),(0,i.kt)("li",{parentName:"ul"},"SAP Cloud SDK team provides means to generate API documentation on the available codebase")),(0,i.kt)("h3",{id:"readme"},"README"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Contribution team maintains ",(0,i.kt)("inlineCode",{parentName:"li"},"README")," on the contribution repository according to development needs")),(0,i.kt)("h2",{id:"releases"},"Releases"),(0,i.kt)("h3",{id:"release-process"},"Release Process"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Every library released with SAP Cloud SDK should use ",(0,i.kt)("a",{parentName:"li",href:"https://semver.org/"},"semantic versioning")),(0,i.kt)("li",{parentName:"ul"},"Breaking API changes have to be avoided."),(0,i.kt)("li",{parentName:"ul"},"If a breaking change is introduced, the old API must be marked deprecated instead of being removed.\nA grace period of 6 months to be observed before removal can be considered."),(0,i.kt)("li",{parentName:"ul"},"The contribution team has to set on a regular release cycle.\nSAP Cloud SDK uses a biweekly release cycle."),(0,i.kt)("li",{parentName:"ul"},"All the new features have to be released as ",(0,i.kt)("inlineCode",{parentName:"li"},"Beta")," first.\n",(0,i.kt)("inlineCode",{parentName:"li"},"General availability")," release is triggered when API is stabilized and no breaking changes are planned."),(0,i.kt)("li",{parentName:"ul"},"If a new module is to be released, its naming has to be aligned with the SAP Cloud SDK team"),(0,i.kt)("li",{parentName:"ul"},"Practicalities of releasing npm module into SAP Cloud SDK's namespace are provided by SAP Cloud SDK team"),(0,i.kt)("li",{parentName:"ul"},"Release change-log has to be maintained by the contribution team")),(0,i.kt)("h3",{id:"license"},"License"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Open-source modules of SAP Cloud SDK for Java are licensed under Apache 2.0"),(0,i.kt)("li",{parentName:"ul"},"The contribution must have the same license applied"),(0,i.kt)("li",{parentName:"ul"},"Other cases have to be explicitly discussed")),(0,i.kt)("h2",{id:"support"},"Support"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"General support provided by both SAP Cloud SDK and contribution teams."),(0,i.kt)("li",{parentName:"ul"},"Bug-fixing and specific support related to the functional scope of the contributed library is done by the contribution team"),(0,i.kt)("li",{parentName:"ul"},"Contribution team should be deemed responsible to observe reasonable support SLA",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Initial reply within 2 days"),(0,i.kt)("li",{parentName:"ul"},"Critical bug fixing - 1 week"),(0,i.kt)("li",{parentName:"ul"},"Non-critical bugs - 2 weeks")))),(0,i.kt)("h2",{id:"maintenance"},"Maintenance"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Maintenance should be on the contributing team or its successor unless agreed otherwise.")))}d.isMDXComponent=!0}}]);