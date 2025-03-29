// always import express in router
import express from "express"
import {registerUser, verifyUser , login } from "../controllers/user.controller.js"

const router = express.Router();

router.post("/register", registerUser )
router.get("/verify/:token", verifyUser )              // :token from ?
router.post("/login", login)

export default router;