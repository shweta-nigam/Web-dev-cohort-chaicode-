import { asyncHandler } from "../utils/async-handler.js"

const registerUser = asyncHandler(async(req,res)=>{
    const { email, password, username, role } = req.body;
})

// validation 
registrationValidation(body)

export { registerUser}