import mongoose from "mongoose"
// import dotenv from "dotenv"
// dotenv.config()

const dbConnect = async ()=>{
    try {
        await mongoose.connect(process.env.MONGODB_URL)
        console.log("mongodb connected successfully")
    } catch (error) {
        console.error("MongoDB connection failed ", error)
        process.exit(1)     // ??? why this line
    }
}
export default dbConnect;