import express from "express";
import dotenv from "dotenv";
import cors from "cors"
import db from "./utils/db.js"

//import all routes 
import userRoutes from "./routes/User.routes.js"

dotenv.config();

const app = express()

app.use(
    cors({
        origin: process.env.BASE_URL,
        credentials: true,
        methods: ["GET", "POST", "DELETE", "OPTIONS"],
        allowedHeaders: ["Content-type" , "Authorization"],
    })
);
app.use(express,json());
app.use(express.urlencoded({ extended: true}))


const port = process.env.PORT  ||  4000;

app.get('/', (req, res) => {
  res.send(' Hello Cohort! ')
})

app.get("/shweta", (req, res) => {
res.send("SHWETA")
});

app.get("/kai", (req, res) =>{
    res.send("KAI")
})

// connecting to db
db()

//user routes
app.use("api/v1/users", userRoutes)


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


