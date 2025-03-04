// How Does JavaScript Work Without async/await?
// If you use Promises, it looks like this:
orderPizza()
.then((pizza)=> eatPizza(pizza))
.catch((err)=> console.log("Something went wrong" + err) )

// But we have even a better way to write it.
// This is better than callback hell, but we can make it even simpler with async/await.

async function getPizza(){
    try {
        let pizza = await orderPizza();  // // Wait for the pizza to arrive
        eatPizza(pizza)   // when it arrives eat it!
    } catch (err){
        console.log(err)
    }   
}
/*Note
Working Behind async/await in JavaScript
async function → This tells JavaScript that the function will use await.
await → It pauses the code inside the function until the promise is resolved.
No Callbacks Needed → The code looks clean and easy to understand.
Error Handling → We use try...catch instead of .catch() for better readability.
*/

// another ex:-
fetch("https://api.example.com/data")
.then((response)=> response.json())
.then((data)=> console.log(data))
.catch((err)=> console.log(err))

// With async/await (cleaner code)

async function fetchData (){
    try{
        let response = await fetch ("https://api.example.com/data")
        let data = await response.json()
        console.log(data)
    } catch(error){
        console.log(error)
    }
}
fetchData()

// Conclusion
// async/await makes code simpler and easy to read.
// It pauses execution until a promise is resolved.
// It works just like waiting for your pizza to arrive before eating! 🍕
