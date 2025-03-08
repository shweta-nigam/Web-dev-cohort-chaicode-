// +++++++++++       Proxy in JS
// In JavaScript, a Proxy acts as a middleman between an object and its operations (reading, writing, modifying).
// A Proxy in JS lets you intercept and customize operations on objects—like a secret agent controlling every move. 🎭🔥
// A Proxy in JavaScript allows us to intercept and modify object operations like reading, writing, and deleting properties. It acts like a middleman between an object and the outside world.

//Basic proxy syntax:-
const proxy = new Proxy(targetObject, handler);
// targetObject → The original object.
// handler → An object containing "traps" (methods) to intercept operations

//  Example 1: Simple Proxy (Logging Access)  -- getting property and target
// Imagine you have an object, and you want to log every time someone reads its properties.

const user = {
  name: "Shweta",
  age: 22,
  occupation: "software developer",
};

const proxyUser = new Proxy(user, {
  get(target, property) {
    console.log(`Accessing ${property} an its value is: ${target[property]}`);
    return target[property];
  },
});

// console.log(proxyUser.name); // name is property   // target is [object Object]  //  target[property] is Shweta.
// console.log(proxyUser.age);

// Example 2: Validating Inputs (Setter Trap)

const bankBalance = {
  balance: 1000,
};

const proxyBankBalance = new Proxy(bankBalance, {
  set(target, property, value) {
    if (typeof value !== "number") {
      // throw new Error (" balance should be in number!")
      console.error("balance should be in number!");
      return false;
    } else if (value <= 0) {
      // throw new Error ("Balance can only be a positive integer!")
      console.error("Balance can only be a positive integer!");
      return false;
    } else {
      target[property] = value;
      console.log(`Successfully set ${property} to ${value}`);
      return true;
    }
  },
});

proxyBankBalance.balance = "abc";  // balance should be in number!
proxyBankBalance.balance = -60;      // balance should be in number!
proxyBankBalance.balance = 60000;          //  Balance can only be a positive integer!
console.log(proxyBankBalance)
