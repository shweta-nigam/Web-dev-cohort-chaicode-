//            DATE: 25th MARCH 2025

// Question 1:             -----------------------------------------------------------------------------
// What will the following code output?
console.log(typeof null);
// A) "null"
// B) "object"
// C) "undefined"
// D) "None"

// In JavaScript, typeof null returns "object". This is actually a well-known bug in JavaScript that has existed since the first version.

// Explanation:
// null is a primitive value in JavaScript, but due to a historical mistake, typeof null returns "object" instead of "null".

// The reason behind this is that, in early versions of JavaScript, values were stored in a way where objects had a specific binary tag (000). null also had the same binary representation, leading to this incorrect classification.

// If you want to correctly check for null, use:
const value = null;
console.log(value === null); // true // This is the best way to check for null

// Contrast with Other Checks:
// value === undefined: Checks for undefined.

// value == null: Checks for both null or undefined.

// !value: Checks for any falsy value (null, undefined, 0, "", false, etc.).

// This strict check is preferred when you need to distinguish null from other falsy values.

// Question 2:     ---------------------------------------------------------------
// What will be the output of the following code?

console.log(1 + "1" - 1);
// A) "10"
// B) 1
// C) 10
// D) "11"

// Explanation:
// Let’s break it down step by step:

// console.log(1 + "1" - 1);
// 1 + "1" → JavaScript concatenates the number 1 with the string "1", resulting in "11".

// 1 + "1" → "11" (string)

// "11" - 1 → JavaScript converts the string "11" to a number because of the - operator.

// "11" - 1 → 11 - 1 → 10

// console.log(10); // Output: 10
// Key Takeaways:
// The + operator concatenates when one operand is a string.

// The - operator forces type conversion from string to number.

// No worries! You're learning!

console.log(typeof ("1" + 1 - 1)); // string

// Why Not NaN?
// NaN occurs when an arithmetic operation cannot produce a valid number, such as:

// "hello" - 1 → NaN (can't convert "hello" to a meaningful number).

// undefined - 1 → NaN.

// Math.sqrt(-1) → NaN.

// In your case, "11" is successfully converted to 11, so the subtraction works.

// When to Expect NaN?
// You'll get NaN in cases where:

// Arithmetic fails:

console.log("hello" - 1); // NaN
console.log(undefined * 2); // NaN
// Parsing invalid numbers:

console.log(parseInt("abc")); // NaN
// Indeterminate math operations:

console.log(0 / 0); // NaN
console.log(Infinity - Infinity); // NaN
// Key Takeaways:
// "1" + 1 - 1 → "11" - 1 → 10 (a number).

// NaN appears when an operation cannot produce a meaningful number.

// Use isNaN() or Number.isNaN() to check for NaN explicitly.

// Example with NaN:

console.log(typeof ("hello" - 1)); // "number" (but value is NaN)
console.log("hello" - 1); // NaN
console.log(typeof NaN); // "number" (NaN is technically a numeric type!)
// Yes, typeof NaN is "number" because NaN is a special numeric value representing "Not a Number." This is a quirk of JavaScript.



// Question 3:  --------------------------------------------------------------
// What will be the output of the following code?

let x = [];
console.log(x == false);
// A) true
// B) false
// C) TypeError
// D) undefined

// x is an empty array [].

// The == (loose equality) operator performs type coercion.

// JavaScript converts both operands to a common type:

// false is treated as 0 in a numeric context.

// [] (an empty array) is converted to an empty string "", which is then converted to 0.

// Since 0 == 0 is true, the expression evaluates to true.

// Key Takeaways:
// In loose equality (==), JavaScript tries to convert both values to a common type.

// Empty arrays [] are treated as false in loose equality, but they are true in a Boolean context (Boolean([]) → true).

// If we use strict equality (===), it would be false:

// console.log([] === false); // false (no type coercion)



// Question 4:      ----------------------------------------------------------------
// What will the following code output?

