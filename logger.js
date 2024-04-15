function log(message){
    console.log(`the message is${message} `)
}
//export the module to use it //export one module 
module.exports = log

//export more than one function this mean that you will export object 

let obj ={
    name : "dunia",
    age : log
}

console.log(obj.age('hiiiiiiiiiiiiiiiiii'))

