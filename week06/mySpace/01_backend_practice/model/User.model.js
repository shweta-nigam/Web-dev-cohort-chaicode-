import mongoose from "mongoose";

const userScheme = new mongoose.Schema(
    {
        name : String,
        email : String,
        password : String,
        role: {
            type: String,
            enum : ["user" , "admin"],
            default : "user",
        },
        isVerified : {
            type: Boolean,
            default : false,
        },
        verificationToken : {
            type: String,
        },
        resetPasswordToken: {
            type: String,
        },
        resetPasswordExpires: {
            type: Date,
        }
    },
    {
        timestamps: true,
    }
);

const User = mongoose.model("User" , userScheme)

export default User;