console.log(typeof NaN);
// A) "undefined"
// B) "number"
// C) "NaN"
// D) "object"

// Explanation:
// NaN stands for "Not-a-Number", but surprisingly, its type is "number".

// This is because NaN is actually a special value that represents an invalid number computation.

// Any operation that doesn’t produce a valid number (like dividing 0/0 or trying to parse "abc" as a number) results in NaN.

// Example:

console.log(typeof NaN); // "number"
console.log(NaN + 5);    // NaN (any operation with NaN results in NaN)
console.log(isNaN("Hello")); // true (because "Hello" cannot be converted to a valid number)
// Key Takeaways:
// NaN is a number type but represents an invalid or undefined number.

// It is the only value in JavaScript that is not equal to itself: *********

console.log(NaN === NaN); // false
// (This is why isNaN() exists—to check for NaN values.)



// Question 5:    -------------------------------------------------------------------------------
// What will the following code output?

let a = { x: 1 };
let b = a;
b.x = 2;
console.log(a.x);
// A) 1
// B) 2
// C) undefined
// D) Error

// Explanation:
// Let’s break down the code:

// Outputs 2
// a is an object { x: 1 }, and b is assigned the same reference as a.

// Since objects are stored by reference in JavaScript, modifying b.x also affects a.x, because both a and b point to the same object in memory.

// When we log a.x, it prints 2, because b.x = 2 changed the original object.

// Key Takeaways:
// Primitive values (like numbers, strings, and booleans) are stored by value.

// Objects (including arrays and functions) are stored by reference.

// Assigning an object to another variable does not create a copy, but rather creates a reference to the same object.

// How to create a copy instead of a reference?
// If you want to copy an object without affecting the original, use the spread operator ({ ...a }):

// let a = { x: 1 };
// let b = { ...a }; // Creates a shallow copy
// b.x = 2;
// console.log(a.x); // Still 1, because b is a separate object now



// Question 6:       -------------------------------------------------------------------------------
// What will be the output of the following code? 

console.log([] + []);
console.log({} + []);
console.log([] + {});
// A) "", "[object Object]", "[object Object]"
// B) "[]", "[object Object]", "[object Object]"
// C) 0, NaN, NaN
// D) Error

// Explanation:
// 1️⃣ [] + [] → "" (empty string)
// In JavaScript, when using the + operator with arrays, JavaScript first converts them into strings.

// An empty array [] converts to an empty string "".

// "" + "" results in an empty string "".

// 2️⃣ { } + [] → "[object Object]"
// Why?

// {} is an empty block of code (not an object).

// + [] converts [] to an empty string "".

// Since {} is ignored as an empty block, it effectively runs:

// +[]; // This results in 0
// But if you do ({} + []), now {} is treated as an object, and {} + [] results in "[object Object]".

// 3️⃣ [] + {} → "[object Object]"
// Here, [] (empty array) is converted to "" (empty string).

// {} (empty object) is converted to the string "[object Object]".

// So, "" + "[object Object]" results in "[object Object]".

// Key Takeaways:
// + with arrays converts them to strings.

// + with objects converts them to "[object Object]".

// {} alone is treated as a block, so {} + [] acts differently from [] + {}.

// What is [object Object] in JavaScript?
// [object Object] is the default string representation of a JavaScript object when you try to convert it to a string (e.g., using toString() or string concatenation).

// When Are You Likely to See [object Object]?
// You’ll encounter this in these common scenarios:

// Implicit String Conversion (Concatenation with +)

// console.log("Object: " + {}); // "Object: [object Object]"
// Using alert() or console.log() on an Object

// alert({}); // Shows "[object Object]"
// Accidental Stringification Instead of JSON

const data = { id: 1 };
localStorage.setItem("user", data); // Saves as "[object Object]" instead of JSON!
// Correct way:
localStorage.setItem("user", JSON.stringify(data)); // '{"id":1}'
// Default toString() Behavior

console.log({}.toString()); // "[object Object]"

