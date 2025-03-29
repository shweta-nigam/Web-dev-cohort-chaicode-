const addBtn = document.getElementById("add-btn")
const items = document.getElementById("items")


function addTask(){
    let inputField = document.getElementById("input-field").value
    if(inputField === "")return;
    //creating main-div of items
    const div = document.createElement("div")
    div.className = "item-div"
    

    // creating left-side of li
    const itemLeftDiv = document.createElement("div")
    itemLeftDiv.className = "items-left"
    const itemLeftCheckbox = document.createElement("input")
    itemLeftCheckbox.type = "checkbox"
    const itemLeftLi = document.createElement("li")
    itemLeftLi.innerText = inputField
    itemLeftDiv.appendChild(itemLeftCheckbox)
    itemLeftDiv.appendChild(itemLeftLi)

// creating right-side of li
    const itemRightDiv = document.createElement("div")
    itemRightDiv.className = "items-right"
    const editBTN = document.createElement("button")
    editBTN.innerText = "Edit"
    editBTN.className = "edit-btn"
    const deleteBtn = document.createElement("button")
    deleteBtn.innerHTML = "Delete"
    deleteBtn.className = "del-btn"
    itemRightDiv.appendChild(editBTN)
    itemRightDiv.appendChild(deleteBtn)
  
    div.appendChild(itemLeftDiv)
    div.appendChild(itemRightDiv)

    items.appendChild(div)

    // console.log(inputField + "  value....")
    inputField = ''

    //check through functionality
    if(!itemLeftCheckbox){
      itemLeftLi.style.textDecoration = "check through"
    }
// delete fun
    deleteBtn.addEventListener("click", ()=>{
        div.remove()
    })
// edit function
editBTN.addEventListener("click",()=>{
    
})
}

addBtn.addEventListener("click", addTask)