(self.webpackChunksap_cloud_sdk_documentation=self.webpackChunksap_cloud_sdk_documentation||[]).push([[6104],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,p=r(e,["components","mdxType","originalType","parentName"]),u=d(n),m=i,h=u["".concat(s,".").concat(m)]||u[m]||c[m]||o;return n?a.createElement(h,l(l({ref:t},p),{},{components:n})):a.createElement(h,l({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,l=new Array(o);l[0]=u;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r.mdxType="string"==typeof e?e:i,l[1]=r;for(var d=2;d<o;d++)l[d]=n[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},3689:function(e,t,n){"use strict";var a=n(7294);t.Z=function(e){var t=e.align;return a.createElement("span",{className:t?"col text--right":""},a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/SAP/cloud-sdk"},a.createElement("img",{src:"https://github.com/SAP/cloud-sdk-js/workflows/build/badge.svg",alt:"build",className:"max-width:100%;"})))}},5767:function(e,t,n){"use strict";var a=n(7294);t.Z=function(e){var t=e.align;return a.createElement("span",{className:t?"col text--right":""},a.createElement("a",{href:"https://opensource.org/licenses/Apache-2.0",rel:"nofollow"},a.createElement("img",{src:"https://img.shields.io/badge/License-Apache%202.0-yellowgreen.svg",alt:"License","data-canonical-src":"https://img.shields.io/badge/License-Apache%202.0-yellowgreen.svg",className:"max-width:100%;"})))}},2887:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},metadata:function(){return d},toc:function(){return p},default:function(){return u}});var a=n(2122),i=n(9756),o=(n(7294),n(3905)),l=n(3689),r=n(5767),s={id:"getting-started",title:"Getting Started",hide_title:!1,hide_table_of_contents:!1,sidebar_label:"Getting Started",description:"Get up to speed with SAP Cloud SDK for JavaScript in no time",keywords:["sap","cloud","sdk","cloud native","cloud sdk","sap cloud sdk"],image:null},d={unversionedId:"js/getting-started",id:"js/getting-started",isDocsHomePage:!1,title:"Getting Started",description:"Get up to speed with SAP Cloud SDK for JavaScript in no time",source:"@site/docs/js/getting-started.mdx",sourceDirName:"js",slug:"/js/getting-started",permalink:"/cloud-sdk/docs/js/getting-started",editUrl:"https://github.com/SAP/cloud-sdk/edit/main/docs/js/getting-started.mdx",version:"current",lastUpdatedBy:"Johannes Schneider",lastUpdatedAt:1621931087,formattedLastUpdatedAt:"5/25/2021",sidebar_label:"Getting Started",frontMatter:{id:"getting-started",title:"Getting Started",hide_title:!1,hide_table_of_contents:!1,sidebar_label:"Getting Started",description:"Get up to speed with SAP Cloud SDK for JavaScript in no time",keywords:["sap","cloud","sdk","cloud native","cloud sdk","sap cloud sdk"],image:null},sidebar:"someSidebar",previous:{title:"JavaScript & Typescript Overview",permalink:"/cloud-sdk/docs/js/overview-cloud-sdk-for-javascript"},next:{title:"OData",permalink:"/cloud-sdk/docs/js/features/odata/overview"}},p=[{value:"Introduction",id:"introduction",children:[{value:"What Is the SAP Cloud SDK",id:"what-is-the-sap-cloud-sdk",children:[]},{value:"What Is the Command-Line Interface?",id:"what-is-the-command-line-interface",children:[]}]},{value:"Installation",id:"installation",children:[{value:"Update",id:"update",children:[]},{value:"Usage",id:"usage",children:[]},{value:"Create a New Project",id:"create-a-new-project",children:[]}]},{value:"Project Files and Folders",id:"project-files-and-folders",children:[]},{value:"Run the Project",id:"run-the-project",children:[]},{value:"Deploy the Project on SAP BTP, Cloud Foundry Environment",id:"deploy-the-project-on-sap-btp-cloud-foundry-environment",children:[{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Login",id:"login",children:[]},{value:"Before Deploying",id:"before-deploying",children:[]},{value:"Deployment",id:"deployment",children:[]}]},{value:"Additional Features",id:"additional-features",children:[{value:"Configure Destination",id:"configure-destination",children:[]},{value:"Bind Destination Service",id:"bind-destination-service",children:[]}]}],c={toc:p};function u(e){var t=e.components,n=(0,i.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(l.Z,{mdxType:"BuildBadge"})," ",(0,o.kt)(r.Z,{mdxType:"LicenseBadge"}),(0,o.kt)("h2",{id:"introduction"},"Introduction"),(0,o.kt)("h3",{id:"what-is-the-sap-cloud-sdk"},"What Is the SAP Cloud SDK"),(0,o.kt)("p",null,"The SAP Cloud SDK supports you end-to-end when developing applications that communicate with SAP solutions and services such as SAP S/4HANA Cloud, SAP SuccessFactors, and many others."),(0,o.kt)("p",null,"Using the SAP Cloud SDK, you can reduce your effort when developing an application on SAP Business Technology Platform (SAP BTP) by building on best practices delivered by the SAP Cloud SDK.\nThe SAP Cloud SDK can provide JavaScript libraries and project templates."),(0,o.kt)("p",null,"To create such an application we provide a command-line interface, that allows you to scaffold or enhance an application with the missing parts to use the SAP Cloud SDK."),(0,o.kt)("h3",{id:"what-is-the-command-line-interface"},"What Is the Command-Line Interface?"),(0,o.kt)("p",null,"The command-line interface (CLI) can initialize a Nest-based project or (the more common case) add everything you need to develop for SAP Business Technology Platform to an existing project no matter what backend framework you use.\nIf there are any incompatibilities, please let us know in the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/SAP/cloud-sdk-cli/issues/new/choose"},"issues"),"!"),(0,o.kt)("h2",{id:"installation"},"Installation"),(0,o.kt)("p",null,"To install the CLI globally, run:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ npm install -g @sap-cloud-sdk/cli\n")),(0,o.kt)("h3",{id:"update"},"Update"),(0,o.kt)("p",null,"As long as the CLI version is less than ",(0,o.kt)("inlineCode",{parentName:"p"},"1.0.0"),", run the following to update to the latest version.\nPlease keep in mind, that these updates can have breaking changes as per the ",(0,o.kt)("a",{parentName:"p",href:"https://semver.org/#spec-item-4"},"semver spec"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ npm install -g @sap-cloud-sdk/cli@latest\n")),(0,o.kt)("h3",{id:"usage"},"Usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"sap-cloud-sdk [COMMAND]\n")),(0,o.kt)("p",null,"To get the CLI's version, run:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"sap-cloud-sdk (-v|--version|version)\n")),(0,o.kt)("p",null,"To get a list of all commands, run:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ sap-cloud-sdk --help\n")),(0,o.kt)("h3",{id:"create-a-new-project"},"Create a New Project"),(0,o.kt)("p",null,"To create a new project run the CLI's ",(0,o.kt)("inlineCode",{parentName:"p"},"init")," command in the project folder."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ sap-cloud-sdk init\n")),(0,o.kt)("p",null,"It will guide you through the initialization, create the necessary files, and add necessary dependencies.\nIf you run it in an empty folder, it will ask if you want to initialize a project using ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/nestjs/nest-cli"},(0,o.kt)("inlineCode",{parentName:"a"},"@nest/cli")),"."),(0,o.kt)("p",null,"The CLI will already install all the necessary dependencies for the project, so this might take a minute.\nIf everything worked correctly, you should see the following output:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"+---------------------------------------------------------------+\n| \u2705 Init finished successfully.                                |\n|                                                               |\n| \ud83d\ude80 Next steps:                                                |\n| - Run the application locally (`npm run start:dev`)           |\n| - Deploy your application (`npm run deploy`)                  |\n|                                                               |\n| \ud83d\udd28 Consider setting up Jenkins to continuously build your app |\n| Use `sap-cloud-sdk add-cx-server` to create the setup script  |\n+---------------------------------------------------------------+\n")),(0,o.kt)("h2",{id:"project-files-and-folders"},"Project Files and Folders"),(0,o.kt)("p",null,"The project contains the following files and folders, among others, to get you started with the SAP Cloud SDK for JavaScript:"),(0,o.kt)("h4",{id:"npm--project"},"npm / Project"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"package.json")),": Specifies dependencies, metadata, and user-defined scripts.\nThe application comes with some predefined scripts and dependencies."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},".npmrc")),": The ",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"npm"))," configuration file.\nThe SAP Cloud SDK consists of some generic libraries, that are available as Open Source Software and service libraries for allowlisted SAP S/4HANA APIs, referred to as the Virtual Data Model (VDM).\nIn the scaffolding, we specify the registry for the ",(0,o.kt)("inlineCode",{parentName:"li"},"@sap")," scope, where the VDM libraries are published.")),(0,o.kt)("h4",{id:"typescript"},"TypeScript"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"tsconfig.json")),": Configuration file for ",(0,o.kt)("inlineCode",{parentName:"li"},"TypeScript"),". This is not needed in the plain ",(0,o.kt)("inlineCode",{parentName:"li"},"JavaScript")," version."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"tslint.json")),": Configuration file for ",(0,o.kt)("inlineCode",{parentName:"li"},"tslint"),".")),(0,o.kt)("h4",{id:"continuous-delivery"},"Continuous Delivery"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"Jenkinsfile")),": Jenkins pipeline definition file for quality assurance.\nIt uses the ",(0,o.kt)("a",{parentName:"li",href:"https://sap.github.io/jenkins-library"},'project "Piper" General Purpose Pipeline'),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"pipeline_config.yml")),": Pipeline configuration file for the Jenkins pipeline.")),(0,o.kt)("h4",{id:"cloud-foundry"},"Cloud Foundry"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"manifest.yml")),": The deployment descriptor file for ",(0,o.kt)("inlineCode",{parentName:"li"},"SAP BTP, Cloud Foundry environment"),".")),(0,o.kt)("h4",{id:"local-development"},"Local Development"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"src/")),": Source code for the initial application.")),(0,o.kt)("h4",{id:"sap-cloud-sdk-specific"},"SAP Cloud SDK Specific"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"systems.json"),"+",(0,o.kt)("inlineCode",{parentName:"strong"},"credentials.json")),": Allows you to maintain destinations for testing purposes."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"sap-cloud-sdk-analytics.json")),": Only if you have agreed to usage analytics during the initialization of your project.\nYou can find more information about anonymous usage analytics ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/SAP/cloud-sdk-cli/blob/main/usage-analytics.md"},"in the CLI's repository"),".")),(0,o.kt)("h2",{id:"run-the-project"},"Run the Project"),(0,o.kt)("p",null,"To run the application locally, simply run the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"npm run start:dev\n")),(0,o.kt)("p",null,"This will start a local server in watch mode so that subsequent changes will automatically trigger a restart of the server.\nGo to ",(0,o.kt)("inlineCode",{parentName:"p"},"http://localhost:3000")," and you should get a ",(0,o.kt)("inlineCode",{parentName:"p"},"Hello, World!")," in response."),(0,o.kt)("h2",{id:"deploy-the-project-on-sap-btp-cloud-foundry-environment"},"Deploy the Project on SAP BTP, Cloud Foundry Environment"),(0,o.kt)("h3",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("p",null,"The Cloud Foundry CLI comes in handy when you want to deploy your application to the SAP Business Technology Platform.\nYou can find installation instructions for all common platforms in the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.cloudfoundry.org/cf-cli/install-go-cli.html"},(0,o.kt)("inlineCode",{parentName:"a"},"Cloud Foundry documentation")),".\nWe recommend using a package manager for that.\nIf you are using ",(0,o.kt)("inlineCode",{parentName:"p"},"chocolatey")," on Windows, please find the instructions ",(0,o.kt)("a",{parentName:"p",href:"https://chocolatey.org/packages/cloudfoundry-cli"},"here"),"."),(0,o.kt)("h3",{id:"login"},"Login"),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"If you don't have an ",(0,o.kt)("a",{parentName:"p",href:"https://account.hana.ondemand.com/"},"SAP Business Technology Platform")," account you need to create one."))),(0,o.kt)("p",null,"To deploy our application, we first need to login to Cloud Foundry in the SAP BTP using the ",(0,o.kt)("inlineCode",{parentName:"p"},"cf")," CLI.\nFirst, we need to set an ",(0,o.kt)("inlineCode",{parentName:"p"},"API endpoint"),".\nThe exact URL of this API endpoint depends on the region your subaccount is in.\nOpen the ",(0,o.kt)("a",{parentName:"p",href:"https://account.hana.ondemand.com/"},"SAP BTP cockpit")," and navigate to the subaccount you are planning to deploy your application to.\nClick on \u201cOverview\u201d on the left and you can see the URL of the API endpoint."),(0,o.kt)("p",null,"Copy the URL and paste it into the following command in your command-line:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"cf api https://api.cf.<region>.hana.ondemand.com\ncf login\n")),(0,o.kt)("h3",{id:"before-deploying"},"Before Deploying"),(0,o.kt)("p",null,"Build your app if necessary."),(0,o.kt)("h3",{id:"deployment"},"Deployment"),(0,o.kt)("p",null,"To deploy your app, run:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-Shell"},"npm run deploy\n")),(0,o.kt)("p",null,"This command will use your local sources for transpiling, packaging and deployment, but will omit packaging your local ",(0,o.kt)("inlineCode",{parentName:"p"},"node_modules")," as those can be system dependent.\nDependencies will instead be installed automatically when deploying to Cloud Foundry."),(0,o.kt)("p",null,"The Cloud Foundry CLI will automatically pick up the ",(0,o.kt)("inlineCode",{parentName:"p"},"manifest.yml")," of the project when deploying your application.\nThe file should look like this (where ",(0,o.kt)("inlineCode",{parentName:"p"},"<YOUR-APPLICATION-NAME>")," is replaced by the name you specified when initializing the project):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-YAML"},"applications:\n  - name: <YOUR-APPLICATION-NAME>\n    path: deployment/\n    buildpacks:\n      - nodejs_buildpack\n    memory: 256M\n    command: npm run start:prod\n    random-route: true\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The specified ",(0,o.kt)("inlineCode",{parentName:"li"},"path")," instructs Cloud Foundry to upload all the files from the ",(0,o.kt)("inlineCode",{parentName:"li"},"deployment/")," folder."),(0,o.kt)("li",{parentName:"ul"},"The command specified under the ",(0,o.kt)("inlineCode",{parentName:"li"},"command")," attribute tells the ",(0,o.kt)("inlineCode",{parentName:"li"},"buildpack")," what command to issue to start the application.")),(0,o.kt)("p",null,"When everything works as expected, you should get output that looks something like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"Waiting for app to start...\n\nname:              <YOUR-APPLICATION-NAME>\nrequested state:   started\nroutes:            <YOUR-APPLICATION-NAME>.cfapps.eu10.hana.ondemand.com\nlast uploaded:     Thu 21 Mar 14:05:32 CET 2019\nstack:             cflinuxfs3\nbuildpacks:        nodejs\n\ntype:            web\ninstances:       1/1\nmemory usage:    256M\nstart command:   node index.js\n     state     since                  cpu    memory        disk           details\n#0   running   2019-03-21T13:05:47Z   0.0%   16M of 256M   126.8M of 1G\n")),(0,o.kt)("p",null,"The application will be running at the ",(0,o.kt)("inlineCode",{parentName:"p"},"routes")," URL, you can also make sure that the application works correctly by running the start command, this command can be different than the one shown above."),(0,o.kt)("p",null,"Should the application not work for whatever reason, you can call the following command to access the logs:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-Shell"},"cf logs <YOUR-APPLICATION-NAME> --recent\n")),(0,o.kt)("h2",{id:"additional-features"},"Additional Features"),(0,o.kt)("p",null,"For productive use, your app should be linked to one or more databases and implement user authentication and authorization."),(0,o.kt)("h3",{id:"configure-destination"},"Configure Destination"),(0,o.kt)("p",null,"Login the ",(0,o.kt)("a",{parentName:"p",href:"https://account.hana.ondemand.com"},"Cloud Cockpit"),", navigate to your respective subaccount (in case of a trial account it should be called ",(0,o.kt)("inlineCode",{parentName:"p"},"trial"),").\nIn the menu bar on the left, there should be a section ",(0,o.kt)("inlineCode",{parentName:"p"},"Connectivity")," with an entry called ",(0,o.kt)("inlineCode",{parentName:"p"},"Destinations"),".\nClick ",(0,o.kt)("inlineCode",{parentName:"p"},"Destinations"),". On the page that opens, click ",(0,o.kt)("inlineCode",{parentName:"p"},"New Destination")," and fill in the details below."),(0,o.kt)("p",null,"For ",(0,o.kt)("inlineCode",{parentName:"p"},"Name"),", choose a name that describes your system.\nFor example, we will go with ",(0,o.kt)("inlineCode",{parentName:"p"},"S4_SYSTEM"),"."),(0,o.kt)("p",null,"If you use the Business Partner mock server, enter for ",(0,o.kt)("inlineCode",{parentName:"p"},"URL")," the URL that you have saved from the ",(0,o.kt)("a",{parentName:"p",href:"#deployment"},"previous step")," and use ",(0,o.kt)("inlineCode",{parentName:"p"},"NoAuthentication")," for ",(0,o.kt)("inlineCode",{parentName:"p"},"Authentication"),".\nIf you use an SAP S/4HANA Cloud system, enter the systems URL in the ",(0,o.kt)("inlineCode",{parentName:"p"},"URL")," field and choose ",(0,o.kt)("inlineCode",{parentName:"p"},"BasicAuthentication")," as the authentication type.\nThis will make the fields ",(0,o.kt)("inlineCode",{parentName:"p"},"User")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"Password")," appear.\nEnter here the credentials of a technical user for your SAP S/4HANA Cloud system."),(0,o.kt)("h3",{id:"bind-destination-service"},"Bind Destination Service"),(0,o.kt)("p",null,"To allow the application to use the destination you have just configured, you will need to bind an instance of the destination service and an instance of the ",(0,o.kt)("inlineCode",{parentName:"p"},"XSUAA service")," to your application."),(0,o.kt)("p",null,"To create an instance of the destination service, execute the following command in your terminal:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"cf create-service destination lite my-destination\n")),(0,o.kt)("p",null,"This tells Cloud Foundry to create an instance of the destination service with service plan ",(0,o.kt)("inlineCode",{parentName:"p"},"lite")," and make it accessible under the name ",(0,o.kt)("inlineCode",{parentName:"p"},"my-destination")," on the SAP BTP.\nWe can now use the name to bind this service to our application.\nTo do this, open your ",(0,o.kt)("inlineCode",{parentName:"p"},"manifest.yml")," and add a section called ",(0,o.kt)("inlineCode",{parentName:"p"},"services"),", under which you can then add the name of the just created service."),(0,o.kt)("p",null,"The resulting ",(0,o.kt)("inlineCode",{parentName:"p"},"manifest.yml")," should look like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-YAML"},"applications:\n  - name: <YOUR-APPLICATION-NAME>\n    path: deployment/\n    buildpacks:\n      - nodejs_buildpack\n    memory: 256M\n    command: node index.js\n    random-route: true\n    services:\n      - my-destination\n")),(0,o.kt)("h4",{id:"xsuaa-service"},"XSUAA Service"),(0,o.kt)("p",null,"Secondly, we need an instance of the ",(0,o.kt)("inlineCode",{parentName:"p"},"XSUAA service"),".\nThe ",(0,o.kt)("inlineCode",{parentName:"p"},"XSUAA service")," is responsible for issuing access tokens that are necessary to talk to other services, like the destination service.\nFor this service, we will need a bit of extra configuration in the form of a configuration file.\nCreate a file called ",(0,o.kt)("inlineCode",{parentName:"p"},"xs-security.json")," with the following content:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-JSON"},'{\n  "xsappname": "<YOUR-APPLICATION-NAME>",\n  "tenant-mode": "shared"\n}\n')),(0,o.kt)("p",null,"The value for ",(0,o.kt)("inlineCode",{parentName:"p"},"xsappname")," again has to be unique across the whole of SAP BTP, so make sure to choose a unique name or prefix."),(0,o.kt)("p",null,"Now, execute the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"cf create-service xsuaa application my-xsuaa -c xs-security.json\n")),(0,o.kt)("p",null,"And, as before, add the newly created services to the services section of your ",(0,o.kt)("inlineCode",{parentName:"p"},"manifest.yml"),"."),(0,o.kt)("p",null,"The final ",(0,o.kt)("inlineCode",{parentName:"p"},"manifest.yml")," should look like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-YAML"},"applications:\n  - name: <YOUR-APPLICATION-NAME>\n    path: deployment/\n    buildpacks:\n      - nodejs_buildpack\n    memory: 256M\n    command: node index.js\n    random-route: true\n    services:\n      - my-destination\n      - my-xsuaa\n")),(0,o.kt)("p",null,"Finally, we can replace the parameter of ",(0,o.kt)("inlineCode",{parentName:"p"},"execute")," with an object whose key ",(0,o.kt)("inlineCode",{parentName:"p"},"destinationName")," refers to the name of the destination we defined earlier.\nIf you chose a different name than ",(0,o.kt)("inlineCode",{parentName:"p"},"S4_SYSTEM"),", make sure to use it here accordingly."),(0,o.kt)("p",null,"The new function now looks like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},".execute({\n  destinationName: 'Server'\n});\n")))}u.isMDXComponent=!0}}]);