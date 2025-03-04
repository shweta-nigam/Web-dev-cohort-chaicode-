/*
1. What is the difference between __proto__ and prototype?
__proto__:

It is a property of every object that points to the prototype from which the object inherited properties and methods.
It forms the prototype chain for inheritance lookup.
prototype:

It is a property of functions (constructor functions) that is used to set what will become the __proto__ of objects created by that function.
*/
function Car(){}

Car.prototype.drive = function () {
        console.log("Driving....")
    }

const myCar = new Car() 
myCar.drive()  // Driving...
console.log(myCar.__proto__ === Car.prototype)    // true
console.log(Car.prototype)      // { drive: [Function (anonymous)] }

/* Note:- 2
2. Why do we need prototype in JavaScript?
To share methods and properties between multiple instances of objects without duplicating code.
ex:-
*/
// without prototype
function Person(name){
   this.name = name
   this.sayHi = function (){
    console.log(`hi, I'm ${this.name}`)
  }
}

const person1 = new Person("Alice")
const person2 = new Person("John")
console.log(person1)     // Person { name: 'Alice', sayHi: [Function (anonymous)] }
person2.sayHi()    // hi, I'm John
console.log(person1.sayHi === person2.sayHi)     // false  (Person { name: 'Alice', sayHi: [Function (anonymous)] })

//with prototype 

function PersonName(name){
    this.name = name;
}  

PersonName.prototype.sayGreeting = function (){
    console.log(`Hello I'm ${this.name}`)
}

const personName1 = new PersonName("Riy")
const personName2 = new PersonName("Sue")
personName1.sayGreeting()       //  Hello I'm Riy
// console.log(personName2)   // won't give you what you want 
console.log(personName1.__proto__ === personName2.__proto__) //true

/*
Note:- 3
3. Is __proto__ the same as Object.getPrototypeOf()?
They are similar but it's better to use Object.getPrototypeOf() because __proto__ is considered a legacy feature.
ex:-
*/
function Obj(){}
Obj.prototype.gettingObj = function(){
    console.log("I am a Obj ")
}
const myObj = new Obj()
myObj.gettingObj()

console.log(Obj.__proto__)      //  same as below code
console.log(Object.getPrototypeOf(Obj))    // same as above code 

/*Note 
4. Can we change the __proto__ of an object?
Yes, but it’s not recommended for performance reasons.

Example:

const car = { type: "Sedan" };
const electricCar = { battery: "100kWh" };

Object.setPrototypeOf(electricCar, car);

console.log(electricCar.type); // Output: "Sedan"
*/

/*Note:- 
5. What is the prototype chain?
The prototype chain is the mechanism by which JavaScript objects inherit properties and methods.
If a property or method is not found in an object, JavaScript looks up its __proto__, then its parent’s __proto__, and so on until it reaches null.

let obj = {};
console.log(obj.toString()); // Found in Object.prototype


*/

/*Note:-
6. Can every object have a prototype?
No, only functions (constructor functions) have a prototype property. Regular objects do not have it, but they have __proto__.

function MyFunc() {}
console.log(MyFunc.prototype); // {constructor: MyFunc}

const obj = {};
console.log(obj.prototype); // undefined

*/
/*Note:-
7. What happens if you set prototype = null?
The object will not inherit anything, even basic methods like toString() will be missing.
ex:-
*/
function Cars(){}
Cars.prototype = null

let myCars = new Cars();
console.log(myCars.toString())    // [object Object]  why this answer ?

/*Note:- 
8. What’s an example of breaking the prototype chain?
If you set __proto__ to null, inheritance stops.

Example:

const obj = Object.create(null);
console.log(obj.toString); // undefined
*/
/*Note:-
9. How does hasOwnProperty() relate to the prototype?
hasOwnProperty() checks if a property belongs directly to the object, not inherited from the prototype.

ex:-
*/
const person = {name: "Alice"}
console.log(person.hasOwnProperty("name"))        // true
console.log(person.hasOwnProperty("toString"))      // false 
/*Note:-
10. What’s a practical use of prototypes in real projects?

Prototypes are commonly used to:

Share methods in libraries (Array.prototype.map, etc.)
Extend objects without duplicating code
Build custom objects in frameworks
*/