// const express = require("express");

import express from "express";
import router from "./routes/index.js";

const app = express();
const port = 3000;

app.use(express.json());

app.use("/api", router);

// app.get("/home/:id", (req, res) => {
//     console.log(JSON.stringify(req.params));
//     console.log(JSON.stringify(req.body));
//     res.end(`
//         <h1>Xin chao</h1>
//         <p>day la method ${req.method} tai url ${req.url}</p>
//         `);
// });

// app.post("/login", (req, res) => {
//     console.log(req.body);
// });

// app.get("/products", (req, res, next) => {
//     // console.log("req.query:", req.query);
//     // res.end("xinchao");
//     console.log("xinchao");
//     next();
// });
// app.get("/products", (req, res) => {
//     // res.end("hello");
//     console.log("hells");
// });
// // app.get('/url', funcA, funcB)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
