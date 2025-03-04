function addGuest(guestList, newGuest) {
    // Add the newGuest to guestList and return the updated list
    const arr = [...guestList]
     arr.push(newGuest)
    return arr
}
console.log(addGuest(["amy", "trecy"], "sue"))



function filterHealthy(foodList) {
    // Remove unhealthy food and return updated list
    return foodList.filter((food)=> food !== "Burger" )  
}
console.log(filterHealthy(["Banana", "Kiwi","Burger", "strawberry"]))


function findPhone(items) {
    // Return the index of "Phone" in the items array
   return   items.indexOf("Phone")
   
}
console.log(findPhone(["Purse","Dope","Keys","laptop","Phone"]))
// question :- difference between indexOf, findIndex