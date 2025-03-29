import User from "../model/User.model.js";
import crypto from "crypto"; // no need to extra download to use it.   // generates random-bites
import nodemailer from "nodemailer";
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"

const registerUser = async (req, res) => {
  res.send("registered");
  //   console.log(`request: ${req.body} , response: ${res}`);
  // making user authorization logic:-  (this is what we call algorithm)

  //get data
  //validate
  //check if user already exists
  //create a user in database
  //create a verification token
  //save token/opt in database
  //send token as email to user
  //send success status to user

  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    return res.status(400).json({
      message: "All fields are required",
    });
  }

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({
        message: "User already exist",
      });
    }

    const user = await User.create({
      name,
      email,
      password,
    });

    console.log(user); // this user is model we have created in object format

    if (!user) {
      return res.status(400).json({
        message: "User not found",
      });
    }

    const token = randomBytes(32).toString("hex");
    console.log(token);
    user.verificationToken = token; // verificationToken ->  from our model

    await user.save(); // saving the user (token) object in database , it will take time so use await

    // sending email  ->   nodemailer -> mailtrap
    const transporter = nodemailer.createTransport({
      host: process.env.MAILTRAP_HOST,
      port: process.env.MAILTRAP_PORT,
      secure: false, // true for port 465, false for other ports
      auth: {
        user: process.env.MAILTRAP_USERNAME,
        pass: process.env.MAILTRAP_PASSWORD,
      },
    });

    const mailOption = {
      from: process.env.MAILTRAP_SENDEREMAIL, // sender address
      to: user.email, // list of receivers              // not "User" because it is representing our docs , and "user"  -> is the value out of the the docs.
      subject: "Verify your email",
      text: `Please click on the following link:
    ${process.env.BASE_URL}api/v1/users/verify/${token}`, // search more for this line
    };

    await transporter.sendMail(mailOption);

    res.status(201).json({
      message: "User registered successfully",
      success: true,
    });
  } catch (error) {
    res.status(400).json({
      message: "User not registered",
      error,
      success: false,
    });
  }
};
const verifyUser = async (req, res) => {
    //get token from url
    //validate
    //find user based on token
    //if not user
    //set isVerified field to true
    //remove verification token
    //save
    //return response
 
  const { token } = req.params;                  // token from user.router
  console.log(token);
  if (!token) {
    return res.status(400).json({
      message: "Invalid token",
    });
  }
  const user = await User.findOne({ verificationToken: token });            // verificationToken's value is token 

  if (!user) {
    return res.status(400).json({
      message: "Invalid token",
    });
  }

  user.isVerified = true;
  user.verificationToken = undefined           // also try null and search more

  await user.save()

}

const login = async (req, res) => {

    const {email, password } = req.body;

    if(!email || !password){
        return res.status(400).json({
            message:"All fields are required",
        })
    }

    try{
        const user = await User.findOne({email});
        if(!user){
            return res.status(400).json({
                message: "Invalid email or password",
            })
        }


          const isMatch = await bcrypt.compare(password, user.password)

          console.log(isMatch)

          if(!isMatch){
            return res.status(400).json({
                message:"Invalid email or password"
            });
          }

        const token = jwt.sign(
            {id: user._id, role: user.role},
            "token secret key",{  // this is the key kept in .env   to access token
                expiresIn: "24h",
            }
        )  
         const cookieOptions = {
            httpOnly : true,    // with this "true" , user cannot touch this cookie // cookie in control of backend only 
            secure:true , // cookies will be secured
            maxAge:  24 * 60 * 60 * 1000    // 24  hours    // For how long we need cookies 
         }
       res.cookie("test",token, cookieOptions);
       
       res.status(200).json({
        success:true,
        message: "Login Successfully",
        token,
        user: {
            id: user._id,
            name:user.name,
            role:user.role,
        }          // can send whatever data you want
       })

    } catch(error){
        res.status(400).json({
            message: "User not registered",
            error,
            success: false
        });
    }

}



export { registerUser, verifyUser, login };
