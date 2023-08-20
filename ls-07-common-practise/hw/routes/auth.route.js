import express from "express";
import UserModel from "../model/user.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { authMDW } from "../middlewares/auth.mdw.js";

const router = express.Router();

router.get("/", (req, res) => {
    res.send("SSS");
});

router.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({
                message: "Missing requied keys",
            });
        }

        const existingUser = await UserModel.findOne({ email });

        if (!existingUser) {
            return res.status(401).json({
                message: "Invalid credentials",
            });
        }

        const isMatchPassword = await bcrypt.compare(password, existingUser.password);

        if (!isMatchPassword) {
            return res.status(401).json({
                message: "Invalid credentials",
            });
        }

        const jwtPayload = {
            email: existingUser.email,
            id: existingUser.id,
            username: existingUser.username,
        };

        const token = jwt.sign(jwtPayload, process.env.SECRET_KEY, {
            expiresIn: "1m",
        });

        return res.status(200).json({
            accessToken: token,
            message: "Login successfully",
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: error,
        });
    }
});

router.post("/register", async (req, res) => {
    const { email, password, username } = req.body;

    try {
        if (!email || !password || !username) {
            return res.status(400).json({
                message: "Missing reqiored keys",
            });
        }

        const existingUser = await UserModel.findOne({ email });

        if (existingUser) {
            return res.json({
                message: "User has already exist",
            });
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = new UserModel({
            email,
            username,
            password: hashedPassword,
        });

        await newUser.save();

        res.status(201).json({
            message: "Register new user successfully",
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: error,
        });
    }
});

router.get("/me", authMDW, async (req, res) => {
    const { id } = req.users;
    const currentUser = await UserModel.findById(id).select("-password");
    res.json({
        userInfo: currentUser,
    });
});

export default router;
