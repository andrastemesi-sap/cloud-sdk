(window.webpackJsonp=window.webpackJsonp||[]).push([[68],{146:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return a})),r.d(t,"metadata",(function(){return s})),r.d(t,"toc",(function(){return f})),r.d(t,"default",(function(){return p}));var n=r(3),o=r(7),i=(r(0),r(205)),u=r(209),c=r(206),a={id:"api-reference-js-ts",title:"Redirecting",keywords:["sap","cloud","sdk","cloud native","cloud sdk","sap cloud sdk"]},s={unversionedId:"js/api-reference-js-ts",id:"js/api-reference-js-ts",isDocsHomePage:!1,title:"Redirecting",source:"@site/docs/js/redirect-api-reference-js-ts.mdx",slug:"/js/api-reference-js-ts",permalink:"/cloud-sdk/docs/js/api-reference-js-ts",editUrl:"https://github.com/SAP/cloud-sdk/edit/main/docs/js/redirect-api-reference-js-ts.mdx",version:"current",lastUpdatedBy:"Florian Richter",lastUpdatedAt:1613990839},f=[],d={toc:f};function p(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},d,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)(u.Redirect,{to:Object(c.a)("docs/js/api"),mdxType:"Redirect"}))}p.isMDXComponent=!0},205:function(e,t,r){"use strict";r.d(t,"a",(function(){return d})),r.d(t,"b",(function(){return b}));var n=r(0),o=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=o.a.createContext({}),f=function(e){var t=o.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},d=function(e){var t=f(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},l=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,u=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),d=f(r),l=n,b=d["".concat(u,".").concat(l)]||d[l]||p[l]||i;return r?o.a.createElement(b,c(c({ref:t},s),{},{components:r})):o.a.createElement(b,c({ref:t},s))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,u=new Array(i);u[0]=l;var c={};for(var a in t)hasOwnProperty.call(t,a)&&(c[a]=t[a]);c.originalType=e,c.mdxType="string"==typeof e?e:n,u[1]=c;for(var s=2;s<i;s++)u[s]=r[s];return o.a.createElement.apply(null,u)}return o.a.createElement.apply(null,r)}l.displayName="MDXCreateElement"},206:function(e,t,r){"use strict";r.d(t,"b",(function(){return i})),r.d(t,"a",(function(){return u}));var n=r(21),o=r(207);function i(){var e=Object(n.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,r=void 0===t?"/":t,i=e.url;return{withBaseUrl:function(e,t){return function(e,t,r,n){var i=void 0===n?{}:n,u=i.forcePrependBaseUrl,c=void 0!==u&&u,a=i.absolute,s=void 0!==a&&a;if(!r)return r;if(r.startsWith("#"))return r;if(Object(o.b)(r))return r;if(c)return t+r;var f=r.startsWith(t)?r:t+r.replace(/^\//,"");return s?e+f:f}(i,r,e,t)}}}function u(e,t){return void 0===t&&(t={}),(0,i().withBaseUrl)(e,t)}},207:function(e,t,r){"use strict";function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!n(e)}r.d(t,"b",(function(){return n})),r.d(t,"a",(function(){return o}))},209:function(e,t,r){"use strict";r.r(t);var n=r(10);r.d(t,"MemoryRouter",(function(){return n.d})),r.d(t,"Prompt",(function(){return n.f})),r.d(t,"Redirect",(function(){return n.g})),r.d(t,"Route",(function(){return n.h})),r.d(t,"Router",(function(){return n.i})),r.d(t,"StaticRouter",(function(){return n.j})),r.d(t,"Switch",(function(){return n.k})),r.d(t,"generatePath",(function(){return n.l})),r.d(t,"matchPath",(function(){return n.m})),r.d(t,"useHistory",(function(){return n.n})),r.d(t,"useLocation",(function(){return n.o})),r.d(t,"useParams",(function(){return n.p})),r.d(t,"useRouteMatch",(function(){return n.q})),r.d(t,"withRouter",(function(){return n.r})),r.d(t,"BrowserRouter",(function(){return n.a})),r.d(t,"HashRouter",(function(){return n.b})),r.d(t,"Link",(function(){return n.c})),r.d(t,"NavLink",(function(){return n.e}))}}]);