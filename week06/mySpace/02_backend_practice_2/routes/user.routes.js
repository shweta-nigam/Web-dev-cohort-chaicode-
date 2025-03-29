import express from "express"
import { registerUser, verifyUser} from "../controller/user.controller.js"   // .js  important to write it 


const router = express.Router()

router.post("/register", registerUser)
router.get("verify/:token", verifyUser)           // token to controller
router.post("/login", login)


export default router


// things need to do :-
// user profile route
// logout
// forgot password 
// reset password 