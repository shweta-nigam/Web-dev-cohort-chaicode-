/*Note:-
1.Default behavior of JS is prototype
2. parent of Object is null
3. everything in JS at the end is  object such as String, Array etc. Therefore all the properties and methods available to object is also available to others. Though some are usable and some are not.
4. function is a special case , function is a function as well a object.
5. In a way JS never give up it keeps looking for the property in all the prototype chain until the end of the world(Object) where it is null.
6. We can use getPrototype and setPrototype to increase the list of prototype.It ejects our custom made functionality to prototype, which we can use.
7. keyword 'this' is also related to prototype. this represent current context.  ( this = jisne bhi pucha sirf uska batao )
8. As 'prototype' keyword is almost used 99% times , JS gives us liberty to directly use the method without having to use 'prototype keyword. js handle it behind the scene. 
9. When you add new property to function we use very important keyword 'new' to tell it that we have added something. So even though property get attach to the function we can only access it using 'new' keyword.
*/

function multiplyBy5(num){
    return num * 5
}
multiplyBy5.power = 2
console.log(multiplyBy5(5))
// console.log(typeof multiplyBy)            // function
console.log(multiplyBy5.power)               // 2
console.log(multiplyBy5.prototype)           // {}



function createUser(username, score){
    this.username = username
    this.score = score
}

createUser.prototype.increment = function(){
    this.score++
}
createUser.prototype.printMe = function(){
    console.log(`Price is ${this.score}`)
}

// const chai = createUser("chai",25)    // error; Cannot read properties of undefined   // 
const chai = new createUser("chai",25)    // Price is 25
const tes = new createUser("tea",250)
chai.printMe()

/*Note 
What happens behind the scene when new keyword is used:-

A new object is created : The new keyword initiates the creation of a new Javascript object.

A prototype is linked : The newly created object gets linked to the prototype property of the constructor function.
This means that it has access to properties and method defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JS assumes this, the newly created object, to be the intended return value.

The new object is returned : After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.
*/