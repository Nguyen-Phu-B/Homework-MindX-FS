import express from "express";
import OrderController from "../controller/order.controller.js";

const orderRouter = express.Router();

orderRouter.post("/", OrderController.createdOrder);

export default orderRouter;
