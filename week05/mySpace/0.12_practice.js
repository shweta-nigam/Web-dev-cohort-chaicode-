let chaiTypes = ["spice chai", "Ginger chai" , "Green tea" , "Lemon tea"]

console.log(`Total chai types: ${chaiTypes.length}`)
// always treat arrays as you don't know the length .
chaiTypes.push("Herbal tea")       // pushes item at the end in array.

const data = chaiTypes.pop()   // pop out last item fom array and returns the item
console.log(data)       // Herbal tea

let index  = chaiTypes.indexOf("Green tea")  // 2   // if item is not present it gives -1
console.log(index)

if(index !== -1){
    chaiTypes.splice(index, 1)   // Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.
}
console.log(chaiTypes)   // [ 'spice chai', 'GInger chai', 'Lemon tea' ]