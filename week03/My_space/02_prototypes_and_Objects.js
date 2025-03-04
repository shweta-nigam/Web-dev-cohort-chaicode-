/*  Objects and prototype:-
In JavaScript, objects and prototypes are fundamental concepts that form the backbone of the language's object-oriented programming (OOP) model.

What is an Object?
An object is a collection of key-value pairs, where each key (also called a property) maps to a value.

Objects are used to represent real-world entities, such as a user, a product, or any other complex data structure.

There are several ways to objects ex:- Objects Literals, Using New Object(),etc:-
*/
//1. Objects literals :-
const obj = {
    fName: "Shweta",
    lName : "Nigam",
    greet : function getFullName(){
        console.log(`Hello ${this.fName} ${this.lName}`)
    }
}
console.log(obj)
console.log(obj.greet())           // what would happen without () parentheses? //then  -- If you call console.log(obj.greet) without parentheses, you are not invoking the greet method. Instead, you are logging the function itself.
// The greet method does not explicitly return anything, so it implicitly returns undefined.


//2. Using new Object();
const person = new Object ()
person.Name = "Max"
person.age = 30
person.detail = function getDetail(){
    console.log(`${this.Name} is ${this.age} years Old`)
}
console.log(person)

//3. Using a Constructor Function

function User (name,age){
 this.name = name,
 this.age = age,
 this.greet = function (){
    console.log(`Hello, my name is ${this.name}`)
 }
}
const user1 = new User("John",30)
console.log(user1)

//4.Using Object.create()

const productPrototype = {
    info : function(){
        console.log(` ${this.name} was made in ${this.date}`)
    }
}

const product1  = Object.create(productPrototype);  
// Creates an object that has the specified prototype or that has null prototype.
product1.name = "Honda-Tx23"
product1.date = 2025
console.log(product1.info()) 
// or
product1.info()    // we can directly call it as info function does not return anything.


/**
Note:-
2. Prototypes in JavaScript

What is a Prototype?
Every JavaScript object has a prototype, which is another object that it inherits properties and methods from.
Prototypes are the mechanism by which JavaScript objects inherit features from one another.

Prototype Chain
When you try to access a property or method on an object, JavaScript first looks for it on the object itself. If it doesn’t find it, it looks up the prototype chain until it finds the property/method or reaches the end of the chain (where the prototype is null).

The prototype Property:
The prototype property is used with constructor functions. It is the object that will be assigned as the prototype of instances created by that constructor.
*/

const person = {name: "Shweta"}
console.log(person.__proto__)     // points to the prototype of the person


//Creating Prototypes
// a. Using Constructor Functions:-

function User(name){
    this.name = name
}
User.prototype.greet = function(){
        console.log(`Hello, my name is ${this.name}`);
}
    
const user2 = new User("kiyan")
console.log(user2)                   // User { name: 'kiyan' }  ?? why this
user2.greet()               //   Hello, my name is kiyan

//b.  using Object.create()

const userNamePrototype = {
    gm: function(){
        console.log(` good morning! ${this.name}`)
    }
}
const user3 = Object.create(userNamePrototype)
userNamePrototype.name = "sue"
userNamePrototype.gm()             //  good morning! sue
    