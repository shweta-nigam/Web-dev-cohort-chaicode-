/*Note 
Currying is a JavaScript technique that breaks down a function with multiple arguments into a series of functions that each take one argument. This technique is named after mathematician Haskell Curry. 

What is Currying? 🤔
Currying is a way to break down a function that takes multiple arguments into a series of functions, each taking one argument at a time.
*/

//  Normal Function (Without Currying)
function add(a,b,c){
    return a + b + c
}
console.log(add(1,2,3))
// 👉 Here, we pass all three numbers at once.


// How Currying Works? 🧙‍♂️
// With currying, instead of passing all arguments at once, we pass one argument at a time.

function add(a){
    return function(b){
        return function(c){
            return a + b + c
        }
    }
}
console.log(add(1)(3)(3))       // 7
//👉 Each function takes one argument and returns another function until all arguments are provided.


function orderMomos(size){
    return function(flavour){
        return function(mainIngredient){
           console.log(`You ordered ${size} sized ${flavour} ${mainIngredient} momos!`)
        }
    }
}

orderMomos("large")("spicy")("chicken")       //You ordered large sized spicy chicken momos!


// Final Summary 🎯
// 1️⃣ Currying breaks a function into smaller functions, each taking one argument.
// 2️⃣ It works like ordering momos – step by step! 🥟
// 3️⃣ It's useful for reusability and cleaner code!