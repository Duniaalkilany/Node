# Node
# Course content : 
- development framework based on Google's V8 JS engine 
- node.js is an open source , cross-platform(any platform 'mac,windows,linux') js runtime environment 
- uses : backend services , real time applications (like chat), games (multiplayer game)
-in terminal if you print node you will go to node shell or REPL 
-REPL : Read Eval Print loop / Node Shell 
-to know more about REPL print .help in node shell (REPL)
-instead of write code in REPL , Node shell we will use text editor like vs code . 
- does any thing write ,do by js can do by node.js ?
no , not interact with DOM (Document Object Model) , document is not defined 
-this is the global object in node , to know about what you can use in node in node docs choose globals 


# node installation : 
- node version : node -v 
- node : this file starts a node.js js VM , what is node file 
- npm : this command is used to mannage the node.js packages (to install any package in node project used npm command )'npm install packageName'
- node-modules : this folder contains the installed node.js packages  : this packages act as libraries that extend the capabilites of nosw.js 

# what is different between node.js and browser : 
 Browser : 
-interact with the DOM (document , window ) objects 
**for exampl
-does not interact with filesystem access functionality 
-browser environment : where you do not get the luxury to choose what browser your visitors will use 
 Nosw.js-Server side :
 -does not interact with DOM (document object modeling)
 -interact with file system.
 -in node.js you control the environment (you know which version of node.js you will run)

# what is modules in nodejs:
- simple or complex functionality organized in single or multiple javascript files which can be reused in node application . 

-node js contain modules this modules may be written in js or c++
- type of modules : built-in (installed when you install node.js, no need to install it alone) , local/user-defined , npm modules (installed)
- built in like os module / in node on github it will be found in lib folder 
to check this built in module check node docs . 
- to use the modules we use require keyword 



 # starting Nodejs Project :
  - first create a directory for your new application and navigate into it :
  mkdir myapp
  cd myapp
  - open cmd : start / run /cmd 
  - ** use npm init command to create a package.json file for your application : package.json json object has project info like name and has all the backages installed names . 
  - install modules  start with express 

* what is package.json 
as we said using npm init to create package.json :is a simple json test that define the modules including dependencies 
-any node module should contain package.json .

-npm : node package manager 
 npm automatically installed in your computer when install node 
npm: tool we can use to install/update/remove node packages into our computor diretely and into indevisual projects to use 




** require keyword
## Nodejs modules  : Node.js comes with a set of built-in modules that we can use in our codee without having to install them 
## we need to require the module using the require keyword and assign the result to variable 
## this can then be used to invoke any methods the module exposes .

