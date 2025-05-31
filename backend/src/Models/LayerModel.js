const mongoose = require("mongoose");


const userSchema = mongoose.Schema({
    lawerType:{
        type:String,
        required:true
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        unique: true,
        trim: true,
        lowercase: true,
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    password: {
        type: String,
        required: [true, "Password is required"],
        minLength: [6, "Password must be at least 6 characters"]
    },
    firstName: {
        type: String,
        trim: true
    },
    lastName: {
        type: String,
        trim: true
    },
    profilePicture: {
        type: String,
        default: "default-avatar.png"
    },
    phone_No:{
        type:Number,
        required:true,
        maxLength:[10,"greater than 10 digit "]
    },
    shortDescription:{
        type:String,
        required: true,
        maxLength:[20,"short description is too long"]
    },
    longDescription:{
        type:String,
        required:true,
    },
    city:{
        type:String,
        required:true
    },
    area:{
        type:String,
        required:true
    },
    media_FileName:{
        type:String,
    },
}, {
    timestamps: true
});




const lawer = mongoose.model('lawer', userSchema);

module.exports = lawer;