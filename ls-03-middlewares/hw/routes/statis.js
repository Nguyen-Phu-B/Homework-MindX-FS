import express from "express";
import dataStatis from "../utils/dataState.js";

const router = express.Router();

router.get("/", (req, res) => {
    res.json(dataStatis);
});

export default router;
