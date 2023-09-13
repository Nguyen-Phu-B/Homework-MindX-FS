import asyncHandler from "express-async-handler";
import OrderModel from "../models/order.model.js";
import UserModel from "../models/user.model.js";

const createdOrder = asyncHandler(async (req, res) => {
    const { item, price, quantity } = req.body;
    const userId = req.user.id;
    const currentUser = await UserModel.findById(userId);

    if (!currentUser) {
        res.status = 400;
        throw new Error("User not found");
    }

    const newOrder = new OrderModel({
        item,
        price,
        quantity,
        user: userId,
    });

    await newOrder.save();

    res.status(201).json({
        message: "Order Accessfully",
    });
});
const OrderController = {
    createdOrder,
};
export default OrderController;
