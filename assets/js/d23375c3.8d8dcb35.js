(self.webpackChunksap_cloud_sdk_documentation=self.webpackChunksap_cloud_sdk_documentation||[]).push([[640],{3905:function(e,t,a){"use strict";a.d(t,{Zo:function(){return d},kt:function(){return m}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(a),m=r,v=p["".concat(l,".").concat(m)]||p[m]||u[m]||i;return a?n.createElement(v,o(o({ref:t},d),{},{components:a})):n.createElement(v,o({ref:t},d))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var c=2;c<i;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},8215:function(e,t,a){"use strict";var n=a(7294);t.Z=function(e){var t=e.children,a=e.hidden,r=e.className;return n.createElement("div",{role:"tabpanel",hidden:a,className:r},t)}},1395:function(e,t,a){"use strict";a.d(t,{Z:function(){return d}});var n=a(7294),r=a(944),i=a(6010),o="tabItem_1uMI",s="tabItemActive_2DSg";var l=37,c=39;var d=function(e){var t=e.lazy,a=e.block,d=e.defaultValue,u=e.values,p=e.groupId,m=e.className,v=(0,r.Z)(),h=v.tabGroupChoices,f=v.setTabGroupChoices,g=(0,n.useState)(d),k=g[0],y=g[1],b=n.Children.toArray(e.children),N=[];if(null!=p){var w=h[p];null!=w&&w!==k&&u.some((function(e){return e.value===w}))&&y(w)}var S=function(e){var t=e.currentTarget,a=N.indexOf(t),n=u[a].value;y(n),null!=p&&(f(p,n),setTimeout((function(){var e,a,n,r,i,o,l,c;(e=t.getBoundingClientRect(),a=e.top,n=e.left,r=e.bottom,i=e.right,o=window,l=o.innerHeight,c=o.innerWidth,a>=0&&i<=c&&r<=l&&n>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(s),setTimeout((function(){return t.classList.remove(s)}),2e3))}),150))},x=function(e){var t,a;switch(e.keyCode){case c:var n=N.indexOf(e.target)+1;a=N[n]||N[0];break;case l:var r=N.indexOf(e.target)-1;a=N[r]||N[N.length-1]}null==(t=a)||t.focus()};return n.createElement("div",{className:"tabs-container"},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":a},m)},u.map((function(e){var t=e.value,a=e.label;return n.createElement("li",{role:"tab",tabIndex:k===t?0:-1,"aria-selected":k===t,className:(0,i.Z)("tabs__item",o,{"tabs__item--active":k===t}),key:t,ref:function(e){return N.push(e)},onKeyDown:x,onFocus:S,onClick:S},a)}))),t?(0,n.cloneElement)(b.filter((function(e){return e.props.value===k}))[0],{className:"margin-vert--md"}):n.createElement("div",{className:"margin-vert--md"},b.map((function(e,t){return(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==k})}))))}},9443:function(e,t,a){"use strict";var n=(0,a(7294).createContext)(void 0);t.Z=n},944:function(e,t,a){"use strict";var n=a(7294),r=a(9443);t.Z=function(){var e=(0,n.useContext)(r.Z);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},5171:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return l},metadata:function(){return c},toc:function(){return d},default:function(){return p}});var n=a(2122),r=a(9756),i=(a(7294),a(3905)),o=a(1395),s=a(8215),l={id:"getting-started",title:"Quick Start",hide_title:!1,hide_table_of_contents:!1,sidebar_label:"Quick Start",description:"SAP Cloud SDK is the simplest and fastest way to extend SAP services and applications in the cloud.",keywords:["sap","cloud","sdk","cloud native","cloud sdk","sap cloud sdk"],image:null},c={unversionedId:"overview/getting-started",id:"overview/getting-started",isDocsHomePage:!1,title:"Quick Start",description:"SAP Cloud SDK is the simplest and fastest way to extend SAP services and applications in the cloud.",source:"@site/docs/overview/getting-started.mdx",sourceDirName:"overview",slug:"/overview/getting-started",permalink:"/cloud-sdk/docs/overview/getting-started",editUrl:"https://github.com/SAP/cloud-sdk/edit/main/docs/overview/getting-started.mdx",version:"current",lastUpdatedBy:"Marika Marszalkowski",lastUpdatedAt:1622467939,formattedLastUpdatedAt:"5/31/2021",sidebar_label:"Quick Start",frontMatter:{id:"getting-started",title:"Quick Start",hide_title:!1,hide_table_of_contents:!1,sidebar_label:"Quick Start",description:"SAP Cloud SDK is the simplest and fastest way to extend SAP services and applications in the cloud.",keywords:["sap","cloud","sdk","cloud native","cloud sdk","sap cloud sdk"],image:null},sidebar:"someSidebar",previous:{title:"Feature Matrix",permalink:"/cloud-sdk/docs/overview/cloud-sdk-feature-matrix"},next:{title:"Benefits",permalink:"/cloud-sdk/docs/overview/benefits"}},d=[{value:"Create Your First App",id:"create-your-first-app",children:[]},{value:"Hello, World!",id:"hello-world",children:[{value:"Getting Started - JavaScript",id:"getting-started---javascript",children:[]},{value:"Getting Started - Java",id:"getting-started---java",children:[]},{value:"Mock and Test Servers for OData and SAP S/4HANA",id:"mock-and-test-servers-for-odata-and-sap-s4hana",children:[]}]}],u={toc:d};function p(e){var t=e.components,a=(0,r.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"create-your-first-app"},"Create Your First App"),(0,i.kt)("p",null,"You can choose between ",(0,i.kt)("inlineCode",{parentName:"p"},"JavaScript")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"Java")," when developing with the SAP Cloud SDK.\nCheck these two examples to initialize an application for your favorite development environment."),(0,i.kt)(o.Z,{defaultValue:"js",values:[{label:"JavaScript",value:"js"},{label:"Java",value:"java"}],mdxType:"Tabs"},(0,i.kt)(s.Z,{value:"js",mdxType:"TabItem"},(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Prerequisites")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Make sure you have the latest stable version of ",(0,i.kt)("a",{parentName:"p",href:"https://nodejs.org/en/download/"},"Node.js")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"npm")," installed.\nThis example assumes you're running macOS or Linux.\nCheck out our detailed ",(0,i.kt)("a",{parentName:"p",href:"/cloud-sdk/docs/js/getting-started"},"getting started guide")," for more information."))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"$ npm install -g @sap-cloud-sdk/cli\n\n$ sap-cloud-sdk init my-sdk-project\n\n+---------------------------------------------------------------+\n| \u2705 Init finished successfully.                                |\n|                                                               |\n| \ud83d\ude80 Next steps:                                                |\n| - Run the application locally (`npm run start:dev`)           |\n| - Deploy your application (`npm run deploy`)                  |\n|                                                               |\n| \ud83d\udd28 Consider setting up Jenkins to continuously build your app |\n| Use `sap-cloud-sdk add-cx-server` to create the setup script  |\n+---------------------------------------------------------------+\n"))),(0,i.kt)(s.Z,{value:"java",mdxType:"TabItem"},(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Prerequisites")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Make sure your have ",(0,i.kt)("a",{parentName:"p",href:"https://adoptopenjdk.net/"},"Java 8")," and ",(0,i.kt)("a",{parentName:"p",href:"https://maven.apache.org/install.html"},"maven")," installed.\nThis example assumes you're running macOS or Linux.\nCheck our detailed ",(0,i.kt)("a",{parentName:"p",href:"/cloud-sdk/docs/java/getting-started"},"getting started")," guide for more information."))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'$ mvn archetype:generate "-DarchetypeGroupId=com.sap.cloud.sdk.archetypes"\\\n"-DarchetypeArtifactId=scp-cf-tomee" "-DarchetypeVersion=RELEASE"\n')))),(0,i.kt)("h2",{id:"hello-world"},"Hello, World!"),(0,i.kt)("p",null,"This example is not a classical ",(0,i.kt)("inlineCode",{parentName:"p"},"Hello World"),".\nThere is much more to it than just bootstrapping a starter application.\nThe SAP Cloud SDK is a complex and flexible library addressing a vast range of use-cases.\nEach of them would require a ",(0,i.kt)("inlineCode",{parentName:"p"},"Hello World")," of its own, and we have them!"),(0,i.kt)("p",null,"To continue discovering the SAP Cloud SDK for your favorite programming language check the respective getting started guides and comprehensive tutorials for multiple use cases."),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"There is no full feature parity between JavaScript and Java libraries.\nPlease, review the respective documentation sections to find out more."))),(0,i.kt)("h3",{id:"getting-started---javascript"},"Getting Started - JavaScript"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"../js/getting-started"},"A comprehensive getting started guide for JavaScript developers")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://developers.sap.com/tutorial-navigator.html?tag=products:technology-platform/sap-cloud-sdk/sap-cloud-sdk&tag=topic:javascript"},"Tutorials covering SAP Cloud SDK for JavaScript on the SAP Developers portal"))),(0,i.kt)("h3",{id:"getting-started---java"},"Getting Started - Java"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"../java/getting-started"},"A comprehensive getting started guide for Java developers")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://developers.sap.com/tutorial-navigator.html?tag=products:technology-platform/sap-cloud-sdk/sap-cloud-sdk&tag=topic:java"},"Tutorials covering SAP Cloud SDK for Java on the SAP Developers portal"))),(0,i.kt)("h3",{id:"mock-and-test-servers-for-odata-and-sap-s4hana"},"Mock and Test Servers for OData and SAP S/4HANA"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"We created a ",(0,i.kt)("a",{parentName:"li",href:"https://github.wdf.sap.corp/MA/book-bupa-mock-odata"},"service")," that mocks SAP S/4HANA Business Partner service. You can host it on your own machine to practice with the SAP Cloud SDK."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://services.odata.org/V4/TripPinServiceRW"},"TripPin reference service")," used in official OData v4 documentation to provide ",(0,i.kt)("a",{parentName:"li",href:"https://www.odata.org/getting-started/basic-tutorial/"},"tutorials and learning materials"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://services.odata.org/V4/OData/"},"Northwind reference service")," has a complex data model allowing to try out advanced OData v4 features with the SAP Cloud SDK.")))}p.isMDXComponent=!0},6010:function(e,t,a){"use strict";function n(e){var t,a,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=n(e[t]))&&(r&&(r+=" "),r+=a);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function r(){for(var e,t,a=0,r="";a<arguments.length;)(e=arguments[a++])&&(t=n(e))&&(r&&(r+=" "),r+=t);return r}a.d(t,{Z:function(){return r}})}}]);