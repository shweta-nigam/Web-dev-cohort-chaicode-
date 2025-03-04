// polyfill of filter() method :-
// filter () method :-
const nums = [1,2,4,5,8]
const numsDivBy2 = nums.filter((el,ind, arr)=> {
    console.log(`element :${el} index :${ind} array :${arr}`)
    return  el % 2 === 0
})
console.log(numsDivBy2)        // [ 2, 4, 8 ]
console.log(nums)              // [ 1, 2, 4, 5, 8 ]

/*Notes 
1. filter method takes 3 parameters (element,index,array)
2. If you are using {} curly bases 'return' keyword needs to be used explicitly.
3. filter method apply filter to each array and returns the outcome of that condition if true.
4. It does not mutate original array
5. Returns a new array (which passes the condition)
*/

// polyfill :-

if(!Array.prototype.myFilter){
    Array.prototype.myFilter = function (callback){
        let result = []
        for(let i = 0; i < this.length; i++){
            if(callback(this[i],i,this)){                   // passing the nums only if condition is true.
                result.push(this[i])                // pushing elements that passed the condition to new variable.
            }
        }
        return result
    }
}

const myArr = [2,4,5,6,1,0]
const newArr = myArr.myFilter((num) => num > 1)
console.log(newArr)      // [ 2, 4, 5, 6 ]
// const newArr = myArr.filter((el)=> el > 1)
// console.log(newArr)         //  [ 2, 4, 5, 6 ]
