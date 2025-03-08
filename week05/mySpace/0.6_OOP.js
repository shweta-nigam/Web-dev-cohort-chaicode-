//++++++++++++++++++++     OOP in js

// Object-oriented programming is about modeling a system as a collection of objects, where each object represents some particular aspect of the system.

// An object provides a public interface to other code that wants to use it but maintains its own private, internal state; other parts of the system don't have to care about what is going on inside the object.

// On its own, a class doesn't do anything: it's a kind of template for creating concrete objects of that type. 

// 1. Objects are like toys!
// Think of an object as a single toy. For example, let’s say we have a toy car. This car has:
// Properties: Color (red), wheels (4), size (small).
// Actions: Drive, honk, stop.
// In JavaScript, we can create this toy car like this:

let toyCar = {
    color : "red",
    wheel  : 4,
    size  : "small",
    drive : function(){console.log(" Vroom Vroom!")},
    honk  : function(){console.log("Beep! Beep!")}
}
// ow, toyCar is an object that has properties and actions!
// But if we have to make hundreds of such cars that it such a bother. That's why need a blueprint( a factory!)

// 2. Classes are like toy blueprints!
// What if we want to make many toy cars? Instead of building each one from scratch, we can use a blueprint (called a class) to make them quickly.
// Here’s how we create a blueprint for a toy car:

class ToyCar {                      // pascal casing
    constructor(color, wheel, size){
        this.color = color,
        this.wheel = wheel,
        this.size = size
    }

    drive() {console.log("vroom vroom!")}
    honk() {console.log("Beep Beep!")}
}
// Now, we can use this blueprint to create as many toy cars as we want:

const car1 = new ToyCar("purple", 4, "big")
console.log(car1)               // ToyCar { color: 'purple', wheel: 4, size: 'big' }
const car2 = new ToyCar("pink", 6, "bigger")
console.log(car2)                //  ToyCar { color: 'pink', wheel: 6, size: 'bigger' }

car1.drive()     // vroom vroom!
car2.honk()      //     Beep Beep!

// 3. Inheritance is like sharing toy features!
// Imagine you have a toy race car that’s just like a regular toy car but with extra features, like a turbo boost. Instead of building it from scratch, you can inherit all the features of the regular car and just add the new stuff.

class RaceCar extends ToyCar {
    constructor(color, wheel , size, turbo){
        super(color,wheel,size)        // uses ToyCar blueprint
        this.turbo = turbo  
    }
   boost(){console.log("Zoom zoom! Turbo activated!")}
}

let myRaceCar = new RaceCar("navy-blue", 10, "medium" , true)
console.log(myRaceCar)             // RaceCar { color: 'navy-blue', wheel: 10, size: 'medium', turbo: true }

myRaceCar.boost()        // Zoom zoom! Turbo activated!
myRaceCar.drive()        //  vroom vroom!

// 4. Encapsulation is like hiding toy secrets!
// Sometimes, you don’t want everyone to know how your toy works inside. For example, maybe the toy car has a secret battery. You can hide the battery and only allow certain actions (like charging) to access it.

class ToyCar{
    #battery = 100     // Secret battery level

    drive(){
        if(this.#battery > 0){
            console.log("Vroom Vroom!")
            this.#battery-=10
        } else {
            console.log("out of battery")
        }
    }

    charge(){
        this.#battery = 100
        console.log("Battery is full charged.")
    }
} 

let myNewToyCar = new ToyCar();
myNewToyCar.drive()       // vroom
myNewToyCar.charge()         // Battery is fully charged.


// 5. Polymorphism is like toys that can do many things!
// Imagine you have a toy that can act like a car, a boat, or even a plane! This is called polymorphism—when one thing can take many forms.

class Toy {
    play(){console.log("Playing with the toy")}
}

class ToyCar extends Toy {
    play(){console.log("Playing with the toy car.")}
}

class ToyPlane extends Toy{
    play(){console.log("Flying the toy plane")}
}

let myCar = new Toy()
myCar.play()              //Playing with the toy
 
let myCar1 = new ToyCar()
myCar1.play()         // Playing with the toy car.

let myCar2 = new ToyPlane()
myCar2.play()          // Flying the toy plane


// Summary:
// Objects are like toys with properties and actions.

// Classes are blueprints for making toys.

// Inheritance lets you share features between toys.

// Encapsulation hides the secrets of your toys.

// Polymorphism lets toys do many things.