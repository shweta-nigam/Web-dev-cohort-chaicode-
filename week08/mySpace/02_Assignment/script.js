
function markDown(){
    const inputElement = document.getElementById("text-area")
    const displayArea = document.getElementById("display-area")
    const clearBtn = document.getElementById("clear-btn")
 
     // highlight code
     marked.setOptions({
        highlight: function(code, lang) {
          return hljs.highlightAuto(code).value;
        },
        langPrefix: "hljs language-" 
      });

    inputElement.addEventListener("input", ()=>{
           displayArea.innerHTML = marked.parse(inputElement.value)
           //    console.log("content of display section"+ displayArea.innerHTML)
           hljs.highlightAll();
        })
   
       // clear Input
        clearBtn.addEventListener("click",()=>{
            displayArea.innerHTML = ""
            inputElement.value = ""
        })
      
        
}
markDown()






