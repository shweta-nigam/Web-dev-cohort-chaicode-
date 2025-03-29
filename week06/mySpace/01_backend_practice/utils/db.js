import mongoose from "mongoose";

import dotenv from"dotenv";
dotenv.config()

// exporting a function that connects to db

const db = () => {
    mongoose 
    .connect(process.env.MONGO_URL)
    .then(()=>{
      console.log("shweta's product connected to mongodb")
    })
    .catch((err)=>{
       console.log("Error connecting to mongodb" + err) 
    })
}

export default db;