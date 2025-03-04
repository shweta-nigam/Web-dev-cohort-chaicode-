
// const clear = document.querySelector("#clr");
// const deleteBtn = document.querySelector("#del");

// const equal = document.querySelector("#eq-op");
// const plus = document.querySelector("#plus-op")
// const minus = document.querySelector("#minus-op")
// const multiply = document.querySelector("#mul-op")
// const divide = document.querySelector("#div-op")

// const inputBtn = document.querySelector("#input")

// const numBtns = document.querySelectorAll(" #one, #two, #three, #four, #five, #six, #seven, #eight, #nine, #zero" )

// let currentInput = ""
// let previousInput = ""
// let operator = null

// // update input field
// function updateDisplay(){
// inputBtn.value = currentInput
// console.log(inputBtn.value)
// }

// // clear input
// function clearInput(){
//     currentInput = ''
//     previousInput = ''
//     operator = null
//     updateDisplay()
// }

// function deleteLastChar(){
//  currentInput = currentInput.slice(0,-1)
//  updateDisplay()
// }


// function calculator(operator,a , b){
// if(operator === "+"){
//     return a + b
// } else if ( operator === "-"){
//     return  a - b
// } else if ( operator === "*"){
//     return a * b
// } else if ( operator === "/"){
//     return b === 0 ? "Error" : a / b
// } else {
//     return `Error`
// }
    
// }

// // listeners on all num btns
// numBtns.forEach((btn)=>{
//    btn.addEventListener("click", ()=>{
//     currentInput+= btn.textContent
//     console.log(currentInput)
//     updateDisplay()
//    })
// })

// function handleOperator (op){
// if(currentInput === '')return;
// console.log("Operator clicked:", op);
// previousInput = currentInput;
// operator = op;
// currentInput = "";
// console.log("Operator set to:", operator, "Previous:", previousInput);
// updateDisplay()
// }

// plus.addEventListener("click",()=>handleOperator("+"))
// minus.addEventListener("click",()=>handleOperator("-"))
// multiply.addEventListener("click", ()=> handleOperator("*"))
// divide.addEventListener("click",()=>handleOperator("/"))

// equal.addEventListener("click",()=>{
//     if(previousInput === "" || currentInput === "" || operator === null) return
//     console.log("Missing input or operator");
//     const num1 = parseFloat(previousInput);
//     const num2 = parseFloat(currentInput)

//     const result = calculator(operator, num1, num2)

//     currentInput = result.toString();
//     previousInput = ""
//     operator = null
//     updateDisplay()
// })

// clear.addEventListener("click",clearInput)
// deleteBtn.addEventListener("click",deleteLastChar)
// console.log("Number buttons:", numBtns);





const clear = document.querySelector("#clr");
const deleteBtn = document.querySelector("#del");

const equal = document.querySelector("#eq-op");
const plus = document.querySelector("#plus-op")
const minus = document.querySelector("#minus-op")
const multiply = document.querySelector("#mul-op")
const divide = document.querySelector("#div-op")

const inputBtn = document.querySelector("#input")

const numBtns = document.querySelectorAll(" #one, #two, #three, #four, #five, #six, #seven, #eight, #nine, #zero" )

let currentInput = ""
let previousInput = ""
let operator = null

// update input field
function updateDisplay(){
    inputBtn.value = currentInput
    console.log("Current Input:", currentInput)
}

// clear input
function clearInput(){
    currentInput = ''
    previousInput = ''
    operator = null
    updateDisplay()
}

function deleteLastChar(){
    currentInput = currentInput.slice(0,-1)
    updateDisplay()
}

function calculator(operator, a, b){
    if(operator === "+"){
        return a + b
    } else if ( operator === "-"){
        return  a - b
    } else if ( operator === "*"){
        return a * b
    } else if ( operator === "/"){
        return b === 0 ? "Error" : a / b
    } else {
        return `Error`
    }
}

// listeners on all num btns
numBtns.forEach((btn)=>{
    btn.addEventListener("click", ()=>{
        currentInput += btn.textContent
        console.log("Button clicked:", btn.textContent)
        updateDisplay()
    })
})

function handleOperator (op){
    if(currentInput === '') return;
    console.log("Operator clicked:", op);
    previousInput = currentInput;
    operator = op;
    currentInput = "";
    console.log("Operator set to:", operator, "Previous:", previousInput);
    updateDisplay()
}

plus.addEventListener("click",()=>handleOperator("+"))
minus.addEventListener("click",()=>handleOperator("-"))
multiply.addEventListener("click", ()=> handleOperator("*"))
divide.addEventListener("click",()=>handleOperator("/"))

equal.addEventListener("click",()=>{
    if(previousInput === "" || currentInput === "" || operator === null) {
        console.log("Missing input or operator");
        return;
    }
    const num1 = parseFloat(previousInput);
    const num2 = parseFloat(currentInput)

    const result = calculator(operator, num1, num2)

    currentInput = result.toString();
    previousInput = ""
    operator = null
    updateDisplay()
})

clear.addEventListener("click",clearInput)
deleteBtn.addEventListener("click",deleteLastChar)
console.log("Number buttons:", numBtns);