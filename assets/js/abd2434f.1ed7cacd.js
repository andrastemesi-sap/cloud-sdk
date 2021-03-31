(window.webpackJsonp=window.webpackJsonp||[]).push([[82],{160:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return u})),n.d(t,"metadata",(function(){return d})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return m}));var r=n(3),a=n(7),o=(n(0),n(214)),i=n(267),c=n(258),s=n(227),l=n(228),u={title:"API Reference JavaScript and Typescript",sidebar_label:"API Reference",description:"Generated TypeDoc API Documentation",keywords:["sap","cloud","sdk","cloud native","cloud sdk","sap cloud sdk"],image:null},d={unversionedId:"js/api",id:"js/api",isDocsHomePage:!1,title:"API Reference JavaScript and Typescript",description:"Generated TypeDoc API Documentation",source:"@site/docs/js/api.mdx",slug:"/js/api",permalink:"/cloud-sdk/docs/js/api",editUrl:"https://github.com/SAP/cloud-sdk/edit/main/docs/js/api.mdx",version:"current",lastUpdatedBy:"dependabot[bot]",lastUpdatedAt:1617219711,formattedLastUpdatedAt:"3/31/2021",sidebar_label:"API Reference",sidebar:"someSidebar",previous:{title:"SAP Cloud Application Programming Model and SAP Cloud Application Lifecycle Management",permalink:"/cloud-sdk/docs/js/video/demo-of-cloud-sdk-for-javascript-with-calm-and-cap"},next:{title:"Release Notes",permalink:"/cloud-sdk/docs/js/release-notes-sap-cloud-sdk-for-javascript-and-typescript"}},p=[{value:"Autogenerated API Documentation",id:"autogenerated-api-documentation",children:[{value:"The SAP Cloud SDK version",id:"the-sap-cloud-sdk-version",children:[]}]},{value:"See Also",id:"see-also",children:[]}],f={toc:p};function m(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},f,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)(s.a,{mdxType:"BuildBadge"})," ",Object(o.b)(l.a,{mdxType:"LicenseBadge"}),Object(o.b)("h2",{id:"autogenerated-api-documentation"},"Autogenerated API Documentation"),Object(o.b)("h3",{id:"the-sap-cloud-sdk-version"},"The SAP Cloud SDK version"),Object(o.b)(i.a,{versions:c.a,basePath:"api",mdxType:"ApiReleaseList"}),Object(o.b)("h2",{id:"see-also"},"See Also"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://github.com/SAP/cloud-sdk-js/releases"},"Release notes for the SAP Cloud SDK for JavaScript")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"getting-started"},"Getting Started Guide")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"release-notes-sap-cloud-sdk-for-javascript-and-typescript"},"Release notes and API documentation for type-safe client libraries"))))}m.isMDXComponent=!0},214:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),u=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=u(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},f=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=u(n),f=r,m=d["".concat(i,".").concat(f)]||d[f]||p[f]||o;return n?a.a.createElement(m,c(c({ref:t},l),{},{components:n})):a.a.createElement(m,c({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},215:function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return i}));var r=n(16),a=n(216);function o(){var e=Object(r.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,o=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,r){var o=void 0===r?{}:r,i=o.forcePrependBaseUrl,c=void 0!==i&&i,s=o.absolute,l=void 0!==s&&s;if(!n)return n;if(n.startsWith("#"))return n;if(Object(a.b)(n))return n;if(c)return t+n;var u=n.startsWith(t)?n:t+n.replace(/^\//,"");return l?e+u:u}(o,n,e,t)}}}function i(e,t){return void 0===t&&(t={}),(0,o().withBaseUrl)(e,t)}},216:function(e,t,n){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!r(e)}n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return a}))},227:function(e,t,n){"use strict";var r=n(0),a=n.n(r);t.a=function(e){var t=e.align;return a.a.createElement("span",{className:t?"col text--right":""},a.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/SAP/cloud-sdk"},a.a.createElement("img",{src:"https://github.com/SAP/cloud-sdk-js/workflows/build/badge.svg",alt:"build",className:"max-width:100%;"})))}},228:function(e,t,n){"use strict";var r=n(0),a=n.n(r);t.a=function(e){var t=e.align;return a.a.createElement("span",{className:t?"col text--right":""},a.a.createElement("a",{href:"https://opensource.org/licenses/Apache-2.0",rel:"nofollow"},a.a.createElement("img",{src:"https://img.shields.io/badge/License-Apache%202.0-yellowgreen.svg",alt:"License","data-canonical-src":"https://img.shields.io/badge/License-Apache%202.0-yellowgreen.svg",className:"max-width:100%;"})))}},258:function(e,t,n){"use strict";t.a=["1.40.0","1.39.0","1.38.0","1.37.1","1.37.0","1.36.1","1.36.0","1.35.0","1.34.0","1.33.0","1.32.1","1.32.0","1.31.0","1.30.0","1.29.0","1.28.2","1.28.1","1.28.0","1.27.0","1.26.1","1.26.0","1.25.0","1.24.1","1.24.0","1.23.0","1.22.0","1.21.2","1.21.1","1.21.0","1.20.1","1.20.0","1.19.0","1.18.1","1.18.0"]},267:function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(215);t.a=function(e){var t=e.versions,n=e.basePath;return a.a.createElement("ul",null,t.map((function(e,t){return a.a.createElement("li",{key:""+e},a.a.createElement("a",{href:Object(o.a)(n+"/"+e+"/")},""+e),t?"":a.a.createElement("strong",null,a.a.createElement("em",null," - latest ")))})))}}}]);