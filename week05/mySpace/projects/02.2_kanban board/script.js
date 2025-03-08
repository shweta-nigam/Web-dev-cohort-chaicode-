
const addBtnTodo = document.getElementById("todo-add-btn")
const addBtnDoing = document.getElementById("doing-add-btn")
const addBtnDone = document.getElementById("done-add-btn")
const todoBoard = document.getElementById("to-do-board")
const doingBoard = document.getElementById("doing-board")
const doneBoard = document.getElementById("done-board")

function createTaskCard(){
    addBtnTodo.addEventListener("click", ()=>{
        const input  = prompt("What is your task?")
        if(!input === "")return;

        const taskCard = document.createElement("p")
        taskCard.classList.add("card")
        taskCard.innerText = input
        taskCard.setAttribute("draggable","true")  
        
        attachDragEvents(taskCard)
        doneBoard.appendChild(taskCard)

    })
    addBtnDoing.addEventListener("click", ()=>{
        const input  = prompt("What is your task?")
        if(!input === "")return;

        const taskCard = document.createElement("p")
        taskCard.classList.add("card")
        taskCard.innerText = input
        taskCard.setAttribute("draggable","true") 

        attachDragEvents(taskCard)
        doneBoard.appendChild(taskCard)

    })
    addBtnDone.addEventListener("click", ()=>{
        const input  = prompt("What is your task?")
        if(!input === "")return;

        const taskCard = document.createElement("p")
        taskCard.classList.add("card")
        taskCard.innerText = input
        taskCard.setAttribute("draggable","true")  
        
        attachDragEvents(taskCard)
        doneBoard.appendChild(taskCard)

    })
}
createTaskCard()

const allBoards = document.querySelectorAll(".board")
const allCards = document.querySelectorAll(".card")

// static dragstart and dragend
// allCards.forEach((card)=>{
//     card.addEventListener("dragstart",()=>{
//         card.classList.add("fly")
//     })
//     card.addEventListener("dragend",()=>{
//         card.classList.remove("fly")
//     })
// })

// dynamic dragstart and dragend
allCards.forEach((card)=> attachDragEvents(card))

function attachDragEvents(target){
    target.addEventListener("dragstart",()=>{
        target.classList.add("fly")
    })
    target.addEventListener("dragend",()=>{
        target.classList.remove("fly")
    })
}

allBoards.forEach((board)=>
    board.addEventListener("dragover",()=>{
    //  console.log("my hovering board" + board.textContent)
    const flyingCard = document.querySelector(".fly")
    board.appendChild(flyingCard)
}))


// function for card theme
let bgCardColors = ["red", "purple", "blue" , "green"]
bgCardColors.forEach((color)=>{})

function cardTheme(color){
    const colorOption = document.getElementById("color")
      if(color === "purple"){
           
      }

}
// const colorOption = document.getElementById("color")
// colorOption.addEventListener("select",(color)=>{
//     allCards.forEach((card)=> card.style.backGroundColor = "color")
// })
const colorOption = document.getElementById("color-option")

colorOption.addEventListener("change",()=>{
    const selectedColor =  colorOption.value
    allCards.forEach((card)=> {
        card.style.backgroundColor = selectedColor
        card.style.color = "black" ? "white" : "black"
    })
})





// Ignore repetition of code , even this is too much for me as a beginner , soon will apply dry code on my skills