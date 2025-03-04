// ++++++++++++  promise in Js         +++++++++
// The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.
// note:-
// 1.  if your error handling code is the same for all steps, you can attach it to the end of the chain.
// 2.  It is important to always return promises from then callbacks, even if the promise always resolves to undefined.
// 3.  A Promise helps JavaScript handle things that take time, like fetching data from the internet, reading files, or waiting for user actions.
// ex:-

let pizzaOrder = new Promise((resolve,reject) => {
    let pizzaReady = true; // try with false for promise reject

    setTimeout(()=>{
        if(pizzaReady){
            resolve ("Pizza is here! 🍕");
        } else reject ("Sorry, we ran out of ingredients! 😢")
    }, 3000)
})

pizzaOrder
    .then((message) => console.log(message))
    .catch((error)=> console.log(error))



/*Note:-
How Promises Work Behind the Scenes in JavaScript
JavaScript is single-threaded, meaning it executes one thing at a time. But with Promises, it can handle long-running tasks (like fetching data) without stopping the entire program.
Step-by-Step Execution of Promises in JavaScript;

1.Promise is Created (Pending State)

When we create a Promise, it starts in the pending state.
It contains an executor function that takes two callbacks: resolve (for success) and reject (for failure).
JavaScript does not execute the code inside the promise immediately; it waits for it to be resolved or rejected.

2.Promise Moves to Microtask Queue

When resolve() or reject() is called, the Promise moves to the Microtask Queue.
Unlike setTimeout (which goes into the Callback Queue), Promises have higher priority and are executed before regular callbacks.

3.Event Loop Executes the Promise Callback

The Event Loop constantly checks if the Call Stack is empty.
When the Call Stack is free, the Event Loop moves tasks from the Microtask Queue to the Call Stack for execution.
This ensures then() and catch() are executed only when JavaScript is ready.

ex-
*/  


console.log(" 1 start"); // prints first

const myPromise = new Promise((resolve, reject) => {
  console.log("2 Inside promise"); // prints immediately during promise creation
  setTimeout(() => {
    resolve("4 promise resolved"); // prints after 2 seconds
  }, 2000);
});

myPromise.then((message) => console.log(message));

console.log("3 End"); // prints immediately after promise creation


// Key Takeaways
// ✔️ Promises allow JavaScript to handle asynchronous tasks efficiently.
// ✔️ The then() and catch() methods go into the Microtask Queue, which runs before the Callback Queue.
// ✔️ The Event Loop ensures that JavaScript does not freeze while waiting for slow tasks like fetching data or reading files.


// Another ex:-


