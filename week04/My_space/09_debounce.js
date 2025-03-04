/*Note:-
🚀 What is Debouncing?
Debouncing is a technique used to limit the execution of a function that is triggered multiple times within a short period. It ensures that the function executes only after a specified delay has passed since the last invocation.

📌 Where is Debouncing Used?
Search bars (delaying API calls while typing)
Window resize events (to avoid excessive function calls)
Button clicks (to prevent multiple clicks triggering the same action)
Form submission (to avoid duplicate submissions)

Example:
If you’re typing in a search box, and it tries to search every time you press a key, it might slow things down. But with debounce, it will wait until you stop typing for a moment before searching. This makes things faster and smoother!

So, debounce is like saying: "Wait until I’m done before doing something!" 😊

🔍 How Debouncing Works Under the Hood
Under the hood, debouncing uses setTimeout to delay function execution. Every time the function is invoked, it clears any previously scheduled timeout before setting a new one.

Step-by-Step Breakdown:
User triggers an event (e.g., typing in a search box).
Existing timeout is cleared (if any).
New timeout is set to execute the function after a delay.
If the user triggers the event again before the delay expires:
The previous timeout is cleared.
A new timeout is set.
The function executes only when the user stops triggering the event for the specified delay.

*/
//💡 Basic Debounce Function
function debounce(fn,delay){
    let timer;
       return function(...args){
       clearTimeout(timer);         // clear the previous timeout
       timer = setTimeout(()=>{
           fn.apply(this,args)
       },delay)
    }
}

function searchQuery(query){
  console.log("searching for: " + query)
}
const debouncedSearch = debounce(searchQuery,500)
debouncedSearch("H");
debouncedSearch("He");
debouncedSearch("Hel");
debouncedSearch("Hell");
debouncedSearch("Hello");














//  Example of hitesh sir 
function ptaNhi(fn,delay){
 console.log(arguments)

 let myId;
 return function(...args){
    myId = setTimeout(()=>{
        console.log(arguments)  // no arguments here / because no parameters here
       fn.apply(this, args)  
    },delay)
 }
}

function greet(name){
    console.log(`Hello ${name}`)
}

const myFun = ptaNhi(()=> greet("hitesh"),5000)
myFun()
myFun()
myFun()
ptaNhi("hitesh",5000)
ptaNhi("hitesh",5000)