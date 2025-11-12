const add = (a,b)=>{
   if(a==undefined || b==undefined){
        console.log("Please Enter Numbers to do Addition")
    }else{
console.log( "Add : ",a+b);
    }
    
}
const sub = (a,b)=>{
     if(a==undefined || b==undefined){
        console.log("Please Enter Numbers to do Subtraction")
    }
    else{
console.log("Sub : ", a-b);
    }

}
const mul = (a,b)=>{
     if(a==undefined || b==undefined){
        console.log("Please Enter Numbers to do Multiplication")
    }
    else{
         console.log("Mul : ", a*b);
}
    }
   
const div = (a,b)=>{
    if(a==undefined || b==undefined){
        console.log("Please Enter Numbers to do Division")
        
    }else{
  console.log( "Div : ",a/b);
    }
   
}



module.exports = {add,sub,mul,div};