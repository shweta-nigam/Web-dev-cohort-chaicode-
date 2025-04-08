import { Router } from "express";

import { registerUser } from "../controllers/auth.controllers"; 

import { validate} from "../middleware/validator.middleware.js"

import userRegistrationValidator from "../validators/index.js"

const router = Router();

router.route("/register")
.post(userRegistrationValidator(), validate, registerUser )   //  userRegistrationValidator() ?? 