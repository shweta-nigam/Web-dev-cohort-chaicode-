import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import dbConnect from "./utils/db.js"
import userRoutes from "./routes/user.route.js"
import cookieParser from "cookie-parser"

dotenv.config()
const app = express()
const port = process.env.PORT || 8080


app.use(cookieParser())
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(
    cors({
        origin:process.env.BASE_URL,
        credential:true,
        allowedHeaders:["Content-Type","Authorization"],
        methods:[ "GET","POST", "DELETE","PUT" ]
    })
)

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use("/api/v1/users", userRoutes)

//db function execution
dbConnect()

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})