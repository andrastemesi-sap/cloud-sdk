(window.webpackJsonp=window.webpackJsonp||[]).push([[93],{167:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return b}));var a=n(3),i=n(7),l=(n(0),n(205)),r={id:"resilience",title:"Resilience Capabilities",hide_title:!1,hide_table_of_contents:!1,sidebar_label:"Resilience",description:"How to use SAP Cloud SDK for Java to introduce resilience patterns into your application.",keywords:["sap","cloud","sdk","resilience","multi tenancy","cloud native","timeout"],image:null},o={unversionedId:"java/features/resilience/resilience",id:"java/features/resilience/resilience",isDocsHomePage:!1,title:"Resilience Capabilities",description:"How to use SAP Cloud SDK for Java to introduce resilience patterns into your application.",source:"@site/docs/java/features/resilience/resilience.mdx",slug:"/java/features/resilience/resilience",permalink:"/cloud-sdk/docs/java/features/resilience/resilience",editUrl:"https://github.com/SAP/cloud-sdk/edit/main/docs/java/features/resilience/resilience.mdx",version:"current",lastUpdatedBy:"Florian Richter",lastUpdatedAt:1613990839,sidebar_label:"Resilience",sidebar:"someSidebar",previous:{title:"Multitenancy With the Thread Context",permalink:"/cloud-sdk/docs/java/features/multi-tenancy/multi-tenancy-thread-context"},next:{title:"Caching Capabilities",permalink:"/cloud-sdk/docs/java/features/resilience/caching"}},c=[{value:"Using the Resilience API",id:"using-the-resilience-api",children:[{value:"Executing Operations",id:"executing-operations",children:[]},{value:"Building a Resilience Configuration",id:"building-a-resilience-configuration",children:[]}]},{value:"Resilience Capabilities",id:"resilience-capabilities",children:[]}],s={toc:c};function b(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(l.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"The SAP Cloud SDK for Java provides abstractions for some frequently used resilience patterns like timeout, retry, or circuit breaker.\nApplying such patterns helps to make an application more resilient against failures it might encounter."),Object(l.b)("p",null,"The following article describes which resilience features the SAP Cloud SDK offers and how to apply them.\nIf you are looking for a quick start with resilience also check out our ",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"https://developers.sap.com/tutorials/s4sdk-resilience.html"}),"dedicated tutorial")," on the topic!"),Object(l.b)("h2",{id:"using-the-resilience-api"},"Using the Resilience API"),Object(l.b)("p",null,"The SAP Cloud SDK allows running any code in the context of one or more resilience patterns.\nThere are two essential building blocks for achieving this:"),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},"The ",Object(l.b)("inlineCode",{parentName:"li"},"ResilienceConfiguration")," that determines which patterns should be applied."),Object(l.b)("li",{parentName:"ol"},"The ",Object(l.b)("inlineCode",{parentName:"li"},"ResilienceDecorator")," is capable of applying the configuration to an operation.")),Object(l.b)("p",null,"The fluent ",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"https://help.sap.com/http.svc/rc/b579bf8578954412aea2b458e8452201/1.0/en-US/com/sap/cloud/sdk/cloudplatform/resilience/ResilienceConfiguration.html"}),"Resilience Configuration API")," provides builders that help with assembling different resilience patterns and their associated parameters.\nWhich patterns are available and how to use them is explained in the ",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"#building-a-resilience-configuration"}),"dedicated section below"),"."),Object(l.b)("p",null,"The ",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"https://help.sap.com/http.svc/rc/b579bf8578954412aea2b458e8452201/1.0/en-US/com/sap/cloud/sdk/cloudplatform/resilience/ResilienceDecorator.html"}),"Resilience Decorator")," is capable of applying such a configuration to a given ",Object(l.b)("inlineCode",{parentName:"p"},"Callable")," or ",Object(l.b)("inlineCode",{parentName:"p"},"Supplier"),"."),Object(l.b)("h3",{id:"executing-operations"},"Executing Operations"),Object(l.b)("p",null,"Consider the following code:"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),"result = ResilienceDecorator.executeSupplier(() -> operation(), configuration);\n")),Object(l.b)("p",null,"This code executes ",Object(l.b)("inlineCode",{parentName:"p"},"operation()")," in a resilient manner according to a ",Object(l.b)("inlineCode",{parentName:"p"},"ResilienceConfiguration"),".\nThe decorator will apply all in ",Object(l.b)("inlineCode",{parentName:"p"},"configuration")," configured patterns and all logic that is needed to combine these patterns."),Object(l.b)("p",null,"Some resilience patterns are applied over multiple executions of the same operation.\nFor example, the circuit breaker will prevent further executions if a significant portion of previous attempts failed."),Object(l.b)("p",null,"To understand how the SAP Cloud SDK applies this concept consider the following snippet:"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),'configuration1 = ResilienceConfiguration.of("config-id-1");\nconfiguration2 = ResilienceConfiguration.of("config-id-1");\nconfiguration3 = ResilienceConfiguration.of("config-id-2");\n\nResilienceDecorator.executeSupplier(() -> operation(), configuration1);\nResilienceDecorator.executeSupplier(() -> operation(), configuration1);\nResilienceDecorator.executeSupplier(() -> operation(), configuration2);\nResilienceDecorator.executeSupplier(() -> operation(), configuration3);\n')),Object(l.b)("p",null,'Here executions one, two, and three will all share the same "resilience state".\nThis means that they will share the same instance of a circuit breaker or bulkhead.\nThe state is shared via ',Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"#building-a-resilience-configuration"}),"the identifier")," of the associated configuration."),Object(l.b)("h4",{id:"operation-types"},"Operation Types"),Object(l.b)("p",null,"The decorator operates with two kinds of operations:"),Object(l.b)("table",null,Object(l.b)("tbody",null,Object(l.b)("tr",null,Object(l.b)("td",null,Object(l.b)("a",{href:"https://docs.oracle.com/javase/8/docs/api/java/util/concurrent/Callable.html"},"Callable")),Object(l.b)("td",null,"May throw checked or unchecked Exceptions")),Object(l.b)("tr",null,Object(l.b)("td",null,Object(l.b)("a",{href:"https://docs.oracle.com/javase/8/docs/api/java/util/function/Supplier.html"},"Supplier")),Object(l.b)("td",null,"May only throw unchecked Exceptions")))),Object(l.b)("p",null,"Noticeable is the difference in signatures: ",Object(l.b)("em",{parentName:"p"},"Callable")," throws a ",Object(l.b)("em",{parentName:"p"},"checked exception")," while ",Object(l.b)("em",{parentName:"p"},"Supplier")," does not.\nYou can choose whatever fits your use case best."),Object(l.b)("h4",{id:"execution-variants"},"Execution Variants"),Object(l.b)("p",null,"The decorator allows for three different ways of applying a configuration:"),Object(l.b)("table",null,Object(l.b)("tbody",null,Object(l.b)("tr",null,Object(l.b)("td",null,Object(l.b)("em",null,"Execute")),Object(l.b)("td",null,"Immediately runs the operation")),Object(l.b)("tr",null,Object(l.b)("td",null,Object(l.b)("em",null,"Decorate")),Object(l.b)("td",null,"Returns a new operation to be run later")),Object(l.b)("tr",null,Object(l.b)("td",null,Object(l.b)("em",null,"Queue")),Object(l.b)("td",null,"Immediately runs the operation asynchronously")))),Object(l.b)("p",null,"In case your operation should run asynchronously we highly recommend you leverage the ",Object(l.b)("inlineCode",{parentName:"p"},"queue")," functionality.\nThe decorator will ensure the ",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"/cloud-sdk/docs/java/features/multi-tenancy/multi-tenancy-thread-context"}),"Thread Context")," with Tenant and Principal information is propagated correctly to new Threads."),Object(l.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(l.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(l.b)("h5",{parentName:"div"},Object(l.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(l.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(l.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(l.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(l.b)("p",{parentName:"div"},"Note that the Resilience Decorator will try to propagate the current ",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"/cloud-sdk/docs/java/features/multi-tenancy/multi-tenancy-thread-context"}),"Thread Context")," at the ",Object(l.b)("em",{parentName:"p"},"time the decorator is invoked"),".\nThis is important when you are decorating a Callable or Supplier and running it later.\nThe Thread Context must be available whenever ",Object(l.b)("inlineCode",{parentName:"p"},"decorateCallable")," or ",Object(l.b)("inlineCode",{parentName:"p"},"decorateSupplier")," is evaluated.\nIf the call to ",Object(l.b)("inlineCode",{parentName:"p"},"ResilienceDecorator")," should take place asynchronously you should ",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"/cloud-sdk/docs/java/features/multi-tenancy/multi-tenancy-thread-context#running-asynchronous-operations"}),"follow these steps")," to ensure the Thread Context is available."))),Object(l.b)("h4",{id:"failures-and-fallbacks"},"Failures and Fallbacks"),Object(l.b)("p",null,"An operation might fail for two reasons:"),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},"The operation itself encounters a failure and throws an error or exception"),Object(l.b)("li",{parentName:"ol"},"A resilience pattern causes the operation to fail (e.g. the circuit breaker prevents further invocations)")),Object(l.b)("p",null,"The SAP Cloud SDK wraps all kind of checked and unchecked exceptions into a ",Object(l.b)("inlineCode",{parentName:"p"},"ResilienceRuntimeException")," and throws them."),Object(l.b)("p",null,"To deal with failures one can either catch the ",Object(l.b)("inlineCode",{parentName:"p"},"ResilienceRuntimeException")," or provide a fallback function:"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),'executeCallable(() -> operation(), configuration,\n(throwable) -> {\n    log.debug("Encountered a failure in operation: ", throwable);\n    log.debug("Proceeding with fallback value: {}", fallback);\n    return fallback;\n});\n')),Object(l.b)("p",null,"In the case of ",Object(l.b)("inlineCode",{parentName:"p"},"Callable"),", this relieves you of the need to catch the exception at the outer level."),Object(l.b)("h3",{id:"building-a-resilience-configuration"},"Building a Resilience Configuration"),Object(l.b)("p",null,"A new ",Object(l.b)("inlineCode",{parentName:"p"},"ResilienceConfiguration")," ",Object(l.b)("em",{parentName:"p"},"with default values")," is created by providing an identifier for it:"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),'configuration = ResilienceConfiguration.of("identifier");\n')),Object(l.b)("p",null,"The identifier can be either a string or a class.\nIn the case of the latter, the (full) class name will be used as the identifier.\nThe identifier will be used to apply resilience patterns across ",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"#executing-operations"}),"multiple invocations to operations"),"."),Object(l.b)("p",null,"Check ",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"https://help.sap.com/http.svc/rc/b579bf8578954412aea2b458e8452201/1.0/en-US/com/sap/cloud/sdk/cloudplatform/resilience/ResilienceConfiguration.html#of-java.lang.String-"}),"the Javadoc")," for which patterns and parameters will be applied by default.\nYou can also create a configuration with all patterns disabled:"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),'configuration = ResilienceConfiguration.empty("identifier");\n')),Object(l.b)("p",null,"Individual resilience patterns are configured via dedicated builder classes like ",Object(l.b)("inlineCode",{parentName:"p"},"TimeLimiterConfiguration")," and are added to the configuration via dedicated setters, e.g. ",Object(l.b)("inlineCode",{parentName:"p"},"timeLimiterConfiguration()"),".\nFor details see the list of ",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"#resilience-capabilities"}),"Resilience Capabilities")," below."),Object(l.b)("h4",{id:"multi-tenancy"},"Multi Tenancy"),Object(l.b)("p",null,"The SAP Cloud SDK is capable of applying the different resilience patterns in a tenant and principal aware manner.\nConsider for example the Bulkhead pattern which limits the number of parallel executions.\nIf the operation is tenant-specific then you would probably want to avoid one tenant blocking all others."),Object(l.b)("p",null,"For this reason, the SAP Cloud SDK ",Object(l.b)("em",{parentName:"p"},"by default")," isolates resilience patterns based on tenant and principal, if they are available.\nThis strategy can be configured, e.g. for running ",Object(l.b)("em",{parentName:"p"},"without any isolation")," use:"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),"configuration.isolationMode(ResilienceIsolationMode.NO_ISOLATION);\n")),Object(l.b)("p",null,"Other than no isolation there are essentially two modes for tenant and/or principal isolation:"),Object(l.b)("table",null,Object(l.b)("tbody",null,Object(l.b)("tr",null,Object(l.b)("td",null,"Required"),Object(l.b)("td",null,"Always isolates on tenant and/or principal level, will throw an exception if no tenant/principal is available")),Object(l.b)("tr",null,Object(l.b)("td",null,"Optional"),Object(l.b)("td",null,"Only isolates if tenant and/or principal information is available")))),Object(l.b)("p",null,"Details can be found on the API reference of ",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"https://help.sap.com/http.svc/rc/b579bf8578954412aea2b458e8452201/1.0/en-US/com/sap/cloud/sdk/cloudplatform/resilience/ResilienceIsolationMode.html"}),"ResilienceIsolationMode"),"."),Object(l.b)("h2",{id:"resilience-capabilities"},"Resilience Capabilities"),Object(l.b)("p",null,"The following resilience patterns are available and can be configured in a Resilience Configuration:"),Object(l.b)("table",null,Object(l.b)("tbody",null,Object(l.b)("tr",null,Object(l.b)("td",null,"Timeout"),Object(l.b)("td",null,Object(l.b)("em",null,Object(l.b)("a",{href:"https://help.sap.com/http.svc/rc/b579bf8578954412aea2b458e8452201/1.0/en-US/com/sap/cloud/sdk/cloudplatform/resilience/ResilienceConfiguration.TimeLimiterConfiguration.html"},"TimeLimiterConfiguration"))),Object(l.b)("td",null,"Limit how long an operation may run before it should be interrupted")),Object(l.b)("tr",null,Object(l.b)("td",null,"Retry"),Object(l.b)("td",null,Object(l.b)("em",null,Object(l.b)("a",{href:"https://help.sap.com/http.svc/rc/b579bf8578954412aea2b458e8452201/1.0/en-US/com/sap/cloud/sdk/cloudplatform/resilience/ResilienceConfiguration.RetryConfiguration.html"},"RetryConfiguration"))),Object(l.b)("td",null,"Retry a failed operation a limited amount of times before failing")),Object(l.b)("tr",null,Object(l.b)("td",null,"Circuit Breaker"),Object(l.b)("td",null,Object(l.b)("em",null,Object(l.b)("a",{href:"https://help.sap.com/http.svc/rc/b579bf8578954412aea2b458e8452201/1.0/en-US/com/sap/cloud/sdk/cloudplatform/resilience/ResilienceConfiguration.CircuitBreakerConfiguration.html"},"CircuitBreakerConfiguration"))),Object(l.b)("td",null,"Reject attempts if too many failures occurred in the past")),Object(l.b)("tr",null,Object(l.b)("td",null,"Bulkhead ",Object(l.b)("p",null,"(also known as Shed Load or Load Shedding)")),Object(l.b)("td",null,Object(l.b)("em",null,Object(l.b)("a",{href:"https://help.sap.com/http.svc/rc/b579bf8578954412aea2b458e8452201/1.0/en-US/com/sap/cloud/sdk/cloudplatform/resilience/ResilienceConfiguration.BulkheadConfiguration.html"},"BulkheadConfiguration"))),Object(l.b)("td",null,"Limit how many instances of this operation may run in parallel")))),Object(l.b)("p",null,"You can find good explanations on how the individual patterns behave on the ",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"https://resilience4j.readme.io/docs/"}),"documentation of resilience4j")," which the SAP Cloud SDK uses under the hood to perform resilient operations."),Object(l.b)("p",null,"Be aware that the patterns interact with each other.\nThey are applied in the following order:"),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},"Timeouts"),Object(l.b)("li",{parentName:"ol"},"Bulkhead"),Object(l.b)("li",{parentName:"ol"},"Circuit Breaker"),Object(l.b)("li",{parentName:"ol"},"Retries"),Object(l.b)("li",{parentName:"ol"},"Fallbacks")),Object(l.b)("p",null,"This means that every individual attempt triggered by retries will be limited by the timeout.\nEvery failed retry will be accounted for in the circuit breaker.\nOnly if all retries failed the fallback function will be considered."))}b.isMDXComponent=!0},205:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return h}));var a=n(0),i=n.n(a);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=i.a.createContext({}),b=function(e){var t=i.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=b(e.components);return i.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},d=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,r=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=b(n),d=a,h=u["".concat(r,".").concat(d)]||u[d]||p[d]||l;return n?i.a.createElement(h,o(o({ref:t},s),{},{components:n})):i.a.createElement(h,o({ref:t},s))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,r=new Array(l);r[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,r[1]=o;for(var s=2;s<l;s++)r[s]=n[s];return i.a.createElement.apply(null,r)}return i.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);