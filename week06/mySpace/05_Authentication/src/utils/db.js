import dotenv from "dotenv"
import mongoose from "mongoose"
dotenv.config()
// console.log(process.env)

const db = ()=>{
    mongoose.connect(process.env.MONGO_URL)          // whenever handling data promises are must
    .then(()=>{
        console.log("Success connecting mongodb")
    })
    .catch(()=>{
        console.log("Error while connecting DB")
    })
}

export default db