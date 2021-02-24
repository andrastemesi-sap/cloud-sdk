(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{115:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return d}));var i=n(3),a=n(7),r=(n(0),n(205)),o=n(206),c={title:"Generic HTTP Client",sidebar_label:"Generic HTTP Client",description:"How to use the generic http client for untyped requests",keywords:["sap","cloud","sdk","odata","HTTP","JavaScript","TypeScript"]},s={unversionedId:"js/features/connectivity/generic-http-client",id:"js/features/connectivity/generic-http-client",isDocsHomePage:!1,title:"Generic HTTP Client",description:"How to use the generic http client for untyped requests",source:"@site/docs/js/features/connectivity/generic-http-client.mdx",slug:"/js/features/connectivity/generic-http-client",permalink:"/cloud-sdk/docs/js/features/connectivity/generic-http-client",editUrl:"https://github.com/SAP/cloud-sdk/edit/main/docs/js/features/connectivity/generic-http-client.mdx",version:"current",lastUpdatedBy:"Artem Kovalov",lastUpdatedAt:1614128176,sidebar_label:"Generic HTTP Client",sidebar:"someSidebar",previous:{title:"Proxies",permalink:"/cloud-sdk/docs/js/features/connectivity/proxy"},next:{title:"On-Premise Connectivity",permalink:"/cloud-sdk/docs/js/features/connectivity/on-premise"}},l=[{value:"What Is the Generic HTTP Client?",id:"what-is-the-generic-http-client",children:[]},{value:"How to Use It",id:"how-to-use-it",children:[]},{value:"When to Use It",id:"when-to-use-it",children:[]}],u={toc:l};function d(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(i.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"what-is-the-generic-http-client"},"What Is the Generic HTTP Client?"),Object(r.b)("p",null,"In the ",Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"/cloud-sdk/docs/js/features/odata/execute-odata-request"}),"Executing a request using a generated OData client")," section, we explained how to make OData requests using the generated OData client.\nThis client is the highest layer of convenience and type-safety for the user.\nBelow the OData client uses the Generic HTTP client of the SAP Cloud SDK.\nFor the final HTTP calls, we have decided to use the ",Object(r.b)("inlineCode",{parentName:"p"},"axios")," library."),Object(r.b)("img",{alt:"The layers of HTTP clients in the SDK.",src:Object(o.a)("img/odata-client-layers.png"),class:"center",width:"50%"}),Object(r.b)("p",null,"In this document, we explain when and how to use the middle layer directly.\nDifferent clients serve different purposes:"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"OData Client:"),"\nProvides strong typing for the request (payload, select, filter, ...) and response.\nFor each OData service, a separate client needs to be generated which defines the types and methods for this service.\nThe client takes care of deserializing your request to a URL and JSON payload as well as serializing the response.\nThe generated payload and URL are passed to the Generic HTTP Client."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Generic HTTP Client:"),"\nAdds SAP infrastructure specific functionality on top of a standard HTTP Client.\nAll OData services use the same generic HTTP client, so it contains no service-specific information.\nThe client handles connectivity related issues such as:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(i.a)({parentName:"li"},{href:"/cloud-sdk/docs/js/features/connectivity/destination"}),"Destination lookup")),Object(r.b)("li",{parentName:"ul"},"Connections to ",Object(r.b)("a",Object(i.a)({parentName:"li"},{href:"/cloud-sdk/docs/js/features/connectivity/on-premise"}),"SAP S/4HANA On-Premise")," via the connectivity service"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(i.a)({parentName:"li"},{href:"/cloud-sdk/docs/js/features/connectivity/proxy"}),"Web proxies"),".")),Object(r.b)("p",null,"In the end, all information from the destination, connectivity service, and proxy configuration ends up in header-fields and ",Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"https://www.npmjs.com/package/proxy-agent"}),"proxy-agents"),".\nThe information goes one level down to the ",Object(r.b)("inlineCode",{parentName:"p"},"axios")," client."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},Object(r.b)("inlineCode",{parentName:"strong"},"axios")," HTTP Client:"),"\nIs a widely used open source ",Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"https://www.npmjs.com/package/axios"}),"HTTP client for node"),".\nThis client executes the actual HTTP requests in the end."),Object(r.b)("h2",{id:"how-to-use-it"},"How to Use It"),Object(r.b)("p",null,"To make a request using the Generic HTTP client use the ",Object(r.b)("inlineCode",{parentName:"p"},"executeHttpRequest")," function."),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-ts"}),"executeHttpRequest(destination, requestConfig);\n")),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"destination")," argument is either a full destination object you have already fetched or an object containing a destination name and JWT.\nIn the latter case the SAP Cloud SDK ",Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"/cloud-sdk/docs/js/features/connectivity/destination"}),"fetches the destination")," for you.\nThe ",Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"pathname:///api/1.28.1/interfaces/sap_cloud_sdk_core.httprequestconfig"}),"request configuration")," argument contains the request configuration.\nA minimal configuration would look like this:"),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-JSON"}),"{\n     method: 'get',\n     params: {\n          a: 'a',\n          b: 'b'\n     },\n    ...\n}\n")),Object(r.b)("p",null,"Note that you can also give values for ",Object(r.b)("inlineCode",{parentName:"p"},"url")," in the request configuration.\nThe values you give in the request configuration ",Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"https://github.com/SAP/cloud-sdk-js/blob/main/packages/core/src/http-client/http-client.ts#L136-L148"}),"will be merged")," with ones related to the destination:"),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-ts"}),"{\n  ...destinationRequestConfig,\n  ...customRequestConfig,\n  headers: {\n   ...destinationRequestConfig.headers,\n   ...customRequestConfig.headers\n}\n")),Object(r.b)("p",null,"For keys which exist for both object the value from the custom request configuration will be used.\nFor example, a request configuration with ",Object(r.b)("inlineCode",{parentName:"p"},"authorization")," headers will overwrite the authorization header information from the destination."),Object(r.b)("h2",{id:"when-to-use-it"},"When to Use It"),Object(r.b)("p",null,"You should consider the Generic HTTP client if:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"You need to use an unsupported feature by the typed OData Client like ",Object(r.b)("inlineCode",{parentName:"li"},"upsert")," for example.\nWith this, you can profit from the aforementioned convenience in connectivity."),Object(r.b)("li",{parentName:"ul"},"You want to ping a service or trigger a function import without a complicated payload.\nIn such a case the size of a full data model of the typed client is perhaps not worth the benefits."),Object(r.b)("li",{parentName:"ul"},"You want to call a non-OData service that has no service definition.")),Object(r.b)("p",null,"You should consider the OData client if:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"You have to build complicated filter, selection, and/or expand conditions.\nHere you will highly benefit from the help of the OData client."),Object(r.b)("li",{parentName:"ul"},"You want to update or create new entities.\nThe OData Client has built-in ",Object(r.b)("inlineCode",{parentName:"li"},"ETag")," versions handling and takes also care of ",Object(r.b)("inlineCode",{parentName:"li"},"CSRF")," token fetching for you.\nWith the generic client, you have to manage versions and tokens on your own.")))}d.isMDXComponent=!0},205:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return h}));var i=n(0),a=n.n(i);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),u=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=u(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,o=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=u(n),b=i,h=d["".concat(o,".").concat(b)]||d[b]||p[b]||r;return n?a.a.createElement(h,c(c({ref:t},l),{},{components:n})):a.a.createElement(h,c({ref:t},l))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=b;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:i,o[1]=c;for(var l=2;l<r;l++)o[l]=n[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},206:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return o}));var i=n(21),a=n(207);function r(){var e=Object(i.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,r=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,i){var r=void 0===i?{}:i,o=r.forcePrependBaseUrl,c=void 0!==o&&o,s=r.absolute,l=void 0!==s&&s;if(!n)return n;if(n.startsWith("#"))return n;if(Object(a.b)(n))return n;if(c)return t+n;var u=n.startsWith(t)?n:t+n.replace(/^\//,"");return l?e+u:u}(r,n,e,t)}}}function o(e,t){return void 0===t&&(t={}),(0,r().withBaseUrl)(e,t)}},207:function(e,t,n){"use strict";function i(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!i(e)}n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return a}))}}]);