// Why "o" vs "O" in [object Object]?
// The lowercase object refers to the type of the value (an object).
// The uppercase Object refers to the constructor name (Object).

// Better ways to inspect objects:
// JSON.stringify(obj)
// console.dir(obj)
// Object.prototype.toString.call(obj) (for type checking).


// Question 7:   -------------------------------------------------------------------------------
// What will be the output of the following code?

console.log(!!"false" == !!"true");
// A) true
// B) false
// C) undefined
// D) Error

// Explanation:
// Let's break down the expression:

console.log(!!"false" == !!"true");
// 1️⃣ What does !! do?

// The double negation (!!) converts a value into its Boolean equivalent.

// !!value is the same as Boolean(value).

// 2️⃣ Evaluating "false" and "true" as Booleans

// Both "false" and "true" are non-empty strings, and in JavaScript, any non-empty string is true when converted to Boolean.

// So:

// !!"false"  → true
// !!"true"   → true
// 3️⃣ Comparing the results:

// Since !!"false" evaluates to true and !!"true" evaluates to true, we get:

true == true  // true
// ✅ Final Output:

console.log(!!"false" == !!"true"); // true
// Key Takeaways:
// All non-empty strings (even "false") are truthy in JavaScript.

// !!value converts a value into its Boolean equivalent.

// "false" as a string is not the same as false (Boolean).



// Question 8:   -----------------------------------------------------------------------------
// What will be the output of the following code?

console.log(0.1 + 0.2 === 0.3);
// A) true
// B) false
// C) undefined
// D) Error

// Explanation:
// Let's evaluate:

// console.log(0.1 + 0.2 === 0.3);
// 1️⃣ Floating-Point Precision Issue

// JavaScript uses the IEEE 754 floating-point standard for numbers, which can cause precision errors.

// 0.1 + 0.2 does not exactly equal 0.3 due to binary representation limitations.

// 2️⃣ Checking the actual value of 0.1 + 0.2
// If we print the result:

console.log(0.1 + 0.2); // 0.30000000000000004
// Instead of exactly 0.3, we get 0.30000000000000004 due to floating-point rounding errors.

// 3️⃣ Comparing with === (strict equality)

// 0.30000000000000004 !== 0.3, so the result is false.

// ✅ Final Output:

console.log(0.1 + 0.2 === 0.3); // false
// How to Fix It?
// To compare floating-point numbers safely, use a small tolerance value (Number.EPSILON):

console.log(Math.abs(0.1 + 0.2 - 0.3) < Number.EPSILON); // true
// Key Takeaways:
// JavaScript cannot precisely represent some decimal numbers due to binary floating-point limitations.

// Avoid strict equality (===) for floating-point comparisons.

// Use Math.abs(a - b) < Number.EPSILON for safe comparisons.



// Question 9:  ----------------------------------------------------------------------------------
// What will the following code output?

console.log([1, 2, 3] == "1,2,3"); 
// A) true
// B) false
// C) TypeError
// D) undefined


// Explanation:

// console.log([1, 2, 3] == "1,2,3"); // true
// 1️⃣ How does JavaScript compare an array with a string?
// The == operator (loose equality) allows type coercion.

// In this case, JavaScript converts the array to a string before comparison.

// 2️⃣ How does an array convert to a string?
// When an array is used in a string context, JavaScript automatically joins the elements with commas.

// This means:

// [1, 2, 3].toString(); // "1,2,3"
// So, [1, 2, 3] becomes "1,2,3" as a string.

// 3️⃣ Comparing the two values
// Now we are comparing:

// "1,2,3" == "1,2,3"; // true ✅
// ✅ Final Output:


console.log([1, 2, 3] == "1,2,3"); // true
// Key Takeaways:
// Arrays automatically convert to strings when used in string comparisons.

// == allows type coercion, meaning different types can be converted before comparison.

// Use === to avoid unwanted conversions:

// console.log([1, 2, 3] === "1,2,3"); // false (strict comparison)
