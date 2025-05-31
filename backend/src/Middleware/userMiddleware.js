const jwt = require("jsonwebtoken");

const userMiddleware = (req, res, next) => {
    const token = req.cookies?.token || req.headers?.authorization?.split(" ")[1]; // Check for token in cookies or headers 
    if (!token) {
        return res.status(401).json({
            msg: "User not logged in",
        });
    }

    try {
        const user = jwt.verify(token,"Deepesh222"); // Use jwt.verify instead of jwt.decode for verification
        req.user = user;
        next();
    } catch (error) {
        return res.status(401).json({
            msg: "Token is not verified",
        });
    }
};

module.exports = { userMiddleware };