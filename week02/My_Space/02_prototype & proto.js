/*Note:-
What is prototype?
Imagine you're building toy robots with your friends. You create a master robot with cool abilities like dancing, singing, and talking. Now instead of building each robot from scratch, you just make copies of the master robot. All these new robots will know how to dance, sing, and talk because they learned it from the master robot.

In JavaScript, the master robot is the prototype.

Why Do We Need prototype?
Suppose you have 100 robots. Without a prototype, you would have to teach each robot how to dance separately—what a waste of time! But with prototypes, the robots can just "inherit" these skills from the master robot.

In programming, this helps us write less code and share features among different objects.

What is __proto__?
Think of __proto__ as the invisible memory link that connects a robot back to its master. This link tells the robot, "If you don't know how to do something, go ask the master!"

So if you ask a robot to dance and it doesn't have that skill directly, it will check its __proto__ to find the master robot and get the instructions.

Why Do We Need __proto__?
It helps JavaScript objects look for missing properties or methods in their prototype chain. Without __proto__, objects wouldn't know how to share or inherit features.

Simple Recap:
Prototype: Like the master robot with all the instructions.
__proto__: A magical link that helps new robots ask the master for instructions.
Why: Saves time, shares knowledge, and keeps things neat!  
*/

// Example:
// Here’s a toy version of code to make it fun:


// Master robot (prototype)
function Robot() {}
Robot.prototype.dance = function () {
  console.log("I'm dancing!");
};

// Copy of the master robot
let robot1 = new Robot();
robot1.dance(); // Output: I'm dancing!

// `__proto__` is the link back to the master
console.log(robot1.__proto__ === Robot.prototype); // true