(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{181:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),d=function(e){var t=a.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},l=function(e){var t=d(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},f=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),l=d(n),f=r,m=l["".concat(s,".").concat(f)]||l[f]||p[f]||o;return n?a.a.createElement(m,c(c({ref:t},u),{},{components:n})):a.a.createElement(m,c({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=f;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:r,s[1]=c;for(var u=2;u<o;u++)s[u]=n[u];return a.a.createElement.apply(null,s)}return a.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},49:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return i})),n.d(t,"default",(function(){return d}));var r=n(2),a=n(6),o=(n(0),n(181)),s={},c={unversionedId:"js/features/odata/common/operations/create-as-child-of",id:"js/features/odata/common/operations/create-as-child-of",isDocsHomePage:!1,title:"create-as-child-of",description:"Assume you have already created a business partner and would like to add a new address to it:",source:"@site/docs/js/features/odata/common/operations/create-as-child-of.mdx",slug:"/js/features/odata/common/operations/create-as-child-of",permalink:"/cloud-sdk/docs/js/features/odata/common/operations/create-as-child-of",editUrl:"https://github.com/SAP/cloud-sdk/edit/documentation/docs/js/features/odata/common/operations/create-as-child-of.mdx",version:"current",lastUpdatedBy:"Frank Essenberger",lastUpdatedAt:1601906093},i=[],u={rightToc:i};function d(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Assume you have already created a business partner and would like to add a new address to it:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts"}),"const existingBusinessPartner = await BusinessPartner.requestBuilder().getByKey(myID).execute(myDestination);\n\nconst newAddress = BusinessPartnerAddress.builder()\n  .country('DE')\n  .postalCode('14469')\n  .cityName('Potsdam')\n  .streetName('Konrad-Zuse-Ring')\n  .houseNumber('10')\n  .build()\n")),Object(o.b)("p",null,"This can be done by using the ",Object(o.b)("inlineCode",{parentName:"p"},"asChildOf")," method which allows to create an entity as a child of an existing entity.\nYou need to give the parent object and the field connecting the two entities:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts"}),"BusinessPartnerAddress.requestBuilder()\n  .create(newAddress)\n  .asChildOf(existingBusinessPartner,BusinessPartner.TO_BUSINESS_PARTNER_ADDRESS)\n  .execute(myDestination)\n")))}d.isMDXComponent=!0}}]);