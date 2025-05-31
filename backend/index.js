let dotenv=require("dotenv")
dotenv.config()
const cookieParser = require('cookie-parser');
let express=require("express")
let cors=require("cors")
let app=express()
let userRoute=require("./src/Routes/userRoute")
let db=require("./src/Database/db")
let layerRoute=require("./src/Routes/layerRoute")

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cookieParser())
app.use(cors(
    {
        origin:"http://localhost:5173",
        credentials:true,
        methods:["POST","GET"]
    }
))

app.use("/api/user",userRoute)
app.use("/api/lawyer",layerRoute)

app.get("/",(req,res)=>{
    res.send("hey")
})

const port =process.env.PORT
app.listen(port,()=>{
    console.log(`server running on:${port}`)
})