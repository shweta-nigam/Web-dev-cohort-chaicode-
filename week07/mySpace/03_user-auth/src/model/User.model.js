import mongoose from "mongoose";
import bcrypt  from "bcryptjs"

// new → A keyword used to create an instance of a class.
const userSchema = new mongoose.Schema({
     name: String,
     email: String,
     password: String,
     role: {
        type:String,
        enum:["user","admin"],         // used enum to control options 
        default: "user"                // good practice to give default when enum is used
     },
     isVerified: {
        type:Boolean,
        default:false,
     },
     verificationToken:{
        type:String,
     },
     resetPasswordToken:{
        type:String,
     },
     resetPasswordExpires:{
        type:Date,                  // data type can be date as well
     }
},
{
timestamps:true,          // adds 2 new fields createdAt & updatedAt
}
)

// whenever password field is touched this work will happen (hashing password)
userSchema.pre("save", async function(next){          // hooks(pre) // takes 2 parameters (method, callback) and not arrow function
if(this.isModified("password")){
   const salt = await bcrypt.genSalt(10);
   this.password = await bcrypt.hash(this.password, salt); 
   // this.password = await bcryptjs.hash(this.password)
}
next()
})                      

const User = mongoose.model("User", userSchema)

export default User

