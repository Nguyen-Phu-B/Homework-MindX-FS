import express from "express";
import { authMiddleware } from "../middleware/auth.middleware.js";
import authRouter from "./auth.route.js";
import inventoryRouter from "./inventory.route.js";
import orderRouter from "./order.route.js";

const router = express.Router();

const routerConfig = () => {
    router.use("/order", authMiddleware, orderRouter);
    router.use("/auth", authRouter);
    router.use("/inventory", inventoryRouter);

    return router;
};

export default routerConfig;
