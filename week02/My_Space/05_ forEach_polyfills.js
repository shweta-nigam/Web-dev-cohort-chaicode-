// 1️⃣ polyfill of forEach()

// +++++++++++++forEach :-
const candies = ["red", "blue", "green", "purple"];
candies.forEach((candy, index, array) => {
  console.log(`My ${candy} candy at position ${index}`);
  console.log(`My array: ${array}`);
});
console.log(candies);
/*Note:- 
1. No Break, Continue, or Return
You can't use break, continue, or return to control the loop like you can with for or while loops.
2. Does Not Return a Value
forEach() always returns undefined. If you need a new array, use map().
3. Asynchronous Pitfall
forEach() does not wait for promises to resolve. If you have async operations, use a for...of loop or map() with Promise.all().
4. Iterates Over Sparse Arrays
forEach() skips undefined elements but still visits array holes.
5. Callback Context
The this value can be explicitly set using the second argument of forEach(), but arrow functions ignore this.
6. Performance Considerations
For performance-critical code, for...of or traditional for loops can be faster, especially for very large arrays.
*/

// ++++++++ polyfill of forEach

if (!Array.prototype.forEach) {
  Array.prototype.forEach = function (callback) {
    for (let i = 0; i < this.length; i++) {
      callback(this[i], i, this); // this[i] = element, i = index, this = array
    }
  };
}
/* Note :-
How It Works
-> Array.prototype.forEach: This adds the forEach() method to all arrays.
-> callback(this[i], i, this): This calls the callback function with the current item (this[i]), its index (i), and the array itself (this).
*/
// 🟣 Example of foreach() polyfill:-

if(!Array.prototype.myForEach){
    Array.prototype.myForEach = function(callback){
       for( let i = 0; i <this.length; i++){
              callback(this[i],i,this)
        }
    }
}

const arr = [2,3,4,5,6]
arr.myForEach((num,i,array) => {
    console.log(`My ${num} at ${i} index and my array ${array}`)
})

// Behind the scene :- 
/*
1.Check if myForEach Already Exists

2. Add myForEach to the Array Prototype
-> Array.prototype.myForEach = function(callback) {
Here, we’re adding a new method called myForEach to the Array.prototype. This means all arrays will now have access to this method.

3. Loop Through the Array
for (let i = 0; i < this.length; i++) {
This is where the magic happens! We use a for loop to go through each item in the array.
this refers to the array that myForEach is being called on (e.g., arr in your example).
this.length tells us how many items are in the array.
The callback is the function you pass to myForEach (e.g., (num, i, array) => { ... }).

4. Call the Callback Function
callback(this[i], i, this);

For each item in the array, we call the callback function you provided.
We pass three arguments to the callback:

this[i]: The current item in the array (e.g., 2, 3, 4, etc.).
i: The index of the current item (e.g., 0, 1, 2, etc.).
this: The entire array itself (e.g., [2, 3, 4, 5, 6]).
*/