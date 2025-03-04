//
let myHeroes = ["thor","spiderman"]

let heroPower = {
    thor : "hammer",
    spiderman : "sling",

    getSpiderPower : function(){
        console.log(`Spidy power is ${this.spiderman}`)
    }
}

Object.prototype.hitesh = function(){
    console.log(`hitesh is present in all objects`)             // This method to all objects 
}
myHeroes.hitesh()      // hitesh method available to array 
heroPower.hitesh()      // hitesh method available to object


//what happens when we give method to array and not to all objects ?
// Then will it be available all objects or only to array :-

Array.prototype.myArr = function(){
    console.log(`available to only to arrays`)
}
myHeroes.myArr()                    //available to only to arrays - works fine!
// heroPower.myArr()            // error: as method available to only arrays


//++++++++++++++++++++       Prototype inheritance           >>>>>>>

const user = {
    name : "chai",
    email : "chai@gmail.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable : false
}

const TASupport = {
    makeAssignment : 'JS assignment',
    fullTime : true,
    __proto__ : TeachingSupport                  // setting properties of teachingSupport to TASupport
}

Teacher.__proto__ = user        // Now teacher can also use property of user

// This is what we call prototypal inheritance. One object accessing property and method of another object.
// This syntax is consider old now.


//++++++++++++++++          modern Syntax   

Object.setPrototypeOf(TeachingSupport,Teacher)

let anotherUseName = " ChaiAurCode            "
String.prototype.trueLength = function(){
    console.log(`${this}`)                            //  ChaiAurCode
    console.log(`${this.name}`)                          // undefined  // we haven't defined name here 
    console.log(` True length is:${this.trim().length}`)          // True length is:11
}

anotherUseName.trueLength()


//context of this keyword:-

"shweta".trueLength()                  // console.log(`${this}`) = shweta
"phone".trueLength()                   // console.log(`${this}`) = phone
"coding".trueLength()                  // console.log(`${this}`) = coding
