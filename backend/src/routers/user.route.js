
import {Router} from "express"
import { 
    loginUser, 
    registerUser 
} from "../controllers/user.controller.js"


const userRoute = Router()


userRoute.route("/signup").post(registerUser)
userRoute.route("/login").post(loginUser)


export {userRoute}
