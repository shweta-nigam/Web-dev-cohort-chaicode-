// Advanced Object Features
// Object Methods

// Object.keys(), Object.values(), and Object.entries()
// Object.assign() for shallow copying
// Object.freeze() and Object.seal() for immutability
// Destructuring,Computed Property Names,Spread Operator,Object Cloning,Prototypes and Inheritance,Classes and OOP,
// Object Patterns for Real-World Applications,JSON (JavaScript Object Notation).

/**
Note :-
*/
// Object.keys(): Get all keys. -->  It gives you an array of all the keys (property names) in an object.

const user = {name : "shweta" , age: 22 , profession : "Software engineer "}
const keysOfUser = Object.keys(user)
console.log(keysOfUser)    //    [ 'name', 'age', 'profession' ]

// Object.values(): Get all values.  --> gives array of all the values in object.

const user2 = {name : "shweta" , age: 22 , profession : "Software engineer "}
const valuesOfUser2 = Object.values(user2)
console.log(valuesOfUser2)     //    [ 'shweta', 22, 'Software engineer ' ]

// Object.entries(): Get all key-value pairs.  --> gives key-values in arrays 

const user3 = {name : "shweta" , age: 22 , profession : "Software engineer "}
const keyValueOfUser3 = Object.entries(user3)
// console.log(keyValueOfUser3)     //  [ [ 'name', 'shweta' ], [ 'age', 22 ], [ 'profession', 'Software engineer '] ]
// can I put array on the output ?
const data = keyValueOfUser3.map( ([key,value]) => (console.log(`My key is ${key} and its value is ${value}`)))


/* note:- 

const data = keyValueOfUser3.forEach( ([key,value]) => { return `My keys are ${key} and its values are ${value}`})
console.log(data)     // XXX    return keyword does not work with forEach loop.

Why Use map() Instead of forEach()?
forEach() iterates but does not return anything. 
map() creates a new array with transformed elements. 

const data = keyValueOfUser3.forEach( ([key,value]) => (console.log(`My key is ${key} and its value is ${value}`)))
console.log(data)    // returns undefined for last value ?

When to Use forEach() vs map() ?
Use forEach() when you just need to perform an action like logging or side effects.
Use map() when you want to transform elements and get a new array.

*/

// Object.assign(): Copy properties from one object to another.
const user4 = {name : "shweta" , age: 22 , profession : "Software engineer "}
const user5 = {name: "shweta nigam", city:"delhi"}
const detail = Object.assign(user4,user5)       //( target,source)  target--> object is the object which will change with affect from source.
const detail2 = Object.assign(user5,user4)   // different ans from (user4,user5)
console.log(detail2)

// Object.freeze(): Make an object completely unchangeable. --> It makes an object immutable, meaning you can't add, delete, or change any properties in the object.

const user6 = {name : "shweta" , age: 22 , profession : "Software engineer "}
Object.freeze(user6)
user6.name = "shweta nigam"    // no updating/change allowed
user6.city = "delhi"          // no entry is allowed
delete user6.profession       // no deletion is allowed
console.log(user6)             // { name: 'shweta', age: 22, profession: 'Software engineer ' } // no change

// Object.seal(): Prevent adding or deleting properties, but allow changing existing ones. --> It seals an object, meaning you can't add or delete properties, but you can still change the existing ones.
 
const user7 = {name : "shweta" , age: 22 , profession : "Software engineer "}
Object.seal(user7)
user7.name = "shweta nigam"    // only updating/change allowed
user7.city = "delhi"          // no entry is allowed
delete user7.profession       // no deletion is allowed
console.log(user7)         // { name: 'shweta nigam', age: 22, profession: 'Software engineer ' }


