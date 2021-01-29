(window.webpackJsonp=window.webpackJsonp||[]).push([[101],{174:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return d})),a.d(t,"toc",(function(){return u})),a.d(t,"default",(function(){return b}));var n=a(3),r=a(7),i=(a(0),a(204)),s=a(213),o=a(214),l=a(205),c={id:"use-typed-odata-v4-client-in-sap-cloud-sdk-for-java",title:"Typed Client To Consume OData v4 Services",hide_title:!1,hide_table_of_contents:!1,sidebar_label:"OData v4 Typed Client",description:"Use SAP Cloud SDK for Java to build and run OData v4 requests in a type-safe way.",keywords:["sap","cloud","sdk","odata","java","VDM","generate"]},d={unversionedId:"java/features/odata/use-typed-odata-v4-client-in-sap-cloud-sdk-for-java",id:"java/features/odata/use-typed-odata-v4-client-in-sap-cloud-sdk-for-java",isDocsHomePage:!1,title:"Typed Client To Consume OData v4 Services",description:"Use SAP Cloud SDK for Java to build and run OData v4 requests in a type-safe way.",source:"@site/docs/java/features/odata/type-safe-client-odata-v4.mdx",slug:"/java/features/odata/use-typed-odata-v4-client-in-sap-cloud-sdk-for-java",permalink:"/cloud-sdk/docs/java/features/odata/use-typed-odata-v4-client-in-sap-cloud-sdk-for-java",editUrl:"https://github.com/SAP/cloud-sdk/edit/main/docs/java/features/odata/type-safe-client-odata-v4.mdx",version:"current",lastUpdatedBy:"KavithaSiva",lastUpdatedAt:1611913546,sidebar_label:"OData v4 Typed Client",sidebar:"someSidebar",previous:{title:"Typed Client To Consume OData v2 Services",permalink:"/cloud-sdk/docs/java/features/odata/use-typed-odata-v2-client-in-sap-cloud-sdk-for-java"},next:{title:"Generic Advanced OData Client",permalink:"/cloud-sdk/docs/java/features/odata/generic-untyped-odata-client"}},u=[{value:"Build and Execute OData Requests With the Typed OData Client",id:"build-and-execute-odata-requests-with-the-typed-odata-client",children:[]},{value:"Using the Fluent API",id:"using-the-fluent-api",children:[]},{value:"OData Features",id:"odata-features",children:[{value:"Basic CRUD Operations",id:"basic-crud-operations",children:[]},{value:"Handling of Cross-Site Request Forgery Tokens",id:"handling-of-cross-site-request-forgery-tokens",children:[]},{value:"Select",id:"select",children:[]},{value:"Filter",id:"filter",children:[]},{value:"Batch Requests",id:"batch-requests",children:[]}]},{value:"Entity Update Strategies",id:"entity-update-strategies",children:[]},{value:"Error Handling",id:"error-handling",children:[]},{value:"Navigation Properties",id:"navigation-properties",children:[]},{value:"Server-Driven Paging",id:"server-driven-paging",children:[]}],p={toc:u};function b(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"build-and-execute-odata-requests-with-the-typed-odata-client"},"Build and Execute OData Requests With the Typed OData Client"),Object(i.b)("p",null,"The typed OData v4 client allows building type-safe OData v4 requests for a given service.\nThe Java classes represent the ",Object(i.b)("em",{parentName:"p"},"data model")," and the available ",Object(i.b)("em",{parentName:"p"},"operations")," of the service.\nAs a consequence, all requests that are built through the typed OData client are not only ",Object(i.b)("em",{parentName:"p"},"syntactically valid")," but also ",Object(i.b)("em",{parentName:"p"},"semantically valid"),"."),Object(i.b)("h2",{id:"using-the-fluent-api"},"Using the Fluent API"),Object(i.b)("p",null,"The typed OData v4 client consists of ",Object(i.b)("em",{parentName:"p"},"service")," and ",Object(i.b)("em",{parentName:"p"},"data model")," classes.\nThe service classes mirror the API provided by the OData service and serve as entry point for creating requests.\nThey provide a builder that allows for fluently adding further parameters."),Object(i.b)("p",null,"To execute HTTP requests the OData client uses ",Object(i.b)("em",{parentName:"p"},"Destinations")," and are documented in more detail ",Object(i.b)("a",{href:Object(l.a)("docs/java/features/connectivity/sdk-connectivity-destination-service")},"here"),".\nThe following code snippets assume that such a destination is in place:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),"HttpDestination destination;\n")),Object(i.b)("p",null,"On an abstract level requests are generally build up according to the following pattern:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),"result = service.operation()\n    .withParameter(...)\n    .execute(destination);\n")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("em",{parentName:"li"},"operation")," corresponds to the service's capabilities for entities e.g. ",Object(i.b)("inlineCode",{parentName:"li"},"createEntity")," or ",Object(i.b)("inlineCode",{parentName:"li"},"readEntities"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("em",{parentName:"li"},"withParameter")," corresponds to:",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"OData v4 query parameters e.g. ",Object(i.b)("inlineCode",{parentName:"li"},"filter")," or ",Object(i.b)("inlineCode",{parentName:"li"},"orderby")),Object(i.b)("li",{parentName:"ul"},"Or other modifiers like custom headers"))),Object(i.b)("li",{parentName:"ul"},"Which OData v4 parameters are available depends on the operation.\nFor example, when updating entities the ",Object(i.b)("inlineCode",{parentName:"li"},"$filter")," parameter is not available.")),Object(i.b)("p",null,"Below different OData features are documented using the ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://api.sap.com/api/API_BUSINESS_PARTNER/resource"}),"Business Partner Service")," on SAP S/4HANA as an example.\nIt is represented by the ",Object(i.b)("inlineCode",{parentName:"p"},"BusinessPartnerService")," class which is part of the pre-generated type-safe client for SAP S/4HANA also known as the Virtual Data Model (VDM).\nThe following code snippets assume that an instance of this service is set up:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),"BusinessPartnerService service = new DefaultBusinessPartnerService();\n")),Object(i.b)("h2",{id:"odata-features"},"OData Features"),Object(i.b)("h3",{id:"basic-crud-operations"},"Basic CRUD Operations"),Object(i.b)("p",null,"Create, Read, Update and Delete operations on entities are build from the associated service class:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),'service.createBusinessPartner(partner);\nservice.getBusinessPartnerByKey("id");\nservice.getAllBusinessPartner();\nservice.updateBusinessPartner(partner);\nservice.deleteBusinessPartnerAddress(address);\n')),Object(i.b)("p",null,"Each of the above statements returns a builder object that allows for specifying certain request parameters, depending on the operation."),Object(i.b)("p",null,"The following query parameters and request options are available for these operations:"),Object(i.b)("p",null,"Query parameters:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"$select"),", ",Object(i.b)("inlineCode",{parentName:"li"},"$expand")," and ",Object(i.b)("inlineCode",{parentName:"li"},"$search")," are available when reading a single value or multiple entities"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"$filter"),", ",Object(i.b)("inlineCode",{parentName:"li"},"$top"),", ",Object(i.b)("inlineCode",{parentName:"li"},"$skip")," and ",Object(i.b)("inlineCode",{parentName:"li"},"$orderby")," are available only when reading a collection of entities")),Object(i.b)("p",null,"Request parameters:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Update operations allow to set either ",Object(i.b)("inlineCode",{parentName:"li"},"modifyingEntity()")," or ",Object(i.b)("inlineCode",{parentName:"li"},"replacingEntity()")," which will result in ",Object(i.b)("inlineCode",{parentName:"li"},"HTTP PATCH")," or ",Object(i.b)("inlineCode",{parentName:"li"},"HTTP PUT")," respectively.\nBy default entities are modified via ",Object(i.b)("inlineCode",{parentName:"li"},"PATCH"),"."),Object(i.b)("li",{parentName:"ul"},"Update and delete operations allow to modify how ETags are handled:",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"By default, an ETag is sent if one is present on the entity being modified."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"matchAnyVersionIdentifier()")," will instead always send a ",Object(i.b)("inlineCode",{parentName:"li"},"*")," which acts as a wildcard to match all ETags."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"ignoreAnyVersionIdentifier()")," will ensure that no ETag is sent."))),Object(i.b)("li",{parentName:"ul"},"All operations allow for adding custom headers via ",Object(i.b)("inlineCode",{parentName:"li"},"withHeader(...)"))),Object(i.b)("h4",{id:"handling-of-etags"},"Handling of ETags"),Object(i.b)("p",null,"An ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/ETag"}),"ETag")," is a version identifier that is often used to implement an optimistic locking mechanism.\nThe SAP Cloud SDK will try to read version identifiers from responses and set them when sending OData requests."),Object(i.b)("p",null,"Consider the following example:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),'partner = service.getBusinessPartnerByKey("id")\n                 .execute(destination);\nresponse = service.updateBusinessPartner(partner)\n                 .execute(destination);\n// update the partner reference\npartner = response.getModifiedEntity();\n')),Object(i.b)("p",null,"On the read request, the SAP Cloud SDK will automatically try to extract the version identifier from the response and store it within the ",Object(i.b)("inlineCode",{parentName:"p"},"partner")," object.\nWhen updating it will be taken from there and sent with the ",Object(i.b)("inlineCode",{parentName:"p"},"If-match")," header."),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"If a service requires this header to be sent: Fetching the entity from the service first is essential to ensure that the ETag is present and up to date."))),Object(i.b)("h3",{id:"handling-of-cross-site-request-forgery-tokens"},"Handling of Cross-Site Request Forgery Tokens"),Object(i.b)("p",null,"For create, update and delete requests the SAP Cloud SDK will try to send a ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://en.wikipedia.org/wiki/Cross-site_request_forgery#Cookie-to-header_token"}),"cross-site request forgery (CSRF) token"),".\nUpon execution, the request will try to fetch a token first before issuing the create request.\nMany services require this behavior for security reasons.\nHowever, the create request will be made without a CSRF token if none could be obtained."),Object(i.b)("h3",{id:"select"},"Select"),Object(i.b)("p",null,"When reading entities the API offers ",Object(i.b)("inlineCode",{parentName:"p"},"select( ... )")," on the builders.\nThrough it, the query parameters ",Object(i.b)("inlineCode",{parentName:"p"},"$select")," and ",Object(i.b)("inlineCode",{parentName:"p"},"$expand")," are set.\nIt takes in the properties of the entity being queried.\nPrimitive properties are added to ",Object(i.b)("inlineCode",{parentName:"p"},"$select")," while complex and navigational properties are added to ",Object(i.b)("inlineCode",{parentName:"p"},"$expand"),".\nThis handling is done automatically by the SAP Cloud SDK."),Object(i.b)("p",null,"The properties that can be selected or expanded are represented via static ",Object(i.b)("em",{parentName:"p"},"fields on the entity")," class.\nThere will be a field for each property.\nE.g. for the business partner entity one can find ",Object(i.b)("inlineCode",{parentName:"p"},"BusinessPartner.FIRST_NAME")," and ",Object(i.b)("inlineCode",{parentName:"p"},"BusinessPartner.LAST_NAME"),"."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),'service.getBusinessPartnerByKey("id")\n    .select(BusinessPartner.FIRST_NAME, BusinessPartner.LAST_NAME, BusinessPartner.TO_BUSINESS_PARTNER_ADDRESS)\n    .execute(destination);\n')),Object(i.b)("p",null,"The above translates to the following query parameters:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{}),"$select=FirstName,LastName&$expand=to_BusinessPartnerAddress\n")),Object(i.b)("p",null,"OData v4 allows for formulating nested, fully featured queries on complex and navigational properties.\nQuerying nested objects is possible within an expand statement.\nThat means the following query is possible:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),'service.getBusinessPartnerByKey("id")\n    .select(BusinessPartner.TO_BUSINESS_PARTNER_ADDRESS\n        .select(BusinessPartnerAddress.CITY_CODE, BusinessPartnerAddress.COUNTRY)\n        .filter(BusinessPartnerAddress.CITY_CODE.notEqualTo("1234"))\n        .orderBy(BusinessPartnerAddress.COUNTRY.desc())\n    )\n    .execute(destination);\n')),Object(i.b)("p",null,"The above translates to the following ",Object(i.b)("inlineCode",{parentName:"p"},"expand")," query parameter:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{}),"$expand=to_BusinessPartnerAddress($select=CityCode,Country;$filter=CityCode eq '1234';$orderby=Country desc)\n")),Object(i.b)("h3",{id:"filter"},"Filter"),Object(i.b)("p",null,"When operating on a collection of entities the API offers ",Object(i.b)("inlineCode",{parentName:"p"},"filter( ... )")," on the builders.\nIt directly corresponds to the ",Object(i.b)("inlineCode",{parentName:"p"},"$filter")," parameter of the request.\nFilters are also built via the static property fields on entities."),Object(i.b)("p",null,"The following example:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),"/*\nGet all business partners that either:\n  - Have first name 'Alice' but not last name 'Bob'\n  - Or have first name 'Mallory'\n*/\nservice.getAllBusinessPartner()\n    .filter(BusinessPartner.FIRST_NAME.equalTo(\"Alice\")\n        .and(BusinessPartner.LAST_NAME.notEqualTo(\"Bob\"))\n        .or(BusinessPartner.FIRST_NAME.equalTo(\"Mallory\"))\n    )\n    .execute(destination);\n")),Object(i.b)("p",null,"Will translate to this filter parameter:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{}),"$filter=(((FirstName eq 'Alice') and (LastName ne 'Bob')) or (FirstName eq 'Mallory'))\n")),Object(i.b)("p",null,"Take note of the order of ",Object(i.b)("inlineCode",{parentName:"p"},"and")," and ",Object(i.b)("inlineCode",{parentName:"p"},"or"),".\nAs ",Object(i.b)("inlineCode",{parentName:"p"},"or")," is invoked on the result of ",Object(i.b)("inlineCode",{parentName:"p"},"and")," it will form the outer expression while ",Object(i.b)("inlineCode",{parentName:"p"},"and")," is an inner expression in the first branch of ",Object(i.b)("inlineCode",{parentName:"p"},"or"),"."),Object(i.b)("p",null,"To achieve a different order with ",Object(i.b)("inlineCode",{parentName:"p"},"and")," as the top level statement one would nest the ",Object(i.b)("inlineCode",{parentName:"p"},"or")," within ",Object(i.b)("inlineCode",{parentName:"p"},"and(...)"),":"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),'.and(BusinessPartner.LAST_NAME.notEqualTo("Bob")\n    .or(BusinessPartner.FIRST_NAME.equalTo("Mallory"))\n)\n')),Object(i.b)("h4",{id:"available-filter-expressions"},"Available Filter Expressions"),Object(i.b)("p",null,"The ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"http://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptionfilter"}),"OData v4 standard")," allows for a wide range of filter expressions.\nA detailed list of what is available in the SAP Cloud SDK can be obtained from ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://help.sap.com/doc/b579bf8578954412aea2b458e8452201/1.0/en-US/com/sap/cloud/sdk/datamodel/odatav4/expression/package-summary.html"}),"the Javadoc"),".\nThe functionality can also be discovered through the fluent API."),Object(i.b)("p",null,"The below example leverages OData v4 exclusive features to build a more complex request:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),"/*\nFetch all business partners where:\n- the last name is at least twice as long as the first name\n- AND the combined string of first and last name does not contain 'bob'\n*/\nservice.getAllBusinessPartner()\n    .filter(BusinessPartner.FIRST_NAME.length().multiply(2).lessThan(BusinessPartner.LAST_NAME.length())\n        .and(BusinessPartner.FIRST_NAME.concat(BusinessPartner.LAST_NAME).contains(\"bob\"))\n    )\n    .execute(destination);\n")),Object(i.b)("h3",{id:"batch-requests"},"Batch Requests"),Object(i.b)("p",null,"Batch requests allow wrapping multiple OData requests into one single batch call.\nThereby we reduce the number of round trips to the remote server.\nRefer to the ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"http://docs.oasis-open.org/odata/odata/v4.0/os/part1-protocol/odata-v4.0-os-part1-protocol.html#_Toc372793748"}),"official OData V4 spec")," for further reference about batch requests, their semantics, and the request/response format."),Object(i.b)("div",{className:"admonition admonition-warning alert alert--danger"},Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(i.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})))),"warning")),Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"The described API is subject to change"))),Object(i.b)("h4",{id:"execute-batch-request"},"Execute Batch Request"),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"service")," object offers the method ",Object(i.b)("inlineCode",{parentName:"p"},"batch")," which allows access to the batch-related methods that help build the batch request."),Object(i.b)("p",null,"Multiple single requests (like ",Object(i.b)("inlineCode",{parentName:"p"},"createBusinessPartnerRequest"),") can be wrapped into so-called changesets.\nA changeset can be added by ",Object(i.b)("inlineCode",{parentName:"p"},"addChangeset")," and the corresponding create, update or delete operations can be passed as parameters into it.\nYou can wrap multiple changesets into one batch request.\nSimilarly, retrieve operations can be added to the batch request by using ",Object(i.b)("inlineCode",{parentName:"p"},"addReadOperations"),"."),Object(i.b)("p",null,"Use ",Object(i.b)("inlineCode",{parentName:"p"},"execute")," to issue the batch request to the remote system.\nWe receive an instance of ",Object(i.b)("inlineCode",{parentName:"p"},"BatchResponse")," as the result object."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),"GetAllRequestBuilder<BusinessPartner> getBusinessPartners = service.getAllBusinessPartner();\nGetByKeyRequestBuilder<BusinessPartner> getBusinessPartnerByKey = ...\nCreateRequestBuilder<BusinessPartner> createBusinessPartnerRequest1 = ...\nCreateRequestBuilder<BusinessPartner> createBusinessPartnerRequest2 = ...\nDeleteRequestBuilder<BusinessPartner> deleteBusinessPartnerRequest = ...\n\nBatchResponse result =\n    service\n        .batch()\n        .addReadOperations(getBusinessPartners, getBusinessPartnerByKey)\n        .addChangeset(createBusinessPartnerRequest1, createBusinessPartnerRequest2, deleteBusinessPartnerRequest)\n        .execute(destination);\n")),Object(i.b)("h4",{id:"access-batch-response"},"Access Batch Response"),Object(i.b)("p",null,"Use ",Object(i.b)("inlineCode",{parentName:"p"},"getModificationResult")," to access the response for a specific create, update, or delete operation."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),"ModificationResponse<BusinessPartner> createResult = response.getModificationResult(createBusinessPartnerRequest1);\nModificationResponse<BusinessPartner> deleteResult = response.getModificationResult(deleteBusinessPartnerRequest);\n")),Object(i.b)("p",null,"Similarly, use the method ",Object(i.b)("inlineCode",{parentName:"p"},"getReadResult")," to access the response for a specific retrieve request."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),"List<BusinessPartners> readAllResult = response.getReadResult(getBusinessPartners);\nBusinessPartner readByKeyResult = response.getReadResult(getBusinessPartnerByKey);\n")),Object(i.b)("p",null,"Per the OData specification, either all operations or none within the same changeset are successful.\nHence, if the changeset was a failure then evaluating the result of any of the contained requests will contain the failure of the changeset."),Object(i.b)("h2",{id:"entity-update-strategies"},"Entity Update Strategies"),Object(i.b)("p",null,"The SAP Cloud SDK supports different strategies for updating entities which differ in the HTTP method and the payload of the update request."),Object(i.b)(s.a,{groupId:"updateStrategy",defaultValue:"modify",values:[{label:"Modify Entity (default)",value:"modify"},{label:"Replace Entity",value:"replace"}],mdxType:"Tabs"},Object(i.b)(o.a,{value:"modify",mdxType:"TabItem"},Object(i.b)("p",null,"The default strategy is the ",Object(i.b)("em",{parentName:"p"},"modifying entity update strategy")," which attempts to modify only the necessary entity fields in the remote system.\nIt issues a PATCH request and includes only the fields in the request payload whose values were changed by its setter method.\nHence, fields whose values remain unchanged are not sent to the target system.\nCalling the method ",Object(i.b)("inlineCode",{parentName:"p"},"includingFields(fields ...)")," instructs the SAP Cloud SDK to add the mentioned fields explicitly in the update request.\nThis is useful for backend systems that require some unchanged fields in the request payload for given reasons."),Object(i.b)("p",null,"This update strategy can be explicitly chosen by invoking the method ",Object(i.b)("inlineCode",{parentName:"p"},"modifyingEntity()")," while building the update request."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),"service.updateBusinessPartner(partner)\n    //method call optional, since active by default\n    .modifyingEntity()\n    //add the Business Partner Full Name explicitly to the update request\n    .includingFields(BusinessPartner.BUSINESS_PARTNER_FULL_NAME)\n    .executeRequest(destination);\n"))),Object(i.b)(o.a,{value:"replace",mdxType:"TabItem"},Object(i.b)("p",null,"The ",Object(i.b)("em",{parentName:"p"},"replacing entity update strategy")," attempts to replace the full entity in the remote system.\nIt issues a PUT request and submits all fields in the update request, regardless of any field changes."),Object(i.b)("p",null,"This update strategy can be explicitly chosen by invoking the method ",Object(i.b)("inlineCode",{parentName:"p"},"replacingEntity()")," while building the update request."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),"service.updateBusinessPartner(partner)\n    .replacingEntity()\n    .executeRequest(destination);\n")))),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"It depends on the capabilities of the specific OData service in the remote system which update strategies are supported in an end-to-end scenario.\nFor example, there are cases where OData services do not support PUT requests."))),Object(i.b)("h2",{id:"error-handling"},"Error Handling"),Object(i.b)("p",null,"Sometimes requests fail and the SAP Cloud SDK provides a flexible way to deal with such failures on multiple levels.\nAll ",Object(i.b)("inlineCode",{parentName:"p"},"execute")," methods may throw a runtime exception (extending) ",Object(i.b)("inlineCode",{parentName:"p"},"ODataException"),".\nThis will always contain the request which was (attempted to be) sent out as well as the cause of the exception.\nTo handle all kind of failures consider the following code:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),'try { ... }\n catch( final ODataException e ) {\n    ODataQueryGeneric query = e.getQuery();\n    logger.debug("The following query failed: {}", query);\n    // do something else\n}\n')),Object(i.b)("p",null,"This handling is the most generic, handling all possible failures.\nFor more specific information, dedicated exceptions are inheriting from ",Object(i.b)("inlineCode",{parentName:"p"},"ODataException"),".\nPlease check the ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://help.sap.com/doc/b579bf8578954412aea2b458e8452201/1.0/en-US/com/sap/cloud/sdk/datamodel/odata/client/exception/ODataException.html"}),"documentation")," for details on all the exception types."),Object(i.b)("p",null,"To handle different kinds of failure one can list multiple catch clauses to cover different levels or cases that might occur, e.g.:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),'try { ... }\ncatch( ODataServiceErrorException e ) {\n    // handle the specific error message from the response payload\n    ODataServiceError odataError = e.getODataError();\n    logger.debug("The OData service responded with an error: {}", odataError);\n} catch( ODataDeserializationException e ) {\n    // handle failures in deserialization\n} catch( ODataResponseException e ) {\n    // handle all other errors originating from handling the HTTP response\n    int httpCode = e.getHttpCode();\n    Collection<Header> httpCode = e.getHttpHeaders();\n    Option<String> httpBody = e.getHttpBody();\n}\n')),Object(i.b)("p",null,"Note that instead of applying ",Object(i.b)("inlineCode",{parentName:"p"},"try/catch")," one can also make use of ",Object(i.b)("inlineCode",{parentName:"p"},"tryExecute")," on the request builders."),Object(i.b)("h2",{id:"navigation-properties"},"Navigation Properties"),Object(i.b)("p",null,"A navigation property describes a unidirectional relationship between two entity types.\nLike other properties, it has a name and declares a multiplicity, i.e. whether to expect a single value or multiple values.\nAdditionally, a navigation property allows for dedicated CRUD operations, that may not be exposed by default on entity sets of the service root.\nSuch operations also provide a convenient way to access the nested resources of entities."),Object(i.b)("p",null,"The typed OData client for OData v4 supports the following operations on (arbitrarily nested) navigation properties:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Create"),Object(i.b)("li",{parentName:"ul"},"Read"),Object(i.b)("li",{parentName:"ul"},"Update"),Object(i.b)("li",{parentName:"ul"},"Delete"),Object(i.b)("li",{parentName:"ul"},"Count")),Object(i.b)("p",null,"The below example leverages the creation of a nested entity in relation to an existing entity:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),'/*\nCreate a new address for a specific business partner.\n*/\nBusinessPartner businessPartnerById = BusinessPartner.builder().businessPartner("123").build();\nBusinessPartnerAddress addressItem = BusinessPartnerAddress.builder().country("DE").build();\n\nservice.forEntity( businessPartnerById )\n    .navigateTo( BusinessPartner.TO_BUSINESS_PARTNER_ADDRESS )\n    .create( addressItem )\n    .execute( destination );\n')),Object(i.b)("p",null,"This sample API call translates to the following service request:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{}),'POST /ODataService/API_BUSINESS_PARTNER/A_BusinessPartner(123)/to_BusinessPartnerAddress\n{\n  "country": "de"\n}\n')),Object(i.b)("h2",{id:"server-driven-paging"},"Server-Driven Paging"),Object(i.b)("p",null,"Pagination describes the practice of splitting a collection of entities from reading requests into one or many pages.\nThe paging behavior is determined by both the server and the client."),Object(i.b)("p",null,"OData service operators may decide to enable server-driven pagination to limit the amount of data that is fetched and sent over the network to the client, in case generic query options yield huge amounts of data.\nBy splitting the result-set into sequential pages of entities, the data can be requested incrementally.\nThis reduces initial network load and improves overall response times.\nIf the payload of an OData response contains a link including a ",Object(i.b)("inlineCode",{parentName:"p"},"$skiptoken"),", then it indicates a next page to the result-set.\nThe iterable result-set is a consistent snapshot of the data, it can not change between reading individual pages."),Object(i.b)("p",null,"In comparison the OData consumer may use query options ",Object(i.b)("inlineCode",{parentName:"p"},"$top")," and ",Object(i.b)("inlineCode",{parentName:"p"},"$skip")," (client-driven paging) to read partial data from the result-set, but relying on a consistent state while browsing through the data can be problematic.\nBetween individual requests, another user could delete or add an item.\nThis would result in an inconsistent aggregation of data."),Object(i.b)("p",null,"By default, the SAP Cloud SDK automatically resolves all pages of a result-set if server-driven paging is encountered.\nFor the API consumer, it is not necessary to parse the next link and instantiate follow-up requests to aggregate the full result-set."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),"List<BusinessPartner> iterablePagesOfEntities = service\n  .getAllBusinessPartner()\n  .execute( destination );\n")),Object(i.b)("p",null,"In case memory efficiency and response time of the consuming application becomes a priority, then the advanced API provides additional means to manually iterate through the internal pages.\nWhile accessing the following methods, the internal HTTP requests are executed lazily:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),"Iterable<List<BusinessPartner>> iterablePagesOfEntities = service\n  .getAllBusinessPartner()\n  .iteratingPages()\n  .execute( destination );\n\nIterable<BusinessPartner> iterableEntities = service\n  .getAllBusinessPartner()\n  .iteratingEntities()\n  .execute(destination);\n\nStream<BusinessPartner> streamingEntities = service\n  .getAllBusinessPartner()\n  .streamingEntities()\n  .execute(destination);\n")),Object(i.b)("p",null,"The request builder allows for setting the optional parameter for preferred page size.\nPlease note that the OData service is not obliged to respect this setting."))}b.isMDXComponent=!0},204:function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return h}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=r.a.createContext({}),d=function(e){var t=r.a.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=d(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=d(a),b=n,h=u["".concat(s,".").concat(b)]||u[b]||p[b]||i;return a?r.a.createElement(h,o(o({ref:t},c),{},{components:a})):r.a.createElement(h,o({ref:t},c))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,s=new Array(i);s[0]=b;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:n,s[1]=o;for(var c=2;c<i;c++)s[c]=a[c];return r.a.createElement.apply(null,s)}return r.a.createElement.apply(null,a)}b.displayName="MDXCreateElement"},205:function(e,t,a){"use strict";a.d(t,"b",(function(){return i})),a.d(t,"a",(function(){return s}));var n=a(21),r=a(206);function i(){var e=Object(n.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,a=void 0===t?"/":t,i=e.url;return{withBaseUrl:function(e,t){return function(e,t,a,n){var i=void 0===n?{}:n,s=i.forcePrependBaseUrl,o=void 0!==s&&s,l=i.absolute,c=void 0!==l&&l;if(!a)return a;if(a.startsWith("#"))return a;if(Object(r.b)(a))return a;if(o)return t+a;var d=a.startsWith(t)?a:t+a.replace(/^\//,"");return c?e+d:d}(i,a,e,t)}}}function s(e,t){return void 0===t&&(t={}),(0,i().withBaseUrl)(e,t)}},206:function(e,t,a){"use strict";function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!n(e)}a.d(t,"b",(function(){return n})),a.d(t,"a",(function(){return r}))},207:function(e,t,a){"use strict";function n(e){var t,a,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=n(e[t]))&&(r&&(r+=" "),r+=a);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,a=0,r="";a<arguments.length;)(e=arguments[a++])&&(t=n(e))&&(r&&(r+=" "),r+=t);return r}},210:function(e,t,a){"use strict";var n=a(0),r=a(211);t.a=function(){var e=Object(n.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},211:function(e,t,a){"use strict";var n=a(0),r=Object(n.createContext)(void 0);t.a=r},213:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(210),s=a(207),o=a(55),l=a.n(o),c=37,d=39;t.a=function(e){var t=e.lazy,a=e.block,o=e.defaultValue,u=e.values,p=e.groupId,b=e.className,h=Object(i.a)(),m=h.tabGroupChoices,O=h.setTabGroupChoices,f=Object(n.useState)(o),j=f[0],g=f[1],v=n.Children.toArray(e.children);if(null!=p){var y=m[p];null!=y&&y!==j&&u.some((function(e){return e.value===y}))&&g(y)}var N=function(e){g(e),null!=p&&O(p,e)},w=[];return r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(s.a)("tabs",{"tabs--block":a},b)},u.map((function(e){var t=e.value,a=e.label;return r.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":j===t,className:Object(s.a)("tabs__item",l.a.tabItem,{"tabs__item--active":j===t}),key:t,ref:function(e){return w.push(e)},onKeyDown:function(e){!function(e,t,a){switch(a.keyCode){case d:!function(e,t){var a=e.indexOf(t)+1;e[a]?e[a].focus():e[0].focus()}(e,t);break;case c:!function(e,t){var a=e.indexOf(t)-1;e[a]?e[a].focus():e[e.length-1].focus()}(e,t)}}(w,e.target,e)},onFocus:function(){return N(t)},onClick:function(){N(t)}},a)}))),t?Object(n.cloneElement)(v.filter((function(e){return e.props.value===j}))[0],{className:"margin-vert--md"}):r.a.createElement("div",{className:"margin-vert--md"},v.map((function(e,t){return Object(n.cloneElement)(e,{key:t,hidden:e.props.value!==j})}))))}},214:function(e,t,a){"use strict";var n=a(3),r=a(0),i=a.n(r);t.a=function(e){var t=e.children,a=e.hidden,r=e.className;return i.a.createElement("div",Object(n.a)({role:"tabpanel"},{hidden:a,className:r}),t)}}}]);