(self.webpackChunksap_cloud_sdk_documentation=self.webpackChunksap_cloud_sdk_documentation||[]).push([[6069],{3905:function(e,t,o){"use strict";o.d(t,{Zo:function(){return d},kt:function(){return f}});var r=o(7294);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function n(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?n(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):n(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,r,a=function(e,t){if(null==e)return{};var o,r,a={},n=Object.keys(e);for(r=0;r<n.length;r++)o=n[r],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)o=n[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},d=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var o=e.components,a=e.mdxType,n=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=u(o),f=a,m=p["".concat(s,".").concat(f)]||p[f]||c[f]||n;return o?r.createElement(m,i(i({ref:t},d),{},{components:o})):r.createElement(m,i({ref:t},d))}));function f(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=o.length,i=new Array(n);i[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<n;u++)i[u]=o[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,o)}p.displayName="MDXCreateElement"},3919:function(e,t,o){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!r(e)}o.d(t,{b:function(){return r},Z:function(){return a}})},4996:function(e,t,o){"use strict";o.d(t,{C:function(){return n},Z:function(){return i}});var r=o(2263),a=o(3919);function n(){var e=(0,r.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,o=void 0===t?"/":t,n=e.url;return{withBaseUrl:function(e,t){return function(e,t,o,r){var n=void 0===r?{}:r,i=n.forcePrependBaseUrl,l=void 0!==i&&i,s=n.absolute,u=void 0!==s&&s;if(!o)return o;if(o.startsWith("#"))return o;if((0,a.b)(o))return o;if(l)return t+o;var d=o.startsWith(t)?o:t+o.replace(/^\//,"");return u?e+d:d}(n,o,e,t)}}}function i(e,t){return void 0===t&&(t={}),(0,n().withBaseUrl)(e,t)}},2763:function(e,t,o){"use strict";o.r(t),o.d(t,{frontMatter:function(){return i},metadata:function(){return l},toc:function(){return s},default:function(){return d}});var r=o(2122),a=o(9756),n=(o(7294),o(3905)),i=(o(4996),{id:"overview-cloud-sdk",title:"About the SAP Cloud SDK",hide_title:!1,hide_table_of_contents:!1,sidebar_label:"About the SAP Cloud SDK",description:"SAP Cloud SDK is the simplest and fastest way to extend SAP services and applications in the cloud.",keywords:["sap","cloud","sdk","cloud native","cloud sdk","sap cloud sdk"],image:null}),l={unversionedId:"overview/overview-cloud-sdk",id:"overview/overview-cloud-sdk",isDocsHomePage:!1,title:"About the SAP Cloud SDK",description:"SAP Cloud SDK is the simplest and fastest way to extend SAP services and applications in the cloud.",source:"@site/docs/overview/about.mdx",sourceDirName:"overview",slug:"/overview/overview-cloud-sdk",permalink:"/cloud-sdk/docs/overview/overview-cloud-sdk",editUrl:"https://github.com/SAP/cloud-sdk/edit/main/docs/overview/about.mdx",version:"current",lastUpdatedBy:"dependabot[bot]",lastUpdatedAt:1620832831,formattedLastUpdatedAt:"5/12/2021",sidebar_label:"About the SAP Cloud SDK",frontMatter:{id:"overview-cloud-sdk",title:"About the SAP Cloud SDK",hide_title:!1,hide_table_of_contents:!1,sidebar_label:"About the SAP Cloud SDK",description:"SAP Cloud SDK is the simplest and fastest way to extend SAP services and applications in the cloud.",keywords:["sap","cloud","sdk","cloud native","cloud sdk","sap cloud sdk"],image:null},sidebar:"someSidebar",next:{title:"Feature Matrix",permalink:"/cloud-sdk/docs/overview/cloud-sdk-feature-matrix"}},s=[{value:"Introduction",id:"introduction",children:[{value:"Benefits &amp; Capabilities",id:"benefits--capabilities",children:[]},{value:"Well-Integrated With the SAP Cloud Development Ecosystem",id:"well-integrated-with-the-sap-cloud-development-ecosystem",children:[]},{value:"Your Own SAP Cloud SDK",id:"your-own-sap-cloud-sdk",children:[]},{value:"Flavors of SAP Cloud SDK",id:"flavors-of-sap-cloud-sdk",children:[]},{value:"Open Source",id:"open-source",children:[]},{value:"Feedback",id:"feedback",children:[]}]}],u={toc:s};function d(e){var t=e.components,o=(0,a.Z)(e,["components"]);return(0,n.kt)("wrapper",(0,r.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"introduction"},"Introduction"),(0,n.kt)("p",null,"The SAP Cloud SDK is a versatile set of libraries and tools for developers to build applications in a cloud-native way and host them on SAP Business Technology Platform or other runtimes."),(0,n.kt)("h3",{id:"benefits--capabilities"},"Benefits & Capabilities"),(0,n.kt)("p",null,"The SAP Cloud SDK is available for ",(0,n.kt)("a",{parentName:"p",href:"/cloud-sdk/docs/java/getting-started"},"Java")," and ",(0,n.kt)("a",{parentName:"p",href:"/cloud-sdk/docs/js/getting-started"},"JavaScript / TypeScript"),", providing the following benefits and capabilities:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"A set of pre-generated type-safe client libraries for various SAP published OData and REST services for convenient consumption and bullet-proof developer experience."),(0,n.kt)("li",{parentName:"ul"},"Robust connectivity abstractions for SAP Business Technology Platform for convenient management of destinations, authentication, multitenancy, CSRF, e-tags, and more."),(0,n.kt)("li",{parentName:"ul"},"A tailor-made type-safe client code generator for OData services that seamlessly integrate with other SAP Cloud SDK value-adds."),(0,n.kt)("li",{parentName:"ul"},"A type-safe client code generator for REST services that wraps the open-source generator with custom code templates to make it deeply integrated with other SAP Cloud SDK features."),(0,n.kt)("li",{parentName:"ul"},"An easy-to-use CLI with code scaffolding capabilities."),(0,n.kt)("li",{parentName:"ul"},"A ",(0,n.kt)("a",{parentName:"li",href:"/cloud-sdk/docs/related-projects/project-piper"},"pre-configured CI/CD pipeline")," to set you on the best DevOps practices from the get-go."),(0,n.kt)("li",{parentName:"ul"},"Modular design and high-level of extensibility"),(0,n.kt)("li",{parentName:"ul"},"Advanced cloud-native development patterns like resilience, caching, inherent multitenancy, etc."),(0,n.kt)("li",{parentName:"ul"},"Support in ",(0,n.kt)("a",{parentName:"li",href:"https://developers.sap.com/tutorials/appstudio-onboarding.html"},"Business Application Studio")),(0,n.kt)("li",{parentName:"ul"},"First-class documentation and ",(0,n.kt)("a",{parentName:"li",href:"/cloud-sdk/docs/overview/get-support"},"support"))),(0,n.kt)("h3",{id:"well-integrated-with-the-sap-cloud-development-ecosystem"},"Well-Integrated With the SAP Cloud Development Ecosystem"),(0,n.kt)("p",null,"The SAP Cloud SDK is well-integrated with other SAP products and services like:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/cloud-sdk/docs/related-projects/cloud-application-model"},"Cloud Application Programming model (CAP)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.sap.com/products/s4hana-erp.html"},"SAP S/4HANA Cloud and On-premise")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://api.sap.com/"},"SAP API Business Hub")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.sap.com/products/human-resources-hcm.html"},"SAP SuccessFactors")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.sap.com/products/sales-cloud.html"},"SAP Sales Cloud")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.fieldglass.com/"},"SAP Fieldglass")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.concur.com/"},"SAP Concur")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.ariba.com/"},"SAP Ariba")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.sap.com/products/cloud-platform.html"},"SAP Business Technology Platform")),(0,n.kt)("li",{parentName:"ul"},"Deploy with Confidence")),(0,n.kt)("p",null,"In the next chapter, you'll learn how to generate a type-safe client for any SAP service and start using the benefits of the SAP Cloud SDK."),(0,n.kt)("h3",{id:"your-own-sap-cloud-sdk"},"Your Own SAP Cloud SDK"),(0,n.kt)("p",null,"Thanks to code generator capabilities, the SAP Cloud SDK is compatible with almost any other product that you want to integrate with."),(0,n.kt)("p",null,"It gives a lot of advantages and instant access to the SAP Cloud ecosystem for developers.\nThe SAP Cloud SDK helps you to integrate your apps or build extensions for SAP products."),(0,n.kt)("p",null,"For more details, check out our ",(0,n.kt)("a",{parentName:"p",href:"/cloud-sdk/docs/overview/cloud-sdk-feature-matrix"},"feature matrix")," and ",(0,n.kt)("a",{parentName:"p",href:"/cloud-sdk/docs/overview/getting-started"},"getting started")," guides for the SAP Cloud SDK."),(0,n.kt)("h3",{id:"flavors-of-sap-cloud-sdk"},"Flavors of SAP Cloud SDK"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"../java/overview-cloud-sdk-for-java"},"SAP Cloud SDK for Java")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"../js/overview-cloud-sdk-for-javascript"},"SAP Cloud SDK for JavaScript"))),(0,n.kt)("h3",{id:"open-source"},"Open Source"),(0,n.kt)("p",null,"The SAP Cloud SDK actively works in the direction of open-sourcing most of its components.\nWe engage in the open source community by endorsing open standards and technologies to simplify the developer's life and stay ahead of the curve.\nThe SAP Cloud SDK for ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/SAP/cloud-sdk-js"},"JavaScript / TypeScript")," is already open-source.\nFeel free to look at our source code, integrate the SAP Cloud SDK into your apps, or contribute improvements to the SAP Cloud SDK."),(0,n.kt)("p",null,"We actively develop and maintain every component of the SAP Cloud SDK to ensure the highest quality and seamless integration with other SAP solutions."),(0,n.kt)("h3",{id:"feedback"},"Feedback"),(0,n.kt)("p",null,"We are happy to hear your feedback about the SAP Cloud SDK.\nYou can write to us at ",(0,n.kt)("a",{parentName:"p",href:"mailto:cloudsdk@sap.com"},"cloudsdk@sap.com")," or submit an issue to this ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/SAP/cloud-sdk/issues/new?assignees=&labels=feedback&template=feedback.md&title="},"repository"),"."))}d.isMDXComponent=!0}}]);