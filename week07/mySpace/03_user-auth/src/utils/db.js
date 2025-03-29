import mongoose from "mongoose";
import dotenv from "dotenv"
dotenv.config()


// data is in another continent  - always use promise(or other thing)
const db = () => {
    mongoose.connect(process.env.MONGO_URL)
    .then(()=>{
        console.log("Success connecting mongodb")
    })
    .catch((error)=>{
        console.log("Error while connecting to mongodb " + error )
    })
}

export default db 