/*Note:-
🔍 Understanding arguments in JavaScript:
The arguments object is a local variable available within all non-arrow functions.
arguments is a built-in object available inside regular functions (but not arrow functions).
It contains all the arguments passed to a function, regardless of the number of parameters defined in the function signature.
Even if a function is defined with fewer parameters, JavaScript does not restrict the number of arguments you can pass.
Arguments behaves like an array but is not an actual array (it's an array-like object).
JavaScript functions are flexible—they allow you to pass more or fewer arguments than defined
*/

function ptaNhi(fn,delay){
    console.log(arguments)
   
    let myId;
    return function(...args){
       myId = setTimeout(()=>{
          fn.apply(this, args)  
       },delay)
    }
}

   
ptaNhi("hitesh",5000,"anyArguments")     // [Arguments] { '0': 'hitesh', '1': 5000, '2': 'anyArguments' }


// 

function myFun(fn, delay, ...extraArgs) {
    console.log(extraArgs); // Logs ["anyArguments"]
}
myFun("hitesh", 5000, "anyArguments");