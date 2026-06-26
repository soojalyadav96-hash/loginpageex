const express = require("express")
const {register,loginUser,getProfile} = require("../controllers/userControllers")
const checkRequest = require("../middleware/authMiddleware")
const router = express.Router()

router.post("/register",register)

//router.get("/getUsers",getUsers)

router.post("/login",loginUser)

router.get("/profile",checkRequest,getProfile)


module.exports = router

