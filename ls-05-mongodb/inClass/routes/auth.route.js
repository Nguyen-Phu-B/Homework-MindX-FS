import express from "express";
import jwt from "jsonwebtoken";

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

router.post("/login", (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).json({ error: "Missing username or password" });
    }

    // console.log({ username, password });

    const existingUser = userMock.find((u) => u.username === username && u.password === password);

    if (!existingUser) {
        return res.status(401).json({ error: "Invalid username or password" });
    }

    const jwtPayload = {
        username: existingUser.username,
        id: existingUser.id,
        fullname: existingUser.fullname,
    };

    const token = jwt.sign(jwtPayload, process.env.SECRET_KEY, {
        expiresIn: "30s",
    });

    return res.status(200).json({ user: jwtPayload, acessToken: token });
});

export default router;
