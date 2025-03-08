// +++++++        conversion to number (many ways)

let num = "43"

let convertedNum1 = Number(num)   // standard way // used in production.
console.log(typeof convertedNum1)

let convertedNum2 = +num
console.log(typeof convertedNum2)

let convertedNum3 = parseInt(num)
console.log(typeof convertedNum3)

let convertedNum4 = parseFloat(num)
console.log(typeof convertedNum4)

