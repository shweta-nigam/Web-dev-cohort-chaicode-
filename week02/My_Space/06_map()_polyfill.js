// 2️⃣ polyfill of map()
// map() :-
const cookies = ["circle", "square", "triangle"]
const decoratedCookies = cookies.map((cookie, i, arr)=> {
    return `my sparkle ${cookie} cookie at position ${i} and my array ${arr}`
  }
)
console.log(decoratedCookies)    // new array
console.log(cookies)             // Original array does not change

/*Note:-  To mind things while using map() method.
🌟 1. Always Returns a New Array
map() creates a new array and does not modify the original array.
If you don’t use the returned array, you should consider using forEach() instead.
⚠️ 2. Requires a Return Statement
If you forget the return statement in a map() callback, the new array will have undefined values.
🔄 3. Works on Sparse Arrays
map() will preserve empty slots (holes) in an array.
⏳ 4. Asynchronous map() with Promises
map() does not await promises; use Promise.all() for async operations.
🎯 7. Callback Parameters
The callback takes three parameters:
1.)value (current element)
2.)index (index of the current element)
3.)array (the original array)

*/

if(!Array.prototype.myMap){
    Array.prototype.myMap = function(callback){
      let newArrayForMap = [];
      for(let i = 0; i< this.length; i++){
      const result = callback(this[i],i,this)
      newArrayForMap.push(result)
    }  
       return newArrayForMap;
    }  

}

const colors = ["red", "blue", "pink"]
// const newColor = colors.map((color,i,arr) => {
//     return `my ${color} color at position ${i}, and array: ${arr}`
// })
const newColor = colors.myMap((color,i,arr) => {
        return `my ${color} color at position ${i}, and array: ${arr}`
})
console.log(newColor)