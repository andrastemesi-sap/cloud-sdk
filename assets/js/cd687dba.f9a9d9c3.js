(window.webpackJsonp=window.webpackJsonp||[]).push([[114],{188:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return c})),a.d(t,"toc",(function(){return l})),a.d(t,"default",(function(){return u}));var r=a(3),n=a(7),o=(a(0),a(221)),i={id:"sap-xsuaa-security-library-for-javascript-and-java",title:"XSUAA Programming Model",sidebar_label:"XSUAA Service",keywords:["sap","cloud","sdk","cloud native","cloud sdk","sap cloud sdk"]},c={unversionedId:"related-projects/sap-xsuaa-security-library-for-javascript-and-java",id:"related-projects/sap-xsuaa-security-library-for-javascript-and-java",isDocsHomePage:!1,title:"XSUAA Programming Model",description:"What are the User Account and Authentication for Cloud Foundry?",source:"@site/docs/related-projects/xsuaa.mdx",slug:"/related-projects/sap-xsuaa-security-library-for-javascript-and-java",permalink:"/cloud-sdk/docs/related-projects/sap-xsuaa-security-library-for-javascript-and-java",editUrl:"https://github.com/SAP/cloud-sdk/edit/main/docs/related-projects/xsuaa.mdx",version:"current",lastUpdatedBy:"Junjie Tang",lastUpdatedAt:1619347023,formattedLastUpdatedAt:"4/25/2021",sidebar_label:"XSUAA Service",sidebar:"someSidebar",previous:{title:"Cloud Application Model",permalink:"/cloud-sdk/docs/related-projects/cloud-application-model"},next:{title:'Project "Piper": Continuous Delivery for the SAP Ecosystem',permalink:"/cloud-sdk/docs/related-projects/project-piper"}},l=[{value:"What are the User Account and Authentication for Cloud Foundry?",id:"what-are-the-user-account-and-authentication-for-cloud-foundry",children:[]},{value:"SAP Business Technology Platform XSUAA Service",id:"sap-business-technology-platform-xsuaa-service",children:[]},{value:"XSUAA Client Libraries",id:"xsuaa-client-libraries",children:[]},{value:"Integration With the SAP Cloud SDK",id:"integration-with-the-sap-cloud-sdk",children:[]},{value:"Useful Links",id:"useful-links",children:[]}],s={toc:l};function u(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"what-are-the-user-account-and-authentication-for-cloud-foundry"},"What are the User Account and Authentication for Cloud Foundry?"),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"https://help.sap.com/viewer/3504ec5ef16548778610c7e89cc0eac3/Cloud/en-US/9c7092c7b7ae4d49bc8ae35fdd0e0b18.html"},"Cloud Foundry")," is one of the key environments of the ",Object(o.b)("a",{parentName:"p",href:"https://www.sap.com/products/cloud-platform.html"},"SAP Business Technology Platform"),"."),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"https://docs.cloudfoundry.org/concepts/architecture/uaa.html"},"User Account and Authentication (UAA)")," is the identity and management service for Cloud Foundry."),Object(o.b)("h2",{id:"sap-business-technology-platform-xsuaa-service"},"SAP Business Technology Platform XSUAA Service"),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"https://help.sap.com/viewer/65de2977205c403bbc107264b8eccf4b/Cloud/en-US/ea0281368f11472b8d2b145a2a28666c.html"},"XSUAA")," is an implementation of UAA service from SAP to be used with SAP Business Technology Platform.\nIt greatly extends capabilities for the SAP BTP UAA service for the Cloud Foundry environment by providing:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Service broker"),Object(o.b)("li",{parentName:"ul"},"Support for multitenancy"),Object(o.b)("li",{parentName:"ul"},"API management functions"),Object(o.b)("li",{parentName:"ul"},"Other SAP specific advantages to authentication and authorization in business applications")),Object(o.b)("h2",{id:"xsuaa-client-libraries"},"XSUAA Client Libraries"),Object(o.b)("p",null,"To simplify application development XSUAA service provides client libraries for Java and JavaScript."),Object(o.b)("p",null,"The library for Java is Open Source and ",Object(o.b)("a",{parentName:"p",href:"https://github.com/SAP/cloud-security-xsuaa-integration"},"available on GitHub"),"."),Object(o.b)("p",null,"The library for JavaScript is delivered via ",Object(o.b)("a",{parentName:"p",href:"https://www.npmjs.com/package/@sap/xssec"},"npm")," and is not open source at the moment."),Object(o.b)("h2",{id:"integration-with-the-sap-cloud-sdk"},"Integration With the SAP Cloud SDK"),Object(o.b)("p",null,"The SAP Cloud SDK for Java has migrated its authentication flows from our implementation to a stable version of the Java XSUAA library.\nThis ensures full coverage of authentication methods available on the SAP Business Technology Platform with a high level of security and ongoing updates provided by the underlying library.\nInitial support is available since version ",Object(o.b)("a",{parentName:"p",href:"../java/release-notes-sap-cloud-sdk-for-java#3161"},"3.16.1 of the SAP Cloud SDK for Java"),"."),Object(o.b)("p",null,"The SAP Cloud SDK for JavaScript handles XSUAA service on its own without using an official library.\nThe reason for this was the library being in active development and lingering behind SAP Cloud SDK's needs.\nOnce the library is stable, the SAP Cloud SDK will consider migration.\nFollow our ",Object(o.b)("a",{parentName:"p",href:"../js/release-notes-sap-cloud-sdk-for-javascript-and-typescript"},"release notes")," to find out when the migration happens."),Object(o.b)("h2",{id:"useful-links"},"Useful Links"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"A short but great blog by Martin Blust about ",Object(o.b)("a",{parentName:"li",href:"https://blogs.sap.com/2019/01/07/uaa-xsuaa-platform-uaa-cfuaa-what-is-it-all-about/"},"XSUAA and alike"))))}u.isMDXComponent=!0},221:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return f}));var r=a(0),n=a.n(r);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=n.a.createContext({}),u=function(e){var t=n.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},p=function(e){var t=u(e.components);return n.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},b=n.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(a),b=r,f=p["".concat(i,".").concat(b)]||p[b]||d[b]||o;return a?n.a.createElement(f,c(c({ref:t},s),{},{components:a})):n.a.createElement(f,c({ref:t},s))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=b;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var s=2;s<o;s++)i[s]=a[s];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,a)}b.displayName="MDXCreateElement"}}]);