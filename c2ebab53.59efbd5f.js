(window.webpackJsonp=window.webpackJsonp||[]).push([[94],{172:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return c})),a.d(t,"toc",(function(){return s})),a.d(t,"default",(function(){return d}));var r=a(3),n=a(7),o=(a(0),a(212)),i={id:"overview",title:"OData",sidebar_label:"Overview",description:"This article provides an overview of how the SAP Cloud SDK for JavaScript supports connecting to OData services.",keywords:["sap","cloud","sdk","odata","JavaScript","TypeScript","client","generate"]},c={unversionedId:"js/features/odata/overview",id:"js/features/odata/overview",isDocsHomePage:!1,title:"OData",description:"This article provides an overview of how the SAP Cloud SDK for JavaScript supports connecting to OData services.",source:"@site/docs/js/features/odata/overview.mdx",slug:"/js/features/odata/overview",permalink:"/cloud-sdk/docs/js/features/odata/overview",editUrl:"https://github.com/SAP/cloud-sdk/edit/main/docs/js/features/odata/overview.mdx",version:"current",lastUpdatedBy:"dependabot[bot]",lastUpdatedAt:1614950591,sidebar_label:"Overview",sidebar:"someSidebar",previous:{title:"Getting Started",permalink:"/cloud-sdk/docs/js/getting-started"},next:{title:"Generate an OData client for JavaScript",permalink:"/cloud-sdk/docs/js/features/odata/generate-odata-client"}},s=[{value:"What OData Protocol Versions Are Supported?",id:"what-odata-protocol-versions-are-supported",children:[]},{value:"What Is OData?",id:"what-is-odata",children:[]},{value:"What Does the SAP Cloud SDK Offer?",id:"what-does-the-sap-cloud-sdk-offer",children:[{value:"Type-Safe OData Client",id:"type-safe-odata-client",children:[]},{value:"Code Generator",id:"code-generator",children:[]},{value:"Connectivity",id:"connectivity",children:[]}]}],l={toc:s};function d(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"what-odata-protocol-versions-are-supported"},"What OData Protocol Versions Are Supported?"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"OData protocol version"),Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"SAP Cloud SDK for JavaScript"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(o.b)("a",Object(r.a)({parentName:"td"},{href:"use-odata-v2-type-safe-client-for-javascript-typescript"}),"OData v2")),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"\u2713")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(o.b)("a",Object(r.a)({parentName:"td"},{href:"use-odata-v4-type-safe-client-for-javascript-typescript"}),"OData v4")),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"\u2713")))),Object(o.b)("h2",{id:"what-is-odata"},"What Is OData?"),Object(o.b)("p",null,Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.odata.org/"}),"OData")," is an open standard for building and consuming RESTful APIs.\nIt defines a query language to send and retrieve data via HTTP and to perform operations on data."),Object(o.b)("p",null,"There are two widely used versions of the protocol: OData v2 and OData v4.\nThe latter comes with more and improved functionality.\nFull details on the standards are to be found in the ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.odata.org/documentation/"}),"documentation"),"."),Object(o.b)("h2",{id:"what-does-the-sap-cloud-sdk-offer"},"What Does the SAP Cloud SDK Offer?"),Object(o.b)("p",null,"The SAP Cloud SDK simplifies the consumption of OData services through the following features:"),Object(o.b)("h3",{id:"type-safe-odata-client"},"Type-Safe OData Client"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"We provide a type-safe OData client to build and execute OData requests in JavaScript and TypeScript."),Object(o.b)("li",{parentName:"ul"},"We ship pre-generated OData clients for the SAP S/4HANA OData services.\nThey are also referred to as the ",Object(o.b)("em",{parentName:"li"},"Virtual Data Model")," or ",Object(o.b)("em",{parentName:"li"},"VDM"),".\nYou can find a list of all those services in the ",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://api.sap.com/package/SAPS4HANACloud?section=Artifacts"}),"SAP API Business Hub")," (check the ODATA box)."),Object(o.b)("li",{parentName:"ul"},"We support both OData v2 and OData v4 protocols in the SAP Cloud SDK for JavaScript.")),Object(o.b)("h3",{id:"code-generator"},"Code Generator"),Object(o.b)("p",null,"If you need a client for an OData service where we do not ship a pre-generated client use our versatile ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"generate-typed-odata-v2-and-v4-client-for-javascript-and-typescript"}),"code generator")," to convert OData service definition into the type-safe Java client library.\nYou can do it for any service either developed by yourself, provided by SAP, or other 3rd parties."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Service definition usually comes in form of the ",Object(o.b)("inlineCode",{parentName:"li"},".edmx")," file and contains metadata of OData service.\nThe simplest way to obtain it if you have access to the service is navigating to the ",Object(o.b)("inlineCode",{parentName:"li"},"http(s)://<service-path>/$metadata")," endpoint.\nYou can generate a client for any 3rd party service or a service that you have built on your own."),Object(o.b)("li",{parentName:"ul"},"You can invoke code generator via our command-line interface (CLI).")),Object(o.b)("h3",{id:"connectivity"},"Connectivity"),Object(o.b)("p",null,"We simplify connectivity to SAP enabled OData services via type-safe abstractions over ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"../connectivity/destination"}),"Destinations"),", Authentication and some other related concepts."))}d.isMDXComponent=!0},212:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return f}));var r=a(0),n=a.n(r);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=n.a.createContext({}),d=function(e){var t=n.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},p=function(e){var t=d(e.components);return n.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},b=n.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=d(a),b=r,f=p["".concat(i,".").concat(b)]||p[b]||u[b]||o;return a?n.a.createElement(f,c(c({ref:t},l),{},{components:a})):n.a.createElement(f,c({ref:t},l))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=b;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<o;l++)i[l]=a[l];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,a)}b.displayName="MDXCreateElement"}}]);