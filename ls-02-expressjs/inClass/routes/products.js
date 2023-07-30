import { Router } from "express";

const routerProducts = Router();

routerProducts.get("/", (req, res) => {
    console.log("get all products");
});

export default routerProducts;
