(self.webpackChunksap_cloud_sdk_documentation=self.webpackChunksap_cloud_sdk_documentation||[]).push([[2218],{3905:function(e,t,a){"use strict";a.d(t,{Zo:function(){return c},kt:function(){return v}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),d=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=d(a),v=r,h=p["".concat(s,".").concat(v)]||p[v]||u[v]||o;return a?n.createElement(h,i(i({ref:t},c),{},{components:a})):n.createElement(h,i({ref:t},c))}));function v(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var d=2;d<o;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},4055:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return i},metadata:function(){return l},toc:function(){return s},default:function(){return c}});var n=a(2122),r=a(9756),o=(a(7294),a(3905)),i={id:"overview",title:"OData",hide_title:!1,hide_table_of_contents:!1,sidebar_label:"Overview",description:"This article provides an overview of how the SAP Cloud SDK for Java supports connecting to OData services.",keywords:["sap","cloud","sdk","odata","java","typed","client","generate"]},l={unversionedId:"java/features/odata/overview",id:"java/features/odata/overview",isDocsHomePage:!1,title:"OData",description:"This article provides an overview of how the SAP Cloud SDK for Java supports connecting to OData services.",source:"@site/docs/java/features/odata/overview.mdx",sourceDirName:"java/features/odata",slug:"/java/features/odata/overview",permalink:"/cloud-sdk/docs/java/features/odata/overview",editUrl:"https://github.com/SAP/cloud-sdk/edit/main/docs/java/features/odata/overview.mdx",version:"current",lastUpdatedBy:"Johannes Schneider",lastUpdatedAt:1621931087,formattedLastUpdatedAt:"5/25/2021",sidebar_label:"Overview",frontMatter:{id:"overview",title:"OData",hide_title:!1,hide_table_of_contents:!1,sidebar_label:"Overview",description:"This article provides an overview of how the SAP Cloud SDK for Java supports connecting to OData services.",keywords:["sap","cloud","sdk","odata","java","typed","client","generate"]},sidebar:"someSidebar",previous:{title:"Getting Started",permalink:"/cloud-sdk/docs/java/getting-started"},next:{title:"Generate a Typed OData Client With the OData Generator",permalink:"/cloud-sdk/docs/java/features/odata/generate-typed-odata-v2-and-v4-client-for-java"}},s=[{value:"What Is OData?",id:"what-is-odata",children:[]},{value:"What OData Versions Are Supported?",id:"what-odata-versions-are-supported",children:[]},{value:"What Does the SAP Cloud SDK Offer?",id:"what-does-the-sap-cloud-sdk-offer",children:[{value:"Type-Safe OData Client",id:"type-safe-odata-client",children:[]},{value:"Generic OData Client",id:"generic-odata-client",children:[]},{value:"Code Generator",id:"code-generator",children:[]},{value:"Connectivity",id:"connectivity",children:[]}]},{value:"Popular Use-Cases for Type-Safe OData Client",id:"popular-use-cases-for-type-safe-odata-client",children:[{value:"You Are Extending an SAP Product or Service, Building a Middle-Ware, Publishing a Cloud App",id:"you-are-extending-an-sap-product-or-service-building-a-middle-ware-publishing-a-cloud-app",children:[]},{value:"Developing and Publishing OData Service",id:"developing-and-publishing-odata-service",children:[]},{value:"Coding Convention and Inter-Operability",id:"coding-convention-and-inter-operability",children:[]},{value:"Advanced Features and Custom Development",id:"advanced-features-and-custom-development",children:[]}]}],d={toc:s};function c(e){var t=e.components,a=(0,r.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"what-is-odata"},"What Is OData?"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.odata.org/"},"OData")," is an open standard for building and consuming RESTful APIs.\nIt defines a query language to send and retrieve data via HTTP and to perform operations on data."),(0,o.kt)("p",null,"There are two widely used versions of the protocol: OData v2 and OData v4.\nThe latter comes with extended and improved functionality.\nYou can find full details on OData standards in ",(0,o.kt)("a",{parentName:"p",href:"https://www.odata.org/documentation/"},"documentation"),"."),(0,o.kt)("h2",{id:"what-odata-versions-are-supported"},"What OData Versions Are Supported?"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"OData protocol version"),(0,o.kt)("th",{parentName:"tr",align:null},"SAP Cloud SDK V3"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"use-typed-odata-v2-client-in-sap-cloud-sdk-for-java"},"OData v2")),(0,o.kt)("td",{parentName:"tr",align:null},"\u2713")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"use-typed-odata-v4-client-in-sap-cloud-sdk-for-java"},"OData v4")),(0,o.kt)("td",{parentName:"tr",align:null},"\u2713")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/cloud-sdk/docs/java/features/odata/generic-untyped-odata-client"},"Generic OData client - Advanced")),(0,o.kt)("td",{parentName:"tr",align:null},"\u2713")))),(0,o.kt)("h2",{id:"what-does-the-sap-cloud-sdk-offer"},"What Does the SAP Cloud SDK Offer?"),(0,o.kt)("p",null,"The SAP Cloud SDK simplifies the consumption of OData services through the following features:"),(0,o.kt)("h3",{id:"type-safe-odata-client"},"Type-Safe OData Client"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"We provide a type-safe OData client to build and execute OData requests"),(0,o.kt)("li",{parentName:"ul"},"For many popular SAP OData services we ship pre-generated type-safe clients.\nIn the SAP universe, they are called the Virtual Data Model or VDM.\nThe most popular type-safe client module contains a collection of all OData services of ",(0,o.kt)("a",{parentName:"li",href:"https://api.sap.com/package/SAPS4HANACloud?section=Artifacts"},"SAP S/4HANA Cloud")," and ",(0,o.kt)("a",{parentName:"li",href:"https://api.sap.com/package/S4HANAOPAPI?section=Artifacts"},"SAP S/4HANA On-premise 2020"),"."),(0,o.kt)("li",{parentName:"ul"},"We support both OData v2 and OData v4 protocols in the SAP Cloud SDK for Java.")),(0,o.kt)("h3",{id:"generic-odata-client"},"Generic OData Client"),(0,o.kt)("p",null,"We expose an ",(0,o.kt)("a",{parentName:"p",href:"/cloud-sdk/docs/java/features/odata/generic-untyped-odata-client"},"advanced generic OData client")," that can be leveraged when the capabilities or flexibility of a type-safe client are not enough.\nBe careful and know what you're doing.\nIn most situations, you do not need to use the advanced OData client."),(0,o.kt)("h3",{id:"code-generator"},"Code Generator"),(0,o.kt)("p",null,"If you need a client for an OData service where we do not ship a pre-generated client use our versatile ",(0,o.kt)("a",{parentName:"p",href:"generate-typed-odata-v2-and-v4-client-for-java"},"code generator")," to convert OData service definition into the type-safe Java client library.\nYou can do it for any service either developed by yourself, provided by SAP, or other third parties."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Service definition usually comes in form of the ",(0,o.kt)("inlineCode",{parentName:"li"},".edmx")," file and contains metadata of OData service.\nThe simplest way to obtain it, if you have access to the service, is navigating to the ",(0,o.kt)("inlineCode",{parentName:"li"},"http(s)://<service-path>/$metadata")," endpoint.\nYou can generate a client for any third party service or a service that you've built on your own."),(0,o.kt)("li",{parentName:"ul"},"You can generate clients via our command-line interface (CLI) or Maven plugin.")),(0,o.kt)("h3",{id:"connectivity"},"Connectivity"),(0,o.kt)("p",null,"We simplify connectivity to SAP enabled OData services via type-safe abstractions over ",(0,o.kt)("a",{parentName:"p",href:"../connectivity/sdk-connectivity-destination-service"},"Destinations"),", Authentication, and some other related concepts."),(0,o.kt)("h2",{id:"popular-use-cases-for-type-safe-odata-client"},"Popular Use-Cases for Type-Safe OData Client"),(0,o.kt)("h3",{id:"you-are-extending-an-sap-product-or-service-building-a-middle-ware-publishing-a-cloud-app"},"You Are Extending an SAP Product or Service, Building a Middle-Ware, Publishing a Cloud App"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Type-safe consumption of OData services."),"\nBy consumption, we mean building and executing API calls against OData service with serialized request data and processing serialized responses.\nAll in a type-safe way.\nYour code focuses on business logic and leaves lower-level tasks to the SAP Cloud SDK."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Converting OData API into a different flavor of REST API."),"\nYou can use the SAP Cloud SDK for Java to build an app that converts your desired REST format to OData calls and vice versa.\nSuch an app may serve as a proxy, integration adaptor, service gateway, etc."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Serving as a layer to fetch data from and push data to OData services."),"\nInstead of building your query tool you can fetch the data with the SAP Cloud SDK and pass it on to your UX framework, analytics tool, data converter, etc.\nReverse data flow will allow you to push new or modified data to the OData service for processing or persistence.\nIn that manner, the SAP Cloud SDK can help you implement adapters for a ",(0,o.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Hexagonal_architecture_(software)"},"hexagonal architecture"),".")),(0,o.kt)("h3",{id:"developing-and-publishing-odata-service"},"Developing and Publishing OData Service"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Use the SAP Cloud SDK to create a robust automated testing framework."),"\nYou can create a type-safe client for your own OData service with our generator and scale your automated testing capabilities.\nThis comes with the advantage of updating your client code with ease while your service grows and its metadata evolves."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Shipping your client module with the SAP Cloud SDK for Java."),"\nAs a service developer, you're usually interested in an easy way for your customers to consume your service.\nThat's exactly what the SAP Cloud SDK does.\nWhen your service is finished, you can generate an API client with the SAP Cloud SDK and release it to developers using your service.\nAs an SAP service, you can contribute your API definition via our contribution process.\nOnce accepted, your ",(0,o.kt)("strong",{parentName:"li"},"pre-generated type-safe client")," will be shipping as a Maven module of the SAP Cloud SDK.")),(0,o.kt)("h3",{id:"coding-convention-and-inter-operability"},"Coding Convention and Inter-Operability"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Making sure different teams in your organization coherently consume OData services."),"\nThe SAP Cloud SDK will help you to save developers' time, ensure best coding practices, and knowledge sharing.\nSuch an approach ensures you won't have duplication of work to save the same problem by different teams and guaranteed high levels of interoperability and integration.")),(0,o.kt)("h3",{id:"advanced-features-and-custom-development"},"Advanced Features and Custom Development"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Using certain SAP Cloud SDK features for Custom OData service consumption or publishing."),"\nIf the SAP Cloud SDK's features for OData consumption do not cover your use-case end-to-end, you can still benefit from our public utility and helper methods like OData expression builder, non-type safe request builders, and some others.\nMake sure you know what you're doing because the SAP Cloud SDK can't guarantee convenience and correctness in such a case.")))}c.isMDXComponent=!0}}]);