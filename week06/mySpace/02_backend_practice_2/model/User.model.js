import mongoose from "mongoose";
import bcrypt from "bcryptjs"

const userSchema = new mongoose.Schema({
    name:String,
    email:String,
    password: String,
    role:{
        type:String,
        enum:["user", "admin"],                            // enum = enumeration -> meaning selecting values only from the available value in []
        default:"user"
    },
    isVerified:{
        type:Boolean,
        default:false,
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
},{
    timeseries: true,
})     
// hooks:-
userSchema.pre("save" , async function(next){          // we don't write arrow functions in hooks


if(this.isModified("password")){
    this.password = await bcrypt.hash(this.password)   // search , read bcryptjs docs
}
next()
})

const User = mongoose.model("User", userSchema)

export default User;