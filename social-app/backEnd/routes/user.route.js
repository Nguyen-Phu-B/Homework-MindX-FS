import express from "express";
import uploadFile from "../configs/multer.config.js";
const router = express.Router();

router.post("/", (req, res) => {
    res.send("API users");
});

router.post("/upload-avatar", async (req, res) => {
    const file = req.file;
    console.log("/ ~ file: users. route. js:11 ~ router.post ~ file:", file);
    return res.json({ message: "Upload avatar successfully" });
});

export default router;
