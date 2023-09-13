import jwt from "jsonwebtoken";

export const authMiddleware = (req, res, next) => {
    const token = req.headers["x-access-token"];

    if (!token) {
        return res.status(400).json({
            message: "You need to login",
        });
    }

    try {
        const decoded = jwt.verify(token, process.env.SECRET_KEY);

        req.user = decoded;

        next();
    } catch (err) {
        if (err instanceof jwt.TokenExpiredError) {
            return res.status(403).json({
                message: "Token has expired",
            });
        }

        return res.status(401).json({
            message: "Invalid token",
        });
    }
};
