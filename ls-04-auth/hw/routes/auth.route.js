import express from "express";
import dataUsers from "../utils/dataUsers.js";
import jwt from "jsonwebtoken";

const router = express.Router();

router.post("/login", (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).json({ error: "Missing username or password" });
    }

    const existingUser = dataUsers.find((u) => u.username === username && u.apiKey === password);

    if (!existingUser) {
        return res.status(401).json({ error: "Invalid credentials" });
    }

    const jwtPayload = {
        id: existingUser.id,
        username: existingUser.username,
    };

    const token = jwt.sign(jwtPayload, process.env.JWT_SECRET, {
        expiresIn: "45s",
    });

    return res.status(200).json({ user: existingUser, token: token });
});

export default router;
