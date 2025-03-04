// Higher-order array methods are functions that take other functions as arguments (callbacks) and allow us to manipulate arrays efficiently.
// 1️⃣ forEach() – Loop Through an Array
// 📌 Executes a function for each element, but does NOT return a new array.
// ✅ Example :
const fruits = ["apple", "banana", "orange"];
fruits.forEach((fruit,index)=> console.log(`The ${fruit} at ${index} index`) ) //  The apple at 0 index (and so on)
fruits.forEach((fruit,index)=> console.log(`The ${fruit} at ${index + 1} position`) ) // The apple at 1 position.
// 🔹 Use Case: When you need to iterate over an array without modifying it.

// 2️⃣ map() – Transform an Array
// 📌 Creates a new array by applying a function to each element.
// ✅ Example:
const numbers = [2, 4, 6];
const squ = numbers.map((num)=> num * num)
console.log(squ)        // [ 4, 16, 36 ]
// 🔹 Use Case: When you want to modify each item and create a new array.

// 3️⃣ filter() – Extract Specific Elements
// 📌 Creates a new array with elements that pass a condition.
// ✅ Example:
const ages = [15, 22, 30, 17, 18];
const ageGreaterThan18 = ages.filter((age) => age >= 18)
console.log(ageGreaterThan18)         // [ 22, 30, 18 ]
// 🔹 Use Case: When you need to filter out elements based on a condition.

// 4️⃣ reduce() – Accumulate Values
// 📌 Reduces an array to a single value (sum, product, etc.).
// ✅ Example: Sum of all numbers
const numbers2 = [10, 20, 30];
console.log(numbers2.reduce((acc,num)=> acc+num ,0))     //60
// 🔹 Use Case: When you need to calculate a single value from an array (sum, average, etc.).

// 5️⃣ find() – Find the First Matching Element
// 📌 Returns the first element that satisfies a condition.
// ✅ Example:
const users = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 25 }
];
const findUser = users.find((user)=> user.age === 25)
console.log(findUser)         // { name: 'Alice', age: 25 }
//  Use Case: When you want only the first matching element.

// 6️⃣ findIndex() – Get the Index of the First Match
// 📌 Returns the index of the first element that matches a condition.
// ✅ Example:

const numbers3 = [5, 10, 15, 20];
console.log(numbers3.findIndex((num)=> num > 10)) // 2 (index )
// const num = numbers3.indexOf((num)=> num > 10)
// console.log(num)
// 🔹 Use Case: When you need to find where an element is located.



 