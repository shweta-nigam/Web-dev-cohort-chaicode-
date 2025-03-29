import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import db from "./utils/db.js"
import cookieParser from "cookie-parser"

//import all routes
import routes from "./routes/user.routes.js"   // importing with different name because its a default (export)

dotenv.config();

const app = express()

app.use(
  cors({
    origin: process.env.BASE_URL,
    credentials: true,
    methods: ['GET','POST','DELETE','OPTIONS'],
    allowedHeaders: ["Content-Type", "Authorization"]   // used in Post-man
}))

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cookieParser());      // now you can access cookies


const port = process.env.PORT ||  4000  ;   // good practice  
// console.log(process.env.PORT)

app.get('/', (req, res) => {
  res.send('Cohort class! keep it up!')
  // console.log(req + "our request")
})


app.get("/shweta", (request,respond)=>{
   respond.send("Hello Shweta!")  
})

//connect to db
db();

//user route
app.use("/api/v1/users", routes)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})