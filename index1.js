// console.log('hello world')
// document.getElementById('test').style('color: red') // document is not defined 
// window.alert('hello') // window is not defined 
// console.log(window.location)
console.log(this)//global object in node 
// built in node module :
//ex: os : operating system 
const os = require('node:os')
console.log(os.arch())//X64
console.log(os.homedir())//C:\Users\admin
console.log(os.platform())//win32

//ex: filesystem 
const fs =require('node:fs')
console.log('fileContent :  ',fs.readFileSync('test.txt', 'utf8'))

//user/localmodules : by user 
//we wiil create a module (code to use as module to utility amd reused )
//for example make a module which log the entered messages 
//we will create the module 
//then export it 
//if i want to export more than function then i will export object {}
//then import , require it where we need it by using require relative path to the module 
//modules is cached 
const logger= require('./logger_module')
const calculator= require('./calculator_module')
console.log('test two exports ')
calculator.add(1,2)                                                                  
// const calculator= require('./calculator_module')

// console.log(calculator.calc(10,20))

// console.log(calculator.cap('dunia'))
//module is cached  :
//we required the module more than once but it called once 
// the first time it called () then it will called itfrom cach 
//يعني لما بنادي ريكويرد ل ةخيعمث بينعمللها load في الكاش ولا برجه باستدعيها طول ما هيي بالكاش  ووlogger('duniiiiiiiiiiiiiia')


const writting = require('./cached_module')

const writting2 = require('./cached_module')

const writting3 = require('./cached_module')

console.log('cache')
console.log(require.cache)




//modules in node.js :
/*
-common js modules : old format using require 
-ECMAScript modules : official standered format , using import */