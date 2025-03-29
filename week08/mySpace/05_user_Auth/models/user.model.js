import mongoose from "mongoose"
import bcrypt from "bcryptjs"

const userSchema = new mongoose.Schema(
    {
        name:{
            type:String,
            required:true,
            trim:true,
        },
        email:{
            type:String,
            lowerCase:true,
            unique:true,
            required:true
        },
        password:{
            required:true,
            type:String,
            minlength:6,
            // maxlength:30            ?? why not this possible
        },
        role:{
            type:String,
           enum:["user", "admin"],
           default:"user" 
        },
        isVerified:{
            type:Boolean,
            default:false
        },
        verificationToken:String,
        verificationTokenExpiry:Date,
        resetPasswordToken:String,
        resetPasswordTokenExpiry:Date,
    },
{
    timestamps: true
}
)

// user pre-save hook middleware to hash the password before saving the user in DB

userSchema.pre("save" , async function (next){
    if(!this.isModified("password")){
        next();
    } else {
        this.password = await bcrypt.hash(this.password,10);
        next();
    }
})

// compare password 
userSchema.methods.comparePassword = async function(password){
    return await bcrypt.compare(password, this.password);
}

const User = mongoose.model("User", userSchema)
export default User;