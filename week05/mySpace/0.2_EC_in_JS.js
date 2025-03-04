/* Note:
JavaScript uses an Execution Context (EC) to keep track of function calls and their scope. There are two main types:

Global Execution Context (GEC) → Created when the JavaScript file starts running.
Function Execution Context (FEC) → Created when a function is invoked.

🔹 Step 1: Creation Phase (Memory Allocation)
💡 Before executing the code, JavaScript performs memory allocation in two phases:

🔹 Step 1.1: Create Global Execution Context (GEC)
A Global Execution Context (GEC) is created.
It has two parts:
Memory/Variable Environment (stores variables & functions)
Thread of Execution (executes code line by line)


Nested Functions & Closures:- If a function contains another function, a new FEC is created within an existing FEC.


🚀 Interview Quick Recap
Global Execution Context (GEC)

Created automatically when the script starts.
Holds global variables and functions.
Function Execution Context (FEC)

Created every time a function is called.
Has its own memory and execution thread.
Call Stack

Keeps track of execution contexts.
Functions are pushed when called and popped when completed.
*/