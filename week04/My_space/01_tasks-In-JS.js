/* Note:-   How JS handle tasks behind the scenes :-
1. Call Stack +++++++++++++
The call stack is like a to-do list where JavaScript keeps track of what it’s doing right now. It works in a Last In, First Out (LIFO) way, meaning the last task added is the first one to be completed.

ex: -

function task1() {
  console.log("Task 1");
}

function task2() {
    console.log("Task 2");
    task1(); // Call task1 inside task2
}

task2(); // Start with task2

What happens?

task2() is added to the call stack.

Inside task2, task1() is called, so task1() is added to the top of the call stack.

task1() runs first (prints "Task 1"), then it’s removed from the stack.

task2() finishes (prints "Task 2"), then it’s removed from the stack.


*/
function task1() {
  console.log("Task 1");
}

function task2() {
    console.log("Task 2");
    task1(); // Call task1 inside task2
}

task2(); // Start with task2



/*note :- 
2. Task Queue (Callback Queue) +++++++++++++++++
The Task Queue holds tasks that are waiting to be executed. These tasks are usually things like setTimeout callbacks, event listeners, or I/O operations. They only run when the call stack is empty.

ex-

console.log("Start");

setTimeout(() => {
  console.log("Timeout callback");
}, 0);

console.log("End");

What happens?

console.log("Start") runs first (added to the call stack and executed).

setTimeout is encountered. It schedules the callback to run after 0ms, but it doesn’t run immediately. Instead, it’s added to the Task Queue.

console.log("End") runs next.

Once the call stack is empty, the event loop picks the callback from the Task Queue and runs it (console.log("Timeout callback")).
*/
console.log("Start");

setTimeout(() => {
  console.log("Timeout callback");
}, 0);

console.log("End");

/* Note:-
3. Microtask Queue    ++++++++++++++++
The Microtask Queue is for high-priority tasks like Promises (then, catch, finally) and queueMicrotask. These tasks run immediately after the current task finishes, even before the Task Queue.

ex-
console.log("Start");

setTimeout(() => {
  console.log("Timeout callback");
}, 0);

Promise.resolve().then(() => {
  console.log("Promise resolved");
});

console.log("End");

What happens?

console.log("Start") runs first.

setTimeout schedules its callback in the Task Queue.

The Promise’s then callback is added to the Microtask Queue.

console.log("End") runs next.

The call stack is now empty, so the event loop checks the Microtask Queue first and runs the Promise callback (console.log("Promise resolved")).

Finally, the event loop checks the Task Queue and runs the setTimeout callback (console.log("Timeout callback")).
*/
console.log("Start");

setTimeout(() => {
  console.log("Timeout callback");
}, 0);

Promise.resolve().then(() => {
  console.log("Promise resolved");
});

console.log("End");

/*Note:-
4. Event Loop   ++++++++++++
The event loop is like a manager who keeps checking:

Is the call stack empty?
If yes, are there any tasks in the Microtask Queue? Run them first.
If the Microtask Queue is empty, check the Task Queue and run those tasks.

ex-

console.log("Start");

setTimeout(() => {
  console.log("Timeout callback");
}, 0);

Promise.resolve().then(() => {
  console.log("Promise resolved");
});

queueMicrotask(() => {
  console.log("Microtask");
});

console.log("End");

console.log("Start") runs first.

setTimeout schedules its callback in the Task Queue.

The Promise’s then callback is added to the Microtask Queue.

queueMicrotask adds another task to the Microtask Queue.

console.log("End") runs next.

The call stack is now empty, so the event loop checks the Microtask Queue:

Runs console.log("Promise resolved").

Runs console.log("Microtask").

Finally, the event loop checks the Task Queue and runs console.log("Timeout callback").
*/

console.log("Start");     // goes directly in call stack and runs.

setTimeout(() => {
  console.log("Timeout callback");          // goes in Task queue and wait for call stack to be free.
}, 0);

Promise.resolve().then(() => {
  console.log("Promise resolved");  // goes in Microtask queue and wait for call stack to be free but takes priority before Task queue.
});

queueMicrotask(() => {
  console.log("Microtask");   // goes in Microtask queue after promise
});

console.log("End");      // goes directly in call stack and runs           
// start, End, promise resolved, Microtask, timeout callback


// another way 


console.log("Start");     // goes directly in call stack and runs.

setTimeout(() => {
  console.log("Timeout callback");          // goes in Task queue and wait for call stack to be free.
}, 0);

queueMicrotask(() => {
  console.log("Microtask");   // goes in Microtask queue before promise
});

Promise.resolve().then(() => {
  console.log("Promise resolved");  // goes in Microtask queue after microtask
});


console.log("End");      // goes directly in call stack and runs           
// start, End,  Microtask, promise resolved, timeout callback