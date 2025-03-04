/*Note:-
An array in JavaScript is a data structure that allows you to store multiple values in a single variable. 
Arrays are ordered collections of elements, where each element can be of any data type (numbers, strings, objects,
 other arrays, etc.). Elements in an array are accessed using their index, which starts from 0.

*/


//1. Create an array called colors with the values ["red", "green", "blue"]. Use the push() method to add "yellow" to the end of the array. What is the new array?
const colors = ["red", "green", "blue"]
colors.push("Yellow")
console.log(colors)            //[ 'red', 'green', 'blue', 'Yellow' ]
 

// Use the pop() method on the colors array. What is the returned value, and what does the array look like after the operation?
const returnColor = colors.pop()
console.log(returnColor)            // Yellow
console.log(colors)                  // [ 'red', 'green', 'blue' ]

// Use the unshift() method to add "purple" to the beginning of the colors array. What is the new array?
colors.unshift("purple")
console.log(colors)               // [ 'purple', 'red', 'green', 'blue' ]

// Use the shift() method on the colors array. What is the returned value, and what does the array look like after the operation?
const usingShiftMethod = colors.shift()
console.log(usingShiftMethod)                  // purple
console.log(colors)                           // [ 'red', 'green', 'blue' ]

// Given the array let numbers = [10, 20, 30, 40, 50];, use slice to create a new array with [20, 30].
let numbers = [10, 20, 30, 40, 50];
let newNum = numbers.slice(1,3)
console.log(newNum) // [ 20, 30 ]

// Use splice to remove 30 from the numbers array and replace it with 35.

numbers.splice(2,1,35)      
console.log(numbers)          // [ 10, 20, 35, 40, 50 ]

// Use slice to get the last two elements of the numbers array.
const newNum2 = numbers.slice(-2)
console.log(newNum2)             // [ 40, 50 ]

// Use splice to add 15 at the beginning of the numbers array.
numbers.splice(0,0,15)
console.log(numbers)             // [ 15, 10, 20, 35, 40, 50 ]

// 2. Searching and Accessing Elements
// Given the array let numbers = [10, 20, 30, 40, 50];, use the indexOf() method to find the index of 30. What is the result?
let num = [10, 20, 30, 40, 50]
const indexOf30 = num.indexOf(30)
console.log(indexOf30)       // 2

// Use the includes() method to check if the numbers array contains the value 25. What is the result?
const includes25 = num.includes(25)     // false

// Use the find() method to find the first number in the numbers array that is greater than 30. What is the result?
const findGreaterThan30 = num.find(num => num > 30)  
console.log(findGreaterThan30)   // 40
// Use the findIndex() method to find the index of the first number in the numbers array that is greater than 30. What is the result?
const findIndexGreaterthan30 = num.findIndex(num => num > 30)
console.log(findIndexGreaterthan30)        // 3


// 3. Iterating Over Arrays
// Given the array let fruits = ["apple", "banana", "orange"];, use the forEach() method to log each fruit to the console.
let fruits = ["apple", "banana", "orange"]
const fruitsForEach = fruits.forEach((fruit)=> console.log(fruit))

// Use the map() method to create a new array where each fruit in the fruits array is converted to uppercase. What is the new array?
const fruitsToUppCase = fruits.map((fruit)=> fruit.toUpperCase())
console.log(fruitsToUppCase)    // [ 'APPLE', 'BANANA', 'ORANGE' ]

// Use the filter() method to create a new array with only the fruits that have more than 5 letters. What is the new array?
const fruitsWith5Letters = fruits.filter( (fruit)=>  fruit.length > 5)
console.log(fruitsWith5Letters)  // [ 'banana', 'orange' ]

// Use the reduce() method to calculate the total number of letters in all the fruits in the fruits array. What is the result?

const fruitsTotal = fruits.reduce((total,fruit)=> total + fruit.length,0)
// fruits.reduce((total,fruit)=> total + fruit.length)
console.log(fruitsTotal)

// 4. Transforming Arrays
// Given the array let nums = [1, 2, 3, 4, 5];, use the slice() method to create a new array with the elements [2, 3, 4]. What is the new array?
let nums = [1, 2, 3, 4, 5];
const sliceNums = nums.slice(1,4)
console.log(sliceNums)

// Use the concat() method to combine the nums array with another array [6, 7, 8]. What is the new array?
const anotherArr = [6, 7, 8]
const combinedArr = nums.concat(anotherArr,[200,45])   // can combine like this!
console.log(combinedArr)     // [1, 2, 3, 4,  5, 6, 7, 8, 200, 45,]

// Use the join() method to convert the fruits array into a string separated by a hyphen (-). What is the result?

const joinNums = nums.join("-")
console.log(joinNums)           // 1-2-3-4-5
// Use the reverse() method to reverse the order of the nums array. What is the new array?
const reversedNums = nums.reverse()
console.log(reversedNums)        // [ 5, 4, 3, 2, 1 ]

// Use the sort() method to sort the fruits array in alphabetical order. What is the new array?
const myFruitsArr = ["apple", "banana" , "kiwi" , "Dragon fruit"]
console.log(myFruitsArr.sort())  // [ 'Dragon fruit', 'apple', 'banana', 'kiwi' ] // Capital letter (A-Z) to (a-z)

const numbers2 = [25, 4, 300, 10, 50];
console.log(numbers2.sort());      // 10,25,300,4,50


// 5. Advanced Array Methods
// Given the array let mixed = [1, "apple", true, null, 5.5];, use the Array.isArray() method to check if mixed is an array. What is the result?
let mixed = [1, "apple", true, null, 5.5];
console.log(Array.isArray(mixed))    // true;

// Use the splice() method to remove "apple" from the mixed array and replace it with "banana". What is the new array?
const newMixedArr = mixed.splice(1,1,"banana")
console.log(mixed)

// Use the some() method to check if any number in the nums array is greater than 3. What is the result?

const someMethodOnMix = mixed.some((num)=> num > 3)
console.log(someMethodOnMix)  // true
