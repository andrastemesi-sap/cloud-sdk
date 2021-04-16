(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{216:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return b}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),u=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=u(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},f=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=u(n),f=r,b=d["".concat(i,".").concat(f)]||d[f]||p[f]||o;return n?a.a.createElement(b,s(s({ref:t},l),{},{components:n})):a.a.createElement(b,s({ref:t},l))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},61:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return u}));var r=n(3),a=n(7),o=(n(0),n(216)),i={},s={unversionedId:"js/features/odata/common/operations/delete",id:"js/features/odata/common/operations/delete",isDocsHomePage:!1,title:"delete",description:"The Delete request builder allows you to create DELETE requests, that delete an entity.",source:"@site/docs/js/features/odata/common/operations/delete.mdx",slug:"/js/features/odata/common/operations/delete",permalink:"/cloud-sdk/docs/js/features/odata/common/operations/delete",editUrl:"https://github.com/SAP/cloud-sdk/edit/main/docs/js/features/odata/common/operations/delete.mdx",version:"current",lastUpdatedBy:"Alexander D\xfcmont",lastUpdatedAt:1618533034,formattedLastUpdatedAt:"4/16/2021"},c=[],l={toc:c};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The Delete request builder allows you to create ",Object(o.b)("inlineCode",{parentName:"p"},"DELETE")," requests, that delete an entity."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-ts"},"/*\n  The following won't work on the real SAP S/4HANA BusinessPartner service because BusinessPartners cannot be deleted.\n  We added this only for the sake of the example.\n*/\nBusinessPartner.requestBuilder().delete(businessPartner);\n")),Object(o.b)("p",null,"Entities can only be deleted if ",Object(o.b)("a",{parentName:"p",href:"#handling-of-etags"},"ETags")," match.\nIf you want to force deletion of the entity regardless of the ETag configure the request to ignore version identifiers with ",Object(o.b)("inlineCode",{parentName:"p"},"ignoreVersionIdentifier"),":"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-ts"},"BusinessPartner.requestBuilder()\n  .delete(businessPartner)\n  .ignoreVersionIdentifier();\n")),Object(o.b)("p",null,"You can also overwrite ETags using ",Object(o.b)("inlineCode",{parentName:"p"},"setVersionIdentifier"),":"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-ts"},"BusinessPartner.requestBuilder()\n  .delete(businessPartner)\n  .setVersionIdentifier('etag');\n")),Object(o.b)("p",null,"In the example above the ETag 'ETag' is being used instead of the original one."))}u.isMDXComponent=!0}}]);