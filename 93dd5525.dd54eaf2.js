(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{204:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return b}));var s=n(0),r=n.n(s);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,s,r=function(e,t){if(null==e)return{};var n,s,r={},a=Object.keys(e);for(s=0;s<a.length;s++)n=a[s],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(s=0;s<a.length;s++)n=a[s],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=r.a.createContext({}),p=function(e){var t=r.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=p(e.components);return r.a.createElement(u.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},h=r.a.forwardRef((function(e,t){var n=e.components,s=e.mdxType,a=e.originalType,o=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=p(n),h=s,b=d["".concat(o,".").concat(h)]||d[h]||l[h]||a;return n?r.a.createElement(b,c(c({ref:t},u),{},{components:n})):r.a.createElement(b,c({ref:t},u))}));function b(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var a=n.length,o=new Array(a);o[0]=h;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:s,o[1]=c;for(var u=2;u<a;u++)o[u]=n[u];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},71:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return i})),n.d(t,"default",(function(){return p}));var s=n(3),r=n(7),a=(n(0),n(204)),o={},c={unversionedId:"js/features/odata/common/batch/changeset",id:"js/features/odata/common/batch/changeset",isDocsHomePage:!1,title:"changeset",description:"A changeset is a collection of HTTP POST, PUT, PATCH and DELETE operations - requests built by any CreateRequestBuilder, UpdateRequestBuilder and DeleteRequestBuilder in terms of the SAP Cloud SDK.",source:"@site/docs/js/features/odata/common/batch/changeset.mdx",slug:"/js/features/odata/common/batch/changeset",permalink:"/cloud-sdk/docs/js/features/odata/common/batch/changeset",editUrl:"https://github.com/SAP/cloud-sdk/edit/main/docs/js/features/odata/common/batch/changeset.mdx",version:"current",lastUpdatedBy:"Artem Kovalov",lastUpdatedAt:1611159878},i=[],u={toc:i};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(s.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"A changeset is a collection of HTTP ",Object(a.b)("inlineCode",{parentName:"p"},"POST"),", ",Object(a.b)("inlineCode",{parentName:"p"},"PUT"),", ",Object(a.b)("inlineCode",{parentName:"p"},"PATCH")," and ",Object(a.b)("inlineCode",{parentName:"p"},"DELETE")," operations - requests built by any ",Object(a.b)("a",Object(s.a)({parentName:"p"},{href:"#create-request-builder"}),"CreateRequestBuilder"),", ",Object(a.b)("a",Object(s.a)({parentName:"p"},{href:"#update-request-builder"}),"UpdateRequestBuilder")," and ",Object(a.b)("a",Object(s.a)({parentName:"p"},{href:"#delete-request-builder"}),"DeleteRequestBuilder")," in terms of the SAP Cloud SDK.\nThe order of execution within a changeset is not defined.\nThis differs from the whole batch request itself, where the order is defined.\nTherefore the requests within a changeset should not depend on each other.\nIf the execution of any of the requests within a changeset fails, the whole changeset will be reflected as an error in the response and will not be applied, much like a database transaction."),Object(a.b)("p",null,"Change requests cannot be passed to a batch request directly.\nThey have to be combined in a changeset, which in turn can be passed to the batch request.\nOnce a batch request is executed it returns a list of ",Object(a.b)("inlineCode",{parentName:"p"},"BatchResponse"),"s.\nThose contain the raw response information of each subrequest.\nThe response to a changeset request can either be a collection of the subresponses to the subrequests of the changeset of type ",Object(a.b)("inlineCode",{parentName:"p"},"WriteResponses")," or an ",Object(a.b)("inlineCode",{parentName:"p"},"ErrorResponse"),".\nTo determine if a request was successful use ",Object(a.b)("inlineCode",{parentName:"p"},".isSuccess()"),"."),Object(a.b)("p",null,"Successful requests should be cast to ",Object(a.b)("inlineCode",{parentName:"p"},"WriteResponses")," which contains all subresponses for the changeset request.\nThose responses can be accessed by ",Object(a.b)("inlineCode",{parentName:"p"},".responses")," and have the type ",Object(a.b)("inlineCode",{parentName:"p"},"WriteResponse"),".\nEach ",Object(a.b)("inlineCode",{parentName:"p"},"WriteResponse")," contains the HTTP code and can contain the raw body and the constructor of the entity that was parsed from the response, depending on whether there was a body in the response.\nCreate and delete requests typically do not have a response body.\nTo work with an instance of an entity given in a ",Object(a.b)("inlineCode",{parentName:"p"},"WriteResponse"),", you can use the ",Object(a.b)("inlineCode",{parentName:"p"},".as")," method, which allows you to transform the raw string body into an instance of the given constructor.\nNote that the response may not exist, so you should only call this method if you know that there is data.\nTypically the HTTP code is a good indicator for this (",Object(a.b)("inlineCode",{parentName:"p"},"201 No Content")," probably won't have content).\nIf you are working with TypeScript you will have to tell the compiler, that the ",Object(a.b)("inlineCode",{parentName:"p"},".as!")," method can be used here by adding a ",Object(a.b)("inlineCode",{parentName:"p"},"!"),".\nAlso note, that retrieve responses can be ",Object(a.b)("a",Object(s.a)({parentName:"p"},{href:"#error-handling"}),Object(a.b)("inlineCode",{parentName:"a"},"ErrorResponse"),"s"),".\nTherefore, it is crucial to check responses for success, before casting them to ",Object(a.b)("inlineCode",{parentName:"p"},"WriteResponses"),"."),Object(a.b)("p",null,"In the example below, a list of addresses is mapped to ",Object(a.b)("a",Object(s.a)({parentName:"p"},{href:"#update-request-builder"}),"UpdateRequestBuilder"),"s.\nThese change requests are combined to one ",Object(a.b)("inlineCode",{parentName:"p"},"changeset"),", which is passed to the ",Object(a.b)("inlineCode",{parentName:"p"},"batch")," request and executed against a destination."),Object(a.b)("p",null,"Once the batch request is executed it returns a list of ",Object(a.b)("inlineCode",{parentName:"p"},"BatchResponse"),"s, which in this example contains one response only, namely the one for the changeset."),Object(a.b)("p",null,"If the request was not successful, an error will be thrown, otherwise, the subresponses are transformed into instances of ",Object(a.b)("inlineCode",{parentName:"p"},"BusinessPartnerAddress"),"."),Object(a.b)("pre",null,Object(a.b)("code",Object(s.a)({parentName:"pre"},{className:"language-ts"}),"async function updateAddresses(\n  businessPartnerAddresses: BusinessPartnerAddress[]\n): Promise<BusinessPartnerAddress[]> {\n  // Create update requests\n  const updateRequests = businessPartnerAddresses.map(address =>\n    BusinessPartnerAddress.requestBuilder().update(address)\n  );\n\n  // Execute batch request with one changeset\n  const batchResponses = await batch(\n    // Combine update requests into one changeset\n    changeset(...updateRequests)\n  ).execute(destination);\n\n  // Get response for the changeset request\n  const changesetResonse = batchResponses[0];\n\n  // Error handling\n  if (!changesetResonse.isSuccess()) {\n    throw new Error('The changeset request was not successful.');\n  }\n\n  return (changesetResonse as WriteResponses).responses.map(response =>\n    // Transform response to an instance of BusinessPartnerAddress\n    response.as!(BusinessPartnerAddress)\n  );\n}\n")))}p.isMDXComponent=!0}}]);