(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{182:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return b}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),u=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=u(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},f=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),s=u(n),f=r,b=s["".concat(l,".").concat(f)]||s[f]||d[f]||o;return n?a.a.createElement(b,i(i({ref:t},p),{},{components:n})):a.a.createElement(b,i({ref:t},p))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=f;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var p=2;p<o;p++)l[p]=n[p];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},74:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return u}));var r=n(2),a=n(6),o=(n(0),n(182)),l={},i={unversionedId:"js/features/odata/v4/filter-parent-child",id:"js/features/odata/v4/filter-parent-child",isDocsHomePage:!1,title:"filter-parent-child",description:"Depending on the context of the filter it will either filter the parent or the children.",source:"@site/docs/js/features/odata/v4/filter-parent-child.mdx",slug:"/js/features/odata/v4/filter-parent-child",permalink:"/cloud-sdk/docs/js/features/odata/v4/filter-parent-child",editUrl:"https://github.com/SAP/cloud-sdk/edit/main/docs/js/features/odata/v4/filter-parent-child.mdx",version:"current",lastUpdatedBy:"Frank Essenberger",lastUpdatedAt:1601906093},c=[],p={rightToc:c};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Depending on the context of the filter it will either filter the parent or the children.\nIn our example we have a ",Object(o.b)("inlineCode",{parentName:"p"},"PERSON")," related to 0..N ",Object(o.b)("inlineCode",{parentName:"p"},"FRIENDS")," which are both of type people."),Object(o.b)("p",null,"If you want to get all people with first name ",Object(o.b)("inlineCode",{parentName:"p"},"John")," the query is:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts"}),"People.requestBuilder().getAll()\n    .filter(People.FIRST_NAME.equals('John'))\n")),Object(o.b)("p",null,"If you want to get all people who have at least one friend with first name ",Object(o.b)("inlineCode",{parentName:"p"},"John")," the query is:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts"}),"People.requestBuilder().getAll().filter(People.FRIENDS\n    .filter(\n        any(People.FIRST_NAME.equals('John'))\n    )\n)\n")),Object(o.b)("p",null,"The lambda ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"pathname:///api/1.28.1/modules/sap_cloud_sdk_core#all"}),"all")," would enforce that all friends must have first name ",Object(o.b)("inlineCode",{parentName:"p"},"John"),".\nThe two queries above filter the parent entity person."),Object(o.b)("p",null,"In case you want to get all people but reduce the friends in the response, the filter has to be inside the expand:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts"}),"People.requestBuilder().getAll()\n    .expand(People.FRIENDS\n        .filter(People.FIRST_NAME.equals('John'))\n    )\n")),Object(o.b)("p",null,"This will return all people but only the friends with first name ",Object(o.b)("inlineCode",{parentName:"p"},"John")," will be included in the response."))}u.isMDXComponent=!0}}]);