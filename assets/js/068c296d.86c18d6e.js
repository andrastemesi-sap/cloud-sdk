(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{106:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return u}));var i=n(3),a=n(7),o=(n(0),n(214)),r=n(215),s={title:"Connecting to External Systems From the Business Application Studio",sidebar_label:"Connecting to External Systems from BAS",description:"This article describes how the SDK helps to connect to external systems from the Business Application Studio.",keywords:["sap","cloud","sdk","proxy","connectivity","Business Application Studio","cloud-foundry","JavaScript","TypeScript"]},c={unversionedId:"js/guides/bas-external-system",id:"js/guides/bas-external-system",isDocsHomePage:!1,title:"Connecting to External Systems From the Business Application Studio",description:"This article describes how the SDK helps to connect to external systems from the Business Application Studio.",source:"@site/docs/js/guides/bas-external-system.mdx",slug:"/js/guides/bas-external-system",permalink:"/cloud-sdk/docs/js/guides/bas-external-system",editUrl:"https://github.com/SAP/cloud-sdk/edit/main/docs/js/guides/bas-external-system.mdx",version:"current",lastUpdatedBy:"cloud-sdk-js",lastUpdatedAt:1616137055,formattedLastUpdatedAt:"3/19/2021",sidebar_label:"Connecting to External Systems from BAS",sidebar:"someSidebar",previous:{title:"Migrate to our Open Source Version",permalink:"/cloud-sdk/docs/js/guides/migrate-to-open-source-version-of-cloud-sdk-for-javascript-typescript"},next:{title:"Overview of the Available Tutorials",permalink:"/cloud-sdk/docs/js/guides/tutorial-overview-sdk-js"}},l=[{value:"What is the Business Application Studio?",id:"what-is-the-business-application-studio",children:[]},{value:"Case 1: Connection to an OnPremises System",id:"case-1-connection-to-an-onpremises-system",children:[{value:"Technical Background",id:"technical-background",children:[]},{value:"Prerequisite 1: The Business Application Studio (BAS)",id:"prerequisite-1-the-business-application-studio-bas",children:[]},{value:"Prerequisite 2: Cloud Connector and Destination Setup",id:"prerequisite-2-cloud-connector-and-destination-setup",children:[]},{value:"Checking the Connection",id:"checking-the-connection",children:[]},{value:"Implementation",id:"implementation",children:[]},{value:"Principal Propagation",id:"principal-propagation",children:[]}]},{value:"Case 2: Connection to Cloud Systems",id:"case-2-connection-to-cloud-systems",children:[{value:"Prerequisite: Service Setup",id:"prerequisite-service-setup",children:[]},{value:"Implementation",id:"implementation-1",children:[]}]}],d={toc:l};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(i.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"what-is-the-business-application-studio"},"What is the Business Application Studio?"),Object(o.b)("p",null,"The Business Application Studio (BAS) is a development environment offered as a service on Cloud Foundry (CF).\nYou can simply subscribe to the BAS and from there quickly start developing without installing node, git, Visual Studio Code, or other tools.\nThe solution looks and feels like Visual Studio Code, which is no surprise since it is based on ",Object(o.b)("a",{parentName:"p",href:"https://theia-ide.org/"},"Eclipse Theia"),", the open source version of Visual Studio Code."),Object(o.b)("p",null,"However, SAP added a few useful features to the BAS.\nYou can connect the BAS to your CF account, which allows you to reach all systems that you have configured on CF from your local machine.\nThis includes systems that are connected through the Cloud Connector (CC) and are normally not reachable through the internet.\nBeing able to test changes locally reduces the overhead of deploying remotely and thus increases convenience for developers."),Object(o.b)("img",{alt:"Connecting to external On-Premise systems",src:Object(r.a)("img/cloud-connector.png")}),Object(o.b)("h2",{id:"case-1-connection-to-an-onpremises-system"},"Case 1: Connection to an OnPremises System"),Object(o.b)("h3",{id:"technical-background"},"Technical Background"),Object(o.b)("p",null,"Companies do not expose their SAP S/4HANA On-Premise systems to the internet.\nThey are only reachable via a CC attached to a CF account.\nIn principle, you cannot reach these systems outside the CF account."),Object(o.b)("p",null,"However, due to the subscription between the BAS and the CF account, there is a connection from the local application to the SAP S/4HANA system.\nOn a high level the connection works the following way:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"The BAS includes an HTTP_PROXY running at http://localhost:8887"),Object(o.b)("li",{parentName:"ul"},"This proxy forwards all ",Object(o.b)("inlineCode",{parentName:"li"},"http")," requests to the CF account"),Object(o.b)("li",{parentName:"ul"},"CF searches the existing destinations for one matching the name"),Object(o.b)("li",{parentName:"ul"},"If a destination is present, an initial request is sent to this destination"),Object(o.b)("li",{parentName:"ul"},"The proxy is a reverse proxy also piping back the response to the BAS")),Object(o.b)("h3",{id:"prerequisite-1-the-business-application-studio-bas"},"Prerequisite 1: The Business Application Studio (BAS)"),Object(o.b)("p",null,"You have a Cloud Foundry account and a subscription to the BAS.\nVia the subscription, the BAS can access all destination in the subscribed account."),Object(o.b)("h3",{id:"prerequisite-2-cloud-connector-and-destination-setup"},"Prerequisite 2: Cloud Connector and Destination Setup"),Object(o.b)("p",null,"You have set up a working Cloud Connector and configured a destination pointing to an On-Premise system.\nPer default, destinations are not usable by a subscribed BAS.\nYou need to set two properties ",Object(o.b)("inlineCode",{parentName:"p"},"WebIDEEnabled")," and ",Object(o.b)("inlineCode",{parentName:"p"},"HTML5.DynamicDestination")," to enable that feature for a specific destination.\nGo to the destination configuration in CF and add the properties:"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:null},"Property"),Object(o.b)("th",{parentName:"tr",align:null},"Value"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("inlineCode",{parentName:"td"},"WebIDEEnabled")),Object(o.b)("td",{parentName:"tr",align:null},"true")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("inlineCode",{parentName:"td"},"HTML5.DynamicDestination")),Object(o.b)("td",{parentName:"tr",align:null},"true")))),Object(o.b)("h3",{id:"checking-the-connection"},"Checking the Connection"),Object(o.b)("p",null,"Before you start the implementation, ensure that the connection is correctly configured.\nThe connectivity proxy running in BAS expects a pattern of the kind ",Object(o.b)("inlineCode",{parentName:"p"},"http://<destinationName>.dest"),".\nWhen such a pattern is found the destination name is extracted and checked against the destinations in the related Cloud\nFoundry account.\nIf a match is found and the ",Object(o.b)("inlineCode",{parentName:"p"},"WebIDEEnabled")," and ",Object(o.b)("inlineCode",{parentName:"p"},"HTML5.DynamicDestination")," properties are enabled for the destination the request is forwarded via this destination.\nAll authorization information from the real destination is used.\nYou can test this flow by using a simple ",Object(o.b)("inlineCode",{parentName:"p"},"curl")," command without any code."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"curl <destinationName>.dest/path/to/service\n")),Object(o.b)("p",null,"So if your destination is called ",Object(o.b)("inlineCode",{parentName:"p"},"S4H_Test.dest")," and you want to query the catalogue service the command would be:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},'curl -v -i "S4H_Test.dest/sap/opu/odata/iwfnd/catalogservice;v=2/ServiceCollection?%24top=1"\n')),Object(o.b)("p",null,"If the request responds with status code 200 for the service you want to use, you can start the implementation.\nThe connectivity proxy has a built-in cache that needs to be emptied after you adjusted destinations.\nThis is done by calling:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"curl localhost:8887/reload\n")),Object(o.b)("p",null,"For more details on testing and troubleshooting have a look at ",Object(o.b)("a",{parentName:"p",href:"https://blogs.sap.com/2020/10/13/how-to-check-the-connectivity-to-your-backend-system-in-business-application-studio/"},"this guide"),"."),Object(o.b)("h3",{id:"implementation"},"Implementation"),Object(o.b)("p",null,"If the connection is tested and working you can start the implementation.\nThe SAP Cloud SDK helps you to consider the HTTP_PROXY automatically and makes it easy to use the same code base locally and in production on CF.\nThe SAP Cloud SDK has a ",Object(o.b)("a",{parentName:"p",href:"../features/connectivity/destination"},"destination lookup")," priority considering environment variables first."),Object(o.b)("p",null,"The trick is to define a ",Object(o.b)("inlineCode",{parentName:"p"},"destinations")," environment variable when you run locally, which works like a switch under the hood when you execute:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-ts"},"executeHttpRequest({ destinationName: 'myDestinationName', jwt: 'myJWT' });\n")),Object(o.b)("p",null,"The code is the same for local execution and production.\nThe two situations are:"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Case 1:")," When run locally, the SAP Cloud SDK reads the destination from the environment variables.\nThe ",Object(o.b)("inlineCode",{parentName:"p"},"jwt")," is irrelevant.\nThe destination contains only the name and URL of the real CF destination.\nSince the destination has no proxy type specified, the SAP Cloud SDK takes the HTTP_PROXY into account, as is the default.\nFrom there the flow described above takes place."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Case 2:")," When run on CF there is no environment variable present.\nThe ",Object(o.b)("inlineCode",{parentName:"p"},"jwt")," is used to fetch the full destination from the service.\nThe proxy type is ",Object(o.b)("inlineCode",{parentName:"p"},"OnPremise")," and the connectivity service provides all proxy information."),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"The ",Object(o.b)("inlineCode",{parentName:"p"},"executeHttpRequest()")," function is used by all request builders provided of the SAP Cloud SDK as well as by CAP applications connecting to an SAP S/4HANA system."))),Object(o.b)("p",null,"You use ",Object(o.b)("a",{parentName:"p",href:"https://code.visualstudio.com/docs/editor/debugging#_launchjson-attributes"},"launch configurations")," to run and debug applications locally.\nEither extend your existing ",Object(o.b)("inlineCode",{parentName:"p"},".vscode/launch.json")," or create a new one."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-JSON"},'{"configurations": [\n    {\n      "type": "node",\n      "request": "launch",\n      "name": "Debug my application",\n      "program": "${workspaceFolder}/dist/main.js",\n      "envFile": "${workspaceFolder}/.env",\n      "preLaunchTask": "npm: build",\n      "outFiles": [\n        "${workspaceFolder}/dist/**/*.js"\n      ]\n    }\n  ]\n}\n')),Object(o.b)("p",null,"In this example, we use a simple Nest.js application.\nThe code will look almost identical for express or ",Object(o.b)("a",{parentName:"p",href:"https://community.sap.com/topics/cloud-application-programming"},"CAP")," applications.\nThe property ",Object(o.b)("inlineCode",{parentName:"p"},"program")," defines the script file executed when you run the configuration.\nIn our case, the ",Object(o.b)("inlineCode",{parentName:"p"},"main.js")," script will start up the Nest server.\nThe ",Object(o.b)("inlineCode",{parentName:"p"},"preLaunchTask")," executes the build before each run which compiles the TypeScript files to JavaScript.\nThe ",Object(o.b)("inlineCode",{parentName:"p"},"outFiles")," property defines where the compiled files will be located."),Object(o.b)("p",null,"We have to set the ",Object(o.b)("inlineCode",{parentName:"p"},"destinations")," environment variable, to provide our destination.\nThis will interrupt the ",Object(o.b)("a",{parentName:"p",href:"/cloud-sdk/docs/js/features/connectivity/destination"},"destination lookup")," and lead to a destination with the HTTP_PROXY considered.\nThe easiest way to do that is via a ",Object(o.b)("inlineCode",{parentName:"p"},".env")," file which is read when starting the application.\nIf you do not have a ",Object(o.b)("inlineCode",{parentName:"p"},".env")," file, create one or adjust the existing one.\nJust add the following entry to the ",Object(o.b)("inlineCode",{parentName:"p"},".env")," file:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},'destinations="[{"name": "<destinationName>", "url": "http://<destinationName>.dest"}]"\n')),Object(o.b)("p",null,"Fill in the ",Object(o.b)("inlineCode",{parentName:"p"},"name")," and ",Object(o.b)("inlineCode",{parentName:"p"},"url")," of the destination you ",Object(o.b)("a",{parentName:"p",href:"#prerequisite-2-cloud-connector-and-destination-setup"},"configured in CF"),".\nYou can use the same pattern ",Object(o.b)("inlineCode",{parentName:"p"},"<name>.dest")," that you have used for ",Object(o.b)("a",{parentName:"p",href:"#checking-the-connection"},"testing the connection"),".\nAll requests done with the SAP Cloud SDK will now reach the SAP S/4HANA system via the BAS connectivity proxy.\nYou can start your application via the launch button."),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"The SAP Cloud SDK also offers a ",Object(o.b)("inlineCode",{parentName:"p"},"mockTestDestination()")," method which reads destination information from a ",Object(o.b)("inlineCode",{parentName:"p"},"system.json")," and ",Object(o.b)("inlineCode",{parentName:"p"},"credentials.json")," file.\nIn the end, this only sets the ",Object(o.b)("inlineCode",{parentName:"p"},"destinations")," environment variables as stored in the ",Object(o.b)("inlineCode",{parentName:"p"},".env")," file, but could become advantageous if you have many systems.\nYou can also set the ",Object(o.b)("inlineCode",{parentName:"p"},"credentials.json")," to your git ignore list so that they are not checked-in by accident and share the systems with your colleagues."))),Object(o.b)("p",null,"For the simple case you would add ",Object(o.b)("inlineCode",{parentName:"p"},"mockTestDestination(<destinationName>)")," to your local startup script and have a ",Object(o.b)("inlineCode",{parentName:"p"},"systems.json")," in your project root:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-JSON"},'{\n    "systems": [\n        {\n            "alias": "your CF destination name",\n            "uri": "your CF destination url "\n        }\n    ]\n}\n')),Object(o.b)("h3",{id:"principal-propagation"},"Principal Propagation"),Object(o.b)("p",null,"We have tested the flow with destinations using ",Object(o.b)("inlineCode",{parentName:"p"},"BasicAuthorization"),".\nThe SAP Cloud SDK team is currently investigating with the colleagues from BAS if principal propagation is possible and which conditions are needed.\nWe will update this section as soon as possible."),Object(o.b)("h2",{id:"case-2-connection-to-cloud-systems"},"Case 2: Connection to Cloud Systems"),Object(o.b)("p",null,"Cloud systems are reachable via the internet and you do not need any cloud connector to reach them.\nThe same is true for the destination service of the SAP Cloud Platform.\nHence you can use the same approach locally and in production."),Object(o.b)("h3",{id:"prerequisite-service-setup"},"Prerequisite: Service Setup"),Object(o.b)("p",null,"On Cloud Foundry, the access to services is granted via the ",Object(o.b)("inlineCode",{parentName:"p"},"VCAP_SERVICE")," variables.\nWe assume that you have configured your application so that it can access the destination service.\nIf not, follow the ",Object(o.b)("a",{parentName:"p",href:"https://developers.sap.com/group.s4sdk-js-cloud-foundry.html"},"steps in the Cloud Foundry tutorial"),"."),Object(o.b)("h3",{id:"implementation-1"},"Implementation"),Object(o.b)("p",null,"You can mirror the ",Object(o.b)("inlineCode",{parentName:"p"},"VCAP_SERVICE")," variables from your Cloud Foundry account to your local BAS.\nStart the BAS and connect your BAS workspace to the CF account.\nThis is done via the little CF icon (",Object(o.b)("img",{src:Object(r.a)("img/cf-connect-button.jpg")}),") on the left of the BAS.\nThen select the application from which you want to mirror the variables and select the folder containing the ",Object(o.b)("inlineCode",{parentName:"p"},".env")," file to store it.\nUse the ",Object(o.b)("inlineCode",{parentName:"p"},"envFile")," property in the ",Object(o.b)("inlineCode",{parentName:"p"},"launch.json")," to load the file on your local application startup."),Object(o.b)("p",null,"Now your application will fetch the service credentials and call the destination service as in production.\nNote that there are certain limitations to this approach.\nWithin the BAS you will not have a JWT issued for your user.\nThis means that flows like ",Object(o.b)("inlineCode",{parentName:"p"},"OAuth2SAMLBearerAssertion")," and ",Object(o.b)("inlineCode",{parentName:"p"},"OAuth2UserTokenExchange")," can only work if you provide such a JWT.\nThis is possible in principle, but difficult within the local development environment.\nWe recommend creating dedicated development destinations with authentications flows like:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"OAuth2ClientCredentials"),Object(o.b)("li",{parentName:"ul"},"BasicAuthentication"),Object(o.b)("li",{parentName:"ul"},"ClientCertificateAuthentication (here we wait for a fix on the ",Object(o.b)("a",{parentName:"li",href:"https://github.com/TooTallNate/node-https-proxy-agent/pull/111"},"http-proxy-agent")," or you have to disable the proxy")),Object(o.b)("p",null,"Note that for the connection to the cloud system the destinations do not need the two properties ",Object(o.b)("inlineCode",{parentName:"p"},"WebIDEEnabled")," and ",Object(o.b)("inlineCode",{parentName:"p"},"HTML5.DynamicDestination"),", because the BAS connectivity proxy is not needed."))}u.isMDXComponent=!0},214:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return h}));var i=n(0),a=n.n(i);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),d=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=d(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,r=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=d(n),b=i,h=u["".concat(r,".").concat(b)]||u[b]||p[b]||o;return n?a.a.createElement(h,s(s({ref:t},l),{},{components:n})):a.a.createElement(h,s({ref:t},l))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=b;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,r[1]=s;for(var l=2;l<o;l++)r[l]=n[l];return a.a.createElement.apply(null,r)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},215:function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return r}));var i=n(16),a=n(216);function o(){var e=Object(i.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,o=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,i){var o=void 0===i?{}:i,r=o.forcePrependBaseUrl,s=void 0!==r&&r,c=o.absolute,l=void 0!==c&&c;if(!n)return n;if(n.startsWith("#"))return n;if(Object(a.b)(n))return n;if(s)return t+n;var d=n.startsWith(t)?n:t+n.replace(/^\//,"");return l?e+d:d}(o,n,e,t)}}}function r(e,t){return void 0===t&&(t={}),(0,o().withBaseUrl)(e,t)}},216:function(e,t,n){"use strict";function i(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!i(e)}n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return a}))}}]);