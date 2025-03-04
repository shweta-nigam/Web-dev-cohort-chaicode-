//step1: - store all the functionality in a variable
const inputField = document.getElementById("input-field")
const btnOne = document.getElementById("one")
const btnTwo = document.getElementById("two")
const btnThree = document.getElementById("three")
const btnFour = document.getElementById("four")
const btnFive = document.getElementById("five")
const btnSix = document.getElementById("six")
const btnSeven = document.getElementById("seven")
const btnEight = document.getElementById("eight")
const btnNine = document.getElementById("nine")
const btnZero = document.getElementById("zero")

const btnMul = document.getElementById("mul-op")
const btnDiv = document.getElementById("div-op")
const btnSum = document.getElementById("sum-op")
const btnMinus= document.getElementById("min-op")

const btnClear= document.getElementById("clr")
const btDel= document.getElementById("del")

// step2:  doing something with input
let myValue = ""
let inputValue = inputField.value

// step3:  switch cases for operations

function calculator(op,a,b){
    switch(op){
        case "+":
            return a + b
        case "-":
            return a - b
        case "*" : 
        return  a * b
        case  "/" :
            return b !== 0 ? a/b : `error`
        default:
            return `Error`
    }
} 

