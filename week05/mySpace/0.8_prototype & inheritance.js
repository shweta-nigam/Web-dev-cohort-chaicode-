// Prototypes are the mechanisms through which JS objects inherit properties from one another.
// Every object in JS has some built-in property, which is called its prototype.
// The prototype is object itself which have their own prototype( built-in property and methods) which is known as Prototype chain.
//  The chain ends when we reach a prototype that has null for its own prototype.
/**Note:-
Note: The property of an object that points to its prototype is not called prototype. Its name is not standard, but in practice all browsers use __proto__. The standard way to access an object's prototype is the Object.getPrototypeOf() method.
*/

const myObject = {
    fName : "Shweta",
    Lname : "Nigam",
    age : 22,
    getname : function(){console.log (`${this.fName} ${this.Lname}`)}
}

const myObj2 = Object.create(myObject) 
myObj2.getname() // Shweta Nigam


const myObj3 = {                    //  same as -> const myObj3 = Object.create(myObject) 
__proto__ : myObject,
}


console.log(myObj2.fName)  // Shweta
myObj2.__proto__.fName = "Hack"
console.log(myObj2.fName)    // Hack
myObj2.fName = "Hacking got hacked"
console.log(myObj2.fName)     // Hacking got hacked  (chill just changing name)

// Note:- Object.create() sets an objects prototype
// Here we create an myObject, which has a getname() method. We then use Object.create() to create a new object with myObject as its prototype. Now we can call getname on the new object, and the prototype provides its implementation.



//  +++++ prototypal inheritance :-

const p1 = {
  call_p1 : function() {console.log("I am inside p1")}
}
const p2 = {
  call_p2 : function() {console.log("I am inside p2")},
  __proto__ : p1,                                        //inheriting properties of object p1
}
const p3 = {
  call_p3 : function() {console.log("I am inside p3")},
  __proto__ : p2,                                        //  inheriting properties of object p1, as well as p1 since p2 is inheriting properties from p1
}

p3.call_p2()         // I am inside p2  // p3 can now access p2 call because of the inheritance.
p3.call_p1()         //I am inside p1    // p3 can also access p1 call because of the inheritance.

/*Note:-  How JS look for properties  (using above ex   -- p3.call_p1()  )
1.  when we try to access call_p1()  JS start first looking for it in:
In p3 → Not found ❌
In p3.__proto__ (which is p2) → Not found ❌
In p2.__proto__ (which is p1) → found ✅


now if JS encounter a property which dose not exist this is how it start looking for it (ex pickUp()):
In p3 → Not found ❌
In p3.__proto__ (which is p2) → Not found ❌
In p2.__proto__ (which is p1) → Not found ❌
In p1.__proto__ (which is Object.prototype) → Not found ❌
Error: pickUp() is not a function ❌
*/

