(window.webpackJsonp=window.webpackJsonp||[]).push([[100],{175:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return s}));var a=n(3),o=n(7),i=(n(0),n(205)),r={title:"Add the SAP Cloud SDK to Your Project",hide_title:!1,hide_table_of_contents:!1,sidebar_label:"Add the SAP Cloud SDK to Your Project",description:"This article shows how to add the SAP Cloud SDK to your project using the command-line interface.",keywords:["sap","cloud","sdk","cli","command","line","JavaScript","TypeScript"]},c={unversionedId:"js/features/cli/init",id:"js/features/cli/init",isDocsHomePage:!1,title:"Add the SAP Cloud SDK to Your Project",description:"This article shows how to add the SAP Cloud SDK to your project using the command-line interface.",source:"@site/docs/js/features/cli/init.mdx",slug:"/js/features/cli/init",permalink:"/cloud-sdk/docs/js/features/cli/init",editUrl:"https://github.com/SAP/cloud-sdk/edit/main/docs/js/features/cli/init.mdx",version:"current",lastUpdatedBy:"Artem Kovalov",lastUpdatedAt:1608576254,sidebar_label:"Add the SAP Cloud SDK to Your Project",sidebar:"someSidebar",previous:{title:"What is the SAP Cloud SDK CLI?",permalink:"/cloud-sdk/docs/js/features/cli/overview"},next:{title:"Deploy to SAP Cloud Platform",permalink:"/cloud-sdk/docs/js/features/cli/package"}},l=[{value:"Add the SAP Cloud SDK to an Existing Project",id:"add-the-sap-cloud-sdk-to-an-existing-project",children:[{value:"Options",id:"options",children:[]},{value:"Step-by-Step",id:"step-by-step",children:[]},{value:"Next Steps",id:"next-steps",children:[]}]},{value:"Set Up a New Project With the SAP Cloud SDK CLI",id:"set-up-a-new-project-with-the-sap-cloud-sdk-cli",children:[]}],d={toc:l};function s(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"The SAP Cloud SDK CLI adds necessary dependencies and configurations to use the SAP Cloud SDK and deploy your app to SAP Cloud Platform with one command.\nThis is possible for any existing project that uses ",Object(i.b)("inlineCode",{parentName:"p"},"npm"),"."),Object(i.b)("p",null,"If you are starting from scratch, the SAP Cloud SDK CLI can also generate a fully-loaded new project to get you started quickly.\nThis uses the CLI of our recommended backend framework ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://nestjs.com"}),"Nest")," and enhances it with the SAP Cloud SDK."),Object(i.b)("h2",{id:"add-the-sap-cloud-sdk-to-an-existing-project"},"Add the SAP Cloud SDK to an Existing Project"),Object(i.b)("p",null,"Do you want to add the SAP Cloud SDK to your existing Node.js application?"),Object(i.b)("p",null,"Do you want to use the backend and testing frameworks you already know?"),Object(i.b)("p",null,"If you answered yes to either question, you can use the SAP Cloud SDK CLI to add the SAP Cloud SDK and necessary configuration to your project.\nThe command-line tool will guide you step-by-step to create the right configuration for your project."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"$ cd my-project\n\n$ sap-cloud-sdk init\nEnter project name (for use in manifest.yml) [my-project]:\nEnter the command to start your application: npm start\nDo you want to provide anonymous usage analytics to help us improve the SDK? (y|n): y\n  \u2714 Creating files\n  \u2714 Adding dependencies to package.json\n  \u2714 Installing dependencies\n  \u2714 Modifying `.gitignore`\n")),Object(i.b)("h3",{id:"options"},"Options"),Object(i.b)("h4",{id:"project-directory"},"Project Directory"),Object(i.b)("p",null,"You can set the project directory via a flag or as a path parameter.\n",Object(i.b)("strong",{parentName:"p"},"The default value is the working directory."),"\nIf the project directory is empty, the CLI will offer to create a new project."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"$ sap-cloud-sdk init PROJECTDIR\n\n$ sap-cloud-sdk init --projectDir=PROJECTDIR\n")),Object(i.b)("h4",{id:"sap-cloud-application-programming-model"},"SAP Cloud Application Programming Model"),Object(i.b)("p",null,"Add a ",Object(i.b)("inlineCode",{parentName:"p"},"cds")," configuration and example data to follow the SAP Cloud Application Programming model.\n",Object(i.b)("strong",{parentName:"p"},"By default, this configuration is not added.")),Object(i.b)("p",null,"This can also be added with a separate command."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"# Initialize the project with the SAP Cloud SDK and set up SAP CAP\n$ sap-cloud-sdk init --addCds\n# Set up SAP CAP without initializing\n$ sap-cloud-sdk add-cds\n")),Object(i.b)("h4",{id:"frontend-scripts"},"Frontend Scripts"),Object(i.b)("p",null,'Add frontend-related npm scripts which are executed by Project "Piper".\nThis is only needed if you the project serves the frontend and you use Project "Piper" for your pipeline.\n',Object(i.b)("strong",{parentName:"p"},"By default, this configuration is not added.")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"$ sap-cloud-sdk init --frontendScripts\n")),Object(i.b)("h4",{id:"force-help-and-verbose"},"Force, Help, and Verbose"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"--help")," or ",Object(i.b)("inlineCode",{parentName:"li"},"-h"),": Show help for the init command."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"--verbose")," or ",Object(i.b)("inlineCode",{parentName:"li"},"-v"),": Show more detailed output."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"--force"),": Do not fail if a file or npm script already exists and overwrite it.")),Object(i.b)("h3",{id:"step-by-step"},"Step-by-Step"),Object(i.b)("h4",{id:"enter-project-name"},"Enter Project Name"),Object(i.b)("p",null,"The project name is relevant for the Cloud Foundry repository.\nYour application will use this name to appear in the SAP Cloud Platform Cockpit.\nBy default, it will suggest the name of the project folder."),Object(i.b)("h4",{id:"enter-the-command-to-start-your-application"},"Enter the Command to Start Your Application"),Object(i.b)("p",null,"When deploying to Cloud Foundry, it calls the entered command to start your application.\nThis can be any bash command.\nOften the command will be ",Object(i.b)("inlineCode",{parentName:"p"},"npm start"),"."),Object(i.b)("p",null,"The SAP Cloud SDK CLI will add this command to the ",Object(i.b)("inlineCode",{parentName:"p"},"manifest.yml"),".\nIf you don't know the command at this moment, you can adjust it manually afterward."),Object(i.b)("h4",{id:"do-you-want-to-provide-anonymous-usage-analytics-to-help-us-improve-the-sap-cloud-sdk"},"Do You Want to Provide Anonymous Usage Analytics to Help Us Improve the SAP Cloud SDK?"),Object(i.b)("p",null,"If you give your consent, the SAP Cloud SDK will collect the following data about your project:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"project pseudonym"),Object(i.b)("li",{parentName:"ul"},"Node.js version"),Object(i.b)("li",{parentName:"ul"},"npm version"),Object(i.b)("li",{parentName:"ul"},"operating system information"),Object(i.b)("li",{parentName:"ul"},"project dependencies"),Object(i.b)("li",{parentName:"ul"},"whether TypeScript is used")),Object(i.b)("p",null,"This helps us understand the ecosystem in which the SAP Cloud SDK is used and prioritize features accordingly.\nThe consent is stored in the ",Object(i.b)("inlineCode",{parentName:"p"},"sap-cloud-sdk-analytics.json"),".\nTo withdraw your consent, set ",Object(i.b)("inlineCode",{parentName:"p"},'"enabled": false')," or delete the ",Object(i.b)("inlineCode",{parentName:"p"},"sap-cloud-sdk-analytics.json")," file."),Object(i.b)("p",null,"More information can be found on ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/SAP/cloud-sdk-cli/blob/main/usage-analytics.md"}),"GitHub"),"."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"$ sap-cloud-sdk init\n  [...]\n  \u2714 Creating files\n  \u2714 Adding dependencies to package.json\n  \u2714 Installing dependencies\n  \u2714 Modifying `.gitignore`\n\n+--------------------------------------------------------------+\n \u2705 Init finished successfully.\n\n \ud83d\ude80 Next steps:\n - Make sure that your app listens to `process.env.PORT`\n - Build your app if necessary\n - Run `sap-cloud-sdk package [--include INC][--exclude EXC]`\n - Push to Cloud Foundry (`cf push`)\n\n \ud83d\udd28 Consider setting up Jenkins to continuously build your app.\n Use `sap-cloud-sdk add-cx-server` to create the setup script.\n+--------------------------------------------------------------+\n")),Object(i.b)("h3",{id:"next-steps"},"Next Steps"),Object(i.b)("p",null,"After the initialization is finished, the CLI displays the necessary steps to deploy your application to Cloud Foundry."),Object(i.b)("h4",{id:"make-sure-that-your-app-listens-to-processenvport"},"Make Sure That Your App Listens To ",Object(i.b)("inlineCode",{parentName:"h4"},"process.env.PORT")),Object(i.b)("p",null,"Your application may use a predefined listening port.\nYou can usually configure this in a central place like the ",Object(i.b)("inlineCode",{parentName:"p"},"app.js")," or ",Object(i.b)("inlineCode",{parentName:"p"},"main.ts"),".\nIf you are using an express-based framework, look for the ",Object(i.b)("inlineCode",{parentName:"p"},".listen()")," function."),Object(i.b)("p",null,"According to the ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://docs.cloudfoundry.org/buildpacks/node/node-tips.html"}),"Cloud Foundry documentation")," your app needs to listen to the ",Object(i.b)("inlineCode",{parentName:"p"},"PORT")," variable."),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"You must use the PORT environment variable to determine which port your app should listen on.\nTo also run your app locally, set the default port as 3000."),Object(i.b)("pre",{parentName:"blockquote"},Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"  app.listen(process.env.PORT || 3000);\n"))),Object(i.b)("h4",{id:"build-your-app-if-necessary"},"Build Your App if Necessary"),Object(i.b)("p",null,"Before your application can be prepared for deployment, you may need to compile the code.\nThis is needed for any project that is built with TypeScript or Babel."),Object(i.b)("p",null,"We recommend adding a build script in the ",Object(i.b)("inlineCode",{parentName:"p"},"package.json"),".\nYou can also use the ",Object(i.b)("inlineCode",{parentName:"p"},"ci-build")," script that is generated by the SAP Cloud SDK CLI as a placeholder.\nIf you use a ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://sap.github.io/jenkins-library/"}),'Project "Piper" pipeline'),", the generated configuration will automatically call the ",Object(i.b)("inlineCode",{parentName:"p"},"ci-build")," script."),Object(i.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(i.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"Productive Build")),Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"Many project generators add build scripts automatically.\nIf there are multiple scripts, pay attention to use the productive build.\nOften this is done by adding a ",Object(i.b)("inlineCode",{parentName:"p"},"--prod")," flag (or removing ",Object(i.b)("inlineCode",{parentName:"p"},"--dev"),")."))),Object(i.b)("h4",{id:"run-sap-cloud-sdk-package"},"Run ",Object(i.b)("inlineCode",{parentName:"h4"},"sap-cloud-sdk package")),Object(i.b)("p",null,"Your repository will likely contain files that are not necessary to be uploaded when deploying.\nThe generated ",Object(i.b)("inlineCode",{parentName:"p"},"manifest.yml")," defines the ",Object(i.b)("inlineCode",{parentName:"p"},"deployment")," folder as the path that will be uploaded when calling ",Object(i.b)("inlineCode",{parentName:"p"},"cf push"),".\nCalling ",Object(i.b)("inlineCode",{parentName:"p"},"sap-cloud-sdk package")," will copy the needed files to the ",Object(i.b)("inlineCode",{parentName:"p"},"deployment")," folder.\nIf you want to include or exclude certain files, you can use the ",Object(i.b)("inlineCode",{parentName:"p"},"--include")," and ",Object(i.b)("inlineCode",{parentName:"p"},"--exclude")," flags.\nThese flags support ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://en.wikipedia.org/wiki/Glob_(programming)"}),"glob patterns"),"."),Object(i.b)("p",null,"You can find more information in ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/cloud-sdk/docs/js/features/cli/package"}),"the article on this command"),"."),Object(i.b)("h4",{id:"push-to-cloud-foundry"},"Push to Cloud Foundry"),Object(i.b)("p",null,"Once your project is prepared, you can use the ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://docs.cloudfoundry.org/cf-cli/install-go-cli.html"}),"Cloud Foundry CLI")," to deploy your application.\nYou may need to log in to your Cloud Foundry account first."),Object(i.b)("p",null,"Manual deployments via ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://docs.cloudfoundry.org/devguide/push.html"}),"cf push")," can be helpful in the beginning but are strongly discouraged for productive environments.\nThose deployments should be done by a CI/CD pipeline that ensures successful tests before deployment."),Object(i.b)("h2",{id:"set-up-a-new-project-with-the-sap-cloud-sdk-cli"},"Set Up a New Project With the SAP Cloud SDK CLI"),Object(i.b)("p",null,"If the target directory does not exist or does not contain a ",Object(i.b)("inlineCode",{parentName:"p"},"package.json"),", the CLI will ask you if you want to create a new project.\nThe new project will be based on the Nest CLI."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"$ sap-cloud-sdk init example-project\nThe target directory (example-project) does not contain a `package.json.`\nShould a new `nest.js` project be initialized in the target directory? (y|n): y\n")),Object(i.b)("p",null,"The generated project uses TypeScript as a language, npm as the package manager, Nest as the backend framework and Jest as a test framework.\nIt also includes the most current version of the SAP Cloud SDK as a dependency."),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"But I would rather use JavaScript!")),Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"If you prefer different tooling, we recommend you set up your project first and use the CLI to add the SAP Cloud SDK afterward."))))}s.isMDXComponent=!0},205:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var a=n(0),o=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var d=o.a.createContext({}),s=function(e){var t=o.a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=s(e.components);return o.a.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,r=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=s(n),b=a,m=p["".concat(r,".").concat(b)]||p[b]||u[b]||i;return n?o.a.createElement(m,c(c({ref:t},d),{},{components:n})):o.a.createElement(m,c({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=b;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,r[1]=c;for(var d=2;d<i;d++)r[d]=n[d];return o.a.createElement.apply(null,r)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);