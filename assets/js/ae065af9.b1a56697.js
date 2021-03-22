(window.webpackJsonp=window.webpackJsonp||[]).push([[86],{164:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return i})),n.d(t,"default",(function(){return g}));var r=n(3),o=n(7),a=(n(0),n(214)),l={title:"Logging",sidebar_label:"Logging",description:"How the SAP Cloud SDK logs errors and exceptions",keywords:["sap","cloud","sdk","JavaScript","TypeScript","error","exception","logging"]},s={unversionedId:"js/features/logging",id:"js/features/logging",isDocsHomePage:!1,title:"Logging",description:"How the SAP Cloud SDK logs errors and exceptions",source:"@site/docs/js/features/logging.mdx",slug:"/js/features/logging",permalink:"/cloud-sdk/docs/js/features/logging",editUrl:"https://github.com/SAP/cloud-sdk/edit/main/docs/js/features/logging.mdx",version:"current",lastUpdatedBy:"Matthias Kuhr",lastUpdatedAt:1616401855,formattedLastUpdatedAt:"3/22/2021",sidebar_label:"Logging",sidebar:"someSidebar",previous:{title:"Error Handling",permalink:"/cloud-sdk/docs/js/features/error-handling"},next:{title:"Shared ESLint configuration",permalink:"/cloud-sdk/docs/js/features/eslint-configuration"}},i=[{value:"Creating a Logger",id:"creating-a-logger",children:[]},{value:"Use a Logger",id:"use-a-logger",children:[]},{value:"Logging Exceptions",id:"logging-exceptions",children:[]},{value:"Exception Logger",id:"exception-logger",children:[]},{value:"What Happens under the Hood",id:"what-happens-under-the-hood",children:[]}],c={toc:i};function g(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"creating-a-logger"},"Creating a Logger"),Object(a.b)("p",null,"The SAP Cloud SDK provides an easy way to create a logger:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-ts"},"const myLogger = createLogger('my-message-context');\n")),Object(a.b)("p",null,"The string argument in the ",Object(a.b)("inlineCode",{parentName:"p"},"createLogger")," is the identifier for the logger and you should use a separate message context for each logical part of your application.\nSince it is used to group messages or set the log level per context."),Object(a.b)("h2",{id:"use-a-logger"},"Use a Logger"),Object(a.b)("p",null,"The logger provides the usual log methods:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-ts"},"myLogger.debug('Here is some debug.');\nmyLogger.info('Here is some info.');\nmyLogger.warn('Here is a warning.');\nmyLogger.error('Here is a error.');\n")),Object(a.b)("p",null,"The default value for the log level is ",Object(a.b)("inlineCode",{parentName:"p"},"info"),".\nIn the example above the first line would not appear in the logs.\nYou can set the log level either on creation:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-ts"},"const myLogger = createLogger({\n  messageContext: 'my-message-context',\n  level: 'info'\n});\n")),Object(a.b)("p",null,"or later in you application via the ",Object(a.b)("inlineCode",{parentName:"p"},"setLogLevel()")," method:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-ts"},"setLogLevel('error', 'my-message-context');\n")),Object(a.b)("h2",{id:"logging-exceptions"},"Logging Exceptions"),Object(a.b)("p",null,"In the example above a string was passed to the logging method:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-ts"},"myLogger.info('Here is some info.');\n")),Object(a.b)("p",null,"and in the logs you would find a related entry"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"TimeStamp [INFO] my-message-context The message you provided.\n")),Object(a.b)("p",null,"However, you can also pass an error object also known as an exception to the log statement.\nIn this case the log statement will contain only the message of the exception for all log functions except for ",Object(a.b)("inlineCode",{parentName:"p"},"error"),".\nIf ",Object(a.b)("inlineCode",{parentName:"p"},"myLogger.error(err)")," is called with an error object it will also log the stack trace:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-ts"},"myLogger.error(new Error('Log this message and stack.')\n")),Object(a.b)("h2",{id:"exception-logger"},"Exception Logger"),Object(a.b)("p",null,"The SAP Cloud SDK enables an exception logger once you create a logger instance somewhere in your project.\nThe exception logger logs unhandled exception as if you would log the error manually.\nIn other words, the exception logger does the following for you:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-ts"},"try {\n  someMethodThrowing();\n} catch (err) {\n  logger.error(err);\n  throw err;\n}\n")),Object(a.b)("p",null,"You can disable this functionality with the ",Object(a.b)("inlineCode",{parentName:"p"},"disableExceptionLogger()")," method."),Object(a.b)("h2",{id:"what-happens-under-the-hood"},"What Happens under the Hood"),Object(a.b)("p",null,"The SAP Cloud SDK logger instances are based on ",Object(a.b)("a",{parentName:"p",href:"https://github.com/winstonjs/winston"},"winston"),".\nA ",Object(a.b)("inlineCode",{parentName:"p"},"logger")," instance is created from a central container which knows all existing loggers.\nVia the ",Object(a.b)("inlineCode",{parentName:"p"},"container")," the SAP Cloud SDK provides methods per message context:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-ts"},"getLogger('my-message-context'); //get logger if present\nsetLogLevel('error', 'my-message-context'); //set log level\n")),Object(a.b)("p",null,"or global methods for all loggers:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-ts"},"setGlobalLogLevel('warn'); //set log level all logger to warn\nmuteLoggers(); //mute all loggers completely\nunmuteLogger(); //unmute all loggers\n")),Object(a.b)("p",null,"Besides a log level, each logger contains a ",Object(a.b)("inlineCode",{parentName:"p"},"format")," and ",Object(a.b)("inlineCode",{parentName:"p"},"transports"),".\nThe SAP Cloud SDK sets ",Object(a.b)("a",{parentName:"p",href:"https://github.com/SAP/cloud-sdk-js/blob/c8f11d600efbc28b6f6a89dec8552c518e204a0b/packages/util/src/logger/cloud-sdk-logger.ts#L97-L123"},"default values")," for these parts."),Object(a.b)("p",null,"The transport is set to ",Object(a.b)("inlineCode",{parentName:"p"},"console")," and the format is set to ",Object(a.b)("a",{parentName:"p",href:"https://github.com/SAP/cloud-sdk-js/blob/main/packages/util/src/logger/format/local.ts"},"local")," or ",Object(a.b)("a",{parentName:"p",href:"https://github.com/SAP/cloud-sdk-js/blob/main/packages/util/src/logger/format/kibana.ts"},"kibana"),".\nIf ",Object(a.b)("inlineCode",{parentName:"p"},"VCAP_SERVICE")," variables are present in the environment variables the ",Object(a.b)("inlineCode",{parentName:"p"},"kibana")," format is used, because the SAP Cloud SDK assumes your application is running on Cloud Foundry."),Object(a.b)("p",null,"In case you see a need for higher flexibility of the logging instance feel free to create an issue in our ",Object(a.b)("a",{parentName:"p",href:"https://github.com/SAP/cloud-sdk-js"},"repository")," or make a contribution"))}g.isMDXComponent=!0},214:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=o.a.createContext({}),g=function(e){var t=o.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=g(e.components);return o.a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=g(n),b=r,d=p["".concat(l,".").concat(b)]||p[b]||u[b]||a;return n?o.a.createElement(d,s(s({ref:t},c),{},{components:n})):o.a.createElement(d,s({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,l=new Array(a);l[0]=b;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:r,l[1]=s;for(var c=2;c<a;c++)l[c]=n[c];return o.a.createElement.apply(null,l)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);