import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import db from "./src/utils/db.js"
import cookieParser from "cookie-parser"
// import all routes :-
import userRoutes from "./src/routers/user.router.js"


const app = express()
dotenv.config()
const port =   process.env.PORT || 4000

// use of cors to eliminate the problem between out backed communication with backend
app.use(cors ({
    origin: process.env.BASE_URL,
    Credential:true,
    methods:["GET","POST","DELETE","OPTIONS"],
    allowHeaders:["Content-Type", "Authorization"]
}))

// to accept json data in our backend 
app.use(express.json())
// to accept char codes
app.use(express.urlencoded({extended:true}))
app.use(cookieParser());


app.get('/', (req, res) => {
  res.send('Hello World!')
})

db();     // connect to db  // db function

app.use("/api/v1/users", userRoutes)  // initial route and transferring control to userRoute 

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})