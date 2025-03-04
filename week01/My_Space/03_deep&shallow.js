//shallow and deep copy
/**
 Note:- 
 Shallow Copy :-
A shallow copy copies only the reference for nested objects, not the entire structure. Changes to nested properties affect both the original and the copy.

ex:-

const user1 = {name: "misa", age : 25, income : "1T",  address: { city : " new delhi" , state : " delhi"}} 
const user2 = { ...user1 }     // spread operator ...
user2.address.city = "new york"
console.log(user1.address.city)    // new york
console.log(user2.address.city)    // new york

Deep copy :- 
A deep copy creates a completely new and independent copy of the entire object, including nested objects.

ex:-

const user1 = {name: "misa", age : 25, income : "1T",  address: { city : " new delhi" , state : " delhi"}} 
const copyUser1 = JSON.parse(JSON.stringify(user1))
copyUser1.address.city = "new york"
console.log(copyUser1.address.city)        // new york
console.log(user1.address.city)            // new delhi
 
 */
