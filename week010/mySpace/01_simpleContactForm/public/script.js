
document.getElementById("contactform").addEventListener("submit",async (e)=>{
    e.preventDefault();

    const formData = {
        name: e.target.name.value,
        age: e.target.age.value,
        address: e.target.address.value,
        message: e.target.message.value,
    }

    const res = await fetch ("/contact", {
          method:"POST",
          headers: {"Content-Type" : "application/json"},
          body: JSON.stringify(formData)
    })

    const data = await res.json();
    alter(data.message)

})
