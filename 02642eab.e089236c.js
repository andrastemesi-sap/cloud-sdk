(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{102:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return d})),n.d(t,"metadata",(function(){return p})),n.d(t,"toc",(function(){return b})),n.d(t,"default",(function(){return m}));var a=n(3),i=n(7),o=n(0),l=n.n(o),r=n(204),c=n(245),s=n(246),d={id:"getting-started",title:"Getting Started",hide_title:!1,hide_table_of_contents:!1,sidebar_label:"Getting Started",description:"Get up to speed with SAP Cloud SDK for JavaScript in no time",keywords:["sap","cloud","sdk","cloud native","cloud sdk","sap cloud sdk"],image:null},p={unversionedId:"js/getting-started",id:"js/getting-started",isDocsHomePage:!1,title:"Getting Started",description:"Get up to speed with SAP Cloud SDK for JavaScript in no time",source:"@site/docs/js/getting-started.mdx",slug:"/js/getting-started",permalink:"/cloud-sdk/docs/js/getting-started",editUrl:"https://github.com/SAP/cloud-sdk/edit/main/docs/js/getting-started.mdx",version:"current",lastUpdatedBy:"TanviiG",lastUpdatedAt:1611828935,sidebar_label:"Getting Started",sidebar:"someSidebar",previous:{title:"Overview",permalink:"/cloud-sdk/docs/js/overview-cloud-sdk-for-javascript"},next:{title:"OData",permalink:"/cloud-sdk/docs/js/features/odata/overview"}},b=[{value:"Introduction",id:"introduction",children:[{value:"What Is the SAP Cloud SDK",id:"what-is-the-sap-cloud-sdk",children:[]},{value:"What Is the Command-Line Interface?",id:"what-is-the-command-line-interface",children:[]}]},{value:"Installation",id:"installation",children:[{value:"Update",id:"update",children:[]},{value:"Usage",id:"usage",children:[]},{value:"Create a New Project",id:"create-a-new-project",children:[]}]},{value:"Project Files and Folders",id:"project-files-and-folders",children:[]},{value:"Run the Project",id:"run-the-project",children:[]},{value:"Deploy the Project on Cloud Foundry",id:"deploy-the-project-on-cloud-foundry",children:[{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Login",id:"login",children:[]},{value:"Before Deploying",id:"before-deploying",children:[]},{value:"Deployment",id:"deployment",children:[]}]},{value:"Additional Features",id:"additional-features",children:[{value:"Configure Destination",id:"configure-destination",children:[]},{value:"Bind Destination Service",id:"bind-destination-service",children:[]}]}],u={toc:b};function m(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)(l.a.Fragment,null," ",Object(r.b)(c.a,{mdxType:"BuildBadge"})," "," ",Object(r.b)(s.a,{mdxType:"LicenseBadge"})," "),Object(r.b)("h2",{id:"introduction"},"Introduction"),Object(r.b)("h3",{id:"what-is-the-sap-cloud-sdk"},"What Is the SAP Cloud SDK"),Object(r.b)("p",null,"The SAP Cloud SDK supports you end-to-end when developing applications that communicate with SAP solutions and services such as SAP S/4HANA Cloud, SAP SuccessFactors, and many others."),Object(r.b)("p",null,"Using the SAP Cloud SDK, you can reduce your effort when developing an application on SAP Cloud Platform by building on best practices delivered by the SAP Cloud SDK.\nThe SAP Cloud SDK can provide JavaScript libraries and project templates."),Object(r.b)("p",null,"To create such an application we provide a command-line interface, that allows you to scaffold or enhance an application with the missing parts to use the SAP Cloud SDK."),Object(r.b)("h3",{id:"what-is-the-command-line-interface"},"What Is the Command-Line Interface?"),Object(r.b)("p",null,"The command-line interface (CLI) can initialize a Nest-based project or (the more common case) add everything you need to develop for SAP Cloud Platform to an existing project no matter what backend framework you use.\nIf there are any incompatibilities, please let us know in the ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/SAP/cloud-sdk-cli/issues/new/choose"}),"issues"),"!"),Object(r.b)("h2",{id:"installation"},"Installation"),Object(r.b)("p",null,"To install the CLI globally, run:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell"}),"$ npm install -g @sap-cloud-sdk/cli\n")),Object(r.b)("h3",{id:"update"},"Update"),Object(r.b)("p",null,"As long as the CLI version is less than ",Object(r.b)("inlineCode",{parentName:"p"},"1.0.0"),", run the following to update to the latest version.\nPlease keep in mind, that these updates can have breaking changes as per the ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://semver.org/#spec-item-4"}),"semver spec"),"."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell"}),"$ npm install -g @sap-cloud-sdk/cli@latest\n")),Object(r.b)("h3",{id:"usage"},"Usage"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell"}),"sap-cloud-sdk [COMMAND]\n")),Object(r.b)("p",null,"To get the CLI's version, run:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell"}),"sap-cloud-sdk (-v|--version|version)\n")),Object(r.b)("p",null,"To get a list of all commands, run:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell"}),"$ sap-cloud-sdk --help\n")),Object(r.b)("h3",{id:"create-a-new-project"},"Create a New Project"),Object(r.b)("p",null,"To create a new project run the CLI's ",Object(r.b)("inlineCode",{parentName:"p"},"init")," command in the project folder."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell"}),"$ sap-cloud-sdk init\n")),Object(r.b)("p",null,"It will guide you through the initialization, create the necessary files, and add necessary dependencies.\nIf you run it in an empty folder, it will ask if you want to initialize a project using ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/nestjs/nest-cli"}),Object(r.b)("inlineCode",{parentName:"a"},"@nest/cli")),"."),Object(r.b)("p",null,"The CLI will already install all the necessary dependencies for the project, so this might take a minute.\nIf everything worked correctly, you should see the following output:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell"}),"+---------------------------------------------------------------+\n| \u2705 Init finished successfully.                                |\n|                                                               |\n| \ud83d\ude80 Next steps:                                                |\n| - Run the application locally (`npm run start:dev`)           |\n| - Deploy your application (`npm run deploy`)                  |\n|                                                               |\n| \ud83d\udd28 Consider setting up Jenkins to continuously build your app |\n| Use `sap-cloud-sdk add-cx-server` to create the setup script  |\n+---------------------------------------------------------------+\n")),Object(r.b)("h2",{id:"project-files-and-folders"},"Project Files and Folders"),Object(r.b)("p",null,"The project contains the following files and folders, among others, to get you started with the SAP Cloud SDK for JavaScript:"),Object(r.b)("h4",{id:"npm--project"},"npm / Project"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"strong"},"package.json")),": Specifies dependencies, metadata, and user-defined scripts.\nThe application comes with some predefined scripts and dependencies."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"strong"},".npmrc")),": The ",Object(r.b)("strong",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"strong"},"npm"))," configuration file.\nThe SAP Cloud SDK consists of some generic libraries, that are available as Open Source Software and service libraries for allowlisted SAP S/4HANA APIs, referred to as the Virtual Data Model (VDM).\nIn the scaffolding, we specify the registry for the ",Object(r.b)("inlineCode",{parentName:"li"},"@sap")," scope, where the VDM libraries are published.")),Object(r.b)("h4",{id:"typescript"},"TypeScript"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"strong"},"tsconfig.json")),": Configuration file for ",Object(r.b)("inlineCode",{parentName:"li"},"TypeScript"),". This is not needed in the plain ",Object(r.b)("inlineCode",{parentName:"li"},"JavaScript")," version."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"strong"},"tslint.json")),": Configuration file for ",Object(r.b)("inlineCode",{parentName:"li"},"tslint"),".")),Object(r.b)("h4",{id:"continuous-delivery"},"Continuous Delivery"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"strong"},"Jenkinsfile")),": Jenkins pipeline definition file for quality assurance.\nIt uses the ",Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://sap.github.io/jenkins-library"}),'project "Piper" General Purpose Pipeline'),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"strong"},"pipeline_config.yml")),": Pipeline configuration file for the Jenkins pipeline.")),Object(r.b)("h4",{id:"cloud-foundry"},"Cloud Foundry"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"strong"},"manifest.yml")),": The deployment descriptor file for ",Object(r.b)("inlineCode",{parentName:"li"},"Cloud Foundry in SAP Cloud Platform"),".")),Object(r.b)("h4",{id:"local-development"},"Local Development"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"strong"},"src/")),": Source code for the initial application.")),Object(r.b)("h4",{id:"sap-cloud-sdk-specific"},"SAP Cloud SDK Specific"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"strong"},"systems.json"),"+",Object(r.b)("inlineCode",{parentName:"strong"},"credentials.json")),": Allows you to maintain destinations for testing purposes."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"strong"},"sap-cloud-sdk-analytics.json")),": Only if you have agreed to usage analytics during the initialization of your project.\nYou can find more information about anonymous usage analytics ",Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/SAP/cloud-sdk-cli/blob/main/usage-analytics.md"}),"in the CLI's repository"),".")),Object(r.b)("h2",{id:"run-the-project"},"Run the Project"),Object(r.b)("p",null,"To run the application locally, simply run the following command:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell"}),"npm run start:dev\n")),Object(r.b)("p",null,"This will start a local server in watch mode so that subsequent changes will automatically trigger a restart of the server.\nGo to ",Object(r.b)("inlineCode",{parentName:"p"},"http://localhost:3000")," and you should get a ",Object(r.b)("inlineCode",{parentName:"p"},"Hello, World!")," in response."),Object(r.b)("h2",{id:"deploy-the-project-on-cloud-foundry"},"Deploy the Project on Cloud Foundry"),Object(r.b)("h3",{id:"prerequisites"},"Prerequisites"),Object(r.b)("p",null,"The Cloud Foundry CLI comes in handy when you want to deploy your application to the SAP Cloud Platform.\nYou can find installation instructions for all common platforms in the ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://docs.cloudfoundry.org/cf-cli/install-go-cli.html"}),Object(r.b)("inlineCode",{parentName:"a"},"Cloud Foundry documentation")),".\nWe recommend using a package manager for that.\nIf you are using ",Object(r.b)("inlineCode",{parentName:"p"},"chocolatey")," on Windows, please find the instructions ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://chocolatey.org/packages/cloudfoundry-cli"}),"here"),"."),Object(r.b)("h3",{id:"login"},"Login"),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"If you don't have an ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://account.hana.ondemand.com/"}),"SAP Cloud Platform")," account you need to create one."))),Object(r.b)("p",null,"To deploy our application, we first need to login to Cloud Foundry in SAP Cloud Platform using the ",Object(r.b)("inlineCode",{parentName:"p"},"cf")," CLI.\nFirst, we need to set an ",Object(r.b)("inlineCode",{parentName:"p"},"API endpoint"),".\nThe exact URL of this API endpoint depends on the region your subaccount is in.\nOpen the ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://account.hana.ondemand.com/"}),"SAP Cloud Platform Cockpit")," and navigate to the subaccount you are planning to deploy your application to.\nClick on \u201cOverview\u201d on the left and you can see the URL of the API endpoint."),Object(r.b)("p",null,"Copy the URL and paste it into the following command in your command-line:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell"}),"cf api https://api.cf.<region>.hana.ondemand.com\ncf login\n")),Object(r.b)("h3",{id:"before-deploying"},"Before Deploying"),Object(r.b)("p",null,"Build your app if necessary."),Object(r.b)("h3",{id:"deployment"},"Deployment"),Object(r.b)("p",null,"To deploy your app, run:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-Shell"}),"npm run deploy\n")),Object(r.b)("p",null,"This command will use your local sources for transpiling, packaging and deployment, but will omit packaging your local ",Object(r.b)("inlineCode",{parentName:"p"},"node_modules")," as those can be system dependent.\nDependencies will instead be installed automatically when deploying to ",Object(r.b)("inlineCode",{parentName:"p"},"Cloud Foundry"),"."),Object(r.b)("p",null,"The Cloud Foundry CLI will automatically pick up the ",Object(r.b)("inlineCode",{parentName:"p"},"manifest.yml")," of the project when deploying your application.\nThe file should look like this (where ",Object(r.b)("inlineCode",{parentName:"p"},"<YOUR-APPLICATION-NAME>")," is replaced by the name you specified when initializing the project):"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-YAML"}),"applications:\n  - name: <YOUR-APPLICATION-NAME>\n    path: deployment/\n    buildpacks:\n      - nodejs_buildpack\n    memory: 256M\n    command: npm run start:prod\n    random-route: true\n")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"The specified ",Object(r.b)("inlineCode",{parentName:"li"},"path")," instructs Cloud Foundry to upload all the files from the ",Object(r.b)("inlineCode",{parentName:"li"},"deployment/")," folder."),Object(r.b)("li",{parentName:"ul"},"The command specified under the ",Object(r.b)("inlineCode",{parentName:"li"},"command")," attribute tells the ",Object(r.b)("inlineCode",{parentName:"li"},"buildpack")," what command to issue to start the application.")),Object(r.b)("p",null,"When everything works as expected, you should get output that looks something like this:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell"}),"Waiting for app to start...\n\nname:              <YOUR-APPLICATION-NAME>\nrequested state:   started\nroutes:            <YOUR-APPLICATION-NAME>.cfapps.eu10.hana.ondemand.com\nlast uploaded:     Thu 21 Mar 14:05:32 CET 2019\nstack:             cflinuxfs3\nbuildpacks:        nodejs\n\ntype:            web\ninstances:       1/1\nmemory usage:    256M\nstart command:   node index.js\n     state     since                  cpu    memory        disk           details\n#0   running   2019-03-21T13:05:47Z   0.0%   16M of 256M   126.8M of 1G\n")),Object(r.b)("p",null,"The application will be running at the ",Object(r.b)("inlineCode",{parentName:"p"},"routes")," URL, you can also make sure that the application works correctly by running the start command, this command can be different than the one shown above."),Object(r.b)("p",null,"Should the application not work for whatever reason, you can call the following command to access the logs:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-Shell"}),"cf logs <YOUR-APPLICATION-NAME> --recent\n")),Object(r.b)("h2",{id:"additional-features"},"Additional Features"),Object(r.b)("p",null,"For productive use, your app should be linked to one or more databases and implement user authentication and authorization."),Object(r.b)("h3",{id:"configure-destination"},"Configure Destination"),Object(r.b)("p",null,"Login the ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://account.hana.ondemand.com"}),"Cloud Cockpit"),", navigate to your respective subaccount (in case of a trial account it should be called ",Object(r.b)("inlineCode",{parentName:"p"},"trial"),").\nIn the menu bar on the left, there should be a section ",Object(r.b)("inlineCode",{parentName:"p"},"Connectivity")," with an entry called ",Object(r.b)("inlineCode",{parentName:"p"},"Destinations"),".\nClick ",Object(r.b)("inlineCode",{parentName:"p"},"Destinations"),". On the page that opens, click ",Object(r.b)("inlineCode",{parentName:"p"},"New Destination")," and fill in the details below."),Object(r.b)("p",null,"For ",Object(r.b)("inlineCode",{parentName:"p"},"Name"),", choose a name that describes your system.\nFor example, we will go with ",Object(r.b)("inlineCode",{parentName:"p"},"S4_SYSTEM"),"."),Object(r.b)("p",null,"If you use the Business Partner mock server, enter for ",Object(r.b)("inlineCode",{parentName:"p"},"URL")," the URL that you have saved from the ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"#deployment"}),"previous step")," and use ",Object(r.b)("inlineCode",{parentName:"p"},"NoAuthentication")," for ",Object(r.b)("inlineCode",{parentName:"p"},"Authentication"),".\nIf you use an SAP S/4HANA Cloud system, enter the systems URL in the ",Object(r.b)("inlineCode",{parentName:"p"},"URL")," field and choose ",Object(r.b)("inlineCode",{parentName:"p"},"BasicAuthentication")," as the authentication type.\nThis will make the fields ",Object(r.b)("inlineCode",{parentName:"p"},"User")," and ",Object(r.b)("inlineCode",{parentName:"p"},"Password")," appear.\nEnter here the credentials of a technical user for your SAP S/4HANA Cloud system."),Object(r.b)("h3",{id:"bind-destination-service"},"Bind Destination Service"),Object(r.b)("p",null,"To allow the application to use the destination you have just configured, you will need to bind an instance of the destination service and an instance of the ",Object(r.b)("inlineCode",{parentName:"p"},"XSUAA service")," to your application."),Object(r.b)("p",null,"To create an instance of the destination service, execute the following command in your terminal:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell"}),"cf create-service destination lite my-destination\n")),Object(r.b)("p",null,"This tells ",Object(r.b)("inlineCode",{parentName:"p"},"Cloud Foundry in SAP Cloud Platform")," to create an instance of the destination service with service plan ",Object(r.b)("inlineCode",{parentName:"p"},"lite")," and make it accessible under the name ",Object(r.b)("inlineCode",{parentName:"p"},"my-destination"),".\nWe can now use the name to bind this service to our application.\nTo do this, open your ",Object(r.b)("inlineCode",{parentName:"p"},"manifest.yml")," and add a section called ",Object(r.b)("inlineCode",{parentName:"p"},"services"),", under which you can then add the name of the just created service."),Object(r.b)("p",null,"The resulting ",Object(r.b)("inlineCode",{parentName:"p"},"manifest.yml")," should look like this:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-YAML"}),"applications:\n  - name: <YOUR-APPLICATION-NAME>\n    path: deployment/\n    buildpacks:\n      - nodejs_buildpack\n    memory: 256M\n    command: node index.js\n    random-route: true\n    services:\n      - my-destination\n")),Object(r.b)("h4",{id:"xsuaa-service"},"XSUAA Service"),Object(r.b)("p",null,"Secondly, we need an instance of the ",Object(r.b)("inlineCode",{parentName:"p"},"XSUAA service"),".\nThe ",Object(r.b)("inlineCode",{parentName:"p"},"XSUAA service")," is responsible for issuing access tokens that are necessary to talk to other services, like the destination service.\nFor this service, we will need a bit of extra configuration in the form of a configuration file.\nCreate a file called ",Object(r.b)("inlineCode",{parentName:"p"},"xs-security.json")," with the following content:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-JSON"}),'{\n  "xsappname": "<YOUR-APPLICATION-NAME>",\n  "tenant-mode": "shared"\n}\n')),Object(r.b)("p",null,"The value for ",Object(r.b)("inlineCode",{parentName:"p"},"xsappname")," again has to be unique across the whole of ",Object(r.b)("inlineCode",{parentName:"p"},"Cloud Foundry in SAP Cloud Platform"),", so make sure to choose a unique name or prefix."),Object(r.b)("p",null,"Now, execute the following command:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell"}),"cf create-service xsuaa application my-xsuaa -c xs-security.json\n")),Object(r.b)("p",null,"And, as before, add the newly created services to the services section of your ",Object(r.b)("inlineCode",{parentName:"p"},"manifest.yml"),"."),Object(r.b)("p",null,"The final ",Object(r.b)("inlineCode",{parentName:"p"},"manifest.yml")," should look like this:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-YAML"}),"applications:\n  - name: <YOUR-APPLICATION-NAME>\n    path: deployment/\n    buildpacks:\n      - nodejs_buildpack\n    memory: 256M\n    command: node index.js\n    random-route: true\n    services:\n      - my-destination\n      - my-xsuaa\n")),Object(r.b)("p",null,"Finally, we can replace the parameter of ",Object(r.b)("inlineCode",{parentName:"p"},"execute")," with an object whose key ",Object(r.b)("inlineCode",{parentName:"p"},"destinationName")," refers to the name of the destination we defined earlier.\nIf you chose a different name than ",Object(r.b)("inlineCode",{parentName:"p"},"S4_SYSTEM"),", make sure to use it here accordingly."),Object(r.b)("p",null,"The new function now looks like this:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),".execute({\n  destinationName: 'Server'\n});\n")))}m.isMDXComponent=!0},204:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var a=n(0),i=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=i.a.createContext({}),d=function(e){var t=i.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=d(e.components);return i.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},u=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=d(n),u=a,m=p["".concat(l,".").concat(u)]||p[u]||b[u]||o;return n?i.a.createElement(m,r(r({ref:t},s),{},{components:n})):i.a.createElement(m,r({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=u;var r={};for(var c in t)hasOwnProperty.call(t,c)&&(r[c]=t[c]);r.originalType=e,r.mdxType="string"==typeof e?e:a,l[1]=r;for(var s=2;s<o;s++)l[s]=n[s];return i.a.createElement.apply(null,l)}return i.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},245:function(e,t,n){"use strict";var a=n(0),i=n.n(a);t.a=function(e){var t=e.align;return i.a.createElement("span",{className:t?"col text--right":""},i.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/SAP/cloud-sdk"},i.a.createElement("img",{src:"https://github.com/SAP/cloud-sdk-js/workflows/build/badge.svg",alt:"build",className:"max-width:100%;"})))}},246:function(e,t,n){"use strict";var a=n(0),i=n.n(a);t.a=function(e){var t=e.align;return i.a.createElement("span",{className:t?"col text--right":""},i.a.createElement("a",{href:"https://opensource.org/licenses/Apache-2.0",rel:"nofollow"},i.a.createElement("img",{src:"https://img.shields.io/badge/License-Apache%202.0-yellowgreen.svg",alt:"License","data-canonical-src":"https://img.shields.io/badge/License-Apache%202.0-yellowgreen.svg",className:"max-width:100%;"})))}}}]);