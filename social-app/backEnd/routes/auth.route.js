import express from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import UserModel from "../models/user.model.js";
import { authMDW } from "../middlewares/auth.mdw.js";

const router = express.Router();

router.get("/", (req, res) => {
    res.send({ message: "Auth Connect" });
});

router.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(401).json({ message: "Missing requied key" });
        }

        const existingUser = await UserModel.findOne({ email });

        if (!existingUser) {
            return res.status(401).json({ message: "Invalid credentials" });
        }

        const isMatchPassword = await bcrypt.compare(password, existingUser.password);

        if (!isMatchPassword) {
            return res.status(401).json({ message: "User or Password is not correct" });
        }

        const jwtPayload = {
            email: existingUser.email,
            id: existingUser.id,
            fullname: existingUser.fullname,
        };

        const token = jwt.sign(jwtPayload, process.env.SECRET_KEY, {
            expiresIn: "1h",
        });

        return res.status(201).json({
            token: token,
            message: "Login Successfully",
        });
    } catch (error) {
        console.log("🚀 ~ file: auth.route.js:15 ~ router.login ~ error:", error);
        return res.status(501).send(error);
    }
});

router.post("/register", async (req, res) => {
    try {
        const { fullname, email, password } = req.body;

        if (!fullname || !email || !password) {
            return res.status(401).json({ message: "Missing Requied Key" });
        }

        const existingUser = await UserModel.findOne({ email });

        if (existingUser) {
            return res.status(401).json({ message: "User has already exist" });
        }

        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(password, salt);

        const newUser = new UserModel({
            password: hashPassword,
            email,
            fullname,
        });

        await newUser.save();

        return res.status(201).json({ message: "Register new user successfully" });
    } catch (error) {
        console.log("🚀 ~ file: auth.route.js:34 ~ router.register ~ error:", error);
        res.status(501).send(error);
    }
});

router.get("/me", authMDW, async (req, res) => {
    const { id } = req.users;
    const currentUser = await UserModel.findById(id).select("-password");
    return res.status(201).json({ userInfo: currentUser });
});

export default router;
