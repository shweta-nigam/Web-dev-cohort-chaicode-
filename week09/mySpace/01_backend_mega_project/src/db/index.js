import mongoose from "mongoose";

const connectDB = async() =>{
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("mongoDB connected successfully ")

    } catch (error) {
        console.error("MongoDB connection failed" , error)
        process.exist(1) // exist if connection fails
    }
}

export default connectDB