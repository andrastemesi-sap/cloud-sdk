(window.webpackJsonp=window.webpackJsonp||[]).push([[93],{172:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return i})),t.d(n,"toc",(function(){return l})),t.d(n,"default",(function(){return d}));var o=t(3),a=t(7),r=(t(0),t(221)),c={id:"cf-cli",title:"Cloud Foundry",hide_title:!1,hide_table_of_contents:!1,sidebar_label:"Cloud Foundry CLI",description:"Configure you Cloud Foundry CLI and bind it to SAP Business Technology Platform",keywords:["sap","cloud","sdk","cloud native","cloud sdk","sap cloud sdk"],image:null},i={unversionedId:"java/guides/cf-cli",id:"java/guides/cf-cli",isDocsHomePage:!1,title:"Cloud Foundry",description:"Configure you Cloud Foundry CLI and bind it to SAP Business Technology Platform",source:"@site/docs/java/guides/cf-cli.mdx",slug:"/java/guides/cf-cli",permalink:"/cloud-sdk/docs/java/guides/cf-cli",editUrl:"https://github.com/SAP/cloud-sdk/edit/main/docs/java/guides/cf-cli.mdx",version:"current",lastUpdatedBy:"Matthias Kuhr",lastUpdatedAt:1619790398,formattedLastUpdatedAt:"4/30/2021",sidebar_label:"Cloud Foundry CLI",sidebar:"someSidebar",previous:{title:"Caching Capabilities",permalink:"/cloud-sdk/docs/java/features/resilience/caching"},next:{title:"Deploy to Cloud Foundry",permalink:"/cloud-sdk/docs/java/guides/cf-deploy"}},l=[{value:"Cloud Foundry Command-Line Interface",id:"cloud-foundry-command-line-interface",children:[]},{value:"Bind Your Command-Line Interface to an API Endpoint",id:"bind-your-command-line-interface-to-an-api-endpoint",children:[]},{value:"SAP Business Technology Platform",id:"sap-business-technology-platform",children:[]}],u={toc:l};function d(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(o.a)({},u,t,{components:n,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"cloud-foundry-command-line-interface"},"Cloud Foundry Command-Line Interface"),Object(r.b)("p",null,"To deploy your app developed with SAP Cloud SDK to ",Object(r.b)("a",{parentName:"p",href:"https://www.sap.com/products/cloud-platform.html"},"SAP Business Technology Platform")," you'll need Cloud Foundry command-line interface (CLI).\nYou can download latest release of DEB package ",Object(r.b)("a",{parentName:"p",href:"https://github.com/cloudfoundry/cli/releases"},"from the official CF GitHub repository")," or follow ",Object(r.b)("a",{parentName:"p",href:"https://github.com/cloudfoundry/cli#installing-using-a-package-manager"},"instructions")," to install it with you package manager: ",Object(r.b)("inlineCode",{parentName:"p"},"apt-get"),", ",Object(r.b)("inlineCode",{parentName:"p"},"yum")," and ",Object(r.b)("inlineCode",{parentName:"p"},"homebrew")," are supported."),Object(r.b)("p",null,"After installing the CLI you might need to reload you shell before it becomes available.\nTo check if it works run:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"cf\n")),Object(r.b)("h2",{id:"bind-your-command-line-interface-to-an-api-endpoint"},"Bind Your Command-Line Interface to an API Endpoint"),Object(r.b)("p",null,"Let's associate your Cloud Foundry CLI to your SAP account by providing an API endpoint and logging in with your account."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Select endpoint depending on your region:")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Europe ",Object(r.b)("a",{parentName:"li",href:"https://api.cf.eu10.hana.ondemand.com"},"https://api.cf.eu10.hana.ondemand.com")),Object(r.b)("li",{parentName:"ul"},"US East: ",Object(r.b)("a",{parentName:"li",href:"https://api.cf.us10.hana.ondemand.com"},"https://api.cf.us10.hana.ondemand.com")),Object(r.b)("li",{parentName:"ul"},"US CENTRAL: ",Object(r.b)("a",{parentName:"li",href:"https://api.cf.us20.hana.ondemand.com"},"https://api.cf.us20.hana.ondemand.com"))),Object(r.b)("p",null,"To use a snippet for Europe run:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"cf api https://api.cf.eu10.hana.ondemand.com\n")),Object(r.b)("p",null,"Provide your credentials for SAP BTP:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"cf login\n")),Object(r.b)("p",null,"For more details on the Cloud Foundry CLI and SAP BTP follow this ",Object(r.b)("a",{parentName:"p",href:"https://developers.sap.com/tutorials/cp-cf-download-cli.html"},"official tutorial"),"."),Object(r.b)("h2",{id:"sap-business-technology-platform"},"SAP Business Technology Platform"),Object(r.b)("p",null,"Find out more about the SAP Business Technology Platform, Cloud Foundry environment in the ",Object(r.b)("a",{parentName:"p",href:"https://help.sap.com/viewer/65de2977205c403bbc107264b8eccf4b/Cloud/en-US/73beb06e127f4e47b849aa95344aabe1.html"},"official documentation"),"."))}d.isMDXComponent=!0},221:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return m}));var o=t(0),a=t.n(o);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=a.a.createContext({}),d=function(e){var n=a.a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=d(e.components);return a.a.createElement(u.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},b=a.a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=d(t),b=o,m=p["".concat(c,".").concat(b)]||p[b]||s[b]||r;return t?a.a.createElement(m,i(i({ref:n},u),{},{components:t})):a.a.createElement(m,i({ref:n},u))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,c=new Array(r);c[0]=b;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var u=2;u<r;u++)c[u]=t[u];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);