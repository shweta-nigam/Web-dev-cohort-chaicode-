// Destructuring with Objects :-
/*
 Note:- 
Object destructuring is a way to extract properties from an object into variables.
It’s useful for saving time, writing cleaner code, and working with only the data you need.
You can rename variables, set default values, and even destructure nested objects.

*/

const person = {id: 1, name: "shweta", age: 22, address: { country: "India" ,city: "delhi"}}
const {name, age, address : {country, city}} = person
console.log(name)   // shweta
console.log(city)  // delhi 
console.log(address) // not defined

// Note:- Here in the above example you can see that to get the access of value of the object "person" you do not have to write person.name,person.address.city, person.address.country , this code is too repetitive. Destructuring objects makes code cleaner and easy to read.

//Renaming Variables:-
const user = {id: 1, name2: "shweta", age2: 22, address2: { country2: "India" ,city2: "delhi"}}
const {name2 : userName, age2 : userAge, address2 : {country2, city2}} = user

console.log(userName)    //shweta
console.log(country2)     //India
//
const fruits = {aggregate : {strawberry : "12", raspberries : "23" }, simple : {apple: "34", peaches: "56"}}
const {aggregate, simple} = fruits
console.log(aggregate)     // { strawberry: '12', raspberries: '23' }
console.log(simple)        // { apple: '34', peaches: '56' }

// Default Values:-
// If a property doesn’t exist in the object, you can provide a default value.

const car = {model: "tesla", color : "red", speed: 500, assccesory : {mirror: "2", window : "4"} }

// Destructuring with default values
const {model, color, assccesory: {mirror, window}, year = 2025} = car
console.log(year)       // 2025
console.log(color)      // red
console.log(mirror)      // 2

// Destructuring,Computed Property Names,Spread Operator,Object Cloning,Prototypes and Inheritance,Classes and OOP,
// Object Patterns for Real-World Applications,JSON (JavaScript Object Notation).
// Computed Property Names: Dynamically create property names. -->  Allows you to use an expression (like a variable) as the name of an object property.

const carName = "lamborghini"
const carSpeed = "350km/h"

const carDetails = {
    [carName] : carSpeed
}
console.log(carDetails)             // { lamborghini: '350km/h' }

const myCarDetails = {
    carName : carSpeed
}
console.log(myCarDetails)            // { carName: '350km/h' }  , power of []
/*
Note :- 
* Why Use [ ] for Keys but Not for Values? in above ques
When you use [ ] around a key in an object, it means you’re using a computed property name. This allows you to dynamically set the key based on the value of a variable or expression.
* Why Not Use [ ] for Values?
Values in an object don’t need [ ] because they are always evaluated directly. You can use variables, expressions, or literals as values without any special syntax.
*/


// Spread Operator: Combine arrays or objects easily.

const obj1 = { color: "blue", qty : "500",}
const obj2 = { nextColor: "lavender", nestQty : "100",}
const combine = { ...obj1, ...obj2}
console.log(combine)       // { color: 'blue', qty: '500', nextColor: 'lavender', nestQty: '100' }

// Object Cloning: Create copies of objects (shallow or deep).

//shallow copy :- 
const original = {a:1, b:2}
const copy=  {...original}
console.log(copy)

// Deep copy :-
const originalObj = {a:1,b:2,c:7}
const clone = JSON.parse(JSON.stringify(originalObj))  // why do we this ?  Because objects naturally gets stored in heap and for that reason if changes are made in clone copies original object value also gets changes -- here in this line we use JSON.stringify() method which makes objects to JavaScript Object Notation (JSON) string( for ease just think of it is like string) , now that it is string its get store in stack memory and when that happens reference to this objects changes and now change in copy does not affect the original object.
console.log(clone)
//(Why it’s useful: Prevents unintended changes to the original object).



// Prototypes and Inheritance: Share properties and methods between objects.

// Classes and OOP: Organize code using object-oriented principles.

// Object Patterns: Use patterns like Factory Functions for real-world apps.

// JSON: Store and exchange data in a lightweight format.
