import jwt from "jsonwebtoken";

const authMiddleware = (req, res, next) => {
    const token = req.headers["x-access-token"];

    if (!token) {
        return res.status(401).json({ mess: "Unauthorized" });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        next();
    } catch (error) {
        if (error instanceof jwt.TokenExpiredError) {
            return res.status(402).json({ mess: "Token is expired" });
        }

        return res.status(402).json({ mess: "Token is not valid" });
    }
};

export default authMiddleware;
