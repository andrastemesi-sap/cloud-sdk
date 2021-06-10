(self.webpackChunksap_cloud_sdk_documentation=self.webpackChunksap_cloud_sdk_documentation||[]).push([[2431],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=p(n),f=a,m=d["".concat(l,".").concat(f)]||d[f]||c[f]||s;return n?r.createElement(m,o(o({ref:t},u),{},{components:n})):r.createElement(m,o({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,o=new Array(s);o[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var p=2;p<s;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},873:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},metadata:function(){return i},toc:function(){return l},default:function(){return u}});var r=n(2122),a=n(9756),s=(n(7294),n(3905)),o={},i={unversionedId:"js/features/odata/v2/select",id:"js/features/odata/v2/select",isDocsHomePage:!1,title:"select",description:"When reading entities, the API offers select( ... ) on the builders.",source:"@site/docs/js/features/odata/v2/select.mdx",sourceDirName:"js/features/odata/v2",slug:"/js/features/odata/v2/select",permalink:"/cloud-sdk/docs/js/features/odata/v2/select",editUrl:"https://github.com/SAP/cloud-sdk/edit/main/docs/js/features/odata/v2/select.mdx",version:"current",lastUpdatedBy:"dependabot[bot]",lastUpdatedAt:1623312226,formattedLastUpdatedAt:"6/10/2021",frontMatter:{}},l=[],p={toc:l};function u(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,s.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"When reading entities, the API offers ",(0,s.kt)("inlineCode",{parentName:"p"},"select( ... )")," on the builders.\nThrough it, the query parameters ",(0,s.kt)("inlineCode",{parentName:"p"},"$select")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"$expand")," are set.\nIt restricts the response to the given selection of properties in the request."),(0,s.kt)("p",null,"The properties that can be selected or expanded are represented via static fields on the entity class.\nSo there will be a field for each property.\nE.g. the business partner entity has ",(0,s.kt)("inlineCode",{parentName:"p"},"BusinessPartner.FIRST_NAME")," as a representation of a property and ",(0,s.kt)("inlineCode",{parentName:"p"},"BusinessPartner.TO_BUSINESS_PARTNER_ADDRESS")," as a representation of a navigation property."),(0,s.kt)("p",null,"A navigation property means that there is a relation between a business partner and their addresses.\nIn this case, one business partner can have multiple addresses.\nIn SAP S/4HANA, navigation properties typically start with ",(0,s.kt)("inlineCode",{parentName:"p"},"TO_"),"."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"BusinessPartner.requestBuilder()\n  .getAll()\n  .select(\n    BusinessPartner.FIRST_NAME,\n    BusinessPartner.LAST_NAME,\n    BusinessPartner.TO_BUSINESS_PARTNER_ADDRESS\n  )\n  .execute(destination);\n")),(0,s.kt)("p",null,"The above translates to the following query parameters:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sql"},"$select=FirstName,LastName,to_BusinessPartnerAddress/*&$expand=to_BusinessPartnerAddress\n")),(0,s.kt)("p",null,"One can also select properties of the expanded navigation property:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"BusinessPartner.requestBuilder()\n  .getAll()\n  .select(\n    BusinessPartner.FIRST_NAME,\n    BusinessPartner.TO_BUSINESS_PARTNER_ADDRESS.select(\n      BusinessPartnerAddress.ADDRESS_ID,\n      BusinessPartnerAddress.CITY_CODE\n    )\n  )\n  .execute(destination);\n")),(0,s.kt)("p",null,"The above translates to the following query parameters:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sql"},"$select=FirstName,to_BusinessPartnerAddress/AddressID,to_BusinessPartnerAddress/CityCode&$expand=to_BusinessPartnerAddress\n")))}u.isMDXComponent=!0}}]);