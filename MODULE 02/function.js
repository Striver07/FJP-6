// functon in js without parameters
function sayhello()// function =keyword function name
{
    console.log("hello from javascript"); //function declare(body of function)
}
sayhello();//function calling

// functions in js with parameters
function sum(num1,num2)
{
    let sum = num1+num2;
    console.log("addition of the numbers are: " +sum);
}
 sum(100,200);

 // function with return types

 function multiply(n1 ,n2)
 {
     return(n1*n2);
     
 }
let ans= multiply(53,25);
console.log(ans);

// function storing in varaible 
// also kknown as functions are first citizen as the functuon is stored in the variables
 let x=function sub(a1,a2)
{
    if(a1>a2){
    return (a1-a2);
    }
    else
    return(a2-a1);
    
    
}

console.log(x(23,24));

// IIFE - INTEMEDIATE INVOKED FUNCTION EXECUTION
(function(){
    console.log("namaste batchmates");
})()

(function(n1,n2){
    if(n1>n2){
       
        console.log(n1/n2);    
    }
    else {
        
        console.log(n2/n1);
   }         
})()

