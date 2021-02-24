(window.webpackJsonp=window.webpackJsonp||[]).push([[99],{205:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return f}));var r=n(0),s=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,s=function(e,t){if(null==e)return{};var n,r,s={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var u=s.a.createContext({}),d=function(e){var t=s.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=d(e.components);return s.a.createElement(u.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return s.a.createElement(s.a.Fragment,{},t)}},l=s.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=d(n),l=r,f=p["".concat(o,".").concat(l)]||p[l]||b[l]||a;return n?s.a.createElement(f,c(c({ref:t},u),{},{components:n})):s.a.createElement(f,c({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=l;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var u=2;u<a;u++)o[u]=n[u];return s.a.createElement.apply(null,o)}return s.a.createElement.apply(null,n)}l.displayName="MDXCreateElement"},75:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return i})),n.d(t,"default",(function(){return d}));var r=n(3),s=n(7),a=(n(0),n(205)),o={},c={unversionedId:"js/features/odata/common/batch/retrieve-request",id:"js/features/odata/common/batch/retrieve-request",isDocsHomePage:!1,title:"retrieve-request",description:"A retrieve request is any HTTP GET request.",source:"@site/docs/js/features/odata/common/batch/retrieve-request.mdx",slug:"/js/features/odata/common/batch/retrieve-request",permalink:"/cloud-sdk/docs/js/features/odata/common/batch/retrieve-request",editUrl:"https://github.com/SAP/cloud-sdk/edit/main/docs/js/features/odata/common/batch/retrieve-request.mdx",version:"current",lastUpdatedBy:"Marika Marszalkowski",lastUpdatedAt:1614127601},i=[],u={toc:i};function d(e){var t=e.components,n=Object(s.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"A retrieve request is any HTTP ",Object(a.b)("inlineCode",{parentName:"p"},"GET")," request.\nIn terms of the SAP Cloud SDK this includes all requests built by a ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"#getall-request-builder"}),"GetAllRequestBuilder")," and ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"#getbykey-request-builder"}),"GetByKeyRequestBuilder"),"."),Object(a.b)("p",null,"Retrieve requests can be passed directly to the ",Object(a.b)("inlineCode",{parentName:"p"},"batch")," function, which in turn can be executed once to execute all subrequests.\nOnce a batch request is executed it returns a list of ",Object(a.b)("inlineCode",{parentName:"p"},"BatchResponse"),"s.\nThose contain the raw response information of each subrequest, the subresponse to a retrieve subrequest can either be a ",Object(a.b)("inlineCode",{parentName:"p"},"ReadResponse")," or an ",Object(a.b)("inlineCode",{parentName:"p"},"ErrorResponse"),".\nTo determine if a request was successful use ",Object(a.b)("inlineCode",{parentName:"p"},".isSuccess()"),"."),Object(a.b)("p",null,"Successful requests can be cast to ",Object(a.b)("inlineCode",{parentName:"p"},"ReadResponse")," which contains the HTTP code, the raw body, and the constructor of the entity that was parsed from the response.\nTo work with an instance of the retrieved entity, you can use the ",Object(a.b)("inlineCode",{parentName:"p"},".as")," method, which allows you to transform the raw data into an instance of the given constructor.\nNote, that retrieve responses can be ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"#error-handling"}),Object(a.b)("inlineCode",{parentName:"a"},"ErrorResponse"),"s"),".\nTherefore, it is crucial to check responses for success, before casting them to ",Object(a.b)("inlineCode",{parentName:"p"},"ReadResponse"),"."),Object(a.b)("p",null,"In the example below, each given address id is mapped to a ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"#getbykey-request-builder"}),"GetByKeyRequestBuilder"),".\nThese retrieve requests are combined into one ",Object(a.b)("inlineCode",{parentName:"p"},"batch")," request and executed against a destination."),Object(a.b)("p",null,"If one of the requests was not successful, an error will be thrown, otherwise, the responses are transformed into instances of ",Object(a.b)("inlineCode",{parentName:"p"},"BusinessPartnerAddress"),"."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts"}),"async function getAddressesByIds(\n  businessPartnerId: string,\n  addressIds: string[]\n): Promise<BusinessPartnerAddress[]> {\n  const retrieveRequests = addressIds.map(addressId =>\n    // Create get by key request\n    BusinessPartnerAddress.requestBuilder().getByKey(\n      businessPartnerId,\n      addressId\n    )\n  );\n\n  // Execute batch request combining multiple retrieve requests\n  const batchResponses = await batch(...retrieveRequests).execute(destination);\n\n  // Error handling\n  if (batchResponses.some(response => !response.isSuccess())) {\n    throw new Error('Some of the batch subrequests were not successful.');\n  }\n\n  return batchResponses.reduce(\n    (addresses: BusinessPartnerAddress[], response: BatchResponse) => [\n      ...addresses,\n      // Transform response to an instance of BusinessPartnerAddress\n      ...(response as ReadResponse).as(BusinessPartnerAddress)\n    ],\n    []\n  );\n}\n")))}d.isMDXComponent=!0}}]);