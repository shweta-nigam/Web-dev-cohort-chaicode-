let sales = [
    {product : "Laptop", price : 1200},
    {product : "Laptop", price : 800},
    {product : "Laptop", price : 150},
    {product : "Laptop", price : 80},
]

let totalSales = sales.reduce((acc,curr)=>(acc +curr.price),0)

console.log(totalSales)

let inventory = [
   { name: "Widget A", stock: 30},
   { name: "Widget A", stock: 120},
   { name: "Widget A", stock: 45},
   { name: "Widget A", stock: 70},
]

let lowStockitems = inventory.filter((item)=> item.stock < 50)
console.log(lowStockitems)


// interview Ques
let userActivity = [
    {user: "Alice", activityCount : 45},
    {user: "Alice", activityCount : 55},
    {user: "Alice", activityCount : 95},
]
// find most active user // only using reduce method

let mostActiveUser = userActivity.reduce((maxUser,user)=>user.activityCount > maxUser.activityCount ? user : maxUser)
console.log(mostActiveUser)



