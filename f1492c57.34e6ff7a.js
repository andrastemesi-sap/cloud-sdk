(window.webpackJsonp=window.webpackJsonp||[]).push([[119],{204:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return f}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),s=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=s(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),d=s(n),b=a,f=d["".concat(i,".").concat(b)]||d[b]||u[b]||o;return n?r.a.createElement(f,c(c({ref:t},l),{},{components:n})):r.a.createElement(f,c({ref:t},l))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=b;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},85:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return s}));var a=n(3),r=n(7),o=(n(0),n(204)),i={},c={unversionedId:"js/features/odata/v4/expand-select",id:"js/features/odata/v4/expand-select",isDocsHomePage:!1,title:"expand-select",description:"In contrast to the OData v2 implementation, you have to select and expand separately.",source:"@site/docs/js/features/odata/v4/expand-select.mdx",slug:"/js/features/odata/v4/expand-select",permalink:"/cloud-sdk/docs/js/features/odata/v4/expand-select",editUrl:"https://github.com/SAP/cloud-sdk/edit/main/docs/js/features/odata/v4/expand-select.mdx",version:"current",lastUpdatedBy:"KavithaSiva",lastUpdatedAt:1611913546},p=[],l={toc:p};function s(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"In contrast to the OData v2 implementation, you have to ",Object(o.b)("inlineCode",{parentName:"p"},"select")," and ",Object(o.b)("inlineCode",{parentName:"p"},"expand")," separately.\nIn other words selected properties are not expanded automatically as in v2."),Object(o.b)("p",null,"The reason for this difference originates in the way select and expand work in OData v4.\nIn OData v4 you select within the expand argument ",Object(o.b)("inlineCode",{parentName:"p"},"$expand=Friends($select=FirstName)")," whereas in OData v2 you select via a path ",Object(o.b)("inlineCode",{parentName:"p"},"$select=Friends/FirstName&$expand=Friends"),".\nThat's why we mimic this behavior for ",Object(o.b)("inlineCode",{parentName:"p"},"select")," and ",Object(o.b)("inlineCode",{parentName:"p"},"expand")," operations in our API for OData v4 type-safe client."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"People.requestBuilder()\n  .getAll()\n  .select(People.LAST_NAME)\n  .expand(People.FRIENDS.select(People.FIRST_NAME, People.ADDRESS_INFO));\n")),Object(o.b)("p",null,"In the example above you select the ",Object(o.b)("inlineCode",{parentName:"p"},"LAST_NAME")," of the root entity and expand the navigation property ",Object(o.b)("inlineCode",{parentName:"p"},"FRIENDS"),".\nIn the expanded entity the selected fields are ",Object(o.b)("inlineCode",{parentName:"p"},"FIRST_NAME")," and ",Object(o.b)("inlineCode",{parentName:"p"},"ADDRESS_INFO"),"."),Object(o.b)("p",null,"The generated URL for this request will be:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sql"}),"/People?$select=LastName&$expand=Friends($select=FirstName,AddressInfo)\n")),Object(o.b)("p",null,"If no ",Object(o.b)("inlineCode",{parentName:"p"},"select")," is given, all non-navigational properties are included in the response."))}s.isMDXComponent=!0}}]);