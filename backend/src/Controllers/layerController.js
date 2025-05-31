const layerModel = require("../Models/LayerModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const Register = async (req, res) => {
    try {
       
        const {
            firstName,
            lastName,
            email,
            password,
            profilePicture,
            area,
            city,
            longDescription,
            shortDescription,
            phone_No,
            lawerType
        } = req.body;
console.log(req.body)
        // Validate required fields
        if (!firstName || !password || !email || !lastName || !area || !city || 
            !longDescription || !shortDescription || !phone_No || !lawerType) {
            return res.status(400).json({
                msg: "All fields are required"
            });
        }

        // Check if email exists
        const emailExists = await layerModel.findOne({ email });
        if (emailExists) {
            return res.status(409).json({
                msg: "Email already exists"
            });
        }

        // Hash password
        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(password, salt);

        // Create lawyer
        const lawyer = await layerModel.create({
            profilePicture,
            lastName,
            firstName,
            password: hashPassword,
            email,
            area,
            city:city.toLowerCase(),
            longDescription,
            shortDescription,
            phone_No,
            lawerType: lawerType.toLowerCase()
        });

        // Generate token
        const token = jwt.sign(
            { userId: lawyer._id, email: lawyer.email },
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
            msg: "Lawyer account created successfully",
            token,
            lawyer: {
                id: lawyer._id,
                firstName: lawyer.firstName,
                lastName: lawyer.lastName,
                email: lawyer.email,
                lawyerType: lawyer.LayerType
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
        const { email, password } = req.body.formData;

        // Validate required fields
        if (!email || !password) {
            return res.status(400).json({
                msg: "Email and password are required"
            });
        }

        // Find lawyer
        const lawyer = await layerModel.findOne({ email });
        if (!lawyer) {
            return res.status(401).json({
                msg: "Invalid credentials"
            });
        }

        // Verify password
        const isPasswordValid = await bcrypt.compare(password, lawyer.password);
        if (!isPasswordValid) {
            return res.status(401).json({
                msg: "Invalid credentials"
            });
        }

        // Generate token
        const token = jwt.sign(
            { userId: lawyer._id, email: lawyer.email },
            "Deepesh222",
            { expiresIn: '24h' }
        );

        // Set cookie
        res.cookie('token', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'strict',
            maxAge: 24 * 60 * 60 * 1000
        });

        return res.status(200).json({
            msg: "Login successful",
            token,
            lawyer: {
                id: lawyer._id,
                firstName: lawyer.firstName,
                lastName: lawyer.lastName,
                email: lawyer.email,
                lawyerType: lawyer.LayerType
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
const Search = async (req, res) => {
    try {
        let { city,lawyerType} = req.body;
        console.log(req.body.city)
         console.log(req.body.lawyerType)
if(!city){
    return res.status(401).json({
        msg:"city is not available"
    })
}
if(!lawyerType){
    return res.status(401).json({
        msg:"lawyer Type is not available"
    })
}
        const lawyers = await layerModel.find({city,lawerType:lawyerType})
            .select('-password') // Exclude password
            .sort({ createdAt: -1 });
        
            console.log(lawyers);
            
        return res.status(201).json({
            success: true,
            data: {
                lawyers
            }
        });

    } catch (error) {
        console.error("Search error:", error);
        return res.status(500).json({
            success: false,
            msg: "Error searching lawyers",
            error: error.message
        });
    }
};

const SearchAll = async (req, res) => {
    try {
        console.log("hello")
        const lawyers = await layerModel.find()
            .select('-password') // Exclude password
            .sort({ createdAt: -1 });
        
            console.log(lawyers)
        return res.status(201).json({
            success: true,
            data: {
                lawyers
            }
        });

    } catch (error) {
        console.error("Search error:", error);
        return res.status(500).json({
            success: false,
            msg: "Error searching lawyers",
            error: error.message
        });
    }
};

module.exports = { Login, Register,Search,SearchAll };