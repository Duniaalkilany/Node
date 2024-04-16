let calculator= (num1, num2)=>{
return num1+num2
}

function capitalize(str){
    return str.toUpperCase()
}
//export one function / module 
// module.exports= calculator

//export more than one function 

// module.exports={
//     calc:calculator,
//     cap:capitalize
// }
//can exports with out use module

// exports= {
 
//     cap:capitalize
// }

//one object contain all the needed exported functions  
// exports = {
//     calculator, capitalize
// }

//another way to export functions in module is : 

module.exports.add=(num1,num2)=>{
    console.log(`add ${num1} , ${num2}`)
}