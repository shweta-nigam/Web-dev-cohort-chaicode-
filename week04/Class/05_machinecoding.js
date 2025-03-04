//negativeIndex




console.log(arr[-1])  // undefined
// concept of proxy in js in machine coding round 

const user = {
    name : "hitesh",
    age: 40,
    password: "123"
}

const proxyUser = new Proxy(user, {
    get(target,prop){
        // console.log(target)
        // console.log(prop)
        if(prop === "password"){
            throw new Error ("Access Denied")
        }
        return target [prop]
    },
    set(target,prop,user){}
});
//some properties we need to hide (here password)
console.log(proxyUser.password)


//length of array = proxy  // how ?? 

// enabling negative index :-
function negativeIndex(arr){
  return new Proxy(arr, {
    get(target, prop){
       const index =  Number(prop)
       if(index < 0){
        return target[target.length + index]
        // 5 + (-2) ? 
       }
       return target[index]
    },
    set(target, prop ,value){
        const index = Number (prop)
        if(index < 0){
            target[target.length + index] = value
        } else {
            target[index] = value
        }
        return true
    }
  })
}
// why not index equal to 0 but less than 0
// arr[-2] = 3



let arr = [1,2,3,4,5,6,7,8,9,10]
negativeIndex(arr)
negativeIndex(arr[-1])
negativeIndex(arr)
console.log(newArr[-1]);
newArr[-1] = 22;
console.log(newArr)


// - Debouncing: Delays a function call until a pause in actions
// - Delaying: Runs a function after a set time
// - Throttling: Limits a function call to a fixed rate

// Note: Proxies do not work with primitive types (string, number, boolean) directly since they are immutable; they must be wrapped in an object

