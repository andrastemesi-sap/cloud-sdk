(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{129:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return u}));var o=n(3),a=n(7),r=(n(0),n(214)),l={title:"What is the SAP Cloud SDK CLI?",hide_title:!1,hide_table_of_contents:!1,sidebar_label:"Overview",description:"This article gives an overview of the functions of the SAP Cloud SDK CLI and how to install it.",keywords:["sap","cloud","sdk","cli","command","line","JavaScript","TypeScript"]},i={unversionedId:"js/features/cli/overview",id:"js/features/cli/overview",isDocsHomePage:!1,title:"What is the SAP Cloud SDK CLI?",description:"This article gives an overview of the functions of the SAP Cloud SDK CLI and how to install it.",source:"@site/docs/js/features/cli/overview.mdx",slug:"/js/features/cli/overview",permalink:"/cloud-sdk/docs/js/features/cli/overview",editUrl:"https://github.com/SAP/cloud-sdk/edit/main/docs/js/features/cli/overview.mdx",version:"current",lastUpdatedBy:"Junjie Tang",lastUpdatedAt:1616419499,formattedLastUpdatedAt:"3/22/2021",sidebar_label:"Overview",sidebar:"someSidebar",previous:{title:"Executing a Request Using a Generated OpenAPI Client",permalink:"/cloud-sdk/docs/js/features/openapi/execute-openapi-request"},next:{title:"Add the SAP Cloud SDK to Your Project",permalink:"/cloud-sdk/docs/js/features/cli/init"}},c=[{value:"Installing the SAP Cloud SDK CLI",id:"installing-the-sap-cloud-sdk-cli",children:[]},{value:"Getting Help",id:"getting-help",children:[]},{value:"Autocomplete for Your Shell",id:"autocomplete-for-your-shell",children:[]}],s={toc:c};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(o.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"The SAP Cloud SDK CLI is a command-line interface (CLI) to simplify common tasks you may encounter when working with the SAP Cloud SDK:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"/cloud-sdk/docs/js/features/cli/init"},"Adding the SAP Cloud SDK to an existing project")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"/cloud-sdk/docs/js/features/cli/init"},"Creating a new project using the SAP Cloud SDK and other recommended dependencies")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"/cloud-sdk/docs/js/features/cli/generator"},"Generate an OData client")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"/cloud-sdk/docs/js/features/cli/package"},"Prepare your project for deployment to SAP Business Technology Platform"))),Object(r.b)("h2",{id:"installing-the-sap-cloud-sdk-cli"},"Installing the SAP Cloud SDK CLI"),Object(r.b)("p",null,"The SAP Cloud SDK CLI can be installed with npm.\nWe recommend installing the SAP Cloud SDK CLI globally."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"$ npm install -g @sap-cloud-sdk/cli\n")),Object(r.b)("p",null,"Once the installation is complete, you can test if you have the newest version."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"$ sap-cloud-sdk -v\n\n@sap-cloud-sdk/cli/0.1.12\n")),Object(r.b)("p",null,"If you encounter any issue or want to look at the source code, look at ",Object(r.b)("a",{parentName:"p",href:"https://github.com/SAP/cloud-sdk-cli"},"our GitHub page"),"."),Object(r.b)("div",{className:"admonition admonition-info alert alert--info"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Caret Dependencies below 1.0.0")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},"The SAP Cloud SDK CLI is currently below version 1.\nDue to the behavior of global dependencies in npm, you need to run ",Object(r.b)("inlineCode",{parentName:"p"},"npm install -g @sap-cloud-sdk/cli@latest")," to update to the latest version."))),Object(r.b)("h2",{id:"getting-help"},"Getting Help"),Object(r.b)("p",null,"You can display the list of all commands or help for a specific command directly with the SAP Cloud SDK CLI."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"# Show the list of all commands\n$ sap-cloud-sdk help\n# Show help for the init command\n$ sap-cloud-sdk help init\n")),Object(r.b)("h2",{id:"autocomplete-for-your-shell"},"Autocomplete for Your Shell"),Object(r.b)("p",null,"The SAP Cloud SDK CLI can provide autocomplete information to your shell."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"# Print how to add autocomplete for your shell\n$ sap-cloud-sdk autocomplete\n")))}u.isMDXComponent=!0},214:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var o=n(0),a=n.n(o);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),u=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=u(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=u(n),b=o,m=d["".concat(l,".").concat(b)]||d[b]||p[b]||r;return n?a.a.createElement(m,i(i({ref:t},s),{},{components:n})):a.a.createElement(m,i({ref:t},s))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,l=new Array(r);l[0]=b;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var s=2;s<r;s++)l[s]=n[s];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);