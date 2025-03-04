// polyfill of reduce method :-

const arr = [2,4,6,8]
const newNum = arr.reduce((pv,cv,ci,arr)=>{
console.log(`Previous Value:${pv}, Current Value:${cv}, Current Index:${ci}, Array:${arr}`)
return pv + cv
},10 )
console.log(newNum)            // 30
console.log(arr)              // [2,4,6,8]

/* Note :-
1. reduce method takes 4 parameters (PV, Cv, CI, Array).
2.  When use {} curly braces 'return' keyword is a must.
3.  The reduce() method takes an array and "squishes" it down into a single value.
4. Initial Value (optional): This is the starting value for the accumulator. If you don’t provide it, reduce() will use the first item in the array as the starting value (here 10).
5. Does not mutate original Array.
6. Trow error if array is empty.
*/

// polyfill :-

if(!Array.prototype.reduce){
    Array.prototype.reduce = function(callback,initialValue) {
         let accumulator;
         let startIndex =0 ;

        if(arguments.length >= 2){
            accumulator = initialValue
        } else {
            if(this.length === 0){
                throw new TypeError("'Reduce of empty array with no initial value'");
                
            }
            accumulator = this[0]
            startIndex = 1
        }

        for(let i= startIndex; i < this.length; i++){
            accumulator = callback(accumulator,this[i],i,this)
        }
        return accumulator
       
    }
}

const nums = [1,2,3]
const newNums = nums.reduce((acc,Cv)=> acc + Cv)    // no initial value 
console.log(newNums)      // 6
const newNums2 = nums.reduce((acc,Cv)=> acc + Cv,50)    // with initial value 
console.log(newNums2)   // 56
