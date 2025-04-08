import express from "express"
import { registerUser, verifyUser , login, getProfile, logout  } from "../controllers/user.controller.js";
import isLoggedIn from "../middlewares/is.LoggedIn.middleware.js";

const router = express.Router()
router.post("/register", registerUser)
router.get("/verify/:token", verifyUser )
router.post("/login", login)
router.post("/profile", isLoggedIn, getProfile)
router.post("/logout",logout)

export default router;