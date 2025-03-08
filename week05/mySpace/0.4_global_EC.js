//1.
console.log(`value of x is ${x}`)  //  value of x is undefined
var x = 10  
//2.
x = 30
console.log(`value of x 1 is ${x}`)  // value of x 1 is 30 
var x = 10  
console.log(`value of x 2 is ${x}`)  // value of x 2 is 10

//3.

console.log("Global execution starts")
var globalVariable  = "I am a global variable"
function globalFunction(){
    console.log("Inside global function")
}
console.log(globalVariable)
globalFunction()
console.log("Global execution ends")
//

//4.
console.log("Global execution starts")
var globalVariable  = "I am a global variable"
function globalFunction(){
    console.log("Inside global function")
}
globalFunction()
console.log(globalVariable)
console.log("Global execution ends")   // different sequences than above code.

//5.
console.log("Global execution starts")
var globalVariable  = "I am a global variable"
console.log(globalVariable)
globalFunction()
console.log("Global execution ends")
function globalFunction(){
    console.log("Inside global function")
}
// still be able to call globalFunction()  because memory function has saved whole function 


//6
console.log("Global execution starts")
var globalVariable  = "I am a global variable"
console.log(globalVariable)
globalFunction()                         // globalFunction is not a function but assigned/stored in a variable
console.log("Global execution ends")
var globalFunction = function (){                             
    console.log("Inside global function")
}

//7 
console.log("Global execution starts")
var globalVariable  = "I am a global variable" 
console.log(globalVariable)
console.log(globalFunction)                  // undefined              
console.log("Global execution ends")
var globalFunction = function my(){                             
    console.log("Inside global function")
}

// const and let do hoist in memory phase but js makes it inaccessible before they are declared and initialized which is cold TDZ - Temporal Dead Zone :-

console.log("value of p: " + p)                 // ReferenceError: Cannot access 'p' before initialization
let p = 100
console.log("value of r: " + r)                 // ReferenceError: Cannot access 'r' before initialization
const r = 50



//.....  example of recursion along with name and unnamed/anonymous function:-
// Named function expression
var factorial = function computeFactorial(n) {
    if (n <= 1) return 1;
    return n * computeFactorial(n - 1); // Using the function name
};

// Anonymous function expression
var factorial = function (n) {
    if (n <= 1) return 1;
    return n * factorial(n - 1); // Using the variable name
};