let calculator= (num1, num2)=>{
return num1+num2
}

function capitalize(str){
    return str.toUpperCase()
}
//export one function / module 
// module.exports= calculator

//export more than one function 

module.exports={
    calc:calculator,
    cap:capitalize
}