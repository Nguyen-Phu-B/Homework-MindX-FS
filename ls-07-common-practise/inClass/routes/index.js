import express from "express";

import postsRouter from "./posts.js";
import usersRouter from "./users.js";
import authRouter from "./auth.route.js";

const router = express.Router();

router.use("/posts", postsRouter);
router.use("/users", usersRouter);
router.use("/auth", authRouter);

export default router;
