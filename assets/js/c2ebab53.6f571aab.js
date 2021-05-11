(self.webpackChunksap_cloud_sdk_documentation=self.webpackChunksap_cloud_sdk_documentation||[]).push([[7942],{3905:function(e,t,a){"use strict";a.d(t,{Zo:function(){return d},kt:function(){return f}});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),c=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=c(a),f=n,v=u["".concat(l,".").concat(f)]||u[f]||p[f]||o;return a?r.createElement(v,i(i({ref:t},d),{},{components:a})):r.createElement(v,i({ref:t},d))}));function f(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var c=2;c<o;c++)i[c]=a[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},6580:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return i},metadata:function(){return s},toc:function(){return l},default:function(){return d}});var r=a(2122),n=a(9756),o=(a(7294),a(3905)),i={id:"overview",title:"OData",sidebar_label:"Overview",description:"This article provides an overview of how the SAP Cloud SDK for JavaScript supports connecting to OData services.",keywords:["sap","cloud","sdk","odata","JavaScript","TypeScript","client","generate"]},s={unversionedId:"js/features/odata/overview",id:"js/features/odata/overview",isDocsHomePage:!1,title:"OData",description:"This article provides an overview of how the SAP Cloud SDK for JavaScript supports connecting to OData services.",source:"@site/docs/js/features/odata/overview.mdx",sourceDirName:"js/features/odata",slug:"/js/features/odata/overview",permalink:"/cloud-sdk/docs/js/features/odata/overview",editUrl:"https://github.com/SAP/cloud-sdk/edit/main/docs/js/features/odata/overview.mdx",version:"current",lastUpdatedBy:"cloud-sdk-js",lastUpdatedAt:1620730468,formattedLastUpdatedAt:"5/11/2021",sidebar_label:"Overview",frontMatter:{id:"overview",title:"OData",sidebar_label:"Overview",description:"This article provides an overview of how the SAP Cloud SDK for JavaScript supports connecting to OData services.",keywords:["sap","cloud","sdk","odata","JavaScript","TypeScript","client","generate"]},sidebar:"someSidebar",previous:{title:"Getting Started",permalink:"/cloud-sdk/docs/js/getting-started"},next:{title:"Generate an OData client for JavaScript",permalink:"/cloud-sdk/docs/js/features/odata/generate-odata-client"}},l=[{value:"What OData Protocol Versions Are Supported?",id:"what-odata-protocol-versions-are-supported",children:[]},{value:"What Is OData?",id:"what-is-odata",children:[]},{value:"What Does the SAP Cloud SDK Offer?",id:"what-does-the-sap-cloud-sdk-offer",children:[{value:"Type-Safe OData Client",id:"type-safe-odata-client",children:[]},{value:"Code Generator",id:"code-generator",children:[]},{value:"Connectivity",id:"connectivity",children:[]}]}],c={toc:l};function d(e){var t=e.components,a=(0,n.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"what-odata-protocol-versions-are-supported"},"What OData Protocol Versions Are Supported?"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"OData protocol version"),(0,o.kt)("th",{parentName:"tr",align:null},"SAP Cloud SDK for JavaScript"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"use-odata-v2-type-safe-client-for-javascript-typescript"},"OData v2")),(0,o.kt)("td",{parentName:"tr",align:null},"\u2713")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"use-odata-v4-type-safe-client-for-javascript-typescript"},"OData v4")),(0,o.kt)("td",{parentName:"tr",align:null},"\u2713")))),(0,o.kt)("h2",{id:"what-is-odata"},"What Is OData?"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.odata.org/"},"OData")," is an open standard for building and consuming RESTful APIs.\nIt defines a query language to send and retrieve data via HTTP and to perform operations on data."),(0,o.kt)("p",null,"There are two widely used versions of the protocol: OData v2 and OData v4.\nThe latter comes with more and improved functionality.\nFull details on the standards are to be found in the ",(0,o.kt)("a",{parentName:"p",href:"https://www.odata.org/documentation/"},"documentation"),"."),(0,o.kt)("h2",{id:"what-does-the-sap-cloud-sdk-offer"},"What Does the SAP Cloud SDK Offer?"),(0,o.kt)("p",null,"The SAP Cloud SDK simplifies the consumption of OData services through the following features:"),(0,o.kt)("h3",{id:"type-safe-odata-client"},"Type-Safe OData Client"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"We provide a type-safe OData client to build and execute OData requests in JavaScript and TypeScript."),(0,o.kt)("li",{parentName:"ul"},"We ship pre-generated OData clients for the SAP S/4HANA OData services.\nThey are also referred to as the ",(0,o.kt)("em",{parentName:"li"},"Virtual Data Model")," or ",(0,o.kt)("em",{parentName:"li"},"VDM"),".\nYou can find a list of all those services in the ",(0,o.kt)("a",{parentName:"li",href:"https://api.sap.com/package/SAPS4HANACloud?section=Artifacts"},"SAP API Business Hub")," (check the ODATA box)."),(0,o.kt)("li",{parentName:"ul"},"We support both OData v2 and OData v4 protocols in the SAP Cloud SDK for JavaScript.")),(0,o.kt)("h3",{id:"code-generator"},"Code Generator"),(0,o.kt)("p",null,"If you need a client for an OData service where we do not ship a pre-generated client use our versatile ",(0,o.kt)("a",{parentName:"p",href:"generate-typed-odata-v2-and-v4-client-for-javascript-and-typescript"},"code generator")," to convert OData service definition into the type-safe Java client library.\nYou can do it for any service either developed by yourself, provided by SAP, or other 3rd parties."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Service definition usually comes in form of the ",(0,o.kt)("inlineCode",{parentName:"li"},".edmx")," file and contains metadata of OData service.\nThe simplest way to obtain it if you have access to the service is navigating to the ",(0,o.kt)("inlineCode",{parentName:"li"},"http(s)://<service-path>/$metadata")," endpoint.\nYou can generate a client for any 3rd party service or a service that you have built on your own."),(0,o.kt)("li",{parentName:"ul"},"You can invoke code generator via our command-line interface (CLI).")),(0,o.kt)("h3",{id:"connectivity"},"Connectivity"),(0,o.kt)("p",null,"We simplify connectivity to SAP enabled OData services via type-safe abstractions over ",(0,o.kt)("a",{parentName:"p",href:"../connectivity/destination"},"Destinations"),", Authentication and some other related concepts."))}d.isMDXComponent=!0}}]);