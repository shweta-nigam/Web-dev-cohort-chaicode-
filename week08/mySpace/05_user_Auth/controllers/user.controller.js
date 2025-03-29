import { sendVerificationEmail } from "../utils/sendingmail.utils.js";
import User from "../models/user.model.js";
import crypto from "crypto"; // no need to install explicitly
import jwt from "jsonwebtoken"

//register user
const registerUser = async (req, res) => {
  // 1.get user data from req body
  const { name, email, password } = req.body;
  //2. validate
  if (!name || !password || !email) {
    return res.status(400).json({
      status: false,
      message: "All fields are required", // status and message are custom keys in your response.
    });
  }
  // password validate
  if (password.length < 6) {
    return res.status(400).json({
      status: false,
      message: "Password must be at least 6 characters long",
    });
  }

  try {
    //3. check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({
        status: false,
        message: "User already exist",
      });
    }

    //4. password hashing in User model using pre-save hook middleware

    // 5. generate verification token
    const token = crypto.randomBytes(32).toString("hex");
    const verificationTokenExpiry = Date.now() + 10 * 60 * 1000;

    // now create a new user
    const user = await User.create({
      name,
      email,
      password,
      verificationToken: token,
      verificationTokenExpiry: verificationTokenExpiry,
    });

    //6. check if user is created

    if (!user) {
      res.status(400).json({
        status: false,
        message: "User registration failed",
      });
    }

    //7. verify the user by sending token to user's email

    await sendVerificationEmail(user.email, user.verificationToken);

    // 8. send response
    return res.status(201).json({
      status: true,
      message: "User registered successfully, please verify your email address",
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        isVerified: user.isVerified,
      },
    });
  } catch (error) {
    console.error("User registration failed", error);
    return res.status(500).json({
      status: false,
      message: "User registration failed",
    });
  }
};

const verifyUser = async (req, res) => {
 

  // validate
//   if (!token) {
//     return res.status(400).json({
//       message: "Please register yourself",
//       status: false,
//     });
//   }
  try {

     //1. get token
  // const {token} = req.body
  const token = req.params.token;
    //2. find the verification token in DB
    const user = await User.findOne({
      verificationToken: token,
      verificationTokenExpiry: { $gt: Date.now() },
    });
    // 3. check if user exist
    if (!user) {
      return res.status(400).json({
        status: false,
        message: "Invalid or expired verification token",
      });
    }
    //4. update user isVerified status and remove verification token
    user.isVerified = true, 
    user.verificationToken = undefined
    user.verificationTokenExpiry = undefined;

    await user.save();

    return res.status(200).json({
      status: true,
      message: "Email verified successfully",
    });
  } catch (error) {
    console.error("Email verification failed", error);
   return res.status(500).json({
      status: true,
      message: "Email verification failed",
    });
  }
};

const login = async(res,req)=>{
    // 1. get user data from body
    const { email, password} = req.body

    //2. validate the data
    if(!email || !password){
        return res.status(400).json({
              status: false,
              message: "All fields are required",
            });
    }

    try {
        // 3. check if user exists in DB with the provided email
        const user = await User.findOne({email})

        //4. check idf user exist
        if(!user){
            return res.status(400).json({
                status: false,
                message:"Invalid email or password",
              });  
        }
        //5. check if user is verified
        if(!user.isVerified){
            return res.status(400).json({
                status: false,
                message: "Please verify your email address",
              });
        }
        // 6. compare the password
        const isPasswordMatched = await user.comparePassword(password);  // ???

        // check if password is correct
        if(!isPasswordMatched){
            return  res.status(400).json({
                status: false,
                message: "Invalid email or password",
        })
    }
    // jwt token
    const jwtToken = jwt.sign({
        id:user._id
    }, process.env.JWT_SECRET,{
        expiresIn:process.env.JWT_EXPIRY,  // ??
    })
    //9. set cookie
    const cookieOptions = {
        expires: new Date(Date.now() + 24* 60 *60 * 1000), // 24h
        httpOnly:true,
    }

    res.cookie("jwtToken", jwtToken, cookieOPtions)

    // 10. send response 

    return res.status(200).json({
        status: true,
        message : "User logged in successfully",
    })
    } catch (error) {
        console.error("User login failed", error);
        return res.status(500).join({
            status:false,
            message: "User login failed",
        })
    }
}



export { registerUser, verifyUser , login };
