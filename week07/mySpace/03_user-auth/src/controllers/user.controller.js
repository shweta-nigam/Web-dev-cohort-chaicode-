// controller file for logic
import User from "../model/User.model.js";
import crypto from "crypto";
import nodemailer from  "nodemailer"
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken"




const registerUser = async (req, res) => {
  // get data
  // (validate data if it is good data)
  // check if user exist
  // create a user in database
  // generate verificationToken
  // save it in database
  // send  it to user by email or otp
  //send  success status to user
  // console.log(`request: ${req} response: ${res}`)      // what is req ans res?

  // get data
  const { name, email, password } = req.body;

  // (validate data if it is good data)
  if (!name || !email || !password) {
    return res.status(400).json({
      // we are making api therefor will sendStatus data in JSON format.
      message: "ALl field are required",
    });
  }

  // check if user exist
  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({
        message: "User already exists",
      });
    }
    // create a user in database (newly created user)
    const user = await User.create({
      name, // here:- name:name , email:email etc why this ?
      email,
      password,
    });
    console.log(user);

    //(is user was not able to create )
    if (!user) {
      return res.status(400).json({
        message: "User already exists",
      });
    }

    // generate verificationToken
    const token = crypto.randomBytes(32).toString("hex");
    console.log(token);
    user.verificationToken = token; // save token in verification

    await user.save(); // where is this saving?


    // sendStatus email (nodemailer --- mailtrap)
    const transporter = nodemailer.createTransport({
        host: process.env.MAILTRAP_HOST,
        port: process.env.MAILTRAP_PORT,
        secure: false, // true for port 465, false for other ports
        auth: {
          user: process.env.MAILTRAP_USER,
          pass: process.env.MAILTRAP_PASSWORD,
        },
      });


      const mailOption = {
        from: process.env.MAILTRAP_SENDER_EMAIL,
        to:user.email,                       //  user -> represents value from docs  |    User -> represents docs
        subject: "Verify your email", // Subject line
        text:  `please click on the following link:
        ${process.env.BASE_URL}/api/v1/users/verify/${token}
        `
      }

    await  transporter.sendMail(mailOption)

    res.status(201).json({
        message : "User registered successfully",
        success : true
    })


  } catch (error) {
    console.log(error + " Error during user registration")
    res.status(400).json({
        message : "User not registered",
        error :error.message,
        success : false
    })
  }
};

const verifyUser = async (req,res) =>{
  // get token
  // validate
  // find user based on token
  // if matched token not found
  // set isVerify field to true 
  // remove verification token 
  // save
  // sendStatus status

  // get token
 const {token} =  req.params                          // router.get("/verify/:token", verifyUser ) 

 // validate
 console.log("token generated in verify section" + token)
 if(!token){
   return res.status(400).json({
    message: "Invalid token"
  })
 }

 // find user based on token
const user = await User.findOne({verificationToken:token})

 // if matched token not found
 if(!user){
   return res.status(400).json({
    message: "Invalid token"
  })
 }

  // set isVerify field to true 
  user.isVerified = true

// remove verification token 
user.verificationToken = undefined

 // save
await  user.save()

// sendStatus status
res.status(201).json({
  message: "User verified successfully",
  success: true
})

}

const login = async(req,res)=>{
  // get data
  const {email, password} = req.body

  //validate
  if(!email || !password){
    return res.status(400).json({
     message:"All fields are required"
    })
  }

  //
  try {
  const user = await  User.findOne({email})

  if(!user){
    return res.status(400).json({
      message:"Invalid email or password"
     }) 
  }

 const isMatch = await bcrypt.compare(password, user.password)                             //Asynchronously tests a password against a hash.
 console.log(isMatch)

 if(!isMatch){
  return res.status(400).json({
    message:"Invalid email or password"
   }) 
}
 
// if not verified     // h.w.
if(  user.isVerified === false){
  return res.status(400).json({
    message:"Please verify your email"
   }) 
} 
// else {
//   return res.status(400).json({
//     message:"Your email is verified"
//    })
// }

const token = jwt.sign(
  {id:user._id, role:user.role},
   process.env.JWT_SECRET,
   { expiresIn : '24h'}
)

const cookieOption ={
  httpOnly: true,                    // now user can not mess with cookies as it is under backend
  secure: true,
  maxAge: 24*60*60*1000                 // cookie available for 24 hours

} 
res.cookie("test",token, cookieOption)          //key value pairs

res.status(200).json({
  success:true,
  message:"Login successful",
  token,
  user:{
    id: user._id,
    name: user.name
  },
  role: user.role
})

  } catch (error) {
    console.log("Error while login:" + error)
    res.status(400).json({
      success:false,
      message:"Login failed",
      error: error.message,
    })
  }
}

export { registerUser, verifyUser, login  };
