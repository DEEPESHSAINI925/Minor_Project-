let express=require("express")
const app=express.Router()
const { Login, Register, Profile } = require("../Controllers/usercontroller")
const { userMiddleware } = require("../Middleware/userMiddleware")
const upload = require("../Multer/multer")

app.post("/login",Login)
app.post("/register",Register)

app.get("/profile",userMiddleware,Profile)
module.exports=app