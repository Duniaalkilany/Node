
/*the file system
-file system core module (built in module in node to add / receive functionallityof ===>(abilty to interact with filesystem on computer with js ) 
-using filesystem module to do things like on computer :
1.read files
2.create file(write)
3.delete files 

- built in module 
- no need to install it ,installed by default when install node.js 
- common js module using require 
const fs = require (node : fs ) // node prefix and defined that this module is a built in module , can used with out node 
- EcmaScript Module using import 
import fs from 'node : fs'
*/

// start implement by creating json file called it users and text file called it hello
const fs = require('node:fs')


//read file
let fileContent = fs.readFileSync('./hello.txt', 'utf8')

console.log('File Content' ,fileContent)

let JsonContent =fs.readFileSync('./users.json', 'utf8')

console.log(JsonContent)

 
fs.readFile('./hello.txt' ,'utf-8',(err,data)=>{
if (err){
    console.log('Error',err)
}
else{
    console.log('Data', data)
}
  
})

fs.readFile('./users.json','utf8',function(err, data){
if (err){
console.log('Error :',err)
}else{
    console.log('Data :',data)
}
} )

/*
What is the different between readFile , readFileSync ?

- js is a single-threaded : it can only execute one task at time 
- node js has concept of non-blocking code 
- sync refer to blocking code 
- which mean readFileSync will block the rest of code from executing until the file read 
- non blocking code used async (call back function)
- to understand the different between blocking and nonbloking 
*/
// here cause it blocking / sync , second will be after the blocking (readFileSync) done .

console.log('first')
let content =fs.readFileSync('./hello.txt','utf8')
console.log('Content',content)
console.log('second')

//in this example about non blocing async (the read file will not block the code until it executed so first , second then read)
console.log('first')
fs.readFile('./hello.txt','utf8',(err , data )=>{
if (err){
console.log(err)
}else{
console.log(data)
}
})
console.log('second')

// descussing a bout blocking , non-blocking code 

// in the main thrid the code will done sequensly if there is a blocking code (sync) so the executing will stop until the blocking code done then the rest of the code continue 
// check the draw.io
//dangers of mixing blocking and non blocking code , use async (non blocking like readFile) with sync(blocking like unlink): 
 // in the bellow code readFile is async (non blocking) so the code will not block and move to event loop then unlinksync is blocking code so it will execute and remove delete the file trhen reurn to the event loop to execute the non blocking code so it will read a deleted file so wewill have error 
// fs.readFile('./test.txt','utf8',(err, data)=>{
// if (err){
//     console.log(err)
// }else {
//     console.log(data)
// }
// })
// //unlinksync is sync (blocking)
// fs.unlinkSync('/test.txt'
// )
// // to solve the above use non blocking code (async) 
// fs.readFile('./test.txt', 'utf-8',(err, data)=>{
//     if (err){
//         console.log(`err: ${err}`)
//     }
 
// })
// //unlink is a sync 
// fs.unlink('./test.txt',err=>{
//     if (err){
//         console.log(err)
//     }
// })


//write file is non blocking async 
fs.writeFile('./hello.txt','i am dunia i write to this file','utf8',err=>{
    if (err) throw err
})


fs.writeFile('./users.json',[{id : 1 ,name :"dunia"} , {id : 2 , name :"dunia2"}],'utf8', 




)



//delete file 