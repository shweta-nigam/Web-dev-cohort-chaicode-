import mongoose from "mongoose"

const connectDB = async () => {
    try {
      await mongoose.connect(process.env.MONGODB_URI)
      console.log("mongodb connection successful")
    } catch (error) {
        console.error("MongoDB failed", error)
    }
}

export default connectDB;