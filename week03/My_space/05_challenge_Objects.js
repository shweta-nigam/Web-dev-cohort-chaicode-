//Date - 19th Feb 25

// Q1--
// You just need to implement the createStudentProfile function
function createStudentProfile(name, age, grade) {
    // Return an object with name, age, and grade
    if( typeof name !== "string"){
      return "Invalid input"
    }
    if( typeof age !== "number" || age <= 5){
      return "Invalid input"
    }
    if( typeof grade !== "string"){
      return "Invalid input"
    }
    return { name , age , grade }
  }
  
  console.log(createStudentProfile ("shweta",2, "12th"))  // Invalid input


  //Q2 ---
  // You just need to implement the addCarColor function
function addCarColor(car, color) {
    // Add color property to the car object
    if( typeof car !== "object"||  car === null || !car.brand || !car.model ){
      return "Invalid object"
    }
    if(typeof color !== "string" || color.trim() === ""){
      return "Invalid color"
    }
    //adding color to the car object
    car.color = color
    return  car
  }
  console.log(addCarColor({brand : "honda" , model : "civic" }, "red"))

//   Q3---
// You just need to implement the hasDiscount function
function hasDiscount(product) {
    // Check if product has discount property
    if( typeof product !== "object"){
      return "Invalid object"
    }
    if( !product.discount){
      return false
    } else {
        return true
    }
    
  }
console.log(hasDiscount({name: "toy" , price: 3000 , discount : 10 }))   // true
console.log(hasDiscount({name: "toy" , price: 3000 }))   // false

//Q4 --
// You just need to implement the removePassword function
function removePassword(user) {
    // Remove password property
    if(typeof user !== "object" || !user.username || !user.password){
      return "Invalid object"
    }
    if (user.password){
      delete user.password
      return user
    } else {
      return user
    }
  
  }
  console.log(removePassword({username: "John" ,password : 123456 }))    //  { username: 'John' }
  console.log(removePassword({username: "John"}))    //

  // or --
  function removePassword(user) {
    // Remove password property
   if(user.hasOwnProperty("password")){
    delete user.password
   }
  return user
  }

  //Q5---
  // You just need to implement the countProperties function
function countProperties(user) {
    // Return the number of properties in user
    if( typeof user !== "object" ){
      return "Invalid object"
    }
  
   return Object.keys(user).length
  }
  console.log(countProperties({name:"shweta"})) //  1
  console.log(countProperties({name:"shweta",position : "ceo", income : "500cr"})) //  3

//Q6--  date- 20/2/25
  // You just need to implement the mergeObjects function
function mergeObjects(obj1, obj2) {
  // Merge obj1 and obj2 into a single object
  if(typeof obj1 !== "object"|| typeof obj2 !== "object" || obj1 === null || obj2 === null){
    return `Invalid object`
  }
  // merging both objects and overwriting obj1 
  const obj = { ...obj1, ...obj2}
   return obj
}
console.log(mergeObjects({name:"alice",age : 25},{age : 30,email: "alice@gamil.com"}))    // { name: 'alice', age: 30, email: 'alice@gamil.com' }


//Q7 --
// You just need to implement the objectToArray function
function objectToArray(obj) {
  // Convert the object into an array of key-value pairs
  if(typeof obj !== "object" || obj === null){
    return `Invalid Input`
  }
 return Object.entries(obj)
}
console.log(objectToArray({name :"Alice", age : 30}))    // [ [ 'name', 'Alice' ], [ 'age', 30 ] ]

//Q8--
// You just need to implement the cleanObject function
function cleanObject(obj) {
  // Remove all properties with null or undefined values
  if(typeof obj !== "object"|| obj === null){
    return `Invalid input`
  }
  const result = {}
  for(const ele in obj){                                       // ele == key of object 
    if(obj[ele] !== null && obj[ele] !== undefined){       
      result[ele] = (obj[ele])
    }
  }
  return result
}
console.log(cleanObject({age:null,name:"alice", email :undefined}))     // { name: 'alice' }

//Q9--
// You just need to implement the deepClone function
function deepClone(obj) {
  // Return a deep copy of obj
  if(typeof obj !== "object" || obj === null){
    return `Invalid input`
  }
  const deepCopy = JSON.parse(JSON.stringify(obj))
  return deepCopy
}
// console.log(deepClone({name:"Alice",address : {city : "delhi", country : "India"}}))
const myObj = { name: "Alice", address: { city: "delhi", country: "India" } };
const clonedObj = deepClone(myObj);

// Modify the cloned object
clonedObj.address.city = "Jaipur";

console.log("Original Object:", myObj);
console.log("Cloned Object:", clonedObj);

//Q10 -- 
// You just need to implement the getNestedValue function
// The key path should be string with dot (.) notation string separating keys.
// If key is missing return "Key not found"
// The function should handle deeply nested objects
function getNestedValue(obj, keyPath) {
  // Return the value from the nested object based on keyPath
  if(typeof obj !== "object" || obj === null){
    return `Invalid object`
  }
  
  const keys = keyPath.split(".")
  let current = obj
  for (const key of keys) {
    if(current === null || typeof current !== "object" || (!key in current)){
      return `Key not found`
    }
    current = current[key]
  }
   return current
}

const obj = {
  name: "Alice",
  address: {
    city: "Delhi",
    country: "India",
    details: {
      pin: 110001,
      locality: "Connaught Place",
    },
  },
};

console.log(getNestedValue(obj, "address.city")); // Output: "Delhi"
console.log(getNestedValue(obj, "address.details.pin")); // Output: 110001
console.log(getNestedValue(obj, "address.details.locality")); // Output: "Connaught Place"
console.log(getNestedValue(obj, "address.state")); // Output: "Key not found"
console.log(getNestedValue(obj, "name"))

//or...
// You just need to implement the getNestedValue function
function getNestedValue(obj, keyPath) {
  // Return the value from the nested object based on keyPath
   if(typeof obj !== "object" || obj === null){
    return `Invalid object`
  }
  
 let keys = keyPath.split(".")
  let current = obj
  for (let key of keys) {
    if(current[key] === undefined){
      return `Key not found`
    }
    current = current[key]
  }
   return current
}