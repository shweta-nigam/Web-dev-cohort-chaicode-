/*Note:-
In JavaScript, bind(), call(), and apply() are methods that allow you to set the execution context (this keyword) of a function.
These are methods that help you control what this refers to in a function and how you pass arguments to it.
*/

// **********    call
// What it does: It lets you call a function and explicitly tell it what 'this' should refer to. You can also pass arguments to the function one by one.   ex:-

function myIntro(age,city){
    console.log(`I am ${this.name}, ${age} years old and lives in ${city}`)
}

const obj = {name: "Shweta"}

myIntro.call(obj,22,"Delhi")       // I am Shweta, 22 years old and lives in Delhi

//**************      apply
//What it does: It’s almost the same as call, but instead of passing arguments one by one, you pass them as an array.

function greet(message1,message2){
    console.log(`${message1} ${this.name}, ${message2}?`)
}

const myObj = {name : "Alice"}
greet.apply(myObj,["Hello", "How are u"])   // Hello Alice, How are u?

//************       bind
// What it does: It creates a new function where this is permanently set to a specific value. Unlike call and apply, it doesn’t call the function immediately. Instead, it returns a new function that you can call later.

function bindFn(name){
  console.log(`I am ${name} and lives in ${this.city}`)
}

const object = {city: "New York"}

const newFun = bindFn.bind(object,"Shweta")   // here it only saves the reference of this permanently.
newFun()             // I am Shweta and lives in New York   // bind returns a new function.