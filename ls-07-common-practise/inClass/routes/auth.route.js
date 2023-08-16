import express from "express";
import jwt from "jsonwebtoken";
import UserModel from "../model/user.model.js";
import bcrypt from "bcrypt";
import { authMDW } from "../middlewares/auth.mdw.js";

const router = express.Router();

const userMock = [
    {
        id: 1,
        username: "adds",
        password: "adds@123",
        fullname: "addsess",
    },
    {
        id: 2,
        username: "xse",
        password: "xse@123",
        fullname: "xsefs",
    },
    {
        id: 3,
        username: "lass",
        password: "lass@123",
        fullname: "lass12",
    },
    {
        id: 4,
        username: "asxs",
        password: "asxs@123",
        fullname: "asxsfas",
    },
];

router.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ message: "Missing key" });
        }

        const existingUser = await UserModel.findOne({ email });

        if (!existingUser) {
            return res.status(401).json({ message: "Invalid crendentials" });
        }

        const isMatchPassword = await bcrypt.compare(password, existingUser.password);

        if (!isMatchPassword) {
            return res.status(401).json({ message: "Invalid credentials!" });
        }

        const jwtPayload = {
            email: existingUser.email,
            id: existingUser.id,
            fullname: existingUser.fullname,
        };

        const token = jwt.sign(jwtPayload, process.env.SECRET_KEY, {
            expiresIn: "1m",
        });

        return res.status(200).json({ accessToken: token, message: "Login successfully" });
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
});

router.post("/register", async (req, res) => {
    const { email, fullname, password } = req.body;

    try {
        // validate
        if (!email || !fullname || !password) {
            return res.status(400).json({
                message: "Missing reqiored keys",
            });
        }
        // check user exist
        const existingUser = await UserModel.findOne({ email });

        if (existingUser) {
            return res.json({
                message: "User has already exist",
            });
        }

        // create new user , insert into DB
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        const newUser = new UserModel({
            email,
            fullname,
            password: hashedPassword,
        });

        // Insert new record into collection
        await newUser.save();

        // responese to client
        res.status(201).json({
            message: "Resgister new user successfilly",
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
