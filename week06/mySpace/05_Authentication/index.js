import express from "express"
import dotenv from "dotenv" 
import cors from "cors"
import db from "./src/utils/db.js"

dotenv.config()                  //Loads .env file contents into process.env by default
const app = express()
const port = process.env.PORT  || 3000

app.use(cors({
origin:process.env.BASE_URL,
credential: true,
methods:[ "GET","POST","DELETE","OPTIONS"],
allowHeader:["content-Type", "Authorization"]
})),

app.get('/', (req, res) => {
  res.send('Hello my World!')
})
app.get('/hello', (req, res) => {
  res.send('Hello my world')
})

app.use(express.json())           //app.use(...) → This adds middleware to the Express app. Middleware runs before reaching the route handlers. // express.json() → This middleware parses incoming JSON data from the request body (req.body).
app.use(express.urlencoded({extended:true}))            //Parses URL-encoded form data

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})