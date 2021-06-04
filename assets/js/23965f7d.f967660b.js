(self.webpackChunksap_cloud_sdk_documentation=self.webpackChunksap_cloud_sdk_documentation||[]).push([[7964],{3905:function(t,e,r){"use strict";r.d(e,{Zo:function(){return d},kt:function(){return l}});var n=r(7294);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function c(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},o=Object.keys(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var u=n.createContext({}),s=function(t){var e=n.useContext(u),r=e;return t&&(r="function"==typeof t?t(e):i(i({},e),t)),r},d=function(t){var e=s(t.components);return n.createElement(u.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},f=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,o=t.originalType,u=t.parentName,d=c(t,["components","mdxType","originalType","parentName"]),f=s(r),l=a,y=f["".concat(u,".").concat(l)]||f[l]||p[l]||o;return r?n.createElement(y,i(i({ref:e},d),{},{components:r})):n.createElement(y,i({ref:e},d))}));function l(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=r.length,i=new Array(o);i[0]=f;var c={};for(var u in e)hasOwnProperty.call(e,u)&&(c[u]=e[u]);c.originalType=t,c.mdxType="string"==typeof t?t:a,i[1]=c;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},3919:function(t,e,r){"use strict";function n(t){return!0===/^(\w*:|\/\/)/.test(t)}function a(t){return void 0!==t&&!n(t)}r.d(e,{b:function(){return n},Z:function(){return a}})},4996:function(t,e,r){"use strict";r.d(e,{C:function(){return o},Z:function(){return i}});var n=r(2263),a=r(3919);function o(){var t=(0,n.default)().siteConfig,e=(t=void 0===t?{}:t).baseUrl,r=void 0===e?"/":e,o=t.url;return{withBaseUrl:function(t,e){return function(t,e,r,n){var o=void 0===n?{}:n,i=o.forcePrependBaseUrl,c=void 0!==i&&i,u=o.absolute,s=void 0!==u&&u;if(!r)return r;if(r.startsWith("#"))return r;if((0,a.b)(r))return r;if(c)return e+r;var d=r.startsWith(e)?r:e+r.replace(/^\//,"");return s?t+d:d}(o,r,t,e)}}}function i(t,e){return void 0===e&&(e={}),(0,o().withBaseUrl)(t,e)}},6166:function(t,e,r){"use strict";r.r(e),r.d(e,{frontMatter:function(){return u},metadata:function(){return s},toc:function(){return d},default:function(){return f}});var n=r(2122),a=r(9756),o=(r(7294),r(3905)),i=r(5977),c=r(4996),u={id:"use-typed-odata-client-for-javascript-and-typescript",title:"Redirecting",keywords:["sap","cloud","sdk","cloud native","cloud sdk","sap cloud sdk"]},s={unversionedId:"js/features/odata/use-typed-odata-client-for-javascript-and-typescript",id:"js/features/odata/use-typed-odata-client-for-javascript-and-typescript",isDocsHomePage:!1,title:"Redirecting",description:"",source:"@site/docs/js/features/odata/redirect-use-typed-odata-client-for-javascript-and-typescript.mdx",sourceDirName:"js/features/odata",slug:"/js/features/odata/use-typed-odata-client-for-javascript-and-typescript",permalink:"/cloud-sdk/docs/js/features/odata/use-typed-odata-client-for-javascript-and-typescript",editUrl:"https://github.com/SAP/cloud-sdk/edit/main/docs/js/features/odata/redirect-use-typed-odata-client-for-javascript-and-typescript.mdx",version:"current",lastUpdatedBy:"Matthias Kuhr",lastUpdatedAt:1622791465,formattedLastUpdatedAt:"6/4/2021",frontMatter:{id:"use-typed-odata-client-for-javascript-and-typescript",title:"Redirecting",keywords:["sap","cloud","sdk","cloud native","cloud sdk","sap cloud sdk"]}},d=[],p={toc:d};function f(t){var e=t.components,r=(0,a.Z)(t,["components"]);return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:e,mdxType:"MDXLayout"}),(0,o.kt)(i.l_,{to:(0,c.Z)("docs/js/features/odata/odata-v2-client"),mdxType:"Redirect"}))}f.isMDXComponent=!0}}]);