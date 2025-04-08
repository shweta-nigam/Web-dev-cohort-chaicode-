import express from "express"


const app  = express()

app.use(express.json())
app.use(express.static("public"))

app.post("/contact", (req,res)=>{
    const { name, age, message, address} = req.body
    console.log("Contact form data:", { name,  message })
})

// res.json({message: "Form submitted"})

app.listen(3000, ()=> console.log("App listening on port 3000"))