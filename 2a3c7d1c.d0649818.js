(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{113:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return l}));var r=n(3),a=n(7),i=(n(0),n(203)),o=(n(204),{title:"Use the OpenAPI Generator to Generate Type-Safe Clients",sidebar_label:"Generate an OpenAPI Client",description:"This article describes how generate a client from the a service definition and how to use the client.",keywords:["sap","cloud","sdk","OpenAPI","rest","connectivity","JavaScript","TypeScript"]}),c={unversionedId:"js/features/openapi/generate-openapi-client",id:"js/features/openapi/generate-openapi-client",isDocsHomePage:!1,title:"Use the OpenAPI Generator to Generate Type-Safe Clients",description:"This article describes how generate a client from the a service definition and how to use the client.",source:"@site/docs/js/features/openapi/generate-openapi-client.mdx",slug:"/js/features/openapi/generate-openapi-client",permalink:"/cloud-sdk/docs/js/features/openapi/generate-openapi-client",editUrl:"https://github.com/SAP/cloud-sdk/edit/main/docs/js/features/openapi/generate-openapi-client.mdx",version:"current",lastUpdatedBy:"dependabot[bot]",lastUpdatedAt:1609772425,sidebar_label:"Generate an OpenAPI Client",sidebar:"someSidebar",previous:{title:"OpenAPI Overview",permalink:"/cloud-sdk/docs/js/features/openapi/overview"},next:{title:"Executing a Request Using a Generated OpenAPI Client",permalink:"/cloud-sdk/docs/js/features/openapi/execute-openapi-request"}},p=[{value:"Generate a Client via the Command-Line Interface",id:"generate-a-client-via-the-command-line-interface",children:[]},{value:"Generate a Client Programmatically",id:"generate-a-client-programmatically",children:[]}],s={toc:p};function l(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(i.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"The OpenAPI generator is in beta state."))),Object(i.b)("h2",{id:"generate-a-client-via-the-command-line-interface"},"Generate a Client via the Command-Line Interface"),Object(i.b)("p",null,"Many SAP systems like SAP S/4HANA, SAP Concur and SAP Cloud Platform provide REST APIs to the user.\nA common way to specify these services is via ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"./overview"}),"OpenAPI")," specification files.\nYou can generate type-safe OpenAPI clients using these specification files with the SAP Cloud SDK.\nAn example how such a file looks like can be found ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/SAP/cloud-sdk-js/blob/main/test-resources/rest-service-specs/test-service.json"}),"here")," and is discussed in detail in the guide on ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"./execute-openapi-request"}),"how to execute an OpenAPI request"),"."),Object(i.b)("p",null,"Run this command to install the OpenAPI generator globally:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{}),"npm i @sap-cloud-sdk/openapi-generator -g\n")),Object(i.b)("p",null,"Then you can generate an OpenAPI client via:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{}),"generate-openapi-client -i directoryWithOpenApiFiles -o outputDirectory\n")),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"directoryWithOpenApiFiles")," points to the directory containing your specification file and ",Object(i.b)("inlineCode",{parentName:"p"},"outputDirectory")," to the target folder where the generated client will be saved.\nFor additional options on the command use the ",Object(i.b)("inlineCode",{parentName:"p"},"--help")," flag."),Object(i.b)("h2",{id:"generate-a-client-programmatically"},"Generate a Client Programmatically"),Object(i.b)("p",null,"The generator can also be executed programmatically in JavaScript code directly.\nIn the ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/SAP/cloud-sdk-js/tree/main/packages/openapi-generator"}),"generator package")," the a method ",Object(i.b)("inlineCode",{parentName:"p"},"generateClients")," is exported.\nThis method takes the same options as the command-line tool and generates OpenAPI clients:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts"}),"import { generateClients } from '@sap-cloud-sdk/openapi-generator'\n\nconst generatorOptions = {\n  inputDir: 'directoryWithOpenApiFiles';\n  outputDir: 'myOutputDirectory';\n}\n\ngenerateClients(generatorOptions)\n")))}l.isMDXComponent=!0},203:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),l=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=l(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=l(n),b=r,m=u["".concat(o,".").concat(b)]||u[b]||d[b]||i;return n?a.a.createElement(m,c(c({ref:t},s),{},{components:n})):a.a.createElement(m,c({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=b;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var s=2;s<i;s++)o[s]=n[s];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},204:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return o}));var r=n(21),a=n(205);function i(){var e=Object(r.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,i=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,r){var i=void 0===r?{}:r,o=i.forcePrependBaseUrl,c=void 0!==o&&o,p=i.absolute,s=void 0!==p&&p;if(!n)return n;if(n.startsWith("#"))return n;if(Object(a.b)(n))return n;if(c)return t+n;var l=n.startsWith(t)?n:t+n.replace(/^\//,"");return s?e+l:l}(i,n,e,t)}}}function o(e,t){return void 0===t&&(t={}),(0,i().withBaseUrl)(e,t)}},205:function(e,t,n){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!r(e)}n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return a}))}}]);