const addBtn = document.getElementById("add-btn");

function addTask() {
  const inputFiled = document.getElementById("input-field");
  let input = inputFiled.value.trim();
  if (input === "") return;
  const items = document.getElementById("items");

  const divElement = document.createElement("div");
  divElement.classList.add("item-div");

  const leftItem = document.createElement("div");
  leftItem.classList.add("items-left");
  const checkBox = document.createElement("input");
  checkBox.type = "checkbox";
  const liElement = document.createElement("li");
  liElement.innerText = input;
  leftItem.appendChild(checkBox);
  leftItem.appendChild(liElement);

  const rightItem = document.createElement("div");
  rightItem.classList.add("items-right");
  let editBtn = document.createElement("button");
  editBtn.classList.add("edit-btn");
  editBtn.innerText = "Edit";
  const delBtn = document.createElement("button");
  delBtn.classList.add("del-btn");
  delBtn.innerText = "Delete";
  rightItem.appendChild(editBtn);
  rightItem.appendChild(delBtn);

  divElement.appendChild(leftItem);
  divElement.appendChild(rightItem);
  items.appendChild(divElement);




//  const =  localStorage.setItem(divElement, "hii")
//  localStorage.getItem(divElement)
//  console.log(myStoredTasks)

  // delete  button
  delBtn.addEventListener("click", () => {
    divElement.remove();
  });
  // Edit  button

  editBtn.addEventListener("click", () => {
    const saveBtn = document.createElement("button");
    saveBtn.innerText = "Save";
    saveBtn.classList.add("save-btn");
    liElement.setAttribute("contentEditable", true);
    editBtn.replaceWith(saveBtn);
    saveBtn.addEventListener("click", () => {
      liElement.setAttribute("contentEditable", false);
      saveBtn.replaceWith(editBtn);
    });
  });

  // checkbox 
  checkBox.addEventListener("change",()=>{
    let isChecked = this.checked
    if(isChecked.checked){
        console.log("changing " + isChecked)
        liElement.style.textDecoration = "line-through"
        liElement.style.opacity = 0.6
    } else {
        console.log("not changing " + isChecked)
        liElement.style.textDecoration = "none"
        liElement.style.opacity = 1
    }
  })


function saveTasks(task){
 let tasks = JSON.parse(localStorage.getItem("myTasks")) || []
 tasks.push(task)
localStorage.setItem("myTasks", JSON.stringify(tasks))
  }

 saveTasks(input)

//  function loadTasks(){
//     let tasks = JSON.parse(localStorage.getItem("myTasks")) || []
//     tasks.forEach(task => {addTask(task)});
//  }
//   loadTasks()

//   console.log(input + "1in");
//   input = " ";
//   console.log(input + "2in");
}

addBtn.addEventListener("click", addTask);
