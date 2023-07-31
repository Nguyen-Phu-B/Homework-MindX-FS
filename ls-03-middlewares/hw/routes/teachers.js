import express from "express";
import dataUser from "../utils/dataUsers.js";

const router = express.Router();

router.get("/", (req, res) => {
    res.json({ mess: "Teacher" });
});

export default router;
