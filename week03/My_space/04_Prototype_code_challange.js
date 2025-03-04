// You need to implement the Animal constructor function and its prototype method

function Animal(name) {
    // Initialize name property
  this.name = name

}
// Define makeSound method on Animal's prototype
Animal.prototype.makeSound = function(){
  console.log(`Some generic sound`)
}
const myAnimal = new Animal("Buddy")
myAnimal.makeSound()        // Some generic sound


//--
function Robot(name, batteryLevel) {
    // Initialize name and batteryLevel properties
    this.name = name
    this.batteryLevel = batteryLevel
}
// Define charge method on Robot's prototype
Robot.prototype.charge = function(){
  if (this.batteryLevel < 100) {
    return  this.batteryLevel =+ 20
  } else {
    return this.batteryLevel
  }
}
const robot1 = new Robot("bit",50)
console.log(robot1.charge())


//--
function Robot(name, batteryLevel) {
    // Initialize name and batteryLevel properties
    this.name = name
    this.batteryLevel = batteryLevel
}
// Define charge method on Robot's prototype
Robot.prototype.charge = function(){
  this.batteryLevel = Math.min(this.batteryLevel + 20,100)            // ✅ Update the property
  return this.batteryLevel
}
const robot2 = new Robot("bot1",90)
console.log(robot2.charge())

//--
// You need to implement the Counter constructor function and its prototype methods

function Counter(count = 0) {
    // Initialize count property
  this.count = count
}
// Define increment method on Counter's prototype
Counter.prototype.increment = function(){
   return ++this.count
}
// Define decrement method on Counter's prototype
Counter.prototype.decrement = function(){
  return --this.count
}
const count1 =new Counter()
console.log(count1.increment())

//--
// You need to implement the Playlist constructor function and its prototype method

function Playlist(songs = []) {
    // Initialize songs property
   this.songs = [...songs]
}

// Define addSong method on Playlist's prototype
Playlist.prototype.addSong = function(song){
 this.songs.push(song)
 return  this.songs
}

const mySong1 = new Playlist()
console.log(mySong1.addSong("They looking at me!"))
console.log(mySong1.addSong("snowman"))     // [ 'They looking at me!', 'snowman' ]

//---
// You need to implement the ShoppingCart constructor function and its prototype methods

function ShoppingCart(items = []) {
  // Initialize items property
  this.items = items
}
// Define addItem method on ShoppingCart's prototype
ShoppingCart.prototype.addItem = function(price){
this.items.push(price)
return this.items
}
// Define getTotalPrice method on ShoppingCart's prototype
ShoppingCart.prototype.getTotalPrice = function(){
 return this.items.reduce((acc,price)=> acc + price,0)

}
const itemPrice = new ShoppingCart()
itemPrice.addItem(20)
itemPrice.addItem(30)
console.log(itemPrice.getTotalPrice())     // 50


//--- 

// You need to implement the BankAccount constructor function and its prototype methods

function BankAccount(balance, transactions = []) {
  // Initialize balance and transactions properties
  this.balance = balance
  this.transactions = transactions
}
// Define deposit method on BankAccount's prototype
BankAccount.prototype.deposit = function(amount){
  this.balance += amount
  this.transactions.push("Deposited " + amount)
  return `Deposited: ${amount}`
}
// Define withdraw method on BankAccount's prototype
BankAccount.prototype.withdraw = function(amount){
if(this.balance >= amount){
  this.balance-= amount
  this.transactions.push("Withdrew " + amount)
   return `withdrew: ${amount}`
} else {
  return `Insufficient balance`
}
}
// Define getTransactionHistory method on BankAccount's prototype
BankAccount.prototype.getTransactionHistory = function(){
  return this.transactions
}


const bankUser2 = new BankAccount(500,[])
console.log(bankUser2.withdraw(600))
console.log(bankUser2.getTransactionHistory()) 

const bankUser = new BankAccount(5000,[])
bankUser.deposit(200)
bankUser.withdraw(200)
console.log(bankUser.getTransactionHistory())   // [ 'Deposited200', 'Withdrew200' ]


// or better way write the above answer ---

