(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{142:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return u}));var r=n(3),i=n(7),a=(n(0),n(221)),o=(n(222),{title:"OpenAPI Overview",sidebar_label:"Overview",description:"This article describes how generate a client from the a service definition and how to use the client.",keywords:["sap","cloud","sdk","OpenAPI","rest","connectivity","JavaScript","TypeScript"]}),c={unversionedId:"js/features/openapi/overview",id:"js/features/openapi/overview",isDocsHomePage:!1,title:"OpenAPI Overview",description:"This article describes how generate a client from the a service definition and how to use the client.",source:"@site/docs/js/features/openapi/overview.mdx",slug:"/js/features/openapi/overview",permalink:"/cloud-sdk/docs/js/features/openapi/overview",editUrl:"https://github.com/SAP/cloud-sdk/edit/main/docs/js/features/openapi/overview.mdx",version:"current",lastUpdatedBy:"Junjie Tang",lastUpdatedAt:1619347023,formattedLastUpdatedAt:"4/25/2021",sidebar_label:"Overview",sidebar:"someSidebar",previous:{title:"On-Premise Connectivity",permalink:"/cloud-sdk/docs/js/features/connectivity/on-premise"},next:{title:"Use the OpenAPI Generator to Generate Typed Clients",permalink:"/cloud-sdk/docs/js/features/openapi/generate-openapi-client"}},s=[],p={toc:s};function u(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(a.b)("div",{parentName:"div",className:"admonition-heading"},Object(a.b)("h5",{parentName:"div"},Object(a.b)("span",{parentName:"h5",className:"admonition-icon"},Object(a.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(a.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(a.b)("div",{parentName:"div",className:"admonition-content"},Object(a.b)("p",{parentName:"div"},"The OpenAPI generator is currently beta.\nWe do not recommend to use it in production as there might still be breaking changes."))),Object(a.b)("p",null,"The OpenAPI generator is a command-line tool to generate clients from ",Object(a.b)("a",{parentName:"p",href:"https://swagger.io/specification/"},"OpenAPI specifications"),".\nOpenAPI specifications are the standard to define RESTful web services in a language-agnostic way.\nIt is comparable to the ",Object(a.b)("inlineCode",{parentName:"p"},"edmx")," service definitions for ",Object(a.b)("a",{parentName:"p",href:"/cloud-sdk/docs/js/features/odata/overview"},"OData clients"),".\nThe generated OpenAPI clients make use of the SAP Cloud SDK's connectivity layer.\nThat means, that the mechanisms for ",Object(a.b)("a",{parentName:"p",href:"../connectivity/destination"},"destination lookup"),", ",Object(a.b)("a",{parentName:"p",href:"../connectivity/on-premise"},"On-premise connectivity")," and ",Object(a.b)("a",{parentName:"p",href:"../connectivity/proxy"},"proxy handling")," are applied when consuming services through the generated clients."),Object(a.b)("p",null,"As you would expect, an Open Source ",Object(a.b)("a",{parentName:"p",href:"https://github.com/OpenAPITools/openapi-generator"},"OpenAPI generator (OpenAPITools)")," already exists.\nIt offers client generation for various programming languages, including TypeScript.\nThe main difference between the generator by the SAP Cloud SDK and the generator by OpenAPITools is the aforementioned use of the SAP Cloud SDK's connectivity layer.\nFurther, the OpenAPITools generator requires a Java runtime environment to be used.\nThis is not required by the SAP Cloud SDK's generator.\nAs it is written in TypeScript it requires a Node.js environment."),Object(a.b)("p",null,"If you are interested in using an OpenAPI client in your project, find more information in the guides on ",Object(a.b)("a",{parentName:"p",href:"./generate-openapi-client"},"the generation of a client")," and ",Object(a.b)("a",{parentName:"p",href:"./execute-openapi-request"},"the usage of the client"),"."))}u.isMDXComponent=!0},221:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return b}));var r=n(0),i=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=i.a.createContext({}),u=function(e){var t=i.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=u(e.components);return i.a.createElement(p.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},f=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=u(n),f=r,b=d["".concat(o,".").concat(f)]||d[f]||l[f]||a;return n?i.a.createElement(b,c(c({ref:t},p),{},{components:n})):i.a.createElement(b,c({ref:t},p))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var p=2;p<a;p++)o[p]=n[p];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},222:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return o}));var r=n(16),i=n(223);function a(){var e=Object(r.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,a=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,r){var a=void 0===r?{}:r,o=a.forcePrependBaseUrl,c=void 0!==o&&o,s=a.absolute,p=void 0!==s&&s;if(!n)return n;if(n.startsWith("#"))return n;if(Object(i.b)(n))return n;if(c)return t+n;var u=n.startsWith(t)?n:t+n.replace(/^\//,"");return p?e+u:u}(a,n,e,t)}}}function o(e,t){return void 0===t&&(t={}),(0,a().withBaseUrl)(e,t)}},223:function(e,t,n){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function i(e){return void 0!==e&&!r(e)}n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return i}))}}]);