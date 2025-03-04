// Core Object Concepts : -
// Object Creation;
// Literal syntax: { key: value }
const obj = {name : "john", age : 19, address : {country : "usa", city : "LA"}}
// Object.create() and constructors         // constructors ? and use of obj.create() ?
const obj2 = Object.create(obj)

// Accessing Object Properties
// Dot notation: obj.property
console.log(obj.address.country)       // usa

// Bracket notation: obj["property"]
console.log(obj.address["city"])        // LA
console.log(obj["address"]["city"])     // LA

// Updating and Deleting Properties

// Adding/updating: obj.key = value;
obj["address"]["city"] = "Austin" 
console.log(obj.address.city)          // Austin

// Deleting: delete obj.key;

delete obj.address.city 
console.log(obj)      // { name: 'john', age: 19, address: { country: 'usa' } }