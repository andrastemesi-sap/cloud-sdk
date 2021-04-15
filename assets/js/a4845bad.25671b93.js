(window.webpackJsonp=window.webpackJsonp||[]).push([[77],{155:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return u})),r.d(t,"metadata",(function(){return s})),r.d(t,"toc",(function(){return d})),r.d(t,"default",(function(){return p}));var n=r(3),o=r(7),c=(r(0),r(216)),i=r(22),a=r(217),u={id:"api-reference-js-ts",title:"Redirecting",keywords:["sap","cloud","sdk","cloud native","cloud sdk","sap cloud sdk"]},s={unversionedId:"js/api-reference-js-ts",id:"js/api-reference-js-ts",isDocsHomePage:!1,title:"Redirecting",source:"@site/docs/js/redirect-api-reference-js-ts.mdx",slug:"/js/api-reference-js-ts",permalink:"/cloud-sdk/docs/js/api-reference-js-ts",editUrl:"https://github.com/SAP/cloud-sdk/edit/main/docs/js/redirect-api-reference-js-ts.mdx",version:"current",lastUpdatedBy:"dependabot[bot]",lastUpdatedAt:1618475550,formattedLastUpdatedAt:"4/15/2021"},d=[],f={toc:d};function p(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},f,r,{components:t,mdxType:"MDXLayout"}),Object(c.b)(i.Redirect,{to:Object(a.a)("docs/js/api"),mdxType:"Redirect"}))}p.isMDXComponent=!0},216:function(e,t,r){"use strict";r.d(t,"a",(function(){return f})),r.d(t,"b",(function(){return b}));var n=r(0),o=r.n(n);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=o.a.createContext({}),d=function(e){var t=o.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},f=function(e){var t=d(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},l=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,c=e.originalType,i=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),f=d(r),l=n,b=f["".concat(i,".").concat(l)]||f[l]||p[l]||c;return r?o.a.createElement(b,a(a({ref:t},s),{},{components:r})):o.a.createElement(b,a({ref:t},s))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=r.length,i=new Array(c);i[0]=l;var a={};for(var u in t)hasOwnProperty.call(t,u)&&(a[u]=t[u]);a.originalType=e,a.mdxType="string"==typeof e?e:n,i[1]=a;for(var s=2;s<c;s++)i[s]=r[s];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,r)}l.displayName="MDXCreateElement"},217:function(e,t,r){"use strict";r.d(t,"b",(function(){return c})),r.d(t,"a",(function(){return i}));var n=r(16),o=r(218);function c(){var e=Object(n.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,r=void 0===t?"/":t,c=e.url;return{withBaseUrl:function(e,t){return function(e,t,r,n){var c=void 0===n?{}:n,i=c.forcePrependBaseUrl,a=void 0!==i&&i,u=c.absolute,s=void 0!==u&&u;if(!r)return r;if(r.startsWith("#"))return r;if(Object(o.b)(r))return r;if(a)return t+r;var d=r.startsWith(t)?r:t+r.replace(/^\//,"");return s?e+d:d}(c,r,e,t)}}}function i(e,t){return void 0===t&&(t={}),(0,c().withBaseUrl)(e,t)}},218:function(e,t,r){"use strict";function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!n(e)}r.d(t,"b",(function(){return n})),r.d(t,"a",(function(){return o}))}}]);