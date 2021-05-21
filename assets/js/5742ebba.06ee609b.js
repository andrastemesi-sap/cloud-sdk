(self.webpackChunksap_cloud_sdk_documentation=self.webpackChunksap_cloud_sdk_documentation||[]).push([[4356],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=u(n),m=o,k=c["".concat(l,".").concat(m)]||c[m]||d[m]||a;return n?r.createElement(k,i(i({ref:t},p),{},{components:n})):r.createElement(k,i({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},1168:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},metadata:function(){return s},toc:function(){return l},default:function(){return p}});var r=n(2122),o=n(9756),a=(n(7294),n(3905)),i={id:"migrate-to-open-source-version-of-cloud-sdk-for-javascript-typescript",title:"Migrate to our Open Source Version",sidebar_label:"Migrate to Open Source",description:"We open-sourced the SAP Cloud SDK for JS/TS in the beginning of 2020. This guide will help you with migration to the open source version.",keywords:["sap","cloud","sdk","cloud native","cloud sdk","sap cloud sdk"]},s={unversionedId:"js/guides/migrate-to-open-source-version-of-cloud-sdk-for-javascript-typescript",id:"js/guides/migrate-to-open-source-version-of-cloud-sdk-for-javascript-typescript",isDocsHomePage:!1,title:"Migrate to our Open Source Version",description:"We open-sourced the SAP Cloud SDK for JS/TS in the beginning of 2020. This guide will help you with migration to the open source version.",source:"@site/docs/js/guides/migrate-to-os.mdx",sourceDirName:"js/guides",slug:"/js/guides/migrate-to-open-source-version-of-cloud-sdk-for-javascript-typescript",permalink:"/cloud-sdk/docs/js/guides/migrate-to-open-source-version-of-cloud-sdk-for-javascript-typescript",editUrl:"https://github.com/SAP/cloud-sdk/edit/main/docs/js/guides/migrate-to-os.mdx",version:"current",lastUpdatedBy:"Emdee89",lastUpdatedAt:1621581097,formattedLastUpdatedAt:"5/21/2021",sidebar_label:"Migrate to Open Source",frontMatter:{id:"migrate-to-open-source-version-of-cloud-sdk-for-javascript-typescript",title:"Migrate to our Open Source Version",sidebar_label:"Migrate to Open Source",description:"We open-sourced the SAP Cloud SDK for JS/TS in the beginning of 2020. This guide will help you with migration to the open source version.",keywords:["sap","cloud","sdk","cloud native","cloud sdk","sap cloud sdk"]},sidebar:"someSidebar",previous:{title:"Shared ESLint configuration",permalink:"/cloud-sdk/docs/js/features/eslint-configuration"},next:{title:"Connecting to External Systems From the Business Application Studio",permalink:"/cloud-sdk/docs/js/guides/bas-external-system"}},l=[{value:"Switch To the Open Source Version",id:"switch-to-the-open-source-version",children:[]},{value:"What About Support and Future Development?",id:"what-about-support-and-future-development",children:[]},{value:"How Can I Report an Issue or Make a Feature Request?",id:"how-can-i-report-an-issue-or-make-a-feature-request",children:[]},{value:"Can I Contribute?",id:"can-i-contribute",children:[]}],u={toc:l};function p(e){var t=e.components,n=(0,o.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"switch-to-the-open-source-version"},"Switch To the Open Source Version"),(0,a.kt)("p",null,"Some packages of the SAP Cloud SDK for JavaScript have been migrated to ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/SAP/cloud-sdk-js"},"github.com"),".\nAs a result, the packages were renamed as shown in the table below.\nNo Breaking changes were made.\nPlease use the new packages from now on."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"old package name"),(0,a.kt)("th",{parentName:"tr",align:null},"new package name"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"@sap/cloud-sdk-util")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"@sap-cloud-sdk/util"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"@sap/cloud-sdk-analytics")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"@sap-cloud-sdk/analytics"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"@sap/cloud-sdk-core")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"@sap-cloud-sdk/core"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"@sap/cloud-sdk-generator")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"@sap-cloud-sdk/generator"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"@sap/cloud-sdk-test-util")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"@sap-cloud-sdk/test-util"))))),(0,a.kt)("h5",{id:"how-to-use-the-open-source-version"},"How To Use the Open Source Version"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Search for all your ",(0,a.kt)("inlineCode",{parentName:"li"},"dependencies"),"/",(0,a.kt)("inlineCode",{parentName:"li"},"devDependencies"),"/",(0,a.kt)("inlineCode",{parentName:"li"},"peerDependencies")," in your ",(0,a.kt)("inlineCode",{parentName:"li"},"package.json"),"."),(0,a.kt)("li",{parentName:"ol"},"Replace the old package name e.g., ",(0,a.kt)("inlineCode",{parentName:"li"},"@sap/cloud-sdk-core")," with the new one e.g.",(0,a.kt)("inlineCode",{parentName:"li"},"@sap-cloud-sdk/core"),"."),(0,a.kt)("li",{parentName:"ol"},"Use a stable version of the SAP Cloud SDK e.g., ",(0,a.kt)("inlineCode",{parentName:"li"},"^1.18.0"),"."),(0,a.kt)("li",{parentName:"ol"},"Delete your ",(0,a.kt)("inlineCode",{parentName:"li"},"node_modules")," and the ",(0,a.kt)("inlineCode",{parentName:"li"},"package-lock.json"),"."),(0,a.kt)("li",{parentName:"ol"},"Install your dependencies, run: ",(0,a.kt)("inlineCode",{parentName:"li"},"npm i"),"."),(0,a.kt)("li",{parentName:"ol"},"Search your source code for references to the old packages (e.g. in import statements) and replace them with the new names.")),(0,a.kt)("h2",{id:"what-about-support-and-future-development"},"What About Support and Future Development?"),(0,a.kt)("p",null,"SAP Cloud SDK team fully maintains the Open Source version which is the only one existing.\nWe continue developing and releasing new functionality as well as supporting developers and fixing found bugs."),(0,a.kt)("h2",{id:"how-can-i-report-an-issue-or-make-a-feature-request"},"How Can I Report an Issue or Make a Feature Request?"),(0,a.kt)("p",null,"Please, create an issue in our ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/SAP/cloud-sdk-js/issues/new/choose"},"GitHub repository"),"."),(0,a.kt)("h2",{id:"can-i-contribute"},"Can I Contribute?"),(0,a.kt)("p",null,"We are happily accepting contributions via pull requests on our ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/SAP/cloud-sdk-js"},"GitHub repository"),"."))}p.isMDXComponent=!0}}]);