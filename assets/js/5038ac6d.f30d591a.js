(self.webpackChunksap_cloud_sdk_documentation=self.webpackChunksap_cloud_sdk_documentation||[]).push([[1726],{3905:function(e,t,a){"use strict";a.d(t,{Zo:function(){return c},kt:function(){return h}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),d=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=d(a),h=r,m=p["".concat(l,".").concat(h)]||p[h]||u[h]||i;return a?n.createElement(m,o(o({ref:t},c),{},{components:a})):n.createElement(m,o({ref:t},c))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var d=2;d<i;d++)o[d]=a[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},3703:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return o},metadata:function(){return s},toc:function(){return l},default:function(){return c}});var n=a(2122),r=a(9756),i=(a(7294),a(3905)),o={id:"generic-untyped-odata-client",title:"Generic Advanced OData Client",sidebar_label:"Generic OData Client",description:"Together with type-safe OData client we provide a more generic and untyped OData client implementation to be used in advanced use-cases when the capabilities of typed OData client are not yet covering your use-case or fundamentally not enough to achieve your development goals. You can leverage untyped generic OData client for workarounds and trying out OData features that are not very frequently used. It's also helpful in a situation when flexibility is above safety and convenience.",keywords:["sap","cloud","sdk","cloud native","cloud sdk","sap cloud sdk"]},s={unversionedId:"java/features/odata/generic-untyped-odata-client",id:"java/features/odata/generic-untyped-odata-client",isDocsHomePage:!1,title:"Generic Advanced OData Client",description:"Together with type-safe OData client we provide a more generic and untyped OData client implementation to be used in advanced use-cases when the capabilities of typed OData client are not yet covering your use-case or fundamentally not enough to achieve your development goals. You can leverage untyped generic OData client for workarounds and trying out OData features that are not very frequently used. It's also helpful in a situation when flexibility is above safety and convenience.",source:"@site/docs/java/features/odata/generic-odata-client.mdx",sourceDirName:"java/features/odata",slug:"/java/features/odata/generic-untyped-odata-client",permalink:"/cloud-sdk/docs/java/features/odata/generic-untyped-odata-client",editUrl:"https://github.com/SAP/cloud-sdk/edit/main/docs/java/features/odata/generic-odata-client.mdx",version:"current",lastUpdatedBy:"Matthias Kuhr",lastUpdatedAt:1622103769,formattedLastUpdatedAt:"5/27/2021",sidebar_label:"Generic OData Client",frontMatter:{id:"generic-untyped-odata-client",title:"Generic Advanced OData Client",sidebar_label:"Generic OData Client",description:"Together with type-safe OData client we provide a more generic and untyped OData client implementation to be used in advanced use-cases when the capabilities of typed OData client are not yet covering your use-case or fundamentally not enough to achieve your development goals. You can leverage untyped generic OData client for workarounds and trying out OData features that are not very frequently used. It's also helpful in a situation when flexibility is above safety and convenience.",keywords:["sap","cloud","sdk","cloud native","cloud sdk","sap cloud sdk"]},sidebar:"someSidebar",previous:{title:"Typed Client To Consume OData v4 Services",permalink:"/cloud-sdk/docs/java/features/odata/use-typed-odata-v4-client-in-sap-cloud-sdk-for-java"},next:{title:"Overview",permalink:"/cloud-sdk/docs/java/features/rest/overview"}},l=[{value:"Overview",id:"overview",children:[]},{value:"Basic API Usage",id:"basic-api-usage",children:[{value:"Creating Requests",id:"creating-requests",children:[]},{value:"Evaluating Responses",id:"evaluating-responses",children:[]},{value:"Building Queries",id:"building-queries",children:[]}]},{value:"Handling OData Delta Token",id:"handling-odata-delta-token",children:[]},{value:"OData v2 Batch Read Request",id:"odata-v2-batch-read-request",children:[]},{value:"Call OData v4 Bound Functions and Actions",id:"call-odata-v4-bound-functions-and-actions",children:[{value:"Adding Trailing Slash to the Service Path",id:"adding-trailing-slash-to-the-service-path",children:[]}]}],d={toc:l};function c(e){var t=e.components,a=(0,r.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"Advanced! Use on your own discretion.")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"The API for generic OData client is not intended to be used by application developers unless absolutely required.\nIts API is a subject to change and non-breaking changes are not guaranteed."),(0,i.kt)("p",{parentName:"div"},"Please, make sure you know what you're doing and check if stable type-safe OData client API can solve you problem."))),(0,i.kt)("h2",{id:"overview"},"Overview"),(0,i.kt)("p",null,"Together with type-safe OData client, we provide a more generic and untyped OData client implementation to be used in ",(0,i.kt)("strong",{parentName:"p"},"advanced")," use-cases when the capabilities of typed OData client are not enough to achieve your development goals.\nYou can leverage generic untyped OData client for:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Workarounds and quick fixes"),(0,i.kt)("li",{parentName:"ul"},"Trying out OData features that are not yet implemented in OData type-safe client."),(0,i.kt)("li",{parentName:"ul"},"When flexibility is above safety and convenience"),(0,i.kt)("li",{parentName:"ul"},"Debugging and testing"),(0,i.kt)("li",{parentName:"ul"},"Building specific OData protocol based API yourself"),(0,i.kt)("li",{parentName:"ul"},"Integrating OData capabilities and awareness into your project")),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"The generic client is capable of both OData V2 and V4 protocols.\nThe client is made aware about which version to use in requests via a dedicated parameter."))),(0,i.kt)("h2",{id:"basic-api-usage"},"Basic API Usage"),(0,i.kt)("h3",{id:"creating-requests"},"Creating Requests"),(0,i.kt)("p",null,"Requests are represented by dedicated request classes for each operation.\nFor example to read a collection of entities use:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'new ODataRequestRead(servicePath, entityName, encodedQuery, ODataProtocol.V4);\n// e.g.\nnew ODataRequestRead("/path/to/service", "A_Entity", "$select=Foo%20Bar", ODataProtocol.V4);\n')),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Encoded queries can be created conveniently as described in ",(0,i.kt)("a",{parentName:"p",href:"#building-queries"},"Building Queries below"),"."))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Other Operations:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-txt"},"ODataRequestRead\nODataRequestReadByKey\nODataRequestCreate\nODataRequestUpdate\nODataRequestDelete\nODataRequestFunction\nODataRequestAction\n")),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"What used to be function imports in OData V2 have been split into functions and actions in the OData V4 standard.\nThe above classes adopt the OData V4 notion.\nTo perform V2 function imports leverage the function class in case the operation should use HTTP GET.\nInstead use the action class if the operation should use POST."))),(0,i.kt)("h3",{id:"evaluating-responses"},"Evaluating Responses"),(0,i.kt)("p",null,"Requests can be executed by supplying an HTTP client to the ",(0,i.kt)("inlineCode",{parentName:"p"},"execute")," method.\nYou can obtain a client from any given destination as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"final HttpClient client = HttpClientAccessor.getHttpClient(destination);\n// perform the HTTP operation:\nfinal ODataRequestResultGeneric result = request.execute(client);\n")),(0,i.kt)("p",null,"Within ",(0,i.kt)("inlineCode",{parentName:"p"},"execute")," the SAP Cloud SDK will perform a health check on the response.\nIn case of a status code greater or equal to 400 an exception will be thrown."),(0,i.kt)("p",null,"The result class allows for parsing the result into a specific Java type, getting metadata or even the raw HTTP response.\nFor example you can parse the response body into a ",(0,i.kt)("inlineCode",{parentName:"p"},"SalesOrder")," or a list of sales orders as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"SalesOrder order = result.as(SalesOrder.class);\nCollection<SalesOrder> order = result.asList(SalesOrder.class);\n")),(0,i.kt)("h3",{id:"building-queries"},"Building Queries"),(0,i.kt)("p",null,"Queries can be build with dedicated, fluent builder classes.\nUse the ",(0,i.kt)("inlineCode",{parentName:"p"},"StructuredQuery")," class to create a query:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'StructuredQuery query = StructuredQuery.onEntity("Movies", ODataProtocol.V4);\n// method names correspond to the OData query parameters $select, $filter, etc.\nquery.select("Field A", "Field B");\n// obtain the encoded URL string representation:\nString encodedQuery = query.getEncodedQueryString();\n')),(0,i.kt)("p",null,"For filters there is a dedicated API to build filter expressions:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'FieldUntyped fieldA = FieldReference.of("Field A")\nFieldUntyped fieldB = FieldReference.of("Field B")\n\nValueBoolean expression = fieldA.equalTo("foo").and(fieldB.greaterThan(42));\n\n// add the expression as filter to a query:\nquery.filter(expression);\n')),(0,i.kt)("h2",{id:"handling-odata-delta-token"},"Handling OData Delta Token"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"http://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_RequestingChanges"},"OData v4 specification")," provides capabilities to return only a delta between your last and ongoing request.\nFor example, if your previous request loaded information from the service which continues to be updated with new records, then with your next request you can ask to provide you only with the difference between what you've already loaded and current records on the service side.\nFor that, you can leverage ",(0,i.kt)("inlineCode",{parentName:"p"},"$deltatokens")," query parameter."),(0,i.kt)("p",null,"We do not provide convenience API for delta tokens in our type-safe client, but you can leverage generic OData client to fetch the delta link from the ",(0,i.kt)("inlineCode",{parentName:"p"},"response")," metadata and extract ",(0,i.kt)("inlineCode",{parentName:"p"},"$deltatoken")," from there as in the code snippet below."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'// Fetching of a $deltatoken from response metadata\n@Nullable\nprivate static String getDeltaTokenFromResponse( @Nonnull final ODataRequestResultGeneric response) {\n    try {\n        final InputStream httpResponseContent = response.getHttpResponse().getEntity().getContent();\n        final String deltaLink = new ObjectMapper().readTree(httpResponseContent).get("@odata.deltaLink").asText();\n        final Matcher matcher = Pattern.compile("\\\\$deltatoken=(.*?)(&|$)").matcher(deltaLink);\n        if (matcher.find()) {\n            return matcher.group(1);\n        }\n        return null;\n    }\n    catch(Exception e) {\n        // log exception with debug level\n        return null;\n    }\n}\n\n')),(0,i.kt)("p",null,"Now you can create an OData request leveraging the ",(0,i.kt)("inlineCode",{parentName:"p"},"$deltatoken")," token you have just fetched."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'// Composing a delta request with generic OData client\nODataRequestResultGeneric response = request.execute(httpClient);\nString deltaToken = getDeltaTokenFromResponse(response);\nif( deltaToken!=null) {\n    deltaRequest.addQueryParameter("$deltatoken", deltaToken);\n}\n')),(0,i.kt)("h2",{id:"odata-v2-batch-read-request"},"OData v2 Batch Read Request"),(0,i.kt)("p",null,"Batch requests for OData v2 are not yet supported in the ",(0,i.kt)("a",{parentName:"p",href:"/cloud-sdk/docs/java/features/odata/use-typed-odata-v2-client-in-sap-cloud-sdk-for-java#batch-requests"},"type-safe client"),".\nLet's look at how you can work around that with a generic OData client."),(0,i.kt)("p",null,"In the code snippet below we:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Prepare an instance of ",(0,i.kt)("inlineCode",{parentName:"li"},"HttpClient")," that will be used to execute the HTTP request."),(0,i.kt)("li",{parentName:"ol"},"Initialize a generic OData Batch request with OData service path and protocol version."),(0,i.kt)("li",{parentName:"ol"},"Build a read request for an OData entity collection and add it to the Batch request object."),(0,i.kt)("li",{parentName:"ol"},"Execute the Batch request."),(0,i.kt)("li",{parentName:"ol"},"Access the Batch response and fetch the list of fields from OData entities, that matched the applied read request.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'HttpDestination destination;\nString servicePath = "/sap/opu/odata/sap/<SERVICE_PATH>";\nString entityName = "EntityCollectionName";\nHttpClient httpClient = HttpClientAccessor.getHttpClient(destination);\n\n// instantiate custom OData V2 batch request\nODataRequestBatch requestBatch = new ODataRequestBatch(servicePath, ODataProtocol.V2);\n\n// instantiate custom OData V2 read request\nStructuredQuery structuredQuery = StructuredQuery.onEntity(entityName, ODataProtocol.V2);\nstructuredQuery.select("Field1", "Field2", "Field3");\nstructuredQuery.filter(FieldReference.of("Field4").equalTo("FooBar"));\nString encodedQuery = structuredQuery.getEncodedQueryString();\nODataRequestRead requestRead = new ODataRequestRead(servicePath, entityName, encodedQuery, ODataProtocol.V2);\n\n// add read request to batch\nrequestBatch.addRead(requestRead);\n\n// execute the batch request\nODataRequestResultMultipartGeneric batchResult = requestBatch.execute(httpClient);\n\n// extract information from batch response, by referring to the individual OData request reference\nODataRequestResultGeneric queryResult = batchResult.getResult(requestRead);\nList<Map<String, Object>> listOfEntityFields = queryResult.asListOfMaps();\n')),(0,i.kt)("p",null,"This example is a great demonstration of how you can work around certain limitations of a type-safe client aka VDM, tackle advanced OData features, or even take care of misbehaving servers or OData standard deviations."),(0,i.kt)("h2",{id:"call-odata-v4-bound-functions-and-actions"},"Call OData v4 Bound Functions and Actions"),(0,i.kt)("p",null,"Bound function and actions were freshly introduced in OData v4 specification.\nWe'll soon provide a type-safe API to leverage these features in a convenient way.\nIf you already require using this functionality, we have a low-level implementation in place that is capable of performing bound function and action calls."),(0,i.kt)("p",null,"Below is a generic client example that you can use as a workaround:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'// this code will build the following URL:\n// "/service/Entity(key1=\'foo%2Fbar\',key2=123)/Model.Function(param1=\'foo%2Fbar\',param2=123)"\n\nODataEntityKey key = new ODataEntityKey(ODataProtocol.V4)\n    .addKeyProperty("key1", "foo/bar")\n    .addKeyProperty("key2", 123);\n\nODataFunctionParameters  params = new ODataFunctionParameters(ODataProtocol.V4)\n    .addKeyProperty("param1", "foo/bar")\n    .addKeyProperty("param2", 123);\n\nODataResourcePath functionPath =\n    new ODataResourcePath()\n        .addSegment("Entity", key)\n        .addSegment("Model.Function", params);\n\nODataRequestFunction request =\n    new ODataRequestFunction("/service", functionPath, null, ODataProtocol.V4);\n')),(0,i.kt)("p",null,"This is essentially what happens under the hood when you are using the generated type-safe client code.\nWhen we release a support for type-safe calls you can simple replace this snippets with the fluent API."),(0,i.kt)("h3",{id:"adding-trailing-slash-to-the-service-path"},"Adding Trailing Slash to the Service Path"),(0,i.kt)("p",null,"By default the SAP Cloud SDK strips all trailing slashes from a resource path.\nIt's a standard behavior and works for 99% of productively available services.\nSometimes, however, services might complain or even fail if a path doesn't end with a slash ",(0,i.kt)("inlineCode",{parentName:"p"},"/"),"."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"https://host/service-path/resource-path/?$filter...")," - works"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"https://host/service-path/resource-path?$filter..")," - doesn't work (default URI composition strategy in the SAP Cloud SDK)")),(0,i.kt)("p",null,"To workaround this situation you can use the generic OData client:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'\nODataRequestRead request = new ODataRequestRead("/service-path/resource-path/", "", "$filter=...", ODataProtocol.V2)\n// produces an URI like this: /service-path/resource-path/?$filter=...\n\nHttpClient client = HttpClientAccessor.getHttpClient(destination);\nODataRequestResultGeneric result = request.execute(client);\n\n')))}c.isMDXComponent=!0}}]);