// You need to implement the BankAccount constructor function and its prototype methods

function BankAccount(balance, transactions = []) {
  // Initialize balance and transactions properties
  this.balance = balance
  this.transactions = transactions
}

// Define deposit method on BankAccount's prototype
BankAccount.prototype.deposit = function(amount){
  this.balance+= amount
  this.transactions.push("Deposited " + amount)
}
// Define withdraw method on BankAccount's prototype
BankAccount.prototype.withdraw = function(amount){

if(this.balance- amount<0){
  this.balance-= amount
  this.transactions.push("Insufficient balance")
} else {
  this.balance-=amount
  this.transactions.push(`Withdrew ${amount}`)
}
}

// Define getTransactionHistory method on BankAccount's prototype

BankAccount.prototype.getTransactionHistory = function(){
  return this.transactions
}

//----
// You need to implement the Employee constructor function and its prototype method

function Employee(name, position, salary) {
  // Initialize name, position, and salary properties
  this.name = name
  this.position = position
  this.salary = salary
}
// Define applyBonus method on Employee's prototype
Employee.prototype.applyBonus = function(percent){
 this.salary = Math.round(this.salary + this.salary*(percent/100))
 return `Name:${this.name} , Salary ${this.salary}, Position: ${this.position}`
}

const employee1 = new Employee("Ary", "Data analyst", 500000)
console.log (employee1.applyBonus(20))      // Name:Ary , Salary 600000, Position: Data analyst

// ---
// You need to implement the Library constructor function and its prototype methods

function Library(books = []) {
  // Initialize books property
this.books = books
}

// Define addBook method on Library's prototype
Library.prototype.addBook = function(book){
 this.books.push(book)
return this.book
}
// Define findBook method on Library's prototype
Library.prototype.findBook = function(title){
  const foundBook = this.books.find((book) => book === title)
if(foundBook){
  return `Book found`
} else {
  return ` Book not found`
}
}
const myBooks = new Library()
myBooks.addBook("harry Potter")
myBooks.addBook("Alchemist")
console.log(myBooks.findBook("Alchemist"))       // book found

// Use this.books.push(book) when you want to add an item to the array and don’t need to store or use the new length of the array.
// Never use this.books = this.books.push(book) because it replaces the array with a number, which is not the intended behavior.
//


//----
// You need to implement the BankAccount constructor function and its prototype methods

function BankAccount(accountNumber, holderName, balance) {
  // Initialize accountNumber, holderName, and balance properties
  this.accountNumber = accountNumber
  this.holderName = holderName
  this.balance = balance
}
// Define deposit method on BankAccount's prototype
BankAccount.prototype.deposit = function(amount){
 this.balance+=amount
}
// Define withdraw method on BankAccount's prototype
BankAccount.prototype.withdraw = function(amount){
if(balance >= amount)  {
  this.balance-=amount
} else {
 `Insufficient Balance`
}
}
// Define transfer method on BankAccount's prototype

BankAccount.prototype.transfer = function(amount,targetAccount){
if(this.balance >= amount){
  this.balance-= amount
  return targetAccount.balance+=amount
} else {
  return "Insufficient balance for transfer";
}
}

const accHolder = new BankAccount(101, "Sia", 2000)
const accHolder2 = new BankAccount(102, "Marry", 1000)
console.log(accHolder.transfer(200,accHolder2))

//---
// You need to implement the Product constructor function and its prototype methods

function Product(name, price, stock) {
  // Initialize name, price, and stock properties
  this.name = name
  this.price = price
  this.stock = stock
}

// Define applyDiscount method on Product's prototype
Product.prototype.applyDiscount = function(percent){
 return this.price = Math.round(this.price - this.price*(percent/100))
}

// Define purchase method on Product's prototype
Product.prototype.purchase = function(quantity){
if(this.stock > quantity){
  return this.stock-=quantity
} else {
  return `Not enough stock`
}
}

const product1 = new Product("Robot", 4000, 50)
console.log(product1.applyDiscount(10))        // 4400
console.log(product1.purchase(5))              // 45
console.log(product1)                          // Product { name: 'Robot', price: 4400, stock: 45 }
