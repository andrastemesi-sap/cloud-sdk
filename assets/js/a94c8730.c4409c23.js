(window.webpackJsonp=window.webpackJsonp||[]).push([[83],{162:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return i})),r.d(t,"toc",(function(){return l})),r.d(t,"default",(function(){return u}));var n=r(3),a=r(7),o=(r(0),r(220)),c={title:"Generate Clients for OData",hide_title:!1,hide_table_of_contents:!1,sidebar_label:"Generate Clients for OData",description:"Use the SAP Cloud SDK CLI to generate a client for any OData service.",keywords:["sap","cloud","sdk","cli","command","line","JavaScript","TypeScript"]},i={unversionedId:"js/features/cli/generator",id:"js/features/cli/generator",isDocsHomePage:!1,title:"Generate Clients for OData",description:"Use the SAP Cloud SDK CLI to generate a client for any OData service.",source:"@site/docs/js/features/cli/generator.mdx",slug:"/js/features/cli/generator",permalink:"/cloud-sdk/docs/js/features/cli/generator",editUrl:"https://github.com/SAP/cloud-sdk/edit/main/docs/js/features/cli/generator.mdx",version:"current",lastUpdatedBy:"Emdee89",lastUpdatedAt:1619164264,formattedLastUpdatedAt:"4/23/2021",sidebar_label:"Generate Clients for OData",sidebar:"someSidebar",previous:{title:"Deploy to SAP Business Technology Platform",permalink:"/cloud-sdk/docs/js/features/cli/package"},next:{title:"Error Handling",permalink:"/cloud-sdk/docs/js/features/error-handling"}},l=[],s={toc:l};function u(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The SAP Cloud SDK CLI wraps the generator available in the SAP Cloud SDK.\nRight now the generator needs to be installed globally to be called through the CLI.\nWe are working to fully integrate the OData generator, the OpenAPI generator and the CLI."),Object(o.b)("p",null,"To learn more about generation, check ",Object(o.b)("a",{parentName:"p",href:"/cloud-sdk/docs/js/features/odata/generate-odata-client"},"the OData generator")," and ",Object(o.b)("a",{parentName:"p",href:"/cloud-sdk/docs/js/features/openapi/generate-openapi-client"},"the OpenAPI generator"),"."))}u.isMDXComponent=!0},220:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return b}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=a.a.createContext({}),u=function(e){var t=a.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=u(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},f=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(r),f=n,b=p["".concat(c,".").concat(f)]||p[f]||d[f]||o;return r?a.a.createElement(b,i(i({ref:t},s),{},{components:r})):a.a.createElement(b,i({ref:t},s))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,c=new Array(o);c[0]=f;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var s=2;s<o;s++)c[s]=r[s];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"}}]);