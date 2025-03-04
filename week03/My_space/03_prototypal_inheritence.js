/*Note:-

Inheritance Using Prototypes;
JavaScript uses prototypal inheritance, where objects can inherit properties and methods from other objects.
*/

function Person(name){
    this.name = name
}

Person.prototype.greet = function(){
    console.log( ` Hello ${this.name}`)
}

function Student(name,major){
    Person.call(this,name)     // call the parent constructor
    this.major = major
}

// Inherit from Person's prototype
Student.prototype = Object.create(Person.prototype)
Student.prototype.constructor = Student

Student.prototype.study = function(){
    console.log(`${this.name} is studying ${this.major}`)
}

const student = new Student("Angela", "Computer Science")
student.greet()      // Hello Angela
student.study()      // Angela is studying Computer Science


// Object.getPrototypeOf(obj): Returns the prototype of the specified object.
// Object.setPrototypeOf(obj, prototype): Sets the prototype of the specified object.

const user = { name : "shweta"}
const myPrototype = {
    greet: function(){
        console.log(`hii ${this.name}`)
    }
}
Object.setPrototypeOf(user,myPrototype)
user.greet()  // hii shweta
console.log(Object.getPrototypeOf(user) === myPrototype)          //true