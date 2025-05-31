const mongoose=require("mongoose")
const mongodb=mongoose.connect(`${process.env.MONGODB_URL}/${process.env.DB_NAME}`)
.then(()=>{
    console.log("Database is connected")
})
.catch((error)=>{
    console.log(`Error:${error.message}`)
})
module.exports=mongodb