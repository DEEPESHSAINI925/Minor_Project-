const userModel = require("../Models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const Register = async (req, res) => {
    try {
        let { firstName, lastName, email, password,profilePicture } = req.body;
        // Validate required fields
        if (!firstName || !password || !email || !lastName) {
            return res.status(400).json({
                msg: "All fields are required"
            });
        }

        // Check if email exists
        const emailExists = await userModel.findOne({ email });
        if (emailExists) {
            return res.status(409).json({
                msg: "Email already exists"
            });
        }

        // Hash password
        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(password, salt);

        // Create user
        const user = await userModel.create({
            firstName,
            lastName,
            email,
            password: hashPassword,
            profilePicture:profilePicture || "https://res.cloudinary.com/dz1qj3x8h/image/upload/v1735688850/Layer-2_1_xv4k6a.png",
        });

        // Generate token
        const token = jwt.sign(
            { userId: user._id, email: user.email },
            "Deepesh222",
            { expiresIn: '24h' }
        );

        // Set cookie
        res.cookie('token', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'strict',
            maxAge: 24 * 60 * 60 * 1000 // 24 hours
        });

        return res.status(200).json({
            msg: "User created successfully",
            token,
            user: {
                id: user._id,
                firstName: user.firstName,
                lastName: user.lastName,
                email: user.email
            }
        });

    } catch (error) {
        console.error("Register error:", error);
        return res.status(500).json({
            msg: "Internal Server Error",
            error: error.message
        });
    }
};

const Login = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Validate required fields
        if (!email || !password) {
            return res.status(400).json({
                msg: "Email and password are required"
            });
        }

        // Find user
        const user = await userModel.findOne({ email });
        if (!user) {
            return res.status(401).json({
                msg: "Invalid credentials"
            });
        }

        // Verify password
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).json({
                msg: "Invalid credentials"
            });
        }

        // Generate token
        const token = jwt.sign(
            { userId: user._id, email: user.email },
            "Deepesh222",
            { expiresIn: '24h' }
        );

        // Set cookie
        res.cookie('token', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'strict',
            maxAge: 24 * 60 * 60 * 1000 ,
            path:"/"// 24 hours
        });

        return res.status(200).json({
            msg: "Login successful",
            token,
            user: {
                id: user._id,
                firstName: user.firstName,
                lastName: user.lastName,
                email: user.email
            }
        });

    } catch (error) {
        console.error("Login error:", error);
        return res.status(500).json({
            msg: "Internal Server Error",
            error: error.message
        });
    }
};
const Profile=async (req,res)=>{
    try {
        const user=req.user
        console.log(user);
        const exitUser=await userModel.findById({_id:user._id}).select("-password")
        if(!exitUser){
            return res.status(401).json({
                msg:"user not exit"
            })
        }
        return res.status(201).json({
                user:exitUser
            })
        
    } catch (error) {
        res.status(500).json({
            msg:"Internal sever error ",
            error: error.message
        })
    }
}

module.exports = { Login, Register, Profile };