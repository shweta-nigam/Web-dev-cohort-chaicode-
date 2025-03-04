// Code for existing boards
const addItemsBtn = document.querySelectorAll(".add-btn")
const allContents = document.querySelectorAll(".content")
const todoBoard = document.querySelector(".to-do")
const allItems = document.querySelectorAll(".items")
const allBoards = document.querySelectorAll(".board")

function createContentCard(){
    addItemsBtn.forEach((item)=> item.addEventListener("click", ()=>{
        const input = prompt("Enter your task")
        if(input === "")return;

        const contentCard = document.createElement("p")
        contentCard.classList.add("items")
        contentCard.setAttribute("draggable", "true")
        contentCard.innerText = input
    //    console.log("user input is: " + contentCard.innerText)
        
    //  todoBoard.appendChild(contentCard)
    //How can I append child in respective board connected with add Items btn
   // find the class nearest to both the element you want to manipulate

   const board = item.closest(".board")
    const contentContainer = board.querySelector(".content");
    contentContainer.appendChild(contentCard)


    //  console.log("closest" + contentContainer)
    }))
}
createContentCard()

// attaching drag events on all the items and 
function attachDragEvent(){
    allItems.forEach((item)=>{
        item.addEventListener("dragstart",()=>{
          console.log(`my dragging item is : ${item.innerHTML}`)
          const p = document.createElement("p")
          p.classList.add("dragItems")
        })
        item.addEventListener("dragend",()=>{
            const p = document.createElement("p")
            p.classList.remove("dragItems")
        })
    })


    allBoards.forEach((board)=>{
        board.addEventListener("dragover",()=>{
            console.log(`The board on which something is hovering! ${board.innerText} `)

            const draggableItem = document.querySelector(".dragItems")
            board.appendChild(draggableItem)
        })
    })

}


// function attachDragEvent(target){
// target.addEventListener("dragstart",()=>{
//     target.classList.add("dragItems")
// })

// target.addEventListener("dragend",()=>{
//     target.classList.remove("dragItems")
// })
// }

allBoards.forEach((board)=>{
            board.addEventListener("dragover",()=>{
                console.log(`The board on which something is hovering! ${board.innerText} `)
    
                const draggableItem = document.querySelector(".dragItems")
                board.appendChild(draggableItem)
            })
        })

attachDragEvent()