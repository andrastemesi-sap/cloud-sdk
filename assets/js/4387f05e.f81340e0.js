(self.webpackChunksap_cloud_sdk_documentation=self.webpackChunksap_cloud_sdk_documentation||[]).push([[6146],{3905:function(e,t,a){"use strict";a.d(t,{Zo:function(){return p},kt:function(){return m}});var r=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function n(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,o=function(e,t){if(null==e)return{};var a,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=r.createContext({}),u=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):n(n({},t),e)),a},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var a=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=u(a),m=o,h=c["".concat(s,".").concat(m)]||c[m]||d[m]||i;return a?r.createElement(h,n(n({ref:t},p),{},{components:a})):r.createElement(h,n({ref:t},p))}));function m(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=a.length,n=new Array(i);n[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,n[1]=l;for(var u=2;u<i;u++)n[u]=a[u];return r.createElement.apply(null,n)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},6402:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return n},metadata:function(){return l},toc:function(){return s},default:function(){return p}});var r=a(2122),o=a(9756),i=(a(7294),a(3905)),n={id:"tutorial-overview-sdk-js",title:"Overview of the Available Tutorials",hide_title:!1,hide_table_of_contents:!1,sidebar_label:"Tutorials Overview",description:"This document will give you an overview of the different tutorials for the SAP Cloud SDK for JavaScript."},l={unversionedId:"js/guides/tutorial-overview-sdk-js",id:"js/guides/tutorial-overview-sdk-js",isDocsHomePage:!1,title:"Overview of the Available Tutorials",description:"This document will give you an overview of the different tutorials for the SAP Cloud SDK for JavaScript.",source:"@site/docs/js/guides/tutorial-overview-sdk-js.md",sourceDirName:"js/guides",slug:"/js/guides/tutorial-overview-sdk-js",permalink:"/cloud-sdk/docs/js/guides/tutorial-overview-sdk-js",editUrl:"https://github.com/SAP/cloud-sdk/edit/main/docs/js/guides/tutorial-overview-sdk-js.md",version:"current",lastUpdatedBy:"Junjie Tang",lastUpdatedAt:1621407970,formattedLastUpdatedAt:"5/19/2021",sidebar_label:"Tutorials Overview",frontMatter:{id:"tutorial-overview-sdk-js",title:"Overview of the Available Tutorials",hide_title:!1,hide_table_of_contents:!1,sidebar_label:"Tutorials Overview",description:"This document will give you an overview of the different tutorials for the SAP Cloud SDK for JavaScript."},sidebar:"someSidebar",previous:{title:"Connecting to External Systems From the Business Application Studio",permalink:"/cloud-sdk/docs/js/guides/bas-external-system"},next:{title:"Use the SAP Cloud SDK in the Browser",permalink:"/cloud-sdk/docs/js/guides/sdk-in-browser"}},s=[{value:"Tutorial Overview",id:"tutorial-overview",children:[{value:"Groups",id:"groups",children:[]},{value:"Tutorials Quick Links",id:"tutorials-quick-links",children:[]}]}],u={toc:s};function p(e){var t=e.components,a=(0,o.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"To give you a quick and easy start to developing with SAP Cloud SDK for JavaScript we created a set of comprehensive tutorials split into missions and groups for a convenient learning path.\nThey'll help you kick-start your project and get you up to speed with the most frequent use-cases and valuable features of the SAP Cloud SDK."),(0,i.kt)("h2",{id:"tutorial-overview"},"Tutorial Overview"),(0,i.kt)("p",null,"Tutorials can also be bundled into groups and missions.\nA group is a series of individual tutorials.\nA mission consists of groups and/or individual tutorials.\nIn this way, you can carry out a more extensive and meaningful learning experience.\nWe recommend ",(0,i.kt)("a",{parentName:"p",href:"https://developers.sap.com/bin/fiji/es/login.sapdxdevs.html"},"creating an account")," to keep track of your progress."),(0,i.kt)("h3",{id:"groups"},"Groups"),(0,i.kt)("p",null,"Groups are a collection of topic-based tutorials."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://developers.sap.com/group.cloudsdk-js-vdm.html"},"Build an Address Manager with the SAP Cloud SDK's OData Virtual Data Model")),(0,i.kt)("p",{parentName:"li"},"Use the SAP Cloud SDK's OData virtual data model by building an address manager application using NestJS.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://developers.sap.com/group.s4sdk-js-cloud-foundry.html"},"Create an App Using SAP Cloud SDK for JavaScript"),"\nCreate your first app on Cloud Foundry using the SAP Cloud SDK for JavaScript."))),(0,i.kt)("h3",{id:"tutorials-quick-links"},"Tutorials Quick Links"),(0,i.kt)("p",null,"Use the links below to quickly access your favorite tutorial and refresh your knowledge."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://developers.sap.com/tutorials/s4sdkjs-prerequisites.html"},"Get Set to Use SAP Cloud SDK for JavaScript")),(0,i.kt)("p",{parentName:"li"},"Set up your environment to use SAP Cloud SDK for JavaScript.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://developers.sap.com/tutorials/s4sdkjs-getting-started.html"},"Get Started with SAP Cloud SDK for JavaScript")),(0,i.kt)("p",{parentName:"li"},"Scaffold an application that is ready to be used with the SAP Cloud SDK for JavaScript.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://developers.sap.com/tutorials/s4sdkjs-odata-service-cloud-foundry.html"},"Create Your First Application with SAP Cloud SDK for JavaScript")),(0,i.kt)("p",{parentName:"li"},"Learn the fundamentals of the SAP Cloud SDK for JavaScript and integrate with an SAP S/4HANA Cloud system.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://developers.sap.com/tutorials/s4sdkjs-deploy-application-cloud-foundry.html"},"Deploy Application to Cloud Foundry with SAP Cloud SDK for JavaScript")),(0,i.kt)("p",{parentName:"li"},"Deploy an existing application and deploy it to Cloud Foundry in SAP Cloud Platform.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://developers.sap.com/tutorials/cloudsdk-js-vdm-getall.html"},"Build OData Queries with the SAP Cloud SDK's Virtual Data Model")),(0,i.kt)("p",{parentName:"li"},"Build OData queries with the SAP Cloud SDK's virtual data model to build an address manager application.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://developers.sap.com/tutorials/cloudsdk-js-vdm-getbykey.html"},"Use OData Navigation Properties with the SAP Cloud SDK's Virtual Data Model")),(0,i.kt)("p",{parentName:"li"},"Use OData navigation properties with the SAP Cloud SDK's virtual data model to build an address manager application.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://developers.sap.com/tutorials/cloudsdk-js-vdm-create.html"},"Create OData Entities with the SAP Cloud SDK's Virtual Data Model")),(0,i.kt)("p",{parentName:"li"},"Create OData entities with the SAP Cloud SDK's virtual data model to build an address manager application.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://developers.sap.com/tutorials/cloudsdk-js-vdm-update.html"},"Update OData Entities with the SAP Cloud SDK's Virtual Data Model")),(0,i.kt)("p",{parentName:"li"},"Update OData entities with the SAP Cloud SDK's virtual data model to build an address manager application.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://developers.sap.com/tutorials/cloudsdk-js-vdm-delete.html"},"Delete OData Entities with the SAP Cloud SDK's Virtual Data Model")),(0,i.kt)("p",{parentName:"li"},"Delete OData entities with the SAP Cloud SDK's virtual data model to build an address manager application.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://developers.sap.com/tutorials/cloudsdk-js-generator.html"},"Generate Custom OData Client Library with SAP Cloud SDK's Generator for JavaScript")),(0,i.kt)("p",{parentName:"li"},"Generate a custom OData client library for the SAP SuccessFactors Candidate service of the Recruiting module.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://developers.sap.com/tutorials/cloudsdk-js-odata-batch-changeset.html"},"Send Multiple OData Requests in Batch Mode with SAP Cloud SDK's Virtual Data Model"),"\nBuild and execute OData batch requests for writing and retrieving data with the SAP Cloud SDK's Virtual Data Model in your Address Manager application."))))}p.isMDXComponent=!0}}]);