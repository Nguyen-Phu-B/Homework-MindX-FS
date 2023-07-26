import express from "express";
import data from "./data/post.js";

const app = express();
const port = 3000;

const posts = data;

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.get("/products", (req, res) => {
    res.json(posts);
});

app.get("/products/search", (req, res) => {
    const data = posts.filter((post) => post.name.includes(req.query.val_search));
    // console.log(val_search);
    if (data) {
        return res.json(data);
    }
    res.json({
        code: 404,
        mess: "post not found",
    });
});

app.post("/products/create", (req, res) => {
    const data = req.body;
    posts.push({
        id: 999,
        ...data,
    });

    res.json({
        code: 200,
        message: "success",
    });
});

app.get("/products/:productId", (req, res) => {
    const data = posts.find((post) => post.id === +req.params.productId);

    if (data) {
        return res.json(data);
    }

    res.json({
        code: 404,
        mess: "post not found",
    });
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
