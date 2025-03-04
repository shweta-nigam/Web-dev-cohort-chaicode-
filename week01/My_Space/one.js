// Objects exist in JavaScript because they provide a powerful way to store, organize, and manipulate complex data. Unlike primitive data types (like strings, numbers, and booleans) that store simple values, objects are used to represent structured data and real-world entities. 

/*Note:-
1. Since ES6 (ECMAScript 2015), JavaScript allows defining methods inside objects without using the function keyword:
ex -- before :-
const people = {
    fName :"shweta",
    lName :"nigam",
    age :  20,
    income : "1T",
    fullName : function getFullName(){
        return `Name is ${this.fName} ${this.lName}`
    }
}

console.log(people.fullName) // only get reference , xxx
console.log(people.fullName())

After :-

const user = {
    fName: "nano",
    lname: "Wright",
    age: 22,
    getFullName (){
        return `${this.fName} is ${this.age} years old`
    }
}
console.log(user.getFullName())
*/

// Objects under the hood :-
/* Note:- 
Objects in JavaScript are fascinating because they work behind the scenes using references, memory storage, and dynamic property handling.

learning js objects with real life(office cabinet):-
Summary
Objects = Storage Cabinets: Store key-value pairs in memory.
References = Maps: Point to the same object without copying.
Dynamic Structure: Add/remove properties at runtime.
Prototypes = Shared Blueprints: Provide inheritance.
Garbage Collection: Cleans up unused objects.




*/