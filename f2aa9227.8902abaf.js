(window.webpackJsonp=window.webpackJsonp||[]).push([[126],{212:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),l=function(e){var t=a.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},y=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=l(n),y=r,m=p["".concat(s,".").concat(y)]||p[y]||d[y]||o;return n?a.a.createElement(m,i(i({ref:t},u),{},{components:n})):a.a.createElement(m,i({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=y;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var u=2;u<o;u++)s[u]=n[u];return a.a.createElement.apply(null,s)}return a.a.createElement.apply(null,n)}y.displayName="MDXCreateElement"},81:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return l}));var r=n(3),a=n(7),o=(n(0),n(212)),s={},i={unversionedId:"js/features/odata/common/entity/entity",id:"js/features/odata/common/entity/entity",isDocsHomePage:!1,title:"entity",description:"In OData, entity collections are the resource against which you execute requests and CRUD operations.",source:"@site/docs/js/features/odata/common/entity/entity.mdx",slug:"/js/features/odata/common/entity/entity",permalink:"/cloud-sdk/docs/js/features/odata/common/entity/entity",editUrl:"https://github.com/SAP/cloud-sdk/edit/main/docs/js/features/odata/common/entity/entity.mdx",version:"current",lastUpdatedBy:"Suhas Rao",lastUpdatedAt:1614852208},c=[],u={toc:c};function l(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"In OData, entity collections are the resource against which you execute requests and CRUD operations.\nThe SAP Cloud SDK operates on entity classes, that represent those resources."),Object(o.b)("p",null,"An OData JSON representation of a single business partner could be something like this:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-json"}),'{\n  "FirstName": "Peter",\n  "LastName": "Pan",\n  "to_BusinessPartnerAddress": [\n    {\n      "Country": "Neverland"\n    }\n  ]\n}\n')),Object(o.b)("p",null,"When using the SAP Cloud SDK this entity would be represented as an instance of the ",Object(o.b)("inlineCode",{parentName:"p"},"BusinessPartner")," entity class from the according business partner service.\nThe properties of entity class instances are held in camel case as is common in JavaScript:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"BusinessPartner {\n  firstName: 'Peter',\n  lastName: 'Pan',\n  toBusinessPartnerAddress: [ BusinessPartnerAddress { country: 'Neverland' } ]\n}\n")),Object(o.b)("p",null,"OData responses, that contain entities are automatically deserialized to the respective entity class when using the SAP Cloud SDK.\nTo execute create or update requests you have to build an instance of an entity class, that represents the data to be created or updated.\nThere are three ways to build entities on your own as described below."))}l.isMDXComponent=!0}}]);