const teas = {
    name : "lemon tea",
    type : "Green",
    caffeine : "low"
}

console.log(teas.name)
console.log(teas["type"])

teas.origin ="China"
console.log(teas)

teas.caffeine = "medium"

delete teas.type 

console.log("origin" in teas)
console.log(teas.hasOwnProperty)

for (const key in teas) {
    console.log(`${Key}  ${tea[key]}`)
}

const myTeas = {
greenTea: {
    name: "green tea"
},
blackTea: {
    name: "Black tea"
},
cup:{
    one: "1",
    two : "2"
}
}

const teaCopy = {...myTeas}         // shallow copy
const anotherCopy = teas            // reference

