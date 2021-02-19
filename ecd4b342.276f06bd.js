(window.webpackJsonp=window.webpackJsonp||[]).push([[114],{205:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),d=function(e){var t=a.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=d(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),l=d(n),b=r,m=l["".concat(s,".").concat(b)]||l[b]||p[b]||o;return n?a.a.createElement(m,i(i({ref:t},u),{},{components:n})):a.a.createElement(m,i({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=b;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var u=2;u<o;u++)s[u]=n[u];return a.a.createElement.apply(null,s)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},77:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return d}));var r=n(3),a=n(7),o=(n(0),n(205)),s={},i={unversionedId:"js/features/odata/common/operations/deep-create",id:"js/features/odata/common/operations/deep-create",isDocsHomePage:!1,title:"deep-create",description:"It is also possible to create an entity together with related entities in a single request:",source:"@site/docs/js/features/odata/common/operations/deep-create.mdx",slug:"/js/features/odata/common/operations/deep-create",permalink:"/cloud-sdk/docs/js/features/odata/common/operations/deep-create",editUrl:"https://github.com/SAP/cloud-sdk/edit/main/docs/js/features/odata/common/operations/deep-create.mdx",version:"current",lastUpdatedBy:"Alexander D\xfcmont",lastUpdatedAt:1613762290},c=[],u={toc:c};function d(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"It is also possible to create an entity together with related entities in a single request:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts"}),"// build a business partner instance with one linked address\nconst businessPartner = BusinessPartner.builder()\n  .firstName('John')\n  .lastName('Doe')\n  .businessPartnerCategory('1')\n  .toBusinessPartnerAddress([\n    BusinessPartnerAddress.builder()\n      .country('DE')\n      .postalCode('14469')\n      .cityName('Potsdam')\n      .streetName('Konrad-Zuse-Ring')\n      .houseNumber('10')\n      .build()\n  ])\n  .build();\n\n// execute the create request\nBusinessPartner.requestBuilder().create(businessPartner).execute(myDestination);\n")),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"Troubleshooting")),Object(o.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"When you try the example code above for testing the ",Object(o.b)("inlineCode",{parentName:"p"},"deep creat")," feature, you might see some errors like ",Object(o.b)("inlineCode",{parentName:"p"},'"operation module BUA_CHECK_ADDRESS_VALIDITY_ALL; a check table is missing"'),".\nTypically, it can happen if you are using a new system with a default configuration.\nYou need to configure an ",Object(o.b)("inlineCode",{parentName:"p"},"address usage")," field as shown in the example below to fix it."))),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts"}),"const businessPartner = BusinessPartner.builder()\n  .firstName('John')\n  .lastName('Doe')\n  .businessPartnerCategory('1')\n  .toBusinessPartnerAddress([\n    BusinessPartnerAddress.builder()\n      .country('DE')\n      .postalCode('14469')\n      .cityName('Potsdam')\n      .streetName('Konrad-Zuse-Ring')\n      .houseNumber('10')\n      // additional code starts\n      .toAddressUsage([\n        BuPaAddressUsage.builder().addressUsage('XXDEFAULT').build()\n      ])\n      .build()\n  ])\n  .build();\n")),Object(o.b)("p",null,"You can also create an entity ",Object(o.b)("inlineCode",{parentName:"p"},"asChildOf")," another entity."))}d.isMDXComponent=!0}}]);