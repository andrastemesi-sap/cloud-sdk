(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{135:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return u}));var r=n(3),a=n(7),o=(n(0),n(214)),i=(n(215),{title:"OpenAPI Overview",sidebar_label:"Overview",description:"This article describes how generate a client from the a service definition and how to use the client.",keywords:["sap","cloud","sdk","OpenAPI","rest","connectivity","JavaScript","TypeScript"]}),c={unversionedId:"js/features/openapi/overview",id:"js/features/openapi/overview",isDocsHomePage:!1,title:"OpenAPI Overview",description:"This article describes how generate a client from the a service definition and how to use the client.",source:"@site/docs/js/features/openapi/overview.mdx",slug:"/js/features/openapi/overview",permalink:"/cloud-sdk/docs/js/features/openapi/overview",editUrl:"https://github.com/SAP/cloud-sdk/edit/main/docs/js/features/openapi/overview.mdx",version:"current",lastUpdatedBy:"dependabot[bot]",lastUpdatedAt:1617967720,formattedLastUpdatedAt:"4/9/2021",sidebar_label:"Overview",sidebar:"someSidebar",previous:{title:"On-Premise Connectivity",permalink:"/cloud-sdk/docs/js/features/connectivity/on-premise"},next:{title:"Use the OpenAPI Generator to Generate Type-Safe Clients",permalink:"/cloud-sdk/docs/js/features/openapi/generate-openapi-client"}},s=[{value:"What Is the OpenAPI Generator and What Does It Offer to You",id:"what-is-the-openapi-generator-and-what-does-it-offer-to-you",children:[]}],p={toc:s};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"The OpenAPI generator is in beta state."))),Object(o.b)("h2",{id:"what-is-the-openapi-generator-and-what-does-it-offer-to-you"},"What Is the OpenAPI Generator and What Does It Offer to You"),Object(o.b)("p",null,"The OpenAPI generator is a command-line tool to generate clients from an ",Object(o.b)("a",{parentName:"p",href:"https://swagger.io/specification/"},"OpenAPI specification"),".\nOpenAPI specifications are the standard to define RESTful web service in a language-agnostic way comparable to the ",Object(o.b)("inlineCode",{parentName:"p"},"edmx")," service definition for ",Object(o.b)("a",{parentName:"p",href:"/cloud-sdk/docs/js/features/odata/overview"},"OData clients"),".\nAs you would expect, an ",Object(o.b)("a",{parentName:"p",href:"https://github.com/OpenAPITools/openapi-generator"},"openapi-generator")," already exists which offers client generation for a big number of languages.\nWhy do we provide an extra generator in the SAP Cloud SDK?"),Object(o.b)("p",null,"We provided a generator based on the existing ",Object(o.b)("inlineCode",{parentName:"p"},"openapi-generator")," to integrate the connectivity layer of the SAP Cloud SDK for other REST APIs.\nSo the same ",Object(o.b)("a",{parentName:"p",href:"../connectivity/destination"},"destination lookup"),", ",Object(o.b)("a",{parentName:"p",href:"../connectivity/on-premise"},"On-premise connectivity")," and ",Object(o.b)("a",{parentName:"p",href:"../connectivity/proxy"},"proxy handling")," applies to the OpenAPI clients."),Object(o.b)("p",null,"This is achieved in the following way.\nWe use the open-source generator to create an ",Object(o.b)("a",{parentName:"p",href:"https://github.com/OpenAPITools/openapi-generator/blob/master/docs/generators/typescript-axios.md"},"axios client"),".\nThen we include the request configuration, built with the SAP Cloud SDK, to this axios client.\nThe request configuration contains all headers, proxy and http-agent information relevant for connectivity.\nIn addition, we wrap the paths and operations with an API layer to have similar names as in the OData client."),Object(o.b)("p",null,"If you are interested in using an OpenAPI client in your project, find more information in the guides on ",Object(o.b)("a",{parentName:"p",href:"./generate-openapi-client"},"the generation of a client")," and ",Object(o.b)("a",{parentName:"p",href:"./execute-openapi-request"},"the usage of the client"),"."))}u.isMDXComponent=!0},214:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return b}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),u=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=u(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},f=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=u(n),f=r,b=d["".concat(i,".").concat(f)]||d[f]||l[f]||o;return n?a.a.createElement(b,c(c({ref:t},p),{},{components:n})):a.a.createElement(b,c({ref:t},p))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var p=2;p<o;p++)i[p]=n[p];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},215:function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return i}));var r=n(16),a=n(216);function o(){var e=Object(r.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,o=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,r){var o=void 0===r?{}:r,i=o.forcePrependBaseUrl,c=void 0!==i&&i,s=o.absolute,p=void 0!==s&&s;if(!n)return n;if(n.startsWith("#"))return n;if(Object(a.b)(n))return n;if(c)return t+n;var u=n.startsWith(t)?n:t+n.replace(/^\//,"");return p?e+u:u}(o,n,e,t)}}}function i(e,t){return void 0===t&&(t={}),(0,o().withBaseUrl)(e,t)}},216:function(e,t,n){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!r(e)}n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return a}))}}]);