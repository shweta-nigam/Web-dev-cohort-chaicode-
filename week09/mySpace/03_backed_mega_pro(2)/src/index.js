import dotenv from "dotenv";
import app from "./app.js"
import connectDB from "./db/index.js";

dotenv.config({
    path: "./.env"
})

const PORT = process.env.PORT

connectDB()
 .then(()=>{
    console.log("")
    app.listen(PORT, ()=> console.log("Server is running on port", PORT))
 })
 .catch((err)=>{
    console.error("error while connecting to mongodb", err)
    process.exit(1)        //prevents the server from starting in an invalid state (like without a database connection).  1 -> failure , 0 -> success 
 })



 /* Note: - What happens if you don’t use process.exit(1)?
---> The process might continue running, depending on other code.

---> The app could run without a working DB, leading to more errors later (like API calls failing silently or returning undefined).
  */