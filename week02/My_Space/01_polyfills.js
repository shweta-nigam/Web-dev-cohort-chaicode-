// A polyfill is a piece of code (usually JavaScript) that provides modern functionality in older browsers that do not natively support it. It "fills in" the gaps in browser support by implementing features that are missing in older environments.

// Polyfill for Array.prototype.map :-
// map


if(!Array.prototype.myMap){
    Array.prototype.myMap = function(callback){
        const result =[]
        for(i=0;i <this.length; i++){
            if(this.hasOwnProperty(i)){

                result.push(callback(this[i],i,this))
            }
        }
        return result;
    }
}
const arr = [1,2,3,4,5] 
const doubleArr = arr.myMap((i)=>{return i*2})
console.log(doubleArr)

const fruits = ["Apple"," Banana", "Mango"," Orange"," Pear"]
const makeSmoothie = fruits.myMap((i) => {
    return `${i} smoothie`
})
console.log(makeSmoothie)

//polyfills on filter method
if(!Array.prototype.myFilter){
    Array.prototype.myFilter = function(callback){
     const filterResult = []
     for(i=0; i<this.length ; i++){
      if(this.hasOwnProperty(i) && callback(this[i],i,this)){
          filterResult.push(this[i])
      }
     } return filterResult
    }
  }

// filter method :-
const array = [2,4,5,6,78,9,8]
const filterOnArr = array.myFilter((i)=>{ return i % 2 === 0 })
console.log(filterOnArr)