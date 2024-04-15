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

const log= require('./logger')


log('hello from dunia')

const calculator= require('./calculator')

console.log(calculator.calc(10,20))



console.log(calculator.cap('dunia'))





