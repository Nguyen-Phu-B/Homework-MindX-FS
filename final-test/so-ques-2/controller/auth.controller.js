import jwt from "jsonwebtoken";
import asyncHandler from "express-async-handler";
import UserModel from "../models/user.model.js";
import bcrypt from "bcrypt";

const login = asyncHandler(async (req, res) => {
    const { userName, password } = req.body;
    const existingUser = await UserModel.findOne({ userName });

    if (!existingUser) {
        res.status(401);
        throw new Error("Invalid information");
    }

    const isMatchPassword = await bcrypt.compare(password, existingUser.password);

    if (!isMatchPassword) {
        res.status(401);
        throw new Error("Error Password or Username");
    }

    const jwtPayload = {
        userName: existingUser.userName,
        id: existingUser.id,
    };

    const token = jwt.sign(jwtPayload, process.env.SECRET_KEY, {
        expiresIn: "3h",
    });

    res.json({
        message: "Login Access",
        accessToken: token,
    });
});

const register = asyncHandler(async (req, res) => {
    const { userName, password } = req.body;
    const existingUser = await UserModel.findOne({ userName });

    if (existingUser) {
        res.status(400);
        throw new Error("User Existed");
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new UserModel({
        userName,
        password: hashedPassword,
    });

    await newUser.save();

    res.status(201).json({
        message: "User has successfully registered",
    });
});

const getMe = async (req, res) => {
    const { id } = req.user;

    const currentUser = await UserModel.findById(id).select("-password");

    if (!currentUser) {
        res.status(401);
        throw new Error("Unauthorized user");
    }

    res.json({
        userInfo: currentUser,
    });
};

const AuthController = {
    login,
    register,
    getMe,
};

export default AuthController;
